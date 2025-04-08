import { a11y } from './a11y.js';
import { initScreenReader } from './screen-reader.js';
import { initKeyboardNavigation } from './keyboard-nav.js';
import { initLessons } from './lessons.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        a11y.init();
        initScreenReader(a11y);  // Isso agora expõe window.screenReader
        initKeyboardNavigation(a11y);
        initLessons();
        console.log('Todos os módulos inicializados');
    } catch (error) {
        console.error('Erro na inicialização:', error);
    }
});