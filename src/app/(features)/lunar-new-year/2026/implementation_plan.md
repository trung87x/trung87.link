# HLS One-Time Streaming Implementation Plan

The goal is to implement a professional-grade audio experience using a **Hybrid Strategy**:

1.  **Streaming**: Use **HLS (.m3u8)** for the web player to ensure instant seek, correct duration, and fast load.
2.  **Download**: Keep the original **MP3** link for users to download the full quality file.

## User Review Required

> [!CAUTION]
> **Manual Action Required**: You will need to run the provided `ffmpeg` command locally to convert your `lunar-2026.mp3` into HLS format, then upload the resulting folder to your R2 bucket.

## Proposed Changes

### Dependencies

#### [MODIFY] [package.json](file:///c:/Users/home/Github/work/trung87.link/package.json)

- Add `hls.js` dependency.

### Components

#### [MODIFY] [src/app/(features)/lunar-new-year/2026/page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/lunar-new-year/2026/page.jsx>)

- **Comp**: Add `Hls` logic to `useEffect` for the `<audio>` player.
- **UI**: Add a **Download MP3** button below the player.
- **Logic**:
  - Player source -> `https://r2.trung87.link/hls/lunar-2026/playlist.m3u8`
  - Download link -> `https://r2.trung87.link/lunar-2026.mp3`

## Verification Plan

### Manual Verification

1.  **Convert & Upload**: User runs script -> uploads to `hls/lunar-2026/` on R2.
2.  **Streaming Test**: Verify web player loads instantly, seeks correctly, and shows correct duration (43:33).
3.  **Download Test**: Verify "Download" button triggers the MP3 file download.
