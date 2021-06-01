import {Component} from '../core/component';
import {createContent, getPageURL, openModal, switchPages} from '../modules/card.functions';

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

        this.container.addEventListener('click', event => {
            openModal.bind(this)('/top250/page', event);
            // сюда можно добавить функции для сохранения в избранное
        });
        this.pagination.addEventListener('click', event => {
            switchPages.bind(this)(getPageURL('/top250/page', event));
        });
    }

    onShow() {
        this.pagination.innerHTML = createPagination(10, 1, 'top250');
        createContent.bind(this)('/top250/page1.json');
    }

    onHide() {
        this.container.innerHTML = '';
        this.pagination.innerHTML = '';
    }
}


/*
const regexp = new RegExp('джен', 'i');
top250Movies.filter(movie => regexp.test(movie.title))
*/ 
