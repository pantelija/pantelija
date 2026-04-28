/* ==========================================================
   FYDELIA — SECTION BUILDERS
   Populates the empty section divs with their content
   ========================================================== */

/* ---------- AdCards Section ---------- */
document.getElementById('adcards-section').innerHTML = `
<section class="adcards section" id="features">
  <div class="adcards-bg"></div>
  <div class="wrap adcards-grid">
    <div class="adcards-text reveal">
      <div class="eyebrow"><span class="eyebrow-dot"></span><span>AdCards · Targeted on-WiFi ads</span></div>
      <h2 style="margin-top:18px;">Every guest. <em>Every moment.</em> A new canvas.</h2>
      <p class="lead" style="margin-top:20px;">Design branded digital cards in minutes and push them to the splash page, the session, or a specific zone of your venue. Showcase a menu, plug an event, highlight a partner. Right where attention is highest.</p>
      <ul class="adcards-feats">
        <li><span class="ad-check">✓</span> Drag-and-drop builder with your brand fonts &amp; colors</li>
        <li><span class="ad-check">✓</span> Schedule by day, time, location, or guest segment</li>
        <li><span class="ad-check">✓</span> Live impression &amp; click-through tracking</li>
        <li><span class="ad-check">✓</span> A/B test headlines, imagery, and offers</li>
      </ul>
    </div>
    <div class="adcards-stage reveal d1">
      <div class="adcard adcard--1">
        <div class="adcard-image">
          <div class="adcard-badge">AD · SPONSORED</div>
          <div class="adcard-image-text">Two-for-one<br>tacos · Tuesday</div>
        </div>
        <div class="adcard-body">
          <div class="adcard-h">Maison Verte · Shoreditch</div>
          <div class="adcard-sub">Valid for WiFi users until 11pm. Show this card at the bar.</div>
          <div class="adcard-cta">
            <span class="adcard-cta-btn">Claim offer →</span>
            <span class="adcard-cta-meta">4,912 views</span>
          </div>
        </div>
      </div>
      <div class="adcard adcard--2">
        <div class="adcard-image" style="background: linear-gradient(135deg, #1a3a5f, #2a5e8f 60%, #4a8cbf);">
          <div class="adcard-badge" style="color: #1a3a5f;">EVENT</div>
          <div class="adcard-image-text">Live jazz.<br>Thurs · 8pm</div>
        </div>
        <div class="adcard-body">
          <div class="adcard-h">Monthly session at The Harbour</div>
          <div class="adcard-sub">Free entry for WiFi guests. RSVP and we'll hold a stool.</div>
          <div class="adcard-cta">
            <span class="adcard-cta-btn">RSVP →</span>
            <span class="adcard-cta-meta">CTR 6.8%</span>
          </div>
        </div>
      </div>
      <div class="adcard adcard--3">
        <div class="adcard-image" style="background: linear-gradient(135deg, #2a1b3f, #4a2b6f 50%, #8a5bdf);">
          <div class="adcard-badge" style="color: #4a2b6f;">NEW</div>
          <div class="adcard-image-text">Seasonal<br>bottomless<br>brunch</div>
        </div>
        <div class="adcard-body">
          <div class="adcard-h">Launched Saturday</div>
          <div class="adcard-sub">Saturday &amp; Sunday, 10am – 2pm. Rotating cocktails.</div>
          <div class="adcard-cta">
            <span class="adcard-cta-btn">Book table →</span>
            <span class="adcard-cta-meta">2.1k bookings</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;

/* ---------- Flash Offers Section ---------- */
document.getElementById('flash-section').innerHTML = `
<section class="flash section">
  <div class="wrap flash-grid">
    <div class="flash-stage reveal">
      <div class="flash-banner">
        <div class="flash-kicker"><span class="flash-kicker-dot"></span> Flash offer · Live now</div>
        <div class="flash-h">40% off <em>anything</em><br>from the bar.</div>
        <div class="flash-sub">For the next few minutes only. Show this screen to any staff member.</div>
        <div class="flash-count">
          <div class="flash-count-unit"><div class="flash-count-num" data-fc="H">00</div><div class="flash-count-lbl">Hours</div></div>
          <div class="flash-count-unit"><div class="flash-count-num" data-fc="M">03</div><div class="flash-count-lbl">Mins</div></div>
          <div class="flash-count-unit"><div class="flash-count-num" data-fc="S">42</div><div class="flash-count-lbl">Secs</div></div>
        </div>
        <button class="flash-cta">Claim now
          <svg viewBox="0 0 20 20" fill="currentColor" style="width:16px;height:16px"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L11.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.158-2.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
        </button>
      </div>
      <div class="flash-dweller">
        <div class="flash-dweller-h">Dweller engagement · Last 60s</div>
        <div class="flash-dweller-row"><span class="k">Impressions</span><span class="v">184</span></div>
        <div class="flash-dweller-row"><span class="k">Clicks</span><span class="v">26</span></div>
        <div class="flash-dweller-row"><span class="k">Redeemed at POS</span><span class="v" style="color:var(--green)">11</span></div>
      </div>
    </div>
    <div class="flash-text reveal d1">
      <div class="eyebrow"><span class="eyebrow-dot"></span><span>Flash Offers · Dweller promos</span></div>
      <h2 style="margin-top:18px;">Turn idle minutes<br>into <em>instant revenue.</em></h2>
      <p class="lead" style="margin-top:20px;">The moment a guest connects, or after they've sat for ten minutes, fire a time-limited offer straight to their screen. Countdown, scarcity, urgency. Move inventory without printing a single flyer.</p>
      <ul class="adcards-feats">
        <li><span class="ad-check">✓</span> Auto-trigger on connect, dwell time, or idle session</li>
        <li><span class="ad-check">✓</span> Countdown timer, stock limits, &amp; redemption caps</li>
        <li><span class="ad-check">✓</span> Real-time POS redemption &amp; ROI tracking</li>
        <li><span class="ad-check">✓</span> Happy-hour scheduling down to the minute</li>
      </ul>
    </div>
  </div>
