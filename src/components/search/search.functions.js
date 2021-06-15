import {$} from "@/core/dom";
import {mdb} from "@/services/api.service";
import {renderCard} from "@/components/catalog/card.functions";

export function searchHandler(event) {
	const target = $(event.target)

	if (target.data.act === 'search') {
		this.observer.fire('search:open')
		this.$el.removeClass('hidden')
		this.form.addClass('header__search-form_active')
		this.input.focus()
	}
	if (target.data.act === 'close') {
		this.observer.fire('search:close')
		this.$el.addClass('hidden')
		this.form.removeClass('header__search-form_active')
		this.input.value('')
	}
}

export async function showResults(event, page = 1) {
	event.preventDefault()
	this.container.clear()
	this.pagination.clear()
	this.loader.show()
	const query = this.input.value()
	const data = await mdb.search(query, page)
	if (!data.errors) {
		const html = data.results.map(renderCard).join('')
		this.container.insert(html, 'beforeend')
		this.pagination.innerHTML = createPagination(data.total_pages, page, 'search')
		this.loader.hide()
	}
	if (data.errors || data.total_results === 0) {
		this.loader.hide()
		alert('Проверьте введенные данные')
		this.container.clear()
		this.pagination.clear()
		this.input.value('')
	}
}
