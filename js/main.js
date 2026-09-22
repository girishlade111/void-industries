/* main.js — shared setup: Lenis smooth scroll, nav, active links */

(function () {
  'use strict';

  // ── Nav toggle ──
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      document.body.classList.toggle('no-scroll', open);
      toggle.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // ── Active link highlighting ──
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const page = href.split('/').pop();
    if (
      page === path ||
      (page.startsWith('work-') && path.startsWith('work-')) ||
      (page.startsWith('journal-') && path.startsWith('journal-') && page !== 'journal.html')
    ) {
      link.classList.add('is-active');
    }
    if (path === 'journal.html' && page === 'journal.html') link.classList.add('is-active');
    if (path === 'work.html' && page === 'work.html') link.classList.add('is-active');
  });

  // ── Lenis smooth scroll (synced with GSAP ScrollTrigger) ──
  function initLenis() {
    if (typeof Lenis === 'undefined') return null;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Anchor links through Lenis
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const id = anchor.getAttribute('href');
        if (id.length > 1) {
          const target = document.querySelector(id);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -64 });
          }
        }
      });
    });

    return lenis;
  }

  window.__lenis = initLenis();

  // ── Contact form (demo only) ──
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.textContent;
        btn.textContent = 'SENT — WE\'LL BE IN TOUCH';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
          form.reset();
        }, 3000);
      }
    });
  }
})();
