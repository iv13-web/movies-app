import {$} from "@/core/dom"
import {Component} from "@/core/component"
import {cardHandler} from "@/components/catalog/card/card.functions"
import {searchHandler, showResults} from "./search.functions";
import {createTemplate} from "@/components/catalog/catalog.functions";

export class SearchComponent extends Component{
	constructor(id, observer) {
  		super(id, observer)
	}
	get template() {
		return createTemplate(this.id)
	}

	prepare() {
		this.$el.insert(this.template, 'beforeend')
		this.container = this.$el.find('.container')
		this.pagination = this.$el.find('.pagination')
		this.input = this.$root.find('#search-input')
		this.form = this.$root.find('[data-type="search-form"]')
		this.searchBtn = this.$root.find('[data-act="search"]')
	}

	init() {
		[this.searchBtn, this.form].forEach($el => {
			$el.on('click', searchHandler.bind(this))
		})

		this.form.on('submit', event => showResults.call(this, event))

		this.container.on('click', event => {
			cardHandler.call(this, event, 'movie')
		})

		this.pagination.on('click', async event => {
			const target = $(event.target)
			if (target.hasClass('pagination__link')) {
				const page = +target.text
				await showResults.call(this, event, page)
			}
		})
	}

	onHide() {
		[this.container, this.pagination].forEach($el => $el.clear())
	}
}
