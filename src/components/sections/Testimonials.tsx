import StarRating from '../ui/StarRating';

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Wore it to a town hall. Three different people stopped me to ask where I got it. Ended up having the kind of conversation about the Second Amendment I hadn\'t had in years.',
    author: 'Marcus T.',
    location: 'Tulsa, OK',
    product: 'The Remnant',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'The QR code thing isn\'t a gimmick. My brother-in-law scanned it at Thanksgiving dinner and spent the next hour actually reading the Bill of Rights. Worth every penny.',
    author: 'Sarah K.',
    location: 'Nashville, TN',
    product: 'We The People',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'I\'ve bought from the other "patriotic" brands. Most of them are cheap prints on cheap shirts. This is different. You can feel the difference the moment you hold it.',
    author: 'Derek M.',
    location: 'Billings, MT',
    product: 'The Remnant',
    rating: 5,
  },
  {
    id: 4,
    quote:
      'Finally a brand that isn\'t waving a flag for one party. The manifesto is the first time I\'ve seen someone say both sides are guilty and actually mean it. Bought two.',
    author: 'Robert A.',
    location: 'Austin, TX',
    product: 'DIRECTIVE 02: FAFO',
    rating: 5,
  },
  {
    id: 5,
    quote:
      'Best weight cotton I\'ve owned at this price. Washed it six times and it looks better than new. The message is right. The quality is right.',
    author: 'James R.',
    location: 'Colorado Springs, CO',
    product: 'The Remnant',
    rating: 5,
  },
  {
    id: 6,
    quote:
      'Ordered on a Friday. Had it by Wednesday. Quality is what you\'d expect from something made to order — not mass-produced overseas. The deployment list on the back starts every conversation.',
    author: 'Chris W.',
    location: 'Fayetteville, NC',
    product: 'T.R.T.',
    rating: 5,
  },
];

const AGGREGATE = { rating: 4.9, count: 311 };

export default function Testimonials() {
  return (
    <section className="bg-navy py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Field Reports
          </p>
          <h2 className="font-playfair text-cream text-4xl font-bold mb-4">
            What the Remnant Is Saying
          </h2>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-playfair text-cream text-lg font-semibold">
              {AGGREGATE.rating}
            </span>
            <span className="font-sans text-cream/40 text-sm">
              from {AGGREGATE.count.toLocaleString()} verified buyers
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-navy-light border border-cream/10 p-6 flex flex-col gap-4"
            >
              <StarRating rating={t.rating} showCount={false} size="sm" />
              <blockquote className="font-playfair text-cream/80 text-base italic leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-cream/10 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-sans text-cream text-sm font-semibold">{t.author}</p>
                  <p className="font-sans text-cream/40 text-xs">{t.location}</p>
                </div>
                <span className="font-sans text-gold/70 text-xs tracking-wide bg-gold/10 px-2 py-1">
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center font-sans text-cream/30 text-xs mt-10 tracking-wide">
          Verified purchases only · Reviews collected at delivery
        </p>
      </div>
    </section>
  );
}
