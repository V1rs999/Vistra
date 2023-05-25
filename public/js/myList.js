fetch("http://16.170.236.235:5000/api/posts/")
  .then((response) => response.json())
  .then((data) => {
    // Отримано дані з сервера
    // Додати картки на сторінку

    const genres = [
      { buttonId: "action1", containerId: "action_bx", genre: "бойовик" },
      { buttonId: "drama1", containerId: "drama_bx", genre: "драма" },
      { buttonId: "comady1", containerId: "comady_bx", genre: "комедія" },
      { buttonId: "biography1", containerId: "biography_bx", genre: "біографія" },
      { buttonId: "documentary1", containerId: "documentary_bx", genre: "документальний" },
      { buttonId: "crime1", containerId: "crime_bx", genre: "кримінальний" }
    ];

    const createCards = (array, container, myListArray) => {
      array.forEach((element) => {
        const { id, picture, title, year, url, rate } = element;
        const card = document.createElement("div");
        card.classList.add("card");

        // Перевірити, чи ID існує у списку MyList
        const isLiked = myListArray.includes(id);

        // Використовувати змінну isLiked для умовного додавання CSS-класу або стилів до картки
        const cardClass = isLiked ? "liked-card" : "";

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

        // Додати cardClass до classList картки
        card.classList.add(cardClass);

        container.appendChild(card);
      });
    };

    const filterByGenre = (genre) => {
      return data.filter((e) => e.genre === genre);
