/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n#boards-wrapper {\n    display: flex;\n    width: 824px;\n    height: 380px;\n    gap: 4rem;\n    justify-content: center;\n    margin: 0 auto;\n}\n\n.board {\n    display: grid;\n    background-color: #000;\n    grid-gap: 2px;\n    border: solid 2px #000;\n    width: 100%;\n    height: 100%;\n}\n\n.board-divs {\n    background-color: #fff;\n}\n\n.modal {\n    position: fixed;\n    top: 35%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    transition: 200ms ease-in-out;\n    border: 1px solid black;\n    border-radius: 10px;\n    z-index: 10;\n    background-color: white;\n    width: 420px;\n    max-width: 80%;\n    padding: 3rem 1.5rem;\n    text-align: center;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.board.placement {\n    height: 340px;\n    width: 340px;\n    margin: 1.5rem auto 0;\n}\n\n#game-start h1 {\n    margin-bottom: 0.75rem;\n}\n/* .modal-header {\n    padding: 10px 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid black;\n} */\n\n.primary-btn {\n    color: #fff;\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 0.75rem;\n    margin-top: 1.75rem;\n    background-color: #000;\n    border: none;\n    border-radius: 25px;\n    cursor: pointer;\n}\n\n/* .modal-header .close-button {\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background: none;\n    font-size: 1.25rem;\n    font-weight: bold;\n} */\n\n/* .modal-body {\n    padding: 10px 15px;\n} */\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    transition: 200ms ease-in-out;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .5);\n    pointer-events: none;\n}\n\n#overlay.active {\n    opacity: 1;\n    pointer-events: all;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,qCAAqC;EACvC;;AAEF;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,cAAc;IACd,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;AACA;;;;;;GAMG;;AAEH;IACI,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,eAAe;AACnB;;AAEA;;;;;;;GAOG;;AAEH;;GAEG;;AAEH;IACI,eAAe;IACf,UAAU;IACV,6BAA6B;IAC7B,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');\n\n*, *::after, *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n#boards-wrapper {\n    display: flex;\n    width: 824px;\n    height: 380px;\n    gap: 4rem;\n    justify-content: center;\n    margin: 0 auto;\n}\n\n.board {\n    display: grid;\n    background-color: #000;\n    grid-gap: 2px;\n    border: solid 2px #000;\n    width: 100%;\n    height: 100%;\n}\n\n.board-divs {\n    background-color: #fff;\n}\n\n.modal {\n    position: fixed;\n    top: 35%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    transition: 200ms ease-in-out;\n    border: 1px solid black;\n    border-radius: 10px;\n    z-index: 10;\n    background-color: white;\n    width: 420px;\n    max-width: 80%;\n    padding: 3rem 1.5rem;\n    text-align: center;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.board.placement {\n    height: 340px;\n    width: 340px;\n    margin: 1.5rem auto 0;\n}\n\n#game-start h1 {\n    margin-bottom: 0.75rem;\n}\n/* .modal-header {\n    padding: 10px 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid black;\n} */\n\n.primary-btn {\n    color: #fff;\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 0.75rem;\n    margin-top: 1.75rem;\n    background-color: #000;\n    border: none;\n    border-radius: 25px;\n    cursor: pointer;\n}\n\n/* .modal-header .close-button {\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background: none;\n    font-size: 1.25rem;\n    font-weight: bold;\n} */\n\n/* .modal-body {\n    padding: 10px 15px;\n} */\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    transition: 200ms ease-in-out;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .5);\n    pointer-events: none;\n}\n\n#overlay.active {\n    opacity: 1;\n    pointer-events: all;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "hoverOff": () => (/* binding */ hoverOff),
/* harmony export */   "hoverOn": () => (/* binding */ hoverOn),
/* harmony export */   "markShip": () => (/* binding */ markShip),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "renderEnemyAttack": () => (/* binding */ renderEnemyAttack),
/* harmony export */   "renderPlayerAttack": () => (/* binding */ renderPlayerAttack),
/* harmony export */   "renderPlayerBoard": () => (/* binding */ renderPlayerBoard),
/* harmony export */   "renderWin": () => (/* binding */ renderWin),
/* harmony export */   "resetBoards": () => (/* binding */ resetBoards),
/* harmony export */   "rotateAxis": () => (/* binding */ rotateAxis)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


