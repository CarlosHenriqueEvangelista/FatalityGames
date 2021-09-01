const swiper = new Swiper('.swiper', {
  slidePerView: 1,

  navgation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: '.swiper-pagination'
  },

  mousewheel: true,
  keyboard: true
})
