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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() {\n  module.exports = _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nmodule.exports = _extends;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nmodule.exports = _objectSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

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

eval("/**\n * callbag-combine\n * ---------------\n *\n * Callbag factory that combines the latest data points from multiple (2 or\n * more) callbag sources. It delivers those latest values as an array. Works\n * with both pullable and listenable sources.\n *\n * `npm install callbag-combine`\n *\n * Example:\n *\n *     const interval = require('callbag-interval');\n *     const observe = require('callbag-observe');\n *     const combine = require('callbag-combine');\n *\n *     const source = combine(interval(100), interval(350));\n *\n *     observe(x => console.log(x))(source); // [2,0]\n *                                           // [3,0]\n *                                           // [4,0]\n *                                           // [5,0]\n *                                           // [6,0]\n *                                           // [6,1]\n *                                           // [7,1]\n *                                           // [8,1]\n *                                           // ...\n */\n\nconst EMPTY = {};\n\nconst combine = (...sources) => (start, sink) => {\n  if (start !== 0) return;\n  const n = sources.length;\n  if (n === 0) {\n    sink(0, () => {});\n    sink(1, []);\n    sink(2);\n    return;\n  }\n  let Ns = n; // start counter\n  let Nd = n; // data counter\n  let Ne = n; // end counter\n  const vals = new Array(n);\n  const sourceTalkbacks = new Array(n);\n  const talkback = (t, d) => {\n    if (t !== 2) return;\n    for (let i = 0; i < n; i++) sourceTalkbacks[i](2);\n  };\n  sources.forEach((source, i) => {\n    vals[i] = EMPTY;\n    source(0, (t, d) => {\n      if (t === 0) {\n        sourceTalkbacks[i] = d;\n        if (--Ns === 0) sink(0, talkback);\n      } else if (t === 1) {\n        const _Nd = !Nd ? 0 : vals[i] === EMPTY ? --Nd : Nd;\n        vals[i] = d;\n        if (_Nd === 0) {\n          const arr = new Array(n);\n          for (let j = 0; j < n; ++j) arr[j] = vals[j];\n          sink(1, arr);\n        }\n      } else if (t === 2) {\n        if (--Ne === 0) sink(2);\n      } else {\n        sink(t, d);\n      }\n    });\n  });\n};\n\nmodule.exports = combine;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-combine/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-concat/readme.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-concat/readme.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-concat\n * --------------\n *\n * Callbag factory that concatenates the data from multiple (2 or more)\n * callbag sources. It starts each source at a time: waits for the previous\n * source to end before starting the next source. Works with both pullable\n * and listenable sources.\n *\n * `npm install callbag-concat`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const concat = require('callbag-concat');\n *\n *     const source = concat(fromIter([10,20,30]), fromIter(['a','b']));\n *\n *     iterate(x => console.log(x))(source); // 10\n *                                           // 20\n *                                           // 30\n *                                           // a\n *                                           // b\n */\n\nconst concat = (...sources) => (start, sink) => {\n  if (start !== 0) return;\n  const n = sources.length;\n  if (n === 0) {\n    sink(0, () => {});\n    sink(2);\n    return;\n  }\n  let i = 0;\n  let sourceTalkback;\n  const talkback = (t, d) => {\n    if (t === 1 || t === 2) {\n      sourceTalkback(t, d);\n    }\n  };\n  (function next() {\n    if (i === n) {\n      sink(2);\n      return;\n    }\n    sources[i](0, (t, d) => {\n      if (t === 0) {\n        sourceTalkback = d;\n        if (i === 0) sink(0, talkback);\n        else sourceTalkback(1);\n      } else if (t === 1) {\n        sink(1, d);\n      } else if (t === 2) {\n        i++;\n        next();\n      }\n    });\n  })();\n};\n\nmodule.exports = concat;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-concat/readme.js?");

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
/*! no static exports found */
/***/ (function(module, exports) {

eval("const flatten = source => (start, sink) => {\n  if (start !== 0) return;\n  const exists = x => typeof x !== 'undefined';\n  const absent = x => typeof x === 'undefined';\n  const noop = () => {};\n  let outerEnded = false;\n  let outerTalkback;\n  let innerTalkback;\n  function talkback(t) {\n    if (t === 1) (innerTalkback || outerTalkback || noop)(1);\n    if (t === 2) {\n      innerTalkback && innerTalkback(2);\n      outerTalkback && outerTalkback(2);\n    }\n  }\n  source(0, (T, D) => {\n    if (T === 0) {\n      outerTalkback = D;\n      sink(0, talkback);\n    } else if (T === 1) {\n      const innerSource = D;\n      if (innerTalkback) innerTalkback(2);\n      innerSource(0, (t, d) => {\n        if (t === 0) {\n          innerTalkback = d;\n          innerTalkback(1);\n        } else if (t === 1) sink(1, d);\n        else if (t === 2 && absent(d)) {\n          if (outerEnded) sink(2);\n          else {\n            innerTalkback = void 0;\n            outerTalkback(1);\n          }\n        }\n        else if (t === 2 && exists(d)) sink(2, d);\n      });\n    } else if (T === 2 && absent(D)) {\n      if (!innerTalkback) sink(2);\n      else outerEnded = true;\n    } else if (T === 2 && exists(D)) sink(2, D);\n  });\n};\n\nmodule.exports = flatten;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-flatten/index.js?");

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
/*! no static exports found */
/***/ (function(module, exports) {

eval("const fromEvent = (node, name) => (start, sink) => {\n  if (start !== 0) return;\n  const handler = ev => sink(1, ev);\n  sink(0, t => {\n    if (t === 2) node.removeEventListener(name, handler);\n  });\n  node.addEventListener(name, handler);\n};\n\nmodule.exports = fromEvent;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-event/index.js?");

/***/ }),

/***/ "./node_modules/callbag-from-iter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/callbag-from-iter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const fromIter = iter => (start, sink) => {\n  if (start !== 0) return;\n  const iterator =\n    typeof Symbol !== 'undefined' && iter[Symbol.iterator]\n      ? iter[Symbol.iterator]()\n      : iter;\n  let inloop = false;\n  let got1 = false;\n  let res;\n  function loop() {\n    inloop = true;\n    while (got1) {\n      got1 = false;\n      res = iterator.next();\n      if (res.done) sink(2);\n      else sink(1, res.value);\n    }\n    inloop = false;\n  }\n  sink(0, t => {\n    if (t === 1) {\n      got1 = true;\n      if (!inloop && !(res && res.done)) loop();\n    }\n  });\n};\n\nmodule.exports = fromIter;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-iter/index.js?");

/***/ }),

