export function initLessons() {
    const lessons = [
        {
            id: 'lesson-1',
            title: 'Introdução ao JavaScript',
            description: 'Aprenda os conceitos básicos de JavaScript, incluindo variáveis, tipos de dados e operadores.',
            content: `
                <h3>O que é JavaScript?</h3>
                <p>JavaScript é uma linguagem de programação usada para criar interatividade em páginas da web...</p>
                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <p>As estruturas condicionais permitem executar diferentes blocos de código com base em condições.</p>
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
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <p>Os loops permitem executar um bloco de código várias vezes.</p>
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
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <p>Funções são blocos de código que podem ser reutilizados.</p>
                <h4>Exemplo de função:</h4>
                <pre><code>
function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));
                </code></pre>
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <p>O DOM (Document Object Model) permite acessar e manipular elementos HTML.</p>
                <h4>Exemplo:</h4>
                <pre><code>
document.getElementById("meuBotao").addEventListener("click", function() {
    alert("Botão clicado!");
});
                </code></pre>
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <p>Eventos permitem capturar interações do usuário, como cliques ou teclas pressionadas.</p>
                <h4>Exemplo:</h4>
                <pre><code>
document.addEventListener("keydown", function(event) {
    console.log("Tecla pressionada: " + event.key);
});
                </code></pre>
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <pre><code>
let numeros = [1, 2, 3];
let dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6]
                </code></pre>
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <p>Objetos são coleções de pares chave-valor.</p>
                <h4>Exemplo:</h4>
                <pre><code>
let pessoa = {
    nome: "João",
    idade: 30
};
console.log(pessoa.nome); // João
                </code></pre>
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <p>Classes são modelos para criar objetos.</p>
                <h4>Exemplo:</h4>
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
console.log(pessoa.saudacao());
                </code></pre>
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <p>Promises ajudam a lidar com operações assíncronas.</p>
                <h4>Exemplo com async/await:</h4>
                <pre><code>
async function fetchDados() {
    let resposta = await fetch("https://api.exemplo.com/dados");
    let dados = await resposta.json();
    console.log(dados);
}
fetchDados();
                </code></pre>
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <p>APIs (Application Programming Interfaces) permitem que você se conecte a serviços externos e obtenha dados para usar em suas aplicações.</p>
                <h4>Exemplo:</h4>
                <pre><code>
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro ao buscar dados:', error));
                </code></pre>
                <p>No exemplo acima, usamos o método <code>fetch</code> para buscar dados de uma API pública. Os dados são convertidos para JSON e exibidos no console.</p>
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <h4>Exemplo:</h4>
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
                <p>Os módulos permitem organizar o código e evitar repetições.</p>
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <p>O tratamento de erros é essencial para criar aplicações robustas e evitar falhas inesperadas.</p>
                <h4>Exemplo:</h4>
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
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <h4>Exemplo com Local Storage:</h4>
                <pre><code>
// Salvando dados
localStorage.setItem('nome', 'JavaScript');

// Recuperando dados
let nome = localStorage.getItem('nome');
console.log(nome); // JavaScript

// Removendo dados
localStorage.removeItem('nome');
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
                </code></pre>
                <p>Use o Local Storage para dados persistentes e o Session Storage para dados temporários.</p>
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
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
                <p>O ES6 trouxe várias melhorias para o JavaScript, tornando o código mais limpo e eficiente.</p>
                <h4>Exemplo com Arrow Functions:</h4>
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
                <h4>Exemplo com Destructuring:</h4>
                <pre><code>
const pessoa = { nome: 'João', idade: 30 };

// Destructuring
const { nome, idade } = pessoa;
console.log(nome); // João
console.log(idade); // 30
                </code></pre>
                <h4>Exemplo com Template Literals:</h4>
                <pre><code>
const nome = 'JavaScript';
console.log(\`Bem-vindo ao curso de \${nome}!\`);
                </code></pre>
                <p>Esses recursos tornam o código mais legível e fácil de escrever.</p>
                                <button class="btn btn-sm btn-outline-primary read-lesson"
                    data-audio="Introdu%C3%A7%C3%A3o%20ao%20JavaScript">
                    <i class="fas fa-volume-up"></i> Ouvir lição
                </button>
            `,
        },
    ];

    const lessonsContainer = document.getElementById('lessonsAccordion');

    if (lessonsContainer) {
        // Limpar o conteúdo do contêiner antes de adicionar as lições
        lessonsContainer.innerHTML = '';

        lessons.forEach((lesson, index) => {
            // Verificar se a aba já existe
            if (document.getElementById(`collapse-${lesson.id}`)) {
                console.log(`A aba da lição ${lesson.id} já foi criada.`);
                return; // Pular a criação desta aba
            }

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
                        <button class="btn btn-sm btn-outline-primary read-lesson" aria-label="Ouvir conteúdo da lição: ${lesson.title}">Ouvir Lição</button>
                    </div>
                </div>
            `;

            lessonsContainer.appendChild(lessonItem);
        });

        // Registrar o evento de clique apenas uma vez
        lessonsContainer.addEventListener('click', function (e) {
            // Verificar se o botão clicado é para ouvir a lição
            if (e.target.classList.contains('read-lesson')) {
                // Encontrar o ID da lição correspondente
                const accordionItem = e.target.closest('.accordion-item');
                const lessonId = accordionItem ? accordionItem.querySelector('.btn-view-content').getAttribute('data-lesson-id') : null;

                if (lessonId) {
                    // Encontrar o conteúdo completo da lição
                    const lesson = lessons.find(l => l.id === lessonId);
                    const lessonContent = lesson ? lesson.content : '';

                    if (lessonContent) {
                        // Chamar a função de leitura do screen-reader
                        if (window.screenReader) {
                            window.screenReader.readContent(lessonContent);
                        } else {
                            console.log('Texto para reprodução:', lessonContent);
                            speak(lessonContent); // Reproduzir o texto como áudio
                        }
                    }
                }
            }

            // Verificar se o botão clicado é para visualizar o conteúdo
            if (e.target.classList.contains('btn-view-content')) {
                const lessonId = e.target.getAttribute('data-lesson-id');
                const lesson = lessons.find(l => l.id === lessonId);

                if (lesson) {
                    // Garantir que a janela seja aberta apenas uma vez
                    const existingModal = document.getElementById('lessonModal');
                    if (!existingModal) {
                        showLessonContent(lesson);
                    }
                }
            }
        });
    }

    function showLessonContent(lesson) {
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
                        <p>${lesson.content}</p>
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

        modal.addEventListener('hidden.bs.modal', function () {
            modal.remove();
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initLessons();
});