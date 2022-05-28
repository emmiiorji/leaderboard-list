/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #c1c1c1;\\r\\n}\\r\\n\\r\\n#page-header {\\r\\n  min-height: 50px;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  min-height: calc(100vh);\\r\\n  background: #fff;\\r\\n  background: url('https://res.cloudinary.com/emmii/image/upload/v1653067672/general/Alto_s_Adventure_animation_-_03_Roof_Grind_nmutmn.gif') no-repeat;\\r\\n  background-size: cover;\\r\\n  color: #fff;\\r\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.overlay {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background: rgba(0, 0, 0, 0.55);\\r\\n  width: 100%;\\r\\n  height: calc(100vh);\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nmain h1 {\\r\\n  margin: 30px 5% 0 5%;\\r\\n  font-size: 26px;\\r\\n}\\r\\n\\r\\n.scores-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 40px;\\r\\n  width: 90%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.show-score {\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.show-score header {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 30px;\\r\\n}\\r\\n\\r\\n.show-score #refresh {\\r\\n  margin-left: 5px;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.message {\\r\\n  text-align: center;\\r\\n  font-size: larger;\\r\\n  background: rgba(255, 255, 255, 0.6);\\r\\n  padding: 10px;\\r\\n  border-radius: 4px;\\r\\n  margin-bottom: 10px;\\r\\n  color: #050505;\\r\\n}\\r\\n\\r\\n.message.error {\\r\\n  color: #f00;\\r\\n  font-size: initial;\\r\\n  padding-bottom: 10px;\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.score-table {\\r\\n  border: 2px solid #fff;\\r\\n  width: 100%;\\r\\n  text-align: left;\\r\\n  border-collapse: collapse;\\r\\n}\\r\\n\\r\\n.score-table td {\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.score-table td:nth-child(1) {\\r\\n  border-right: 2px solid rgb(59, 58, 58);\\r\\n}\\r\\n\\r\\n.score-table thead {\\r\\n  font-weight: bolder;\\r\\n  border-bottom: 2px solid rgb(59, 58, 58);\\r\\n}\\r\\n\\r\\ntr {\\r\\n  background: rgba(255, 255, 255, 0.6);\\r\\n  color: #050505;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\ntr:nth-child(even) {\\r\\n  background: rgba(221, 221, 221, 0.6);\\r\\n}\\r\\n\\r\\n#add-score {\\r\\n  width: 40%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n#add-score h2 {\\r\\n  margin-bottom: 30px;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#add-score input {\\r\\n  padding: 10px;\\r\\n  margin-bottom: 5px;\\r\\n  width: 100%;\\r\\n  background: rgba(255, 255, 255, 0.8);\\r\\n  border: none;\\r\\n  border-radius: 3px;\\r\\n}\\r\\n\\r\\n#add-score #submit-score {\\r\\n  border-radius: 0;\\r\\n  width: fit-content;\\r\\n  padding: 5px 10px;\\r\\n  align-self: flex-end;\\r\\n  font-size: larger;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  min-height: 50px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n/* footer p {\\r\\n  margin-top: auto;\\r\\n} */\\r\\n\\r\\n@media only screen and (max-width: 600px) {\\r\\n  .scores-container {\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .show-score,\\r\\n  #add-score {\\r\\n    width: 90%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard-list/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leaderboard-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard-list/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game.js */ \"./src/js/modules/game.js\");\n/* harmony import */ var _modules_manage_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/manage-game.js */ \"./src/js/modules/manage-game.js\");\n\n\n\n\n\nconst messageDisplay = document.querySelector('.show-score > .message');\nconst scoreTableBody = document.querySelector('.score-table tbody');\nconst scoreTable = document.querySelector('.score-table');\nconst addScoreForm = document.getElementById('add-score');\nconst userField = addScoreForm.querySelector('#name');\nconst scoreField = addScoreForm.querySelector('#score');\nconst refreshBu = document.getElementById('refresh');\n\nconst createScoresMarkup = (scores) => {\n  let markup = '';\n  scores.forEach((score) => {\n    markup += `<tr>\n    <td>${score.user}</td>\n    <td>${score.score}</td>\n    </tr>`;\n  });\n  return markup;\n};\n\nconst renderScores = (scores) => {\n  const markup = createScoresMarkup(scores);\n  if (markup === '') {\n    messageDisplay.classList.remove('hide');\n    scoreTable.classList.add('hide');\n  } else {\n    messageDisplay.classList.add('hide');\n    scoreTable.classList.remove('hide');\n  }\n\n  scoreTableBody.innerHTML = markup;\n};\n\nconst clearForm = () => {\n  userField.value = '';\n  scoreField.value = '';\n};\n\nconst handleCreateScore = async (e) => {\n  e.preventDefault();\n  const user = userField.value.trim();\n  const score = scoreField.value;\n  const scoreObject = { user, score };\n\n  let result = null;\n  result = user ? await (0,_modules_manage_game_js__WEBPACK_IMPORTED_MODULE_2__.createScore)(_modules_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].game.id, scoreObject) : result;\n  const errorDisplay = addScoreForm.querySelector('.message.error');\n  if (result === false) {\n    errorDisplay.classList.remove('hide');\n    setTimeout(() => {\n      errorDisplay.classList.add('hide');\n    }, 5000);\n  } else if (result === true) {\n    _modules_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].game.scores.push(scoreObject);\n\n    const tr = document.createElement('tr');\n    const tdUser = document.createElement('td');\n    const tdScore = document.createElement('td');\n    tdUser.appendChild(document.createTextNode(user));\n    tdScore.appendChild(document.createTextNode(score));\n    tr.appendChild(tdUser);\n    tr.appendChild(tdScore);\n\n    messageDisplay.classList.add('hide');\n    scoreTable.classList.remove('hide');\n\n    scoreTableBody.appendChild(tr);\n  }\n\n  clearForm();\n};\n\nconst handleRefresh = async () => {\n  const result = await (0,_modules_manage_game_js__WEBPACK_IMPORTED_MODULE_2__.getScores)(_modules_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].game.id);\n  _modules_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].game.scores = result;\n\n  renderScores(result);\n};\n\n(async () => {\n  await _modules_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n\n  renderScores(_modules_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].game.scores);\n\n  addScoreForm.addEventListener('submit', handleCreateScore);\n  refreshBu.addEventListener('click', handleRefresh);\n})();\n\n\n//# sourceURL=webpack://leaderboard-list/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/game.js":
/*!********************************!*\
  !*** ./src/js/modules/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _manage_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-game.js */ \"./src/js/modules/manage-game.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.js */ \"./src/js/modules/utility.js\");\n\n\n\nclass Game {\n  async init() {\n    try {\n      this.game = { id: '肢肂聿肂職聯聻肐聿肇聥肚聠肂聾肣肟聶聸聧' };\n      // Replace above RHS with \"JSON.parse(localStorage.getItem(storageKey))\" (import storageKey)\n      // when you're to let each device create a new game in clients local storage;\n\n      this.game.id = (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.caesarsCipherDecrypt)(this.game.id);\n      this.game.scores = await (0,_manage_game_js__WEBPACK_IMPORTED_MODULE_0__.getScores)(this.game.id);\n    } catch (error) {\n      if (error instanceof TypeError) {\n        this.game = { id: await (0,_manage_game_js__WEBPACK_IMPORTED_MODULE_0__.createGame)('Leaderboard') };\n        if (!this.game.id) {\n          // Show Error\n          // Sorry, Could not initialize leaderboard\n        }\n        this.game.scores = await (0,_manage_game_js__WEBPACK_IMPORTED_MODULE_0__.getScores)(this.game.id);\n      }\n    }\n  }\n}\n\nconst game = new Game();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n//# sourceURL=webpack://leaderboard-list/./src/js/modules/game.js?");