/***/ "./node_modules/callbag-from-obs/readme.js":
/*!*************************************************!*\
  !*** ./node_modules/callbag-from-obs/readme.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-from-obs\n * --------------\n *\n * Convert an observable (or subscribable) to a callbag listenable source.\n *\n * `npm install callbag-from-obs`\n *\n * Example:\n *\n * Convert an RxJS Observable:\n *\n *     const Rx = require('rxjs');\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const source = fromObs(Rx.Observable.interval(1000).take(4));\n *\n *     observe(x => console.log(x)(source); // 0\n *                                          // 1\n *                                          // 2\n *                                          // 3\n *\n * Convert anything that has the `.subscribe` method:\n *\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const subscribable = {\n *       subscribe: (observer) => {\n *         let i = 0;\n *         setInterval(() => observer.next(i++), 1000);\n *       }\n *     };\n *\n *     const source = fromObs(subscribable);\n *\n *     observe(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 3\n *                                           // ...\n */\n\nconst fromObs = observable => (start, sink) => {\n  if (start !== 0) return;\n  let dispose;\n  sink(0, t => {\n    if (t === 2 && dispose) {\n      if (dispose.unsubscribe) dispose.unsubscribe();\n      else dispose();\n    }\n  });\n  dispose = observable.subscribe({\n    next: x => sink(1, x),\n    error: e => sink(2, e),\n    complete: () => sink(2)\n  });\n};\n\nmodule.exports = fromObs;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-obs/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-from-promise/index.js":
/*!****************************************************!*\
  !*** ./node_modules/callbag-from-promise/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const fromPromise = promise => (start, sink) => {\n  if (start !== 0) return;\n  let ended = false;\n  const onfulfilled = val => {\n    if (ended) return;\n    sink(1, val);\n    sink(2);\n  };\n  const onrejected = err => {\n    if (ended) return;\n    sink(2, err);\n  };\n  promise.then(onfulfilled, onrejected);\n  sink(0, t => {\n    if (t === 2) ended = true;\n  });\n};\n\nmodule.exports = fromPromise;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-promise/index.js?");

/***/ }),

