@echo off
echo Creating HLS directory...
mkdir hls\lunar-2026

echo Converting MP3 to HLS...
:: Yêu cầu cài đặt ffmpeg và thêm vào PATH
ffmpeg -i lunar-2026.mp3 -codec:a libmp3lame -b:a 128k -map 0 -f segment -segment_time 10 -segment_list hls/lunar-2026/playlist.m3u8 -segment_format mpegts hls/lunar-2026/segment_%%03d.ts

echo Done! Please upload the 'hls' folder to your R2 bucket.
pause
