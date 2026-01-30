# Remote Blog Integration Plan

## Goal Description

Fetch and render blog posts from the remote GitHub repository `trung87x/blogs` into the current `trung87.link` Next.js application. This allows content management via GitHub markdown files while keeping the site dynamic. Supports categories (e.g., 'react', 'next') as requested.

## Proposed Changes

### Dependencies

- Add `next-mdx-remote` for rendering Markdown/MDX.
- (Optional) `gray-matter` if we need robust frontmatter parsing, though `next-mdx-remote` handles some. Let's stick to `next-mdx-remote` for now as it's cleaner for this use case.

### Library Layer

#### [NEW] [src/lib/github.js](file:///c:/Users/home/Github/work/trung87.link/src/lib/github.js)

- Implement `getBlogPosts(category)`: Fetches the file tree from GitHub API to list available posts in a category folder.
- Implement `getBlogPost(category, slug)`: Fetches the raw markdown content for a specific post.
- Use GitHub REST API (unauthenticated for public repos usually fine for low traffic, or use raw.githubusercontent.com for content to avoid rate limits).

### UI / Pages

#### [NEW] [src/app/(features)/blog/page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/blog/page.jsx>)

- Landing page for the blog.
- Lists available categories (e.g., React, Next.js).

#### [NEW] [src/app/(features)/blog/[category]/page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/blog/[category]/page.jsx>)

- Lists posts within a specific category.

#### [NEW] [src/app/(features)/blog/[category]/[slug]/page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/blog/[category]/[slug]/page.jsx>)

- Renders the actual blog post using `RemoteMDX` component.

#### [NEW] [src/ui/markdown.jsx](file:///c:/Users/home/Github/work/trung87.link/src/ui/markdown.jsx)

- A component to style the rendered markdown (using Tailwind typography plugin if available, or custom styles).

## Verification Plan

### Automated Tests

- None currently active for this feature.
- Use `npm run dev` to verify the pages load without error.

### Manual Verification

1.  **Categories List**: Visit `/blog` and check if categories are listed.
2.  **Post List**: Click a category (e.g., `/blog/react`) and ensure posts are listed from the GitHub repo.
3.  **Post Rendering**: Click a post and verify the markdown is rendered correctly with styles.
4.  **Error Handling**: Access a non-existent category/post and check for 404 behavior.
