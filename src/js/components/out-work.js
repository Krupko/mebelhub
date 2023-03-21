import Swiper, { Scrollbar } from 'swiper';
Swiper.use([Scrollbar]);

const tabswipers = document.querySelectorAll('.out-work__swiper');
tabswipers.forEach((el) => {
  let tabswiper = new Swiper(el, {
    slidesPerView: 1.3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },

    scrollbar: {
      el: '.out-work__scrollbar',
      draggable: true,
      dragClass: 'swiper-scrollbar-drag',
      dragSize: 200,
    },

    breakpoints: {
      440: {
        slidesPerView: 2,
        speceBetween: 10,
      },
      680: {
        slidesPerView: 2.5,
        speceBetween: 10,
      },
      849: {
        slidesPerView: 2,
        speceBetween: 10,
      },
      1020: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1220: {
        slidesPerView: 3.5,
        spaceBetween: 16,
      },
    },
  });
});


const outWorkBtn = document.querySelector('.js-out-work__btn'),
  itemNine = document.querySelectorAll('.out-work-item-none');

outWorkBtn.addEventListener('click', () => {
  itemNine.forEach((el) => {
    el.classList.toggle('out-work-item-none')
  })
})








