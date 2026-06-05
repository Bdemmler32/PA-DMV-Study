// ============================================================
//  profiles.js — 8-slot profile system with 4-digit PIN
// ============================================================

const ProfileManager = (() => {
  const STORAGE_KEY = 'pa_dmv_profiles';
  const MAX_SLOTS = 8;

  function loadAll() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { return []; }
  }

  function saveAll(profiles) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
  }

  function getProfile(id) {
    return loadAll().find(p => p.id === id) || null;
  }

  function createProfile(name, pin) {
    const profiles = loadAll();
    if (profiles.length >= MAX_SLOTS) return { error: 'Max slots reached' };
    if (!name.trim()) return { error: 'Name required' };
    if (!/^\d{4}$/.test(pin)) return { error: 'PIN must be 4 digits' };

    const profile = {
      id: Date.now().toString(),
      name: name.trim(),
      pin,
      created: new Date().toISOString(),
      progress: {
        modulesRead: [],       // array of module IDs
        flashcardsStudied: 0,
        quizzesTaken: 0,
        examsTaken: 0,
        examPasses: 0,
        lastScore: null,
        bestScore: null,
        questionHistory: {}    // questionId -> { correct: n, total: n }
      }
    };
    profiles.push(profile);
    saveAll(profiles);
    return { profile };
  }

  function verifyPin(id, pin) {
    const p = getProfile(id);
    return p && p.pin === pin;
  }

  function updateProgress(id, updates) {
    const profiles = loadAll();
    const idx = profiles.findIndex(p => p.id === id);
    if (idx === -1) return false;
    profiles[idx].progress = { ...profiles[idx].progress, ...updates };
    saveAll(profiles);
    return true;
  }

  function markModuleRead(id, moduleId) {
    const p = getProfile(id);
    if (!p) return;
    const read = new Set(p.progress.modulesRead);
    read.add(moduleId);
    updateProgress(id, { modulesRead: [...read] });
  }

  function recordQuestionResult(id, questionId, correct) {
    const p = getProfile(id);
    if (!p) return;
    const history = { ...p.progress.questionHistory };
    if (!history[questionId]) history[questionId] = { correct: 0, total: 0 };
    history[questionId].total++;
    if (correct) history[questionId].correct++;
    updateProgress(id, { questionHistory: history });
  }

  function recordExamResult(id, score, total) {
    const p = getProfile(id);
    if (!p) return;
    const passed = score >= 15;
    const pct = Math.round((score / total) * 100);
    updateProgress(id, {
      examsTaken: p.progress.examsTaken + 1,
      examPasses: p.progress.examPasses + (passed ? 1 : 0),
      lastScore: { score, total, pct, passed, date: new Date().toISOString() },
      bestScore: !p.progress.bestScore || pct > p.progress.bestScore.pct
        ? { score, total, pct, passed, date: new Date().toISOString() }
        : p.progress.bestScore
    });
  }

  function deleteProfile(id) {
    const profiles = loadAll().filter(p => p.id !== id);
    saveAll(profiles);
  }

  function getAllProfiles() {
    return loadAll();
  }

  function getWeakAreas(id) {
    const p = getProfile(id);
    if (!p) return [];
    const history = p.progress.questionHistory;
    return Object.entries(history)
      .filter(([, v]) => v.total >= 2 && v.correct / v.total < 0.6)
      .map(([qId]) => parseInt(qId));
  }

  return {
    createProfile, verifyPin, getProfile, getAllProfiles,
    updateProgress, markModuleRead, recordQuestionResult,
    recordExamResult, deleteProfile, getWeakAreas,
    MAX_SLOTS
  };
})();
