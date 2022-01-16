import { animate } from "./anima";

const modal = () => {
  const fancyBoxModal = document.querySelectorAll(".fancyboxModal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalCallback = document.querySelector(".modal-callback");
  //появления модального окна
  fancyBoxModal.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      modalOverlay.style.display = "block";
      modalCallback.style.display = "block";
      if (window.screen.width >= 768) {
        animate({
          duration: 300,
          timing(timeFraction) {
            return Math.pow(timeFraction, 2);
          },
          draw(progress) {
            modalOverlay.style.opacity = `${progress * 100}%`;
            modalCallback.style.opacity = `${progress * 100}%`;
          },
        });
      }
    });
  });
  // закрытие модального окна при нажатии мимо него
  modalOverlay.addEventListener("click", (e) => {
    if (!e.target.closest("modal-callback")) {
      modalOverlay.style.display = "none";
      modalCallback.style.display = "none";
    }
  });

  // закрытие модального окна при нажатии на крестик
  modalCallback.addEventListener("click", (e) => {
    if (e.target.closest(".modal-close")) {
      modalOverlay.style.display = "none";
      modalCallback.style.display = "none";
    }
  });
};
export default modal;
