const menu = document.querySelector(' .menu')
const openMenu = document.querySelector(' .menu .icon-menu')

openMenu.addEventListener('click', function () {
  menu.classList.toggle('showMenu')
})

const links = document.querySelectorAll('.menu ul li a')

for (link of links) {
  link.addEventListener('click', function () {
    menu.classList.remove('showMenu')
  })
}
