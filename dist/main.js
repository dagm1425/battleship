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
/* harmony export */   "isLegal": () => (/* binding */ isLegal),
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

function hoverOn(e, l) {
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);
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

function hoverOff(e, l) {
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);

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

function isInBoard(x, y) {
  if (x >= 0 && x <= 9
    && y >= 0 && y <= 9) { return true; }
}

function isLegal(xPos, yPos) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  let x;
  let y;

  for (let i = 0; i < dx.length; i++) {
    x = xPos + dx[i];
    y = yPos + dy[i];
    if (isInBoard(x, y)) {
      const div = document.getElementById(`${x}${y}`);

      if (div.style.backgroundColor === 'blue') return false;
    }
  }
}

function markShip(e, l) {
  const clickCounter = document.getElementById('click-counter');
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

  clickCounter.innerText = parseInt(clickCounter.innerText) + 1;
}

// function placeShip(e, l) {
//   const axis = document.getElementById('axis');
//   const str = e.target.id;
//   const headX = parseInt(str[0]);
//   const headY = parseInt(str[1]);

//   if (axis.innerText === 'h') {
//     const tailX = headX;
//     const tailY = headY + l - 1;
//     if (isLegal(headX, headY) !== false
//     && isLegal(tailX, tailY) !== false) { markShip(e, l); }
//   } else if (axis.innerText === 'v') {
//     const tailX = headX + l - 1;
//     const tailY = headY;
//     if (isLegal(headX, headY) !== false
//     && isLegal(tailX, tailY) !== false) { markShip(e, l); }
//   }
// }

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

    // but ship.hit() already knows not to shoot the same coordinate twice'
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
/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/Gameboard */ "./src/factories/Gameboard.js");
/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/Player */ "./src/factories/Player.js");




window.onload = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createBoard)(10);

const placementDivs = Array.from(document.querySelector('.board.placement').children);
const rotateBtn = document.getElementById('rotate-btn');
const enemyBoardDivs = Array.from(document.querySelector('.board.enemy').children);
const replayBtn = document.getElementById('replay-btn');
const player = new _factories_Player__WEBPACK_IMPORTED_MODULE_2__["default"]('Player');
const enemy = new _factories_Player__WEBPACK_IMPORTED_MODULE_2__["default"]('Enemy');
const playerBoard = new _factories_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
const enemyBoard = new _factories_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();

enemyBoard.placeShip([0, 3], 5, 'h');
enemyBoard.placeShip([0, 0], 4, 'v');
enemyBoard.placeShip([3, 5], 3, 'h');
enemyBoard.placeShip([6, 1], 3, 'h');
enemyBoard.placeShip([9, 5], 2, 'h');

placementDivs.forEach((placementDiv) => placementDiv.addEventListener('mouseenter', (e) => {
  const lengths = [5, 4, 3, 3, 2];
  const clickCounter = document.getElementById('click-counter');
  const l = lengths[parseInt(clickCounter.innerText)];

  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.hoverOn)(e, l);
}));

placementDivs.forEach((placementDiv) => placementDiv.addEventListener('mouseleave', (e) => {
  const lengths = [5, 4, 3, 3, 2];
  const clickCounter = document.getElementById('click-counter');
  const l = lengths[parseInt(clickCounter.innerText)];

  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.hoverOff)(e, l);
}));

rotateBtn.addEventListener('click', () => {
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.rotateAxis)();
});

