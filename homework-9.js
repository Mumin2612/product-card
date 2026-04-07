import Form from './form.js';
const registrationForm = new Form("#registrationForm");

const openWindow = document.querySelector(".modal");
const btnForRegister = document.querySelector("#registrationForm");
const passs1 = document.querySelector("#user-password");
const passs2 = document.querySelector("#user-password-confirm");
const errorMessage = document.querySelector("#error-message");
const subscribeForm = document.querySelector(".subscribe-form");
const emailInput = document.querySelector(".footer__input");

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (subscribeForm.checkValidity()) {
    const subscribeData = {
      email: emailInput.value
    };
    console.log("Подписка:", subscribeData);

    emailInput.value = "";
  }
});

btnForRegister.addEventListener("submit", (event) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  event.preventDefault();
  if (!registrationForm.isValid()) {
    console.log("Форма пустая");
    return;
  } else {
    if (passs1.value !== passs2.value) {
      errorMessage.textContent = "Пароли не совпадают";
      errorMessage.style.display = "block";
      return;
    } else if (!passwordRegex.test(passs1.value)) {
      errorMessage.textContent = "Пароль слишком простой (нужно 8 симв., буквы и цифры)";
      errorMessage.style.display = "block";
    }
    else {
      errorMessage.style.display = "none";
      openWindow.classList.remove("modal-showed");
      
      const userData = registrationForm.getValues();
      console.log(userData);
    };
  };
});