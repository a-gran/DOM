const tabsBtn = document.querySelectorAll('.tabs__nav-btn')
const tabsItems = document.querySelectorAll('.tabs__item')

tabsBtn.forEach(onTabClick)

function onTabClick(item) {
  item.addEventListener('click', () => {
    let currentBtn = item
    let tabId = item.getAttribute('data-tab')
    let currentTab = document.querySelector(tabId)

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach((item) => {
        item.classList.remove('active')
      })

      tabsItems.forEach((item) => {
        item.classList.remove('active')
      })

      currentBtn.classList.add('active')
      currentTab.classList.add('active')
    }
  })
}

document.querySelector('.tabs__nav-btn').click()