function createBoard(n) {
  const boards = document.querySelectorAll('.board');

  boards.forEach((board) => {
    board.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${n}, 1fr)`;

    for (let i = 0; i < (n); i++) {
      for (let j = 0; j < (n); j++) {
        const div = document.createElement('div');
        div.classList.add('board-divs');
        board.appendChild(div);
        if (board.classList.contains('player')) {
          div.setAttribute('id', `p${i}${j}`);
        } else if (board.classList.contains('enemy')) {
          div.setAttribute('id', `e${i}${j}`);
        } else {
          div.setAttribute('id', `${i}${j}`);
        }
      }
    }
  });
}

function hoverOn(e) {
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);
  const lengths = [5, 4, 3, 3, 2];
  const clickCounter = document.getElementById('click-counter');
  const l = lengths[parseInt(clickCounter.innerText)];

  if (axis.innerText === 'h') {
    if ((yPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos}${yPos + i}`);
        if (div.style.backgroundColor === '') { div.style.backgroundColor = 'lightblue'; }
      }
    }
  } else if (axis.innerText === 'v') {
    if ((xPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos + i}${yPos}`);
        if (div.style.backgroundColor === '') { div.style.backgroundColor = 'lightblue'; }
      }
    }
  }
}

function hoverOff(e) {
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);
  const lengths = [5, 4, 3, 3, 2];
  const clickCounter = document.getElementById('click-counter');
  const l = lengths[parseInt(clickCounter.innerText)];

  if (axis.innerText === 'h') {
    if ((yPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos}${yPos + i}`);
        if (div.style.backgroundColor === 'lightblue') { div.style.backgroundColor = ''; }
      }
    }
  } else if (axis.innerText === 'v') {
    if ((xPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos + i}${yPos}`);
        if (div.style.backgroundColor === 'lightblue') { div.style.backgroundColor = ''; }
      }
    }
  }
}

function rotateAxis() {
  const axis = document.getElementById('axis');
  if (axis.innerText === 'h') return axis.innerText = 'v';
  axis.innerText = 'h';
}

function markShip(e, l) {
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);

  if (axis.innerText === 'h') {
    for (let i = 0; i < l; i++) {
      const div = document.getElementById(`${xPos}${yPos + i}`);
      div.style.backgroundColor = 'blue';
    }
  } else {
    for (let i = 0; i < l; i++) {
      const div = document.getElementById(`${xPos + i}${yPos}`);
      div.style.backgroundColor = 'blue';
    }
  }
}

function renderPlayerBoard(board) {
  const ships = [];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (typeof board[i][j] === 'object') { ships.push(board[i][j]); }
    }
  }

  ships.forEach((e) => {
    if (e.axis === 'h') {
      for (let i = 0; i < e.ship.length; i++) {
        const div = document.getElementById(`p${e.coord[0]}${e.coord[1] + i}`);
        div.style.backgroundColor = 'green';
      }
    } else {
      for (let i = 0; i < e.ship.length; i++) {
        const div = document.getElementById(`p${e.coord[0] + i}${e.coord[1]}`);
        div.style.backgroundColor = 'green';
      }
    }
  });
}

function renderPlayerAttack(isHit, xPos, yPos) {
  const div = document.getElementById(`e${xPos}${yPos}`);
  if (div.style.backgroundColor === '') {
    if (isHit) div.style.backgroundColor = 'red';
    else div.style.backgroundColor = 'yellow';
  }
}

function renderEnemyAttack(coord, isHit) {
  const div = document.getElementById(`p${coord[0]}${coord[1]}`);
  if (isHit) div.style.backgroundColor = 'red';
  else div.style.backgroundColor = 'yellow';
}

function openModal(modal) {
  const overlay = document.getElementById('overlay');

  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  const overlay = document.getElementById('overlay');

  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

function renderWin(player) {
  const gameOverModal = document.getElementById('game-over');
  gameOverModal.firstElementChild.innerText = `${player} Won!`;
  openModal(gameOverModal);
}

function renderNewBoards() {
  const boards = document.querySelectorAll('.board');
  boards.forEach((board) => {
    const boardDivs = board.children;
    for (let i = 0; i < boardDivs.length; i++) {
      boardDivs[i].style.backgroundColor = '';
    }
  });
}

function resetBoards() {
  const gameOverModal = document.getElementById('game-over');
  closeModal(gameOverModal);
  renderNewBoards();
}




/***/ }),

/***/ "./src/factories/Gameboard.js":
/*!************************************!*\
  !*** ./src/factories/Gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/factories/Ship.js");


class Gameboard {
  constructor() {
    this.board = Array.from(Array(10), () => Array.from(Array(10).keys()));
    this.missedShots = [];
  }

  placeShip(cord, l, a) {
    const x = cord[0];
    const y = cord[1];

    this.board[x][y] = {
      coord: [x, y],
      axis: `${a}`,
      ship: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](l),
    };

    if (a === 'h') {
      for (let i = 1; i < l; i++) {
        this.board[x][y + i] = 'x';
      }
    } else {
      for (let i = 1; i < l; i++) {
        this.board[x + i][y] = 'x';
      }
    }
  }

  receiveAttack(target) {
    // const ships = this.board.filter((e) => typeof e !== 'number');
    const ships = [];
    let hitIsCalled = false;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (typeof this.board[i][j] === 'object') { ships.push(this.board[i][j]); }
      }
    }

    ships.forEach((e) => {
      if (e.axis === 'h') {
        if (target[0] === e.coord[0]) {
          if (target[1] >= e.coord[1] && target[1] <= (e.coord[1] + e.ship.length - 1)) {
            e.ship.hit(target);
            hitIsCalled = true;
          }
        }
      } else if (target[1] === e.coord[1]) {
        if (target[0] >= e.coord[0] && target[0] <= (e.coord[0] + e.ship.length - 1)) {
          e.ship.hit(target);
          hitIsCalled = true;
        }
      }
    });
    if (!hitIsCalled) { this.missedShots.push(target); }
    return hitIsCalled;
  }

  areAllShipsSunk() {
    const ships = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (typeof this.board[i][j] === 'object') { ships.push(this.board[i][j]); }
      }
    }

    return ships.every((e) => e.ship.isSunk() === true);
  }

  reset() {
    this.board = Array.from(Array(10), () => Array.from(Array(10).keys()));
    this.missedShots = [];
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/factories/Player.js":
/*!*********************************!*\
  !*** ./src/factories/Player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Player {
  constructor(name) {
    this.name = name;
    this.alreadyHitCoords = [];
  }

  isAlreadyHit(coord) {
    const coordStr = coord.toString();

    return (this.alreadyHitCoords.includes(coordStr));
  }

  attack(coord, gameboard) {
    const coordStr = coord.toString();
    if (this.isAlreadyHit(coord)) return;

    this.alreadyHitCoords.push(coordStr);
    return gameboard.receiveAttack(coord);
  }

  randomAttack(gameboard) {
    const coord = [];
    let coordStr = '';

    if (this.alreadyHitCoords.length === 100) return;

    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    while (this.isAlreadyHit([x, y])) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }

    coord.push(x, y);
    coordStr = coord.toString();
    this.alreadyHitCoords.push(coordStr);
    return [
      coord, gameboard.receiveAttack([x, y]),
    ];
  }

  resetAlreadyHitCoords() {
    this.alreadyHitCoords = [];
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/factories/Ship.js":
/*!*******************************!*\
  !*** ./src/factories/Ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.hits = [];
    this.length = length;
  }

  hit(coord) {
    const coordStr = coord.toString();

    if (this.hits.includes(coordStr)) return;
    this.hits.push(coordStr);
  }

  isSunk() {
    return this.hits.length === this.length;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkGameEnd": () => (/* binding */ checkGameEnd),
/* harmony export */   "checkPlacementEnd": () => (/* binding */ checkPlacementEnd),
/* harmony export */   "incrementClick": () => (/* binding */ incrementClick),
/* harmony export */   "launchPlayerAndEnemyAttacks": () => (/* binding */ launchPlayerAndEnemyAttacks),
/* harmony export */   "placeEnemyShip": () => (/* binding */ placeEnemyShip),
/* harmony export */   "placePlayerAndEnemyShips": () => (/* binding */ placePlayerAndEnemyShips)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


function isInBoard(x, y) {
  if (x >= 0 && x <= 9 && y >= 0 && y <= 9) { return true; }
}

function isLegal(xPos, yPos, playerBoard) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  let legal = true;
  let x;
  let y;

  for (let i = 0; i < dx.length; i++) {
    x = xPos + dx[i];
    y = yPos + dy[i];
    if (isInBoard(x, y)) {
      if (typeof playerBoard.board[x][y] !== 'number') legal = false;
    }
  }

  return legal;
}

function incrementClick() {
  const clickCounter = document.getElementById('click-counter');
  clickCounter.innerText = parseInt(clickCounter.innerText) + 1;
}

function checkPlacementEnd() {
  const clickCounter = document.getElementById('click-counter');
  const gameStart = document.getElementById('game-start');
  const axis = document.getElementById('axis');

  if (parseInt(clickCounter.innerText) === 5) {
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.closeModal)(gameStart);
    clickCounter.innerText = 0;
    axis.innerText = 'h';
  }
}

function generateTarget(enemyBoard, l) {
  const axes = ['h', 'v'];
  const axis = axes[Math.floor(Math.random() * 2)];
  let headX = Math.floor(Math.random() * 10);
  let headY = Math.floor(Math.random() * 10);
  let tailX;
  let tailY;

  if (axis === 'h') {
    tailX = headX;
    tailY = headY + l - 1;

    while (typeof enemyBoard.board[headX][headY] !== 'number'
    || isLegal(headX, headY, enemyBoard) === false
    || isLegal(tailX, tailY, enemyBoard) === false
    || tailY > 9) {
      headX = Math.floor(Math.random() * 10);
      headY = Math.floor(Math.random() * 10);
      tailX = headX;
      tailY = headY + l - 1;
    }
  } else if (axis === 'v') {
    tailX = headX + l - 1;
    tailY = headY;

    while (typeof enemyBoard.board[headX][headY] !== 'number'
    || isLegal(headX, headY, enemyBoard) === false
    || isLegal(tailX, tailY, enemyBoard) === false
    || tailX > 9) {
      headX = Math.floor(Math.random() * 10);
      headY = Math.floor(Math.random() * 10);
      tailX = headX + l - 1;
      tailY = headY;
    }
  }

  return [headX, headY, axis];
}

function placeEnemyShip(enemyBoard) {
  const lengths = [5, 4, 3, 3, 2];
  const clickCounter = document.getElementById('click-counter');
  const l = lengths[parseInt(clickCounter.innerText)];

  const target = generateTarget(enemyBoard, l);
  const headX = target[0];
  const headY = target[1];
  const axis = target[2];

  enemyBoard.placeShip([headX, headY], l, axis);
}

function placePlayerAndEnemyShips(e, playerBoard, enemyBoard) {
  const lengths = [5, 4, 3, 3, 2];
  const clickCounter = document.getElementById('click-counter');
  const l = lengths[parseInt(clickCounter.innerText)];
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const headX = parseInt(str[0]);
  const headY = parseInt(str[1]);

  if (axis.innerText === 'h') {
    const tailX = headX;
    const tailY = headY + l - 1;
    if (isLegal(headX, headY, playerBoard)
      && isLegal(tailX, tailY, playerBoard)
      && tailY <= 9) {
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.markShip)(e, l);
      playerBoard.placeShip([headX, headY], l, axis.innerText);
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderPlayerBoard)(playerBoard.board);
      placeEnemyShip(enemyBoard);
      incrementClick();
    }
  } else if (axis.innerText === 'v') {
    const tailX = headX + l - 1;
    const tailY = headY;
    if (isLegal(headX, headY, playerBoard)
      && isLegal(tailX, tailY, playerBoard)
      && tailX <= 9) {
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.markShip)(e, l);
      playerBoard.placeShip([headX, headY], l, axis.innerText);
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderPlayerBoard)(playerBoard.board);
      placeEnemyShip(enemyBoard);
      incrementClick();
    }
  }
}

function launchPlayerAndEnemyAttacks(e, player, enemy, playerBoard, enemyBoard) {
  const str = e.target.id.slice(1);
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);

  const playerHit = player.attack([xPos, yPos], enemyBoard);
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderPlayerAttack)(playerHit, xPos, yPos);

  if (playerHit !== undefined) {
    const enemyHit = enemy.randomAttack(playerBoard);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderEnemyAttack)(enemyHit[0], enemyHit[1]);
  }
}

function checkGameEnd(player, enemy, playerBoard, enemyBoard) {
  if (playerBoard.areAllShipsSunk()) (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderWin)(enemy.name);
  else if (enemyBoard.areAllShipsSunk()) (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderWin)(player.name);
}




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/Gameboard */ "./src/factories/Gameboard.js");
/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factories/Player */ "./src/factories/Player.js");





window.onload = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createBoard)(10);

const placementDivs = Array.from(document.querySelector('.board.placement').children);
const rotateBtn = document.getElementById('rotate-btn');
const enemyBoardDivs = Array.from(document.querySelector('.board.enemy').children);
const replayBtn = document.getElementById('replay-btn');
const player = new _factories_Player__WEBPACK_IMPORTED_MODULE_3__["default"]('Player');
const enemy = new _factories_Player__WEBPACK_IMPORTED_MODULE_3__["default"]('Enemy');
const playerBoard = new _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]();
const enemyBoard = new _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]();

placementDivs.forEach((placementDiv) => placementDiv.addEventListener('mouseenter', (e) => {
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.hoverOn)(e);
}));

placementDivs.forEach((placementDiv) => placementDiv.addEventListener('mouseleave', (e) => {
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.hoverOff)(e);
}));

rotateBtn.addEventListener('click', () => {
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.rotateAxis)();
});

placementDivs.forEach((placementDiv) => {
  placementDiv.addEventListener('click', (e) => {
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.placePlayerAndEnemyShips)(e, playerBoard, enemyBoard);
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.checkPlacementEnd)();
  });
});

enemyBoardDivs.forEach((enemyBoardDiv) => {
  enemyBoardDiv.addEventListener('click', (e) => {
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.launchPlayerAndEnemyAttacks)(e, player, enemy, playerBoard, enemyBoard);
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.checkGameEnd)(player, enemy, playerBoard, enemyBoard);
  });
});

replayBtn.addEventListener('click', () => {
  const gameStart = document.getElementById('game-start');

  player.resetAlreadyHitCoords();
  enemy.resetAlreadyHitCoords();
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.resetBoards)();
  playerBoard.reset();
  enemyBoard.reset();
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.openModal)(gameStart);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICB9XFxuXFxuI2JvYXJkcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgyNHB4O1xcbiAgICBoZWlnaHQ6IDM4MHB4O1xcbiAgICBnYXA6IDRyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgZ3JpZC1nYXA6IDJweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzAwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJvYXJkLWRpdnMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMzUlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDQyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogM3JlbSAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4uYm9hcmQucGxhY2VtZW50IHtcXG4gICAgaGVpZ2h0OiAzNDBweDtcXG4gICAgd2lkdGg6IDM0MHB4O1xcbiAgICBtYXJnaW46IDEuNXJlbSBhdXRvIDA7XFxufVxcblxcbiNnYW1lLXN0YXJ0IGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLyogLm1vZGFsLWhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufSAqL1xcblxcbi5wcmltYXJ5LWJ0biB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogLm1vZGFsLWhlYWRlciAuY2xvc2UtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSAqL1xcblxcbi8qIC5tb2RhbC1ib2R5IHtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbn0gKi9cXG5cXG4jb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLHFDQUFxQztFQUN2Qzs7QUFFRjtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULHlDQUF5QztJQUN6Qyw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7Ozs7OztHQU1HOztBQUVIO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBOzs7Ozs7O0dBT0c7O0FBRUg7O0dBRUc7O0FBRUg7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQW1DO0lBQ25DLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICB9XFxuXFxuI2JvYXJkcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgyNHB4O1xcbiAgICBoZWlnaHQ6IDM4MHB4O1xcbiAgICBnYXA6IDRyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgZ3JpZC1nYXA6IDJweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzAwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJvYXJkLWRpdnMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMzUlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDQyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogM3JlbSAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4uYm9hcmQucGxhY2VtZW50IHtcXG4gICAgaGVpZ2h0OiAzNDBweDtcXG4gICAgd2lkdGg6IDM0MHB4O1xcbiAgICBtYXJnaW46IDEuNXJlbSBhdXRvIDA7XFxufVxcblxcbiNnYW1lLXN0YXJ0IGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLyogLm1vZGFsLWhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufSAqL1xcblxcbi5wcmltYXJ5LWJ0biB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogLm1vZGFsLWhlYWRlciAuY2xvc2UtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSAqL1xcblxcbi8qIC5tb2RhbC1ib2R5IHtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbn0gKi9cXG5cXG4jb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZChuKSB7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZCcpO1xuXG4gIGJvYXJkcy5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgIGJvYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7bn0sIDFmcilgO1xuICAgIGJvYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7bn0sIDFmcilgO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAobik7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAobik7IGorKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWRpdnMnKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgaWYgKGJvYXJkLmNsYXNzTGlzdC5jb250YWlucygncGxheWVyJykpIHtcbiAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGBwJHtpfSR7an1gKTtcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15JykpIHtcbiAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGBlJHtpfSR7an1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9JHtqfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaG92ZXJPbihlKSB7XG4gIGNvbnN0IGF4aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcycpO1xuICBjb25zdCBzdHIgPSBlLnRhcmdldC5pZDtcbiAgY29uc3QgeFBvcyA9IHBhcnNlSW50KHN0clswXSk7XG4gIGNvbnN0IHlQb3MgPSBwYXJzZUludChzdHJbMV0pO1xuICBjb25zdCBsZW5ndGhzID0gWzUsIDQsIDMsIDMsIDJdO1xuICBjb25zdCBjbGlja0NvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpY2stY291bnRlcicpO1xuICBjb25zdCBsID0gbGVuZ3Roc1twYXJzZUludChjbGlja0NvdW50ZXIuaW5uZXJUZXh0KV07XG5cbiAgaWYgKGF4aXMuaW5uZXJUZXh0ID09PSAnaCcpIHtcbiAgICBpZiAoKHlQb3MgKyBsIC0gMSkgPD0gOSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eFBvc30ke3lQb3MgKyBpfWApO1xuICAgICAgICBpZiAoZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJycpIHsgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGJsdWUnOyB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGF4aXMuaW5uZXJUZXh0ID09PSAndicpIHtcbiAgICBpZiAoKHhQb3MgKyBsIC0gMSkgPD0gOSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eFBvcyArIGl9JHt5UG9zfWApO1xuICAgICAgICBpZiAoZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJycpIHsgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGJsdWUnOyB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhvdmVyT2ZmKGUpIHtcbiAgY29uc3QgYXhpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzJyk7XG4gIGNvbnN0IHN0ciA9IGUudGFyZ2V0LmlkO1xuICBjb25zdCB4UG9zID0gcGFyc2VJbnQoc3RyWzBdKTtcbiAgY29uc3QgeVBvcyA9IHBhcnNlSW50KHN0clsxXSk7XG4gIGNvbnN0IGxlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IGNsaWNrQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGljay1jb3VudGVyJyk7XG4gIGNvbnN0IGwgPSBsZW5ndGhzW3BhcnNlSW50KGNsaWNrQ291bnRlci5pbm5lclRleHQpXTtcblxuICBpZiAoYXhpcy5pbm5lclRleHQgPT09ICdoJykge1xuICAgIGlmICgoeVBvcyArIGwgLSAxKSA8PSA5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4UG9zfSR7eVBvcyArIGl9YCk7XG4gICAgICAgIGlmIChkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAnbGlnaHRibHVlJykgeyBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7IH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoYXhpcy5pbm5lclRleHQgPT09ICd2Jykge1xuICAgIGlmICgoeFBvcyArIGwgLSAxKSA8PSA5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4UG9zICsgaX0ke3lQb3N9YCk7XG4gICAgICAgIGlmIChkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAnbGlnaHRibHVlJykgeyBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7IH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcm90YXRlQXhpcygpIHtcbiAgY29uc3QgYXhpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzJyk7XG4gIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ2gnKSByZXR1cm4gYXhpcy5pbm5lclRleHQgPSAndic7XG4gIGF4aXMuaW5uZXJUZXh0ID0gJ2gnO1xufVxuXG5mdW5jdGlvbiBtYXJrU2hpcChlLCBsKSB7XG4gIGNvbnN0IGF4aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcycpO1xuICBjb25zdCBzdHIgPSBlLnRhcmdldC5pZDtcbiAgY29uc3QgeFBvcyA9IHBhcnNlSW50KHN0clswXSk7XG4gIGNvbnN0IHlQb3MgPSBwYXJzZUludChzdHJbMV0pO1xuXG4gIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ2gnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3hQb3N9JHt5UG9zICsgaX1gKTtcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4UG9zICsgaX0ke3lQb3N9YCk7XG4gICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJCb2FyZChib2FyZCkge1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgaWYgKHR5cGVvZiBib2FyZFtpXVtqXSA9PT0gJ29iamVjdCcpIHsgc2hpcHMucHVzaChib2FyZFtpXVtqXSk7IH1cbiAgICB9XG4gIH1cblxuICBzaGlwcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgaWYgKGUuYXhpcyA9PT0gJ2gnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7ZS5jb29yZFswXX0ke2UuY29vcmRbMV0gKyBpfWApO1xuICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLnNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAke2UuY29vcmRbMF0gKyBpfSR7ZS5jb29yZFsxXX1gKTtcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyQXR0YWNrKGlzSGl0LCB4UG9zLCB5UG9zKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlJHt4UG9zfSR7eVBvc31gKTtcbiAgaWYgKGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICcnKSB7XG4gICAgaWYgKGlzSGl0KSBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgZWxzZSBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyRW5lbXlBdHRhY2soY29vcmQsIGlzSGl0KSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwJHtjb29yZFswXX0ke2Nvb3JkWzFdfWApO1xuICBpZiAoaXNIaXQpIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgZWxzZSBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcblxuICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcblxuICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuO1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyV2luKHBsYXllcikge1xuICBjb25zdCBnYW1lT3Zlck1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtb3ZlcicpO1xuICBnYW1lT3Zlck1vZGFsLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dCA9IGAke3BsYXllcn0gV29uIWA7XG4gIG9wZW5Nb2RhbChnYW1lT3Zlck1vZGFsKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmV3Qm9hcmRzKCkge1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKTtcbiAgYm9hcmRzLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgYm9hcmREaXZzID0gYm9hcmQuY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZERpdnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJvYXJkRGl2c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNldEJvYXJkcygpIHtcbiAgY29uc3QgZ2FtZU92ZXJNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLW92ZXInKTtcbiAgY2xvc2VNb2RhbChnYW1lT3Zlck1vZGFsKTtcbiAgcmVuZGVyTmV3Qm9hcmRzKCk7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUJvYXJkLCByZW5kZXJQbGF5ZXJCb2FyZCwgcmVuZGVyUGxheWVyQXR0YWNrLCByZW5kZXJFbmVteUF0dGFjayxcbiAgcmVuZGVyV2luLCBjbG9zZU1vZGFsLCBvcGVuTW9kYWwsIHJlc2V0Qm9hcmRzLCByb3RhdGVBeGlzLCBob3Zlck9uLCBob3Zlck9mZiwgbWFya1NoaXAsXG59O1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oQXJyYXkoMTApLCAoKSA9PiBBcnJheS5mcm9tKEFycmF5KDEwKS5rZXlzKCkpKTtcbiAgICB0aGlzLm1pc3NlZFNob3RzID0gW107XG4gIH1cblxuICBwbGFjZVNoaXAoY29yZCwgbCwgYSkge1xuICAgIGNvbnN0IHggPSBjb3JkWzBdO1xuICAgIGNvbnN0IHkgPSBjb3JkWzFdO1xuXG4gICAgdGhpcy5ib2FyZFt4XVt5XSA9IHtcbiAgICAgIGNvb3JkOiBbeCwgeV0sXG4gICAgICBheGlzOiBgJHthfWAsXG4gICAgICBzaGlwOiBuZXcgU2hpcChsKSxcbiAgICB9O1xuXG4gICAgaWYgKGEgPT09ICdoJykge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5ICsgaV0gPSAneCc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldID0gJ3gnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2sodGFyZ2V0KSB7XG4gICAgLy8gY29uc3Qgc2hpcHMgPSB0aGlzLmJvYXJkLmZpbHRlcigoZSkgPT4gdHlwZW9mIGUgIT09ICdudW1iZXInKTtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgIGxldCBoaXRJc0NhbGxlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmJvYXJkW2ldW2pdID09PSAnb2JqZWN0JykgeyBzaGlwcy5wdXNoKHRoaXMuYm9hcmRbaV1bal0pOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2hpcHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgaWYgKGUuYXhpcyA9PT0gJ2gnKSB7XG4gICAgICAgIGlmICh0YXJnZXRbMF0gPT09IGUuY29vcmRbMF0pIHtcbiAgICAgICAgICBpZiAodGFyZ2V0WzFdID49IGUuY29vcmRbMV0gJiYgdGFyZ2V0WzFdIDw9IChlLmNvb3JkWzFdICsgZS5zaGlwLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICBlLnNoaXAuaGl0KHRhcmdldCk7XG4gICAgICAgICAgICBoaXRJc0NhbGxlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFsxXSA9PT0gZS5jb29yZFsxXSkge1xuICAgICAgICBpZiAodGFyZ2V0WzBdID49IGUuY29vcmRbMF0gJiYgdGFyZ2V0WzBdIDw9IChlLmNvb3JkWzBdICsgZS5zaGlwLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgZS5zaGlwLmhpdCh0YXJnZXQpO1xuICAgICAgICAgIGhpdElzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaGl0SXNDYWxsZWQpIHsgdGhpcy5taXNzZWRTaG90cy5wdXNoKHRhcmdldCk7IH1cbiAgICByZXR1cm4gaGl0SXNDYWxsZWQ7XG4gIH1cblxuICBhcmVBbGxTaGlwc1N1bmsoKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZFtpXVtqXSA9PT0gJ29iamVjdCcpIHsgc2hpcHMucHVzaCh0aGlzLmJvYXJkW2ldW2pdKTsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaGlwcy5ldmVyeSgoZSkgPT4gZS5zaGlwLmlzU3VuaygpID09PSB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KDEwKSwgKCkgPT4gQXJyYXkuZnJvbShBcnJheSgxMCkua2V5cygpKSk7XG4gICAgdGhpcy5taXNzZWRTaG90cyA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYWxyZWFkeUhpdENvb3JkcyA9IFtdO1xuICB9XG5cbiAgaXNBbHJlYWR5SGl0KGNvb3JkKSB7XG4gICAgY29uc3QgY29vcmRTdHIgPSBjb29yZC50b1N0cmluZygpO1xuXG4gICAgcmV0dXJuICh0aGlzLmFscmVhZHlIaXRDb29yZHMuaW5jbHVkZXMoY29vcmRTdHIpKTtcbiAgfVxuXG4gIGF0dGFjayhjb29yZCwgZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgY29vcmRTdHIgPSBjb29yZC50b1N0cmluZygpO1xuICAgIGlmICh0aGlzLmlzQWxyZWFkeUhpdChjb29yZCkpIHJldHVybjtcblxuICAgIHRoaXMuYWxyZWFkeUhpdENvb3Jkcy5wdXNoKGNvb3JkU3RyKTtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICB9XG5cbiAgcmFuZG9tQXR0YWNrKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGNvb3JkID0gW107XG4gICAgbGV0IGNvb3JkU3RyID0gJyc7XG5cbiAgICBpZiAodGhpcy5hbHJlYWR5SGl0Q29vcmRzLmxlbmd0aCA9PT0gMTAwKSByZXR1cm47XG5cbiAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIHdoaWxlICh0aGlzLmlzQWxyZWFkeUhpdChbeCwgeV0pKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG5cbiAgICBjb29yZC5wdXNoKHgsIHkpO1xuICAgIGNvb3JkU3RyID0gY29vcmQudG9TdHJpbmcoKTtcbiAgICB0aGlzLmFscmVhZHlIaXRDb29yZHMucHVzaChjb29yZFN0cik7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNvb3JkLCBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbeCwgeV0pLFxuICAgIF07XG4gIH1cblxuICByZXNldEFscmVhZHlIaXRDb29yZHMoKSB7XG4gICAgdGhpcy5hbHJlYWR5SGl0Q29vcmRzID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgaGl0KGNvb3JkKSB7XG4gICAgY29uc3QgY29vcmRTdHIgPSBjb29yZC50b1N0cmluZygpO1xuXG4gICAgaWYgKHRoaXMuaGl0cy5pbmNsdWRlcyhjb29yZFN0cikpIHJldHVybjtcbiAgICB0aGlzLmhpdHMucHVzaChjb29yZFN0cik7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cy5sZW5ndGggPT09IHRoaXMubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQge1xuICBjbG9zZU1vZGFsLCBtYXJrU2hpcCwgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlclBsYXllckF0dGFjaywgcmVuZGVyRW5lbXlBdHRhY2ssIHJlbmRlcldpbixcbn0gZnJvbSAnLi9ET00nO1xuXG5mdW5jdGlvbiBpc0luQm9hcmQoeCwgeSkge1xuICBpZiAoeCA+PSAwICYmIHggPD0gOSAmJiB5ID49IDAgJiYgeSA8PSA5KSB7IHJldHVybiB0cnVlOyB9XG59XG5cbmZ1bmN0aW9uIGlzTGVnYWwoeFBvcywgeVBvcywgcGxheWVyQm9hcmQpIHtcbiAgY29uc3QgZHggPSBbLTEsIC0xLCAtMSwgMCwgMCwgMSwgMSwgMV07XG4gIGNvbnN0IGR5ID0gWy0xLCAwLCAxLCAtMSwgMSwgLTEsIDAsIDFdO1xuICBsZXQgbGVnYWwgPSB0cnVlO1xuICBsZXQgeDtcbiAgbGV0IHk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkeC5sZW5ndGg7IGkrKykge1xuICAgIHggPSB4UG9zICsgZHhbaV07XG4gICAgeSA9IHlQb3MgKyBkeVtpXTtcbiAgICBpZiAoaXNJbkJvYXJkKHgsIHkpKSB7XG4gICAgICBpZiAodHlwZW9mIHBsYXllckJvYXJkLmJvYXJkW3hdW3ldICE9PSAnbnVtYmVyJykgbGVnYWwgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVnYWw7XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENsaWNrKCkge1xuICBjb25zdCBjbGlja0NvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpY2stY291bnRlcicpO1xuICBjbGlja0NvdW50ZXIuaW5uZXJUZXh0ID0gcGFyc2VJbnQoY2xpY2tDb3VudGVyLmlubmVyVGV4dCkgKyAxO1xufVxuXG5mdW5jdGlvbiBjaGVja1BsYWNlbWVudEVuZCgpIHtcbiAgY29uc3QgY2xpY2tDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWNrLWNvdW50ZXInKTtcbiAgY29uc3QgZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc3RhcnQnKTtcbiAgY29uc3QgYXhpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzJyk7XG5cbiAgaWYgKHBhcnNlSW50KGNsaWNrQ291bnRlci5pbm5lclRleHQpID09PSA1KSB7XG4gICAgY2xvc2VNb2RhbChnYW1lU3RhcnQpO1xuICAgIGNsaWNrQ291bnRlci5pbm5lclRleHQgPSAwO1xuICAgIGF4aXMuaW5uZXJUZXh0ID0gJ2gnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFyZ2V0KGVuZW15Qm9hcmQsIGwpIHtcbiAgY29uc3QgYXhlcyA9IFsnaCcsICd2J107XG4gIGNvbnN0IGF4aXMgPSBheGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcbiAgbGV0IGhlYWRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgaGVhZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCB0YWlsWDtcbiAgbGV0IHRhaWxZO1xuXG4gIGlmIChheGlzID09PSAnaCcpIHtcbiAgICB0YWlsWCA9IGhlYWRYO1xuICAgIHRhaWxZID0gaGVhZFkgKyBsIC0gMTtcblxuICAgIHdoaWxlICh0eXBlb2YgZW5lbXlCb2FyZC5ib2FyZFtoZWFkWF1baGVhZFldICE9PSAnbnVtYmVyJ1xuICAgIHx8IGlzTGVnYWwoaGVhZFgsIGhlYWRZLCBlbmVteUJvYXJkKSA9PT0gZmFsc2VcbiAgICB8fCBpc0xlZ2FsKHRhaWxYLCB0YWlsWSwgZW5lbXlCb2FyZCkgPT09IGZhbHNlXG4gICAgfHwgdGFpbFkgPiA5KSB7XG4gICAgICBoZWFkWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGhlYWRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgdGFpbFggPSBoZWFkWDtcbiAgICAgIHRhaWxZID0gaGVhZFkgKyBsIC0gMTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3YnKSB7XG4gICAgdGFpbFggPSBoZWFkWCArIGwgLSAxO1xuICAgIHRhaWxZID0gaGVhZFk7XG5cbiAgICB3aGlsZSAodHlwZW9mIGVuZW15Qm9hcmQuYm9hcmRbaGVhZFhdW2hlYWRZXSAhPT0gJ251bWJlcidcbiAgICB8fCBpc0xlZ2FsKGhlYWRYLCBoZWFkWSwgZW5lbXlCb2FyZCkgPT09IGZhbHNlXG4gICAgfHwgaXNMZWdhbCh0YWlsWCwgdGFpbFksIGVuZW15Qm9hcmQpID09PSBmYWxzZVxuICAgIHx8IHRhaWxYID4gOSkge1xuICAgICAgaGVhZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBoZWFkWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHRhaWxYID0gaGVhZFggKyBsIC0gMTtcbiAgICAgIHRhaWxZID0gaGVhZFk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtoZWFkWCwgaGVhZFksIGF4aXNdO1xufVxuXG5mdW5jdGlvbiBwbGFjZUVuZW15U2hpcChlbmVteUJvYXJkKSB7XG4gIGNvbnN0IGxlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IGNsaWNrQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGljay1jb3VudGVyJyk7XG4gIGNvbnN0IGwgPSBsZW5ndGhzW3BhcnNlSW50KGNsaWNrQ291bnRlci5pbm5lclRleHQpXTtcblxuICBjb25zdCB0YXJnZXQgPSBnZW5lcmF0ZVRhcmdldChlbmVteUJvYXJkLCBsKTtcbiAgY29uc3QgaGVhZFggPSB0YXJnZXRbMF07XG4gIGNvbnN0IGhlYWRZID0gdGFyZ2V0WzFdO1xuICBjb25zdCBheGlzID0gdGFyZ2V0WzJdO1xuXG4gIGVuZW15Qm9hcmQucGxhY2VTaGlwKFtoZWFkWCwgaGVhZFldLCBsLCBheGlzKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VQbGF5ZXJBbmRFbmVteVNoaXBzKGUsIHBsYXllckJvYXJkLCBlbmVteUJvYXJkKSB7XG4gIGNvbnN0IGxlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IGNsaWNrQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGljay1jb3VudGVyJyk7XG4gIGNvbnN0IGwgPSBsZW5ndGhzW3BhcnNlSW50KGNsaWNrQ291bnRlci5pbm5lclRleHQpXTtcbiAgY29uc3QgYXhpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzJyk7XG4gIGNvbnN0IHN0ciA9IGUudGFyZ2V0LmlkO1xuICBjb25zdCBoZWFkWCA9IHBhcnNlSW50KHN0clswXSk7XG4gIGNvbnN0IGhlYWRZID0gcGFyc2VJbnQoc3RyWzFdKTtcblxuICBpZiAoYXhpcy5pbm5lclRleHQgPT09ICdoJykge1xuICAgIGNvbnN0IHRhaWxYID0gaGVhZFg7XG4gICAgY29uc3QgdGFpbFkgPSBoZWFkWSArIGwgLSAxO1xuICAgIGlmIChpc0xlZ2FsKGhlYWRYLCBoZWFkWSwgcGxheWVyQm9hcmQpXG4gICAgICAmJiBpc0xlZ2FsKHRhaWxYLCB0YWlsWSwgcGxheWVyQm9hcmQpXG4gICAgICAmJiB0YWlsWSA8PSA5KSB7XG4gICAgICBtYXJrU2hpcChlLCBsKTtcbiAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChbaGVhZFgsIGhlYWRZXSwgbCwgYXhpcy5pbm5lclRleHQpO1xuICAgICAgcmVuZGVyUGxheWVyQm9hcmQocGxheWVyQm9hcmQuYm9hcmQpO1xuICAgICAgcGxhY2VFbmVteVNoaXAoZW5lbXlCb2FyZCk7XG4gICAgICBpbmNyZW1lbnRDbGljaygpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ3YnKSB7XG4gICAgY29uc3QgdGFpbFggPSBoZWFkWCArIGwgLSAxO1xuICAgIGNvbnN0IHRhaWxZID0gaGVhZFk7XG4gICAgaWYgKGlzTGVnYWwoaGVhZFgsIGhlYWRZLCBwbGF5ZXJCb2FyZClcbiAgICAgICYmIGlzTGVnYWwodGFpbFgsIHRhaWxZLCBwbGF5ZXJCb2FyZClcbiAgICAgICYmIHRhaWxYIDw9IDkpIHtcbiAgICAgIG1hcmtTaGlwKGUsIGwpO1xuICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFtoZWFkWCwgaGVhZFldLCBsLCBheGlzLmlubmVyVGV4dCk7XG4gICAgICByZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXJCb2FyZC5ib2FyZCk7XG4gICAgICBwbGFjZUVuZW15U2hpcChlbmVteUJvYXJkKTtcbiAgICAgIGluY3JlbWVudENsaWNrKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxhdW5jaFBsYXllckFuZEVuZW15QXR0YWNrcyhlLCBwbGF5ZXIsIGVuZW15LCBwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZCkge1xuICBjb25zdCBzdHIgPSBlLnRhcmdldC5pZC5zbGljZSgxKTtcbiAgY29uc3QgeFBvcyA9IHBhcnNlSW50KHN0clswXSk7XG4gIGNvbnN0IHlQb3MgPSBwYXJzZUludChzdHJbMV0pO1xuXG4gIGNvbnN0IHBsYXllckhpdCA9IHBsYXllci5hdHRhY2soW3hQb3MsIHlQb3NdLCBlbmVteUJvYXJkKTtcbiAgcmVuZGVyUGxheWVyQXR0YWNrKHBsYXllckhpdCwgeFBvcywgeVBvcyk7XG5cbiAgaWYgKHBsYXllckhpdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZW5lbXlIaXQgPSBlbmVteS5yYW5kb21BdHRhY2socGxheWVyQm9hcmQpO1xuICAgIHJlbmRlckVuZW15QXR0YWNrKGVuZW15SGl0WzBdLCBlbmVteUhpdFsxXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tHYW1lRW5kKHBsYXllciwgZW5lbXksIHBsYXllckJvYXJkLCBlbmVteUJvYXJkKSB7XG4gIGlmIChwbGF5ZXJCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkgcmVuZGVyV2luKGVuZW15Lm5hbWUpO1xuICBlbHNlIGlmIChlbmVteUJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSByZW5kZXJXaW4ocGxheWVyLm5hbWUpO1xufVxuXG5leHBvcnQge1xuICBpbmNyZW1lbnRDbGljaywgY2hlY2tQbGFjZW1lbnRFbmQsIHBsYWNlUGxheWVyQW5kRW5lbXlTaGlwcywgcGxhY2VFbmVteVNoaXAsXG4gIGxhdW5jaFBsYXllckFuZEVuZW15QXR0YWNrcywgY2hlY2tHYW1lRW5kLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7XG4gIGNyZWF0ZUJvYXJkLCByZXNldEJvYXJkcywgcm90YXRlQXhpcywgaG92ZXJPbiwgaG92ZXJPZmYsIG9wZW5Nb2RhbCxcbn0gZnJvbSAnLi9ET00nO1xuaW1wb3J0IHtcbiAgY2hlY2tQbGFjZW1lbnRFbmQsIHBsYWNlUGxheWVyQW5kRW5lbXlTaGlwcywgbGF1bmNoUGxheWVyQW5kRW5lbXlBdHRhY2tzLFxuICBjaGVja0dhbWVFbmQsXG59IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZmFjdG9yaWVzL0dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vZmFjdG9yaWVzL1BsYXllcic7XG5cbndpbmRvdy5vbmxvYWQgPSBjcmVhdGVCb2FyZCgxMCk7XG5cbmNvbnN0IHBsYWNlbWVudERpdnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5wbGFjZW1lbnQnKS5jaGlsZHJlbik7XG5jb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRlLWJ0bicpO1xuY29uc3QgZW5lbXlCb2FyZERpdnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5lbmVteScpLmNoaWxkcmVuKTtcbmNvbnN0IHJlcGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBsYXktYnRuJyk7XG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCdQbGF5ZXInKTtcbmNvbnN0IGVuZW15ID0gbmV3IFBsYXllcignRW5lbXknKTtcbmNvbnN0IHBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuY29uc3QgZW5lbXlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxucGxhY2VtZW50RGl2cy5mb3JFYWNoKChwbGFjZW1lbnREaXYpID0+IHBsYWNlbWVudERpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHtcbiAgaG92ZXJPbihlKTtcbn0pKTtcblxucGxhY2VtZW50RGl2cy5mb3JFYWNoKChwbGFjZW1lbnREaXYpID0+IHBsYWNlbWVudERpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgaG92ZXJPZmYoZSk7XG59KSk7XG5cbnJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcm90YXRlQXhpcygpO1xufSk7XG5cbnBsYWNlbWVudERpdnMuZm9yRWFjaCgocGxhY2VtZW50RGl2KSA9PiB7XG4gIHBsYWNlbWVudERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcGxhY2VQbGF5ZXJBbmRFbmVteVNoaXBzKGUsIHBsYXllckJvYXJkLCBlbmVteUJvYXJkKTtcbiAgICBjaGVja1BsYWNlbWVudEVuZCgpO1xuICB9KTtcbn0pO1xuXG5lbmVteUJvYXJkRGl2cy5mb3JFYWNoKChlbmVteUJvYXJkRGl2KSA9PiB7XG4gIGVuZW15Qm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGxhdW5jaFBsYXllckFuZEVuZW15QXR0YWNrcyhlLCBwbGF5ZXIsIGVuZW15LCBwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZCk7XG4gICAgY2hlY2tHYW1lRW5kKHBsYXllciwgZW5lbXksIHBsYXllckJvYXJkLCBlbmVteUJvYXJkKTtcbiAgfSk7XG59KTtcblxucmVwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBnYW1lU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zdGFydCcpO1xuXG4gIHBsYXllci5yZXNldEFscmVhZHlIaXRDb29yZHMoKTtcbiAgZW5lbXkucmVzZXRBbHJlYWR5SGl0Q29vcmRzKCk7XG4gIHJlc2V0Qm9hcmRzKCk7XG4gIHBsYXllckJvYXJkLnJlc2V0KCk7XG4gIGVuZW15Qm9hcmQucmVzZXQoKTtcbiAgb3Blbk1vZGFsKGdhbWVTdGFydCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==