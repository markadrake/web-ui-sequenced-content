class DualLayerSlider {

	constructor(element) {
		if (!element) return;
		//this.debug = true;
		this.log(`constructor() called`);

		this.element = element;
		this.fg = element.querySelector(".fg");
		this.bg = element.querySelector(".bg");
	}

	log(message) {
		if (!message || !this.debug) return;

		if (typeof message === typeof "") {
			console.log(`Dual Layer Slider: ${message}`);
		} else {
			console.log(`Dual Layer Slider:`);
			console.log(message);
		}
	}

	handleNext() {
		this.log(`handleNext() called`);
	}

	handlePagination() {
		this.log(`handlePagination() called`);
	}

	setActiveState() {
		this.log(`setActiveState() called`);
	}

}