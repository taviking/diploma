const sendForm = () => {
  // console.log("wtf");
  const errorMessage = "Ой вей! Что-то не так...";
  const successMessage = "Спасибо! Мы скоро с вами свяжемся!";
  const loadMessage = "Загрузка...";
  const statusMessage = document.createElement("div");
  const form = document.querySelector(".rf> form");
  // валидация формы
  document.body.addEventListener("input", (e) => {
    let target = e.target;
    if (target.name === "fio") {
      target.value = target.value.replace(/[^А-яа-яЁё-\s]/gi, "");
    } else if (target.name === "tel") {
      target.value = target.value.replace(/[^+\d]/g, "");
    }
  });

  //отправка формы

  const postData = (body) => {
    return fetch("server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  const formPostData = (event, form) => {
    event.preventDefault();
    form.appendChild(statusMessage);

    statusMessage.textContent = loadMessage;

    const formData = new FormData(form);
    let body = {};

    formData.forEach((value, key) => {
      body[key] = value;
    });

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("something wrong");
        }
        statusMessage.style.cssText = `
                        color: green;
                    `;
        statusMessage.textContent = successMessage;
      })
      .catch((error) => {
        statusMessage.style.cssText = `
                        color: red;
                    `;
        statusMessage.textContent = errorMessage;
        console.error(error);
      });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);
    formPostData(event, form);
  });
};
export default sendForm;
