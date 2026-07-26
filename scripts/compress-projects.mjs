/**
 * Compress public/projects images for web deploy (max 1600px, JPEG q78).
 * Run: node scripts/compress-projects.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/projects");
const MAX = 1600;
const QUALITY = 78;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(jpe?g|png|webp)$/i.test(e.name) && e.name !== ".gitkeep") {
      files.push(full);
    }
  }
  return files;
}

async function compressOne(file) {
  const before = (await fs.stat(file)).size;
  const buf = await sharp(file)
    .rotate()
    .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  // Keep original extension if .jpg/.jpeg; convert png/webp to .jpg only if needed
  const ext = path.extname(file).toLowerCase();
  let out = file;
  if (ext === ".png" || ext === ".webp") {
    out = file.replace(/\.(png|webp)$/i, ".jpg");
  }
  await fs.writeFile(out, buf);
  if (out !== file) await fs.unlink(file).catch(() => {});
  const after = buf.length;
  return { file: path.relative(ROOT, file), before, after };
}

const files = await walk(ROOT);
console.log(`Compressing ${files.length} images…`);
let saved = 0;
let i = 0;
for (const file of files) {
  i += 1;
  try {
    const r = await compressOne(file);
    saved += r.before - r.after;
    if (i % 25 === 0 || i === files.length) {
      console.log(`[${i}/${files.length}] ${(saved / 1e6).toFixed(1)} MB saved so far`);
    }
  } catch (err) {
    console.error("Fail:", file, err.message);
  }
}
console.log(`Done. Total saved ~${(saved / 1e6).toFixed(1)} MB`);
