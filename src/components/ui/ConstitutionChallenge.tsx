import { useState, useRef, useEffect, type CSSProperties } from 'react';
import { Link } from 'react-router';
import { selectQuestions, type QuizQuestion } from '../../data/quiz';
import { trackQuizComplete, trackQuizCta } from '../../lib/analytics';

type Screen = 'intro' | 'question' | 'final';

const QUESTION_COUNT = 5;

const OPTION_LABELS = ['A', 'B', 'C', 'D'] as const;

const SHARE_URL = 'https://forefatherthreads.com/constitution-challenge';
const FB_PAGE_URL = 'https://forefatherthreads.com/constitution-challenge';

function getScoreMessage(score: number): { headline: string; subtext: string } {
  if (score === 5) {
    return {
      headline: 'You Are the Remnant.',
      subtext: 'You know the document. You carry it with you. The founders would be proud.',
    };
  }
  if (score >= 3) {
    return {
      headline: 'A True Patriot.',
      subtext: 'Solid constitutional knowledge. Keep reading. The document rewards study.',
    };
  }
  if (score >= 1) {
    return {
      headline: 'The Republic Needs You.',
      subtext: 'Now you know why we put the Constitution on the sleeve. Study up — your rights depend on it.',
    };
  }
  return {
    headline: 'We Need to Talk.',
    subtext: 'The good news: the full Constitution is one scan away.',
  };
}

// Pitch the shirt in the register the score earns — mastery, progress, or a
// starting point — rather than congratulating everyone identically.
function getCtaIntro(score: number): string {
  if (score >= 4) return 'You know the document. Wear it.';
  if (score >= 2) return 'Now put it on your sleeve — literally.';
  return 'The Constitution goes with you from here. Wear it.';
}

