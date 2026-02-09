const fs = require("fs");
const path = require("path");

const LOG_DIR = path.join(__dirname, "logs");
const LOG_FILE = path.join(LOG_DIR, "app.log");
const MAX_SIZE = 1 * 1024 * 1024;

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

function getTimestamp() {
  const d = new Date();
  const pad = (n) => n.toString().padStart(2, "0");
  return (
    d.getFullYear() +
    "-" +
    pad(d.getMonth() + 1) +
    "-" +
    pad(d.getDate()) +
    "_" +
    pad(d.getHours()) +
    "-" +
    pad(d.getMinutes()) +
    "-" +
    pad(d.getSeconds())
  );
}

function rotateLogIfNeeded() {
  if (fs.existsSync(LOG_FILE)) {
    const size = fs.statSync(LOG_FILE).size;
    if (size >= MAX_SIZE) {
      const timestamp = getTimestamp();
      const rotatedFile = path.join(LOG_DIR, `app-${timestamp}.log`);
      fs.renameSync(LOG_FILE, rotatedFile);
    }
  }
}

function log(message) {
  rotateLogIfNeeded();
  const time = new Date().toISOString();
  fs.appendFileSync(LOG_FILE, `[${time}] ${message}\n`);
}

module.exports = { log };
