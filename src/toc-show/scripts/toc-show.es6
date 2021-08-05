class ToCShow {

	constructor() {
		this.log(`constructor() called`);
		this.debug = true;

		this.currentIndex = 0;
		this.element = document.querySelector(".toc-show");
		if (!this.element) return;
		this.elementBounds = this.element.getBoundingClientRect();

		this.links = this.element.querySelectorAll(".toc-guide button");
		this.bookmark = this.element.querySelector(".toc-bookmark");
		this.stage = this.element.querySelector(".toc-stage > div");
		this.stages = this.element.querySelectorAll(".toc-stage > div > div");

		this.init();
		this.toggleScene(0);
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
		window.addEventListener("resize", this.windowResizeHandler.bind(this));

		this.links.forEach((link, linkIndex) => {

			link.addEventListener("click", (e) => {
				e.preventDefault();
				e.stopPropagation();

				this.toggleScene(linkIndex);
			});

		});
	}

	toggleScene(index) {

		this.currentIndex = index;

		// Toggle `active` class on the button
		this.links.forEach((link, linkIndex) => {
			if (linkIndex !== index)
				link.parentElement.classList.remove("-active");
			else
				link.parentElement.classList.add("-active");
		});

		// Move the bookmark
		this.moveTheBookmark();

		// Toggle `active`
		this.stages.forEach((stage, stageIndex) => {
			if (stageIndex !== index)
				stage.classList.remove("-active");
			else
				stage.classList.add("-active");
		});

		this.stage.style.left = this.currentIndex * -100 + "%";
	}

	moveTheBookmark() {
		let link = this.links[this.currentIndex],
			bounds = link.getBoundingClientRect(),
			top = bounds.top - this.elementBounds.top;

		top += (bounds.height - this.bookmark.clientHeight) / 2;

		this.bookmark.style.top = `${top}px`;
	}

	windowResizeHandler() {
		this.elementBounds = this.element.getBoundingClientRect();
		this.toggleScene(this.currentIndex);
	}

}

new ToCShow();