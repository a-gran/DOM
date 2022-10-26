;(function main() {
  const buttons = document.querySelectorAll('.button')
  const cards = document.querySelectorAll('.card')

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category)
      const isShowAll = category.toLowerCase() === 'all'
      if (isItemFiltered && !isShowAll) {
        item.classList.add('anime')
      } else {
        item.classList.remove('hide')
        item.classList.remove('anime')
      }
    })
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const curentCategory = button.dataset.filter
      filter(curentCategory, cards)
    })
  })

  cards.forEach((card) => {
    card.ontransitionend = function () {
      const isAnime = card.classList.contains('anime')
      if (isAnime) {
        card.classList.add('hide')
      }
    }
  })
})()
