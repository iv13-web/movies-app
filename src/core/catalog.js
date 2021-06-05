import {Component} from "@/core/component";
import {createContent, getPage, switchPages} from "@modules/card.functions";
import {modalHandler} from "@modules/modal.functions";

export class Catalog extends Component {

		constructor(id, url, loader) {
				super(id)
				this.url = url
				this.loader = loader
		}

		prepare() {
				this.container = this.$el.find('.container')
				this.pagination = this.$el.find('.pagination')
		}

		init() {
				setTimeout(() => this.$el.isVisible() && this.onShow(), 0)
				this.container.on('click', event => modalHandler.call(this, event))
				this.pagination.on('click', event => switchPages.call(this, event, this.url, this.id))
		}

		onShow() {
				createContent.call(this, this.url, getPage(this.id), this.id)
		}

		onHide() {
				[this.container,this.pagination].forEach($el => $el.clear())
		}
}