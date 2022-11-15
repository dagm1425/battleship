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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n#header {\n    font-family: 'Big Shoulders Stencil Text', cursive;\n    font-size: 6rem;\n    letter-spacing: 0.25rem;\n    text-align: center;\n    padding: 3rem 1.5rem; \n}\n\n#boards-wrapper {\n    display: flex;\n    width: 824px;\n    height: 380px;\n    gap: 4rem;\n    justify-content: center;\n    margin: 2rem auto;\n}\n\n.board {\n    display: grid;\n    background-color: #000;\n    grid-gap: 2px;\n    border: solid 2px #000;\n    width: 100%;\n    height: 100%;\n}\n\n.board-divs {\n    background-color: #fff;\n}\n\n.board-divs:hover {\n    filter: brightness(.9);\n}\n\n.modal {\n    position: fixed;\n    top: 35%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    transition: 200ms ease-in-out;\n    border: 1px solid black;\n    border-radius: 10px;\n    z-index: 10;\n    background-color: white;\n    width: 420px;\n    max-width: 80%;\n    padding: 3rem 1.5rem;\n    text-align: center;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.board.placement {\n    height: 340px;\n    width: 340px;\n    margin: 1.5rem auto 0;\n}\n\n#game-start h1 {\n    margin-bottom: 0.75rem;\n}\n\n.primary-btn {\n    color: #fff;\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 0.75rem;\n    margin-top: 1.75rem;\n    background-color: #000;\n    border: none;\n    border-radius: 25px;\n    cursor: pointer;\n}\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    transition: 200ms ease-in-out;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .5);\n    pointer-events: none;\n}\n\n#overlay.active {\n    opacity: 1;\n    pointer-events: all;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAGA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,qCAAqC;EACvC;;AAEF;IACI,kDAAkD;IAClD,eAAe;IACf,uBAAuB;IACvB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,cAAc;IACd,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,6BAA6B;IAC7B,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');\n\n*, *::after, *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n#header {\n    font-family: 'Big Shoulders Stencil Text', cursive;\n    font-size: 6rem;\n    letter-spacing: 0.25rem;\n    text-align: center;\n    padding: 3rem 1.5rem; \n}\n\n#boards-wrapper {\n    display: flex;\n    width: 824px;\n    height: 380px;\n    gap: 4rem;\n    justify-content: center;\n    margin: 2rem auto;\n}\n\n.board {\n    display: grid;\n    background-color: #000;\n    grid-gap: 2px;\n    border: solid 2px #000;\n    width: 100%;\n    height: 100%;\n}\n\n.board-divs {\n    background-color: #fff;\n}\n\n.board-divs:hover {\n    filter: brightness(.9);\n}\n\n.modal {\n    position: fixed;\n    top: 35%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    transition: 200ms ease-in-out;\n    border: 1px solid black;\n    border-radius: 10px;\n    z-index: 10;\n    background-color: white;\n    width: 420px;\n    max-width: 80%;\n    padding: 3rem 1.5rem;\n    text-align: center;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.board.placement {\n    height: 340px;\n    width: 340px;\n    margin: 1.5rem auto 0;\n}\n\n#game-start h1 {\n    margin-bottom: 0.75rem;\n}\n\n.primary-btn {\n    color: #fff;\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 0.75rem;\n    margin-top: 1.75rem;\n    background-color: #000;\n    border: none;\n    border-radius: 25px;\n    cursor: pointer;\n}\n\n#overlay {\n    position: fixed;\n    opacity: 0;\n    transition: 200ms ease-in-out;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .5);\n    pointer-events: none;\n}\n\n#overlay.active {\n    opacity: 1;\n    pointer-events: all;\n}"],"sourceRoot":""}]);
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
        if (div.style.backgroundColor === '') { div.style.backgroundColor = 'rgb(28, 241, 213)'; }
      }
    }
  } else if (axis.innerText === 'v') {
    if ((xPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos + i}${yPos}`);
        if (div.style.backgroundColor === '') { div.style.backgroundColor = 'rgb(28, 241, 213)'; }
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
        if (div.style.backgroundColor === 'rgb(28, 241, 213)') { div.style.backgroundColor = ''; }
      }
    }
  } else if (axis.innerText === 'v') {
    if ((xPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos + i}${yPos}`);
        if (div.style.backgroundColor === 'rgb(28, 241, 213)') { div.style.backgroundColor = ''; }
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
      div.style.backgroundColor = 'rgb(118, 143, 156)';
    }
  } else {
    for (let i = 0; i < l; i++) {
      const div = document.getElementById(`${xPos + i}${yPos}`);
      div.style.backgroundColor = 'rgb(118, 143, 156)';
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
        div.style.backgroundColor = 'rgb(118, 143, 156)';
      }
    } else {
      for (let i = 0; i < e.ship.length; i++) {
        const div = document.getElementById(`p${e.coord[0] + i}${e.coord[1]}`);
        div.style.backgroundColor = 'rgb(118, 143, 156)';
      }
    }
  });
}

