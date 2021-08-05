"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToCShow = function () {
	function ToCShow() {
		_classCallCheck(this, ToCShow);

		this.log("constructor() called");
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

	_createClass(ToCShow, [{
		key: "log",
		value: function log(message) {
			if (!message || !this.debug) return;

			if ((typeof message === "undefined" ? "undefined" : _typeof(message)) === _typeof("")) {
				console.log("Dynamic Type: " + message);
			} else {
				console.log("Dynamic Type:");
				console.log(message);
			}
		}
	}, {
		key: "init",
		value: function init() {
			var _this = this;

			window.addEventListener("resize", this.windowResizeHandler.bind(this));

			this.links.forEach(function (link, linkIndex) {

				link.addEventListener("click", function (e) {
					e.preventDefault();
					e.stopPropagation();

					_this.toggleScene(linkIndex);
				});
			});
		}
	}, {
		key: "toggleScene",
		value: function toggleScene(index) {

			this.currentIndex = index;

			// Toggle `active` class on the button
			this.links.forEach(function (link, linkIndex) {
				if (linkIndex !== index) link.parentElement.classList.remove("-active");else link.parentElement.classList.add("-active");
			});

			// Move the bookmark
			this.moveTheBookmark();

			// Toggle `active`
			this.stages.forEach(function (stage, stageIndex) {
				if (stageIndex !== index) stage.classList.remove("-active");else stage.classList.add("-active");
			});

			this.stage.style.left = this.currentIndex * -100 + "%";
		}
	}, {
		key: "moveTheBookmark",
		value: function moveTheBookmark() {
			var link = this.links[this.currentIndex],
			    bounds = link.getBoundingClientRect(),
			    top = bounds.top - this.elementBounds.top;

			top += (bounds.height - this.bookmark.clientHeight) / 2;

			this.bookmark.style.top = top + "px";
		}
	}, {
		key: "windowResizeHandler",
		value: function windowResizeHandler() {
			this.elementBounds = this.element.getBoundingClientRect();
			this.toggleScene(this.currentIndex);
		}
	}]);

	return ToCShow;
}();

new ToCShow();