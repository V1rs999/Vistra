// !Мейн сторінка
let search = document.getElementById("search");
let search_icon = document.getElementById("search_icon");
let subMenu = document.getElementById("subMenu");

search_icon.addEventListener("click", () => {
  search.classList.toggle("search_input");
});

// subMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

// header slider start

let header = document.getElementsByTagName("main")[0];
let slider_btn = document.getElementsByClassName("slider");

const slider_load = () => {
  setTimeout(() => {
    header.style.background =
      "url('../img/121213.jpg') no-repeat center center/cover";
    document.getElementById("header_dur").innerText = "1h 47min";
    document.getElementById(
      "header_gen"
    ).innerHTML = `<i class="fas fa-star"></i>6.5
            <span>Action / Adventure / Sci-Fi</span>`;
    document.getElementById("header_title").innerText = "Rampage";
    document.getElementById("header_pra").innerText =
      "From Wikipedia, the free encyclopedia Rampage is a series of video games released by Midway (1986–2009) and Warner Bros. Interactive Entertainment (2009–present) for the arcade and various consoles. The basic premise of the games is that, due to experiment-related accidents, the player controls a human transformed into a giant monster.";
    slider_btn[0].style.background = "#fff";
    slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
  }, 0000);
  setTimeout(() => {
    header.style.background =
      "url('../img/121214.jpg') no-repeat center center/cover";
    document.getElementById("header_dur").innerText = "1h 57min";
    document.getElementById(
      "header_gen"
    ).innerHTML = `<i class="fas fa-star"></i>8.5
            <span>Comedy / Action / Sci-Fi</span>`;
    document.getElementById("header_title").innerText = "Ant-Man";
    document.getElementById("header_pra").innerText =
      "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 12th film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed from a screenplay by the writing teams of Edgar Wright and Joe Cornish, and Adam McKay";
    slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[1].style.background = "#fff";
    slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
  }, 3000);
  setTimeout(() => {
    header.style.background =
      "url('../img/121215.jpg') no-repeat center center/cover";
    document.getElementById("header_dur").innerText = "2h 10min";
    document.getElementById(
      "header_gen"
    ).innerHTML = `<i class="fas fa-star"></i>9.2
            <span>Comedy / Action / Drama</span>`;
    document.getElementById("header_title").innerText =
      "Pirates of the Caribbean";
    document.getElementById("header_pra").innerText =
      "Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.";
    slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[2].style.background = "#fff";
  }, 6000);
};

setInterval(slider_load, 15000);
slider_load();

//cato

const mvoes_bx_1 = document.getElementById("mvoes_bx_1");
const left_scroll1 = document.getElementById("left_scroll1");
const right_scroll1 = document.getElementById("right_scroll1");

if (mvoes_bx_1) {
  left_scroll1.addEventListener("click", () => {
    mvoes_bx_1.scrollLeft -= 150;
  });
  right_scroll1.addEventListener("click", () => {
    mvoes_bx_1.scrollLeft += 150;
  });
}

const year = document.getElementById("year");
const a_z = document.getElementById("a_z");

if (year) {
  year.addEventListener("click", () => {
    year.classList.toggle("show_year1");
  });
}

if (a_z) {
  a_z.addEventListener("click", () => {
    a_z.classList.toggle("show_a_z1");
  });
}

