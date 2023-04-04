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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/blocks/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n  return arr2;\n}\nmodule.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\nmodule.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n  return self;\n}\nmodule.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\nmodule.exports = _classCallCheck, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/toPropertyKey.js\");\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\nmodule.exports = _createClass, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/toPropertyKey.js\");\nfunction _defineProperty(obj, key, value) {\n  key = toPropertyKey(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\nmodule.exports = _defineProperty, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() {\n  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n    return target;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  return _extends.apply(this, arguments);\n}\nmodule.exports = _extends, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  return _getPrototypeOf(o);\n}\nmodule.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  Object.defineProperty(subClass, \"prototype\", {\n    writable: false\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\nmodule.exports = _inherits, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nmodule.exports = _iterableToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nmodule.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"];\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n  return assertThisInitialized(self);\n}\nmodule.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  return _setPrototypeOf(o, p);\n}\nmodule.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\nmodule.exports = _toConsumableArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"];\nfunction _toPrimitive(input, hint) {\n  if (_typeof(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if (_typeof(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\nmodule.exports = _toPrimitive, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"];\nvar toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/toPrimitive.js\");\nfunction _toPropertyKey(arg) {\n  var key = toPrimitive(arg, \"string\");\n  return _typeof(key) === \"symbol\" ? key : String(key);\n}\nmodule.exports = _toPropertyKey, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\nmodule.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/callbag-basics/index.js":
/*!**********************************************!*\
  !*** ./node_modules/callbag-basics/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  forEach: __webpack_require__(/*! callbag-for-each */ \"./node_modules/callbag-for-each/readme.js\"),\n  fromObs: __webpack_require__(/*! callbag-from-obs */ \"./node_modules/callbag-from-obs/readme.js\"),\n  fromIter: __webpack_require__(/*! callbag-from-iter */ \"./node_modules/callbag-from-iter/index.js\"),\n  fromEvent: __webpack_require__(/*! callbag-from-event */ \"./node_modules/callbag-from-event/index.js\"),\n  fromPromise: __webpack_require__(/*! callbag-from-promise */ \"./node_modules/callbag-from-promise/index.js\"),\n  interval: __webpack_require__(/*! callbag-interval */ \"./node_modules/callbag-interval/index.js\"),\n  map: __webpack_require__(/*! callbag-map */ \"./node_modules/callbag-map/readme.js\"),\n  scan: __webpack_require__(/*! callbag-scan */ \"./node_modules/callbag-scan/readme.js\"),\n  flatten: __webpack_require__(/*! callbag-flatten */ \"./node_modules/callbag-flatten/index.js\"),\n  take: __webpack_require__(/*! callbag-take */ \"./node_modules/callbag-take/index.js\"),\n  skip: __webpack_require__(/*! callbag-skip */ \"./node_modules/callbag-skip/index.js\"),\n  filter: __webpack_require__(/*! callbag-filter */ \"./node_modules/callbag-filter/readme.js\"),\n  merge: __webpack_require__(/*! callbag-merge */ \"./node_modules/callbag-merge/readme.js\"),\n  concat: __webpack_require__(/*! callbag-concat */ \"./node_modules/callbag-concat/readme.js\"),\n  combine: __webpack_require__(/*! callbag-combine */ \"./node_modules/callbag-combine/readme.js\"),\n  share: __webpack_require__(/*! callbag-share */ \"./node_modules/callbag-share/index.js\"),\n  pipe: __webpack_require__(/*! callbag-pipe */ \"./node_modules/callbag-pipe/readme.js\")\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/callbag-basics/index.js?");

/***/ }),

/***/ "./node_modules/callbag-combine/readme.js":
/*!************************************************!*\
  !*** ./node_modules/callbag-combine/readme.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-combine\n * ---------------\n *\n * Callbag factory that combines the latest data points from multiple (2 or\n * more) callbag sources. It delivers those latest values as an array. Works\n * with both pullable and listenable sources.\n *\n * `npm install callbag-combine`\n *\n * Example:\n *\n *     const interval = require('callbag-interval');\n *     const observe = require('callbag-observe');\n *     const combine = require('callbag-combine');\n *\n *     const source = combine(interval(100), interval(350));\n *\n *     observe(x => console.log(x))(source); // [2,0]\n *                                           // [3,0]\n *                                           // [4,0]\n *                                           // [5,0]\n *                                           // [6,0]\n *                                           // [6,1]\n *                                           // [7,1]\n *                                           // [8,1]\n *                                           // ...\n */\n\nconst EMPTY = {};\n\nconst combine = (...sources) => (start, sink) => {\n  if (start !== 0) return;\n  const n = sources.length;\n  if (n === 0) {\n    sink(0, () => {});\n    sink(1, []);\n    sink(2);\n    return;\n  }\n  let Ns = n; // start counter\n  let Nd = n; // data counter\n  let Ne = n; // end counter\n  const vals = new Array(n);\n  const sourceTalkbacks = new Array(n);\n  const talkback = (t, d) => {\n    if (t === 0) return;\n    for (let i = 0; i < n; i++) sourceTalkbacks[i](t, d);\n  };\n  sources.forEach((source, i) => {\n    vals[i] = EMPTY;\n    source(0, (t, d) => {\n      if (t === 0) {\n        sourceTalkbacks[i] = d;\n        if (--Ns === 0) sink(0, talkback);\n      } else if (t === 1) {\n        const _Nd = !Nd ? 0 : vals[i] === EMPTY ? --Nd : Nd;\n        vals[i] = d;\n        if (_Nd === 0) {\n          const arr = new Array(n);\n          for (let j = 0; j < n; ++j) arr[j] = vals[j];\n          sink(1, arr);\n        }\n      } else if (t === 2) {\n        if (--Ne === 0) sink(2);\n      } else {\n        sink(t, d);\n      }\n    });\n  });\n};\n\nmodule.exports = combine;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-combine/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-concat/readme.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-concat/readme.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * callbag-concat\n * --------------\n *\n * Callbag factory that concatenates the data from multiple (2 or more)\n * callbag sources. It starts each source at a time: waits for the previous\n * source to end before starting the next source. Works with both pullable\n * and listenable sources.\n *\n * `npm install callbag-concat`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const concat = require('callbag-concat');\n *\n *     const source = concat(fromIter([10,20,30]), fromIter(['a','b']));\n *\n *     iterate(x => console.log(x))(source); // 10\n *                                           // 20\n *                                           // 30\n *                                           // a\n *                                           // b\n */\n\nconst UNIQUE = {};\n\nconst concat = (...sources) => (start, sink) => {\n  if (start !== 0) return;\n  const n = sources.length;\n  if (n === 0) {\n    sink(0, () => {});\n    sink(2);\n    return;\n  }\n  let i = 0;\n  let sourceTalkback;\n  let lastPull = UNIQUE;\n  const talkback = (t, d) => {\n    if (t === 1) lastPull = d;\n    sourceTalkback(t, d);\n  };\n  (function next() {\n    if (i === n) {\n      sink(2);\n      return;\n    }\n    sources[i](0, (t, d) => {\n      if (t === 0) {\n        sourceTalkback = d;\n        if (i === 0) sink(0, talkback);\n        else if (lastPull !== UNIQUE) sourceTalkback(1, lastPull);\n      } else if (t === 2 && d) {\n        sink(2, d);\n      } else if (t === 2) {\n        i++;\n        next();\n      } else {\n        sink(t, d);\n      }\n    });\n  })();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (concat);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-concat/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar is = function is(previous, current) {\n  return previous === current;\n};\n\nfunction distinctUntilChanged(compare) {\n  if (compare === void 0) {\n    compare = is;\n  }\n\n  return function (source) {\n    return function (start, sink) {\n      if (start !== 0) return;\n      var inited = false;\n      var prev;\n      var talkback;\n      source(0, function (type, data) {\n        if (type === 0) {\n          talkback = data;\n        }\n\n        if (type !== 1) {\n          sink(type, data);\n          return;\n        }\n\n        if (inited && compare(prev, data)) {\n          talkback(1);\n          return;\n        }\n\n        inited = true;\n        prev = data;\n        sink(1, data);\n      });\n    };\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (distinctUntilChanged);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js?");

/***/ }),

/***/ "./node_modules/callbag-filter/readme.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-filter/readme.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-filter\n * --------------\n *\n * Callbag operator that conditionally lets data pass through. Works on either\n * pullable or listenable sources.\n *\n * `npm install callbag-filter`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const filter = require('callbag-filter');\n *\n *     const source = filter(x => x % 2)(fromIter([1,2,3,4,5]));\n *\n *     iterate(x => console.log(x))(source); // 1\n *                                           // 3\n *                                           // 5\n */\n\nconst filter = condition => source => (start, sink) => {\n  if (start !== 0) return;\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) {\n      talkback = d;\n      sink(t, d);\n    } else if (t === 1) {\n      if (condition(d)) sink(t, d);\n      else talkback(1);\n    }\n    else sink(t, d);\n  });\n};\n\nmodule.exports = filter;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-filter/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-flatten/index.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-flatten/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst flatten = source => (start, sink) => {\n  if (start !== 0) return;\n  let outerTalkback;\n  let innerTalkback;\n  function talkback(t, d) {\n    if (t === 1) (innerTalkback || outerTalkback)(1, d);\n    if (t === 2) {\n      innerTalkback && innerTalkback(2);\n      outerTalkback && outerTalkback(2);\n    }\n  }\n  source(0, (T, D) => {\n    if (T === 0) {\n      outerTalkback = D;\n      sink(0, talkback);\n    } else if (T === 1) {\n      const innerSource = D;\n      innerTalkback && innerTalkback(2);\n      innerSource(0, (t, d) => {\n        if (t === 0) {\n          innerTalkback = d;\n          innerTalkback(1);\n        } else if (t === 1) sink(1, d);\n        else if (t === 2 && d) {\n          outerTalkback && outerTalkback(2);\n          sink(2, d);\n        } else if (t === 2) {\n          if (!outerTalkback) sink(2);\n          else {\n            innerTalkback = void 0;\n            outerTalkback(1);\n          }\n        }\n      });\n    } else if (T === 2 && D) {\n      innerTalkback && innerTalkback(2);\n      sink(2, D);\n    } else if (T === 2) {\n      if (!innerTalkback) sink(2);\n      else outerTalkback = void 0;\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (flatten);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-flatten/index.js?");

