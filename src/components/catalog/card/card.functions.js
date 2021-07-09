import {$} from "@/core/dom"
import {mdb} from "@/services/api.service"
import {modalHandler} from '../modal/modal.functions'
import {renderModal} from "@/components/catalog/modal/modal.template";
import {storage} from "@/core/helpers";
import {createPlayerModal} from "@/components/catalog/card/player.functions";
import {renderCard} from "@/components/catalog/card/card.template";

export async function cardHandler(event, type) {
	const target = $(event.target)
	let id

	if (target.noClass('container')) {
		id = target.closest('.card').data.id
	}

	if (target.data.type === 'card') {
		this.loader.show()
		const data = await mdb.getFullData(type, id)
		//----------------------
		console.log(data)
		//----------------------
		const modal = renderModal(data, type)
		modal.on('mousedown', modalHandler)
		this.loader.hide()
	}
	if (target.data.type === 'play') {
		this.loader.show()
		const type = this.id === 'series' ? 'tv' : 'movie'
		const trailerKey = await mdb.fetchTrailer(type, id)
		if (trailerKey) {
			const modal = createPlayerModal.call(this, trailerKey)
			modal.on('mousedown', modalHandler)
		}
		this.loader.hide()
	}
}

export async function createCards(url, page, id) {
	this.loader.show()
	const data = await mdb.fetchCards(url, page)

	let movies = data.results.reduce((acc, movie)=>{
		const toRemove = ['hi', 'ja']
		if (!toRemove.includes(movie.original_language) && movie.poster_path && movie.overview) {
			acc.push(movie)
		}
		return acc
	}, [])

	movies = movies.length % 2 !== 0 ? movies.slice(0, -1) : movies
	const html = movies.map(renderCard).join('')
	this.container.insert(html, 'beforeend')
	this.pagination.innerHTML = createPagination(data.total_pages, getPage(id), id)
	this.loader.hide()
}

export function switchPages(event, url, id) {
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