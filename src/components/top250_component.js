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

        console.log(top250Movies);

        top250Movies = cardService.sortByRatingFromTop(top250Movies);

        const html = top250Movies.map(movie => cardService.render(movie));

        const $container = this.$element.querySelector('.container');
        this.loader.hide();
        $container.insertAdjacentHTML('beforeend', html.join(' '));

        const modal = new MovieCardModal();
        // $container.addEventListener('click', modal.create())

        $container.addEventListener('click', event => {

            const setModal = async () => {

                this.loader.show();
                const json = await getJSON(event);
                this.loader.hide();

                // тут должен быть create modal

                console.log(json);
            }

            setModal();
            

        });
    }
    

    onHide() {
        this.$element.querySelector('.container').innerHTML = '';
    }
}




async function getJSON(event) {

    // if ( ! event.target.classList.contains() )  отключить кнопки save-buttons

    const id = event.target.closest('.card').dataset.id;
    const fbData = await fbApiService.fetchCard('/top250.json');
    const list = transformFbService.fbObjectToArray(fbData);
    const json = list.filter(movie => movie.firebaseId === id );

    return json;
}



/*
const regexp = new RegExp('джен', 'i');
top250Movies.filter(x => regexp.test(x.title))
*/ 
