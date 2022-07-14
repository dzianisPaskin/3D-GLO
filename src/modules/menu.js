const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");

  const toggleMenu = () => {
    menu.classList.toggle('active-menu')
  };

  menu.addEventListener('click', (e) => {
    if(e.target.classList.contains('close-btn') || e.target.classList.contains('close-link')) {
      toggleMenu()
    }
  })

  menuBtn.addEventListener("click", toggleMenu);
  
};

export default menu;
