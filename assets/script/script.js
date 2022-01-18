'use strict';
const header = document.querySelector('.header');
const heroSlider = document.querySelector('.hero-slider');
const headerNav = document.querySelector('.header__nav');
const btnSearch = document.querySelector('.header__search');
const modalSearch = document.querySelector('.search-modal');
const modalClose = document.querySelector('.modal-icon-close');
const btnSlogan = document.querySelector('.slogan__btn');

const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');

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
      // autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      speed: 1000,
      pauseOnHover: false,
      pauseOnFocus: false,
   });
});
// Categories Slider
$(document).ready(function () {
   $('.categories__slider').slick({
      // arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      prevArrow: `<button type="button" id="slick-prev" class="btn-slider btn-slider--slick btn-slider--hide slick-prev"><span class="material-icons-outlined">arrow_back</span></button>`,
      nextArrow: `<button type="button" id="slick-next" class="btn-slider btn-slider--slick btn-slider--hide slick-next"><span class="material-icons-outlined">arrow_forward</span></button>`,
      responsive: [
         {
            breakpoint: 1921,
            settings: {
               slidesToShow: 4,
            },
         },
      ],
   });
});

// Button Scroll
btnSlogan.addEventListener('click', () => {
   const topOfElement = section3.offsetTop - 100;
   window.scroll({ top: topOfElement, behavior: 'smooth' });
});
