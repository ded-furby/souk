#!/bin/zsh
# Build -> verify (full-story smoke + monkey trace) -> real-time recording with sound -> MP4s on the Desktop.
# usage: zsh tools/final-video.sh <workDir> "<Desktop file title>"
set -eo pipefail
REPO="${0:A:h:h}"
W="$1"; TITLE="${2:-Souk of Stolen Wishes}"
mkdir -p "$W"
cd "$REPO"
npm run -s build
node tools/smoke.mjs "$W/smoke" "http://127.0.0.1:8765/?autoplay&quality=high" --every 200 | tail -3
node tools/monkey-trace.mjs | tail -2
rm -f "$W/STOP"
node tools/record.mjs "$W/rec.webm" "http://127.0.0.1:8765/?quality=high&dpr=1.5" 25 | grep -v "^\s*at "
END=$(python3 -c "import json;print(round(json.load(open('$W/rec.json'))['endAt']-0.3,2))")
FADE=$(python3 -c "print(round($END-1.5,2))")
OUT="$HOME/Desktop/$TITLE.mp4"
ffmpeg -v error -y -hwaccel videotoolbox -i "$W/rec.webm" -t "$END" -vf "fps=30,fade=t=out:st=$FADE:d=1.5" \
  -af "afade=t=out:st=$FADE:d=1.5" -c:v h264_videotoolbox -b:v 8M -profile:v high -c:a aac -b:a 192k -movflags +faststart "$OUT" 2>&1 | grep -v "Opus packet" || true
# small copy for phone viewing and email (Gmail caps attachments at 25 MB): 540p, two-pass, bitrate sized to ~23.5 MB
VB=$(python3 -c "print(int(23.5 * 8000 / $END - 64 - 6))")
ffmpeg -v error -y -i "$OUT" -vf scale=960:540 -c:v libx264 -preset medium -b:v ${VB}k -pass 1 -passlogfile "$W/x264" -an -f null /dev/null
ffmpeg -v error -y -i "$OUT" -vf scale=960:540 -c:v libx264 -preset medium -b:v ${VB}k -pass 2 -passlogfile "$W/x264" -c:a aac -b:a 64k -movflags +faststart "$W/$TITLE (phone).mp4"
for f in "$OUT" "$W/$TITLE (phone).mp4"; do ffprobe -v error -show_entries format=duration,size -of compact "$f"; done
ffmpeg -i "$OUT" -map 0:a -af volumedetect -f null - 2>&1 | grep -E "mean_volume|max_volume"
ffmpeg -v error -i "$W/rec.webm" -vf "fps=10,scale=160:90,signalstats,metadata=print:key=lavfi.signalstats.YAVG:file=$W/yavg.txt" -an -f null - 2>/dev/null || true
python3 - "$W/yavg.txt" <<'EOF'
import re, sys
v = [float(m) for m in re.findall(r"YAVG=([\d.]+)", open(sys.argv[1]).read())]
j = sum(1 for i in range(1, len(v)) if abs(v[i] - v[i-1]) > 6)
o = sum(1 for i in range(2, len(v)) if (v[i]-v[i-1])*(v[i-1]-v[i-2]) < 0 and min(abs(v[i]-v[i-1]), abs(v[i-1]-v[i-2])) > 2.5)
print(f"flicker metric over {len(v)/10:.0f}s: {j} jumps > 6, {o} oscillations (revision 1: 177 / 115)")
EOF
echo "saved: $OUT"
