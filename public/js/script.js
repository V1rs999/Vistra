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
      "url('/public/img/121213.jpg') no-repeat center center/cover";
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
      "url('/public/img/121214.jpg') no-repeat center center/cover";
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
      "url('/public/img/121215.jpg') no-repeat center center/cover";
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
