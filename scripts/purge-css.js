import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = path.resolve(__dirname, '../css');

function purgeCssFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      purgeCssFiles(fullPath);
    } else if (
      stat.isFile() &&
      path.extname(fullPath) === '.css' &&
      path.basename(fullPath) !== 'base.css'
    ) {
      fs.unlinkSync(fullPath);
      console.log(`🗑️ Deleted: ${fullPath}`);
    }
  });
}

purgeCssFiles(TARGET_DIR);
console.log('✅ CSS purge complete (excluding base.css).');
