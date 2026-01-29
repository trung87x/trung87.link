import { compileMDX } from "next-mdx-remote/rsc";

const REPO_OWNER = "trung87x";
const REPO_NAME = "blogs";
const BRANCH = "main";

/**
 * Fetches the recursive file tree from the GitHub repository.
 * Cached for 1 hour.
 */
async function getRepoTree() {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/${BRANCH}?recursive=1`;

  try {
    const headers = {
      Accept: "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(url, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch repo tree: ${res.statusText}`);
    }

    const data = await res.json();
    return data.tree || [];
  } catch (error) {
    console.error("Error fetching repo tree:", error);
    return [];
  }
}

/**
 * Fetches the file tree or file content from the GitHub repository.
 * Now uses the Tree API for efficient smart-folder detection.
 * @param {string} path - The path to fetch content from.
 * @returns {Promise<Array|Object>} - List of files/directories (with isSinglePost flag) or file metadata.
 */
export async function getRepoContent(path = "") {
  // Ensure path doesn't start with /
  const cleanPath = path ? path.replace(/^\//, "").replace(/\/$/, "") : "";

  const tree = await getRepoTree();

  // 1. Check if the path itself points to a file in the tree
  // (We need to find an exact match for the path)
  if (cleanPath) {
    const exactFile = tree.find(
      (item) => item.path === cleanPath && item.type === "blob",
    );
    if (exactFile) {
      // Return object structure similar to 'contents' API for file
      return {
        type: "file",
        name: exactFile.path.split("/").pop(),
        path: exactFile.path,
        sha: exactFile.sha,
      };
    }
  }

  // 2. Filter immediate children of the directory
  const children = tree.filter((item) => {
    if (cleanPath) {
      // Must start with path/
      if (!item.path.startsWith(cleanPath + "/")) return false;
      // relative path:
      const relative = item.path.substring(cleanPath.length + 1);
      // Must not contain more slashes (immediate child)
      return !relative.includes("/");
    } else {
      // Root: must not contain any slashes
      return !item.path.includes("/");
    }
  });

  if (children.length === 0 && cleanPath) {
    return [];
  }

  // 3. Map to useful format and check for "Single Post Folder"
  const result = children.map((item) => {
    const name = item.path.split("/").pop();
    const type = item.type === "tree" ? "dir" : "file";
    let isSinglePost = false;

    if (type === "dir") {
      // Check descendants of this folder
      const folderPath = item.path;
      const descendants = tree.filter((t) =>
        t.path.startsWith(folderPath + "/"),
      );

      const subFolders = descendants.filter((t) => t.type === "tree");
      const mdFiles = descendants.filter(
        (t) => t.type === "blob" && t.path.endsWith(".md"),
      );

      // Condition: No subfolders AND Exactly 1 MD file
      if (subFolders.length === 0 && mdFiles.length === 1) {
        isSinglePost = true;
      }
    }

    return {
      name,
      path: item.path,
      type,
      isSinglePost,
    };
  });

  // Sort: Dirs first, then Files
  return result.sort((a, b) => {
    if (a.type === b.type) return a.name.localeCompare(b.name);
    return a.type === "dir" ? -1 : 1;
  });
}

/**
 * Fetch raw content for a specific file path and compile MDX.
 * @param {string} path - The file path (e.g. "react/intro.md")
 */
export async function getFileContent(path) {
  const cleanPath = path.replace(/^\//, "");
  // Use the API with the raw media type to get the content directly
  const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${cleanPath}`;

  try {
    const headers = {
      Accept: "application/vnd.github.v3.raw", // Request raw content
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(apiUrl, { headers });

    if (!res.ok) {
      console.error(
        `Failed to fetch file content: ${res.status} ${res.statusText}`,
      );
      return null;
    }

    const rawContent = await res.text();

    const { content, frontmatter } = await compileMDX({
      source: rawContent,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter, raw: rawContent };
  } catch (e) {
    console.error("Error fetching file content:", e);
    return null;
  }
}
