const modal = () => {
  const modal = document.querySelector(".popup");
  const modalForm = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  let count = -26;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (document.documentElement.clientWidth > 768) {
        modalForm.style.left = count + "%";
        modal.style.display = "block";
        const animateModal = setInterval(function () {
          count++;
          modalForm.style.left = count + "%";
          if (count >= 38) {
            clearInterval(animateModal);
            count = 0;
          }
        }, 4);
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
