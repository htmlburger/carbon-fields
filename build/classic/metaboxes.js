this["cf"] = this["cf"] || {}; this["cf"]["metaboxes"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/metaboxes/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() {\n  module.exports = _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nmodule.exports = _extends;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nmodule.exports = _objectSpread;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/objectSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/callbag-create/index.js":
/*!**********************************************!*\
  !*** ./node_modules/callbag-create/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const create = prod => (start, sink) => {\n  if (start !== 0) return;\n  if (typeof prod !== 'function') {\n    sink(0, () => {});\n    sink(2);\n    return;\n  }\n  let end;\n  let unsub;\n  const maybeDispose = t => {\n    end = end || t === 2;\n    if (end && typeof unsub === 'function') unsub();\n  };\n  sink(0, maybeDispose);\n  unsub = prod((t, d) => {\n    if (end || t === 0) return;\n    sink(t, d);\n    maybeDispose(t);\n  });\n};\n\nmodule.exports = create;\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-create/index.js?");

/***/ }),

/***/ "./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar is = function is(previous, current) {\n  return previous === current;\n};\n\nfunction distinctUntilChanged(compare) {\n  if (compare === void 0) {\n    compare = is;\n  }\n\n  return function (source) {\n    return function (start, sink) {\n      if (start !== 0) return;\n      var inited = false;\n      var prev;\n      var talkback;\n      source(0, function (type, data) {\n        if (type === 0) {\n          talkback = data;\n        }\n\n        if (type !== 1) {\n          sink(type, data);\n          return;\n        }\n\n        if (inited && compare(prev, data)) {\n          talkback(1);\n          return;\n        }\n\n        inited = true;\n        prev = data;\n        sink(1, data);\n      });\n    };\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (distinctUntilChanged);\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js?");

/***/ }),

/***/ "./node_modules/callbag-filter/readme.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-filter/readme.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-filter\n * --------------\n *\n * Callbag operator that conditionally lets data pass through. Works on either\n * pullable or listenable sources.\n *\n * `npm install callbag-filter`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const filter = require('callbag-filter');\n *\n *     const source = filter(x => x % 2)(fromIter([1,2,3,4,5]));\n *\n *     iterate(x => console.log(x))(source); // 1\n *                                           // 3\n *                                           // 5\n */\n\nconst filter = condition => source => (start, sink) => {\n  if (start !== 0) return;\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) {\n      talkback = d;\n      sink(t, d);\n    } else if (t === 1) {\n      if (condition(d)) sink(t, d);\n      else talkback(1);\n    }\n    else sink(t, d);\n  });\n};\n\nmodule.exports = filter;\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-filter/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-from-delegated-event/index.js":
/*!************************************************************!*\
  !*** ./node_modules/callbag-from-delegated-event/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var callbag_from_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-from-event */ \"./node_modules/callbag-from-delegated-event/node_modules/callbag-from-event/index.js\");\n/* harmony import */ var callbag_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callbag-filter */ \"./node_modules/callbag-filter/readme.js\");\n/* harmony import */ var callbag_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(callbag_filter__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst fromDelegatedEvent = (root, sel, evt) => callbag_filter__WEBPACK_IMPORTED_MODULE_1___default()(e => {\n  let at = e.target;\n  while(at !== root){\n    if (at.matches(sel)) {\n      return true;\n    }\n    at = at.parentElement;\n  }\n  return false;\n})(Object(callbag_from_event__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root, evt));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fromDelegatedEvent);\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-from-delegated-event/index.js?");

/***/ }),

/***/ "./node_modules/callbag-from-delegated-event/node_modules/callbag-from-event/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/callbag-from-delegated-event/node_modules/callbag-from-event/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fromEvent = (node, name, options) => (start, sink) => {\n  if (start !== 0) return;\n  let disposed = false;\n  const handler = ev => {\n    sink(1, ev)\n  };\n\n  sink(0, t => {\n    if (t !== 2) {\n      return;\n    }\n    disposed = true;\n    node.removeEventListener(name, handler, options);\n  });\n\n  if (disposed) {\n    return;\n  }\n\n  node.addEventListener(name, handler, options);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fromEvent);\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-from-delegated-event/node_modules/callbag-from-event/index.js?");

/***/ }),

/***/ "./node_modules/callbag-of/dist/callbag-of.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/callbag-of/dist/callbag-of.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction of() {\n  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {\n    values[_key] = arguments[_key];\n  }\n\n  return function (start, sink) {\n    if (start !== 0) return;\n    var disposed = false;\n    sink(0, function (type) {\n      if (type !== 2) return;\n      disposed = true;\n      values.length = 0;\n    });\n\n    while (values.length !== 0) {\n      sink(1, values.shift());\n    }\n\n    if (disposed) return;\n    sink(2);\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (of);\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-of/dist/callbag-of.esm.js?");

/***/ }),

/***/ "./node_modules/callbag-start-with/index.js":
/*!**************************************************!*\
  !*** ./node_modules/callbag-start-with/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst startWith = (...xs) => inputSource => (start, outputSink) => {\n  if (start !== 0) return;\n  let disposed = false;\n  let inputTalkback;\n  let trackPull = false;\n  let lastPull;\n\n  outputSink(0, (ot, od) => {\n    if (trackPull && ot === 1) {\n      lastPull = [1, od];\n    }\n\n    if (ot === 2) {\n      disposed = true;\n      xs.length = 0;\n    }\n\n    if (!inputTalkback) return;\n    inputTalkback(ot, od);\n  });\n\n  while (xs.length !== 0) {\n    if (xs.length === 1) {\n      trackPull = true;\n    }\n    outputSink(1, xs.shift());\n  }\n\n  if (disposed) return;\n\n  inputSource(0, (it, id) => {\n    if (it === 0) {\n      inputTalkback = id;\n      trackPull = false;\n\n      if (lastPull) {\n        inputTalkback(...lastPull);\n        lastPull = null;\n      }\n      return;\n    }\n    outputSink(it, id);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startWith);\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-start-with/index.js?");

/***/ }),

/***/ "./node_modules/callbag-take-until/index.js":
/*!**************************************************!*\
  !*** ./node_modules/callbag-take-until/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst UNIQUE = {};\n\nconst takeUntil = notifier => source => (start, sink) => {\n  if (start !== 0) return;\n  let sourceTalkback;\n  let notifierTalkback;\n  let inited = false;\n  let done = UNIQUE;\n\n  source(0, (type, data) => {\n    if (type === 0) {\n      sourceTalkback = data;\n\n      notifier(0, (t, d) => {\n        if (t === 0) {\n          notifierTalkback = d;\n          notifierTalkback(1);\n          return;\n        }\n        if (t === 1) {\n          done = void 0;\n          notifierTalkback(2);\n          sourceTalkback(2);\n          if (inited) sink(2);\n          return;\n        }\n        if (t === 2) {\n          notifierTalkback = null;\n          done = d;\n          if (d != null) {\n            sourceTalkback(2);\n            if (inited) sink(t, d);\n          }\n        }\n      });\n\n      inited = true;\n\n      sink(0, (t, d) => {\n        if (done !== UNIQUE) return;\n        if (t === 2 && notifierTalkback) notifierTalkback(2);\n        sourceTalkback(t, d);\n      });\n\n      if (done !== UNIQUE) sink(2, done);\n      return;\n    }\n\n    if (type === 2) notifierTalkback(2);\n    if (done === UNIQUE) sink(type, data);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (takeUntil);\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-take-until/index.js?");

/***/ }),

/***/ "./packages/metaboxes/components/container/index.js":
/*!**********************************************************!*\
  !*** ./packages/metaboxes/components/container/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/components/container/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../field */ \"./packages/metaboxes/components/field/index.js\");\n\n\n\n\n\n\n\n\n\n/**\n * External dependencies.\n */\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\nvar Container =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Container, _Component);\n\n  function Container() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Container);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Container)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"state\", {\n      currentTab: null\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"renderField\", function (field) {\n      var FieldEdit = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_11__[\"getFieldType\"])(field.type, 'metabox');\n\n      if (!FieldEdit) {\n        return null;\n      }\n\n      return __webpack_provided_wp_dot_element.createElement(_field__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        key: field.id,\n        id: field.id\n      }, __webpack_provided_wp_dot_element.createElement(FieldEdit, {\n        id: field.id,\n        containerId: _this.props.id\n      }));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleTabClick\", function (tab) {\n      _this.setState({\n        currentTab: tab\n      });\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Container, [{\n    key: \"componentDidMount\",\n\n    /**\n     * Lifecycle hook.\n     *\n     * @return {void}\n     */\n    value: function componentDidMount() {\n      var container = this.props.container;\n\n      if (this.isTabbed(container)) {\n        this.setState({\n          currentTab: Object.keys(container.settings.tabs)[0]\n        });\n      }\n    }\n    /**\n     * Returns whether the container uses tabs.\n     *\n     * @param  {Object} container\n     * @return {boolean}\n     */\n\n  }, {\n    key: \"isTabbed\",\n    value: function isTabbed(container) {\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"isPlainObject\"])(container.settings.tabs);\n    }\n    /**\n     * Renders the given field.\n     *\n     * @param  {Object} field\n     * @return {Object}\n     */\n\n  }, {\n    key: \"render\",\n\n    /**\n     * Renders the component.\n     *\n     * @return {Object}\n     */\n    value: function render() {\n      var _this2 = this;\n\n      var currentTab = this.state.currentTab;\n      var container = this.props.container;\n      var hasTabs = this.isTabbed(container);\n      var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()(['cf-container', \"cf-container-\".concat(container.id), \"cf-container-\".concat(Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"kebabCase\"])(container.type))].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(container.classes), [{\n        'cf-container--plain': !hasTabs\n      }]));\n      return __webpack_provided_wp_dot_element.createElement(\"div\", {\n        className: classes\n      }, __webpack_provided_wp_dot_element.createElement(\"input\", {\n        type: \"hidden\",\n        name: container.nonce.name,\n        value: container.nonce.value\n      }), hasTabs && __webpack_provided_wp_dot_element.createElement(\"div\", {\n        className: \"cf-container__tabs\"\n      }, __webpack_provided_wp_dot_element.createElement(\"ul\", {\n        className: \"cf-container__tabs-list\"\n      }, Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"map\"])(container.settings.tabs, function (fieldNames, tabName) {\n        // eslint-disable-next-line no-shadow\n        var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()('cf-container__tabs-item', {\n          'cf-container__tabs-item--current': tabName === currentTab\n        });\n        return __webpack_provided_wp_dot_element.createElement(\"li\", {\n          key: tabName,\n          className: classes,\n          onClick: function onClick() {\n            return _this2.handleTabClick(tabName);\n          }\n        }, tabName);\n      }))), hasTabs && Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"map\"])(container.settings.tabs, function (fieldNames, tabName) {\n        return __webpack_provided_wp_dot_element.createElement(\"div\", {\n          className: \"cf-container__fields\",\n          key: tabName,\n          hidden: tabName !== currentTab\n        }, Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"map\"])(fieldNames, function (fieldName) {\n          var field = Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"find\"])(container.fields, ['name', fieldName]);\n          return _this2.renderField(field);\n        }));\n      }), !hasTabs && __webpack_provided_wp_dot_element.createElement(\"div\", {\n        className: \"cf-container__fields\"\n      }, Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"map\"])(container.fields, this.renderField)));\n    }\n  }]);\n\n  return Container;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/components/container/index.js?");

/***/ }),

/***/ "./packages/metaboxes/components/container/style.scss":
/*!************************************************************!*\
  !*** ./packages/metaboxes/components/container/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/components/container/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/components/field/index.js":
/*!******************************************************!*\
  !*** ./packages/metaboxes/components/field/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/components/field/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hocs_with_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hocs/with-field */ \"./packages/metaboxes/hocs/with-field/index.js\");\n/**\n * External dependencies.\n */\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(_hocs_with_field__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_1__[\"withFilters\"])('carbon-fields.field-wrapper.metabox'))(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_1__[\"Field\"]));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/components/field/index.js?");

/***/ }),

/***/ "./packages/metaboxes/components/field/style.scss":
/*!********************************************************!*\
  !*** ./packages/metaboxes/components/field/style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/components/field/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/containers/hooks.js":
/*!************************************************!*\
  !*** ./packages/metaboxes/containers/hooks.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hocs_with_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hocs/with-container */ \"./packages/metaboxes/hocs/with-container/index.js\");\n/**\n * External dependencies.\n */\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n/**\n * Extends the containers with necessary hooks.\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.register-container-type', 'carbon-fields/metaboxes', function (type, context, component) {\n  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(_hocs_with_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_2__[\"withFilters\"])(\"carbon-fields.\".concat(type, \".\").concat(context)))(component);\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/hooks.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/index.js":
/*!************************************************!*\
  !*** ./packages/metaboxes/containers/index.js ***!
  \************************************************/
/*! exports provided: renderContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderContainer\", function() { return renderContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initializeContainers; });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ \"./packages/metaboxes/containers/hooks.js\");\n/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget */ \"./packages/metaboxes/containers/widget/index.js\");\n/* harmony import */ var _term_meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./term-meta */ \"./packages/metaboxes/containers/term-meta/index.js\");\n/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-options */ \"./packages/metaboxes/containers/theme-options/index.js\");\n/* harmony import */ var _user_meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-meta */ \"./packages/metaboxes/containers/user-meta/index.js\");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/container */ \"./packages/metaboxes/components/container/index.js\");\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registry */ \"./packages/metaboxes/containers/registry.js\");\n/**\n * External dependencies.\n */\n\n\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n\n\n\n\n/**\n * Registers the containers.\n */\n\n['post_meta', 'term_meta', 'user_meta', 'comment_meta', 'network', 'theme_options', 'nav_menu_item', 'widget'].forEach(function (type) {\n  return Object(_registry__WEBPACK_IMPORTED_MODULE_10__[\"registerContainerType\"])(type, _components_container__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n});\n/**\n * Renders the given container.\n *\n * @param  {Object} container\n * @param  {string} context\n * @return {void}\n */\n\nfunction renderContainer(container, context) {\n  var node = document.querySelector(\".container-\".concat(container.id));\n  var Component = Object(_registry__WEBPACK_IMPORTED_MODULE_10__[\"getContainerType\"])(container.type, context);\n\n  if (node) {\n    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(__webpack_provided_wp_dot_element.createElement(Component, {\n      id: container.id\n    }), node, function () {\n      node.dataset.mounted = true;\n    });\n  } else {\n    // eslint-disable-next-line no-console\n    console.error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Could not find DOM element for container \"%1$s\".', 'carbon-fields-ui'), container.id));\n  }\n}\n/**\n * Initializes the containers.\n *\n * @param  {string} context\n * @return {void}\n */\n\nfunction initializeContainers(context) {\n  var containers = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"select\"])('carbon-fields/metaboxes').getContainers();\n  Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"forEach\"])(containers, function (container) {\n    renderContainer(container, context);\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/index.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/registry.js":
/*!***************************************************!*\
  !*** ./packages/metaboxes/containers/registry.js ***!
  \***************************************************/
