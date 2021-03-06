class Dom {
	constructor (selector) {
		this.$el = typeof selector === 'string'
			? document.querySelector(selector)
			: selector
	}
	clear() {
		return this.$el.innerHTML = ''
	}
	on(eventType, callback) {
		this.$el.addEventListener(eventType, callback)
	}
	off(eventType, callback) {
		this.$el.removeEventListener(eventType, callback)
	}
	closest(selector) {
		return $(this.$el.closest(selector))
	}
	find(selector) {
		return $(this.$el.querySelector(selector))
	}
	findId(selector) {
		return this.$el.getElementById(selector)
	}
	findAll(selector) {
		return this.$el.querySelectorAll(selector)
	}
	addClass(className) {
		this.$el.classList.add(className)
		return this
	}
	removeClass(className) {
		this.$el.classList.remove(className)
		return this
	}
	insert(node, where) {
		typeof node === 'string'
			? this.$el.insertAdjacentHTML(where, node)
			: this.$el.insertAdjacentElement(where, node)
	}
	show() {
		return this.$el.classList.remove('hidden')
	}
	hide() {
		return this.$el.classList.add('hidden')
	}
	hasClass(className) {
		return this.$el.classList.contains(className)
	}
	noClass(className) {
		return !this.$el.classList.contains(className)
	}
	hasParent(className) {
		return this.$el.parentElement.classList.contains(className)
	}
	isVisible() {
		return ! this.$el.classList.contains('hidden');
	}
	toggle(className) {
		return this.$el.classList.toggle(className);
	}
	remove() {
		return this.$el.remove();
	}
	focus() {
		this.$el.focus()
		return this
	}
	get data() {
		return this.$el.dataset
	}
	get text() {
		return this.$el.innerText
	}
	value(data) {
		if (data !== '') return this.$el.value
		return this.$el.value = data
	}
}

export function $(selector) {
	return new Dom(selector)
}