export default function ConstitutionChallenge() {
  const questionsRef = useRef<QuizQuestion[] | null>(null);
  if (!questionsRef.current) {
    questionsRef.current = selectQuestions(QUESTION_COUNT);
  }
  const questions = questionsRef.current;

  const [screen, setScreen] = useState<Screen>('intro');
  const [visible, setVisible] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [copyScoreCopied, setCopyScoreCopied] = useState(false);
  const [challengeCopied, setChallengeCopied] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const currentQuestion = questions[questionIndex];
  const isLast = questionIndex === questions.length - 1;

  // Report the completed run once per attempt. The ref guard keeps a repeat
  // render of the results screen — or StrictMode's double-invoked effect in
  // development — from inflating the count; handleRetake clears it so a
  // second genuine attempt is still reported.
  const hasReportedScore = useRef(false);
  useEffect(() => {
    if (screen !== 'final' || hasReportedScore.current) return;
    hasReportedScore.current = true;
    trackQuizComplete(score, questions.length);
  }, [screen, score, questions.length]);

  // Computed share content — score changes on correct answer so these stay reactive
  const shareText = `I scored ${score}/5 on The Constitution Challenge at forefatherthreads.com/constitution-challenge — think you can beat it? #ForefatherThreads #KnowYourRights`;
  const canNativeShare = typeof navigator !== 'undefined' && 'share' in navigator;

  function fade(fn: () => void) {
    setVisible(false);
    setTimeout(() => {
      fn();
      setVisible(true);
    }, 400);
  }

  function handleStart() {
    fade(() => {
      setScreen('question');
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setScore(0);
    });
  }

  function handleSelectAnswer(i: number) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(i);
    if (i === currentQuestion.correct) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (isLast) {
      fade(() => setScreen('final'));
    } else {
      fade(() => {
        setQuestionIndex((n) => n + 1);
        setSelectedAnswer(null);
        setHoveredOption(null);
      });
    }
  }

  function handleRetake() {
    questionsRef.current = selectQuestions(QUESTION_COUNT);
    hasReportedScore.current = false;
    fade(() => {
      setScreen('intro');
      setScore(0);
      setQuestionIndex(0);
      setSelectedAnswer(null);
    });
  }

  async function handleCopyScore() {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopyScoreCopied(true);
      setTimeout(() => setCopyScoreCopied(false), 2000);
    } catch {
      // clipboard unavailable — fail silently
    }
  }

  async function handleNativeShare() {
    try {
      await navigator.share({
        title: 'The Constitution Challenge',
        text: shareText,
        url: SHARE_URL,
      });
    } catch {
      // User cancelled or share not supported
    }
  }

  async function handleChallengeFriend() {
    const text = `Think you know the Constitution? I scored ${score}/5 on The Constitution Challenge at forefatherthreads.com/constitution-challenge — beat my score. #ForefatherThreads`;
    try {
      await navigator.clipboard.writeText(text);
      setChallengeCopied(true);
      setTimeout(() => setChallengeCopied(false), 2000);
    } catch {
      // clipboard unavailable — fail silently
    }
  }

  function optionStyle(i: number): CSSProperties {
    const base: CSSProperties = {
      width: '100%',
      padding: '1rem 1.5rem',
      marginBottom: '0.5rem',
      textAlign: 'left',
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '1rem',
      lineHeight: '1.5',
      borderRadius: '2px',
      cursor: selectedAnswer !== null ? 'default' : 'pointer',
      transition: 'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease',
      display: 'block',
      background: 'transparent',
    };

    if (selectedAnswer !== null) {
      if (i === currentQuestion.correct) {
        return { ...base, border: '2px solid #C8922A', backgroundColor: 'rgba(200,146,42,0.15)', color: '#F5F0E8' };
      }
      if (i === selectedAnswer) {
        return { ...base, border: '2px solid #B94B2C', backgroundColor: 'rgba(185,75,44,0.15)', color: '#F5F0E8' };
      }
      return { ...base, border: '1.5px solid rgba(245,240,232,0.1)', color: 'rgba(245,240,232,0.35)' };
    }

    if (hoveredOption === i) {
      return { ...base, border: '1.5px solid #C8922A', backgroundColor: 'rgba(200,146,42,0.08)', color: '#F5F0E8' };
    }
    return { ...base, border: '1.5px solid rgba(245,240,232,0.2)', color: '#F5F0E8' };
  }

  const rustBtn: CSSProperties = {
    background: '#B94B2C',
    // White, not cream: cream on rust is 4.46 — just under WCAG AA's 4.5.
    color: '#FFFFFF',
    border: 'none',
    padding: '1rem 2.5rem',
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '0.8rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    borderRadius: '2px',
    display: 'inline-block',
    textDecoration: 'none',
    textAlign: 'center' as const,
    boxSizing: 'border-box' as const,
  };

  // Shared style for all four share buttons
  const shareBtnStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.35rem',
    flex: '1',
    padding: '0.75rem 0.625rem',
    border: '1.5px solid #C8922A',
    background: 'transparent',
    color: '#C8922A',
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '0.65rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    borderRadius: '2px',
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
    boxSizing: 'border-box' as const,
  };

  const { headline, subtext } =
    screen === 'final' ? getScoreMessage(score) : { headline: '', subtext: '' };

  return (
    <>
      <style>{`
        @keyframes ccFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cc-entrance       { animation: ccFadeUp 0.55s ease both; }
        .cc-entrance-delay { animation: ccFadeUp 0.55s ease 0.15s both; }
        .cc-slide-in       { animation: ccFadeUp 0.4s ease both; }
      `}</style>

      {/* Outer wrapper always opaque navy — prevents cream flash during fade */}
      <div style={{ background: '#0B1A2E', minHeight: '100vh' }}>
        {/* Inner fades between screens */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.4s ease',
            padding: 'clamp(2rem, 5vw, 5rem) 2rem',
          }}
        >
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>

            {/* ── INTRO ─────────────────────────────────────────── */}
            {screen === 'intro' && (
              <div style={{ textAlign: 'center' }}>
                <p
                  className="cc-entrance font-sans uppercase"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.22em', color: '#C8922A', marginBottom: '1.5rem' }}
                >
                  Constitutional Knowledge
                </p>

                <h1
                  className="cc-entrance font-playfair text-cream"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.0', fontWeight: 700, marginBottom: '1rem' }}
                >
                  The Constitution Challenge
                </h1>

                <p className="font-playfair italic" style={{ fontSize: '1.2rem', color: '#C8922A', marginBottom: '1.5rem' }}>
                  How well do you know the document on your sleeve?
                </p>

                <p
                  className="font-sans"
                  style={{ fontSize: '1rem', color: 'rgba(245,240,232,0.65)', lineHeight: '1.75', maxWidth: '480px', margin: '0 auto 2.5rem' }}
                >
                  5 questions. Primary sources only. No spin. No interpretation.
                  Just the document as written and ratified.
                </p>

                <div className="cc-entrance-delay">
                  <button onClick={handleStart} style={rustBtn}>
                    Accept the Challenge
                  </button>
                </div>

                <p className="font-sans" style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.3)', marginTop: '1.25rem' }}>
                  Taken by patriots across the republic
                </p>
              </div>
            )}

            {/* ── QUESTION ──────────────────────────────────────── */}
            {screen === 'question' && (
              <div>
                {/* Progress bar */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <div
                    className="font-sans"
                    style={{ fontSize: '0.72rem', color: 'rgba(245,240,232,0.45)', letterSpacing: '0.1em', marginBottom: '0.5rem', textAlign: 'right' }}
                  >
                    Question {questionIndex + 1} of {questions.length}
                  </div>
                  <div style={{ height: '2px', background: 'rgba(245,240,232,0.08)', borderRadius: '2px' }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${((questionIndex + 1) / questions.length) * 100}%`,
                        background: '#C8922A',
                        borderRadius: '2px',
                        transition: 'width 0.4s ease',
                      }}
                    />
                  </div>
                </div>

                {/* Eyebrow */}
                <p className="font-sans uppercase" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', color: '#C8922A', marginBottom: '1rem' }}>
                  Question {questionIndex + 1}
                </p>

                {/* Question text */}
                <h2
                  className="font-playfair text-cream"
                  style={{ fontSize: 'clamp(1.35rem, 3vw, 1.9rem)', lineHeight: '1.3', fontWeight: 700, marginBottom: '1.75rem' }}
                >
                  {currentQuestion.question}
                </h2>

                {/* Options */}
                <div>
                  {currentQuestion.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectAnswer(i)}
                      onMouseEnter={() => selectedAnswer === null && setHoveredOption(i)}
                      onMouseLeave={() => setHoveredOption(null)}
                      style={optionStyle(i)}
                      disabled={selectedAnswer !== null}
                    >
                      <span style={{ color: '#C8922A', marginRight: '0.75rem', fontWeight: 600 }}>
                        {OPTION_LABELS[i]}
                      </span>
                      {option}
                    </button>
                  ))}
                </div>

                {/* Explanation */}
                {selectedAnswer !== null && (
                  <div className="cc-slide-in" style={{ marginTop: '1.75rem', borderLeft: '3px solid #C8922A', paddingLeft: '1.25rem' }}>
                    <p className="font-playfair italic text-cream" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}

                {/* Next */}
                {selectedAnswer !== null && (
                  <div className="cc-slide-in" style={{ marginTop: '1.75rem' }}>
                    <button onClick={handleNext} style={rustBtn}>
                      {isLast ? 'See Results' : 'Next Question'}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ── FINAL SCORE ───────────────────────────────────── */}
            {screen === 'final' && (
              <div style={{ textAlign: 'center' }}>
                {/* Score */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <span className="font-playfair" style={{ fontSize: '6rem', lineHeight: '1', color: '#C8922A', fontWeight: 700 }}>
                    {score}
                  </span>
                  <span className="font-playfair" style={{ fontSize: '3rem', lineHeight: '1', color: '#F5F0E8' }}>
                    /5
                  </span>
                </div>

                <h2
                  className="font-playfair text-cream"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: '1.1', marginBottom: '0.75rem' }}
                >
                  {headline}
                </h2>

                <p
                  className="font-sans"
                  style={{ fontSize: '1rem', color: 'rgba(245,240,232,0.65)', lineHeight: '1.75', maxWidth: '440px', margin: '0 auto 2.5rem' }}
                >
                  {subtext}
                </p>

                <div style={{ width: '48px', height: '1px', background: 'rgba(200,146,42,0.4)', margin: '0 auto 2rem' }} />

                {/* Conversion CTA — the first thing offered after the score */}
                <div
                  style={{
                    maxWidth: '480px',
                    margin: '0 auto 2.5rem',
                    padding: 'clamp(1.5rem, 4vw, 2rem) clamp(1.25rem, 4vw, 2rem)',
                    background: 'rgba(200,146,42,0.06)',
                    border: '1px solid rgba(200,146,42,0.25)',
                    borderRadius: '2px',
                  }}
                >
                  <p
                    className="font-playfair"
                    style={{ fontSize: 'clamp(1.15rem, 3vw, 1.4rem)', lineHeight: '1.4', color: '#F5EFE0', fontWeight: 700, marginBottom: '1.25rem' }}
                  >
                    {getCtaIntro(score)}
                  </p>

                  {/* Primary: straight to the flagship product */}
                  <Link
                    to="/products/the-remnant"
                    onClick={() => trackQuizCta('shop_the_remnant', score)}
                    className="font-sans uppercase"
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '1.15rem 1.5rem',
                      background: '#C8922A',
                      color: '#0B1A2E',
                      border: 'none',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textDecoration: 'none',
                      textAlign: 'center',
                      borderRadius: '2px',
                      boxSizing: 'border-box',
                    }}
                  >
                    Shop The Remnant
                  </Link>

                  {/* Secondary: the homepage signup section */}
                  <Link
                    to="/#email-signup"
                    onClick={() => trackQuizCta('intelligence_brief', score)}
                    className="font-sans"
                    style={{
                      display: 'block',
                      marginTop: '1rem',
                      color: 'rgba(245,239,224,0.55)',
                      fontSize: '0.82rem',
                      lineHeight: '1.6',
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                    }}
                  >
                    Or join the Intelligence Brief for new drops and constitutional commentary →
                  </Link>
                </div>

                {/* Share row — row on sm+ desktop, stacked on mobile */}
                <div className="flex flex-col sm:flex-row gap-2" style={{ maxWidth: '480px', margin: '0 auto 1.25rem' }}>
                  {/* X */}
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={shareBtnStyle}
                  >
                    <XShareIcon />
                    <span>Share on X</span>
                  </a>
                  {/* Facebook */}
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(FB_PAGE_URL)}&quote=${encodeURIComponent(shareText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={shareBtnStyle}
                  >
                    <FBShareIcon />
                    <span>Share on Facebook</span>
                  </a>
                  {/* Copy */}
                  <button onClick={handleCopyScore} style={shareBtnStyle}>
                    <CopyShareIcon />
                    <span>{copyScoreCopied ? 'Copied!' : 'Copy Score'}</span>
                  </button>
                  {/* Native share — only on mobile browsers that support it */}
                  {canNativeShare && (
                    <button onClick={handleNativeShare} style={shareBtnStyle}>
                      <NativeShareIcon />
                      <span>Share</span>
                    </button>
                  )}
                </div>

                {/* Secondary action — outlined so the gold Shop CTA above stays the top action */}
                <div style={{ maxWidth: '320px', margin: '0 auto' }}>
                  <Link
                    to="/oath"
                    className="font-sans uppercase"
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.9rem 1.5rem',
                      background: 'transparent',
                      border: '1.5px solid rgba(245,239,224,0.35)',
                      color: 'rgba(245,239,224,0.85)',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.75rem',
                      letterSpacing: '0.18em',
                      textDecoration: 'none',
                      borderRadius: '2px',
                      boxSizing: 'border-box',
                      textAlign: 'center',
                    }}
                  >
                    Take the Oath
                  </Link>
                </div>

                {/* Constitution link */}
                <div style={{ marginTop: '2rem' }}>
                  <a
                    href="https://constitution.congress.gov/constitution/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans"
                    style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.4)', textDecoration: 'none' }}
                  >
                    Read the full Constitution →
                  </a>
                </div>

                {/* Challenge a friend */}
                <button
                  onClick={handleChallengeFriend}
                  className="font-sans"
                  style={{
                    marginTop: '1.25rem',
                    background: 'none',
                    border: 'none',
                    color: 'rgba(245,240,232,0.3)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    letterSpacing: '0.08em',
                    display: 'block',
                    width: '100%',
                  }}
                >
                  {challengeCopied ? 'Link copied!' : 'Challenge a friend →'}
                </button>

                {/* Retake */}
                <button
                  onClick={handleRetake}
                  className="font-sans"
                  style={{
                    marginTop: '0.75rem',
                    background: 'none',
                    border: 'none',
                    color: 'rgba(245,240,232,0.3)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    letterSpacing: '0.08em',
                    display: 'block',
                    width: '100%',
                  }}
                >
                  Retake with new questions →
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

// ── Share icons (Tabler-style, stroke-based) ───────────────────────────────

function XShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function FBShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
  );
}

function CopyShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
      <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

function NativeShareIcon() {
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
