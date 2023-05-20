import {movies} from "../js/card_movies.js";

let action_bx = document.getElementById('action_bx');



const action_array = movies.filter((e) => {
    return e.genre == "action";
});

action_array.forEach(element => {
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

    action_bx.appendChild(card);
});

let crime_bx = document.getElementById('crime_bx');

const crime_array = movies.filter((e) => {
    return e.genre == "crime";
});

crime_array.forEach(element => {
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

    crime_bx.appendChild(card);
});