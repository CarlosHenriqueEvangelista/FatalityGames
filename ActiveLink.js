window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('main section[id]')
  const imaginaryLine = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const imaginaryLineStart = imaginaryLine >= sectionTop
    const imaginaryLineEnd = imaginaryLine <= sectionHeight + sectionTop

    if (imaginaryLineStart && imaginaryLineEnd) {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.add('active')
    } else {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.remove('active')
    }
  }
})
