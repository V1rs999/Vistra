let search = document.getElementById("search");
let search_icon = document.getElementById("search_icon");

search_icon.addEventListener("click", () => {
  search.classList.toggle("search_input");
});

let cato_bx = document.getElementById("cato_bx");
let left_scroll = document.getElementById("left_scroll");
let right_scroll = document.getElementById("right_scroll");

left_scroll.addEventListener("click", () => {
  cato_bx.scrollLeft -= 100;
});
right_scroll.addEventListener("click", () => {
  cato_bx.scrollLeft += 100;
});

let mvoes_bx_1 = document.getElementById("mvoes_bx_1");
let left_scroll1 = document.getElementById("left_scroll1");
let right_scroll1 = document.getElementById("right_scroll1");

left_scroll1.addEventListener("click", () => {
  mvoes_bx_1.scrollLeft -= 150;
});
right_scroll1.addEventListener("click", () => {
  mvoes_bx_1.scrollLeft += 150;
});

// year and a-z box start
let year = document.getElementById("year");
let a_z = document.getElementById("a_z");

year.addEventListener("click", () => {
  year.classList.toggle("show_year1");
});
a_z.addEventListener("click", () => {
  a_z.classList.toggle("show_year1");
});

// header slider start

let header_dur = document.getElementById("header_dur");
let header_gen = document.getElementById("header_gen");
let header_title = document.getElementById("header_title");
let header_pra = document.getElementById("header_pra");
let header = document.getElementsByTagName("header")[0];
let slider_btn = document.getElementsByClassName("slider");

const slider_load = () => {
  setTimeout(() => {
    header.style.background =
      "url('/img/121213.jpg') no-repeat center center/cover";
    header_dur.innerText = "1h 47min";
    header_gen.innerHTML = `<i class="fas fa-star"></i>6.5
        <span>Action / Adventure / Sci-Fi</span>`;
    header_title.innerText = "Rampage";
    header_pra.innerText =
      "From Wikipedia, the free encyclopedia Rampage is a series of video games released by Midway (1986–2009) and Warner Bros. Interactive Entertainment (2009–present) for the arcade and various consoles. The basic premise of the games is that, due to experiment-related accidents, the player controls a human transformed into a giant monster.";
    slider_btn[0].style.background = "#fff";
    slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
  }, 0000);
  setTimeout(() => {
    header.style.background =
      "url('/img/121214.jpg') no-repeat center center/cover";
    header_dur.innerText = "1h 57min";
    header_gen.innerHTML = `<i class="fas fa-star"></i>8.5
        <span>Comady / Action / Sci-Fi</span>`;
    header_title.innerText = "Ant-Man";
    header_pra.innerText =
      "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 12th film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed from a screenplay by the writing teams of Edgar Wright and Joe Cornish, and Adam McKay";
    slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[1].style.background = "#fff";
    slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
  }, 5000);
  setTimeout(() => {
    header.style.background =
      "url('/img/121215.jpg') no-repeat center center/cover";
    header_dur.innerText = "2h 10min";
    header_gen.innerHTML = `<i class="fas fa-star"></i>9.2
        <span>Comady / Action / Drama</span>`;
    header_title.innerText = "Pirates of the Caribbean";
    header_pra.innerText =
      "Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.";
    slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[2].style.background = "#fff";
  }, 10000);
};

setInterval(slider_load, 15000);
slider_load();

// Movies Box Set

