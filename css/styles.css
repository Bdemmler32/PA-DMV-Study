/* ═══════════════════════════════════════════════════════════
   PA DMV Study v02 — styles.css
   PennDOT Blue #003087 · Gold #FFC20E · Barlow typeface
   ═══════════════════════════════════════════════════════════ */

/* ── RESET ──────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }

/* ── TOKENS ─────────────────────────────────────────────── */
:root {
  --blue:        #003087;
  --blue-dark:   #001f5c;
  --blue-mid:    #0044bb;
  --blue-light:  #dce8ff;
  --blue-pale:   #f0f5ff;
  --gold:        #FFC20E;
  --gold-dark:   #e6a800;
  --gold-light:  #fff7d6;
  --red:         #c0001a;
  --red-light:   #ffeaea;
  --green:       #0a6e2e;
  --green-light: #e3f5ea;
  --orange:      #d45d00;
  --orange-light:#fff0e0;
  --gray-50:     #f8f9fb;
  --gray-100:    #f0f2f5;
  --gray-200:    #e2e6ec;
  --gray-300:    #c8cfd9;
  --gray-400:    #9aa3b2;
  --gray-500:    #6b7585;
  --gray-700:    #374357;
  --gray-900:    #0f1623;
  --white:       #ffffff;

  --sidebar-w:   240px;
  --topbar-h:    64px;
  --bottomnav-h: 62px;
  --radius:      10px;
  --radius-lg:   16px;
  --shadow-sm:   0 1px 4px rgba(0,0,0,.07);
  --shadow-md:   0 4px 16px rgba(0,0,0,.10);
  --shadow-lg:   0 8px 32px rgba(0,0,0,.14);

  --font-body:   'Barlow', system-ui, sans-serif;
  --font-cond:   'Barlow Condensed', system-ui, sans-serif;
  --font-mono:   'DM Mono', monospace;
}

body {
  font-family: var(--font-body);
  background: var(--gray-50);
  color: var(--gray-900);
  min-height: 100vh;
  line-height: 1.55;
  font-size: 16px;
  overflow-x: hidden;
}

/* ── UTILITY ─────────────────────────────────────────────── */
.hidden { display: none !important; }

/* ── SCREENS ─────────────────────────────────────────────── */
/* Screens — fixed full-viewport so they truly cover each other */
.screen {
  display: none;
  position: fixed;
  inset: 0;
  overflow-y: auto;
  z-index: 1;
}
.screen.active { display: block; z-index: 10; }
#app-screen { display: none; }
#app-screen.active {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  z-index: 10;
}
/* Profile screen sits above everything when active */
#profile-screen.active { z-index: 20; }