</section>`;

/* ---------- Sticky Scroll Reveal (Stripe/Linear style) ---------- */
document.getElementById('scrollreveal-section').innerHTML = `
<section class="scrollreveal section">
  <div class="wrap">
    <div class="sec-head reveal" style="margin-bottom:40px;">
      <div class="eyebrow"><span class="eyebrow-dot"></span><span>How it works</span></div>
      <h2>From WiFi sign-in to <em>loyal regular</em> -<br>in three moves.</h2>
    </div>

    <div class="sr-layout">
      <div class="sr-text-col">
        <div class="sr-step active" data-step="0">
          <div class="sr-step-num">Step 01</div>
          <h3>Capture every guest, automatically.</h3>
          <p>When a guest connects to your WiFi, Fydelia intercepts them with a branded splash page. No clipboards, no QR codes. Just a frictionless first impression that feeds your database in real time.</p>
        </div>
        <div class="sr-step" data-step="1">
          <div class="sr-step-num">Step 02</div>
          <h3>Trigger the right message at the right moment.</h3>
          <p>Fire AdCards on connect, flash offers after ten minutes of dwell time, thank-you messages on disconnect. Every guest journey becomes a marketing opportunity without a marketer lifting a finger.</p>
        </div>
        <div class="sr-step" data-step="2">
          <div class="sr-step-num">Step 03</div>
          <h3>Measure, learn, repeat.</h3>
          <p>One dashboard for every venue. See footfall, repeat visits, campaign ROI, lifetime value. Then sync it all back into the CRM you already use: Salesforce, HubSpot, Mailchimp, or 97 others.</p>
        </div>
      </div>

      <div class="sr-sticky">
        <div class="sr-panel active" data-panel="0">${buildSrPhone('connect')}</div>
        <div class="sr-panel" data-panel="1">${buildSrPhone('offer')}</div>
        <div class="sr-panel" data-panel="2">${buildSrDash()}</div>
      </div>
    </div>
  </div>
