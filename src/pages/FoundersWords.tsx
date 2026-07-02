import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { Link } from 'react-router';
import { pageMeta } from '../lib/seo';

export function meta() {
  return pageMeta({
    title: "The Founders' Words | Primary Sources",
    description:
      'Direct quotes from Washington, Jefferson, and the founders on liberty, tyranny, and the Constitution — primary sources, not paraphrase.',
    path: '/founders-words',
  });
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface QuoteData {
  id: number;
  text: string;
  author: string;
  source: string;
  founderKey: string;
}

// ── Quote Data ────────────────────────────────────────────────────────────────

const QUOTES: QuoteData[] = [
  // George Washington
  {
    id: 1,
    text: "If freedom of speech is taken away, then dumb and silent we may be led, like sheep to the slaughter.",
    author: "George Washington",
    source: "Address to Officers of the Army, 1783",
    founderKey: "washington",
  },
  {
    id: 2,
    text: "Government is not reason, it is not eloquence — it is force. Like fire it is a dangerous servant and a fearful master.",
    author: "George Washington",
    source: "Attributed",
    founderKey: "washington",
  },
  {
    id: 3,
    text: "The Constitution is the guide which I never will abandon.",
    author: "George Washington",
    source: "Letter to the Boston Selectmen, 1795",
    founderKey: "washington",
  },
  {
    id: 4,
    text: "Liberty, when it begins to take root, is a plant of rapid growth.",
    author: "George Washington",
    source: "Letter to James Madison, 1788",
    founderKey: "washington",
  },
  // Thomas Jefferson
  {
    id: 5,
    text: "The tree of liberty must be refreshed from time to time with the blood of patriots and tyrants.",
    author: "Thomas Jefferson",
    source: "Letter to William S. Smith, 1787",
    founderKey: "jefferson",
  },
  {
    id: 6,
    text: "When the people fear the government, there is tyranny. When the government fears the people, there is liberty.",
    author: "Thomas Jefferson",
    source: "Attributed",
    founderKey: "jefferson",
  },
  {
    id: 7,
    text: "I prefer dangerous freedom over peaceful slavery.",
    author: "Thomas Jefferson",
    source: "Letter to James Madison, 1787",
    founderKey: "jefferson",
  },
  {
    id: 8,
    text: "The price of freedom is eternal vigilance.",
    author: "Thomas Jefferson",
    source: "Attributed",
    founderKey: "jefferson",
  },
  {
    id: 9,
    text: "An educated citizenry is a vital requisite for our survival as a free people.",
    author: "Thomas Jefferson",
    source: "Attributed",
    founderKey: "jefferson",
  },
  // Benjamin Franklin
  {
    id: 10,
    text: "Those who would give up essential liberty to purchase a little temporary safety deserve neither liberty nor safety.",
    author: "Benjamin Franklin",
    source: "Pennsylvania Assembly Reply, 1755",
    founderKey: "franklin",
  },
  {
    id: 11,
    text: "Democracy is two wolves and a lamb voting on what to have for lunch. Liberty is a well-armed lamb contesting the vote.",
    author: "Benjamin Franklin",
    source: "Attributed",
    founderKey: "franklin",
  },
  {
    id: 12,
    text: "A republic, if you can keep it.",
    author: "Benjamin Franklin",
    source: "Response at Constitutional Convention, 1787",
    founderKey: "franklin",
  },
  // James Madison
  {
    id: 13,
    text: "The accumulation of all powers, legislative, executive, and judiciary, in the same hands may justly be pronounced the very definition of tyranny.",
    author: "James Madison",
    source: "Federalist No. 47, 1788",
    founderKey: "madison",
  },
  {
    id: 14,
    text: "If men were angels, no government would be necessary.",
    author: "James Madison",
    source: "Federalist No. 51, 1788",
    founderKey: "madison",
  },
  {
    id: 15,
    text: "The advancement and diffusion of knowledge is the only guardian of true liberty.",
    author: "James Madison",
    source: "Letter to George Thomson, 1825",
    founderKey: "madison",
  },
  // John Adams
  {
    id: 16,
    text: "Liberty cannot be preserved without a general knowledge among the people.",
    author: "John Adams",
    source: "A Dissertation on the Canon and Feudal Law, 1765",
    founderKey: "j-adams",
  },
  {
    id: 17,
    text: "Our Constitution was made only for a moral and religious people. It is wholly inadequate to the government of any other.",
    author: "John Adams",
    source: "Letter to the Massachusetts Militia, 1798",
    founderKey: "j-adams",
  },
  {
    id: 18,
    text: "Facts are stubborn things; and whatever may be our wishes, our inclinations, or the dictates of our passions, they cannot alter the state of facts and evidence.",
    author: "John Adams",
    source: "Argument in Defense of the British Soldiers, 1770",
    founderKey: "j-adams",
  },
  // Alexander Hamilton
  {
    id: 19,
    text: "Those who stand for nothing fall for anything.",
    author: "Alexander Hamilton",
    source: "Attributed",
    founderKey: "hamilton",
  },
  {
    id: 20,
    text: "A nation which can prefer disgrace to danger is prepared for a master, and deserves one.",
    author: "Alexander Hamilton",
    source: "Novanglus Papers, 1775",
    founderKey: "hamilton",
  },
  {
    id: 21,
    text: "The constitution shall never be construed to prevent the people of the United States who are peaceable citizens from keeping their own arms.",
    author: "Alexander Hamilton",
    source: "Debates in the Convention of the Commonwealth of Massachusetts, 1788",
    founderKey: "hamilton",
  },
  // Patrick Henry
  {
    id: 22,
    text: "Give me liberty, or give me death!",
    author: "Patrick Henry",
    source: "Speech to the Virginia Convention, March 23, 1775",
    founderKey: "henry",
  },
  {
    id: 23,
    text: "The Constitution is not an instrument for the government to restrain the people, it is an instrument for the people to restrain the government.",
    author: "Patrick Henry",
    source: "Attributed",
    founderKey: "henry",
  },
  // Samuel Adams
  {
    id: 24,
    text: "It does not take a majority to prevail, but rather an irate, tireless minority keen to set brush fires in people's minds.",
    author: "Samuel Adams",
    source: "Attributed",
    founderKey: "s-adams",
  },
  {
    id: 25,
    text: "If ye love wealth better than liberty, the tranquility of servitude than the animating contest of freedom, go from us in peace.",
    author: "Samuel Adams",
    source: "Speech at the State House, Philadelphia, 1776",
    founderKey: "s-adams",
  },
];

const FILTERS = [
  { key: 'all',        label: 'All' },
  { key: 'washington', label: 'Washington' },
  { key: 'jefferson',  label: 'Jefferson' },
  { key: 'franklin',   label: 'Franklin' },
  { key: 'madison',    label: 'Madison' },
  { key: 'j-adams',    label: 'Adams' },
  { key: 'hamilton',   label: 'Hamilton' },
  { key: 'henry',      label: 'Henry' },
  { key: 's-adams',    label: 'Adams (S)' },
] as const;

// ── Shared styles (defined outside components so they aren't recreated per render)

const menuItemBase: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem 0.875rem',
  background: 'none',
  border: 'none',
  color: '#F5EFE0',
  fontFamily: '"DM Sans", sans-serif',
  fontSize: '0.75rem',
  letterSpacing: '0.05em',
  cursor: 'pointer',
  textDecoration: 'none',
  width: '100%',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  borderRadius: '2px',
};

