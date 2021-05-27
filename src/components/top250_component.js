import {Component} from '../core/component';
import {MovieCardModal} from './movie_modal_component';
import {cardService} from '../services/card.service';
import {fbApiService} from '../services/api.service';
import {transformFbService} from '../services/transform_fb.service';

export class Top250Component extends Component {

    constructor(id, loader) {
        super (id);
        this.loader = loader;
    }

    init() {

     // setTimeout чтобы загружались фильмы, если юзер остался на этом табе и перезагрузил страницу
        setTimeout(() => {
            if (!this.$element.classList.contains('hidden')) {
                this.onShow();
            }
        }, 0);

        const pagination = this.$element.querySelector('.pagination');
        const container = this.$element.querySelector('.container');

        container.addEventListener('click', event => {
            modalHandler.bind(this)(event);
            // сюда можно добавить функции для сохранения в избранное
        });
        // pagination.addEventListener('click', event => {
        //     paginationHandler.bind(this)(event);
        //     switchPages.bind(this)(getPageURL(event));
        // });
    }

    async onShow() {

        this.loader.show();

        
        this.$element.querySelector(".pagination ul").innerHTML = createPagination(6, 1, this.index());


        const fbData = await fbApiService.fetchCards(`/page1.json`);
        let top250Movies = transformFbService.fbObjectToArray(fbData);
        top250Movies = cardService.sortByRatingFromTop(top250Movies);
        const html = top250Movies.map(movie => cardService.render(movie));

        this.loader.hide();
        this.$element.querySelector('.container')
          .insertAdjacentHTML('beforeend', html.join(' '));
    }

    onHide() {
        this.$element.querySelector('.container').innerHTML = '';
    }
}

// url по умолчанию можно брать из localStorage
async function switchPages(url=`/page1.json`) {

    this.$element.querySelector('.container').innerHTML = '';
    this.loader.show();
    const fbData = await fbApiService.fetchCards(url);
    let top250Movies = transformFbService.fbObjectToArray(fbData);
    top250Movies = cardService.sortByRatingFromTop(top250Movies);
    const html = top250Movies.map(movie => cardService.render(movie));
    this.loader.hide();
    this.$element.querySelector('.container')
      .insertAdjacentHTML('beforeend', html.join(' '));
}

function getPageURL(event) {

    if (event.target && event.target.classList.contains('pagination__link')) {
        return `/page${event.target.innerText}.json`;
    }
    if (event.target && event.target.closest('.card').dataset.id) {
        const pageNumber = document.querySelector('.pagination__link_active').innerText;
        return `/page${pageNumber}.json`;
    }
}

function paginationHandler (event) {

    event.preventDefault();
    if (event.target && event.target.classList.contains('pagination__link')) {

        const links = document.querySelectorAll('.pagination__link');
        links.forEach(link => {
            link.classList.remove('pagination__link_active');
        });
        event.target.classList.add('pagination__link_active');

        this.savelocalStorage('top250', event.target.innerText);
    }
}

async function getJSON(event) {

    if (event.target && event.target.closest('.card').dataset.id) {

        const id = event.target.closest('.card').dataset.id;
        const fbData = await fbApiService.fetchCards(getPageURL(event));
        const list = transformFbService.fbObjectToArray(fbData);
        const json = list.filter(movie => movie.firebaseId === id );
        return json[0];
    }
}

async function modalHandler(event) {

    if (event.target && event.target.dataset.act != 'trailer' ) {

        const modal = new MovieCardModal();
        this.loader.show();
        const json = await getJSON(event);
        this.loader.hide();
        modal.create(json);
    
        document.querySelector('body')
          .classList.add('stop-scroll');
    }
}



/*
const regexp = new RegExp('джен', 'i');
top250Movies.filter(movie => regexp.test(movie.title))
*/ 
