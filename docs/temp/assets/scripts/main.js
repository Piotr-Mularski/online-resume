/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stickynav = __webpack_require__(1);

var _stickynav2 = _interopRequireDefault(_stickynav);

var _scrollspy = __webpack_require__(2);

var _scrollspy2 = _interopRequireDefault(_scrollspy);

var _toggleNav = __webpack_require__(3);

var _toggleNav2 = _interopRequireDefault(_toggleNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _stickynav2.default)();
(0, _scrollspy2.default)();
(0, _toggleNav2.default)();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function StickyNav() {
	var nav = document.querySelector('.main-nav');
	var topOfNav = nav.offsetTop;
	console.log(topOfNav);
	console.log(window.scrollY);

	function fixNav(e) {
		if (topOfNav <= window.scrollY) {
			nav.classList.add('main-nav--fixed');
			document.body.style.paddingTop = nav.offsetHeight + 'px';
		} else {
			nav.classList.remove('main-nav--fixed');
			document.body.style.paddingTop = 0;
		}
	}

	window.addEventListener('scroll', fixNav);
};

exports.default = StickyNav;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function ScrollSpy() {
	var elements = document.querySelectorAll('.linked-section');
	var links = document.querySelectorAll('.main-nav__link');

	function debounce(func) {
		var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
		var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

		var timeout;
		return function () {
			var context = this,
			    args = arguments;
			var later = function later() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	function switchCurrent(currLink) {
		document.querySelectorAll('.main-nav__link--active').forEach(function (curr) {
			return curr.classList.remove('main-nav__link--active');
		});
		currLink.classList.add('main-nav__link--active');
	}

	function checkCurrent() {
		//if pageY is between top of the segment (or slighty higher) and the bottom 
		elements.forEach(function (element) {
			var top = element.offsetTop + 80;
			var bottom = element.offsetTop + element.offsetHeight;
			var position = window.pageYOffset + window.innerHeight;
			var trigger = position - element.offsetHeight / 4;

			if (trigger > top && trigger < bottom) {
				var currLink = document.querySelector(element.dataset['link']);
				switchCurrent(currLink);
			}
		});
	}

	function linkSwitch() {
		console.log(this);
		switchCurrent(this);
	}

	links.forEach(function (link) {
		link.addEventListener('click', linkSwitch);
	});

	window.addEventListener('load', function () {
		checkCurrent();
	});

	window.addEventListener('scroll', debounce(checkCurrent));
}

exports.default = ScrollSpy;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function ToggleNav() {
	var navButton = document.querySelector('.main-nav__toggle-menu');
	var navList = document.querySelector('.main-nav ul');

	navButton.addEventListener('click', function (e) {
		e.preventDefault();
		navList.classList.toggle('is-active');
	});
}

exports.default = ToggleNav;

/***/ })
/******/ ]);