const scrollReveal = ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 700,

  rotate: {
    x: 80,
    y: 80
  }
})

scrollReveal.reveal(
  `#Home .image, #Home .text,
#AboutUs .image, #AboutUs .text,
#OurServices .text, #OurServices .cards .card,
#WhatDoTheySayAboutUs .text, #WhatDoTheySayAboutUs .testimonials,
#HowToFindUs .text, #HowToFindUs .maps, #HowToFindUs .contact,
#Footer .text, #Footer .socialNetworks  #Footer .backToTopButton`,
  { interval: 100 }
)