/***/ }),

/***/ "./src/js/modules/manage-game.js":
/*!***************************************!*\
  !*** ./src/js/modules/manage-game.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGame\": () => (/* binding */ createGame),\n/* harmony export */   \"createScore\": () => (/* binding */ createScore),\n/* harmony export */   \"getScores\": () => (/* binding */ getScores),\n/* harmony export */   \"storageKey\": () => (/* binding */ storageKey)\n/* harmony export */ });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"./src/js/modules/utility.js\");\n\n\nconst baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';\nconst gamesEndPoint = 'games';\nconst scoresEndPoint = (id) => `${id}/scores`;\nconst storageKey = 'game';\n\n// This function would be useful for letting each device\n// to create a new game in clients local storage\nconst createGame = async (name = 'Leaderboard Games') => {\n  const url = `${baseURL}/${gamesEndPoint}/`;\n  let data = false;\n  try {\n    const result = await fetch(url, {\n      method: 'POST',\n      body: JSON.stringify({ name }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    if (!result.ok) {\n      throw new Error('Could not create game');\n    }\n    data = await result.json();\n  } catch (error) {\n    return false;\n  }\n\n  const gameId = data.result.split(': ')[1].split(' ')[0];\n  localStorage.setItem(storageKey, JSON.stringify({\n    id: (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.caesarsCipherEncrypt)(gameId),\n  }));\n\n  return gameId;\n};\n\nconst createScore = async (gameId, scoreObject) => {\n  const url = `${baseURL}/${gamesEndPoint}/${scoresEndPoint(gameId)}`;\n\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n      body: JSON.stringify(scoreObject),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    if (!response.ok) {\n      throw new Error('Error creating score');\n    }\n    return true;\n  } catch (error) {\n    return false;\n  }\n};\n\nconst getScores = async (gameId) => {\n  const url = `${baseURL}/${gamesEndPoint}/${scoresEndPoint(gameId)}`;\n  let scores = [];\n  try {\n    const result = await fetch(url, {\n      method: 'GET',\n    });\n    scores = await result.json();\n    if (!result.ok) {\n      throw new Error('Error creating score');\n    }\n  } catch (error) {\n    return false;\n  }\n\n  return scores.result;\n};\n\n\n\n\n//# sourceURL=webpack://leaderboard-list/./src/js/modules/manage-game.js?");

/***/ }),

/***/ "./src/js/modules/utility.js":
/*!***********************************!*\
  !*** ./src/js/modules/utility.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"caesarsCipherDecrypt\": () => (/* binding */ caesarsCipherDecrypt),\n/* harmony export */   \"caesarsCipherEncrypt\": () => (/* binding */ caesarsCipherEncrypt)\n/* harmony export */ });\nfunction caesarsCipherEncrypt(str, key = '.') {\n  let encodedStr = '';\n  key = String(key).charCodeAt(0);\n  str.split('').forEach((char) => {\n    encodedStr += String.fromCharCode((char.charCodeAt(0) + key + 65536 / 2) % 65536);\n    // charCodeAt returns the UTF-16 code unit (integer betw 0 and 65535) of character @ given index\n  });\n  return encodedStr;\n}\n\nfunction caesarsCipherDecrypt(encodedStr, key = '.') {\n  let decodedStr = '';\n  key = String(key).charCodeAt(0);\n  encodedStr.split('').forEach((char) => {\n    decodedStr += String.fromCharCode(char.charCodeAt(0) - (key + 65536 / 2));\n    // charCodeAt returns the UTF-16 code unit (integer betw 0 and 65535) of character @ given index\n  });\n  return decodedStr;\n}\n\n\n\n//# sourceURL=webpack://leaderboard-list/./src/js/modules/utility.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;