# Remote Blog Integration Walkthrough

## Overview

I have implemented the feature to fetch and render blog posts directly from your GitHub repository (`trung87x/blogs`).

## Changes

### 1. Dependencies

- Installed `next-mdx-remote` for server-side MDX rendering.

### 2. Library

- **[src/lib/github.js](file:///c:/Users/home/Github/work/trung87.link/src/lib/github.js)**
  - `getRepoContent`: Fetches file list from GitHub API.
  - `getCategories`: Identifies top-level folders as categories.
  - `getPostsByCategory`: Lists posts (folders or files) within a category.
  - `getPostContent`: Fetches raw MD content and compiles it using `next-mdx-remote`.

### 3. UI Components

- **[src/ui/markdown.jsx](file:///c:/Users/home/Github/work/trung87.link/src/ui/markdown.jsx)**
  - `RemoteMDX`: A component that renders the MDX source and applies Tailwind styles to standard HTML elements (h1, p, pre, code, etc.).

### 4. Pages

- **[src/app/(features)/blog/page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/blog/page.jsx>)**
  - Landing page. Fetches and displays a grid of categories.
- **[src/app/(features)/blog/[category]/page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/blog/[category]/page.jsx>)**
  - Category page. Lists all posts found in the corresponding GitHub folder.
- **[src/app/(features)/blog/[category]/[slug]/page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/blog/[category]/[slug]/page.jsx>)**
  - Post page. Fetches the specific markdown content for the post and renders it.

## Verification

I attempted to verify the pages using an automated browser tool, but encountered a system configuration error.
Please verify manually by visiting:

1.  [http://localhost:3000/blog](http://localhost:3000/blog) - Should see categories (e.g., `react.school`, `next`).
2.  Click a category - Should see list of posts.
3.  Click a post - Should see the rendered article.

Note: The fetching logic assumes the GitHub repo structure aligns with `category/post-slug/page.md` or `category/post-slug.md`.
