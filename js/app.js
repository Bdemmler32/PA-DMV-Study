// ============================================================
//  app.js — Main controller: profile UI, routing, dashboard
// ============================================================

let currentProfileId = null;

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showProfileScreen();
});

// ── PROFILE SCREEN ───────────────────────────────────────────
function showProfileScreen() {
  const main = document.getElementById('main-content');
  main.innerHTML = '';
  document.getElementById('app-nav').classList.add('hidden');
  document.getElementById('profile-bar').classList.add('hidden');

  const screen = document.createElement('div');
  screen.className = 'profile-screen';
  screen.innerHTML = `
    <div class="profile-hero">
      <div class="pa-logo">
        <div class="pa-shield">PA</div>
      </div>
      <h1>PA DMV Study</h1>
      <p>Pennsylvania Driver's License Preparation</p>
    </div>
    <div class="profile-container">
      <h2>Select Your Profile</h2>
      <div class="profile-slots" id="profile-slots"></div>
    </div>
  `;
  main.appendChild(screen);
  renderProfileSlots();
}

function renderProfileSlots() {
  const container = document.getElementById('profile-slots');
  container.innerHTML = '';
  const profiles = ProfileManager.getAllProfiles();
  const MAX = ProfileManager.MAX_SLOTS;

  profiles.forEach(p => {
    const slot = document.createElement('div');
    slot.className = 'profile-slot filled';
    const initials = p.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const readCount = p.progress.modulesRead.length;
    const totalMods = PA_DATA.modules.length;
    slot.innerHTML = `
      <div class="profile-avatar">${initials}</div>
      <div class="profile-info">
        <div class="profile-name">${p.name}</div>
        <div class="profile-meta">${readCount}/${totalMods} modules · ${p.progress.examsTaken} exam${p.progress.examsTaken !== 1 ? 's' : ''}</div>
      </div>
      <button class="btn btn-primary btn-sm profile-enter" data-id="${p.id}">Enter</button>
      <button class="btn btn-ghost btn-sm profile-delete" data-id="${p.id}" title="Delete profile">✕</button>
    `;
    container.appendChild(slot);
  });

  // Empty slots
  for (let i = profiles.length; i < MAX; i++) {
    const slot = document.createElement('div');
    slot.className = 'profile-slot empty';
    slot.innerHTML = `
      <div class="profile-avatar empty-avatar">+</div>
      <div class="profile-info">
        <div class="profile-name muted">Empty Slot</div>
      </div>
      <button class="btn btn-secondary btn-sm create-profile-btn">Create</button>
    `;
    container.appendChild(slot);
  }

  // Bind events
  container.querySelectorAll('.profile-enter').forEach(btn => {
    btn.addEventListener('click', () => promptPin(btn.dataset.id));
  });
  container.querySelectorAll('.profile-delete').forEach(btn => {
    btn.addEventListener('click', () => confirmDelete(btn.dataset.id));
  });
  container.querySelectorAll('.create-profile-btn').forEach(btn => {
    btn.addEventListener('click', showCreateProfile);
  });
}

function promptPin(profileId) {
  const profile = ProfileManager.getProfile(profileId);
  showModal(`
    <div class="pin-prompt">
      <div class="pin-avatar">${profile.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2)}</div>
      <h3>Welcome back, ${profile.name}!</h3>
      <p>Enter your 4-digit PIN</p>
      <div class="pin-display" id="pin-display">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="pin-pad" id="pin-pad"></div>
      <div class="pin-error hidden" id="pin-error">Incorrect PIN. Try again.</div>
    </div>
  `);
  renderPinPad('', profileId);
}

function renderPinPad(current, profileId) {
  const pad = document.getElementById('pin-pad');
  const display = document.getElementById('pin-display');
  if (!pad || !display) return;

  const dots = display.querySelectorAll('span');
  dots.forEach((d, i) => {
    d.className = i < current.length ? 'pin-dot filled' : 'pin-dot';
  });

  pad.innerHTML = '';
  [1,2,3,4,5,6,7,8,9,'',0,'⌫'].forEach(k => {
    const btn = document.createElement('button');
    btn.className = `pin-key ${k === '' ? 'pin-key-empty' : ''}`;
    btn.textContent = k;
    if (k === '⌫') {
      btn.addEventListener('click', () => {
        renderPinPad(current.slice(0, -1), profileId);
      });
    } else if (k !== '') {
      btn.addEventListener('click', () => {
        const next = current + k;
        if (next.length < 4) {
          renderPinPad(next, profileId);
        } else {
          // Try PIN
          renderPinPad(next, profileId);
          setTimeout(() => {
            if (ProfileManager.verifyPin(profileId, next)) {
              closeModal();
              enterProfile(profileId);
            } else {
              document.getElementById('pin-error')?.classList.remove('hidden');
              setTimeout(() => renderPinPad('', profileId), 800);
            }
          }, 200);
        }
      });
    }
    pad.appendChild(btn);
  });
}

