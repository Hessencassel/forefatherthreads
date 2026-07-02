import React from 'react';
import AnimatedHeading from '../components/ui/AnimatedHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import logoIcon from '../assets/logo-icon.webp';
import { pageMeta, type RouteMetaArgs } from '../lib/seo';

export function meta({ matches }: RouteMetaArgs) {
  return pageMeta({
    matches,
    title: 'Manifesto | Forefather Threads',
    description:
      'Doctrine, not decoration. The manifesto behind Forefather Threads — constitutional apparel with no compromise, no party allegiance.',
    path: '/manifesto',
  });
}

function InconvenientTruthInsert() {
  return (
    <div style={{ textAlign: 'center', margin: '4rem 0' }}>
      <blockquote
        className="font-playfair italic"
        style={{
          fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
          color: '#C8922A',
          lineHeight: 1.4,
          maxWidth: '660px',
          margin: '0 auto 2.5rem',
          padding: '2.5rem 0',
          borderTop: '1px solid rgba(200,146,42,0.3)',
          borderBottom: '1px solid rgba(200,146,42,0.3)',
        }}
      >
        The biggest threat to the Constitution isn&rsquo;t any politician. It&rsquo;s the
        millions of Americans who will argue about it passionately without ever having read it.
      </blockquote>
      <p
        className="font-sans"
        style={{
          color: 'rgba(245,239,224,0.7)',
          fontSize: '0.95rem',
          lineHeight: 1.8,
          maxWidth: '580px',
          margin: '0 auto',
        }}
      >
        That&rsquo;s not a partisan statement. It&rsquo;s a factual one. Constitutional
        literacy has been declining for decades across the political spectrum. Forefather Threads
        exists because we believe you cannot defend what you do not know. The QR code on your
        sleeve is not a gimmick. It is a direct response to a real crisis — one conversation,
        one scan, one primary source at a time.
      </p>
    </div>
  );
}

const SECTIONS = [
  {
    id: 'clarity',
    heading: 'I. The Clarity Problem',
    body: `There is a peculiar kind of American who still reads the founding documents for pleasure.

Not for class. Not for debate prep. Not to score points on the internet. For the same reason people still read great literature — because something in it is true, and they need to be reminded of that truth regularly.

This is not nostalgia. Nostalgia is for people who think the past was better. This is something different: a recognition that certain ideas are correct regardless of when they were written, and that abandoning correct ideas because they're inconvenient is how civilizations end.`,
    pullQuote: null,
  },
  {
    id: 'document',
    heading: 'II. The Document Is Not the Decoration',
    body: `The Constitution is not a museum piece. It is not a relic. It is an operating system — one designed with full knowledge of human nature's tendency toward corruption, toward the accumulation of power, toward the comfortable rationalization of tyranny.

The Founders were not naive. They were not idealists dreaming of a utopia. They were practical men who had studied history, watched empires rise and fall, and designed a system specifically to prevent the failure modes they had identified. The checks. The balances. The enumerated powers. The Bill of Rights. None of it was accidental.

The document has been tested. It has also been eroded — slowly, incrementally, by people who found each erosion defensible in isolation. That's how it always works. No one announces that they're dismantling a republic. They just keep finding reasons.`,
    pullQuote: 'The checks. The balances. The enumerated powers. None of it was accidental.',
  },
  {
    id: 'not',
    heading: 'III. What We Are Not',
    body: `We are not a political party. We are not a movement. We are not asking you to vote for anyone.

We are not tribal. The Constitution belongs to everyone who lives under it. The rights it protects are not conservative rights or liberal rights. They are American rights — which is to say, human rights that the American experiment codified and protected, imperfectly but meaningfully.

We are not aggressive. We are not angry. We are disappointed, in the specific way that a person is disappointed when they see something they love treated carelessly. But disappointment is not despair. It is the precondition for action.`,
    pullQuote: null,
  },
  {
    id: 'remnant',
    heading: 'IV. The Remnant',
    body: `Isaiah spoke of the Remnant — the small number of people in any civilization who carry the knowledge of what is true and right when the majority has forgotten or abandoned it. The Remnant is not a club. You don't apply for membership. You don't get a card.

You find out you're in the Remnant when you realize you're one of the few people in any given room who still cares about a thing that most people have decided to stop caring about.

The Remnant doesn't look the same everywhere. It isn't a demographic. It isn't a region. It isn't a generation. It is people who, when confronted with a clear principle and a convenient rationalization for abandoning it, choose the principle. You know who you are.`,
    pullQuote: 'You find out you\'re in the Remnant when you realize you\'re one of the few people in the room who still cares.',
  },
  {
    id: 'doctrine',
    heading: 'V. Doctrine, Not Decoration',
    body: `We make apparel. We make it well. We use quality materials, print in the United States, and ship from the heartland.

But what we are actually selling is a commitment. Every shirt we make means something. The words on it were chosen because they are true, not because they test well in focus groups. The designs exist to start conversations, not to end them.

Wear this if you still take the founding documents seriously. Wear this if you believe in limited government not as a partisan position but as a structural necessity. Wear this if you think the Constitution is a contract, not a suggestion.

If you think these are radical positions, we understand why you think that. But we'd gently push back: these are the least radical positions in American political history. They are, in fact, the ones the country was built on.`,
    pullQuote: 'Every shirt means something. The words on it were chosen because they are true.',
  },
];

