console.log("Это точка входа в асинхронный код");

const cardTemplate = document.getElementById("card-template");
const loading = document.getElementById("loading");
const container = document.getElementById("container");
const deleteAllCardsBtn = document.getElementById("deleteAll");
const restoreAllCardsBtn = document.getElementById("restoreAll");
let currentData = [];

function getLocalData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

async function fetchUserData() {
  const loading = document.getElementById("loading");
  const loadingText = loading.querySelector("#loading-text");

  loading.classList.remove("hidden");
  loading.querySelector(".loader").style.display = "inline-block";
  loadingText.textContent = "Восстановление данных...";
  try {
    const response = await fetch("users.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userData = await response.json();
    if (currentData.length === userData.length && currentData.length !== 0) {    
      alert("Все данные уже отображены");
      return;
    }
    currentData = userData;
    await renderCards(userData);
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

async function renderCards(cards) {
  loading.querySelector("#loading-text").textContent = "";
  container.innerHTML = "";

  await new Promise((resolve) => setTimeout(resolve, 2000));

  cards.forEach((element) => {
    const cardClone = cardTemplate.content.cloneNode(true);
    const cardElement = cardClone.querySelector(".card");
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

    const deleteBtn = cardClone.querySelector(".js-delete-btn");

    deleteBtn.addEventListener("click", () => {
      cardElement.classList.add("removing");

      setTimeout(() => {
        currentData = currentData.filter((card) => card.id !== element.id);
        localStorage.setItem("userData", JSON.stringify(currentData));
        cardElement.remove();
      }, 500);
    });
    container.appendChild(cardClone);
  });
};

function initApp() {
  const saveData = getLocalData("userData");
  if (saveData !== null) {
    currentData = saveData;
    renderCards(saveData);
  } else {
    fetchUserData(); 
  }
}
window.addEventListener("load", initApp)
