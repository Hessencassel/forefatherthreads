import ScrollReveal from '../components/ui/ScrollReveal';
import { LinkButton } from '../components/ui/Button';
import logoIcon from '../assets/logo-icon.png';
import constitutionQR from '../assets/Constitution-QR.png';

const ARTICLES = [
  {
    number: 'Article I',
    name: 'The Legislative Branch',
    description:
      'Establishes Congress — the Senate and House of Representatives — and defines its powers to make federal law.',
  },
  {
    number: 'Article II',
    name: 'The Executive Branch',
    description:
      'Establishes the Presidency, defines the powers of the Commander in Chief, and outlines the Electoral College.',
  },
  {
    number: 'Article III',
    name: 'The Judicial Branch',
    description:
      'Establishes the Supreme Court, defines federal judicial power, and addresses treason against the United States.',
  },
  {
    number: 'Article IV',
    name: 'The States',
    description:
      'Defines the relationship between states, guarantees republican government to each state, and addresses admission of new states.',
  },
  {
    number: 'Article V',
    name: 'The Amendment Process',
    description:
      'Establishes the process for amending the Constitution — requiring two-thirds of Congress and three-fourths of states.',
  },
  {
    number: 'Article VI',
    name: 'The Supremacy Clause',
    description:
      'Establishes the Constitution as the supreme law of the land, binding on all judges and government officials.',
  },
  {
    number: 'Article VII',
    name: 'Ratification',
    description:
      'Established the process by which the Constitution would be ratified by nine of the thirteen original states.',
  },
];

const AMENDMENTS = [
  { number: '1st', name: 'Freedom of Religion, Speech, Press, Assembly & Petition', description: 'Protects five fundamental freedoms from government interference.' },
  { number: '2nd', name: 'Right to Bear Arms', description: 'Protects the right of the people to keep and bear arms.' },
  { number: '3rd', name: 'Quartering of Soldiers', description: 'Prohibits housing soldiers in private homes without owner consent.' },
  { number: '4th', name: 'Search and Seizure', description: 'Protects against unreasonable searches and requires warrants with probable cause.' },
  { number: '5th', name: 'Rights of the Accused', description: 'Protects against self-incrimination, double jeopardy, and guarantees due process.' },
  { number: '6th', name: 'Right to a Speedy Trial', description: 'Guarantees the right to a speedy, public trial by an impartial jury.' },
  { number: '7th', name: 'Jury Trial in Civil Cases', description: 'Preserves the right to jury trial in federal civil cases.' },
  { number: '8th', name: 'Cruel and Unusual Punishment', description: 'Prohibits excessive bail, fines, and cruel and unusual punishment.' },
  { number: '9th', name: 'Rights Retained by the People', description: 'Clarifies that rights not listed in the Constitution are retained by the people.' },
  { number: '10th', name: 'Powers Reserved to the States', description: 'Powers not given to the federal government are reserved to the states or the people.' },
  { number: '11th', name: 'Judicial Limits', description: 'Limits federal court jurisdiction over lawsuits against states.' },
  { number: '12th', name: 'Presidential Election Process', description: 'Revised the Electoral College process for electing the President and Vice President.' },
  { number: '13th', name: 'Abolition of Slavery', description: 'Abolished slavery and involuntary servitude except as criminal punishment.' },
  { number: '14th', name: 'Citizenship Rights', description: 'Granted citizenship to formerly enslaved people and guaranteed equal protection of law.' },
  { number: '15th', name: 'Right to Vote (Race)', description: 'Prohibited denying the right to vote based on race or color.' },
  { number: '16th', name: 'Income Tax', description: 'Authorized Congress to levy a federal income tax.' },
  { number: '17th', name: 'Direct Election of Senators', description: 'Established direct election of senators by popular vote rather than state legislatures.' },
  { number: '18th', name: 'Prohibition', description: 'Prohibited the manufacture and sale of alcoholic beverages.' },
  { number: '19th', name: 'Right to Vote (Sex)', description: 'Prohibited denying the right to vote based on sex, granting women the right to vote.' },
  { number: '20th', name: 'Presidential Term Dates', description: 'Set the dates for the start of presidential and congressional terms.' },
  { number: '21st', name: 'Repeal of Prohibition', description: 'Repealed the 18th Amendment, ending Prohibition.' },
  { number: '22nd', name: 'Presidential Term Limits', description: 'Limited the President to two elected terms.' },
  { number: '23rd', name: 'DC Electoral Votes', description: 'Granted Washington D.C. electoral votes for presidential elections.' },
  { number: '24th', name: 'Abolition of Poll Tax', description: 'Prohibited poll taxes as a requirement to vote in federal elections.' },
  { number: '25th', name: 'Presidential Succession', description: 'Clarified the order of presidential succession and procedures for vacancies.' },
  { number: '26th', name: 'Voting Age', description: 'Lowered the federal voting age from 21 to 18.' },
  { number: '27th', name: 'Congressional Pay', description: 'Delayed any law changing congressional pay from taking effect until after the next election.' },
];

