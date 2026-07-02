import { useEffect } from 'react';

interface SizeGuideProps {
  onClose: () => void;
}

const SIZE_CHART = [
  { size: 'S', chest: '34–36"', length: '27.5"', sleeve: '32"' },
  { size: 'M', chest: '38–40"', length: '28.5"', sleeve: '33"' },
  { size: 'L', chest: '42–44"', length: '29.5"', sleeve: '34"' },
  { size: 'XL', chest: '46–48"', length: '30.5"', sleeve: '35"' },
  { size: '2XL', chest: '50–52"', length: '31.5"', sleeve: '36"' },
  { size: '3XL', chest: '54–56"', length: '32.5"', sleeve: '37"' },
];

export default function SizeGuide({ onClose }: SizeGuideProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy/60 z-[var(--z-modal)] animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Size guide"
      >
        <div className="bg-cream w-full max-w-lg shadow-2xl animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-navy">
            <h2 className="font-playfair text-cream text-xl">Size Guide</h2>
            <button
              onClick={onClose}
              className="text-cream/60 hover:text-cream transition-colors"
              aria-label="Close size guide"
            >
              <XIcon />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <p className="font-sans text-sm text-navy/60 mb-5 leading-relaxed">
              Measurements are in inches. For a relaxed fit, size up. All garments are
              pre-shrunk — expect less than 3% shrinkage after washing.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="bg-navy text-cream">
                    {['Size', 'Chest', 'Length', 'Sleeve'].map((h) => (
                      <th
                        key={h}
                        className="py-3 px-4 text-left text-xs tracking-[0.1em] uppercase font-medium"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SIZE_CHART.map((row, i) => (
                    <tr
                      key={row.size}
                      className={i % 2 === 0 ? 'bg-parchment/40' : 'bg-cream'}
                    >
                      <td className="py-3 px-4 font-semibold text-navy">{row.size}</td>
                      <td className="py-3 px-4 text-navy/70">{row.chest}</td>
                      <td className="py-3 px-4 text-navy/70">{row.length}</td>
                      <td className="py-3 px-4 text-navy/70">{row.sleeve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 pt-5 border-t border-parchment">
              <p className="font-sans text-xs text-navy/50 leading-relaxed">
                <strong className="text-navy">How to measure chest:</strong> Wrap a tape
                measure around the fullest part of your chest, keeping the tape horizontal.
                <br />
                <strong className="text-navy">How to measure length:</strong> From the
                highest point of the shoulder to the bottom hem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
