import Swiper from 'swiper';

const swiper = new Swiper(".technologies__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 1000,
  }
});
