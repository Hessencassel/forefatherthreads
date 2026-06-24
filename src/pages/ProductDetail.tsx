import { useState, useRef, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../hooks/useCart';
import { useViewingCount } from '../hooks/useViewingCount';
import ImageGallery from '../components/ui/ImageGallery';
import SizeGuide from '../components/ui/SizeGuide';
import ProductCard from '../components/ui/ProductCard';
import StarRating from '../components/ui/StarRating';
import StickyAddToCart from '../components/layout/StickyAddToCart';
import GuaranteeBlock from '../components/sections/GuaranteeBlock';
import AnimatedHeading from '../components/ui/AnimatedHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import type { ProductColor } from '../types';
import qrCode from '../assets/Constitution-QR.png';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug ?? '');
  if (!product) return <Navigate to="/shop" replace />;
  return <ProductDetailContent key={product.id} product={product} />;
}

function ProductDetailContent({
  product,
}: {
  product: NonNullable<ReturnType<typeof getProductBySlug>>;
}) {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [addedMsg, setAddedMsg] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);

  const { addItem } = useCart();
  const viewingCount = useViewingCount(product.id);
  const addToCartRef = useRef<HTMLButtonElement>(null);
  const related = getRelatedProducts(product.id);

  // Show sticky bar when main button scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (addToCartRef.current) observer.observe(addToCartRef.current);
    return () => observer.disconnect();
  }, []);

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    addItem({
      product,
      color: selectedColor,
      size: selectedSize,
      quantity,
      key: `${product.id}-${selectedColor.name}-${selectedSize}`,
    });
    setAddedMsg(true);
    setTimeout(() => setAddedMsg(false), 2500);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-parchment px-6 py-3 border-b border-parchment-dark">
        <div className="max-w-7xl mx-auto">
          <nav className="font-sans text-xs text-navy/50 flex items-center gap-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-navy transition-colors">Armory</Link>
            <span>/</span>
            <span className="text-navy">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

          {/* Gallery */}
          <div className="lg:sticky lg:top-24 self-start">
            <ImageGallery product={product} selectedColor={selectedColor} />
          </div>

          {/* Product info */}
          <div className="flex flex-col gap-5">

            {/* Badge */}
            {product.badge && (
              <div className="flex items-center gap-2">
                <span className={`font-sans text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 ${
                  product.badge === 'best-seller' ? 'bg-rust text-cream' :
                  product.badge === 'new' ? 'bg-gold text-navy' :
                  'bg-navy text-gold border border-gold/40'
                }`}>
                  {product.badge === 'best-seller' ? 'Best Seller' : product.badge === 'new' ? 'New' : 'Limited'}
                </span>
                {product.madeToOrder && (
                  <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-navy/40 border border-navy/20 px-2 py-0.5">
                    Made to Order
                  </span>
                )}
              </div>
            )}

            {/* Name + rating + price */}
            <div>
              <p className="font-sans text-navy/40 text-xs tracking-[0.2em] uppercase mb-1">Forefather Threads</p>
              <h1 className="font-playfair text-navy text-4xl font-bold leading-tight">{product.name}</h1>
              {product.subtitle && (
                <p className="font-sans text-navy/50 text-sm tracking-wide mt-1">{product.subtitle}</p>
              )}

              {/* Stars */}
              <div className="mt-2.5">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" showCount />
              </div>

              <p className="font-playfair text-2xl text-navy font-semibold mt-3">${product.price}</p>
            </div>

            {/* Viewing count */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rust opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rust" />
              </span>
              <p className="font-sans text-xs text-navy/50">
                <span className="font-semibold text-navy">{viewingCount} people</span> are looking at this right now
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-gold pl-4">
              <p className="font-playfair text-navy/70 italic text-base leading-relaxed">
                &ldquo;{product.quote}&rdquo;
              </p>
            </div>

            <p className="font-sans text-navy/70 text-sm leading-relaxed">{product.description}</p>

            {/* Color selector */}
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.1em] uppercase text-navy mb-3">
                Color: <span className="font-normal normal-case tracking-normal">{selectedColor.name}</span>
              </p>
              <div className="flex items-center gap-3" role="group" aria-label="Select color">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                    aria-label={color.name}
                    aria-pressed={selectedColor.name === color.name}
                    className={`w-9 h-9 rounded-full transition-all duration-200 ${
                      selectedColor.name === color.name
                        ? 'ring-2 ring-navy ring-offset-2 scale-110'
                        : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-sans text-xs font-semibold tracking-[0.1em] uppercase text-navy">
                  Size{selectedSize ? `: ${selectedSize}` : ''}
                </p>
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  className="font-sans text-xs text-navy/50 hover:text-navy underline underline-offset-2 transition-colors"
                >
                  Size Guide
                </button>
              </div>
              <div
                className={`flex flex-wrap gap-2 ${sizeError ? 'ring-1 ring-rust p-2 -m-2 rounded' : ''}`}
                role="group"
                aria-label="Select size"
              >
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setSizeError(false); }}
                    aria-pressed={selectedSize === size}
                    className={`min-w-[48px] h-12 px-3 font-sans text-sm font-semibold border transition-all duration-150 ${
                      selectedSize === size
                        ? 'bg-navy text-cream border-navy'
                        : 'bg-transparent text-navy border-navy/30 hover:border-navy'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="font-sans text-rust text-xs mt-2">Please select a size to continue.</p>
              )}
            </div>

            {/* Qty + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center border border-navy/20">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="w-12 h-12 flex items-center justify-center text-navy hover:bg-parchment transition-colors text-lg" aria-label="Decrease quantity">−</button>
                <span className="w-10 text-center font-sans text-navy font-semibold">{quantity}</span>
                <button onClick={() => setQuantity((q) => Math.min(10, q + 1))} className="w-12 h-12 flex items-center justify-center text-navy hover:bg-parchment transition-colors text-lg" aria-label="Increase quantity">+</button>
              </div>
              <button
                ref={addToCartRef}
                onClick={handleAddToCart}
                className={`flex-1 py-4 font-sans text-sm tracking-[0.15em] uppercase font-bold transition-all duration-200 ${
                  addedMsg ? 'bg-navy text-gold border border-navy' : 'bg-rust text-cream hover:bg-rust-dark'
                }`}
              >
                {addedMsg ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
            </div>

            {/* Constitution QR callout */}
            <div style={{ backgroundColor: '#F5F0E8', border: '1px solid rgba(11,26,46,0.12)', padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <img
                src={qrCode}
                alt="QR code linking to the U.S. Constitution"
                style={{ width: '64px', height: '64px', display: 'block', flexShrink: 0 }}
              />
              <div>
                <p style={{ fontFamily: 'sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: '#0B1A2E', fontVariant: 'small-caps', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  Included With Every Order
                </p>
                <p style={{ fontFamily: 'sans-serif', fontSize: '0.8rem', color: '#444', lineHeight: 1.6, marginBottom: '0.35rem' }}>
                  A high-density QR code printed on the left sleeve links directly to the full U.S. Constitution — all seven articles, all 27 amendments.
                </p>
                <a
                  href="https://constitution.congress.gov/constitution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'sans-serif', fontSize: '0.8rem', color: '#8B3A2A', textDecoration: 'underline' }}
                >
                  Scan or click to read it →
                </a>
              </div>
            </div>

            {/* Ships + urgency */}
            <div className="bg-parchment/60 border border-parchment-dark px-4 py-3 flex items-center gap-3">
              <svg className="w-4 h-4 text-navy/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <p className="font-sans text-xs text-navy/60 leading-relaxed">
                <span className="font-semibold text-navy">Made to order</span> — typically ships within{' '}
                <span className="font-semibold text-navy">3–5 business days</span>. Printed in the Republic.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 border-t border-parchment">
              {['Printed in the Republic', 'Free Shipping over $75', '30-Day Returns', 'Vet/Military 10% Off'].map((b) => (
                <span key={b} className="font-sans text-xs text-navy/50 flex items-center gap-1.5">
                  <span className="text-gold">✓</span> {b}
                </span>
              ))}
            </div>

            {/* Material specs */}
            <div className="bg-parchment/60 border border-parchment-dark p-5 space-y-3">
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-navy/50 font-semibold">
                Material &amp; Construction
              </h3>
              <p className="font-sans text-sm text-navy/80">
                <span className="font-semibold">Fabric:</span> {product.material.fabric}
              </p>
              <p className="font-sans text-sm text-navy/80">
                <span className="font-semibold">Weight:</span> {product.material.weight}
              </p>
              <ul className="space-y-1">
                {product.material.construction.map((spec) => (
                  <li key={spec} className="font-sans text-xs text-navy/60 flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full shrink-0" aria-hidden="true" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product story */}
        <ScrollReveal>
        <div className="mt-20 max-w-3xl">
          <div className="border-t border-parchment pt-12">
            <AnimatedHeading tag="h2" className="font-playfair text-navy text-3xl font-bold mb-8">
              The Story Behind the Design
            </AnimatedHeading>
            <div className="space-y-5 font-sans text-navy/70 text-base leading-relaxed">
              {product.story.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Customer reviews */}
        {product.reviews.length > 0 && (
          <ScrollReveal delay={50}>
          <div className="mt-16 max-w-3xl border-t border-parchment pt-12">
            <div className="flex items-center gap-4 mb-8">
              <AnimatedHeading tag="h2" className="font-playfair text-navy text-3xl font-bold">
                Reviews
              </AnimatedHeading>
              <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" showCount />
            </div>
            <ul className="space-y-6">
              {product.reviews.map((review, i) => (
                <li key={i} className="border-b border-parchment pb-6 last:border-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="font-sans text-navy font-semibold text-sm">{review.author}</p>
                      <p className="font-sans text-navy/40 text-xs">{review.location} · {review.date}</p>
                    </div>
                    <StarRating rating={review.rating} showCount={false} size="sm" />
                  </div>
                  <p className="font-sans text-navy/70 text-sm leading-relaxed">{review.body}</p>
                </li>
              ))}
            </ul>
          </div>
          </ScrollReveal>
        )}

        {/* Related products */}
        {related.length > 0 && (
          <ScrollReveal delay={50}>
          <div className="mt-20 border-t border-parchment pt-12">
            <AnimatedHeading tag="h2" className="font-playfair text-navy text-3xl font-bold mb-10">
              You Might Also Like
            </AnimatedHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.slice(0, 3).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
          </ScrollReveal>
        )}
      </div>

      {/* Guarantee */}
      <GuaranteeBlock />

      {/* Sticky mobile Add to Cart */}
      <StickyAddToCart
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        quantity={quantity}
        visible={stickyVisible}
        onAddToCart={handleAddToCart}
        addedMsg={addedMsg}
      />

      {sizeGuideOpen && <SizeGuide onClose={() => setSizeGuideOpen(false)} />}
    </>
  );
}
