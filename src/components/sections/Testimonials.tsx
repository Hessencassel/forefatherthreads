import { Link } from 'react-router';

export default function Testimonials() {
  return (
    <section className="bg-navy" style={{ padding: '5rem 2rem', textAlign: 'center' }}>
      <div className="max-w-md mx-auto">
        <p
          className="font-sans"
          style={{
            color: '#C8922A',
            fontSize: '0.7rem',
            letterSpacing: '0.22em',
            fontVariant: 'small-caps',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
          Social Proof
        </p>
        <h2
          className="font-playfair text-cream font-bold"
          style={{ fontSize: '2rem', marginBottom: '1.25rem' }}
        >
          Be Among the First.
        </h2>
        <p
          className="font-sans text-cream"
          style={{ fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '480px', margin: '0 auto 2.5rem' }}
        >
          Reviews from the Remnant are coming. Every garment is made to order and
          built to last. Order yours today — and join the founding customers whose
          words will be the first on this page.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-rust text-white font-sans text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-rust-dark transition-colors duration-200 font-bold"
        >
          Enter the Armory
        </Link>
      </div>
    </section>
  );
}
