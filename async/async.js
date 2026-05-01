console.log("Это точка входа в асинхронный код");

const userData = localStorage.getItem("userData");
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
  if (event.target.tagName === "BUTTON") {
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
  let html = "";
  loading.textContent = "";
  cards.forEach((element) => {
    html += `<div class="card">
      <p>Номер: <span>${element.id}</span></p>
      <p>Имя: <span>${element.name}</span></p>
      <p>Фамилия: <span>${element.surname}</span></p>
      <p>Возраст: <span>${element.age}</span></p>
      <p>gmail: <span>${element.email}</span></p>
      <p>Страна: <span>${element.country}</span></p>
      <p>Город: <span>${element.city}</span></p>
      <p>Улица: <span>${element.street}</span></p>
      <p>Админ: <span>${element.isAdmin}</span></p>
      <button data-id="${element.id}">Удалить карточку</button>
    </div>
    `;
  });
  container.innerHTML = html;
};

if (userData === null) {
  fetchUserData();
} else {
  const parsedData = JSON.parse(userData);
  currentData = parsedData;
  renderCards(parsedData);
}
