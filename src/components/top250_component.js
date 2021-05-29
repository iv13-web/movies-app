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
            if (!this.$el.classList.contains('hidden')) {
                this.onShow();
            }
        }, 0);

        const container = this.$el.querySelector('.container');
        const pagination = this.$el.querySelector('.pagination');

        container.addEventListener('click', event => {
            modalHandler.bind(this)(event);
            // сюда можно добавить функции для сохранения в избранное
        });
        pagination.addEventListener('click', event => {
            switchPages.bind(this)(getPageURL(event));
        });
    }

    onShow() {

        this.$el.querySelector(".pagination").innerHTML = createPagination(10, 1, 'top250');
        createContent.bind(this)();
    }

    onHide() {
        this.$el.querySelector('.container').innerHTML = '';
        this.$el.querySelector(".pagination").innerHTML = '';
    }
}

async function createContent (url=`/top250/page1.json`) {
    this.loader.show();
    const fbData = await fbApiService.fetchCards(url);
    let top250Movies = transformFbService.fbObjectToArray(fbData);
    top250Movies = cardService.sortByRatingFromTop(top250Movies);
    const html = top250Movies.map(movie => cardService.render(movie));
    this.loader.hide();
    this.$el.querySelector('.container')
      .insertAdjacentHTML('beforeend', html.join(' '));
}

// url по умолчанию можно брать из localStorage
async function switchPages(url) {
    
    this.$el.querySelector('.container').innerHTML = '';
    createContent.bind(this)(url);
}

function getPageURL(event) {

    try {
        if (event.target && event.target.classList.contains('pagination__link')) {
            return `/top250/page${event.target.innerText}.json`;
        }
        if (event.target && event.target.closest('.card').dataset.id) {
            let pageNumber = document.querySelector('.pagination__link_active').innerText;
            return `/top250/page${pageNumber}.json`;
        }
    } catch (e){}
}

// Для поиска конкретного json-а для модалки
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

    if (event.target && event.target.dataset.act !== 'trailer' ) {
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
