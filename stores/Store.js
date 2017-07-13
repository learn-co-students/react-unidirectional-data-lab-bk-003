'use strict';

class Store {
	constructor(initialState) {
		this.state = initialState
		this.listeners = []
	}

	getState() {
		return this.state
	}

	setState(state) {
		this.state = state
		this.listeners.forEach(listener => listener(state))
	}

	addListener(listener) {
		this.listeners.push(listener)
		return () => {
			this.listeners = this.listeners.filter(l => l !== listener)
		}
	}
}

module.exports = Store;
