const botaoSalvar = document.querySelector(".botao-salvar")
const nomeProjeto = document.querySelector(".nome-projeto")
const descricaoProjeto = document.querySelector(".descricao-projeto")
const seletorCor = document.querySelector(".seletor-cor")

//só permite salvar se tiver algo escrito no nome e na descrição
let tamanhoNome = 0
let tamanhoDescricao = 0
nomeProjeto.addEventListener("input", () => {
    tamanhoNome = nomeProjeto.value.length
})
descricaoProjeto.addEventListener("input", () => {
    tamanhoDescricao = descricaoProjeto.value.length
})

botaoSalvar.addEventListener("click", () => {
    if (typeof(Storage) !== "undefined" && tamanhoDescricao > 0 && tamanhoNome > 0) {
        const projeto = montaProjeto()
        console.log(projeto)
        salvaLocalStorage(projeto)
    }
})

function montaProjeto() {
    let projeto = {
        'id': atribuiId(),
        'detalhesDoProjeto': {
            'nomeDoProjeto': nomeProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'codigo': document.querySelector("code").innerText,
            'corDaBorda': seletorCor.value,
            'linguagem': linguagem.value
        }
    }
    return projeto
}

function atribuiId() {
    return localStorage.length

}

function salvaLocalStorage(objetoJson) {
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}

///
import domtoimage from "./domToImage"

const canvas = document.querySelector(".fundo-colorido")
const botaoDownload = document.querySelector(".botao-download")

botaoDownload.addEventListener("click", function(){
    domtoimage.toPng(canvas)
    .then(function (blob) {
        window.saveAs(blob, "code.png")
    })
})