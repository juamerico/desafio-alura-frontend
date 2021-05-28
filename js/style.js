// seletor de cor funcional na página do editor

let seletorCor = document.querySelector(".seletor-cor")
let fundoColoridoEditor = document.querySelector(".fundo__colorido--editor")

function trocaCor() {
    fundoColoridoEditor.style.backgroundColor = seletorCor.value
}

seletorCor.addEventListener("input", trocaCor)
//