// !Мейн сторінка
var search = document.getElementById("search");
var search_icon = document.getElementById("search_icon");
var subMenu = document.getElementById("subMenu");

search_icon.addEventListener("click", function () {
  search.classList.toggle("search_input");
});

// subMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

// header slider start

var header = document.getElementsByTagName("main")[0];
var slider_btn = document.getElementsByClassName("slider");

var mvoes_bx_1 = document.getElementById("mvoes_bx_1");
var left_scroll1 = document.getElementById("left_scroll1");
var right_scroll1 = document.getElementById("right_scroll1");

if (mvoes_bx_1) {
  left_scroll1.addEventListener("click", function () {
    mvoes_bx_1.scrollLeft -= 150;
  });
  right_scroll1.addEventListener("click", function () {
    mvoes_bx_1.scrollLeft += 150;
  });
}

var year = document.getElementById("year");
var a_z = document.getElementById("a_z");

if (year) {
  year.addEventListener("click", function () {
    year.classList.toggle("show_year1");
  });
}

if (a_z) {
  a_z.addEventListener("click", function () {
    a_z.classList.toggle("show_a_z1");
  });
}

var tab_lists = document.querySelectorAll(".tabs_list ul li");
var tab_items = document.querySelectorAll(".tab_item");

tab_lists.forEach(function (list) {
  list.addEventListener("click", function () {
    var tab_data = list.getAttribute("data-tc");

    tab_lists.forEach(function (list) {
      list.classList.remove("active");
    });
    list.classList.add("active");

    tab_items.forEach(function (item) {
      var tab_class = item.getAttribute("class").split(" ");
      if (tab_class.includes(tab_data)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
