"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DynamicType = function () {
	function DynamicType() {
		_classCallCheck(this, DynamicType);

		this.log("constructor() called");
		this.debug = true;

		this.element = document.querySelector("span[data-dynamic-type]");
		if (!this.element) return;

		this.config = {
			pause: 4450, // in ms
			delete: 170, // in ms
			write: 185 // in ms
		};
		this.values = [], this.currentIndex = 0;

		this.init();
	}

	_createClass(DynamicType, [{
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
			this.log("init() called");

			var attributeValue = this.element.dataset.dynamicType || null;
			if (attributeValue) {
				Array.prototype.push.apply(this.values, attributeValue.split(","));
			}

			if (!this.values) return;
			this.loop();
		}
	}, {
		key: "loop",
		value: function loop() {
			this.log("loop() called");

			// window.setTimeout(() => {
			// 	this.loop();
			// }, this.config.timeForPause);

			this.deleteText();
		}
	}, {
		key: "deleteText",
		value: function deleteText() {
			var _this = this;

			this.log("deleteText() called");

			window.setTimeout(function () {
				var interval = window.setInterval(function () {
					if (_this.element.innerText.length <= 0) {
						window.clearInterval(interval);
						_this.writeText();
					}

					_this.element.innerText = _this.element.innerText.slice(0, -1);
				}, _this.config.delete);
			}, this.config.pause);
		}
	}, {
		key: "writeText",
		value: function writeText() {
			var _this2 = this;

			this.log("writeText() called");

			this.currentIndex = this.currentIndex == this.values.length - 1 ? 0 : this.currentIndex + 1;
			var value = this.values[this.currentIndex].trim(),
			    length = value.length,
			    count = 0;

			var interval = window.setInterval(function () {
				if (_this2.element.innerText.length === length) {
					window.clearInterval(interval);
					_this2.deleteText();
				}

				_this2.element.innerText = value.slice(0, count);
				count++;
			}, this.config.write);
		}
	}]);

	return DynamicType;
}();