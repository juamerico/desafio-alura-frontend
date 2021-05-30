// hover no social da página de comunidades

let autoLayout = document.querySelector(".auto-layout")
let projeto = document.querySelector(".projeto")
let container = document.querySelector(".container")

projeto.addEventListener("mouseover", function() {
    autoLayout.classList.add("exibe")
})

projeto.addEventListener("mouseout", function() {
    autoLayout.classList.remove("exibe")
})

//