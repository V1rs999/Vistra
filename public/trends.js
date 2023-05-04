import { movies } from "../js/card_movies.js";

var action1 = document.getElementById('action1');
var action_bx = document.getElementById('action_bx');

action1.addEventListener('click', function () {
    action1.classList.toggle('cato_button_active');
    action_bx.classList.toggle('movie_box_active');
});

var action_array = movies.filter(function (e) {
    return e.genre1 == "action";
});

action_array.forEach(function (element) {
    var img = element.img,
        title = element.title,
        year = element.year,
        url = element.url,
        rate = element.rate;

    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = '\n    <a href="' + url + '">\n                <img src="' + img + '" alt="' + title + '">\n                <div class="content">\n                    <h2>' + title + '</h2>\n                    <div class="metadata">\n                        <span>' + year + '</span>\n                        <div class="rate">\n                            <i class="fas fa-heart"></i>\n                            <i class="fas fa-eye"></i>\n                            <i class="fas fa-star"></i>\n                            <span>' + rate + '</span>\n                        </div>\n                    </div>\n                </div>\n            </a>\n    ';

    action_bx.appendChild(card);
});

var crime1 = document.getElementById('crime1');
var crime_bx = document.getElementById('crime_bx');

crime1.addEventListener('click', function () {
    crime1.classList.toggle('cato_button_active');
    crime_bx.classList.toggle('movie_box_active');
});

var crime_array = movies.filter(function (e) {
    return e.genre2 == "crime";
});

crime_array.forEach(function (element) {
    var img = element.img,
        title = element.title,
        year = element.year,
        url = element.url,
        rate = element.rate;

    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = '\n    <a href="' + url + '">\n                <img src="' + img + '" alt="' + title + '">\n                <div class="content">\n                    <h2>' + title + '</h2>\n                    <div class="metadata">\n                        <span>' + year + '</span>\n                        <div class="rate">\n                            <i class="fas fa-heart"></i>\n                            <i class="fas fa-eye"></i>\n                            <i class="fas fa-star"></i>\n                            <span>' + rate + '</span>\n                        </div>\n                    </div>\n                </div>\n            </a>\n    ';

    crime_bx.appendChild(card);
});

var biography1 = document.getElementById('biography1');
var biography_bx = document.getElementById('biography_bx');

biography1.addEventListener('click', function () {
    biography1.classList.toggle('cato_button_active');
    biography_bx.classList.toggle('movie_box_active');
});

var biography_array = movies.filter(function (e) {
    return e.genre3 == "biography";
});

biography_array.forEach(function (element) {
    var img = element.img,
        title = element.title,
        year = element.year,
        url = element.url,
        rate = element.rate;

    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = '\n    <a href="' + url + '">\n                <img src="' + img + '" alt="' + title + '">\n                <div class="content">\n                    <h2>' + title + '</h2>\n                    <div class="metadata">\n                        <span>' + year + '</span>\n                        <div class="rate">\n                            <i class="fas fa-heart"></i>\n                            <i class="fas fa-eye"></i>\n                            <i class="fas fa-star"></i>\n                            <span>' + rate + '</span>\n                        </div>\n                    </div>\n                </div>\n            </a>\n    ';

    biography_bx.appendChild(card);
});

var drama1 = document.getElementById('drama1');
var drama_bx = document.getElementById('drama_bx');

drama1.addEventListener('click', function () {
    drama1.classList.toggle('cato_button_active');
    drama_bx.classList.toggle('movie_box_active');
});

var drama_array = movies.filter(function (e) {
    return e.genre7 == "drama";
});

drama_array.forEach(function (element) {
    var img = element.img,
        title = element.title,
        year = element.year,
        url = element.url,
        rate = element.rate;

    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = '\n    <a href="' + url + '">\n                <img src="' + img + '" alt="' + title + '">\n                <div class="content">\n                    <h2>' + title + '</h2>\n                    <div class="metadata">\n                        <span>' + year + '</span>\n                        <div class="rate">\n                            <i class="fas fa-heart"></i>\n                            <i class="fas fa-eye"></i>\n                            <i class="fas fa-star"></i>\n                            <span>' + rate + '</span>\n                        </div>\n                    </div>\n                </div>\n            </a>\n    ';
    drama_bx.appendChild(card);
});