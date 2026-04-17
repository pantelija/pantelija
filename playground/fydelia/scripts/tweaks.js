/* ==========================================================
   FYDELIA — TWEAKS PANEL (host-connected)
   ========================================================== */

(function() {
  const panel = document.getElementById('tweaks-panel');
  const body = document.body;

  // Apply initial defaults
  function apply(state) {
    document.documentElement.style.setProperty('--red', state.accent);
    document.documentElement.style.setProperty('--red-500', state.accent);
    // Recompute glows off the accent
    document.documentElement.style.setProperty('--red-glow', hex2rgba(state.accent, 0.35));
    document.documentElement.style.setProperty('--red-glow-soft', hex2rgba(state.accent, 0.12));
    body.dataset.density = state.density;
    body.dataset.grain = state.grain ? 'on' : 'off';
    body.dataset.hero = state.heroVariant;
    body.dataset.theme = state.theme || 'dark';

    // sync UI
    document.querySelectorAll('.tp-swatch').forEach(s => s.classList.toggle('active', s.dataset.accent === state.accent));
    document.getElementById('tpGrain').classList.toggle('active', state.grain);
    document.getElementById('tpGrain').textContent = state.grain ? 'On' : 'Off';
    document.querySelectorAll('#tpDensity button').forEach(b => b.classList.toggle('active', b.dataset.density === state.density));
    document.querySelectorAll('#tpHero button').forEach(b => b.classList.toggle('active', b.dataset.hero === state.heroVariant));
  }

  function hex2rgba(hex, a) {
    const h = hex.replace('#', '');
    const r = parseInt(h.substr(0, 2), 16);
    const g = parseInt(h.substr(2, 2), 16);
    const b = parseInt(h.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  let state = { ...(window.TWEAK_DEFAULS || {}), accent: '#FF2B2B', grain: true, density: 'airy', heroVariant: 'phone', theme: 'dark' };
  // overlay defaults
  try { state = Object.assign(state, TWEAK_DEFAULS); } catch (_) {}
  apply(state);

  function update(partial) {
    state = { ...state, ...partial };
    apply(state);
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: partial }, '*');
    } catch (_) {}
  }

  // Wire controls
  document.querySelectorAll('.tp-swatch').forEach(s => {
    s.addEventListener('click', () => update({ accent: s.dataset.accent }));
  });
  document.getElementById('tpGrain').addEventListener('click', () => update({ grain: !state.grain }));
  document.querySelectorAll('#tpDensity button').forEach(b => {
    b.addEventListener('click', () => update({ density: b.dataset.density }));
  });
  document.querySelectorAll('#tpHero button').forEach(b => {
    b.addEventListener('click', () => update({ heroVariant: b.dataset.hero }));
  });

  // Theme toggle in the main nav
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      update({ theme: state.theme === 'dark' ? 'light' : 'dark' });
    });
  }

  // Edit-mode contract
  window.addEventListener('message', (e) => {
    if (!e.data || typeof e.data !== 'object') return;
    if (e.data.type === '__activate_edit_mode') {
      panel.classList.remove('hidden');
      panel.setAttribute('aria-hidden', 'false');
    } else if (e.data.type === '__deactivate_edit_mode') {
      panel.classList.add('hidden');
      panel.setAttribute('aria-hidden', 'true');
    }
  });

  try {
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  } catch (_) {}
})();
