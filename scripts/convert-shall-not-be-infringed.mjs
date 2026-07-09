// One-off conversion of the Printful mockups for Shall Not Be Infringed:
// PNG source -> WebP, capped at 1600px on the long edge, q82. Source PNGs
// are deleted after a successful conversion so multi-MB originals don't
// end up committed (see src/data/products.ts for where the .webp imports
// are consumed).
import sharp from 'sharp';
import { unlink } from 'node:fs/promises';

const files = [
  'src/assets/products/shall-not-be-infringed-black.png',
  'src/assets/products/shall-not-be-infringed-military-green.png',
  'src/assets/products/shall-not-be-infringed-white.png',
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
