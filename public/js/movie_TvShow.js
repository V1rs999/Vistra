fetch("http://localhost:5000/api/posts/")
  .then((response) => response.json())
  .then((data) => {

    let all = document.getElementById('all');
    let all_btn = document.getElementById('all_btn');

    all_btn.addEventListener('click', () => {
        all_btn.classList.toggle('cato_button_active');
        all.classList.toggle('box2_actives');
    });

    const all_array = data.filter((e) => {
        return e.genre == "action" || e.genre == "drama" || e.genre == "biography" || e.genre == "comady" || e.genre == "documentary" || e.genre == "crime";
    });
    all_array.forEach(element => {
            const { picture, title, year, url, rate } = element;
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
            <a href="/player?url=${encodeURIComponent(
                url
            )}"> <!-- Add the URL as a query parameter -->  
                <div><img src="${picture}" alt="${title}"></div>
                <div class="content">
                <h2>${title}</h2>
                <div class="metadata">
                    <span>${year}</span>
                    <div class="rate">
                    <i onclick="window.location.href='/home'" class="fas fa-heart"></i>
                    <i class="fas fa-eye"></i>
                    <i class="fas fa-star"></i>
                    <span>${rate}</span>
                    </div>
                </div>
                </div>
            </a>
            `;

                all.appendChild(card);
            });

    // ---------------------------------------------------

    
    const years = [
        { btnId: 'year2023__btn', containerId: 'year_2023', year: '2023' },
        { btnId: 'year2022__btn', containerId: 'year_2022', year: '2022' },
        { btnId: 'year2021__btn', containerId: 'year_2021', year: '2021' },
        { btnId: 'year2020__btn', containerId: 'year_2020', year: '2020' }
      ];
      
      years.forEach(({ btnId, containerId, year }) => {
        const btn = document.getElementById(btnId);
        const container = document.getElementById(containerId);
      
        btn.addEventListener('click', () => {
          all.classList.remove('box2_actives');
          all_btn.classList.remove('cato_button_active');
          btn.classList.toggle('cato_button_active');
          container.classList.toggle('box2_actives');
        });
      
        const filteredData = data.filter(e => e.year == year);
      
        filteredData.forEach(element => {
          const { picture, title, year, url, rate } = element;
          const card = createCard(picture, title, year, url, rate);
          container.appendChild(card);
        });
      });
      
      function createCard(picture, title, year, url, rate) {
        const card = document.createElement('div');
        card.classList.add('card');
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
          </a>
        `;
        return card;
      }
      
      
//   -----------------

const letterFilters = [
    { btnId: 'letter_a_btn', containerId: 'letter_a', content: 'a' },
    { btnId: 'letter_b_btn', containerId: 'letter_b', content: 'b' },
    { btnId: 'letter_c_btn', containerId: 'letter_c', content: 'c' },
    { btnId: 'letter_d_btn', containerId: 'letter_d', content: 'd' },
  ];
  
  letterFilters.forEach(({ btnId, containerId, content }) => {
    const button = document.getElementById(btnId);
    const container = document.getElementById(containerId);
  
    button.addEventListener('click', () => {
      button.classList.toggle('cato_button_active');
      container.classList.toggle('box2_actives');
    });
  
    const filteredData = data.filter((e) => e.content == content);
  
    filteredData.forEach((element) => {
      const { picture, title, year, url, rate } = element;
      const card = createCard(picture, title, year, url, rate);
      container.appendChild(card);
    });
  });
  
  function createCard(picture, title, year, url, rate) {
    const card = document.createElement('div');
    card.classList.add('card');
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
      </a>
    `;
  
    return card;
  }


  let change_input = document.getElementById('change_input');

  change_input.addEventListener('change', () => {
      if (change_input.value >= 5) {
          rate8.classList.add('box2_actives');
      } else {
          rate8.classList.remove('box2_actives');
      }
      if (change_input.value <= 5) {
          rate4.classList.add('box2_actives');
      } else {
          rate4.classList.remove('box2_actives');
      }
  
      if (change_input.value == 5){
          rate4.classList.remove('box2_actives');
          rate8.classList.remove('box2_actives');
      }
  });
  
          // -----------------------------
          let rate8 = document.getElementById('rate8');
  
      let rate8_array = data.filter((e) => {
          return e.rate > 5;
      })
  
          rate8_array.forEach(element => {
              const { picture, title, year, url, rate } = element;
              let card = document.createElement("div");
              card.classList.add("card");
              card.innerHTML = `
              <a href="/player?url=${encodeURIComponent(
                  url
              )}"> <!-- Add the URL as a query parameter -->  
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
              </a>
              `;
  
              rate8.appendChild(card);
          });
      
      // rate4 box start 
      let rate4 = document.getElementById('rate4');
  
      let rate4_array = data.filter((e) => {
          return e.rate <= 5;
      })
  
      
          rate4_array.forEach(element => {
              const { picture, title, year, url, rate } = element;
              let card = document.createElement("div");
              card.classList.add("card");
              card.innerHTML = `
              <a href="/player?url=${encodeURIComponent(
                  url
              )}"> <!-- Add the URL as a query parameter -->  
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
              </a>
              `;
  
              rate4.appendChild(card);
          });
  
    })

.catch((error) => {
    console.log("Помилка при отриманні даних з сервера:", error);
  });
