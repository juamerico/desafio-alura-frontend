/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/comunidade.js":
/*!******************************!*\
  !*** ./src/js/comunidade.js ***!
  \******************************/
/***/ (() => {

eval("const todosOsProjetos = document.querySelector(\".container\")\r\n\r\nnew function () {\r\n    mostraProjetos()\r\n}\r\n\r\nfunction mostraProjetos() {\r\n    if (localStorage.length > 0) {\r\n\r\n        let projetos = []\r\n\r\n        for (let i = 0; i < localStorage.length; i++) {\r\n            projetos.push(JSON.parse(localStorage.getItem(i)))\r\n            console.log(\"objeto criado\")\r\n        }\r\n\r\n        projetos.forEach(projeto => {\r\n            todosOsProjetos.innerHTML += montaCartao(projeto)\r\n            const cadaProjeto = todosOsProjetos.querySelector(`[data-id=\"${projeto.id}\"]`)\r\n            cadaProjeto.querySelector(\"code\").innerText = projeto.detalhesDoProjeto.codigo\r\n        })\r\n\r\n    } else {\r\n        console.log(\"Nenhum projeto para exibir\")\r\n    }\r\n\r\n}\r\n\r\nfunction montaCartao(projeto) {\r\n    let cartao = `\r\n        <div class=\"projeto\" data-id=\"${projeto.id}\">\r\n\r\n            <div style=\"background-color:${projeto.detalhesDoProjeto.corDaBorda}\" id=\"fundo-colorido\" class=\"fundo-colorido\">\r\n                <div class=\"fundo-preto\">\r\n                    <img class=\"mac_buttons\" src=\"img/mac_buttons.svg\" alt=\"Três círculos: um vermelho, um amarelo e um verde\">\r\n\r\n                    <pre><code class=\"hljs ${projeto.detalhesDoProjeto.linguagem}\"></code></pre>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"projeto-info\">\r\n                <h1>${projeto.detalhesDoProjeto.nomeDoProjeto}</h1>\r\n                <p>${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>\r\n\r\n                <span class=\"flex\">\r\n                    <span class=\"info-linguagem\">${projeto.detalhesDoProjeto.linguagem}</span>\r\n                </span>\r\n            </div>\r\n\r\n            <div class=\"auto-layout\">\r\n                <div class=\"container-social container-comentarios\">\r\n                    <img class=\"icone-social\" src=\"img/Balao.svg\" alt=\"Balão de fala\"><span class=\"comentarios\">0</span>\r\n                </div>\r\n\r\n                <div class=\"container-social container-curtidas\">\r\n                    <img class=\"icone-social branco\" src=\"img/Coracao.svg\" alt=\"Coração\"><img class=\"icone-social vermelho\" src=\"img/Coracao_v.svg\" alt=\"Coração\"><span class=\"curtidas\">0</span>\r\n                </div>\r\n\r\n                <div class=\"usuario-logado projeto-usuario\">\r\n                    <img class=\"foto-usuario\" src=\"img/Photo.svg\" alt=\"Foto de perfil do usuário\">\r\n                    <span class=\"nome\">@Harry</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `\r\n    return cartao\r\n\r\n}\r\n\r\n\r\n//menu social no hover\r\n[...document.querySelectorAll(\".projeto\")].forEach(item => {\r\n    item.addEventListener('mouseover', () => {\r\n        item.querySelector(\".auto-layout\").style.display = \"grid\"\r\n    })\r\n    \r\n    item.addEventListener('mouseout', () => {\r\n        item.querySelector(\".auto-layout\").style.display = \"none\"\r\n    })\r\n})\r\n\r\n//curtidas\r\ndocument.querySelectorAll(\".container-curtidas\").forEach(item => {\r\n    item.addEventListener('click', () => {\r\n        if (item.querySelector(\".curtidas\").textContent !== \"1\") {\r\n            item.querySelector(\".branco\").style.display = \"none\"\r\n            item.querySelector(\".vermelho\").style.display = \"unset\"\r\n            item.querySelector(\".curtidas\").textContent = \"1\"\r\n        } else {\r\n            item.querySelector(\".branco\").style.display = \"unset\"\r\n            item.querySelector(\".vermelho\").style.display = \"none\"\r\n            item.querySelector(\".curtidas\").textContent = \"0\"\r\n        }\r\n    })\r\n})\n\n//# sourceURL=webpack://desafio_frontend/./src/js/comunidade.js?");

/***/ }),

/***/ "./src/js/hl.js":
/*!**********************!*\
  !*** ./src/js/hl.js ***!
  \**********************/
