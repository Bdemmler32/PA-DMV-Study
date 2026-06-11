// ============================================================
//  PA DMV Study v02 — study.js
//  Images displayed inline; click any image to open lightbox
// ============================================================

const StudyGuide = (() => {

  function render(cId, pId) {
    const el = document.getElementById(cId);
    const profile = ProfileManager.getProfile(pId);
    const read = new Set(profile?.progress.modulesRead || []);
    const total = PA_DATA.modules.length;
    const done = PA_DATA.modules.filter(m => read.has(m.id)).length;
    const pct = Math.round((done / total) * 100);

    el.innerHTML = `
      <div class="sg-page-title">
        <h2><i class="fa-solid fa-book-open" style="color:var(--blue);margin-right:10px;"></i>Study Guide</h2>
        <p>Work through each module before quizzing. All content is from the official PA Driver's Manual.</p>
      </div>
      <div class="sg-overall-bar">
        <div class="sg-bar-labels">
          <span>Modules Completed</span><span>${done} / ${total}</span>
        </div>
        <div class="sg-bar-track"><div class="sg-bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="sg-grid" id="sg-grid"></div>
    `;

    const grid = document.getElementById('sg-grid');
    PA_DATA.modules.forEach(mod => {
      const isDone = read.has(mod.id);
      const card = document.createElement('div');
      card.className = `sg-mod-card ${isDone ? 'done' : ''}`;
      card.innerHTML = `
        <div class="sg-mod-icon-wrap"><i class="fa-solid ${mod.icon}"></i></div>
        <div class="sg-mod-info">
          <div class="sg-mod-name">${mod.title}</div>
          <div class="sg-mod-desc">${mod.desc}</div>
          <div class="sg-mod-status">${isDone
            ? '<i class="fa-solid fa-circle-check"></i> Completed'
            : '<i class="fa-regular fa-circle"></i> Not started'}</div>
        </div>
        <button class="btn ${isDone ? 'btn-secondary' : 'btn-primary'} btn-sm">
          ${isDone
            ? '<i class="fa-solid fa-rotate-left"></i> Review'
            : 'Start <i class="fa-solid fa-arrow-right"></i>'}
        </button>
      `;
      card.querySelector('button').addEventListener('click', () => openModule(mod, cId, pId));
      grid.appendChild(card);
    });
  }

  function openModule(mod, cId, pId) {
    const el = document.getElementById(cId);
    el.innerHTML = `
      <button class="btn btn-ghost btn-sm sg-back-btn" id="sg-back">
        <i class="fa-solid fa-arrow-left"></i> Back to Modules
      </button>
      <div class="sg-reader-header">
        <div class="sg-reader-icon-wrap"><i class="fa-solid ${mod.icon}"></i></div>
        <div>
          <div class="sg-reader-title">${mod.title}</div>
          <div class="sg-reader-subtitle">${mod.sections.length} sections · Click any image to enlarge</div>
        </div>
      </div>
      <div class="sg-toc">
        <div class="sg-toc-label">In This Module</div>
        <ul>${mod.sections.map((s, i) => `<li><a href="#sg-sec-${i}">${s.heading}</a></li>`).join('')}</ul>
      </div>
      <div class="sg-reader" id="sg-reader-body"></div>
      <button class="btn btn-success sg-complete-btn" id="sg-complete">
        <i class="fa-solid fa-circle-check"></i> Mark Module Complete
      </button>
    `;

    document.getElementById('sg-back').addEventListener('click', () => render(cId, pId));

    const body = document.getElementById('sg-reader-body');
    mod.sections.forEach((section, i) => {
      const sec = document.createElement('div');
      sec.className = 'sg-section';
      sec.id = `sg-sec-${i}`;

      let imgHTML = '';
      if (section.imgs && section.imgs.length > 0) {
        imgHTML = `<div class="sg-img-row">
          ${section.imgs.map(src => {
            const name = src.split('/').pop().replace(/_/g,' ').replace('.png','');
            return `
            <div class="sg-img-item">
              <img src="assets/${src}" alt="${name}" loading="lazy"
                class="sg-sign-thumb"
                data-src="assets/${src}" data-name="${name}"
                onerror="this.parentElement.style.display='none'">
              <p>${name}</p>
            </div>`;
          }).join('')}
        </div>`;
      }

      sec.innerHTML = `
        <div class="sg-section-heading">
          <i class="fa-solid fa-bookmark" style="color:var(--gold);font-size:16px;"></i>
          ${section.heading}
        </div>
        <div class="sg-section-body">${section.body}${imgHTML}</div>
      `;
      body.appendChild(sec);
    });

    // Wire up image lightbox clicks
    body.querySelectorAll('.sg-sign-thumb').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        openImageLightbox(img.dataset.src, img.dataset.name);
      });
    });

    // Complete button
    const profile = ProfileManager.getProfile(pId);
    const alreadyDone = profile?.progress.modulesRead.includes(mod.id);
    const completeBtn = document.getElementById('sg-complete');
    if (alreadyDone) {
      completeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Already Completed';
      completeBtn.disabled = true;
      completeBtn.classList.replace('btn-success', 'btn-secondary');
    }
    completeBtn.addEventListener('click', () => {
      if (pId) ProfileManager.markModuleRead(pId, mod.id);
      completeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Completed!';
      completeBtn.disabled = true;
      completeBtn.classList.replace('btn-success', 'btn-secondary');
      setTimeout(() => render(cId, pId), 900);
    });

    document.getElementById('main-content')?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
  }

  function openImageLightbox(src, name) {
    showModal(`
      <div style="text-align:center;padding:8px 0;">
        <img src="${src}" alt="${name}"
          style="max-width:100%;max-height:70vh;object-fit:contain;border-radius:10px;display:block;margin:0 auto 14px;"
          onerror="this.style.display='none'">
        <p style="font-size:13px;font-weight:700;color:var(--gray-700);text-transform:capitalize;">${name}</p>
        <button class="btn btn-secondary btn-sm" style="margin-top:10px;" onclick="closeModal()">
          <i class="fa-solid fa-xmark"></i> Close
        </button>
      </div>
    `);
  }

  return { render };
})();
