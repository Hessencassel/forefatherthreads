import { useState, useRef, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { selectQuestions, type QuizQuestion } from '../../data/quiz';

type Screen = 'intro' | 'question' | 'final';

const OPTION_LABELS = ['A', 'B', 'C', 'D'] as const;

function getScoreMessage(score: number): { headline: string; subtext: string } {
  if (score === 5) {
    return {
      headline: 'You Are the Remnant.',
      subtext:
        'You know the document. You carry it with you. The founders would be proud.',
    };
  }
  if (score >= 3) {
    return {
      headline: 'A True Patriot.',
      subtext:
        'Solid constitutional knowledge. Keep reading. The document rewards study.',
    };
  }
  if (score >= 1) {
    return {
      headline: 'The Republic Needs You.',
      subtext:
        'Now you know why we put the Constitution on the sleeve. Study up — your rights depend on it.',
    };
  }
  return {
    headline: 'We Need to Talk.',
    subtext: 'The good news: the full Constitution is one scan away.',
  };
}

export default function ConstitutionChallenge() {
  const questionsRef = useRef<QuizQuestion[] | null>(null);
  if (!questionsRef.current) {
    questionsRef.current = selectQuestions(5);
  }
  const questions = questionsRef.current;

  const [screen, setScreen] = useState<Screen>('intro');
  const [visible, setVisible] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [shareCopied, setShareCopied] = useState(false);
  const [challengeCopied, setChallengeCopied] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const currentQuestion = questions[questionIndex];
  const isLast = questionIndex === questions.length - 1;

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
    questionsRef.current = selectQuestions(5);
    fade(() => {
      setScreen('intro');
      setScore(0);
      setQuestionIndex(0);
      setSelectedAnswer(null);
    });
  }

  async function handleShare() {
    const text = `I scored ${score}/5 on The Constitution Challenge at forefatherthreads.com/constitution-challenge — can you beat it? #ForefatherThreads #KnowYourRights`;
    try {
      await navigator.clipboard.writeText(text);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {
      // clipboard unavailable — fail silently
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
        return {
          ...base,
          border: '2px solid #C8922A',
          backgroundColor: 'rgba(200,146,42,0.15)',
          color: '#F5F0E8',
        };
      }
      if (i === selectedAnswer) {
        return {
          ...base,
          border: '2px solid #B94B2C',
          backgroundColor: 'rgba(185,75,44,0.15)',
          color: '#F5F0E8',
        };
      }
      return {
        ...base,
        border: '1.5px solid rgba(245,240,232,0.1)',
        color: 'rgba(245,240,232,0.35)',
      };
    }

    if (hoveredOption === i) {
      return {
        ...base,
        border: '1.5px solid #C8922A',
        backgroundColor: 'rgba(200,146,42,0.08)',
        color: '#F5F0E8',
      };
    }
    return {
      ...base,
      border: '1.5px solid rgba(245,240,232,0.2)',
      color: '#F5F0E8',
    };
  }

  const rustBtn: CSSProperties = {
    background: '#B94B2C',
    color: '#F5F0E8',
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
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    lineHeight: '1.0',
                    fontWeight: 700,
                    marginBottom: '1rem',
                  }}
                >
                  The Constitution Challenge
                </h1>

                <p
                  className="font-playfair italic"
                  style={{ fontSize: '1.2rem', color: '#C8922A', marginBottom: '1.5rem' }}
                >
                  How well do you know the document on your sleeve?
                </p>

                <p
                  className="font-sans"
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(245,240,232,0.65)',
                    lineHeight: '1.75',
                    maxWidth: '480px',
                    margin: '0 auto 2.5rem',
                  }}
                >
                  5 questions. Primary sources only. No spin. No interpretation.
                  Just the document as written and ratified.
                </p>

                <div className="cc-entrance-delay">
                  <button onClick={handleStart} style={rustBtn}>
                    Accept the Challenge
                  </button>
                </div>

                <p
                  className="font-sans"
                  style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.3)', marginTop: '1.25rem' }}
                >
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
                    style={{
                      fontSize: '0.72rem',
                      color: 'rgba(245,240,232,0.45)',
                      letterSpacing: '0.1em',
                      marginBottom: '0.5rem',
                      textAlign: 'right',
                    }}
                  >
                    Question {questionIndex + 1} of {questions.length}
                  </div>
                  <div
                    style={{
                      height: '2px',
                      background: 'rgba(245,240,232,0.08)',
                      borderRadius: '2px',
                    }}
                  >
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
                <p
                  className="font-sans uppercase"
                  style={{ fontSize: '0.68rem', letterSpacing: '0.22em', color: '#C8922A', marginBottom: '1rem' }}
                >
                  Question {questionIndex + 1}
                </p>

                {/* Question text */}
                <h2
                  className="font-playfair text-cream"
                  style={{
                    fontSize: 'clamp(1.35rem, 3vw, 1.9rem)',
                    lineHeight: '1.3',
                    fontWeight: 700,
                    marginBottom: '1.75rem',
                  }}
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
                  <div
                    className="cc-slide-in"
                    style={{
                      marginTop: '1.75rem',
                      borderLeft: '3px solid #C8922A',
                      paddingLeft: '1.25rem',
                    }}
                  >
                    <p
                      className="font-playfair italic text-cream"
                      style={{ fontSize: '1rem', lineHeight: '1.75' }}
                    >
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
                  <span
                    className="font-playfair"
                    style={{ fontSize: '6rem', lineHeight: '1', color: '#C8922A', fontWeight: 700 }}
                  >
                    {score}
                  </span>
                  <span
                    className="font-playfair"
                    style={{ fontSize: '3rem', lineHeight: '1', color: '#F5F0E8' }}
                  >
                    /5
                  </span>
                </div>

                <h2
                  className="font-playfair text-cream"
                  style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: 700,
                    lineHeight: '1.1',
                    marginBottom: '0.75rem',
                  }}
                >
                  {headline}
                </h2>

                <p
                  className="font-sans"
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(245,240,232,0.65)',
                    lineHeight: '1.75',
                    maxWidth: '440px',
                    margin: '0 auto 2.5rem',
                  }}
                >
                  {subtext}
                </p>

                <div
                  style={{
                    width: '48px',
                    height: '1px',
                    background: 'rgba(200,146,42,0.4)',
                    margin: '0 auto 2.5rem',
                  }}
                />

                {/* Action buttons */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    gap: '0.875rem',
                    maxWidth: '320px',
                    margin: '0 auto',
                  }}
                >
                  {/* Share */}
                  <button
                    onClick={handleShare}
                    className="font-sans uppercase"
                    style={{
                      padding: '1rem 1.5rem',
                      border: '1.5px solid #C8922A',
                      background: 'transparent',
                      color: '#C8922A',
                      fontSize: '0.78rem',
                      letterSpacing: '0.18em',
                      cursor: 'pointer',
                      borderRadius: '2px',
                      transition: 'background 0.2s ease',
                    }}
                  >
                    {shareCopied ? 'Copied!' : 'Share My Score'}
                  </button>

                  {/* Take the Oath */}
                  <Link
                    to="/oath"
                    style={{
                      ...rustBtn,
                      width: '100%',
                      padding: '1rem 1.5rem',
                    }}
                  >
                    Take the Oath
                  </Link>

                  {/* Enter the Armory */}
                  <Link
                    to="/shop"
                    className="font-sans uppercase"
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '1rem 1.5rem',
                      background: '#0B1A2E',
                      border: '1.5px solid #C8922A',
                      color: '#F5F0E8',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.78rem',
                      letterSpacing: '0.18em',
                      textDecoration: 'none',
                      borderRadius: '2px',
                      boxSizing: 'border-box',
                      textAlign: 'center',
                    }}
                  >
                    Enter the Armory
                  </Link>
                </div>

                {/* Constitution link */}
                <div style={{ marginTop: '2rem' }}>
                  <a
                    href="https://constitution.congress.gov/constitution/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans"
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(245,240,232,0.4)',
                      textDecoration: 'none',
                    }}
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