/***/ }),

/***/ "./node_modules/callbag-for-each/readme.js":
/*!*************************************************!*\
  !*** ./node_modules/callbag-for-each/readme.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-for-each\n * ----------------\n *\n * Callbag sink that consume both pullable and listenable sources. When called\n * on a pullable source, it will iterate through its data. When called on a\n * listenable source, it will observe its data.\n *\n * `npm install callbag-for-each`\n *\n * Examples\n * --------\n *\n * Consume a pullable source:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const forEach = require('callbag-for-each');\n *\n *     const source = fromIter([10,20,30,40])\n *\n *     forEach(x => console.log(x))(source); // 10\n *                                           // 20\n *                                           // 30\n *                                           // 40\n *\n * Consume a listenable source:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *\n *     const source = interval(1000);\n *\n *     forEach(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 3\n *                                           // ...\n */\n\nconst forEach = operation => source => {\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) talkback = d;\n    if (t === 1) operation(d);\n    if (t === 1 || t === 0) talkback(1);\n  });\n};\n\nmodule.exports = forEach;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-for-each/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-from-event/index.js":
/*!**************************************************!*\
  !*** ./node_modules/callbag-from-event/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fromEvent = (node, name, options) => (start, sink) => {\n  if (start !== 0) return;\n  let disposed = false;\n  const handler = ev => {\n    sink(1, ev)\n  };\n\n  sink(0, t => {\n    if (t !== 2) {\n      return;\n    }\n    disposed = true;\n    if (node.removeEventListener) node.removeEventListener(name, handler, options);\n    else if (node.removeListener) node.removeListener(name, handler);\n    else throw new Error('cannot remove listener from node. No method found.');\n  });\n\n  if (disposed) {\n    return;\n  }\n\n  if (node.addEventListener) node.addEventListener(name, handler, options);\n  else if (node.addListener) node.addListener(name, handler);\n  else throw new Error('cannot add listener to node. No method found.');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fromEvent);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-event/index.js?");

/***/ }),

/***/ "./node_modules/callbag-from-iter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/callbag-from-iter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const fromIter = iter => (start, sink) => {\n  if (start !== 0) return;\n  const iterator =\n    typeof Symbol !== 'undefined' && iter[Symbol.iterator]\n      ? iter[Symbol.iterator]()\n      : iter;\n  let inloop = false;\n  let got1 = false;\n  let completed = false;\n  let res;\n  function loop() {\n    inloop = true;\n    while (got1 && !completed) {\n      got1 = false;\n      res = iterator.next();\n      if (res.done) {\n        sink(2);\n        break;\n      }\n      else sink(1, res.value);\n    }\n    inloop = false;\n  }\n  sink(0, t => {\n    if (completed) return\n\n    if (t === 1) {\n      got1 = true;\n      if (!inloop && !(res && res.done)) loop();\n    } else if (t === 2) {\n      completed = true;\n    }\n  });\n};\n\nmodule.exports = fromIter;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-iter/index.js?");

/***/ }),

/***/ "./node_modules/callbag-from-obs/readme.js":
/*!*************************************************!*\
  !*** ./node_modules/callbag-from-obs/readme.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * callbag-from-obs\n * --------------\n *\n * Convert an observable (or subscribable) to a callbag listenable source.\n *\n * `npm install callbag-from-obs`\n *\n * Example:\n *\n * Convert an RxJS Observable:\n *\n *     const Rx = require('rxjs');\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const source = fromObs(Rx.Observable.interval(1000).take(4));\n *\n *     observe(x => console.log(x)(source); // 0\n *                                          // 1\n *                                          // 2\n *                                          // 3\n *\n * Convert anything that has the `.subscribe` method:\n *\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const subscribable = {\n *       subscribe: (observer) => {\n *         let i = 0;\n *         setInterval(() => observer.next(i++), 1000);\n *       }\n *     };\n *\n *     const source = fromObs(subscribable);\n *\n *     observe(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 3\n *                                           // ...\n */\n\nconst $$observable = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\").default;\n\nconst fromObs = observable => (start, sink) => {\n  if (start !== 0) return;\n  let dispose;\n  sink(0, t => {\n    if (t === 2 && dispose) {\n      if (dispose.unsubscribe) dispose.unsubscribe();\n      else dispose();\n    }\n  });\n  observable = observable[$$observable] ? observable[$$observable]() : observable;\n  dispose = observable.subscribe({\n    next: x => sink(1, x),\n    error: e => sink(2, e),\n    complete: () => sink(2)\n  });\n};\n\nmodule.exports = fromObs;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-obs/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-from-promise/index.js":
/*!****************************************************!*\
  !*** ./node_modules/callbag-from-promise/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fromPromise = promise => (start, sink) => {\n  if (start !== 0) return;\n  let ended = false;\n  const onfulfilled = val => {\n    if (ended) return;\n    sink(1, val);\n    if (ended) return;\n    sink(2);\n  };\n  const onrejected = (err = new Error()) => {\n    if (ended) return;\n    sink(2, err);\n  };\n  promise.then(onfulfilled, onrejected);\n  sink(0, t => {\n    if (t === 2) ended = true;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fromPromise);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-promise/index.js?");

/***/ }),

/***/ "./node_modules/callbag-interval/index.js":
/*!************************************************!*\
  !*** ./node_modules/callbag-interval/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst interval = period => (start, sink) => {\n  if (start !== 0) return;\n  let i = 0;\n  const id = setInterval(() => {\n    sink(1, i++);\n  }, period);\n  sink(0, t => {\n    if (t === 2) clearInterval(id);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (interval);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-interval/index.js?");

/***/ }),

/***/ "./node_modules/callbag-map/readme.js":
/*!********************************************!*\
  !*** ./node_modules/callbag-map/readme.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-map\n * -----------\n *\n * Callbag operator that applies a transformation on data passing through it.\n * Works on either pullable or listenable sources.\n *\n * `npm install callbag-map`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const map = require('callbag-map');\n *\n *     const source = map(x => x * 0.1)(fromIter([10,20,30,40]));\n *\n *     iterate(x => console.log(x))(source); // 1\n *                                           // 2\n *                                           // 3\n *                                           // 4\n */\n\nconst map = f => source => (start, sink) => {\n  if (start !== 0) return;\n  source(0, (t, d) => {\n    sink(t, t === 1 ? f(d) : d)\n  });\n};\n\nmodule.exports = map;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-map/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-merge/readme.js":
/*!**********************************************!*\
  !*** ./node_modules/callbag-merge/readme.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-merge\n * -------------\n *\n * Callbag factory that merges data from multiple callbag sources. Works well\n * with listenable sources, and while it may work for some pullable sources,\n * it is only designed for listenable sources.\n *\n * `npm install callbag-merge`\n *\n * Example:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const merge = require('callbag-merge');\n *\n *     const source = merge(interval(100), interval(350));\n *\n *     forEach(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 0\n *                                           // 3\n *                                           // 4\n *                                           // 5\n *                                           // ...\n */\n\nfunction merge(...sources) {\n  return (start, sink) => {\n    if (start !== 0) return;\n    const n = sources.length;\n    const sourceTalkbacks = new Array(n);\n    let startCount = 0;\n    let endCount = 0;\n    const talkback = t => {\n      if (t === 0) return;\n      for (let i = 0; i < n; i++) sourceTalkbacks[i] && sourceTalkbacks[i](t);\n    };\n    for (let i = 0; i < n; i++) {\n      sources[i](0, (t, d) => {\n        if (t === 0) {\n          sourceTalkbacks[i] = d;\n          if (++startCount === 1) sink(0, talkback);\n        } else if (t === 2) {\n          sourceTalkbacks[i] = void 0;\n          if (++endCount === n) sink(2);\n        } else sink(t, d);\n      });\n    }\n  };\n}\n\nmodule.exports = merge;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-merge/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-pipe/readme.js":
/*!*********************************************!*\
  !*** ./node_modules/callbag-pipe/readme.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-pipe\n * ------------\n *\n * Utility function for plugging callbags together in chain. This utility\n * actually doesn't rely on Callbag specifics, and is really similar to\n * Ramda's `pipe` or lodash's `flow`.\n * \n * Implementation of `callbag-pipe` using `R.pipe` could look like this:\n *\n * const pipe = (source, ...cbs) => R.pipe(...cbs)(source)\n * \n * This exists to play nicely with the ecosystem,\n * and to facilitate the import of the function.\n *\n * `npm install callbag-pipe`\n *\n * Example:\n *\n * Create a source with `pipe`, then pass it to a `forEach`:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     const source = pipe(\n *       combine(interval(100), interval(350)),\n *       map(([x, y]) => `X${x},Y${y}`),\n *       take(10)\n *     );\n *\n *     forEach(x => console.log(x))(source); // X2,Y0\n *                                           // X3,Y0\n *                                           // X4,Y0\n *                                           // X5,Y0\n *                                           // X6,Y0\n *                                           // X6,Y1\n *                                           // X7,Y1\n *                                           // X8,Y1\n *                                           // X9,Y1\n *                                           // X9,Y2\n *\n *\n * Or use `pipe` to go all the way from source to sink:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       map(([x, y]) => `X${x},Y${y}`),\n *       take(10),\n *       forEach(x => console.log(x))\n *     );\n *     // X2,Y0\n *     // X3,Y0\n *     // X4,Y0\n *     // X5,Y0\n *     // X6,Y0\n *     // X6,Y1\n *     // X7,Y1\n *     // X8,Y1\n *     // X9,Y1\n *     // X9,Y2\n *\n *\n * Nesting\n * -------\n *\n * To use pipe inside another pipe, you need to give the inner pipe an\n * argument, e.g. `s => pipe(s, ...`:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       s => pipe(s,\n *         map(([x, y]) => `X${x},Y${y}`),\n *         take(10)\n *       ),\n *       forEach(x => console.log(x))\n *     );\n *\n *\n * This means you can use pipe to create a new operator:\n *\n *     const mapThenTake = (f, amount) =>\n *       s => pipe(s, map(f), take(amount));\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       mapThenTake(([x, y]) => `X${x},Y${y}`, 10),\n *       forEach(x => console.log(x))\n *     );\n *\n */\n\nfunction pipe(...cbs) {\n  let res = cbs[0];\n  for (let i = 1, n = cbs.length; i < n; i++) res = cbs[i](res);\n  return res;\n}\n\nmodule.exports = pipe;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-pipe/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-scan/readme.js":
