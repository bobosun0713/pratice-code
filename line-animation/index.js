// variable
const banner = document.querySelector('.banner')
const totalImage = 5
let isScroll = false
let active = 0
let preActive = 0

function scrollListener() {
  window.addEventListener('scroll', () => {
    isScroll = window.scrollY > 0
    if (isScroll) banner.classList.add('banner--scroll')
    else banner.classList.remove('banner--scroll')
  })
}

function generateImg(total) {
  let html = ''
  for (let i = 1; i <= total; i++) {
    html += `<div class="banner__image" style="background-image:url('https://picsum.photos/id/${i}/1920/1200')"></div>`
  }
  banner.innerHTML = html
}

function imageAnimation() {
  const bannerImage = document.querySelectorAll('.banner__image')
  bannerImage[0].classList.add('banner__image--animate')
  const timer = setInterval(() => {
    preActive = active
    active = (active + 1 + totalImage) % totalImage
    bannerImage.forEach((item) =>
      item.classList.remove('banner__image--animate')
    )
    bannerImage[active].classList.add('banner__image--animate')
    bannerImage[preActive].classList.add('banner__image--animate')
  }, 5000)
}

function start() {
  scrollListener()
  generateImg(totalImage)
  imageAnimation()
}

start()
