import { Link } from 'react-router-dom';

export default function Testimonials() {
  return (
    <section className="bg-navy py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-6">
          Field Reports
        </p>
        <h2 className="font-playfair text-cream text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Be Among the First
        </h2>
        <div className="w-12 h-px bg-gold/40 mx-auto mb-8" aria-hidden="true" />
        <p className="font-sans text-cream/60 text-base leading-relaxed max-w-md mx-auto mb-10">
          Reviews from the Remnant coming soon. Order yours today and join the founding customers.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-rust text-cream font-sans text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-rust-dark transition-colors duration-200 font-bold"
        >
          Enter the Armory
        </Link>
      </div>
    </section>
  );
}