</section>`;

function buildSrPhone(variant) {
  if (variant === 'connect') {
    return `
      <div class="phone" style="transform: scale(0.95);">
        <div class="phone-notch"></div>
        <div class="phone-screen" style="background: linear-gradient(180deg, #1a0a0a, #0a0a0c);">
          <div class="phone-status"><span class="ps-time">9:41</span></div>
          <div class="phone-body">
            <div class="splash">
              <div class="splash-hero">
                <div class="splash-logo">V</div>
                <div class="splash-brand">Maison Verte</div>
                <div class="splash-tag">GUEST WIFI · FREE</div>
              </div>
              <div class="splash-h">Welcome in.<br>Enjoy free WiFi on us.</div>
              <div class="splash-sub">Just a couple of details to get you online.</div>
              <input class="splash-input" placeholder="Your email" value="sarah@example.com" readonly style="color:rgba(255,255,255,0.9);">
              <input class="splash-input" placeholder="First name" value="Sarah" readonly style="color:rgba(255,255,255,0.9);">
              <button class="splash-cta">Connect to WiFi</button>
              <div class="splash-tos">By connecting you agree to our terms &amp; privacy policy.</div>
            </div>
          </div>
        </div>
      </div>`;
  }
  if (variant === 'offer') {
    return `
      <div class="phone" style="transform: scale(0.95);">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="phone-status"><span class="ps-time">9:52</span></div>
          <div class="phone-body" style="padding: 12px;">
            <div style="padding: 12px 4px;">
              <div style="display:flex; gap:8px; align-items:center; font-family: var(--mono); font-size: 10.5px; color: var(--fg-4); margin-bottom: 14px; letter-spacing: 0.1em; text-transform: uppercase;">
                <span style="width:6px;height:6px;border-radius:50%;background:var(--red);box-shadow:0 0 6px var(--red);"></span>
                Dwelling · 12 min
              </div>
              <div style="background: linear-gradient(135deg, var(--red-700), var(--red-500)); border-radius: 16px; padding: 20px; color: white; box-shadow: 0 20px 40px -12px var(--red-glow);">
                <div style="font-family: var(--mono); font-size: 10px; letter-spacing: 0.2em; opacity: 0.85; margin-bottom: 10px;">LIMITED · ENDS 03:42</div>
                <div style="font-size: 26px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; margin-bottom: 8px;">40% off the<br>dessert menu.</div>
                <div style="font-size: 12px; opacity: 0.85; margin-bottom: 16px;">Show this screen at the counter.</div>
                <button style="width:100%; padding: 10px; background: white; color: var(--red-700); border: none; border-radius: 10px; font-weight: 600; font-size: 12px;">Claim now</button>
              </div>
              <div style="margin-top: 14px; padding: 12px; background: rgba(255,255,255,0.04); border: 1px solid var(--line); border-radius: 12px;">
                <div style="display:flex; justify-content:space-between; align-items:center; font-size: 12px;">
                  <span style="color: var(--fg-3);">Saved on this visit</span>
                  <span style="font-family:var(--mono); color: var(--green); font-weight: 500;">£8.40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

function buildSrDash() {
  return `
    <div class="crm-panel" style="max-width: 620px;">
      <div class="crm-top">
        <div class="crm-traffic"><span></span><span></span><span></span></div>
        <div class="crm-url">ondemand.fydelia.com/<span>dashboard</span></div>
      </div>
      <div class="crm-body">
        <div class="crm-side">
          <div class="crm-side-item"><span class="dot"></span>Overview</div>
          <div class="crm-side-item active"><span class="dot"></span>Campaigns</div>
          <div class="crm-side-item"><span class="dot"></span>AdCards</div>
          <div class="crm-side-item"><span class="dot"></span>Guests</div>
          <div class="crm-side-item"><span class="dot"></span>Integrations</div>
          <div class="crm-side-item"><span class="dot"></span>Hardware</div>
        </div>
        <div class="crm-main">
          <div class="crm-main-h">
            <h5>Performance · This week</h5>
            <div class="crm-pill">+34% WoW</div>
          </div>
          <div class="crm-stats">
            <div class="crm-stat"><div class="lbl">New guests</div><div class="val">2,841<span class="trend">+18%</span></div></div>
            <div class="crm-stat"><div class="lbl">Repeat visits</div><div class="val">1,204<span class="trend">+42%</span></div></div>
            <div class="crm-stat"><div class="lbl">Redemptions</div><div class="val">384<span class="trend">+28%</span></div></div>
          </div>
          <div class="crm-chart">
            ${[34, 52, 42, 68, 58, 84, 72, 92, 78, 96, 88, 100].map(h =>
              `<div class="crm-bar" style="height: ${h}%;"></div>`).join('')}
          </div>
        </div>
      </div>
    </div>`;
}

