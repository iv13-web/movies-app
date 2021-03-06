import {$} from "@/core/dom";
import {storage} from "@/core/helpers";

function clearActiveLinks() {
	this.$el.findAll('.nav__link').forEach(link => {
		link.classList.remove('nav__link_active')
	})
}

// использую filter, чтобы не перекликалось с внутренним методом find из dom.js
export function showLastTab() {
	clearActiveLinks.call(this)
	this.tabs.forEach(tab => tab.Component.hide())
	try {
		const lastSelected= storage('lastSelected')
		const activeLink = this.$el.find(`[data-name="${lastSelected}"]`)
		const activeTab = this.tabs.filter(tab => tab.id === storage('lastSelected'))[0]
		activeLink.addClass('nav__link_active')
		activeTab.Component.show()
	} catch (e) {
		const activeLink = this.$el.find(`[data-name="latest"]`)
		const activeTab = this.tabs.filter(tab => tab.id === 'latest')[0]
		activeLink.addClass('nav__link_active')
		activeTab.Component.show()
	}
}

export function showSearchTab () {
	clearActiveLinks.call(this)
	this.tabs.forEach(tab => tab.Component.hide())
	const activeTab = this.tabs.filter(tab => tab.id === "search")[0]
	activeTab.Component.show()
	this.$el.find('[data-name="search"]')
		.removeClass('hidden')
		.addClass('nav__link_active')
}

export function hideSearchTab () {
	clearActiveLinks.call(this)
	showLastTab.call(this)
	this.$el.find('[data-name="search"]').addClass('hidden')
	try {
		const activeTab = this.tabs.filter(tab => tab.id === storage('lastSelected'))[0]
		activeTab.Component.container.clear()
	} catch (e) {
		const activeTab = this.tabs.filter(tab => tab.id === 'latest')[0]
		activeTab.Component.container.clear()
	}
}

export function handler(event) {
	event.preventDefault()
	const target = $(event.target)

	if (target.hasClass('nav__link') && target.noClass('nav__link_active')) {
		clearActiveLinks.call(this)
		target.addClass('nav__link_active')
		storage('lastSelected', target.data.name)

		this.tabs.forEach(tab => tab.Component.hide())
		const activeTab = this.tabs.filter(tab => tab.id === target.data.name)[0]
		activeTab.Component.show()

		this.$el.find('[data-name="search"]').addClass('hidden')
		this.$root.find('[data-type="search-form"]')
			.removeClass('header__search-form_active')
	}
}