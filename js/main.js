import { a11y } from './a11y.js';
import { initScreenReader } from './screen-reader.js';
import { initKeyboardNavigation } from './keyboard-nav.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar a biblioteca de acessibilidade
    a11y.init();

    // Inicializar os módulos
    initScreenReader(a11y);
    initKeyboardNavigation(a11y);

    console.log('Aplicação inicializada com sucesso.');

    const runCodeButton = document.getElementById('run-code');
    const clearCodeButton = document.getElementById('clear-code');
    const codeInput = document.getElementById('code-input');
    const codeOutput = document.getElementById('code-output');
    const audioFeedback = document.getElementById('audio-feedback');

    // Verifique se os elementos existem
    if (!runCodeButton || !clearCodeButton || !codeInput || !codeOutput || !audioFeedback) {
        console.error('Um ou mais elementos necessários para o editor de código não foram encontrados.');
        return;
    }

    // Evento para executar o código
    runCodeButton.addEventListener('click', () => {
        try {
            const code = codeInput.value;
            const result = eval(code); // Use eval com cuidado
            codeOutput.textContent = result !== undefined ? result : 'Código executado sem saída.';
            audioFeedback.textContent = 'Código executado com sucesso.';
        } catch (error) {
            codeOutput.textContent = `Erro: ${error.message}`;
            audioFeedback.textContent = `Erro ao executar o código: ${error.message}`;
        }
    });

    // Evento para limpar o editor
    clearCodeButton.addEventListener('click', () => {
        codeInput.value = '';
        codeOutput.textContent = 'O resultado aparecerá aqui...';
        audioFeedback.textContent = 'O feedback de áudio será fornecido aqui...';
    });
});

function initThemeSelector() {
    const themeSelector = document.createElement('div');
    themeSelector.className = 'theme-selector';
    themeSelector.innerHTML = `
        <div class="theme-buttons">
            <button class="theme-btn btn-default" title="Tema padrão" aria-label="Tema padrão" data-theme="default">
                <i class="fas fa-sun theme-icon"></i>
            </button>
            <button class="theme-btn btn-light-contrast" title="Alto contraste claro" aria-label="Alto contraste claro" data-theme="high-contrast-light">
                <i class="fas fa-adjust theme-icon"></i>
            </button>
            <button class="theme-btn btn-dark-contrast" title="Alto contraste escuro" aria-label="Alto contraste escuro" data-theme="high-contrast-dark">
                <i class="fas fa-moon theme-icon"></i>
            </button>
            <button class="theme-btn btn-protanopia" title="Tema para protanopia" aria-label="Tema para protanopia" data-theme="protanopia-theme">
                <i class="fas fa-eye theme-icon"></i>
            </button>
        </div>
    `;
    document.body.appendChild(themeSelector);

    // Event listeners para botões de tema
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const theme = this.getAttribute('data-theme');
            setTheme(theme);
            saveUserPreference('theme', theme);
            window.a11y.announce(`Tema ${this.getAttribute('title')} ativado`);
        });
    });
}

function setTheme(theme) {
    // Remover todas as classes de tema primeiro
    document.body.classList.remove(
        'high-contrast-light',
        'high-contrast-dark',
        'protanopia-theme',
        'tritanopia-theme'
    );

    // Adicionar a classe do tema selecionado
    if (theme !== 'default') {
        document.body.classList.add(theme);
    }
}

function initAccessibilityTools() {
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const highContrastBtn = document.getElementById('high-contrast');
    const body = document.body;

    let currentFontSize = 1; // 1 = 100%

    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', function () {
            if (currentFontSize < 1.5) {
                currentFontSize += 0.1;
                body.style.fontSize = `${currentFontSize}em`;
                saveUserPreference('fontSize', currentFontSize);
                window.a11y.announce('Tamanho da fonte aumentado');
            }
        });
    }

    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener('click', function () {
            if (currentFontSize > 0.8) {
                currentFontSize -= 0.1;
                body.style.fontSize = `${currentFontSize}em`;
                saveUserPreference('fontSize', currentFontSize);
                window.a11y.announce('Tamanho da fonte diminuído');
            }
        });
    }

    if (highContrastBtn) {
        highContrastBtn.addEventListener('click', function () {
            body.classList.toggle('high-contrast');
            const isHighContrast = body.classList.contains('high-contrast');
            saveUserPreference('highContrast', isHighContrast);
            window.a11y.announce(isHighContrast ? 'Modo alto contraste ativado' : 'Modo alto contraste desativado');
        });
    }
}

function setupCodeEditor() {
    const codeTextarea = document.getElementById('code-input');
    if (!codeTextarea) {
        console.error('Elemento <textarea> para o editor de código não encontrado.');
        return;
    }

    if (!CodeMirror) {
        console.warn('CodeMirror não foi carregado. Usando textarea padrão.');
        return;
    }

    const editor = CodeMirror.fromTextArea(codeTextarea, {
        mode: 'javascript',
        lineNumbers: true,
        theme: 'monokai',
        matchBrackets: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        extraKeys: {
            'Ctrl-Enter': executeCode,
            'Shift-Enter': executeCode,
        },
    });

    window.codeEditor = editor;
}

