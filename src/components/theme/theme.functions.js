import {storage} from "@/core/helpers";

export function themeHandler() {
	this.$el.toggle('toggler_active')
	document.body.classList.toggle('dark-theme')

	storage('themePrefered') === 'dark'
		? storage('themePrefered', 'light')
		: storage('themePrefered', 'dark')
}

export function setThemeAfterReload() {
	if (storage('themePrefered') === 'dark' ) {
		this.$el.addClass('toggler_active')
		document.body.classList.add('dark-theme')
	}
}