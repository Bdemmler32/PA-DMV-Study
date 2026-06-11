// ============================================================
//  PA DMV Study v04 — exam.js
//  18-question mock exam · localStorage persistence · Reset
// ============================================================

const Exam = (() => {
  const TOTAL = 18, PASS = 15;
  let questions = [], answers = {}, currentQ = 0;
  let cId, pId;

  const shuffle = a => [...a].sort(() => Math.random() - .5);

  // ── PERSISTENCE ─────────────────────────────────────────
  function saveKey()   { return `pa_dmv_exam_state_${pId}`; }
  function saveState() {
    if (!pId) return;
    localStorage.setItem(saveKey(), JSON.stringify({
      questions: questions.map(q => q.id),
      answers, currentQ
    }));
  }
  function loadState() {
    if (!pId) return null;
    try { return JSON.parse(localStorage.getItem(saveKey())); } catch { return null; }
  }
  function clearState() {
    if (pId) localStorage.removeItem(saveKey());
  }

  // ── ENTRY POINT ─────────────────────────────────────────
  function render(containerId, profileId) {
    cId = containerId; pId = profileId;
    const saved = loadState();
    if (saved && saved.questions?.length) {
      showResumePrompt(saved);
    } else {
      renderIntro();
    }
  }

  function showResumePrompt(saved) {
    const answeredCount = Object.keys(saved.answers).length;
    document.getElementById(cId).innerHTML = `
      <div class="exam-intro">
        <div class="exam-intro-badge"><i class="fa-solid fa-graduation-cap"></i> Official Format</div>
        <h2>PA DMV Mock Exam</h2>
        <div style="background:var(--blue-pale);border:1.5px solid var(--blue-light);border-radius:var(--radius);padding:18px 20px;margin-bottom:22px;text-align:left;">
          <div style="font-weight:700;color:var(--blue-dark);margin-bottom:6px;">
            <i class="fa-solid fa-clock-rotate-left"></i> Exam in progress
          </div>
          <div style="font-size:14px;color:var(--gray-700);">
            Question ${saved.currentQ + 1} of ${TOTAL} · ${answeredCount} of ${TOTAL} answered
          </div>
        </div>
        <div style="display:flex;gap:10px;margin-bottom:20px;">
          <button class="btn btn-primary btn-lg" style="flex:1;" id="exam-resume">
            <i class="fa-solid fa-play"></i> Resume Exam
          </button>
          <button class="btn btn-ghost" id="exam-discard">
            <i class="fa-solid fa-trash"></i> Discard &amp; New
          </button>
        </div>
      </div>
    `;
    document.getElementById('exam-resume').addEventListener('click', () => restoreState(saved));
    document.getElementById('exam-discard').addEventListener('click', () => { clearState(); renderIntro(); });
  }

  function restoreState(saved) {
    const qMap = Object.fromEntries(PA_DATA.questions.map(q => [q.id, q]));
    questions = saved.questions.map(id => qMap[id]).filter(Boolean);
    answers   = saved.answers || {};
    currentQ  = saved.currentQ || 0;
    renderQuestion();
  }

  function renderIntro() {
    document.getElementById(cId).innerHTML = `
      <div class="exam-intro">
        <div class="exam-intro-badge"><i class="fa-solid fa-graduation-cap"></i> Official Format</div>
        <h2>PA DMV Mock Exam</h2>
        <p class="sub">Simulates the real Pennsylvania written knowledge test.</p>
        <div class="exam-rules">
          <div class="er-rule"><span class="er-val">18</span><span class="er-label">Questions</span></div>
          <div class="er-rule"><span class="er-val">15</span><span class="er-label">To Pass (83%)</span></div>
          <div class="er-rule"><span class="er-val">All</span><span class="er-label">Topics</span></div>
          <div class="er-rule"><span class="er-val">No</span><span class="er-label">Time Limit</span></div>
        </div>
        <ul class="exam-tips-list">
          <li>Questions drawn from all topic areas, weighted by importance</li>
          <li>Answer all 18 before submitting for your score</li>
          <li>Need 15 correct (83%) to pass — same as the real PA test</li>
          <li>Your progress is saved automatically — close and resume any time</li>
          <li>Use the question map to jump between questions before submitting</li>
        </ul>
        <button class="btn btn-primary btn-lg btn-block" id="exam-start">
          <i class="fa-solid fa-play"></i> Begin Exam
        </button>
      </div>
    `;
    document.getElementById('exam-start').addEventListener('click', startExam);
  }

  function startExam() {
    const targets = { signals:3, signs:4, laws:4, speed:2, safe:2, dui:1, parking:1, roadtest:1 };
    const pool = {};
    PA_DATA.modules.forEach(m => {
      pool[m.id] = shuffle(PA_DATA.questions.filter(q => q.module === m.id));
    });
    questions = [];
    Object.entries(targets).forEach(([mod, count]) => {
      questions.push(...(pool[mod] || []).slice(0, count));
    });
    if (questions.length < TOTAL) {
      const used = new Set(questions.map(q => q.id));
      const extra = shuffle(PA_DATA.questions.filter(q => !used.has(q.id)));
      questions.push(...extra.slice(0, TOTAL - questions.length));
    }
    questions = shuffle(questions).slice(0, TOTAL);
    answers = {}; currentQ = 0;
    clearState();
    renderQuestion();
  }

  function renderQuestion() {
    saveState();
    const el = document.getElementById(cId);
    const q = questions[currentQ];
    const mod = PA_DATA.modules.find(m => m.id === q.module);
    const totalAnswered = Object.keys(answers).length;

    el.innerHTML = `
      <div class="exam-header">
        <div>
          <div class="exam-q-num"><i class="fa-solid fa-circle-question"></i> Question ${currentQ+1} of ${TOTAL}</div>
          ${mod ? `<div style="font-size:12px;color:var(--gray-500);margin-top:2px;"><i class="fa-solid ${mod.icon}"></i> ${mod.title}</div>` : ''}
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="exam-answered-badge"><i class="fa-solid fa-check-double"></i> ${totalAnswered}/${TOTAL}</div>
          <button class="btn btn-ghost btn-sm" id="exam-reset-btn" title="Reset exam">
            <i class="fa-solid fa-rotate-left"></i>
          </button>
        </div>
      </div>
      <div class="exam-progress-dots">
        ${questions.map((_, i) => `
          <div class="epd ${answers[i] !== undefined ? 'answered' : ''} ${i === currentQ ? 'current' : ''}"
            title="Q${i+1}" data-qi="${i}"></div>
        `).join('')}
      </div>
      ${q.img ? `<div style="margin-bottom:16px;">
        <img src="assets/${q.img}" alt="Sign for question" loading="lazy"
          style="max-height:120px;max-width:180px;object-fit:contain;border-radius:8px;border:1.5px solid var(--gray-200);background:white;padding:8px;"
          onerror="this.style.display='none'">
      </div>` : ''}
      <div class="exam-question">${q.q}</div>
      <div class="exam-options">
        ${q.options.map((opt, i) => `
          <button class="exam-opt ${answers[currentQ] === i ? 'selected' : ''}" data-i="${i}">
            <span class="opt-letter">${String.fromCharCode(65+i)}</span>
            ${opt}
          </button>
        `).join('')}
      </div>
      <div class="exam-nav">
        <button class="btn btn-ghost btn-sm" id="exam-prev" ${currentQ===0?'disabled':''}>
          <i class="fa-solid fa-arrow-left"></i> Prev
        </button>
        <div class="exam-nav-center">
          <button class="btn btn-ghost btn-sm" id="exam-jt">
            <i class="fa-solid fa-map"></i> Map
          </button>
        </div>
        ${currentQ < TOTAL-1
          ? `<button class="btn btn-primary btn-sm" id="exam-next">Next <i class="fa-solid fa-arrow-right"></i></button>`
          : `<button class="btn btn-success btn-sm" id="exam-submit" ${totalAnswered < TOTAL ? 'disabled' : ''}>
              Submit <i class="fa-solid fa-flag-checkered"></i>
             </button>`
        }
      </div>
      <div id="exam-map" class="exam-jump-map hidden">
        <div class="ejm-grid">
          ${questions.map((_, i) => `
            <button class="ejm-btn ${answers[i] !== undefined ? 'answered' : ''} ${i === currentQ ? 'current' : ''}" data-qi="${i}">${i+1}</button>
          `).join('')}
        </div>
        <div class="ejm-legend">
          <span class="ld ans"></span>Answered &nbsp;
          <span class="ld cur"></span>Current &nbsp;
          <span class="ld"></span>Unanswered
        </div>
      </div>
      ${totalAnswered < TOTAL && currentQ === TOTAL-1
        ? `<p class="exam-warning"><i class="fa-solid fa-triangle-exclamation"></i> Answer all ${TOTAL} questions before submitting. ${TOTAL - totalAnswered} remaining.</p>`
        : ''}
    `;

    el.querySelectorAll('.exam-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        answers[currentQ] = parseInt(btn.dataset.i);
        renderQuestion();
      });
    });
    el.querySelectorAll('.epd').forEach(dot => {
      dot.addEventListener('click', () => { currentQ = parseInt(dot.dataset.qi); renderQuestion(); });
    });
    document.getElementById('exam-prev')?.addEventListener('click', () => { currentQ--; renderQuestion(); });
    document.getElementById('exam-next')?.addEventListener('click', () => { currentQ++; renderQuestion(); });
    document.getElementById('exam-submit')?.addEventListener('click', submitExam);
    document.getElementById('exam-jt')?.addEventListener('click', () => {
      document.getElementById('exam-map').classList.toggle('hidden');
    });
    el.querySelectorAll('.ejm-btn').forEach(btn => {
      btn.addEventListener('click', () => { currentQ = parseInt(btn.dataset.qi); renderQuestion(); });
    });
    document.getElementById('exam-reset-btn')?.addEventListener('click', confirmReset);
  }

  function confirmReset() {
    showModal(`
      <h2 class="modal-title"><i class="fa-solid fa-rotate-left" style="color:var(--orange);margin-right:8px;"></i>Reset Exam?</h2>
      <p class="confirm-text">Your current exam progress will be lost. You'll return to the start screen.</p>
      <div class="confirm-actions">
        <button class="btn btn-secondary btn-block" onclick="closeModal()">Cancel</button>
        <button class="btn btn-danger btn-block" id="confirm-exam-reset">Reset</button>
      </div>
    `);
    document.getElementById('confirm-exam-reset').addEventListener('click', () => {
      closeModal();
      clearState();
      render(cId, pId);
    });
  }

  function submitExam() {
    clearState();
    let score = 0;
    questions.forEach((q, i) => { if (answers[i] === q.answer) score++; });
    const passed = score >= PASS;
    const pct = Math.round((score / TOTAL) * 100);
    if (pId) ProfileManager.recordExam(pId, score, TOTAL);
    renderResults(score, pct, passed);
  }

  function renderResults(score, pct, passed) {
    document.getElementById(cId).innerHTML = `
      <div class="exam-results">
        <div class="er-hero ${passed ? 'pass' : 'fail'}">
          <div class="er-emoji">${passed ? '🎉' : '📖'}</div>
          <h2>${passed ? 'You Passed!' : 'Not Quite Yet'}</h2>
          <div class="er-score">${score}/${TOTAL}</div>
          <div class="er-pct">${pct}%</div>
          <p>${passed
            ? 'You met the 83% passing threshold. Great work — you\'re ready!'
            : `You need ${PASS - score} more correct to pass. Review the explanations below.`
          }</p>
        </div>
        <div class="er-breakdown">
          <h3><i class="fa-solid fa-list-check"></i> All Questions</h3>
          ${questions.map((q, i) => {
            const chosen = answers[i];
            const ok = chosen === q.answer;
            const mod = PA_DATA.modules.find(m => m.id === q.module);
            return `
              <div class="er-bd-item ${ok ? 'bd-ok' : 'bd-no'}">
                <div class="er-bd-header">
                  <span class="er-bd-num">${ok ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-solid fa-circle-xmark"></i>'} Q${i+1}</span>
                  <span class="er-bd-mod">${mod ? `<i class="fa-solid ${mod.icon}"></i> ${mod.title}` : ''}</span>
                </div>
                ${q.img ? `<div style="margin-bottom:8px;"><img src="assets/${q.img}" alt="" style="max-height:60px;object-fit:contain;border-radius:6px;border:1px solid var(--gray-200);background:white;padding:4px;" onerror="this.style.display='none'"></div>` : ''}
                <div class="er-bd-q">${q.q}</div>
                ${!ok ? `<div class="er-bd-answers">
                  <div class="bd-yours">Your answer: ${chosen >= 0 ? q.options[chosen] : 'Not answered'}</div>
                  <div class="bd-correct-ans"><i class="fa-solid fa-check"></i> Correct: ${q.options[q.answer]}</div>
                </div>` : ''}
                <div class="er-bd-exp">${q.exp}</div>
              </div>
            `;
          }).join('')}
        </div>
        <div class="er-actions">
          <button class="btn btn-primary" id="exam-retake"><i class="fa-solid fa-rotate"></i> New Exam</button>
          <button class="btn btn-secondary" id="exam-study"><i class="fa-solid fa-book-open"></i> Study Guide</button>
        </div>
      </div>
    `;
    document.getElementById('exam-retake').addEventListener('click', () => render(cId, pId));
    document.getElementById('exam-study').addEventListener('click', () => {
      document.querySelector('[data-tab="study"]')?.click();
    });
  }

  return { render };
})();
