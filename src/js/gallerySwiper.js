import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

const gallerySwiper = new Swiper('[data-gallery-swiper]', {
  modules: [Pagination, Autoplay],

  loop: true,
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: false,

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 208,
      centeredSlides: true,
    },
  },

  pagination: {
    el: '[data-swiper-pagination]',
    clickable: true,
  },

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
