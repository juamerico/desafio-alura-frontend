const areaDoCodigo = document.querySelector("pre")
const linguagem = document.querySelector(".seletor-linguagem")
const botaoVisualizar = document.querySelector(".botao-visualizar")

areaDoCodigo.firstChild.focus()

function mudaLinguagem() {
    const codigo = areaDoCodigo.querySelector("code")
    areaDoCodigo.innerHTML = `<code class="editor hljs ${linguagem.value}" contenteditable="true" spellcheck="false"></code>`
    areaDoCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', () => {
    mudaLinguagem();
})

botaoVisualizar.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector("code")
    hljs.highlightBlock(codigo)
})

// seletor de cor funcional

let seletorCor = document.querySelector(".seletor-cor")
let fundoColoridoEditor = document.querySelector(".fundo__colorido--editor")

function trocaCor() {
    fundoColoridoEditor.style.backgroundColor = seletorCor.value
}

seletorCor.addEventListener("input", trocaCor)

//