/*!*********************************************!*\
  !*** ./node_modules/callbag-scan/readme.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-scan\n * ------------\n *\n * Callbag operator that combines consecutive values from the same source.\n * It's essentially like array `.reduce`, but delivers a new accumulated value\n * for each value from the callbag source. Works on either pullable or\n * listenable sources.\n *\n * `npm install callbag-scan`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const scan = require('callbag-scan');\n *\n *     const iterSource = fromIter([1,2,3,4,5]);\n *     const scanned = scan((prev, x) => prev + x, 0)(iterSource);\n *\n *     scanned(0, iterate(x => console.log(x))); // 1\n *                                               // 3\n *                                               // 6\n *                                               // 10\n *                                               // 15\n */\n\nfunction scan(reducer, seed) {\n  let hasAcc = arguments.length === 2;\n  return source => (start, sink) => {\n    if (start !== 0) return;\n    let acc = seed;\n    source(0, (t, d) => {\n      if (t === 1) {\n        acc = hasAcc ? reducer(acc, d) : ((hasAcc = true), d);\n        sink(1, acc);\n      } else sink(t, d);\n    });\n  };\n}\n\nmodule.exports = scan;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-scan/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-share/index.js":
/*!*********************************************!*\
  !*** ./node_modules/callbag-share/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst share = source => {\n  let sinks = [];\n  let sourceTalkback;\n\n  return function shared(start, sink) {\n    if (start !== 0) return;\n    sinks.push(sink);\n\n    const talkback = (t, d) => {\n      if (t === 2) {\n        const i = sinks.indexOf(sink);\n        if (i > -1) sinks.splice(i, 1);\n        if (!sinks.length) sourceTalkback(2);\n      } else {\n        sourceTalkback(t, d);\n      }\n    };\n\n    if (sinks.length === 1) {\n      source(0, (t, d) => {\n        if (t === 0) {\n          sourceTalkback = d;\n          sink(0, talkback);\n        } else for (let s of sinks.slice(0)) s(t, d);\n        if (t === 2) sinks = [];\n      });\n      return\n    }\n\n    sink(0, talkback);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (share);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-share/index.js?");

/***/ }),

/***/ "./node_modules/callbag-skip/index.js":
/*!********************************************!*\
  !*** ./node_modules/callbag-skip/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const skip = max => source => (start, sink) => {\n  if (start !== 0) return;\n  let skipped = 0;\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) {\n      talkback = d;\n      sink(t, d);\n    } else if (t === 1) {\n      if (skipped < max) {\n        skipped++;\n        talkback(1);\n      } else sink(t, d);\n    } else {\n      sink(t, d);\n    }\n  });\n};\n\nmodule.exports = skip;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-skip/index.js?");

/***/ }),

/***/ "./node_modules/callbag-take/index.js":
/*!********************************************!*\
  !*** ./node_modules/callbag-take/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const take = max => source => (start, sink) => {\n  if (start !== 0) return;\n  let taken = 0;\n  let sourceTalkback;\n  let end;\n  function talkback(t, d) {\n    if (t === 2) {\n      end = true;\n      sourceTalkback(t, d);\n    } else if (taken < max) sourceTalkback(t, d);\n  }\n  source(0, (t, d) => {\n    if (t === 0) {\n      sourceTalkback = d;\n      sink(0, talkback);\n    } else if (t === 1) {\n      if (taken < max) {\n        taken++;\n        sink(t, d);\n        if (taken === max && !end) {\n          end = true\n          sourceTalkback(2);\n          sink(2);\n        }\n      }\n    } else {\n      sink(t, d);\n    }\n  });\n};\n\nmodule.exports = take;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-take/index.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tCopyright (c) 2018 Jed Watson.\n\tLicensed under the MIT License (MIT), see\n\thttp://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\tvar nativeCodeString = '[native code]';\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\");\n/* global window */\n\n\nvar root;\n\nif (typeof self !== 'undefined') {\n  root = self;\n} else if (typeof window !== 'undefined') {\n  root = window;\n} else if (typeof global !== 'undefined') {\n  root = global;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\n/* harmony default export */ __webpack_exports__[\"default\"] = (result);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return symbolObservablePonyfill; });\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar Symbol = root.Symbol;\n\n\tif (typeof Symbol === 'function') {\n\t\tif (Symbol.observable) {\n\t\t\tresult = Symbol.observable;\n\t\t} else {\n\t\t\tresult = Symbol('observable');\n\t\t\tSymbol.observable = result;\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/ponyfill.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./packages/blocks/components/block-edit/index.js":
/*!********************************************************!*\
  !*** ./packages/blocks/components/block-edit/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/editor */ \"@wordpress/editor\");\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/components/block-edit/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../field */ \"./packages/blocks/components/field/index.js\");\n/* harmony import */ var _server_side_render__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../server-side-render */ \"./packages/blocks/components/server-side-render/index.js\");\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n/**\r\n * External dependencies.\r\n */\n\n\n\n\n\n\n\n\n/**\r\n * Carbon Fields dependencies.\r\n */\n\n\n/**\r\n * Internal dependencies.\r\n */\n\n\n\nvar BlockEdit = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(BlockEdit, _Component);\n  var _super = _createSuper(BlockEdit);\n  function BlockEdit() {\n    var _this;\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BlockEdit);\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _super.call.apply(_super, [this].concat(args));\n    /**\r\n     * Local state.\r\n     *\r\n     * @type {Object}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), \"state\", {\n      mode: _this.props.container.settings.mode,\n      currentTab: _this.props.supportsTabs ? Object.keys(_this.props.container.settings.tabs)[0] : null\n    });\n    /**\r\n     * Handles the change of the field's value.\r\n     *\r\n     * @param  {string} fieldId\r\n     * @param  {mixed}  value\r\n     * @return {void}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), \"handleFieldChange\", function (fieldId, value) {\n      var _this$props = _this.props,\n        attributes = _this$props.attributes,\n        setAttributes = _this$props.setAttributes;\n      var fieldName = fieldId.replace(/^.+__(.+)?$/, '$1');\n      setAttributes({\n        data: _objectSpread(_objectSpread({}, attributes.data), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, fieldName, value))\n      });\n    });\n    /**\r\n     * Handles changing of the mode.\r\n     *\r\n     * @return {void}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), \"handleModeChange\", function () {\n      _this.setState({\n        mode: _this.isInEditMode ? 'preview' : 'edit'\n      });\n    });\n    /**\r\n     * Handles changing on the tabs.\r\n     *\r\n     * @param  {string} tab\r\n     * @return {void}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), \"handleTabChange\", function (tab) {\n      _this.setState({\n        currentTab: tab\n      });\n    });\n    /**\r\n     * Renders a field.\r\n     *\r\n     * @param  {Object} field\r\n     * @param  {number} index\r\n     * @return {Object}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), \"renderField\", function (field, index) {\n      var _this$props2 = _this.props,\n        clientId = _this$props2.clientId,\n        container = _this$props2.container,\n        attributes = _this$props2.attributes;\n      var FieldEdit = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_14__[\"getFieldType\"])(field.type, 'block');\n      if (!FieldEdit) {\n        return null;\n      }\n      var id = \"cf-\".concat(clientId, \"__\").concat(field.base_name);\n      var value = Object(lodash__WEBPACK_IMPORTED_MODULE_13__[\"get\"])(attributes.data, field.base_name, field.default_value);\n      return wp.element.createElement(_field__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n        key: index,\n        id: id,\n        field: field\n      }, wp.element.createElement(FieldEdit, {\n        id: id,\n        containerId: container.id,\n        blockId: clientId,\n        value: value,\n        field: field,\n        name: field.base_name,\n        onChange: _this.handleFieldChange\n      }));\n    });\n    return _this;\n  }\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BlockEdit, [{\n    key: \"isInEditMode\",\n    get:\n    /**\r\n     * Returns whether the block is in edit mode.\r\n     *\r\n     * @return {boolean}\r\n     */\n    function get() {\n      return this.state.mode === 'edit';\n    }\n\n    /**\r\n     * Returns whether the block is in edit mode.\r\n     *\r\n     * @return {boolean}\r\n     */\n  }, {\n    key: \"isInPreviewMode\",\n    get: function get() {\n      return this.state.mode === 'preview';\n    }\n  }, {\n    key: \"renderTabbedFields\",\n    value:\n    /**\r\n     * Renders the fields in tabs.\r\n     *\r\n     * @param  {string[]} fieldNames\r\n     * @return {Object[]}\r\n     */\n    function renderTabbedFields(fieldNames) {\n      var _this2 = this;\n      var fields = this.props.fields;\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_13__[\"map\"])(fieldNames, function (fieldName, index) {\n        var field = Object(lodash__WEBPACK_IMPORTED_MODULE_13__[\"find\"])(fields, ['name', fieldName]);\n        return _this2.renderField(field, index);\n      });\n    }\n\n    /**\r\n     * Renders the fields that aren't in tabs.\r\n     *\r\n     * @return {Object}\r\n     */\n  }, {\n    key: \"renderNonTabbedFields\",\n    value: function renderNonTabbedFields() {\n      return wp.element.createElement(\"div\", {\n        className: \"cf-block__fields\"\n      }, this.props.fields.map(this.renderField));\n    }\n\n    /**\r\n     * Render the component.\r\n     *\r\n     * @return {Object}\r\n     */\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n      var currentTab = this.state.currentTab;\n      var _this$props3 = this.props,\n        clientId = _this$props3.clientId,\n        container = _this$props3.container,\n        supportsTabs = _this$props3.supportsTabs,\n        supportsPreview = _this$props3.supportsPreview,\n        supportsInnerBlocks = _this$props3.supportsInnerBlocks;\n      var innerBlocks = supportsInnerBlocks && this.isInEditMode && wp.element.createElement(\"div\", {\n        className: \"cf-block__inner-blocks\"\n      }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__[\"InnerBlocks\"], {\n        template: container.settings.inner_blocks.template,\n        templateLock: container.settings.inner_blocks.template_lock,\n        allowedBlocks: container.settings.inner_blocks.allowed_blocks\n      }));\n      return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], null, container.settings.inner_blocks.position === 'above' && innerBlocks, supportsPreview && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__[\"BlockControls\"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__[\"ToolbarGroup\"], {\n        label: \"Options\",\n        controls: [{\n          icon: this.isInEditMode ? 'visibility' : 'hidden',\n          title: this.isInEditMode ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__[\"__\"])('Show preview', 'carbon-fields-ui') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__[\"__\"])('Hide preview', 'carbon-fields-ui'),\n          onClick: this.handleModeChange\n        }]\n      })), this.isInEditMode && supportsTabs && wp.element.createElement(\"div\", {\n        className: \"cf-block__tabs\"\n      }, wp.element.createElement(\"ul\", {\n        className: \"cf-block__tabs-list\"\n      }, Object(lodash__WEBPACK_IMPORTED_MODULE_13__[\"map\"])(container.settings.tabs, function (fieldNames, tabName) {\n        var classes = classnames__WEBPACK_IMPORTED_MODULE_7___default()('cf-block__tabs-item', {\n          'cf-block__tabs-item--current': tabName === currentTab\n        });\n        return wp.element.createElement(\"li\", {\n          key: tabName,\n          className: classes,\n          onClick: function onClick() {\n            return _this3.handleTabChange(tabName);\n          }\n        }, tabName);\n      }))), this.isInEditMode && (supportsTabs ? Object(lodash__WEBPACK_IMPORTED_MODULE_13__[\"map\"])(container.settings.tabs, function (fieldNames, tabName) {\n        return wp.element.createElement(\"div\", {\n          className: \"cf-block__fields\",\n          key: tabName,\n          hidden: tabName !== currentTab\n        }, _this3.renderTabbedFields(fieldNames));\n      }) : this.renderNonTabbedFields()), this.isInPreviewMode && wp.element.createElement(\"div\", {\n        className: \"cf-block__preview\"\n      }, wp.element.createElement(_server_side_render__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n        clientId: clientId\n      })), container.settings.inner_blocks.position === 'below' && innerBlocks, this.isInPreviewMode && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__[\"InspectorControls\"], null, supportsTabs ? Object(lodash__WEBPACK_IMPORTED_MODULE_13__[\"map\"])(container.settings.tabs, function (fieldNames, tabName) {\n        return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__[\"PanelBody\"], {\n          key: tabName,\n          title: tabName\n        }, wp.element.createElement(\"div\", {\n          className: \"cf-block__fields\"\n        }, _this3.renderTabbedFields(fieldNames)));\n      }) : wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__[\"PanelBody\"], {\n        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__[\"__\"])('Fields', 'carbon-fields-ui')\n      }, this.renderNonTabbedFields())));\n    }\n  }]);\n  return BlockEdit;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__[\"withSelect\"])(function (select, _ref) {\n  var clientId = _ref.clientId,\n    name = _ref.name;\n  var _select = select('core/blocks'),\n    hasBlockSupport = _select.hasBlockSupport;\n  var _select2 = select('core/block-editor'),\n    getBlockRootClientId = _select2.getBlockRootClientId;\n  var _select3 = select('carbon-fields/blocks'),\n    getContainerDefinitionByBlockName = _select3.getContainerDefinitionByBlockName,\n    getFieldDefinitionsByBlockName = _select3.getFieldDefinitionsByBlockName;\n  var rootClientId = getBlockRootClientId(clientId);\n  return {\n    container: getContainerDefinitionByBlockName(name),\n    fields: getFieldDefinitionsByBlockName(name),\n    supportsTabs: hasBlockSupport(name, 'tabs'),\n    supportsPreview: hasBlockSupport(name, 'preview') && !rootClientId,\n    supportsInnerBlocks: hasBlockSupport(name, 'innerBlocks')\n  };\n})(BlockEdit));\n\n//# sourceURL=webpack:///./packages/blocks/components/block-edit/index.js?");

/***/ }),

