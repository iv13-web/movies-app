import {Component} from '../core/component';
import {MovieCardModal} from './movie_modal_component'
import {cardService} from '../services/card.service';
import {fbApiService} from '../services/api.service';
import {transformFbService} from '../services/transform_fb.service';

export class Top250Component extends Component {

    constructor(id, loader) {
        super (id);
        this.loader = loader;
    }
    /*
    init отрабатывает сразу, а надо, чтобы карточки генерировались при нажатии на таб "Top250". 
    Можно определить через hide и show в Component. Понадобится onShow и onHide.
    */ 
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
        pagination.addEventListener('click', event => {
            paginationHandler.bind(this)(event);
            switchPages.bind(this)(getPageURL(event));
        });
    }

    async onShow() {

        this.loader.show();

        const fbData = await fbApiService.fetchCard('/page1.json');
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


async function switchPages(url=`/page1.json`) {

    this.$element.querySelector('.container').innerHTML = ''
    this.loader.show();
    const fbData = await fbApiService.fetchCard(url);
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
}

function paginationHandler (event) {

    event.preventDefault();
    if (event.target && event.target.classList.contains('pagination__link')) {

        const links = document.querySelectorAll('.pagination__link');
        links.forEach(link => {
            link.classList.remove('pagination__link_active');
        });
        event.target.classList.add('pagination__link_active');
    }
}

async function getJSON(event) {

    if (event.target && event.target.closest('.card').dataset.id) {

        const id = event.target.closest('.card').dataset.id;
        const fbData = await fbApiService.fetchCard('/top250.json');
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
top250Movies.filter(x => regexp.test(x.title))
*/ 
