fetch("/api/posts/")
  .then((response) => response.json())
  .then((data) => {
    // Отримано дані з сервера
    // Додайте карточки на сторінку


    // Приклад додавання карточок до контейнеру action_bx
    const genres = [
      { buttonId: "action1", containerId: "action_bx", genre: "action" },
      { buttonId: "drama1", containerId: "drama_bx", genre: "drama" },
      { buttonId: "comady1", containerId: "comady_bx", genre: "comady" },
      { buttonId: "biography1", containerId: "biography_bx", genre: "biography" },
      { buttonId: "documentary1", containerId: "documentary_bx", genre: "documentary" },
      { buttonId: "crime1", containerId: "crime_bx", genre: "crime" }
    ];

    const createCards = (array, container) => {
      array.forEach((element) => {
        const { picture, title, year, url, rate } = element;
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <a href="/player?url=${encodeURIComponent(url)}">
            <div><img src="${picture}" alt="${title}"></div>
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
          </a>`;
        container.appendChild(card);
      });
    };

    const filterByGenre = (genre) => {
      return data.filter((e) => e.genre == genre);
    };

    genres.forEach(({ buttonId, containerId, genre }) => {
      const button = document.getElementById(buttonId);
      const container = document.getElementById(containerId);


      const filteredData = filterByGenre(genre);
      createCards(filteredData, container);
    });

    // Додайте карточки до інших контейнерів на аналогічний спосіб
  })
  .catch((error) => {
    console.log("Помилка при отриманні даних з сервера:", error);
  });