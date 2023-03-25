let search = document.getElementById('search');
let search_icon = document.getElementById('search_icon');

search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input');
})

let subMneu = document.getElementById("subMenu");

function toggleMenu() {
    subMneu.classList.toggle("open-menu");
}

// header slider start

let header_dur = document.getElementById('header_dur');
let header_gen = document.getElementById('header_gen');
let header_title = document.getElementById('header_title');
let header_pra = document.getElementById('header_pra');
let header = document.getElementsByTagName('header')[0];
let slider_btn = document.getElementsByClassName('slider');

const slider_load = () => {
    setTimeout(() => {
        header.style.background = "url('/img/121213.jpg') no-repeat center center/cover";
        header_dur.innerText = "1h 47min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>6.5
        <span>Action / Adventure / Sci-Fi</span>`;
        header_title.innerText = "Rampage";
        header_pra.innerText = "From Wikipedia, the free encyclopedia Rampage is a series of video games released by Midway (1986–2009) and Warner Bros. Interactive Entertainment (2009–present) for the arcade and various consoles. The basic premise of the games is that, due to experiment-related accidents, the player controls a human transformed into a giant monster.";
        slider_btn[0].style.background = "#fff";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    }, 0000);
    setTimeout(() => {
        header.style.background = "url('/img/121214.jpg') no-repeat center center/cover";
        header_dur.innerText = "1h 57min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>8.5
        <span>Comady / Action / Sci-Fi</span>`;
        header_title.innerText = "Ant-Man";
        header_pra.innerText = "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 12th film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed from a screenplay by the writing teams of Edgar Wright and Joe Cornish, and Adam McKay";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "#fff";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    }, 5000);
    setTimeout(() => {
        header.style.background = "url('/img/121215.jpg') no-repeat center center/cover";
        header_dur.innerText = "2h 10min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>9.2
        <span>Comady / Action / Drama</span>`;
        header_title.innerText = "Pirates of the Caribbean";
        header_pra.innerText = "Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "#fff";
    }, 10000);
}

setInterval(slider_load, 15000);
slider_load();

// year and a-z box start 
const year = document.getElementById('year');
const a_z = document.getElementById('a_z');

year.addEventListener('click', () => {
    year.classList.toggle('show_year1')
});
a_z.addEventListener('click', () => {
    a_z.classList.toggle('show_year1')
});

const mvoes_bx_1 = document.getElementById('mvoes_bx_1');
const left_scroll1 = document.getElementById('left_scroll1');
const right_scroll1 = document.getElementById('right_scroll1');

left_scroll1.addEventListener('click', () => {
    mvoes_bx_1.scrollLeft -= 150;
})
right_scroll1.addEventListener('click', () => {
    mvoes_bx_1.scrollLeft += 150;
})


// let cato_bx = document.getElementById('cato_bx');
// let left_scroll = document.getElementById('left_scroll');
// let right_scroll = document.getElementById('right_scroll');

// left_scroll.addEventListener('click', () => {
//     cato_bx.scrollLeft -= 100;
// })
// right_scroll.addEventListener('click', () => {
//     cato_bx.scrollLeft += 100;
// })





