import { movies } from "../js/card_movies.js";

window.addEventListener('load', function () {
    movies.forEach(function (element) {
        var img = element.img,
            title = element.title,
            year = element.year,
            url = element.url,
            rate = element.rate;

        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = '\n      <a href="' + url + '">\n                  <img src="' + img + '" alt="' + title + '">\n                  <div class="content">\n                      <h2>' + title + '</h2>\n                      <div class="metadata">\n                          <span>' + year + '</span>\n                          <div class="rate">\n                              <i class="fas fa-heart"></i>\n                              <i class="fas fa-eye"></i>\n                              <i class="fas fa-star"></i>\n                              <span>' + rate + '</span>\n                          </div>\n                      </div>\n                  </div>\n              </a>\n        ';
        all.appendChild(card);
    });
});

var latest = document.getElementById('latest');

var latest_array = movies.filter(function (e) {
    return e.upload == "latest";
});

window.addEventListener('load', function () {
    latest_array.forEach(function (element) {
        var img = element.img,
            title = element.title,
            year = element.year,
            url = element.url,
            rate = element.rate;

        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = '\n    <a href="' + url + '">\n                <img src="' + img + '" alt="' + title + '">\n                <div class="content">\n                    <h2>' + title + '</h2>\n                    <div class="metadata">\n                        <span>' + year + '</span>\n                        <div class="rate">\n                            <i class="fas fa-heart"></i>\n                            <i class="fas fa-eye"></i>\n                            <i class="fas fa-star"></i>\n                            <span>' + rate + '</span>\n                        </div>\n                    </div>\n                </div> \n            </a>\n    ';

        latest.appendChild(card);
    });
});

// 
var year_2022 = document.getElementById('year_2022');

var year2022 = movies.filter(function (e) {
    return e.year == "2022";
});

window.addEventListener('load', function () {
    year2022.forEach(function (element) {
        var img = element.img,
            title = element.title,
            year = element.year,
            url = element.url,
            rate = element.rate;

        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = '\n    <a href="' + url + '">\n                <img src="' + img + '" alt="' + title + '">\n                <div class="content">\n                    <h2>' + title + '</h2>\n                    <div class="metadata">\n                        <span>' + year + '</span>\n                        <div class="rate">\n                            <i class="fas fa-heart"></i>\n                            <i class="fas fa-eye"></i>\n                            <i class="fas fa-star"></i>\n                            <span>' + rate + '</span>\n                        </div>\n                    </div>\n                </div> \n            </a>\n    ';

        year_2022.appendChild(card);
    });
});
// 2021 box start 
var year_2021 = document.getElementById('year_2021');

var year2021 = movies.filter(function (e) {
    return e.year == "2021";
});

window.addEventListener('load', function () {
    year2021.forEach(function (element) {
        var img = element.img,
            title = element.title,
            year = element.year,
            url = element.url,
            rate = element.rate;

        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = '\n    <a href="' + url + '">\n                <img src="' + img + '" alt="' + title + '">\n                <div class="content">\n                    <h2>' + title + '</h2>\n                    <div class="metadata">\n                        <span>' + year + '</span>\n                        <div class="rate">\n                            <i class="fas fa-heart"></i>\n                            <i class="fas fa-eye"></i>\n                            <i class="fas fa-star"></i>\n                            <span>' + rate + '</span>\n                        </div>\n                    </div>\n                </div> \n            </a>\n    ';

        year_2021.appendChild(card);
    });
});

var letter_a = document.getElementById('letter_a');

var letter_a_array = movies.filter(function (e) {
    return e.letter == "a";
});

window.addEventListener('load', function () {
    letter_a_array.forEach(function (element) {
        var img = element.img,
            title = element.title,
            year = element.year,
            url = element.url,
            rate = element.rate;

        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = '\n    <a href="' + url + '">\n                <img src="' + img + '" alt="' + title + '">\n                <div class="content">\n                    <h2>' + title + '</h2>\n                    <div class="metadata">\n                        <span>' + year + '</span>\n                        <div class="rate">\n                            <i class="fas fa-heart"></i>\n                            <i class="fas fa-eye"></i>\n                            <i class="fas fa-star"></i>\n                            <span>' + rate + '</span>\n                        </div>\n                    </div>\n                </div> \n            </a>\n    ';

        letter_a.appendChild(card);
    });
});
// letter_b box start 
var letter_b = document.getElementById('letter_b');

