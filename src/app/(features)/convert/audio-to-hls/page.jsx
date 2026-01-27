"use client";

import dynamic from "next/dynamic";

const AudioToHlsConverter = dynamic(() => import("./AudioToHlsConverter"), {
  ssr: false,
  loading: () => <div>Loading Converter...</div>,
});

export default function AudioToHlsPage() {
  return <AudioToHlsConverter />;
}
