import AnimatedHeading from '../components/ui/AnimatedHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

const QUOTES = [
  {
    text: "I know of no pursuit in which more zeal and important service can be rendered to any Country than by improving its agriculture, its breed of useful animals, and other branches of a husbandman's cares.",
    author: 'George Washington',
    source: 'Letter to John Sinclair',
    date: 'July 20, 1794',
  },
  {
    text: 'I, however, place economy among the first and most important republican virtues, and public debt as the greatest of the dangers to be feared.',
    author: 'Thomas Jefferson',
    source: 'Letter to William Plumer',
    date: 'July 21, 1816',
  },
  {
    text: 'Whenever the people are well informed, they can be trusted with their own government; that whenever things get so far wrong as to attract their notice, they may be relied on to set them to rights.',
    author: 'Thomas Jefferson',
    source: 'Letter to Richard Price',
    date: 'January 8, 1789',
  },
  {
    text: 'I have often thought that nothing would do more extensive good at small expense than the establishment of a small circulating library in every county.',
    author: 'Thomas Jefferson',
    source: 'Letter to John Wyche',
    date: 'May 19, 1809',
  },
  {
    text: 'It is the great parent of science and of virtue, and that a nation will be great in both, always in proportion as it is free.',
    author: 'Thomas Jefferson',
    source: 'Letter to Joseph Willard',
    date: 'March 24, 1789',
  },
];

export default function FoundersWords() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Page header */}
      <div className="py-20 px-6 text-center border-b border-gold/20">
        <p
          className="font-sans text-gold text-[0.65rem] tracking-[0.22em] uppercase mb-5"
          style={{ fontVariant: 'small-caps' }}
        >
          Primary Sources. No Paraphrase.
        </p>
        <AnimatedHeading tag="h1" className="font-playfair text-cream text-5xl md:text-6xl font-bold mb-6 leading-tight">
          The Founders&rsquo; Words
        </AnimatedHeading>
        <p className="font-sans text-cream/50 text-sm max-w-xl mx-auto leading-relaxed">
          These are not paraphrases or interpretations. Each quote below is drawn directly
          from a primary source document — a letter, a speech, a published pamphlet — with
          the full citation given equal weight to the words themselves. Because where it
          came from is part of the point.
        </p>
        <div className="w-12 h-0.5 bg-gold/40 mx-auto mt-8" />
      </div>

      {/* Quotes */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-0">
        {QUOTES.map((q, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <div className="py-14">
              {/* Quote */}
              <blockquote className="font-playfair text-cream text-2xl md:text-3xl italic leading-snug mb-8">
                &ldquo;{q.text}&rdquo;
              </blockquote>

              {/* Citation */}
              <div className="pl-1">
                <p
                  className="font-sans text-gold text-[0.65rem] tracking-[0.2em] uppercase mb-1"
                  style={{ fontVariant: 'small-caps' }}
                >
                  Primary Source
                </p>
                <p className="font-playfair text-gold text-lg font-semibold mb-1">
                  {q.author}
                </p>
                <p className="font-sans text-cream/50 text-sm">
                  <span className="text-cream/70">{q.source}</span>
                  {' · '}
                  {q.date}
                </p>
              </div>

              {/* Divider — skip after last quote */}
              {i < QUOTES.length - 1 && (
                <div className="w-full h-px bg-gold/20 mt-14" />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