/***/ "./packages/blocks/components/block-edit/style.scss":
/*!**********************************************************!*\
  !*** ./packages/blocks/components/block-edit/style.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/components/block-edit/style.scss?");

/***/ }),

/***/ "./packages/blocks/components/block-save/index.js":
/*!********************************************************!*\
  !*** ./packages/blocks/components/block-save/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ \"@wordpress/editor\");\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n/**\r\n * External dependencies.\r\n */\n\n\nvar BlockSave = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BlockSave, _Component);\n  var _super = _createSuper(BlockSave);\n  function BlockSave() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BlockSave);\n    return _super.apply(this, arguments);\n  }\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BlockSave, [{\n    key: \"render\",\n    value:\n    /**\r\n     * Render the component.\r\n     *\r\n     * @return {null}\r\n     */\n    function render() {\n      return null;\n    }\n  }]);\n  return BlockSave;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n/**\r\n * Adds the content of inner blocks to the saved content.\r\n *\r\n * @param  {mixed} element\r\n * @param  {Object} blockType\r\n * @return {mixed}\r\n */\nfunction addInnerBlocksContent(element, blockType) {\n  if (!/^carbon\\-fields\\/.+$/.test(blockType.name)) {\n    return element;\n  }\n  if (!blockType.supports.innerBlocks) {\n    return element;\n  }\n  return wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__[\"InnerBlocks\"].Content, null);\n}\nwp.hooks.addFilter('blocks.getSaveElement', 'carbon-fields/blocks', addInnerBlocksContent);\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlockSave);\n\n//# sourceURL=webpack:///./packages/blocks/components/block-save/index.js?");

/***/ }),

/***/ "./packages/blocks/components/field/index.js":
/*!***************************************************!*\
  !*** ./packages/blocks/components/field/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/components/field/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/**\r\n * Carbon Fields dependencies.\r\n */\n\n\n/**\r\n * Internal dependencies.\r\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__[\"withFilters\"])('carbon-fields.field-wrapper.block')(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__[\"Field\"]));\n\n//# sourceURL=webpack:///./packages/blocks/components/field/index.js?");

/***/ }),

/***/ "./packages/blocks/components/field/style.scss":
/*!*****************************************************!*\
  !*** ./packages/blocks/components/field/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/components/field/style.scss?");

/***/ }),

/***/ "./packages/blocks/components/not-supported-field/index.js":
/*!*****************************************************************!*\
  !*** ./packages/blocks/components/not-supported-field/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * The external dependencies.\r\n */\n\n\n/**\r\n * Render a notice to inform the user that the field doesn't have\r\n * any options.\r\n *\r\n * @return {React.Element}\r\n */\nvar NotSupportedField = function NotSupportedField(_ref) {\n  var type = _ref.type;\n  return wp.element.createElement(\"em\", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"sprintf\"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])(\"Field of type '%s' is not supported in Gutenberg.\", 'carbon-fields-ui'), [type]));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotSupportedField);\n\n//# sourceURL=webpack:///./packages/blocks/components/not-supported-field/index.js?");

/***/ }),

/***/ "./packages/blocks/components/server-side-render/index.js":
/*!****************************************************************!*\
  !*** ./packages/blocks/components/server-side-render/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/api-fetch */ \"@wordpress/api-fetch\");\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n/**\r\n * External dependencies.\r\n */\n\n\n\n\n\n\n\n\n/**\r\n * This component is slightly modified version of the `ServerSideRender` component\r\n * that comes by default with Gutenberg.\r\n *\r\n * @see https://github.com/WordPress/gutenberg/tree/master/packages/components/src/server-side-render\r\n */\nvar ServerSideRender = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ServerSideRender, _Component);\n  var _super = _createSuper(ServerSideRender);\n  function ServerSideRender() {\n    var _this;\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ServerSideRender);\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _super.call.apply(_super, [this].concat(args));\n    /**\r\n     * Local state.\r\n     *\r\n     * @type {Object}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), \"state\", {\n      response: null\n    });\n    return _this;\n  }\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ServerSideRender, [{\n    key: \"componentDidMount\",\n    value:\n    /**\r\n     * Lifecycle hook.\r\n     *\r\n     * @return {void}\r\n     */\n    function componentDidMount() {\n      this.isStillMounted = true;\n\n      // Do the initial rendering.\n      this.fetch(this.props);\n\n      // Only debounce once the initial fetch occurs to ensure that the first\n      // renders show data as soon as possible.\n      this.fetch = Object(lodash__WEBPACK_IMPORTED_MODULE_13__[\"debounce\"])(this.fetch, 500);\n    }\n\n    /**\r\n     * Lifecycle hook.\r\n     *\r\n     * @return {void}\r\n     */\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this.isStillMounted = false;\n    }\n\n    /**\r\n     * Lifecycle hook.\r\n     *\r\n     * @param  {Object} prevProps\r\n     * @return {void}\r\n     */\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_13__[\"isEqual\"])(prevProps, this.props)) {\n        this.fetch(this.props);\n      }\n    }\n\n    /**\r\n     * Fetch the preview of the block.\r\n     *\r\n     * @param  {Object} props\r\n     * @return {void}\r\n     */\n  }, {\n    key: \"fetch\",\n    value: function fetch(props) {\n      var _this2 = this;\n      if (!this.isStillMounted) {\n        return;\n      }\n      if (null !== this.state.response) {\n        this.setState({\n          response: null\n        });\n      }\n      var block = props.block;\n\n      // Store the latest fetch request so that when we process it, we can\n      // check if it is the current request, to avoid race conditions on slow networks.\n      var fetchRequest = this.currentFetchRequest = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default()({\n        method: 'post',\n        path: '/carbon-fields/v1/block-renderer',\n        data: {\n          name: block.name,\n          content: Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_11__[\"serialize\"])([block])\n        }\n      }).then(function (response) {\n        if (_this2.isStillMounted && fetchRequest === _this2.currentFetchRequest && response && response.rendered) {\n          _this2.setState({\n            response: response.rendered\n          });\n        }\n      })[\"catch\"](function (error) {\n        if (_this2.isStillMounted && fetchRequest === _this2.currentFetchRequest) {\n          _this2.setState({\n            response: {\n              error: true,\n              errorMsg: error.message\n            }\n          });\n        }\n      });\n    }\n\n    /**\r\n     * Render the component.\r\n     *\r\n     * @return {Object}\r\n     */\n  }, {\n    key: \"render\",\n    value: function render() {\n      var response = this.state.response;\n      var className = this.props.className;\n      if (!response) {\n        return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__[\"Placeholder\"], {\n          className: className\n        }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__[\"Spinner\"], null));\n      } else if (response.error) {\n        return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__[\"Placeholder\"], {\n          className: className\n        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__[\"sprintf\"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__[\"__\"])('Error loading block: %s', 'carbon-fields-ui'), response.errorMsg));\n      } else if (!response.length) {\n        return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__[\"Placeholder\"], {\n          className: className\n        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__[\"__\"])('No results found.', 'carbon-fields-ui'));\n      }\n      return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"RawHTML\"], {\n        key: \"html\",\n        className: className\n      }, response);\n    }\n  }]);\n  return ServerSideRender;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__[\"withSelect\"])(function (select, _ref) {\n  var clientId = _ref.clientId;\n  var _select = select('core/block-editor'),\n    getBlock = _select.getBlock;\n  return {\n    block: getBlock(clientId)\n  };\n})(ServerSideRender));\n\n//# sourceURL=webpack:///./packages/blocks/components/server-side-render/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/association/index.js":
