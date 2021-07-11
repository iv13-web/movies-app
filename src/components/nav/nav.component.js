import {Component} from '@/core/component'
import * as nav from './nav.functions'

export class NavComponent extends Component {
	constructor(id, observer, tabs) {
		super (id, observer, tabs)
	}

	get template () {
		return createNav.call(this)
	}

	prepare() {
		this.$el.insert(this.template, 'afterbegin')
		this.$el.find('[data-name=search]').addClass('hidden')
	}

	init() {
		this.observer.subscribe('search:open', nav.showSearchTab.bind(this))
		this.observer.subscribe('search:close', nav.hideSearchTab.bind(this))
		nav.showLastTab.call(this)
		this.$el.on('click', nav.handler.bind(this))
	}
}

function createNav() {
	const links = this.tabs.map(tab => {
		return `
			<a class="nav__link " data-name=${tab.id} href="">${tab.title}</a>
		`
	})
	return links.join(' ')
}