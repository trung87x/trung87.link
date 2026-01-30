"use client";

/*
  Implementation Plan & Requirements:
  -----------------------------------
  1.  **Goal**: Create a "Cyberduck-like" web interface for Cloudflare R2.
  2.  **Features**:
      -   **Connect**: Input Access Key, Secret Key, Endpoint, Bucket, Public Domain (for previews).
      -   **Browse**: List files/folders (Virtual folders via "/" delimiter).
      -   **Upload**: Bulk upload ~200 files with concurrency control (limit 5).
      -   **Manage**: Create folders, Delete files/folders (Recursive delete).
      -   **UI**: Image previews (via Public Domain), Breadcrumbs, Progress bars.
  3.  **Technical Constraints**:
      -   Client-side `@aws-sdk/client-s3`.
      -   **CORS**: Must be configured on R2 bucket.
      -   **Security**: Credentials in `sessionStorage` only.
      -   **Concurrency**: Use `p-limit`.
*/

import React, { useState, useEffect, useCallback } from "react";
import {
  S3Client,
  ListObjectsV2Command,
  PutObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
} from "@aws-sdk/client-s3";
import pLimit from "p-limit";
import {
  FolderIcon,
  ArrowUpTrayIcon,
  TrashIcon,
  PlusIcon,
  PhotoIcon,
  ArrowPathIcon,
  ExclamationCircleIcon,
  ArrowLeftIcon,
  LinkIcon,
  DocumentIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Button = ({ children, className, isLoading, ...props }) => (
  <button
    className={cn(
      "flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50",
      className,
    )}
    disabled={isLoading}
    {...props}
  >
    {isLoading && <ArrowPathIcon className="h-4 w-4 animate-spin" />}
    {children}
  </button>
);

const Input = ({ label, ...props }) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <input
      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      {...props}
    />
  </div>
);

// --- Main Page ---