/*!*****************************************************!*\
  !*** ./packages/blocks/fields/association/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/association/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n/**\r\n * External dependencies.\r\n */\n\n\n\n\n/**\r\n * Carbon Fields dependencies.\r\n */\n\n\n/**\r\n * Internal dependencies.\r\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.association.block', 'carbon-fields/blocks', Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__[\"withProps\"])(function (props) {\n  return {\n    hierarchyResolver: function hierarchyResolver() {\n      // Get the block that contains the field.\n      var block = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"select\"])('core/block-editor').getBlock(props.blockId);\n\n      // Get the path.\n      var path = props.id.split('__');\n\n      // Remove the chunk that contains the block identifier.\n      path.shift();\n\n      // Get the hierarchy.\n      var hierarchy = path.shift();\n      var accessor = \"data.\".concat(hierarchy);\n\n      // Visit every branch in the tree so we can get the full hierarchy.\n      while (path.length > 0) {\n        var chunk = path.shift();\n        var isGroup = chunk.indexOf('cf-') === 0;\n        if (isGroup) {\n          var groups = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(block.attributes, \"\".concat(accessor));\n          var group = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"find\"])(groups, ['_id', chunk]);\n          var groupIndex = groups.indexOf(group);\n          accessor = \"\".concat(accessor, \".\").concat(groupIndex);\n          hierarchy = \"\".concat(hierarchy, \"[\").concat(groupIndex, \"]:\").concat(group._type, \"/\");\n        } else {\n          accessor = \"\".concat(accessor, \".\").concat(chunk);\n          hierarchy = \"\".concat(hierarchy).concat(chunk);\n        }\n      }\n      return hierarchy;\n    }\n  };\n}));\n\n//# sourceURL=webpack:///./packages/blocks/fields/association/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/association/style.scss":
/*!*******************************************************!*\
  !*** ./packages/blocks/fields/association/style.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/association/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/block-preview/index.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/fields/block-preview/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/block-preview/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * Internal dependencies.\r\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/block-preview/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/block-preview/style.scss":
/*!*********************************************************!*\
  !*** ./packages/blocks/fields/block-preview/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/block-preview/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/complex/index.js":
/*!*************************************************!*\
  !*** ./packages/blocks/fields/complex/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/complex/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/field */ \"./packages/blocks/components/field/index.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n/**\r\n * External dependencies.\r\n */\n\n\n\n\n\n/**\r\n * Carbon Fields dependencies.\r\n */\n\n\n/**\r\n * Internal dependencies.\r\n */\n\n\nvar ComplexField = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ComplexField, _Component);\n  var _super = _createSuper(ComplexField);\n  function ComplexField() {\n    var _this;\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ComplexField);\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _super.call.apply(_super, [this].concat(args));\n    /**\r\n     * Local state.\r\n     *\r\n     * @type {Object}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"state\", {\n      collapsedGroups: _this.props.value.reduce(function (accumulator, _ref) {\n        var _id = _ref._id,\n          _type = _ref._type;\n        var group = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"find\"])(_this.props.field.groups, ['name', _type]);\n        if (!group.collapsed) {\n          return accumulator;\n        }\n        return accumulator.concat(_id);\n      }, [])\n    });\n    /**\r\n     * Handles adding of group.\r\n     *\r\n     * @param  {Object}   group\r\n     * @param  {Function} callback\r\n     * @return {void}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleAddGroup\", function (group, callback) {\n      var _this$props = _this.props,\n        id = _this$props.id,\n        value = _this$props.value,\n        onChange = _this$props.onChange;\n      var data = {};\n      data._id = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_12__[\"uniqueId\"])();\n      data._type = group.name;\n      group.fields.reduce(function (accumulator, field) {\n        accumulator[field.base_name] = field.default_value;\n        return accumulator;\n      }, data);\n      onChange(id, value.concat(data));\n      callback(data);\n    });\n    /**\r\n     * Handles cloning of group.\r\n     *\r\n     * @param  {Object}   group\r\n     * @param  {Function} callback\r\n     * @return {void}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleCloneGroup\", function (group, callback) {\n      var _this$props2 = _this.props,\n        id = _this$props2.id,\n        value = _this$props2.value,\n        onChange = _this$props2.onChange;\n      var index = value.indexOf(group);\n      var clonedGroup = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"cloneDeep\"])(group);\n      clonedGroup._id = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_12__[\"uniqueId\"])();\n      onChange(id, immer__WEBPACK_IMPORTED_MODULE_8___default()(value, function (draft) {\n        draft.splice(index + 1, 0, clonedGroup);\n      }));\n      callback(clonedGroup);\n    });\n    /**\r\n     * Handles removing of group.\r\n     *\r\n     * @param  {Object} group\r\n     * @return {void}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleRemoveGroup\", function (group) {\n      var _this$props3 = _this.props,\n        id = _this$props3.id,\n        value = _this$props3.value,\n        onChange = _this$props3.onChange;\n      var groupIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"findIndex\"])(value, ['_id', group._id]);\n      onChange(id, immer__WEBPACK_IMPORTED_MODULE_8___default()(value, function (draft) {\n        draft.splice(groupIndex, 1);\n      }));\n      _this.setState(function (_ref2) {\n        var collapsedGroups = _ref2.collapsedGroups;\n        return {\n          collapsedGroups: Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"without\"])(collapsedGroups, group._id)\n        };\n      });\n    });\n    /**\r\n     * Handles expanding/collapsing of group.\r\n     *\r\n     * @param  {string} groupId\r\n     * @return {void}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleToggleGroup\", function (groupId) {\n      _this.setState(function (_ref3) {\n        var collapsedGroups = _ref3.collapsedGroups;\n        if (collapsedGroups.indexOf(groupId) > -1) {\n          collapsedGroups = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"without\"])(collapsedGroups, groupId);\n        } else {\n          collapsedGroups = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(collapsedGroups), [groupId]);\n        }\n        return {\n          collapsedGroups: collapsedGroups\n        };\n      });\n    });\n    /**\r\n     * Handles expanding/collapsing of all groups.\r\n     *\r\n     * @return {void}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleToggleAllGroups\", function () {\n      var value = _this.props.value;\n      _this.setState(function (_ref4) {\n        var collapsedGroups = _ref4.collapsedGroups;\n        if (collapsedGroups.length !== value.length) {\n          collapsedGroups = value.map(function (group) {\n            return group._id;\n          });\n        } else {\n          collapsedGroups = [];\n        }\n        return {\n          collapsedGroups: collapsedGroups\n        };\n      });\n    });\n    /**\r\n     * Handles setuping of group.\r\n     *\r\n     * @param  {Object} group\r\n     * @param  {Object} props\r\n     * @return {Object}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleGroupSetup\", function (group, props) {\n      var fields = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"get\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"find\"])(_this.props.field.groups, ['name', group._type]), 'fields', []);\n      var values = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"omit\"])(group, ['_id', '_type']);\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"assign\"])({}, props, {\n        id: group._id,\n        fields: fields,\n        collapsed: _this.state.collapsedGroups.indexOf(group._id) > -1,\n        context: 'block',\n        values: values\n      });\n    });\n    /**\r\n     * Handles setuping of group's field.\r\n     *\r\n     * @param  {Object} field\r\n     * @param  {Object} props\r\n     * @param  {Object} groupProps\r\n     * @return {Array}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleGroupFieldSetup\", function (field, props, groupProps) {\n      var blockId = _this.props.blockId;\n      var id = \"\".concat(_this.props.id, \"__\").concat(groupProps.id, \"__\").concat(field.base_name);\n      var value = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"get\"])(groupProps, \"values.\".concat(field.base_name));\n      return [_components_field__WEBPACK_IMPORTED_MODULE_14__[\"default\"], Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"assign\"])({}, props, {\n        key: id,\n        id: id,\n        name: field.base_name,\n        containerId: _this.props.containerId,\n        blockId: blockId,\n        field: field,\n        value: value,\n        onChange: _this.handleGroupFieldChange\n      })];\n    });\n    /**\r\n     * Handles the change of group field.\r\n     *\r\n     * @param  {string} fieldId\r\n     * @param  {mixed}  fieldValue\r\n     * @return {void}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleGroupFieldChange\", function (fieldId, fieldValue) {\n      var _this$props4 = _this.props,\n        id = _this$props4.id,\n        value = _this$props4.value,\n        onChange = _this$props4.onChange;\n      onChange(id, immer__WEBPACK_IMPORTED_MODULE_8___default()(value, function (draft) {\n        var path = fieldId.split('__');\n        var fieldName = path.pop();\n        var group = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"find\"])(draft, ['_id', path.pop()]);\n        Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"set\"])(group, fieldName, fieldValue);\n      }));\n    });\n    return _this;\n  }\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ComplexField, [{\n    key: \"getGroupValues\",\n    value:\n    /**\r\n     * Returns a list of group values.\r\n     *\r\n     * @return {Array}\r\n     */\n    function getGroupValues() {\n      return this.props.value.map(function (group) {\n        var values = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"mapKeys\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"omit\"])(group, ['_id', '_type']), function (value, key) {\n          return key.replace(/\\-/g, '_');\n        });\n        return [group._type, values];\n      });\n    }\n  }, {\n    key: \"render\",\n    value:\n    /**\r\n     * Renders the component.\r\n     *\r\n     * @return {Object}\r\n     */\n    function render() {\n      var handleGroupSetup = this.handleGroupSetup,\n        handleGroupFieldSetup = this.handleGroupFieldSetup,\n        handleAddGroup = this.handleAddGroup,\n        handleCloneGroup = this.handleCloneGroup,\n        handleRemoveGroup = this.handleRemoveGroup,\n        handleToggleGroup = this.handleToggleGroup,\n        handleToggleAllGroups = this.handleToggleAllGroups;\n      var _this$props5 = this.props,\n        value = _this$props5.value,\n        children = _this$props5.children;\n      var groupValues = this.getGroupValues();\n      var allGroupsAreCollapsed = this.state.collapsedGroups.length === value.length;\n      return children({\n        groupValues: groupValues,\n        allGroupsAreCollapsed: allGroupsAreCollapsed,\n        handleGroupSetup: handleGroupSetup,\n        handleGroupFieldSetup: handleGroupFieldSetup,\n        handleAddGroup: handleAddGroup,\n        handleCloneGroup: handleCloneGroup,\n        handleRemoveGroup: handleRemoveGroup,\n        handleToggleGroup: handleToggleGroup,\n        handleToggleAllGroups: handleToggleAllGroups\n      });\n    }\n  }]);\n  return ComplexField;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__[\"addFilter\"])('carbon-fields.complex.block', 'carbon-fields/blocks', function (OriginalComplexField) {\n  return function (props) {\n    var id = props.id,\n      name = props.name,\n      value = props.value,\n      error = props.error,\n      field = props.field;\n    return wp.element.createElement(ComplexField, props, function (_ref5) {\n      var groupValues = _ref5.groupValues,\n        allGroupsAreCollapsed = _ref5.allGroupsAreCollapsed,\n        handleGroupSetup = _ref5.handleGroupSetup,\n        handleGroupFieldSetup = _ref5.handleGroupFieldSetup,\n        handleAddGroup = _ref5.handleAddGroup,\n        handleCloneGroup = _ref5.handleCloneGroup,\n        handleRemoveGroup = _ref5.handleRemoveGroup,\n        handleToggleGroup = _ref5.handleToggleGroup,\n        handleToggleAllGroups = _ref5.handleToggleAllGroups;\n      return wp.element.createElement(OriginalComplexField, {\n        groupIdKey: \"_id\",\n        groupFilterKey: \"_type\",\n        id: id,\n        name: name,\n        value: value,\n        error: error,\n        field: field,\n        groupValues: groupValues,\n        allGroupsAreCollapsed: allGroupsAreCollapsed,\n        onGroupSetup: handleGroupSetup,\n        onGroupFieldSetup: handleGroupFieldSetup,\n        onAddGroup: handleAddGroup,\n        onCloneGroup: handleCloneGroup,\n        onRemoveGroup: handleRemoveGroup,\n        onToggleGroup: handleToggleGroup,\n        onToggleAllGroups: handleToggleAllGroups,\n        onChange: props.onChange\n      });\n    });\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/complex/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/complex/style.scss":
