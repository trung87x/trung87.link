"use client";
// Lunar new year page
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Heading, Subheading } from "@/ui/catalyst/heading";
import { Button } from "@/ui/catalyst/button";
import {
  PlayIcon,
  PauseIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import Hls from "hls.js";

const trackList = [
  { start: 0, title: "Xuân Đẹp Làm Sao" },
  { start: 242, title: "Chúc Xuân" },
  { start: 464, title: "Xuân Đã Về" },
  { start: 701, title: "Mùa Xuân Đầu Tiên" },
  { start: 943, title: "Nắng Có Còn Xuân" },
  { start: 1168, title: "Bài Ca Tết Cho Em" },
  { start: 1402, title: "Nụ Cười Xuân" },
  { start: 1638, title: "Thì Thầm Mùa Xuân" },
  { start: 1881, title: "Cánh Thiệp Đầu Xuân" },
  { start: 2134, title: "Điệp Khúc Mùa Xuân" },
  { start: 2381, title: "Xuân Họp Mặt" },
  { start: 2610, title: "Ngày Tết Quê Em" },
];

const STREAM_URL = "https://r2.trung87.link/Music/lunar-2026/hls/playlist.m3u8";
const DOWNLOAD_URL = "https://r2.trung87.link/Music/lunar-2026/lunar-2026.mp3";

export default function LunarNewYear2026Page() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // Separate state for the slider to avoid conflict with audio updates
  const [sliderValue, setSliderValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("Đang chuẩn bị...");

  const updateCurrentTrack = (time) => {
    const track = [...trackList].reverse().find((t) => time >= t.start);
    if (track) setCurrentTrack(track.title);
  };

  useEffect(() => {
    const video = audioRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(STREAM_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        // Ready to play
      });
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari support
      video.src = STREAM_URL;
    } else {
      // Fallback to direct MP3 if HLS not supported
      video.src = DOWNLOAD_URL;
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    // Only update state if the user is NOT dragging
    if (!isDragging && audioRef.current) {
      const time = audioRef.current.currentTime;
      setCurrentTime(time);
      setSliderValue(time);
      updateCurrentTrack(time);
    }
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSliderChange = (e) => {
    // Just update the visual slider value while dragging
    const val = Number(e.target.value);
    setSliderValue(val);
  };

  // Start dragging
  const handleDragStart = () => {
    setIsDragging(true);
  };

  // End dragging - applying the seek
  const handleDragEnd = (e) => {
    setIsDragging(false);
    if (audioRef.current) {
      const val = Number(e.target.value); // Use the current input value
      // Or use sliderValue state if e.target.value is unreliable on touch end?
      // Safest is to use the sliderValue state which we updated in onChange
      audioRef.current.currentTime = sliderValue;
      setCurrentTime(sliderValue);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(DOWNLOAD_URL);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "lunar-2026.mp3";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Opening in new tab instead.");
      window.open(DOWNLOAD_URL, "_blank");
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-red-50 dark:bg-red-950/20">
      {/* Banner Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/images/lunar-2026-banner.png"
          alt="Lunar New Year 2026 Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 text-center">
          <Heading className="mb-2 text-4xl font-bold text-white drop-shadow-lg md:text-7xl">
            Chúc Mừng Năm Mới
          </Heading>
          <Subheading className="text-xl text-yellow-300 drop-shadow-md md:text-3xl">
            2026 - Bính Ngọ (Năm Con Ngựa)
          </Subheading>
        </div>
      </div>

      {/* Music Player Section */}
      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-2xl dark:border-red-900/30 dark:bg-zinc-900">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <Heading level={2} className="text-red-600 dark:text-red-400">
                LUNAR OF THE YEAR 2026
              </Heading>
              <p className="mt-4 text-sm font-medium text-zinc-400">
                ĐANG PHÁT
              </p>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-500">
                {currentTrack}
              </p>
            </div>

            {/* Thẻ Audio duy nhất */}
            <audio
              ref={audioRef}
              // SRC will be set via HLS logic
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
            />

            <div className="w-full space-y-2">
              {/* Progress Slider */}
              <input
                type="range"
                min="0"
                max={duration || 100} // Fallback max to prevent stuck slider if duration isn't loaded yet
                value={sliderValue}
                onChange={handleSliderChange}
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchEnd={handleDragEnd}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-red-600 dark:bg-zinc-700"
              />

              <div className="flex justify-between text-xs font-bold text-zinc-500">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <Button
                color="red"
                className="flex h-20 w-20 items-center justify-center rounded-full !p-0 shadow-2xl transition-all hover:scale-110 active:scale-95"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <PauseIcon className="size-10 text-white" />
                ) : (
                  <PlayIcon className="size-10 text-white" />
                )}
              </Button>

              <Button
                color="white"
                className="flex h-12 w-12 items-center justify-center rounded-full !p-0 shadow-lg transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800"
                onClick={handleDownload}
                title="Download MP3"
              >
                <ArrowDownTrayIcon className="size-6 text-zinc-600 dark:text-zinc-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