const GOLD_SHADOW = 'drop-shadow(0 0 20px rgba(200,146,42,0.3))';

export default function Constitution() {
  return (
    <div style={{ backgroundColor: '#0B1A2E', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 2rem' }}>

        {/* SECTION 1 — Page Header */}
        <ScrollReveal>
          <header className="text-center" style={{ marginBottom: '4rem' }}>
            <img
              src={logoIcon}
              alt="Forefather Threads"
              style={{ height: '80px', width: 'auto', filter: GOLD_SHADOW, marginBottom: '2rem' }}
              className="mx-auto"
            />
            <p
              className="font-sans"
              style={{
                color: '#C8922A',
                fontSize: '0.7rem',
                letterSpacing: '0.22em',
                fontVariant: 'small-caps',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              The Supreme Law of the Land
            </p>
            <h1
              className="font-playfair text-cream font-bold"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1, marginBottom: '1.25rem' }}
            >
              The United States Constitution
            </h1>
            <p
              className="font-playfair italic"
              style={{ color: '#C8922A', fontSize: '1.1rem', marginBottom: '2.5rem' }}
            >
              The document on your sleeve. The foundation of your rights.
            </p>
            <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(200,146,42,0.5), transparent)' }} />
          </header>
        </ScrollReveal>

        {/* SECTION 2 — Brand Intro */}
        <ScrollReveal delay={50}>
          <div
            style={{
              borderLeft: '3px solid #C8922A',
              paddingLeft: '1.5rem',
              margin: '3rem 0',
            }}
          >
            <p
              className="font-sans text-cream"
              style={{ fontSize: '1rem', lineHeight: 1.8, maxWidth: '65ch' }}
            >
              Most Americans have heard of the Constitution. Few have read it. Forefather Threads
              was built on the belief that you cannot defend what you do not know. Every garment we
              make carries a QR code on the left sleeve linking directly to this document — because
              the primary source is the only source that matters.
            </p>
            <p
              className="font-sans text-cream"
              style={{ fontSize: '1rem', lineHeight: 1.8, maxWidth: '65ch', marginTop: '1.25rem' }}
            >
              No spin. No interpretation. No partisan filter. Just the words as written and ratified
              by the founders in 1787 — and amended 27 times by the people ever since.
            </p>
          </div>
        </ScrollReveal>

        {/* SECTION 3 — The Preamble */}
        <ScrollReveal delay={50}>
          <section style={{ margin: '4rem 0' }}>
            <SectionHeading>The Preamble</SectionHeading>
            <blockquote
              className="font-playfair italic"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                lineHeight: 1.9,
                color: '#F5EFE0',
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              We the People of the United States, in Order to form a more perfect Union, establish
              Justice, insure domestic Tranquility, provide for the common defence, promote the
              general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity,
              do ordain and establish this Constitution for the United States of America.
            </blockquote>
            <p
              className="font-sans text-center"
              style={{
                color: '#C8922A',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                fontVariant: 'small-caps',
                textTransform: 'uppercase',
                marginTop: '1.5rem',
              }}
            >
              Preamble — United States Constitution, 1787
            </p>
          </section>
        </ScrollReveal>

        {/* SECTION 4 — The Seven Articles */}
        <ScrollReveal delay={50}>
          <section style={{ margin: '4rem 0' }}>
            <SectionHeading>The Seven Articles</SectionHeading>
            <div>
              {ARTICLES.map((article) => (
                <div
                  key={article.number}
                  style={{
                    background: 'rgba(200,146,42,0.06)',
                    border: '0.5px solid rgba(200,146,42,0.2)',
                    borderRadius: '4px',
                    padding: '1.25rem 1.5rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <p
                    className="font-sans"
                    style={{
                      color: '#C8922A',
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      fontVariant: 'small-caps',
                      textTransform: 'uppercase',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {article.number}
                  </p>
                  <p
                    className="font-playfair text-cream"
                    style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}
                  >
                    {article.name}
                  </p>
                  <p
                    className="font-sans"
                    style={{ color: 'rgba(245,239,224,0.65)', fontSize: '0.85rem', lineHeight: 1.6 }}
                  >
                    {article.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* SECTION 5 — The 27 Amendments */}
        <ScrollReveal delay={50}>
          <section style={{ margin: '4rem 0' }}>
            <SectionHeading>The 27 Amendments</SectionHeading>
            <p
              className="font-playfair italic text-cream"
              style={{ fontSize: '1rem', marginBottom: '2rem' }}
            >
              The Bill of Rights and beyond — the living record of American self-governance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '0.75rem' }}>
              {AMENDMENTS.map((a) => (
                <div
                  key={a.number}
                  style={{
                    background: 'rgba(11,26,46,0.6)',
                    border: '0.5px solid rgba(200,146,42,0.15)',
                    padding: '1rem 1.25rem',
                  }}
                >
                  <p
                    className="font-sans"
                    style={{
                      color: '#C8922A',
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      fontVariant: 'small-caps',
                      textTransform: 'uppercase',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {a.number} Amendment
                  </p>
                  <p
                    className="font-sans text-cream"
                    style={{ fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.3rem' }}
                  >
                    {a.name}
                  </p>
                  <p
                    className="font-sans"
                    style={{ color: 'rgba(245,239,224,0.5)', fontSize: '0.78rem' }}
                  >
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* SECTION 6 — Dual CTA */}
        <ScrollReveal delay={50}>
          <section
            style={{
              borderTop: '1px solid rgba(200,146,42,0.2)',
              borderBottom: '1px solid rgba(200,146,42,0.2)',
              padding: '4rem 2rem',
              textAlign: 'center',
              margin: '4rem -2rem',
            }}
          >
            <h2
              className="font-playfair text-cream"
              style={{ fontSize: '2rem', marginBottom: '1.25rem' }}
            >
              Know It. Defend It. Wear It.
            </h2>
            <p
              className="font-sans text-cream"
              style={{
                fontSize: '0.95rem',
                maxWidth: '500px',
                margin: '0 auto 2.5rem',
                lineHeight: 1.7,
              }}
            >
              The Constitution is not a political document. It is the operating manual for a free
              republic. Reading it is the first act of citizenship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton href="/constitution-challenge" variant="rust" size="lg">
                Take the Challenge
              </LinkButton>
              <LinkButton
                href="https://constitution.congress.gov/constitution/"
                variant="gold-outline"
                size="lg"
                external
              >
                Read the Full Text
              </LinkButton>
            </div>
          </section>
        </ScrollReveal>

        {/* SECTION 7 — QR Code Reminder */}
        <ScrollReveal delay={50}>
          <section style={{ textAlign: 'center', padding: '3rem 0' }}>
            <a
              href="https://constitution.congress.gov/constitution/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={constitutionQR}
                alt="Scan to read the Constitution"
                style={{ height: '120px', width: 'auto', filter: 'invert(1)', margin: '0 auto' }}
              />
            </a>
            <p
              className="font-sans"
              style={{
                color: '#C8922A',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                fontVariant: 'small-caps',
                textTransform: 'uppercase',
                marginTop: '1rem',
              }}
            >
              Scan or Click to Read the Constitution
            </p>
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(200,146,42,0.5), transparent)',
                marginTop: '3rem',
              }}
            />
          </section>
        </ScrollReveal>

      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <p
      className="font-sans"
      style={{
        color: '#C8922A',
        fontSize: '0.7rem',
        letterSpacing: '0.25em',
        fontVariant: 'small-caps',
        textTransform: 'uppercase',
        marginBottom: '2rem',
        paddingBottom: '0.75rem',
        borderBottom: '1px solid rgba(200,146,42,0.15)',
      }}
    >
      {children}
    </p>
  );
}
