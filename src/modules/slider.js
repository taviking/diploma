const topSlider = () => {
  const slider = document.querySelector(".top-slider");
  const slides = slider.querySelectorAll(".item");
  const table = slider.querySelectorAll(".table");
  const time = 3000;
  table[0].classList.add("active");

  let index = 0;

  const moveSlide = (slideStep) => {
    table[index].classList.remove("active");

    table[index].classList.add("active");

    slides.forEach((item, i) => {
      if (index === i) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
    index += slideStep;

    if (index >= slides.length && index >= table.length) {
      index = 0;
    }
  };

  const timerId = () => {
    setInterval(() => {
      moveSlide(1);
    }, time);
  };
  timerId();
};

export default topSlider;