/*! exports provided: registerContainerType, getContainerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerContainerType\", function() { return registerContainerType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getContainerType\", function() { return getContainerType; });\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies.\n */\n\n\nvar _createRegistry = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__[\"createRegistry\"])('container', ['classic', 'gutenberg']),\n    registerContainerType = _createRegistry.registerContainerType,\n    getContainerType = _createRegistry.getContainerType;\n\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/registry.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/term-meta/index.js":
/*!**********************************************************!*\
  !*** ./packages/metaboxes/containers/term-meta/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! refract-callbag */ \"refract-callbag\");\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(refract_callbag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_from_event_pattern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/from-event-pattern */ \"./packages/metaboxes/utils/from-event-pattern.js\");\n/* harmony import */ var _store_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/helpers */ \"./packages/metaboxes/store/helpers.js\");\n/**\n * External dependencies.\n */\n\n\n\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n/**\n * The function that controls the stream of side effects.\n *\n * @return {Object}\n */\n\nfunction aperture() {\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_4__[\"pipe\"])(Object(_utils_from_event_pattern__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function (handler) {\n    return window.jQuery(document).on('ajaxSuccess', handler);\n  }, function (handler) {\n    return window.jQuery(document).off('ajaxSuccess', handler);\n  }, function (e, xhr, options, data) {\n    return {\n      options: options,\n      data: data\n    };\n  }), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_4__[\"filter\"])(function (_ref) {\n    var options = _ref.options,\n        data = _ref.data;\n    return options.data && options.data.indexOf('carbon_fields_container') > -1 && options.data.indexOf('add-tag') > -1 && !data.documentElement.querySelector('wp_error');\n  }));\n}\n/**\n * The function that causes the side effects.\n *\n * @param  {Object} props\n * @return {Function}\n */\n\n\nfunction handler(props) {\n  return function () {\n    // Collects identifiers of current fields so we can remove them later.\n    var oldFieldIds = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(props.container.fields, 'id'); // Get a fresh copy of the container and fields.\n\n\n    var _normalizePreloadedSt = Object(_store_helpers__WEBPACK_IMPORTED_MODULE_6__[\"normalizePreloadedState\"])(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(window.cf, 'preloaded.containers', [])),\n        containers = _normalizePreloadedSt.containers,\n        fields = _normalizePreloadedSt.fields;\n\n    var container = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(containers, ['id', props.id]);\n\n    var containerFields = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(fields, ['container_id', props.id]); // Replace the container and add the new fields.\n\n\n    var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__[\"dispatch\"])('carbon-fields/metaboxes'),\n        updateState = _dispatch.updateState,\n        removeFields = _dispatch.removeFields;\n\n    updateState(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keyBy([container], 'id'), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keyBy(containerFields, 'id'));\n    removeFields(oldFieldIds);\n  };\n}\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.term_meta.classic', 'carbon-fields/metaboxes', Object(refract_callbag__WEBPACK_IMPORTED_MODULE_3__[\"withEffects\"])(aperture, {\n  handler: handler\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/term-meta/index.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/theme-options/index.js":
/*!**************************************************************!*\
  !*** ./packages/metaboxes/containers/theme-options/index.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! refract-callbag */ \"refract-callbag\");\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(refract_callbag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/containers/theme-options/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * External dependencies.\n */\n\n\n\n/**\n * Internal dependencies.\n */\n\n\n/**\n * The function that controls the stream of side effects.\n *\n * @return {Object}\n */\n\nfunction aperture() {\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_2__[\"pipe\"])(Object(callbag_basics__WEBPACK_IMPORTED_MODULE_2__[\"fromEvent\"])(window, 'scroll'), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_2__[\"map\"])(function () {\n    return window.jQuery(window).scrollTop();\n  }));\n}\n/**\n * The function that causes the side effects.\n *\n * @param  {Object} props\n * @return {Function}\n */\n\n\nfunction handler() {\n  return function (windowTopOffset) {\n    var $container = window.jQuery('.carbon-box:first');\n    var $panel = window.jQuery('#postbox-container-1');\n    var $bar = window.jQuery('#wpadminbar');\n    var offset = $bar.height() + 10;\n    var threshold = $container.offset().top - offset; // In some situations the threshold is negative number because\n    // the container element isn't rendered yet.\n\n    if (threshold > 0) {\n      $panel.toggleClass('fixed', windowTopOffset >= threshold).css('top', offset);\n    }\n  };\n}\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.theme_options.classic', 'carbon-fields/metaboxes', Object(refract_callbag__WEBPACK_IMPORTED_MODULE_1__[\"withEffects\"])(aperture, {\n  handler: handler\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/theme-options/index.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/theme-options/style.scss":
/*!****************************************************************!*\
  !*** ./packages/metaboxes/containers/theme-options/style.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/theme-options/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/containers/user-meta/index.js":
/*!**********************************************************!*\
  !*** ./packages/metaboxes/containers/user-meta/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/containers/user-meta/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/user-meta/index.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/user-meta/style.scss":
/*!************************************************************!*\
  !*** ./packages/metaboxes/containers/user-meta/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/user-meta/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/containers/widget/index.js":
/*!*******************************************************!*\
  !*** ./packages/metaboxes/containers/widget/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! refract-callbag */ \"refract-callbag\");\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(refract_callbag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/containers/widget/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * External dependencies.\n */\n\n\n\n/**\n * Internal dependencies.\n */\n\n\n/**\n * The function that controls the stream of side effects.\n *\n * @param  {Object} component\n * @return {Object}\n */\n\nfunction aperture(component) {\n  var mount$ = component.mount;\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_2__[\"pipe\"])(mount$, Object(callbag_basics__WEBPACK_IMPORTED_MODULE_2__[\"map\"])(function () {\n    return {\n      type: 'COMPONENT_MOUNTED'\n    };\n  }));\n}\n/**\n * The function that causes the side effects.\n *\n * @param  {Object} props\n * @return {Function}\n */\n\n\nfunction handler(props) {\n  return function (effect) {\n    switch (effect.type) {\n      case 'COMPONENT_MOUNTED':\n        var container = props.container;\n        var $carbonContainer = window.jQuery(\".container-\".concat(container.id)); // trigger change immediately after save, since the container is expanded\n\n        $carbonContainer.trigger('change'); // trigger change when the expand button is clicked\n\n        $carbonContainer.closest('.widget').find('.widget-top').on('click', function () {\n          setTimeout(function () {\n            $carbonContainer.trigger('change');\n          }, 500);\n        });\n        break;\n    }\n  };\n}\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.widget.classic', 'carbon-fields/metaboxes', Object(refract_callbag__WEBPACK_IMPORTED_MODULE_1__[\"withEffects\"])(aperture, {\n  handler: handler\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/widget/index.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/widget/style.scss":
/*!*********************************************************!*\
  !*** ./packages/metaboxes/containers/widget/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/widget/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/fields/association/index.js":
/*!********************************************************!*\
  !*** ./packages/metaboxes/fields/association/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_strip_compact_input_prefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/strip-compact-input-prefix */ \"./packages/metaboxes/utils/strip-compact-input-prefix.js\");\n/**\n * External dependencies.\n */\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n/**\n * Returns a field with the given name.\n *\n * @param  {Object[]} fields\n * @param  {string}   name\n * @return {?Object}\n */\n\nfunction findFieldByName(fields, name) {\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"find\"])(fields, function (field) {\n    return field.name === name;\n  });\n}\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.association.metabox', 'carbon-fields/metaboxes', Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__[\"withProps\"])(function (props) {\n  return {\n    hierarchyResolver: function hierarchyResolver() {\n      // Get all fields.\n      var fields = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"select\"])('carbon-fields/metaboxes').getFieldsByContainerId(props.containerId); // Get a clean version of field's name.\n\n      var fieldName = Object(_utils_strip_compact_input_prefix__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(props.name); // Get the path.\n\n      var path = fieldName.split(/\\[|\\]/g); // Remove chunks that are empty.\n\n      path = path.filter(function (chunk) {\n        return chunk !== '';\n      }); // Get the root field.\n\n      var rootFieldName = path.shift();\n      var rootField = findFieldByName(fields, rootFieldName); // Get the hierarchy.\n\n      var accessor = fields.indexOf(rootField);\n      var hierarchy = rootField.base_name; // Visit every branch in the tree so we can get the full hierarchy.\n\n      while (path.length > 0) {\n        var chunk = path.shift();\n        var isGroup = !isNaN(chunk);\n        var isSameField = chunk === props.field.base_name;\n        var isNestedComplex = !isGroup && !isSameField;\n\n        if (isGroup) {\n          accessor = \"\".concat(accessor, \".value.\").concat(chunk, \".name\");\n          hierarchy = \"\".concat(hierarchy, \"[\").concat(chunk, \"]:\").concat(Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(fields, accessor), \"/\");\n        }\n\n        if (isNestedComplex) {\n          var fieldReferences = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(fields, accessor.replace(/\\.name$/, '.fields'));\n          var fieldReference = findFieldByName(fieldReferences, chunk);\n          var field = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"find\"])(fields, ['id', fieldReference.id]);\n          accessor = fields.indexOf(field);\n          hierarchy = \"\".concat(hierarchy).concat(field.base_name);\n        }\n\n        if (isSameField) {\n          hierarchy = \"\".concat(hierarchy).concat(chunk);\n        }\n      }\n\n      return hierarchy;\n    }\n  };\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/association/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/complex/index.js":
/*!****************************************************!*\
  !*** ./packages/metaboxes/fields/complex/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/fields/complex/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _components_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/field */ \"./packages/metaboxes/components/field/index.js\");\n/* harmony import */ var _utils_flatten_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/flatten-field */ \"./packages/metaboxes/utils/flatten-field.js\");\n\n\n\n\n\n\n\n\n/**\n * External dependencies.\n */\n\n\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n\nvar ComplexField =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ComplexField, _Component);\n\n  function ComplexField() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ComplexField);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ComplexField)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"handleAddGroup\", function (group, callback) {\n      var _this$props = _this.props,\n          id = _this$props.id,\n          field = _this$props.field,\n          value = _this$props.value,\n          addFields = _this$props.addFields,\n          onChange = _this$props.onChange; // Create a copy of the group to prevent\n      // incidentally modifications.\n\n      group = Object(lodash__WEBPACK_IMPORTED_MODULE_12__[\"cloneDeep\"])(group); // Get a flat list of all fields for this group.\n\n      var fields = [];\n      group.id = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_13__[\"uniqueId\"])();\n      group.container_id = field.container_id;\n      group.fields = group.fields.map(function (groupField) {\n        return Object(_utils_flatten_field__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(groupField, field.container_id, fields);\n      }); // Make sure that the group is expanded even\n      // `set_collapsed(true)` is used.\n\n      group.collapsed = false; // Push the group to the field.\n\n      addFields(fields);\n      onChange(id, value.concat(group));\n      callback(group);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"handleCloneGroup\", function (group, callback) {\n      var _this$props2 = _this.props,\n          id = _this$props2.id,\n          value = _this$props2.value,\n          cloneFields = _this$props2.cloneFields,\n          onChange = _this$props2.onChange;\n      var originFieldIds = group.fields.map(function (groupField) {\n        return groupField.id;\n      });\n      var cloneFieldIds = originFieldIds.map(function () {\n        return Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_13__[\"uniqueId\"])();\n      });\n      var clonedGroup = Object(lodash__WEBPACK_IMPORTED_MODULE_12__[\"cloneDeep\"])(group);\n      clonedGroup.id = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_13__[\"uniqueId\"])();\n      clonedGroup.fields.forEach(function (groupField, index) {\n        groupField.id = cloneFieldIds[index];\n      });\n      cloneFields(originFieldIds, cloneFieldIds);\n      onChange(id, immer__WEBPACK_IMPORTED_MODULE_7___default()(value, function (draft) {\n        draft.splice(value.indexOf(group) + 1, 0, clonedGroup);\n      }));\n      callback(clonedGroup);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"handleRemoveGroup\", function (group) {\n      var _this$props3 = _this.props,\n          id = _this$props3.id,\n          value = _this$props3.value,\n          onChange = _this$props3.onChange;\n      onChange(id, Object(lodash__WEBPACK_IMPORTED_MODULE_12__[\"without\"])(value, group), group.fields.map(function (groupField) {\n        return groupField.id;\n      }));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"handleToggleGroup\", function (groupId) {\n      var _this$props4 = _this.props,\n          field = _this$props4.field,\n          value = _this$props4.value,\n          onChange = _this$props4.onChange;\n      onChange(field.id, immer__WEBPACK_IMPORTED_MODULE_7___default()(value, function (draft) {\n        var group = Object(lodash__WEBPACK_IMPORTED_MODULE_12__[\"find\"])(draft, ['id', groupId]);\n        group.collapsed = !group.collapsed;\n      }));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"handleToggleAllGroups\", function (collapsed) {\n      var _this$props5 = _this.props,\n          field = _this$props5.field,\n          value = _this$props5.value,\n          onChange = _this$props5.onChange;\n      onChange(field.id, immer__WEBPACK_IMPORTED_MODULE_7___default()(value, function (draft) {\n        draft.forEach(function (group) {\n          group.collapsed = collapsed;\n        });\n      }));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"handleGroupSetup\", function (group, props) {\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_12__[\"assign\"])({}, props, {\n        id: group.id,\n        name: group.name,\n        prefix: \"\".concat(_this.props.name, \"[\").concat(props.index, \"]\"),\n        fields: group.fields,\n        collapsed: group.collapsed,\n        context: 'metabox'\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"handleGroupFieldSetup\", function (field, props, groupProps) {\n      return [_components_field__WEBPACK_IMPORTED_MODULE_15__[\"default\"], Object(lodash__WEBPACK_IMPORTED_MODULE_12__[\"assign\"])({}, props, {\n        key: field.id,\n        id: field.id,\n        containerId: _this.props.containerId,\n        name: \"\".concat(groupProps.prefix, \"[\").concat(field.name, \"]\")\n      })];\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ComplexField, [{\n    key: \"render\",\n\n    /**\n     * Renders the component.\n     *\n     * @return {Object}\n     */\n    value: function render() {\n      var handleGroupSetup = this.handleGroupSetup,\n          handleGroupFieldSetup = this.handleGroupFieldSetup,\n          handleAddGroup = this.handleAddGroup,\n          handleCloneGroup = this.handleCloneGroup,\n          handleRemoveGroup = this.handleRemoveGroup,\n          handleToggleGroup = this.handleToggleGroup,\n          handleToggleAllGroups = this.handleToggleAllGroups;\n      var _this$props6 = this.props,\n          value = _this$props6.value,\n          children = _this$props6.children;\n      var allGroupsAreCollapsed = value.every(function (_ref) {\n        var collapsed = _ref.collapsed;\n        return collapsed;\n      });\n      return children({\n        allGroupsAreCollapsed: allGroupsAreCollapsed,\n        handleGroupSetup: handleGroupSetup,\n        handleGroupFieldSetup: handleGroupFieldSetup,\n        handleAddGroup: handleAddGroup,\n        handleCloneGroup: handleCloneGroup,\n        handleRemoveGroup: handleRemoveGroup,\n        handleToggleGroup: handleToggleGroup,\n        handleToggleAllGroups: handleToggleAllGroups\n      });\n    }\n  }]);\n\n  return ComplexField;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar applyWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__[\"withSelect\"])(function (select, props) {\n  var _select = select('carbon-fields/metaboxes'),\n      getComplexGroupValues = _select.getComplexGroupValues;\n\n  var groupValues = props.value.map(function (group) {\n    var fieldIds = group.fields.map(function (field) {\n      return field.id;\n    });\n    return [group.name, getComplexGroupValues(fieldIds)];\n  });\n  return {\n    groupValues: groupValues\n  };\n});\nvar applyWithDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__[\"withDispatch\"])(function (dispatch) {\n  var _dispatch = dispatch('carbon-fields/metaboxes'),\n      addFields = _dispatch.addFields,\n      cloneFields = _dispatch.cloneFields;\n\n  return {\n    addFields: addFields,\n    cloneFields: cloneFields\n  };\n});\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__[\"addFilter\"])('carbon-fields.complex.metabox', 'carbon-fields/metaboxes', function (OriginalComplexField) {\n  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__[\"compose\"])(applyWithSelect, applyWithDispatch)(function (props) {\n    var id = props.id,\n        field = props.field,\n        name = props.name,\n        value = props.value,\n        groupValues = props.groupValues;\n    return __webpack_provided_wp_dot_element.createElement(ComplexField, props, function (_ref2) {\n      var allGroupsAreCollapsed = _ref2.allGroupsAreCollapsed,\n          handleGroupSetup = _ref2.handleGroupSetup,\n          handleGroupFieldSetup = _ref2.handleGroupFieldSetup,\n          handleAddGroup = _ref2.handleAddGroup,\n          handleCloneGroup = _ref2.handleCloneGroup,\n          handleRemoveGroup = _ref2.handleRemoveGroup,\n          handleToggleGroup = _ref2.handleToggleGroup,\n          handleToggleAllGroups = _ref2.handleToggleAllGroups;\n      return __webpack_provided_wp_dot_element.createElement(OriginalComplexField, {\n        groupIdKey: \"id\",\n        groupFilterKey: \"name\",\n        id: id,\n        field: field,\n        name: name,\n        value: value,\n        groupValues: groupValues,\n        allGroupsAreCollapsed: allGroupsAreCollapsed,\n        onGroupSetup: handleGroupSetup,\n        onGroupFieldSetup: handleGroupFieldSetup,\n        onAddGroup: handleAddGroup,\n        onCloneGroup: handleCloneGroup,\n        onRemoveGroup: handleRemoveGroup,\n        onToggleGroup: handleToggleGroup,\n        onToggleAllGroups: handleToggleAllGroups,\n        onChange: props.onChange\n      });\n    });\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/complex/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/complex/style.scss":
/*!******************************************************!*\
  !*** ./packages/metaboxes/fields/complex/style.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/complex/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/fields/datetime/index.js":
/*!*****************************************************!*\
  !*** ./packages/metaboxes/fields/datetime/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n\n\n/**\n * External dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.date_time.metabox', 'carbon-fields/metaboxes', function (OriginalDatetimeField) {\n  return function (props) {\n    return __webpack_provided_wp_dot_element.createElement(OriginalDatetimeField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      buttonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Date', 'carbon-fields-ui')\n    }, props));\n  };\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/datetime/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/file/index.js":
/*!*************************************************!*\
  !*** ./packages/metaboxes/fields/file/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n\n\n/**\n * External dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.file.metabox', 'carbon-fields/metaboxes', function (OriginalFileField) {\n  return function (props) {\n    return __webpack_provided_wp_dot_element.createElement(OriginalFileField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      buttonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select File', 'carbon-fields-ui'),\n      mediaLibraryButtonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Use File', 'carbon-fields-ui'),\n      mediaLibraryTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select File', 'carbon-fields-ui')\n    }, props));\n  };\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/file/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/image/index.js":
/*!**************************************************!*\
  !*** ./packages/metaboxes/fields/image/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n\n\n/**\n * External dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.image.metabox', 'carbon-fields/metaboxes', function (OriginalImageField) {\n  return function (props) {\n    return __webpack_provided_wp_dot_element.createElement(OriginalImageField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      buttonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Image', 'carbon-fields-ui'),\n      mediaLibraryButtonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Use Image', 'carbon-fields-ui'),\n      mediaLibraryTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Image', 'carbon-fields-ui')\n    }, props));\n  };\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/image/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/index.js":
/*!********************************************!*\
  !*** ./packages/metaboxes/fields/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hocs_with_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hocs/with-field */ \"./packages/metaboxes/hocs/with-field/index.js\");\n/* harmony import */ var _hocs_with_conditional_logic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hocs/with-conditional-logic */ \"./packages/metaboxes/hocs/with-conditional-logic/index.js\");\n/* harmony import */ var _utils_is_gutenberg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-gutenberg */ \"./packages/metaboxes/utils/is-gutenberg.js\");\n/* harmony import */ var _association__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./association */ \"./packages/metaboxes/fields/association/index.js\");\n/* harmony import */ var _complex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./complex */ \"./packages/metaboxes/fields/complex/index.js\");\n/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datetime */ \"./packages/metaboxes/fields/datetime/index.js\");\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./file */ \"./packages/metaboxes/fields/file/index.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./image */ \"./packages/metaboxes/fields/image/index.js\");\n/* harmony import */ var _multiselect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./multiselect */ \"./packages/metaboxes/fields/multiselect/index.js\");\n/* harmony import */ var _media_gallery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./media-gallery */ \"./packages/metaboxes/fields/media-gallery/index.js\");\n/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./radio */ \"./packages/metaboxes/fields/radio/index.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidebar */ \"./packages/metaboxes/fields/sidebar/index.js\");\n/**\n * External dependencies.\n */\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n/**\n * Connects every field to the store.\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.field-edit.metabox', 'carbon-fields/metaboxes', Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(_hocs_with_field__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _hocs_with_conditional_logic__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__[\"withDispatch\"])(function (dispatch) {\n  if (Object(_utils_is_gutenberg__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()) {\n    var _dispatch = dispatch('core/editor'),\n        lockPostSaving = _dispatch.lockPostSaving,\n        unlockPostSaving = _dispatch.unlockPostSaving;\n\n    return {\n      lockSaving: lockPostSaving,\n      unlockSaving: unlockPostSaving\n    };\n  }\n\n  var _dispatch2 = dispatch('carbon-fields/metaboxes'),\n      lockSaving = _dispatch2.lockSaving,\n      unlockSaving = _dispatch2.unlockSaving;\n\n  return {\n    lockSaving: lockSaving,\n    unlockSaving: unlockSaving\n  };\n}), _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__[\"withValidation\"]));\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/media-gallery/index.js":
/*!**********************************************************!*\
  !*** ./packages/metaboxes/fields/media-gallery/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/fields/media-gallery/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n/**\n * External dependencies.\n */\n\n\n/**\n * The internal dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.media_gallery.metabox', 'carbon-fields/metaboxes', function (OriginalMediaGalleryField) {\n  return function (props) {\n    return __webpack_provided_wp_dot_element.createElement(OriginalMediaGalleryField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      buttonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Attachments', 'carbon-fields-ui'),\n      mediaLibraryButtonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Use Attachments', 'carbon-fields-ui'),\n      mediaLibraryTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Attachments', 'carbon-fields-ui')\n    }, props));\n  };\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/media-gallery/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/media-gallery/style.scss":
/*!************************************************************!*\
  !*** ./packages/metaboxes/fields/media-gallery/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/media-gallery/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/fields/multiselect/index.js":
/*!********************************************************!*\
  !*** ./packages/metaboxes/fields/multiselect/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/fields/multiselect/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/multiselect/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/multiselect/style.scss":
/*!**********************************************************!*\
  !*** ./packages/metaboxes/fields/multiselect/style.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/multiselect/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/fields/radio/index.js":
/*!**************************************************!*\
  !*** ./packages/metaboxes/fields/radio/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/fields/radio/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * The internal dependencies.\n */\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/radio/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/radio/style.scss":
/*!****************************************************!*\
  !*** ./packages/metaboxes/fields/radio/style.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/radio/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/fields/sidebar/index.js":
/*!****************************************************!*\
  !*** ./packages/metaboxes/fields/sidebar/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * External dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.sidebar.metabox', 'carbon-fields/metaboxes', Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"withDispatch\"])(function (dispatch) {\n  var _dispatch = dispatch('carbon-fields/metaboxes'),\n      receiveSidebar = _dispatch.receiveSidebar;\n\n  return {\n    onAdded: receiveSidebar\n  };\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/sidebar/index.js?");

/***/ }),

