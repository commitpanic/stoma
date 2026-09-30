/**
 * main.js — interakcje strony (po components.js)
 */

(function () {
  /* ── Reveal on scroll ────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealEls.forEach(el => el.classList.add('visible'));
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  }

  /* ── Active nav link (scroll spy) ────────────────────── */
  const sections = document.querySelectorAll('main section[id]');
  const navMap = {};
  document.querySelectorAll('.nav-links a[href*="#"]').forEach(a => {
    navMap[a.getAttribute('href').split('#')[1]] = a;
  });

  if (sections.length && 'IntersectionObserver' in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const link = navMap[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.values(navMap).forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));
  }

  /* ── Godziny otwarcia — wyróżnij dzisiejszy dzień (wiersze: pn…nd) ── */
  const hoursRows = document.querySelectorAll('.hours tbody tr');
  if (hoursRows.length === 7) {
    hoursRows[(new Date().getDay() + 6) % 7].classList.add('today');
  }
})();
