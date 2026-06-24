import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import ScrollReveal from '../ui/ScrollReveal';
import { LinkButton } from '../ui/Button';

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  showCta?: boolean;
  limit?: number;
}

export default function ProductGrid({
  title = 'The Armory',
  subtitle = 'Three shirts. No filler. Built for the principled.',
  showCta = true,
  limit,
}: ProductGridProps) {
  const displayed = limit ? products.slice(0, limit) : products;

  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-navy/40 text-xs tracking-[0.3em] uppercase mb-3">
            The Collection
          </p>
          <h2 className="font-playfair text-navy text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="font-sans text-navy/60 text-lg max-w-md mx-auto">{subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {displayed.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 100}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        {showCta && (
          <div className="mt-16 text-center">
            <LinkButton href="/shop" variant="ghost" size="md">
              View Full Collection
            </LinkButton>
          </div>
        )}
      </div>
    </section>
  );
}