function showCreateProfile() {
  showModal(`
    <div class="create-profile-form">
      <h3>Create New Profile</h3>
      <p>Set up your study profile. Your data stays on this device.</p>
      <div class="form-group">
        <label>Your Name</label>
        <input type="text" id="cp-name" class="form-input" placeholder="e.g. Alex Johnson" maxlength="30" autocomplete="off">
      </div>
      <div class="form-group">
        <label>Choose a 4-Digit PIN</label>
        <div class="pin-display" id="cp-pin-display">
          <span></span><span></span><span></span><span></span>
        </div>
        <div class="pin-pad" id="cp-pin-pad"></div>
      </div>
      <div class="create-error hidden" id="cp-error"></div>
      <button class="btn btn-primary btn-full" id="cp-submit" disabled>Create Profile</button>
    </div>
  `);

  let pin = '';
  const submitBtn = document.getElementById('cp-submit');

  function updatePad() {
    const pad = document.getElementById('cp-pin-pad');
    const display = document.getElementById('cp-pin-display');
    if (!pad || !display) return;
    const dots = display.querySelectorAll('span');
    dots.forEach((d, i) => {
      d.className = i < pin.length ? 'pin-dot filled' : 'pin-dot';
    });
    pad.innerHTML = '';
    [1,2,3,4,5,6,7,8,9,'',0,'⌫'].forEach(k => {
      const btn = document.createElement('button');
      btn.className = `pin-key ${k === '' ? 'pin-key-empty' : ''}`;
      btn.textContent = k;
      if (k === '⌫') {
        btn.addEventListener('click', () => { pin = pin.slice(0,-1); updatePad(); checkReady(); });
      } else if (k !== '') {
        btn.addEventListener('click', () => {
          if (pin.length < 4) { pin += k; updatePad(); checkReady(); }
        });
      }
      pad.appendChild(btn);
    });
  }

  function checkReady() {
    const name = document.getElementById('cp-name')?.value.trim();
    submitBtn.disabled = !(name && pin.length === 4);
  }

  document.getElementById('cp-name').addEventListener('input', checkReady);
  updatePad();

  submitBtn.addEventListener('click', () => {
    const name = document.getElementById('cp-name').value.trim();
    const result = ProfileManager.createProfile(name, pin);
    if (result.error) {
      document.getElementById('cp-error').textContent = result.error;
      document.getElementById('cp-error').classList.remove('hidden');
    } else {
      closeModal();
      renderProfileSlots();
    }
  });
}

function confirmDelete(profileId) {
  const p = ProfileManager.getProfile(profileId);
  showModal(`
    <div class="confirm-delete">
      <h3>Delete Profile?</h3>
      <p>Delete <strong>${p.name}</strong>'s profile? All progress will be lost. This cannot be undone.</p>
      <div class="confirm-actions">
        <button class="btn btn-ghost" id="del-cancel">Cancel</button>
        <button class="btn btn-danger" id="del-confirm">Delete</button>
      </div>
    </div>
  `);
  document.getElementById('del-cancel').addEventListener('click', closeModal);
  document.getElementById('del-confirm').addEventListener('click', () => {
    ProfileManager.deleteProfile(profileId);
    closeModal();
    renderProfileSlots();
  });
}

function enterProfile(profileId) {
  currentProfileId = profileId;
  const profile = ProfileManager.getProfile(profileId);

  document.getElementById('app-nav').classList.remove('hidden');
  document.getElementById('profile-bar').classList.remove('hidden');

  const initials = profile.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  document.getElementById('profile-bar').innerHTML = `
    <div class="pbar-left">
      <div class="pbar-avatar">${initials}</div>
      <span class="pbar-name">${profile.name}</span>
    </div>
    <button class="btn btn-ghost btn-sm" id="switch-profile">Switch Profile</button>
  `;
  document.getElementById('switch-profile').addEventListener('click', showProfileScreen);

  navigateTo('dashboard');
}

