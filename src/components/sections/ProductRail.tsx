import { useRef, useState, useEffect, useCallback } from 'react';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import { LinkButton } from '../ui/Button';

interface ProductRailProps {
  title?: string;
  subtitle?: string;
  showCta?: boolean;
  limit?: number;
}

export default function ProductRail({
  title = 'The Armory',
  subtitle = 'Standard issue gear for The Remnant.',
  showCta = false,
  limit,
}: ProductRailProps) {
  const displayed = limit ? products.slice(0, limit) : products;

  const railRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  // Progress bar — sync on scroll
  const updateProgress = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateProgress, { passive: true });
    return () => el.removeEventListener('scroll', updateProgress);
  }, [updateProgress]);

  // Mouse drag
  const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = railRef.current;
    if (!el) return;
    setDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const el = railRef.current;
    if (!el) return;
    e.preventDefault();
    const delta = e.clientX - dragStart.current.x;
    el.scrollLeft = dragStart.current.scrollLeft - delta;
  }, [dragging]);

  const stopDrag = useCallback(() => setDragging(false), []);

  return (
    <section className="relative overflow-hidden bg-cream py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-sans text-navy/40 text-xs tracking-[0.3em] uppercase mb-3">
              The Collection
            </p>
            <h2 className="font-playfair text-navy text-4xl md:text-5xl font-bold mb-2">
              {title}
            </h2>
            <p className="font-sans text-navy/60 text-base">{subtitle}</p>
          </div>
          <p
            className="font-sans text-gold shrink-0 ml-6 hidden sm:block"
            style={{ fontSize: '10px', letterSpacing: '0.3em' }}
          >
            DRAG TO EXPLORE
          </p>
        </div>
      </div>

      {/* Rail — full width, left-padded to align with content, right bleeds */}
      <div
        ref={railRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        className="flex gap-6 overflow-x-scroll select-none"
        style={{
          paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))',
          paddingRight: '1.5rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: dragging ? 'grabbing' : 'grab',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Hide webkit scrollbar */}
        <style>{`div::-webkit-scrollbar{display:none}`}</style>

        {displayed.map((product) => (
          <div
            key={product.id}
            className="shrink-0"
            style={{ width: 300 }}
            // Prevent card links from firing after a drag
            onClick={(e) => { if (dragging) e.preventDefault(); }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="w-full h-px bg-navy/10 relative">
          <div
            className="absolute left-0 top-0 h-full"
            style={{
              width: `${progress * 100}%`,
              backgroundColor: '#C8922A',
              transition: 'width 0.05s linear',
            }}
          />
        </div>

        {/* CTA */}
        {showCta && (
          <div className="mt-10 text-center">
            <LinkButton href="/shop" variant="ghost" size="md">
              View Full Collection
            </LinkButton>
          </div>
        )}
      </div>
    </section>
  );
}
