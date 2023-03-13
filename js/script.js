let search = document.getElementById('search');
let search_icon = document.getElementById('search_icon');

search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input');
})

let cato_bx = document.getElementById('cato_bx');
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');

left_scroll.addEventListener('click', () => {
    cato_bx.scrollLeft -= 100;
})

right_scroll.addEventListener('click', () => {
    cato_bx.scrollLeft += 100;
})


let mvoes_bx_1 = document.getElementById('mvoes_bx_1');
let left_scrolll = document.getElementById('left_scrolll');
let right_scrolll = document.getElementById('right_scrolll');

left_scrolll.addEventListener('click', () => {
    mvoes_bx_1.scrollLeft -= 150;
})

right_scrolll.addEventListener('click', () => {
    mvoes_bx_1.scrollLeft += 150;
})
