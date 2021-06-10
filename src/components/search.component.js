import {$} from "@/core/dom";
import {openSearchForm, closeSearchForm} from "@modules/search.functions";
import {Component} from "@/core/component";

export class SearchComponent extends Component{
	constructor(id, observer) {
  		super(id, observer)
	}

	prepare() {
		super.prepare()
		this.input = document.getElementById('search-input')
		this.form = $(document.querySelector('[data-type="search-form"]'))
		this.searchBtn = $(document.querySelector('[data-act="search"]'))

		console.log(this.form)
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
		openSearchForm.call(this)
	}

	if (target.data.act === 'close') {
		closeSearchForm.call(this)
	}
}
