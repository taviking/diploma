const sendForm = () => {
  // console.log("wtf");
  const errorMessage = "Ой вей! Что-то не так...";
  const successMessage = "Спасибо! Мы скоро с вами свяжемся!";
  const loadMessage = "Загрузка...";
  const statusMessage = document.createElement("div");
  const form = document.querySelector(".rf> form");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalCallback = document.querySelector(".modal-callback");

  let formInputs = form.querySelectorAll("input");

  // валидация формы
  document.body.addEventListener("input", (e) => {
    let target = e.target;
    if (target.name === "fio") {
      target.value = target.value.replace(/[^А-яа-яЁё-\s]/gi, "");
    } else if (target.name === "tel") {
      target.value = target.value.replace(/[^+\d]/g, "");
    }
  });

  //отправка формы server.php

  const postData = (body) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
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
        if (response.status !== 201) {
          throw new Error("something wrong");
        }
        statusMessage.style.cssText = `
                        color: green;
                    `;
        statusMessage.textContent = successMessage;
        setTimeout(() => {
          formInputs[0].value = "";
          formInputs[1].value = "";
          statusMessage.textContent = "";
          modalCallback.style.display = "none";
          modalOverlay.style.display = "none";
        }, 5000);
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

    if (
      formInputs[0].value.length < 2 ||
      formInputs[1].value.length < 8 ||
      formInputs[1].value.length > 12
    ) {
      statusMessage.style.cssText = `
                        color: red;
                    `;
      statusMessage.textContent = "Введите корректные данные!!!";
    } else {
      formPostData(event, form);
    }
  });
};
export default sendForm;
