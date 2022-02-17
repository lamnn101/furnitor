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
const btnScrollToTop = document.querySelector('.scroll-to-top');

const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');

// Search modal
btnSearch.addEventListener('click', function () {
   modalSearch.classList.add('modal-active');
   modalSearchInner.style.transform = 'translateY(0%)';
   setTimeout(function () {
      searchInput.focus();
   }, 200);
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

// Slider
$(document).ready(function () {
   $('.categories__slider').slick({
      // arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      prevArrow: `<button type="button" id="slick-prev" class="btn-slider btn-slider--slick btn-slider--hide slick-prev"><span class="material-icons-outlined">arrow_back</span></button>`,
      nextArrow: `<button type="button" id="slick-next" class="btn-slider btn-slider--slick btn-slider--hide slick-next"><span class="material-icons-outlined">arrow_forward</span></button>`,
      responsive: [
         {
            breakpoint: 1441,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 577,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   });
});

$(document).ready(function () {
   $('.testimonial__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      dots: true,

      prevArrow: `<button type="button" id="testimonial-prev" class="btn-slider btn-slider--slick"><span class="material-icons-outlined">arrow_back</span></button>`,
      nextArrow: `<button type="button" id="testimonial-next" class="btn-slider btn-slider--slick"><span class="material-icons-outlined">arrow_forward</span></button>`,
      responsive: [
         {
            breakpoint: 1201,
            settings: {
               slidesToShow: 1,
               dots: false,
            },
         },
      ],
   });
});

$(document).ready(function () {
   $('.partners__slider').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      pauseOnFocus: false,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 1201,
            settings: {
               slidesToShow: 6,
            },
         },
         {
            breakpoint: 1025,
            settings: {
               slidesToShow: 5,
            },
         },
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 4,
            },
         },
         {
            breakpoint: 541,
            settings: {
               slidesToShow: 2,
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

// Scroll to top
btnScrollToTop.addEventListener('click', function () {
   window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Visible button scroll to top
const visibleBtn = function (entries) {
   const [entry] = entries;
   if (!entry.isIntersecting)
      btnScrollToTop.classList.add('scroll-to-top-active');
   else btnScrollToTop.classList.remove('scroll-to-top-active');
};
const visibleOpt = {
   root: null,
   threshold: 0,
};
const observerForScrollTop = new IntersectionObserver(visibleBtn, visibleOpt);
observerForScrollTop.observe(heroSlider);
