const dots = () => {
  const slides = document.querySelectorAll(".portfolio-item");
  const listDots = document.querySelector('.portfolio-dots')

    slides.forEach(() => {
      const dot = document.createElement('li')
      dot.className = 'dot'
      listDots.append(dot)
  })
  
  
}

export default dots