// Generates the favicon set from the crossed-pistols mark. Source has an
// alpha channel (see src/assets/logo-icon.webp), so favicon-32 keeps
// transparency while apple-touch-icon flattens onto the site navy since iOS
// renders transparent PNGs on a white home-screen tile otherwise.
import sharp from 'sharp';

const NAVY = { r: 11, g: 26, b: 46 };
const SOURCE = 'src/assets/logo-icon.webp';

await sharp(SOURCE)
  .resize({ width: 28, height: 28, fit: 'contain', background: { ...NAVY, alpha: 0 } })
  .extend({ top: 2, bottom: 2, left: 2, right: 2, background: { ...NAVY, alpha: 0 } })
  .png()
  .toFile('public/favicon-32.png');
console.log('Wrote public/favicon-32.png');

await sharp(SOURCE)
  .resize({ width: 130, height: 130, fit: 'contain', background: { ...NAVY, alpha: 1 } })
  .extend({ top: 25, bottom: 25, left: 25, right: 25, background: { ...NAVY, alpha: 1 } })
  .flatten({ background: NAVY })
  .png()
  .toFile('public/apple-touch-icon.png');
console.log('Wrote public/apple-touch-icon.png');
