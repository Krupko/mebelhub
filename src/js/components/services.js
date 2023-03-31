import Swiper, {Pagination, Navigation} from 'swiper';
Swiper.use([Pagination, Navigation]);

const servicesSwiper = new Swiper(".services__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".services__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '0' +(index + 1) + "</span>";
    },
  },
});
