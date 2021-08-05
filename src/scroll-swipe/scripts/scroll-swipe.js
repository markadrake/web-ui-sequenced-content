"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollSwipe = function () {
	function ScrollSwipe() {
		_classCallCheck(this, ScrollSwipe);

		this.el = document.querySelector("*[data-scroll-swipe]");
		this.canvas = this.el.querySelector("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.images = [];

		this.queryImages();
		this.bindEvents();
	}

	_createClass(ScrollSwipe, [{
		key: "queryImages",
		value: function queryImages() {
			var _this = this;

			var figures = this.el.querySelectorAll("figure");

			figures.forEach(function (el) {
				var img = el.querySelector("img");
				_this.images.push(img);
			});

			this.images[1].addEventListener("load", function () {
				_this.drawImage();
			});
		}
	}, {
		key: "bindEvents",
		value: function bindEvents() {
			window.addEventListener("resize", this.resizeHandler.bind(this));
			window.addEventListener("scroll", this.scrollHandler.bind(this));
		}
	}, {
		key: "unbindEvents",
		value: function unbindEvents() {
			window.removeEventListener("resize", this.resizeHandler);
			window.removeEventListener("scroll", this.scrollHandler);
		}
	}, {
		key: "resizeHandler",
		value: function resizeHandler() {
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
		}
	}, {
		key: "scrollHandler",
		value: function scrollHandler() {
			var html = document.documentElement,
			    scrollTop = html.scrollTop,
			    maxScrollTop = html.scrollHeight - window.innerHeight;

			this.scrollFraction = scrollTop / maxScrollTop;
		}
	}, {
		key: "drawImage",
		value: function drawImage() {
			console.log("drawing image");
			console.log(this.images[1]);
			this.ctx.drawImage(this.images[1], 0, 0, this.canvas.width, this.canvas.height);
		}
	}]);

	return ScrollSwipe;
}();

// export default ScrollSwipe;