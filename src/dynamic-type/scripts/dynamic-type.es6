class DynamicType {

	constructor() {
		this.log(`constructor() called`);
		this.debug = true;

		this.element = document.querySelector("span[data-dynamic-type]");
		if (!this.element) return;

		this.config = {
			pause: 4450, // in ms
			delete: 170, // in ms
			write: 185 // in ms
		};
		this. values = [],
		this.currentIndex = 0;

		this.init();
	}

	log(message) {
		if (!message || !this.debug) return;

		if (typeof message === typeof "") {
			console.log(`Dynamic Type: ${message}`);
		} else {
			console.log(`Dynamic Type:`);
			console.log(message);
		}
	}

	init() {
		this.log(`init() called`);

		const attributeValue = this.element.dataset.dynamicType || null;
		if (attributeValue) {
			Array.prototype.push.apply(this.values, attributeValue.split(","));
		}

		if (!this.values) return;
		this.loop();
	}

	loop() {
		this.log(`loop() called`);

		// window.setTimeout(() => {
		// 	this.loop();
		// }, this.config.timeForPause);

		this.deleteText();
	}

	deleteText() {
		this.log(`deleteText() called`);

		window.setTimeout(() => {
			let interval = window.setInterval(() => {
				if (this.element.innerText.length <= 0) {
					window.clearInterval(interval);
					this.writeText();
				}

				this.element.innerText = this.element.innerText.slice(0, -1);
			}, this.config.delete);
		}, this.config.pause);
	}

	writeText() {
		this.log(`writeText() called`);

		this.currentIndex = (this.currentIndex == this.values.length - 1) ? 0 : this.currentIndex + 1;
		let value = this.values[this.currentIndex].trim(),
			length = value.length,
			count = 0;

		let interval = window.setInterval(() => {
			if (this.element.innerText.length === length) {
				window.clearInterval(interval);
				this.deleteText();
			}

			this.element.innerText = value.slice(0, count);
			count++;
		}, this.config.write);
	}
}