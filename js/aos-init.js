/* aos-init.js — AOS simple reveals */

(function () {
  'use strict';
  if (typeof AOS === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
    disable: function () {
      // Disable on mobile for perf if needed — keep enabled by default
      return false;
    },
  });
})();
