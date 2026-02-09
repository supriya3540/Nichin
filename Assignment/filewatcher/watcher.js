const fs = require("fs");
const path = require("path");

const WATCH_DIR = path.join(__dirname, "watch");

if (!fs.existsSync(WATCH_DIR)) {
  fs.mkdirSync(WATCH_DIR, { recursive: true });
}

const filesState = new Map();

function scanInitialState() {
  const files = fs.readdirSync(WATCH_DIR);
  files.forEach((file) => {
    const fullPath = path.join(WATCH_DIR, file);
    const stats = fs.statSync(fullPath);
    if (stats.isFile()) {
      filesState.set(file, stats.mtimeMs);
    }
  });
}

function watchDirectory() {
  scanInitialState();

  fs.watch(WATCH_DIR, (eventType, filename) => {
    if (!filename) return;

    const fullPath = path.join(WATCH_DIR, filename);

    if (!fs.existsSync(fullPath)) {
      if (filesState.has(filename)) {
        filesState.delete(filename);
        console.log(`File removed: ${filename}`);
      }
      return;
    }

    const stats = fs.statSync(fullPath);

    if (!filesState.has(filename)) {
      filesState.set(filename, stats.mtimeMs);
      console.log(`File added: ${filename}`);
    } else {
      const prevTime = filesState.get(filename);
      if (prevTime !== stats.mtimeMs) {
        filesState.set(filename, stats.mtimeMs);
        console.log(`File modified: ${filename}`);
      }
    }
  });

  console.log("Watching directory:", WATCH_DIR);
}

watchDirectory();
