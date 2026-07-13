import { useState, type FormEvent } from 'react';
import AnimatedHeading from '../ui/AnimatedHeading';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    setSubmitError('');
    setIsSubmitting(true);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'intelligence-brief',
          email,
        }).toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Signup error:', err);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="email-signup" className="bg-navy py-20 px-6 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-4">
          Stay in the Fight
        </p>
        <AnimatedHeading tag="h2" className="font-playfair text-cream text-3xl sm:text-4xl font-bold mb-4">
          Join the Intelligence Brief
        </AnimatedHeading>
        <p className="font-sans text-cream/60 text-base leading-relaxed mb-3 max-w-lg mx-auto">
          Biweekly dispatches for the principled. New drops, restocks, constitutional
          commentary, and occasional field notes from Waynedale.
        </p>
        <p className="font-sans text-cream/40 text-sm mb-4">
          No noise. No partisanship. Just signal. Unsubscribe anytime.
        </p>
        <p className="font-sans text-gold text-sm font-semibold mb-8 max-w-lg mx-auto">
          Join today and get 15% off your first order with code{' '}
          <span className="font-bold tracking-wide">PATRIOT15</span> (orders $50+).
        </p>

        {/*
          Static, always-present duplicate so Netlify's build-time bot can
          detect the form schema. The visible form below is conditionally
          rendered (hidden entirely once submitted=true), so it wouldn't be
          reliably present in the prerendered HTML for Netlify to read the
          field list from.
        */}
        <form
          name="intelligence-brief"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
          style={{ display: 'none' }}
        >
          <input type="hidden" name="form-name" value="intelligence-brief" />
          <input type="text" name="bot-field" />
          <input type="email" name="email" />
        </form>

        {submitted ? (
          <div className="bg-navy-light border border-gold/30 text-cream py-6 px-8">
            <p className="font-playfair text-gold text-xl font-semibold mb-2">
              You're in the Brief.
            </p>
            <p className="font-sans text-cream/60 text-sm">
              First dispatch arrives within 48 hours. Welcome to the Remnant.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto" noValidate>
            {/* Email */}
            <div className="flex flex-col sm:flex-row gap-0">
              <div className="flex-1">
                <label htmlFor="email-signup-input" className="sr-only">Email address</label>
                <input
                  id="email-signup-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-5 py-4 font-sans text-sm text-navy bg-cream border border-cream/20 focus:outline-none focus:border-gold placeholder:text-navy/30"
                  aria-describedby={error ? 'email-error' : undefined}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-rust text-cream font-sans text-xs tracking-[0.15em] uppercase px-7 py-4 hover:bg-rust-dark transition-colors font-bold whitespace-nowrap border border-rust disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enlisting...' : 'Join the Brief'}
              </button>
            </div>

            {error && (
              <p id="email-error" className="font-sans text-rust text-xs text-left">
                {error}
              </p>
            )}

            {submitError && (
              <p className="font-sans text-rust text-xs text-left">
                {submitError}
              </p>
            )}
          </form>
        )}

        <p className="font-sans text-cream/60 text-xs mt-6 max-w-sm mx-auto leading-relaxed">
          We respect your inbox the way the Founders respected enumerated rights — only
          what's authorized. No spam, ever.
        </p>
      </div>
    </section>
  );
}
