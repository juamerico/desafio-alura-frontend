// hover no social da página de comunidades

let autoLayout = document.querySelector(".auto-layout");
let projeto = document.querySelector(".projeto");
let container = document.querySelector(".container");

projeto.addEventListener("mouseover", function() {
    autoLayout.classList.add("exibe");
});

projeto.addEventListener("mouseout", function() {
    autoLayout.classList.remove("exibe");
});
//

// menu hamburger

let barras = document.querySelector(".barras")
let menuMobile = document.querySelector(".menu-mobile")
let fechar = document.querySelector(".fechar")

barras.addEventListener("click", () => {
    menuMobile.classList.add("mostra-menu")
    barras.style.display = "none"
    fechar.style.display = "inline-block"
})

fechar.addEventListener("click", () => {
    menuMobile.classList.remove("mostra-menu")
    fechar.style.display = "none"
    barras.style.display = "inline-block"
})