// Movies Box
const movies = [
{
  id: 32,
  img: "../img/comndo.jpg",
  title: "Comndo",
  letter: "c",
  genre1: "action",
  genre2: "none",
  genre4: "none",
  genre5: "animation",
  genre6: "none",
  genre7: "documentary",
  genre8: "none",
  year: 2020,
  rate: 9.3,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 31,
  img: "../img/captionphillips.webp",
  title: "Caption Phillips",
  letter: "c",
  genre1: "action",
  genre2: "none",
  genre4: "none",
  genre5: "animation",
  genre6: "none",
  genre7: "documentary",
  genre8: "none",
  year: 2020,
  rate: 9.1,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 30,
  img: "../img/bloodshoot.jpg",
  title: "Blood Shoot",
  letter: "b",
  genre1: "action",
  genre2: "none",
  genre4: "none",
  genre5: "animation",
  genre6: "none",
  genre7: "documentary",
  genre8: "none",
  year: 2021,
  rate: 9.7,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 29,
  img: "../img/blade.jpg",
  title: "Blade",
  letter: "b",
  genre1: "action",
  genre2: "none",
  genre4: "none",
  genre5: "animation",
  genre6: "none",
  genre7: "documentary",
  genre8: "none",
  year: 2021,
  rate: 7.7,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 28,
  img: "../img/takepoint.webp",
  title: "Take Point",
  letter: "t",
  genre1: "action",
  genre2: "none",
  genre4: "none",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "none",
  year: 2021,
  rate: 7.9,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 27,
  img: "../img/batteldrown.webp",
  title: "Battel Drown",
  letter: "b",
  genre1: "action",
  genre2: "none",
  genre4: "none",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "none",
  year: 2020,
  rate: 8.9,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 26,
  img: "../img/bagi.jpg",
  title: "Bagi",
  letter: "b",
  genre1: "action",
  genre2: "none",
  genre4: "none",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "none",
  year: 2020,
  rate: 8.8,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 25,
  img: "../img/badboys.webp",
  title: "Bad Boys",
  letter: "b",
  genre1: "action",
  genre2: "crime",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "none",
  year: 2021,
  rate: 6.8,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 24,
  img: "../img/ateet.jpg",
  title: "Ateet",
  letter: "a",
  genre1: "action",
  genre2: "crime",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "none",
  year: 2020,
  rate: 9.7,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 23,
  img: "../img/aqwaman.jpg",
  title: "Aqwaman",
  letter: "a",
  genre1: "action",
  genre2: "crime",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "none",
  year: 2020,
  rate: 9.6,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 22,
  img: "../img/angel.jpg",
  title: "Angel",
  letter: "a",
  genre1: "action",
  genre2: "crime",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "none",
  year: 2021,
  rate: 8.8,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 21,
  img: "../img/allahdin.jpg",
  title: "Allahdin",
  letter: "a",
  genre1: "action",
  genre2: "crime",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "none",
  year: 2021,
  rate: 8.2,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 20,
  img: "../img/air.jpg",
  title: "Air",
  letter: "a",
  genre1: "action",
  genre2: "crime",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "none",
  year: 2021,
  rate: 9.1,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 19,
  img: "../img/acceleration.jpg",
  title: "Acceler ration",
  letter: "a",
  genre1: "none",
  genre2: "crime",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2020,
  rate: 9.9,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 18,
  img: "../img/abcd.jpg",
  title: "ABCD",
  letter: "a",
  genre1: "none",
  genre2: "crime",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2020,
  rate: 7.9,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 17,
  img: "../img/6under.jpg",
  title: "6 Underground",
  letter: "u",
  genre1: "none",
  genre2: "crime",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2021,
  rate: 9.2,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 16,
  img: "../img/noah.webp",
  title: "Noah",
  letter: "n",
  genre1: "none",
  genre2: "crime",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2020,
  rate: 8.2,
  url: "themanor.html",
  tppr: "popular",
  msot: "movie"
},
{
  id: 15,
  img: "../img/notimethedie.webp",
  title: "No Time The Die",
  letter: "n",
  genre1: "none",
  genre2: "crime",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2021,
  rate: 8.5,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie",
  upload: "latest"
},
{
  id: 14,
  img: "../img/oz.webp",
  title: "OZ",
  letter: "o",
  genre1: "none",
  genre2: "crime",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2021,
  rate: 8.6,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 13,
  img: "../img/paul.webp",
  title: "Paul",
  letter: "p",
  genre1: "none",
  genre2: "none",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2021,
  rate: 9.3,
  url: "themanor.html",
  tppr: "recent",
  msot: "movie",
  upload: "latest"
},
{
  id: 12,
  img: "../img/pixels.webp",
  title: "Pixels",
  letter: "p",
  genre1: "none",
  genre2: "none",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2020,
  rate: 7.3,
  url: "themanor.html",
  tppr: "popluar",
  msot: "movie"
},
{
  id: 11,
  img: "../img/Qismat_2.webp",
  title: "Qismat 2",
  letter: "q",
  genre1: "none",
  genre2: "none",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2020,
  rate: 5.8,
  url: "themanor.html",
  tppr: "recent",
  msot: "movie",
  upload: "latest"
},
{
  id: 10,
  img: "../img/red_notice.jpg",
  title: "Red Notice",
  letter: "r",
  genre1: "none",
  genre2: "none",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2020,
  rate: 6.8,
  url: "themanor.html",
  tppr: "recent",
  msot: "movie"
},
{
  id: 9,
  img: "../img/shershaah.webp",
  title: "Shershaah",
  letter: "s",
  genre1: "none",
  genre2: "none",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2020,
  rate: 7.8,
  url: "themanor.html",
  tppr: "recent",
  msot: "series",
  upload: "latest"
},
{
  id: 8,
  img: "../img/shiddat.webp",
  title: "Shiddat",
  letter: "s",
  genre1: "none",
  genre2: "none",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2020,
  rate: 8.8,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie"
},
{
  id: 7,
  img: "../img/snakeeyes.webp",
  title: "Snake Eyes",
  letter: "s",
  genre1: "none",
  genre2: "none",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2020,
  rate: 8.9,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie",
  upload: "latest"
},
{
  id: 6,
  img: "../img/takepoint.webp",
  title: "Take Point",
  letter: "t",
  genre1: "none",
  genre2: "none",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2021,
  rate: 9.8,
  url: "themanor.html",
  tppr: "popular",
  msot: "movie"
},
{
  id: 5,
  img: "../img/The-Manor.webp",
  title: "The Manor",
  letter: "t",
  genre1: "none",
  genre2: "none",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2021,
  rate: 8.8,
  url: "themanor.html",
  tppr: "trend",
  msot: "movie",
  upload: "latest"
},
{
  id: 4,
  img: "../img/theblackwater.webp",
  title: "The Black Water",
  letter: "t",
  genre1: "none",
  genre2: "none",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2020,
  rate: 8.8,
  url: "theblackwater.html",
  tppr: "recent",
  msot: "series"
},
{
  id: 3,
  img: "../img/theoutpost.webp",
  title: "The Out Post",
  letter: "t",
  genre1: "none",
  genre2: "none",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2019,
  rate: 5.8,
  url: "theoutpost.html",
  tppr: "recent",
  msot: "series",
  upload: "latest"
},
{
  id: 2,
  img: "../img/thevault.webp",
  title: "The Vault",
  letter: "t",
  genre1: "none",
  genre2: "none",
  genre4: "biography",
  genre5: "animation",
  genre6: "comady",
  genre7: "documentary",
  genre8: "drama",
  year: 2019,
  rate: 6,
  url: "thevault.html",
  tppr: "popular",
  msot: "movie"
},
{
  id: 1,
  img: "../img/venom2.webp",
  title: "Venom 2",
  letter: "v",
  genre1: "none",
  genre2: "none",
  genre3: "biography",
  genre4: "animation",
  genre5: "comady",
  genre6: "documentary",
  genre7: "drama",
  year: 2021,
  rate: 9.2,
  url: "venom2.html",
  tppr: "trend",
  msot: "movie",
  upload: "latest"
},
]
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

//   latest box start 
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