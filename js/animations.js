/* animations.js — GSAP + ScrollTrigger sequences */

(function () {
  'use strict';

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  // ── Hero entrance ──
  const hero = document.querySelector('.hero, .page-hero, .project-hero, .err-page');
  if (hero) {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    const title = hero.querySelector('h1');
    const sub = hero.querySelector('.hero__sub, .page-hero__sub, p');
    const label = hero.querySelector('.page-hero__label, .mono');

    if (label) tl.from(label, { y: 30, opacity: 0, duration: 0.6 }, 0);
    if (title) {
      // Split-ish reveal: animate lines via wrapper if present, otherwise whole
      tl.from(title, { y: 80, opacity: 0, duration: 1 }, 0.1);
    }
    if (sub) tl.from(sub, { y: 40, opacity: 0, duration: 0.8 }, 0.4);
    const btns = hero.querySelectorAll('.btn');
    if (btns.length) tl.from(btns, { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 }, 0.6);
  }

  // ── Generic scroll reveals (elements without AOS) ──
  gsap.utils.toArray('[data-gsap="fade-up"]').forEach((el) => {
    gsap.from(el, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });

  gsap.utils.toArray('[data-gsap="fade-in"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });

  // ── Stagger groups ──
  gsap.utils.toArray('[data-gsap-stagger]').forEach((group) => {
    const children = group.children;
    gsap.from(children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: group, start: 'top 80%' },
    });
  });

  // ── Horizontal pinned section (lab / experiments strip) ──
  const hTrack = document.querySelector('[data-gsap="horizontal"]');
  if (hTrack) {
    const total = hTrack.scrollWidth - window.innerWidth;
    if (total > 0) {
      gsap.to(hTrack, {
        x: -total,
        ease: 'none',
        scrollTrigger: {
          trigger: hTrack.parentElement,
          start: 'top top',
          end: () => '+=' + total,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }
  }

  // ── Pinned split section ──
  const pinEl = document.querySelector('[data-gsap="pin"]');
  if (pinEl) {
    ScrollTrigger.create({
      trigger: pinEl,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: true,
    });
  }

  // ── Parallax bg ──
  gsap.utils.toArray('[data-gsap="parallax"]').forEach((el) => {
    gsap.to(el, {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // ── Marquee speed reaction to scroll velocity ──
  const track = document.querySelector('.marquee__track');
  if (track) {
    let current = 1;
    ScrollTrigger.create({
      onUpdate: (self) => {
        const v = Math.min(Math.abs(self.getVelocity()) / 500, 4);
        const target = 1 + v;
        gsap.to({ val: current }, {
          val: target,
          duration: 0.3,
          onUpdate: function () {
            current = this.targets()[0].val;
            track.style.animationDuration = (22 / current) + 's';
          },
        });
      },
    });
  }

  // ── Split text lines for big display headings ──
  gsap.utils.toArray('[data-gsap="lines"] .line').forEach((line, i) => {
    gsap.from(line, {
      yPercent: 110,
      opacity: 0,
      duration: 1,
      delay: i * 0.1,
      ease: 'power4.out',
      scrollTrigger: { trigger: line, start: 'top 90%' },
    });
  });

  // ── Accordion-style reveals on process steps ──
  gsap.utils.toArray('.step').forEach((step) => {
    gsap.from(step, {
      x: -40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: step, start: 'top 85%' },
    });
  });

  // Stats count-up
  gsap.utils.toArray('.stat__num').forEach((el) => {
    const text = el.textContent.trim();
    const match = text.match(/^([^\d]*)(\d+)(.*)$/);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr, 10);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
      onUpdate: () => { el.textContent = prefix + Math.round(obj.v) + suffix; },
    });
  });

  ScrollTrigger.refresh();
})();
