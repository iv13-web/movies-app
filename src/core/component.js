export class Component {

    constructor (id) {

        this.$element = document.getElementById(id);
        this.init();
    }

    init() {
    } 

    onShow() {
    }

    onHide() {   
    }

    hide() {
        this.$element.classList.add('hidden');
        this.onHide();
    }

    show() {
        this.$element.classList.remove('hidden');
        this.onShow();
    }


    removeListener(el) {

        const clone = el.cloneNode();
        this.$element.replaceChild(clone, el);
        console.log(this.$element);
    }


    listen(eventType, callback) {
        this.$element.addEventListener(eventType, callback);
    }

    savelocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getFromlocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    // Development method
    log() {
        console.log(this);
    }



}
