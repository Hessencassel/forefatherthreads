// One-off conversion of the Printful mockups for We The People:
// PNG source -> WebP, capped at 1600px on the long edge, q82. Source PNGs
// are deleted after a successful conversion so multi-MB originals don't
// end up committed (see src/data/products.ts for where the .webp imports
// are consumed). Mirrors the other convert-*.mjs scripts in this folder.
// Only black + military-green exist so far — white ships later.
import sharp from 'sharp';
import { unlink } from 'node:fs/promises';

const files = [
  'src/assets/products/we-the-people-constitution-preamble-shirt-black.png',
  'src/assets/products/we-the-people-constitution-preamble-shirt-military-green.png',
];

for (const file of files) {
  const outFile = file.replace(/\.png$/, '.webp');
  await sharp(file)
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outFile);
  await unlink(file);
  console.log(`Converted ${file} -> ${outFile}`);
}
