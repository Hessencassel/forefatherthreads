import { useState, useRef } from 'react';
import type { CSSProperties } from 'react';
import ScrollReveal from '../components/ui/ScrollReveal';
import { LinkButton } from '../components/ui/Button';
import logoIcon from '../assets/logo-icon.webp';
import constitutionQR from '../assets/Constitution-QR.png';
import { pageMeta, type RouteMetaArgs } from '../lib/seo';

export function meta({ matches }: RouteMetaArgs) {
  return pageMeta({
    matches,
    title: 'The United States Constitution | Read It',
    description:
      'The document on your sleeve, in full. Read the U.S. Constitution — every article, every amendment — straight from the source.',
    path: '/constitution',
  });
}

interface ArticleData {
  number: string;
  name: string;
  description: string;
  fullText: string;
  italicNote: string;
  link?: string;
}

interface AmendmentData {
  number: string;
  name: string;
  description: string;
  fullText: string;
  link?: string;
}

const ARTICLES: ArticleData[] = [
  {
    number: 'Article I',
    name: 'The Legislative Branch',
    description:
      'Establishes Congress — the Senate and House of Representatives — and defines its powers to make federal law.',
    fullText:
      'All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.',
    italicNote:
      "Article I contains 10 sections defining congressional structure, elections, powers, and limitations. Click 'Read Full Article' to access the complete text.",
    link: 'https://constitution.congress.gov/constitution/article-1/',
  },
  {
    number: 'Article II',
    name: 'The Executive Branch',
    description:
      'Establishes the Presidency, defines the powers of the Commander in Chief, and outlines the Electoral College.',
    fullText: 'The executive Power shall be vested in a President of the United States of America.',
    italicNote: 'Article II contains 4 sections defining presidential powers, elections, and the oath of office.',
    link: 'https://constitution.congress.gov/constitution/article-2/',
  },
  {
    number: 'Article III',
    name: 'The Judicial Branch',
    description:
      'Establishes the Supreme Court, defines federal judicial power, and addresses treason against the United States.',
    fullText:
      'The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish.',
    italicNote:
      'Article III contains 3 sections establishing the Supreme Court and defining federal judicial power.',
    link: 'https://constitution.congress.gov/constitution/article-3/',
  },
  {
    number: 'Article IV',
    name: 'The States',
    description:
      'Defines the relationship between states, guarantees republican government to each state, and addresses admission of new states.',
    fullText:
      'Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State.',
    italicNote: 'Article IV contains 4 sections defining state relationships and federal guarantees to states.',
    link: 'https://constitution.congress.gov/constitution/article-4/',
  },
  {
    number: 'Article V',
    name: 'The Amendment Process',
    description:
      'Establishes the process for amending the Constitution — requiring two-thirds of Congress and three-fourths of states.',
    fullText:
      'The Congress, whenever two thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, or, on the Application of the Legislatures of two thirds of the several States, shall call a Convention for proposing Amendments, which, in either Case, shall be valid to all Intents and Purposes, as Part of this Constitution, when ratified by the Legislatures of three fourths of the several States, or by Conventions in three fourths thereof, as the one or the other Mode of Ratification may be proposed by the Congress.',
    italicNote: 'Article V — the full text. The entire amendment process in one paragraph.',
  },
  {
    number: 'Article VI',
    name: 'The Supremacy Clause',
    description:
      'Establishes the Constitution as the supreme law of the land, binding on all judges and government officials.',
    fullText:
      'This Constitution, and the Laws of the United States which shall be made in Pursuance thereof; and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land.',
    italicNote:
      'Article VI contains 3 clauses establishing constitutional supremacy and binding oaths of office.',
    link: 'https://constitution.congress.gov/constitution/article-6/',
  },
  {
    number: 'Article VII',
    name: 'Ratification',
    description:
      'Established the process by which the Constitution would be ratified by nine of the thirteen original states.',
    fullText:
      'The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same.',
    italicNote:
      'Article VII — the full text. Nine states were required to ratify. New Hampshire was the ninth, on June 21, 1788.',
  },
];

