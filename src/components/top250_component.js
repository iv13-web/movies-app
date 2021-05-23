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
        // чтобы загружались фильмы, если юзер остался на этом табе и перезагрузил страницу
        setTimeout(() => {
            if ( !this.$element.classList.contains('hidden')) {
                this.onShow();
            }
        }, 0);
    }

    async onShow() {

        this.loader.show();
        
        const fbData = await fbApiService.fetchCard('/top250.json');
        let top250Movies = transformFbService.fbObjectToArray(fbData);

        top250Movies = cardService.sortByRatingFromTop(top250Movies);
        const html = top250Movies.map(movie => cardService.render(movie));

        this.loader.hide();

        this.$element.querySelector('.container')
          .insertAdjacentHTML('beforeend', html.join(' '));

        this.afterLoading();
    }

    afterLoading() {

        const modalHandler = async (event) => {
            
            const modal = new MovieCardModal();
            this.loader.show();
            const json = await getJSON(event);
            this.loader.hide();
            modal.create(json);
        };
        
        const $container = this.$element.querySelector('.container')
        $container.addEventListener('click', modalHandler);
    }

    onHide() {

        const $container = this.$element.querySelector('.container')
        $container.innerHTML = '';
        this.removeListener($container);
    }
}

async function getJSON(event) {

    const id = event.target.closest('.card').dataset.id;
    const fbData = await fbApiService.fetchCard('/top250.json');
    const list = transformFbService.fbObjectToArray(fbData);
    const json = list.filter(movie => movie.firebaseId === id );
    return json[0];
}



/*
const regexp = new RegExp('джен', 'i');
top250Movies.filter(x => regexp.test(x.title))
*/ 
