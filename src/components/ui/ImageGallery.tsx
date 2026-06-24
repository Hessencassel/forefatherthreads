import { useState } from 'react';
import type { Product, ProductColor } from '../../types';

interface ImageGalleryProps {
  product: Product;
  selectedColor: ProductColor;
}

export default function ImageGallery({ product, selectedColor }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = Array.from({ length: product.imageCount }, (_, i) => i);

  const shades = [
    selectedColor.hex,
    lighten(selectedColor.hex, 15),
    darken(selectedColor.hex, 15),
  ];

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div
        className="aspect-[4/5] w-full flex flex-col items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: shades[activeIndex % shades.length] }}
        role="img"
        aria-label={`${product.name} in ${selectedColor.name} — view ${activeIndex + 1} of ${images.length}`}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-12">
          <div className="w-full h-px bg-cream/10" />
          <p className="font-bebas text-cream/25 text-5xl tracking-[0.25em] text-center leading-none">
            {product.name}
          </p>
          {product.subtitle && (
            <p className="font-sans text-cream/15 text-xs tracking-[0.3em] uppercase text-center">
              {product.subtitle}
            </p>
          )}
          <div className="w-16 h-px bg-gold/25" />
          <p className="font-sans text-cream/15 text-[10px] tracking-[0.2em] uppercase">
            Photography Coming Soon
          </p>
        </div>

        {/* View counter */}
        <div className="absolute bottom-4 right-4 font-sans text-cream/30 text-xs tracking-wider">
          {activeIndex + 1} / {images.length}
        </div>

        {/* Prev/Next */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveIndex((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-cream/10 hover:bg-cream/20 text-cream/60 hover:text-cream p-2 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-cream/10 hover:bg-cream/20 text-cream/60 hover:text-cream p-2 transition-all"
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex-1 aspect-square transition-all duration-200 ${
                i === activeIndex ? 'ring-2 ring-navy ring-offset-1' : 'opacity-60 hover:opacity-80'
              }`}
              style={{ backgroundColor: shades[i % shades.length] }}
              aria-label={`View ${i + 1}`}
              aria-pressed={i === activeIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function lighten(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, (num >> 16) + amount);
  const g = Math.min(255, ((num >> 8) & 0x00ff) + amount);
  const b = Math.min(255, (num & 0x0000ff) + amount);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function darken(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, (num >> 16) - amount);
  const g = Math.max(0, ((num >> 8) & 0x00ff) - amount);
  const b = Math.max(0, (num & 0x0000ff) - amount);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function ChevronLeft() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
