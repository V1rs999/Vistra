import {movies} from "../js/card_movies.js";

window.addEventListener('load', () => {
    movies.forEach(element => {
      const { img, title, year, url, rate } = element;
      let card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
      <a href="${url}">
                  <img src="${img}" alt="${title}">
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
        `
    all.appendChild(card);
    });
  })

let latest = document.getElementById('latest');

let latest_array = movies.filter((e) => {
    return e.upload == "latest";
})

window.addEventListener('load', () => {
        latest_array.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
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
    `

            latest.appendChild(card);
        });
    })

// 
    let year_2022 = document.getElementById('year_2022');

let year2022 = movies.filter((e) => {
    return e.year == "2022";
})

window.addEventListener('load', () => {
        year2022.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
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
    `

            year_2022.appendChild(card);
        });
    })
    // 2021 box start 
let year_2021 = document.getElementById('year_2021');

let year2021 = movies.filter((e) => {
    return e.year == "2021";
})

window.addEventListener('load', () => {
        year2021.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
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
    `

            year_2021.appendChild(card);
        });
    })


let letter_a = document.getElementById('letter_a');

let letter_a_array = movies.filter((e) => {
    return e.letter == "a";
})

window.addEventListener('load', () => {
        letter_a_array.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
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
    `

            letter_a.appendChild(card);
        });
    })
    // letter_b box start 
let letter_b = document.getElementById('letter_b');

let letter_b_array = movies.filter((e) => {
    return e.letter == "b";
})

window.addEventListener('load', () => {
        letter_b_array.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
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
    `

            letter_b.appendChild(card);
        });
    });


    let rate8 = document.getElementById('rate8');

    let rate8_array = movies.filter((e) => {
        return e.rate >= 8;
    })
    
    window.addEventListener('load', () => {
            rate8_array.forEach(element => {
                const { img, title, year, url, rate } = element;
                let card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
        <a href="${url}">
                    <img src="${img}" alt="${title}">
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
        `
    
                rate8.appendChild(card);
            });
        });

    let rate4 = document.getElementById('rate4');

    let rate4_array = movies.filter((e) => {
        return e.rate <= 7;
    })
    
    window.addEventListener('load', () => {
            rate4_array.forEach(element => {
                const { img, title, year, url, rate } = element;
                let card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
        <a href="${url}">
                    <img src="${img}" alt="${title}">
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
        `
    
                rate4.appendChild(card);
            });
        });

        let all_btn = document.getElementById('all_btn');

        all_btn.addEventListener('click', () => {
            all_btn.classList.toggle('cato_button_active');
            all.classList.toggle('box2_actives');
        });
        
        let latest_btn = document.getElementById('latest_btn');
        
        latest_btn.addEventListener('click', () => {
            latest_btn.classList.toggle('cato_button_active');
            latest.classList.toggle('box2_actives');
        });
        let year2022__btn = document.getElementById('year2022__btn');
        
        year2022__btn.addEventListener('click', () => {
            year2022__btn.classList.toggle('cato_button_active');
            year_2022.classList.toggle('box2_actives');
        });
        let year2021__btn = document.getElementById('year2021__btn');
        
        year2021__btn.addEventListener('click', () => {
            year2021__btn.classList.toggle('cato_button_active');
            year_2021.classList.toggle('box2_actives');
        });
        
        let letter_a_btn = document.getElementById('letter_a_btn');
        
        letter_a_btn.addEventListener('click', () => {
            letter_a_btn.classList.toggle('cato_button_active');
            letter_a.classList.toggle('box2_actives');
        });
        let letter_b_btn = document.getElementById('letter_b_btn');
        
        letter_b_btn.addEventListener('click', () => {
            letter_b_btn.classList.toggle('cato_button_active');
            letter_b.classList.toggle('box2_actives');
        });
        // rat change 
        
        let change_input = document.getElementById('change_input');
        
        change_input.addEventListener('change', () => {
            if (change_input.value >= 8) {
                rate8.classList.add('box2_actives');
            } else {
                rate8.classList.remove('box2_actives');
            }
            if (change_input.value < 8) {
                rate4.classList.add('box2_actives');
            } else {
                rate4.classList.remove('box2_actives');
            }
        });