const menuHamburguer = document.querySelector('.header .menu-hamburguer img');
const menu = document.querySelector ('.header .menu');

menuHamburguer.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    if (!(menu.classList.contains('hidden'))) {
        menuHamburguer.src = "assets/images/icon-menu-close.svg";
    } else {
        menuHamburguer.src = "assets/images/icon-menu.svg";
    }
})