/***/ "./node_modules/callbag-interval/index.js":
/*!************************************************!*\
  !*** ./node_modules/callbag-interval/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const interval = period => (start, sink) => {\n  if (start !== 0) return;\n  let i = 0;\n  const id = setInterval(() => {\n    sink(1, i++);\n  }, period);\n  sink(0, t => {\n    if (t === 2) clearInterval(id);\n  });\n};\n\nmodule.exports = interval;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-interval/index.js?");

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

eval("/**\n * callbag-pipe\n * ------------\n *\n * Utility function for plugging callbags together in chain. This utility\n * actually doesn't rely on Callbag specifics, and is basically the same as\n * Ramda's `pipe` or lodash's `flow`. Anyway, this exists just to play nicely\n * with the ecosystem, and to facilitate the import of the function.\n *\n * `npm install callbag-pipe`\n *\n * Example:\n *\n * Create a source with `pipe`, then pass it to a `forEach`:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     const source = pipe(\n *       combine(interval(100), interval(350)),\n *       map(([x, y]) => `X${x},Y${y}`),\n *       take(10)\n *     );\n *\n *     forEach(x => console.log(x))(source); // X2,Y0\n *                                           // X3,Y0\n *                                           // X4,Y0\n *                                           // X5,Y0\n *                                           // X6,Y0\n *                                           // X6,Y1\n *                                           // X7,Y1\n *                                           // X8,Y1\n *                                           // X9,Y1\n *                                           // X9,Y2\n *\n *\n * Or use `pipe` to go all the way from source to sink:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       map(([x, y]) => `X${x},Y${y}`),\n *       take(10),\n *       forEach(x => console.log(x))\n *     );\n *     // X2,Y0\n *     // X3,Y0\n *     // X4,Y0\n *     // X5,Y0\n *     // X6,Y0\n *     // X6,Y1\n *     // X7,Y1\n *     // X8,Y1\n *     // X9,Y1\n *     // X9,Y2\n *\n *\n * Nesting\n * -------\n *\n * To use pipe inside another pipe, you need to give the inner pipe an\n * argument, e.g. `s => pipe(s, ...`:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       s => pipe(s,\n *         map(([x, y]) => `X${x},Y${y}`),\n *         take(10)\n *       ),\n *       forEach(x => console.log(x))\n *     );\n *\n *\n * This means you can use pipe to create a new operator:\n *\n *     const mapThenTake = (f, amount) =>\n *       s => pipe(s, map(f), take(amount));\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       mapThenTake(([x, y]) => `X${x},Y${y}`, 10),\n *       forEach(x => console.log(x))\n *     );\n *\n */\n\nfunction pipe(...cbs) {\n  let res = cbs[0];\n  for (let i = 1, n = cbs.length; i < n; i++) res = cbs[i](res);\n  return res;\n}\n\nmodule.exports = pipe;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-pipe/readme.js?");

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
/*! no static exports found */
/***/ (function(module, exports) {

eval("const share = source => {\n  let sinks = [];\n  let sourceTalkback;\n\n  return function shared(start, sink) {\n    if (start !== 0) return;\n    sinks.push(sink);\n\n    const talkback = (t, d) => {\n      if (t === 0) return;\n      if (t === 2) {\n        const i = sinks.indexOf(sink);\n        if (i > -1) sinks.splice(i, 1);\n        if (!sinks.length) sourceTalkback(2);\n      } else {\n        sourceTalkback(t, d);\n      }\n    };\n\n    if (sinks.length === 1) {\n      source(0, (t, d) => {\n        if (t === 0) {\n          sourceTalkback = d;\n          sink(0, talkback);\n        } else for (let s of sinks.slice(0)) s(t, d);\n        if (t === 2) sinks = [];\n      });\n      return\n    }\n\n    sink(0, talkback);\n  }\n}\n\nmodule.exports = share;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-share/index.js?");

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

eval("const take = max => source => (start, sink) => {\n  if (start !== 0) return;\n  let taken = 0;\n  let sourceTalkback;\n  function talkback(t, d) {\n    if (taken < max) sourceTalkback(t, d);\n  }\n  source(0, (t, d) => {\n    if (t === 0) {\n      sourceTalkback = d;\n      sink(0, talkback);\n    } else if (t === 1) {\n      if (taken < max) {\n        taken++;\n        sink(t, d);\n        if (taken === max) {\n          sink(2);\n          sourceTalkback(2);\n        }\n      }\n    } else {\n      sink(t, d);\n    }\n  });\n};\n\nmodule.exports = take;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-take/index.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./packages/blocks/components/block-edit/index.js":
/*!********************************************************!*\
  !*** ./packages/blocks/components/block-edit/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/editor */ \"@wordpress/editor\");\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/components/block-edit/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../field */ \"./packages/blocks/components/field/index.js\");\n\n\n\n\n\n\n\n\n\n/**\n * External dependencies.\n */\n\n\n\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\nvar BlockEdit =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BlockEdit, _Component);\n\n  function BlockEdit() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BlockEdit);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BlockEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"state\", {\n      mode: 'edit',\n      currentTab: _this.props.supportsTabs ? Object.keys(_this.props.container.settings.tabs)[0] : null\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleFieldChange\", function (fieldId, value) {\n      var _this$props = _this.props,\n          attributes = _this$props.attributes,\n          setAttributes = _this$props.setAttributes;\n      var fieldName = fieldId.replace(/^.+__(.+)?$/, '$1');\n      setAttributes({\n        data: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes.data, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()({}, fieldName, value))\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleModeChange\", function () {\n      _this.setState({\n        mode: _this.isInEditMode ? 'preview' : 'edit'\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleTabChange\", function (tab) {\n      _this.setState({\n        currentTab: tab\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"renderField\", function (field, index) {\n      var _this$props2 = _this.props,\n          clientId = _this$props2.clientId,\n          container = _this$props2.container,\n          attributes = _this$props2.attributes;\n      var FieldEdit = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_15__[\"getFieldType\"])(field.type, 'block');\n\n      if (!FieldEdit) {\n        return null;\n      }\n\n      var id = \"cf-\".concat(clientId, \"__\").concat(field.base_name);\n      var value = Object(lodash__WEBPACK_IMPORTED_MODULE_14__[\"get\"])(attributes.data, field.base_name, field.default_value);\n      return wp.element.createElement(_field__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n        key: index,\n        id: id,\n        field: field\n      }, wp.element.createElement(FieldEdit, {\n        id: id,\n        containerId: container.id,\n        blockId: clientId,\n        value: value,\n        field: field,\n        name: field.base_name,\n        onChange: _this.handleFieldChange\n      }));\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BlockEdit, [{\n    key: \"renderTabbedFields\",\n\n    /**\n     * Renders the fields in tabs.\n     *\n     * @param  {string[]} fieldNames\n     * @return {Object[]}\n     */\n    value: function renderTabbedFields(fieldNames) {\n      var _this2 = this;\n\n      var fields = this.props.fields;\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_14__[\"map\"])(fieldNames, function (fieldName, index) {\n        var field = Object(lodash__WEBPACK_IMPORTED_MODULE_14__[\"find\"])(fields, ['name', fieldName]);\n        return _this2.renderField(field, index);\n      });\n    }\n    /**\n     * Renders the fields that aren't in tabs.\n     *\n     * @return {Object}\n     */\n\n  }, {\n    key: \"renderNonTabbedFields\",\n    value: function renderNonTabbedFields() {\n      return wp.element.createElement(\"div\", {\n        className: \"cf-block__fields\"\n      }, this.props.fields.map(this.renderField));\n    }\n    /**\n     * Render the component.\n     *\n     * @return {Object}\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var currentTab = this.state.currentTab;\n      var _this$props3 = this.props,\n          name = _this$props3.name,\n          container = _this$props3.container,\n          attributes = _this$props3.attributes,\n          supportsTabs = _this$props3.supportsTabs,\n          supportsPreview = _this$props3.supportsPreview;\n      return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__[\"Fragment\"], null, supportsPreview && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_11__[\"BlockControls\"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__[\"Toolbar\"], {\n        controls: [{\n          icon: this.isInEditMode ? 'visibility' : 'hidden',\n          title: this.isInEditMode ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__[\"__\"])('Show preview', 'carbon-fields-ui') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__[\"__\"])('Hide preview', 'carbon-fields-ui'),\n          onClick: this.handleModeChange\n        }]\n      })), this.isInEditMode && supportsTabs && wp.element.createElement(\"div\", {\n        className: \"cf-block__tabs\"\n      }, wp.element.createElement(\"ul\", {\n        className: \"cf-block__tabs-list\"\n      }, Object(lodash__WEBPACK_IMPORTED_MODULE_14__[\"map\"])(container.settings.tabs, function (fieldNames, tabName) {\n        var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()('cf-block__tabs-item', {\n          'cf-block__tabs-item--current': tabName === currentTab\n        });\n        return wp.element.createElement(\"li\", {\n          key: tabName,\n          className: classes,\n          onClick: function onClick() {\n            return _this3.handleTabChange(tabName);\n          }\n        }, tabName);\n      }))), this.isInEditMode && (supportsTabs ? Object(lodash__WEBPACK_IMPORTED_MODULE_14__[\"map\"])(container.settings.tabs, function (fieldNames, tabName) {\n        return wp.element.createElement(\"div\", {\n          className: \"cf-block__fields\",\n          key: tabName,\n          hidden: tabName !== currentTab\n        }, _this3.renderTabbedFields(fieldNames));\n      }) : this.renderNonTabbedFields()), this.isInPreviewMode && wp.element.createElement(\"div\", {\n        className: \"cf-block__preview\"\n      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__[\"ServerSideRender\"], {\n        block: name,\n        attributes: attributes\n      })), this.isInPreviewMode && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_11__[\"InspectorControls\"], null, supportsTabs ? Object(lodash__WEBPACK_IMPORTED_MODULE_14__[\"map\"])(container.settings.tabs, function (fieldNames, tabName) {\n        return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__[\"PanelBody\"], {\n          key: tabName,\n          title: tabName\n        }, wp.element.createElement(\"div\", {\n          className: \"cf-block__fields\"\n        }, _this3.renderTabbedFields(fieldNames)));\n      }) : wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__[\"PanelBody\"], {\n        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__[\"__\"])('Fields', 'carbon-fields-ui')\n      }, this.renderNonTabbedFields())));\n    }\n  }, {\n    key: \"isInEditMode\",\n\n    /**\n     * Returns whether the block is in edit mode.\n     *\n     * @return {boolean}\n     */\n    get: function get() {\n      return this.state.mode === 'edit';\n    }\n    /**\n     * Returns whether the block is in edit mode.\n     *\n     * @return {boolean}\n     */\n\n  }, {\n    key: \"isInPreviewMode\",\n    get: function get() {\n      return this.state.mode === 'preview';\n    }\n    /**\n     * Renders a field.\n     *\n     * @param  {Object} field\n     * @param  {number} index\n     * @return {Object}\n     */\n\n  }]);\n\n  return BlockEdit;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__[\"withSelect\"])(function (select, _ref) {\n  var name = _ref.name;\n\n  var _select = select('core/blocks'),\n      hasBlockSupport = _select.hasBlockSupport;\n\n  var _select2 = select('carbon-fields/blocks'),\n      getContainerDefinitionByBlockName = _select2.getContainerDefinitionByBlockName,\n      getFieldDefinitionsByBlockName = _select2.getFieldDefinitionsByBlockName;\n\n  return {\n    container: getContainerDefinitionByBlockName(name),\n    fields: getFieldDefinitionsByBlockName(name),\n    supportsTabs: hasBlockSupport(name, 'tabs'),\n    supportsPreview: hasBlockSupport(name, 'preview')\n  };\n})(BlockEdit));\n\n//# sourceURL=webpack:///./packages/blocks/components/block-edit/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/**\n * External dependencies.\n */\n\n\nvar BlockSave =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(BlockSave, _Component);\n\n  function BlockSave() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BlockSave);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BlockSave).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BlockSave, [{\n    key: \"render\",\n\n    /**\n     * Render the component.\n     *\n     * @return {Object}\n     */\n    value: function render() {\n      return null;\n    }\n  }]);\n\n  return BlockSave;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlockSave);\n\n//# sourceURL=webpack:///./packages/blocks/components/block-save/index.js?");

/***/ }),

