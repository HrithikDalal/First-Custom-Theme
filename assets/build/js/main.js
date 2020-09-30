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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/clock/index.js":
/*!*******************************!*\
  !*** ./src/js/clock/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  class Clock {
    constructor() {
      this.initializeClock();
    }

    initializeClock() {
      let t = setInterval(() => this.time(), 1000);
    }

    numPad(str) {
      let cStr = str.toString();
      if (cStr.length < 2) str = 0 + cStr;
      return str;
    }

    time() {
      let currDate = new Date();
      let currSec = currDate.getSeconds();
      let currMin = currDate.getMinutes();
      let curr24Hr = currDate.getHours();
      let ampm = curr24Hr >= 12 ? 'pm' : 'am';
      let currHr = curr24Hr % 12;
      currHr = currHr ? currHr : 12;
      let stringTime = currHr + ':' + this.numPad(currMin) + ':' + this.numPad(currSec);
      const timeEmojiEl = $('#time-emoji');

      if (curr24Hr >= 5 && curr24Hr <= 17) {
        timeEmojiEl.text('🌞');
      } else {
        timeEmojiEl.text('🌜');
      }

      $('#time').text(stringTime);
      $('#ampm').text(ampm);
    }

  }

  new Clock();
})(jQuery);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ "./src/js/clock/index.js");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_1__);
 //Styles

 // Images.
// import '../img/eddard.png';

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nError: Can't resolve '../library/fonts/fonts.css' in '/var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/src/sass'\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/Resolver.js:209:21\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:44:7\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:27:15\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/webpack/lib/NormalModule.js:316:20\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.loader (/var/lib/docker/volumes/customthemecom_htdocs/_data/htdocs/wp-content/themes/gameofthrones/assets/node_modules/css-loader/dist/index.js:154:5)\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map