/***/ (() => {

eval("const areaDoCodigo = document.querySelector(\"pre\")\r\nconst linguagem = document.querySelector(\".seletor-linguagem\")\r\nconst botaoVisualizar = document.querySelector(\".botao-visualizar\")\r\n\r\nareaDoCodigo.firstChild.focus()\r\n\r\nfunction mudaLinguagem() {\r\n    const codigo = areaDoCodigo.querySelector(\"code\").innerText\r\n    areaDoCodigo.innerHTML = `<code class=\"editor hljs ${linguagem.value}\" contenteditable=\"true\" spellcheck=\"false\"></code>`\r\n    areaDoCodigo.firstChild.innerText = codigo\r\n}\r\n\r\nlinguagem.addEventListener('change', () => {\r\n    mudaLinguagem();\r\n})\r\n\r\nbotaoVisualizar.addEventListener('click', () => {\r\n    const codigo = areaDoCodigo.querySelector(\"code\")\r\n    hljs.highlightBlock(codigo)\r\n})\r\n\r\n// seletor de cor funcional\r\n\r\nlet seletorCor = document.querySelector(\".seletor-cor\")\r\nlet fundoColoridoEditor = document.querySelector(\".fundo__colorido--editor\")\r\n\r\nfunction trocaCor() {\r\n    fundoColoridoEditor.style.backgroundColor = seletorCor.value\r\n}\r\n\r\nseletorCor.addEventListener(\"input\", trocaCor)\r\n\r\n//\n\n//# sourceURL=webpack://desafio_frontend/./src/js/hl.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("const botaoSalvar = document.querySelector(\".botao-salvar\")\r\nconst nomeProjeto = document.querySelector(\".nome-projeto\")\r\nconst descricaoProjeto = document.querySelector(\".descricao-projeto\")\r\n\r\n//só permite salvar se tiver algo escrito no nome e na descrição\r\nlet tamanhoNome = 0\r\nlet tamanhoDescricao = 0\r\nnomeProjeto.addEventListener(\"input\", () => {\r\n    tamanhoNome = nomeProjeto.value.length\r\n})\r\ndescricaoProjeto.addEventListener(\"input\", () => {\r\n    tamanhoDescricao = descricaoProjeto.value.length\r\n})\r\n\r\nfunction salvaProjeto() {\r\n    if (typeof(Storage) !== \"undefined\" && tamanhoDescricao > 0 && tamanhoNome > 0) {\r\n        const projeto = montaProjeto()\r\n        console.log(projeto)\r\n        salvaLocalStorage(projeto)\r\n    }\r\n}\r\n\r\nfunction montaProjeto() {\r\n    let projeto = {\r\n        'id': atribuiId(),\r\n        'detalhesDoProjeto': {\r\n            'nomeDoProjeto': nomeProjeto.value,\r\n            'descricaoDoProjeto': descricaoProjeto.value,\r\n            'codigo': areaDoCodigo.querySelector(\"code\").innerText,\r\n            'corDaBorda': seletorCor.value,\r\n            'linguagem': linguagem.value\r\n        }\r\n    }\r\n    return projeto\r\n}\r\n\r\nfunction atribuiId() {\r\n    return localStorage.length\r\n\r\n}\r\n\r\nfunction salvaLocalStorage(objetoJson) {\r\n    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))\r\n}\n\n//# sourceURL=webpack://desafio_frontend/./src/js/index.js?");

/***/ }),

/***/ "./src/js/menu_mobile.js":
/*!*******************************!*\
  !*** ./src/js/menu_mobile.js ***!
  \*******************************/
/***/ (() => {

eval("// menu mobile\r\n\r\nlet barras = document.querySelector(\".barras\")\r\nlet menuMobile = document.querySelector(\".menu-mobile\")\r\nlet fechar = document.querySelector(\".fechar\")\r\n\r\nbarras.addEventListener(\"click\", () => {\r\n    menuMobile.classList.add(\"mostra-menu\")\r\n    barras.style.display = \"none\"\r\n    fechar.style.display = \"inline-block\"\r\n})\r\n\r\nfechar.addEventListener(\"click\", () => {\r\n    menuMobile.classList.remove(\"mostra-menu\")\r\n    fechar.style.display = \"none\"\r\n    barras.style.display = \"inline-block\"\r\n})\n\n//# sourceURL=webpack://desafio_frontend/./src/js/menu_mobile.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/comunidade.js"]();
/******/ 	__webpack_modules__["./src/js/hl.js"]();
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/menu_mobile.js"]();
/******/ 	
/******/ })()
;