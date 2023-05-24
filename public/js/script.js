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

if (header) {
  const slides = [
    {
      background: "url('../img/121213.jpg') no-repeat center center/cover",
      duration: "1h 47min",
      genre: `<i class="fas fa-star"></i>6.5<span>Action / Adventure / Sci-Fi</span>`,
      title: "Rampage",
      description:
        "From Wikipedia, the free encyclopedia Rampage is a series of video games released by Midway (1986–2009) and Warner Bros. Interactive Entertainment (2009–present) for the arcade and various consoles. The basic premise of the games is that, due to experiment-related accidents, the player controls a human transformed into a giant monster.",
      activeIndex: 0,
    },
  {
    background: "url('../img/121214.jpg') no-repeat center center/cover",
    duration: "1h 57min",
    genre: `<i class="fas fa-star"></i>8.5<span>Comedy / Action / Sci-Fi</span>`,
    title: "Ant-Man",
    description:
      "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 12th film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed from a screenplay by the writing teams of Edgar Wright and Joe Cornish, and Adam McKay",
    activeIndex: 1,
  },
  {
    background: "url('../img/121215.jpg') no-repeat center center/cover",
    duration: "2h 10min",
    genre: `<i class="fas fa-star"></i>9.2<span>Comedy / Action / Drama</span>`,
    title: "Pirates of the Caribbean",
    description:
      "Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.",
    activeIndex: 2,
  },
];

const slider_load = () => {
  slides.forEach((slide, index) => {
    setTimeout(() => {
      header.style.background = slide.background;
      document.getElementById("header_dur").innerText = slide.duration;
      document.getElementById("header_gen").innerHTML = slide.genre;
      document.getElementById("header_title").innerText = slide.title;
      document.getElementById("header_pra").innerText = slide.description;

      Array.from(slider_btn).forEach((btn, btnIndex) => {
        btn.style.background =
          index === btnIndex ? "#fff" : "rgb(184, 184, 184, .1)";
      });
    }, index * 3000);
  });
};

setInterval(slider_load, slides.length * 3000);
slider_load();
}

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

const tab_lists = document.querySelectorAll(".tabs_list ul li");
const tab_items = document.querySelectorAll(".tab_item");

tab_lists.forEach(function (list) {
  list.addEventListener("click", function () {
    const tab_data = list.getAttribute("data-tc");

    tab_lists.forEach(function (list) {
      list.classList.remove("active");
    });
    list.classList.add("active");

    tab_items.forEach(function (item) {
      const tab_class = item.getAttribute("class").split(" ");
      if (tab_class.includes(tab_data)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const toggleActiveClass = (element, condition) => {
  if (condition) {
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
};

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  toggleActiveClass(toTop, window.pageYOffset > 100);
});


// ----------------------------

