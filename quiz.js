// ============================================================
//  PA DMV Study v02 — profiles.js
//  8-slot profile system, 4-digit PIN, localStorage
// ============================================================

const ProfileManager = (() => {
  const KEY = 'pa_dmv_v02_profiles';
  const MAX = 8;

  const load  = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
  const save  = (p) => localStorage.setItem(KEY, JSON.stringify(p));

  function getProfile(id) { return load().find(p => p.id === id) || null; }

  function createProfile(name, pin) {
    const profiles = load();
    if (profiles.length >= MAX) return { error: 'All 8 profile slots are full.' };
    if (!name.trim())           return { error: 'Please enter a name.' };
    if (!/^\d{4}$/.test(pin))   return { error: 'PIN must be exactly 4 digits.' };
    const profile = {
      id: Date.now().toString(), name: name.trim(), pin,
      created: new Date().toISOString(),
      progress: {
        modulesRead: [], flashcardsStudied: 0, quizzesTaken: 0,
        examsTaken: 0, examPasses: 0, lastScore: null, bestScore: null,
        questionHistory: {}
      }
    };
    profiles.push(profile);
    save(profiles);
    return { profile };
  }

  function verifyPin(id, pin) {
    const p = getProfile(id);
    return p && p.pin === pin;
  }

  function updateProgress(id, updates) {
    const profiles = load();
    const i = profiles.findIndex(p => p.id === id);
    if (i === -1) return;
    profiles[i].progress = { ...profiles[i].progress, ...updates };
    save(profiles);
  }

  function markModuleRead(id, moduleId) {
    const p = getProfile(id);
    if (!p) return;
    const set = new Set(p.progress.modulesRead);
    set.add(moduleId);
    updateProgress(id, { modulesRead: [...set] });
  }

  function recordQuestion(id, qId, correct) {
    const p = getProfile(id);
    if (!p) return;
    const h = { ...p.progress.questionHistory };
    if (!h[qId]) h[qId] = { correct: 0, total: 0 };
    h[qId].total++;
    if (correct) h[qId].correct++;
    updateProgress(id, { questionHistory: h });
  }

  function recordExam(id, score, total) {
    const p = getProfile(id);
    if (!p) return;
    const passed = score >= 15;
    const pct = Math.round((score / total) * 100);
    const entry = { score, total, pct, passed, date: new Date().toISOString() };
    updateProgress(id, {
      examsTaken:  p.progress.examsTaken + 1,
      examPasses:  p.progress.examPasses + (passed ? 1 : 0),
      lastScore:   entry,
      bestScore:   (!p.progress.bestScore || pct > p.progress.bestScore.pct) ? entry : p.progress.bestScore
    });
  }

  function deleteProfile(id) {
    save(load().filter(p => p.id !== id));
  }

  function getWeakModules(id) {
    const p = getProfile(id);
    if (!p) return [];
    const h = p.progress.questionHistory;
    const weak = Object.entries(h)
      .filter(([, v]) => v.total >= 2 && (v.correct / v.total) < 0.65)
      .map(([qId]) => parseInt(qId));
    const mods = new Set(weak.map(qId => PA_DATA.questions.find(q => q.id === qId)?.module).filter(Boolean));
    return [...mods];
  }

  return {
    MAX, load, getProfile, createProfile, verifyPin,
    updateProgress, markModuleRead, recordQuestion, recordExam,
    deleteProfile, getWeakModules
  };
})();