placementDivs.forEach((placementDiv) => {
  placementDiv.addEventListener('click', (e) => {
    const gameStart = document.getElementById('game-start');
    const lengths = [5, 4, 3, 3, 2];
    const clickCounter = document.getElementById('click-counter');
    const l = lengths[parseInt(clickCounter.innerText)];

    // placeShip(e, l);
    const axis = document.getElementById('axis');
    const str = e.target.id;
    const headX = parseInt(str[0]);
    const headY = parseInt(str[1]);

    if (axis.innerText === 'h') {
      const tailX = headX;
      const tailY = headY + l - 1;
      if ((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.isLegal)(headX, headY) !== false
      && (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.isLegal)(tailX, tailY) !== false
      && (headY + l - 1) <= 9) {
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.markShip)(e, l);
        playerBoard.placeShip([headX, headY], l, axis.innerText);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderPlayerBoard)(playerBoard.board);
      }
    } else if (axis.innerText === 'v') {
      const tailX = headX + l - 1;
      const tailY = headY;
      if ((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.isLegal)(headX, headY) !== false
      && (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.isLegal)(tailX, tailY) !== false
      && (headX + l - 1) <= 9) {
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.markShip)(e, l);
        playerBoard.placeShip([headX, headY], l, axis.innerText);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderPlayerBoard)(playerBoard.board);
      }
    }

    if (parseInt(clickCounter.innerText) === 5) {
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.closeModal)(gameStart);
      clickCounter.innerText = 0;
      axis.innerText = 'h';
    }
  });
});

