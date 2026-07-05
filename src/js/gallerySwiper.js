import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const gallerySwiper = new Swiper('[data-gallery-swiper]', {
  modules: [Pagination, Autoplay],

  loop: true,
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    375: { slidesPerView: 1, spaceBetween: 10 },
    1440: { slidesPerView: 4, spaceBetween: 20 },
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
