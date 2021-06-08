export function openSearch() {
	[this.$el, this.link].forEach($el => $el.removeClass('hidden'))
	this.form.addClass('header__search-form_active')
	const links = document.querySelectorAll('.nav__link')
	links.forEach(link => link.classList.remove('nav__link_active'))
	this.link.addClass('nav__link_active')
	this.tabs.forEach(tab => tab.Component.hide())
	const activeTab = this.tabs.find(tab => tab.dataAttribute === "search")
	activeTab.Component.show()
	this.input.focus()
}

export function closeSearch() {
	this.form.removeClass('header__search-form_active')
	const links = [...document.querySelectorAll('.nav__link')]
	links.forEach(link => link.classList.remove('nav__link_active'))
	const linkToActivate = links.find(link => link.dataset.name === localStorage.getItem('lastSelected'))
	linkToActivate.classList.add('nav__link_active')
	const tabToActivate = this.tabs.find(tab => tab.dataAttribute === localStorage.getItem('lastSelected'))
	tabToActivate.Component.show()
	this.link.hide()
}