/***/ "./packages/blocks/components/field/index.js":
/*!***************************************************!*\
  !*** ./packages/blocks/components/field/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/components/field/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * Carbon Fields dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__[\"withFilters\"])('carbon-fields.field-wrapper.block')(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__[\"Field\"]));\n\n//# sourceURL=webpack:///./packages/blocks/components/field/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * The external dependencies.\n */\n\n/**\n * Render a notice to inform the user that the field doesn't have\n * any options.\n *\n * @return {React.Element}\n */\n\nvar NotSupportedField = function NotSupportedField(_ref) {\n  var type = _ref.type;\n  return wp.element.createElement(\"em\", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"sprintf\"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])(\"Field of type '%s' is not supported in Gutenberg.\", 'carbon-fields-ui'), [type]));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotSupportedField);\n\n//# sourceURL=webpack:///./packages/blocks/components/not-supported-field/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/association/index.js":
/*!*****************************************************!*\
  !*** ./packages/blocks/fields/association/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/association/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n/**\n * External dependencies.\n */\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.association.block', 'carbon-fields/blocks', Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__[\"withProps\"])(function (props) {\n  return {\n    hierarchyResolver: function hierarchyResolver() {\n      // Get the block that contains the field.\n      var block = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"select\"])('core/editor').getBlock(props.blockId); // Get the path.\n\n      var path = props.id.split('__'); // Remove the chunk that contains the block identifier.\n\n      path.shift(); // Get the hierarchy.\n\n      var hierarchy = path.shift();\n      var accessor = \"data.\".concat(hierarchy); // Visit every branch in the tree so we can get the full hierarchy.\n\n      while (path.length > 0) {\n        var chunk = path.shift();\n        var isGroup = chunk.indexOf('cf-') === 0;\n\n        if (isGroup) {\n          var groups = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(block.attributes, \"\".concat(accessor));\n          var group = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"find\"])(groups, ['_id', chunk]);\n          var groupIndex = groups.indexOf(group);\n          accessor = \"\".concat(accessor, \".\").concat(groupIndex);\n          hierarchy = \"\".concat(hierarchy, \"[\").concat(groupIndex, \"]:\").concat(group._type, \"/\");\n        } else {\n          accessor = \"\".concat(accessor, \".\").concat(chunk);\n          hierarchy = \"\".concat(hierarchy).concat(chunk);\n        }\n      }\n\n      return hierarchy;\n    }\n  };\n}));\n\n//# sourceURL=webpack:///./packages/blocks/fields/association/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/association/style.scss":
/*!*******************************************************!*\
  !*** ./packages/blocks/fields/association/style.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/blocks/fields/association/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/complex/index.js":
/*!*************************************************!*\
  !*** ./packages/blocks/fields/complex/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/complex/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/field */ \"./packages/blocks/components/field/index.js\");\n\n\n\n\n\n\n\n\n\n/**\n * External dependencies.\n */\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\nvar ComplexField =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ComplexField, _Component);\n\n  function ComplexField() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ComplexField);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ComplexField)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"state\", {\n      collapsedGroups: _this.props.value.reduce(function (accumulator, _ref) {\n        var _id = _ref._id,\n            _type = _ref._type;\n        var group = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"find\"])(_this.props.field.groups, ['name', _type]);\n\n        if (!group.collapsed) {\n          return accumulator;\n        }\n\n        return accumulator.concat(_id);\n      }, [])\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleAddGroup\", function (group, callback) {\n      var _this$props = _this.props,\n          id = _this$props.id,\n          value = _this$props.value,\n          onChange = _this$props.onChange;\n      var data = {};\n      data._id = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_12__[\"uniqueId\"])();\n      data._type = group.name;\n      group.fields.reduce(function (accumulator, field) {\n        accumulator[field.base_name] = field.default_value;\n        return accumulator;\n      }, data);\n      onChange(id, value.concat(data));\n      callback(data);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleCloneGroup\", function (group, callback) {\n      var _this$props2 = _this.props,\n          id = _this$props2.id,\n          value = _this$props2.value,\n          onChange = _this$props2.onChange;\n      var index = value.indexOf(group);\n      var clonedGroup = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"cloneDeep\"])(group);\n      clonedGroup._id = Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_12__[\"uniqueId\"])();\n      onChange(id, immer__WEBPACK_IMPORTED_MODULE_8___default()(value, function (draft) {\n        draft.splice(index + 1, 0, clonedGroup);\n      }));\n      callback(clonedGroup);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleRemoveGroup\", function (group) {\n      var _this$props3 = _this.props,\n          id = _this$props3.id,\n          value = _this$props3.value,\n          onChange = _this$props3.onChange;\n      var groupIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"findIndex\"])(value, ['_id', group._id]);\n      onChange(id, immer__WEBPACK_IMPORTED_MODULE_8___default()(value, function (draft) {\n        draft.splice(groupIndex, 1);\n      }));\n\n      _this.setState(function (_ref2) {\n        var collapsedGroups = _ref2.collapsedGroups;\n        return {\n          collapsedGroups: Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"without\"])(collapsedGroups, group._id)\n        };\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleToggleGroup\", function (groupId) {\n      _this.setState(function (_ref3) {\n        var collapsedGroups = _ref3.collapsedGroups;\n\n        if (collapsedGroups.indexOf(groupId) > -1) {\n          collapsedGroups = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"without\"])(collapsedGroups, groupId);\n        } else {\n          collapsedGroups = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(collapsedGroups).concat([groupId]);\n        }\n\n        return {\n          collapsedGroups: collapsedGroups\n        };\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleToggleAllGroups\", function () {\n      var value = _this.props.value;\n\n      _this.setState(function (_ref4) {\n        var collapsedGroups = _ref4.collapsedGroups;\n\n        if (collapsedGroups.length !== value.length) {\n          collapsedGroups = value.map(function (group) {\n            return group._id;\n          });\n        } else {\n          collapsedGroups = [];\n        }\n\n        return {\n          collapsedGroups: collapsedGroups\n        };\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleGroupSetup\", function (group, props) {\n      var fields = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"get\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"find\"])(_this.props.field.groups, ['name', group._type]), 'fields', []);\n      var values = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"omit\"])(group, ['_id', '_type']);\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"assign\"])({}, props, {\n        id: group._id,\n        fields: fields,\n        collapsed: _this.state.collapsedGroups.indexOf(group._id) > -1,\n        context: 'block',\n        values: values\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleGroupFieldSetup\", function (field, props, groupProps) {\n      var blockId = _this.props.blockId;\n      var id = \"\".concat(_this.props.id, \"__\").concat(groupProps.id, \"__\").concat(field.base_name);\n      var value = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"get\"])(groupProps, \"values.\".concat(field.base_name));\n      return [_components_field__WEBPACK_IMPORTED_MODULE_14__[\"default\"], Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"assign\"])({}, props, {\n        key: id,\n        id: id,\n        name: field.base_name,\n        containerId: _this.props.containerId,\n        blockId: blockId,\n        field: field,\n        value: value,\n        onChange: _this.handleGroupFieldChange\n      })];\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleGroupFieldChange\", function (fieldId, fieldValue) {\n      var _this$props4 = _this.props,\n          id = _this$props4.id,\n          value = _this$props4.value,\n          onChange = _this$props4.onChange;\n      onChange(id, immer__WEBPACK_IMPORTED_MODULE_8___default()(value, function (draft) {\n        var path = fieldId.split('__');\n        var fieldName = path.pop();\n        var group = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"find\"])(draft, ['_id', path.pop()]);\n        Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"set\"])(group, fieldName, fieldValue);\n      }));\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ComplexField, [{\n    key: \"getGroupValues\",\n\n    /**\n     * Returns a list of group values.\n     *\n     * @return {Array}\n     */\n    value: function getGroupValues() {\n      return this.props.value.map(function (group) {\n        var values = Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"mapKeys\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"omit\"])(group, ['_id', '_type']), function (value, key) {\n          return key.replace(/\\-/g, '_');\n        });\n        return [group._type, values];\n      });\n    }\n    /**\n     * Handles adding of group.\n     *\n     * @param  {Object}   group\n     * @param  {Function} callback\n     * @return {void}\n     */\n\n  }, {\n    key: \"render\",\n\n    /**\n     * Renders the component.\n     *\n     * @return {Object}\n     */\n    value: function render() {\n      var handleGroupSetup = this.handleGroupSetup,\n          handleGroupFieldSetup = this.handleGroupFieldSetup,\n          handleAddGroup = this.handleAddGroup,\n          handleCloneGroup = this.handleCloneGroup,\n          handleRemoveGroup = this.handleRemoveGroup,\n          handleToggleGroup = this.handleToggleGroup,\n          handleToggleAllGroups = this.handleToggleAllGroups;\n      var _this$props5 = this.props,\n          value = _this$props5.value,\n          children = _this$props5.children;\n      var groupValues = this.getGroupValues();\n      var allGroupsAreCollapsed = this.state.collapsedGroups.length === value.length;\n      return children({\n        groupValues: groupValues,\n        allGroupsAreCollapsed: allGroupsAreCollapsed,\n        handleGroupSetup: handleGroupSetup,\n        handleGroupFieldSetup: handleGroupFieldSetup,\n        handleAddGroup: handleAddGroup,\n        handleCloneGroup: handleCloneGroup,\n        handleRemoveGroup: handleRemoveGroup,\n        handleToggleGroup: handleToggleGroup,\n        handleToggleAllGroups: handleToggleAllGroups\n      });\n    }\n  }]);\n\n  return ComplexField;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__[\"addFilter\"])('carbon-fields.complex.block', 'carbon-fields/blocks', function (OriginalComplexField) {\n  return function (props) {\n    var id = props.id,\n        name = props.name,\n        value = props.value,\n        error = props.error,\n        field = props.field;\n    return wp.element.createElement(ComplexField, props, function (_ref5) {\n      var groupValues = _ref5.groupValues,\n          allGroupsAreCollapsed = _ref5.allGroupsAreCollapsed,\n          handleGroupSetup = _ref5.handleGroupSetup,\n          handleGroupFieldSetup = _ref5.handleGroupFieldSetup,\n          handleAddGroup = _ref5.handleAddGroup,\n          handleCloneGroup = _ref5.handleCloneGroup,\n          handleRemoveGroup = _ref5.handleRemoveGroup,\n          handleToggleGroup = _ref5.handleToggleGroup,\n          handleToggleAllGroups = _ref5.handleToggleAllGroups;\n      return wp.element.createElement(OriginalComplexField, {\n        groupIdKey: \"_id\",\n        groupFilterKey: \"_type\",\n        id: id,\n        name: name,\n        value: value,\n        error: error,\n        field: field,\n        groupValues: groupValues,\n        allGroupsAreCollapsed: allGroupsAreCollapsed,\n        onGroupSetup: handleGroupSetup,\n        onGroupFieldSetup: handleGroupFieldSetup,\n        onAddGroup: handleAddGroup,\n        onCloneGroup: handleCloneGroup,\n        onRemoveGroup: handleRemoveGroup,\n        onToggleGroup: handleToggleGroup,\n        onToggleAllGroups: handleToggleAllGroups,\n        onChange: props.onChange\n      });\n    });\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/complex/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/date */ \"@wordpress/date\");\n/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/datetime/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n/**\n * External dependencies.\n */\n\n\n\n\n/**\n * Internal dependencies.\n */\n\n\n\nvar DateTimeField =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DateTimeField, _Component);\n\n  function DateTimeField() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DateTimeField);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(DateTimeField)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), \"handleChange\", function (selectedDates, selectedDateStr) {\n      var _this$props = _this.props,\n          id = _this$props.id,\n          onChange = _this$props.onChange,\n          value = _this$props.value,\n          field = _this$props.field;\n      var formattedDate = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_8__[\"format\"])(field.storage_format, selectedDateStr);\n\n      if (formattedDate !== value) {\n        onChange(id, formattedDate);\n      }\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DateTimeField, [{\n    key: \"render\",\n\n    /**\n     * Renders the component.\n     *\n     * @return {Object}\n     */\n    value: function render() {\n      var handleChange = this.handleChange;\n      var children = this.props.children;\n      return children({\n        handleChange: handleChange\n      });\n    }\n  }]);\n\n  return DateTimeField;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__[\"addFilter\"])('carbon-fields.date_time.block', 'carbon-fields/blocks', function (OriginalDateTimeField) {\n  return function (props) {\n    return wp.element.createElement(DateTimeField, props, function (_ref) {\n      var handleChange = _ref.handleChange;\n      return wp.element.createElement(OriginalDateTimeField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        buttonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Select Date', 'carbon-fields-ui')\n      }, props, {\n        onChange: handleChange\n      }));\n    });\n  };\n});\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__[\"addFilter\"])('carbon-fields.date.block', 'carbon-fields/blocks', function (OriginalDateField) {\n  return function (props) {\n    return wp.element.createElement(DateTimeField, props, function (_ref2) {\n      var handleChange = _ref2.handleChange;\n      return wp.element.createElement(OriginalDateField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n        onChange: handleChange\n      }));\n    });\n  };\n});\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__[\"addFilter\"])('carbon-fields.time.block', 'carbon-fields/blocks', function (OriginalTimeField) {\n  return function (props) {\n    return wp.element.createElement(DateTimeField, props, function (_ref3) {\n      var handleChange = _ref3.handleChange;\n      return wp.element.createElement(OriginalTimeField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n        onChange: handleChange\n      }));\n    });\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/datetime/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/file/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n/**\n * External dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.file.block', 'carbon-fields/blocks', function (OriginalFileField) {\n  return function (props) {\n    return wp.element.createElement(OriginalFileField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      buttonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select File', 'carbon-fields-ui'),\n      mediaLibraryButtonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Use File', 'carbon-fields-ui'),\n      mediaLibraryTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select File', 'carbon-fields-ui')\n    }, props));\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/file/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/not-supported-field */ \"./packages/blocks/components/not-supported-field/index.js\");\n/**\n * External dependencies.\n */\n\n/**\n * The internal dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.footer_scripts.block', 'carbon-fields/blocks', function () {\n  return function (props) {\n    return wp.element.createElement(_components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      type: props.field.type\n    });\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/footer-scripts/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/header-scripts/index.js":
/*!********************************************************!*\
  !*** ./packages/blocks/fields/header-scripts/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/not-supported-field */ \"./packages/blocks/components/not-supported-field/index.js\");\n/**\n * External dependencies.\n */\n\n/**\n * The internal dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.header_scripts.block', 'carbon-fields/blocks', function () {\n  return function (props) {\n    return wp.element.createElement(_components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      type: props.field.type\n    });\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/header-scripts/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/hidden/index.js":
/*!************************************************!*\
  !*** ./packages/blocks/fields/hidden/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/not-supported-field */ \"./packages/blocks/components/not-supported-field/index.js\");\n/**\n * External dependencies.\n */\n\n/**\n * The internal dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.hidden.block', 'carbon-fields/blocks', function () {\n  return function (props) {\n    return wp.element.createElement(_components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      type: props.field.type\n    });\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/hidden/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/image/index.js":
/*!***********************************************!*\
  !*** ./packages/blocks/fields/image/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n\n\n/**\n * External dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.image.block', 'carbon-fields/blocks', function (OriginalImageField) {\n  return function (props) {\n    return wp.element.createElement(OriginalImageField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      buttonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Image', 'carbon-fields-ui'),\n      mediaLibraryButtonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Use Image', 'carbon-fields-ui'),\n      mediaLibraryTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Image', 'carbon-fields-ui')\n    }, props));\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/image/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/index.js":
/*!*****************************************!*\
  !*** ./packages/blocks/fields/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hocs_with_conditional_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hocs/with-conditional-logic */ \"./packages/blocks/hocs/with-conditional-logic/index.js\");\n/* harmony import */ var _association__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./association */ \"./packages/blocks/fields/association/index.js\");\n/* harmony import */ var _complex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complex */ \"./packages/blocks/fields/complex/index.js\");\n/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datetime */ \"./packages/blocks/fields/datetime/index.js\");\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file */ \"./packages/blocks/fields/file/index.js\");\n/* harmony import */ var _footer_scripts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer-scripts */ \"./packages/blocks/fields/footer-scripts/index.js\");\n/* harmony import */ var _header_scripts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header-scripts */ \"./packages/blocks/fields/header-scripts/index.js\");\n/* harmony import */ var _hidden__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hidden */ \"./packages/blocks/fields/hidden/index.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image */ \"./packages/blocks/fields/image/index.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map */ \"./packages/blocks/fields/map/index.js\");\n/* harmony import */ var _multiselect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./multiselect */ \"./packages/blocks/fields/multiselect/index.js\");\n/* harmony import */ var _media_gallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./media-gallery */ \"./packages/blocks/fields/media-gallery/index.js\");\n/* harmony import */ var _oembed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./oembed */ \"./packages/blocks/fields/oembed/index.js\");\n/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./radio */ \"./packages/blocks/fields/radio/index.js\");\n/* harmony import */ var _radio_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./radio-image */ \"./packages/blocks/fields/radio-image/index.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./select */ \"./packages/blocks/fields/select/index.js\");\n/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./set */ \"./packages/blocks/fields/set/index.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sidebar */ \"./packages/blocks/fields/sidebar/index.js\");\n/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./separator */ \"./packages/blocks/fields/separator/index.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./text */ \"./packages/blocks/fields/text/index.js\");\n/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./textarea */ \"./packages/blocks/fields/textarea/index.js\");\n/**\n * External dependencies.\n */\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n/**\n * Connects every field to the store.\n */\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.field-edit.block', 'carbon-fields/blocks', Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(_hocs_with_conditional_logic__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__[\"withDispatch\"])(function (dispatch) {\n  var _dispatch = dispatch('core/editor'),\n      lockPostSaving = _dispatch.lockPostSaving,\n      unlockPostSaving = _dispatch.unlockPostSaving;\n\n  return {\n    lockSaving: lockPostSaving,\n    unlockSaving: unlockPostSaving\n  };\n}), _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__[\"withValidation\"]));\n/**\n * Internal dependencies.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/map/index.js":
/*!*********************************************!*\
  !*** ./packages/blocks/fields/map/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/map/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/map/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/media-gallery/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n/**\n * External dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addFilter\"])('carbon-fields.media_gallery.block', 'carbon-fields/blocks', function (OriginalMediaGalleryField) {\n  return function (props) {\n    return wp.element.createElement(OriginalMediaGalleryField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      buttonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Attachments', 'carbon-fields-ui'),\n      mediaLibraryButtonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Use Attachments', 'carbon-fields-ui'),\n      mediaLibraryTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Select Attachments', 'carbon-fields-ui')\n    }, props));\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/media-gallery/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/multiselect/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/multiselect/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/oembed/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/oembed/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/radio-image/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/radio-image/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/radio/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/radio/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/select/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/select/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/separator/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/separator/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/set/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/set/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/not-supported-field */ \"./packages/blocks/components/not-supported-field/index.js\");\n/**\n * External dependencies.\n */\n\n/**\n * The internal dependencies.\n */\n\n\nObject(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addFilter\"])('carbon-fields.sidebar.block', 'carbon-fields/blocks', function () {\n  return function (props) {\n    return wp.element.createElement(_components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      type: props.field.type\n    });\n  };\n});\n\n//# sourceURL=webpack:///./packages/blocks/fields/sidebar/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/text/index.js":
/*!**********************************************!*\
  !*** ./packages/blocks/fields/text/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/text/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/text/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/textarea/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack:///./packages/blocks/fields/textarea/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-distinct-until-changed */ \"./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! callbag-basics */ \"./node_modules/callbag-basics/index.js\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_4__);\n/**\n * External dependencies.\n */\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Adds the `parent.` parent prefix to field's name.\n *\n * @param  {Object[]} fields\n * @param  {number}   depth\n * @return {Array[]}\n */\n\nfunction mapParentPrefix(fields) {\n  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"mapKeys\"])(fields, function (value, key) {\n    return \"\".concat(Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"repeat\"])('parent.', depth)).concat(key);\n  });\n}\n/**\n * Returns whether the given string is a group identifier.\n *\n * @param  {string} id\n * @return {boolean}\n */\n\n\nfunction isComplexGroupIdentifier(id) {\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"startsWith\"])(id, 'cf-');\n}\n/**\n * The function used to track dependencies required\n * by conditional logic.\n *\n * @param  {Object} props\n * @return {Object}\n */\n\n\nfunction input(props) {\n  return Object(callbag_basics__WEBPACK_IMPORTED_MODULE_2__[\"pipe\"])(Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_4__[\"fromSelector\"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"select\"])('core/editor').getBlock, props.blockId), Object(callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), Object(callbag_basics__WEBPACK_IMPORTED_MODULE_2__[\"map\"])(function (_ref) {\n    var attributes = _ref.attributes;\n    return attributes.data;\n  }));\n}\n/**\n * The function that provides the data that needs to be\n * evaluated by conditional logic.\n *\n * @param  {Object} props\n * @param  {Object} fields\n * @return {Object}\n */\n\n\nfunction output(props, fields) {\n  var isTopLevelField = Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"has\"])(fields, props.field.base_name);\n  var siblingFields = {};\n\n  if (isTopLevelField) {\n    siblingFields = mapParentPrefix(Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"omit\"])(fields, [props.field.base_name]));\n  } else {\n    // Get the hierarchy.\n    var path = props.id.split('__'); // Remove the chunk with identifier of block since\n    // we already have it.\n\n    path.shift(); // Remove the chunk with name of root field.\n\n    var rootFieldName = path.shift(); // Remove the chunk with name of field since\n    // we already have it.\n\n    path.pop(); // Keep reference to the depth\n    // so we can add the `parent.` prefix.\n\n    var depth = path.reduce(function (accumulator, chunk) {\n      return isComplexGroupIdentifier(chunk) ? accumulator : accumulator + 1;\n    }, 0); // Collect fields that are siblings of root field.\n\n    siblingFields = Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"omit\"])(fields, [rootFieldName]);\n    siblingFields = mapParentPrefix(siblingFields, depth + 1); // Keep reference to the full path of the field.\n\n    var pathPrefix = rootFieldName;\n\n    while (path.length > 0) {\n      var chunk = path.shift();\n      var isGroup = isComplexGroupIdentifier(chunk);\n      var isNestedComplex = !isGroup;\n\n      if (isGroup) {\n        var groupIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"findIndex\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"get\"])(fields, pathPrefix), ['_id', chunk]);\n        pathPrefix = \"\".concat(pathPrefix, \".\").concat(groupIndex);\n        var groupFields = Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"get\"])(fields, pathPrefix);\n        groupFields = Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"omit\"])(groupFields, ['_id', '_type', props.field.base_name]);\n        groupFields = mapParentPrefix(groupFields, depth);\n        Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"assign\"])(siblingFields, groupFields);\n      }\n\n      if (isNestedComplex) {\n        pathPrefix = \"\".concat(pathPrefix, \".\").concat(chunk);\n        depth--;\n      }\n    }\n  }\n\n  return siblingFields;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_4__[\"withConditionalLogic\"])(input, output));\n\n//# sourceURL=webpack:///./packages/blocks/hocs/with-conditional-logic/index.js?");

/***/ }),

