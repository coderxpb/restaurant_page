/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_contact_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/contact-bg.jpg */ "./src/imgs/contact-bg.jpg");


const contactPage = (mainContainer) => {
	mainContainer.style.height = "100vh";

	const bgImg = document.createElement("img");
	bgImg.classList = "bgimgs";
	bgImg.id = "contact-img";
	bgImg.src = _imgs_contact_bg_jpg__WEBPACK_IMPORTED_MODULE_0__;

	mainContainer.appendChild(bgImg);

	const formC = document.createElement("form");
	formC.id = "con-form";
	
	const subjF = document.createElement("input")
	subjF.setAttribute("type","text");

	formC.appendChild(subjF);
	mainContainer.appendChild(formC);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ }),

/***/ "./src/homepg.js":
/*!***********************!*\
  !*** ./src/homepg.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_home_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/home-bg.jpg */ "./src/imgs/home-bg.jpg");


const homePage = (mainContainer) => {
	mainContainer.style.height = "100vh";
	const bgImg = document.createElement("img");
	bgImg.classList = "bgimgs"
	bgImg.id = "home-img";
	bgImg.src = _imgs_home_bg_jpg__WEBPACK_IMPORTED_MODULE_0__;

	mainContainer.appendChild(bgImg);
  let linebreak = document.createElement("br");
	const hmTxt = document.createElement("div");
	hmTxt.id = "home-text";

	const hmp1 = document.createElement("p");
	hmp1.textContent = "only";

	const hmp2 = document.createElement("p");
	hmp2.textContent = "the";

	const hmp3 = document.createElement("p");
	hmp3.textContent = "best.";

	hmTxt.appendChild(hmp1);
	hmTxt.appendChild(hmp2);
	hmTxt.appendChild(hmp3);

	mainContainer.appendChild(hmTxt);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/imgs/contact-bg.jpg":
/*!*********************************!*\
  !*** ./src/imgs/contact-bg.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/726ced0a84ccb5804bf8.jpg";

/***/ }),

/***/ "./src/imgs/home-bg.jpg":
/*!******************************!*\
  !*** ./src/imgs/home-bg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/91bd02b504ffe8d2ac39.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepg.js */ "./src/homepg.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");



const mainContainer = document.getElementById("content");
const menuDiv = document.createElement("div");
menuDiv.id = "menuDiv";


const homeBtn = document.createElement("button");
homeBtn.textContent = "home";

const rmenuBtn = document.createElement("button");
rmenuBtn.textContent = "menu";

const contactBtn = document.createElement("button");
contactBtn.textContent = "contact"

const menuButtons = [homeBtn, rmenuBtn, contactBtn];

menuButtons.forEach((item,index)=>{
	menuDiv.appendChild(item);
	item.classList.add("menu-button");
})

mainContainer.appendChild(menuDiv);
(0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.default)(mainContainer);



})();

/******/ })()
;
//# sourceMappingURL=main.js.map