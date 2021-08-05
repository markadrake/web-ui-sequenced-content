class ScrollSwipe {

	constructor() {
		this.el = document.querySelector("*[data-scroll-swipe]");
		this.canvas = this.el.querySelector("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.images = [];

		this.queryImages();
		this.bindEvents();
	}

	queryImages() {
		const figures = this.el.querySelectorAll("figure");

		figures.forEach(el => {
			const img = el.querySelector("img");
			this.images.push(img);
		});

		this.images[1].addEventListener("load", () => {
			this.drawImage();
		});
	}

	bindEvents() {
		window.addEventListener("resize", this.resizeHandler.bind(this));
		window.addEventListener("scroll", this.scrollHandler.bind(this));
	}

	unbindEvents() {
		window.removeEventListener("resize", this.resizeHandler);
		window.removeEventListener("scroll", this.scrollHandler);
	}

	resizeHandler() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}

	scrollHandler() {
		const html = document.documentElement,
			scrollTop = html.scrollTop,
			maxScrollTop = html.scrollHeight - window.innerHeight;

		this.scrollFraction = scrollTop / maxScrollTop;

	}

	drawImage() {
		console.log("drawing image");
		console.log(this.images[1]);
		this.ctx.drawImage(this.images[1], 0, 0, this.canvas.width, this.canvas.height);
	}

}

// export default ScrollSwipe;
