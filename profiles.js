// ============================================================
//  PA DMV Study v05 — app.js
//  Main controller: profiles, PIN, navigation, dashboard
// ============================================================

(function () {
  'use strict';

  // ── STATE ────────────────────────────────────────────────
  let currentProfile = null;
  let activeTab = 'dashboard';
  let pinKeyListener = null;

  // ── INIT ─────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    showProfileScreen();
  });

  // ══════════════════════════════════════════════════════════
  //  PROFILE SCREEN
  // ══════════════════════════════════════════════════════════
  function showProfileScreen() {
    currentProfile = null;
    closeModal();           // close any open modal
    removeKeyListener();    // remove any PIN keyboard listeners
    switchScreen('profile-screen');
    renderProfileSlots();
  }

  function renderProfileSlots() {
    const profiles = ProfileManager.load();
    const container = document.getElementById('profile-slots');
    container.innerHTML = '';

    for (let i = 0; i < ProfileManager.MAX; i++) {
      const p = profiles[i] || null;
      const slot = document.createElement('div');
      slot.className = `profile-slot ${p ? 'filled' : 'empty'}`;

      if (p) {
        const initials = p.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
        const prog = p.progress;
        const examInfo = prog.examsTaken > 0
          ? `Last exam: ${prog.lastScore.pct}% · ${prog.examsTaken} taken`
          : 'No exams yet';
        slot.innerHTML = `
          <div class="slot-avatar filled-av">${initials}</div>
          <div class="slot-info">
            <div class="slot-name">${escHtml(p.name)}</div>
            <div class="slot-meta">${examInfo}</div>
          </div>
          <div class="slot-actions">
            <button class="slot-enter-btn" data-id="${p.id}">
              <i class="fa-solid fa-arrow-right-to-bracket"></i> Enter
            </button>
            <button class="slot-delete-btn" data-id="${p.id}" title="Delete profile">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        `;
        slot.querySelector('.slot-enter-btn').addEventListener('click', () => promptPin(p.id));
        slot.querySelector('.slot-delete-btn').addEventListener('click', () => confirmDelete(p.id));
      } else {
        slot.innerHTML = `
          <div class="slot-avatar empty-av"><i class="fa-solid fa-plus"></i></div>
          <div class="slot-info">
            <div class="slot-name" style="color:rgba(255,255,255,.4)">Empty Slot</div>
          </div>
          <div class="slot-actions">
            <button class="slot-create-btn">
              <i class="fa-solid fa-user-plus"></i> Create
            </button>
          </div>
        `;
        slot.querySelector('.slot-create-btn').addEventListener('click', showCreateProfile);
      }
      container.appendChild(slot);
    }
  }

  // ══════════════════════════════════════════════════════════
  //  PIN MODAL
  // ══════════════════════════════════════════════════════════
  function promptPin(profileId) {
    const p = ProfileManager.getProfile(profileId);
    if (!p) return;
    const initials = p.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    let pin = '';
    let attempts = 0;

    showModal(`
      <div class="pin-avatar">${initials}</div>
      <div class="modal-title" style="text-align:center;">${escHtml(p.name)}</div>
      <div class="modal-sub" style="text-align:center;">Enter your 4-digit PIN</div>
      <div class="pin-display" id="pin-display">
        <div class="pin-dot" id="pd0"></div>
        <div class="pin-dot" id="pd1"></div>
        <div class="pin-dot" id="pd2"></div>
        <div class="pin-dot" id="pd3"></div>
      </div>
      <div class="pin-pad">
        ${[1,2,3,4,5,6,7,8,9,'',0,'⌫'].map(k => {
          if (k === '') return `<div class="pin-key pin-key-blank"></div>`;
          return `<button class="pin-key" data-k="${k}">${k}</button>`;
        }).join('')}
      </div>
      <div id="pin-error" class="pin-error" style="display:none;"></div>
    `);

    function updateDots() {
      for (let i = 0; i < 4; i++) {
        const dot = document.getElementById(`pd${i}`);
        if (dot) dot.classList.toggle('filled', i < pin.length);
      }
    }

    function handleKey(k) {
      if (k === '⌫' || k === 'Backspace') {
        pin = pin.slice(0, -1);
        updateDots();
        return;
      }
      if (/^\d$/.test(String(k)) && pin.length < 4) {
        pin += String(k);
        updateDots();
      }
      if (pin.length === 4) submitPin();
    }

    function submitPin() {
      if (ProfileManager.verifyPin(profileId, pin)) {
        removeKeyListener();
        closeModal();
        enterProfile(profileId);
      } else {
        attempts++;
        pin = '';
        updateDots();
        const errEl = document.getElementById('pin-error');
        if (errEl) {
          errEl.style.display = 'block';
          errEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Incorrect PIN${attempts > 1 ? ` (${attempts} attempts)` : ''}`;
        }
        // Shake the dots
        const display = document.getElementById('pin-display');
        if (display) {
          display.style.animation = 'none';
          display.offsetHeight; // reflow
          display.style.animation = 'shake .4s ease';
        }
      }
    }

    // On-screen pad
    document.querySelectorAll('.pin-key:not(.pin-key-blank)').forEach(btn => {
      btn.addEventListener('click', () => handleKey(btn.dataset.k));
    });

    // Keyboard support
    removeKeyListener();
    pinKeyListener = (e) => {
      if (e.key === 'Enter' && pin.length === 4) { submitPin(); return; }
      handleKey(e.key);
    };
    document.addEventListener('keydown', pinKeyListener);
  }

  function removeKeyListener() {
    if (pinKeyListener) {
      document.removeEventListener('keydown', pinKeyListener);
      pinKeyListener = null;
    }
  }

  // ══════════════════════════════════════════════════════════
  //  CREATE PROFILE
  // ══════════════════════════════════════════════════════════
  function showCreateProfile() {
    let pin = '';
    showModal(`
      <h2 class="modal-title"><i class="fa-solid fa-user-plus" style="color:var(--blue);margin-right:8px;"></i>Create Profile</h2>
      <p class="modal-sub">Choose a name and set a 4-digit PIN to protect your profile.</p>
      <div class="form-group">
        <label class="form-label">Your Name</label>
        <input type="text" class="form-input" id="new-name" placeholder="Enter your name" maxlength="30" autocomplete="off">
      </div>
      <div class="form-group">
        <label class="form-label">4-Digit PIN</label>
        <div class="pin-display" id="pin-display" style="justify-content:flex-start;gap:10px;margin-bottom:10px;">
          <div class="pin-dot" id="pd0"></div>
          <div class="pin-dot" id="pd1"></div>
          <div class="pin-dot" id="pd2"></div>
          <div class="pin-dot" id="pd3"></div>
        </div>
        <div class="pin-pad" style="max-width:200px;">
          ${[1,2,3,4,5,6,7,8,9,'',0,'⌫'].map(k => {
            if (k === '') return `<div class="pin-key pin-key-blank"></div>`;
            return `<button type="button" class="pin-key" data-k="${k}">${k}</button>`;
          }).join('')}
        </div>
      </div>
      <div id="create-error" class="form-error" style="display:none;"></div>
      <button class="btn btn-primary btn-block btn-lg" id="create-submit">
        <i class="fa-solid fa-check"></i> Create Profile
      </button>
    `);

    function updateDots() {
      for (let i = 0; i < 4; i++) {
        const dot = document.getElementById(`pd${i}`);
        if (dot) dot.classList.toggle('filled', i < pin.length);
      }
    }

    document.querySelectorAll('.pin-key:not(.pin-key-blank)').forEach(btn => {
      btn.addEventListener('click', () => {
        const k = btn.dataset.k;
        if (k === '⌫') { pin = pin.slice(0, -1); }
        else if (/^\d$/.test(k) && pin.length < 4) { pin += k; }
        updateDots();
      });
    });

    // Keyboard: digits only go to PIN when name field is not focused
    removeKeyListener();
    pinKeyListener = (e) => {
      const active = document.activeElement;
      const isNameField = active && active.id === 'new-name';
      if (isNameField) return;
      if (e.key === 'Backspace') { pin = pin.slice(0, -1); updateDots(); }
      else if (/^\d$/.test(e.key) && pin.length < 4) { pin += e.key; updateDots(); }
      else if (e.key === 'Enter') { document.getElementById('create-submit')?.click(); }
    };
    document.addEventListener('keydown', pinKeyListener);

    document.getElementById('create-submit').addEventListener('click', () => {
      const name = document.getElementById('new-name').value.trim();
      const errEl = document.getElementById('create-error');
      errEl.style.display = 'none';
      const result = ProfileManager.createProfile(name, pin);
      if (result.error) {
        errEl.style.display = 'block';
        errEl.textContent = result.error;
      } else {
        removeKeyListener();
        closeModal();
        renderProfileSlots();
      }
    });
  }

  // ══════════════════════════════════════════════════════════
  //  DELETE PROFILE
  // ══════════════════════════════════════════════════════════
  function confirmDelete(profileId) {
    const p = ProfileManager.getProfile(profileId);
    if (!p) return;
    showModal(`
      <h2 class="modal-title"><i class="fa-solid fa-trash" style="color:var(--red);margin-right:8px;"></i>Delete Profile</h2>
      <p class="confirm-text">
        Are you sure you want to delete <strong>${escHtml(p.name)}</strong>'s profile?
        All quiz history, exam scores, and progress will be permanently lost.
      </p>
      <div class="confirm-actions">
        <button class="btn btn-secondary btn-block" onclick="closeModal()">
          <i class="fa-solid fa-xmark"></i> Cancel
        </button>
        <button class="btn btn-danger btn-block" id="confirm-del">
          <i class="fa-solid fa-trash"></i> Delete
        </button>
      </div>
    `);
    document.getElementById('confirm-del').addEventListener('click', () => {
      ProfileManager.deleteProfile(profileId);
      closeModal();
      renderProfileSlots();
    });
  }

  // ══════════════════════════════════════════════════════════
  //  ENTER PROFILE / APP SCREEN
  // ══════════════════════════════════════════════════════════
  function enterProfile(profileId) {
    currentProfile = profileId;
    switchScreen('app-screen');
    updateSidebarProfile();
    updateTopbarProfile();
    bindNavigation();
    navigateTo('dashboard');
  }

  function updateSidebarProfile() {
    const p = ProfileManager.getProfile(currentProfile);
    if (!p) return;
    const initials = p.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const prog = p.progress;
    const examLine = prog.examsTaken > 0
      ? `Best: ${prog.bestScore.pct}% · ${prog.examsTaken} exam${prog.examsTaken > 1 ? 's' : ''}`
      : 'No exams yet';
    const sbProfile = document.getElementById('sb-profile');
    if (sbProfile) sbProfile.innerHTML = `
      <div class="sb-profile-inner">
        <div class="sb-av">${initials}</div>
        <div>
          <div class="sb-pname">${escHtml(p.name)}</div>
          <div class="sb-pmeta">${examLine}</div>
        </div>
      </div>
    `;
  }

  function updateTopbarProfile() {
    const p = ProfileManager.getProfile(currentProfile);
    if (!p) return;
    const initials = p.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    document.getElementById('tb-profile').innerHTML = `
      <div class="tb-profile-av" id="tb-switch-btn" title="Switch Profile">${initials}</div>
    `;
    document.getElementById('tb-switch-btn')?.addEventListener('click', showProfileScreen);
  }

  // ══════════════════════════════════════════════════════════
  //  NAVIGATION
  // ══════════════════════════════════════════════════════════
  function bindNavigation() {
    document.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => navigateTo(btn.dataset.tab));
    });
    document.getElementById('sb-switch')?.addEventListener('click', showProfileScreen);
  }

  function navigateTo(tab) {
    activeTab = tab;

    // Highlight sidebar + bottom nav
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    document.querySelectorAll('.bn-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    // Render the tab
    const content = document.getElementById('tab-content');
    content.innerHTML = '';
    content.id = 'tab-content'; // reset

    switch (tab) {
      case 'dashboard':  renderDashboard(); break;
      case 'study':      StudyGuide.render('tab-content', currentProfile); break;
      case 'signs':      SignsGallery.render('tab-content', currentProfile); break;
      case 'flashcards': Flashcards.render('tab-content', currentProfile); break;
      case 'quiz':       Quiz.render('tab-content', currentProfile); break;
      case 'exam':       Exam.render('tab-content', currentProfile); break;
    }

    // Scroll to top on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ══════════════════════════════════════════════════════════
  //  DASHBOARD
  // ══════════════════════════════════════════════════════════
  function renderDashboard() {
    const p = ProfileManager.getProfile(currentProfile);
    if (!p) return;
    const prog = p.progress;
    const modsRead = prog.modulesRead.length;
    const totalMods = PA_DATA.modules.length;
    const modPct = Math.round((modsRead / totalMods) * 100);
    const weakMods = ProfileManager.getWeakModules(currentProfile);
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

    const content = document.getElementById('tab-content');
    content.innerHTML = `
      <div class="dash-header">
        <div class="dash-greeting">${greeting}, ${escHtml(p.name.split(' ')[0])}.</div>
        <div class="dash-subline">
          ${prog.examsTaken === 0
            ? 'Start with the Study Guide, then practice with quizzes before taking your Mock Exam.'
            : `You've taken ${prog.examsTaken} exam${prog.examsTaken > 1 ? 's' : ''}. Keep it up!`}
        </div>
      </div>

      <!-- STATS ROW -->
      <div class="dash-stats">
        <div class="stat-card">
          <div class="stat-icon"><i class="fa-solid fa-book-open"></i></div>
          <div class="stat-val">${modsRead}<span style="font-size:18px;color:var(--gray-400);">/${totalMods}</span></div>
          <div class="stat-label">Modules Read</div>
          <div class="stat-bar"><div class="stat-bar-fill" style="width:${modPct}%"></div></div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fa-solid fa-layer-group"></i></div>
          <div class="stat-val">${prog.flashcardsStudied}</div>
          <div class="stat-label">Flashcards Studied</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fa-solid fa-pencil"></i></div>
          <div class="stat-val">${prog.quizzesTaken}</div>
          <div class="stat-label">Quizzes Taken</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fa-solid fa-graduation-cap"></i></div>
          <div class="stat-val">${prog.examsTaken > 0 ? `${prog.bestScore.pct}%` : '—'}</div>
          <div class="stat-label">Best Exam Score</div>
        </div>
      </div>

      <!-- LAST EXAM RESULT -->
      ${prog.lastScore ? `
        <div class="dash-exam-result ${prog.lastScore.passed ? 'pass' : 'fail'}">
          <div class="der-icon"><i class="fa-solid ${prog.lastScore.passed ? 'fa-circle-check' : 'fa-circle-xmark'}"></i></div>
          <div class="der-info">
            <div class="der-title">${prog.lastScore.passed ? 'Last Exam: PASSED' : 'Last Exam: Not Passed'}</div>
            <div class="der-sub">${prog.lastScore.score}/${prog.lastScore.total} correct · ${prog.lastScore.pct}%</div>
          </div>
          <div class="der-best">Best: ${prog.bestScore.pct}%</div>
        </div>
      ` : ''}

      <!-- WEAK AREAS -->
      ${weakMods.length > 0 ? `
        <div class="dash-weak">
          <div class="dash-weak-title"><i class="fa-solid fa-triangle-exclamation"></i> Focus Areas</div>
          <div class="weak-tags">
            ${weakMods.map(mId => {
              const mod = PA_DATA.modules.find(m => m.id === mId);
              return mod ? `<span class="weak-tag"><i class="fa-solid ${mod.icon}"></i> ${mod.title}</span>` : '';
            }).join('')}
          </div>
          <div class="dash-weak-note">These modules have lower quiz accuracy. Review the Study Guide, then practice with a filtered quiz.</div>
        </div>
      ` : ''}

      <!-- QUICK ACTIONS -->
      <div class="dash-section-title">Quick Actions</div>
      <div class="dash-actions">
        <button class="action-card" data-tab="study">
          <div class="action-icon"><i class="fa-solid fa-book-open"></i></div>
          <div class="action-label">Study Guide</div>
          <div class="action-sub">${modsRead} of ${totalMods} modules completed</div>
        </button>
        <button class="action-card" data-tab="signs">
          <div class="action-icon"><i class="fa-solid fa-sign-hanging"></i></div>
          <div class="action-label">Road Signs</div>
          <div class="action-sub">Browse all 163 signs</div>
        </button>
        <button class="action-card" data-tab="flashcards">
          <div class="action-icon"><i class="fa-solid fa-layer-group"></i></div>
          <div class="action-label">Flashcards</div>
          <div class="action-sub">109 flashcards with images</div>
        </button>
        <button class="action-card" data-tab="quiz">
          <div class="action-icon"><i class="fa-solid fa-pencil"></i></div>
          <div class="action-label">Practice Quiz</div>
          <div class="action-sub">${PA_DATA.questions.length} questions in the bank</div>
        </button>
        <button class="action-card featured-action" data-tab="exam">
          <div class="action-icon"><i class="fa-solid fa-graduation-cap"></i></div>
          <div>
            <div class="action-label">Take the Mock Exam</div>
            <div class="action-sub">18 questions · Need 15 correct to pass · PA format</div>
          </div>
        </button>
      </div>

      <!-- MODULE PROGRESS -->
      <div class="dash-section-title">Study Progress</div>
      <div class="dash-modules-list">
        ${PA_DATA.modules.map(mod => {
          const done = prog.modulesRead.includes(mod.id);
          return `
            <div class="dash-mod-row ${done ? 'done' : ''}">
              <div class="dash-mod-icon"><i class="fa-solid ${mod.icon}" style="color:${done ? 'var(--green)' : 'var(--gray-400)'}"></i></div>
              <div class="dash-mod-name">${mod.title}</div>
              <div class="dash-mod-status">
                ${done ? '<i class="fa-solid fa-circle-check"></i> Done' : '<i class="fa-regular fa-circle"></i> Not read'}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Wire up action card navigation
    content.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => navigateTo(btn.dataset.tab));
    });
  }

  // ══════════════════════════════════════════════════════════
  //  MODAL
  // ══════════════════════════════════════════════════════════
  window.showModal = function (html) {
    const overlay = document.getElementById('modal-overlay');
    const box = document.getElementById('modal-box');
    box.innerHTML = `
      <button class="modal-close" onclick="closeModal()" aria-label="Close">
        <i class="fa-solid fa-xmark"></i>
      </button>
      ${html}
    `;
    overlay.classList.add('open');

    // Add shake keyframe if not present
    if (!document.getElementById('shake-style')) {
      const s = document.createElement('style');
      s.id = 'shake-style';
      s.textContent = `@keyframes shake {
        0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)}
        40%{transform:translateX(8px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)}
      }`;
      document.head.appendChild(s);
    }

    // Close on overlay click
    overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
    // Close on Escape
    document.addEventListener('keydown', escapeHandler);
  };

  window.closeModal = function () {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('open');
    removeKeyListener();
    document.removeEventListener('keydown', escapeHandler);
  };

  function escapeHandler(e) {
    if (e.key === 'Escape') closeModal();
  }

  // ══════════════════════════════════════════════════════════
  //  HELPERS
  // ══════════════════════════════════════════════════════════
  function switchScreen(id) {
    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active');
      s.style.display = '';
    });
    const target = document.getElementById(id);
    target.classList.add('active');
    if (id === 'app-screen') {
      target.style.display = 'flex';
    } else {
      // Profile screen — scroll to top, ensure it sits above everything
      target.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }

  function escHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

})();
