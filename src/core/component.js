export class Component {

    constructor (id) {
        this.$el = document.getElementById(id);

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
        this.$el.classList.add('hidden');
        this.onHide();
    }

    show() {
        this.$el.classList.remove('hidden');
        this.onShow();
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
