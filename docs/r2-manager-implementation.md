# R2 Web Interface Implementation Plan

The user wants a web-based "Cyberduck-like" interface within their Next.js app to manage Cloudflare R2.

- **Input**: Access Key, Secret Key, Endpoint (R2).
- **Features**: Browse files, Create/Delete Folders, Bulk Upload (~200 files).
- **Technical Focus**: Client-side SDK, Concurrency Control, Virtual Folder Logic, Security (State/Session).

## User Review Required

> [!IMPORTANT]
> **CORS Configuration Required**: You must configure CORS on your R2 bucket to allow commands from your domain (and localhost).
>
> **Exact CORS Policy** (Copy & Paste this):
>
> ```json
> [
>   {
>     "AllowedOrigins": [
>       "http://localhost:3000",
>       "https://trung87.link",
>       "https://www.trung87.link"
>     ],
>     "AllowedMethods": ["GET", "PUT", "POST", "DELETE", "HEAD"],
>     "AllowedHeaders": ["*"],
>     "ExposeHeaders": ["ETag"],
>     "MaxAgeSeconds": 3000
>   }
> ]
> ```

## Troubleshooting

### Connection Failed / Network Error / Failed to fetch

If you see **"Failed to list objects: Network Error"** or **"Failed to fetch"**, it is almost certainly a **CORS Issue**.

1. Go to **Cloudflare Dashboard > R2 > [Your Bucket] > Settings**.
2. Scroll to **CORS Policy**.
3. Ensure it matches the JSON above exactly.
4. **Crucial**: If you are accessing from `https://www.trung87.link` but only allowed `https://trung87.link` (no www), it will fail. Add both.

## Proposed Changes

### Dependencies

- Install `@aws-sdk/client-s3` (client-side usage).
- Install `p-limit` (for concurrency control).

### New Pages & Components

#### [NEW] [src/app/(features)/cloudflare/r2/page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/cloudflare/r2/page.jsx>)

- **State Management**:
  - `credentials`: `{ accessKeyId, secretAccessKey, endpoint, bucket }` (Saved to `sessionStorage` or Component State only).
  - `isConnecting`: Boolean.
  - `files`: Array (content of current path).
  - `selection`: Set/Array of selected item keys.
  - `uploadStatus`: Map/Object `{ [fileName]: progress% }`.
- **Core Logic**:
  - **Concurrency**: Use `p-limit` to restrict parallel uploads (e.g., limit 5).
  - **Virtual Folders**:
    - _Create_: Put 0-byte object with trailing slash.
    - _Delete_: `listObjectsV2` (prefix) -> `deleteObjects` (bulk delete).
- **UI Sections**:
  1.  **Connection Panel**: Inputs for credentials. Secure handling.
  2.  **Breadcrumbs**: Navigation for virtual paths.
  3.  **File List**:
      - Thumbnail preview for images.
      - "Copy URL" button (construct public URL if bucket is public, or signed URL logic if private - assuming public for now based on "link" context).
  4.  **Upload Area**:
      - Drag & drop zone.
      - Progress bars.

## Verification Plan

### Manual Verification

1.  **CORS Test**: Verify browser allows requests.
2.  **Upload Test**: Bulk upload ~20 files. Verify only ~5 run at once (console log or network tab).
3.  **Folder Test**: Create folder, enter it, upload file. Go back, delete folder -> verify recursive delete.
4.  **Large File**: Upload >50MB file.
5.  **Special Chars**: Create file with "Tiếng Việt.txt".