/***/ "./packages/blocks/index.js":
/*!**********************************!*\
  !*** ./packages/blocks/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields */ \"./packages/blocks/fields/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ \"./packages/blocks/store/index.js\");\n/* harmony import */ var _components_block_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/block-edit */ \"./packages/blocks/components/block-edit/index.js\");\n/* harmony import */ var _components_block_save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/block-save */ \"./packages/blocks/components/block-save/index.js\");\n/* harmony import */ var _utils_transform_fields_to_attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/transform-fields-to-attributes */ \"./packages/blocks/utils/transform-fields-to-attributes.js\");\n\n\n/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */\n\n/**\n * External dependencies.\n */\n\n\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n\n\n/**\n * Sets the locale data for the package type\n */\n\nObject(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__[\"setLocaleData\"])(window.cf.config.locale, 'carbon-fields-ui');\n/**\n * Register the blocks.\n */\n\nvar containerDefinitions = {};\nvar fieldDefinitions = {};\nObject(lodash__WEBPACK_IMPORTED_MODULE_4__[\"get\"])(window.cf, 'preloaded.blocks', []).forEach(function (container) {\n  var name = Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"kebabCase\"])(container.id).replace('carbon-fields-container-', '');\n  var fields = Object(_utils_transform_fields_to_attributes__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(container.fields);\n\n  var getBlockSetting = function getBlockSetting(key) {\n    var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"get\"])(container, \"settings.\".concat(key), def);\n  };\n\n  containerDefinitions[name] = container;\n  fieldDefinitions[name] = container.fields.map(function (field) {\n    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, field);\n  });\n  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__[\"registerBlockType\"])(\"carbon-fields/\".concat(name), {\n    title: container.title,\n    icon: getBlockSetting('icon'),\n    category: getBlockSetting('category.slug'),\n    keywords: getBlockSetting('keywords', []),\n    description: getBlockSetting('description', ''),\n    attributes: {\n      data: {\n        type: 'object',\n        default: fields\n      }\n    },\n    supports: {\n      tabs: Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"isPlainObject\"])(getBlockSetting('tabs')),\n      preview: getBlockSetting('preview'),\n      alignWide: false,\n      anchor: false,\n      html: false\n    },\n    edit: _components_block_edit__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    save: _components_block_save__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  });\n});\n/**\n * Load the definitions in store.\n */\n\nObject(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"dispatch\"])('carbon-fields/blocks').setupContainerDefinitions(containerDefinitions);\nObject(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"dispatch\"])('carbon-fields/blocks').setupFieldDefinitions(fieldDefinitions);\n\n//# sourceURL=webpack:///./packages/blocks/index.js?");

