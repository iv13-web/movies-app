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

    listen(eventType, callback) {
        this.$element.addEventListener(eventType, callback);
    }

    savelocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getFromlocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    sortByRatingFromTop(moviesArray) {
        const filteredArray = moviesArray.filter(movie => movie.rating_kinopoisk);
        filteredArray.forEach(movie => movie.rating_kinopoisk = movie.rating_kinopoisk.toFixed(1));
        return filteredArray.sort((a,b) => b.rating_kinopoisk - a.rating_kinopoisk);
    }


    // Development method
    log() {
        console.log(this);
    }

}
