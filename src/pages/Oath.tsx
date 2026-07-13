import { useState, type FormEvent } from 'react';
import AnimatedHeading from '../components/ui/AnimatedHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import { LinkButton } from '../components/ui/Button';
import logoIcon from '../assets/logo-icon.webp';
import { pageMeta, type RouteMetaArgs } from '../lib/seo';

export function meta({ matches }: RouteMetaArgs) {
  return pageMeta({
    matches,
    title: 'Take the Oath | Join the Remnant',
    description:
      'This is not a newsletter subscription. This is a declaration. Affirm the oath and join the Remnant.',
    path: '/oath',
  });
}

export default function Oath() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [affirmed, setAffirmed] = useState(false);
  const [affirmError, setAffirmError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!affirmed) {
      setAffirmError('You must affirm the oath to join the Remnant.');
      return;
    }
    setAffirmError('');
    setSubmitError('');
    setIsSubmitting(true);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'remnant-oath',
          firstName,
          email,
          affirmed: 'true',
        }).toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Oath submission error:', err);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-navy" style={{ minHeight: '100vh' }}>
      {/*
        Static, always-present duplicate so Netlify's build-time bot can
        detect the "remnant-oath" form schema — the visible form below is
        unmounted entirely once submitted=true, so it alone can't be
        relied on to be present in the prerendered HTML.
      */}
      <form
        name="remnant-oath"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
        style={{ display: 'none' }}
      >
        <input type="hidden" name="form-name" value="remnant-oath" />
        <input type="text" name="bot-field" />
        <input type="text" name="firstName" />
        <input type="email" name="email" />
        <input type="checkbox" name="affirmed" />
      </form>

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '6rem 2rem' }}>
        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <style>{`
              @keyframes fadeInPulse {
                0% { opacity: 0; transform: scale(0.8); }
                100% { opacity: 1; transform: scale(1); }
              }
            `}</style>
            <span
              aria-hidden="true"
              style={{
                display: 'block',
                fontSize: '3rem',
                lineHeight: 1,
                color: '#C8922A',
                marginBottom: '1.5rem',
                opacity: 0,
                animation: 'fadeInPulse 0.6s ease forwards',
              }}
            >
              ✦
            </span>
            <h1
              className="font-playfair text-cream font-bold"
              style={{ fontSize: '2rem', marginBottom: '1.25rem' }}
            >
              Welcome to the Remnant.
            </h1>
            <p
              className="font-sans text-cream"
              style={{ fontSize: '1rem', lineHeight: 1.75, maxWidth: '480px', margin: '0 auto 2.5rem' }}
            >
              Your oath has been recorded. You will receive the Intelligence Brief —
              dispatches for the principled, not the partisan. No noise. Just doctrine.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <LinkButton href="/shop" variant="rust" size="lg">
                Enter the Armory
              </LinkButton>
              <LinkButton href="/manifesto" variant="gold-outline" size="lg">
                Read the Manifesto
              </LinkButton>
            </div>
          </div>
        ) : (
          <>
            {/* Section 1 — Header */}
            <ScrollReveal>
              <div style={{ textAlign: 'center' }}>
                <img
                  src={logoIcon}
                  alt="Forefather Threads"
                  style={{
                    height: '80px',
                    width: 'auto',
                    filter: 'drop-shadow(0 0 20px rgba(200,146,42,0.3))',
                    margin: '0 auto 2rem',
                    display: 'block',
                  }}
                />
                <p
                  className="font-sans"
                  style={{
                    color: '#C8922A',
                    fontSize: '0.7rem',
                    letterSpacing: '0.22em',
                    fontVariant: 'small-caps',
                    textTransform: 'uppercase',
                    marginBottom: '1.25rem',
                  }}
                >
                  Join the Remnant
                </p>
                <AnimatedHeading
                  tag="h1"
                  className="font-playfair font-black text-cream text-[clamp(2.8rem,5vw,4rem)] leading-[1.05] mb-4"
                >
                  I Am the Remnant.
                </AnimatedHeading>
                <p className="font-playfair italic text-gold text-[1.1rem]">
                  This is not a newsletter subscription. This is a declaration.
                </p>
                <div className="w-[60px] h-px bg-gold mx-auto" style={{ margin: '2rem auto' }} />
                <p className="font-sans text-cream text-base leading-[1.8] max-w-[580px] mx-auto">
                  The Remnant is the community of Americans who still read the founding
                  documents, still believe in constitutional government, and refuse to
                  drift with the current. If that is you — sign below.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 2 — The Oath Form */}
            <ScrollReveal delay={100}>
              <div
                style={{
                  background: 'rgba(245,239,224,0.06)',
                  border: '1px solid rgba(200,146,42,0.2)',
                  borderRadius: '4px',
                  padding: '2.5rem',
                  marginTop: '2rem',
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="oath-firstname" className="sr-only">First Name</label>
                    <input
                      id="oath-firstname"
                      type="text"
                      name="firstName"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      className="w-full bg-transparent border border-cream/20 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-cream/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="oath-email" className="sr-only">Email Address</label>
                    <input
                      id="oath-email"
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full bg-transparent border border-cream/20 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-cream/30"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="oath-affirm"
                      type="checkbox"
                      checked={affirmed}
                      onChange={(e) => {
                        setAffirmed(e.target.checked);
                        if (e.target.checked) setAffirmError('');
                      }}
                      className="mt-1 w-5 h-5 accent-gold shrink-0 cursor-pointer"
                    />
                    <label
                      htmlFor="oath-affirm"
                      className="font-playfair italic text-cream text-[1.05rem] leading-snug cursor-pointer"
                    >
                      I affirm that I am the Remnant. I will carry the document. I will know my rights.
                    </label>
                  </div>

                  {affirmError && (
                    <p className="font-sans text-gold text-xs">{affirmError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-rust text-white font-sans font-semibold uppercase hover:bg-rust-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontSize: '0.85rem', letterSpacing: '0.14em', padding: '1.1rem' }}
                  >
                    {isSubmitting ? 'Recording your oath...' : 'Take the Oath'}
                  </button>

                  {submitError && (
                    <p className="font-sans text-rust text-xs text-center">{submitError}</p>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </>
        )}
      </div>
    </div>
  );
}