/***/ "./packages/metaboxes/hocs/with-conditional-logic/index.js":
/*!*****************************************************************!*\
  !*** ./packages/metaboxes/hocs/with-conditional-logic/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var callbag_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callbag-of */ \"./node_modules/callbag-of/dist/callbag-of.esm.js\");\n/* harmony import */ var callbag_take_until__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! callbag-take-until */ \"./node_modules/callbag-take-until/index.js\");\n/* harmony import */ var callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! callbag-distinct-until-changed */ \"./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_7__);\n\n\n/**\n * External dependencies.\n */\n\n\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Returns all root fields from the given holder\n * while excluding some of them.\n *\n * @param  {Object}   fieldsHolder\n * @param  {Object}   allFields\n * @param  {string[]} excludedIds\n * @return {Object[]}\n */\n\nfunction getFieldsFromFieldsHolder(fieldsHolder, allFields) {\n  var excludedIds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"pick\"])(allFields, Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"difference\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"map\"])(fieldsHolder.fields, 'id'), excludedIds));\n}\n/**\n * Adds the `parent.` parent prefix to field's name.\n *\n * @param  {Object[]} fields\n * @param  {number}   depth\n * @return {Array[]}\n */\n\n\nfunction mapParentPrefix(fields) {\n  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"map\"])(fields, function (field) {\n    return [field.id, \"\".concat(Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"repeat\"])('parent.', depth)).concat(field.base_name)];\n  });\n}\n/**\n * The function used to track dependencies required\n * by conditional logic.\n *\n * @param  {Object} props\n * @param  {Object} component\n * @return {Object}\n */\n\n\nfunction input(props, component) {\n  var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__[\"select\"])('carbon-fields/metaboxes'),\n      getFieldsByContainerId = _select.getFieldsByContainerId;\n\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_4__[\"pipe\"])(Object(callbag_basics__WEBPACK_IMPORTED_MODULE_4__[\"merge\"])(Object(callbag_of__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getFieldsByContainerId(props.containerId)), Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_7__[\"fromSelector\"])(getFieldsByContainerId, props.containerId)), Object(callbag_take_until__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component.unmount), Object(callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEqual\"]));\n}\n/**\n * The function that provides the data that needs to be\n * evaluated by conditional logic.\n *\n * @param  {Object} props\n * @param  {Object} fields\n * @return {Object}\n */\n\n\nfunction output(props, fields) {\n  fields = Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"keyBy\"])(fields, 'id');\n  var container = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__[\"select\"])('carbon-fields/metaboxes').getContainerById(props.containerId);\n  var isTopLevelField = Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"some\"])(container.fields, ['id', props.id]);\n  var siblingFields = [];\n\n  if (isTopLevelField) {\n    siblingFields = getFieldsFromFieldsHolder(container, fields, [props.id]);\n    siblingFields = mapParentPrefix(siblingFields);\n  } else {\n    var fieldName = props.name.replace(new RegExp(\"^\".concat(window.cf.config.compactInputKey, \"\\\\[(.+?)\\\\]\")), '$1'); // Get the root field.\n\n    var rootField = Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"find\"])(fields, function (field) {\n      return field.container_id === props.containerId && Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"startsWith\"])(fieldName, field.name);\n    }); // Get the hierarchy.\n\n    var path = fieldName.split(/\\[|\\]/g); // Remove the chunk with name of root field\n    // because we already have it.\n\n    path.shift(); // Remove any chunks that don't have a value.\n\n    path = path.filter(function (chunk) {\n      return chunk !== '';\n    }); // Remove the chunk with name of field\n    // because we don't needed it.\n\n    path.pop(); // Keep reference to the depth\n    // so we can add the `parent.` prefix.\n\n    var depth = path.reduce(function (accumulator, chunk) {\n      return isNaN(chunk) ? accumulator + 1 : accumulator;\n    }, 0); // Collect fields that are siblings of root field.\n\n    siblingFields = getFieldsFromFieldsHolder(container, fields, [rootField.id]);\n    siblingFields = mapParentPrefix(siblingFields, depth + 1); // Keep reference to the full path of the field.\n\n    var pathPrefix = \"\".concat(rootField.id, \".value\");\n\n    while (path.length > 0) {\n      var chunk = path.shift();\n      var isGroup = !isNaN(chunk);\n      var isNestedComplex = !isGroup;\n\n      if (isGroup) {\n        pathPrefix = \"\".concat(pathPrefix, \"[\").concat(chunk, \"]\");\n        var group = Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"get\"])(fields, pathPrefix);\n        var groupFields = getFieldsFromFieldsHolder(group, fields, [props.id]);\n        siblingFields = siblingFields.concat(mapParentPrefix(groupFields, depth));\n        pathPrefix = \"\".concat(pathPrefix, \".fields\");\n      }\n\n      if (isNestedComplex) {\n        var groupField = Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"find\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"get\"])(fields, pathPrefix), ['name', chunk]);\n        pathPrefix = \"\".concat(groupField.id, \".value\");\n        depth--;\n      }\n    }\n  }\n\n  siblingFields = siblingFields.map(function (_ref) {\n    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n        id = _ref2[0],\n        name = _ref2[1];\n\n    return [name, Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"get\"])(fields, \"\".concat(id, \".value\"))];\n  });\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"fromPairs\"])(siblingFields);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_7__[\"withConditionalLogic\"])(input, output));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/hocs/with-conditional-logic/index.js?");

/***/ }),

/***/ "./packages/metaboxes/hocs/with-container/index.js":
/*!*********************************************************!*\
  !*** ./packages/metaboxes/hocs/with-container/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * External dependencies.\n */\n\n\n/**\n * Creates a high-order component which adds connection\n * to the store.\n *\n * @param  {Function} Component\n * @return {Function}\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__[\"createHigherOrderComponent\"])(function (Component) {\n  var applyWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"withSelect\"])(function (select, _ref) {\n    var id = _ref.id;\n    var container = select('carbon-fields/metaboxes').getContainerById(id);\n    return {\n      container: container\n    };\n  });\n  return applyWithSelect(Component);\n}, 'withContainer'));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/hocs/with-container/index.js?");

/***/ }),

