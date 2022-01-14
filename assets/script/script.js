'use strict';
const header = document.querySelector('.header');
const heroSlider = document.querySelector('.hero-slider');
const headerNav = document.querySelector('.header__nav');
const btnSearch = document.querySelector('.header__search');
const modalSearch = document.querySelector('.search-modal');
const modalClose = document.querySelector('.modal-icon-close');

// Search
btnSearch.addEventListener('click', function () {
   modalSearch.classList.add('modal-active');
});

modalClose.addEventListener('click', function () {
   modalSearch.classList.remove('modal-active');
   document.querySelector('.search-modal__input').value = '';
});

// Header Sticky
const callback = function (entries) {
   const [entry] = entries;
   if (!entry.isIntersecting) header.classList.add('sticky-header');
   else header.classList.remove('sticky-header');
};
const options = {
   root: null,
   threshold: 1,
};
const observer = new IntersectionObserver(callback, options);
observer.observe(heroSlider);

// Hero Slider
$(document).ready(function () {
   $('.hero-slider').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      speed: 1000,
      pauseOnHover: false,
      pauseOnFocus: false,

      // fade: true,
      // cssEase: 'linear',
   });
});
