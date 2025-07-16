import fs from "fs";
import path from "path";

const TARGET_DIR = path.resolve(__dirname, '../css'); // adjust path as needed

function purgeCssFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      purgeCssFiles(fullPath);
    } else if (stat.isFile() && path.extname(fullPath) === '.css' && path.basename(fullPath) !== 'base.css') {
      fs.unlinkSync(fullPath);
      console.log(`🗑️ Deleted: ${fullPath}`);
    }
  });
}

purgeCssFiles(TARGET_DIR);
console.log('✅ CSS purge complete (excluding base.css).');
