export class Observer {
	constructor() {
		this.listeners = {}
	}

	fire(eventName) {
		if (!Array.isArray(this.listeners[eventName])) {
			return false
		}
		this.listeners[eventName].forEach(listener => {
			listener()
		})
	}

	subscribe(eventName, fn) {
		this.listeners[eventName] = this.listeners[eventName] || []
		this.listeners[eventName].push(fn)
		// замыкание для отписки от события
		return () => {
			this.listeners[eventName] =
				this.listeners[eventName].filter(listener => listener !== fn)
		}
	}
}