/* ---------- Integrations Orbit ---------- */
const integrationNodes = [
  { n: 'Salesforce', r: 1, a: 30 },
  { n: 'HubSpot', r: 1, a: 150 },
  { n: 'Mailchimp', r: 1, a: 270 },
  { n: 'Klaviyo', r: 2, a: 15 },
  { n: 'Stripe', r: 2, a: 70 },
  { n: 'Twilio', r: 2, a: 125 },
  { n: 'Zapier', r: 2, a: 180 },
  { n: 'Shopify', r: 2, a: 235 },
  { n: 'Intercom', r: 2, a: 290 },
  { n: 'Slack', r: 2, a: 340 },
  { n: 'OpenTable', r: 3, a: 20 },
  { n: 'Toast POS', r: 3, a: 65 },
  { n: 'Square', r: 3, a: 110 },
  { n: 'Xero', r: 3, a: 160 },
  { n: 'Meta Ads', r: 3, a: 210 },
  { n: 'Google Biz', r: 3, a: 255 },
  { n: 'Tripadvisor', r: 3, a: 300 },
  { n: 'SevenRooms', r: 3, a: 345 },
];
const ringRadius = { 1: 120, 2: 200, 3: 290 };
const nodesHTML = integrationNodes.map(n => {
  const rad = ringRadius[n.r];
  const x = Math.cos(n.a * Math.PI / 180) * rad;
  const y = Math.sin(n.a * Math.PI / 180) * rad;
  return `<div class="orbit-node" style="transform: translate(${x}px, ${y}px);">${n.n}</div>`;
}).join('');

document.getElementById('integrations-section').innerHTML = `
<section class="integrations section" id="integrations">
  <div class="int-bg"></div>
  <div class="wrap">
    <div class="sec-head sec-head--center reveal">
      <div class="eyebrow"><span class="eyebrow-dot"></span><span>100+ no-code integrations</span></div>
      <h2>Plug into the stack<br>you <em>already use.</em></h2>
      <p class="lead" style="text-align:center;">Two-way data with Salesforce, HubSpot, Mailchimp, Stripe, Shopify, Toast, Square, OpenTable... plus 97 more. Fydelia is the fire-hose. Your CRM is the lake.</p>
    </div>
    <div class="int-stage reveal d1">
      <div class="orbit">
        <div class="orbit-ring orbit-ring--1"></div>
        <div class="orbit-ring orbit-ring--2"></div>
        <div class="orbit-ring orbit-ring--3"></div>
        <div class="orbit-center">fydelia</div>
        ${nodesHTML}
      </div>
    </div>
  </div>
</section>`;

/* ---------- Hardware Section ---------- */
const hardwareList = [
  'Cisco Meraki', 'Ubiquiti UniFi', 'Ruckus', 'TP-Link Omada',
  'OpenMesh', 'Cambium Networks', 'Zyxel Nebula', 'AltaLabs',
  'Aruba Instant On', 'UDM Pro', 'Cisco Aironet', 'MikroTik',
];