// ── NAVIGATION ────────────────────────────────────────────────
function navigateTo(tab) {
  document.querySelectorAll('[data-tab]').forEach(t => {
    t.classList.toggle('nav-active', t.dataset.tab === tab);
  });

  const main = document.getElementById('main-content');
  main.innerHTML = `<div id="tab-content"></div>`;

  switch (tab) {
    case 'dashboard': renderDashboard(); break;
    case 'study':     StudyGuide.render('tab-content', currentProfileId); break;
    case 'signs':     renderSigns(); break;
    case 'flashcards': Flashcards.render('tab-content', currentProfileId); break;
    case 'quiz':      Quiz.render('tab-content', currentProfileId); break;
    case 'exam':      Exam.render('tab-content', currentProfileId); break;
  }
}

document.addEventListener('click', e => {
  const tab = e.target.closest('[data-tab]');
  if (tab && currentProfileId) navigateTo(tab.dataset.tab);
});

// ── DASHBOARD ─────────────────────────────────────────────────
function renderDashboard() {
  const profile = ProfileManager.getProfile(currentProfileId);
  const p = profile.progress;
  const totalMods = PA_DATA.modules.length;
  const readMods = p.modulesRead.length;
  const modPct = Math.round((readMods / totalMods) * 100);
  const weakAreas = ProfileManager.getWeakAreas(currentProfileId);
  const weakModules = [...new Set(weakAreas.map(qId => PA_DATA.questions.find(q=>q.id===qId)?.module).filter(Boolean))];

  const el = document.getElementById('tab-content');
  el.innerHTML = `
    <div class="dashboard">
      <div class="dash-welcome">
        <h2>Welcome back! 👋</h2>
        <p>Here's your study progress at a glance.</p>
      </div>
      
      <div class="dash-stats">
        <div class="dash-stat-card">
          <div class="dash-stat-icon">📚</div>
          <div class="dash-stat-val">${readMods}/${totalMods}</div>
          <div class="dash-stat-label">Modules Read</div>
          <div class="dash-mini-bar"><div class="dash-mini-fill" style="width:${modPct}%"></div></div>
        </div>
        <div class="dash-stat-card">
          <div class="dash-stat-icon">🃏</div>
          <div class="dash-stat-val">${p.flashcardsStudied}</div>
          <div class="dash-stat-label">Cards Studied</div>
        </div>
        <div class="dash-stat-card">
          <div class="dash-stat-icon">✏️</div>
          <div class="dash-stat-val">${p.quizzesTaken}</div>
          <div class="dash-stat-label">Quizzes Taken</div>
        </div>
        <div class="dash-stat-card">
          <div class="dash-stat-icon">🏛️</div>
          <div class="dash-stat-val">${p.examsTaken}</div>
          <div class="dash-stat-label">Mock Exams</div>
        </div>
      </div>

      ${p.lastScore ? `
        <div class="dash-last-exam ${p.lastScore.passed ? 'dash-pass' : 'dash-fail'}">
          <div class="dash-last-icon">${p.lastScore.passed ? '✓' : '✗'}</div>
          <div class="dash-last-info">
            <strong>Last Exam:</strong> ${p.lastScore.score}/${p.lastScore.total} (${p.lastScore.pct}%) — ${p.lastScore.passed ? 'PASSED' : 'NOT PASSED'}
          </div>
          ${p.bestScore && p.bestScore.pct !== p.lastScore.pct ? `<div class="dash-best">Best: ${p.bestScore.pct}%</div>` : ''}
        </div>
      ` : ''}

      ${weakModules.length > 0 ? `
        <div class="dash-weak">
          <h3>⚠ Areas to Review</h3>
          <div class="dash-weak-tags">
            ${weakModules.map(mid => {
              const mod = PA_DATA.modules.find(m=>m.id===mid);
              return `<span class="dash-weak-tag">${mod?.icon} ${mod?.title}</span>`;
            }).join('')}
          </div>
          <p class="dash-weak-note">These topics have lower accuracy in your quiz history.</p>
        </div>
      ` : ''}

      <div class="dash-quick-actions">
        <h3>Quick Start</h3>
        <div class="dash-actions-grid">
          <button class="dash-action-btn" data-tab="study">
            <span class="dab-icon">📖</span>
            <span class="dab-label">Study Guide</span>
            <span class="dab-sub">${readMods < totalMods ? `${totalMods - readMods} modules left` : 'All done!'}</span>
          </button>
          <button class="dash-action-btn" data-tab="flashcards">
            <span class="dab-icon">🃏</span>
            <span class="dab-label">Flashcards</span>
            <span class="dab-sub">${PA_DATA.flashcards.length} cards</span>
          </button>
          <button class="dash-action-btn" data-tab="signs">
            <span class="dab-icon">🚦</span>
            <span class="dab-label">Sign Gallery</span>
            <span class="dab-sub">${PA_DATA.signs.length} signs</span>
          </button>
          <button class="dash-action-btn" data-tab="quiz">
            <span class="dab-icon">✏️</span>
            <span class="dab-label">Practice Quiz</span>
            <span class="dab-sub">Timed practice</span>
          </button>
          <button class="dash-action-btn featured" data-tab="exam">
            <span class="dab-icon">🏛️</span>
            <span class="dab-label">Mock Exam</span>
            <span class="dab-sub">18 questions · PA format</span>
          </button>
        </div>
      </div>

      <div class="dash-module-overview">
        <h3>Module Progress</h3>
        <div class="dash-mod-list">
          ${PA_DATA.modules.map(mod => {
            const done = p.modulesRead.includes(mod.id);
            return `
              <div class="dash-mod-row ${done ? 'done' : ''}">
                <span class="dash-mod-icon">${mod.icon}</span>
                <span class="dash-mod-title">${mod.title}</span>
                <span class="dash-mod-status">${done ? '✓ Complete' : 'Not started'}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

// ── SIGNS GALLERY ─────────────────────────────────────────────
function renderSigns() {
  const el = document.getElementById('tab-content');
  const categories = [...new Set(PA_DATA.signs.map(s => s.category))];

  el.innerHTML = `
    <div class="signs-page">
      <h2>Road Sign Gallery</h2>
      <p class="signs-sub">Learn to recognize every sign. Click any sign card to see its meaning.</p>
      <div class="signs-filter" id="signs-filter">
        <button class="sign-filter-btn active" data-cat="all">All</button>
        ${categories.map(c => `<button class="sign-filter-btn" data-cat="${c}">${c}</button>`).join('')}
      </div>
      <div class="signs-grid" id="signs-grid"></div>
    </div>
  `;

  renderSignGrid('all');

  document.querySelectorAll('.sign-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sign-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSignGrid(btn.dataset.cat);
    });
  });
}