/* ── BUTTONS ─────────────────────────────────────────────── */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 7px;
  padding: 10px 20px; border-radius: var(--radius);
  font-family: var(--font-body); font-size: 14px; font-weight: 600;
  border: none; cursor: pointer; transition: all .15s ease;
  text-decoration: none; line-height: 1;
}
.btn-primary   { background: var(--blue); color: #fff; }
.btn-primary:hover:not(:disabled) { background: var(--blue-mid); transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn-gold      { background: var(--gold); color: var(--blue-dark); }
.btn-gold:hover:not(:disabled) { background: var(--gold-dark); transform: translateY(-1px); }
.btn-secondary { background: var(--gray-200); color: var(--gray-700); }
.btn-secondary:hover:not(:disabled) { background: var(--gray-300); }
.btn-success   { background: var(--green); color: #fff; }
.btn-success:hover:not(:disabled) { background: #085c27; }
.btn-danger    { background: var(--red); color: #fff; }
.btn-danger:hover:not(:disabled) { background: #9a0015; }
.btn-ghost     { background: transparent; color: var(--gray-700); border: 1.5px solid var(--gray-300); }
.btn-ghost:hover:not(:disabled) { background: var(--gray-100); }
.btn-lg        { padding: 13px 28px; font-size: 15px; }
.btn-sm        { padding: 7px 13px; font-size: 13px; }
.btn-block     { width: 100%; }
.btn:disabled  { opacity: .42; cursor: not-allowed; transform: none !important; }

/* ── PROFILE SCREEN ──────────────────────────────────────── */
#profile-screen { min-height: 100vh; position: relative; overflow: hidden; }
.ps-bg {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 55%, #0052cc 100%);
}
.ps-bg::after {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 40px,
    rgba(255,255,255,.025) 40px,
    rgba(255,255,255,.025) 80px
  );
}
.ps-content {
  position: relative; z-index: 1;
  min-height: 100vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 40px 20px;
  gap: 40px;
}
.ps-logo { display: flex; align-items: center; gap: 18px; }
.ps-shield {
  width: 72px; height: 72px; border-radius: 14px;
  background: var(--gold);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 1px;
  box-shadow: 0 4px 24px rgba(255,194,14,.35);
  flex-shrink: 0;
}
.ps-shield-pa { font-family: var(--font-cond); font-size: 26px; font-weight: 800; color: var(--blue-dark); line-height: 1; letter-spacing: -1px; }
.ps-shield-star { font-size: 9px; color: var(--blue-dark); opacity: .6; }
.ps-title { font-family: var(--font-cond); font-size: 36px; font-weight: 800; color: #fff; letter-spacing: -0.5px; line-height: 1; }
.ps-sub { font-size: 14px; color: rgba(255,255,255,.65); font-weight: 500; margin-top: 4px; }
.ps-version { color: var(--gold); font-weight: 700; }

.ps-card {
  background: rgba(255,255,255,.07);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,.15);
  border-radius: var(--radius-lg);
  padding: 28px;
  width: 100%; max-width: 520px;
}
.ps-card-heading {
  font-family: var(--font-cond); font-size: 13px; font-weight: 700;
  letter-spacing: 1.5px; text-transform: uppercase;
  color: rgba(255,255,255,.5); margin-bottom: 16px;
}
.profile-slots { display: flex; flex-direction: column; gap: 8px; }
.profile-slot {
  display: flex; align-items: center; gap: 14px;
  padding: 13px 16px;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: var(--radius);
  transition: all .15s;
}
.profile-slot.filled:hover { background: rgba(255,255,255,.14); border-color: rgba(255,255,255,.25); }
.profile-slot.empty { opacity: .55; }
.slot-avatar {
  width: 42px; height: 42px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-cond); font-size: 16px; font-weight: 800;
  flex-shrink: 0;
}
.slot-avatar.filled-av { background: var(--gold); color: var(--blue-dark); }
.slot-avatar.empty-av { background: rgba(255,255,255,.1); color: rgba(255,255,255,.3); font-size: 20px; }
.slot-info { flex: 1; min-width: 0; }
.slot-name { font-size: 15px; font-weight: 700; color: #fff; }
.slot-meta { font-size: 12px; color: rgba(255,255,255,.5); margin-top: 1px; }
.slot-actions { display: flex; gap: 6px; flex-shrink: 0; }
.slot-enter-btn {
  padding: 7px 14px; border-radius: 7px; font-size: 13px; font-weight: 700;
  background: var(--gold); color: var(--blue-dark);
  border: none; cursor: pointer; font-family: var(--font-body);
  transition: all .15s;
}
.slot-enter-btn:hover { background: var(--gold-dark); }
.slot-create-btn {
  padding: 7px 14px; border-radius: 7px; font-size: 13px; font-weight: 600;
  background: rgba(255,255,255,.12); color: rgba(255,255,255,.85);
  border: 1px solid rgba(255,255,255,.18); cursor: pointer; font-family: var(--font-body);
  transition: all .15s;
}
.slot-create-btn:hover { background: rgba(255,255,255,.2); }
.slot-delete-btn {
  width: 30px; height: 30px; border-radius: 7px;
  background: transparent; color: rgba(255,255,255,.3);
  border: 1px solid rgba(255,255,255,.1); cursor: pointer; font-size: 13px;
  display: flex; align-items: center; justify-content: center;
  transition: all .15s;
}
.slot-delete-btn:hover { background: rgba(192,0,26,.3); color: #fff; border-color: rgba(192,0,26,.5); }

/* ── SIDEBAR ─────────────────────────────────────────────── */
#sidebar {
  width: var(--sidebar-w); flex-shrink: 0;
  background: var(--blue-dark);
  display: flex; flex-direction: column;
  position: fixed; top: 0; left: 0; bottom: 0; z-index: 90;
  overflow-y: auto;
}
.sidebar-logo {
  display: flex; align-items: center; gap: 10px;
  padding: 20px 18px 16px;
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.sb-shield {
  width: 34px; height: 34px; border-radius: 8px;
  background: var(--gold); color: var(--blue-dark);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-cond); font-size: 14px; font-weight: 800;
  letter-spacing: -0.5px; flex-shrink: 0;
}
.sb-title-block { display: flex; flex-direction: column; line-height: 1; }
.sb-title { font-family: var(--font-cond); font-size: 17px; font-weight: 800; color: #fff; letter-spacing: -0.3px; }
.sb-version { font-size: 10px; font-weight: 700; color: var(--gold); letter-spacing: 1px; text-transform: uppercase; margin-top: 1px; }

.sidebar-footer {
  border-top: 1px solid rgba(255,255,255,.08);
  padding: 10px;
  display: flex; flex-direction: column; gap: 6px;
}
.sidebar-profile { padding: 8px 8px 2px; }
.sb-profile-inner { display: flex; align-items: center; gap: 10px; }
.sb-av {
  width: 34px; height: 34px; border-radius: 50%;
  background: var(--gold); color: var(--blue-dark);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-cond); font-size: 13px; font-weight: 800;
  flex-shrink: 0;
}
.sb-pname { font-size: 14px; font-weight: 700; color: #fff; }
.sb-pmeta { font-size: 11px; color: rgba(255,255,255,.45); }

.sidebar-nav { flex: 1; padding: 12px 10px; display: flex; flex-direction: column; gap: 2px; overflow-y: auto; }
.nav-section-label {
  font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
  color: rgba(255,255,255,.3); padding: 10px 8px 4px;
}
.nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 12px; border-radius: 8px;
  border: none; background: transparent; color: rgba(255,255,255,.65);
  cursor: pointer; width: 100%; text-align: left;
  font-family: var(--font-body); font-size: 14px; font-weight: 600;
  transition: all .15s; position: relative;
}
.nav-item:hover { background: rgba(255,255,255,.07); color: #fff; }
.nav-item.active { background: rgba(255,255,255,.12); color: #fff; }
.nav-item.featured-nav { color: var(--gold); }
.nav-item.featured-nav.active { background: rgba(255,194,14,.12); }
.nav-icon { width: 18px; font-size: 15px; flex-shrink: 0; }
.nav-badge {
  margin-left: auto; background: var(--gold); color: var(--blue-dark);
  font-size: 10px; font-weight: 800; padding: 2px 7px; border-radius: 20px;
  font-family: var(--font-cond); letter-spacing: 0.5px;
}

.sidebar-switch {
  padding: 10px 12px; border-radius: 8px;
  border: 1px solid rgba(255,255,255,.1); background: transparent;
  color: rgba(255,255,255,.45); cursor: pointer; width: 100%;
  display: flex; align-items: center; gap: 8px;
  font-family: var(--font-body); font-size: 13px; font-weight: 500;
  transition: all .15s;
}
.sidebar-switch:hover { background: rgba(255,255,255,.07); color: rgba(255,255,255,.8); }

/* ── TOPBAR (mobile only) ────────────────────────────────── */
#topbar {
  display: none;
  height: var(--topbar-h);
  min-height: var(--topbar-h);
  background: var(--blue-dark);
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  /* fixed so it always pins to top regardless of scroll container */
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 80;
  border-bottom: 1px solid rgba(255,255,255,.08);
  flex-shrink: 0;
}
.topbar-left { display: flex; align-items: center; gap: 10px; }
.tb-shield {
  width: 30px; height: 30px; border-radius: 7px;
  background: var(--gold); color: var(--blue-dark);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-cond); font-size: 12px; font-weight: 800;
}
.tb-title-block { display: flex; flex-direction: column; line-height: 1; }
.tb-title { font-family: var(--font-cond); font-size: 16px; font-weight: 800; color: #fff; }
.tb-version { font-size: 9px; font-weight: 700; color: var(--gold); letter-spacing: 1px; text-transform: uppercase; margin-top: 1px; }
.tb-profile-av {
  width: 30px; height: 30px; border-radius: 50%;
  background: var(--gold); color: var(--blue-dark);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-cond); font-size: 12px; font-weight: 800;
  cursor: pointer;
}

/* ── BOTTOM NAV (mobile only) ────────────────────────────── */
#bottom-nav {
  display: none;
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 80;
  height: var(--bottomnav-h);
  background: var(--blue-dark);
  border-top: 1px solid rgba(255,255,255,.1);
  padding: 0; padding-bottom: env(safe-area-inset-bottom);
  display: none; align-items: stretch;
}
.bn-item {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 3px; border: none; background: transparent;
  color: rgba(255,255,255,.45); cursor: pointer; font-family: var(--font-body);
  font-size: 10px; font-weight: 600; transition: all .15s; padding: 8px 4px;
}
.bn-item i { font-size: 18px; }
.bn-item.active { color: var(--gold); }
.bn-item:hover { color: rgba(255,255,255,.8); }

/* ── MAIN CONTENT ─────────────────────────────────────────── */
#main-content {
  flex: 1;
  margin-left: var(--sidebar-w);
  padding: 32px 36px 0;
  min-height: 100vh;
}
#tab-content {
  max-width: 860px;
  padding-bottom: 56px;   /* bottom breathing room — desktop */
}

/* ── DASHBOARD ─────────────────────────────────────────────── */
.dash-header { margin-bottom: 28px; }
.dash-greeting { font-family: var(--font-cond); font-size: 32px; font-weight: 800; color: var(--blue-dark); line-height: 1; }
.dash-subline { font-size: 15px; color: var(--gray-500); margin-top: 4px; }

.dash-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 24px; }
.stat-card {
  background: var(--white); border: 1.5px solid var(--gray-200);
  border-radius: var(--radius); padding: 18px 16px;
  display: flex; flex-direction: column; gap: 6px;
  transition: box-shadow .15s;
}
.stat-card:hover { box-shadow: var(--shadow-sm); }
.stat-icon { font-size: 20px; color: var(--blue); margin-bottom: 2px; }
.stat-val { font-family: var(--font-cond); font-size: 30px; font-weight: 800; color: var(--blue-dark); line-height: 1; }
.stat-label { font-size: 12px; color: var(--gray-500); font-weight: 600; }
.stat-bar { height: 4px; background: var(--gray-200); border-radius: 2px; margin-top: 6px; }
.stat-bar-fill { height: 100%; background: var(--gold); border-radius: 2px; transition: width .6s; }

.dash-exam-result {
  padding: 14px 18px; border-radius: var(--radius);
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 20px; border: 1.5px solid;
}
.dash-exam-result.pass { background: var(--green-light); border-color: var(--green); }
.dash-exam-result.fail { background: var(--red-light); border-color: var(--red); }
.der-icon { font-size: 22px; font-weight: 800; }
.pass .der-icon { color: var(--green); }
.fail .der-icon { color: var(--red); }
.der-info { flex: 1; }
.der-title { font-weight: 700; font-size: 14px; }
.pass .der-title { color: var(--green); }
.fail .der-title { color: var(--red); }
.der-sub { font-size: 12px; color: var(--gray-500); margin-top: 2px; }
.der-best { font-size: 12px; color: var(--gray-400); }

.dash-weak {
  background: var(--gold-light); border: 1.5px solid var(--gold-dark);
  border-radius: var(--radius); padding: 16px 18px; margin-bottom: 20px;
}
.dash-weak-title { font-weight: 700; font-size: 14px; color: var(--orange); margin-bottom: 8px; }
.dash-weak-title i { margin-right: 6px; }
.weak-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 6px; }
.weak-tag {
  background: var(--gold); color: var(--blue-dark);
  padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 700;
  font-family: var(--font-cond); letter-spacing: .3px;
}
.dash-weak-note { font-size: 12px; color: var(--gray-700); }

