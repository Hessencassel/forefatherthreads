import ProductGrid from '../components/sections/ProductGrid';

export default function Shop() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy py-20 px-6 text-center">
        <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-4">
          Standard Issue Gear for The Remnant
        </p>
        <h1 className="font-playfair text-cream text-5xl md:text-6xl font-bold mb-4">
          The Armory
        </h1>
        <p className="font-sans text-cream/60 text-lg max-w-md mx-auto">
          Standalone. Worn, used, and kept. Not seasonal. Not disposable. Every piece
          equipped with the source code on the left sleeve.
        </p>
        <div className="w-16 h-0.5 bg-gold/40 mx-auto mt-8" />
      </div>

      {/* Products */}
      <ProductGrid
        title=""
        subtitle=""
        showCta={false}
      />

      {/* Bottom callout */}
      <div className="bg-parchment py-16 px-6 text-center border-t border-parchment-dark">
        <p className="font-playfair text-navy text-2xl font-semibold mb-3">
          More designs coming.
        </p>
        <p className="font-sans text-navy/60 text-sm max-w-sm mx-auto leading-relaxed">
          We release slowly and deliberately. Join the Intelligence Brief to hear first.
        </p>
      </div>
    </>
  );
}
