import { a11y } from './a11y.js';

export function initKeyboardNavigation(a11yInstance) {
    if (!a11yInstance) {
        console.warn('a11y não está disponível para navegação por teclado');
        return;
    }

    document.body.classList.add('keyboard-nav');

    // Implementação simplificada de atalhos de teclado
    document.addEventListener('keydown', (e) => {
        switch (true) {
            case e.key === '1' && e.altKey:
                e.preventDefault();
                focusElementById('main-content', 'Saltando para o conteúdo principal', a11yInstance);
                break;

            case e.key === '2' && e.altKey:
                e.preventDefault();
                focusElementBySelector('nav', 'Saltando para navegação principal', a11yInstance);
                break;

            case e.key === '3' && e.altKey:
                e.preventDefault();
                focusElementBySelector('footer', 'Saltando para o rodapé', a11yInstance);
                break;

            default:
                break;
        }
    });

    console.log('Navegação por teclado inicializada');
}

// Função auxiliar para focar em um elemento pelo ID
function focusElementById(id, message, a11yInstance) {
    const element = document.getElementById(id);
    if (element) {
        element.focus();
        a11yInstance.announce(message);
    }
}

// Função auxiliar para focar em um elemento pelo seletor
function focusElementBySelector(selector, message, a11yInstance) {
    const element = document.querySelector(selector);
    if (element) {
        element.focus();
        a11yInstance.announce(message);
    }
}

// Gerenciar foco para elementos interativos
const interactiveElements = [
    'a[href]', 'button', 'input', 'select', 'textarea',
    '[tabindex]:not([tabindex="-1"])', '[contenteditable]'
];

const allInteractive = document.querySelectorAll(interactiveElements.join(', '));

if (allInteractive.length > 0) {
    allInteractive.forEach(el => {
        el.addEventListener('focus', function () {
            this.classList.add('keyboard-focused');
        });

        el.addEventListener('blur', function () {
            this.classList.remove('keyboard-focused');
        });

        el.addEventListener('mouseover', function () {
            this.classList.remove('keyboard-focused');
        });
    });
}

// Atalhos de teclado específicos
document.addEventListener('keydown', function (e) {
    // Pular para o conteúdo principal
    if (e.key === '1' && e.altKey) {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.focus();
            a11y.announce("Saltando para o conteúdo principal");
        }
    }

    // Pular para a navegação
    if (e.key === '2' && e.altKey) {
        e.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
            nav.focus();
            a11y.announce("Saltando para navegação principal");
        }
    }

    // Pular para o rodapé
    if (e.key === '3' && e.altKey) {
        e.preventDefault();
        const footer = document.querySelector('footer');
        if (footer) {
            footer.focus();
            a11y.announce("Saltando para rodapé");
        }
    }

    // Ativar modo de leitura
    if (e.key === 'R' && e.ctrlKey) {
        e.preventDefault();
        readPageContent();
    }

    // Parar leitura
    if (e.key === 'S' && e.ctrlKey) {
        e.preventDefault();
        stopReading();
    }

    // Navegação entre seções
    if (e.key === 'Tab' && e.shiftKey) {
        // Navegação reversa
        handleSectionNavigation(true, e);
    } else if (e.key === 'Tab') {
        // Navegação normal
        handleSectionNavigation(false, e);
    }
});

// Navegação entre seções
function handleSectionNavigation(isReverse, e) {
    const sections = [
        '#inicio', '#aulas', '#editor', '#exercicios', '#recursos', '#sobre'
    ];

    const currentActive = document.activeElement;
    let currentSectionIndex = -1;

    // Verificar se o foco atual está em uma seção
    for (let i = 0; i < sections.length; i++) {
        const section = document.querySelector(sections[i]);
        if (section && section.contains(currentActive)) {
            currentSectionIndex = i;
            break;
        }
    }

    if (currentSectionIndex !== -1) {
        e.preventDefault();

        let nextIndex;
        if (isReverse) {
            nextIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
        } else {
            nextIndex = (currentSectionIndex + 1) % sections.length;
        }

        const nextSection = document.querySelector(sections[nextIndex]);
        if (nextSection) {
            const focusable = nextSection.querySelectorAll(interactiveElements.join(', '));
            if (focusable.length > 0) {
                focusable[0].focus();
                a11y.announce(`Navegando para seção: ${nextSection.getAttribute('aria-label') || nextSection.id}`);
            }
        }
    }
}

// Navegação em listas (como lições)
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const currentList = document.activeElement.closest('ul, ol');
        if (currentList) {
            const items = Array.from(currentList.querySelectorAll('li'));
            const currentIndex = items.indexOf(document.activeElement);
            let nextIndex;

            if (e.key === 'ArrowDown') {
                nextIndex = (currentIndex + 1) % items.length;
            } else if (e.key === 'ArrowUp') {
                nextIndex = (currentIndex - 1 + items.length) % items.length;
            }

            if (items[nextIndex]) {
                items[nextIndex].focus();
                e.preventDefault();
            }
        }
    }
});

// Função para ler o conteúdo da página
function readPageContent() {
    const content = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(content);
    speechSynthesis.speak(utterance);
    a11y.announce("Leitura da página iniciada");
}

// Função para parar a leitura
function stopReading() {
    speechSynthesis.cancel();
    a11y.announce("Leitura da página interrompida");
}

// Inicializar a navegação por teclado
document.addEventListener('DOMContentLoaded', initKeyboardNavigation);

// Função para anunciar mensagens (usando aria-live)
function announce(message) {
    let liveRegion = document.getElementById('live-region');
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('role', 'status');
        liveRegion.style.position = 'absolute';
        liveRegion.style.left = '-9999px';
        document.body.appendChild(liveRegion);
    }
    liveRegion.textContent = message;
}