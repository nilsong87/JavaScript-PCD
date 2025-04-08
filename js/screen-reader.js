document.addEventListener('DOMContentLoaded', function () {
    // Verificar se a região aria-live já existe
    let liveRegion = document.getElementById('screen-reader-live-region');
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'screen-reader-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('role', 'status');
        liveRegion.style.position = 'absolute';
        liveRegion.style.left = '-9999px';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.overflow = 'hidden';
        document.body.appendChild(liveRegion);
    }

    /**
     * Função para anunciar mensagens para leitores de tela
     * @param {string} message - Mensagem a ser anunciada
     */
    function announce(message) {
        liveRegion.textContent = ''; // Limpar conteúdo anterior
        setTimeout(() => {
            liveRegion.textContent = message; // Adicionar nova mensagem
        }, 100); // Pequeno atraso para garantir que a mensagem seja lida
    }

    /**
     * Função para reproduzir o texto como áudio
     * @param {string} text - Texto a ser lido
     */
    function speak(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'pt-BR'; // Define o idioma como português do Brasil
            utterance.rate = 1; // Velocidade da fala (1 é o padrão)
            utterance.pitch = 1; // Tom da fala (1 é o padrão)
            utterance.volume = 1; // Volume (1 é o máximo)

            // Adicione eventos para depuração
            utterance.onstart = () => console.log('Iniciando reprodução de áudio...');
            utterance.onend = () => console.log('Reprodução de áudio concluída.');
            utterance.onerror = (event) => console.error('Erro na reprodução de áudio:', event.error);

            window.speechSynthesis.speak(utterance);
        } else {
            console.error('A API de síntese de fala não é suportada neste navegador.');
        }
    }

    // Exemplo: Anunciar quando o usuário muda o tema
    const highContrastButton = document.getElementById('high-contrast');
    if (highContrastButton) {
        highContrastButton.addEventListener('click', function () {
            const isHighContrast = document.body.classList.toggle('high-contrast');
            announce(isHighContrast ? 'Modo de alto contraste ativado' : 'Modo de alto contraste desativado');
        });
    }

    // Exemplo: Anunciar quando o tamanho da fonte é alterado
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    let fontSize = 16; // Tamanho de fonte padrão

    if (increaseFontButton) {
        increaseFontButton.addEventListener('click', function () {
            fontSize = Math.min(fontSize + 2, 24); // Limite máximo de 24px
            document.documentElement.style.fontSize = `${fontSize}px`;
            announce(`Tamanho da fonte aumentado para ${fontSize}px`);
        });
    }

    if (decreaseFontButton) {
        decreaseFontButton.addEventListener('click', function () {
            fontSize = Math.max(fontSize - 2, 12); // Limite mínimo de 12px
            document.documentElement.style.fontSize = `${fontSize}px`;
            announce(`Tamanho da fonte reduzido para ${fontSize}px`);
        });
    }

    // Exemplo: Anunciar quando o conteúdo da página é lido
    const readPageButton = document.getElementById('read-page');
    const stopReadingButton = document.getElementById('stop-reading');

    if (readPageButton) {
        readPageButton.addEventListener('click', function () {
            const content = document.body.innerText;
            const utterance = new SpeechSynthesisUtterance(content);
            speechSynthesis.speak(utterance);
            announce('Leitura da página iniciada');
        });
    }

    if (stopReadingButton) {
        stopReadingButton.addEventListener('click', function () {
            speechSynthesis.cancel();
            announce('Leitura da página interrompida');
        });
    }

    // Exemplo: Anunciar mudanças de foco em elementos interativos
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
    interactiveElements.forEach(element => {
        element.addEventListener('focus', function () {
            const label = this.getAttribute('aria-label') || this.textContent || this.id || 'Elemento sem rótulo';
            announce(`Foco em: ${label.trim()}`);
        });
    });

    // Evento para o botão "Ouvir Lição"
    const lessonsContainer = document.getElementById('lessonsAccordion');
    if (lessonsContainer) {
        lessonsContainer.addEventListener('click', function (e) {
            if (e.target.classList.contains('read-lesson')) {
                // Capturar o conteúdo da aba correspondente
                const lessonContent = e.target.closest('.accordion-body').innerText;

                console.log('Texto para reprodução:', lessonContent); // Verifique o texto no console
                announce('Iniciando leitura da lição'); // Atualiza a região ao vivo para leitores de tela
                speak(lessonContent); // Reproduz o texto como áudio
            }
        });
    }
});

import { a11y } from './a11y.js';

export function initScreenReader(a11yInstance) {
    if (!a11yInstance) {
        console.error('a11y não está disponível para o leitor de tela');
        return;
    }

    // Configurações do leitor de tela
    const readPageButton = document.getElementById('read-page');
    const stopReadingButton = document.getElementById('stop-reading');

    if (readPageButton) {
        readPageButton.addEventListener('click', () => {
            const content = document.body.innerText;
            const utterance = new SpeechSynthesisUtterance(content);
            speechSynthesis.speak(utterance);
            a11yInstance.announce('Leitura da página iniciada');
        });
    }

    if (stopReadingButton) {
        stopReadingButton.addEventListener('click', () => {
            speechSynthesis.cancel();
            a11yInstance.announce('Leitura da página interrompida');
        });
    }

    console.log('Leitor de tela inicializado com sucesso');
}