/* ==========================================================
   FYDELIA — INTERACTIONS
   Scroll reveals, sticky scroll reveal, counters, flash countdown,
   scratch card, why-card hover lighting, nav scroll, why-card mouse.
   ========================================================== */

/* ---------- Reveal on scroll ---------- */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ---------- Nav shadow on scroll ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20 ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none';
}, { passive: true });

/* ---------- Mobile menu drawer ---------- */
(function() {
  const toggle   = document.getElementById('menuToggle');
  const drawer   = document.getElementById('menuDrawer');
  const backdrop = document.getElementById('menuBackdrop');
  const closeBtn = document.getElementById('menuClose');
  if (!toggle || !drawer) return;

  const drawerLinks = drawer.querySelectorAll('.menu-drawer-nav a, .menu-drawer-signin, .menu-drawer-cta');

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    drawer.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('active');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  // Close on nav link click
  drawerLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) closeMenu();
  });

  // Sync mobile theme toggle with desktop
  const mobileThemeBtn = document.getElementById('themeToggleMobile');
  if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', () => {
      // Trigger the desktop toggle so the theme logic stays centralized
      const desktopBtn = document.getElementById('themeToggle');
      if (desktopBtn) desktopBtn.click();
    });
  }
})();

/* ---------- Animated counters ---------- */
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const duration = 1600;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 4);
    const val = target * eased;
    let str = decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toLocaleString();
    el.textContent = str + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const countObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCount(e.target); countObs.unobserve(e.target); }
  });
}, { threshold: 0.4 });
document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

/* ---------- Flash countdown ticker ---------- */
(function() {
  let total = 3 * 60 + 42; // 3:42
  const H = document.querySelector('[data-fc="H"]');
  const M = document.querySelector('[data-fc="M"]');
  const S = document.querySelector('[data-fc="S"]');
  if (!M || !S) return;
  setInterval(() => {
    total--;
    if (total < 0) total = 5 * 60 + 0;
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    if (H) H.textContent = String(h).padStart(2, '0');
    M.textContent = String(m).padStart(2, '0');
    S.textContent = String(s).padStart(2, '0');
  }, 1000);
})();

/* ---------- Sticky scroll reveal ---------- */
(function() {
  const steps = document.querySelectorAll('.sr-step');
  const panels = document.querySelectorAll('.sr-panel');
  if (!steps.length) return;

  const stepObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = parseInt(e.target.dataset.step, 10);
        steps.forEach(s => s.classList.toggle('active', parseInt(s.dataset.step, 10) === idx));
        panels.forEach(p => p.classList.toggle('active', parseInt(p.dataset.panel, 10) === idx));
      }
    });
  }, { threshold: 0.55 });
  steps.forEach(s => stepObs.observe(s));
})();

/* ---------- Why-card mouse-follow lighting ---------- */
document.querySelectorAll('.why-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  });
});

/* ---------- Scratch card ---------- */
(function() {
  const canvas = document.getElementById('scratchCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  function drawCover() {
    // Metallic scratch layer
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, '#C41010');
    g.addColorStop(0.5, '#FF2B2B');
    g.addColorStop(1, '#8A0A0A');
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // Noise overlay
    const img = ctx.getImageData(0, 0, W, H);
    for (let i = 0; i < img.data.length; i += 4) {
      const n = (Math.random() - 0.5) * 22;
      img.data[i] = Math.max(0, Math.min(255, img.data[i] + n));
      img.data[i + 1] = Math.max(0, Math.min(255, img.data[i + 1] + n));
      img.data[i + 2] = Math.max(0, Math.min(255, img.data[i + 2] + n));
    }
    ctx.putImageData(img, 0, 0);

    // Copy
    ctx.font = '600 22px "Space Grotesk", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH HERE', W / 2, H / 2 - 6);
    ctx.font = '500 11px "JetBrains Mono", monospace';
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.fillText('TAP & DRAG TO REVEAL', W / 2, H / 2 + 16);

    ctx.globalCompositeOperation = 'destination-out';
  }
  drawCover();

  let isDown = false;
  let revealed = 0;
  let checkCount = 0;

  function scratch(e) {
    const rect = canvas.getBoundingClientRect();
    const scale = W / rect.width;
    const x = (e.clientX - rect.left) * scale;
    const y = (e.clientY - rect.top) * scale;
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    checkCount++;
    if (checkCount % 10 === 0) checkReveal();
  }

  function checkReveal() {
    const img = ctx.getImageData(0, 0, W, H);
    let clear = 0;
    for (let i = 3; i < img.data.length; i += 4) {
      if (img.data[i] < 30) clear++;
    }
    const pct = clear / (W * H);
    if (pct > 0.5 && revealed < 1) {
      revealed = 1;
      ctx.clearRect(0, 0, W, H);
      const card = document.getElementById('scratchCard');
      card.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.04)' }, { transform: 'scale(1)' }],
        { duration: 400, easing: 'ease-out' }
      );
    }
  }

  canvas.addEventListener('pointerdown', (e) => { isDown = true; scratch(e); });
  canvas.addEventListener('pointermove', (e) => { if (isDown) scratch(e); });
  canvas.addEventListener('pointerup', () => { isDown = false; });
  canvas.addEventListener('pointerleave', () => { isDown = false; });

  // Auto-demo scratch after reveal if user hasn't interacted
  let interacted = false;
  canvas.addEventListener('pointerdown', () => interacted = true);
  setTimeout(() => {
    if (interacted) return;
    // Auto-scratch a small patch to hint
    const points = [
      [80, 110], [100, 115], [125, 118], [150, 120], [175, 118], [200, 115], [225, 112], [250, 110]
    ];
    let i = 0;
    const scratch2 = () => {
      if (i >= points.length || interacted) return;
      const [x, y] = points[i++];
      ctx.beginPath();
      ctx.arc(x, y, 22, 0, Math.PI * 2);
      ctx.fill();
      setTimeout(scratch2, 80);
    };
    // Trigger when section visible
    const card = document.getElementById('scratchCard');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !interacted) { setTimeout(scratch2, 500); io.disconnect(); }
      });
    }, { threshold: 0.4 });
    io.observe(card);
  }, 600);
})();