/***/ }),

/***/ "./packages/blocks/store/actions.js":
/*!******************************************!*\
  !*** ./packages/blocks/store/actions.js ***!
  \******************************************/
/*! exports provided: setupContainerDefinitions, setupFieldDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupContainerDefinitions\", function() { return setupContainerDefinitions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupFieldDefinitions\", function() { return setupFieldDefinitions; });\n/**\n * Returns an action object used to setup the definitions state when first opening an editor.\n *\n * @param  {Object} definitions\n * @return {Object}\n */\nfunction setupContainerDefinitions(definitions) {\n  return {\n    type: 'SETUP_CONTAINER_DEFINITIONS',\n    payload: {\n      definitions: definitions\n    }\n  };\n}\n/**\n * Returns an action object used to setup the definitions state when first opening an editor.\n *\n * @param  {Object} definitions\n * @return {Object}\n */\n\nfunction setupFieldDefinitions(definitions) {\n  return {\n    type: 'SETUP_FIELD_DEFINITIONS',\n    payload: {\n      definitions: definitions\n    }\n  };\n}\n\n//# sourceURL=webpack:///./packages/blocks/store/actions.js?");

/***/ }),

/***/ "./packages/blocks/store/index.js":
/*!****************************************!*\
  !*** ./packages/blocks/store/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./packages/blocks/store/reducer.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./packages/blocks/store/actions.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ \"./packages/blocks/store/selectors.js\");\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n/**\n * Register the store.\n */\n\nObject(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"registerStore\"])('carbon-fields/blocks', {\n  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,\n  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceURL=webpack:///./packages/blocks/store/index.js?");

