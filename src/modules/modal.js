import {animate} from './helpers'

const modal = () => {
  const modal = document.querySelector(".popup");
  const modalForm = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");


  

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (document.documentElement.clientWidth > 768) {
        modal.style.display = "block";

        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            
            modalForm.style.opacity = progress
            modalForm.style.left = (40 * progress) + "%"
          }
        });
      } else {
        modal.style.display = "block";
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if(!e.target.closest('.popup-content')||e.target.classList.contains('popup-close')) {
      modal.style.display = 'none'
    }
  })
};

export default modal;
