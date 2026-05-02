console.log("Это точка входа в асинхронный код");

const getLocalData = () => JSON.parse(localStorage.getItem("userData"));
const cardTemplate = document.getElementById("card-template");
const loading = document.getElementById("loading");
const container = document.getElementById("container");
const deleteAllCardsBtn = document.getElementById("deleteAll");
const restoreAllCardsBtn = document.getElementById("restoreAll");
let currentData = [];

async function fetchUserData() {
  const loading = document.getElementById("loading");
  const loadingText = loading.querySelector("#loading-text");

  loading.classList.remove("hidden");
  loading.querySelector(".loader").style.display = "inline-block";
  loadingText.textContent = "Восстановление данных...";
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch("users.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userData = await response.json();
    if (currentData.length === userData.length && currentData.length !== 0) {
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
    loading.querySelector("#loading-text").textContent = "Произошла ошибка при загрузке данных";
  } finally {
    const loading = document.getElementById("loading");
    loading.classList.add("hidden");
  }
}

deleteAllCardsBtn.addEventListener("click", () => {
  localStorage.clear();
  container.innerHTML = "";
  currentData = [];
  
  const loadingText = document.getElementById("loading-text");
  if (loadingText) {
    loadingText.textContent = "Данные очищены. Нажмите 'Восстановить', чтобы загрузить их заново";
  }
  loading.classList.remove("hidden");
  loading.querySelector(".loader").style.display = "none";
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
  loading.querySelector("#loading-text").textContent = "";
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