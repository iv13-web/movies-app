import {fbApiService} from '../services/api.service'
import {transformFbService} from '../services/transform_fb.service'
import {cardService} from '../services/card.service'
import {MovieCardModal} from '../components/movie_modal_component'


export async function createContent (url) {
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
export async function switchPages(url) {
    
    this.$el.querySelector('.container').innerHTML = '';
    createContent.bind(this)(url);
}

export function getPageURL(url, event) {

    try {
        if (event.target && event.target.classList.contains('pagination__link')) {
            return `${url}${event.target.innerText}.json`;
        }
        if (event.target && event.target.closest('.card').dataset.id) {
            let pageNumber = document.querySelector('.pagination__link_active').innerText;
            return `${url}${pageNumber}.json`;
        }
    } catch (e){}
}

// Для поиска конкретного json-а для модалки
export async function getJSON(url, event) {

    if (event.target && event.target.closest('.card').dataset.id) {
        const id = event.target.closest('.card').dataset.id;
        const fbData = await fbApiService.fetchCards(getPageURL(url, event));
        const list = transformFbService.fbObjectToArray(fbData);
        const json = list.filter(movie => movie.firebaseId === id );
        return json[0];
    }
}

export async function openModal(url, event) {

    if (event.target && event.target.dataset.act !== 'trailer' ) {
        this.modal = new MovieCardModal();
        this.loader.show();
        const json = await getJSON(url, event);
        this.loader.hide();
        this.modal.create(json);
        document.querySelector('body')
          .classList.add('stop-scroll');
    }
}