document.getElementById('hardware-section').innerHTML = `
<section class="hardware section" id="hardware">
  <div class="wrap hw-grid">
    <div class="hw-vis reveal">
      <div style="display:grid; place-items:center; padding: 20px;">
        <div class="router">
          <div class="router-waves"><span></span><span></span><span></span></div>
          <div class="router-device">
            <div class="router-led"><span></span><span></span><span></span></div>
          </div>
          <div class="router-label">
            <div class="n">Whatever you've got.</div>
            <div class="m">We probably support it.</div>
          </div>
          <div class="router-badges">
            <span class="router-badge">Cloud-managed</span>
            <span class="router-badge">Zero on-site install</span>
            <span class="router-badge">Remote config</span>
          </div>
        </div>
      </div>
    </div>
    <div class="hw-text reveal d1">
      <div class="eyebrow"><span class="eyebrow-dot"></span><span>Massive hardware support</span></div>
      <h2 style="margin-top:18px;">No new boxes.<br>No on-site visits. <em>No lock-in.</em></h2>
      <p class="lead" style="margin-top:20px;">If it broadcasts WiFi, chances are Fydelia runs on it. From enterprise Cisco Meraki down to a £60 TP-Link sitting behind the bar. We plug in remotely in minutes.</p>
      <ul class="hw-list">
        ${hardwareList.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <a href="#" class="btn-ghost" style="margin-top: 24px; padding: 0; color: var(--red);">
        See the full compatibility list →
      </a>
    </div>
  </div>
</section>`;

/* ---------- Gamification / Scratch Card ---------- */
document.getElementById('gamification-section').innerHTML = `
<section class="gami section">
  <div class="gami-bg"></div>
  <div class="wrap gami-grid">
    <div class="gami-text reveal">
      <div class="eyebrow"><span class="eyebrow-dot"></span><span>Gamification · Scratch cards &amp; spin-to-win</span></div>
      <h2 style="margin-top:18px;">Give them a reason<br>to <em>play along.</em></h2>
      <p class="lead" style="margin-top:20px;">Digital scratch cards, spin-the-wheel, trivia, streak rewards: little moments of delight that turn guest WiFi into the most engaging thing in the room. And every interaction feeds your marketing data.</p>
      <ul class="adcards-feats">
        <li><span class="ad-check">✓</span> Real scratch-to-reveal mechanics on any device</li>
        <li><span class="ad-check">✓</span> Probability-weighted prizes you can tune live</li>
        <li><span class="ad-check">✓</span> Unique voucher codes that sync to your POS</li>
        <li><span class="ad-check">✓</span> Anti-fraud limits per guest, per visit, per venue</li>
      </ul>
      <div style="margin-top: 28px; padding: 16px 20px; background: var(--bg-1); border: 1px solid var(--line); border-left: 3px solid var(--red); border-radius: 10px; max-width: 460px;">
        <div style="font-family: var(--mono); font-size: 11px; color: var(--fg-4); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px;">Live result · Brewhaus, Manchester</div>
        <div style="font-size: 14px; color: var(--fg-2);">+68% splash-page completion rate after adding a scratch card.</div>
      </div>
    </div>
    <div class="gami-stage reveal d1">
      <div>
        <div class="scratch-card" id="scratchCard">
          <div class="scratch-prize">
            <div class="p-kick">YOU WON</div>
            <div class="p-h">FREE DESSERT</div>
            <div class="p-s">Show this card at the counter.<br>Valid on your next visit only.</div>
          </div>
          <canvas class="scratch-canvas" id="scratchCanvas" width="340" height="220"></canvas>
        </div>
        <div class="scratch-hint">↳ Scratch to reveal your prize</div>
      </div>
    </div>
  </div>
</section>`;

/* ---------- Stats ---------- */
document.getElementById('stats-section').innerHTML = `
<section class="stats section">
  <div class="wrap">
    <div class="stats-quote reveal">
      <div class="qmark">"</div>
      <blockquote>The average restaurant customer visits just <em>1.2 times a year.</em> Most venues are leaving repeat revenue on the table.</blockquote>
      <cite>- National Restaurant Association · Industry Benchmark</cite>
    </div>
    <div class="stats-compare reveal d1">
      <div class="stats-card">
        <div class="stats-num" data-count="1.2" data-suffix="×" data-decimals="1">0</div>
        <div class="stats-label">Industry average<br>visits per year</div>
      </div>
      <div class="stats-vs"><span>VS</span></div>
      <div class="stats-card stats-card--hi">
        <div class="stats-num" data-count="2.8" data-suffix="×" data-decimals="1">0</div>
        <div class="stats-label">With Fydelia<br>visits per year</div>
      </div>
    </div>
    <p class="reveal d2" style="text-align:center; margin-top: 48px; color: var(--fg-4); font-family: var(--mono); font-size: 13px; letter-spacing: 0.05em;">
      Venues using Fydelia see <span style="color:var(--green)">over 2× the repeat visit rate</span>.
    </p>
  </div>
</section>`;