/*!***************************************************!*\
  !*** ./packages/blocks/fields/complex/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/complex/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/datetime/index.js":
/*!**************************************************!*\
  !*** ./packages/blocks/fields/datetime/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/date */ \"@wordpress/date\");\n/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/datetime/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n/**\r\n * External dependencies.\r\n */\n\n\n\n\n\n/**\r\n * Internal dependencies.\r\n */\n\nvar DateTimeField = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DateTimeField, _Component);\n  var _super = _createSuper(DateTimeField);\n  function DateTimeField() {\n    var _this;\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DateTimeField);\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _super.call.apply(_super, [this].concat(args));\n    /**\r\n     * Handles the change.\r\n     *\r\n     * @param  {Date[]} selectedDates\r\n     * @param  {string} selectedDateStr\r\n     * @return {void}\r\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleChange\", function (selectedDates, selectedDateStr) {\n      var _this$props = _this.props,\n        id = _this$props.id,\n        onChange = _this$props.onChange,\n        value = _this$props.value,\n        field = _this$props.field;\n      var formattedDate = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_8__[\"format\"])(field.storage_format, selectedDateStr);\n      if (formattedDate !== value) {\n        onChange(id, formattedDate);\n      }\n    });\n    return _this;\n  }\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DateTimeField, [{\n    key: \"render\",\n    value:\n    /**\r\n     * Renders the component.\r\n     *\r\n     * @return {Object}\r\n     */\n    function render() {\n      var handleChange = this.handleChange;\n      var children = this.props.children;\n      return children({\n        handleChange: handleChange\n      });\n    }\n  }]);\n  return DateTimeField;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__[\"addFilter\"])('carbon-fields.date_time.block', 'carbon-fields/blocks', function (OriginalDateTimeField) {\n  return function (props) {\n    return wp.element.createElement(DateTimeField, props, function (_ref) {\n      var handleChange = _ref.handleChange;\n      return wp.element.createElement(OriginalDateTimeField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        buttonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Select Date', 'carbon-fields-ui')\n      }, props, {\n        onChange: handleChange\n      }));\n    });\n  };\n});\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__[\"addFilter\"])('carbon-fields.date.block', 'carbon-fields/blocks', function (OriginalDateField) {\n  return function (props) {\n    return wp.element.createElement(DateTimeField, props, function (_ref2) {\n      var handleChange = _ref2.handleChange;\n      return wp.element.createElement(OriginalDateField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n        onChange: handleChange\n      }));\n    });\n  };\n});\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__[\"addFilter\"])('carbon-fields.time.block', 'carbon-fields/blocks', function (OriginalTimeField) {\n  return function (props) {\n    return wp.element.createElement(DateTimeField, props, function (_ref3) {\n      var handleChange = _ref3.handleChange;\n      return wp.element.createElement(OriginalTimeField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n        onChange: handleChange\n      }));\n    });\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/datetime/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/datetime/style.scss":
/*!****************************************************!*\
  !*** ./packages/blocks/fields/datetime/style.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/datetime/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/file/index.js":
/*!**********************************************!*\
  !*** ./packages/blocks/fields/file/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/file/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n/**\r\n * External dependencies.\r\n */\n\n\n\n/**\r\n * Internal dependencies.\r\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.file.block', 'carbon-fields/blocks', function (OriginalFileField) {\n  return function (props) {\n    return wp.element.createElement(OriginalFileField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      buttonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select File', 'carbon-fields-ui'),\n      mediaLibraryButtonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Use File', 'carbon-fields-ui'),\n      mediaLibraryTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select File', 'carbon-fields-ui')\n    }, props));\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/file/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/file/style.scss":
/*!************************************************!*\
  !*** ./packages/blocks/fields/file/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/file/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/footer-scripts/index.js":
/*!********************************************************!*\
  !*** ./packages/blocks/fields/footer-scripts/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/not-supported-field */ \"./packages/blocks/components/not-supported-field/index.js\");\n/**\r\n * External dependencies.\r\n */\n\n\n/**\r\n * The internal dependencies.\r\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.footer_scripts.block', 'carbon-fields/blocks', function () {\n  return function (props) {\n    return wp.element.createElement(_components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      type: props.field.type\n    });\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/footer-scripts/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/header-scripts/index.js":
/*!********************************************************!*\
  !*** ./packages/blocks/fields/header-scripts/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/not-supported-field */ \"./packages/blocks/components/not-supported-field/index.js\");\n/**\r\n * External dependencies.\r\n */\n\n\n/**\r\n * The internal dependencies.\r\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.header_scripts.block', 'carbon-fields/blocks', function () {\n  return function (props) {\n    return wp.element.createElement(_components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      type: props.field.type\n    });\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/header-scripts/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/hidden/index.js":
/*!************************************************!*\
  !*** ./packages/blocks/fields/hidden/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/not-supported-field */ \"./packages/blocks/components/not-supported-field/index.js\");\n/**\r\n * External dependencies.\r\n */\n\n\n/**\r\n * The internal dependencies.\r\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.hidden.block', 'carbon-fields/blocks', function () {\n  return function (props) {\n    return wp.element.createElement(_components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      type: props.field.type\n    });\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/hidden/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/image/index.js":
