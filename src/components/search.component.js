import {$} from "@/core/dom";
import {NavComponent} from "@/components/nav.component";
import {openSearch, closeSearch} from "@modules/search.functions";

export class SearchComponent extends NavComponent{
	constructor(id) {
  		super(id);
	}

	selectTabs(tabs) {
		super.selectTabs(tabs);
	}

	prepare() {
		this.container = this.$el.find('.container')
		this.pagination = this.$el.find('.pagination')
		this.input = document.getElementById('search-input')
		this.link = $(document.querySelector('[data-name="search"]'))
		this.form = $(document.querySelector('[data-type="search-form"]'))
		this.searchBtn = $(document.querySelector('[data-act="search"]'))
	}

	init() {
		this.searchBtn.on('click', openSearch.bind(this))
		this.form.on('click', searchHandler.bind(this))
	}

	onShow() {
		// createCards
	}

	onHide() {
		this.$el.addClass('hidden')
	}
}

function searchHandler(event) {
	const target = $(event.target)
	if (target.data.act === 'close') {
		closeSearch.call(this)
	}
}
