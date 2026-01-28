import Link from "next/link";
import { getRepoContent } from "@/lib/github";
import { FolderIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default async function BlogRootPage() {
  const content = await getRepoContent("");

  if (!content || !Array.isArray(content)) {
    return (
      <div className="p-8 text-center text-red-500">
        Failed to load blog content.
      </div>
    );
  }

  // Smart Detection:
  // Folders that are NOT Single Post Folders -> Categories
  // Files OR Single Post Folders -> Articles
  const folders = content.filter(
    (item) => item.type === "dir" && !item.isSinglePost,
  );
  const files = content.filter(
    (item) =>
      (item.type === "file" && item.name.endsWith(".md")) || item.isSinglePost,
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Blog Explorer</h1>

      <div className="space-y-12">
        {/* Folders Section */}
        {folders.length > 0 && (
          <div>
            <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-700 dark:text-gray-300">
              <FolderIcon className="mr-2 h-5 w-5" /> Categories
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {folders.map((item) => (
                <Link
                  key={item.path}
                  href={`/blog/${item.path}`}
                  className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500"
                >
                  <div className="mb-3 flex items-center">
                    <FolderIcon className="mr-3 h-8 w-8 text-blue-500 transition-transform group-hover:scale-110" />
                    <h3 className="truncate text-lg font-semibold text-gray-900 dark:text-white">
                      {item.name.replace(/-/g, " ")}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 capitalize dark:text-gray-400">
                    Folder
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Files Section */}
        {files.length > 0 && (
          <div>
            <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-700 dark:text-gray-300">
              <DocumentTextIcon className="mr-2 h-5 w-5" /> Articles
            </h2>
            <div className="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
              {files.map((item) => (
                <Link
                  key={item.path}
                  href={`/blog/${item.path}`}
                  className="dark:hover:bg-gray-750 group flex items-center p-4 transition hover:bg-gray-50"
                >
                  <div className="mr-4 rounded-lg bg-gray-100 p-2 transition-colors group-hover:bg-blue-100 dark:bg-gray-700 dark:group-hover:bg-blue-900">
                    <DocumentTextIcon className="h-6 w-6 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-medium text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white">
                      {item.name.replace(".md", "").replace(/-/g, " ")}
                    </h3>
                    <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                      {item.isSinglePost
                        ? "Folder (Auto-redirect)"
                        : "Markdown File"}
                    </p>
                  </div>
                  <span className="rounded bg-gray-100 px-2 py-1 font-mono text-xs text-gray-400 dark:bg-gray-800">
                    {item.isSinglePost ? "DIR" : "MD"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {folders.length === 0 && files.length === 0 && (
          <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 py-12 text-center text-gray-500 dark:border-gray-700 dark:bg-gray-800/50">
            <FolderIcon className="mx-auto mb-3 h-12 w-12 text-gray-400" />
            <p>This directory is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
}