/*!***********************************************!*\
  !*** ./packages/blocks/fields/image/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n\n/**\r\n * External dependencies.\r\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.image.block', 'carbon-fields/blocks', function (OriginalImageField) {\n  return function (props) {\n    return wp.element.createElement(OriginalImageField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      buttonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Image', 'carbon-fields-ui'),\n      mediaLibraryButtonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Use Image', 'carbon-fields-ui'),\n      mediaLibraryTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Image', 'carbon-fields-ui')\n    }, props));\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/image/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/index.js":
/*!*****************************************!*\
  !*** ./packages/blocks/fields/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hocs_with_conditional_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hocs/with-conditional-logic */ \"./packages/blocks/hocs/with-conditional-logic/index.js\");\n/* harmony import */ var _metaboxes_utils_is_gutenberg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../metaboxes/utils/is-gutenberg */ \"./packages/metaboxes/utils/is-gutenberg.js\");\n/* harmony import */ var _association__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./association */ \"./packages/blocks/fields/association/index.js\");\n/* harmony import */ var _complex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./complex */ \"./packages/blocks/fields/complex/index.js\");\n/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datetime */ \"./packages/blocks/fields/datetime/index.js\");\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file */ \"./packages/blocks/fields/file/index.js\");\n/* harmony import */ var _footer_scripts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer-scripts */ \"./packages/blocks/fields/footer-scripts/index.js\");\n/* harmony import */ var _header_scripts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header-scripts */ \"./packages/blocks/fields/header-scripts/index.js\");\n/* harmony import */ var _hidden__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hidden */ \"./packages/blocks/fields/hidden/index.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image */ \"./packages/blocks/fields/image/index.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map */ \"./packages/blocks/fields/map/index.js\");\n/* harmony import */ var _multiselect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./multiselect */ \"./packages/blocks/fields/multiselect/index.js\");\n/* harmony import */ var _media_gallery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./media-gallery */ \"./packages/blocks/fields/media-gallery/index.js\");\n/* harmony import */ var _oembed__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./oembed */ \"./packages/blocks/fields/oembed/index.js\");\n/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./radio */ \"./packages/blocks/fields/radio/index.js\");\n/* harmony import */ var _radio_image__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./radio-image */ \"./packages/blocks/fields/radio-image/index.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./select */ \"./packages/blocks/fields/select/index.js\");\n/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./set */ \"./packages/blocks/fields/set/index.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sidebar */ \"./packages/blocks/fields/sidebar/index.js\");\n/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./separator */ \"./packages/blocks/fields/separator/index.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./text */ \"./packages/blocks/fields/text/index.js\");\n/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./textarea */ \"./packages/blocks/fields/textarea/index.js\");\n/* harmony import */ var _block_preview__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./block-preview */ \"./packages/blocks/fields/block-preview/index.js\");\n/**\r\n * External dependencies.\r\n */\n\n\n\n\n/**\r\n * Carbon Fields dependencies.\r\n */\n\n\n/**\r\n * Internal dependencies.\r\n */\n\n\n\n/**\r\n * Connects every field to the store.\r\n */\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.field-edit.block', 'carbon-fields/blocks', Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(_hocs_with_conditional_logic__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__[\"withDispatch\"])(function (dispatch) {\n  // Widgets support - WordPress 5.8\n  if (Object(_metaboxes_utils_is_gutenberg__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()) {\n    var _dispatch = dispatch('core/editor'),\n      lockPostSaving = _dispatch.lockPostSaving,\n      unlockPostSaving = _dispatch.unlockPostSaving;\n    return {\n      lockSaving: lockPostSaving,\n      unlockSaving: unlockPostSaving\n    };\n  }\n  return {};\n}), _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__[\"withValidation\"]));\n\n/**\r\n * Internal dependencies.\r\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/map/index.js":
/*!*********************************************!*\
  !*** ./packages/blocks/fields/map/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/map/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * Internal dependencies.\r\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/map/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/map/style.scss":
/*!***********************************************!*\
  !*** ./packages/blocks/fields/map/style.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/map/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/media-gallery/index.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/fields/media-gallery/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/media-gallery/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n/**\r\n * External dependencies.\r\n */\n\n\n\n/**\r\n * Internal dependencies.\r\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.media_gallery.block', 'carbon-fields/blocks', function (OriginalMediaGalleryField) {\n  return function (props) {\n    return wp.element.createElement(OriginalMediaGalleryField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      buttonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Attachments', 'carbon-fields-ui'),\n      mediaLibraryButtonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Use Attachments', 'carbon-fields-ui'),\n      mediaLibraryTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Attachments', 'carbon-fields-ui')\n    }, props));\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/media-gallery/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/media-gallery/style.scss":
/*!*********************************************************!*\
  !*** ./packages/blocks/fields/media-gallery/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/media-gallery/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/multiselect/index.js":
/*!*****************************************************!*\
  !*** ./packages/blocks/fields/multiselect/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/multiselect/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * Internal dependencies.\r\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/multiselect/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/multiselect/style.scss":
/*!*******************************************************!*\
  !*** ./packages/blocks/fields/multiselect/style.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/multiselect/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/oembed/index.js":
/*!************************************************!*\
  !*** ./packages/blocks/fields/oembed/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/oembed/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * Internal dependencies.\r\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/oembed/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/oembed/style.scss":
/*!**************************************************!*\
  !*** ./packages/blocks/fields/oembed/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/oembed/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/radio-image/index.js":
/*!*****************************************************!*\
  !*** ./packages/blocks/fields/radio-image/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/radio-image/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * Internal dependencies.\r\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/radio-image/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/radio-image/style.scss":
/*!*******************************************************!*\
  !*** ./packages/blocks/fields/radio-image/style.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/radio-image/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/radio/index.js":
/*!***********************************************!*\
  !*** ./packages/blocks/fields/radio/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/radio/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * Internal dependencies.\r\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/radio/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/radio/style.scss":
/*!*************************************************!*\
  !*** ./packages/blocks/fields/radio/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/radio/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/select/index.js":
/*!************************************************!*\
  !*** ./packages/blocks/fields/select/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/select/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * Internal dependencies.\r\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/select/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/select/style.scss":
/*!**************************************************!*\
  !*** ./packages/blocks/fields/select/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/select/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/separator/index.js":
/*!***************************************************!*\
  !*** ./packages/blocks/fields/separator/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/separator/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * Internal dependencies.\r\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/separator/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/separator/style.scss":
/*!*****************************************************!*\
  !*** ./packages/blocks/fields/separator/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/separator/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/set/index.js":
/*!*********************************************!*\
  !*** ./packages/blocks/fields/set/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/set/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * Internal dependencies.\r\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/set/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/set/style.scss":
/*!***********************************************!*\
  !*** ./packages/blocks/fields/set/style.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/set/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/sidebar/index.js":
/*!*************************************************!*\
  !*** ./packages/blocks/fields/sidebar/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/not-supported-field */ \"./packages/blocks/components/not-supported-field/index.js\");\n/**\r\n * External dependencies.\r\n */\n\n\n/**\r\n * The internal dependencies.\r\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.sidebar.block', 'carbon-fields/blocks', function () {\n  return function (props) {\n    return wp.element.createElement(_components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      type: props.field.type\n    });\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/sidebar/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/text/index.js":
/*!**********************************************!*\
  !*** ./packages/blocks/fields/text/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/text/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * Internal dependencies.\r\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/text/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/text/style.scss":
/*!************************************************!*\
  !*** ./packages/blocks/fields/text/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/text/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/textarea/index.js":
/*!**************************************************!*\
  !*** ./packages/blocks/fields/textarea/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/textarea/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * Internal dependencies.\r\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/textarea/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/textarea/style.scss":
/*!****************************************************!*\
  !*** ./packages/blocks/fields/textarea/style.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/textarea/style.scss?");

/***/ }),

/***/ "./packages/blocks/hocs/with-conditional-logic/index.js":
/*!**************************************************************!*\
  !*** ./packages/blocks/hocs/with-conditional-logic/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-distinct-until-changed */ \"./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! callbag-basics */ \"./node_modules/callbag-basics/index.js\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_4__);\n/**\r\n * External dependencies.\r\n */\n\n\n\n\n\n/**\r\n * Carbon Fields dependencies.\r\n */\n\n\n/**\r\n * Adds the `parent.` parent prefix to field's name.\r\n *\r\n * @param  {Object[]} fields\r\n * @param  {number}   depth\r\n * @return {Array[]}\r\n */\nfunction mapParentPrefix(fields) {\n  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"mapKeys\"])(fields, function (value, key) {\n    return \"\".concat(Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"repeat\"])('parent.', depth)).concat(key);\n  });\n}\n\n/**\r\n * Returns whether the given string is a group identifier.\r\n *\r\n * @param  {string} id\r\n * @return {boolean}\r\n */\nfunction isComplexGroupIdentifier(id) {\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"startsWith\"])(id, 'cf-');\n}\n\n/**\r\n * The function used to track dependencies required\r\n * by conditional logic.\r\n *\r\n * @param  {Object} props\r\n * @return {Object}\r\n */\nfunction input(props) {\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_2__[\"pipe\"])(Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_4__[\"fromSelector\"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"select\"])('core/block-editor').getBlock, props.blockId), Object(callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_2__[\"map\"])(function (blockData) {\n    var _blockData$attributes;\n    return blockData === null || blockData === void 0 ? void 0 : (_blockData$attributes = blockData.attributes) === null || _blockData$attributes === void 0 ? void 0 : _blockData$attributes.data;\n  }));\n}\n\n/**\r\n * The function that provides the data that needs to be\r\n * evaluated by conditional logic.\r\n *\r\n * @param  {Object} props\r\n * @param  {Object} fields\r\n * @return {Object}\r\n */\nfunction output(props, fields) {\n  var isTopLevelField = Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"has\"])(fields, props.field.base_name);\n  var siblingFields = {};\n  if (isTopLevelField) {\n    siblingFields = mapParentPrefix(Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"omit\"])(fields, [props.field.base_name]));\n  } else {\n    // Get the hierarchy.\n    var path = props.id.split('__');\n\n    // Remove the chunk with identifier of block since\n    // we already have it.\n    path.shift();\n\n    // Remove the chunk with name of root field.\n    var rootFieldName = path.shift();\n\n    // Remove the chunk with name of field since\n    // we already have it.\n    path.pop();\n\n    // Keep reference to the depth\n    // so we can add the `parent.` prefix.\n    var depth = path.reduce(function (accumulator, chunk) {\n      return isComplexGroupIdentifier(chunk) ? accumulator : accumulator + 1;\n    }, 0);\n\n    // Collect fields that are siblings of root field.\n    siblingFields = Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"omit\"])(fields, [rootFieldName]);\n    siblingFields = mapParentPrefix(siblingFields, depth + 1);\n\n    // Keep reference to the full path of the field.\n    var pathPrefix = rootFieldName;\n    while (path.length > 0) {\n      var chunk = path.shift();\n      var isGroup = isComplexGroupIdentifier(chunk);\n      var isNestedComplex = !isGroup;\n      if (isGroup) {\n        var groupIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"findIndex\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"get\"])(fields, pathPrefix), ['_id', chunk]);\n        pathPrefix = \"\".concat(pathPrefix, \".\").concat(groupIndex);\n        var groupFields = Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"get\"])(fields, pathPrefix);\n        groupFields = Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"omit\"])(groupFields, ['_id', '_type', props.field.base_name]);\n        groupFields = mapParentPrefix(groupFields, depth);\n        Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"assign\"])(siblingFields, groupFields);\n      }\n      if (isNestedComplex) {\n        pathPrefix = \"\".concat(pathPrefix, \".\").concat(chunk);\n        depth--;\n      }\n    }\n  }\n  return siblingFields;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_4__[\"withConditionalLogic\"])(input, output));\n\n//# sourceURL=webpack:///./packages/blocks/hocs/with-conditional-logic/index.js?");