function renderSignGrid(cat) {
  const grid = document.getElementById('signs-grid');
  const signs = cat === 'all' ? PA_DATA.signs : PA_DATA.signs.filter(s => s.category === cat);

  grid.innerHTML = signs.map((sign, i) => `
    <div class="sign-card" data-sign="${i}">
      <div class="sign-img-wrap">
        <img src="${sign.url}" alt="${sign.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'sign-img-placeholder\\'>${sign.name[0]}</div>'">
      </div>
      <div class="sign-name">${sign.name}</div>
      <div class="sign-cat-tag">${sign.category}</div>
    </div>
  `).join('');

  grid.querySelectorAll('.sign-card').forEach((card, i) => {
    const signIdx = cat === 'all' ? i : PA_DATA.signs.indexOf(signs[i]);
    card.addEventListener('click', () => showSignDetail(signs[i]));
  });
}

function showSignDetail(sign) {
  showModal(`
    <div class="sign-detail">
      <div class="sign-detail-img">
        <img src="${sign.url}" alt="${sign.name}" onerror="this.style.display='none'">
      </div>
      <h3>${sign.name}</h3>
      <span class="sign-detail-cat">${sign.category}</span>
      <p class="sign-detail-meaning">${sign.meaning}</p>
      <button class="btn btn-primary" onclick="closeModal()">Got It</button>
    </div>
  `);
}

// ── MODAL ─────────────────────────────────────────────────────
function showModal(html) {
  let overlay = document.getElementById('modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = `
    <div class="modal-box">
      <button class="modal-close" onclick="closeModal()">✕</button>
      ${html}
    </div>
  `;
  overlay.classList.add('modal-visible');
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('modal-visible');
}
