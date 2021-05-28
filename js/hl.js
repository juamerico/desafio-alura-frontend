const areaDoCodigo = document.querySelector("pre")
const linguagem = document.querySelector(".seletor-linguagem")
const botaoVisualizar = document.querySelector(".botao-visualizar")

function mudaLinguagem() {
    const codigo = areaDoCodigo.querySelector("code")
    areaDoCodigo.innerHTML = `<code class="hljs ${linguagem.value}" contenteditable="true" name="editor" id="editor"></code>`
    areaDoCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', () => {
    mudaLinguagem();
})

botaoVisualizar.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector("code")
    hljs.highlightBlock(codigo)
})