export class Component {

    constructor (id) {

        this.$element = document.getElementById(id);
        this.init();
    }

    init() {
    } 

    hide() {
        this.$element.classList.add('hidden');
    }

    show() {
        this.$element.classList.remove('hidden');
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