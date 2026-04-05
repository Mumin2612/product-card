const buttonRegister = document.querySelector(".footer__register-btn");
const openWindow = document.querySelector(".modal");
const closeWindow = document.querySelector(".modal__close-btn");
const btnForRegister = document.querySelector("#registrationForm");
const passs1 = document.querySelector("#user-password");
const passs2 = document.querySelector("#user-password-confirm");
const errorMessage = document.querySelector("#error-message");
const userName = document.querySelector("#user-name");
const userSurname = document.querySelector("#user-surname");
const userOfBirth = document.querySelector("#user-birth");
const userLogin = document.querySelector("#user-login");
const subscribeForm = document.querySelector(".subscribe-form");
const emailInput = document.querySelector(".footer__input");
let user = {}

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

buttonRegister.addEventListener("click", () => {
  openWindow.classList.add("modal-showed");
});

closeWindow.addEventListener("click", () => {
  openWindow.classList.remove("modal-showed");
});

btnForRegister.addEventListener("submit", (event) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  event.preventDefault();
  if (!btnForRegister.checkValidity()) {
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

      user = {
        name: userName.value,
        surname: userSurname.value,
        birthday: userOfBirth.value,
        login: userLogin.value,
        password: passs1.value,
        createdOn: new Date()
      }
      console.log(user);
    };
  };
});