export default function R2ManagerPage() {
  // State: Auth
  const [credentials, setCredentials] = useState(null);

  // State: Browser
  const [client, setClient] = useState(null);
  const [currentPath, setCurrentPath] = useState("");
  const [items, setItems] = useState([]); // { type: 'file' | 'folder', name, size, modified, key }
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // State: Upload
  const [uploadQueue, setUploadQueue] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);

  // Hydration Fix
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Init from Session Storage
  useEffect(() => {
    const saved = sessionStorage.getItem("r2_credentials");
    if (saved) {
      const creds = JSON.parse(saved);
      setCredentials(creds);
      initClient(creds);
    }
  }, []);

  const initClient = (creds) => {
    try {
      const s3 = new S3Client({
        region: "auto",
        endpoint: creds.endpoint,
        credentials: {
          accessKeyId: creds.accessKeyId,
          secretAccessKey: creds.secretAccessKey,
        },
        requestChecksumCalculation: "WHEN_REQUIRED",
        responseChecksumValidation: "WHEN_REQUIRED",
      });
      setClient(s3);
    } catch (err) {
      console.error(err);
      setError("Failed to initialize S3 Client: " + err.message);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const creds = Object.fromEntries(formData);

    if (
      !creds.endpoint ||
      !creds.accessKeyId ||
      !creds.secretAccessKey ||
      !creds.bucket
    ) {
      setError("Please fill in all required fields");
      return;
    }

    // Trim whitespace from all fields
    const cleanedCreds = {
      endpoint: creds.endpoint.trim().replace(/\/$/, ""),
      accessKeyId: creds.accessKeyId.trim(),
      secretAccessKey: creds.secretAccessKey.trim(),
      bucket: creds.bucket.trim(),
      publicDomain: creds.publicDomain
        ? creds.publicDomain.trim().replace(/\/$/, "")
        : "",
    };

    setCredentials(cleanedCreds);
    sessionStorage.setItem("r2_credentials", JSON.stringify(cleanedCreds));
    initClient(cleanedCreds);
  };

  const handleLogout = () => {
    setCredentials(null);
    setClient(null);
    sessionStorage.removeItem("r2_credentials");
    setItems([]);
    setCurrentPath("");
  };

  // Fetch Items
  const fetchItems = useCallback(async () => {
    if (!client || !credentials) return;
    setIsLoading(true);
    setError(null);
    setItems([]);

    try {
      const command = new ListObjectsV2Command({
        Bucket: credentials.bucket,
        Delimiter: "/",
        Prefix: currentPath,
      });

      const response = await client.send(command);

      const folders = (response.CommonPrefixes || []).map((p) => ({
        type: "folder",
        name: p.Prefix.slice(currentPath.length, -1),
        key: p.Prefix,
      }));

      const files = (response.Contents || [])
        .filter((f) => f.Key !== currentPath)
        .map((f) => ({
          type: "file",
          name: f.Key.slice(currentPath.length),
          key: f.Key,
          size: f.Size,
          lastModified: f.LastModified,
        }));

      setItems([...folders, ...files]);
    } catch (err) {
      console.error(err);
      setError(
        `Failed to list objects: ${err.message}. Check CORS setup or Credentials.`,
      );
    } finally {
      setIsLoading(false);
    }
  }, [client, credentials, currentPath]);

  useEffect(() => {
    if (client) {
      fetchItems();
    }
  }, [client, currentPath, fetchItems]);

  // Actions
  const handleCreateFolder = async () => {
    const folderName = prompt("Enter folder name:");
    if (!folderName) return;

    const cleanName = folderName.trim().replace(/\//g, "-");
    const newKey = `${currentPath}${cleanName}/`;

    try {
      await client.send(
        new PutObjectCommand({
          Bucket: credentials.bucket,
          Key: newKey,
          Body: "",
        }),
      );
      fetchItems();
    } catch (err) {
      setError("Failed to create folder: " + err.message);
    }
  };

  const handleDelete = async (item) => {
    if (!confirm(`Are you sure you want to delete ${item.name}?`)) return;

    try {
      if (item.type === "file") {
        await client.send(
          new DeleteObjectCommand({
            Bucket: credentials.bucket,
            Key: item.key,
          }),
        );
      } else {
        // Recursive Delete
        let continuationToken = null;
        do {
          const listCmd = new ListObjectsV2Command({
            Bucket: credentials.bucket,
            Prefix: item.key,
            ContinuationToken: continuationToken,
          });
          const listRes = await client.send(listCmd);
          if (listRes.Contents && listRes.Contents.length > 0) {
            await client.send(
              new DeleteObjectsCommand({
                Bucket: credentials.bucket,
                Delete: {
                  Objects: listRes.Contents.map((obj) => ({ Key: obj.Key })),
                },
              }),
            );
          }
          continuationToken = listRes.NextContinuationToken;
        } while (continuationToken);
      }
      fetchItems();
    } catch (err) {
      setError("Failed to delete item: " + err.message);
    }
  };

  const copyUrl = (key) => {
    if (!credentials.publicDomain) {
      alert("Please set a Public Domain in login to usage this");
      return;
    }
    const url = `${credentials.publicDomain.replace(/\/$/, "")}/${key}`;
    navigator.clipboard.writeText(url);
    alert("Copied: " + url);
  };

  // Helper: Recursive Scan for DnD
  const scanFiles = async (entry) => {
    if (entry.isFile) {
      return new Promise((resolve) => {
        entry.file((file) => {
          resolve([{ file, path: entry.fullPath.substring(1) }]); // remove leading /
        });
      });
    } else if (entry.isDirectory) {
      const reader = entry.createReader();
      // readEntries might need to be called multiple times for large dirs, simplified here
      const entries = await new Promise((resolve) => {
        reader.readEntries(resolve);
      });
      const results = await Promise.all(entries.map(scanFiles));
      return results.flat();
    }
    return [];
  };

  // Upload Logic
  const handleUploadFiles = async (inputFiles) => {
    if (!inputFiles || inputFiles.length === 0) return;

    // Normalize input to { file, key }
    let itemsToProcess = [];

    // Case 1: Custom array from DnD scanner [{ file, path }]
    if (Array.isArray(inputFiles) && inputFiles[0]?.path) {
      itemsToProcess = inputFiles.map(({ file, path }) => ({
        file,
        key: currentPath + path,
      }));
    }
    // Case 2: Standard FileList (Input or simple DnD fallback)
    else {
      itemsToProcess = Array.from(inputFiles).map((f) => {
        // webkitRelativePath is populated if uploaded via directory input
        const relPath = f.webkitRelativePath || f.name;
        return {
          file: f,
          key: currentPath + relPath,
        };
      });
    }

    const newQueueItems = itemsToProcess.map(({ file, key }) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      status: "pending",
      progress: 0,
      key,
    }));

    setUploadQueue((prev) => [...newQueueItems, ...prev]);

    const limit = pLimit(5);

    const uploadPromises = newQueueItems.map((item) =>
      limit(async () => {
        updateQueueItem(item.id, { status: "uploading" });
        try {
          await client.send(
            new PutObjectCommand({
              Bucket: credentials.bucket,
              Key: item.key,
              Body: item.file,
              ContentType: item.file.type || "application/octet-stream",
              ContentLength: item.file.size, // FIX: Explicit size prevents chunked encoding issues
            }),
          );
          updateQueueItem(item.id, { status: "success", progress: 100 });
        } catch (err) {
          console.error(err);
          updateQueueItem(item.id, { status: "error", error: err.message });
        }
      }),
    );

    await Promise.all(uploadPromises);
    fetchItems();
  };

  const updateQueueItem = (id, updates) => {
    setUploadQueue((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item)),
    );
  };

  const onDrop = async (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const items = e.dataTransfer.items;
    if (items) {
      // Use DataTransferItem.webkitGetAsEntry to get FileSystemEntry
      const entries = Array.from(items)
        .map((item) => {
          // Basic check: item.kind must be 'file' (which includes directories in this context)
          if (item.kind !== "file") return null;
          return item.webkitGetAsEntry ? item.webkitGetAsEntry() : null;
        })
        .filter(Boolean);

      const results = await Promise.all(entries.map(scanFiles));
      handleUploadFiles(results.flat());
    } else if (e.dataTransfer.files) {
      // Fallback for browsers not supporting webkitGetAsEntry or simple usage
      handleUploadFiles(e.dataTransfer.files);
    }
  };

  const isImage = (name) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(name);

  // Render Login
  if (!credentials) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md space-y-4 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800"
        >
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              R2 Manager
            </h1>
            <p className="text-sm text-gray-500">
              Connect to your Cloudflare R2 Bucket
            </p>
          </div>
          <Input
            name="endpoint"
            label="R2 Endpoint URL"
            placeholder="https://<accountid>.r2.cloudflarestorage.com"
            required
          />
          <Input
            name="publicDomain"
            label="Public Domain (Optional)"
            placeholder="https://assets.trung87.link"
          />
          <Input name="accessKeyId" label="Access Key ID" required />
          <Input
            name="secretAccessKey"
            label="Secret Access Key"
            type="password"
            required
          />
          <Input name="bucket" label="Bucket Name" required />
          <div className="rounded-md bg-yellow-50 p-3 text-xs text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-200">
            Warning: Ensure CORS is allowed for{" "}
            <code>
              {typeof window !== "undefined"
                ? window.location.origin
                : "this domain"}
            </code>{" "}
            on your bucket.
          </div>
          <Button type="submit" className="w-full">
            Connect
          </Button>
        </form>
      </div>
    );
  }

  // Render Dashboard
  return (
    <div
      className="flex h-screen flex-col bg-gray-50 dark:bg-gray-900"
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragOver(true);
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={onDrop}
    >
      <header className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            R2 Manager
          </h1>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {credentials.bucket}
          </span>
        </div>
        <div className="flex gap-2">
          {/* File Upload */}
          <Button
            onClick={() => document.getElementById("fileInput").click()}
            className="bg-green-600 hover:bg-green-700"
          >
            <PlusIcon className="h-4 w-4" /> Assets
          </Button>
          <input
            type="file"
            id="fileInput"
            multiple
            className="hidden"
            onChange={(e) => handleUploadFiles(e.target.files)}
          />

          {/* Folder Upload */}
          <Button
            onClick={() => document.getElementById("folderInput").click()}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <FolderIcon className="h-4 w-4" /> Folder
          </Button>
          <input
            type="file"
            id="folderInput"
            webkitdirectory=""
            directory=""
            multiple
            className="hidden"
            onChange={(e) => handleUploadFiles(e.target.files)}
          />

          <Button
            variant="outline"
            onClick={handleLogout}
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200"
          >
            Disconnect
          </Button>
        </div>
      </header>

      <div className="flex items-center gap-2 border-b bg-gray-100 px-6 py-2 text-sm dark:border-gray-700 dark:bg-gray-800/50">
        <button
          onClick={() => {
            if (currentPath)
              setCurrentPath(
                currentPath.split("/").slice(0, -2).join("/") +
                  (currentPath.split("/").length > 2 ? "/" : ""),
              );
          }}
          disabled={!currentPath}
          className="rounded p-1 hover:bg-gray-200 disabled:opacity-30 dark:hover:bg-gray-700"
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </button>
        <span
          onClick={() => setCurrentPath("")}
          className="cursor-pointer font-bold hover:underline"
        >
          root
        </span>
        <span className="text-gray-400">/</span>
        {currentPath
          .split("/")
          .filter(Boolean)
          .map((part, i, arr) => (
            <React.Fragment key={i}>
              <span
                onClick={() =>
                  setCurrentPath(arr.slice(0, i + 1).join("/") + "/")
                }
                className="cursor-pointer hover:underline"
              >
                {part}
              </span>
              <span className="text-gray-400">/</span>
            </React.Fragment>
          ))}
        <div className="flex-1" />
        <button
          onClick={handleCreateFolder}
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          + New Folder
        </button>
        <button
          onClick={fetchItems}
          className="ml-4 text-gray-500 hover:text-gray-700"
        >
          <ArrowPathIcon
            className={cn("h-4 w-4", isLoading && "animate-spin")}
          />
        </button>
      </div>

      <div className="relative flex-1 overflow-auto p-6">
        {isDragOver && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-blue-500/20 backdrop-blur-sm">
            <div className="rounded-xl bg-white p-8 text-center shadow-2xl dark:bg-gray-800">
              <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-blue-500" />
              <p className="mt-2 text-lg font-bold dark:text-white">
                Drop files to upload
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/30">
            <div className="flex items-center gap-2 text-red-700 dark:text-red-200">
              <ExclamationCircleIcon className="h-5 w-5" />
              <span className="font-medium">{error}</span>
            </div>
            {(error.includes("Failed to fetch") ||
              error.includes("Network Error")) && (
              <div className="mt-3 rounded border border-red-200 bg-white p-3 text-sm text-gray-700 dark:border-red-800 dark:bg-gray-800 dark:text-gray-300">
                <p className="mb-2 font-bold">How to fix this (CORS Error):</p>
                <ol className="list-decimal space-y-1 pl-4">
                  <li>
                    Go to{" "}
                    <strong>
                      Cloudflare Dashboard &gt; R2 &gt; Settings &gt; CORS
                      Policy
                    </strong>
                    .
                  </li>
                  <li>
                    Click <strong>Add/Edit CORS Policy</strong> and paste the
                    JSON below:
                  </li>
                </ol>
                <pre className="mt-2 rounded bg-gray-100 p-2 font-mono text-xs text-wrap break-all select-all dark:bg-gray-900">
                  {`[
  {
    "AllowedOrigins": ["${
      mounted && typeof window !== "undefined" ? window.location.origin : ""
    }"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3000
  }
]`}
                </pre>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    Note: Ensure <code>AllowedOrigins</code> includes exactly{" "}
                    <strong>
                      {mounted && typeof window !== "undefined"
                        ? window.location.origin
                        : "current domain"}
                    </strong>{" "}
                    (no trailing slash).
                  </p>
                  <Button
                    onClick={() => {
                      const origin = window.location.origin;
                      const json = `[
  {
    "AllowedOrigins": ["${origin}"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3000
  }
]`;
                      navigator.clipboard.writeText(json);
                      alert("CORS JSON copied to clipboard!");
                    }}
                    className="h-8 px-2 text-xs"
                  >
                    Copy JSON
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="rounded-lg border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Size
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {items.length === 0 && !isLoading && (
                <tr>
                  <td colSpan={3} className="py-8 text-center text-gray-500">
                    Empty folder
                  </td>
                </tr>
              )}
              {items.map((item) => (
                <tr
                  key={item.key}
                  className="group hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {item.type === "folder" ? (
                        <FolderIcon className="h-6 w-6 text-yellow-500" />
                      ) : credentials.publicDomain && isImage(item.name) ? (
                        <img
                          src={`${credentials.publicDomain.replace(/\/$/, "")}/${item.key}`}
                          className="h-8 w-8 rounded border object-cover"
                          alt=""
                        />
                      ) : (
                        <DocumentIcon className="h-6 w-6 text-gray-400" />
                      )}
                      {item.type === "folder" ? (
                        <button
                          onClick={() => setCurrentPath(item.key)}
                          className="font-medium text-gray-900 hover:text-blue-600 hover:underline dark:text-white"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <span className="text-gray-900 dark:text-white">
                          {item.name}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {item.size ? (item.size / 1024).toFixed(1) + " KB" : "-"}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                      {item.type === "file" && credentials.publicDomain && (
                        <button
                          onClick={() => copyUrl(item.key)}
                          className="text-gray-500 hover:text-blue-600"
                          title="Copy URL"
                        >
                          <LinkIcon className="h-5 w-5" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(item)}
                        className="text-gray-500 hover:text-red-600"
                        title="Delete"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Queue Overlay (Bottom Right) */}
      {uploadQueue.length > 0 && (
        <div className="fixed right-4 bottom-4 w-80 overflow-hidden rounded-lg border bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between border-b bg-gray-50 px-4 py-2 dark:bg-gray-700">
            <h3 className="font-medium dark:text-white">
              Uploads (
              {
                uploadQueue.filter(
                  (i) => i.status === "pending" || i.status === "uploading",
                ).length
              }
              )
            </h3>
            <button
              onClick={() => setUploadQueue([])}
              className="text-xs text-blue-600 hover:underline dark:text-blue-400"
            >
              Clear All
            </button>
          </div>
          <div className="max-h-60 space-y-2 overflow-y-auto p-2">
            {uploadQueue.map((item) => (
              <div key={item.id} className="flex items-center gap-2 text-sm">
                {item.status === "uploading" && (
                  <ArrowPathIcon className="h-4 w-4 animate-spin text-blue-500" />
                )}
                {item.status === "success" && (
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                )}
                {item.status === "error" && (
                  <ExclamationCircleIcon className="h-4 w-4 text-red-500" />
                )}
                {item.status === "pending" && (
                  <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
                )}
                <span className="flex-1 truncate dark:text-gray-300">
                  {item.file.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