/***/ }),

/***/ "./packages/blocks/store/reducer.js":
/*!******************************************!*\
  !*** ./packages/blocks/store/reducer.js ***!
  \******************************************/
/*! exports provided: containerDefinitionsByBlockName, fieldDefinitionsByBlockName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"containerDefinitionsByBlockName\", function() { return containerDefinitionsByBlockName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fieldDefinitionsByBlockName\", function() { return fieldDefinitionsByBlockName; });\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies.\n */\n\n/**\n * The reducer that keeps track of container definitions keyed by block's name.\n *\n * @param  {Object} state\n * @param  {Object} action\n * @return {Object}\n */\n\nfunction containerDefinitionsByBlockName() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'SETUP_CONTAINER_DEFINITIONS':\n      return action.payload.definitions;\n\n    default:\n      return state;\n  }\n}\n/**\n * The reducer that keeps track of field definitions keyed by block's name.\n *\n * @param  {Object} state\n * @param  {Object} action\n * @return {Object}\n */\n\nfunction fieldDefinitionsByBlockName() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'SETUP_FIELD_DEFINITIONS':\n      return action.payload.definitions;\n\n    default:\n      return state;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  containerDefinitionsByBlockName: containerDefinitionsByBlockName,\n  fieldDefinitionsByBlockName: fieldDefinitionsByBlockName\n}));\n\n//# sourceURL=webpack:///./packages/blocks/store/reducer.js?");

