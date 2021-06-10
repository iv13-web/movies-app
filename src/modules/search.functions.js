export function openSearchForm() {
	this.observer.fire('search:open')
	this.$el.removeClass('hidden')
	this.form.addClass('header__search-form_active')
	this.input.focus()
}

export function closeSearchForm() {
	this.observer.fire('search:close')
	this.$el.addClass('hidden')
	this.form.removeClass('header__search-form_active')
	this.input.value = ''
}