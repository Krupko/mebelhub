import Swiper, { Scrollbar } from 'swiper';
Swiper.use([Scrollbar]);


const tabswiper = new Swiper(".out-work__swiper", {

  slidesPerView: 3.5,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 1000,
  },

  autoplay: {
    delay: 2500,
    // disableOnInteraction: true,
  },

  scrollbar: {
    el: '.out-work__scrollbar',
    draggable: true,
    // dragClass: '.swiper-scrollbar-drag',
    // hide: true
  }
});


