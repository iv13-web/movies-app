import {$} from "@/core/dom";
import {NavComponent} from "@/components/nav_component";


export class SearchComponent extends NavComponent{
		constructor(id) {
			  super(id);
		}

		selectTabs(tabs) {
				super.selectTabs(tabs);
		}

		prepare() {
				this.btn = $(document.querySelector('[data-act="search"]'))
				this.link = $(document.querySelector('[data-name="search"]'))
				this.form = $(document.querySelector('[data-type="search-form"]'))

		}

		init() {
				this.btn.on('click', btnHandler.bind(this))
		}


		onShow() {
				// createCards
		}

		onHide() {
		    this.$el.addClass('hidden')
		}
}

async function btnHandler() {
		[this.$el, this.link].forEach($el => $el.removeClass('hidden'))
		this.form.addClass('header__search-form_active')
		const links = document.querySelectorAll('.nav__link')
		links.forEach(link => link.classList.remove('nav__link_active'))
		this.link.addClass('nav__link_active')
		this.tabs.forEach(tab => tab.Component.hide())
		const activeTab = this.tabs.find(tab => tab.dataAttribute === "search")
		activeTab.Component.show()
}


