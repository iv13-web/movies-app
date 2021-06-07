import {$} from "@/core/dom"
import {mdb} from "@/services/api.service"

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
                		<i class="fab fa-youtube play"></i>
									</div>
								<img class="card__img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${title}">
								${rating}
								<p class="card__text">${title}</p>
            </div>
        `
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
				const page = target.innerText
				this.container.clear()
				this.pagination.clear()
				createContent.call(this, url, page, id)
				localStorage.setItem(id, JSON.stringify(page))
		}
}

export function getPage(id) {
		if (localStorage.getItem(id)) return +JSON.parse(localStorage.getItem(id))
		else return 1
}

