import AnimatedHeading from '../components/ui/AnimatedHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import logoIcon from '../assets/logo-icon.webp';
import { pageMeta, type RouteMetaArgs } from '../lib/seo';

export function meta({ matches }: RouteMetaArgs) {
  return pageMeta({
    matches,
    title: 'Our Story | Born from Bourbon & Frustration',
    description:
      'Founded in Waynedale, Indiana. Originalist, anti-partisan, unapologetically constitutional apparel built for the Remnant.',
    path: '/about',
  });
}

const VALUES = [
  {
    title: 'Originalist',
    body: 'The Constitution means what it says. Not what we wish it said. Not what it would say if the Founders had anticipated everything that\'s happened since. What it says. The amendment process exists for a reason.',
  },
  {
    title: 'Anti-Partisan',
    body: 'Neither party owns the Constitution. Both have used their time in power to erode it. We\'re not interested in helping either side score points. We\'re interested in the document.',
  },
  {
    title: 'Unapologetically Constitutional',
    body: 'Polite disagreement has its place. But when rights are at stake, politeness is not a virtue. The people who wrote the founding documents were not polite about it. We don\'t feel obligated to be either.',
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="bg-navy min-h-[420px] flex flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy" />
        <div className="relative z-10">
          <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-5">
            Our Story
          </p>
          <AnimatedHeading
            tag="h1"
            className="font-playfair text-cream text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            Born from Bourbon
            <br />
            <span className="italic">&amp; Frustration</span>
          </AnimatedHeading>
          <p className="font-sans text-cream/60 text-lg max-w-md mx-auto leading-relaxed">
            Founded in Waynedale, Indiana. Built for the Remnant.
          </p>
        </div>
      </div>

      {/* Brand icon divider */}
      <div className="bg-navy py-16 flex flex-col items-center justify-center gap-6">
        <p className="font-playfair text-cream text-3xl md:text-4xl font-bold text-center">
          We are the <span className="italic">Remnant</span>.
        </p>
        <img
          src={logoIcon}
          alt="Forefather Threads"
          style={{
            height: '96px',
            width: 'auto',
            filter: 'drop-shadow(0 0 20px rgba(200,146,42,0.3))',
          }}
        />
      </div>

      {/* Origin story */}
      <ScrollReveal>
        <section className="bg-cream py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-7 font-sans text-navy/70 text-base leading-relaxed">
              <p className="text-lg text-navy/80 font-medium">
                Forefather Threads was born over bourbon in Waynedale, Indiana — but the
                idea had been building for thirty years.
              </p>
              <p>
                I&apos;ve spent my life in places most people don&apos;t think about.
                Different industries. Different risks. Same lesson every time: when systems
                fail, people pay the price. You maintain what matters. You don&apos;t cut
                corners. You don&apos;t compromise on the fundamentals.
              </p>
              <p>
                I got tired of watching rights disappear behind red tape while everyone
                argued about which team was to blame. Both parties are guilty. We&apos;re
                not playing their game.
              </p>
              <p>
                This company didn&apos;t start with a business plan. It started with late
                nights, good whiskey, and uncomfortable conversations about what we were
                actually willing to do about it.
              </p>
              <p>
                We&apos;re not here to sell you another flag-waving t-shirt. We&apos;re not
                here to pick a side. We&apos;re here for The Remnant — the ones who
                maintain what matters when everyone else has stopped looking.
              </p>
              <p className="font-medium text-navy/80">
                The Constitution wasn&apos;t written in pencil. We didn&apos;t build this
                company in pencil either.
              </p>

              <p>
                Isaiah spoke of the Remnant — the small number of people in any
                civilization who carry the knowledge of what is true and right when the
                majority has forgotten or abandoned it. The Remnant is not a club. You
                don&apos;t apply for membership. You don&apos;t get a card.
              </p>
              <p>
                You find out you&apos;re in the Remnant when you realize you&apos;re one of
                the few people in any given room who still cares about a thing that most
                people have decided to stop caring about. If you&apos;ve made it this far,
                you probably know what we mean.
              </p>
              <p>
                We built this for those people. Everything we make is designed to start the
                right conversations, carry real meaning, and hold up to the wear of someone
                who uses it to stand for something.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Values */}
      <ScrollReveal delay={50}>
        <section className="bg-navy py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-4">
                What We Stand On
              </p>
              <AnimatedHeading tag="h2" className="font-playfair text-cream text-4xl font-bold">
                Three Pillars. No Exceptions.
              </AnimatedHeading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {VALUES.map((value, i) => (
                <ScrollReveal key={value.title} delay={i * 100}>
                  <div className="border-t border-gold/30 pt-8">
                    <h3 className="font-playfair text-gold text-xl font-semibold mb-4">
                      {value.title}
                    </h3>
                    <p className="font-sans text-cream/60 text-sm leading-relaxed">{value.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
