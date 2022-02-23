let progress = 0
const wrap = document.querySelector('.wrap')
const section = document.querySelector('#section ')

wrap.addEventListener('scroll', () => {
  section.classList.remove('sticky')
  if (wrap.scrollTop < window.innerHeight) {
    progress = 0
  } else if (wrap.scrollTop > window.innerHeight * 3) {
    progress = 1
  } else {
    section.classList.add('sticky')

    progress = (wrap.scrollTop - window.innerHeight) / (window.innerHeight * 2)
    let position = (section.scrollWidth - window.innerWidth) * progress
    section.scrollTo({ left: position })
  }
})
