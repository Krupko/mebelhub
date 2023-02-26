// ? ======= tabs section out-work start ======= //

const tabNav = document.querySelectorAll('[data-tabwork]'),
  contentTab = document.querySelectorAll('.out-work__tab')

tabNav.forEach(item => {
  item.addEventListener('click', () => {

    const tabAtribut = item.dataset.tabwork,
      tabContent = document.querySelector('.' + tabAtribut)

    tabNav.forEach(item => {
      item.classList.remove('out-work__color')
    })

    contentTab.forEach(item => {
      item.classList.remove('out-work__tab-active')
    })

    tabContent.classList.add('out-work__tab-active')

    item.classList.add('out-work__color')
  })
})

// ? ======= tabs section out-work end ======= //

