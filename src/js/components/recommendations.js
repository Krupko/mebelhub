import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const recommendationsSwiper = new Swiper(".recommendations__swiper", {

  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320:{
      slidesPerView: 1,
      speceBetween: 10,
    },
    645: {
      slidesPerView: 1.7,
      speceBetween: 30,
    },
    795: {
      slidesPerView: 1,
      speceBetween: 30,
    },
    1220: {
      slidesPerView: 1.7,
      speceBetween: 40,
    },
  }
});
