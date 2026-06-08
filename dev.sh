#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

if [ ! -d node_modules ]; then
  echo "📦 Installing dependencies..."
  pnpm install
fi

echo "🚀 Starting dev server..."
pnpm dev &
DEV_PID=$!

sleep 2

URL="http://localhost:4321"
echo "🌐 Opening $URL"
xdg-open "$URL" 2>/dev/null || open "$URL" 2>/dev/null || echo "Open $URL in your browser"

wait "$DEV_PID"
