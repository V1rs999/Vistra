fetch("http://localhost:5000/api/posts/")
  .then((response) => response.json())
  .then((data) => {
    // Отримано дані з сервера
    // Додайте карточки на сторінку

    // Приклад додавання карточок до контейнеру action_bx
    const action_bx = document.getElementById("action_bx");
    data.forEach((element) => {
      const { picture, title, year, url, rate } = element;
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <a href="/player?url=${encodeURIComponent(
          url
        )}"> <!-- Add the URL as a query parameter -->  
          <img src="${picture}" alt="${title}">
          <div class="content">
            <h2>${title}</h2>
            <div class="metadata">
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-heart"></i>
                <i class="fas fa-eye"></i>
                <i class="fas fa-star"></i>
                <span>${rate}</span>
              </div>
            </div>
          </div>
        </a>
      `;
      action_bx.appendChild(card);
    });

    // Додайте карточки до інших контейнерів на аналогічний спосіб
  })
  .catch((error) => {
    console.log("Помилка при отриманні даних з сервера:", error);
  });
