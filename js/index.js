const botaoSalvar = document.querySelector(".botao-salvar")
const nomeProjeto = document.querySelector(".nome-projeto")
const descricaoProjeto = document.querySelector(".descricao-projeto")

botaoSalvar.addEventListener("click", () => {
    if (typeof(Storage) !== "undefined") {
        const projeto = montaProjeto()
        console.log(projeto)
        salvaLocalStorage(projeto)
    } else {
        console.log("Não suporta o Local Storage")
    }
    
    location.reload()
})

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