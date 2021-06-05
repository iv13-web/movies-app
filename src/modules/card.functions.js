import {$} from "@/core/dom"
import {mdb} from "@/services/api.service"
import {Card} from "@/components/card_component"

export async function createContent(url, page, id) {
		this.loader.show()
		const data = await mdb.fetchCards(url, page)
		const html = data.results.map(movie => Card.render(movie)).join('')
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

