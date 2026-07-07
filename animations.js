/* YELL site-wide animation engine */
(function () {
  'use strict';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(function () {
        document.querySelectorAll('[data-anim]').forEach(function (el) {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
        document.querySelectorAll('.yell-roadmap-step').forEach(function (el) {
          el.classList.add('is-active');
        });
      }, 300);
    });
    return;
  }

  var revealed = new WeakSet();
  var hovered = new WeakSet();

  function isInView(el) {
    var rect = el.getBoundingClientRect();
    var wh = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < wh - 30 && rect.bottom > 0;
  }

  function revealCheck() {
    document.querySelectorAll('[data-anim]').forEach(function (el) {
      if (revealed.has(el)) return;
      if (isInView(el)) {
        revealed.add(el);
        el.classList.add('is-visible');
      }
    });
    document.querySelectorAll('[data-counter]').forEach(function (el) {
      if (revealed.has(el)) return;
      if (isInView(el)) {
        revealed.add(el);
        animateCounter(el);
      }
    });
  }

  var hoverMap = [
    ['[data-tier-card]', 'yell-tier-hover'],
    ['[data-hover]', 'yell-hover'],
    ['[data-hover-dark]', 'yell-hover-dark'],
    ['[data-card-hover]', 'yell-hover'],
    ['[data-mentor-card]', 'yell-mentor-hover'],
    ['[data-module-card]', 'yell-module-hover'],
    ['[data-adv-card]', 'yell-adv-card'],
    ['[data-timeline-card]', 'yell-timeline-hover'],
    ['[data-step-card]', 'yell-step-card'],
    ['[data-cta-path]', 'yell-cta-path']
  ];

  function applyHovers() {
    hoverMap.forEach(function (pair) {
      document.querySelectorAll(pair[0]).forEach(function (el) {
        if (hovered.has(el)) return;
        hovered.add(el);
        el.classList.add(pair[1]);
      });
    });
  }

  function animateCounter(el) {
    var raw = el.getAttribute('data-counter');
    var chars = raw.split('');
    el.textContent = '';

    chars.forEach(function (ch, i) {
      if (/\d/.test(ch)) {
        var col = document.createElement('span');
        col.className = 'yell-digit-col';
        var strip = document.createElement('span');
        strip.className = 'yell-digit-strip';
        var digit = parseInt(ch, 10);
        for (var d = 0; d <= digit; d++) {
          var s = document.createElement('span');
          s.textContent = d;
          strip.appendChild(s);
        }
        strip.style.transform = 'translateY(0)';
        col.appendChild(strip);
        el.appendChild(col);
        var delay = 80 + i * 60;
        setTimeout(function (st, dg) {
          st.style.transform = 'translateY(-' + dg + 'em)';
        }, delay, strip, digit);
      } else {
        var stat = document.createElement('span');
        stat.className = 'yell-digit-static';
        stat.textContent = ch;
        el.appendChild(stat);
      }
    });
  }

  /* ─── PARALLAX ─── */
  function applyParallax() {
    document.querySelectorAll('[data-parallax]').forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var wh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < wh && rect.bottom > 0) {
        var center = rect.top + rect.height / 2;
        var offset = (center - wh / 2) / wh;
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
        var shift = offset * speed * 100;
        el.style.transform = 'translateY(' + shift + 'px)';
      }
    });
  }

  /* ─── ROADMAP SCROLL ─── */
  function updateRoadmap() {
    var roadmap = document.querySelector('.yell-roadmap');
    if (!roadmap) return;
    var steps = roadmap.querySelectorAll('.yell-roadmap-step');
    var progress = roadmap.querySelector('.yell-roadmap-progress');
    if (!steps.length) return;

    var wh = window.innerHeight || document.documentElement.clientHeight;
    var triggerLine = wh * 0.65;
    var activeIndex = -1;

    steps.forEach(function (step, i) {
      var rect = step.getBoundingClientRect();
      if (rect.top < triggerLine) {
        activeIndex = i;
      }
    });

    steps.forEach(function (step, i) {
      step.classList.remove('is-active', 'is-complete');
      if (i < activeIndex) step.classList.add('is-complete');
      else if (i === activeIndex) step.classList.add('is-active');
    });

    if (progress && activeIndex >= 0) {
      var pct = ((activeIndex + 0.5) / steps.length) * 100;
      progress.style.height = pct + '%';
      progress.style.width = '4px';
    }
  }

  function scan() {
    applyHovers();
    revealCheck();
    updateRoadmap();
  }

  var ticking = false;
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function () {
        revealCheck();
        applyParallax();
        updateRoadmap();
        ticking = false;
      });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  // Resilience: if the document ever scrolls inside a container (e.g. the body
  // becomes its own scroll box) rather than the window, the window 'scroll'
  // event won't fire. A capture-phase document listener catches scroll from any
  // scroller so reveal/parallax keep working regardless of the scroll root.
  document.addEventListener('scroll', onScroll, { passive: true, capture: true });

  // Reveal in-view content immediately — don't wait for the first interval
  // tick (up to 200ms of blank above-the-fold content on load).
  scan();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  }

  var scanCount = 0;
  var scanTimer = setInterval(function () {
    scan();
    scanCount++;
    if (scanCount > 30) clearInterval(scanTimer);
  }, 200);

  var mutObs = new MutationObserver(function () { scan(); });
  function startObserving() {
    mutObs.observe(document.body, { childList: true, subtree: true });
  }
  if (document.body) startObserving();
  else document.addEventListener('DOMContentLoaded', startObserving);
})();
