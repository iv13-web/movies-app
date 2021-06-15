import {$} from "@/core/dom"
import {Component} from "@/core/component"
import * as search from "./search.functions"
import {mdb} from "@/services/api.service";
import {createCards, getPage, switchPages} from "@/components/catalog/card.functions"
import {storage} from "@/core/utils";

export class SearchComponent extends Component{
	constructor(id, observer) {
  		super(id, observer)
	}

	prepare() {
		super.prepare()
		this.input = this.$root.find('#search-input')
		this.form = this.$root.find('[data-type="search-form"]')
		this.searchBtn = this.$root.find('[data-act="search"]')
	}

	init() {
		[this.searchBtn, this.form].forEach($el => {
			$el.on('click', searchHandler.bind(this))
		})

		this.form.on('submit', event => gg.call(this, event))

		this.pagination.on('click', async event => {
			const target = $(event.target)
			if (target.hasClass('pagination__link')) {
				const page = +target.innerText
				gg.call(this, event, page)
			}
		})
	}

	onShow() {
	}

	onHide() {
		[this.container, this.pagination].forEach($el => $el.clear())
	}
}

// при выносе этой функции в отдельный файл, можно будет сразу вставить внутрь код из openSearchForm и closeSearchForm
function searchHandler(event) {
	const target = $(event.target)

	if (target.data.act === 'search') {
		search.open.call(this)
	}
	if (target.data.act === 'close') {
		search.close.call(this)
	}
}



async function gg(event, page = 1) {
	event.preventDefault()
	this.container.clear()
	this.pagination.clear()
	const query = await this.input.value()
	const data = await mdb.search(query, page)
	if (!data.errors) {
		this.loader.show()
		const html = data.results.map(renderCard).join('')
		this.container.insert(html, 'beforeend')
		this.pagination.innerHTML = createPagination(data.total_pages, page, 'search')
		this.loader.hide()
	}
	if (data.errors || data.results) {
		alert('Проверьте введенные данные')
		this.container.clear()
		this.pagination.clear()
	}
}


function renderCard(movie) {
	if (movie.poster_path) {
		// проверка на отсутствие рейтинга
		const rating = movie.vote_average
			? `<span class="card__rating">${movie.vote_average.toFixed(1)}</span>`
			: ''

		const title = movie.title ? movie.title : movie.name
		return `
			<div class="card" data-id="${movie.id}">
				<div class="play-btn">
					<i class="fab fa-youtube" data-type="play"></i>
				</div>
				<img class="card__img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${title}" data-type="card">
				${rating}
				<p class="card__text">${title}</p>
			</div>
		`
	}
}