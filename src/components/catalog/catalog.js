import {Component} from "@/core/component";
import {createCards, getPage, switchPages} from "./card/card.functions";
import {cardHandler} from "./card/card.functions";
import {createTemplate} from "@/components/catalog/catalog.functions";

export class Catalog extends Component {

	constructor(id, options) {
		super(id)
		this.url = options.url
		this.type = options.type
	}

	get template() {
		return createTemplate(this.id)
	}

	prepare() {
		this.$el.insert(this.template, 'beforeend')
		this.container = this.$el.find('.container')
		this.pagination = this.$el.find('.pagination')
	}

	init() {
		this.container.on('click', event => {
			cardHandler.call(this, event, this.type)
		})
		this.pagination.on('click', event => {
			switchPages.call(this, event, this.url, this.id)
		})
	}

	onShow() {
		createCards.call(this, this.url, getPage(this.id), this.id)
	}

	onHide() {
		[this.container, this.pagination].forEach($el => $el.clear())
	}
}
