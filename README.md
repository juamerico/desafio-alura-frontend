## Desafio Front End - Alura Dev
### https://juamerico.github.io/desafio-alura-frontend/

### Objetivo
O projeto foi desenvolvido durante o Alura Challenges - Front End, com a proposta de criação de um site onde o usuário possa armazenar e compartilhar pequenos trechos de código com o destaque de sintaxe.</br></br>

### Criando um novo projeto na página de Editor de código
Para criar um novo projeto, basta digitar o trecho de código na área principal, escolher a linguagem utilizada, inserir um nome e uma breve descrição.\
Também é possível aplicar destaque de sintaxe.</br></br>

#### Destaque de sintaxe com highlight.js [src/index/js/hl.js](https://github.com/juamerico/desafio-alura/blob/main/src/index/js/hl.js)
A função `mudaLinguagem()` reescreve a tag da área de edição do código, ao mesmo tempo em que realiza a interpolação da linguagem selecionada como classe desta tag. Isso é necessário pois caso seja realizada apenas a inclusão da classe, o *highlight.js* pode interpretar a propriedade `innerHTML`, ao invés de recebê-la como string.\
Uma função anônima é adicionada ao evento de clique do botão **Botão visualizar com highlight**, e chamada através da biblioteca [highlight.js](https://highlightjs.org), que identifica a linguagem, através da classe previamente inserida na função `mudaLinguagem()`.</br></br>

#### Fazendo o download de arquivo PNG contendo o código digitado [src/index/js/index.js](https://github.com/juamerico/desafio-alura/blob/main/src/index/js/index.js)
Ao clicar no botão **Salvar .png** é ativada a função `domtoimage.toPng()`, da biblioteca [dom-to-image](https://github.com/tsayen/dom-to-image), em conjunto com o construtor `saveAs()`, da biblioteca [FileSaver.js](https://github.com/eligrey/FileSaver.js/), gerando um arquivo no formato PGN, contendo o trecho de código digitado pelo usuário.</br></br>

#### Salvando o projeto [src/index/js/index.js](https://github.com/juamerico/desafio-alura/blob/main/src/index/js/index.js)
Ao clicar no botão **Salvar projeto**, uma função anônima verifica se todos os campos (**Nome do projeto**, **Descrição do projeto**, **Linguagem**, **Cor de fundo**) estão preenchidos. Neste mesmo evento de clique também verifica se o localStorage está definido.\
Se todos estes critérios forem atendidos, então uma nova função `montaProjeto()` é chamada. Esta função cria um objeto chamado `projeto`, que contém todos os dados informados pelo usuário, enquanto cria um número de id único e sequencial para cada projeto, de acordo com a quantidade de itens salvos no localStorage.\
Em seguida, a função `salvaLocalStorage(objetoJson)` recebe o projeto como parâmetro, transforma-o em string (pois é a forma que o localStorage recebe os dados) e envia essa string para o localStorage.</br></br>

### Trabalhando com os projetos salvos na página de Comunidade
Agora que os projetos estão salvos no localStorage, é necessário transformá-los em cards interativos, com novas funcionalidades, como *curtir*, fazer o download de uma imagem contendo os dados do projeto, e também imprimir estes cards no corpo do site.</br></br>

#### Imprimindo o objeto na página de Comunidade [src/comunidade/js/comunidade.js](https://github.com/juamerico/desafio-alura/blob/main/src/comunidade/js/comunidade.js)
A função `mostraProjetos()` *(que é chamada ao carregar a página)*  verifica se o localStorage possui algum item. Caso possua, é criada uma array para armazenar todos os projetos, e para cada projeto é feita a conversão de string para objeto JSON.\
Esta array executa a função `montaCartao(projeto)`, que recebe como parâmetro cada projeto individualmente através da função `forEach(projeto)`, para impressão dos cartões contendo as informações importadas da tela **Editor de Código**, através do *localStorage*.\
A função `montaCartao(projeto)` retorna uma nova variável `cartao`, que é uma interpolação de código HTML e os dados do objeto `projeto`.</br></br>

##### Libs utilizadas
- Destaque de sintaxe: [highlight.js](https://github.com/highlightjs/highlight.js/)
- Transformar o card com o código em imagem: [dom-to-image](https://github.com/tsayen/dom-to-image)
- Download da imagem: [FileSaver.js](https://github.com/eligrey/FileSaver.js/)
