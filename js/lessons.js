function speak(text) {
    const synth = window.speechSynthesis;

    // Verifica se já há uma fala em andamento e cancela
    if (synth.speaking) {
        synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR'; // Define o idioma para português do Brasil
    synth.speak(utterance);
}

export function initLessons() {
    const lessons = [
        {
            id: 'lesson-1',
            title: 'Introdução ao JavaScript',
            description: 'Aprenda os conceitos básicos de JavaScript, incluindo variáveis, tipos de dados e operadores.',
            content: `
                <h3>O que é JavaScript?</h3>
                <p>JavaScript é uma linguagem de programação usada para criar interatividade em páginas da web. Ele é amplamente utilizado para adicionar funcionalidades dinâmicas, como validação de formulários, animações e manipulação de elementos HTML.</p>
                
                <h4>História do JavaScript</h4>
                <p>JavaScript foi criado em 1995 por Brendan Eich enquanto trabalhava na Netscape. Inicialmente chamado de Mocha, depois LiveScript, ele foi renomeado para JavaScript para aproveitar a popularidade do Java na época.</p>
                
                <h4>Principais Características</h4>
                <ul>
                    <li>É uma linguagem interpretada, executada diretamente no navegador.</li>
                    <li>É baseada em eventos, permitindo responder a interações do usuário.</li>
                    <li>É uma linguagem de tipagem dinâmica, o que significa que você não precisa declarar explicitamente o tipo de uma variável.</li>
                </ul>
                
                <h4>Exemplo de Código</h4>
                <pre><code>
// Exemplo básico de JavaScript
let nome = "JavaScript";
console.log("Bem-vindo ao " + nome + "!");
                </code></pre>
                
                <h4>Onde o JavaScript é Usado?</h4>
                <p>O JavaScript é usado em várias áreas, incluindo:</p>
                <ul>
                    <li>Desenvolvimento Front-End: Manipulação de elementos HTML e CSS.</li>
                    <li>Desenvolvimento Back-End: Usando frameworks como Node.js.</li>
                    <li>Desenvolvimento de Aplicativos: Usando tecnologias como React Native.</li>
                </ul>
                
                <h4>Por que Aprender JavaScript?</h4>
                <p>JavaScript é uma das linguagens mais populares do mundo e é essencial para qualquer desenvolvedor web. Ele permite criar experiências de usuário ricas e interativas, além de ser uma habilidade altamente demandada no mercado de trabalho.</p>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript%20com%20mais%20detalhes">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-2',
            title: 'Estruturas Condicionais',
            description: 'Entenda como usar if, else e switch para tomar decisões no seu código.',
            content: `
                <h3>Estruturas Condicionais</h3>
                <p>As estruturas condicionais permitem executar diferentes blocos de código com base em condições. Elas são fundamentais para controlar o fluxo de execução de um programa.</p>
                
                <h4>Exemplo com if/else:</h4>
                <pre><code>
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
                </code></pre>
                
                <h4>Exemplo com switch:</h4>
                <pre><code>
let cor = "vermelho";
switch (cor) {
    case "vermelho":
        console.log("A cor é vermelho.");
        break;
    case "azul":
        console.log("A cor é azul.");
        break;
    default:
        console.log("Cor desconhecida.");
}
                </code></pre>
                
                <h4>Operador Ternário</h4>
                <p>O operador ternário é uma forma simplificada de escrever uma estrutura condicional if/else. Ele é útil para expressões curtas.</p>
                <pre><code>
let idade = 20;
let mensagem = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
console.log(mensagem);
                </code></pre>
                
                <h4>Exemplo Prático: Verificação de Login</h4>
                <p>Um exemplo prático de uso de estruturas condicionais é verificar se um usuário está logado.</p>
                <pre><code>
let usuarioLogado = true;

if (usuarioLogado) {
    console.log("Bem-vindo de volta!");
} else {
    console.log("Por favor, faça login.");
}
                </code></pre>
                
                <h4>Boas Práticas</h4>
                <ul>
                    <li>Use <code>if/else</code> para condições simples e claras.</li>
                    <li>Prefira <code>switch</code> quando houver várias condições baseadas no mesmo valor.</li>
                    <li>Evite aninhar muitas condições, pois isso pode dificultar a leitura do código.</li>
                </ul>
                
                <h4>Desafios</h4>
                <p>Tente resolver os seguintes desafios para praticar estruturas condicionais:</p>
                <ol>
                    <li>Escreva um programa que verifica se um número é positivo, negativo ou zero.</li>
                    <li>Crie um sistema de notas que exibe "Aprovado", "Recuperação" ou "Reprovado" com base na média do aluno.</li>
                    <li>Implemente um menu de opções usando <code>switch</code>, onde o usuário pode escolher entre diferentes ações.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Estruturas%20Condicionais%20no%20JavaScript">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-3',
            title: 'Laços de Repetição',
            description: 'Descubra como usar loops como for, while e do-while para repetir ações.',
            content: `
                <h3>Laços de Repetição</h3>
                <p>Os loops permitem executar um bloco de código várias vezes. Eles são úteis para automatizar tarefas repetitivas e iterar sobre coleções de dados.</p>
                
                <h4>Exemplo com for:</h4>
                <pre><code>
for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
}
                </code></pre>
                
                <h4>Exemplo com while:</h4>
                <pre><code>
let i = 1;
while (i <= 5) {
    console.log("Número: " + i);
    i++;
}
                </code></pre>
                
                <h4>Exemplo com do-while:</h4>
                <p>O loop <code>do-while</code> garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa.</p>
                <pre><code>
let i = 1;
do {
    console.log("Número: " + i);
    i++;
} while (i <= 5);
                </code></pre>
                
                <h4>Iterando sobre Arrays</h4>
                <p>Os loops são frequentemente usados para iterar sobre arrays. Aqui está um exemplo com <code>for</code>:</p>
                <pre><code>
const frutas = ["maçã", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta: " + frutas[i]);
}
                </code></pre>
                
                <h4>Usando for...of</h4>
                <p>O loop <code>for...of</code> é uma maneira mais simples de iterar sobre arrays e outros objetos iteráveis:</p>
                <pre><code>
const frutas = ["maçã", "banana", "laranja"];
for (const fruta of frutas) {
    console.log("Fruta: " + fruta);
}
                </code></pre>
                
                <h4>Usando for...in</h4>
                <p>O loop <code>for...in</code> é usado para iterar sobre as propriedades de um objeto:</p>
                <pre><code>
const pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };
for (const chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
                </code></pre>
                
                <h4>Boas Práticas</h4>
                <ul>
                    <li>Use <code>for</code> para loops com um número fixo de iterações.</li>
                    <li>Prefira <code>while</code> ou <code>do-while</code> quando o número de iterações não for conhecido previamente.</li>
                    <li>Evite loops infinitos, garantindo que a condição de saída seja alcançada.</li>
                </ul>
                
                <h4>Desafios</h4>
                <p>Pratique o uso de loops resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Crie um loop que exiba os números de 1 a 10 no console.</li>
                    <li>Escreva um programa que calcule a soma de todos os números de 1 a 100.</li>
                    <li>Implemente um loop que percorra um array de nomes e exiba cada nome no console.</li>
                    <li>Crie um loop que encontre o maior número em um array.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="La%C3%A7os%20de%20Repeti%C3%A7%C3%A3o%20no%20JavaScript">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-4',
            title: 'Funções',
            description: 'Aprenda a criar e usar funções para organizar e reutilizar seu código.',
            content: `
                <h3>Funções</h3>
                <p>Funções são blocos de código que podem ser reutilizados. Elas ajudam a organizar o código, reduzir repetições e facilitar a manutenção.</p>
                
                <h4>Por que usar funções?</h4>
                <ul>
                    <li>Reutilização: Você pode chamar a mesma função várias vezes em diferentes partes do código.</li>
                    <li>Organização: Funções ajudam a dividir o código em partes menores e mais gerenciáveis.</li>
                    <li>Manutenção: Alterações podem ser feitas em um único lugar, refletindo em todo o código que usa a função.</li>
                </ul>
                
                <h4>Exemplo de função:</h4>
                <pre><code>
function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));
                </code></pre>
                
                <h4>Funções Anônimas</h4>
                <p>Funções anônimas são funções sem nome, geralmente usadas como argumentos para outras funções ou atribuídas a variáveis.</p>
                <pre><code>
const saudacao = function(nome) {
    return "Olá, " + nome + "!";
};
console.log(saudacao("João"));
                </code></pre>
                
                <h4>Arrow Functions</h4>
                <p>Arrow functions são uma forma mais concisa de escrever funções introduzida no ES6.</p>
                <pre><code>
const saudacao = (nome) => "Olá, " + nome + "!";
console.log(saudacao("Ana"));
                </code></pre>
                
                <h4>Parâmetros Padrão</h4>
                <p>Você pode definir valores padrão para os parâmetros de uma função, caso eles não sejam fornecidos.</p>
                <pre><code>
function saudacao(nome = "Visitante") {
    return "Olá, " + nome + "!";
}
console.log(saudacao()); // Olá, Visitante!
console.log(saudacao("Carlos")); // Olá, Carlos!
                </code></pre>
                
                <h4>Funções Recursivas</h4>
                <p>Funções recursivas são aquelas que chamam a si mesmas. Elas são úteis para resolver problemas como cálculo de fatorial ou percorrer estruturas de dados.</p>
                <pre><code>
function fatorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}
console.log(fatorial(5)); // 120
                </code></pre>
                
                <h4>Funções de Ordem Superior</h4>
                <p>Funções de ordem superior são aquelas que recebem outras funções como argumentos ou retornam funções.</p>
                <pre><code>
function executar(funcao, valor) {
    return funcao(valor);
}

const dobrar = (n) => n * 2;
console.log(executar(dobrar, 5)); // 10
                </code></pre>
                
                <h4>Boas Práticas</h4>
                <ul>
                    <li>Escolha nomes descritivos para suas funções.</li>
                    <li>Mantenha as funções curtas e focadas em uma única tarefa.</li>
                    <li>Evite efeitos colaterais desnecessários (modificar variáveis fora do escopo da função).</li>
                </ul>
                
                <h4>Desafios</h4>
                <p>Pratique o uso de funções resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Crie uma função que receba dois números e retorne a soma deles.</li>
                    <li>Escreva uma função que verifique se um número é par ou ímpar.</li>
                    <li>Implemente uma função que calcule a média de um array de números.</li>
                    <li>Crie uma função recursiva que calcule o fatorial de um número.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Fun%C3%A7%C3%B5es%20no%20JavaScript">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-5',
            title: 'Manipulação do DOM',
            description: 'Explore como usar JavaScript para interagir com elementos HTML na página.',
            content: `
                <h3>Manipulação do DOM</h3>
                <p>O DOM (Document Object Model) permite acessar e manipular elementos HTML. Ele é uma interface que representa a estrutura de um documento HTML ou XML como uma árvore de objetos.</p>
                
                <h4>Por que Manipular o DOM?</h4>
                <ul>
                    <li>Atualizar dinamicamente o conteúdo da página.</li>
                    <li>Adicionar ou remover elementos HTML.</li>
                    <li>Alterar estilos e classes de elementos.</li>
                    <li>Responder a eventos do usuário, como cliques ou digitação.</li>
                </ul>
                
                <h4>Selecionando Elementos</h4>
                <p>Você pode selecionar elementos do DOM usando métodos como:</p>
                <pre><code>
        // Selecionar por ID
        const elemento = document.getElementById("meuElemento");
        
        // Selecionar por classe
        const elementos = document.getElementsByClassName("minhaClasse");
        
        // Selecionar por tag
        const tags = document.getElementsByTagName("div");
        
        // Selecionar usando querySelector
        const primeiroElemento = document.querySelector(".minhaClasse");
        
        // Selecionar todos os elementos correspondentes
        const todosElementos = document.querySelectorAll(".minhaClasse");
                </code></pre>
                
                <h4>Manipulando Conteúdo</h4>
                <p>Você pode alterar o conteúdo de um elemento usando as propriedades <code>innerHTML</code> ou <code>textContent</code>:</p>
                <pre><code>
        const elemento = document.getElementById("meuElemento");
        
        // Alterar o conteúdo HTML
        elemento.innerHTML = "<strong>Conteúdo atualizado!</strong>";
        
        // Alterar apenas o texto
        elemento.textContent = "Texto atualizado!";
                </code></pre>
                
                <h4>Alterando Estilos</h4>
                <p>Você pode alterar os estilos de um elemento usando a propriedade <code>style</code>:</p>
                <pre><code>
        const elemento = document.getElementById("meuElemento");
        elemento.style.color = "red";
        elemento.style.fontSize = "20px";
                </code></pre>
                
                <h4>Adicionando e Removendo Classes</h4>
                <p>Use as propriedades <code>classList</code> para manipular classes de um elemento:</p>
                <pre><code>
        const elemento = document.getElementById("meuElemento");
        
        // Adicionar uma classe
        elemento.classList.add("novaClasse");
        
        // Remover uma classe
        elemento.classList.remove("classeExistente");
        
        // Alternar uma classe
        elemento.classList.toggle("classeAlternada");
                </code></pre>
                
                <h4>Adicionando e Removendo Elementos</h4>
                <p>Você pode criar, adicionar ou remover elementos no DOM:</p>
                <pre><code>
        // Criar um novo elemento
        const novoElemento = document.createElement("div");
        novoElemento.textContent = "Este é um novo elemento";
        
        // Adicionar o elemento ao DOM
        document.body.appendChild(novoElemento);
        
        // Remover um elemento
        const elementoParaRemover = document.getElementById("meuElemento");
        elementoParaRemover.remove();
                </code></pre>
                
                <h4>Eventos</h4>
                <p>Você pode adicionar eventos para responder a interações do usuário:</p>
                <pre><code>
        const botao = document.getElementById("meuBotao");
        
        botao.addEventListener("click", function() {
            alert("Botão clicado!");
        });
                </code></pre>
                
                <h4>Exemplo Prático</h4>
                <p>Um exemplo prático de manipulação do DOM:</p>
                <pre><code>
        document.getElementById("adicionarTexto").addEventListener("click", function() {
            const paragrafo = document.createElement("p");
            paragrafo.textContent = "Texto adicionado dinamicamente!";
            document.body.appendChild(paragrafo);
        });
                </code></pre>
                
                <h4>Boas Práticas</h4>
                <ul>
                    <li>Evite manipular diretamente o DOM em excesso, pois isso pode impactar o desempenho.</li>
                    <li>Use frameworks ou bibliotecas como React ou Vue para manipulação mais eficiente do DOM em projetos maiores.</li>
                    <li>Garanta que os elementos existam no DOM antes de manipulá-los.</li>
                </ul>
                
                <h4>Desafios</h4>
                <p>Pratique a manipulação do DOM resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Crie um botão que, ao ser clicado, adicione um novo item a uma lista.</li>
                    <li>Implemente um formulário que exiba os dados inseridos pelo usuário em tempo real.</li>
                    <li>Crie um sistema de abas (tabs) que altere o conteúdo exibido ao clicar em diferentes botões.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Manipula%C3%A7%C3%A3o%20do%20DOM%20no%20JavaScript">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-6',
            title: 'Eventos no JavaScript',
            description: 'Aprenda como capturar e manipular eventos como cliques, teclas pressionadas e muito mais.',
            content: `
                <h3>Eventos no JavaScript</h3>
                <p>Eventos permitem capturar interações do usuário, como cliques, teclas pressionadas, movimentos do mouse e muito mais. Eles são fundamentais para criar páginas interativas.</p>
                
                <h4>Exemplo de Evento de Teclado:</h4>
                <pre><code>
        document.addEventListener("keydown", function(event) {
            console.log("Tecla pressionada: " + event.key);
        });
                </code></pre>
                
                <h4>Eventos de Clique:</h4>
                <p>Você pode capturar cliques em elementos HTML usando o evento <code>click</code>:</p>
                <pre><code>
        document.getElementById("meuBotao").addEventListener("click", function() {
            alert("Botão clicado!");
        });
                </code></pre>
                
                <h4>Eventos de Mouse:</h4>
                <p>Eventos como <code>mouseover</code> e <code>mouseout</code> permitem capturar interações do mouse:</p>
                <pre><code>
        const elemento = document.getElementById("meuElemento");
        
        elemento.addEventListener("mouseover", function() {
            elemento.style.backgroundColor = "yellow";
        });
        
        elemento.addEventListener("mouseout", function() {
            elemento.style.backgroundColor = "";
        });
                </code></pre>
                
                <h4>Eventos de Formulário:</h4>
                <p>Você pode capturar eventos em formulários, como quando o usuário digita ou envia o formulário:</p>
                <pre><code>
        const input = document.getElementById("meuInput");
        
        input.addEventListener("input", function(event) {
            console.log("Texto digitado: " + event.target.value);
        });
        
        document.getElementById("meuFormulario").addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio do formulário
            alert("Formulário enviado!");
        });
                </code></pre>
                
                <h4>Removendo Eventos:</h4>
                <p>Você pode remover um evento usando o método <code>removeEventListener</code>:</p>
                <pre><code>
        function cliqueHandler() {
            alert("Botão clicado!");
        }
        
        const botao = document.getElementById("meuBotao");
        botao.addEventListener("click", cliqueHandler);
        
        // Remover o evento
        botao.removeEventListener("click", cliqueHandler);
                </code></pre>
                
                <h4>Delegação de Eventos:</h4>
                <p>A delegação de eventos é útil para gerenciar eventos em elementos dinâmicos:</p>
                <pre><code>
        document.getElementById("lista").addEventListener("click", function(event) {
            if (event.target.tagName === "LI") {
                alert("Item clicado: " + event.target.textContent);
            }
        });
                </code></pre>
                
                <h4>Boas Práticas</h4>
                <ul>
                    <li>Use <code>addEventListener</code> em vez de atributos HTML como <code>onclick</code> para separar JavaScript de HTML.</li>
                    <li>Remova eventos desnecessários para evitar vazamentos de memória.</li>
                    <li>Prefira delegação de eventos para elementos dinâmicos.</li>
                </ul>
                
                <h4>Desafios</h4>
                <p>Pratique o uso de eventos resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Crie um botão que altere a cor de fundo da página ao ser clicado.</li>
                    <li>Implemente um contador que aumenta ou diminui ao clicar em botões específicos.</li>
                    <li>Adicione um evento que exiba uma mensagem quando o mouse passar sobre um elemento.</li>
                    <li>Crie um formulário que valide os campos antes de permitir o envio.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Eventos%20no%20JavaScript">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-7',
            title: 'Arrays e Métodos de Arrays',
            description: 'Descubra como trabalhar com arrays e usar métodos como map, filter e reduce.',
            content: `
                <h3>Arrays e Métodos</h3>
                <p>Arrays são coleções de dados. Métodos como <code>map</code>, <code>filter</code> e <code>reduce</code> ajudam a manipulá-los.</p>
                
                <h4>Exemplo com map:</h4>
                <p>O método <code>map</code> cria um novo array com os resultados da aplicação de uma função em cada elemento do array original.</p>
                <pre><code>
        let numeros = [1, 2, 3];
        let dobrados = numeros.map(num => num * 2);
        console.log(dobrados); // [2, 4, 6]
                </code></pre>
                
                <h4>Exemplo com filter:</h4>
                <p>O método <code>filter</code> cria um novo array contendo apenas os elementos que atendem a uma condição específica.</p>
                <pre><code>
        let numeros = [1, 2, 3, 4, 5];
        let pares = numeros.filter(num => num % 2 === 0);
        console.log(pares); // [2, 4]
                </code></pre>
                
                <h4>Exemplo com reduce:</h4>
                <p>O método <code>reduce</code> aplica uma função acumuladora em cada elemento do array, resultando em um único valor.</p>
                <pre><code>
        let numeros = [1, 2, 3, 4];
        let soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
        console.log(soma); // 10
                </code></pre>
                
                <h4>Outros Métodos Úteis:</h4>
                <ul>
                    <li><code>forEach</code>: Executa uma função para cada elemento do array.</li>
                    <pre><code>
        let frutas = ["maçã", "banana", "laranja"];
        frutas.forEach(fruta => console.log(fruta));
        // Saída:
        // maçã
        // banana
        // laranja
                    </code></pre>
                    
                    <li><code>find</code>: Retorna o primeiro elemento que atende a uma condição.</li>
                    <pre><code>
        let numeros = [1, 2, 3, 4];
        let primeiroPar = numeros.find(num => num % 2 === 0);
        console.log(primeiroPar); // 2
                    </code></pre>
                    
                    <li><code>some</code>: Retorna <code>true</code> se pelo menos um elemento atender a uma condição.</li>
                    <pre><code>
        let numeros = [1, 3, 5];
        let temPar = numeros.some(num => num % 2 === 0);
        console.log(temPar); // false
                    </code></pre>
                    
                    <li><code>every</code>: Retorna <code>true</code> se todos os elementos atenderem a uma condição.</li>
                    <pre><code>
        let numeros = [2, 4, 6];
        let todosPares = numeros.every(num => num % 2 === 0);
        console.log(todosPares); // true
                    </code></pre>
                    
                    <li><code>sort</code>: Ordena os elementos do array.</li>
                    <pre><code>
        let numeros = [3, 1, 4, 1, 5];
        numeros.sort((a, b) => a - b);
        console.log(numeros); // [1, 1, 3, 4, 5]
                    </code></pre>
                    
                    <li><code>concat</code>: Junta dois ou mais arrays.</li>
                    <pre><code>
        let array1 = [1, 2];
        let array2 = [3, 4];
        let combinado = array1.concat(array2);
        console.log(combinado); // [1, 2, 3, 4]
                    </code></pre>
                    
                    <li><code>slice</code>: Retorna uma cópia de uma parte do array.</li>
                    <pre><code>
        let numeros = [1, 2, 3, 4, 5];
        let subArray = numeros.slice(1, 4);
        console.log(subArray); // [2, 3, 4]
                    </code></pre>
                </ul>
                
                <h4>Boas Práticas</h4>
                <ul>
                    <li>Escolha o método apropriado para a tarefa que deseja realizar.</li>
                    <li>Evite modificar o array original diretamente, sempre que possível.</li>
                    <li>Use <code>map</code>, <code>filter</code> e <code>reduce</code> para operações funcionais e mais legíveis.</li>
                </ul>
                
                <h4>Desafios</h4>
                <p>Pratique o uso de arrays e seus métodos resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Crie um array de números e use <code>map</code> para criar um novo array com os números ao quadrado.</li>
                    <li>Use <code>filter</code> para criar um array contendo apenas os números maiores que 10.</li>
                    <li>Implemente uma função que calcule a soma de todos os números em um array usando <code>reduce</code>.</li>
                    <li>Crie um array de objetos representando pessoas e use <code>find</code> para localizar a primeira pessoa com mais de 30 anos.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Arrays%20e%20M%C3%A9todos%20de%20Arrays">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-8',
            title: 'Objetos e Propriedades',
            description: 'Entenda como criar e manipular objetos no JavaScript.',
            content: `
                <h3>Objetos e Propriedades</h3>
                <p>Objetos são coleções de pares chave-valor que permitem armazenar e organizar dados de forma estruturada.</p>
                
                <h4>Exemplo Básico:</h4>
                <pre><code>
        let pessoa = {
            nome: "João",
            idade: 30,
            cidade: "São Paulo"
        };
        console.log(pessoa.nome); // João
        console.log(pessoa["idade"]); // 30
                </code></pre>
                
                <h4>Adicionando e Alterando Propriedades:</h4>
                <p>Você pode adicionar ou alterar propriedades de um objeto usando a notação de ponto ou colchetes:</p>
                <pre><code>
        let pessoa = { nome: "João" };
        
        // Adicionando uma nova propriedade
        pessoa.idade = 30;
        
        // Alterando uma propriedade existente
        pessoa.nome = "Maria";
        
        console.log(pessoa); // { nome: "Maria", idade: 30 }
                </code></pre>
                
                <h4>Removendo Propriedades:</h4>
                <p>Use o operador <code>delete</code> para remover uma propriedade de um objeto:</p>
                <pre><code>
        let pessoa = { nome: "João", idade: 30 };
        delete pessoa.idade;
        
        console.log(pessoa); // { nome: "João" }
                </code></pre>
                
                <h4>Iterando sobre Propriedades:</h4>
                <p>Você pode usar o loop <code>for...in</code> para iterar sobre as propriedades de um objeto:</p>
                <pre><code>
        let pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };
        
        for (let chave in pessoa) {
            console.log(chave + ": " + pessoa[chave]);
        }
        // Saída:
        // nome: João
        // idade: 30
        // cidade: São Paulo
                </code></pre>
                
                <h4>Objetos Aninhados:</h4>
                <p>Objetos podem conter outros objetos como valores:</p>
                <pre><code>
        let empresa = {
            nome: "TechCorp",
            endereco: {
                rua: "Rua Principal",
                numero: 123
            }
        };
        
        console.log(empresa.endereco.rua); // Rua Principal
                </code></pre>
                
                <h4>Métodos em Objetos:</h4>
                <p>Objetos podem conter funções, chamadas de métodos:</p>
                <pre><code>
        let pessoa = {
            nome: "João",
            saudacao: function() {
                return "Olá, meu nome é " + this.nome;
            }
        };
        
        console.log(pessoa.saudacao()); // Olá, meu nome é João
                </code></pre>
                
                <h4>Clonando Objetos:</h4>
                <p>Você pode clonar objetos usando o operador <code>Object.assign</code> ou o spread operator:</p>
                <pre><code>
        // Usando Object.assign
        let original = { nome: "João" };
        let copia = Object.assign({}, original);
        
        // Usando spread operator
        let copia2 = { ...original };
        
        console.log(copia); // { nome: "João" }
        console.log(copia2); // { nome: "João" }
                </code></pre>
                
                <h4>Verificando Propriedades:</h4>
                <p>Use o operador <code>in</code> ou o método <code>hasOwnProperty</code> para verificar se uma propriedade existe:</p>
                <pre><code>
        let pessoa = { nome: "João", idade: 30 };
        
        console.log("nome" in pessoa); // true
        console.log(pessoa.hasOwnProperty("idade")); // true
                </code></pre>
                
                <h4>Boas Práticas:</h4>
                <ul>
                    <li>Use nomes de propriedades descritivos e consistentes.</li>
                    <li>Evite modificar objetos diretamente, prefira criar cópias.</li>
                    <li>Organize objetos complexos em estruturas aninhadas para facilitar a leitura.</li>
                </ul>
                
                <h4>Desafios:</h4>
                <p>Pratique o uso de objetos resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Crie um objeto que represente um carro com propriedades como marca, modelo e ano. Adicione um método que exiba uma descrição do carro.</li>
                    <li>Implemente um objeto que represente um aluno com propriedades como nome, idade e notas. Adicione um método para calcular a média das notas.</li>
                    <li>Crie um objeto que represente uma loja com uma lista de produtos. Adicione métodos para adicionar e remover produtos.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Objetos%20e%20Propriedades%20no%20JavaScript">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-9',
            title: 'Classes e Programação Orientada a Objetos',
            description: 'Aprenda os fundamentos da programação orientada a objetos com classes no JavaScript.',
            content: `
                <h3>Classes</h3>
                <p>Classes são modelos para criar objetos. Elas permitem organizar e reutilizar código de forma eficiente, seguindo os princípios da Programação Orientada a Objetos (POO).</p>
                
                <h4>Exemplo Básico:</h4>
                <pre><code>
        class Pessoa {
            constructor(nome, idade) {
                this.nome = nome;
                this.idade = idade;
            }
            saudacao() {
                return "Olá, meu nome é " + this.nome;
            }
        }
        let pessoa = new Pessoa("Ana", 25);
        console.log(pessoa.saudacao()); // Olá, meu nome é Ana
                </code></pre>
                
                <h4>Herança:</h4>
                <p>Com herança, é possível criar classes que reutilizam funcionalidades de outras classes.</p>
                <pre><code>
        class Animal {
            constructor(nome) {
                this.nome = nome;
            }
            fazerSom() {
                console.log("Som genérico");
            }
        }
        
        class Cachorro extends Animal {
            fazerSom() {
                console.log("Latido");
            }
        }
        
        let cachorro = new Cachorro("Rex");
        cachorro.fazerSom(); // Latido
                </code></pre>
                
                <h4>Encapsulamento:</h4>
                <p>O encapsulamento permite proteger os dados de uma classe, tornando-os acessíveis apenas por métodos específicos.</p>
                <pre><code>
        class ContaBancaria {
            #saldo = 0; // Propriedade privada
        
            depositar(valor) {
                if (valor > 0) {
                    this.#saldo += valor;
                }
            }
        
            getSaldo() {
                return this.#saldo;
            }
        }
        
        let conta = new ContaBancaria();
        conta.depositar(100);
        console.log(conta.getSaldo()); // 100
                </code></pre>
                
                <h4>Polimorfismo:</h4>
                <p>O polimorfismo permite que métodos com o mesmo nome tenham comportamentos diferentes em classes relacionadas.</p>
                <pre><code>
        class Forma {
            calcularArea() {
                return 0;
            }
        }
        
        class Retangulo extends Forma {
            constructor(largura, altura) {
                super();
                this.largura = largura;
                this.altura = altura;
            }
            calcularArea() {
                return this.largura * this.altura;
            }
        }
        
        let retangulo = new Retangulo(5, 10);
        console.log(retangulo.calcularArea()); // 50
                </code></pre>
                
                <h4>Static Methods:</h4>
                <p>Métodos estáticos pertencem à classe e não às instâncias dela.</p>
                <pre><code>
        class Matematica {
            static somar(a, b) {
                return a + b;
            }
        }
        
        console.log(Matematica.somar(5, 3)); // 8
                </code></pre>
                
                <h4>Getters e Setters:</h4>
                <p>Getters e setters permitem acessar e modificar propriedades de forma controlada.</p>
                <pre><code>
        class Pessoa {
            constructor(nome) {
                this._nome = nome;
            }
        
            get nome() {
                return this._nome;
            }
        
            set nome(novoNome) {
                if (novoNome) {
                    this._nome = novoNome;
                }
            }
        }
        
        let pessoa = new Pessoa("João");
        console.log(pessoa.nome); // João
        pessoa.nome = "Maria";
        console.log(pessoa.nome); // Maria
                </code></pre>
                
                <h4>Boas Práticas:</h4>
                <ul>
                    <li>Use classes para organizar o código em projetos maiores.</li>
                    <li>Prefira encapsular dados sensíveis usando propriedades privadas.</li>
                    <li>Evite criar classes muito grandes; divida responsabilidades em várias classes menores.</li>
                </ul>
                
                <h4>Desafios:</h4>
                <p>Pratique o uso de classes resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Crie uma classe <code>Carro</code> com propriedades como marca, modelo e ano. Adicione um método para exibir uma descrição do carro.</li>
                    <li>Implemente uma classe <code>Funcionario</code> com propriedades como nome e salário. Adicione um método para calcular o bônus com base no salário.</li>
                    <li>Crie uma hierarquia de classes para representar diferentes tipos de animais, como <code>Animal</code>, <code>Cachorro</code> e <code>Gato</code>. Adicione métodos específicos para cada tipo de animal.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Classes%20e%20Programação%20Orientada%20a%20Objetos">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-10',
            title: 'Promises e Async/Await',
            description: 'Descubra como lidar com operações assíncronas no JavaScript.',
            content: `
                <h3>Promises e Async/Await</h3>
                <p>Promises são usadas para lidar com operações assíncronas no JavaScript, como requisições a APIs. Elas representam um valor que pode estar disponível agora, no futuro ou nunca.</p>
                
                <h4>Exemplo com Promises:</h4>
                <pre><code>
        function buscarDados() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const sucesso = true;
                    if (sucesso) {
                        resolve("Dados carregados com sucesso!");
                    } else {
                        reject("Erro ao carregar os dados.");
                    }
                }, 2000);
            });
        }
        
        buscarDados()
            .then(dados => console.log(dados))
            .catch(erro => console.error(erro));
                </code></pre>
                
                <h4>Async/Await:</h4>
                <p>O <code>async/await</code> é uma sintaxe mais simples e legível para trabalhar com Promises. Ele permite escrever código assíncrono de forma semelhante ao código síncrono.</p>
                <pre><code>
        async function fetchDados() {
            try {
                let resposta = await fetch("https://api.exemplo.com/dados");
                let dados = await resposta.json();
                console.log(dados);
            } catch (erro) {
                console.error("Erro ao buscar dados:", erro);
            }
        }
        fetchDados();
                </code></pre>
                
                <h4>Encadeamento de Promises:</h4>
                <p>Você pode encadear várias Promises para realizar operações sequenciais.</p>
                <pre><code>
        fetch("https://api.exemplo.com/usuarios")
            .then(resposta => resposta.json())
            .then(usuarios => {
                console.log("Usuários:", usuarios);
                return fetch("https://api.exemplo.com/posts");
            })
            .then(resposta => resposta.json())
            .then(posts => console.log("Posts:", posts))
            .catch(erro => console.error("Erro:", erro));
                </code></pre>
                
                <h4>Promise.all:</h4>
                <p>O método <code>Promise.all</code> permite executar várias Promises em paralelo e aguardar que todas sejam resolvidas.</p>
                <pre><code>
        const promessa1 = fetch("https://api.exemplo.com/usuarios").then(res => res.json());
        const promessa2 = fetch("https://api.exemplo.com/posts").then(res => res.json());
        
        Promise.all([promessa1, promessa2])
            .then(([usuarios, posts]) => {
                console.log("Usuários:", usuarios);
                console.log("Posts:", posts);
            })
            .catch(erro => console.error("Erro:", erro));
                </code></pre>
                
                <h4>Promise.race:</h4>
                <p>O método <code>Promise.race</code> retorna a primeira Promise que for resolvida ou rejeitada.</p>
                <pre><code>
        const promessaRapida = new Promise(resolve => setTimeout(() => resolve("Promessa rápida"), 1000));
        const promessaLenta = new Promise(resolve => setTimeout(() => resolve("Promessa lenta"), 3000));
        
        Promise.race([promessaRapida, promessaLenta])
            .then(resultado => console.log("Resultado:", resultado))
            .catch(erro => console.error("Erro:", erro));
                </code></pre>
                
                <h4>Boas Práticas:</h4>
                <ul>
                    <li>Use <code>async/await</code> para melhorar a legibilidade do código.</li>
                    <li>Adicione tratamento de erros com <code>try/catch</code> ou <code>.catch</code>.</li>
                    <li>Evite aninhar muitas Promises; prefira encadeá-las ou usar <code>async/await</code>.</li>
                    <li>Use <code>Promise.all</code> para executar várias operações assíncronas em paralelo.</li>
                </ul>
                
                <h4>Desafios:</h4>
                <p>Pratique o uso de Promises e Async/Await resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Crie uma função que simule uma requisição assíncrona e retorne uma Promise. Use <code>async/await</code> para consumir essa função.</li>
                    <li>Implemente uma função que faça duas requisições a APIs diferentes e exiba os resultados usando <code>Promise.all</code>.</li>
                    <li>Crie uma função que use <code>Promise.race</code> para determinar qual de duas Promises é resolvida primeiro.</li>
                    <li>Adicione tratamento de erros a uma função assíncrona que consome uma API.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Promises%20e%20Async%20Await%20no%20JavaScript">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-11',
            title: 'APIs e Fetch',
            description: 'Aprenda como consumir APIs externas usando o método fetch.',
            content: `
                <h3>APIs e Fetch</h3>
                <p>APIs (Application Programming Interfaces) permitem que você se conecte a serviços externos e obtenha dados para usar em suas aplicações. O método <code>fetch</code> é uma ferramenta poderosa para realizar requisições HTTP no JavaScript.</p>
                
                <h4>Exemplo Básico:</h4>
                <pre><code>
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Erro ao buscar dados:', error));
                </code></pre>
                <p>No exemplo acima, usamos o método <code>fetch</code> para buscar dados de uma API pública. Os dados são convertidos para JSON e exibidos no console.</p>
                
                <h4>Requisição com Método POST:</h4>
                <p>Além de buscar dados, você pode enviar informações para uma API usando o método <code>POST</code>:</p>
                <pre><code>
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Novo Post',
                body: 'Este é o conteúdo do post.',
                userId: 1
            })
        })
            .then(response => response.json())
            .then(data => console.log('Post criado:', data))
            .catch(error => console.error('Erro ao criar post:', error));
                </code></pre>
                
                <h4>Tratamento de Erros:</h4>
                <p>É importante tratar erros para garantir que sua aplicação lide com falhas de forma adequada:</p>
                <pre><code>
        fetch('https://api.exemplo.com/dados')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.status);
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('Erro capturado:', error));
                </code></pre>
                
                <h4>Usando Async/Await:</h4>
                <p>O <code>async/await</code> torna o código mais legível e fácil de entender:</p>
                <pre><code>
        async function buscarDados() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.status);
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Erro capturado:', error);
            }
        }
        buscarDados();
                </code></pre>
                
                <h4>Requisições Paralelas com Promise.all:</h4>
                <p>Você pode realizar múltiplas requisições em paralelo e aguardar que todas sejam concluídas:</p>
                <pre><code>
        const usuariosPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
        const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
        
        Promise.all([usuariosPromise, postsPromise])
            .then(([usuarios, posts]) => {
                console.log('Usuários:', usuarios);
                console.log('Posts:', posts);
            })
            .catch(error => console.error('Erro em uma das requisições:', error));
                </code></pre>
                
                <h4>Cancelando Requisições com AbortController:</h4>
                <p>O <code>AbortController</code> permite cancelar requisições em andamento:</p>
                <pre><code>
        const controller = new AbortController();
        const signal = controller.signal;
        
        fetch('https://jsonplaceholder.typicode.com/posts', { signal })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Requisição cancelada');
                } else {
                    console.error('Erro:', error);
                }
            });
        
        // Cancelar a requisição após 1 segundo
        setTimeout(() => controller.abort(), 1000);
                </code></pre>
                
                <h4>Boas Práticas:</h4>
                <ul>
                    <li>Valide as respostas da API antes de usá-las.</li>
                    <li>Adicione tratamento de erros para lidar com falhas de rede ou respostas inválidas.</li>
                    <li>Use <code>async/await</code> para melhorar a legibilidade do código.</li>
                    <li>Evite expor informações sensíveis, como chaves de API, no código-fonte.</li>
                </ul>
                
                <h4>Desafios:</h4>
                <p>Pratique o uso de APIs e Fetch resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Faça uma requisição para uma API pública e exiba os dados em uma tabela no HTML.</li>
                    <li>Implemente um formulário que envie dados para uma API usando o método <code>POST</code>.</li>
                    <li>Crie uma função que realize múltiplas requisições em paralelo e exiba os resultados no console.</li>
                    <li>Adicione um botão para cancelar uma requisição em andamento usando <code>AbortController</code>.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="APIs%20e%20Fetch%20no%20JavaScript">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-12',
            title: 'Módulos no JavaScript',
            description: 'Entenda como dividir seu código em módulos reutilizáveis.',
            content: `
                <h3>Módulos no JavaScript</h3>
                <p>Módulos ajudam a organizar o código em partes menores e mais fáceis de gerenciar. Eles permitem reutilizar código em diferentes partes do projeto.</p>
                
                <h4>Por que usar módulos?</h4>
                <ul>
                    <li>Organização: Divida o código em arquivos menores e mais gerenciáveis.</li>
                    <li>Reutilização: Compartilhe funcionalidades entre diferentes partes do projeto.</li>
                    <li>Manutenção: Facilite a atualização e depuração do código.</li>
                    <li>Evite conflitos: Cada módulo tem seu próprio escopo, evitando variáveis globais.</li>
                </ul>
                
                <h4>Exemplo Básico:</h4>
                <p><strong>Arquivo: math.js</strong></p>
                <pre><code>
        // Exportando funções
        export function soma(a, b) {
            return a + b;
        }
        
        export function subtracao(a, b) {
            return a - b;
        }
                </code></pre>
                <p><strong>Arquivo: main.js</strong></p>
                <pre><code>
        // Importando funções
        import { soma, subtracao } from './math.js';
        
        console.log(soma(5, 3)); // 8
        console.log(subtracao(5, 3)); // 2
                </code></pre>
                
                <h4>Exportação Padrão:</h4>
                <p>Você pode exportar um único valor como padrão de um módulo:</p>
                <p><strong>Arquivo: utils.js</strong></p>
                <pre><code>
        export default function saudacao(nome) {
            return \`Olá, \${nome}!\`;
        }
                </code></pre>
                <p><strong>Arquivo: main.js</strong></p>
                <pre><code>
        import saudacao from './utils.js';
        
        console.log(saudacao('Maria')); // Olá, Maria!
                </code></pre>
                
                <h4>Exportação Nomeada:</h4>
                <p>Você pode exportar múltiplos valores de um módulo:</p>
                <p><strong>Arquivo: constantes.js</strong></p>
                <pre><code>
        export const PI = 3.14;
        export const E = 2.71;
                </code></pre>
                <p><strong>Arquivo: main.js</strong></p>
                <pre><code>
        import { PI, E } from './constantes.js';
        
        console.log('PI:', PI); // PI: 3.14
        console.log('E:', E);   // E: 2.71
                </code></pre>
                
                <h4>Reexportação:</h4>
                <p>Você pode reexportar valores de outro módulo:</p>
                <p><strong>Arquivo: math.js</strong></p>
                <pre><code>
        export function soma(a, b) {
            return a + b;
        }
        
        export function subtracao(a, b) {
            return a - b;
        }
                </code></pre>
                <p><strong>Arquivo: index.js</strong></p>
                <pre><code>
        export { soma, subtracao } from './math.js';
                </code></pre>
                <p><strong>Arquivo: main.js</strong></p>
                <pre><code>
        import { soma, subtracao } from './index.js';
        
        console.log(soma(10, 5)); // 15
        console.log(subtracao(10, 5)); // 5
                </code></pre>
                
                <h4>Importação Dinâmica:</h4>
                <p>Você pode carregar módulos dinamicamente usando <code>import()</code>:</p>
                <pre><code>
        async function carregarModulo() {
            const modulo = await import('./math.js');
            console.log(modulo.soma(4, 2)); // 6
        }
        
        carregarModulo();
                </code></pre>
                
                <h4>Boas Práticas:</h4>
                <ul>
                    <li>Use nomes descritivos para arquivos e funções exportadas.</li>
                    <li>Evite exportar variáveis globais para manter o escopo isolado.</li>
                    <li>Organize os módulos em pastas para facilitar a navegação no projeto.</li>
                    <li>Prefira exportações nomeadas para maior clareza e controle.</li>
                </ul>
                
                <h4>Desafios:</h4>
                <p>Pratique o uso de módulos resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Crie um módulo que exporte funções para calcular a área de diferentes formas geométricas (círculo, retângulo, triângulo).</li>
                    <li>Implemente um módulo que contenha constantes matemáticas e importe-as em outro arquivo.</li>
                    <li>Use exportação padrão para criar um módulo que exiba mensagens de saudação personalizadas.</li>
                    <li>Experimente usar importação dinâmica para carregar um módulo apenas quando necessário.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="M%C3%B3dulos%20no%20JavaScript">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-13',
            title: 'Tratamento de Erros',
            description: 'Aprenda como lidar com erros no JavaScript usando try, catch e finally.',
            content: `
                <h3>Tratamento de Erros</h3>
                <p>O tratamento de erros é essencial para criar aplicações robustas e evitar falhas inesperadas. Ele permite capturar e lidar com exceções que podem ocorrer durante a execução do código.</p>
                
                <h4>Exemplo Básico:</h4>
                <pre><code>
        try {
            let resultado = 10 / 0;
            console.log('Resultado:', resultado);
        } catch (error) {
            console.error('Ocorreu um erro:', error.message);
        } finally {
            console.log('Bloco finally executado.');
        }
                </code></pre>
                <p>No exemplo acima, usamos <code>try</code> para executar o código, <code>catch</code> para capturar erros e <code>finally</code> para executar um bloco de código independentemente do resultado.</p>
                
                <h4>Lançando Erros com throw:</h4>
                <p>Você pode lançar erros personalizados usando a palavra-chave <code>throw</code>:</p>
                <pre><code>
        function dividir(a, b) {
            if (b === 0) {
                throw new Error('Divisão por zero não é permitida.');
            }
            return a / b;
        }
        
        try {
            console.log(dividir(10, 0));
        } catch (error) {
            console.error('Erro capturado:', error.message);
        }
                </code></pre>
                
                <h4>Tipos de Erros Comuns:</h4>
                <ul>
                    <li><code>ReferenceError</code>: Ocorre quando você tenta acessar uma variável que não foi definida.</li>
                    <li><code>TypeError</code>: Ocorre quando você tenta realizar uma operação inválida em um tipo de dado.</li>
                    <li><code>SyntaxError</code>: Ocorre quando há um erro de sintaxe no código.</li>
                    <li><code>RangeError</code>: Ocorre quando um valor está fora do intervalo permitido.</li>
                </ul>
                
                <h4>Exemplo de Tratamento de Erros Assíncronos:</h4>
                <p>Para tratar erros em operações assíncronas, como Promises, use <code>.catch</code> ou <code>try/catch</code> com <code>async/await</code>:</p>
                <pre><code>
        // Usando .catch
        fetch('https://api.exemplo.com/dados')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Erro ao buscar dados:', error));
        
        // Usando async/await
        async function buscarDados() {
            try {
                const response = await fetch('https://api.exemplo.com/dados');
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Erro capturado:', error.message);
            }
        }
        buscarDados();
                </code></pre>
                
                <h4>Encadeando Erros:</h4>
                <p>Você pode encadear erros para fornecer mais contexto sobre o problema:</p>
                <pre><code>
        try {
            try {
                throw new Error('Erro inicial');
            } catch (error) {
                throw new Error('Erro secundário: ' + error.message);
            }
        } catch (finalError) {
            console.error('Erro final:', finalError.message);
        }
                </code></pre>
                
                <h4>Boas Práticas:</h4>
                <ul>
                    <li>Use mensagens de erro claras e descritivas ao lançar erros.</li>
                    <li>Evite capturar erros genéricos sem tratá-los adequadamente.</li>
                    <li>Adicione logs para ajudar na depuração, mas remova-os em produção.</li>
                    <li>Use <code>finally</code> para liberar recursos, como conexões de banco de dados ou arquivos abertos.</li>
                </ul>
                
                <h4>Desafios:</h4>
                <p>Pratique o tratamento de erros resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Crie uma função que receba dois números e retorne a divisão entre eles. Lance um erro se o divisor for zero.</li>
                    <li>Implemente uma função que leia um arquivo JSON e trate erros caso o arquivo não exista ou esteja corrompido.</li>
                    <li>Simule uma operação assíncrona que pode falhar e trate o erro usando <code>async/await</code>.</li>
                    <li>Crie um sistema de login que lance um erro se o usuário não for encontrado ou a senha estiver incorreta.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Tratamento%20de%20Erros%20no%20JavaScript">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-14',
            title: 'Local Storage e Session Storage',
            description: 'Descubra como armazenar dados no navegador usando Local Storage e Session Storage.',
            content: `
                <h3>Local Storage e Session Storage</h3>
                <p>Essas ferramentas permitem salvar informações no navegador para uso posterior, mesmo após recarregar a página.</p>
                
                <h4>Diferenças entre Local Storage e Session Storage:</h4>
                <ul>
                    <li><strong>Local Storage:</strong> Os dados persistem mesmo após o navegador ser fechado e reaberto.</li>
                    <li><strong>Session Storage:</strong> Os dados são removidos assim que a aba ou janela do navegador é fechada.</li>
                </ul>
                
                <h4>Exemplo com Local Storage:</h4>
                <pre><code>
        // Salvando dados
        localStorage.setItem('nome', 'JavaScript');
        
        // Recuperando dados
        let nome = localStorage.getItem('nome');
        console.log(nome); // JavaScript
        
        // Removendo dados
        localStorage.removeItem('nome');
        
        // Limpando todo o Local Storage
        localStorage.clear();
                </code></pre>
                
                <h4>Exemplo com Session Storage:</h4>
                <pre><code>
        // Salvando dados
        sessionStorage.setItem('sessao', 'Ativa');
        
        // Recuperando dados
        let sessao = sessionStorage.getItem('sessao');
        console.log(sessao); // Ativa
        
        // Removendo dados
        sessionStorage.removeItem('sessao');
        
        // Limpando todo o Session Storage
        sessionStorage.clear();
                </code></pre>
                
                <h4>Armazenando Objetos:</h4>
                <p>Como o Local Storage e o Session Storage só armazenam strings, você pode usar <code>JSON.stringify</code> para salvar objetos e <code>JSON.parse</code> para recuperá-los:</p>
                <pre><code>
        // Salvando um objeto
        const usuario = { nome: 'João', idade: 30 };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        
        // Recuperando o objeto
        const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));
        console.log(usuarioSalvo.nome); // João
                </code></pre>
                
                <h4>Verificando Disponibilidade:</h4>
                <p>Antes de usar o Local Storage ou Session Storage, é uma boa prática verificar se o navegador suporta essas APIs:</p>
                <pre><code>
        if (typeof Storage !== 'undefined') {
            console.log('Local Storage e Session Storage estão disponíveis.');
        } else {
            console.error('Local Storage e Session Storage não são suportados neste navegador.');
        }
                </code></pre>
                
                <h4>Exemplo Prático: Contador de Visitas</h4>
                <p>Um exemplo prático de uso do Local Storage é criar um contador de visitas:</p>
                <pre><code>
        // Recuperar o contador do Local Storage
        let contador = localStorage.getItem('contador') || 0;
        
        // Incrementar o contador
        contador++;
        localStorage.setItem('contador', contador);
        
        // Exibir o contador
        console.log(\`Você visitou esta página \${contador} vezes.\`);
                </code></pre>
                
                <h4>Boas Práticas:</h4>
                <ul>
                    <li>Evite armazenar informações sensíveis, como senhas, no Local Storage ou Session Storage.</li>
                    <li>Use <code>JSON.stringify</code> e <code>JSON.parse</code> para armazenar e recuperar objetos.</li>
                    <li>Limpe os dados que não são mais necessários para evitar desperdício de espaço.</li>
                    <li>Verifique a compatibilidade do navegador antes de usar essas APIs.</li>
                </ul>
                
                <h4>Desafios:</h4>
                <p>Pratique o uso de Local Storage e Session Storage resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Crie um formulário que salve os dados do usuário no Local Storage e os recupere ao recarregar a página.</li>
                    <li>Implemente um sistema de preferências de tema (claro/escuro) que salve a escolha do usuário no Local Storage.</li>
                    <li>Crie um contador de cliques que seja armazenado no Session Storage e reinicie ao fechar a aba.</li>
                    <li>Desenvolva uma lista de tarefas onde as tarefas sejam salvas no Local Storage.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Local%20Storage%20e%20Session%20Storage">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
        {
            id: 'lesson-15',
            title: 'Introdução ao ES6+',
            description: 'Explore os novos recursos do JavaScript moderno, como arrow functions, destructuring e muito mais.',
            content: `
                <h3>Introdução ao ES6+</h3>
                <p>O ES6 trouxe várias melhorias para o JavaScript, tornando o código mais limpo e eficiente. Aqui estão alguns dos principais recursos introduzidos no ES6 e versões posteriores.</p>
                
                <h4>Arrow Functions:</h4>
                <p>Arrow functions são uma forma mais concisa de escrever funções. Elas não possuem seu próprio <code>this</code>, o que as torna úteis em callbacks e métodos de array.</p>
                <pre><code>
        // Função tradicional
        function soma(a, b) {
            return a + b;
        }
        
        // Arrow function
        const somaArrow = (a, b) => a + b;
        
        console.log(soma(5, 3)); // 8
        console.log(somaArrow(5, 3)); // 8
                </code></pre>
                
                <h4>Destructuring:</h4>
                <p>O destructuring permite extrair valores de arrays ou propriedades de objetos de forma mais simples.</p>
                <pre><code>
        const pessoa = { nome: 'João', idade: 30 };
        
        // Destructuring de objeto
        const { nome, idade } = pessoa;
        console.log(nome); // João
        console.log(idade); // 30
        
        // Destructuring de array
        const numeros = [1, 2, 3];
        const [primeiro, segundo] = numeros;
        console.log(primeiro); // 1
        console.log(segundo); // 2
                </code></pre>
                
                <h4>Template Literals:</h4>
                <p>Os template literals permitem criar strings de forma mais legível, com suporte a interpolação de variáveis e quebra de linha.</p>
                <pre><code>
        const nome = 'JavaScript';
        console.log(\`Bem-vindo ao curso de \${nome}!\`);
                </code></pre>
                
                <h4>Default Parameters:</h4>
                <p>Os parâmetros padrão permitem definir valores padrão para os argumentos de uma função.</p>
                <pre><code>
        function saudacao(nome = 'Visitante') {
            return \`Olá, \${nome}!\`;
        }
        console.log(saudacao()); // Olá, Visitante!
        console.log(saudacao('Maria')); // Olá, Maria!
                </code></pre>
                
                <h4>Rest e Spread Operators:</h4>
                <p>O operador <code>...</code> pode ser usado para coletar argumentos em arrays (<strong>rest</strong>) ou espalhar elementos de arrays/objetos (<strong>spread</strong>).</p>
                <pre><code>
        // Rest
        function soma(...numeros) {
            return numeros.reduce((total, num) => total + num, 0);
        }
        console.log(soma(1, 2, 3, 4)); // 10
        
        // Spread
        const numeros = [1, 2, 3];
        const novosNumeros = [...numeros, 4, 5];
        console.log(novosNumeros); // [1, 2, 3, 4, 5]
                </code></pre>
                
                <h4>Classes:</h4>
                <p>O ES6 introduziu a sintaxe de classes para facilitar a criação de objetos e herança.</p>
                <pre><code>
        class Pessoa {
            constructor(nome, idade) {
                this.nome = nome;
                this.idade = idade;
            }
            saudacao() {
                return \`Olá, meu nome é \${this.nome} e tenho \${this.idade} anos.\`;
            }
        }
        const pessoa = new Pessoa('João', 30);
        console.log(pessoa.saudacao());
                </code></pre>
                
                <h4>Promises:</h4>
                <p>As Promises facilitam o trabalho com operações assíncronas, como requisições a APIs.</p>
                <pre><code>
        const promessa = new Promise((resolve, reject) => {
            const sucesso = true;
            if (sucesso) {
                resolve('Operação bem-sucedida!');
            } else {
                reject('Erro na operação.');
            }
        });
        
        promessa
            .then(resultado => console.log(resultado))
            .catch(erro => console.error(erro));
                </code></pre>
                
                <h4>Modules:</h4>
                <p>O ES6 introduziu suporte nativo a módulos, permitindo importar e exportar funcionalidades entre arquivos.</p>
                <pre><code>
        // Arquivo: math.js
        export function soma(a, b) {
            return a + b;
        }
        
        // Arquivo: main.js
        import { soma } from './math.js';
        console.log(soma(2, 3)); // 5
                </code></pre>
                
                <h4>Boas Práticas:</h4>
                <ul>
                    <li>Use <code>const</code> e <code>let</code> em vez de <code>var</code> para declarar variáveis.</li>
                    <li>Prefira <code>arrow functions</code> para funções curtas e callbacks.</li>
                    <li>Utilize <code>template literals</code> para criar strings dinâmicas.</li>
                    <li>Organize seu código em módulos para facilitar a manutenção.</li>
                </ul>
                
                <h4>Desafios:</h4>
                <p>Pratique os conceitos do ES6+ resolvendo os seguintes desafios:</p>
                <ol>
                    <li>Crie uma função que use <code>rest</code> para calcular a soma de números indefinidos.</li>
                    <li>Implemente uma classe <code>Carro</code> com propriedades e métodos, e crie uma instância dela.</li>
                    <li>Use <code>destructuring</code> para extrair valores de um objeto e de um array.</li>
                    <li>Crie um módulo que exporte uma função e importe-a em outro arquivo.</li>
                </ol>
                
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20ES6%20e%20Recursos%20Modernos">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
    ];

    const lessonsContainer = document.getElementById('lessonsAccordion');

    if (!lessonsContainer) {
        console.error('Elemento lessonsAccordion não encontrado.');
        return;
    }

    lessonsContainer.innerHTML = '';

    lessons.forEach((lesson, index) => {
        const lessonItem = document.createElement('div');
        lessonItem.classList.add('accordion-item');

        lessonItem.innerHTML = `
            <h2 class="accordion-header" id="heading-${lesson.id}">
                <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${lesson.id}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse-${lesson.id}">
                    ${lesson.title}
                </button>
            </h2>
            <div id="collapse-${lesson.id}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading-${lesson.id}" data-bs-parent="#lessonsAccordion">
                <div class="accordion-body">
                    <p>${lesson.description}</p>
                    <button class="btn btn-primary btn-view-content" data-lesson-id="${lesson.id}" aria-label="Ver conteúdo da aula: ${lesson.title}">Ver Conteúdo</button>
                    <button class="btn btn-sm btn-outline-primary read-lesson" data-lesson-id="${lesson.id}" aria-label="Ouvir título e descrição da lição: ${lesson.title}">Ouvir Título e Descrição</button>
                </div>
            </div>
        `;

        lessonsContainer.appendChild(lessonItem);
    });

    lessonsContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('read-lesson')) {
            const lessonId = e.target.getAttribute('data-lesson-id');
            const lesson = lessons.find(l => l.id === lessonId);

            if (lesson) {
                const textContent = `${lesson.title}. ${lesson.description}`;
                speak(textContent); // Reproduz o título e a descrição
            } else {
                console.error(`Lição com ID ${lessonId} não encontrada.`);
            }
        }

        if (e.target.classList.contains('btn-view-content')) {
            const lessonId = e.target.getAttribute('data-lesson-id');
            const lesson = lessons.find(l => l.id === lessonId);

            if (lesson) {
                showLessonContent(lesson);
            } else {
                console.error(`Lição com ID ${lessonId} não encontrada.`);
            }
        }
    });
}

function showLessonContent(lesson) {
    // Remove qualquer modal existente antes de criar um novo
    const existingModal = document.getElementById('lessonModal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = 'lessonModal';
    modal.tabIndex = -1;
    modal.setAttribute('aria-labelledby', 'lessonModalLabel');
    modal.setAttribute('aria-hidden', 'true');

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="lessonModalLabel">${lesson.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                </div>
                <div class="modal-body">
                    ${lesson.content}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();

    // Reproduz o conteúdo da lição
    const textContent = lesson.content.replace(/<[^>]*>/g, '').trim();
    speak(textContent);

    modal.addEventListener('hidden.bs.modal', function () {
        modal.remove();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initLessons();
});