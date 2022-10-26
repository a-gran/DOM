document.addEventListener('DOMContentLoaded', () => {
  const tabsBtn = document.querySelectorAll('.tabs__nav-btn')
  const tabsItems = document.querySelectorAll('.tabs__item')

  tabsBtn.forEach(onTabItem)

  function onTabItem(item) {
    item.addEventListener('click', () => {
      if (!item.classList.contains('active')) {
        tabsBtn.forEach((item) => {
          item.classList.remove('active')
        })
      }

      item.classList.add('active')

      const tabId = item.getAttribute('data-tab')
      const currentTab = document.querySelector(tabId)

      tabsItems.forEach((item) => {
        item.classList.remove('active')
      })

      currentTab.classList.add('active')
    })
  }

  document.querySelector('.tabs__nav-btn').click()
})
