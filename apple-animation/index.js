let progress = 0
const wrap = document.querySelector('.wrap')

const section2 = document.querySelector('#section2')
const section3 = document.querySelector('#section3')

wrap.addEventListener('scroll', () => {
  section2.classList.remove('sticky')
  section3.classList.remove('static')
  if (wrap.scrollTop < window.innerHeight) {
    progress = 3
  } else if (wrap.scrollTop > window.innerHeight * 2) {
    progress = 1
  } else {
    progress =
      3 - 2 * ((wrap.scrollTop - window.innerHeight) / window.innerHeight)
    section2.classList.add('sticky')
    section3.classList.add('static')
    section2.style.setProperty('--scale', progress)
  }
})
