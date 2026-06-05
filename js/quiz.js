// ============================================================
//  quiz.js — Timed Practice Quiz
// ============================================================

const Quiz = (() => {
  let questions = [];
  let idx = 0;
  let score = 0;
  let answered = false;
  let timer = null;
  let timeLeft = 0;
  let TIME_PER_Q = 30;
  let containerId, profileId;
  let results = [];

  function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

  function render(cId, pId) {
    containerId = cId;
    profileId = pId;

    const el = document.getElementById(containerId);
    el.innerHTML = `
      <div class="quiz-setup">
        <h2>Practice Quiz</h2>
        <p>Test your knowledge with a timed practice session. Choose your options below.</p>
        <div class="quiz-setup-options">
          <div class="quiz-option-group">
            <label>Number of Questions</label>
            <div class="quiz-option-btns" id="q-count-btns">
              <button class="quiz-opt-btn active" data-val="10">10</button>
              <button class="quiz-opt-btn" data-val="20">20</button>
              <button class="quiz-opt-btn" data-val="30">30</button>
              <button class="quiz-opt-btn" data-val="all">All</button>
            </div>
          </div>
          <div class="quiz-option-group">
            <label>Module Filter</label>
            <select id="q-module-filter" class="quiz-select">
              <option value="all">All Modules</option>
              ${PA_DATA.modules.map(m => `<option value="${m.id}">${m.icon} ${m.title}</option>`).join('')}
            </select>
          </div>
          <div class="quiz-option-group">
            <label>Time Per Question</label>
            <div class="quiz-option-btns" id="q-time-btns">
              <button class="quiz-opt-btn" data-val="15">15s</button>
              <button class="quiz-opt-btn active" data-val="30">30s</button>
              <button class="quiz-opt-btn" data-val="60">60s</button>
              <button class="quiz-opt-btn" data-val="0">No limit</button>
            </div>
          </div>
        </div>
        <button class="btn btn-primary btn-large" id="start-quiz-btn">Start Quiz →</button>
      </div>
    `;

    // Option button toggling
    el.querySelectorAll('[id$="-btns"]').forEach(group => {
      group.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          group.querySelectorAll('.quiz-opt-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    });

    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
  }

  function startQuiz() {
    const countVal = document.querySelector('#q-count-btns .active').dataset.val;
    const moduleFilter = document.getElementById('q-module-filter').value;
    TIME_PER_Q = parseInt(document.querySelector('#q-time-btns .active').dataset.val);

    let pool = PA_DATA.questions;
    if (moduleFilter !== 'all') pool = pool.filter(q => q.module === moduleFilter);
    pool = shuffle(pool);
    if (countVal !== 'all') pool = pool.slice(0, parseInt(countVal));

    questions = pool;
    idx = 0;
    score = 0;
    results = [];
    answered = false;
    renderQuestion();
  }

  function renderQuestion() {
    clearTimeout(timer);
    if (idx >= questions.length) { renderResults(); return; }
    answered = false;
    timeLeft = TIME_PER_Q;

    const q = questions[idx];
    const el = document.getElementById(containerId);
    el.innerHTML = `
      <div class="quiz-header">
        <span class="quiz-counter">Q ${idx + 1} / ${questions.length}</span>
        <span class="quiz-score">Score: ${score}</span>
        ${TIME_PER_Q > 0 ? `<span class="quiz-timer" id="quiz-timer">${timeLeft}s</span>` : ''}
      </div>
      <div class="quiz-progress-track">
        <div class="quiz-progress-fill" style="width:${(idx/questions.length)*100}%"></div>
      </div>
      <div class="quiz-module-tag">${PA_DATA.modules.find(m=>m.id===q.module)?.icon || ''} ${PA_DATA.modules.find(m=>m.id===q.module)?.title || ''}</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options" id="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option-btn" data-idx="${i}">${opt}</button>
        `).join('')}
      </div>
      <div class="quiz-explanation hidden" id="quiz-exp"></div>
      <button class="btn btn-primary quiz-next hidden" id="quiz-next">Next Question →</button>
    `;

    el.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.idx)));
    });

    if (TIME_PER_Q > 0) startTimer();
  }

  function startTimer() {
    const timerEl = document.getElementById('quiz-timer');
    if (!timerEl) return;
    timer = setInterval(() => {
      timeLeft--;
      if (timerEl) {
        timerEl.textContent = `${timeLeft}s`;
        timerEl.className = 'quiz-timer' + (timeLeft <= 5 ? ' quiz-timer-urgent' : '');
      }
      if (timeLeft <= 0) {
        clearInterval(timer);
        if (!answered) selectAnswer(-1); // time's up = wrong
      }
    }, 1000);
  }

  function selectAnswer(chosen) {
    if (answered) return;
    answered = true;
    clearInterval(timer);

    const q = questions[idx];
    const correct = chosen === q.answer;
    if (correct) score++;

    results.push({ q, chosen, correct });
    if (profileId) ProfileManager.recordQuestionResult(profileId, q.id, correct);

    // Highlight answers
    document.querySelectorAll('.quiz-option-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('quiz-correct');
      else if (i === chosen) btn.classList.add('quiz-wrong');
    });

    // Show explanation
    const expEl = document.getElementById('quiz-exp');
    expEl.innerHTML = `<strong>${correct ? '✓ Correct!' : chosen === -1 ? '⏰ Time\'s up!' : '✗ Incorrect.'}</strong> ${q.exp}`;
    expEl.className = `quiz-explanation ${correct ? 'quiz-exp-correct' : 'quiz-exp-wrong'}`;

    const nextBtn = document.getElementById('quiz-next');
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = idx + 1 >= questions.length ? 'View Results' : 'Next Question →';
    nextBtn.addEventListener('click', () => { idx++; renderQuestion(); });
  }

  function renderResults() {
    const el = document.getElementById(containerId);
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    const pass = pct >= 83;

    if (profileId) {
      const p = ProfileManager.getProfile(profileId);
      ProfileManager.updateProgress(profileId, {
        quizzesTaken: (p.progress.quizzesTaken || 0) + 1
      });
    }

    const wrongOnes = results.filter(r => !r.correct);

    el.innerHTML = `
      <div class="quiz-results">
        <div class="quiz-results-badge ${pass ? 'pass' : 'fail'}">${pass ? '🎉 Great Work!' : '📚 Keep Studying'}</div>
        <h2>${score} / ${total} Correct</h2>
        <div class="quiz-pct ${pass ? 'pct-pass' : 'pct-fail'}">${pct}%</div>
        <p>${pass ? 'You\'re on track to pass the real exam!' : 'Review the explanations below and keep practicing.'}</p>
        
        ${wrongOnes.length > 0 ? `
          <div class="quiz-review-section">
            <h3>Questions to Review (${wrongOnes.length})</h3>
            ${wrongOnes.map((r, i) => `
              <div class="quiz-review-item">
                <div class="quiz-review-q">${i+1}. ${r.q.q}</div>
                <div class="quiz-review-correct">✓ Correct answer: ${r.q.options[r.q.answer]}</div>
                ${r.chosen >= 0 ? `<div class="quiz-review-yours">✗ Your answer: ${r.q.options[r.chosen]}</div>` : '<div class="quiz-review-yours">⏰ Time expired</div>'}
                <div class="quiz-review-exp">${r.q.exp}</div>
              </div>
            `).join('')}
          </div>
        ` : '<p class="quiz-perfect">Perfect score — flawless! 🏆</p>'}
        
        <div class="quiz-result-actions">
          <button class="btn btn-primary" id="quiz-retake">New Quiz</button>
        </div>
      </div>
    `;

    document.getElementById('quiz-retake').addEventListener('click', () => render(containerId, profileId));
  }

  return { render };
})();