/***/ "./packages/metaboxes/hocs/with-field/index.js":
/*!*****************************************************!*\
  !*** ./packages/metaboxes/hocs/with-field/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * External dependencies.\n */\n\n\n/**\n * Creates a high-order component which adds connection\n * to the store.\n *\n * @param  {Function} Component\n * @return {Function}\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__[\"createHigherOrderComponent\"])(function (Component) {\n  var applyWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"withSelect\"])(function (select, props) {\n    var _window$cf$config = window.cf.config,\n        compactInput = _window$cf$config.compactInput,\n        compactInputKey = _window$cf$config.compactInputKey;\n    var field = select('carbon-fields/metaboxes').getFieldById(props.id);\n    var value = field && field.value;\n    var name = props.name || field.name;\n    /**\n     * Wrap top-level field names in compact input key.\n     *\n     * The fields in widgets don't need this prefix because\n     * their input is already compacted by the `widget` namespace.\n     */\n\n    if (compactInput && !props.name && name.indexOf('widget-carbon_fields') === -1) {\n      name = \"\".concat(compactInputKey, \"[\").concat(name, \"]\");\n    }\n\n    return {\n      field: field,\n      name: name,\n      value: value\n    };\n  });\n  var applyWithDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"withDispatch\"])(function (dispatch) {\n    var _dispatch = dispatch('carbon-fields/metaboxes'),\n        updateFieldValue = _dispatch.updateFieldValue;\n\n    return {\n      onChange: updateFieldValue\n    };\n  });\n  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(applyWithSelect, applyWithDispatch)(Component);\n}, 'withField'));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/hocs/with-field/index.js?");

/***/ }),

/***/ "./packages/metaboxes/index.js":
/*!*************************************!*\
  !*** ./packages/metaboxes/index.js ***!
  \*************************************/
/*! exports provided: registerContainerType, getContainerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./packages/metaboxes/store/index.js\");\n/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields */ \"./packages/metaboxes/fields/index.js\");\n/* harmony import */ var _monitors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monitors */ \"./packages/metaboxes/monitors/index.js\");\n/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers */ \"./packages/metaboxes/containers/index.js\");\n/* harmony import */ var _utils_is_gutenberg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/is-gutenberg */ \"./packages/metaboxes/utils/is-gutenberg.js\");\n/* harmony import */ var _containers_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/registry */ \"./packages/metaboxes/containers/registry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"registerContainerType\", function() { return _containers_registry__WEBPACK_IMPORTED_MODULE_7__[\"registerContainerType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getContainerType\", function() { return _containers_registry__WEBPACK_IMPORTED_MODULE_7__[\"getContainerType\"]; });\n\n/**\n * External dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n\n\n/**\n * Public API.\n */\n\n\n/**\n * Sets the locale data for the package type\n */\n\nObject(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"setLocaleData\"])(window.cf.config.locale, 'carbon-fields-ui');\n/**\n * Determines the rendering context.\n *\n * @type {string}\n */\n\nvar context = Object(_utils_is_gutenberg__WEBPACK_IMPORTED_MODULE_6__[\"default\"])() ? 'gutenberg' : 'classic';\n/**\n * Abracadabra! Poof! Containers everywhere ...\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addAction\"])('carbon-fields.init', 'carbon-fields/metaboxes', function () {\n  Object(_containers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(context);\n  Object(_monitors__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(context);\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/index.js?");

/***/ }),

/***/ "./packages/metaboxes/lib/constants.js":
/*!*********************************************!*\
  !*** ./packages/metaboxes/lib/constants.js ***!
  \*********************************************/
