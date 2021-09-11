const menu = document.querySelector(' .menu')
const openMenu = document.querySelector(' .menu .icon-menu')
const closeMenu = document.querySelector(' .menu .icon-close')

openMenu.addEventListener('click', function () {
  menu.classList.add('showMenu')
})

closeMenu.addEventListener('click', function () {
  menu.classList.remove('showMenu')
})

const links = document.querySelectorAll('.menu ul li a')

for (link of links) {
  link.addEventListener('click', function () {
    menu.classList.remove('showMenu')
  })
}
