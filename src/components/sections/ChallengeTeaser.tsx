import { Link } from 'react-router';
import DecorativeText from '../ui/DecorativeText';

export default function ChallengeTeaser() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#0B1A2E', padding: '5rem 2rem', textAlign: 'center' }}
    >
      <DecorativeText
        text="1787"
        size="30vw"
        opacity={0.05}
        color="#F5F0E8"
        position="right"
        font="playfair"
      />

      <div className="relative z-10" style={{ maxWidth: '680px', margin: '0 auto' }}>
        <p
          className="font-sans uppercase"
          style={{ fontSize: '0.7rem', letterSpacing: '0.22em', color: '#C8922A', marginBottom: '1.25rem' }}
        >
          Test Your Knowledge
        </p>

        <h2
          className="font-playfair text-cream"
          style={{
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: '1.05',
            marginBottom: '0.75rem',
          }}
        >
          The Constitution Challenge
        </h2>

        <p
          className="font-playfair italic"
          style={{ fontSize: '1.2rem', color: '#C8922A', marginBottom: '1.25rem' }}
        >
          How well do you know the document on your sleeve?
        </p>

        <p
          className="font-sans"
          style={{
            fontSize: '0.95rem',
            color: 'rgba(245,240,232,0.65)',
            lineHeight: '1.75',
            maxWidth: '480px',
            margin: '0 auto 2.5rem',
          }}
        >
          Five questions. Primary sources only. No spin. No partisanship. Just the
          document as written and ratified in 1787.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link
            to="/constitution-challenge"
            className="font-sans uppercase"
            style={{
              display: 'block',
              background: '#B94B2C',
              color: '#F5F0E8',
              padding: '1rem 2.5rem',
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              textDecoration: 'none',
              borderRadius: '2px',
              width: '100%',
              maxWidth: '320px',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}
          >
            Accept the Challenge
          </Link>
        </div>
      </div>
    </section>
  );
}
