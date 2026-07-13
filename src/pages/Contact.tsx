import { useState } from 'react';
import AnimatedHeading from '../components/ui/AnimatedHeading';
import { pageMeta, type RouteMetaArgs } from '../lib/seo';

export function meta({ matches }: RouteMetaArgs) {
  return pageMeta({
    matches,
    title: 'Contact Us | Forefather Threads',
    description:
      'Questions about an order, doctrine, or a defective issue? Send a transmission — we respond to every message within 2400 hours.',
    path: '/contact',
  });
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Transmission failed. Try again or email support@forefatherthreads.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <div className="py-20 px-6 text-center border-b border-gold/20">
        <p className="font-sans text-gold text-[0.65rem] tracking-[0.22em] uppercase mb-4" style={{ fontVariant: 'small-caps' }}>
          Secure Transmission
        </p>
        <AnimatedHeading tag="h1" className="font-playfair text-cream text-5xl md:text-6xl font-bold mb-6">
          Channel Open
        </AnimatedHeading>
        <p className="font-sans text-cream/60 text-base max-w-md mx-auto leading-relaxed">
          For logistics support, doctrine inquiries, or report of defective issue.
          All transmissions are encrypted. Expect a response within 2400 hours.
        </p>
        <div className="w-12 h-0.5 bg-gold/40 mx-auto mt-8" />
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        {submitted ? (
          <div className="text-center py-16">
            <p className="font-sans text-gold text-[0.65rem] tracking-[0.22em] uppercase mb-4" style={{ fontVariant: 'small-caps' }}>
              Transmission Received
            </p>
            <p className="font-playfair text-cream text-2xl italic mb-4">
              "Message logged. Expect a response within 2400 hours."
            </p>
            <div className="w-12 h-0.5 bg-gold/40 mx-auto" />
          </div>
        ) : (
          <form name="contact" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block font-sans text-[0.65rem] tracking-[0.18em] uppercase text-cream/60 mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-cream/20 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-cream/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block font-sans text-[0.65rem] tracking-[0.18em] uppercase text-cream/60 mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-cream/20 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-cream/20"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block font-sans text-[0.65rem] tracking-[0.18em] uppercase text-cream/60 mb-2">
                Subject
              </label>
              <select
                id="contact-subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-navy border border-cream/20 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors"
              >
                <option value="" disabled>Select subject</option>
                <option value="logistics">Logistics / Order Support</option>
                <option value="doctrine">Doctrine Inquiry</option>
                <option value="defective">Defective Issue Report</option>
                <option value="wholesale">Wholesale / Bulk</option>
                <option value="other">Other Transmission</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block font-sans text-[0.65rem] tracking-[0.18em] uppercase text-cream/60 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-cream/20 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-cream/20 resize-none"
                placeholder="Your transmission..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold text-navy font-sans text-xs tracking-[0.18em] uppercase font-bold py-4 hover:bg-gold/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Transmitting...' : 'Send Transmission'}
            </button>

            {error && (
              <p className="font-sans text-xs text-center" style={{ color: '#B94B2C' }}>
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
