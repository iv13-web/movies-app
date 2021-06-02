import {Component} from '@/core/component';
import {mdb} from "@/services/api.service";
import {$} from '@/core/dom'
// import {createContent, switchPages, getPage} from "@/modules/new.card.functions";


export class Popular extends Component {

    static url = 'movie/popular'
    static id = 'popular'



    constructor(id, loader) {
        super (id);
        this.loader = loader
    }

    init() {

        // setTimeout(() => !this.$el.classList.contains('hidden') && this.onShow(), 0);
        setTimeout(() => !this.isHidden() && this.onShow(), 0);

        this.pagination.on('click', event => switchPages.bind(this)(event, Popular.url, Popular.id));
    }
    
    onShow() {
        console.log(this)
        createContent.bind(this)(Popular.url, getPage(Popular.id), Popular.id)
    }

    onHide() {
        this.container.clear();
        this.pagination.clear();
    }
}

async function createContent(url, page, id) {
    this.loader.show();
    const data = await mdb.fetchCards(url, page);
    console.log(data)
    const html = data.results.map(movie => render(movie));
    this.$el.querySelector('.container')
        .insertAdjacentHTML('beforeend', html.join(' '));
    this.pagination.innerHTML = createPagination(data.total_pages, getPage(id), id);
    this.loader.hide();
}

async function switchPages(event, url, id) {
    const target = $(event.target)
    if (target.hasClass('pagination__link') && target.noClass('pagination__dots')) {
        const page = target.innerText;
        this.container.clear();
        this.pagination.clear();
        createContent.bind(this)(url, page, id);
        localStorage.setItem(id, JSON.stringify(page))
    }
}

function getPage(id) {
    if (localStorage.getItem(id)) return +JSON.parse(localStorage.getItem(id))
    return 1
}

function render(movie) {

    if (movie.poster_path) {

        // проверка на отсутствие рейтинга
        const rating = movie.vote_average
            ? `<span class="cardd__rating">${movie.vote_average.toFixed(1)}</span>`
            : ''

        return `
            <div class="cardd" data-id="${movie.id}">
                <img class="cardd__img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
                ${rating}
                <p class="cardd__text">${movie.title}</p>
            </div>
        `;
    }
}