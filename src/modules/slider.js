const topSlider = () => {
  const slider = document.querySelector(".top-slider");
  const slides = slider.querySelectorAll(".item");
  const time = 3000;

  let index = 0;

  const moveSlide = (slideStep) => {
    if (index >= slides.length) {
      index = 0;
    }

    slides.forEach((item, i) => {
      if (index === i) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
    index += slideStep;
  };

  const timerId = () => {
    setInterval(() => {
      moveSlide(1);
    }, time);
  };
  timerId();
};

export default topSlider;