// ── QuoteCard ─────────────────────────────────────────────────────────────────

function QuoteCard({ quote }: { quote: QuoteData }) {
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const canNativeShare = typeof navigator !== 'undefined' && 'share' in navigator;

  const shareText = `"${quote.text}" — ${quote.author}, ${quote.source}\nforefatherthreads.com/founders-words`;
  const tweetText = `"${quote.text}" — ${quote.author}, ${quote.source} via @FFThreads1776 forefatherthreads.com/founders-words`;
  const fbPageUrl = 'https://forefatherthreads.netlify.app/founders-words';

  useEffect(() => {
    if (!shareOpen) return;
    function handleOutside(e: MouseEvent) {
      if (menuContainerRef.current && !menuContainerRef.current.contains(e.target as Node)) {
        setShareOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [shareOpen]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
    setShareOpen(false);
  }

  async function handleNativeShare() {
    try {
      await navigator.share({
        title: "Founders' Words — Forefather Threads",
        text: shareText,
        url: 'https://forefatherthreads.com/founders-words',
      });
    } catch {
      // user cancelled or API unavailable
    }
    setShareOpen(false);
  }

  return (
    <div style={{ breakInside: 'avoid', marginBottom: '1.5rem' }}>
      <div
        style={{
          background: '#0F1F35',
          borderLeft: '3px solid #C8922A',
          borderRadius: '0 8px 8px 0',
          padding: '1.75rem 1.75rem 1.75rem 1.5rem',
        }}
      >
        {/* Quote text */}
        <p
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            lineHeight: '1.75',
            color: '#F5EFE0',
            marginBottom: '1.25rem',
            marginTop: 0,
          }}
        >
          &ldquo;{quote.text}&rdquo;
        </p>

        {/* Citation + share row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
          {/* Citation */}
          <div>
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#C8922A',
                margin: 0,
                fontWeight: 600,
              }}
            >
              — {quote.author}
            </p>
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(200,146,42,0.55)',
                margin: '0.2rem 0 0',
              }}
            >
              {quote.source}
            </p>
          </div>

          {/* Share button + dropdown */}
          <div ref={menuContainerRef} style={{ position: 'relative', flexShrink: 0 }}>
            <button
              onClick={() => setShareOpen((v) => !v)}
              aria-label="Share this quote"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                background: 'none',
                border: 'none',
                color: '#C8922A',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                padding: '0.25rem 0',
                opacity: shareOpen ? 1 : 0.65,
                transition: 'opacity 0.15s ease',
              }}
            >
              <ShareBtnIcon />
              Share
            </button>

            {/* Dropdown menu */}
            {shareOpen && (
              <div
                style={{
                  position: 'absolute',
                  bottom: 'calc(100% + 0.5rem)',
                  right: 0,
                  background: '#0B1A2E',
                  border: '1px solid rgba(200,146,42,0.3)',
                  borderRadius: '4px',
                  padding: '0.375rem 0',
                  zIndex: 50,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  minWidth: '172px',
                }}
              >
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={menuItemBase}
                >
                  <XMenuIcon />
                  Share on X
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fbPageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={menuItemBase}
                >
                  <FBMenuIcon />
                  Share on Facebook
                </a>
                <button onClick={handleCopy} style={menuItemBase}>
                  <CopyMenuIcon />
                  {copied ? 'Copied!' : 'Copy Quote'}
                </button>
                {canNativeShare && (
                  <button onClick={handleNativeShare} style={menuItemBase}>
                    <NativeShareMenuIcon />
                    Share
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function FoundersWords() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredQuotes =
    activeFilter === 'all'
      ? QUOTES
      : QUOTES.filter((q) => q.founderKey === activeFilter);

  return (
    <div style={{ background: '#0B1A2E', minHeight: '100vh' }}>

      {/* ── Page Header ─────────────────────────────────────────── */}
      <div
        style={{
          padding: 'clamp(3rem, 5vw, 5rem) 2rem clamp(2rem, 3vw, 3rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative "1776" */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-0.08em',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(10rem, 30vw, 30vw)',
            lineHeight: 1,
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 700,
            color: '#F5F0E8',
            opacity: 0.04,
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0,
            letterSpacing: '-0.02em',
          }}
        >
          1776
        </span>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C8922A',
              marginBottom: '1.25rem',
              marginTop: 0,
            }}
          >
            Primary Sources
          </p>

          <h1
            className="font-playfair"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              color: '#F5EFE0',
              lineHeight: 1.0,
              marginBottom: '1rem',
              marginTop: 0,
            }}
          >
            The Founders&rsquo; Words
          </h1>

          <p
            className="font-playfair"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontStyle: 'italic',
              color: '#C8922A',
              margin: 0,
            }}
          >
            No paraphrase. No interpretation. The record as they left it.
          </p>
        </div>
      </div>

      {/* Thin gold divider */}
      <div style={{ height: '1px', background: 'rgba(200,146,42,0.2)' }} />

      {/* ── Filter Row ──────────────────────────────────────────── */}
      <div
        style={{
          padding: '1.5rem 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'center',
        }}
      >
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              style={{
                padding: '0.35rem 0.875rem',
                border: isActive
                  ? '1.5px solid #C8922A'
                  : '1.5px solid rgba(200,146,42,0.35)',
                background: isActive ? '#C8922A' : 'transparent',
                color: isActive ? '#0B1A2E' : '#C8922A',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '100px',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* ── Quote Grid ──────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 2rem 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative 1776 behind grid */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-0.08em',
            top: '10%',
            fontSize: 'clamp(10rem, 30vw, 30vw)',
            lineHeight: 1,
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 700,
            color: '#F5F0E8',
            opacity: 0.04,
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0,
            letterSpacing: '-0.02em',
          }}
        >
          1776
        </span>

        <div
          className="columns-1 md:columns-2"
          style={{ columnGap: '2rem', position: 'relative', zIndex: 1 }}
        >
          {filteredQuotes.length > 0 ? (
            filteredQuotes.map((quote) => <QuoteCard key={quote.id} quote={quote} />)
          ) : (
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                color: 'rgba(245,239,224,0.35)',
                fontSize: '0.9rem',
                textAlign: 'center',
                padding: '3rem 0',
              }}
            >
              No quotes found.
            </p>
          )}
        </div>
      </div>

      {/* ── Footer CTA ──────────────────────────────────────────── */}
      <div
        style={{
          textAlign: 'center',
          padding: 'clamp(3rem, 5vw, 5rem) 2rem',
          borderTop: '1px solid rgba(200,146,42,0.15)',
        }}
      >
        <h2
          className="font-playfair"
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            color: '#F5EFE0',
            lineHeight: 1.1,
            marginBottom: '0.75rem',
            marginTop: 0,
          }}
        >
          These words shaped a nation.
        </h2>

        <p
          className="font-playfair"
          style={{
            fontSize: 'clamp(1rem, 1.75vw, 1.2rem)',
            fontStyle: 'italic',
            color: '#C8922A',
            marginBottom: '2rem',
          }}
        >
          Wear the document that codified them.
        </p>

        <Link
          to="/shop"
          style={{
            display: 'inline-block',
            background: '#B94B2C',
            color: '#F5EFE0',
            border: 'none',
            padding: '1rem 2.5rem',
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.8rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '2px',
          }}
        >
          Enter the Armory
        </Link>
      </div>
    </div>
  );
}

// ── Icons (Tabler-style inline SVG) ──────────────────────────────────────────

function ShareBtnIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M8.7 10.7l6.6 -3.4" />
      <path d="M8.7 13.3l6.6 3.4" />
    </svg>
  );
}

function XMenuIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function FBMenuIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
  );
}

function CopyMenuIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
      <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

function NativeShareMenuIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M8.7 10.7l6.6 -3.4" />
      <path d="M8.7 13.3l6.6 3.4" />
    </svg>
  );
}
