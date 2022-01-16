const bottomSlider = () => {
  const servicesElement = document.querySelector(".services-elements");
  const servicesCarousel = document.querySelector(".services-carousel");
  const slides = document.querySelectorAll(".services-carousel > div");
  const carouselArrow = document.querySelector(".services-arrow");
  const prevArrow = document.querySelector(".arrow-left");
  const nextArrow = document.querySelector(".arrow-right");

  let slideCount = 0;
  let showSlides = 3;
  let slideSize = 100 / showSlides;

  servicesElement.style.overflow = "hidden";
  servicesCarousel.style.display = "flex";
  servicesCarousel.style.transition = "transform 0.5s ease-in-out 0s";
  prevArrow.classList.add("disabled");

  const addFlexElems = () => {
    slides.forEach((item) => {
      item.style.flex = `0 0 ${slideSize}%`;
    });
  };

  addFlexElems();

  const slideResize = (n) => {
    showSlides = n;
    slideSize = 100 / showSlides;
    addFlexElems();
  };

  window.addEventListener("resize", () => {
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth < 870 && windowWidth > 650) {
      slideResize(2);
    } else if (windowWidth <= 650) {
      slideResize(1);
    } else {
      slideResize(3);
    }
  });

  carouselArrow.addEventListener("click", (e) => {
    let target = e.target;
    const maxSlide = Math.round((slides.length - showSlides) * -slideSize);

    if (target.closest(".arrow-left")) {
      if (slideCount < 0) {
        nextArrow.classList.remove("disabled");
        slideCount += slideSize;
        servicesCarousel.style.transform = `translateX(${slideCount}%)`;
      } else {
        prevArrow.classList.add("disabled");
      }
    } else if (target.closest(".arrow-right")) {
      if (slideCount > maxSlide) {
        prevArrow.classList.remove("disabled");
        nextArrow.classList.remove("disabled");
        slideCount -= slideSize;
        servicesCarousel.style.transform = `translateX(${slideCount}%)`;
      } else {
        nextArrow.classList.add("disabled");
      }
    }
  });
};

export default bottomSlider;