/***/ }),

/***/ "./packages/blocks/index.js":
/*!**********************************!*\
  !*** ./packages/blocks/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields */ \"./packages/blocks/fields/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ \"./packages/blocks/store/index.js\");\n/* harmony import */ var _components_block_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/block-edit */ \"./packages/blocks/components/block-edit/index.js\");\n/* harmony import */ var _components_block_save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/block-save */ \"./packages/blocks/components/block-save/index.js\");\n/* harmony import */ var _utils_transform_fields_to_attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/transform-fields-to-attributes */ \"./packages/blocks/utils/transform-fields-to-attributes.js\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */\n\n/**\r\n * External dependencies.\r\n */\n\n\n\n\n\n/**\r\n * Internal dependencies.\r\n */\n\n\n\n\n\n\n/**\r\n * Sets the locale data for the package type\r\n */\nObject(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__[\"setLocaleData\"])(window.cf.config.locale, 'carbon-fields-ui');\n\n/**\r\n * Register the blocks.\r\n */\nvar containerDefinitions = {};\nvar fieldDefinitions = {};\nObject(lodash__WEBPACK_IMPORTED_MODULE_4__[\"get\"])(window.cf, 'preloaded.blocks', []).forEach(function (container) {\n  var name = Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"kebabCase\"])(container.id).replace('carbon-fields-container-', '');\n  var fields = Object(_utils_transform_fields_to_attributes__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(container.fields);\n  var getBlockSetting = function getBlockSetting(key) {\n    var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"get\"])(container, \"settings.\".concat(key), def);\n  };\n  containerDefinitions[name] = container;\n  fieldDefinitions[name] = container.fields.map(function (field) {\n    return _objectSpread({}, field);\n  });\n  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__[\"registerBlockType\"])(\"carbon-fields/\".concat(name), {\n    title: container.title,\n    icon: getBlockSetting('icon'),\n    parent: getBlockSetting('parent', []),\n    category: getBlockSetting('category.slug'),\n    keywords: getBlockSetting('keywords', []),\n    description: getBlockSetting('description', ''),\n    attributes: {\n      data: {\n        type: 'object',\n        \"default\": fields\n      }\n    },\n    supports: {\n      tabs: Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"isPlainObject\"])(getBlockSetting('tabs')),\n      preview: getBlockSetting('preview'),\n      innerBlocks: getBlockSetting('inner_blocks.enabled'),\n      alignWide: false,\n      anchor: false,\n      html: false\n    },\n    edit: _components_block_edit__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    save: _components_block_save__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    example: true\n  });\n});\n\n/**\r\n * Load the definitions in store.\r\n */\nObject(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"dispatch\"])('carbon-fields/blocks').setupContainerDefinitions(containerDefinitions);\nObject(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"dispatch\"])('carbon-fields/blocks').setupFieldDefinitions(fieldDefinitions);\n\n//# sourceURL=webpack:///./packages/blocks/index.js?");

/***/ }),

/***/ "./packages/blocks/store/actions.js":
/*!******************************************!*\
  !*** ./packages/blocks/store/actions.js ***!
  \******************************************/
/*! exports provided: setupContainerDefinitions, setupFieldDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupContainerDefinitions\", function() { return setupContainerDefinitions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupFieldDefinitions\", function() { return setupFieldDefinitions; });\n/**\r\n * Returns an action object used to setup the definitions state when first opening an editor.\r\n *\r\n * @param  {Object} definitions\r\n * @return {Object}\r\n */\nfunction setupContainerDefinitions(definitions) {\n  return {\n    type: 'SETUP_CONTAINER_DEFINITIONS',\n    payload: {\n      definitions: definitions\n    }\n  };\n}\n\n/**\r\n * Returns an action object used to setup the definitions state when first opening an editor.\r\n *\r\n * @param  {Object} definitions\r\n * @return {Object}\r\n */\nfunction setupFieldDefinitions(definitions) {\n  return {\n    type: 'SETUP_FIELD_DEFINITIONS',\n    payload: {\n      definitions: definitions\n    }\n  };\n}\n\n//# sourceURL=webpack:///./packages/blocks/store/actions.js?");

/***/ }),

/***/ "./packages/blocks/store/index.js":
/*!****************************************!*\
  !*** ./packages/blocks/store/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./packages/blocks/store/reducer.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./packages/blocks/store/actions.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ \"./packages/blocks/store/selectors.js\");\n/**\r\n * External dependencies.\r\n */\n\n\n/**\r\n * Internal dependencies.\r\n */\n\n\n\n\n/**\r\n * Register the store.\r\n */\nObject(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"registerStore\"])('carbon-fields/blocks', {\n  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,\n  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceURL=webpack:///./packages/blocks/store/index.js?");

/***/ }),

/***/ "./packages/blocks/store/reducer.js":
/*!******************************************!*\
  !*** ./packages/blocks/store/reducer.js ***!
  \******************************************/
/*! exports provided: containerDefinitionsByBlockName, fieldDefinitionsByBlockName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"containerDefinitionsByBlockName\", function() { return containerDefinitionsByBlockName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fieldDefinitionsByBlockName\", function() { return fieldDefinitionsByBlockName; });\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * External dependencies.\r\n */\n\n\n/**\r\n * The reducer that keeps track of container definitions keyed by block's name.\r\n *\r\n * @param  {Object} state\r\n * @param  {Object} action\r\n * @return {Object}\r\n */\nfunction containerDefinitionsByBlockName() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case 'SETUP_CONTAINER_DEFINITIONS':\n      return action.payload.definitions;\n    default:\n      return state;\n  }\n}\n\n/**\r\n * The reducer that keeps track of field definitions keyed by block's name.\r\n *\r\n * @param  {Object} state\r\n * @param  {Object} action\r\n * @return {Object}\r\n */\nfunction fieldDefinitionsByBlockName() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case 'SETUP_FIELD_DEFINITIONS':\n      return action.payload.definitions;\n    default:\n      return state;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  containerDefinitionsByBlockName: containerDefinitionsByBlockName,\n  fieldDefinitionsByBlockName: fieldDefinitionsByBlockName\n}));\n\n//# sourceURL=webpack:///./packages/blocks/store/reducer.js?");

/***/ }),

/***/ "./packages/blocks/store/selectors.js":
/*!********************************************!*\
  !*** ./packages/blocks/store/selectors.js ***!
  \********************************************/
/*! exports provided: getContainerDefinitionByBlockName, getFieldDefinitionsByBlockName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getContainerDefinitionByBlockName\", function() { return getContainerDefinitionByBlockName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFieldDefinitionsByBlockName\", function() { return getFieldDefinitionsByBlockName; });\n/**\r\n * Get the container by a given block name.\r\n *\r\n * @param  {Object} state\r\n * @param  {string} blockName\r\n * @return {Object}\r\n */\nfunction getContainerDefinitionByBlockName(state, blockName) {\n  return state.containerDefinitionsByBlockName[blockName.replace('carbon-fields/', '')] || {};\n}\n\n/**\r\n * Get the fields by a given block name.\r\n *\r\n * @param  {Object} state\r\n * @param  {string} blockName\r\n * @return {Object[]}\r\n */\nfunction getFieldDefinitionsByBlockName(state, blockName) {\n  return state.fieldDefinitionsByBlockName[blockName.replace('carbon-fields/', '')] || [];\n}\n\n//# sourceURL=webpack:///./packages/blocks/store/selectors.js?");

/***/ }),

/***/ "./packages/blocks/utils/transform-fields-to-attributes.js":
/*!*****************************************************************!*\
  !*** ./packages/blocks/utils/transform-fields-to-attributes.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return transformFieldsToAttributes; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n/**\r\n * Transforms the fields to an attributes set.\r\n *\r\n * @param  {Object[]} fields\r\n * @return {Object}\r\n */\nfunction transformFieldsToAttributes(fields) {\n  return fields.reduce(function (attributes, field) {\n    return _objectSpread(_objectSpread({}, attributes), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, field.base_name, field.default_value));\n  }, {});\n}\n\n//# sourceURL=webpack:///./packages/blocks/utils/transform-fields-to-attributes.js?");

/***/ }),

/***/ "./packages/metaboxes/utils/is-gutenberg.js":
/*!**************************************************!*\
  !*** ./packages/metaboxes/utils/is-gutenberg.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isGutenberg; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * External dependencies.\r\n */\n\n\n/**\r\n * Returns true if Gutenberg is presented.\r\n *\r\n * @return {boolean}\r\n */\nfunction isGutenberg() {\n  return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"isUndefined\"])(window._wpLoadBlockEditor);\n}\n\n//# sourceURL=webpack:///./packages/metaboxes/utils/is-gutenberg.js?");

/***/ }),

/***/ "@carbon-fields/core":
/*!**************************!*\
  !*** external "cf.core" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = cf.core;\n\n//# sourceURL=webpack:///external_%22cf.core%22?");

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"apiFetch\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22apiFetch%22%5D?");

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"blocks\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22blocks%22%5D?");

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"components\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22components%22%5D?");

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"compose\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22compose%22%5D?");

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"data\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22data%22%5D?");

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"date\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22date%22%5D?");

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"editor\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22editor%22%5D?");

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"element\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22element%22%5D?");

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"hooks\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22hooks%22%5D?");

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"i18n\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22i18n%22%5D?");

/***/ }),

/***/ "immer":
/*!****************************************!*\
  !*** external ["cf","vendor","immer"] ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = cf[\"vendor\"][\"immer\"];\n\n//# sourceURL=webpack:///external_%5B%22cf%22,%22vendor%22,%22immer%22%5D?");

/***/ }),

/***/ "lodash":
/*!***************************!*\
  !*** external ["lodash"] ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = lodash;\n\n//# sourceURL=webpack:///external_%5B%22lodash%22%5D?");

/***/ })

/******/ });