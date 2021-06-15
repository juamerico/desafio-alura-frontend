const botaoSalvar = document.querySelector(".botao-salvar")
const nomeProjeto = document.querySelector(".nome-projeto")
const descricaoProjeto = document.querySelector(".descricao-projeto")

//só permite salvar se tiver algo escrito no nome e na descrição
let tamanhoNome = 0
let tamanhoDescricao = 0
nomeProjeto.addEventListener("input", () => {
    tamanhoNome = nomeProjeto.value.length
})
descricaoProjeto.addEventListener("input", () => {
    tamanhoDescricao = descricaoProjeto.value.length
})

function salvaProjeto() {
    if (typeof(Storage) !== "undefined" && tamanhoDescricao > 0 && tamanhoNome > 0) {
        const projeto = montaProjeto()
        console.log(projeto)
        salvaLocalStorage(projeto)
    }
}

function montaProjeto() {
    let projeto = {
        'id': atribuiId(),
        'detalhesDoProjeto': {
            'nomeDoProjeto': nomeProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'codigo': areaDoCodigo.querySelector("code").innerText,
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

//salvar imagem
import domtoimage from '../node_modules'
const require = createRequire(import.meta.url)

const botaoDownload = document.querySelector(".botao-download")

function downloadImagem() {
    domtoimage.toBlob(document.querySelector(".fundo-colorido"))
        .then(function (blob) {
        window.saveAs(blob, "code.png");
        }
    )
}

botaoDownload.addEventListener("click", () => {
    downloadImagem()
})