var letter_b_array = movies.filter(function (e) {
    return e.letter == "b";
});

window.addEventListener('load', function () {
    letter_b_array.forEach(function (element) {
        var img = element.img,
            title = element.title,
            year = element.year,
            url = element.url,
            rate = element.rate;

        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = '\n    <a href="' + url + '">\n                <img src="' + img + '" alt="' + title + '">\n                <div class="content">\n                    <h2>' + title + '</h2>\n                    <div class="metadata">\n                        <span>' + year + '</span>\n                        <div class="rate">\n                            <i class="fas fa-heart"></i>\n                            <i class="fas fa-eye"></i>\n                            <i class="fas fa-star"></i>\n                            <span>' + rate + '</span>\n                        </div>\n                    </div>\n                </div> \n            </a>\n    ';

        letter_b.appendChild(card);
    });
});

var rate8 = document.getElementById('rate8');

var rate8_array = movies.filter(function (e) {
    return e.rate >= 8;
});

window.addEventListener('load', function () {
    rate8_array.forEach(function (element) {
        var img = element.img,
            title = element.title,
            year = element.year,
            url = element.url,
            rate = element.rate;

        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = '\n        <a href="' + url + '">\n                    <img src="' + img + '" alt="' + title + '">\n                    <div class="content">\n                        <h2>' + title + '</h2>\n                        <div class="metadata">\n                            <span>' + year + '</span>\n                            <div class="rate">\n                                <i class="fas fa-heart"></i>\n                                <i class="fas fa-eye"></i>\n                                <i class="fas fa-star"></i>\n                                <span>' + rate + '</span>\n                            </div>\n                        </div>\n                    </div> \n                </a>\n        ';

        rate8.appendChild(card);
    });
});

var rate4 = document.getElementById('rate4');

var rate4_array = movies.filter(function (e) {
    return e.rate <= 7;
});

window.addEventListener('load', function () {
    rate4_array.forEach(function (element) {
        var img = element.img,
            title = element.title,
            year = element.year,
            url = element.url,
            rate = element.rate;

        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = '\n        <a href="' + url + '">\n                    <img src="' + img + '" alt="' + title + '">\n                    <div class="content">\n                        <h2>' + title + '</h2>\n                        <div class="metadata">\n                            <span>' + year + '</span>\n                            <div class="rate">\n                                <i class="fas fa-heart"></i>\n                                <i class="fas fa-eye"></i>\n                                <i class="fas fa-star"></i>\n                                <span>' + rate + '</span>\n                            </div>\n                        </div>\n                    </div> \n                </a>\n        ';

        rate4.appendChild(card);
    });
});

var all_btn = document.getElementById('all_btn');

all_btn.addEventListener('click', function () {
    all_btn.classList.toggle('cato_button_active');
    all.classList.toggle('box2_actives');
});

var latest_btn = document.getElementById('latest_btn');

latest_btn.addEventListener('click', function () {
    latest_btn.classList.toggle('cato_button_active');
    latest.classList.toggle('box2_actives');
});
var year2022__btn = document.getElementById('year2022__btn');

year2022__btn.addEventListener('click', function () {
    year2022__btn.classList.toggle('cato_button_active');
    year_2022.classList.toggle('box2_actives');
});
var year2021__btn = document.getElementById('year2021__btn');

year2021__btn.addEventListener('click', function () {
    year2021__btn.classList.toggle('cato_button_active');
    year_2021.classList.toggle('box2_actives');
});

var letter_a_btn = document.getElementById('letter_a_btn');

letter_a_btn.addEventListener('click', function () {
    letter_a_btn.classList.toggle('cato_button_active');
    letter_a.classList.toggle('box2_actives');
});
var letter_b_btn = document.getElementById('letter_b_btn');

letter_b_btn.addEventListener('click', function () {
    letter_b_btn.classList.toggle('cato_button_active');
    letter_b.classList.toggle('box2_actives');
});
// rat change 

var change_input = document.getElementById('change_input');

change_input.addEventListener('change', function () {
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