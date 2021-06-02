import {Component} from '../core/component';
import {mdb} from "@/services/api.service";
import {$} from "@/core/dom";

export class Latest extends Component {

    static url = 'movie/now_playing'
    static id = 'latest'

    constructor(id, loader) {
        super (id);
        this.loader = loader
    }

    init() {
        setTimeout(() => !this.$el.isHidden() && this.onShow(), 0);
        this.pagination.on('click', event => switchPages.bind(this)(event, Latest.url, Latest.id));
    }

    onShow() {
        createContent.bind(this)(Latest.url, getPage(Latest.id), Latest.id)
    }

    onHide() {
        this.container.clear();
        this.pagination.clear();
    }
}

async function createContent(url, page, id) {
    this.loader.show();
    const data = await mdb.fetchCards(url, page);
    const html = data.results.map(movie => render(movie)).join('');
    this.container.insert(html, 'beforeend');
    this.pagination.innerHTML = createPagination(data.total_pages, getPage(id), id);
    this.loader.hide();
}

async function switchPages(event, url, id) {
    const target = $(event.target)
    if (target.hasClass('pagination__link')) {
        const page = target.innerText;
        this.container.clear();
        this.pagination.clear();
        createContent.bind(this)(url, page, id);
        localStorage.setItem(id, JSON.stringify(page))
    }
}

function getPage(id) {
    if (localStorage.getItem(id)) return +JSON.parse(localStorage.getItem(id))
    else return 1
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