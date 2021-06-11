import {$} from "@/core/dom";

function removeActiveLinks() {
	this.$el.findAll('.nav__link').forEach(link => {
		link.classList.remove('nav__link_active')
	})
}

// использую filter, чтобы не перекликалос с внутренним методом find из dom.js
export function showLastSelected() {
	removeActiveLinks.call(this)
	this.tabs.forEach( tab => tab.Component.hide())
	try {
		const lastSelected= localStorage.getItem('lastSelected')
		const activeLink = this.$el.find(`[data-name="${lastSelected}"]`)
		const activeTab = this.tabs.filter(tab => tab.name === localStorage.getItem('lastSelected'))[0]
		activeLink.addClass('nav__link_active')
		activeTab.Component.show()
	} catch (e) {
		const activeLink = this.$el.find(`[data-name="latest"]`)
		const activeTab = this.tabs.filter(tab => tab.name === 'latest')[0]
		activeLink.addClass('nav__link_active')
		activeTab.Component.hide()
	}
}

export function openSearchTab () {
	removeActiveLinks.call(this)
	this.tabs.forEach(tab => tab.Component.hide())
	const activeTab = this.tabs.filter(tab => tab.name === "search")[0]
	activeTab.Component.show()
	this.$el.find('[data-name="search"]')
		.removeClass('hidden')
		.addClass('nav__link_active')
}

export function closeSearchTab () {
	removeActiveLinks.call(this)
	showLastSelected.call(this)
	this.$el.find('[data-name="search"]').addClass('hidden')
	try {
		const activeTab = this.tabs.filter(tab => tab.name === localStorage.getItem('lastSelected'))[0]
		activeTab.Component.show()
	} catch (e) {
		const activeTab = this.tabs.filter(tab => tab.name === 'latest')[0]
		activeTab.Component.show()
	}
}

export function tabsHandler(event) {
	event.preventDefault()
	const target = $(event.target)

	if (target.hasClass('nav__link') && target.noClass('nav__link_active')) {
		removeActiveLinks.call(this)
		target.addClass('nav__link_active')
		localStorage.setItem('lastSelected', target.data.name)
		this.tabs.forEach(tab => tab.Component.hide())
		const activeTab = this.tabs.filter(tab => tab.name === target.data.name)[0]
		activeTab.Component.show()

		this.$el.find('[data-name="search"]').addClass('hidden')
		document.querySelector('[data-type="search-form"]')
			.classList.remove('header__search-form_active')
	}
}