/*! exports provided: PAGE_NOW_WIDGETS, PAGE_NOW_CUSTOMIZE, CARBON_FIELDS_CONTAINER_ID_PREFIX, CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAGE_NOW_WIDGETS\", function() { return PAGE_NOW_WIDGETS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAGE_NOW_CUSTOMIZE\", function() { return PAGE_NOW_CUSTOMIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CARBON_FIELDS_CONTAINER_ID_PREFIX\", function() { return CARBON_FIELDS_CONTAINER_ID_PREFIX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX\", function() { return CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX; });\nvar PAGE_NOW_WIDGETS = 'widgets.php';\nvar PAGE_NOW_CUSTOMIZE = 'customize.php';\nvar CARBON_FIELDS_CONTAINER_ID_PREFIX = 'carbon_fields_container_';\nvar CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX = 'carbon_fields_';\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/lib/constants.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/index.js":
/*!***************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return aperture; });\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _post_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-parent */ \"./packages/metaboxes/monitors/conditional-display/aperture/post-parent.js\");\n/* harmony import */ var _post_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-format */ \"./packages/metaboxes/monitors/conditional-display/aperture/post-format.js\");\n/* harmony import */ var _post_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-template */ \"./packages/metaboxes/monitors/conditional-display/aperture/post-template.js\");\n/* harmony import */ var _post_term__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-term */ \"./packages/metaboxes/monitors/conditional-display/aperture/post-term.js\");\n/* harmony import */ var _term_parent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./term-parent */ \"./packages/metaboxes/monitors/conditional-display/aperture/term-parent.js\");\n/* harmony import */ var _user_role__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-role */ \"./packages/metaboxes/monitors/conditional-display/aperture/user-role.js\");\n/**\n * External dependencies.\n */\n\n\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n\n\n\n/**\n * The function that controls the stream of side effects.\n *\n * @param  {Object} props\n * @param  {string} props.context\n * @return {Object}\n */\n// eslint-disable-next-line no-unused-vars\n\nfunction aperture(component, _ref) {\n  var context = _ref.context;\n  var postParent$ = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"applyFilters\"])(\"carbon-fields.conditional-display-post-parent.\".concat(context));\n  var postFormat$ = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"applyFilters\"])(\"carbon-fields.conditional-display-post-format.\".concat(context));\n  var postTemplate$ = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"applyFilters\"])(\"carbon-fields.conditional-display-post-template.\".concat(context));\n  var postTerm$ = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"applyFilters\"])(\"carbon-fields.conditional-display-post-term.\".concat(context));\n  var termParent$ = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"applyFilters\"])(\"carbon-fields.conditional-display-term-parent.\".concat(context));\n  var userRole$ = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"applyFilters\"])(\"carbon-fields.conditional-display-user-role.\".concat(context));\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_3__[\"pipe\"])(Object(callbag_basics__WEBPACK_IMPORTED_MODULE_3__[\"merge\"])(postParent$, postFormat$, postTemplate$, postTerm$, termParent$, userRole$), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_3__[\"scan\"])(function (previous, current) {\n    return immer__WEBPACK_IMPORTED_MODULE_0___default()(previous, function (draft) {\n      Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"assign\"])(draft, current);\n    });\n  }));\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/index.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/post-format.js":
/*!*********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/post-format.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var callbag_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-of */ \"./node_modules/callbag-of/dist/callbag-of.esm.js\");\n/* harmony import */ var callbag_start_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.js\");\n/* harmony import */ var callbag_from_delegated_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! callbag-from-delegated-event */ \"./node_modules/callbag-from-delegated-event/index.js\");\n/* harmony import */ var callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! callbag-distinct-until-changed */ \"./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_7__);\n/**\n * External dependencies.\n */\n\n\n\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * The default state.\n *\n * @type {Object}\n */\n\nvar INITIAL_STATE = {\n  post_format: 'standard'\n};\n/**\n * Extracts `post_format` from the input.\n *\n * @param  {Object} input\n * @return {Object}\n */\n\nfunction getPostFormatFromRadioInput(input) {\n  var value = input.value; // Normalize the value of \"Standard\" input.\n\n  if (value === '0') {\n    value = 'standard';\n  }\n\n  return {\n    post_format: value\n  };\n}\n/**\n * Defines the side effects for Classic Editor.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__[\"addFilter\"])('carbon-fields.conditional-display-post-format.classic', 'carbon-fields/metaboxes', function () {\n  var node = document.querySelector('div#post-formats-select');\n\n  if (!node) {\n    return Object(callbag_of__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(INITIAL_STATE);\n  }\n\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"pipe\"])(Object(callbag_from_delegated_event__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(node, 'input.post-format', 'change'), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"map\"])(function (_ref) {\n    var target = _ref.target;\n    return getPostFormatFromRadioInput(target);\n  }), Object(callbag_start_with__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getPostFormatFromRadioInput(node.querySelector('input.post-format:checked'))));\n});\n/**\n * Defines the side effects for Gutenberg.\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__[\"addFilter\"])('carbon-fields.conditional-display-post-format.gutenberg', 'carbon-fields/metaboxes', function () {\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"pipe\"])(Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_7__[\"fromSelector\"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__[\"select\"])('core/editor').getEditedPostAttribute, 'format'), Object(callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"filter\"])(Boolean), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"map\"])(function (postFormat) {\n    return {\n      post_format: postFormat\n    };\n  }), Object(callbag_start_with__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(INITIAL_STATE));\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/post-format.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/post-parent.js":
/*!*********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/post-parent.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var callbag_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callbag-of */ \"./node_modules/callbag-of/dist/callbag-of.esm.js\");\n/* harmony import */ var callbag_start_with__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.js\");\n/* harmony import */ var callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! callbag-distinct-until-changed */ \"./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_get_parent_id_from_option__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/get-parent-id-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-parent-id-from-option.js\");\n/* harmony import */ var _utils_get_level_from_option__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/get-level-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-level-from-option.js\");\n/* harmony import */ var _utils_get_ancestors_from_option__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/get-ancestors-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-ancestors-from-option.js\");\n\n\n/**\n * External dependencies.\n */\n\n\n\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n/**\n * The default state.\n *\n * @type {Object}\n */\n\nvar INITIAL_STATE = {\n  post_ancestors: [],\n  post_parent_id: 0,\n  post_level: 1\n};\n/**\n * Extracts the `post_ancestors`, `post_parent_id` & `post_level` from the select.\n *\n * @param  {Object} node\n * @return {Object}\n */\n\nfunction getParentIdAncestorsAndLevelFromSelect(node) {\n  var option = node.options[node.selectedIndex];\n  var ancestors = Object(_utils_get_ancestors_from_option__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(option);\n  var parentId = Object(_utils_get_parent_id_from_option__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(option);\n  var level = Object(_utils_get_level_from_option__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(option) + 1;\n  return {\n    post_ancestors: ancestors,\n    post_parent_id: parentId,\n    post_level: level\n  };\n}\n/**\n * Extracts `post_ancestors` from the list.\n *\n * @param  {number}   parentId\n * @param  {Object[]} posts\n * @param  {Array}    ancestors\n * @return {number[]}\n */\n\n\nfunction getAncestorsFromPostsList(parentId, posts) {\n  var ancestors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var parent = Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"find\"])(posts, ['id', parentId]);\n\n  if (!parent) {\n    return ancestors;\n  }\n\n  ancestors.unshift(parent.id);\n\n  if (parent.parent) {\n    return getAncestorsFromPostsList(parent.parent, posts, ancestors);\n  }\n\n  return ancestors;\n}\n/**\n * Defines the side effects for Classic Editor.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__[\"addFilter\"])('carbon-fields.conditional-display-post-parent.classic', 'carbon-fields/metaboxes', function () {\n  var node = document.querySelector('select#parent_id');\n\n  if (!node) {\n    return Object(callbag_of__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(INITIAL_STATE);\n  }\n\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_7__[\"pipe\"])(Object(callbag_basics__WEBPACK_IMPORTED_MODULE_7__[\"fromEvent\"])(node, 'change'), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_7__[\"map\"])(function (_ref) {\n    var target = _ref.target;\n    return getParentIdAncestorsAndLevelFromSelect(target);\n  }), Object(callbag_start_with__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(getParentIdAncestorsAndLevelFromSelect(node)));\n});\n/**\n * Defines the side effects for Gutenberg.\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__[\"addFilter\"])('carbon-fields.conditional-display-post-parent.gutenberg', 'carbon-fields/metaboxes', function () {\n  var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__[\"select\"])('core'),\n      getPostType = _select.getPostType,\n      getEntityRecords = _select.getEntityRecords;\n\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_7__[\"pipe\"])(Object(callbag_basics__WEBPACK_IMPORTED_MODULE_7__[\"combine\"])(Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_8__[\"fromSelector\"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__[\"select\"])('core/editor').getCurrentPostId), Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_8__[\"fromSelector\"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__[\"select\"])('core/editor').getEditedPostAttribute, 'type'), Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_8__[\"fromSelector\"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__[\"select\"])('core/editor').getEditedPostAttribute, 'parent')), Object(callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEqual\"]), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_7__[\"map\"])(function (_ref2) {\n    var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 3),\n        postId = _ref3[0],\n        postTypeSlug = _ref3[1],\n        parentId = _ref3[2];\n\n    parentId = parseInt(parentId, 10);\n\n    if (isNaN(parentId)) {\n      return INITIAL_STATE;\n    }\n\n    var postType = getPostType(postTypeSlug);\n    var isHierarchical = Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"get\"])(postType, ['hierarchical'], false);\n\n    if (!isHierarchical) {\n      return INITIAL_STATE;\n    } // Borrowed from https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/page-attributes/parent.js\n\n\n    var items = getEntityRecords('postType', postTypeSlug, {\n      per_page: -1,\n      exclude: postId,\n      parent_exclude: postId,\n      orderby: 'menu_order',\n      order: 'asc'\n    }) || [];\n    var ancestors = getAncestorsFromPostsList(parentId, items);\n    var level = ancestors.length + 1;\n    return {\n      post_ancestors: ancestors,\n      post_parent_id: parentId,\n      post_level: level\n    };\n  }));\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/post-parent.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/post-template.js":
/*!***********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/post-template.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var callbag_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-of */ \"./node_modules/callbag-of/dist/callbag-of.esm.js\");\n/* harmony import */ var callbag_start_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.js\");\n/* harmony import */ var callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! callbag-distinct-until-changed */ \"./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_7__);\n/**\n * External dependencies.\n */\n\n\n\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * The default state.\n *\n * @type {Object}\n */\n\nvar INITIAL_STATE = {\n  post_template: ''\n};\n/**\n * Extracts `post_template` from the select.\n *\n * @param  {Object} node\n * @return {Object}\n */\n\nfunction getPostTemplateFromSelect(node) {\n  var value = node.value; // In Gutenberg for the \"Default\" template is used an empty string.\n\n  if (value === 'default') {\n    value = '';\n  }\n\n  return {\n    post_template: value\n  };\n}\n/**\n * Defines the side effects for Classic Editor.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__[\"addFilter\"])('carbon-fields.conditional-display-post-template.classic', 'carbon-fields/metaboxes', function () {\n  var node = document.querySelector('select#page_template');\n\n  if (!node) {\n    return Object(callbag_of__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(INITIAL_STATE);\n  }\n\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"pipe\"])(Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"fromEvent\"])(node, 'change'), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"map\"])(function (_ref) {\n    var target = _ref.target;\n    return getPostTemplateFromSelect(target);\n  }), Object(callbag_start_with__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getPostTemplateFromSelect(node)));\n});\n/**\n * Defines the side effects for Gutenberg.\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__[\"addFilter\"])('carbon-fields.conditional-display-post-template.gutenberg', 'carbon-fields/metaboxes', function () {\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"pipe\"])(Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_7__[\"fromSelector\"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__[\"select\"])('core/editor').getEditedPostAttribute, 'template'), Object(callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"filter\"])(lodash__WEBPACK_IMPORTED_MODULE_5__[\"isString\"]), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"map\"])(function (postTemplate) {\n    return {\n      post_template: postTemplate\n    };\n  }), Object(callbag_start_with__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(INITIAL_STATE));\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/post-template.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/post-term.js":
/*!*******************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/post-term.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var callbag_start_with__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.js\");\n/* harmony import */ var callbag_from_delegated_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! callbag-from-delegated-event */ \"./node_modules/callbag-from-delegated-event/index.js\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n/**\n * External dependencies.\n */\n\n\n\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Applies a monkey patch to the specified method of `window.tagBox` API\n * so we can detect changes of the non-hierarchical taxonomies.\n *\n * @param  {Object} tagBox\n * @param  {string} method\n * @return {void}\n */\n\nfunction patchWordPressTagBoxAPI(tagBox, method) {\n  tagBox[\"original_\".concat(method)] = tagBox[method];\n\n  tagBox[method] = function () {\n    var event = new Event('change');\n    var textarea = window.jQuery(arguments.length <= 0 ? undefined : arguments[0]).closest('.postbox').find('textarea.the-tags').get(0);\n    var result = tagBox[\"original_\".concat(method)].apply(tagBox, arguments);\n    textarea.dispatchEvent(event);\n    return result;\n  };\n}\n\nif (window.tagBox) {\n  patchWordPressTagBoxAPI(window.tagBox, 'parseTags');\n  patchWordPressTagBoxAPI(window.tagBox, 'flushTags');\n}\n/**\n * Extracts the terms of a hierarchical taxonomy.\n *\n * @param  {string} taxonomy\n * @return {Object}\n */\n\n\nfunction getTermsFromChecklist(taxonomy) {\n  var inputs = document.querySelectorAll(\"#\".concat(taxonomy, \"checklist input[type=\\\"checkbox\\\"]:checked\"));\n  return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(inputs).reduce(function (memo, input) {\n    var value = parseInt(input.value, 10);\n    memo[taxonomy].push(value);\n    return memo;\n  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, taxonomy, []));\n}\n/**\n * Extracts the terms of a non-hierarchical taxonomy.\n *\n * @param  {string} taxonomy\n * @return {Object}\n */\n\n\nfunction getTermsFromText(taxonomy) {\n  var node = document.querySelector(\"#tagsdiv-\".concat(taxonomy, \" textarea.the-tags\"));\n  var terms = node.value ? node.value.split(window.tagsSuggestL10n.tagDelimiter) : [];\n  return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, taxonomy, terms);\n}\n/**\n * Keeps track of the hierarchical taxonomies like `categories`.\n *\n * @return {Function}\n */\n\n\nfunction trackHierarchicalTaxonomies() {\n  var nodes = document.querySelectorAll('div[id^=\"taxonomy-\"]');\n  return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(nodes).map(function (node) {\n    var taxonomy = node.id.replace('taxonomy-', '');\n    return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"pipe\"])(Object(callbag_from_delegated_event__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(node.querySelector(\"#\".concat(taxonomy, \"checklist\")), 'input[type=\"checkbox\"]', 'change'), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"scan\"])(function (stack, _ref2) {\n      var target = _ref2.target;\n      return immer__WEBPACK_IMPORTED_MODULE_3___default()(stack, function (draft) {\n        var value = parseInt(target.value, 10);\n\n        if (target.checked) {\n          draft[taxonomy].push(value);\n        } else {\n          Object(lodash__WEBPACK_IMPORTED_MODULE_9__[\"pull\"])(draft[taxonomy], value);\n        }\n      });\n    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, taxonomy, [])), Object(callbag_start_with__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(getTermsFromChecklist(taxonomy)));\n  });\n}\n/**\n * Keeps track of the non-hierarchical taxonomies like `tags`.\n *\n * @return {Function}\n */\n\n\nfunction trackNonHierarchicalTaxonomies() {\n  var nodes = document.querySelectorAll('div[id^=\"tagsdiv-\"]');\n  return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(nodes).map(function (node) {\n    var taxonomy = node.id.replace('tagsdiv-', '');\n    return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"pipe\"])(Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"fromEvent\"])(node.querySelector('textarea.the-tags'), 'change'), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"map\"])(function (_ref3) {\n      var target = _ref3.target;\n      return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, taxonomy, target.value ? target.value.split(window.tagsSuggestL10n.tagDelimiter) : []);\n    }), Object(callbag_start_with__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(getTermsFromText(taxonomy)));\n  });\n}\n/**\n * Defines the side effects for Classic Editor.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__[\"addFilter\"])('carbon-fields.conditional-display-post-term.classic', 'carbon-fields/metaboxes', function () {\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"pipe\"])(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"merge\"].apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(trackHierarchicalTaxonomies()).concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(trackNonHierarchicalTaxonomies()))), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"scan\"])(function (previous, current) {\n    return {\n      post_term: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, previous.post_term, current)\n    };\n  }, {\n    post_term: {}\n  }));\n});\n/**\n * Defines the side effects for Gutenberg.\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__[\"addFilter\"])('carbon-fields.conditional-display-post-term.gutenberg', 'carbon-fields/metaboxes', function () {\n  var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__[\"select\"])('core'),\n      getTaxonomies = _select.getTaxonomies;\n\n  var _select2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__[\"select\"])('core/editor'),\n      getEditedPostAttribute = _select2.getEditedPostAttribute; // Borrowed from https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/post-taxonomies/index.js\n\n\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"pipe\"])(Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_10__[\"fromSelector\"])(getTaxonomies, {\n    per_page: -1\n  }), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"filter\"])(Boolean), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_6__[\"map\"])(function (taxonomies) {\n    var pairs = taxonomies.map(function (taxonomy) {\n      return [taxonomy.slug, getEditedPostAttribute(taxonomy.rest_base) || []];\n    });\n    return {\n      post_term: Object(lodash__WEBPACK_IMPORTED_MODULE_9__[\"fromPairs\"])(pairs)\n    };\n  }));\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/post-term.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/term-parent.js":
/*!*********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/term-parent.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var callbag_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-of */ \"./node_modules/callbag-of/dist/callbag-of.esm.js\");\n/* harmony import */ var callbag_start_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.js\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_get_parent_id_from_option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/get-parent-id-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-parent-id-from-option.js\");\n/* harmony import */ var _utils_get_level_from_option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/get-level-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-level-from-option.js\");\n/* harmony import */ var _utils_get_ancestors_from_option__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/get-ancestors-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-ancestors-from-option.js\");\n/**\n * External dependencies.\n */\n\n\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n/**\n * The default state.\n *\n * @type {Object}\n */\n\nvar INITIAL_STATE = {\n  term_ancestors: [],\n  term_parent: 0,\n  term_level: 1\n};\n/**\n * Extracts the `term_ancestors`, `term_parent` & `term_level` from the select.\n *\n * @param  {Object} node\n * @return {Object}\n */\n\nfunction getParentIdAncestorsAndLevelFromSelect(node) {\n  var option = node.options[node.selectedIndex];\n  var ancestors = Object(_utils_get_ancestors_from_option__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(option);\n  var parentId = Object(_utils_get_parent_id_from_option__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(option);\n  var level = Object(_utils_get_level_from_option__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(option) + 1;\n  return {\n    term_ancestors: ancestors,\n    term_parent: parentId,\n    term_level: level\n  };\n}\n/**\n * Defines the side effects for Classic Editor.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__[\"addFilter\"])('carbon-fields.conditional-display-term-parent.classic', 'carbon-fields/metaboxes', function () {\n  var node = document.querySelector('select#parent');\n\n  if (!node) {\n    return Object(callbag_of__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(INITIAL_STATE);\n  }\n\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_3__[\"pipe\"])(Object(callbag_basics__WEBPACK_IMPORTED_MODULE_3__[\"fromEvent\"])(node, 'change'), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_3__[\"map\"])(function (_ref) {\n    var target = _ref.target;\n    return getParentIdAncestorsAndLevelFromSelect(target);\n  }), Object(callbag_start_with__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getParentIdAncestorsAndLevelFromSelect(node)));\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/term-parent.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/user-role.js":
/*!*******************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/user-role.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var callbag_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-of */ \"./node_modules/callbag-of/dist/callbag-of.esm.js\");\n/* harmony import */ var callbag_start_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.js\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * External dependencies.\n */\n\n\n\n\n/**\n * The default state.\n *\n * @type {Object}\n */\n\nvar INITIAL_STATE = {\n  user_role: ''\n};\n/**\n * Extracts `user_role` from a select.\n *\n * @param  {Object} node\n * @return {Object}\n */\n\nfunction getRoleFromSelect(node) {\n  return {\n    user_role: node.value\n  };\n}\n/**\n * Defines the side effects for Classic Editor.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__[\"addFilter\"])('carbon-fields.conditional-display-user-role.classic', 'carbon-fields/metaboxes', function () {\n  var node = document.querySelector('select#role');\n\n  if (!node) {\n    var fieldset = document.querySelector('fieldset[data-profile-role]'); // The selectbox doesn't exist on the \"Profile\" page.\n    // So we need to read the role from the container in DOM.\n\n    if (fieldset) {\n      return Object(callbag_of__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        user_role: fieldset.dataset.profileRole\n      });\n    }\n\n    return Object(callbag_of__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(INITIAL_STATE);\n  }\n\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_3__[\"pipe\"])(Object(callbag_basics__WEBPACK_IMPORTED_MODULE_3__[\"fromEvent\"])(node, 'change'), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_3__[\"map\"])(function (_ref) {\n    var target = _ref.target;\n    return getRoleFromSelect(target);\n  }), Object(callbag_start_with__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getRoleFromSelect(node)));\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/user-role.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/comparers/any-contain.js":
/*!**********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/comparers/any-contain.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/comparers/base.js\");\n\n\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  /**\n   * @inheritdoc\n   */\n  operators: ['IN', 'NOT IN'],\n\n  /**\n   * @inheritdoc\n   */\n  evaluate: function evaluate(a, operator, b) {\n    switch (operator) {\n      case 'IN':\n        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"intersection\"])(a, b).length > 0;\n\n      case 'NOT IN':\n        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"intersection\"])(a, b).length === 0;\n\n      default:\n        return false;\n    }\n  }\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/comparers/any-contain.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/comparers/any-equality.js":
/*!***********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/comparers/any-equality.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/comparers/base.js\");\n\n\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  /**\n   * @inheritdoc\n   */\n  operators: ['=', '!='],\n\n  /**\n   * @inheritdoc\n   */\n  evaluate: function evaluate(a, operator, b) {\n    switch (operator) {\n      case '=':\n        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"includes\"])(a, b);\n\n      case '!=':\n        return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"includes\"])(a, b);\n\n      default:\n        return false;\n    }\n  }\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/comparers/any-equality.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/comparers/base.js":
/*!***************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/comparers/base.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  /**\n   * The supported operators.\n   *\n   * @type {string[]}\n   */\n  operators: [],\n\n  /**\n   * Checks if the operator is supported.\n   *\n   * @param  {string} operator\n   * @return {boolean}\n   */\n  isOperatorSupported: function isOperatorSupported(operator) {\n    return this.operators.indexOf(operator) > -1;\n  },\n\n  /**\n   * Performs the comparison.\n   *\n   * @param  {mixed}  a\n   * @param  {string} operator\n   * @param  {mixed}  b\n   * @return {boolean}\n   */\n  evaluate: function evaluate() {\n    return false;\n  }\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/comparers/base.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/comparers/contain.js":
/*!******************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/comparers/contain.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/comparers/base.js\");\n\n\n/**\n * Internal dependencies.\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  /**\n   * @inheritdoc\n   */\n  operators: ['IN', 'NOT IN'],\n\n  /**\n   * @inheritdoc\n   */\n  evaluate: function evaluate(a, operator, b) {\n    switch (operator) {\n      case 'IN':\n        return b.indexOf(a) > -1;\n\n      case 'NOT IN':\n        return b.indexOf(a) === -1;\n\n      default:\n        return false;\n    }\n  }\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/comparers/contain.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/comparers/equality.js":
/*!*******************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/comparers/equality.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/comparers/base.js\");\n\n\n/* eslint eqeqeq: \"off\" */\n\n/**\n * Internal dependencies.\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  /**\n   * @inheritdoc\n   */\n  operators: ['=', '!='],\n\n  /**\n   * @inheritdoc\n   */\n  evaluate: function evaluate(a, operator, b) {\n    switch (operator) {\n      case '=':\n        return a == b;\n\n      case '!=':\n        return a != b;\n\n      default:\n        return false;\n    }\n  }\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/comparers/equality.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/comparers/scalar.js":
/*!*****************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/comparers/scalar.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/comparers/base.js\");\n\n\n/**\n * Internal dependencies.\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  /**\n   * @inheritdoc\n   */\n  operators: ['>', '>=', '<', '<='],\n\n  /**\n   * @inheritdoc\n   */\n  evaluate: function evaluate(a, operator, b) {\n    switch (operator) {\n      case '>':\n        return a > b;\n\n      case '>=':\n        return a >= b;\n\n      case '<':\n        return a < b;\n\n      case '<=':\n        return a <= b;\n\n      default:\n        return false;\n    }\n  }\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/comparers/scalar.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/base.js":
/*!****************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/base.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comparers_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comparers/equality */ \"./packages/metaboxes/monitors/conditional-display/comparers/equality.js\");\n/* harmony import */ var _comparers_contain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comparers/contain */ \"./packages/metaboxes/monitors/conditional-display/comparers/contain.js\");\n/* harmony import */ var _comparers_scalar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comparers/scalar */ \"./packages/metaboxes/monitors/conditional-display/comparers/scalar.js\");\n/**\n * External dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  /**\n   * The supported comparers.\n   *\n   * @type {Function[]}\n   */\n  comparers: [_comparers_equality__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _comparers_contain__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _comparers_scalar__WEBPACK_IMPORTED_MODULE_4__[\"default\"]],\n\n  /**\n   * Checks if the condition is fulfiled.\n   *\n   * @param  {Object} definition\n   * @param  {Object} values\n   * @return {boolean}\n   */\n  isFulfiled: function isFulfiled(definition, values) {\n    var compare = definition.compare,\n        value = definition.value;\n    return this.firstComparerIsCorrect(this.getEnvironmentValue(definition, values), compare, value);\n  },\n\n  /**\n   * Checks if any comparer is correct for `a` and `b`.\n   *\n   * @param  {mixed}  a\n   * @param  {string} operator\n   * @param  {mixed}  b\n   * @return {boolean}\n   */\n  firstComparerIsCorrect: function firstComparerIsCorrect(a, operator, b) {\n    var comparer = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"find\"])(this.comparers, function (item) {\n      return item.isOperatorSupported(operator);\n    });\n\n    if (!comparer) {\n      // eslint-disable-next-line no-console\n      console.error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"sprintf\"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])('Unsupported container condition comparison operator used - \"%1$s\".', 'carbon-fields-ui'), operator));\n      return false;\n    }\n\n    return comparer.evaluate(a, operator, b);\n  },\n\n  /**\n   * Returns the value from the environment.\n   *\n   * @param  {Object} definition\n   * @param  {Object} values\n   * @return {Object}\n   */\n  getEnvironmentValue: function getEnvironmentValue(definition, values) {\n    return values[definition.type];\n  }\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/base.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/boolean.js":
/*!*******************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/boolean.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\");\n\n\n/**\n * Internal dependencies.\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  /**\n   * @inheritdoc\n   */\n  getEnvironmentValue: function getEnvironmentValue() {\n    return true;\n  }\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/boolean.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/post-ancestor-id.js":
/*!****************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/post-ancestor-id.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comparers_any_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comparers/any-equality */ \"./packages/metaboxes/monitors/conditional-display/comparers/any-equality.js\");\n/* harmony import */ var _comparers_any_contain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comparers/any-contain */ \"./packages/metaboxes/monitors/conditional-display/comparers/any-contain.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\");\n\n\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  /**\n   * @inheritdoc\n   */\n  comparers: [_comparers_any_equality__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _comparers_any_contain__WEBPACK_IMPORTED_MODULE_3__[\"default\"]],\n\n  /**\n   * @inheritdoc\n   */\n  getEnvironmentValue: function getEnvironmentValue(definition, values) {\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(values, 'post_ancestors', []);\n  }\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/post-ancestor-id.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/post-template.js":
/*!*************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/post-template.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\");\n\n\n/**\n * Internal dependencies.\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  /**\n   * @inheritdoc\n   */\n  isFulfiled: function isFulfiled(definition, values) {\n    definition = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, definition); // In Gutenberg for the \"Default\" template is used an empty string.\n\n    if (definition.value === 'default') {\n      definition.value = '';\n    }\n\n    return _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isFulfiled(definition, values);\n  }\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/post-template.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/post-term.js":
/*!*********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/post-term.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comparers_any_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comparers/any-equality */ \"./packages/metaboxes/monitors/conditional-display/comparers/any-equality.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\");\n\n\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  /**\n   * @inheritdoc\n   */\n  comparers: [_comparers_any_equality__WEBPACK_IMPORTED_MODULE_2__[\"default\"]],\n\n  /**\n   * @inheritdoc\n   */\n  isFulfiled: function isFulfiled(definition, values) {\n    var _this = this;\n\n    var compare = definition.compare,\n        value = definition.value;\n\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isArray\"])(value)) {\n      var method;\n\n      switch (compare) {\n        case 'IN':\n          compare = '=';\n          method = 'some';\n          break;\n\n        case 'NOT IN':\n          compare = '!=';\n          method = 'every';\n          break;\n\n        default:\n          return false;\n      }\n\n      var results = value.map(function (descriptor) {\n        return _this.isFulfiled(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, definition, {\n          compare: compare,\n          value: descriptor\n        }), values);\n      });\n      return results[method](Boolean);\n    } // TODO: Improve value resolution in context of Gutenberg\n\n\n    value = value.taxonomy_object.hierarchical ? value.term_object.term_id : value.term_object.name;\n    return this.firstComparerIsCorrect(this.getEnvironmentValue(definition, values), compare, value);\n  },\n\n  /**\n   * @inheritdoc\n   */\n  getEnvironmentValue: function getEnvironmentValue(definition, values) {\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(values, \"post_term.\".concat(definition.value.taxonomy), []);\n  }\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/post-term.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/term-ancestor-id.js":
/*!****************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/term-ancestor-id.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comparers_any_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comparers/any-equality */ \"./packages/metaboxes/monitors/conditional-display/comparers/any-equality.js\");\n/* harmony import */ var _comparers_any_contain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comparers/any-contain */ \"./packages/metaboxes/monitors/conditional-display/comparers/any-contain.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\");\n\n\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  /**\n   * @inheritdoc\n   */\n  comparers: [_comparers_any_equality__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _comparers_any_contain__WEBPACK_IMPORTED_MODULE_3__[\"default\"]],\n\n  /**\n   * @inheritdoc\n   */\n  isFulfiled: function isFulfiled(definition, values) {\n    var compare = definition.compare;\n    var value = definition.value;\n\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isArray\"])(value)) {\n      value = value.map(function (item) {\n        return item.term_object.term_id;\n      });\n    } else if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isPlainObject\"])(value)) {\n      value = value.term_object.term_id;\n    }\n\n    return this.firstComparerIsCorrect(this.getEnvironmentValue(definition, values), compare, value);\n  },\n\n  /**\n   * @inheritdoc\n   */\n  getEnvironmentValue: function getEnvironmentValue(definition, values) {\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(values, 'term_ancestors', []);\n  }\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/term-ancestor-id.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/term-parent-id.js":
/*!**************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/term-parent-id.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\");\n\n\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  /**\n   * @inheritdoc\n   */\n  isFulfiled: function isFulfiled(definition, values) {\n    var compare = definition.compare;\n    var value = definition.value;\n\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isArray\"])(value)) {\n      value = value.map(function (item) {\n        return item.term_object.term_id;\n      });\n    } else if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isPlainObject\"])(value)) {\n      value = value.term_object.term_id;\n    }\n\n    return this.firstComparerIsCorrect(this.getEnvironmentValue(definition, values), compare, value);\n  }\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/term-parent-id.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/handler/index.js":
/*!**************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/handler/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../containers */ \"./packages/metaboxes/containers/index.js\");\n/* harmony import */ var _conditions_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../conditions/base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\");\n/* harmony import */ var _conditions_boolean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../conditions/boolean */ \"./packages/metaboxes/monitors/conditional-display/conditions/boolean.js\");\n/* harmony import */ var _conditions_post_term__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../conditions/post-term */ \"./packages/metaboxes/monitors/conditional-display/conditions/post-term.js\");\n/* harmony import */ var _conditions_post_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../conditions/post-template */ \"./packages/metaboxes/monitors/conditional-display/conditions/post-template.js\");\n/* harmony import */ var _conditions_post_ancestor_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../conditions/post-ancestor-id */ \"./packages/metaboxes/monitors/conditional-display/conditions/post-ancestor-id.js\");\n/* harmony import */ var _conditions_term_parent_id__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../conditions/term-parent-id */ \"./packages/metaboxes/monitors/conditional-display/conditions/term-parent-id.js\");\n/* harmony import */ var _conditions_term_ancestor_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../conditions/term-ancestor-id */ \"./packages/metaboxes/monitors/conditional-display/conditions/term-ancestor-id.js\");\n\n\n/**\n * External dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n\n\n\n\n\n/**\n * Keeps track of supported conditions.\n *\n * @type {Object}\n */\n\nvar conditions = {\n  boolean: _conditions_boolean__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  post_term: _conditions_post_term__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  post_ancestor_id: _conditions_post_ancestor_id__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  post_parent_id: _conditions_base__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  post_level: _conditions_base__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  post_format: _conditions_base__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  post_template: _conditions_post_template__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  term_level: _conditions_base__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  term_parent: _conditions_term_parent_id__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  term_ancestor: _conditions_term_ancestor_id__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  user_role: _conditions_base__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n};\n/**\n * Walks through the definitions and evaluates the conditions.\n *\n * @param  {Object[]} definitions\n * @param  {Object}   values\n * @param  {string}   relation\n * @return {boolean}\n */\n\nfunction evaluate(definitions, values, relation) {\n  var results = definitions.map(function (definition) {\n    if (!definition.relation) {\n      var condition = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(conditions, definition.type);\n\n      if (condition) {\n        return condition.isFulfiled(definition, values);\n      } else {\n        // eslint-disable-line no-else-return\n        // eslint-disable-next-line no-console\n        console.error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Unsupported container condition - \"%1$s\".', 'carbon-fields-ui'), definition.type));\n        return false;\n      }\n    } else {\n      // eslint-disable-line no-else-return\n      return evaluate(definition.conditions, values, definition.relation);\n    }\n  });\n\n  switch (relation) {\n    case 'AND':\n      return results.every(Boolean);\n\n    case 'OR':\n      return results.some(Boolean);\n\n    default:\n      // eslint-disable-next-line no-console\n      console.error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Unsupported container condition relation used - \"%1$s\".', 'carbon-fields-ui'), relation));\n      return false;\n  }\n}\n/**\n * The function that causes the side effects.\n *\n * @param  {Object} props\n * @param  {Object} props.containers\n * @param  {string} props.context\n * @return {Function}\n */\n\n\nfunction handler(_ref) {\n  var containers = _ref.containers,\n      context = _ref.context;\n  return function (effect) {\n    var results = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"map\"])(containers, function (container, id) {\n      return [id, evaluate(container.conditions.conditions, effect, container.conditions.relation)];\n    });\n    results.forEach(function (_ref2) {\n      var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 2),\n          id = _ref3[0],\n          result = _ref3[1];\n\n      var postboxNode = document.getElementById(id);\n      var containerNode = document.querySelector(\".container-\".concat(id));\n      var isMounted = !!containerNode.dataset.mounted;\n\n      if (postboxNode) {\n        postboxNode.hidden = !result;\n      }\n\n      if (containerNode) {\n        if (result && !isMounted) {\n          Object(_containers__WEBPACK_IMPORTED_MODULE_3__[\"renderContainer\"])(containers[id], context);\n        }\n\n        if (!result && isMounted) {\n          delete containerNode.dataset.mounted; // Rely on React's internals instead of `unmountComponentAtNode`\n          // due to https://github.com/facebook/react/issues/13690.\n          // TODO: Conditionally render the fields in the container, this way\n          // we can move away from mount/unmount cycles.\n\n          containerNode._reactRootContainer.unmount();\n        }\n      }\n    });\n  };\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/handler/index.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/index.js":
/*!******************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! refract-callbag */ \"refract-callbag\");\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(refract_callbag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _aperture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aperture */ \"./packages/metaboxes/monitors/conditional-display/aperture/index.js\");\n/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handler */ \"./packages/metaboxes/monitors/conditional-display/handler/index.js\");\n/**\n * External dependencies.\n */\n\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n/**\n * Performs the evaluation of conditions.\n *\n * @return {null}\n */\n\nfunction ConditionalDisplay() {\n  return null;\n}\n\nvar applyWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"withSelect\"])(function (select) {\n  var containers = select('carbon-fields/metaboxes').getContainers();\n  return {\n    containers: containers\n  };\n});\nvar applyWitEffects = Object(refract_callbag__WEBPACK_IMPORTED_MODULE_2__[\"withEffects\"])(_aperture__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  handler: _handler__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(applyWithSelect, applyWitEffects)(ConditionalDisplay));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/index.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/utils/get-ancestors-from-option.js":
/*!********************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/utils/get-ancestors-from-option.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getAncestorsFromOption; });\n/* harmony import */ var _get_level_from_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-level-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-level-from-option.js\");\n/**\n * Internal dependencies.\n */\n\n/**\n * Extracts the ancestors of the post/term from an option.\n *\n * @param  {Object} option\n * @return {number[]}\n */\n\nfunction getAncestorsFromOption(option) {\n  var ancestors = [];\n  var previousOption = option;\n  var level = Object(_get_level_from_option__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(option);\n\n  while (level > 0 && previousOption) {\n    if (Object(_get_level_from_option__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(previousOption) !== level) {\n      previousOption = previousOption.previousSibling; // Skip this iteration because the option isn't an ancestor.\n\n      continue;\n    }\n\n    var id = parseInt(previousOption.value, 10);\n\n    if (id > 0) {\n      ancestors.unshift(id);\n    }\n\n    previousOption = previousOption.previousSibling;\n    level--;\n  }\n\n  return ancestors;\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/utils/get-ancestors-from-option.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/utils/get-level-from-option.js":
/*!****************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/utils/get-level-from-option.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getLevelFromOption; });\n/**\n * Extracts the level from an option.\n *\n * @param  {Object} option\n * @return {number}\n */\nfunction getLevelFromOption(option) {\n  var level = 0;\n\n  if (option.className) {\n    var matches = option.className.match(/^level-(\\d+)/);\n\n    if (matches) {\n      level = parseInt(matches[1], 10) + 1;\n    }\n  }\n\n  return level;\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/utils/get-level-from-option.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/utils/get-parent-id-from-option.js":
/*!********************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/utils/get-parent-id-from-option.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getParentIdFromOption; });\n/**\n * Extracts the id of the post/term parent from an option.\n *\n * @param  {Object} option\n * @return {number}\n */\nfunction getParentIdFromOption(option) {\n  var value = parseInt(option.value, 10);\n  return !isNaN(value) && value >= 0 ? value : 0;\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/utils/get-parent-id-from-option.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/index.js":
/*!**********************************************!*\
  !*** ./packages/metaboxes/monitors/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initializeMonitors; });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _save_lock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-lock */ \"./packages/metaboxes/monitors/save-lock/index.js\");\n/* harmony import */ var _conditional_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditional-display */ \"./packages/metaboxes/monitors/conditional-display/index.js\");\n/* harmony import */ var _widget_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget-handler */ \"./packages/metaboxes/monitors/widget-handler/index.js\");\n/* harmony import */ var _revisions_flag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./revisions-flag */ \"./packages/metaboxes/monitors/revisions-flag/index.js\");\n/* harmony import */ var _utils_is_gutenberg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-gutenberg */ \"./packages/metaboxes/utils/is-gutenberg.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/constants */ \"./packages/metaboxes/lib/constants.js\");\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n\n\n\n/**\n * Initializes the monitors.\n *\n * @param  {string} context\n * @return {void}\n */\n\nfunction initializeMonitors(context) {\n  var pagenow = window.cf.config.pagenow;\n  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(__webpack_provided_wp_dot_element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, !Object(_utils_is_gutenberg__WEBPACK_IMPORTED_MODULE_5__[\"default\"])() && __webpack_provided_wp_dot_element.createElement(_save_lock__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), (pagenow === _lib_constants__WEBPACK_IMPORTED_MODULE_6__[\"PAGE_NOW_WIDGETS\"] || pagenow === _lib_constants__WEBPACK_IMPORTED_MODULE_6__[\"PAGE_NOW_CUSTOMIZE\"]) && __webpack_provided_wp_dot_element.createElement(_widget_handler__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), __webpack_provided_wp_dot_element.createElement(_conditional_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    context: context\n  })), document.createElement('div'));\n  var postStuffNode = document.querySelector('#poststuff');\n\n  if (postStuffNode) {\n    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(__webpack_provided_wp_dot_element.createElement(_revisions_flag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), postStuffNode.appendChild(document.createElement('div')));\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/index.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/revisions-flag/index.js":
/*!*************************************************************!*\
  !*** ./packages/metaboxes/monitors/revisions-flag/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies.\n */\n\n/**\n * Renders the input used to notify the backend about the changes.\n *\n * @param  {Object}  props\n * @param  {boolean} props.isDirty\n * @return {mixed}\n */\n\nfunction RevisionsFlag(props) {\n  return __webpack_provided_wp_dot_element.createElement(\"input\", {\n    type: \"hidden\",\n    name: window.cf.config.revisionsInputKey,\n    disabled: !props.isDirty,\n    value: \"1\"\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"withSelect\"])(function (select) {\n  return {\n    isDirty: select('carbon-fields/metaboxes').isDirty()\n  };\n})(RevisionsFlag));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/revisions-flag/index.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/save-lock/index.js":
/*!********************************************************!*\
  !*** ./packages/metaboxes/monitors/save-lock/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! refract-callbag */ \"refract-callbag\");\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(refract_callbag__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * External dependencies.\n */\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Toggles the ability to save the page.\n *\n * @return {null}\n */\n\nfunction SaveLock() {\n  return null;\n}\n/**\n * The function that controls the stream of side effects.\n *\n * @return {Object}\n */\n\n\nfunction aperture() {\n  return Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_2__[\"fromSelector\"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"select\"])('carbon-fields/metaboxes').isSavingLocked);\n}\n/**\n * The function that causes the side effects.\n *\n * @return {Function}\n */\n\n\nfunction handler() {\n  return function (isLocked) {\n    var nodes = document.querySelectorAll(\"\\n\\t\\t\\t#publishing-action input#publish,\\n\\t\\t\\t#publishing-action input#save,\\n\\t\\t\\t#addtag input#submit,\\n\\t\\t\\t#edittag input[type=\\\"submit\\\"],\\n\\t\\t\\t#your-profile input#submit\\n\\t\\t\");\n    nodes.forEach(function (node) {\n      node.disabled = isLocked;\n    });\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(refract_callbag__WEBPACK_IMPORTED_MODULE_0__[\"withEffects\"])(aperture, {\n  handler: handler\n})(SaveLock));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/save-lock/index.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/widget-handler/index.js":
/*!*************************************************************!*\
  !*** ./packages/metaboxes/monitors/widget-handler/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! refract-callbag */ \"refract-callbag\");\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(refract_callbag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_urldecode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/urldecode */ \"./packages/metaboxes/utils/urldecode.js\");\n/* harmony import */ var _utils_flatten_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/flatten-field */ \"./packages/metaboxes/utils/flatten-field.js\");\n/* harmony import */ var _utils_from_event_pattern__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/from-event-pattern */ \"./packages/metaboxes/utils/from-event-pattern.js\");\n/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../containers */ \"./packages/metaboxes/containers/index.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/constants */ \"./packages/metaboxes/lib/constants.js\");\n/**\n * External dependencies.\n */\n\n\n\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n\n\n/**\n * Performs the re-initialization of widgets.\n *\n * @return {null}\n */\n\nfunction WidgetHandler() {\n  return null;\n}\n/**\n * Returns whether the widget is created by Carbon Fields.\n *\n * @param  {string} identifier\n * @return {boolean}\n */\n\n\nfunction isCarbonFieldsWidget(identifier) {\n  return identifier.indexOf(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX\"]) > -1;\n}\n/**\n * The function that controls the stream of side effects.\n *\n * @return {Object}\n */\n\n\nfunction aperture() {\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_4__[\"merge\"])(Object(callbag_basics__WEBPACK_IMPORTED_MODULE_4__[\"pipe\"])(Object(_utils_from_event_pattern__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function (handler) {\n    return window.jQuery(document).on('widget-added widget-updated', handler);\n  }, function (handler) {\n    return window.jQuery(document).off('widget-added widget-updated', handler);\n  }, function (event, $widget) {\n    return {\n      event: event,\n      $widget: $widget\n    };\n  }), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_4__[\"filter\"])(function (_ref) {\n    var $widget = _ref.$widget;\n    return isCarbonFieldsWidget($widget[0].id);\n  }), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_4__[\"map\"])(function (payload) {\n    return {\n      type: 'WIDGET_CREATED_OR_UPDATED',\n      payload: payload\n    };\n  })), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_4__[\"pipe\"])(Object(_utils_from_event_pattern__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function (handler) {\n    return window.jQuery(document).on('ajaxSuccess', handler);\n  }, function (handler) {\n    return window.jQuery(document).off('ajaxSuccess', handler);\n  }, function (event, xhr, options, data) {\n    return {\n      event: event,\n      xhr: xhr,\n      options: options,\n      data: data\n    };\n  }), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_4__[\"filter\"])(function (_ref2) {\n    var data = _ref2.data;\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"startsWith\"])(data, 'deleted:') && isCarbonFieldsWidget(data);\n  }), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_4__[\"map\"])(function (payload) {\n    return {\n      type: 'WIDGET_DELETED',\n      payload: payload\n    };\n  })));\n}\n/**\n * The function that causes the side effects.\n *\n * @return {Function}\n */\n\n\nfunction handler() {\n  return function (effect) {\n    var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"select\"])('carbon-fields/metaboxes'),\n        getContainerById = _select.getContainerById;\n\n    var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"dispatch\"])('carbon-fields/metaboxes'),\n        addContainer = _dispatch.addContainer,\n        removeContainer = _dispatch.removeContainer,\n        addFields = _dispatch.addFields,\n        removeFields = _dispatch.removeFields;\n\n    switch (effect.type) {\n      case 'WIDGET_CREATED_OR_UPDATED':\n        {\n          var _effect$payload = effect.payload,\n              event = _effect$payload.event,\n              $widget = _effect$payload.$widget;\n          var container = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"flow\"])(_utils_urldecode__WEBPACK_IMPORTED_MODULE_5__[\"default\"], JSON.parse)($widget.find('[data-json]').data('json'));\n          var fields = [];\n          var oldFieldIds;\n\n          if (event.type === 'widget-updated') {\n            oldFieldIds = getContainerById(container.id).fields.map(function (_ref3) {\n              var id = _ref3.id;\n              return id;\n            });\n          }\n\n          container.fields = container.fields.map(function (field) {\n            return Object(_utils_flatten_field__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(field, container, fields);\n          });\n          addFields(fields);\n          addContainer(container);\n\n          if (event.type === 'widget-updated') {\n            removeFields(oldFieldIds);\n          }\n\n          Object(_containers__WEBPACK_IMPORTED_MODULE_8__[\"renderContainer\"])(container, 'classic'); // WARNING: This piece of code manipulates the core behavior of WordPress Widgets.\n          // Some day this code will stop to work and we'll need to find another workaround.\n          //\n          // * Disable the submit { handler } since it breaks our validation logic.\n          // * Disable live preview mode because we can't detect when the widget is updated/synced.\n          // * Show the \"Apply\" button because it's hidden by the live mode.\n\n          if (window.cf.config.pagenow === _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"PAGE_NOW_CUSTOMIZE\"] && event.type === 'widget-added') {\n            var widgetId = $widget.find('[name=\"widget-id\"]').val();\n            $widget.find('[name=\"savewidget\"]').show().end().find('.widget-content:first').off('keydown', 'input').off('change input propertychange', ':input');\n            var instance = wp.customize.Widgets.getWidgetFormControlForWidget(widgetId); // Change the flag for 'live mode' so we can receive proper `widget-updated` events.\n\n            instance.liveUpdateMode = false;\n          }\n\n          break;\n        }\n\n      case 'WIDGET_DELETED':\n        {\n          var _widgetId = effect.payload.data.replace('deleted:', '');\n\n          var containerId = \"\".concat(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"CARBON_FIELDS_CONTAINER_ID_PREFIX\"]).concat(_widgetId); // Get the container from the store.\n\n          var _container = getContainerById(containerId); // Remove the current instance from DOM.\n\n\n          Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"unmountComponentAtNode\"])(document.querySelector(\".container-\".concat(containerId))); // Get the fields that belongs to the container.\n\n          var fieldsIds = _.map(_container.fields, 'id'); // Remove everything from the store.\n\n\n          removeContainer(containerId);\n          removeFields(fieldsIds);\n          break;\n        }\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(refract_callbag__WEBPACK_IMPORTED_MODULE_3__[\"withEffects\"])(aperture, {\n  handler: handler\n})(WidgetHandler));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/widget-handler/index.js?");

/***/ }),

/***/ "./packages/metaboxes/store/actions.js":
/*!*********************************************!*\
  !*** ./packages/metaboxes/store/actions.js ***!
  \*********************************************/
/*! exports provided: setupState, updateState, updateFieldValue, addFields, cloneFields, removeFields, addContainer, removeContainer, receiveSidebar, lockSaving, unlockSaving */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupState\", function() { return setupState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateState\", function() { return updateState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateFieldValue\", function() { return updateFieldValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFields\", function() { return addFields; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneFields\", function() { return cloneFields; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFields\", function() { return removeFields; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addContainer\", function() { return addContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeContainer\", function() { return removeContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receiveSidebar\", function() { return receiveSidebar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lockSaving\", function() { return lockSaving; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unlockSaving\", function() { return unlockSaving; });\n/**\n * Returns an action object used to setup the state when first opening an editor.\n *\n * @param  {Object[]} containers\n * @param  {Object}   fields\n * @return {Object}\n */\nfunction setupState(containers, fields) {\n  return {\n    type: 'SETUP_STATE',\n    payload: {\n      containers: containers,\n      fields: fields\n    }\n  };\n}\n/**\n * Returns an action object used to update the state.\n *\n * @param  {Object[]} containers\n * @param  {Object}   fields\n * @return {Object}\n */\n\nfunction updateState(containers, fields) {\n  return {\n    type: 'UPDATE_STATE',\n    payload: {\n      containers: containers,\n      fields: fields\n    }\n  };\n}\n/**\n * Returns an action object used to update the field's value.\n *\n * @param  {string}   fieldId\n * @param  {mixed}    value\n * @param  {string[]} fieldsToRemove It's used by the complex fields to remove the nested\n *                                 fields within a single action.\n * @return {Object}\n */\n\nfunction updateFieldValue(fieldId, value) {\n  var fieldsToRemove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  return {\n    type: 'UPDATE_FIELD_VALUE',\n    payload: {\n      fieldId: fieldId,\n      value: value,\n      fieldsToRemove: fieldsToRemove\n    }\n  };\n}\n/**\n * Returns an action object used to add the fields.\n *\n * @param  {Object[]} fields\n * @return {Object}\n */\n\nfunction addFields(fields) {\n  return {\n    type: 'ADD_FIELDS',\n    payload: {\n      fields: fields\n    }\n  };\n}\n/**\n * Returns an action object used to clone the fields.\n *\n * @param  {string[]} originFieldIds\n * @param  {string[]} cloneFieldIds\n * @return {Object}\n */\n\nfunction cloneFields(originFieldIds, cloneFieldIds) {\n  return {\n    type: 'CLONE_FIELDS',\n    payload: {\n      originFieldIds: originFieldIds,\n      cloneFieldIds: cloneFieldIds\n    }\n  };\n}\n/**\n * Returns an action object used to remove the fields.\n *\n * @param  {string[]} fieldIds\n * @return {Object}\n */\n\nfunction removeFields(fieldIds) {\n  return {\n    type: 'REMOVE_FIELDS',\n    payload: {\n      fieldIds: fieldIds\n    }\n  };\n}\n/**\n * Returns an action object used to add a container to all containers.\n *\n * @param  {Object} container\n * @return {Object}\n */\n\nfunction addContainer(container) {\n  return {\n    type: 'ADD_CONTAINER',\n    payload: container\n  };\n}\n/**\n * Returns an action object used to remove a container from all containers.\n *\n * @param  {Object} container\n * @return {Object}\n */\n\nfunction removeContainer(container) {\n  return {\n    type: 'REMOVE_CONTAINER',\n    payload: container\n  };\n}\n/**\n * Returns an action object used to add the created sidebar to all fields.\n *\n * @param  {Object} sidebar\n * @return {Object}\n */\n\nfunction receiveSidebar(sidebar) {\n  return {\n    type: 'RECEIVE_SIDEBAR',\n    payload: sidebar\n  };\n}\n/**\n * Returns an action object used to signal that saving is locked.\n *\n * @param  {string} lockName\n * @return {Object}\n */\n\nfunction lockSaving(lockName) {\n  return {\n    type: 'LOCK_SAVING',\n    payload: {\n      lockName: lockName\n    }\n  };\n}\n/**\n * Returns an action object used to signal that saving is unlocked.\n *\n * @param  {string} lockName\n * @return {Object}\n */\n\nfunction unlockSaving(lockName) {\n  return {\n    type: 'UNLOCK_SAVING',\n    payload: {\n      lockName: lockName\n    }\n  };\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/store/actions.js?");

/***/ }),

/***/ "./packages/metaboxes/store/helpers.js":
/*!*********************************************!*\
  !*** ./packages/metaboxes/store/helpers.js ***!
  \*********************************************/
/*! exports provided: normalizePreloadedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizePreloadedState\", function() { return normalizePreloadedState; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_flatten_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/flatten-field */ \"./packages/metaboxes/utils/flatten-field.js\");\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n\n/**\n * Transform the shape of the given state to be more Redux friendly.\n *\n * @param  {Object} state\n * @return {Object}\n */\n\nfunction normalizePreloadedState(state) {\n  var fields = [];\n  var containers = state.filter(function (_ref) {\n    var id = _ref.id;\n    return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"endsWith\"])(id, '__i__');\n  }).map(function (container) {\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"assign\"])({}, container, {\n      fields: container.fields.map(function (field) {\n        return Object(_utils_flatten_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(field, container.id, fields);\n      })\n    });\n  });\n  return {\n    containers: containers,\n    fields: fields\n  };\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/store/helpers.js?");

/***/ }),

