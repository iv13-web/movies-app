import {$} from "@/core/dom"
import {mdb} from "@/services/api.service"
import {modalHandler, renderModal} from './modal.functions'
import {storage} from "@/core/utils";

export function renderCard(movie) {
	if (movie.poster_path && movie.overview) {
		// проверка на отсутствие рейтинга
		const rating = movie.vote_average
				? `<span class="card__rating">${movie.vote_average.toFixed(1)}</span>`
				: ''

		const title = movie.title ? movie.title : movie.name
		return `
			<div class="col_xs-6 col_md-4 col_lg-2">
				<div class="card" data-id="${movie.id}">
					<div class="play-btn">
						<i class="fab fa-youtube" data-type="play"></i>
					</div>
					<img class="card__img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${title}" data-type="card">
					${rating}
					<p class="card__text">${title}</p>
				</div>
			</div>
		`
	}
}

export async function cardHandler(event, type) {

	const target = $(event.target)
	let id
	if (target.noClass('container')) {
		id = target.closest('.card').data.id
	}

	if (target.data.type === 'card') {
		this.loader.show()
		const data = await mdb.getFullData(type, id)
		console.log(data)
		//----------------------
		const modal = $(renderModal(data, type))
		modal.on('click', modalHandler)
		//----------------------
		this.loader.hide()
}

	if (target.data.type === 'play') {
		this.loader.show()
		await mdb.showTrailer('movie', id)
		this.loader.hide()
	}
}

export async function createCards(url, page, id) {
		this.loader.show()
		const data = await mdb.fetchCards(url, page)
		const html = data.results.map(renderCard).join('')
		this.container.insert(html, 'beforeend')
		this.pagination.innerHTML = createPagination(data.total_pages, getPage(id), id)
		this.loader.hide()
}


export async function switchPages(event, url, id) {
	const target = $(event.target)
	if (target.hasClass('pagination__link')) {
		const page = target.text
		this.container.clear()
		this.pagination.clear()
		createCards.call(this, url, page, id)
		storage(id, page)
	}
}

export function getPage(id) {
	if (storage(id)) return +storage(id)
	else return 1
}