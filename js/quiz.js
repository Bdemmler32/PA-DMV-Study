// ============================================================
//  PA DMV Study v02 — quiz.js
// ============================================================

const Quiz = (() => {
  let questions = [], idx = 0, score = 0, answered = false;
  let timer = null, timeLeft = 0, TIME_PER_Q = 30;
  let results = [];
  let cId, pId;

  const shuffle = a => [...a].sort(() => Math.random() - .5);

  function render(containerId, profileId) {
    cId = containerId; pId = profileId;
    const el = document.getElementById(cId);
    el.innerHTML = `
      <div class="quiz-setup">
        <h2><i class="fa-solid fa-pencil" style="color:var(--blue);margin-right:10px;"></i>Practice Quiz</h2>
        <p>Sharpen your knowledge with a timed, randomized quiz session.</p>
        <div class="quiz-setup-grid">
          <div>
            <div class="qso-label">Number of Questions</div>
            <div class="qso-btns" id="q-count">
              <button class="qso-btn active" data-v="10">10</button>
              <button class="qso-btn" data-v="20">20</button>
              <button class="qso-btn" data-v="30">30</button>
              <button class="qso-btn" data-v="all">All ${PA_DATA.questions.length}</button>
            </div>
          </div>
          <div>
            <div class="qso-label">Module Filter</div>
            <select id="q-module" class="qso-select">
              <option value="all">All Modules</option>
              ${PA_DATA.modules.map(m => `<option value="${m.id}"><i class="fa-solid ${m.icon}"></i> ${m.title}</option>`).join('')}
            </select>
          </div>
          <div>
            <div class="qso-label">Time Per Question</div>
            <div class="qso-btns" id="q-time">
              <button class="qso-btn" data-v="15">15s</button>
              <button class="qso-btn active" data-v="30">30s</button>
              <button class="qso-btn" data-v="60">60s</button>
              <button class="qso-btn" data-v="0">No Limit</button>
            </div>
          </div>
        </div>
        <button class="btn btn-primary btn-lg" id="start-quiz">
          <i class="fa-solid fa-play"></i> Start Quiz
        </button>
      </div>
    `;

    el.querySelectorAll('.qso-btns').forEach(grp => {
      grp.querySelectorAll('.qso-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          grp.querySelectorAll('.qso-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    });

    document.getElementById('start-quiz').addEventListener('click', startQuiz);
  }

  function startQuiz() {
    const countVal = document.querySelector('#q-count .active').dataset.v;
    const modFilter = document.getElementById('q-module').value;
    TIME_PER_Q = parseInt(document.querySelector('#q-time .active').dataset.v);

    let pool = PA_DATA.questions;
    if (modFilter !== 'all') pool = pool.filter(q => q.module === modFilter);
    pool = shuffle(pool);
    if (countVal !== 'all') pool = pool.slice(0, parseInt(countVal));

    questions = pool; idx = 0; score = 0; results = []; answered = false;
    renderQuestion();
  }

  function renderQuestion() {
    clearInterval(timer);
    if (idx >= questions.length) { renderResults(); return; }
    answered = false;
    timeLeft = TIME_PER_Q;
    const q = questions[idx];
    const mod = PA_DATA.modules.find(m => m.id === q.module);
    const pct = (idx / questions.length) * 100;

    document.getElementById(cId).innerHTML = `
      <div class="quiz-header">
        <span class="quiz-q-counter"><i class="fa-solid fa-circle-question"></i> Q${idx+1} of ${questions.length}</span>
        <span class="quiz-score-badge">Score: ${score}</span>
        ${TIME_PER_Q > 0 ? `<span class="quiz-timer" id="q-timer">${timeLeft}s</span>` : ''}
      </div>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
      <div class="quiz-module-tag">
        ${mod ? `<i class="fa-solid ${mod.icon}"></i> ${mod.title}` : ''}
      </div>
      ${q.img ? `<div class="quiz-image-wrap">
        <img src="assets/${q.img}" alt="Sign image for this question" loading="lazy"
          onerror="this.style.display='none'">
      </div>` : ''}
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options" id="q-opts">
        ${q.options.map((opt, i) => `
          <button class="quiz-opt" data-i="${i}">${String.fromCharCode(65+i)}. ${opt}</button>
        `).join('')}
      </div>
      <div id="q-exp" class="hidden"></div>
      <button class="btn btn-primary quiz-next-btn hidden" id="q-next">
        ${idx + 1 >= questions.length ? 'View Results <i class="fa-solid fa-flag-checkered"></i>' : 'Next <i class="fa-solid fa-arrow-right"></i>'}
      </button>
    `;

    document.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.i), q));
    });

    if (TIME_PER_Q > 0) startTimer(q);
  }

  function startTimer(q) {
    const timerEl = () => document.getElementById('q-timer');
    timer = setInterval(() => {
      timeLeft--;
      const el = timerEl();
      if (el) {
        el.textContent = `${timeLeft}s`;
        if (timeLeft <= 5) el.classList.add('urgent');
      }
      if (timeLeft <= 0) { clearInterval(timer); if (!answered) selectAnswer(-1, q); }
    }, 1000);
  }

  function selectAnswer(chosen, q) {
    if (answered) return;
    answered = true;
    clearInterval(timer);
    const correct = chosen === q.answer;
    if (correct) score++;
    results.push({ q, chosen, correct });
    if (pId) ProfileManager.recordQuestion(pId, q.id, correct);

    document.querySelectorAll('.quiz-opt').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      else if (i === chosen) btn.classList.add('wrong');
    });

    const expEl = document.getElementById('q-exp');
    expEl.className = `quiz-exp ${correct ? 'correct-exp' : 'wrong-exp'}`;
    expEl.innerHTML = `<strong>${correct ? '<i class="fa-solid fa-circle-check"></i> Correct!' : chosen === -1 ? '<i class="fa-solid fa-clock"></i> Time\'s up!' : '<i class="fa-solid fa-circle-xmark"></i> Incorrect.'}</strong> ${q.exp}`;

    const nextBtn = document.getElementById('q-next');
    nextBtn.classList.remove('hidden');
    nextBtn.addEventListener('click', () => { idx++; renderQuestion(); });
  }

  function renderResults() {
    const el = document.getElementById(cId);
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    const pass = pct >= 83;
    if (pId) {
      const p = ProfileManager.getProfile(pId);
      ProfileManager.updateProgress(pId, { quizzesTaken: (p?.progress.quizzesTaken || 0) + 1 });
    }
    const wrong = results.filter(r => !r.correct);

    el.innerHTML = `
      <div class="quiz-results">
        <div class="qr-hero ${pass ? 'pass' : 'fail'}">
          <div class="qr-badge">${pass ? '🎉' : '📚'}</div>
          <h2>${pass ? 'Great Work!' : 'Keep Studying'}</h2>
          <div class="qr-pct">${pct}%</div>
          <p>${score} / ${total} correct — ${pass ? 'On track to pass!' : `Need ${Math.ceil(total * .83) - score} more correct to reach 83%.`}</p>
        </div>
        ${wrong.length > 0 ? `
          <div class="qr-review">
            <h3><i class="fa-solid fa-circle-xmark" style="color:var(--red);"></i> Review These (${wrong.length})</h3>
            ${wrong.map((r, i) => `
              <div class="qr-item">
                <div class="qr-item-q">
                  ${r.q.img ? `<img src="assets/${r.q.img}" alt="" onerror="this.style.display='none'">` : ''}
                  <span>${i+1}. ${r.q.q}</span>
                </div>
                <div class="qr-correct"><i class="fa-solid fa-check"></i> ${r.q.options[r.q.answer]}</div>
                <div class="qr-yours">${r.chosen >= 0 ? '<i class="fa-solid fa-xmark"></i> Your answer: ' + r.q.options[r.chosen] : '<i class="fa-solid fa-clock"></i> Time expired'}</div>
                <div class="qr-exp">${r.q.exp}</div>
              </div>
            `).join('')}
          </div>
        ` : `<p style="color:var(--green);font-weight:700;font-size:16px;text-align:center;padding:20px;">Perfect score! 🏆</p>`}
        <div class="qr-actions">
          <button class="btn btn-primary" id="quiz-again"><i class="fa-solid fa-rotate"></i> New Quiz</button>
        </div>
      </div>
    `;
    document.getElementById('quiz-again').addEventListener('click', () => render(cId, pId));
  }

  return { render };
})();