/***/ "./packages/metaboxes/store/index.js":
/*!*******************************************!*\
  !*** ./packages/metaboxes/store/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./packages/metaboxes/store/reducer.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./packages/metaboxes/store/actions.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ \"./packages/metaboxes/store/selectors.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ \"./packages/metaboxes/store/helpers.js\");\n/**\n * External dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n\n/**\n * Register the store.\n */\n\nObject(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"registerStore\"])('carbon-fields/metaboxes', {\n  reducer: _reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,\n  selectors: _selectors__WEBPACK_IMPORTED_MODULE_4__\n});\n/**\n * Hydrate the store's state.\n */\n\nvar _normalizePreloadedSt = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[\"normalizePreloadedState\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(window.cf, 'preloaded.containers', [])),\n    containers = _normalizePreloadedSt.containers,\n    fields = _normalizePreloadedSt.fields;\n\nObject(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"dispatch\"])('carbon-fields/metaboxes').setupState(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"keyBy\"])(containers, 'id'), Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"keyBy\"])(fields, 'id'));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/store/index.js?");

/***/ }),

/***/ "./packages/metaboxes/store/reducer.js":
/*!*********************************************!*\
  !*** ./packages/metaboxes/store/reducer.js ***!
  \*********************************************/
/*! exports provided: containers, fields, savingLock, isDirty, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"containers\", function() { return containers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fields\", function() { return fields; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"savingLock\", function() { return savingLock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDirty\", function() { return isDirty; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n/**\n * External dependencies.\n */\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * The reducer that keeps track of the containers.\n *\n * @param  {Object} state\n * @param  {Object} action\n * @return {Object}\n */\n\nfunction containers() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'SETUP_STATE':\n      return action.payload.containers;\n\n    case 'UPDATE_STATE':\n      return immer__WEBPACK_IMPORTED_MODULE_2___default()(state, function (draft) {\n        Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"values\"])(action.payload.containers).forEach(function (container) {\n          draft[container.id] = container;\n        });\n      });\n\n    case 'ADD_CONTAINER':\n      return immer__WEBPACK_IMPORTED_MODULE_2___default()(state, function (draft) {\n        draft[action.payload.id] = action.payload;\n      });\n\n    case 'REMOVE_CONTAINER':\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"omit\"])(state, action.payload);\n\n    default:\n      return state;\n  }\n}\n/**\n * Clones a field.\n *\n * @param  {string}   originId\n * @param  {string}   cloneId\n * @param  {Object}   fields\n * @param  {Object[]} accumulator\n * @return {Object[]}\n */\n\nfunction cloneField(originId, cloneId, fields, accumulator) {\n  var field = Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"cloneDeep\"])(fields[originId]);\n  field.id = cloneId;\n\n  if (field.type === 'complex') {\n    field.value.forEach(function (group) {\n      group.id = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_5__[\"uniqueId\"])();\n      accumulator = group.fields.reduce(function (groupAccumulator, groupField) {\n        var originGroupFieldId = groupField.id;\n        var cloneGroupFieldId = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_5__[\"uniqueId\"])();\n        groupField.id = cloneGroupFieldId;\n        return cloneField(originGroupFieldId, cloneGroupFieldId, fields, groupAccumulator);\n      }, accumulator);\n    });\n  }\n\n  return accumulator.concat(field);\n}\n/**\n * Returns a list of field ids by a given root id.\n *\n * @param  {string}   fieldId\n * @param  {Object}   fields\n * @param  {string[]} accumulator\n * @return {string[]}\n */\n\n\nfunction getFieldIdsByRootId(fieldId, fields, accumulator) {\n  var field = fields[fieldId];\n\n  if (field.type === 'complex') {\n    field.value.forEach(function (group) {\n      accumulator = group.fields.reduce(function (groupAccumulator, groupField) {\n        return getFieldIdsByRootId(groupField.id, fields, groupAccumulator);\n      }, accumulator);\n    });\n  }\n\n  return accumulator.concat(fieldId);\n}\n/**\n * The reducer that keeps track of the fields.\n *\n * @param  {Object} state\n * @param  {Object} action\n * @return {Object}\n */\n\n\nfunction fields() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'SETUP_STATE':\n      return action.payload.fields;\n\n    case 'UPDATE_STATE':\n      return immer__WEBPACK_IMPORTED_MODULE_2___default()(state, function (draft) {\n        Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"values\"])(action.payload.fields).forEach(function (field) {\n          draft[field.id] = field;\n        });\n      });\n\n    case 'UPDATE_FIELD_VALUE':\n      return immer__WEBPACK_IMPORTED_MODULE_2___default()(state, function (draft) {\n        var _action$payload = action.payload,\n            fieldId = _action$payload.fieldId,\n            value = _action$payload.value,\n            fieldsToRemove = _action$payload.fieldsToRemove;\n        draft[fieldId].value = value;\n        var fieldIdsToRemove = fieldsToRemove.reduce(function (accumulator, fieldIdToRemove) {\n          return getFieldIdsByRootId(fieldIdToRemove, state, accumulator);\n        }, []);\n        fieldIdsToRemove.forEach(function (fieldIdToRemove) {\n          Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"unset\"])(draft, fieldIdToRemove);\n        });\n      });\n\n    case 'ADD_FIELDS':\n      return immer__WEBPACK_IMPORTED_MODULE_2___default()(state, function (draft) {\n        action.payload.fields.forEach(function (field) {\n          draft[field.id] = field;\n        });\n      });\n\n    case 'CLONE_FIELDS':\n      return immer__WEBPACK_IMPORTED_MODULE_2___default()(state, function (draft) {\n        var _action$payload2 = action.payload,\n            originFieldIds = _action$payload2.originFieldIds,\n            cloneFieldIds = _action$payload2.cloneFieldIds;\n        var clonedFields = originFieldIds.reduce(function (accumulator, originFieldId, index) {\n          return cloneField(originFieldId, cloneFieldIds[index], draft, accumulator);\n        }, []);\n        Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"assign\"])(draft, Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"keyBy\"])(clonedFields, 'id'));\n      });\n\n    case 'REMOVE_FIELDS':\n      var fieldIds = action.payload.fieldIds.reduce(function (accumulator, fieldId) {\n        return getFieldIdsByRootId(fieldId, state, accumulator);\n      }, []);\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"omit\"])(state, fieldIds);\n\n    case 'RECEIVE_SIDEBAR':\n      return immer__WEBPACK_IMPORTED_MODULE_2___default()(state, function (draft) {\n        Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"forEach\"])(draft, function (field) {\n          if (field.type === 'sidebar') {\n            field.options.unshift(action.payload);\n          }\n        });\n      });\n\n    default:\n      return state;\n  }\n}\n/**\n * The reducer that keeps track of the save locks.\n *\n * @param  {Object} state\n * @param  {Object} action\n * @return {Object}\n */\n\nfunction savingLock() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'LOCK_SAVING':\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.payload.lockName, true));\n\n    case 'UNLOCK_SAVING':\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"omit\"])(state, [action.payload.lockName]);\n\n    default:\n      return state;\n  }\n}\n/**\n * The reducer that keeps track if there is dirty fields.\n *\n * @param  {boolean} state\n * @param  {Object}  action\n * @return {Object}\n */\n\nfunction isDirty() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'UPDATE_FIELD_VALUE':\n      return true;\n\n    default:\n      return state;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__[\"combineReducers\"])({\n  containers: containers,\n  fields: fields,\n  savingLock: savingLock,\n  isDirty: isDirty\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/store/reducer.js?");

/***/ }),

