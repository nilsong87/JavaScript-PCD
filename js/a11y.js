export const a11y = {
    liveRegion: null,

    init() {
        if (!this.liveRegion) {
            this.liveRegion = this.createLiveRegion();
        }
        return this;
    },

    createLiveRegion(id = 'a11y-live-region') {
        let region = document.getElementById(id);
        if (!region) {
            region = document.createElement('div');
            region.id = id;
            region.setAttribute('aria-live', 'polite');
            region.style.cssText = 'position:absolute;left:-9999px;';
            document.body.appendChild(region);
        }
        return region;
    },

    announce(message, priority = 'polite') {
        const liveRegion = document.getElementById('screen-reader-live-region');
        if (liveRegion) {
            liveRegion.setAttribute('aria-live', priority);
            liveRegion.textContent = ''; // Limpar conteúdo anterior
            setTimeout(() => {
                liveRegion.textContent = message; // Adicionar nova mensagem
            }, 100);
        } else {
            console.warn('Região ao vivo não encontrada.');
        }

        // Reproduzir o áudio usando a API SpeechSynthesis
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(message);
            utterance.lang = 'pt-BR'; // Definir o idioma como português do Brasil
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('API SpeechSynthesis não suportada neste navegador.');
        }
    },
    init() {
        console.log('Acessibilidade inicializada.');
    }
};