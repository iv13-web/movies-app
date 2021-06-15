import {storage} from "@/core/utils";

export function themeHandler() {
	this.$el.toggle('toggler_active')
	this.page.toggle('dark-theme')

	storage('themePrefered') === 'dark'
		? storage('themePrefered', 'light')
		: storage('themePrefered', 'dark')
}

export function setThemeAfterReload() {
	if (storage('themePrefered') === 'dark' ) {
		this.$el.addClass('toggler_active')
		this.page.addClass('dark-theme')
	}
}