.dash-section-title { font-family: var(--font-cond); font-size: 16px; font-weight: 700; letter-spacing: .5px; text-transform: uppercase; color: var(--gray-500); margin-bottom: 12px; }

.dash-actions { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 28px; }
.action-card {
  background: var(--white); border: 1.5px solid var(--gray-200);
  border-radius: var(--radius); padding: 18px 16px;
  cursor: pointer; transition: all .15s; text-align: left;
  display: flex; flex-direction: column; gap: 6px;
  font-family: var(--font-body); border: none;
}
.action-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); border-color: var(--blue-light); }
.action-card:hover { border: 1.5px solid var(--blue-light); }
.action-card { border: 1.5px solid var(--gray-200); }
.action-icon { font-size: 22px; color: var(--blue); }
.action-label { font-size: 15px; font-weight: 700; color: var(--blue-dark); }
.action-sub { font-size: 12px; color: var(--gray-500); }
.action-card.featured-action {
  background: var(--blue-dark); border-color: var(--blue-dark);
  grid-column: 1 / -1; flex-direction: row; align-items: center; gap: 16px;
}
.action-card.featured-action:hover { background: var(--blue); border-color: var(--blue); }
.action-card.featured-action .action-icon { font-size: 28px; color: var(--gold); }
.action-card.featured-action .action-label { color: #fff; font-size: 17px; }
.action-card.featured-action .action-sub { color: rgba(255,255,255,.55); }

.dash-modules-list { display: flex; flex-direction: column; background: var(--white); border: 1.5px solid var(--gray-200); border-radius: var(--radius); overflow: hidden; }
.dash-mod-row {
  display: flex; align-items: center; gap: 12px;
  padding: 13px 18px; border-bottom: 1px solid var(--gray-100); font-size: 14px;
}
.dash-mod-row:last-child { border-bottom: none; }
.dash-mod-icon { font-size: 18px; width: 24px; text-align: center; flex-shrink: 0; }
.dash-mod-name { flex: 1; font-weight: 600; color: var(--gray-700); }
.dash-mod-status { font-size: 12px; font-weight: 700; }
.dash-mod-row.done .dash-mod-status { color: var(--green); }
.dash-mod-row:not(.done) .dash-mod-status { color: var(--gray-400); }

/* ── STUDY GUIDE ────────────────────────────────────────── */
.sg-page-title { margin-bottom: 6px; }
.sg-page-title h2 { font-family: var(--font-cond); font-size: 30px; font-weight: 800; color: var(--blue-dark); }
.sg-page-title p { color: var(--gray-500); font-size: 15px; }
.sg-overall-bar { margin-bottom: 24px; }
.sg-bar-labels { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 5px; color: var(--gray-700); }
.sg-bar-track { height: 8px; background: var(--gray-200); border-radius: 4px; }
.sg-bar-fill { height: 100%; background: linear-gradient(90deg, var(--blue), var(--gold)); border-radius: 4px; transition: width .5s; }

.sg-grid { display: flex; flex-direction: column; gap: 10px; }
.sg-mod-card {
  background: var(--white); border: 1.5px solid var(--gray-200);
  border-radius: var(--radius); padding: 16px 18px;
  display: flex; align-items: center; gap: 16px;
  transition: all .15s;
}
.sg-mod-card:hover { box-shadow: var(--shadow-md); border-color: var(--blue-light); }
.sg-mod-card.done { border-left: 4px solid var(--green); }
.sg-mod-icon-wrap {
  width: 48px; height: 48px; border-radius: 10px;
  background: var(--blue-pale); color: var(--blue);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; flex-shrink: 0;
}
.sg-mod-card.done .sg-mod-icon-wrap { background: var(--green-light); color: var(--green); }
.sg-mod-info { flex: 1; min-width: 0; }
.sg-mod-name { font-size: 15px; font-weight: 700; color: var(--blue-dark); }
.sg-mod-desc { font-size: 13px; color: var(--gray-500); margin-top: 2px; }
.sg-mod-status { font-size: 12px; font-weight: 700; margin-top: 4px; }
.done .sg-mod-status { color: var(--green); }
.sg-mod-card:not(.done) .sg-mod-status { color: var(--gray-400); }

/* READER */
.sg-reader { max-width: 720px; }
.sg-back-btn { margin-bottom: 20px; }
.sg-reader-header { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; }
.sg-reader-icon-wrap {
  width: 52px; height: 52px; border-radius: 12px;
  background: var(--blue); color: #fff;
  display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;
}
.sg-reader-title { font-family: var(--font-cond); font-size: 26px; font-weight: 800; color: var(--blue-dark); }
.sg-reader-subtitle { font-size: 14px; color: var(--gray-500); }

.sg-toc {
  background: var(--blue-pale); border: 1.5px solid var(--blue-light);
  border-radius: var(--radius); padding: 16px 20px; margin-bottom: 28px;
}
.sg-toc-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--blue); margin-bottom: 8px; }
.sg-toc ul { list-style: none; display: flex; flex-direction: column; gap: 4px; }
.sg-toc li a { font-size: 14px; color: var(--blue); text-decoration: none; display: flex; align-items: center; gap: 6px; }
.sg-toc li a:hover { text-decoration: underline; }
.sg-toc li a::before { content: '→'; font-size: 12px; opacity: .6; }

