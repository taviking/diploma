const anchor = (attr) => {
  // функция плавного скролла
  const linkAnchors = document.querySelector(attr);
  const scrollTo = (element) => {
    window.scroll({
      lefft: 0,
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  // скролл на якорь при нажатии на ссылку
  linkAnchors.addEventListener("click", (e) => {
    let target = e.target;
    const blockId = target.getAttribute("href").substring(1);
    const anchor = document.getElementById(blockId);

    e.preventDefault();
    if (target.closest("li>a")) scrollTo(anchor);
  });

  // скрол на верх при нажатии на кнопку
  const btnUp = document.querySelector(".up");
  const top = document.querySelector(".header-wrapper");
  btnUp.style.opacity = "0";
  const visibilityBtn = () => {
    if (window.pageYOffset > 400) {
      btnUp.style.opacity = "1";
    } else {
      btnUp.style.opacity = "0";
    }
  };

  btnUp.addEventListener("click", (event) => {
    scrollTo(top);
  });

  window.onscroll = visibilityBtn;
};

export default anchor;
