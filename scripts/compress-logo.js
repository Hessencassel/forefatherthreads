// Source is 4861x6250px (print-resolution) but is only ever displayed at
// up to 120px tall on the site (see src/pages/Manifesto.tsx). Resizing to
// 400px tall — ~3.3x the largest on-page use, generous retina headroom —
// before WebP conversion is what actually fixes the page-weight problem;
// quality alone still ships the full 4861x6250 pixel grid.
import sharp from 'sharp';

sharp('src/assets/logo-icon.png')
  .resize({ height: 400 })
  .webp({ quality: 85 })
  .toFile('src/assets/logo-icon.webp')
  .then((info) => console.log(info));