export default function Manifesto() {
  return (
    <div className="bg-navy min-h-screen">
      {/* Header */}
      <div className="border-b border-cream/10 px-6 py-20 text-center">
        <img
          src={logoIcon}
          alt="Forefather Threads"
          style={{
            height: '120px',
            width: 'auto',
            marginBottom: '2rem',
            filter: 'drop-shadow(0 0 20px rgba(200,146,42,0.3))',
          }}
          className="mx-auto"
        />
        <p className="font-sans text-gold text-xs tracking-[0.4em] uppercase mb-5">
          Forefather Threads
        </p>
        <AnimatedHeading
          tag="h1"
          className="font-playfair text-cream text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6"
        >
          Manifesto
        </AnimatedHeading>
        <div className="w-24 h-0.5 bg-gold/40 mx-auto mb-8" />
        <p className="font-playfair text-cream/50 italic text-xl max-w-lg mx-auto leading-relaxed">
          Doctrine, not decoration.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-20">
        {SECTIONS.map((section, i) => (
          <React.Fragment key={section.id}>
          <ScrollReveal delay={i * 50}>
            <article id={section.id} className="scroll-mt-24">
              <AnimatedHeading
                tag="h2"
                className="font-playfair text-gold text-2xl md:text-3xl font-semibold mb-8 tracking-tight"
              >
                {section.heading}
              </AnimatedHeading>

              <div className="space-y-6">
                {section.body.split('\n\n').map((para, j) => {
                  if (section.pullQuote && j === 1) {
                    return (
                      <div key={j}>
                        <p className="font-sans text-cream/70 text-base leading-relaxed">{para}</p>
                        <PullQuote text={section.pullQuote} />
                      </div>
                    );
                  }
                  return (
                    <p key={j} className="font-sans text-cream/70 text-base leading-relaxed">
                      {para}
                    </p>
                  );
                })}
              </div>

              <div className="mt-8 w-8 h-px bg-gold/30" />
            </article>
          </ScrollReveal>
          {i === 1 && (
            <ScrollReveal delay={75}>
              <InconvenientTruthInsert />
            </ScrollReveal>
          )}
          </React.Fragment>
        ))}

        {/* Closing */}
        <ScrollReveal delay={100}>
          <div className="border-t border-cream/10 pt-16 text-center">
            <p className="font-playfair text-gold text-3xl italic font-medium mb-4">
              &ldquo;We built this for the Remnant.&rdquo;
            </p>
            <p className="font-sans text-cream/40 text-sm tracking-wider">
              Forefather Threads — Waynedale, Indiana
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Section nav */}
      <aside className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-10">
        <nav className="flex flex-col gap-3" aria-label="Manifesto sections">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="w-2 h-2 rounded-full bg-cream/20 hover:bg-gold transition-colors duration-200 block"
              title={s.heading}
            />
          ))}
        </nav>
      </aside>
    </div>
  );
}

function PullQuote({ text }: { text: string }) {
  return (
    <blockquote className="my-8 pl-6 border-l-2 border-gold">
      <p className="font-playfair text-gold text-xl italic leading-relaxed">&ldquo;{text}&rdquo;</p>
    </blockquote>
  );
}
