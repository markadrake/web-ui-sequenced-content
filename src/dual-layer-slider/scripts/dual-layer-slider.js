"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DualLayerSlider = function () {
	function DualLayerSlider(element) {
		_classCallCheck(this, DualLayerSlider);

		if (!element) return;
		this.debug = true;
		this.log("constructor() called");

		this.element = element;
		this.fg = element.querySelector(".fg");
		this.fgSequence = this.fg.querySelector(".sequenced");
		this.bg = element.querySelector(".bg");
		this.bgSequence = this.bg.querySelector(".sequenced");
		this.pagination = this.element.querySelector(".pagination");
		this.pages = this.pagination.querySelectorAll(".page");
		this.next = this.pagination.querySelector(".next");

		// Error state: required DOM structure is not provided.
		if (!this.fg || !this.fgSequence || !this.bg || !this.bgSequence) {
			return;
		}

		this.sequenceCount = this.fgSequence.children.length;
		this.activeIndex = 0;
		this.translation = 0;
		this.maxTranslation = this.sequenceCount - 1 * 100;

		this.init();
	}

	_createClass(DualLayerSlider, [{
		key: "log",
		value: function log(message) {
			if (!message || !this.debug) return;

			if ((typeof message === "undefined" ? "undefined" : _typeof(message)) === _typeof("")) {
				console.log("Dual Layer Slider: " + message);
			} else {
				console.log("Dual Layer Slider:");
				console.log(message);
			}
		}
	}, {
		key: "init",
		value: function init() {
			this.log("init() called");
			this.setActiveState();
			this.handlePagination();
			this.handleNext();
		}
	}, {
		key: "setActiveState",
		value: function setActiveState() {
			this.log("setActiveState() called");

			var activeElements = this.element.querySelectorAll(".-active");
			[].map.call(activeElements, function (element) {
				element.classList.remove("-active");
			});

			var activeFgElement = this.fgSequence.children[this.activeIndex],
			    activeBgElement = this.bgSequence.children[this.activeIndex],
			    activePageElement = this.pages[this.activeIndex];

			activeBgElement.classList.add("-active");
			activeFgElement.classList.add("-active");
			activePageElement.classList.add("-active");
		}

		/*
  	Handles Pagination CLicks
  	- Set `this.activeIndex`
  */

	}, {
		key: "handlePagination",
		value: function handlePagination() {
			var _this = this;

			this.log("handlePagination() called");

			[].map.call(this.pages, function (page, index) {
				page.addEventListener("click", function (e) {
					e.preventDefault();
					e.stopPropagation();
					_this.activeIndex = index;
					_this.log("moving to index " + _this.activeIndex);
					_this.move();
				});
			});
		}

		/*
  	Handles Next Click
  	- Set `this.activeIndex`
  */

	}, {
		key: "handleNext",
		value: function handleNext() {
			var _this2 = this;

			this.log("handleNext() called");

			this.next.addEventListener("click", function (e) {
				e.preventDefault();
				e.stopPropagation();
				_this2.activeIndex++;
				if (_this2.activeIndex == _this2.pages.length) _this2.activeIndex = 0;
				_this2.log("moving to index " + _this2.activeIndex);
				_this2.move();
			});
		}
	}, {
		key: "move",
		value: function move() {
			this.log("move() called");

			this.setActiveState();

			this.translation = this.activeIndex * -100;
			this.log("translation " + this.translation);
			this.bgSequence.style.transform = "translateX(" + this.translation + "%)";
			this.fgSequence.style.transform = "translateX(" + this.translation + "%)";
		}
	}, {
		key: "reset",
		value: function reset() {
			this.log("reset() called");

			this.bgSequence.style.transform = "translateX(" + this.translation + "%)";
			this.fgSequence.style.transform = "translateX(" + this.translation + "%)";
		}
	}]);

	return DualLayerSlider;
}();