import {Component} from "@/core/component";
import {createCards, getPage, switchPages} from "./card.functions";
import {cardHandler} from "./card.functions";

export class Catalog extends Component {

	constructor(id, options) {
		super(id)
		this.url = options.url
		this.type = options.type
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
