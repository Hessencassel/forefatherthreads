import { useState, type FormEvent } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    // Phase 2: POST to Klaviyo / email + SMS provider
  };

  return (
    <section className="bg-navy py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-4">
          Stay in the Fight
        </p>
        <h2 className="font-playfair text-cream text-3xl sm:text-4xl font-bold mb-4">
          Join the Intelligence Brief
        </h2>
        <p className="font-sans text-cream/60 text-base leading-relaxed mb-3 max-w-lg mx-auto">
          Biweekly dispatches for the principled. New drops, restocks, constitutional
          commentary, and occasional field notes from Waynedale.
        </p>
        <p className="font-sans text-cream/40 text-sm mb-8">
          No noise. No partisanship. Just signal. Unsubscribe anytime.
        </p>

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
                <label htmlFor="email-signup" className="sr-only">Email address</label>
                <input
                  id="email-signup"
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
                className="bg-rust text-cream font-sans text-xs tracking-[0.15em] uppercase px-7 py-4 hover:bg-rust-dark transition-colors font-bold whitespace-nowrap border border-rust"
              >
                Join the Brief
              </button>
            </div>

            {/* SMS opt-in */}
            <div className="flex items-start gap-3 text-left bg-navy-light border border-cream/10 px-4 py-3">
              <input
                id="sms-optin"
                type="checkbox"
                checked={smsOptIn}
                onChange={(e) => setSmsOptIn(e.target.checked)}
                className="mt-0.5 accent-gold shrink-0"
              />
              <label htmlFor="sms-optin" className="flex flex-col gap-1 cursor-pointer">
                <span className="font-sans text-cream text-sm font-semibold">
                  Get VIP text alerts
                </span>
                <span className="font-sans text-cream/50 text-xs leading-relaxed">
                  First access to new drops, restock alerts, and flash discounts. Msg & data rates may apply. Reply STOP to cancel.
                </span>
              </label>
            </div>

            {smsOptIn && (
              <div>
                <label htmlFor="phone-signup" className="sr-only">Phone number</label>
                <input
                  id="phone-signup"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number (optional)"
                  className="w-full px-5 py-3.5 font-sans text-sm text-navy bg-cream border border-cream/20 focus:outline-none focus:border-gold placeholder:text-navy/30"
                />
              </div>
            )}

            {error && (
              <p id="email-error" className="font-sans text-rust text-xs text-left">
                {error}
              </p>
            )}
          </form>
        )}

        <p className="font-sans text-cream/25 text-xs mt-6 max-w-sm mx-auto leading-relaxed">
          We respect your inbox the way the Founders respected enumerated rights — only
          what's authorized. No spam, ever.
        </p>
      </div>
    </section>
  );
}
