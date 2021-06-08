import {Component} from "@/core/component";
import {createCards, getPage, switchPages} from "@modules/card.functions";
import {cardHandler} from "@modules/card.functions";

export class Catalog extends Component {

		constructor(id, url, type, loader) {
				super(id)
				this.url = url
				this.type = type
				this.loader = loader
		}

		prepare() {
				this.container = this.$el.find('.container')
				this.pagination = this.$el.find('.pagination')
		}

		init() {
				setTimeout(() => this.$el.isVisible() && this.onShow(), 0)
				this.container.on('click', event => cardHandler.call(this, event, this.type))
				this.pagination.on('click', event => switchPages.call(this, event, this.url, this.id))
		}

		onShow() {
				createCards.call(this, this.url, getPage(this.id), this.id)
		}

		onHide() {
				[this.container, this.pagination].forEach($el => $el.clear())
		}

}
