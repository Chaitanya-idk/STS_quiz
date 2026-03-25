(function () {
  'use strict';

  const state = {
    category: null,
    mode: null,
    topic: null,
    questions: [],
    index: 0,
    selected: {},
    checked: {},
    shown: {},
    score: 0,
  };

  const $ = (sel) => document.querySelector(sel);

  const screens = {
    landing:     $('#landing'),
    modeSelect:  $('#mode-select'),
    topicSelect: $('#topic-select'),
    quiz:        $('#quiz'),
    summary:     $('#summary'),
  };

  let currentScreen = 'landing';

  function navigateTo(name) {
    const prev = screens[currentScreen];
    const next = screens[name];
    if (prev === next) return;

    prev.classList.add('exit-left');
    prev.classList.remove('active');

    setTimeout(() => {
      prev.classList.remove('exit-left');
      next.classList.add('active');
      currentScreen = name;
    }, 120);
  }

  function initLanding() {
    const cat1 = QUIZ_DATA['CAT 1'] || [];
    const cat2 = QUIZ_DATA['CAT 2'] || [];
    const totalQ = cat1.length + cat2.length;
    const totalTopics = new Set([...cat1.map(q => q.topic), ...cat2.map(q => q.topic)]).size;

    $('#cat1-count').textContent = `${cat1.length} questions`;
    $('#cat2-count').textContent = `${cat2.length} questions`;
    $('#total-stat').textContent = `${totalQ} questions`;
    $('#topics-stat').textContent = `${totalTopics} topics`;

    $('#btn-cat1').addEventListener('click', () => selectCategory('CAT 1'));
    $('#btn-cat2').addEventListener('click', () => selectCategory('CAT 2'));
  }

  function selectCategory(cat) {
    state.category = cat;
    $('#mode-cat-label').textContent = cat;
    navigateTo('modeSelect');
  }

  function initModeSelect() {
    $('#mode-back').addEventListener('click', () => navigateTo('landing'));

    $('#btn-topic-mode').addEventListener('click', () => {
      state.mode = 'topic';
      buildTopicGrid();
      navigateTo('topicSelect');
    });

    $('#btn-seq-mode').addEventListener('click', () => {
      state.mode = 'sequential';
      state.topic = null;
      state.questions = QUIZ_DATA[state.category] || [];
      startQuiz();
    });
  }

  function initTopicSelect() {
    $('#topic-back').addEventListener('click', () => navigateTo('modeSelect'));
  }

  function buildTopicGrid() {
    const grid = $('#topic-grid');
    grid.innerHTML = '';
    const qs = QUIZ_DATA[state.category] || [];
    const topicMap = {};
    qs.forEach((q) => {
      const t = q.topic || 'General';
      if (!topicMap[t]) topicMap[t] = 0;
      topicMap[t]++;
    });

    Object.keys(topicMap).sort().forEach((t) => {
      const btn = document.createElement('button');
      btn.className = 'topic-btn';
      btn.innerHTML = `<span>${t}</span><span class="t-count">${topicMap[t]}</span>`;
      btn.addEventListener('click', () => {
        state.topic = t;
        state.questions = qs.filter((q) => (q.topic || 'General') === t);
        startQuiz();
      });
      grid.appendChild(btn);
    });
  }

  function startQuiz() {
    state.index = 0;
    state.selected = {};
    state.checked = {};
    state.shown = {};
    state.score = 0;
    updateLiveScore();
    renderQuestion();
    navigateTo('quiz');
  }

  function updateLiveScore() {
    $('#live-score').textContent = `Score: ${state.score}`;
  }

  function initQuiz() {
    $('#quiz-back').addEventListener('click', () => {
      if (state.mode === 'topic') navigateTo('topicSelect');
      else navigateTo('modeSelect');
    });
    $('#btn-prev').addEventListener('click', () => navQuestion(-1));
    $('#btn-next').addEventListener('click', () => {
      if (state.index === state.questions.length - 1) {
        showSummary();
      } else {
        navQuestion(1);
      }
    });
    $('#btn-check').addEventListener('click', checkAnswer);
    $('#btn-show').addEventListener('click', showAnswer);
  }

  function navQuestion(dir) {
    const newIdx = state.index + dir;
    if (newIdx < 0 || newIdx >= state.questions.length) return;

    const card = $('#question-card');
    card.classList.add('flip-out');

    setTimeout(() => {
      state.index = newIdx;
      renderQuestion();
      card.classList.remove('flip-out');
      card.classList.add('flip-in');
      setTimeout(() => card.classList.remove('flip-in'), 420);
    }, 320);
  }

  function renderQuestion() {
    const q = state.questions[state.index];
    if (!q) return;

    const labels = ['A', 'B', 'C', 'D'];
    const total = state.questions.length;
    const idx = state.index;

    $('#q-counter').textContent = `${idx + 1} / ${total}`;
    $('#progress-fill').style.width = `${((idx + 1) / total) * 100}%`;
    $('#q-badge').textContent = q.topic || '';
    $('#q-text').textContent = q.question;

    const list = $('#options-list');
    list.innerHTML = '';

    const isChecked = state.checked[idx];
    const isShown = state.shown[idx];
    const locked = isChecked || isShown;

    labels.forEach((label, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="opt-label">${label}.</span> ${q.options[i]}`;

      if (state.selected[idx] === label) {
        btn.classList.add('selected');
      }

      if (locked) {
        btn.classList.add('disabled');
        if (label === q.answer) {
          btn.classList.add('correct');
        } else if (isChecked && state.selected[idx] === label && label !== q.answer) {
          btn.classList.add('wrong');
        }
      } else {
        btn.addEventListener('click', () => selectOption(label));
      }

      list.appendChild(btn);
    });

    $('#btn-prev').disabled = idx === 0;
    $('#btn-next').textContent = idx === total - 1 ? 'Finish ✓' : 'Next →';
    $('#btn-check').disabled = locked || !state.selected[idx];
    $('#btn-show').disabled = locked;
  }

  function selectOption(label) {
    state.selected[state.index] = label;
    renderQuestion();
  }

  function checkAnswer() {
    const idx = state.index;
    if (!state.selected[idx]) return;

    const q = state.questions[idx];
    const wasAlreadyShown = state.shown[idx];

    state.checked[idx] = true;

    if (!wasAlreadyShown && state.selected[idx] === q.answer) {
      state.score++;
      updateLiveScore();
    }

    renderQuestion();
  }

  function showAnswer() {
    state.shown[state.index] = true;
    renderQuestion();
  }

  function initSummary() {
    $('#btn-retry').addEventListener('click', startQuiz);
    $('#btn-home').addEventListener('click', () => navigateTo('landing'));
  }

  function showSummary() {
    const total = state.questions.length;
    let correct = 0, wrong = 0, skipped = 0;
    const topicStats = {};

    state.questions.forEach((q, i) => {
      const t = q.topic || 'General';
      if (!topicStats[t]) topicStats[t] = { total: 0, correct: 0 };
      topicStats[t].total++;

      if (state.checked[i] && !state.shown[i]) {
        if (state.selected[i] === q.answer) {
          correct++;
          topicStats[t].correct++;
        } else {
          wrong++;
        }
      } else {
        skipped++;
      }
    });

    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    $('#ring-label').textContent = `${pct}%`;
    const circ = 2 * Math.PI * 52;
    const offset = circ - (circ * pct) / 100;

    const svg = $('#score-ring svg');
    if (!svg.querySelector('defs')) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      grad.id = 'ringGrad';
      grad.innerHTML = `<stop offset="0%" stop-color="var(--accent)"/><stop offset="100%" stop-color="var(--accent2)"/>`;
      defs.appendChild(grad);
      svg.insertBefore(defs, svg.firstChild);
    }

    requestAnimationFrame(() => {
      $('#ring-fg').style.strokeDashoffset = offset;
    });

    $('#s-correct').textContent = correct;
    $('#s-wrong').textContent = wrong;
    $('#s-skip').textContent = skipped;

    const container = $('#topic-breakdown');
    container.innerHTML = '<h3 style="margin-bottom:.75rem;font-size:1rem;font-weight:600;">Topic Breakdown</h3>';
    Object.keys(topicStats).sort().forEach((t) => {
      const s = topicStats[t];
      const p = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
      const item = document.createElement('div');
      item.className = 'tb-item';
      item.innerHTML = `
        <span>${t}</span>
        <span style="display:flex;align-items:center;gap:.5rem;">
          <span style="color:var(--text2);font-size:.8rem;">${s.correct}/${s.total}</span>
          <span class="tb-bar"><span class="tb-bar-fill" style="width:0%"></span></span>
        </span>`;
      container.appendChild(item);

      requestAnimationFrame(() => {
        item.querySelector('.tb-bar-fill').style.width = `${p}%`;
      });
    });

    navigateTo('summary');
  }

  function init() {
    initLanding();
    initModeSelect();
    initTopicSelect();
    initQuiz();
    initSummary();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