/***/ "./packages/metaboxes/store/selectors.js":
/*!***********************************************!*\
  !*** ./packages/metaboxes/store/selectors.js ***!
  \***********************************************/
/*! exports provided: getContainers, getContainerById, getFields, getFieldsByContainerId, getFieldById, isSavingLocked, isDirty, getComplexGroupValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getContainers\", function() { return getContainers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getContainerById\", function() { return getContainerById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFields\", function() { return getFields; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFieldsByContainerId\", function() { return getFieldsByContainerId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFieldById\", function() { return getFieldById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSavingLocked\", function() { return isSavingLocked; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDirty\", function() { return isDirty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComplexGroupValues\", function() { return getComplexGroupValues; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies.\n */\n\n/**\n * Returns the containers.\n *\n * @param  {Object} state\n * @return {Object[]}\n */\n\nfunction getContainers(state) {\n  return state.containers;\n}\n/**\n * Returns a container by an id.\n *\n * @param  {Object} state\n * @param  {string} containerId\n * @return {?Object}\n */\n\nfunction getContainerById(state, containerId) {\n  return state.containers[containerId];\n}\n/**\n * Returns the fields.\n *\n * @param  {Object} state\n * @return {Object}\n */\n\nfunction getFields(state) {\n  return state.fields;\n}\n/**\n * Returns the fields that belong to the specified container.\n *\n * @param  {Object} state\n * @param  {string} containerId\n * @return {Object[]}\n */\n\nfunction getFieldsByContainerId(state, containerId) {\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(state.fields, ['container_id', containerId]);\n}\n/**\n * Returns a field by an id.\n *\n * @param  {Object} state\n * @param  {string} fieldId\n * @return {?Object}\n */\n\nfunction getFieldById(state, fieldId) {\n  return state.fields[fieldId];\n}\n/**\n * Returns whether saving is locked.\n *\n * @param  {Object} state\n * @return {boolean}\n */\n\nfunction isSavingLocked(state) {\n  return Object.keys(state.savingLock).length > 0;\n}\n/**\n * Returns whether the metaboxes fields contain unsaved changed.\n *\n * @param  {Object} state\n * @return {boolean}\n */\n\nfunction isDirty(state) {\n  return state.isDirty;\n}\n/**\n * Returns a map of field values for a given group.\n *\n * @param  {Object}   state\n * @param  {string[]} fieldIds\n * @return {Object}\n */\n\nfunction getComplexGroupValues(state, fieldIds) {\n  var fields = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"pick\"])(getFields(state), fieldIds);\n  fields = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"mapKeys\"])(fields, function (field) {\n    return field.base_name.replace(/\\-/g, '_');\n  });\n  fields = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"mapValues\"])(fields, function (field) {\n    return field.value;\n  });\n  return fields;\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/store/selectors.js?");

