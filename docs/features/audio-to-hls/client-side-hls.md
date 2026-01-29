# Client-Side Audio to HLS with FFmpeg.wasm

## The Problem: Serverless Limits

When deploying to serverless platforms like Vercel, functions have strict execution time limits (usually 10-60 seconds). Converting a large audio file (e.g., 60 minutes MP3) to HLS requires minutes of CPU time, making it impossible to do on a clear serverless function.

## The Solution: Bring Compute to the Client

Instead of uploading the file to a server, we bring the processing engine (FFmpeg) to the user's browser using **WebAssembly (WASM)**.

### How it works

1.  **FFmpeg.wasm**: We load a WASM version of FFmpeg into the browser.
2.  **Multithreading**: We use SharedArrayBuffer to enable multi-threaded processing (making it fast).
3.  **Local FS**: We write the MP3 to an in-memory filesystem.
4.  **Conversion**: We run the standard `ffmpeg` command to segment the audio.
5.  **Zip & Download**: We bundle the resulting `.m3u8` playlist and `.ts` segments into a ZIP file for the user to upload to R2.

### Key Technologies

- **Next.js**: Framework.
- **@ffmpeg/ffmpeg**: WASM library.
- **COOP/COEP Headers**: Required for SharedArrayBuffer security isolation.
- **Cloudflare R2**: Cheap/Free storage for the static HLS files.

## Code Example

```javascript
// Load FFmpeg
await ffmpeg.load({
  coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
  wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
});

// Run Command
await ffmpeg.exec([
  "-i",
  "input.mp3",
  "-f",
  "segment",
  "-segment_time",
  "10",
  "output/segment_%03d.ts",
]);
```

This approach costs **$0** in server compute and scales infinitely because every user brings their own CPU.
