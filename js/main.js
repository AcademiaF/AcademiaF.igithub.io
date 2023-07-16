const butonMenu = document.querySelector(".headerPrincipal__menu");
const menu = document.querySelector(".headerPrincipal__menu__list");
const cerrar = document.querySelector(".iconoCerrar");

butonMenu.addEventListener('click', ()=>{
    menu.style.display = 'block';
})

cerrar.addEventListener('click', ()=>{
    menu.style.display = 'none';
})