const AMENDMENTS: AmendmentData[] = [
  {
    number: '1st',
    name: 'Freedom of Religion, Speech, Press, Assembly & Petition',
    description: 'Protects five fundamental freedoms from government interference.',
    fullText:
      'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.',
  },
  {
    number: '2nd',
    name: 'Right to Bear Arms',
    description: 'Protects the right of the people to keep and bear arms.',
    fullText:
      'A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.',
  },
  {
    number: '3rd',
    name: 'Quartering of Soldiers',
    description: 'Prohibits housing soldiers in private homes without owner consent.',
    fullText:
      'No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.',
  },
  {
    number: '4th',
    name: 'Search and Seizure',
    description: 'Protects against unreasonable searches and requires warrants with probable cause.',
    fullText:
      'The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.',
  },
  {
    number: '5th',
    name: 'Rights of the Accused',
    description: 'Protects against self-incrimination, double jeopardy, and guarantees due process.',
    fullText:
      'No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.',
  },
  {
    number: '6th',
    name: 'Right to a Speedy Trial',
    description: 'Guarantees the right to a speedy, public trial by an impartial jury.',
    fullText:
      'In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.',
  },
  {
    number: '7th',
    name: 'Jury Trial in Civil Cases',
    description: 'Preserves the right to jury trial in federal civil cases.',
    fullText:
      'In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law.',
  },
  {
    number: '8th',
    name: 'Cruel and Unusual Punishment',
    description: 'Prohibits excessive bail, fines, and cruel and unusual punishment.',
    fullText:
      'Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.',
  },
  {
    number: '9th',
    name: 'Rights Retained by the People',
    description: 'Clarifies that rights not listed in the Constitution are retained by the people.',
    fullText:
      'The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.',
  },
  {
    number: '10th',
    name: 'Powers Reserved to the States',
    description: 'Powers not given to the federal government are reserved to the states or the people.',
    fullText:
      'The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.',
  },
  {
    number: '11th',
    name: 'Judicial Limits',
    description: 'Limits federal court jurisdiction over lawsuits against states.',
    fullText:
      'The Judicial power of the United States shall not be construed to extend to any suit in law or equity, commenced or prosecuted against one of the United States by Citizens of another State, or by Citizens or Subjects of any Foreign State.',
  },
  {
    number: '12th',
    name: 'Presidential Election Process',
    description: 'Revised the Electoral College process for electing the President and Vice President.',
    fullText:
      'The Electors shall meet in their respective states, and vote by ballot for President and Vice-President, one of whom, at least, shall not be an inhabitant of the same state with themselves; they shall name in their ballots the person voted for as President, and in distinct ballots the person voted for as Vice-President, and they shall make distinct lists of all persons voted for as President, and of all persons voted for as Vice-President and of the number of votes for each, which lists they shall sign and certify, and transmit sealed to the seat of the government of the United States, directed to the President of the Senate.',
  },
  {
    number: '13th',
    name: 'Abolition of Slavery',
    description: 'Abolished slavery and involuntary servitude except as criminal punishment.',
    fullText:
      'Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction.',
    link: 'https://constitution.congress.gov/constitution/amendment-13/',
  },
  {
    number: '14th',
    name: 'Citizenship Rights',
    description: 'Granted citizenship to formerly enslaved people and guaranteed equal protection of law.',
    fullText:
      'All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside.',
    link: 'https://constitution.congress.gov/constitution/amendment-14/',
  },
  {
    number: '15th',
    name: 'Right to Vote (Race)',
    description: 'Prohibited denying the right to vote based on race or color.',
    fullText:
      'The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.',
    link: 'https://constitution.congress.gov/constitution/amendment-15/',
  },
  {
    number: '16th',
    name: 'Income Tax',
    description: 'Authorized Congress to levy a federal income tax.',
    fullText:
      'The Congress shall have power to lay and collect taxes on incomes, from whatever source derived, without apportionment among the several States, and without regard to any census or enumeration.',
  },
  {
    number: '17th',
    name: 'Direct Election of Senators',
    description: 'Established direct election of senators by popular vote rather than state legislatures.',
    fullText:
      'The Senate of the United States shall be composed of two Senators from each State, elected by the people thereof, for six years; and each Senator shall have one vote.',
    link: 'https://constitution.congress.gov/constitution/amendment-17/',
  },
  {
    number: '18th',
    name: 'Prohibition',
    description: 'Prohibited the manufacture and sale of alcoholic beverages.',
    fullText:
      'After one year from the ratification of this article the manufacture, sale, or transportation of intoxicating liquors within, the importation thereof into, or the exportation thereof from the United States and all territory subject to the jurisdiction thereof for beverage purposes is hereby prohibited.',
    link: 'https://constitution.congress.gov/constitution/amendment-18/',
  },
  {
    number: '19th',
    name: 'Right to Vote (Sex)',
    description: 'Prohibited denying the right to vote based on sex, granting women the right to vote.',
    fullText:
      'The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex.',
  },
  {
    number: '20th',
    name: 'Presidential Term Dates',
    description: 'Set the dates for the start of presidential and congressional terms.',
    fullText:
      'The terms of the President and Vice President shall end at noon on the 20th day of January, and the terms of Senators and Representatives at noon on the 3d day of January, of the years in which such terms would have ended if this article had not been ratified.',
    link: 'https://constitution.congress.gov/constitution/amendment-20/',
  },
  {
    number: '21st',
    name: 'Repeal of Prohibition',
    description: 'Repealed the 18th Amendment, ending Prohibition.',
    fullText: 'The eighteenth article of amendment to the Constitution of the United States is hereby repealed.',
  },
  {
    number: '22nd',
    name: 'Presidential Term Limits',
    description: 'Limited the President to two elected terms.',
    fullText:
      'No person shall be elected to the office of the President more than twice, and no person who has held the office of President, or acted as President, for more than two years of a term to which some other person was elected President shall be elected to the office of the President more than once.',
    link: 'https://constitution.congress.gov/constitution/amendment-22/',
  },
  {
    number: '23rd',
    name: 'DC Electoral Votes',
    description: 'Granted Washington D.C. electoral votes for presidential elections.',
    fullText:
      'The District constituting the seat of Government of the United States shall appoint in such manner as Congress may direct a number of electors of President and Vice President equal to the whole number of Senators and Representatives in Congress to which the District would be entitled if it were a State.',
    link: 'https://constitution.congress.gov/constitution/amendment-23/',
  },
  {
    number: '24th',
    name: 'Abolition of Poll Tax',
    description: 'Prohibited poll taxes as a requirement to vote in federal elections.',
    fullText:
      'The right of citizens of the United States to vote in any primary or other election for President or Vice President, for electors for President or Vice President, or for Senator or Representative in Congress, shall not be denied or abridged by the United States or any State by reason of failure to pay poll tax or other tax.',
  },
  {
    number: '25th',
    name: 'Presidential Succession',
    description: 'Clarified the order of presidential succession and procedures for vacancies.',
    fullText:
      'In case of the removal of the President from office or of his death or resignation, the Vice President shall become President.',
    link: 'https://constitution.congress.gov/constitution/amendment-25/',
  },
  {
    number: '26th',
    name: 'Voting Age',
    description: 'Lowered the federal voting age from 21 to 18.',
    fullText:
      'The right of citizens of the United States, who are eighteen years of age or older, to vote shall not be denied or abridged by the United States or by any State on account of age.',
  },
  {
    number: '27th',
    name: 'Congressional Pay',
    description: 'Delayed any law changing congressional pay from taking effect until after the next election.',
    fullText:
      'No law, varying the compensation for the services of the Senators and Representatives, shall take effect, until an election of Representatives shall have intervened.',
  },
];

