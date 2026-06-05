// ============================================================
//  study.js — Study Guide module reader
// ============================================================

const StudyGuide = (() => {

  function render(containerId, profileId) {
    const el = document.getElementById(containerId);
    el.innerHTML = '';

    const profile = ProfileManager.getProfile(profileId);
    const read = new Set(profile ? profile.progress.modulesRead : []);

    // Header
    const header = document.createElement('div');
    header.className = 'sg-header';
    header.innerHTML = `
      <h2>Study Guide</h2>
      <p class="sg-subtitle">Work through each module before taking quizzes. Track your reading progress below.</p>
    `;
    el.appendChild(header);

    // Progress bar
    const total = PA_DATA.modules.length;
    const done = PA_DATA.modules.filter(m => read.has(m.id)).length;
    const pct = Math.round((done / total) * 100);
    const progressEl = document.createElement('div');
    progressEl.className = 'sg-overall-progress';
    progressEl.innerHTML = `
      <div class="sg-progress-label">
        <span>Modules Completed</span>
        <span>${done} / ${total}</span>
      </div>
      <div class="sg-progress-track">
        <div class="sg-progress-fill" style="width:${pct}%"></div>
      </div>
    `;
    el.appendChild(progressEl);

    // Module grid
    const grid = document.createElement('div');
    grid.className = 'sg-grid';

    PA_DATA.modules.forEach((mod, i) => {
      const isRead = read.has(mod.id);
      const card = document.createElement('div');
      card.className = `sg-module-card ${isRead ? 'sg-read' : ''}`;
      card.innerHTML = `
        <div class="sg-module-icon">${mod.icon}</div>
        <div class="sg-module-info">
          <h3>${mod.title}</h3>
          <p>${mod.description}</p>
          <span class="sg-status">${isRead ? '✓ Completed' : 'Not started'}</span>
        </div>
        <button class="btn btn-primary sg-open-btn" data-mod="${mod.id}">
          ${isRead ? 'Review' : 'Start →'}
        </button>
      `;
      card.querySelector('.sg-open-btn').addEventListener('click', () => {
        openModule(mod, profileId, containerId);
      });
      grid.appendChild(card);
    });

    el.appendChild(grid);
  }

  function openModule(mod, profileId, containerId) {
    const el = document.getElementById(containerId);
    el.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.className = 'sg-reader';

    // Back button
    const back = document.createElement('button');
    back.className = 'btn btn-ghost sg-back';
    back.innerHTML = '← Back to Modules';
    back.addEventListener('click', () => render(containerId, profileId));
    wrapper.appendChild(back);

    // Module title
    const title = document.createElement('div');
    title.className = 'sg-reader-title';
    title.innerHTML = `<span class="sg-reader-icon">${mod.icon}</span><h2>${mod.title}</h2>`;
    wrapper.appendChild(title);

    // Table of contents
    const toc = document.createElement('div');
    toc.className = 'sg-toc';
    toc.innerHTML = `<h4>In this module:</h4><ul>${mod.sections.map((s,i) => `<li><a href="#section-${i}">${s.heading}</a></li>`).join('')}</ul>`;
    wrapper.appendChild(toc);

    // Sections
    mod.sections.forEach((section, i) => {
      const sec = document.createElement('div');
      sec.className = 'sg-section';
      sec.id = `section-${i}`;
      sec.innerHTML = `
        <h3>${section.heading}</h3>
        <div class="sg-section-body">${section.body}</div>
      `;
      wrapper.appendChild(sec);
    });

    // Mark complete button
    const completeBtn = document.createElement('button');
    completeBtn.className = 'btn btn-primary sg-complete-btn';
    completeBtn.textContent = '✓ Mark Module Complete';
    completeBtn.addEventListener('click', () => {
      if (profileId) {
        ProfileManager.markModuleRead(profileId, mod.id);
      }
      completeBtn.textContent = '✓ Completed!';
      completeBtn.disabled = true;
      completeBtn.classList.add('btn-success');
      setTimeout(() => render(containerId, profileId), 800);
    });

    wrapper.appendChild(completeBtn);
    el.appendChild(wrapper);
    el.scrollTop = 0;
  }

  return { render };
})();
