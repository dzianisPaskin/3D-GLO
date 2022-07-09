const scroll = () => {
  const menuItems = document.querySelectorAll("ul>li>a");
  const mainItem = document.querySelector(`a[href='#service-block']`)

  mainItem.addEventListener('click', (e) => {
    e.preventDefault()
    const blockID = mainItem.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })

  menuItems.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  })
}

export default scroll