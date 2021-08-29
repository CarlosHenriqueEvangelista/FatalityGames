const menu = document.querySelector('#header .menu')
const openMenu = document.querySelector('#header .menu .icon-menu')
const closeMenu = document.querySelector('#header .menu .icon-close')

openMenu.addEventListener('click', function () {
  menu.classList.add('show')
})

closeMenu.addEventListener('click', function () {
  menu.classList.remove('show')
})

const links = document.querySelectorAll('#header .menu ul li a')

for (link of links) {
  link.addEventListener('click', function () {
    menu.classList.remove('show')
  })
}