function renderPlayerAttack(isHit, xPos, yPos) {
  const div = document.getElementById(`e${xPos}${yPos}`);
  if (div.style.backgroundColor === '') {
    if (isHit) div.style.backgroundColor = 'rgb(255, 45, 0)';
    else div.style.backgroundColor = 'rgb(218, 247, 166)';
  }
}

function renderEnemyAttack(coord, isHit) {
  const div = document.getElementById(`p${coord[0]}${coord[1]}`);
  if (isHit) div.style.backgroundColor = 'rgb(255, 45, 0)';
  else div.style.backgroundColor = 'rgb(218, 247, 166)';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsRDs7QUFLRTs7Ozs7OztVQ3pKRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDRWU7QUFJQztBQUM4QjtBQUNOOztBQUV4QyxnQkFBZ0IsaURBQVc7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFNO0FBQ3pCLGtCQUFrQix5REFBTTtBQUN4Qix3QkFBd0IsNERBQVM7QUFDakMsdUJBQXVCLDREQUFTOztBQUVoQztBQUNBLEVBQUUsNkNBQU87QUFDVCxDQUFDOztBQUVEO0FBQ0EsRUFBRSw4Q0FBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQSxFQUFFLGdEQUFVO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSwrREFBd0I7QUFDNUIsSUFBSSx3REFBaUI7QUFDckIsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksa0VBQTJCO0FBQy9CLElBQUksbURBQVk7QUFDaEIsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxpREFBVztBQUNiO0FBQ0E7QUFDQSxFQUFFLCtDQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaWcrU2hvdWxkZXJzK1N0ZW5jaWwrVGV4dDp3Z2h0QDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIH1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCaWcgU2hvdWxkZXJzIFN0ZW5jaWwgVGV4dCcsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogM3JlbSAxLjVyZW07IFxcbn1cXG5cXG4jYm9hcmRzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODI0cHg7XFxuICAgIGhlaWdodDogMzgwcHg7XFxuICAgIGdhcDogNHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBncmlkLWdhcDogMnB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMDAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYm9hcmQtZGl2cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5ib2FyZC1kaXZzOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKC45KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDM1JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA0MjBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDNyZW0gMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuLmJvYXJkLnBsYWNlbWVudCB7XFxuICAgIGhlaWdodDogMzQwcHg7XFxuICAgIHdpZHRoOiAzNDBweDtcXG4gICAgbWFyZ2luOiAxLjVyZW0gYXV0byAwO1xcbn1cXG5cXG4jZ2FtZS1zdGFydCBoMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxufVxcblxcbi5wcmltYXJ5LWJ0biB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI292ZXJsYXkuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixxQ0FBcUM7RUFDdkM7O0FBRUY7SUFDSSxrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCx5Q0FBeUM7SUFDekMsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaWcrU2hvdWxkZXJzK1N0ZW5jaWwrVGV4dDp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIH1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCaWcgU2hvdWxkZXJzIFN0ZW5jaWwgVGV4dCcsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogM3JlbSAxLjVyZW07IFxcbn1cXG5cXG4jYm9hcmRzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODI0cHg7XFxuICAgIGhlaWdodDogMzgwcHg7XFxuICAgIGdhcDogNHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBncmlkLWdhcDogMnB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMDAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYm9hcmQtZGl2cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5ib2FyZC1kaXZzOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKC45KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDM1JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA0MjBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDNyZW0gMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuLmJvYXJkLnBsYWNlbWVudCB7XFxuICAgIGhlaWdodDogMzQwcHg7XFxuICAgIHdpZHRoOiAzNDBweDtcXG4gICAgbWFyZ2luOiAxLjVyZW0gYXV0byAwO1xcbn1cXG5cXG4jZ2FtZS1zdGFydCBoMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxufVxcblxcbi5wcmltYXJ5LWJ0biB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI292ZXJsYXkuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlQm9hcmQobikge1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKTtcblxuICBib2FyZHMuZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICBib2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke259LCAxZnIpYDtcbiAgICBib2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke259LCAxZnIpYDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG4pOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgKG4pOyBqKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdib2FyZC1kaXZzJyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGlmIChib2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllcicpKSB7XG4gICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgcCR7aX0ke2p9YCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmVteScpKSB7XG4gICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgZSR7aX0ke2p9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfSR7an1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhvdmVyT24oZSkge1xuICBjb25zdCBheGlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F4aXMnKTtcbiAgY29uc3Qgc3RyID0gZS50YXJnZXQuaWQ7XG4gIGNvbnN0IHhQb3MgPSBwYXJzZUludChzdHJbMF0pO1xuICBjb25zdCB5UG9zID0gcGFyc2VJbnQoc3RyWzFdKTtcbiAgY29uc3QgbGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3QgY2xpY2tDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWNrLWNvdW50ZXInKTtcbiAgY29uc3QgbCA9IGxlbmd0aHNbcGFyc2VJbnQoY2xpY2tDb3VudGVyLmlubmVyVGV4dCldO1xuXG4gIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ2gnKSB7XG4gICAgaWYgKCh5UG9zICsgbCAtIDEpIDw9IDkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3hQb3N9JHt5UG9zICsgaX1gKTtcbiAgICAgICAgaWYgKGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICcnKSB7IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDI4LCAyNDEsIDIxMyknOyB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGF4aXMuaW5uZXJUZXh0ID09PSAndicpIHtcbiAgICBpZiAoKHhQb3MgKyBsIC0gMSkgPD0gOSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eFBvcyArIGl9JHt5UG9zfWApO1xuICAgICAgICBpZiAoZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJycpIHsgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjgsIDI0MSwgMjEzKSc7IH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaG92ZXJPZmYoZSkge1xuICBjb25zdCBheGlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F4aXMnKTtcbiAgY29uc3Qgc3RyID0gZS50YXJnZXQuaWQ7XG4gIGNvbnN0IHhQb3MgPSBwYXJzZUludChzdHJbMF0pO1xuICBjb25zdCB5UG9zID0gcGFyc2VJbnQoc3RyWzFdKTtcbiAgY29uc3QgbGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3QgY2xpY2tDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWNrLWNvdW50ZXInKTtcbiAgY29uc3QgbCA9IGxlbmd0aHNbcGFyc2VJbnQoY2xpY2tDb3VudGVyLmlubmVyVGV4dCldO1xuXG4gIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ2gnKSB7XG4gICAgaWYgKCh5UG9zICsgbCAtIDEpIDw9IDkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3hQb3N9JHt5UG9zICsgaX1gKTtcbiAgICAgICAgaWYgKGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICdyZ2IoMjgsIDI0MSwgMjEzKScpIHsgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnOyB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGF4aXMuaW5uZXJUZXh0ID09PSAndicpIHtcbiAgICBpZiAoKHhQb3MgKyBsIC0gMSkgPD0gOSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eFBvcyArIGl9JHt5UG9zfWApO1xuICAgICAgICBpZiAoZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3JnYigyOCwgMjQxLCAyMTMpJykgeyBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7IH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcm90YXRlQXhpcygpIHtcbiAgY29uc3QgYXhpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzJyk7XG4gIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ2gnKSByZXR1cm4gYXhpcy5pbm5lclRleHQgPSAndic7XG4gIGF4aXMuaW5uZXJUZXh0ID0gJ2gnO1xufVxuXG5mdW5jdGlvbiBtYXJrU2hpcChlLCBsKSB7XG4gIGNvbnN0IGF4aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcycpO1xuICBjb25zdCBzdHIgPSBlLnRhcmdldC5pZDtcbiAgY29uc3QgeFBvcyA9IHBhcnNlSW50KHN0clswXSk7XG4gIGNvbnN0IHlQb3MgPSBwYXJzZUludChzdHJbMV0pO1xuXG4gIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ2gnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3hQb3N9JHt5UG9zICsgaX1gKTtcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDExOCwgMTQzLCAxNTYpJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3hQb3MgKyBpfSR7eVBvc31gKTtcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDExOCwgMTQzLCAxNTYpJztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyQm9hcmQoYm9hcmQpIHtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGlmICh0eXBlb2YgYm9hcmRbaV1bal0gPT09ICdvYmplY3QnKSB7IHNoaXBzLnB1c2goYm9hcmRbaV1bal0pOyB9XG4gICAgfVxuICB9XG5cbiAgc2hpcHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGlmIChlLmF4aXMgPT09ICdoJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLnNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAke2UuY29vcmRbMF19JHtlLmNvb3JkWzFdICsgaX1gKTtcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMTE4LCAxNDMsIDE1NiknO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7ZS5jb29yZFswXSArIGl9JHtlLmNvb3JkWzFdfWApO1xuICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxMTgsIDE0MywgMTU2KSc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyQXR0YWNrKGlzSGl0LCB4UG9zLCB5UG9zKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlJHt4UG9zfSR7eVBvc31gKTtcbiAgaWYgKGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICcnKSB7XG4gICAgaWYgKGlzSGl0KSBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNTUsIDQ1LCAwKSc7XG4gICAgZWxzZSBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyMTgsIDI0NywgMTY2KSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyRW5lbXlBdHRhY2soY29vcmQsIGlzSGl0KSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwJHtjb29yZFswXX0ke2Nvb3JkWzFdfWApO1xuICBpZiAoaXNIaXQpIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDI1NSwgNDUsIDApJztcbiAgZWxzZSBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyMTgsIDI0NywgMTY2KSc7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcblxuICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcblxuICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuO1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyV2luKHBsYXllcikge1xuICBjb25zdCBnYW1lT3Zlck1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtb3ZlcicpO1xuICBnYW1lT3Zlck1vZGFsLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dCA9IGAke3BsYXllcn0gV29uIWA7XG4gIG9wZW5Nb2RhbChnYW1lT3Zlck1vZGFsKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmV3Qm9hcmRzKCkge1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKTtcbiAgYm9hcmRzLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgYm9hcmREaXZzID0gYm9hcmQuY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZERpdnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJvYXJkRGl2c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNldEJvYXJkcygpIHtcbiAgY29uc3QgZ2FtZU92ZXJNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLW92ZXInKTtcbiAgY2xvc2VNb2RhbChnYW1lT3Zlck1vZGFsKTtcbiAgcmVuZGVyTmV3Qm9hcmRzKCk7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUJvYXJkLCByZW5kZXJQbGF5ZXJCb2FyZCwgcmVuZGVyUGxheWVyQXR0YWNrLCByZW5kZXJFbmVteUF0dGFjayxcbiAgcmVuZGVyV2luLCBjbG9zZU1vZGFsLCBvcGVuTW9kYWwsIHJlc2V0Qm9hcmRzLCByb3RhdGVBeGlzLCBob3Zlck9uLCBob3Zlck9mZiwgbWFya1NoaXAsXG59O1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oQXJyYXkoMTApLCAoKSA9PiBBcnJheS5mcm9tKEFycmF5KDEwKS5rZXlzKCkpKTtcbiAgICB0aGlzLm1pc3NlZFNob3RzID0gW107XG4gIH1cblxuICBwbGFjZVNoaXAoY29yZCwgbCwgYSkge1xuICAgIGNvbnN0IHggPSBjb3JkWzBdO1xuICAgIGNvbnN0IHkgPSBjb3JkWzFdO1xuXG4gICAgdGhpcy5ib2FyZFt4XVt5XSA9IHtcbiAgICAgIGNvb3JkOiBbeCwgeV0sXG4gICAgICBheGlzOiBgJHthfWAsXG4gICAgICBzaGlwOiBuZXcgU2hpcChsKSxcbiAgICB9O1xuXG4gICAgaWYgKGEgPT09ICdoJykge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5ICsgaV0gPSAneCc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldID0gJ3gnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2sodGFyZ2V0KSB7XG4gICAgLy8gY29uc3Qgc2hpcHMgPSB0aGlzLmJvYXJkLmZpbHRlcigoZSkgPT4gdHlwZW9mIGUgIT09ICdudW1iZXInKTtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgIGxldCBoaXRJc0NhbGxlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmJvYXJkW2ldW2pdID09PSAnb2JqZWN0JykgeyBzaGlwcy5wdXNoKHRoaXMuYm9hcmRbaV1bal0pOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2hpcHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgaWYgKGUuYXhpcyA9PT0gJ2gnKSB7XG4gICAgICAgIGlmICh0YXJnZXRbMF0gPT09IGUuY29vcmRbMF0pIHtcbiAgICAgICAgICBpZiAodGFyZ2V0WzFdID49IGUuY29vcmRbMV0gJiYgdGFyZ2V0WzFdIDw9IChlLmNvb3JkWzFdICsgZS5zaGlwLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICBlLnNoaXAuaGl0KHRhcmdldCk7XG4gICAgICAgICAgICBoaXRJc0NhbGxlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFsxXSA9PT0gZS5jb29yZFsxXSkge1xuICAgICAgICBpZiAodGFyZ2V0WzBdID49IGUuY29vcmRbMF0gJiYgdGFyZ2V0WzBdIDw9IChlLmNvb3JkWzBdICsgZS5zaGlwLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgZS5zaGlwLmhpdCh0YXJnZXQpO1xuICAgICAgICAgIGhpdElzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaGl0SXNDYWxsZWQpIHsgdGhpcy5taXNzZWRTaG90cy5wdXNoKHRhcmdldCk7IH1cbiAgICByZXR1cm4gaGl0SXNDYWxsZWQ7XG4gIH1cblxuICBhcmVBbGxTaGlwc1N1bmsoKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZFtpXVtqXSA9PT0gJ29iamVjdCcpIHsgc2hpcHMucHVzaCh0aGlzLmJvYXJkW2ldW2pdKTsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaGlwcy5ldmVyeSgoZSkgPT4gZS5zaGlwLmlzU3VuaygpID09PSB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KDEwKSwgKCkgPT4gQXJyYXkuZnJvbShBcnJheSgxMCkua2V5cygpKSk7XG4gICAgdGhpcy5taXNzZWRTaG90cyA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYWxyZWFkeUhpdENvb3JkcyA9IFtdO1xuICB9XG5cbiAgaXNBbHJlYWR5SGl0KGNvb3JkKSB7XG4gICAgY29uc3QgY29vcmRTdHIgPSBjb29yZC50b1N0cmluZygpO1xuXG4gICAgcmV0dXJuICh0aGlzLmFscmVhZHlIaXRDb29yZHMuaW5jbHVkZXMoY29vcmRTdHIpKTtcbiAgfVxuXG4gIGF0dGFjayhjb29yZCwgZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgY29vcmRTdHIgPSBjb29yZC50b1N0cmluZygpO1xuICAgIGlmICh0aGlzLmlzQWxyZWFkeUhpdChjb29yZCkpIHJldHVybjtcblxuICAgIHRoaXMuYWxyZWFkeUhpdENvb3Jkcy5wdXNoKGNvb3JkU3RyKTtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICB9XG5cbiAgcmFuZG9tQXR0YWNrKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGNvb3JkID0gW107XG4gICAgbGV0IGNvb3JkU3RyID0gJyc7XG5cbiAgICBpZiAodGhpcy5hbHJlYWR5SGl0Q29vcmRzLmxlbmd0aCA9PT0gMTAwKSByZXR1cm47XG5cbiAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIHdoaWxlICh0aGlzLmlzQWxyZWFkeUhpdChbeCwgeV0pKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG5cbiAgICBjb29yZC5wdXNoKHgsIHkpO1xuICAgIGNvb3JkU3RyID0gY29vcmQudG9TdHJpbmcoKTtcbiAgICB0aGlzLmFscmVhZHlIaXRDb29yZHMucHVzaChjb29yZFN0cik7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNvb3JkLCBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbeCwgeV0pLFxuICAgIF07XG4gIH1cblxuICByZXNldEFscmVhZHlIaXRDb29yZHMoKSB7XG4gICAgdGhpcy5hbHJlYWR5SGl0Q29vcmRzID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgaGl0KGNvb3JkKSB7XG4gICAgY29uc3QgY29vcmRTdHIgPSBjb29yZC50b1N0cmluZygpO1xuXG4gICAgaWYgKHRoaXMuaGl0cy5pbmNsdWRlcyhjb29yZFN0cikpIHJldHVybjtcbiAgICB0aGlzLmhpdHMucHVzaChjb29yZFN0cik7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cy5sZW5ndGggPT09IHRoaXMubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQge1xuICBjbG9zZU1vZGFsLCBtYXJrU2hpcCwgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlclBsYXllckF0dGFjaywgcmVuZGVyRW5lbXlBdHRhY2ssIHJlbmRlcldpbixcbn0gZnJvbSAnLi9ET00nO1xuXG5mdW5jdGlvbiBpc0luQm9hcmQoeCwgeSkge1xuICBpZiAoeCA+PSAwICYmIHggPD0gOSAmJiB5ID49IDAgJiYgeSA8PSA5KSB7IHJldHVybiB0cnVlOyB9XG59XG5cbmZ1bmN0aW9uIGlzTGVnYWwoeFBvcywgeVBvcywgcGxheWVyQm9hcmQpIHtcbiAgY29uc3QgZHggPSBbLTEsIC0xLCAtMSwgMCwgMCwgMSwgMSwgMV07XG4gIGNvbnN0IGR5ID0gWy0xLCAwLCAxLCAtMSwgMSwgLTEsIDAsIDFdO1xuICBsZXQgbGVnYWwgPSB0cnVlO1xuICBsZXQgeDtcbiAgbGV0IHk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkeC5sZW5ndGg7IGkrKykge1xuICAgIHggPSB4UG9zICsgZHhbaV07XG4gICAgeSA9IHlQb3MgKyBkeVtpXTtcbiAgICBpZiAoaXNJbkJvYXJkKHgsIHkpKSB7XG4gICAgICBpZiAodHlwZW9mIHBsYXllckJvYXJkLmJvYXJkW3hdW3ldICE9PSAnbnVtYmVyJykgbGVnYWwgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVnYWw7XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENsaWNrKCkge1xuICBjb25zdCBjbGlja0NvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpY2stY291bnRlcicpO1xuICBjbGlja0NvdW50ZXIuaW5uZXJUZXh0ID0gcGFyc2VJbnQoY2xpY2tDb3VudGVyLmlubmVyVGV4dCkgKyAxO1xufVxuXG5mdW5jdGlvbiBjaGVja1BsYWNlbWVudEVuZCgpIHtcbiAgY29uc3QgY2xpY2tDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWNrLWNvdW50ZXInKTtcbiAgY29uc3QgZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc3RhcnQnKTtcbiAgY29uc3QgYXhpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzJyk7XG5cbiAgaWYgKHBhcnNlSW50KGNsaWNrQ291bnRlci5pbm5lclRleHQpID09PSA1KSB7XG4gICAgY2xvc2VNb2RhbChnYW1lU3RhcnQpO1xuICAgIGNsaWNrQ291bnRlci5pbm5lclRleHQgPSAwO1xuICAgIGF4aXMuaW5uZXJUZXh0ID0gJ2gnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFyZ2V0KGVuZW15Qm9hcmQsIGwpIHtcbiAgY29uc3QgYXhlcyA9IFsnaCcsICd2J107XG4gIGNvbnN0IGF4aXMgPSBheGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcbiAgbGV0IGhlYWRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgaGVhZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCB0YWlsWDtcbiAgbGV0IHRhaWxZO1xuXG4gIGlmIChheGlzID09PSAnaCcpIHtcbiAgICB0YWlsWCA9IGhlYWRYO1xuICAgIHRhaWxZID0gaGVhZFkgKyBsIC0gMTtcblxuICAgIHdoaWxlICh0eXBlb2YgZW5lbXlCb2FyZC5ib2FyZFtoZWFkWF1baGVhZFldICE9PSAnbnVtYmVyJ1xuICAgIHx8IGlzTGVnYWwoaGVhZFgsIGhlYWRZLCBlbmVteUJvYXJkKSA9PT0gZmFsc2VcbiAgICB8fCBpc0xlZ2FsKHRhaWxYLCB0YWlsWSwgZW5lbXlCb2FyZCkgPT09IGZhbHNlXG4gICAgfHwgdGFpbFkgPiA5KSB7XG4gICAgICBoZWFkWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGhlYWRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgdGFpbFggPSBoZWFkWDtcbiAgICAgIHRhaWxZID0gaGVhZFkgKyBsIC0gMTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3YnKSB7XG4gICAgdGFpbFggPSBoZWFkWCArIGwgLSAxO1xuICAgIHRhaWxZID0gaGVhZFk7XG5cbiAgICB3aGlsZSAodHlwZW9mIGVuZW15Qm9hcmQuYm9hcmRbaGVhZFhdW2hlYWRZXSAhPT0gJ251bWJlcidcbiAgICB8fCBpc0xlZ2FsKGhlYWRYLCBoZWFkWSwgZW5lbXlCb2FyZCkgPT09IGZhbHNlXG4gICAgfHwgaXNMZWdhbCh0YWlsWCwgdGFpbFksIGVuZW15Qm9hcmQpID09PSBmYWxzZVxuICAgIHx8IHRhaWxYID4gOSkge1xuICAgICAgaGVhZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBoZWFkWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHRhaWxYID0gaGVhZFggKyBsIC0gMTtcbiAgICAgIHRhaWxZID0gaGVhZFk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtoZWFkWCwgaGVhZFksIGF4aXNdO1xufVxuXG5mdW5jdGlvbiBwbGFjZUVuZW15U2hpcChlbmVteUJvYXJkKSB7XG4gIGNvbnN0IGxlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IGNsaWNrQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGljay1jb3VudGVyJyk7XG4gIGNvbnN0IGwgPSBsZW5ndGhzW3BhcnNlSW50KGNsaWNrQ291bnRlci5pbm5lclRleHQpXTtcblxuICBjb25zdCB0YXJnZXQgPSBnZW5lcmF0ZVRhcmdldChlbmVteUJvYXJkLCBsKTtcbiAgY29uc3QgaGVhZFggPSB0YXJnZXRbMF07XG4gIGNvbnN0IGhlYWRZID0gdGFyZ2V0WzFdO1xuICBjb25zdCBheGlzID0gdGFyZ2V0WzJdO1xuXG4gIGVuZW15Qm9hcmQucGxhY2VTaGlwKFtoZWFkWCwgaGVhZFldLCBsLCBheGlzKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VQbGF5ZXJBbmRFbmVteVNoaXBzKGUsIHBsYXllckJvYXJkLCBlbmVteUJvYXJkKSB7XG4gIGNvbnN0IGxlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IGNsaWNrQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGljay1jb3VudGVyJyk7XG4gIGNvbnN0IGwgPSBsZW5ndGhzW3BhcnNlSW50KGNsaWNrQ291bnRlci5pbm5lclRleHQpXTtcbiAgY29uc3QgYXhpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzJyk7XG4gIGNvbnN0IHN0ciA9IGUudGFyZ2V0LmlkO1xuICBjb25zdCBoZWFkWCA9IHBhcnNlSW50KHN0clswXSk7XG4gIGNvbnN0IGhlYWRZID0gcGFyc2VJbnQoc3RyWzFdKTtcblxuICBpZiAoYXhpcy5pbm5lclRleHQgPT09ICdoJykge1xuICAgIGNvbnN0IHRhaWxYID0gaGVhZFg7XG4gICAgY29uc3QgdGFpbFkgPSBoZWFkWSArIGwgLSAxO1xuICAgIGlmIChpc0xlZ2FsKGhlYWRYLCBoZWFkWSwgcGxheWVyQm9hcmQpXG4gICAgICAmJiBpc0xlZ2FsKHRhaWxYLCB0YWlsWSwgcGxheWVyQm9hcmQpXG4gICAgICAmJiB0YWlsWSA8PSA5KSB7XG4gICAgICBtYXJrU2hpcChlLCBsKTtcbiAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChbaGVhZFgsIGhlYWRZXSwgbCwgYXhpcy5pbm5lclRleHQpO1xuICAgICAgcmVuZGVyUGxheWVyQm9hcmQocGxheWVyQm9hcmQuYm9hcmQpO1xuICAgICAgcGxhY2VFbmVteVNoaXAoZW5lbXlCb2FyZCk7XG4gICAgICBpbmNyZW1lbnRDbGljaygpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChheGlzLmlubmVyVGV4dCA9PT0gJ3YnKSB7XG4gICAgY29uc3QgdGFpbFggPSBoZWFkWCArIGwgLSAxO1xuICAgIGNvbnN0IHRhaWxZID0gaGVhZFk7XG4gICAgaWYgKGlzTGVnYWwoaGVhZFgsIGhlYWRZLCBwbGF5ZXJCb2FyZClcbiAgICAgICYmIGlzTGVnYWwodGFpbFgsIHRhaWxZLCBwbGF5ZXJCb2FyZClcbiAgICAgICYmIHRhaWxYIDw9IDkpIHtcbiAgICAgIG1hcmtTaGlwKGUsIGwpO1xuICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFtoZWFkWCwgaGVhZFldLCBsLCBheGlzLmlubmVyVGV4dCk7XG4gICAgICByZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXJCb2FyZC5ib2FyZCk7XG4gICAgICBwbGFjZUVuZW15U2hpcChlbmVteUJvYXJkKTtcbiAgICAgIGluY3JlbWVudENsaWNrKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxhdW5jaFBsYXllckFuZEVuZW15QXR0YWNrcyhlLCBwbGF5ZXIsIGVuZW15LCBwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZCkge1xuICBjb25zdCBzdHIgPSBlLnRhcmdldC5pZC5zbGljZSgxKTtcbiAgY29uc3QgeFBvcyA9IHBhcnNlSW50KHN0clswXSk7XG4gIGNvbnN0IHlQb3MgPSBwYXJzZUludChzdHJbMV0pO1xuXG4gIGNvbnN0IHBsYXllckhpdCA9IHBsYXllci5hdHRhY2soW3hQb3MsIHlQb3NdLCBlbmVteUJvYXJkKTtcbiAgcmVuZGVyUGxheWVyQXR0YWNrKHBsYXllckhpdCwgeFBvcywgeVBvcyk7XG5cbiAgaWYgKHBsYXllckhpdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZW5lbXlIaXQgPSBlbmVteS5yYW5kb21BdHRhY2socGxheWVyQm9hcmQpO1xuICAgIHJlbmRlckVuZW15QXR0YWNrKGVuZW15SGl0WzBdLCBlbmVteUhpdFsxXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tHYW1lRW5kKHBsYXllciwgZW5lbXksIHBsYXllckJvYXJkLCBlbmVteUJvYXJkKSB7XG4gIGlmIChwbGF5ZXJCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkgcmVuZGVyV2luKGVuZW15Lm5hbWUpO1xuICBlbHNlIGlmIChlbmVteUJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSByZW5kZXJXaW4ocGxheWVyLm5hbWUpO1xufVxuXG5leHBvcnQge1xuICBpbmNyZW1lbnRDbGljaywgY2hlY2tQbGFjZW1lbnRFbmQsIHBsYWNlUGxheWVyQW5kRW5lbXlTaGlwcywgcGxhY2VFbmVteVNoaXAsXG4gIGxhdW5jaFBsYXllckFuZEVuZW15QXR0YWNrcywgY2hlY2tHYW1lRW5kLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7XG4gIGNyZWF0ZUJvYXJkLCByZXNldEJvYXJkcywgcm90YXRlQXhpcywgaG92ZXJPbiwgaG92ZXJPZmYsIG9wZW5Nb2RhbCxcbn0gZnJvbSAnLi9ET00nO1xuaW1wb3J0IHtcbiAgY2hlY2tQbGFjZW1lbnRFbmQsIHBsYWNlUGxheWVyQW5kRW5lbXlTaGlwcywgbGF1bmNoUGxheWVyQW5kRW5lbXlBdHRhY2tzLFxuICBjaGVja0dhbWVFbmQsXG59IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZmFjdG9yaWVzL0dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vZmFjdG9yaWVzL1BsYXllcic7XG5cbndpbmRvdy5vbmxvYWQgPSBjcmVhdGVCb2FyZCgxMCk7XG5cbmNvbnN0IHBsYWNlbWVudERpdnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5wbGFjZW1lbnQnKS5jaGlsZHJlbik7XG5jb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRlLWJ0bicpO1xuY29uc3QgZW5lbXlCb2FyZERpdnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5lbmVteScpLmNoaWxkcmVuKTtcbmNvbnN0IHJlcGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBsYXktYnRuJyk7XG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCdQbGF5ZXInKTtcbmNvbnN0IGVuZW15ID0gbmV3IFBsYXllcignRW5lbXknKTtcbmNvbnN0IHBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuY29uc3QgZW5lbXlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxucGxhY2VtZW50RGl2cy5mb3JFYWNoKChwbGFjZW1lbnREaXYpID0+IHBsYWNlbWVudERpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHtcbiAgaG92ZXJPbihlKTtcbn0pKTtcblxucGxhY2VtZW50RGl2cy5mb3JFYWNoKChwbGFjZW1lbnREaXYpID0+IHBsYWNlbWVudERpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgaG92ZXJPZmYoZSk7XG59KSk7XG5cbnJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcm90YXRlQXhpcygpO1xufSk7XG5cbnBsYWNlbWVudERpdnMuZm9yRWFjaCgocGxhY2VtZW50RGl2KSA9PiB7XG4gIHBsYWNlbWVudERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcGxhY2VQbGF5ZXJBbmRFbmVteVNoaXBzKGUsIHBsYXllckJvYXJkLCBlbmVteUJvYXJkKTtcbiAgICBjaGVja1BsYWNlbWVudEVuZCgpO1xuICB9KTtcbn0pO1xuXG5lbmVteUJvYXJkRGl2cy5mb3JFYWNoKChlbmVteUJvYXJkRGl2KSA9PiB7XG4gIGVuZW15Qm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGxhdW5jaFBsYXllckFuZEVuZW15QXR0YWNrcyhlLCBwbGF5ZXIsIGVuZW15LCBwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZCk7XG4gICAgY2hlY2tHYW1lRW5kKHBsYXllciwgZW5lbXksIHBsYXllckJvYXJkLCBlbmVteUJvYXJkKTtcbiAgfSk7XG59KTtcblxucmVwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBnYW1lU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zdGFydCcpO1xuXG4gIHBsYXllci5yZXNldEFscmVhZHlIaXRDb29yZHMoKTtcbiAgZW5lbXkucmVzZXRBbHJlYWR5SGl0Q29vcmRzKCk7XG4gIHJlc2V0Qm9hcmRzKCk7XG4gIHBsYXllckJvYXJkLnJlc2V0KCk7XG4gIGVuZW15Qm9hcmQucmVzZXQoKTtcbiAgb3Blbk1vZGFsKGdhbWVTdGFydCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==