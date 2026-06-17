/* ==========================================================
   FYDELIA — HERO ANIMATION
   Live splash page generation inside the phone mockup
   ========================================================== */

(function() {
  const urlInput = document.getElementById('heroUrl');
  const generateBtn = document.getElementById('heroGenerate');
  const splashBody = document.getElementById('splashBody');
  const phoneScreen = document.querySelector('.phone--hero .phone-screen');

  // Brand presets keyed by URL contents — so "maison" → green, "brewhaus" → amber, etc.
  const brandPresets = [
    { match: /^$/, name: 'Your Venue', tag: 'GUEST WIFI · FREE', initial: 'V', accent: '#FF2B2B', bg: 'linear-gradient(180deg, #1a0808, #0a0a0c)', headline: 'Welcome in.<br>Free WiFi on us.' },
    { match: /maison|verte|garden|grove/i, name: 'Maison Verte', tag: 'BISTRO · BRIGHTON', initial: 'V', accent: '#2AAE6C', bg: 'linear-gradient(180deg, #0a1a12, #0a0a0c)', headline: 'Welcome in.<br>Stay a little.' },
    { match: /brew|haus|tap|pub|bar/i, name: 'Brewhaus', tag: 'TAPROOM · MANCHESTER', initial: 'B', accent: '#FFB020', bg: 'linear-gradient(180deg, #1a1408, #0a0a0c)', headline: 'Hello, thirsty.<br>Free WiFi while you sip.' },
    { match: /harbour|ocean|sea|coast|fish/i, name: 'Harbour & Co', tag: 'COFFEE · BRIGHTON', initial: 'H', accent: '#3B7FD9', bg: 'linear-gradient(180deg, #081420, #0a0a0c)', headline: 'Settle in.<br>The WiFi\'s on us.' },
    { match: /./, name: null, tag: 'GUEST WIFI · FREE', initial: null, accent: '#FF2B2B', bg: 'linear-gradient(180deg, #1a0808, #0a0a0c)', headline: 'Welcome.<br>Free WiFi, just for you.' },
  ];

  function pickPreset(url) {
    for (const p of brandPresets) if (p.match.test(url)) return p;
    return brandPresets[0];
  }

  function titleCaseFromDomain(url) {
    const clean = url.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0].split('.')[0];
    return clean.charAt(0).toUpperCase() + clean.slice(1).replace(/[-_]/g, ' ');
  }

  function generateSplash(url) {
    const preset = pickPreset(url);
    const brandName = preset.name || (url ? titleCaseFromDomain(url) : 'Your Venue');
    const initial = preset.initial || brandName.charAt(0).toUpperCase();
    const accent = preset.accent;

    phoneScreen.style.setProperty('--screen-bg', preset.bg);
    phoneScreen.style.background = preset.bg;

    splashBody.style.opacity = '0';
    splashBody.style.transition = 'opacity 0.3s';

    setTimeout(() => {
      splashBody.innerHTML = `
        <div class="splash" style="--splash-accent: ${accent};">
          <div class="splash-hero">
            <div class="splash-logo" style="background: linear-gradient(135deg, ${accent}, ${lighten(accent, 20)});">${initial}</div>
            <div class="splash-brand" id="sBrand"></div>
            <div class="splash-tag" id="sTag"></div>
          </div>
          <div class="splash-h" id="sHead"></div>
          <div class="splash-sub" id="sSub">Just an email and we'll get you online.</div>
          <div class="splash-input fill-field" id="sIn1" style="height: 38px; display: flex; align-items: center; padding: 10px 12px;">
            <span style="color: rgba(255,255,255,0.9); font-family: var(--mono); font-size: 12px;" id="sEmail"></span>
          </div>
          <div class="splash-input fill-field" id="sIn2" style="height: 38px; display: flex; align-items: center; padding: 10px 12px;">
            <span style="color: rgba(255,255,255,0.9); font-family: var(--mono); font-size: 12px;" id="sName"></span>
          </div>
          <button class="splash-cta" id="sCta" style="background: ${accent}; box-shadow: 0 8px 20px -6px ${accent}66;">Connect to WiFi</button>
          <div class="splash-socials">
            <div class="splash-social">f</div>
            <div class="splash-social">𝕏</div>
            <div class="splash-social">in</div>
            <div class="splash-social">◎</div>
          </div>
          <div class="splash-tos">By connecting you agree to the terms &amp; privacy policy.</div>
          <div class="splash-footer">POWERED BY FYDELIA</div>
        </div>`;
      splashBody.style.opacity = '1';

      // Type-in sequence
      typeInto('sBrand', brandName, 50, () => {
        typeInto('sTag', preset.tag, 30, () => {
          setHTML('sHead', preset.headline);
          setTimeout(() => {
            document.getElementById('sIn1').classList.add('active');
            typeInto('sEmail', 'sarah@example.com', 30, () => {
              document.getElementById('sIn2').classList.add('active');
              typeInto('sName', 'Sarah', 60, () => {
                const cta = document.getElementById('sCta');
                cta.animate([
                  { transform: 'scale(1)' },
                  { transform: 'scale(1.04)', boxShadow: `0 12px 32px -4px ${accent}` },
                  { transform: 'scale(1)' },
                ], { duration: 600, easing: 'ease-in-out' });
              });
            });
          }, 400);
        });
      });
    }, 300);
  }

  function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function typeInto(id, text, speed, done) {
    const el = document.getElementById(id);
    if (!el) return done && done();
    el.textContent = '';
    el.classList.add('type-caret');
    let i = 0;
    const tick = () => {
      if (i <= text.length) {
        el.textContent = text.slice(0, i++);
        setTimeout(tick, speed);
      } else {
        el.classList.remove('type-caret');
        done && done();
      }
    };
    tick();
  }

  function lighten(hex, amt) {
    const h = hex.replace('#', '');
    const num = parseInt(h, 16);
    let r = (num >> 16) + amt, g = ((num >> 8) & 0xff) + amt, b = (num & 0xff) + amt;
    r = Math.min(255, r); g = Math.min(255, g); b = Math.min(255, b);
    return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
  }

  // Auto-demo on load
  setTimeout(() => generateSplash('maisonverte.com'), 900);

  // Manual trigger — play animation then redirect to onboarding
  generateBtn.addEventListener('click', () => {
    const url = urlInput.value.trim();
    if (!url) return;
    generateSplash(url);
    const full = url.match(/^https?:\/\//) ? url : 'https://' + url;
    setTimeout(() => {
      window.location.href = 'https://www.fydelia.com/onboarding/?site=' + encodeURIComponent(full);
    }, 1800);
  });
  urlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); generateBtn.click(); }
  });
  urlInput.addEventListener('blur', () => {
    var v = urlInput.value.trim();
    if (v && !v.match(/^https?:\/\//)) { urlInput.value = 'https://' + v; }
  });

  // Cycle demo splashes every 9s when user is idle
  let cycleIdx = 1;
  const cycleUrls = ['brewhaus.co.uk', 'harbour-and-co.com', 'maisonverte.com'];
  let lastInteraction = Date.now();
  urlInput.addEventListener('focus', () => lastInteraction = Date.now());
  generateBtn.addEventListener('click', () => lastInteraction = Date.now());

  setInterval(() => {
    if (Date.now() - lastInteraction > 8000 && !document.hidden) {
      const url = cycleUrls[cycleIdx++ % cycleUrls.length];
      generateSplash(url);
      lastInteraction = Date.now() - 7000; // so it cycles again in ~9s
    }
  }, 3000);
})();
