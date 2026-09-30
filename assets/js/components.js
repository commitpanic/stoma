/**
 * components.js — injects shared icon sprite, header & footer into every page
 * Usage: add <script src="assets/js/components.js"></script> at end of <body>
 * The script reads data-page="pagename" on <body> to mark the active nav link.
 * Wzór: D:\DEV\Filar\assets\js\components.js
 */

(function () {
  /* ── SVG icon sprite ─────────────────────────────────── */
  const spriteHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
    <symbol id="i-tooth" viewBox="0 0 24 24"><path d="M7.5 3C5.3 3 3.8 4.8 3.8 7.1c0 1.8.7 3.1 1.3 4.6.5 1.5.6 3.3 1 5 .4 1.5.9 3.3 1.9 3.3 1.2 0 1.3-2 1.6-3.5.3-1.3.8-2.3 2.4-2.3s2.1 1 2.4 2.3c.3 1.5.4 3.5 1.6 3.5 1 0 1.5-1.8 1.9-3.3.4-1.7.5-3.5 1-5 .6-1.5 1.3-2.8 1.3-4.6C20.2 4.8 18.7 3 16.5 3c-1.8 0-2.6.9-4.5.9S9.3 3 7.5 3z"/></symbol>
    <symbol id="i-sparkle" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></symbol>
    <symbol id="i-smile" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 14c1 1.5 2.4 2.2 4 2.2s3-.7 4-2.2"/><path d="M9 9.5h.01M15 9.5h.01"/></symbol>
    <symbol id="i-crown" viewBox="0 0 24 24"><path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 10H5z"/><path d="M5 21h14"/></symbol>
    <symbol id="i-surgery" viewBox="0 0 24 24"><path d="M14.5 4.5l5 5-9 9H5.5v-5z"/><path d="M12 7l5 5"/><path d="M3 21h8"/></symbol>
    <symbol id="i-braces" viewBox="0 0 24 24"><rect x="3" y="8" width="5" height="8" rx="1.5"/><rect x="9.5" y="8" width="5" height="8" rx="1.5"/><rect x="16" y="8" width="5" height="8" rx="1.5"/><path d="M1.5 12h21"/></symbol>
    <symbol id="i-family" viewBox="0 0 24 24"><circle cx="8" cy="6" r="2.5"/><circle cx="16.5" cy="9" r="2"/><path d="M3.5 20v-4.5A4.5 4.5 0 0 1 8 11a4.5 4.5 0 0 1 4.5 4.5V20"/><path d="M13 20v-3a3.5 3.5 0 0 1 7 0v3"/></symbol>
    <symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></symbol>
    <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></symbol>
    <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></symbol>
    <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol>
    <symbol id="i-facebook" viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5z"/></symbol>
  </svg>`;

  /* ── Header HTML ─────────────────────────────────────── */
  const headerHTML = `
  <nav id="navbar" aria-label="Menu główne">
    <div class="container">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo" aria-label="Stomatologia Śródmiejska — strona główna">
          <svg class="icon nav-logo-icon" aria-hidden="true"><use href="#i-tooth"/></svg>
          <span>Stomatologia <strong>Śródmiejska</strong></span>
        </a>
        <ul class="nav-links" id="navLinks" role="list">
          <li><a href="index.html#o-przychodni" data-page="about">O przychodni</a></li>
          <li><a href="index.html#uslugi"       data-page="services">Usługi</a></li>
          <li><a href="index.html#dzieci"       data-page="kids">Dla dzieci</a></li>
          <li><a href="index.html#kontakt"      data-page="contact">Kontakt</a></li>
          <li><a href="tel:+48602793487" class="nav-cta">
            <svg class="icon" aria-hidden="true"><use href="#i-phone"/></svg>602 793 487</a></li>
        </ul>
        <button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false" aria-controls="navLinks">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;

  /* ── Footer HTML ─────────────────────────────────────── */
  const footerHTML = `
  <footer id="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">
            <svg class="icon" aria-hidden="true"><use href="#i-tooth"/></svg>
            Stomatologia Śródmiejska
          </div>
          <p>Przychodnia stomatologiczna w centrum Świebodzina. Higienizacja, stomatologia zachowawcza i estetyczna, protetyka, chirurgia stomatologiczna i ortodoncja.</p>
        </div>
        <div class="footer-col">
          <h4>Strona</h4>
          <ul>
            <li><a href="index.html#o-przychodni">O przychodni</a></li>
            <li><a href="index.html#uslugi">Usługi</a></li>
            <li><a href="index.html#dzieci">Dla dzieci</a></li>
            <li><a href="index.html#kontakt">Kontakt</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Informacje</h4>
          <ul>
            <li><a href="polityka-prywatnosci.html">Polityka prywatności</a></li>
            <li><a href="https://www.facebook.com/p/Stomatologia-%C5%9Ar%C3%B3dmiejska-%C5%9Awiebodzin-100063484271705/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Kontakt</h4>
          <ul>
            <li><a href="tel:+48602793487">+48 602 793 487</a></li>
            <li><a href="mailto:rejestracja@stomatologiasrodmiejska.pl">rejestracja@stomatologiasrodmiejska.pl</a></li>
            <li><a href="https://www.google.com/maps/place/Stomatologia+%C5%9Ar%C3%B3dmiejska/@52.2505292,15.5293624,508m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47066785bbcb5839:0x686bf42e3caf9aad!8m2!3d52.2505259!4d15.5319373!16s%2Fg%2F11rn0r0nms?hl=pl" target="_blank" rel="noopener noreferrer">ul. 1 Maja 9<br>66-200 Świebodzin</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© <span id="footerYear"></span> Stomatologia Śródmiejska Świebodzin. Wszelkie prawa zastrzeżone.</p>
        <p>Created by <a href="https://kubabuba.pl" target="_blank" rel="noopener noreferrer">kubabuba.pl</a></p>
      </div>
    </div>
  </footer>`;

  /* ── Inject ───────────────────────────────────────────── */
  document.body.insertAdjacentHTML('afterbegin', spriteHTML);

  const headerEl = document.getElementById('header-placeholder');
  const footerEl = document.getElementById('footer-placeholder');

  if (headerEl) headerEl.outerHTML = headerHTML;
  if (footerEl) footerEl.outerHTML = footerHTML;

  /* ── Footer year ─────────────────────────────────────── */
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Navbar scroll ───────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Hamburger ───────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    const setOpen = isOpen => {
      navLinks.classList.toggle('open', isOpen);
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };
    hamburger.addEventListener('click', () => setOpen(!navLinks.classList.contains('open')));
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    // Close on outside click / Escape
    document.addEventListener('click', e => {
      if (!navbar.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  /* ── Accessibility toolbar (desktop only, styles in style.css) ── */
  const a11yBar = document.createElement('div');
  a11yBar.id = 'a11y-bar';
  a11yBar.setAttribute('role', 'toolbar');
  a11yBar.setAttribute('aria-label', 'Narzędzia dostępności');
  a11yBar.innerHTML = `
    <button id="a11y-increase" title="Powiększ tekst" aria-label="Powiększ tekst">A+</button>
    <button id="a11y-decrease" title="Pomniejsz tekst" aria-label="Pomniejsz tekst">A−</button>
    <button id="a11y-reset"    title="Resetuj rozmiar tekstu" aria-label="Resetuj rozmiar tekstu" class="a11y-small">A↺</button>
    <div class="a11y-sep"></div>
    <button id="a11y-contrast" title="Wysoki kontrast" aria-label="Włącz/wyłącz wysoki kontrast" aria-pressed="false" class="a11y-small">WK</button>
  `;
  document.body.appendChild(a11yBar);

  const store = {
    get: key => { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set: (key, val) => { try { localStorage.setItem(key, val); } catch (e) { /* private mode */ } },
  };

  const contrastBtn = document.getElementById('a11y-contrast');
  let currentSize = parseInt(store.get('a11y-size') || '0', 10);

  const applySize = () => {
    document.documentElement.style.fontSize = currentSize === 0 ? '' : (100 + currentSize * 10) + '%';
    store.set('a11y-size', currentSize);
  };
  const applyContrast = isHC => {
    document.body.classList.toggle('hc-mode', isHC);
    contrastBtn.classList.toggle('a11y-active', isHC);
    contrastBtn.setAttribute('aria-pressed', String(isHC));
    store.set('a11y-hc', isHC ? '1' : '0');
  };

  // Restore saved prefs
  if (currentSize !== 0) applySize();
  if (store.get('a11y-hc') === '1') applyContrast(true);

  document.getElementById('a11y-increase').addEventListener('click', () => {
    if (currentSize >= 3) return;
    currentSize++;
    applySize();
  });
  document.getElementById('a11y-decrease').addEventListener('click', () => {
    if (currentSize <= -1) return;
    currentSize--;
    applySize();
  });
  document.getElementById('a11y-reset').addEventListener('click', () => {
    currentSize = 0;
    applySize();
  });
  contrastBtn.addEventListener('click', () => {
    applyContrast(!document.body.classList.contains('hc-mode'));
  });

})();
