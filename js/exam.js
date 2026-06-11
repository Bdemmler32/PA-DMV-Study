// ============================================================
//  PA DMV Study v02 — exam.js
//  18-question mock exam, 15 correct to pass (83%)
// ============================================================

const Exam = (() => {
  const TOTAL = 18, PASS = 15;
  let questions = [], answers = {}, currentQ = 0;
  let cId, pId;

  const shuffle = a => [...a].sort(() => Math.random() - .5);

  function render(containerId, profileId) {
    cId = containerId; pId = profileId;
    renderIntro();
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
          <li>Questions are drawn from all topic areas, weighted by importance</li>
          <li>You must answer all 18 before seeing your results</li>
          <li>Need 15 correct (83%) to pass — same as the real PA test</li>
          <li>Detailed explanations shown after submission</li>
          <li>Use the question map to navigate and review before submitting</li>
        </ul>
        <button class="btn btn-primary btn-lg btn-block" id="exam-start">
          <i class="fa-solid fa-play"></i> Begin Exam
        </button>
      </div>
    `;
    document.getElementById('exam-start').addEventListener('click', startExam);
  }

  function startExam() {
    // Stratified sampling across all modules
    const targets = {
      signals: 3, signs: 4, laws: 4, speed: 2, safe: 2, dui: 1, parking: 1, roadtest: 1
    };
    const pool = {};
    PA_DATA.modules.forEach(m => { pool[m.id] = shuffle(PA_DATA.questions.filter(q => q.module === m.id)); });

    questions = [];
    Object.entries(targets).forEach(([mod, count]) => {
      questions.push(...(pool[mod] || []).slice(0, count));
    });

    // Fill any gap
    if (questions.length < TOTAL) {
      const used = new Set(questions.map(q => q.id));
      const extra = shuffle(PA_DATA.questions.filter(q => !used.has(q.id)));
      questions.push(...extra.slice(0, TOTAL - questions.length));
    }
    questions = shuffle(questions).slice(0, TOTAL);
    answers = {};
    currentQ = 0;
    renderQuestion();
  }

  function renderQuestion() {
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
        <div class="exam-answered-badge"><i class="fa-solid fa-check-double"></i> ${totalAnswered}/${TOTAL} answered</div>
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
          <button class="btn btn-ghost btn-sm exam-jump-toggle" id="exam-jt">
            <i class="fa-solid fa-map"></i> Question Map
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

    // Option selection
    el.querySelectorAll('.exam-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        answers[currentQ] = parseInt(btn.dataset.i);
        renderQuestion();
      });
    });

    // Dot navigation
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
  }

  function submitExam() {
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
          <button class="btn btn-primary" id="exam-retake"><i class="fa-solid fa-rotate"></i> Take Another Exam</button>
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
