'use strict';

const header = document.querySelector('.header');
const heroSlider = document.querySelector('.hero-slider');
const nav = document.querySelector('.header__nav');
const btnSearch = document.querySelector('.header__search');
const modalSearch = document.querySelector('.search-modal');
const modalSearchInner = document.querySelector('.search-modal-inner');
const modalClose = document.querySelector('.modal-icon-close');
const btnSlogan = document.querySelector('.slogan__btn');
const menuCategories = document.querySelector('.nav-link--expand');
const iconArrowCategories = document.querySelector('.icon-arrow--mb');
const btnBurger = document.querySelector('.header__burger');
const btnCloseSidebar = document.querySelector('.icon-close-sidebar');
const overlaySidebar = document.querySelector('.sidebar-overlay');
const searchInput = document.querySelector('.search-modal__input');

const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');

// Search modal
btnSearch.addEventListener('click', function () {
   modalSearch.classList.add('modal-active');
   modalSearchInner.style.transform = 'translateY(0%)';
   setTimeout(function () {
      searchInput.focus();
   }, 1000);
});

modalClose.addEventListener('click', function () {
   modalSearch.classList.remove('modal-active');
   searchInput.value = '';
   modalSearchInner.style.transform = 'translateY(-50%)';
});

// Header sticky
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

// Hero slider
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

// Categories slider
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

// Section scrolling
btnSlogan.addEventListener('click', () => {
   const topOfElement = section3.offsetTop - 100;
   window.scroll({ top: topOfElement, behavior: 'smooth' });
});

// Sidebar
btnBurger.addEventListener('click', function (e) {
   e.preventDefault();
   nav.classList.add('sidebar-active');
   overlaySidebar.classList.add('overlay-active');
});

const closeSidebar = function (el) {
   el.addEventListener('click', function () {
      nav.classList.remove('sidebar-active');
      overlaySidebar.classList.remove('overlay-active');
   });
};
closeSidebar(btnCloseSidebar);
closeSidebar(overlaySidebar);

// Categories menu expand
menuCategories.addEventListener('click', function () {
   if (!menuCategories.classList.contains('expand-menu-active'))
      iconArrowCategories.style.transform = 'rotate(0deg)';
   else iconArrowCategories.style.transform = 'rotate(-90deg)';
   menuCategories.classList.toggle('expand-menu-active');
});
