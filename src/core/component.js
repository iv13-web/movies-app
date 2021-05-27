export class Component {

    constructor (id) {
        this.$element = document.getElementById(id);

        // this.a = 4
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

    savelocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    getFromlocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    index() {
        const arr = Array.from(document.querySelectorAll('.nav__link'));
        return arr.indexOf(arr.find(link  => link.dataset.name === this.$element.id));
    }

    // Development method
    log() {
        console.log(this);
    }
}