/***/ }),

/***/ "./packages/blocks/store/selectors.js":
/*!********************************************!*\
  !*** ./packages/blocks/store/selectors.js ***!
  \********************************************/
/*! exports provided: getContainerDefinitionByBlockName, getFieldDefinitionsByBlockName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getContainerDefinitionByBlockName\", function() { return getContainerDefinitionByBlockName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFieldDefinitionsByBlockName\", function() { return getFieldDefinitionsByBlockName; });\n/**\n * Get the container by a given block name.\n *\n * @param  {Object} state\n * @param  {string} blockName\n * @return {Object}\n */\nfunction getContainerDefinitionByBlockName(state, blockName) {\n  return state.containerDefinitionsByBlockName[blockName.replace('carbon-fields/', '')] || {};\n}\n/**\n * Get the fields by a given block name.\n *\n * @param  {Object} state\n * @param  {string} blockName\n * @return {Object[]}\n */\n\nfunction getFieldDefinitionsByBlockName(state, blockName) {\n  return state.fieldDefinitionsByBlockName[blockName.replace('carbon-fields/', '')] || [];\n}\n\n//# sourceURL=webpack:///./packages/blocks/store/selectors.js?");

/***/ }),

/***/ "./packages/blocks/utils/transform-fields-to-attributes.js":
/*!*****************************************************************!*\
  !*** ./packages/blocks/utils/transform-fields-to-attributes.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return transformFieldsToAttributes; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/**\n * Transforms the fields to an attributes set.\n *\n * @param  {Object[]} fields\n * @return {Object}\n */\nfunction transformFieldsToAttributes(fields) {\n  return fields.reduce(function (attributes, field) {\n    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, attributes, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, field.base_name, field.default_value));\n  }, {});\n}\n\n//# sourceURL=webpack:///./packages/blocks/utils/transform-fields-to-attributes.js?");

/***/ }),

/***/ "@carbon-fields/core":
/*!**************************!*\
  !*** external "cf.core" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = cf.core;\n\n//# sourceURL=webpack:///external_%22cf.core%22?");

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