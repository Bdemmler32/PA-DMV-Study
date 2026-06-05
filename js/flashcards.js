// ============================================================
//  flashcards.js — Flashcard study mode
// ============================================================

const Flashcards = (() => {
  let cards = [];
  let idx = 0;
  let flipped = false;
  let known = new Set();
  let skipped = new Set();
  let containerId, profileId;

  function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  function render(cId, pId) {
    containerId = cId;
    profileId = pId;
    cards = shuffle(PA_DATA.flashcards);
    idx = 0;
    flipped = false;
    known = new Set();
    skipped = new Set();
    renderCard();
  }

  function renderCard() {
    const el = document.getElementById(containerId);
    if (idx >= cards.length) {
      renderSummary();
      return;
    }
    const card = cards[idx];
    const progress = `${idx + 1} / ${cards.length}`;
    el.innerHTML = `
      <div class="fc-header">
        <h2>Flashcards</h2>
        <div class="fc-progress-text">${progress}</div>
      </div>
      <div class="fc-progress-track">
        <div class="fc-progress-fill" style="width:${((idx)/cards.length)*100}%"></div>
      </div>
      <div class="fc-stats">
        <span class="fc-stat known">✓ Know it: ${known.size}</span>
        <span class="fc-stat skipped">⟳ Review: ${skipped.size}</span>
        <span class="fc-stat remaining">Remaining: ${cards.length - idx}</span>
      </div>
      <div class="fc-card ${flipped ? 'fc-flipped' : ''}" id="fc-card">
        <div class="fc-card-inner">
          <div class="fc-front">
            <div class="fc-label">Question</div>
            <div class="fc-text">${card.front}</div>
            <div class="fc-tap-hint">Tap to reveal answer</div>
          </div>
          <div class="fc-back">
            <div class="fc-label">Answer</div>
            <div class="fc-text">${card.back}</div>
          </div>
        </div>
      </div>
      <div class="fc-actions ${flipped ? '' : 'fc-actions-hidden'}" id="fc-actions">
        <button class="btn btn-danger" id="fc-skip">⟳ Review Again</button>
        <button class="btn btn-success" id="fc-known">✓ Got It!</button>
      </div>
      <div class="fc-flip-area ${flipped ? 'fc-flip-hidden' : ''}" id="fc-flip-area">
        <button class="btn btn-primary fc-flip-btn">Flip Card</button>
      </div>
    `;

    document.getElementById('fc-card').addEventListener('click', flipCard);
    const flipBtn = el.querySelector('.fc-flip-btn');
    if (flipBtn) flipBtn.addEventListener('click', flipCard);

    const skipBtn = document.getElementById('fc-skip');
    const knownBtn = document.getElementById('fc-known');
    if (skipBtn) skipBtn.addEventListener('click', () => markCard(false));
    if (knownBtn) knownBtn.addEventListener('click', () => markCard(true));
  }

  function flipCard() {
    flipped = true;
    const card = document.getElementById('fc-card');
    if (card) card.classList.add('fc-flipped');
    const actions = document.getElementById('fc-actions');
    if (actions) actions.classList.remove('fc-actions-hidden');
    const flipArea = document.getElementById('fc-flip-area');
    if (flipArea) flipArea.classList.add('fc-flip-hidden');
  }

  function markCard(isKnown) {
    if (isKnown) known.add(idx);
    else skipped.add(idx);
    idx++;
    flipped = false;
    renderCard();
  }

  function renderSummary() {
    const el = document.getElementById(containerId);
    const total = cards.length;
    const knownCount = known.size;
    const pct = Math.round((knownCount / total) * 100);

    if (profileId) {
      const p = ProfileManager.getProfile(profileId);
      ProfileManager.updateProgress(profileId, {
        flashcardsStudied: (p.progress.flashcardsStudied || 0) + total
      });
    }

    el.innerHTML = `
      <div class="fc-summary">
        <div class="fc-summary-icon">${pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚'}</div>
        <h2>Round Complete!</h2>
        <div class="fc-score-ring">
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" stroke-width="10"/>
            <circle cx="60" cy="60" r="50" fill="none" stroke="#003087" stroke-width="10"
              stroke-dasharray="${2 * Math.PI * 50}"
              stroke-dashoffset="${2 * Math.PI * 50 * (1 - pct/100)}"
              stroke-linecap="round"
              transform="rotate(-90 60 60)"/>
            <text x="60" y="65" text-anchor="middle" font-size="22" font-weight="700" fill="#003087">${pct}%</text>
          </svg>
        </div>
        <p>${knownCount} of ${total} cards mastered</p>
        ${skipped.size > 0 ? `<p class="fc-review-note">You have ${skipped.size} card${skipped.size > 1 ? 's' : ''} to review.</p>` : '<p class="fc-all-done">You knew all the cards! Great work.</p>'}
        <div class="fc-summary-actions">
          ${skipped.size > 0 ? `<button class="btn btn-primary" id="fc-retry-skipped">Review Missed Cards</button>` : ''}
          <button class="btn btn-secondary" id="fc-restart">Shuffle & Restart</button>
        </div>
      </div>
    `;

    const retryBtn = document.getElementById('fc-retry-skipped');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        cards = shuffle([...skipped].map(i => cards[i]));
        idx = 0; flipped = false; known = new Set(); skipped = new Set();
        renderCard();
      });
    }
    document.getElementById('fc-restart').addEventListener('click', () => render(containerId, profileId));
  }

  return { render };
})();
