class Dom {
		constructor (selector) {
				// если selector - строка (например, #app)
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

		findAll(selector) {
				return this.$el.querySelectorAll(selector)
		}

		addClass(className) {
				return this.$el.classList.add(className)
		}

		removeClass(className) {
				this.$el.classList.remove(className)
		}

		insert(node, where) {
				return this.$el.insertAdjacentHTML(where, node)
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

		isHidden() {
				return this.$el.classList.contains('hidden');
		}

		toggle(className) {
				return this.$el.classList.toggle(className);
		}

		remove() {
				return this.$el.remove();
		}

		get data() {
				return this.$el.dataset
		}

		get innerText() {
				return this.$el.innerText
		}
}

export function $(selector) {
		return new Dom(selector)
}