const GOLD_SHADOW = 'drop-shadow(0 0 20px rgba(200,146,42,0.3))';

const PREAMBLE =
  'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.';

// ── Product card style constants ─────────────────────────────────────────────
const productCardStyle: CSSProperties = {
  background: 'rgba(200,146,42,0.06)',
  border: '0.5px solid rgba(200,146,42,0.25)',
  borderRadius: '4px',
  padding: '1.5rem',
  textAlign: 'left',
};

const productEyebrowStyle: CSSProperties = {
  color: '#C8922A',
  fontSize: '0.6rem',
  letterSpacing: '0.2em',
  fontVariant: 'small-caps',
  textTransform: 'uppercase',
  marginBottom: '0.5rem',
};

const productRefStyle: CSSProperties = {
  fontStyle: 'italic',
  color: '#C8922A',
  fontSize: '0.9rem',
  marginBottom: '0.75rem',
};

const productDescStyle: CSSProperties = {
  color: '#F5EFE0',
  fontSize: '0.85rem',
  lineHeight: 1.65,
  marginBottom: '1rem',
};

const productLinkStyle: CSSProperties = {
  color: '#B44C2A',
  fontSize: '0.8rem',
  textDecoration: 'none',
  display: 'inline-block',
};

// ─────────────────────────────────────────────────────────────────────────────