.sg-section { margin-bottom: 36px; }
.sg-section-heading {
  font-family: var(--font-cond); font-size: 20px; font-weight: 800; color: var(--blue-dark);
  padding-bottom: 8px; border-bottom: 3px solid var(--gold);
  margin-bottom: 14px; display: flex; align-items: center; gap: 8px;
}
.sg-section-body { font-size: 15px; line-height: 1.7; color: var(--gray-700); }
.sg-section-body strong { color: var(--gray-900); font-weight: 700; }
.sg-section-body .sg-img {
  display: block; max-width: 200px; margin: 14px 0;
  border-radius: 8px; border: 1.5px solid var(--gray-200);
  background: white; padding: 8px;
}
.sg-section-body .sg-img-row { display: flex; flex-wrap: wrap; gap: 14px; margin: 16px 0; }
.sg-section-body .sg-img-item { text-align: center; }
.sg-section-body .sg-img-item img,
.sg-sign-thumb {
  width: 110px; height: 110px; object-fit: contain;
  border-radius: 10px; border: 1.5px solid var(--gray-200);
  background: white; padding: 8px;
  transition: box-shadow .15s, transform .15s;
}
.sg-sign-thumb:hover {
  box-shadow: var(--shadow-md); transform: scale(1.06);
}
.sg-section-body .sg-img-item p {
  font-size: 11px; color: var(--gray-500); margin-top: 5px;
  font-weight: 600; text-transform: capitalize; max-width: 110px;
}

.sg-complete-btn { width: 100%; padding: 14px; font-size: 16px; margin-top: 8px; }

