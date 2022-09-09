const addActive = document.querySelector('.modal');
const closed = document.getElementsByClassName('modal__close');
const modalAll = document.querySelectorAll('.modal');
const show = document.querySelector('.show-success');

addActive.classList.add('modal_active');

let redElement = closed[0];
let greenElement = closed[2];

show.onclick = () => {
    modalAll[0].classList.remove('modal_active');
    modalAll[1].classList.add('modal_active');    
}

redElement.onclick = () => {
    modalAll[0].classList.remove('modal_active');
}

greenElement.onclick = () => {
    modalAll[1].classList.remove('modal_active');
}

