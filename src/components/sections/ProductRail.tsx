import { useRef, useState, useEffect } from 'react';
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
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [progress, setProgress] = useState(0);

  // Progress bar
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    el.addEventListener('scroll', update, { passive: true });
    return () => el.removeEventListener('scroll', update);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!railRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - railRef.current.offsetLeft;
    scrollLeft.current = railRef.current.scrollLeft;
    railRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (railRef.current) railRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (railRef.current) railRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !railRef.current) return;
    e.preventDefault();
    const x = e.pageX - railRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    railRef.current.scrollLeft = scrollLeft.current - walk;
  };

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

      {/* Rail */}
      <div
        ref={railRef}
        className="product-rail flex gap-6 select-none"
        style={{
          cursor: 'grab',
          userSelect: 'none',
          overflowX: 'scroll',
          scrollbarWidth: 'none',
          paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))',
          paddingRight: '1.5rem',
          WebkitOverflowScrolling: 'touch',
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {displayed.map((product) => (
          <div key={product.id} className="shrink-0" style={{ width: 300 }}>
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