/***/ }),

/***/ "./packages/metaboxes/utils/flatten-field.js":
/*!***************************************************!*\
  !*** ./packages/metaboxes/utils/flatten-field.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return flattenField; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * External dependencies.\n */\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Flattens a field.\n *\n * @param  {Object}   field\n * @param  {string}   containerId\n * @param  {Object[]} accumulator\n * @return {Object}\n */\n\nfunction flattenField(field, containerId, accumulator) {\n  field = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"cloneDeep\"])(field); // Replace the id of the field.\n\n  field.id = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_1__[\"uniqueId\"])(); // Keep reference to the container.\n\n  field.container_id = containerId; // The complex fields represent a nested structure of fields.\n  // So we need to flat them as well.\n\n  if (field.type === 'complex') {\n    field.value.forEach(function (group) {\n      group.id = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_1__[\"uniqueId\"])();\n      group.container_id = containerId;\n      group.fields = group.fields.map(function (groupField) {\n        return flattenField(groupField, containerId, accumulator);\n      });\n    });\n  }\n\n  accumulator.push(field);\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"pick\"])(field, ['id', 'type', 'name', 'base_name']);\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/utils/flatten-field.js?");

/***/ }),

/***/ "./packages/metaboxes/utils/from-event-pattern.js":
/*!********************************************************!*\
  !*** ./packages/metaboxes/utils/from-event-pattern.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fromEventPattern; });\n/* harmony import */ var callbag_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-create */ \"./node_modules/callbag-create/index.js\");\n/* harmony import */ var callbag_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(callbag_create__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies.\n */\n\n/**\n * Callbag source factory from `addHandler` and `removeHandler` pair.\n *\n * @see https://github.com/Andarist/callbag-from-event-pattern\n * @param  {Function} addHandler\n * @param  {Function} removeHandler\n * @param  {Function} argsTransformer\n * @return {Function}\n */\n\nfunction fromEventPattern(addHandler, removeHandler) {\n  var argsTransformer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return args;\n  };\n  return callbag_create__WEBPACK_IMPORTED_MODULE_0___default()(function (sink) {\n    var handler = function handler() {\n      return sink(1, argsTransformer.apply(void 0, arguments));\n    };\n\n    addHandler(handler);\n    return function () {\n      return removeHandler(handler);\n    };\n  });\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/utils/from-event-pattern.js?");

/***/ }),

/***/ "./packages/metaboxes/utils/is-gutenberg.js":
/*!**************************************************!*\
  !*** ./packages/metaboxes/utils/is-gutenberg.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isGutenberg; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies.\n */\n\n/**\n * Returns true if Gutenberg is presented.\n *\n * @return {boolean}\n */\n\nfunction isGutenberg() {\n  return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"isUndefined\"])(window._wpLoadBlockEditor);\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/utils/is-gutenberg.js?");

/***/ }),

/***/ "./packages/metaboxes/utils/strip-compact-input-prefix.js":
/*!****************************************************************!*\
  !*** ./packages/metaboxes/utils/strip-compact-input-prefix.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return stripCompactInputPrefix; });\n/**\n * Removes the prefix used to compact the input of Carbon Fields.\n *\n * @param  {string} str\n * @return {string}\n */\nfunction stripCompactInputPrefix(str) {\n  var _window$cf$config = window.cf.config,\n      compactInput = _window$cf$config.compactInput,\n      compactInputKey = _window$cf$config.compactInputKey;\n\n  if (!compactInput || str.indexOf(compactInputKey) !== 0) {\n    return str;\n  }\n\n  return str.replace(new RegExp(\"^\".concat(compactInputKey, \"\\\\[(.+?)\\\\]\")), '$1');\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/utils/strip-compact-input-prefix.js?");

/***/ }),

/***/ "./packages/metaboxes/utils/urldecode.js":
/*!***********************************************!*\
  !*** ./packages/metaboxes/utils/urldecode.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return urldecode; });\n/**\n * Source: https://github.com/kvz/locutus/blob/master/src/php/url/urldecode.js\n *\n * @param  {string} str\n * @return {string}\n */\nfunction urldecode(str) {\n  return decodeURIComponent((str + '').replace(/%(?![\\da-f]{2})/gi, function () {\n    // PHP tolerates poorly formed escape sequences\n    return '%25';\n  }).replace(/\\+/g, '%20'));\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/utils/urldecode.js?");

/***/ }),

/***/ "@carbon-fields/core":
/*!******************************!*\
  !*** external ["cf","core"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"core\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22core%22%5D?");

/***/ }),

/***/ "@wordpress/compose":
/*!*****************************************************!*\
  !*** external ["cf","vendor","@wordpress/compose"] ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"@wordpress/compose\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22@wordpress/compose%22%5D?");

/***/ }),

/***/ "@wordpress/data":
/*!**************************************************!*\
  !*** external ["cf","vendor","@wordpress/data"] ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"@wordpress/data\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22@wordpress/data%22%5D?");

/***/ }),

/***/ "@wordpress/element":
/*!*****************************************************!*\
  !*** external ["cf","vendor","@wordpress/element"] ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"@wordpress/element\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22@wordpress/element%22%5D?");

/***/ }),

/***/ "@wordpress/hooks":
/*!***************************************************!*\
  !*** external ["cf","vendor","@wordpress/hooks"] ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"@wordpress/hooks\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22@wordpress/hooks%22%5D?");

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************************************!*\
  !*** external ["cf","vendor","@wordpress/i18n"] ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"@wordpress/i18n\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22@wordpress/i18n%22%5D?");

/***/ }),

/***/ "callbag-basics":
/*!*************************************************!*\
  !*** external ["cf","vendor","callbag-basics"] ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"callbag-basics\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22callbag-basics%22%5D?");

/***/ }),

/***/ "classnames":
/*!*********************************************!*\
  !*** external ["cf","vendor","classnames"] ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"classnames\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22classnames%22%5D?");

/***/ }),

/***/ "immer":
/*!****************************************!*\
  !*** external ["cf","vendor","immer"] ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"immer\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22immer%22%5D?");

/***/ }),

/***/ "lodash":
/*!*****************************************!*\
  !*** external ["cf","vendor","lodash"] ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"lodash\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22lodash%22%5D?");

/***/ }),

/***/ "refract-callbag":
/*!**************************************************!*\
  !*** external ["cf","vendor","refract-callbag"] ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"refract-callbag\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22refract-callbag%22%5D?");

/***/ })

/******/ });