/* ---------- Features Grid (the 'and much more' part) ---------- */
const moreFeats = [
  { icon: '⟲', h: 'Auto-login for returning guests', p: 'Recognise a returning guest, skip the form, straight to WiFi. Familiarity = loyalty.' },
  { icon: '◈', h: 'Splash Page Zones', p: 'Different splash page for the lobby, bar, poolside, or conference room.' },
  { icon: '◉', h: 'Shared Sign-On', p: 'Sign in at one venue, stay signed in across your entire group.' },
  { icon: '⚙', h: 'A/B testing', p: 'Let data decide which headline, image, or offer wins.' },
  { icon: '✉', h: 'Email verification', p: 'Bounce fake emails at the gate before they pollute your list.' },
  { icon: '🎂', h: 'Birthday campaigns', p: 'Capture birthdays on connect. Send celebration offers on the day.' },
  { icon: '★', h: 'Review funnels', p: 'Route happy guests to Google &amp; Tripadvisor, privately capture the rest.' },
  { icon: '◷', h: 'Scheduled content', p: 'Happy hour at 5pm, quiz night at 7, brunch at 10. Set it and forget it.' },
  { icon: '♛', h: 'Loyalty engine', p: 'Points, tiers, rewards. Built in, not bolted on.' },
];

document.getElementById('why-section').innerHTML = `
<section class="why section" id="customers">
  <div class="wrap">
    <div class="sec-head sec-head--center reveal">
      <div class="eyebrow"><span class="eyebrow-dot"></span><span>The rest of the toolbox</span></div>
      <h2>And a lot more<br>where that came from.</h2>
    </div>
    <div class="fg">
      ${moreFeats.map(f => `
        <div class="fg-card reveal">
          <div class="fg-icon" style="font-family: var(--mono); font-size: 18px;">${f.icon}</div>
          <h4>${f.h}</h4>
          <p>${f.p}</p>
        </div>
      `).join('')}
    </div>

    <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 72px;">
      <div class="why-card reveal">
        <div class="why-num">01</div>
        <h3>Real humans, not chatbots.</h3>
        <p>Every account gets a dedicated human. Under 2-hour response time. UK &amp; UAE offices, real phone numbers, no ticket queues.</p>
      </div>
      <div class="why-card reveal d1">
        <div class="why-num">02</div>
        <h3>No long-term contracts.</h3>
        <p>We earn your loyalty monthly. If we're not delivering, you're free to leave, but our retention rate suggests you won't.</p>
      </div>
      <div class="why-card reveal d2">
        <div class="why-num">03</div>
        <h3>One bill. One login. One team.</h3>
        <p>WiFi, CRM, email, SMS, loyalty, AdCards, analytics. No duct-taping five tools together. No monthly integration debugging.</p>
      </div>
      <div class="why-card reveal d3">
        <div class="why-num">04</div>
        <h3>Live in under 30 minutes.</h3>
        <p>Paste your website URL, our AI builds the splash page, we remote-config the router. Collect guest data by lunchtime.</p>
      </div>
    </div>
  </div>
</section>`;

/* ---------- Testimonials ---------- */
const testis = [
  { q: "Fydelia turned our guest WiFi from a line-item cost into our highest-ROI marketing channel. 40% lift in repeat visits in six months.", n: "Sarah M.", r: "Operations · The Ivy Collection", i: "SM" },
  { q: "Setup was painless. Twelve locations live in a single week. Their support team picks up the phone. A novelty in SaaS!", n: "James T.", r: "Marketing · BrewDog", i: "JT" },
  { q: "We ran three other platforms before Fydelia. Nothing else even came close on ease of use and genuine customer support.", n: "Priya K.", r: "Venue Manager · Dishoom", i: "PK" },
];

