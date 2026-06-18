(function () {
  'use strict';

  // ── Brand palette ────────────────────────────────────────────────────────────
  var BRAND = {
    bg:    '#050505',
    red:   '#b91c1c',
    gold:  '#c0a062',
    white: '#ffffff',
    grey:  '#d1d1d1',
    fHead: 'Anton, serif',
    fBody: '"Roboto Mono", monospace',
  };

  // ── Quote data ───────────────────────────────────────────────────────────────
  var QUOTES = [
    {
      id: 0,
      text: 'We hold these truths to be self-evident, that all men are created equal.',
      author: 'Thomas Jefferson',
      source: 'Declaration of Independence, July 4, 1776',
      tier: 'short',
    },
    {
      id: 1,
      text: 'Give me liberty, or give me death!',
      author: 'Patrick Henry',
      source: 'Speech to the Second Virginia Convention, March 23, 1775',
      sourceNote: 'Recorded by biographer William Wirt decades later; the standard historically attributed version.',
      tier: 'short',
    },
    {
      id: 2,
      text: 'These are the times that try men\'s souls.',
      author: 'Thomas Paine',
      source: 'The American Crisis, December 1776',
      tier: 'short',
    },
    {
      id: 3,
      text: 'I know of no pursuit in which more zeal and important service can be rendered to any Country than by improving its agriculture, its breed of useful animals, and other branches of a husbandman\'s cares.',
      author: 'George Washington',
      source: 'Letter to John Sinclair, July 20, 1794',
      tier: 'long',
    },
    {
      id: 4,
      text: 'I, however, place economy among the first and most important republican virtues, and public debt as the greatest of the dangers to be feared.',
      author: 'Thomas Jefferson',
      source: 'Letter to William Plumer, July 21, 1816',
      tier: 'long',
    },
    {
      id: 5,
      text: 'Whenever the people are well informed, they can be trusted with their own government; that whenever things get so far wrong as to attract their notice, they may be relied on to set them to rights.',
      author: 'Thomas Jefferson',
      source: 'Letter to Richard Price, January 8, 1789',
      tier: 'long',
    },
    {
      id: 6,
      text: 'I have often thought that nothing would do more extensive good at small expense than the establishment of a small circulating library in every county.',
      author: 'Thomas Jefferson',
      source: 'Letter to John Wyche, May 19, 1809',
      tier: 'long',
    },
    {
      id: 7,
      text: 'It is the great parent of science and of virtue, and that a nation will be great in both, always in proportion as it is free.',
      author: 'Thomas Jefferson',
      source: 'Letter to Joseph Willard, March 24, 1789',
      tier: 'long',
    },
  ];

  // ── Canvas text helpers ──────────────────────────────────────────────────────
  function getLines(ctx, text, maxWidth) {
    var words = text.split(' ');
    var lines = [];
    var cur = '';
    for (var i = 0; i < words.length; i++) {
      var test = cur ? cur + ' ' + words[i] : words[i];
      if (ctx.measureText(test).width > maxWidth && cur) {
        lines.push(cur);
        cur = words[i];
      } else {
        cur = test;
      }
    }
    if (cur) lines.push(cur);
    return lines;
  }

  function drawLines(ctx, lines, x, y, lineHeight) {
    for (var i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], x, y + i * lineHeight);
    }
    return lines.length * lineHeight;
  }

  // Reduce font size until text fits within maxHeight.
  function fitFontSize(ctx, text, maxWidth, maxHeight, startSize, minSize, fontFamily) {
    var size = startSize;
    while (size >= minSize) {
      ctx.font = size + 'px ' + fontFamily;
      var lines = getLines(ctx, text.toUpperCase(), maxWidth);
      if (lines.length * size * 1.32 <= maxHeight) break;
      size -= 2;
    }
    return size;
  }

  // ── Ensure web fonts render before canvas draw ───────────────────────────────
  function ensureFonts() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    return Promise.all([
      document.fonts.load('700px Anton').catch(function () {}),
      document.fonts.load('22px "Roboto Mono"').catch(function () {}),
    ]);
  }

  // ── Logo loader (handles CORS gracefully) ────────────────────────────────────
  function loadLogo(url) {
    return new Promise(function (resolve) {
      if (!url) { resolve(null); return; }
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = function () { resolve(img); };
      img.onerror = function () { resolve(null); };
      img.src = url;
    });
  }

  // ── Card canvas generation ───────────────────────────────────────────────────
  function generateCard(quote, logoUrl) {
    return ensureFonts().then(function () {
      return loadLogo(logoUrl);
    }).then(function (logoImg) {
      var isShort = quote.tier === 'short';
      var W = 1080;
      var H = isShort ? 1080 : 1350;
      var PAD = 80;
      var textW = W - PAD * 2;

      var canvas = document.createElement('canvas');
      canvas.width = W;
      canvas.height = H;
      var ctx = canvas.getContext('2d');

      // Background
      ctx.fillStyle = BRAND.bg;
      ctx.fillRect(0, 0, W, H);

      // Top red accent bar
      ctx.fillStyle = BRAND.red;
      ctx.fillRect(PAD, 72, W - PAD * 2, 5);

      // Decorative oversized opening quotemark
      var qMarkSize = isShort ? 200 : 160;
      ctx.font = qMarkSize + 'px ' + BRAND.fHead;
      ctx.fillStyle = BRAND.red;
      ctx.globalAlpha = 0.18;
      ctx.fillText('“', PAD - 12, PAD + qMarkSize * 0.82);
      ctx.globalAlpha = 1;

      // ── Quote text ──────────────────────────────────────────────────────────
      var quoteAreaTop    = isShort ? 200 : 170;
      var quoteAreaHeight = isShort ? 560 : 780;
      var startSize       = isShort ?  72 :  48;
      var minSize         = isShort ?  42 :  28;

      var fontSize = fitFontSize(ctx, quote.text, textW, quoteAreaHeight, startSize, minSize, BRAND.fHead);
      var lineHeight = Math.round(fontSize * 1.32);

      ctx.font = fontSize + 'px ' + BRAND.fHead;
      ctx.fillStyle = BRAND.white;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';

      var quoteLines = getLines(ctx, quote.text.toUpperCase(), textW);
      var quoteBlockH = drawLines(ctx, quoteLines, PAD, quoteAreaTop, lineHeight);

      // ── Gold separator ──────────────────────────────────────────────────────
      var sepY = quoteAreaTop + quoteBlockH + (isShort ? 44 : 36);
      ctx.fillStyle = BRAND.gold;
      ctx.fillRect(PAD, sepY, 100, 3);

      // ── Attribution block ───────────────────────────────────────────────────
      var attrY = sepY + 32;

      // Author
      var authorSize = isShort ? 30 : 26;
      ctx.font = authorSize + 'px ' + BRAND.fHead;
      ctx.fillStyle = BRAND.gold;
      ctx.fillText(('— ' + quote.author).toUpperCase(), PAD, attrY);
      attrY += authorSize + 16;

      // For long-tier cards: citation gets its own clearly separated block
      if (!isShort) {
        // Push citation toward lower third regardless of quote length
        var citationFloor = H - PAD - (logoImg ? 120 : 60) - 80;
        attrY = Math.max(attrY + 16, citationFloor);

        ctx.fillStyle = BRAND.red;
        ctx.fillRect(PAD, attrY - 20, 60, 3);
        attrY += 8;
      }

      // Source line(s)
      var srcSize = isShort ? 22 : 22;
      ctx.font = srcSize + 'px ' + BRAND.fBody;
      ctx.fillStyle = BRAND.grey;
      var srcLines = getLines(ctx, quote.source, textW);
      drawLines(ctx, srcLines, PAD, attrY, srcSize * 1.5);
      attrY += srcLines.length * srcSize * 1.5;

      if (quote.sourceNote) {
        ctx.font = '18px ' + BRAND.fBody;
        ctx.fillStyle = BRAND.grey;
        ctx.globalAlpha = 0.65;
        var noteLines = getLines(ctx, quote.sourceNote, textW);
        drawLines(ctx, noteLines, PAD, attrY + 8, 18 * 1.45);
        ctx.globalAlpha = 1;
      }

      // ── Logo watermark ──────────────────────────────────────────────────────
      if (logoImg) {
        var logoW = 140;
        var logoH = Math.round((logoImg.height / logoImg.width) * logoW);
        var logoX = W - logoW - PAD;
        var logoY = H - logoH - PAD;
        ctx.globalAlpha = 0.30;
        ctx.drawImage(logoImg, logoX, logoY, logoW, logoH);
        ctx.globalAlpha = 1;
      }

      // Bottom red accent bar
      ctx.fillStyle = BRAND.red;
      ctx.fillRect(PAD, H - 72, W - PAD * 2, 5);

      // Wordmark
      ctx.font = '18px ' + BRAND.fBody;
      ctx.fillStyle = BRAND.grey;
      ctx.globalAlpha = 0.45;
      ctx.textAlign = 'left';
      ctx.fillText('FOREFATHERTHREADS.COM', PAD, H - 36);
      ctx.globalAlpha = 1;

      return canvas;
    });
  }

  // ── Modal CSS (injected once) ────────────────────────────────────────────────
  var MODAL_CSS_ID = 'fft-quote-modal-css';
  function injectModalCSS() {
    if (document.getElementById(MODAL_CSS_ID)) return;
    var style = document.createElement('style');
    style.id = MODAL_CSS_ID;
    style.textContent = [
      '.fft-quote-modal{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;}',
      '.fft-quote-modal__backdrop{position:absolute;inset:0;background:rgba(0,0,0,.82);}',
      '.fft-quote-modal__content{position:relative;background:#121212;border:1px solid #b91c1c;padding:2.5rem 2rem;max-width:440px;width:90%;box-shadow:0 0 40px rgba(185,28,28,.25);}',
      '.fft-quote-modal__close{position:absolute;top:.75rem;right:1rem;background:none;border:none;color:#fff;font-size:1.6rem;cursor:pointer;line-height:1;padding:0;}',
      '.fft-quote-modal__close:hover{color:#b91c1c;}',
      '.fft-quote-modal__title{font-family:Anton,serif;font-size:1.4rem;letter-spacing:.08em;color:#fff;text-transform:uppercase;margin:0 0 1.5rem;}',
      '.fft-quote-modal__actions{display:flex;flex-direction:column;gap:.75rem;}',
      '.fft-quote-modal__btn{display:block;text-align:center;text-decoration:none;font-family:"Roboto Mono",monospace;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;padding:.7rem 1.2rem;border:1px solid #444;color:#d1d1d1;background:transparent;cursor:pointer;transition:border-color .2s,color .2s;}',
      '.fft-quote-modal__btn:hover{border-color:#c0a062;color:#c0a062;}',
      '.fft-quote-modal__btn--primary{border-color:#b91c1c;color:#fff;background:#8a0303;}',
      '.fft-quote-modal__btn--primary:hover{background:#b91c1c;}',
      '.fft-quote-modal__notice{font-family:"Roboto Mono",monospace;font-size:.72rem;color:#666;margin:.75rem 0 0;line-height:1.5;}',
    ].join('');
    document.head.appendChild(style);
  }

  // ── Fallback share modal ─────────────────────────────────────────────────────
  function showModal(quote, objectUrl) {
    injectModalCSS();
    document.getElementById('fft-quote-modal') && document.getElementById('fft-quote-modal').remove();

    var qText   = encodeURIComponent('“' + quote.text + '” — ' + quote.author);
    var pageUrl = encodeURIComponent(window.location.href);
    var xUrl    = 'https://x.com/intent/tweet?text=' + qText;
    var fbUrl   = 'https://www.facebook.com/sharer/sharer.php?u=' + pageUrl + '&quote=' + qText;

    var modal = document.createElement('div');
    modal.id = 'fft-quote-modal';
    modal.className = 'fft-quote-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Share quote');
    modal.innerHTML =
      '<div class="fft-quote-modal__backdrop"></div>' +
      '<div class="fft-quote-modal__content">' +
        '<button class="fft-quote-modal__close" aria-label="Close">&times;</button>' +
        '<p class="fft-quote-modal__title">Share This Quote</p>' +
        '<div class="fft-quote-modal__actions">' +
          '<a href="' + objectUrl + '" download="founders-quote.png" class="fft-quote-modal__btn fft-quote-modal__btn--primary">Download Image</a>' +
          '<a href="' + xUrl + '" target="_blank" rel="noopener noreferrer" class="fft-quote-modal__btn">Share on X</a>' +
          '<a href="' + fbUrl + '" target="_blank" rel="noopener noreferrer" class="fft-quote-modal__btn">Share on Facebook</a>' +
          '<button class="fft-quote-modal__btn" data-fft-copy="' + quote.text.replace(/"/g, '&quot;') + ' — ' + quote.author + '">Copy Quote Text</button>' +
        '</div>' +
        '<p class="fft-quote-modal__notice">Image downloaded automatically. Open your downloads folder to find it.</p>' +
      '</div>';

    document.body.appendChild(modal);

    function close() {
      modal.remove();
      URL.revokeObjectURL(objectUrl);
    }

    modal.querySelector('.fft-quote-modal__backdrop').addEventListener('click', close);
    modal.querySelector('.fft-quote-modal__close').addEventListener('click', close);

    var copyBtn = modal.querySelector('[data-fft-copy]');
    copyBtn.addEventListener('click', function () {
      var self = this;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(self.getAttribute('data-fft-copy')).then(function () {
          self.textContent = 'Copied!';
          setTimeout(function () { self.textContent = 'Copy Quote Text'; }, 2000);
        });
      }
    });
  }

  // ── Core share flow ──────────────────────────────────────────────────────────
  function shareQuote(quote, logoUrl) {
    return generateCard(quote, logoUrl).then(function (canvas) {
      return new Promise(function (resolve, reject) {
        canvas.toBlob(function (blob) {
          if (!blob) { reject(new Error('Canvas export failed')); return; }

          var file = new File([blob], 'founders-quote.png', { type: 'image/png' });

          // Native share sheet (iOS Safari, Android Chrome)
          if (
            navigator.share &&
            navigator.canShare &&
            navigator.canShare({ files: [file] })
          ) {
            navigator.share({
              files: [file],
              title: '“' + quote.text + '”',
            }).then(resolve).catch(function (err) {
              if (err.name === 'AbortError') { resolve(); return; }
              // canShare said yes but share still failed — fall through to download
              fallbackDownload(blob, quote, resolve);
            });
            return;
          }

          fallbackDownload(blob, quote, resolve);
        }, 'image/png');
      });
    });
  }

  function fallbackDownload(blob, quote, resolve) {
    var url = URL.createObjectURL(blob);
    // Trigger auto-download
    var a = document.createElement('a');
    a.href = url;
    a.download = 'founders-quote.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    // Show modal with manual options
    showModal(quote, url);
    resolve();
  }

  // ── Button wiring ────────────────────────────────────────────────────────────
  function init() {
    var logoUrl = '';
    var logoEl  = document.querySelector('[data-fft-logo-url]');
    if (logoEl) logoUrl = logoEl.getAttribute('data-fft-logo-url') || '';

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-fft-share]');
      if (!btn) return;

      var idx   = parseInt(btn.getAttribute('data-fft-share'), 10);
      var quote = QUOTES[idx];
      if (!quote) return;

      var originalLabel = btn.textContent;
      btn.textContent = 'GENERATING…';
      btn.disabled    = true;

      shareQuote(quote, logoUrl).finally(function () {
        btn.textContent = originalLabel;
        btn.disabled    = false;
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.FFTQuoteCards = { quotes: QUOTES, generateCard: generateCard };
})();
