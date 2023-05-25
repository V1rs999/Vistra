const userData = localStorage.getItem("userId");
const userId = JSON.parse(userData);

fetch(`/auth/getMyList/${userId.userId}`)
  .then((response) => response.json())
  .then((data) => {
    // Retrieved data from the server
    // Add cards to the page

    const myListContainer = document.getElementById("action_bx"); // Container to hold the cards

    const createCard = (post) => {
      const { picture, title, year, url, rate } = post;
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
      myListContainer.appendChild(card);
    };

    data.forEach((post) => {
      createCard(post);
    });
  })
  .catch((error) => {
    console.log("Error fetching data from the server:", error);
  });