function executeCode() {
    const code = window.codeEditor ? window.codeEditor.getValue() : document.getElementById('code-input').value;
    const outputElement = document.getElementById('code-output');
    const audioFeedbackElement = document.getElementById('audio-feedback');

    try {
        const originalConsoleLog = console.log;
        let output = '';

        console.log = function (message) {
            output += message + '\n';
            originalConsoleLog.apply(console, arguments);
        };

        const result = eval(code);

        console.log = originalConsoleLog;

        outputElement.textContent = output || (result !== undefined ? `Resultado: ${result}` : 'Código executado sem saída.');
        audioFeedbackElement.textContent = 'Código executado com sucesso.';
        window.a11y.announce('Código executado com sucesso.');
    } catch (error) {
        outputElement.textContent = `Erro: ${error.message}`;
        audioFeedbackElement.textContent = `Erro: ${error.message}`;
        window.a11y.announce(`Erro ao executar o código: ${error.message}`);
    }
}

function clearCodeEditor() {
    if (window.codeEditor) {
        window.codeEditor.setValue('');
    }
    document.getElementById('code-output').textContent = 'O resultado aparecerá aqui...';
    document.getElementById('audio-feedback').textContent = 'O feedback de áudio será fornecido aqui...';
    window.a11y.announce('Editor de código limpo');
}

function initLessons() {
    const lessons = [
        {
            id: 'lesson-1',
            title: 'Introdução ao JavaScript',
            content: '<p>JavaScript é uma linguagem de programação que permite implementar funcionalidades complexas em páginas web...</p>',
            audioDescription: 'Introdução ao JavaScript. JavaScript é uma linguagem de programação...'
        },
    ];

    const accordion = document.getElementById('lessonsAccordion');

    if (!accordion) {
        console.warn('Elemento lessonsAccordion não encontrado.');
        return;
    }

    lessons.forEach((lesson, index) => {
        const lessonElement = document.createElement('div');
        lessonElement.className = 'accordion-item';
        lessonElement.innerHTML = `
            <h3 class="accordion-header" id="heading-${lesson.id}">
                <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapse-${lesson.id}" 
                        aria-expanded="${index === 0 ? 'true' : 'false'}" 
                        aria-controls="collapse-${lesson.id}">
                    ${lesson.title}
                </button>
            </h3>
            <div id="collapse-${lesson.id}" 
                 class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" 
                 aria-labelledby="heading-${lesson.id}" 
                 data-bs-parent="#lessonsAccordion">
                <div class="accordion-body">
                    ${lesson.content}
                    <button class="btn btn-sm btn-outline-primary read-lesson" 
                            data-audio="${encodeURIComponent(lesson.audioDescription)}">
                        <i class="fas fa-volume-up"></i> Ouvir lição
                    </button>
                </div>
            </div>
        `;
        accordion.appendChild(lessonElement);
    });

    const readLessonButtons = document.querySelectorAll('.read-lesson');
    if (readLessonButtons.length > 0) {
        readLessonButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const audioText = decodeURIComponent(this.getAttribute('data-audio'));
                window.a11y.announce(audioText);
            });
        });
    } else {
        console.warn('Nenhum botão .read-lesson encontrado no DOM.');
    }
}

function setupEventListeners() {
    const readPageBtn = document.getElementById('read-page');
    const stopReadingBtn = document.getElementById('stop-reading');

    if (readPageBtn) {
        readPageBtn.addEventListener('click', readPageContent);
    }

    if (stopReadingBtn) {
        stopReadingBtn.addEventListener('click', stopReading);
    }

    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.altKey && e.key === 't') {
            const themeBtn = document.querySelector('.theme-btn');
            if (themeBtn) themeBtn.click();
        }

        if (e.ctrlKey && e.altKey && e.key === 'a') {
            const accessibilityBar = document.getElementById('accessibility-bar');
            if (accessibilityBar) {
                accessibilityBar.style.display = accessibilityBar.style.display === 'none' ? 'block' : 'none';
            }
        }
    });
}

function saveUserPreference(key, value) {
    localStorage.setItem(`jsAccessible_${key}`, JSON.stringify(value));
}

function loadUserPreferences() {
    const savedTheme = localStorage.getItem('jsAccessible_theme');
    if (savedTheme) {
        setTheme(JSON.parse(savedTheme));
    }

    const savedFontSize = localStorage.getItem('jsAccessible_fontSize');
    if (savedFontSize) {
        const fontSize = JSON.parse(savedFontSize);
        document.body.style.fontSize = `${fontSize}em`;
    }

    const savedHighContrast = localStorage.getItem('jsAccessible_highContrast');
    if (savedHighContrast && JSON.parse(savedHighContrast)) {
        document.body.classList.add('high-contrast');
    }
}

// Funções globais para serem usadas por outros módulos
function announce(message, priority = 'polite') {
    const liveRegion = document.getElementById('screen-reader-live-region');
    if (liveRegion) {
        liveRegion.setAttribute('aria-live', priority);
        liveRegion.textContent = ''; // Limpar conteúdo anterior
        setTimeout(() => {
            liveRegion.textContent = message; // Adicionar nova mensagem
        }, 100);
    } else {
        console.warn('Região ao vivo não encontrada. Exibindo mensagem no console.');
        console.log(message);
    }
}

function readPageContent() {
    // Implementação será fornecida no screen-reader.js
    window.screenReaderReadPage();
}

function stopReading() {
    // Implementação será fornecida no screen-reader.js
    window.screenReaderStop();
}


