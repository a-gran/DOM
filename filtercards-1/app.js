const boxes = document.querySelectorAll('.box')

const menu = document.querySelector('nav')

menu.addEventListener('click', (event) => {
  if (event.target.tagName !== 'LI') return false

  let classFilter = event.target.dataset['f']

  boxes.forEach((elem) => {
    elem.classList.remove('hide')
    if (!elem.classList.contains(classFilter) && classFilter !== 'all') {
      elem.classList.add('hide')
    }
  })
})


