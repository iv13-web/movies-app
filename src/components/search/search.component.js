import {$} from "@/core/dom"
import {Component} from "@/core/component"
import {cardHandler} from "@/components/catalog/card.functions"
import {searchHandler, showResults} from "./search.functions";

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
