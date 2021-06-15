import {$} from "@/core/dom"
import {Component} from "@/core/component"
import * as search from "@modules/search.functions"

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
	}

	onShow() {
		// createCards
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
