const fs = require("fs");
const path = require("path");

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    throw new Error("Source directory does not exist");
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src, { withFileTypes: true });

  items.forEach((item) => {
    const srcPath = path.join(src, item.name);
    const destPath = path.join(dest, item.name);

    if (item.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

const sourceDir = process.argv[2];
const backupDir = process.argv[3];

if (!sourceDir || !backupDir) {
  console.log("Usage: node backup.js <sourceDir> <backupDir>");
  process.exit(1);
}

try {
  copyRecursive(sourceDir, backupDir);
  console.log("Backup completed successfully");
} catch (err) {
  if (err.code === "EACCES") {
    console.error("Permission denied while accessing files or directories");
  } else {
    console.error("Backup failed:", err.message);
  }
}