/* ── ROAD SIGNS PAGE ──────────────────────────────────────── */
.signs-page h2 { font-family: var(--font-cond); font-size: 30px; font-weight: 800; color: var(--blue-dark); margin-bottom: 4px; }
.signs-page .signs-sub { color: var(--gray-500); font-size: 15px; margin-bottom: 20px; }
.signs-filter { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
.sign-filter-btn {
  padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 600;
  border: 1.5px solid var(--gray-300); background: var(--white);
  cursor: pointer; transition: all .15s; font-family: var(--font-body);
  display: flex; align-items: center; gap: 6px;
}
.sign-filter-btn:hover { border-color: var(--blue); color: var(--blue); }
.sign-filter-btn.active { background: var(--blue); color: #fff; border-color: var(--blue); }
.sign-filter-btn .filter-count {
  background: rgba(255,255,255,.25); border-radius: 10px;
  padding: 1px 6px; font-size: 11px;
}
.sign-filter-btn:not(.active) .filter-count { background: var(--gray-100); }
.signs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(145px, 1fr)); gap: 12px; }
.sign-card {
  background: var(--white); border: 1.5px solid var(--gray-200);
  border-radius: var(--radius); padding: 14px 10px;
  text-align: center; cursor: pointer; transition: all .15s;
  position: relative;
}
.sign-card:hover { box-shadow: var(--shadow-md); border-color: var(--blue); transform: translateY(-2px); }
.sign-card:hover .sign-zoom-icon { opacity: 1; }
.sign-zoom-icon {
  position: absolute; top: 8px; right: 8px;
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--blue); color: white;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; opacity: 0; transition: opacity .15s;
  pointer-events: none;
}
.sign-img-wrap {
  height: 90px; display: flex; align-items: center; justify-content: center;
  margin-bottom: 10px;
}
.sign-img-wrap img { max-height: 88px; max-width: 100%; object-fit: contain; }
.sign-img-placeholder {
  width: 64px; height: 64px; background: var(--gray-100); border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 24px; color: var(--gray-400);
}
.sign-card-name { font-size: 12px; font-weight: 700; color: var(--gray-900); line-height: 1.3; }
.sign-card-cat { font-size: 10px; color: var(--gray-400); margin-top: 3px; font-weight: 600; text-transform: uppercase; letter-spacing: .5px; }

