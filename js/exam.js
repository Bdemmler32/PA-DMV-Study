// ============================================================
//  exam.js — Full Mock Exam (18 questions, PA DMV rules)
// ============================================================

const Exam = (() => {
  let questions = [];
  let answers = {};
  let currentQ = 0;
  let started = false;
  let containerId, profileId;

  const TOTAL = 18;
  const PASS_SCORE = 15;

  function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

  function render(cId, pId) {
    containerId = cId;
    profileId = pId;
    started = false;
    renderIntro();
  }

  function renderIntro() {
    const el = document.getElementById(containerId);
    el.innerHTML = `
      <div class="exam-intro">
        <div class="exam-intro-badge">🏛️ Official Format</div>
        <h2>PA DMV Mock Exam</h2>
        <p class="exam-intro-sub">Simulates the real Pennsylvania written knowledge test.</p>
        <div class="exam-rules">
          <div class="exam-rule"><span class="exam-rule-num">18</span><span>Questions</span></div>
          <div class="exam-rule"><span class="exam-rule-num">15</span><span>To Pass (83%)</span></div>
          <div class="exam-rule"><span class="exam-rule-num">No</span><span>Time Limit</span></div>
          <div class="exam-rule"><span class="exam-rule-num">PA</span><span>Official Rules</span></div>
        </div>
        <ul class="exam-tips">
          <li>Questions are drawn randomly from all topic areas</li>
          <li>You must answer all 18 before seeing results</li>
          <li>You need 15 correct (83%) to pass — same as the real test</li>
          <li>Explanations are shown after you finish</li>
        </ul>
        <button class="btn btn-primary btn-large" id="exam-start">Begin Exam →</button>
      </div>
    `;
    document.getElementById('exam-start').addEventListener('click', startExam);
  }

  function startExam() {
    // Stratified sampling: ensure coverage across all modules
    const modules = PA_DATA.modules.map(m => m.id);
    const pool = {};
    modules.forEach(mid => {
      pool[mid] = shuffle(PA_DATA.questions.filter(q => q.module === mid));
    });

    // Distribute 18 questions across 7 modules proportionally
    const targets = { signs: 4, laws: 4, speed: 2, safe: 3, dui: 2, parking: 1, roadtest: 2 };
    questions = [];
    Object.entries(targets).forEach(([mid, count]) => {
      const qs = pool[mid] || [];
      questions.push(...qs.slice(0, count));
    });

    // If we're short (unlikely), fill from leftovers
    if (questions.length < TOTAL) {
      const used = new Set(questions.map(q => q.id));
      const extra = shuffle(PA_DATA.questions.filter(q => !used.has(q.id)));
      questions.push(...extra.slice(0, TOTAL - questions.length));
    }

    questions = shuffle(questions).slice(0, TOTAL);
    answers = {};
    currentQ = 0;
    started = true;
    renderQuestion();
  }

  function renderQuestion() {
    const el = document.getElementById(containerId);
    const q = questions[currentQ];
    const totalAnswered = Object.keys(answers).length;

    el.innerHTML = `
      <div class="exam-header">
        <div class="exam-header-left">
          <span class="exam-q-label">Question ${currentQ + 1} of ${TOTAL}</span>
          <span class="exam-module-tag">${PA_DATA.modules.find(m=>m.id===q.module)?.icon || ''} ${PA_DATA.modules.find(m=>m.id===q.module)?.title || ''}</span>
        </div>
        <div class="exam-header-right">
          <span class="exam-answered">${totalAnswered} / ${TOTAL} answered</span>
        </div>
      </div>
      <div class="exam-progress-track">
        ${questions.map((_, i) => `<div class="exam-prog-dot ${answers[i] !== undefined ? 'answered' : ''} ${i === currentQ ? 'current' : ''}"></div>`).join('')}
      </div>
      <div class="exam-question">${q.q}</div>
      <div class="exam-options" id="exam-options">
        ${q.options.map((opt, i) => `
          <button class="exam-option-btn ${answers[currentQ] === i ? 'exam-selected' : ''}" data-idx="${i}">${String.fromCharCode(65+i)}. ${opt}</button>
        `).join('')}
      </div>
      <div class="exam-nav">
        <button class="btn btn-ghost" id="exam-prev" ${currentQ === 0 ? 'disabled' : ''}>← Previous</button>
        <div class="exam-nav-center">
          <button class="btn btn-ghost exam-jump" id="exam-jump-toggle">Question Map</button>
        </div>
        ${currentQ < TOTAL - 1
          ? `<button class="btn btn-primary" id="exam-next">Next →</button>`
          : `<button class="btn btn-success" id="exam-submit" ${totalAnswered < TOTAL ? 'disabled title="Answer all questions first"' : ''}>Submit Exam</button>`
        }
      </div>
      <div class="exam-jump-map hidden" id="exam-jump-map">
        <div class="exam-jump-grid">
          ${questions.map((_, i) => `<button class="exam-jump-btn ${answers[i] !== undefined ? 'answered' : ''} ${i === currentQ ? 'current' : ''}" data-qi="${i}">${i+1}</button>`).join('')}
        </div>
        <p class="exam-jump-legend"><span class="legend-dot answered"></span>Answered &nbsp; <span class="legend-dot current"></span>Current &nbsp; <span class="legend-dot"></span>Unanswered</p>
      </div>
      ${totalAnswered < TOTAL && currentQ === TOTAL - 1 ? `<p class="exam-warning">⚠ Please answer all ${TOTAL} questions before submitting. Unanswered: ${TOTAL - totalAnswered}</p>` : ''}
    `;

    el.querySelectorAll('.exam-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        answers[currentQ] = parseInt(btn.dataset.idx);
        renderQuestion();
      });
    });

    document.getElementById('exam-prev')?.addEventListener('click', () => { currentQ--; renderQuestion(); });
    document.getElementById('exam-next')?.addEventListener('click', () => { currentQ++; renderQuestion(); });
    document.getElementById('exam-submit')?.addEventListener('click', submitExam);

    document.getElementById('exam-jump-toggle')?.addEventListener('click', () => {
      document.getElementById('exam-jump-map').classList.toggle('hidden');
    });

    el.querySelectorAll('.exam-jump-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentQ = parseInt(btn.dataset.qi);
        renderQuestion();
      });
    });
  }

  function submitExam() {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });

    const passed = score >= PASS_SCORE;
    const pct = Math.round((score / TOTAL) * 100);

    if (profileId) {
      ProfileManager.recordExamResult(profileId, score, TOTAL);
    }

    renderResults(score, pct, passed);
  }

  function renderResults(score, pct, passed) {
    const el = document.getElementById(containerId);
    el.innerHTML = `
      <div class="exam-results">
        <div class="exam-result-hero ${passed ? 'pass' : 'fail'}">
          <div class="exam-result-icon">${passed ? '🎉' : '📖'}</div>
          <h2>${passed ? 'You Passed!' : 'Not Quite Yet'}</h2>
          <div class="exam-big-score">${score} / ${TOTAL}</div>
          <div class="exam-big-pct">${pct}%</div>
          <p>${passed ? 'You met the 83% passing threshold. Great work!' : `You need ${PASS_SCORE - score} more correct to pass. Keep studying!`}</p>
        </div>
        
        <div class="exam-breakdown">
          <h3>Question Breakdown</h3>
          <div class="exam-breakdown-grid">
            ${questions.map((q, i) => {
              const chosen = answers[i];
              const correct = chosen === q.answer;
              return `
                <div class="exam-bd-item ${correct ? 'bd-correct' : 'bd-wrong'}">
                  <div class="exam-bd-header">
                    <span class="exam-bd-num">${correct ? '✓' : '✗'} Q${i+1}</span>
                    <span class="exam-bd-module">${PA_DATA.modules.find(m=>m.id===q.module)?.icon || ''}</span>
                  </div>
                  <div class="exam-bd-q">${q.q}</div>
                  ${!correct ? `
                    <div class="exam-bd-answers">
                      <div class="bd-yours">Your answer: ${chosen >= 0 ? q.options[chosen] : 'Not answered'}</div>
                      <div class="bd-correct">Correct: ${q.options[q.answer]}</div>
                    </div>
                  ` : ''}
                  <div class="exam-bd-exp">${q.exp}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        
        <div class="exam-result-actions">
          <button class="btn btn-primary" id="exam-retake">Take Another Exam</button>
          <button class="btn btn-secondary" id="exam-study">Back to Study Guide</button>
        </div>
      </div>
    `;

    document.getElementById('exam-retake').addEventListener('click', () => render(containerId, profileId));
    document.getElementById('exam-study').addEventListener('click', () => {
      document.querySelector('[data-tab="study"]').click();
    });
  }

  return { render };
})();
