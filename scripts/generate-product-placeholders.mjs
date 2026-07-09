// Generates on-brand "art coming soon" placeholder PNGs for products whose
// final print art isn't in the repo yet. Same navy/gold language as the
// ImageGallery/ProductCard fallback UI (see src/components/ui/ImageGallery.tsx),
// baked into a real file so imageSrc can point at the final filename now —
// dropping the real art in later (same filename) requires no code change.
import sharp from 'sharp';

const NAVY = '#0B1A2E';
const GOLD = '#C8922A';
const CREAM = '#F5F0E8';
const WIDTH = 800;
const HEIGHT = 1000;

function sparklePoints(cx, cy, outer, inner) {
  const points = [];
  for (let i = 0; i < 8; i++) {
    const theta = (Math.PI / 4) * i;
    const r = i % 2 === 0 ? outer : inner;
    const x = cx + r * Math.sin(theta);
    const y = cy - r * Math.cos(theta);
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return points.join(' ');
}

// Rough cap-height serif glyph width at letter-spacing 4 — keeps long names
// (e.g. "DANGEROUS THAN GOVERNABLE") from clipping past the canvas edges.
function titleFontSize(name) {
  const maxWidth = WIDTH - 80;
  const avgGlyphWidth = 0.62;
  const estimated = name.length * 46 * avgGlyphWidth + name.length * 4;
  return estimated > maxWidth ? Math.floor((46 * maxWidth) / estimated) : 46;
}

function placeholderSvg(name, subtitle) {
  const cx = WIDTH / 2;
  const cy = HEIGHT / 2 - 60;
  const titleSize = titleFontSize(name.toUpperCase());
  return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${WIDTH}" height="${HEIGHT}" fill="${NAVY}"/>
    <polygon points="${sparklePoints(cx, cy, 90, 30)}" fill="${GOLD}" fill-opacity="0.9"/>
    <rect x="${cx - 180}" y="${cy + 120}" width="360" height="1" fill="${CREAM}" fill-opacity="0.1"/>
    <text x="${cx}" y="${cy + 175}" font-family="Georgia, 'Playfair Display', serif" font-size="${titleSize}" fill="${CREAM}" fill-opacity="0.25" text-anchor="middle" letter-spacing="4">${escapeXml(name.toUpperCase())}</text>
    ${subtitle ? `<text x="${cx}" y="${cy + 210}" font-family="Arial, sans-serif" font-size="16" fill="${CREAM}" fill-opacity="0.15" text-anchor="middle" letter-spacing="3">${escapeXml(subtitle.toUpperCase())}</text>` : ''}
    <rect x="${cx - 60}" y="${cy + 245}" width="120" height="1" fill="${GOLD}" fill-opacity="0.25"/>
    <text x="${cx}" y="${cy + 280}" font-family="Arial, sans-serif" font-size="15" fill="${CREAM}" fill-opacity="0.7" text-anchor="middle" letter-spacing="3">ARTWORK IN PROGRESS</text>
  </svg>`;
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const targets = [
  { file: 'src/assets/products/fafo-steel-front.png', name: 'Directive 02: FAFO', subtitle: 'Riveted Steel' },
  { file: 'src/assets/products/shall-not-be-infringed-front.png', name: 'Shall Not Be Infringed', subtitle: '' },
  { file: 'src/assets/products/1776-steel-front.png', name: '1776', subtitle: 'Riveted Steel' },
  { file: 'src/assets/products/dangerous-than-governable-front.png', name: 'Dangerous Than Governable', subtitle: '1776' },
];

for (const { file, name, subtitle } of targets) {
  await sharp(Buffer.from(placeholderSvg(name, subtitle))).png().toFile(file);
  console.log(`Wrote ${file}`);
}
