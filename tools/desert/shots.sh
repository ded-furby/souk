#!/bin/sh
# Build a private bundle (assets/app-desert.js + index-desert.html) and screenshot the standard desert / finale viewpoints.
# usage: tools/desert/shots.sh <outDir> [desert|finale|all] [quality]
set -e
cd "$(dirname "$0")/../.."
OUT="$1"; WHAT="${2:-all}"; export Q="$3"
./node_modules/.bin/esbuild src/app.js --bundle --format=esm --log-level=warning --outfile=assets/app-desert.js
sed 's#\./assets/app\.js#./assets/app-desert.js#' index.html > index-desert.html
export PAGE=index-desert.html
DV='[[0,-170.5,0,-0.05,"start"],[-3.2,-184,-0.3,-0.08,"mid1"],[6.5,-201,-0.2,-0.1,"mid2"],[5.6,-219.5,0,-0.35,"dig"],[5,-219,0,0.0,"stage"],[0,-190,-0.5,0.08,"sun-horizon"],[5,-215,3.14,0,"back-to-gate"],[2,-196,0.6,-0.55,"ground"],[0,-200,1.57,0.02,"west-horizon"]]'
FV='[[5,-218.5,0,0.12,"finale-front"],[10.5,-221.5,0.95,0.08,"finale-side"],[5,-222.8,0,0.3,"finale-close"],[4,-212,0.0,0.05,"finale-wide"]]'
if [ "$WHAT" != finale ]; then mkdir -p "$OUT/desert"; node tools/views.mjs "$OUT/desert" desert "$DV"; fi
if [ "$WHAT" != desert ]; then mkdir -p "$OUT/finale"; node tools/views.mjs "$OUT/finale" finale "$FV" 85; fi