export default function Constitution() {
  const [openArticle, setOpenArticle] = useState<string | null>(null);
  const [openAmendment, setOpenAmendment] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const articlesRef = useRef<HTMLElement>(null);

  const term = searchTerm.toLowerCase();

  const filteredArticles = searchTerm
    ? ARTICLES.filter(
        (a) =>
          a.number.toLowerCase().includes(term) ||
          a.name.toLowerCase().includes(term) ||
          a.description.toLowerCase().includes(term) ||
          a.fullText.toLowerCase().includes(term) ||
          a.italicNote.toLowerCase().includes(term),
      )
    : ARTICLES;

  const filteredAmendments = searchTerm
    ? AMENDMENTS.filter(
        (a) =>
          a.number.toLowerCase().includes(term) ||
          a.name.toLowerCase().includes(term) ||
          a.description.toLowerCase().includes(term) ||
          a.fullText.toLowerCase().includes(term),
      )
    : AMENDMENTS;

  const noResults =
    searchTerm.length > 0 && filteredArticles.length === 0 && filteredAmendments.length === 0;

  const handleScrollToArticles = () => {
    setModalOpen(false);
    setTimeout(() => {
      articlesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div style={{ backgroundColor: '#0B1A2E', minHeight: '100vh' }}>
      {/* Keyframes for sleeve QR pulse */}
      <style>{`
        @keyframes pulse {
          0%   { transform: scale(1);    opacity: 0.8; }
          50%  { transform: scale(1.08); opacity: 0.2; }
          100% { transform: scale(1);    opacity: 0.8; }
        }
      `}</style>

      {/* ── Modal ── */}
      {modalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(11,26,46,0.92)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <div
            style={{
              background: 'rgba(11,26,46,0.97)',
              border: '1px solid rgba(200,146,42,0.3)',
              borderRadius: '8px',
              padding: '3rem',
              maxWidth: '600px',
              width: '100%',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                color: '#C8922A',
                fontSize: '1.75rem',
                cursor: 'pointer',
                lineHeight: 1,
                padding: 0,
              }}
            >
              ×
            </button>
            <p
              className="font-sans"
              style={{
                color: '#C8922A',
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                fontVariant: 'small-caps',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              U.S. Constitution
            </p>
            <p
              className="font-playfair italic"
              style={{ color: '#F5EFE0', fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '2.5rem' }}
            >
              {PREAMBLE}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={handleScrollToArticles}
                style={{
                  background: 'rgba(200,146,42,0.15)',
                  border: '1px solid rgba(200,146,42,0.4)',
                  color: '#C8922A',
                  padding: '0.75rem 1.5rem',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  width: '100%',
                }}
              >
                Read the Full Constitution
              </button>
              <a
                href="/constitution-challenge"
                style={{
                  background: '#B44C2A',
                  color: '#F5EFE0',
                  padding: '0.75rem 1.5rem',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                Take the Challenge
              </a>
            </div>
          </div>
        </div>
      )}

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 2rem' }}>

        {/* ── SECTION 1 — Page Header ── */}
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

            {/* ── On-Sleeve Simulator ── */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '2rem auto 0',
              }}
            >
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Pulsing ring */}
                <div
                  style={{
                    position: 'absolute',
                    border: '2px solid #C8922A',
                    borderRadius: '12px',
                    width: '280px',
                    height: '280px',
                    animation: 'pulse 2s ease-in-out infinite',
                    pointerEvents: 'none',
                  }}
                />
                {/* QR code */}
                <img
                  src={constitutionQR}
                  alt="Constitution QR Code"
                  onClick={() => setModalOpen(true)}
                  style={{
                    width: '260px',
                    height: '260px',
                    filter: 'invert(1)',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </div>
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
                Click or Scan to Read the Constitution
              </p>
            </div>

            <div
              style={{
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(200,146,42,0.5), transparent)',
                marginTop: '2.5rem',
              }}
            />
          </header>
        </ScrollReveal>

        {/* ── CHANGE 5 — Search Bar ── */}
        <ScrollReveal delay={30}>
          <div style={{ marginBottom: '3rem' }}>
            <input
              type="text"
              placeholder="Search the Constitution... (e.g. 'freedom of speech', 'bear arms', 'due process')"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: 'rgba(200,146,42,0.08)',
                border: '1px solid rgba(200,146,42,0.3)',
                color: '#F5EFE0',
                padding: '0.75rem 1.25rem',
                width: '100%',
                maxWidth: '560px',
                display: 'block',
                margin: '0 auto',
                fontSize: '0.9rem',
                fontFamily: 'DM Sans, sans-serif',
                outline: 'none',
                borderRadius: '2px',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </ScrollReveal>

        {/* No-results message */}
        {noResults && (
          <p
            className="font-sans text-center"
            style={{ color: 'rgba(245,239,224,0.5)', fontSize: '0.95rem', marginBottom: '3rem' }}
          >
            No results found for &ldquo;{searchTerm}&rdquo; — try &lsquo;amendment&rsquo;,
            &lsquo;rights&rsquo;, or an article number.
          </p>
        )}

        {/* ── SECTION 2 — Brand Intro ── */}
        <ScrollReveal delay={50}>
          <div style={{ borderLeft: '3px solid #C8922A', paddingLeft: '1.5rem', margin: '3rem 0' }}>
            <p className="font-sans text-cream" style={{ fontSize: '1rem', lineHeight: 1.8, maxWidth: '65ch' }}>
              Most Americans have heard of the Constitution. Few have read it. Forefather Threads was
              built on the belief that you cannot defend what you do not know. Every garment we make
              carries a QR code on the left sleeve linking directly to this document — because the
              primary source is the only source that matters.
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

        {/* ── SECTION 3 — The Preamble ── */}
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
              {PREAMBLE}
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

        {/* ── SECTION 4 — The Seven Articles ── */}
        {(!searchTerm || filteredArticles.length > 0) && (
          <ScrollReveal delay={50}>
            <section
              ref={articlesRef as React.RefObject<HTMLElement>}
              id="articles"
              style={{ margin: '4rem 0' }}
            >
              <SectionHeading>The Seven Articles</SectionHeading>
              <div>
                {filteredArticles.map((article) => {
                  const isOpen = openArticle === article.number;
                  return (
                    <div
                      key={article.number}
                      style={{
                        background: 'rgba(200,146,42,0.06)',
                        border: '0.5px solid rgba(200,146,42,0.2)',
                        borderRadius: '4px',
                        marginBottom: '0.75rem',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Card header — clickable */}
                      <div
                        onClick={() => setOpenArticle(isOpen ? null : article.number)}
                        style={{
                          padding: '1.25rem 1.5rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ flex: 1 }}>
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
                            style={{
                              color: 'rgba(245,239,224,0.65)',
                              fontSize: '0.85rem',
                              lineHeight: 1.6,
                            }}
                          >
                            {article.description}
                          </p>
                        </div>
                        <i
                          className="ti ti-chevron-down"
                          style={{
                            color: '#C8922A',
                            fontSize: '1.25rem',
                            flexShrink: 0,
                            marginTop: '0.5rem',
                            display: 'inline-block',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.4s ease',
                          }}
                        />
                      </div>

                      {/* Expanded body */}
                      <div
                        style={{
                          maxHeight: isOpen ? '2000px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.4s ease',
                        }}
                      >
                        <div
                          style={{
                            borderLeft: '3px solid #C8922A',
                            margin: '0 1.5rem 1.5rem',
                            paddingLeft: '1.25rem',
                          }}
                        >
                          <p
                            className="font-playfair italic"
                            style={{
                              color: '#F5EFE0',
                              fontSize: '0.9rem',
                              lineHeight: 1.9,
                              marginBottom: '0.75rem',
                            }}
                          >
                            {article.fullText}
                          </p>
                          <p
                            className="font-sans italic"
                            style={{
                              color: '#C8922A',
                              fontSize: '0.8rem',
                              lineHeight: 1.6,
                              marginBottom: article.link ? '0.6rem' : 0,
                            }}
                          >
                            {article.italicNote}
                          </p>
                          {article.link && (
                            <a
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: '#C8922A',
                                fontSize: '0.8rem',
                                textDecoration: 'none',
                                display: 'inline-block',
                              }}
                            >
                              Read Full Article →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ── SECTION 5 — The 27 Amendments ── */}
        {(!searchTerm || filteredAmendments.length > 0) && (
          <ScrollReveal delay={50}>
            <section style={{ margin: '4rem 0' }}>
              <SectionHeading>The 27 Amendments</SectionHeading>
              {!searchTerm && (
                <p
                  className="font-playfair italic text-cream"
                  style={{ fontSize: '1rem', marginBottom: '2rem' }}
                >
                  The Bill of Rights and beyond — the living record of American self-governance.
                </p>
              )}
              <div>
                {filteredAmendments.map((a) => {
                  const isOpen = openAmendment === a.number;
                  return (
                    <div
                      key={a.number}
                      style={{
                        background: 'rgba(11,26,46,0.6)',
                        border: '0.5px solid rgba(200,146,42,0.15)',
                        marginBottom: '0.75rem',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Card header — clickable */}
                      <div
                        onClick={() => setOpenAmendment(isOpen ? null : a.number)}
                        style={{
                          padding: '1rem 1.25rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ flex: 1 }}>
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
                        <i
                          className="ti ti-chevron-down"
                          style={{
                            color: '#C8922A',
                            fontSize: '1rem',
                            flexShrink: 0,
                            marginTop: '0.4rem',
                            display: 'inline-block',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.4s ease',
                          }}
                        />
                      </div>

                      {/* Expanded body */}
                      <div
                        style={{
                          maxHeight: isOpen ? '2000px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.4s ease',
                        }}
                      >
                        <div
                          style={{
                            borderLeft: '3px solid #C8922A',
                            margin: '0 1.25rem 1.25rem',
                            paddingLeft: '1rem',
                          }}
                        >
                          <p
                            className="font-playfair italic"
                            style={{
                              color: '#F5EFE0',
                              fontSize: '0.9rem',
                              lineHeight: 1.9,
                              marginBottom: a.link ? '0.6rem' : 0,
                            }}
                          >
                            {a.fullText}
                          </p>
                          {a.link && (
                            <a
                              href={a.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: '#C8922A',
                                fontSize: '0.8rem',
                                textDecoration: 'none',
                                display: 'inline-block',
                              }}
                            >
                              Read Full Amendment →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ── CHANGE 3 — The Doctrine in Your Wardrobe ── */}
        <ScrollReveal delay={50}>
          <section style={{ margin: '4rem 0' }}>
            <p
              className="font-sans"
              style={{
                color: '#C8922A',
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                fontVariant: 'small-caps',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              The Doctrine in Your Wardrobe
            </p>
            <h2
              className="font-playfair text-cream"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                textAlign: 'center',
                marginBottom: '1.25rem',
                lineHeight: 1.2,
              }}
            >
              Every Garment Has a Constitutional Home.
            </h2>
            <p
              className="font-sans text-cream"
              style={{
                fontSize: '0.95rem',
                maxWidth: '640px',
                margin: '0 auto 3rem',
                textAlign: 'center',
                lineHeight: 1.75,
              }}
            >
              Each Forefather Threads garment was designed around a specific constitutional
              principle. This is not aesthetic patriotism. This is doctrine made wearable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1rem' }}>
              {/* Card 1 — The Remnant */}
              <div style={productCardStyle}>
                <p className="font-sans" style={productEyebrowStyle}>
                  The Remnant
                </p>
                <p className="font-playfair" style={productRefStyle}>
                  The Preamble · Article I · Article II
                </p>
                <p className="font-sans" style={productDescStyle}>
                  Built for the people the founders wrote about — those who form a more perfect union
                  not through compliance, but through constitutional knowledge and principled refusal
                  to drift. The Remnant is the constitutional republic wearing its own founding document.
                </p>
                <a href="/shop" className="font-sans" style={productLinkStyle}>
                  Shop The Remnant →
                </a>
              </div>

              {/* Card 2 — FAFO */}
              <div style={productCardStyle}>
                <p className="font-sans" style={productEyebrowStyle}>
                  Directive 02: FAFO
                </p>
                <p className="font-playfair" style={productRefStyle}>
                  Amendment II · Amendment I
                </p>
                <p className="font-sans" style={productDescStyle}>
                  The Second Amendment does not exist in isolation. It exists because the founders
                  understood that a government which cannot be questioned in word will eventually be
                  answered in kind. FAFO is for those who understand both amendments and the
                  relationship between them.
                </p>
                <a href="/shop" className="font-sans" style={productLinkStyle}>
                  Shop FAFO →
                </a>
              </div>

              {/* Card 3 — We The People */}
              <div style={productCardStyle}>
                <p className="font-sans" style={productEyebrowStyle}>
                  We The People
                </p>
                <p className="font-playfair" style={productRefStyle}>
                  The Preamble · Article VII
                </p>
                <p className="font-sans" style={productDescStyle}>
                  Three words that changed the architecture of government forever. Not &lsquo;We the
                  States.&rsquo; Not &lsquo;We the King.&rsquo; We the People. The Preamble is the
                  mission statement of the American republic — and the most radical political sentence
                  ever written into law.
                </p>
                <a href="/shop" className="font-sans" style={productLinkStyle}>
                  Shop We The People →
                </a>
              </div>

              {/* Card 4 — Shall Not Be Infringed */}
              <div style={productCardStyle}>
                <p className="font-sans" style={productEyebrowStyle}>
                  Shall Not Be Infringed
                </p>
                <p className="font-playfair" style={productRefStyle}>
                  Amendment II
                </p>
                <p className="font-sans" style={productDescStyle}>
                  Twenty-seven words, no ambiguity in the ones that matter. The right of the people
                  to keep and bear arms is not a grant from government — it's a pre-existing right
                  the Second Amendment merely acknowledges. Shall not be infringed. Still not a
                  suggestion.
                </p>
                <a href="/shop" className="font-sans" style={productLinkStyle}>
                  Shop Shall Not Be Infringed →
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ── SECTION 6 — Dual CTA ── */}
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

        {/* ── SECTION 7 — QR Code Reminder ── */}
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
