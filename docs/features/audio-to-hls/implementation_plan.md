# Client-Side Audio to HLS Converter Implementation Plan

The goal is to implement a web-based tool that allows users to convert MP3 files to HLS (`.m3u8` + segments) directly in the browser using WebAssembly. This bypasses Vercel's serverless timeout limits.

## User Review Required

> [!NOTE]
> I found you created `src/app/(features)/convert/audio-to-hls/page.jsx`. I will use this existing path for the implementation.
> This feature relies on `ffmpeg.wasm` which requires SharedArrayBuffer support.

## Proposed Changes

### Dependencies

#### [MODIFY] [package.json](file:///c:/Users/home/Github/work/trung87.link/package.json)

- Add `@ffmpeg/ffmpeg`, `@ffmpeg/util`, `@ffmpeg/core`.
- Add `jszip` for bundling the output files.

### Feature Page

#### [MODIFY] [src/app/(features)/convert/audio-to-hls/page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/convert/audio-to-hls/page.jsx>)

- **UI**:
  - File Dropzone (Drag & Drop MP3).
  - Settings (Segment time - default 10s).
  - Progress Bar with logs.
  - Download Button for the final ZIP file.
- **Logic**:
  - Load `ffmpeg.wasm` (multi-threaded if COOP/COEP headers allow, otherwise single-threaded).
  - Run FFmpeg command: `ffmpeg -i input.mp3 ...`
  - Bundle all `.ts` and `.m3u8` files into a ZIP using `JSZip`.

### Documentation

#### [NEW] [docs/technical/client-side-hls.md](file:///c:/Users/home/Github/work/trung87.link/docs/technical/client-side-hls.md)

- Article explaining the "Serverless Barrier".
- Why Client-side FFmpeg is the solution.

## Verification Plan

### Manual Verification

1.  **Tool Test**: Upload `lunar-2026.mp3` -> Wait for processing -> Download `.zip`.
2.  **Verify Output**: Unzip and check if `.m3u8` and `.ts` files are valid.
