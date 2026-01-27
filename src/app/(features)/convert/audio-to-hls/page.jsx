"use client";
import { useState, useRef, useEffect } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL, fetchFile } from "@ffmpeg/util";
import JSZip from "jszip";
import { Heading } from "@/ui/catalyst/heading";
import { Button } from "@/ui/catalyst/button";
import { ArrowUpTrayIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function AudioToHlsPage() {
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Ready");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const ffmpegRef = useRef(new FFmpeg());
  const messageRef = useRef(null);

  const load = async () => {
    setIsLoading(true);
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.10/dist/umd";
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on("log", ({ message }) => {
      if (messageRef.current) messageRef.current.innerHTML = message;
      console.log(message);
    });
    ffmpeg.on("progress", ({ progress }) => {
      setProgress(Math.round(progress * 100));
    });

    // Load ffmpeg.wasm
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm",
      ),
    });

    setLoaded(true);
    setIsLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const transcode = async () => {
    if (!file) return;
    setStatus("Processing... (This uses your CPU 🚀)");
    setDownloadUrl(null);
    setProgress(0);

    const ffmpeg = ffmpegRef.current;

    // Write file to memory
    await ffmpeg.writeFile("input.mp3", await fetchFile(file));

    // Create output directory
    await ffmpeg.createDir("output");

    // Run FFmpeg command
    // Convert to HLS with 10 second segments
    await ffmpeg.exec([
      "-i",
      "input.mp3",
      "-codec:a",
      "libmp3lame",
      "-b:a",
      "128k",
      "-map",
      "0",
      "-f",
      "segment",
      "-segment_time",
      "10",
      "-segment_list",
      "output/playlist.m3u8",
      "-segment_format",
      "mpegts",
      "output/segment_%03d.ts",
    ]);

    setStatus("Zipping files...");

    // Read output files
    const data = await ffmpeg.listDir("output");
    const zip = new JSZip();

    for (const f of data) {
      if (f.isDir) continue;
      const fileData = await ffmpeg.readFile(`output/${f.name}`);
      zip.file(f.name, fileData);
    }

    // Generate Zip
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);
    setStatus("Done! Ready to download.");

    // Cleanup
    // await ffmpeg.deleteFile("input.mp3");
    // await ffmpeg.deleteDir("output"); // Might need recursive delete if supported
  };

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <div className="rounded-3xl border border-zinc-100 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
        <Heading>Audio to HLS Converter (Client-side)</Heading>
        <p className="mt-2 text-zinc-500">
          Convert MP3 to HLS (.m3u8 + .ts segments) directly in your browser
          using WebAssembly. No server upload required.
        </p>

        <div className="mt-8 space-y-6">
          {!loaded && (
            <div className="flex items-center gap-2 text-amber-600">
              <span className="animate-spin">⏳</span> Loading FFmpeg Core...
            </div>
          )}

          {loaded && (
            <div className="flex flex-col gap-4">
              <input
                type="file"
                accept="audio/mp3,audio/mpeg"
                onChange={(e) => setFile(e.target.files?.[0])}
                className="block w-full text-sm text-zinc-500 file:mr-4 file:rounded-full file:border-0 file:bg-red-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-red-700 hover:file:bg-red-100 dark:file:bg-red-900/50 dark:file:text-red-300"
              />

              {file && (
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)}{" "}
                  MB)
                </div>
              )}

              <Button
                onClick={transcode}
                disabled={!file || status.startsWith("Processing")}
                className="flex w-full justify-center gap-2"
              >
                {status.startsWith("Processing") ? (
                  <span className="animate-pulse">
                    Processing... {progress}%
                  </span>
                ) : (
                  <>
                    <ArrowUpTrayIcon className="size-5" /> Start Conversion
                  </>
                )}
              </Button>
            </div>
          )}

          {status !== "Ready" && (
            <div className="rounded-lg bg-zinc-50 p-4 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              <p className="mb-2 font-bold text-zinc-900 dark:text-zinc-100">
                Status: {status}
              </p>
              <div
                ref={messageRef}
                className="h-24 overflow-y-auto rounded border p-1 whitespace-pre-wrap"
              />
            </div>
          )}

          {downloadUrl && (
            <Button
              href={downloadUrl}
              download="hls-output.zip"
              color="green"
              className="flex w-full justify-center gap-2"
            >
              <ArrowDownTrayIcon className="size-5" /> Download ZIP
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
