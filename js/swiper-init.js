/* swiper-init.js — Swiper carousels */

(function () {
  'use strict';
  if (typeof Swiper === 'undefined') return;

  // Featured work carousel
  const workSwiper = document.querySelector('.work-swiper');
  if (workSwiper) {
    new Swiper(workSwiper, {
      slidesPerView: 1.1,
      spaceBetween: 16,
      grabCursor: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        700: { slidesPerView: 2.2 },
        1100: { slidesPerView: 3.2 },
      },
    });
  }

  // Testimonial / quote carousel
  const quoteSwiper = document.querySelector('.quote-swiper');
  if (quoteSwiper) {
    new Swiper(quoteSwiper, {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      autoplay: false,
      pagination: { el: '.swiper-pagination', clickable: true },
    });
  }

  // Lab experiments carousel
  const labSwiper = document.querySelector('.lab-swiper');
  if (labSwiper) {
    new Swiper(labSwiper, {
      slidesPerView: 1.2,
      spaceBetween: 16,
      grabCursor: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        800: { slidesPerView: 2.5 },
        1200: { slidesPerView: 3.5 },
      },
    });
  }
})();
