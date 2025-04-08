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
        this.init();
        this.liveRegion.setAttribute('aria-live', priority);
        this.liveRegion.textContent = '';
        setTimeout(() => {
            this.liveRegion.textContent = message;
        }, 100);
    }
};