enemyBoardDivs.forEach((enemyBoardDiv) => {
  enemyBoardDiv.addEventListener('click', (e) => {
    const str = e.target.id.slice(1);
    const xPos = parseInt(str[0]);
    const yPos = parseInt(str[1]);

    const playerHit = player.attack([xPos, yPos], enemyBoard);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderPlayerAttack)(playerHit, xPos, yPos);

    if (playerHit !== undefined) {
      const enemyHit = enemy.randomAttack(playerBoard);
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderEnemyAttack)(enemyHit[0], enemyHit[1]);
    }
    if (playerBoard.areAllShipsSunk()) (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderWin)(enemy.name);
    else if (enemyBoard.areAllShipsSunk()) (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderWin)(player.name);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFPO0FBQ2pCLFNBQVMsNkNBQU87QUFDaEI7QUFDQSxRQUFRLDhDQUFRO0FBQ2hCO0FBQ0EsUUFBUSx1REFBaUI7QUFDekI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFVBQVUsNkNBQU87QUFDakIsU0FBUyw2Q0FBTztBQUNoQjtBQUNBLFFBQVEsOENBQVE7QUFDaEI7QUFDQSxRQUFRLHVEQUFpQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0EsTUFBTSxnREFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx3REFBa0I7O0FBRXRCO0FBQ0E7QUFDQSxNQUFNLHVEQUFpQjtBQUN2QjtBQUNBLHVDQUF1QywrQ0FBUztBQUNoRCwyQ0FBMkMsK0NBQVM7QUFDcEQsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIH1cXG5cXG4jYm9hcmRzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODI0cHg7XFxuICAgIGhlaWdodDogMzgwcHg7XFxuICAgIGdhcDogNHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBncmlkLWdhcDogMnB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMDAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYm9hcmQtZGl2cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAzNSU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDIwcHg7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAzcmVtIDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi5ib2FyZC5wbGFjZW1lbnQge1xcbiAgICBoZWlnaHQ6IDM0MHB4O1xcbiAgICB3aWR0aDogMzQwcHg7XFxuICAgIG1hcmdpbjogMS41cmVtIGF1dG8gMDtcXG59XFxuXFxuI2dhbWUtc3RhcnQgaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4vKiAubW9kYWwtaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59ICovXFxuXFxuLnByaW1hcnktYnRuIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDAuNzVyZW07XFxuICAgIG1hcmdpbi10b3A6IDEuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiAubW9kYWwtaGVhZGVyIC5jbG9zZS1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59ICovXFxuXFxuLyogLm1vZGFsLWJvZHkge1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxufSAqL1xcblxcbiNvdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNvdmVybGF5LmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUNBQXFDO0VBQ3ZDOztBQUVGO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QseUNBQXlDO0lBQ3pDLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTs7Ozs7O0dBTUc7O0FBRUg7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7Ozs7Ozs7R0FPRzs7QUFFSDs7R0FFRzs7QUFFSDtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIH1cXG5cXG4jYm9hcmRzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODI0cHg7XFxuICAgIGhlaWdodDogMzgwcHg7XFxuICAgIGdhcDogNHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBncmlkLWdhcDogMnB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMDAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYm9hcmQtZGl2cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAzNSU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDIwcHg7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAzcmVtIDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi5ib2FyZC5wbGFjZW1lbnQge1xcbiAgICBoZWlnaHQ6IDM0MHB4O1xcbiAgICB3aWR0aDogMzQwcHg7XFxuICAgIG1hcmdpbjogMS41cmVtIGF1dG8gMDtcXG59XFxuXFxuI2dhbWUtc3RhcnQgaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4vKiAubW9kYWwtaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59ICovXFxuXFxuLnByaW1hcnktYnRuIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDAuNzVyZW07XFxuICAgIG1hcmdpbi10b3A6IDEuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiAubW9kYWwtaGVhZGVyIC5jbG9zZS1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59ICovXFxuXFxuLyogLm1vZGFsLWJvZHkge1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxufSAqL1xcblxcbiNvdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNvdmVybGF5LmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKG4pIHtcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkJyk7XG5cbiAgYm9hcmRzLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgYm9hcmQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtufSwgMWZyKWA7XG4gICAgYm9hcmQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtufSwgMWZyKWA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChuKTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IChuKTsgaisrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnYm9hcmQtZGl2cycpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBpZiAoYm9hcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5ZXInKSkge1xuICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYHAke2l9JHtqfWApO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkLmNsYXNzTGlzdC5jb250YWlucygnZW5lbXknKSkge1xuICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGUke2l9JHtqfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX0ke2p9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBob3Zlck9uKGUsIGwpIHtcbiAgY29uc3QgYXhpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzJyk7XG4gIGNvbnN0IHN0ciA9IGUudGFyZ2V0LmlkO1xuICBjb25zdCB4UG9zID0gcGFyc2VJbnQoc3RyWzBdKTtcbiAgY29uc3QgeVBvcyA9IHBhcnNlSW50KHN0clsxXSk7XG4gIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ2gnKSB7XG4gICAgaWYgKCh5UG9zICsgbCAtIDEpIDw9IDkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3hQb3N9JHt5UG9zICsgaX1gKTtcbiAgICAgICAgaWYgKGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICcnKSB7IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRibHVlJzsgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ3YnKSB7XG4gICAgaWYgKCh4UG9zICsgbCAtIDEpIDw9IDkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3hQb3MgKyBpfSR7eVBvc31gKTtcbiAgICAgICAgaWYgKGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICcnKSB7IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRibHVlJzsgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBob3Zlck9mZihlLCBsKSB7XG4gIGNvbnN0IGF4aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcycpO1xuICBjb25zdCBzdHIgPSBlLnRhcmdldC5pZDtcbiAgY29uc3QgeFBvcyA9IHBhcnNlSW50KHN0clswXSk7XG4gIGNvbnN0IHlQb3MgPSBwYXJzZUludChzdHJbMV0pO1xuXG4gIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ2gnKSB7XG4gICAgaWYgKCh5UG9zICsgbCAtIDEpIDw9IDkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3hQb3N9JHt5UG9zICsgaX1gKTtcbiAgICAgICAgaWYgKGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICdsaWdodGJsdWUnKSB7IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJzsgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ3YnKSB7XG4gICAgaWYgKCh4UG9zICsgbCAtIDEpIDw9IDkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3hQb3MgKyBpfSR7eVBvc31gKTtcbiAgICAgICAgaWYgKGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICdsaWdodGJsdWUnKSB7IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJzsgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVBeGlzKCkge1xuICBjb25zdCBheGlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F4aXMnKTtcbiAgaWYgKGF4aXMuaW5uZXJUZXh0ID09PSAnaCcpIHJldHVybiBheGlzLmlubmVyVGV4dCA9ICd2JztcbiAgYXhpcy5pbm5lclRleHQgPSAnaCc7XG59XG5cbmZ1bmN0aW9uIGlzSW5Cb2FyZCh4LCB5KSB7XG4gIGlmICh4ID49IDAgJiYgeCA8PSA5XG4gICAgJiYgeSA+PSAwICYmIHkgPD0gOSkgeyByZXR1cm4gdHJ1ZTsgfVxufVxuXG5mdW5jdGlvbiBpc0xlZ2FsKHhQb3MsIHlQb3MpIHtcbiAgY29uc3QgZHggPSBbLTEsIC0xLCAtMSwgMCwgMCwgMSwgMSwgMV07XG4gIGNvbnN0IGR5ID0gWy0xLCAwLCAxLCAtMSwgMSwgLTEsIDAsIDFdO1xuICBsZXQgeDtcbiAgbGV0IHk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkeC5sZW5ndGg7IGkrKykge1xuICAgIHggPSB4UG9zICsgZHhbaV07XG4gICAgeSA9IHlQb3MgKyBkeVtpXTtcbiAgICBpZiAoaXNJbkJvYXJkKHgsIHkpKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eX1gKTtcblxuICAgICAgaWYgKGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICdibHVlJykgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrU2hpcChlLCBsKSB7XG4gIGNvbnN0IGNsaWNrQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGljay1jb3VudGVyJyk7XG4gIGNvbnN0IGF4aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcycpO1xuICBjb25zdCBzdHIgPSBlLnRhcmdldC5pZDtcbiAgY29uc3QgeFBvcyA9IHBhcnNlSW50KHN0clswXSk7XG4gIGNvbnN0IHlQb3MgPSBwYXJzZUludChzdHJbMV0pO1xuXG4gIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ2gnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3hQb3N9JHt5UG9zICsgaX1gKTtcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4UG9zICsgaX0ke3lQb3N9YCk7XG4gICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrQ291bnRlci5pbm5lclRleHQgPSBwYXJzZUludChjbGlja0NvdW50ZXIuaW5uZXJUZXh0KSArIDE7XG59XG5cbi8vIGZ1bmN0aW9uIHBsYWNlU2hpcChlLCBsKSB7XG4vLyAgIGNvbnN0IGF4aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcycpO1xuLy8gICBjb25zdCBzdHIgPSBlLnRhcmdldC5pZDtcbi8vICAgY29uc3QgaGVhZFggPSBwYXJzZUludChzdHJbMF0pO1xuLy8gICBjb25zdCBoZWFkWSA9IHBhcnNlSW50KHN0clsxXSk7XG5cbi8vICAgaWYgKGF4aXMuaW5uZXJUZXh0ID09PSAnaCcpIHtcbi8vICAgICBjb25zdCB0YWlsWCA9IGhlYWRYO1xuLy8gICAgIGNvbnN0IHRhaWxZID0gaGVhZFkgKyBsIC0gMTtcbi8vICAgICBpZiAoaXNMZWdhbChoZWFkWCwgaGVhZFkpICE9PSBmYWxzZVxuLy8gICAgICYmIGlzTGVnYWwodGFpbFgsIHRhaWxZKSAhPT0gZmFsc2UpIHsgbWFya1NoaXAoZSwgbCk7IH1cbi8vICAgfSBlbHNlIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ3YnKSB7XG4vLyAgICAgY29uc3QgdGFpbFggPSBoZWFkWCArIGwgLSAxO1xuLy8gICAgIGNvbnN0IHRhaWxZID0gaGVhZFk7XG4vLyAgICAgaWYgKGlzTGVnYWwoaGVhZFgsIGhlYWRZKSAhPT0gZmFsc2Vcbi8vICAgICAmJiBpc0xlZ2FsKHRhaWxYLCB0YWlsWSkgIT09IGZhbHNlKSB7IG1hcmtTaGlwKGUsIGwpOyB9XG4vLyAgIH1cbi8vIH1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyQm9hcmQoYm9hcmQpIHtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGlmICh0eXBlb2YgYm9hcmRbaV1bal0gPT09ICdvYmplY3QnKSB7IHNoaXBzLnB1c2goYm9hcmRbaV1bal0pOyB9XG4gICAgfVxuICB9XG5cbiAgc2hpcHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGlmIChlLmF4aXMgPT09ICdoJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLnNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAke2UuY29vcmRbMF19JHtlLmNvb3JkWzFdICsgaX1gKTtcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS5zaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwJHtlLmNvb3JkWzBdICsgaX0ke2UuY29vcmRbMV19YCk7XG4gICAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllckF0dGFjayhpc0hpdCwgeFBvcywgeVBvcykge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZSR7eFBvc30ke3lQb3N9YCk7XG4gIGlmIChkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAnJykge1xuICAgIGlmIChpc0hpdCkgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIGVsc2UgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckVuZW15QXR0YWNrKGNvb3JkLCBpc0hpdCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7Y29vcmRbMF19JHtjb29yZFsxXX1gKTtcbiAgaWYgKGlzSGl0KSBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gIGVsc2UgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5cbiAgaWYgKG1vZGFsID09IG51bGwpIHJldHVybjtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5cbiAgaWYgKG1vZGFsID09IG51bGwpIHJldHVybjtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcldpbihwbGF5ZXIpIHtcbiAgY29uc3QgZ2FtZU92ZXJNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLW92ZXInKTtcbiAgZ2FtZU92ZXJNb2RhbC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQgPSBgJHtwbGF5ZXJ9IFdvbiFgO1xuICBvcGVuTW9kYWwoZ2FtZU92ZXJNb2RhbCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5ld0JvYXJkcygpIHtcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkJyk7XG4gIGJvYXJkcy5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkRGl2cyA9IGJvYXJkLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmREaXZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBib2FyZERpdnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRCb2FyZHMoKSB7XG4gIGNvbnN0IGdhbWVPdmVyTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1vdmVyJyk7XG4gIGNsb3NlTW9kYWwoZ2FtZU92ZXJNb2RhbCk7XG4gIHJlbmRlck5ld0JvYXJkcygpO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVCb2FyZCwgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlclBsYXllckF0dGFjaywgcmVuZGVyRW5lbXlBdHRhY2ssXG4gIHJlbmRlcldpbiwgY2xvc2VNb2RhbCwgb3Blbk1vZGFsLCByZXNldEJvYXJkcywgcm90YXRlQXhpcywgaG92ZXJPbiwgaG92ZXJPZmYsIG1hcmtTaGlwLCBpc0xlZ2FsLFxufTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KDEwKSwgKCkgPT4gQXJyYXkuZnJvbShBcnJheSgxMCkua2V5cygpKSk7XG4gICAgdGhpcy5taXNzZWRTaG90cyA9IFtdO1xuICB9XG5cbiAgcGxhY2VTaGlwKGNvcmQsIGwsIGEpIHtcbiAgICBjb25zdCB4ID0gY29yZFswXTtcbiAgICBjb25zdCB5ID0gY29yZFsxXTtcblxuICAgIHRoaXMuYm9hcmRbeF1beV0gPSB7XG4gICAgICBjb29yZDogW3gsIHldLFxuICAgICAgYXhpczogYCR7YX1gLFxuICAgICAgc2hpcDogbmV3IFNoaXAobCksXG4gICAgfTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2sodGFyZ2V0KSB7XG4gICAgLy8gY29uc3Qgc2hpcHMgPSB0aGlzLmJvYXJkLmZpbHRlcigoZSkgPT4gdHlwZW9mIGUgIT09ICdudW1iZXInKTtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgIGxldCBoaXRJc0NhbGxlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmJvYXJkW2ldW2pdID09PSAnb2JqZWN0JykgeyBzaGlwcy5wdXNoKHRoaXMuYm9hcmRbaV1bal0pOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2hpcHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgaWYgKGUuYXhpcyA9PT0gJ2gnKSB7XG4gICAgICAgIGlmICh0YXJnZXRbMF0gPT09IGUuY29vcmRbMF0pIHtcbiAgICAgICAgICBpZiAodGFyZ2V0WzFdID49IGUuY29vcmRbMV0gJiYgdGFyZ2V0WzFdIDw9IChlLmNvb3JkWzFdICsgZS5zaGlwLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICBlLnNoaXAuaGl0KHRhcmdldCk7XG4gICAgICAgICAgICBoaXRJc0NhbGxlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFsxXSA9PT0gZS5jb29yZFsxXSkge1xuICAgICAgICBpZiAodGFyZ2V0WzBdID49IGUuY29vcmRbMF0gJiYgdGFyZ2V0WzBdIDw9IChlLmNvb3JkWzBdICsgZS5zaGlwLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgZS5zaGlwLmhpdCh0YXJnZXQpO1xuICAgICAgICAgIGhpdElzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaGl0SXNDYWxsZWQpIHsgdGhpcy5taXNzZWRTaG90cy5wdXNoKHRhcmdldCk7IH1cbiAgICByZXR1cm4gaGl0SXNDYWxsZWQ7XG4gIH1cblxuICBhcmVBbGxTaGlwc1N1bmsoKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZFtpXVtqXSA9PT0gJ29iamVjdCcpIHsgc2hpcHMucHVzaCh0aGlzLmJvYXJkW2ldW2pdKTsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaGlwcy5ldmVyeSgoZSkgPT4gZS5zaGlwLmlzU3VuaygpID09PSB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KDEwKSwgKCkgPT4gQXJyYXkuZnJvbShBcnJheSgxMCkua2V5cygpKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbHJlYWR5SGl0Q29vcmRzID0gW107XG4gIH1cblxuICBpc0FscmVhZHlIaXQoY29vcmQpIHtcbiAgICBjb25zdCBjb29yZFN0ciA9IGNvb3JkLnRvU3RyaW5nKCk7XG5cbiAgICByZXR1cm4gKHRoaXMuYWxyZWFkeUhpdENvb3Jkcy5pbmNsdWRlcyhjb29yZFN0cikpO1xuICB9XG5cbiAgYXR0YWNrKGNvb3JkLCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBjb29yZFN0ciA9IGNvb3JkLnRvU3RyaW5nKCk7XG5cbiAgICAvLyBidXQgc2hpcC5oaXQoKSBhbHJlYWR5IGtub3dzIG5vdCB0byBzaG9vdCB0aGUgc2FtZSBjb29yZGluYXRlIHR3aWNlJ1xuICAgIGlmICh0aGlzLmlzQWxyZWFkeUhpdChjb29yZCkpIHJldHVybjtcblxuICAgIHRoaXMuYWxyZWFkeUhpdENvb3Jkcy5wdXNoKGNvb3JkU3RyKTtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICB9XG5cbiAgcmFuZG9tQXR0YWNrKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGNvb3JkID0gW107XG4gICAgbGV0IGNvb3JkU3RyID0gJyc7XG5cbiAgICBpZiAodGhpcy5hbHJlYWR5SGl0Q29vcmRzLmxlbmd0aCA9PT0gMTAwKSByZXR1cm47XG5cbiAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIHdoaWxlICh0aGlzLmlzQWxyZWFkeUhpdChbeCwgeV0pKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG5cbiAgICBjb29yZC5wdXNoKHgsIHkpO1xuICAgIGNvb3JkU3RyID0gY29vcmQudG9TdHJpbmcoKTtcbiAgICB0aGlzLmFscmVhZHlIaXRDb29yZHMucHVzaChjb29yZFN0cik7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNvb3JkLCBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbeCwgeV0pLFxuICAgIF07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgaGl0KGNvb3JkKSB7XG4gICAgY29uc3QgY29vcmRTdHIgPSBjb29yZC50b1N0cmluZygpO1xuXG4gICAgaWYgKHRoaXMuaGl0cy5pbmNsdWRlcyhjb29yZFN0cikpIHJldHVybjtcbiAgICB0aGlzLmhpdHMucHVzaChjb29yZFN0cik7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cy5sZW5ndGggPT09IHRoaXMubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBjcmVhdGVCb2FyZCwgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlclBsYXllckF0dGFjayxcbiAgcmVuZGVyRW5lbXlBdHRhY2ssIHJlbmRlcldpbiwgcmVzZXRCb2FyZHMsIHJvdGF0ZUF4aXMsXG4gIGhvdmVyT24sIGhvdmVyT2ZmLCBtYXJrU2hpcCwgcGxhY2VTaGlwLCBpc0xlZ2FsLCBjbG9zZU1vZGFsLFxuICBvcGVuTW9kYWwsXG59IGZyb20gJy4vRE9NJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9mYWN0b3JpZXMvR2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9mYWN0b3JpZXMvUGxheWVyJztcblxud2luZG93Lm9ubG9hZCA9IGNyZWF0ZUJvYXJkKDEwKTtcblxuY29uc3QgcGxhY2VtZW50RGl2cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLnBsYWNlbWVudCcpLmNoaWxkcmVuKTtcbmNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGUtYnRuJyk7XG5jb25zdCBlbmVteUJvYXJkRGl2cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLmVuZW15JykuY2hpbGRyZW4pO1xuY29uc3QgcmVwbGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcGxheS1idG4nKTtcbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllcicpO1xuY29uc3QgZW5lbXkgPSBuZXcgUGxheWVyKCdFbmVteScpO1xuY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5jb25zdCBlbmVteUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG5lbmVteUJvYXJkLnBsYWNlU2hpcChbMCwgM10sIDUsICdoJyk7XG5lbmVteUJvYXJkLnBsYWNlU2hpcChbMCwgMF0sIDQsICd2Jyk7XG5lbmVteUJvYXJkLnBsYWNlU2hpcChbMywgNV0sIDMsICdoJyk7XG5lbmVteUJvYXJkLnBsYWNlU2hpcChbNiwgMV0sIDMsICdoJyk7XG5lbmVteUJvYXJkLnBsYWNlU2hpcChbOSwgNV0sIDIsICdoJyk7XG5cbnBsYWNlbWVudERpdnMuZm9yRWFjaCgocGxhY2VtZW50RGl2KSA9PiBwbGFjZW1lbnREaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XG4gIGNvbnN0IGxlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IGNsaWNrQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGljay1jb3VudGVyJyk7XG4gIGNvbnN0IGwgPSBsZW5ndGhzW3BhcnNlSW50KGNsaWNrQ291bnRlci5pbm5lclRleHQpXTtcblxuICBob3Zlck9uKGUsIGwpO1xufSkpO1xuXG5wbGFjZW1lbnREaXZzLmZvckVhY2goKHBsYWNlbWVudERpdikgPT4gcGxhY2VtZW50RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICBjb25zdCBsZW5ndGhzID0gWzUsIDQsIDMsIDMsIDJdO1xuICBjb25zdCBjbGlja0NvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpY2stY291bnRlcicpO1xuICBjb25zdCBsID0gbGVuZ3Roc1twYXJzZUludChjbGlja0NvdW50ZXIuaW5uZXJUZXh0KV07XG5cbiAgaG92ZXJPZmYoZSwgbCk7XG59KSk7XG5cbnJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcm90YXRlQXhpcygpO1xufSk7XG5cbnBsYWNlbWVudERpdnMuZm9yRWFjaCgocGxhY2VtZW50RGl2KSA9PiB7XG4gIHBsYWNlbWVudERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc3RhcnQnKTtcbiAgICBjb25zdCBsZW5ndGhzID0gWzUsIDQsIDMsIDMsIDJdO1xuICAgIGNvbnN0IGNsaWNrQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGljay1jb3VudGVyJyk7XG4gICAgY29uc3QgbCA9IGxlbmd0aHNbcGFyc2VJbnQoY2xpY2tDb3VudGVyLmlubmVyVGV4dCldO1xuXG4gICAgLy8gcGxhY2VTaGlwKGUsIGwpO1xuICAgIGNvbnN0IGF4aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcycpO1xuICAgIGNvbnN0IHN0ciA9IGUudGFyZ2V0LmlkO1xuICAgIGNvbnN0IGhlYWRYID0gcGFyc2VJbnQoc3RyWzBdKTtcbiAgICBjb25zdCBoZWFkWSA9IHBhcnNlSW50KHN0clsxXSk7XG5cbiAgICBpZiAoYXhpcy5pbm5lclRleHQgPT09ICdoJykge1xuICAgICAgY29uc3QgdGFpbFggPSBoZWFkWDtcbiAgICAgIGNvbnN0IHRhaWxZID0gaGVhZFkgKyBsIC0gMTtcbiAgICAgIGlmIChpc0xlZ2FsKGhlYWRYLCBoZWFkWSkgIT09IGZhbHNlXG4gICAgICAmJiBpc0xlZ2FsKHRhaWxYLCB0YWlsWSkgIT09IGZhbHNlXG4gICAgICAmJiAoaGVhZFkgKyBsIC0gMSkgPD0gOSkge1xuICAgICAgICBtYXJrU2hpcChlLCBsKTtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFtoZWFkWCwgaGVhZFldLCBsLCBheGlzLmlubmVyVGV4dCk7XG4gICAgICAgIHJlbmRlclBsYXllckJvYXJkKHBsYXllckJvYXJkLmJvYXJkKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF4aXMuaW5uZXJUZXh0ID09PSAndicpIHtcbiAgICAgIGNvbnN0IHRhaWxYID0gaGVhZFggKyBsIC0gMTtcbiAgICAgIGNvbnN0IHRhaWxZID0gaGVhZFk7XG4gICAgICBpZiAoaXNMZWdhbChoZWFkWCwgaGVhZFkpICE9PSBmYWxzZVxuICAgICAgJiYgaXNMZWdhbCh0YWlsWCwgdGFpbFkpICE9PSBmYWxzZVxuICAgICAgJiYgKGhlYWRYICsgbCAtIDEpIDw9IDkpIHtcbiAgICAgICAgbWFya1NoaXAoZSwgbCk7XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChbaGVhZFgsIGhlYWRZXSwgbCwgYXhpcy5pbm5lclRleHQpO1xuICAgICAgICByZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXJCb2FyZC5ib2FyZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlSW50KGNsaWNrQ291bnRlci5pbm5lclRleHQpID09PSA1KSB7XG4gICAgICBjbG9zZU1vZGFsKGdhbWVTdGFydCk7XG4gICAgICBjbGlja0NvdW50ZXIuaW5uZXJUZXh0ID0gMDtcbiAgICAgIGF4aXMuaW5uZXJUZXh0ID0gJ2gnO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZW5lbXlCb2FyZERpdnMuZm9yRWFjaCgoZW5lbXlCb2FyZERpdikgPT4ge1xuICBlbmVteUJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBzdHIgPSBlLnRhcmdldC5pZC5zbGljZSgxKTtcbiAgICBjb25zdCB4UG9zID0gcGFyc2VJbnQoc3RyWzBdKTtcbiAgICBjb25zdCB5UG9zID0gcGFyc2VJbnQoc3RyWzFdKTtcblxuICAgIGNvbnN0IHBsYXllckhpdCA9IHBsYXllci5hdHRhY2soW3hQb3MsIHlQb3NdLCBlbmVteUJvYXJkKTtcbiAgICByZW5kZXJQbGF5ZXJBdHRhY2socGxheWVySGl0LCB4UG9zLCB5UG9zKTtcblxuICAgIGlmIChwbGF5ZXJIaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZW5lbXlIaXQgPSBlbmVteS5yYW5kb21BdHRhY2socGxheWVyQm9hcmQpO1xuICAgICAgcmVuZGVyRW5lbXlBdHRhY2soZW5lbXlIaXRbMF0sIGVuZW15SGl0WzFdKTtcbiAgICB9XG4gICAgaWYgKHBsYXllckJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSByZW5kZXJXaW4oZW5lbXkubmFtZSk7XG4gICAgZWxzZSBpZiAoZW5lbXlCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkgcmVuZGVyV2luKHBsYXllci5uYW1lKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==