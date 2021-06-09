const todosOsProjetos = document.querySelector(".container")

new function () {
    mostraProjetos()
}

function mostraProjetos() {
    if (localStorage.length == 0) {
        return
    }

    let projetos = []

    for (let i = 0; i < localStorage.length; i++) {
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }

    projetos.forEach(projeto => {
        todosOsProjetos.innerHTML += montaCartao(projeto)
        const cadaProjeto = todosOsProjetos.querySelector(`[data-id="${projeto.id}"]`)
        cadaProjeto.querySelector("code").innerText = projeto.detalhesDoProjeto.codigo
    })

}

function montaCartao(projeto) {
    let cartao = `
        <div class="projeto" data-id="${projeto.id}">

            <div style="background-color:${projeto.detalhesDoProjeto.corDaBorda}" class="fundo-colorido">
                <div class="fundo-preto">
                    <img class="mac_buttons" src="img/mac_buttons.svg" alt="Três círculos: um vermelho, um amarelo e um verde">

                    <pre><code class="hljs ${projeto.detalhesDoProjeto.linguagem}"></code></pre>
                </div>
            </div>

            <div class="projeto-info">
                <h1>${projeto.detalhesDoProjeto.nomeDoProjeto}</h1>
                <p>${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>

                <span class="flex">
                    <span class="info-linguagem">${projeto.detalhesDoProjeto.linguagem}</span>
                    <button class="botao-download">Salvar .png</button>
                </span>
            </div>

            <div class="auto-layout">
                <div class="container-social container-comentarios">
                    <img class="icone-social" src="img/Balao.svg" alt="Balão de fala"><span class="comentarios">0</span>
                </div>

                <div class="container-social container-curtidas">
                    <img class="icone-social branco" src="img/Coracao.svg" alt="Coração"><img class="icone-social vermelho" src="img/Coracao_v.svg" alt="Coração"><span class="curtidas">0</span>
                </div>

                <div class="usuario-logado projeto-usuario">
                    <img class="foto-usuario" src="img/Photo.svg" alt="Foto de perfil do usuário">
                    <span class="nome">@Harry</span>
                </div>
            </div>
        </div>
    `
    return cartao

}


//menu social no hover
[...document.querySelectorAll(".projeto")].forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector(".auto-layout").style.display = "grid"
    })
    
    item.addEventListener('mouseout', () => {
        item.querySelector(".auto-layout").style.display = "none"
    })
})

//curtidas
document.querySelectorAll(".container-curtidas").forEach(item => {
    item.addEventListener('click', () => {
        if (item.querySelector(".curtidas").textContent !== "1") {
            item.querySelector(".branco").style.display = "none"
            item.querySelector(".vermelho").style.display = "unset"
            item.querySelector(".curtidas").textContent = "1"
        } else {
            item.querySelector(".branco").style.display = "unset"
            item.querySelector(".vermelho").style.display = "none"
            item.querySelector(".curtidas").textContent = "0"
        }
    })
})


//criar imagem
/* const node = document.querySelectorAll(".fundo-colorido");

domtoimage.toPng(node)
    .then(function (dataUrl) {
        const img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
 */