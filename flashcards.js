// ============================================================
//  PA DMV Study v02 — signs.js
//  Road Sign Gallery — clickable lightbox on every image
// ============================================================

const SignsGallery = (() => {
  let db = null;
  let activeFilter = 'all';
  let containerId, profileId;

  const CATEGORY_META = {
    regulatory: { label: 'Regulatory',  badgeClass: 'badge-reg',   icon: 'fa-circle-stop'      },
    warning:    { label: 'Warning',     badgeClass: 'badge-warn',  icon: 'fa-diamond'           },
    work_zone:  { label: 'Work Zone',   badgeClass: 'badge-wz',    icon: 'fa-helmet-safety'     },
    guide:      { label: 'Guide',       badgeClass: 'badge-guide', icon: 'fa-route'             },
    service:    { label: 'Service',     badgeClass: 'badge-svc',   icon: 'fa-circle-info'       },
    signals:    { label: 'Signals',     badgeClass: 'badge-sig',   icon: 'fa-traffic-light'     },
    scenes:     { label: 'Scenes',      badgeClass: 'badge-scene', icon: 'fa-car'               },
    diagrams:   { label: 'Diagrams',    badgeClass: 'badge-diag',  icon: 'fa-diagram-project'   },
  };

  const CAT_MAP = {
    regulatory_signs: 'regulatory',
    warning_signs:    'warning',
    work_zone_signs:  'work_zone',
    guide_signs:      'guide',
    service_signs:    'service',
    traffic_signals:  'signals',
    scenes:           'scenes',
    diagrams:         'diagrams',
  };

  function flattenDB(data) {
    const all = [];
    for (const [key, cat] of Object.entries(CAT_MAP)) {
      if (data[key]) data[key].forEach(s => all.push({ ...s, category: cat }));
    }
    return all;
  }

  async function loadDB() {
    if (db) return db;
    try {
      const res = await fetch('assets/sign-database.json');
      const data = await res.json();
      db = flattenDB(data);
    } catch {
      db = [];
    }
    return db;
  }

  async function render(cId, pId) {
    containerId = cId; profileId = pId;
    const el = document.getElementById(cId);
    el.innerHTML = `<div style="padding:40px;text-align:center;color:var(--gray-400);">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i><br><br>Loading signs…</div>`;
    const signs = await loadDB();
    renderPage(signs);
  }

  function renderPage(signs) {
    const el = document.getElementById(containerId);
    const counts = {};
    signs.forEach(s => { counts[s.category] = (counts[s.category] || 0) + 1; });

    el.innerHTML = `
      <div class="signs-page">
        <h2><i class="fa-solid fa-sign-hanging" style="color:var(--blue);margin-right:10px;"></i>Road Sign Gallery</h2>
        <p class="signs-sub">All ${signs.length} signs and diagrams from the Pennsylvania Driver's Manual.
          Click any sign to see its full meaning.</p>
        <div class="signs-filter" id="signs-filter">
          <button class="sign-filter-btn ${activeFilter==='all'?'active':''}" data-cat="all">
            All <span class="filter-count">${signs.length}</span>
          </button>
          ${Object.entries(CATEGORY_META).map(([cat, meta]) => {
            const n = counts[cat] || 0;
            if (!n) return '';
            return `<button class="sign-filter-btn ${activeFilter===cat?'active':''}" data-cat="${cat}">
              <i class="fa-solid ${meta.icon}"></i> ${meta.label}
              <span class="filter-count">${n}</span>
            </button>`;
          }).join('')}
        </div>
        <div class="signs-grid" id="signs-grid"></div>
      </div>
    `;

    renderGrid(signs);

    el.querySelectorAll('.sign-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        el.querySelectorAll('.sign-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.cat;
        renderGrid(activeFilter === 'all' ? signs : signs.filter(s => s.category === activeFilter));
      });
    });
  }

  function renderGrid(signs) {
    const grid = document.getElementById('signs-grid');
    if (!grid) return;
    grid.innerHTML = signs.map((sign, i) => `
      <div class="sign-card" data-idx="${i}" data-id="${sign.id}">
        <div class="sign-img-wrap">
          <img src="assets/${sign.file}" alt="${sign.name}" loading="lazy"
            onerror="this.parentElement.innerHTML='<div class=\\'sign-img-placeholder\\'><i class=\\'fa-solid fa-image\\'></i></div>'">
        </div>
        <div class="sign-card-name">${sign.name}</div>
        ${sign.mutcd_code && !sign.mutcd_code.startsWith('N/A') && !sign.mutcd_code.startsWith('MUTCD')
          ? `<div class="sign-card-cat">${sign.mutcd_code}</div>`
          : `<div class="sign-card-cat">${CATEGORY_META[sign.category]?.label || sign.category}</div>`}
      </div>
    `).join('');

    grid.querySelectorAll('.sign-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        showDetail(signs.find(s => s.id === id) || signs[parseInt(card.dataset.idx)]);
      });
    });
  }

  function showDetail(sign) {
    if (!sign) return;
    const meta = CATEGORY_META[sign.category] || {};
    const hasCode = sign.mutcd_code && !sign.mutcd_code.startsWith('N/A');
    showModal(`
      <div class="sign-detail">
        <div class="sign-detail-img-wrap" onclick="openFullImage('assets/${sign.file}','${sign.name.replace(/'/g,"\\'")}')">
          <img src="assets/${sign.file}" alt="${sign.name}" class="sign-detail-main-img"
            onerror="this.style.display='none'">
          <div class="sign-detail-zoom-btn"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
        </div>
        <h3>${sign.name}</h3>
        <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:14px;">
          <span class="sign-detail-cat-badge ${meta.badgeClass || ''}">
            <i class="fa-solid ${meta.icon || 'fa-circle-info'}"></i> ${meta.label || sign.category}
          </span>
          ${hasCode ? `<span class="sign-detail-cat-badge badge-sig">MUTCD ${sign.mutcd_code}</span>` : ''}
        </div>
        ${sign.shape ? `<p style="font-size:13px;color:var(--gray-500);margin-bottom:4px;"><strong>Shape:</strong> ${sign.shape}</p>` : ''}
        ${sign.color ? `<p style="font-size:13px;color:var(--gray-500);margin-bottom:12px;"><strong>Color:</strong> ${sign.color}</p>` : ''}
        <p class="sign-detail-meaning">${sign.meaning}</p>
        ${sign.chapter ? `<p class="sign-detail-meta"><i class="fa-solid fa-book"></i> PA Driver's Manual, Chapter ${sign.chapter}</p>` : ''}
        ${sign.tags ? `<p class="sign-detail-meta" style="margin-top:6px;"><i class="fa-solid fa-tags"></i> ${sign.tags.join(', ')}</p>` : ''}
        <button class="btn btn-primary btn-block" style="margin-top:16px;" onclick="closeModal()">
          <i class="fa-solid fa-check"></i> Got It
        </button>
      </div>
    `);
  }

  return { render };
})();

// Global helper so onclick attrs in modal can call it
function openFullImage(src, name) {
  showModal(`
    <div style="text-align:center;padding:8px 0;">
      <img src="${src}" alt="${name}"
        style="max-width:100%;max-height:75vh;object-fit:contain;border-radius:10px;display:block;margin:0 auto 14px;"
        onerror="this.style.display='none'">
      <p style="font-size:13px;font-weight:700;color:var(--gray-700);">${name}</p>
      <button class="btn btn-secondary btn-sm" style="margin-top:10px;" onclick="closeModal()">
        <i class="fa-solid fa-xmark"></i> Close
      </button>
    </div>
  `);
}