const movies = [
  {
    id: 36,
    img: "/img/the gazi attck.jpg",
    down_img: "img/the-ghazi-attack-poster.webp",
    title: "The Gazi Attack",
    letter: "t",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "none",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 9.9,
    url: "the_gazi_attack.html",
    tppr: "trend",
    msot: "movie",
    screen1: "img/gazi1.jpg",
    screen2: "img/gazi2.jpg",
    screen3: "img/gazi3.jpg",
    ph420: "img/the-ghazi-attack-poster.webp",
    ph720: "mimg/comndo.jpg",
    ph1080: "img/the-ghazi-attack-poster.webp",
  },
  {
    id: 35,
    img: "/img/comndo.jpg",
    title: "Comndo",
    letter: "c",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "none",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 9.3,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 34,
    img: "/img/caption phillips.jpg",
    title: "Caption Phillips",
    letter: "c",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "none",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 9.1,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 33,
    img: "/img/bloodshoot.jpg",
    title: "Blood Shoot",
    letter: "b",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "none",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 9.7,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 32,
    img: "/img/blade.jpg",
    title: "Blade",
    letter: "b",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "none",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 7.7,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 31,
    img: "/img/takepoint.webp",
    title: "Take Point",
    letter: "t",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "none",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 7.9,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 30,
    img: "/img/battel drown.jpg",
    title: "Battel Drown",
    letter: "b",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 8.9,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 29,
    img: "/img/bagi.jpg",
    title: "Bagi",
    letter: "b",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 8.8,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 28,
    img: "/img/bad boys.jpg",
    title: "Bad Boys",
    letter: "b",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 6.8,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 27,
    img: "/img/ateet.jpg",
    title: "Ateet",
    letter: "a",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 9.7,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 26,
    img: "/img/aqwaman.jpg",
    title: "Aqwaman",
    letter: "a",
    genre1: "action",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 9.6,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 25,
    img: "/img/angel.jpg",
    title: "Angel",
    letter: "a",
    genre1: "action",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 8.8,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 24,
    img: "/img/allahdin.jpg",
    title: "Allahdin",
    letter: "a",
    genre1: "action",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 8.2,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 23,
    img: "/img/air.jpg",
    title: "Air",
    letter: "a",
    genre1: "none",
    genre2: "crime",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 9.1,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 22,
    img: "/img/acceleration.jpg",
    title: "Acceler ration",
    letter: "a",
    genre1: "none",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 9.9,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
  {
    id: 21,
    img: "/img/abcd.jpg",
    title: "ABCD",
    letter: "a",
    genre1: "none",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 7.9,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
  },
];
// all array copyed!

// action button and active box

let action1 = document.getElementById("action1");
let action_bx = document.getElementById("action_bx");

action1.addEventListener("click", () => {
  action1.classList.toggle("cato_button_active");
  action_bx.classList.toggle("movie_box_active");
});

const action_array = movies.filter((e) => {
  return e.genre1 == "action";
});

action_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `;

  action_bx.appendChild(card);
});

// crime button and active box

let crime1 = document.getElementById("crime1");
let crime_bx = document.getElementById("crime_bx");

crime1.addEventListener("click", () => {
  crime1.classList.toggle("cato_button_active");
  crime_bx.classList.toggle("movie_box_active");
});

const crime_array = movies.filter((e) => {
  return e.genre2 == "crime";
});

crime_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `;

  crime_bx.appendChild(card);
});

// drama button and active box

let drama1 = document.getElementById("drama1");
let drama_bx = document.getElementById("drama_bx");

drama1.addEventListener("click", () => {
  drama1.classList.toggle("cato_button_active");
  drama_bx.classList.toggle("movie_box_active");
});

const drama_array = movies.filter((e) => {
  return e.genre8 == "drama";
});

drama_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `;

  drama_bx.appendChild(card);
});

// movies box2 start
// all box start
let all = document.getElementById("all");

window.addEventListener("load", () => {
  movies.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `;

    all.appendChild(card);
  });
});
// latest box start
let latest = document.getElementById("latest");

let latest_array = movies.filter((e) => {
  return e.upload == "latest";
});

window.addEventListener("load", () => {
  latest_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `;

    latest.appendChild(card);
  });
});
// 2022 box start
let year_2022 = document.getElementById("year_2022");

let year2022 = movies.filter((e) => {
  return e.year == "2022";
});

window.addEventListener("load", () => {
  year2022.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `;

    year_2022.appendChild(card);
  });
});
// 2021 box start
let year_2021 = document.getElementById("year_2021");

let year2021 = movies.filter((e) => {
  return e.year == "2021";
});

window.addEventListener("load", () => {
  year2021.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `;

    year_2021.appendChild(card);
  });
});
// 2020 box start
let year_2020 = document.getElementById("year_2020");

let year2020 = movies.filter((e) => {
  return e.year == "2020";
});

window.addEventListener("load", () => {
  year2020.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `;

    year_2020.appendChild(card);
  });
});
