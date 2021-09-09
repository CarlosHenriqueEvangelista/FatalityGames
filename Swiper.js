const swiper = new Swiper('.swiper', {
  slidePerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  mousewheel: true,
  keyboard: true,
  effect: 'flip',
  grabCursor: true,
  loop: true,
  speed: 500
})

const leftArrow = document.querySelector('#leftArrow')
const rightArrow = document.querySelector('#rightArrow')

leftArrow.addEventListener('mouseenter', function () {
  document.querySelector('#leftArrow').src = 'img/ArrowLeftIcon2.png'
})

leftArrow.addEventListener('mouseleave', function () {
  document.querySelector('#leftArrow').src = '/img/ArrowLeftIcon.png'
})

rightArrow.addEventListener('mouseenter', function () {
  document.querySelector('#rightArrow').src = '/img/ArrowRightIcon2.png'
})

rightArrow.addEventListener('mouseleave', function () {
  document.querySelector('#rightArrow').src = '/img/ArrowRightIcon.png'
})

leftArrow.addEventListener('touchstart', function () {
  document.querySelector('#leftArrow').src = 'img/ArrowLeftIcon2.png'
})

rightArrow.addEventListener('touchstart', function () {
  document.querySelector('#rightArrow').src = '/img/ArrowRightIcon2.png'
})