/* Sign Detail Modal */
.sign-detail { text-align: center; padding: 8px 0; }
/* Image wrapper — relative so zoom icon can be absolute top-right */
.sign-detail-img-wrap {
  display: inline-block; position: relative; cursor: zoom-in;
  margin-bottom: 16px; border-radius: 12px;
  border: 1.5px solid var(--gray-200); background: white; padding: 10px;
}
.sign-detail-main-img {
  display: block; max-height: 160px; max-width: 220px;
  object-fit: contain; border-radius: 8px;
}
.sign-detail-zoom-btn {
  position: absolute; top: 8px; right: 8px;
  width: 26px; height: 26px; border-radius: 50%;
  background: var(--blue); color: white;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; pointer-events: none;
  box-shadow: 0 2px 6px rgba(0,0,0,.18);
}
/* Legacy selector kept for any leftover refs */
.sign-detail-img { margin-bottom: 16px; display: flex; justify-content: center; }
.sign-detail-img img { max-height: 140px; max-width: 200px; object-fit: contain; border-radius: 10px; border: 1.5px solid var(--gray-200); background: white; padding: 10px; }
.sign-detail h3 { font-family: var(--font-cond); font-size: 22px; font-weight: 800; color: var(--blue-dark); margin-bottom: 6px; }
.sign-detail-cat-badge {
  display: inline-block; padding: 3px 12px; border-radius: 20px;
  font-size: 11px; font-weight: 700; font-family: var(--font-cond); letter-spacing: .5px;
  text-transform: uppercase; margin-bottom: 14px;
}
.badge-reg  { background: var(--red-light); color: var(--red); }
.badge-warn { background: var(--gold-light); color: var(--orange); }
.badge-wz   { background: var(--orange-light); color: var(--orange); }
.badge-guide { background: #e0f0e0; color: var(--green); }
.badge-svc  { background: var(--blue-pale); color: var(--blue); }
.badge-sig  { background: var(--gray-100); color: var(--gray-700); }
.badge-scene { background: var(--blue-pale); color: var(--blue); }
.badge-diag { background: var(--gray-100); color: var(--gray-700); }
.sign-detail-meaning { font-size: 14px; color: var(--gray-700); line-height: 1.6; margin-bottom: 20px; }
.sign-detail-meta { font-size: 12px; color: var(--gray-400); border-top: 1px solid var(--gray-100); padding-top: 12px; }

/* ── FLASHCARD FILTER ROW ─────────────────────────────────── */
.fc-filter-row {
  display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px;
}
.fc-tag-btn {
  padding: 5px 11px; border-radius: 20px; font-size: 12px; font-weight: 600;
  border: 1.5px solid var(--gray-300); background: var(--white);
  cursor: pointer; transition: all .15s; font-family: var(--font-body);
  display: flex; align-items: center; gap: 5px;
  color: var(--gray-700);
}
.fc-tag-btn:hover { border-color: var(--blue); color: var(--blue); }
.fc-tag-btn.active { background: var(--blue); color: #fff; border-color: var(--blue); }

/* ── STUDY GUIDE IMAGE UPDATES ────────────────────────────── */
.fc-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.fc-header h2 { font-family: var(--font-cond); font-size: 28px; font-weight: 800; color: var(--blue-dark); }
.fc-counter { font-size: 14px; color: var(--gray-500); font-weight: 600; }
.fc-progress-track { height: 5px; background: var(--gray-200); border-radius: 3px; margin-bottom: 14px; }
.fc-progress-fill { height: 100%; background: linear-gradient(90deg, var(--blue), var(--gold)); border-radius: 3px; transition: width .3s; }
.fc-stats { display: flex; gap: 20px; margin-bottom: 20px; }
.fc-stat { font-size: 13px; font-weight: 600; }
.fc-stat.known { color: var(--green); }
.fc-stat.review { color: var(--orange); }
.fc-stat.left { color: var(--gray-500); }

.fc-card-scene { height: 220px; perspective: 1000px; margin-bottom: 20px; cursor: pointer; }
.fc-card-inner { position: relative; width: 100%; height: 100%; transition: transform .55s cubic-bezier(.4,0,.2,1); transform-style: preserve-3d; }
.fc-card-scene.flipped .fc-card-inner { transform: rotateY(180deg); }
.fc-face {
  position: absolute; width: 100%; height: 100%; backface-visibility: hidden;
  border-radius: var(--radius-lg); display: flex; flex-direction: column;
  align-items: center; justify-content: center; padding: 28px;
  text-align: center;
}
.fc-front { background: var(--blue-dark); color: white; }
.fc-back { background: white; border: 2px solid var(--green); transform: rotateY(180deg); }
.fc-face-label { font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; opacity: .55; margin-bottom: 12px; }
.fc-face-text { font-size: 18px; font-weight: 600; line-height: 1.4; }
.fc-back .fc-face-text { color: var(--gray-900); font-size: 16px; }
.fc-hint { font-size: 12px; opacity: .45; margin-top: 14px; }
.fc-kbd-hint { font-size: 11px; color: var(--gray-400); text-align: center; margin-top: 10px; }
.fc-kbd-hint kbd {
  display: inline-block; padding: 1px 5px; border-radius: 4px;
  background: var(--gray-100); border: 1px solid var(--gray-300);
  font-family: var(--font-mono); font-size: 10px; color: var(--gray-700);
}

.fc-nav-row {
  display: flex; align-items: center; justify-content: space-between;
  gap: 10px; margin-top: 14px;
}
.fc-nav-row #fc-flip-area,
.fc-nav-row #fc-actions { flex: 1; display: flex; justify-content: center; gap: 8px; }
.fc-flip-btn { min-width: 120px; }
.fc-controls { display: flex; gap: 10px; margin-bottom: 12px; justify-content: center; }
.fc-controls .btn { flex: 1; max-width: 200px; }
.fc-flip-area { text-align: center; }
.fc-summary { text-align: center; padding: 20px 0; }
.fc-summary-emoji { font-size: 52px; margin-bottom: 12px; }
.fc-summary h2 { font-family: var(--font-cond); font-size: 28px; font-weight: 800; color: var(--blue-dark); margin-bottom: 16px; }
.fc-score-ring { width: 140px; height: 140px; margin: 0 auto 16px; }
.fc-score-ring svg { width: 100%; height: 100%; }
.fc-summary-actions { display: flex; gap: 12px; justify-content: center; margin-top: 20px; }

/* ── QUIZ ────────────────────────────────────────────────── */
.quiz-setup h2 { font-family: var(--font-cond); font-size: 28px; font-weight: 800; color: var(--blue-dark); margin-bottom: 6px; }
.quiz-setup p { color: var(--gray-500); margin-bottom: 24px; }
.quiz-setup-grid { display: flex; flex-direction: column; gap: 20px; margin-bottom: 28px; }
.qso-label { font-size: 13px; font-weight: 700; color: var(--gray-700); margin-bottom: 8px; text-transform: uppercase; letter-spacing: .5px; }
.qso-btns { display: flex; flex-wrap: wrap; gap: 8px; }
.qso-btn {
  padding: 8px 16px; border-radius: var(--radius); font-size: 14px; font-weight: 600;
  border: 1.5px solid var(--gray-300); background: var(--white);
  cursor: pointer; transition: all .15s; font-family: var(--font-body);
}
.qso-btn:hover { border-color: var(--blue); color: var(--blue); }
.qso-btn.active { background: var(--blue); color: #fff; border-color: var(--blue); }
.qso-select {
  width: 100%; padding: 10px 14px; border: 1.5px solid var(--gray-300);
  border-radius: var(--radius); font-size: 14px; font-family: var(--font-body);
  background: var(--white); cursor: pointer;
}
.qso-select:focus { outline: none; border-color: var(--blue); }

.quiz-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.quiz-q-counter { font-family: var(--font-cond); font-size: 15px; font-weight: 700; color: var(--blue); }
.quiz-score-badge { font-weight: 700; font-size: 14px; color: var(--gray-700); }
.quiz-timer {
  font-family: var(--font-mono); font-size: 15px; font-weight: 600;
  background: var(--blue); color: white; padding: 4px 12px; border-radius: 20px;
}
.quiz-timer.urgent { background: var(--red); animation: pulse .5s infinite alternate; }
@keyframes pulse { from { opacity: 1; } to { opacity: .6; } }
.quiz-progress-bar { height: 5px; background: var(--gray-200); border-radius: 3px; margin-bottom: 14px; }
.quiz-progress-fill { height: 100%; background: var(--gold); border-radius: 3px; }
.quiz-module-tag { font-size: 12px; color: var(--gray-500); font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
.quiz-image-wrap { margin-bottom: 16px; }
.quiz-image-wrap img { max-height: 120px; max-width: 180px; object-fit: contain; border-radius: 8px; border: 1.5px solid var(--gray-200); background: white; padding: 8px; }
.quiz-question { font-size: 18px; font-weight: 700; color: var(--gray-900); margin-bottom: 20px; line-height: 1.4; }
.quiz-options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
.quiz-opt {
  padding: 14px 18px; border: 1.5px solid var(--gray-200);
  border-radius: var(--radius); background: var(--white);
  text-align: left; font-size: 15px; font-family: var(--font-body); font-weight: 500;
  cursor: pointer; transition: all .15s;
}
.quiz-opt:hover:not(:disabled) { border-color: var(--blue); background: var(--blue-pale); }
.quiz-opt.correct { border-color: var(--green); background: var(--green-light); color: var(--green); font-weight: 700; }
.quiz-opt.wrong { border-color: var(--red); background: var(--red-light); color: var(--red); }
.quiz-exp {
  padding: 13px 16px; border-radius: var(--radius); font-size: 14px; margin-bottom: 14px;
  line-height: 1.55;
}
.quiz-exp.correct-exp { background: var(--green-light); border: 1.5px solid var(--green); color: var(--green); }
.quiz-exp.wrong-exp { background: var(--red-light); border: 1.5px solid var(--red); color: var(--red); }
.quiz-exp strong { font-weight: 800; }
.quiz-next-btn { width: 100%; }

.quiz-results { max-width: 700px; }
.qr-hero { text-align: center; padding: 28px; border-radius: var(--radius-lg); margin-bottom: 24px; }
.qr-hero.pass { background: var(--green-light); }
.qr-hero.fail { background: var(--red-light); }
.qr-badge { font-size: 36px; margin-bottom: 10px; }
.qr-hero h2 { font-family: var(--font-cond); font-size: 28px; font-weight: 800; margin-bottom: 6px; }
.pass .qr-hero h2 { color: var(--green); }
.fail .qr-hero h2 { color: var(--red); }
.qr-pct { font-family: var(--font-cond); font-size: 60px; font-weight: 900; line-height: 1; margin-bottom: 6px; }
.pass .qr-pct { color: var(--green); }
.fail .qr-pct { color: var(--red); }
.qr-hero p { color: var(--gray-600); }
.qr-review h3 { font-size: 17px; font-weight: 700; margin-bottom: 12px; }
.qr-item {
  background: var(--white); border: 1.5px solid var(--red-light);
  border-radius: var(--radius); padding: 14px 16px; margin-bottom: 10px;
}
.qr-item-q { font-weight: 700; font-size: 14px; margin-bottom: 8px; display: flex; align-items: flex-start; gap: 8px; }
.qr-item-q img { width: 50px; height: 50px; object-fit: contain; border-radius: 6px; border: 1px solid var(--gray-200); background: white; padding: 4px; flex-shrink: 0; }
.qr-correct { font-size: 13px; color: var(--green); font-weight: 700; }
.qr-yours { font-size: 13px; color: var(--red); }
.qr-exp { font-size: 13px; color: var(--gray-600); margin-top: 6px; padding-top: 6px; border-top: 1px solid var(--gray-100); }
.qr-actions { display: flex; gap: 12px; justify-content: center; margin-top: 20px; }

/* ── MOCK EXAM ───────────────────────────────────────────── */
.exam-intro { max-width: 540px; text-align: center; margin: 0 auto; }
.exam-intro-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--blue-dark); color: var(--gold);
  padding: 6px 16px; border-radius: 20px; font-size: 13px; font-weight: 700;
  font-family: var(--font-cond); letter-spacing: .5px; text-transform: uppercase;
  margin-bottom: 16px;
}
.exam-intro h2 { font-family: var(--font-cond); font-size: 36px; font-weight: 900; color: var(--blue-dark); margin-bottom: 6px; }
.exam-intro .sub { color: var(--gray-500); margin-bottom: 24px; }
.exam-rules {
  display: flex; justify-content: center; gap: 20px;
  background: var(--blue-pale); border-radius: var(--radius-lg); padding: 20px;
  margin-bottom: 24px; flex-wrap: wrap;
}
.er-rule { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.er-val { font-family: var(--font-cond); font-size: 32px; font-weight: 900; color: var(--blue-dark); }
.er-label { font-size: 12px; color: var(--gray-500); font-weight: 600; }
.exam-tips-list {
  text-align: left; list-style: none; margin-bottom: 28px;
  background: var(--white); border: 1.5px solid var(--gray-200);
  border-radius: var(--radius); padding: 16px 20px;
  display: flex; flex-direction: column; gap: 8px;
}
.exam-tips-list li { font-size: 14px; color: var(--gray-700); display: flex; align-items: flex-start; gap: 8px; }
.exam-tips-list li::before { content: '→'; color: var(--blue); font-weight: 700; flex-shrink: 0; }

.exam-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.exam-q-num { font-family: var(--font-cond); font-size: 14px; font-weight: 700; color: var(--blue); }
.exam-answered-badge { font-size: 13px; color: var(--gray-500); font-weight: 600; }
.exam-progress-dots { display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 20px; }
.epd { width: 34px; height: 6px; border-radius: 3px; background: var(--gray-200); cursor: pointer; transition: all .2s; }
.epd.answered { background: var(--gold); }
.epd.current { background: var(--blue); }
.epd:hover { opacity: .75; }
.exam-question { font-size: 19px; font-weight: 700; color: var(--gray-900); margin-bottom: 22px; line-height: 1.4; }
.exam-options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 22px; }
.exam-opt {
  padding: 15px 18px; border: 1.5px solid var(--gray-200);
  border-radius: var(--radius); background: var(--white);
  text-align: left; font-size: 15px; font-family: var(--font-body); font-weight: 500;
  cursor: pointer; transition: all .15s; display: flex; align-items: center; gap: 12px;
}
.exam-opt .opt-letter {
  width: 26px; height: 26px; border-radius: 50%;
  background: var(--gray-100); color: var(--gray-500);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; font-family: var(--font-cond);
  flex-shrink: 0; transition: all .15s;
}
.exam-opt:hover:not(:disabled) { border-color: var(--blue); background: var(--blue-pale); }
.exam-opt:hover:not(:disabled) .opt-letter { background: var(--blue); color: white; }
.exam-opt.selected { border-color: var(--blue); background: var(--blue); color: white; font-weight: 700; }
.exam-opt.selected .opt-letter { background: rgba(255,255,255,.2); color: white; }
.exam-nav { display: flex; align-items: center; gap: 10px; }
.exam-nav-center { flex: 1; text-align: center; }
.exam-jump-toggle { font-size: 13px; }
.exam-jump-map {
  background: var(--white); border: 1.5px solid var(--gray-200);
  border-radius: var(--radius); padding: 16px; margin-top: 14px;
}
.ejm-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; }
.ejm-btn {
  width: 36px; height: 36px; border-radius: 8px;
  border: 1.5px solid var(--gray-200); background: var(--white);
  font-size: 13px; font-weight: 700; cursor: pointer; font-family: var(--font-cond);
  transition: all .12s;
}
.ejm-btn.answered { background: var(--gold-light); border-color: var(--gold-dark); }
.ejm-btn.current { background: var(--blue); color: white; border-color: var(--blue); }
.ejm-legend { font-size: 12px; color: var(--gray-500); display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
.ld { display: inline-block; width: 12px; height: 12px; border-radius: 3px; border: 1.5px solid var(--gray-300); }
.ld.ans { background: var(--gold-light); border-color: var(--gold-dark); }
.ld.cur { background: var(--blue); border-color: var(--blue); }
.exam-warning { color: var(--red); font-size: 13px; font-weight: 700; text-align: center; margin-top: 8px; }

.exam-results { max-width: 720px; }
.er-hero { text-align: center; padding: 32px; border-radius: var(--radius-lg); margin-bottom: 28px; }
.er-hero.pass { background: var(--green-light); }
.er-hero.fail { background: var(--red-light); }
.er-emoji { font-size: 52px; margin-bottom: 12px; }
.er-hero h2 { font-family: var(--font-cond); font-size: 34px; font-weight: 900; }
.pass .er-hero h2 { color: var(--green); }
.fail .er-hero h2 { color: var(--red); }
.er-score { font-family: var(--font-cond); font-size: 64px; font-weight: 900; line-height: 1; }
.pass .er-score { color: var(--green); }
.fail .er-score { color: var(--red); }
.er-pct { font-family: var(--font-cond); font-size: 22px; font-weight: 700; opacity: .6; }
.er-hero p { margin-top: 8px; font-size: 15px; color: var(--gray-700); }
.er-breakdown h3 { font-size: 18px; font-weight: 700; margin-bottom: 14px; }
.er-bd-item { padding: 14px 16px; border-radius: var(--radius); border: 1.5px solid; margin-bottom: 10px; }
.er-bd-item.bd-ok { border-color: var(--green); background: var(--green-light); }
.er-bd-item.bd-no { border-color: var(--red); background: var(--red-light); }
.er-bd-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.er-bd-num { font-size: 13px; font-weight: 800; }
.bd-ok .er-bd-num { color: var(--green); }
.bd-no .er-bd-num { color: var(--red); }
.er-bd-mod { font-size: 12px; color: var(--gray-500); }
.er-bd-q { font-size: 14px; font-weight: 700; color: var(--gray-900); margin-bottom: 6px; }
.er-bd-answers { font-size: 13px; margin-bottom: 6px; }
.bd-yours { color: var(--red); }
.bd-correct-ans { color: var(--green); font-weight: 700; }
.er-bd-exp { font-size: 13px; color: var(--gray-600); border-top: 1px solid rgba(0,0,0,.06); padding-top: 8px; }
.er-actions { display: flex; gap: 12px; justify-content: center; margin-top: 24px; }

/* ── MODAL ────────────────────────────────────────────────── */
#modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,.55);
  z-index: 200; display: none;
  align-items: center; justify-content: center;
  padding: 20px;
}
#modal-overlay.open { display: flex; }
.modal-box {
  background: var(--white); border-radius: var(--radius-lg);
  padding: 28px; max-width: 460px; width: 100%;
  max-height: 92vh; overflow-y: auto;
  position: relative;
  box-shadow: var(--shadow-lg);
  animation: modalIn .2s ease;
}
@keyframes modalIn { from { transform: scale(.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
.modal-close {
  position: absolute; top: 14px; right: 14px;
  width: 30px; height: 30px; border-radius: 50%;
  background: var(--gray-100); border: none; cursor: pointer;
  font-size: 14px; color: var(--gray-500);
  display: flex; align-items: center; justify-content: center;
  transition: all .15s;
}
.modal-close:hover { background: var(--gray-200); color: var(--gray-900); }
.modal-title { font-family: var(--font-cond); font-size: 22px; font-weight: 800; color: var(--blue-dark); margin-bottom: 6px; }
.modal-sub { color: var(--gray-500); font-size: 14px; margin-bottom: 20px; }

/* PIN PAD */
.pin-avatar {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--blue); color: white;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-cond); font-size: 24px; font-weight: 800;
  margin: 0 auto 14px;
}
.pin-display { display: flex; gap: 14px; justify-content: center; margin-bottom: 24px; }
.pin-dot {
  width: 16px; height: 16px; border-radius: 50%;
  border: 2px solid var(--gray-300); background: white;
  transition: all .15s;
}
.pin-dot.filled { background: var(--blue); border-color: var(--blue); }
.pin-pad { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 220px; margin: 0 auto; }
.pin-key {
  aspect-ratio: 1; border-radius: var(--radius); border: 1.5px solid var(--gray-200);
  background: var(--white); font-size: 22px; font-weight: 600; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-body); transition: all .1s; user-select: none;
}
.pin-key:active { transform: scale(.92); background: var(--blue-pale); }
.pin-key:hover:not(.pin-key-blank) { border-color: var(--blue); color: var(--blue); }
.pin-key.pin-key-blank { border-color: transparent; background: transparent; cursor: default; }
.pin-error { color: var(--red); font-size: 13px; text-align: center; margin-top: 12px; font-weight: 600; }

/* FORM */
.form-group { margin-bottom: 16px; }
.form-label { display: block; font-size: 13px; font-weight: 700; color: var(--gray-700); margin-bottom: 6px; text-transform: uppercase; letter-spacing: .4px; }
.form-input {
  width: 100%; padding: 11px 14px; border: 1.5px solid var(--gray-300);
  border-radius: var(--radius); font-size: 15px; font-family: var(--font-body);
  transition: border-color .15s; background: var(--white);
}
.form-input:focus { outline: none; border-color: var(--blue); }
.form-error { color: var(--red); font-size: 13px; margin-bottom: 12px; font-weight: 600; }

/* CONFIRM */
.confirm-text { color: var(--gray-700); font-size: 15px; margin-bottom: 20px; line-height: 1.6; }
.confirm-actions { display: flex; gap: 10px; }

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 768px) {
  #sidebar { display: none; }
  #topbar { display: flex; }
  #bottom-nav { display: flex; }
  #main-content {
    margin-left: 0;
    padding: 20px 16px 0;
    /* push content below the fixed topbar */
    padding-top: calc(var(--topbar-h) + 20px);
  }
  #tab-content {
    /* clear fixed bottom nav + safe area + breathing room */
    padding-bottom: calc(var(--bottomnav-h) + env(safe-area-inset-bottom) + 32px);
  }
  #app-screen.active { flex-direction: column; overflow-y: auto; }
  .dash-stats { grid-template-columns: repeat(2, 1fr); }
  .dash-actions { grid-template-columns: 1fr; }
  .action-card.featured-action { grid-column: 1; }
  .exam-rules { gap: 14px; }
  .signs-grid { grid-template-columns: repeat(3, 1fr); }
  .sg-section-body .sg-img-row { gap: 8px; }
}

@media (max-width: 480px) {
  .signs-grid { grid-template-columns: repeat(2, 1fr); }
  .ps-logo { flex-direction: column; text-align: center; }
  .ps-title { font-size: 28px; }
  .er-score { font-size: 48px; }
  .qr-pct { font-size: 48px; }
}