document.getElementById('testimonials-section').innerHTML = `
<section class="testi section">
  <div class="wrap">
    <div class="sec-head sec-head--center reveal">
      <div class="eyebrow"><span class="eyebrow-dot"></span><span>Loved by hospitality teams</span></div>
      <h2>Venues that moved <em>up and to the right.</em></h2>
    </div>
    <div class="testi-grid">
      ${testis.map((t, i) => `
        <div class="testi-card reveal d${i}">
          <div class="testi-stars">★ ★ ★ ★ ★</div>
          <blockquote>"${t.q}"</blockquote>
          <div class="testi-author">
            <div class="testi-avatar">${t.i}</div>
            <div class="testi-meta">
              <div class="n">${t.n}</div>
              <div class="r">${t.r}</div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>`;

/* ---------- CTA ---------- */
document.getElementById('cta-section').innerHTML = `
<section class="cta-sec section" id="cta">
  <div class="wrap">
    <div class="cta-box reveal">
      <div class="eyebrow"><span class="eyebrow-dot"></span><span>Try free for 14 days · No card</span></div>
      <h2 style="margin-top:18px;">Build your splash page<br><em>in under 60 seconds.</em></h2>
      <p>Paste your website. Our AI pulls your brand, your copy, and your colors. You get a live, branded WiFi portal in the time it takes to make a coffee.</p>
      <form class="cta-form" onsubmit="return false;">
        <input type="url" placeholder="https://yourvenue.com">
        <button class="btn-solid btn-lg">Generate splash →</button>
      </form>
      <div class="cta-meta">NO CARD · NO CALL · INSTANT</div>
    </div>
  </div>
</section>`;

/* ---------- Footer ---------- */
document.getElementById('footer-section').innerHTML = `
  <!-- ======================= FOOTER ======================= -->
  <footer class="ft">
    <div class="wrap-wide">
      <div class="ft-grid">
        <div class="ft-brand-col">
          <a class="brand" href="index" aria-label="Fydelia home">
            <span class="brand-mark" aria-hidden="true"><span class="brand-dot"></span></span>
            <span class="brand-text">fydelia</span>
          </a>
          <p>The industry-leading captive portal and WiFi marketing platform that helps venues spark conversations and capture high-value user data. We turn simple guest WiFi access into a powerful engine for lead-gen and customer loyalty.</p>
        </div>
        <div class="ft-col">
          <h4>Product</h4>
          <ul>
            <li><a href="features">Features</a></li>
            <li><a href="splash-pages">Splash Pages</a></li>
            <li><a href="hardware">Supported Hardware</a></li>
<li><a href="for-venues">For Venues</a></li>
<li><a href="for-resellers">For Resellers &amp; MSPs</a></li>
            <li><a href="pricing">Pricing</a></li>
          </ul>
        </div>
        <div class="ft-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="https://www.fydelia.com/knowledge-base/">Documentation &amp; Support</a></li>
            <li><a href="case-studies">Case Studies</a></li>
            <li><a href="blog">Blog</a></li>
<li><a href="faq">FAQ</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </div>
        <div class="ft-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="information-system-security-policy">InfoSys Security Policy</a></li>
            <li><a href="security-assurance-plan">Security Assurance Plan</a></li>
            <li><a href="privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="ft-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+442033688870">(+44) 203-368-8870</a></li>
            <li><a href="mailto:support@fydelia.com">support@fydelia.com</a></li>
            <li>Brighton, United Kingdom</li>
            <li>Dubai, UAE</li>
          </ul>
          <div class="ft-social">
            <a href="https://instagram.com/fydeliawifi" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="ft-social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/fydelia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="ft-social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.facebook.com/fydelia/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="ft-social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.youtube.com/@fydeliawifi/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="ft-social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="ft-bottom">
        <span>&copy; 2026 Fydelia</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  </footer>`;
