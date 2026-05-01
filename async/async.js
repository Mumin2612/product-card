console.log("Это точка входа в асинхронный код");

const getLocalData = () => JSON.parse(localStorage.getItem("userData"));
const cardTemplate = document.getElementById("card-template");
const loading = document.getElementById("loading");
const container = document.getElementById("container");
const deleteAllCardsBtn = document.getElementById("deleteAll");
const restoreAllCardsBtn = document.getElementById("restoreAll");
let currentData = [];

async function fetchUserData() {
  loading.innerHTML =
    '<span class="loader"></span><p>Восcтовление данных...</p>';
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const response = await fetch("users.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userData = await response.json();
    if (currentData.length === userData.length && currentData.length !== 0) {
      loading.innerHTML = "";
      setTimeout(() => {
        alert("Все данные уже отображены");
      }, 10);

      return;
    }

    currentData = userData;
    renderCards(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("Данные пользователей:", userData);
  } catch (error) {
    console.error("Ошибка при загрузке данных пользователей:", error);
    loading.textContent = "Произошла ошибка при загрузке данных";
  }
}

deleteAllCardsBtn.addEventListener("click", () => {
  localStorage.clear();
  container.innerHTML = "";
  currentData = [];
  loading.textContent =
    "Данные очищены. Нажмите 'Восстановить', чтобы загрузить их заново";
});

restoreAllCardsBtn.addEventListener("click", () => {
  fetchUserData();
});

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-delete-btn")) {
    const cardId = event.target.dataset.id;
    const cardElement = event.target.closest(".card");
    cardElement.classList.add("removing");

    setTimeout(() => {
      currentData = currentData.filter((card) => card.id != cardId);
      localStorage.setItem("userData", JSON.stringify(currentData));
      renderCards(currentData);
    }, 500);
  }
});

const renderCards = (cards) => {
  loading.textContent = "";
  container.innerHTML = "";
  cards.forEach((element) => {
    const cardClone = cardTemplate.content.cloneNode(true);
    cardClone.querySelector(".js-id").textContent = element.id;
    cardClone.querySelector(".js-name").textContent = element.name;
    cardClone.querySelector(".js-surname").textContent = element.surname;
    cardClone.querySelector(".js-age").textContent = element.age;
    cardClone.querySelector(".js-gmail").textContent = element.gmail;
    cardClone.querySelector(".js-country").textContent = element.country;
    cardClone.querySelector(".js-city").textContent = element.city;
    cardClone.querySelector(".js-street").textContent = element.street;
    cardClone.querySelector(".js-isAdmin").textContent = element.isAdmin;
    cardClone.querySelector(".js-delete-btn").dataset.id = element.id;
    container.appendChild(cardClone);
  });
};

function initApp() {
  const saveData = getLocalData()
  if (saveData !== null) {
    currentData = saveData;
    renderCards(saveData);
  } else {
    fetchUserData(); 
  }
}
window.addEventListener("load", initApp)