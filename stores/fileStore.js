'use strict';

const Store = require('./Store');

class FileStore extends Store{
	updateFile(index, val) {
		let files = this.getState().slice()
		files[index] = val
		this.setState(files)
	}

	addFile() {
		this.updateFile(this.state.length, '')
	}

	removeFile(index) {
		let files = this.getState().slice()
		if (files.length > 1) {
			files.splice(index, 1)
			this.setState(files)
		} else {
			this.updateFile(0, '')
		}
	}
}

module.exports = new FileStore(['']);
