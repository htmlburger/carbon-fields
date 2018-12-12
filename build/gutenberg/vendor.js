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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/vendor/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/slicedToArray.js?");

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

/***/ "./node_modules/callbag-drop-repeats/index.js":
/*!****************************************************!*\
  !*** ./node_modules/callbag-drop-repeats/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const dropRepeats = pred => src => (start, sink) => {\n  const INIT = {};\n  let cache = INIT;\n  let ask;\n  const equals = pred || ((a, b) => a === b);\n  start === 0 && src(start, (t, d) => {\n    if (t === start) ask = d;\n    if (t === 1) return cache !== INIT && equals(cache, d) ? ask(t) : sink(t, cache = d);\n    sink(t, d);\n  });\n};\n\nmodule.exports = dropRepeats;\n\n//# sourceURL=webpack:///./node_modules/callbag-drop-repeats/index.js?");

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

/***/ "./node_modules/callbag-start-with/index.js":
/*!**************************************************!*\
  !*** ./node_modules/callbag-start-with/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst startWith = (...xs) => inputSource => (start, outputSink) => {\n  if (start !== 0) return;\n  let disposed = false;\n  let inputTalkback;\n  let trackPull = false;\n  let lastPull;\n\n  outputSink(0, (ot, od) => {\n    if (trackPull && ot === 1) {\n      lastPull = [1, od];\n    }\n\n    if (ot === 2) {\n      disposed = true;\n      xs.length = 0;\n    }\n\n    if (!inputTalkback) return;\n    inputTalkback(ot, od);\n  });\n\n  while (xs.length !== 0) {\n    if (xs.length === 1) {\n      trackPull = true;\n    }\n    outputSink(1, xs.shift());\n  }\n\n  if (disposed) return;\n\n  inputSource(0, (it, id) => {\n    if (it === 0) {\n      inputTalkback = id;\n      trackPull = false;\n\n      if (lastPull) {\n        inputTalkback(...lastPull);\n        lastPull = null;\n      }\n      return;\n    }\n    outputSink(it, id);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startWith);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-start-with/index.js?");

/***/ }),

/***/ "./node_modules/callbag-take/index.js":
/*!********************************************!*\
  !*** ./node_modules/callbag-take/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const take = max => source => (start, sink) => {\n  if (start !== 0) return;\n  let taken = 0;\n  let sourceTalkback;\n  function talkback(t, d) {\n    if (taken < max) sourceTalkback(t, d);\n  }\n  source(0, (t, d) => {\n    if (t === 0) {\n      sourceTalkback = d;\n      sink(0, talkback);\n    } else if (t === 1) {\n      if (taken < max) {\n        taken++;\n        sink(t, d);\n        if (taken === max) {\n          sink(2);\n          sourceTalkback(2);\n        }\n      }\n    } else {\n      sink(t, d);\n    }\n  });\n};\n\nmodule.exports = take;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-take/index.js?");

/***/ }),

/***/ "./node_modules/callbag-to-obs/readme.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-to-obs/readme.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * callbag-to-obs\n * ---------------\n *\n * Convert a listenable callbag source to an observable (or subscribable).\n * The Observable is an object following the ECMAScript Observable proposal\n * https://github.com/tc39/proposal-observable and at a minimum has the method\n * \"subscribe(observer)\" attached to it.\n *\n * `npm install callbag-to-obs`\n *\n * Example:\n *\n *     const {pipe, interval, take, filter, map} = require('callbag-basics');\n *     const toObservable = require('callbag-to-obs');\n *\n *     const observable = pipe(\n *       interval(1000), // 0,1,2,3,4,5,6,7,...\n *       take(5), // 0,1,2,3,4\n *       filter(x => x !== 0), // 1,2,3,4\n *       map(x => x * 10), // 10,20,30,40\n *       toObservable\n *     );\n *\n *     observable.subscribe({\n *       next: x => console.log(x)\n *     });\n */\n\nconst $$observable = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\").default;\n\nfunction normalize(observer) {\n  if (!observer.start) observer.start = () => { };\n  if (!observer.next) observer.next = () => { };\n  if (!observer.error) observer.error = () => { };\n  if (!observer.complete) observer.complete = () => { };\n}\n\nfunction toObservable(source) {\n  return {\n    subscribe: function subscribe(observer) {\n      normalize(observer);\n      let talkback;\n      const sub = {\n        unsubscribe: function unsubscribe() {\n          if (talkback) talkback(2);\n        },\n      };\n      observer.start(sub);\n      try {\n        source(0, (t, d) => {\n          if (t === 0) talkback = d;\n          if (t === 1) observer.next(d);\n          if (t === 2 && d) observer.error(d);\n          else if (t === 2) talkback = void 0, observer.complete(d);\n        });\n      } catch (err) {\n        observer.error(err);\n      }\n      return sub;\n    },\n\n    [$$observable]: function () { return this; },\n  };\n}\n\nmodule.exports = toObservable;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-to-obs/readme.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/immer/dist/immer.module.js":
/*!*************************************************!*\
  !*** ./node_modules/immer/dist/immer.module.js ***!
  \*************************************************/
/*! exports provided: produce, applyPatches, nothing, setAutoFreeze, setUseProxies, original, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"produce\", function() { return produce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyPatches\", function() { return applyPatches$1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nothing\", function() { return nothing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAutoFreeze\", function() { return setAutoFreeze; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUseProxies\", function() { return setUseProxies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"original\", function() { return original; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {\n  return typeof obj;\n} : function (obj) {\n  return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar defineProperty = function (obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n};\n\nfunction generatePatches(state, basepath, patches, inversePatches, baseValue, resultValue) {\n    if (patches) if (Array.isArray(baseValue)) generateArrayPatches(state, basepath, patches, inversePatches, baseValue, resultValue);else generateObjectPatches(state, basepath, patches, inversePatches, baseValue, resultValue);\n}\n\nfunction generateArrayPatches(state, basepath, patches, inversePatches, baseValue, resultValue) {\n    var shared = Math.min(baseValue.length, resultValue.length);\n    for (var i = 0; i < shared; i++) {\n        if (state.assigned[i] && baseValue[i] !== resultValue[i]) {\n            var path = basepath.concat(i);\n            patches.push({ op: \"replace\", path: path, value: resultValue[i] });\n            inversePatches.push({ op: \"replace\", path: path, value: baseValue[i] });\n        }\n    }\n    if (shared < resultValue.length) {\n        // stuff was added\n        for (var _i = shared; _i < resultValue.length; _i++) {\n            var _path = basepath.concat(_i);\n            patches.push({ op: \"add\", path: _path, value: resultValue[_i] });\n        }\n        inversePatches.push({\n            op: \"replace\",\n            path: basepath.concat(\"length\"),\n            value: baseValue.length\n        });\n    } else if (shared < baseValue.length) {\n        // stuff was removed\n        patches.push({\n            op: \"replace\",\n            path: basepath.concat(\"length\"),\n            value: resultValue.length\n        });\n        for (var _i2 = shared; _i2 < baseValue.length; _i2++) {\n            var _path2 = basepath.concat(_i2);\n            inversePatches.push({ op: \"add\", path: _path2, value: baseValue[_i2] });\n        }\n    }\n}\n\nfunction generateObjectPatches(state, basepath, patches, inversePatches, baseValue, resultValue) {\n    each(state.assigned, function (key, assignedValue) {\n        var origValue = baseValue[key];\n        var value = resultValue[key];\n        var op = !assignedValue ? \"remove\" : key in baseValue ? \"replace\" : \"add\";\n        if (origValue === baseValue && op === \"replace\") return;\n        var path = basepath.concat(key);\n        patches.push(op === \"remove\" ? { op: op, path: path } : { op: op, path: path, value: value });\n        inversePatches.push(op === \"add\" ? { op: \"remove\", path: path } : op === \"remove\" ? { op: \"add\", path: path, value: origValue } : { op: \"replace\", path: path, value: origValue });\n    });\n}\n\nfunction applyPatches(draft, patches) {\n    for (var i = 0; i < patches.length; i++) {\n        var patch = patches[i];\n        var path = patch.path;\n\n        if (path.length === 0 && patch.op === \"replace\") {\n            draft = patch.value;\n        } else {\n            var base = draft;\n            for (var _i3 = 0; _i3 < path.length - 1; _i3++) {\n                base = base[path[_i3]];\n                if (!base || (typeof base === \"undefined\" ? \"undefined\" : _typeof(base)) !== \"object\") throw new Error(\"Cannot apply patch, path doesn't resolve: \" + path.join(\"/\"));\n            }\n            var key = path[path.length - 1];\n            switch (patch.op) {\n                case \"replace\":\n                case \"add\":\n                    // TODO: add support is not extensive, it does not support insertion or `-` atm!\n                    base[key] = patch.value;\n                    break;\n                case \"remove\":\n                    if (Array.isArray(base)) {\n                        if (key === base.length - 1) base.length -= 1;else throw new Error(\"Remove can only remove the last key of an array, index: \" + key + \", length: \" + base.length);\n                    } else delete base[key];\n                    break;\n                default:\n                    throw new Error(\"Unsupported patch operation: \" + patch.op);\n            }\n        }\n    }\n    return draft;\n}\n\nvar NOTHING = typeof Symbol !== \"undefined\" ? Symbol(\"immer-nothing\") : defineProperty({}, \"immer-nothing\", true);\n\nvar PROXY_STATE = typeof Symbol !== \"undefined\" ? Symbol(\"immer-proxy-state\") : \"__$immer_state\";\n\nvar RETURNED_AND_MODIFIED_ERROR = \"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.\";\n\nfunction verifyMinified() {}\n\nvar inProduction = typeof process !== \"undefined\" && \"development\" === \"production\" || verifyMinified.name !== \"verifyMinified\";\n\nvar autoFreeze = !inProduction;\nvar useProxies = typeof Proxy !== \"undefined\" && typeof Reflect !== \"undefined\";\n\n/**\n * Automatically freezes any state trees generated by immer.\n * This protects against accidental modifications of the state tree outside of an immer function.\n * This comes with a performance impact, so it is recommended to disable this option in production.\n * It is by default enabled.\n *\n * @returns {void}\n */\nfunction setAutoFreeze(enableAutoFreeze) {\n    autoFreeze = enableAutoFreeze;\n}\n\nfunction setUseProxies(value) {\n    useProxies = value;\n}\n\nfunction getUseProxies() {\n    return useProxies;\n}\n\nfunction isProxy(value) {\n    return !!value && !!value[PROXY_STATE];\n}\n\nfunction isProxyable(value) {\n    if (!value) return false;\n    if ((typeof value === \"undefined\" ? \"undefined\" : _typeof(value)) !== \"object\") return false;\n    if (Array.isArray(value)) return true;\n    var proto = Object.getPrototypeOf(value);\n    return proto === null || proto === Object.prototype;\n}\n\nfunction freeze(value) {\n    if (autoFreeze) {\n        Object.freeze(value);\n    }\n    return value;\n}\n\nfunction original(value) {\n    if (value && value[PROXY_STATE]) {\n        return value[PROXY_STATE].base;\n    }\n    // otherwise return undefined\n}\n\nvar assign = Object.assign || function assign(target, value) {\n    for (var key in value) {\n        if (has(value, key)) {\n            target[key] = value[key];\n        }\n    }\n    return target;\n};\n\nfunction shallowCopy(value) {\n    if (Array.isArray(value)) return value.slice();\n    var target = value.__proto__ === undefined ? Object.create(null) : {};\n    return assign(target, value);\n}\n\nfunction each(value, cb) {\n    if (Array.isArray(value)) {\n        for (var i = 0; i < value.length; i++) {\n            cb(i, value[i]);\n        }\n    } else {\n        for (var key in value) {\n            cb(key, value[key]);\n        }\n    }\n}\n\nfunction has(thing, prop) {\n    return Object.prototype.hasOwnProperty.call(thing, prop);\n}\n\n// given a base object, returns it if unmodified, or return the changed cloned if modified\nfunction finalize(base, path, patches, inversePatches) {\n    if (isProxy(base)) {\n        var state = base[PROXY_STATE];\n        if (state.modified === true) {\n            if (state.finalized === true) return state.copy;\n            state.finalized = true;\n            var result = finalizeObject(useProxies ? state.copy : state.copy = shallowCopy(base), state, path, patches, inversePatches);\n            generatePatches(state, path, patches, inversePatches, state.base, result);\n            return result;\n        } else {\n            return state.base;\n        }\n    }\n    finalizeNonProxiedObject(base);\n    return base;\n}\n\nfunction finalizeObject(copy, state, path, patches, inversePatches) {\n    var base = state.base;\n    each(copy, function (prop, value) {\n        if (value !== base[prop]) {\n            // if there was an assignment on this property, we don't need to generate\n            // patches for the subtree\n            var _generatePatches = patches && !has(state.assigned, prop);\n            copy[prop] = finalize(value, _generatePatches && path.concat(prop), _generatePatches && patches, inversePatches);\n        }\n    });\n    return freeze(copy);\n}\n\nfunction finalizeNonProxiedObject(parent) {\n    // If finalize is called on an object that was not a proxy, it means that it is an object that was not there in the original\n    // tree and it could contain proxies at arbitrarily places. Let's find and finalize them as well\n    if (!isProxyable(parent)) return;\n    if (Object.isFrozen(parent)) return;\n    each(parent, function (i, child) {\n        if (isProxy(child)) {\n            parent[i] = finalize(child);\n        } else finalizeNonProxiedObject(child);\n    });\n    // always freeze completely new data\n    freeze(parent);\n}\n\nfunction is(x, y) {\n    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js\n    if (x === y) {\n        return x !== 0 || 1 / x === 1 / y;\n    } else {\n        return x !== x && y !== y;\n    }\n}\n\n// @ts-check\n\nvar proxies = null;\n\nvar objectTraps = {\n    get: get$1,\n    has: function has$$1(target, prop) {\n        return prop in source(target);\n    },\n    ownKeys: function ownKeys(target) {\n        return Reflect.ownKeys(source(target));\n    },\n\n    set: set$1,\n    deleteProperty: deleteProperty,\n    getOwnPropertyDescriptor: getOwnPropertyDescriptor,\n    defineProperty: defineProperty$1,\n    setPrototypeOf: function setPrototypeOf() {\n        throw new Error(\"Immer does not support `setPrototypeOf()`.\");\n    }\n};\n\nvar arrayTraps = {};\neach(objectTraps, function (key, fn) {\n    arrayTraps[key] = function () {\n        arguments[0] = arguments[0][0];\n        return fn.apply(this, arguments);\n    };\n});\narrayTraps.deleteProperty = function (state, prop) {\n    if (isNaN(parseInt(prop))) throw new Error(\"Immer does not support deleting properties from arrays: \" + prop);\n    return objectTraps.deleteProperty.call(this, state[0], prop);\n};\narrayTraps.set = function (state, prop, value) {\n    if (prop !== \"length\" && isNaN(parseInt(prop))) throw new Error(\"Immer does not support setting non-numeric properties on arrays: \" + prop);\n    return objectTraps.set.call(this, state[0], prop, value);\n};\n\nfunction createState(parent, base) {\n    return {\n        modified: false, // this tree is modified (either this object or one of it's children)\n        assigned: {}, // true: value was assigned to these props, false: was removed\n        finalized: false,\n        parent: parent,\n        base: base,\n        copy: undefined,\n        proxies: {}\n    };\n}\n\nfunction source(state) {\n    return state.modified === true ? state.copy : state.base;\n}\n\nfunction get$1(state, prop) {\n    if (prop === PROXY_STATE) return state;\n    if (state.modified) {\n        var value = state.copy[prop];\n        if (value === state.base[prop] && isProxyable(value))\n            // only create proxy if it is not yet a proxy, and not a new object\n            // (new objects don't need proxying, they will be processed in finalize anyway)\n            return state.copy[prop] = createProxy(state, value);\n        return value;\n    } else {\n        if (has(state.proxies, prop)) return state.proxies[prop];\n        var _value = state.base[prop];\n        if (!isProxy(_value) && isProxyable(_value)) return state.proxies[prop] = createProxy(state, _value);\n        return _value;\n    }\n}\n\nfunction set$1(state, prop, value) {\n    // TODO: optimize\n    state.assigned[prop] = true;\n    if (!state.modified) {\n        if (prop in state.base && is(state.base[prop], value) || has(state.proxies, prop) && state.proxies[prop] === value) return true;\n        markChanged(state);\n    }\n    state.copy[prop] = value;\n    return true;\n}\n\nfunction deleteProperty(state, prop) {\n    state.assigned[prop] = false;\n    markChanged(state);\n    delete state.copy[prop];\n    return true;\n}\n\nfunction getOwnPropertyDescriptor(state, prop) {\n    var owner = state.modified ? state.copy : has(state.proxies, prop) ? state.proxies : state.base;\n    var descriptor = Reflect.getOwnPropertyDescriptor(owner, prop);\n    if (descriptor && !(Array.isArray(owner) && prop === \"length\")) descriptor.configurable = true;\n    return descriptor;\n}\n\nfunction defineProperty$1() {\n    throw new Error(\"Immer does not support defining properties on draft objects.\");\n}\n\nfunction markChanged(state) {\n    if (!state.modified) {\n        state.modified = true;\n        state.copy = shallowCopy(state.base);\n        // copy the proxies over the base-copy\n        Object.assign(state.copy, state.proxies); // yup that works for arrays as well\n        if (state.parent) markChanged(state.parent);\n    }\n}\n\n// creates a proxy for plain objects / arrays\nfunction createProxy(parentState, base) {\n    if (isProxy(base)) throw new Error(\"Immer bug. Plz report.\");\n    var state = createState(parentState, base);\n    var proxy = Array.isArray(base) ? Proxy.revocable([state], arrayTraps) : Proxy.revocable(state, objectTraps);\n    proxies.push(proxy);\n    return proxy.proxy;\n}\n\nfunction produceProxy(baseState, producer, patchListener) {\n    if (isProxy(baseState)) {\n        // See #100, don't nest producers\n        var returnValue = producer.call(baseState, baseState);\n        return returnValue === undefined ? baseState : returnValue;\n    }\n    var previousProxies = proxies;\n    proxies = [];\n    var patches = patchListener && [];\n    var inversePatches = patchListener && [];\n    try {\n        // create proxy for root\n        var rootProxy = createProxy(undefined, baseState);\n        // execute the thunk\n        var _returnValue = producer.call(rootProxy, rootProxy);\n        // and finalize the modified proxy\n        var result = void 0;\n        // check whether the draft was modified and/or a value was returned\n        if (_returnValue !== undefined && _returnValue !== rootProxy) {\n            // something was returned, and it wasn't the proxy itself\n            if (rootProxy[PROXY_STATE].modified) throw new Error(RETURNED_AND_MODIFIED_ERROR);\n\n            // See #117\n            // Should we just throw when returning a proxy which is not the root, but a subset of the original state?\n            // Looks like a wrongly modeled reducer\n            result = finalize(_returnValue);\n            if (patches) {\n                patches.push({ op: \"replace\", path: [], value: result });\n                inversePatches.push({ op: \"replace\", path: [], value: baseState });\n            }\n        } else {\n            result = finalize(rootProxy, [], patches, inversePatches);\n        }\n        // revoke all proxies\n        each(proxies, function (_, p) {\n            return p.revoke();\n        });\n        patchListener && patchListener(patches, inversePatches);\n        return result;\n    } finally {\n        proxies = previousProxies;\n    }\n}\n\n// @ts-check\n\nvar descriptors = {};\nvar states = null;\n\nfunction createState$1(parent, proxy, base) {\n    return {\n        modified: false,\n        assigned: {}, // true: value was assigned to these props, false: was removed\n        hasCopy: false,\n        parent: parent,\n        base: base,\n        proxy: proxy,\n        copy: undefined,\n        finished: false,\n        finalizing: false,\n        finalized: false\n    };\n}\n\nfunction source$1(state) {\n    return state.hasCopy ? state.copy : state.base;\n}\n\nfunction _get(state, prop) {\n    assertUnfinished(state);\n    var value = source$1(state)[prop];\n    if (!state.finalizing && value === state.base[prop] && isProxyable(value)) {\n        // only create a proxy if the value is proxyable, and the value was in the base state\n        // if it wasn't in the base state, the object is already modified and we will process it in finalize\n        prepareCopy(state);\n        return state.copy[prop] = createProxy$1(state, value);\n    }\n    return value;\n}\n\nfunction _set(state, prop, value) {\n    assertUnfinished(state);\n    state.assigned[prop] = true; // optimization; skip this if there is no listener\n    if (!state.modified) {\n        if (is(source$1(state)[prop], value)) return;\n        markChanged$1(state);\n        prepareCopy(state);\n    }\n    state.copy[prop] = value;\n}\n\nfunction markChanged$1(state) {\n    if (!state.modified) {\n        state.modified = true;\n        if (state.parent) markChanged$1(state.parent);\n    }\n}\n\nfunction prepareCopy(state) {\n    if (state.hasCopy) return;\n    state.hasCopy = true;\n    state.copy = shallowCopy(state.base);\n}\n\n// creates a proxy for plain objects / arrays\nfunction createProxy$1(parent, base) {\n    var proxy = shallowCopy(base);\n    each(base, function (i) {\n        Object.defineProperty(proxy, \"\" + i, createPropertyProxy(\"\" + i));\n    });\n    var state = createState$1(parent, proxy, base);\n    createHiddenProperty(proxy, PROXY_STATE, state);\n    states.push(state);\n    return proxy;\n}\n\nfunction createPropertyProxy(prop) {\n    return descriptors[prop] || (descriptors[prop] = {\n        configurable: true,\n        enumerable: true,\n        get: function get$$1() {\n            return _get(this[PROXY_STATE], prop);\n        },\n        set: function set$$1(value) {\n            _set(this[PROXY_STATE], prop, value);\n        }\n    });\n}\n\nfunction assertUnfinished(state) {\n    if (state.finished === true) throw new Error(\"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? \" + JSON.stringify(state.copy || state.base));\n}\n\n// this sounds very expensive, but actually it is not that expensive in practice\n// as it will only visit proxies, and only do key-based change detection for objects for\n// which it is not already know that they are changed (that is, only object for which no known key was changed)\nfunction markChangesSweep() {\n    // intentionally we process the proxies in reverse order;\n    // ideally we start by processing leafs in the tree, because if a child has changed, we don't have to check the parent anymore\n    // reverse order of proxy creation approximates this\n    for (var i = states.length - 1; i >= 0; i--) {\n        var state = states[i];\n        if (state.modified === false) {\n            if (Array.isArray(state.base)) {\n                if (hasArrayChanges(state)) markChanged$1(state);\n            } else if (hasObjectChanges(state)) markChanged$1(state);\n        }\n    }\n}\n\nfunction markChangesRecursively(object) {\n    if (!object || (typeof object === \"undefined\" ? \"undefined\" : _typeof(object)) !== \"object\") return;\n    var state = object[PROXY_STATE];\n    if (!state) return;\n    var proxy = state.proxy,\n        base = state.base;\n\n    if (Array.isArray(object)) {\n        if (hasArrayChanges(state)) {\n            markChanged$1(state);\n            state.assigned.length = true;\n            if (proxy.length < base.length) for (var i = proxy.length; i < base.length; i++) {\n                state.assigned[i] = false;\n            } else for (var _i = base.length; _i < proxy.length; _i++) {\n                state.assigned[_i] = true;\n            }each(proxy, function (index, child) {\n                if (!state.assigned[index]) markChangesRecursively(child);\n            });\n        }\n    } else {\n        var _diffKeys = diffKeys(base, proxy),\n            added = _diffKeys.added,\n            removed = _diffKeys.removed;\n\n        if (added.length > 0 || removed.length > 0) markChanged$1(state);\n        each(added, function (_, key) {\n            state.assigned[key] = true;\n        });\n        each(removed, function (_, key) {\n            state.assigned[key] = false;\n        });\n        each(proxy, function (key, child) {\n            if (!state.assigned[key]) markChangesRecursively(child);\n        });\n    }\n}\n\nfunction diffKeys(from, to) {\n    // TODO: optimize\n    var a = Object.keys(from);\n    var b = Object.keys(to);\n    return {\n        added: b.filter(function (key) {\n            return a.indexOf(key) === -1;\n        }),\n        removed: a.filter(function (key) {\n            return b.indexOf(key) === -1;\n        })\n    };\n}\n\nfunction hasObjectChanges(state) {\n    var baseKeys = Object.keys(state.base);\n    var keys = Object.keys(state.proxy);\n    return !shallowEqual(baseKeys, keys);\n}\n\nfunction hasArrayChanges(state) {\n    var proxy = state.proxy;\n\n    if (proxy.length !== state.base.length) return true;\n    // See #116\n    // If we first shorten the length, our array interceptors will be removed.\n    // If after that new items are added, result in the same original length,\n    // those last items will have no intercepting property.\n    // So if there is no own descriptor on the last position, we know that items were removed and added\n    // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check\n    // the last one\n    var descriptor = Object.getOwnPropertyDescriptor(proxy, proxy.length - 1);\n    // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)\n    if (descriptor && !descriptor.get) return true;\n    // For all other cases, we don't have to compare, as they would have been picked up by the index setters\n    return false;\n}\n\nfunction produceEs5(baseState, producer, patchListener) {\n    if (isProxy(baseState)) {\n        // See #100, don't nest producers\n        var returnValue = producer.call(baseState, baseState);\n        return returnValue === undefined ? baseState : returnValue;\n    }\n    var prevStates = states;\n    states = [];\n    var patches = patchListener && [];\n    var inversePatches = patchListener && [];\n    try {\n        // create proxy for root\n        var rootProxy = createProxy$1(undefined, baseState);\n        // execute the thunk\n        var _returnValue = producer.call(rootProxy, rootProxy);\n        // and finalize the modified proxy\n        each(states, function (_, state) {\n            state.finalizing = true;\n        });\n        var result = void 0;\n        // check whether the draft was modified and/or a value was returned\n        if (_returnValue !== undefined && _returnValue !== rootProxy) {\n            // something was returned, and it wasn't the proxy itself\n            if (rootProxy[PROXY_STATE].modified) throw new Error(RETURNED_AND_MODIFIED_ERROR);\n            result = finalize(_returnValue);\n            if (patches) {\n                patches.push({ op: \"replace\", path: [], value: result });\n                inversePatches.push({ op: \"replace\", path: [], value: baseState });\n            }\n        } else {\n            if (patchListener) markChangesRecursively(rootProxy);\n            markChangesSweep(); // this one is more efficient if we don't need to know which attributes have changed\n            result = finalize(rootProxy, [], patches, inversePatches);\n        }\n        // make sure all proxies become unusable\n        each(states, function (_, state) {\n            state.finished = true;\n        });\n        patchListener && patchListener(patches, inversePatches);\n        return result;\n    } finally {\n        states = prevStates;\n    }\n}\n\nfunction shallowEqual(objA, objB) {\n    //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js\n    if (is(objA, objB)) return true;\n    if ((typeof objA === \"undefined\" ? \"undefined\" : _typeof(objA)) !== \"object\" || objA === null || (typeof objB === \"undefined\" ? \"undefined\" : _typeof(objB)) !== \"object\" || objB === null) {\n        return false;\n    }\n    var keysA = Object.keys(objA);\n    var keysB = Object.keys(objB);\n    if (keysA.length !== keysB.length) return false;\n    for (var i = 0; i < keysA.length; i++) {\n        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {\n            return false;\n        }\n    }\n    return true;\n}\n\nfunction createHiddenProperty(target, prop, value) {\n    Object.defineProperty(target, prop, {\n        value: value,\n        enumerable: false,\n        writable: true\n    });\n}\n\n/**\n * produce takes a state, and runs a function against it.\n * That function can freely mutate the state, as it will create copies-on-write.\n * This means that the original state will stay unchanged, and once the function finishes, the modified state is returned\n *\n * @export\n * @param {any} baseState - the state to start with\n * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified\n * @param {Function} patchListener - optional function that will be called with all the patches produced here\n * @returns {any} a new state, or the base state if nothing was modified\n */\nfunction produce(baseState, producer, patchListener) {\n    // prettier-ignore\n    if (arguments.length < 1 || arguments.length > 3) throw new Error(\"produce expects 1 to 3 arguments, got \" + arguments.length);\n\n    // curried invocation\n    if (typeof baseState === \"function\") {\n        // prettier-ignore\n        if (typeof producer === \"function\") throw new Error(\"if first argument is a function (curried invocation), the second argument to produce cannot be a function\");\n\n        var initialState = producer;\n        var recipe = baseState;\n\n        return function () {\n            var args = arguments;\n\n            var currentState = args[0] === undefined && initialState !== undefined ? initialState : args[0];\n\n            return produce(currentState, function (draft) {\n                args[0] = draft; // blegh!\n                return recipe.apply(draft, args);\n            });\n        };\n    }\n\n    // prettier-ignore\n    {\n        if (typeof producer !== \"function\") throw new Error(\"if first argument is not a function, the second argument to produce should be a function\");\n        if (patchListener !== undefined && typeof patchListener !== \"function\") throw new Error(\"the third argument of a producer should not be set or a function\");\n    }\n\n    // if state is a primitive, don't bother proxying at all\n    if ((typeof baseState === \"undefined\" ? \"undefined\" : _typeof(baseState)) !== \"object\" || baseState === null) {\n        var returnValue = producer(baseState);\n        return returnValue === undefined ? baseState : normalizeResult(returnValue);\n    }\n\n    if (!isProxyable(baseState)) throw new Error(\"the first argument to an immer producer should be a primitive, plain object or array, got \" + (typeof baseState === \"undefined\" ? \"undefined\" : _typeof(baseState)) + \": \\\"\" + baseState + \"\\\"\");\n    return normalizeResult(getUseProxies() ? produceProxy(baseState, producer, patchListener) : produceEs5(baseState, producer, patchListener));\n}\n\nfunction normalizeResult(result) {\n    return result === NOTHING ? undefined : result;\n}\n\nvar applyPatches$1 = produce(applyPatches);\n\nvar nothing = NOTHING;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (produce);\n//# sourceMappingURL=immer.module.js.map\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/immer/dist/immer.module.js?");

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("if (true) {\n  if (typeof self === 'undefined' || (!self.crypto && !self.msCrypto)) {\n    throw new Error(\n      'Your browser does not have secure random generator. ' +\n      'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'\n    )\n  }\n}\n\nvar crypto = self.crypto || self.msCrypto\n\n/*\n * This alphabet uses a-z A-Z 0-9 _- symbols.\n * Symbols order was changed for better gzip compression.\n */\nvar url = 'Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-'\n\nmodule.exports = function (size) {\n  size = size || 21\n  var id = ''\n  var bytes = crypto.getRandomValues(new Uint8Array(size))\n  while (0 < size--) {\n    id += url[bytes[size] & 63]\n  }\n  return id\n}\n\n\n//# sourceURL=webpack:///./node_modules/nanoid/index.browser.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/refract-callbag/index.es.js":
/*!**************************************************!*\
  !*** ./node_modules/refract-callbag/index.es.js ***!
  \**************************************************/
/*! exports provided: withEffects, compose, asProps, toProps, PROPS_EFFECT, useRefract, toRender, COMPONENT_EFFECT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withEffects\", function() { return withEffects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return compose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asProps\", function() { return asProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toProps\", function() { return toProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PROPS_EFFECT\", function() { return PROPS_EFFECT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useRefract\", function() { return useRefract; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toRender\", function() { return toRender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COMPONENT_EFFECT\", function() { return COMPONENT_EFFECT; });\n/* harmony import */ var callbag_start_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.js\");\n/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation. All rights reserved.\r\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\r\nthis file except in compliance with the License. You may obtain a copy of the\r\nLicense at http://www.apache.org/licenses/LICENSE-2.0\r\n\r\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\r\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\r\nMERCHANTABLITY OR NON-INFRINGEMENT.\r\n\r\nSee the Apache Version 2.0 License for specific language governing permissions\r\nand limitations under the License.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = Object.setPrototypeOf ||\r\n    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = Object.assign || function __assign(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n    }\r\n    return t;\r\n};\n\nvar PROPS_EFFECT = '@@refract/effect/props';\r\nvar COMPONENT_EFFECT = '@@refract/effect/component';\r\nvar toProps = function (props) { return ({\r\n    type: PROPS_EFFECT,\r\n    payload: {\r\n        replace: false,\r\n        props: props\r\n    }\r\n}); };\r\nvar asProps = function (props) { return ({\r\n    type: PROPS_EFFECT,\r\n    payload: {\r\n        replace: true,\r\n        props: props\r\n    }\r\n}); };\r\nvar toRender = function (data) { return ({\r\n    type: COMPONENT_EFFECT,\r\n    payload: data\r\n}); };\n\nvar MOUNT_EVENT = '@@refract/event/mount';\r\nvar UNMOUNT_EVENT = '@@refract/event/unmount';\r\nvar DataType;\r\n(function (DataType) {\r\n    DataType[\"EVENT\"] = \"event\";\r\n    DataType[\"PROPS\"] = \"props\";\r\n    DataType[\"CALLBACK\"] = \"callback\";\r\n})(DataType || (DataType = {}));\r\nvar isEvent = function (eventName) { return function (data, index) {\r\n    return data.type === DataType.EVENT &&\r\n        data.payload.name === eventName;\r\n}; };\r\nvar isProps = function (data) { return data.type === DataType.PROPS; };\r\nvar isCallback = function (propName) { return function (data) {\r\n    return data.type === DataType.CALLBACK &&\r\n        data.payload.name === propName;\r\n}; };\r\nvar createEventData = function (name, value) { return ({\r\n    type: DataType.EVENT,\r\n    payload: {\r\n        name: name,\r\n        value: value\r\n    }\r\n}); };\r\nvar createPropsData = function (props) { return ({\r\n    type: DataType.PROPS,\r\n    payload: props\r\n}); };\r\nvar createCallbackData = function (name, args) { return ({\r\n    type: DataType.CALLBACK,\r\n    payload: {\r\n        name: name,\r\n        args: args\r\n    }\r\n}); };\r\nvar shallowEquals = function (left, right) {\r\n    return left === right ||\r\n        (Object.keys(left).length === Object.keys(right).length &&\r\n            Object.keys(left).every(function (leftKey) { return left[leftKey] === right[leftKey]; }));\r\n};\n\nvar fromObs = __webpack_require__(/*! callbag-from-obs */ \"./node_modules/refract-callbag/node_modules/callbag-from-obs/readme.js\");\r\nvar toObs = __webpack_require__(/*! callbag-to-obs */ \"./node_modules/callbag-to-obs/readme.js\");\r\nvar dropRepeats = __webpack_require__(/*! callbag-drop-repeats */ \"./node_modules/callbag-drop-repeats/index.js\");\r\nvar map = __webpack_require__(/*! callbag-map */ \"./node_modules/callbag-map/readme.js\");\r\nvar pipe = __webpack_require__(/*! callbag-pipe */ \"./node_modules/callbag-pipe/readme.js\");\r\nvar filter = __webpack_require__(/*! callbag-filter */ \"./node_modules/callbag-filter/readme.js\");\r\nvar subscribeToSink = function (sink, next, error) {\r\n    return toObs(sink).subscribe({\r\n        next: next,\r\n        error: error\r\n    });\r\n};\r\nvar getComponentBase = function (data, pushEvent) {\r\n    var fromEvent = function (eventName, valueTransformer) {\r\n        return pipe(data, filter(isEvent(eventName)), map(function (data) {\r\n            var value = data.payload.value;\r\n            return valueTransformer ? valueTransformer(value) : value;\r\n        }));\r\n    };\r\n    var useEvent = function () {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        var eventName = args[0];\r\n        var hasSeedValue = args.length > 1;\r\n        var seedValue = args[2];\r\n        var events$ = fromEvent(eventName);\r\n        var pushEventValue = pushEvent(eventName);\r\n        return [\r\n            !hasSeedValue ? events$ : pipe(events$, Object(callbag_start_with__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(seedValue)),\r\n            pushEventValue\r\n        ];\r\n    };\r\n    return {\r\n        mount: pipe(data, filter(isEvent(MOUNT_EVENT)), map(function () { return undefined; })),\r\n        unmount: pipe(data, filter(isEvent(UNMOUNT_EVENT)), map(function () { return undefined; })),\r\n        fromEvent: fromEvent,\r\n        pushEvent: pushEvent,\r\n        useEvent: useEvent\r\n    };\r\n};\r\nvar getObserve = function (getProp, data, decoratedProps) {\r\n    return function observe(propName, valueTransformer) {\r\n        if (decoratedProps &&\r\n            propName &&\r\n            typeof getProp(propName) === 'function') {\r\n            return pipe(data(), filter(isCallback(propName)), map(function (data) {\r\n                var args = data.payload.args;\r\n                return valueTransformer ? valueTransformer(args) : args[0];\r\n            }));\r\n        }\r\n        if (propName) {\r\n            return pipe(data(), filter(isProps), map(function (data) {\r\n                var prop = data.payload[propName];\r\n                return valueTransformer ? valueTransformer(prop) : prop;\r\n            }), dropRepeats());\r\n        }\r\n        return pipe(data(), filter(isProps), map(function (data) { return data.payload; }), dropRepeats(shallowEquals));\r\n    };\r\n};\r\nvar createComponent = function (getProp, dataObservable, pushEvent, decoratedProps) {\r\n    var data = function () { return fromObs(dataObservable); };\r\n    return __assign({ observe: getObserve(getProp, data, decoratedProps) }, getComponentBase(data(), pushEvent));\r\n};\n\nvar configureComponent = function (aperture, instance, isValidElement$$1, isComponentClass, handler, errorHandler, mergeProps, decorateProps) {\r\n    if (isValidElement$$1 === void 0) { isValidElement$$1 = function () { return false; }; }\r\n    if (isComponentClass === void 0) { isComponentClass = function () { return false; }; }\r\n    instance.state = {\r\n        renderEffect: false,\r\n        children: null,\r\n        props: {}\r\n    };\r\n    var setState = function (state) {\r\n        if (instance.unmounted) {\r\n            return;\r\n        }\r\n        if (instance.mounted) {\r\n            instance.setState(state);\r\n        }\r\n        else {\r\n            instance.state = __assign({}, instance.state, state);\r\n        }\r\n    };\r\n    var finalHandler = function (initialProps, initialContext) {\r\n        var effectHandler = handler\r\n            ? handler(initialProps, initialContext)\r\n            : function () { return void 0; };\r\n        return function (effect) {\r\n            if (isValidElement$$1(effect)) {\r\n                setState({\r\n                    renderEffect: true,\r\n                    children: effect\r\n                });\r\n            }\r\n            else if (effect && effect.type === PROPS_EFFECT) {\r\n                var payload = effect.payload;\r\n                setState({\r\n                    replace: payload.replace,\r\n                    props: mergeProps\r\n                        ? __assign({}, instance.state.props, payload.props) : payload.props\r\n                });\r\n            }\r\n            else {\r\n                effectHandler(effect);\r\n            }\r\n        };\r\n    };\r\n    var decoratedProps = {};\r\n    var listeners = [];\r\n    var addListener = function (listener) {\r\n        listeners = listeners.concat(listener);\r\n    };\r\n    var removeListener = function (listener) {\r\n        listeners = listeners.filter(function (l) { return l !== listener; });\r\n    };\r\n    var pushEvent = function (eventName) { return function (val) {\r\n        listeners.forEach(function (listener) {\r\n            listener.next(createEventData(eventName, val));\r\n        });\r\n    }; };\r\n    var decorateProp = function (container, prop, propName) {\r\n        if (propName === 'children' || isComponentClass(prop)) {\r\n            return;\r\n        }\r\n        container[propName] = function () {\r\n            var args = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                args[_i] = arguments[_i];\r\n            }\r\n            listeners.forEach(function (listener) {\r\n                listener.next(createCallbackData(propName, args));\r\n            });\r\n            return prop.apply(void 0, args);\r\n        };\r\n    };\r\n    if (decorateProps) {\r\n        Object.keys(instance.props).forEach(function (propName) {\r\n            if (typeof instance.props[propName] === 'function') {\r\n                decorateProp(decoratedProps, instance.props[propName], propName);\r\n            }\r\n        });\r\n    }\r\n    var dataObservable = (_a = {\r\n            subscribe: function (listener) {\r\n                addListener(listener);\r\n                listener.next(createPropsData(instance.props));\r\n                return { unsubscribe: function () { return removeListener(listener); } };\r\n            }\r\n        },\r\n        _a[symbol_observable__WEBPACK_IMPORTED_MODULE_1__[\"default\"]] = function () {\r\n            return this;\r\n        },\r\n        _a);\r\n    var component = createComponent(function (propName) { return instance.props[propName]; }, dataObservable, pushEvent, decorateProps);\r\n    var sinkObservable = aperture(component, instance.props, instance.context);\r\n    var sinkSubscription = subscribeToSink(sinkObservable, finalHandler(instance.props, instance.context), errorHandler\r\n        ? errorHandler(instance.props, instance.context)\r\n        : undefined);\r\n    instance.reDecorateProps = function (nextProps) {\r\n        if (decorateProps) {\r\n            Object.keys(nextProps).forEach(function (propName) {\r\n                if (typeof instance.props[propName] === 'function' &&\r\n                    nextProps[propName] !== instance.props[propName]) {\r\n                    decorateProp(decoratedProps, nextProps[propName], propName);\r\n                }\r\n            });\r\n        }\r\n    };\r\n    instance.pushProps = function (props) {\r\n        listeners.forEach(function (listener) {\r\n            listener.next(createPropsData(props));\r\n        });\r\n    };\r\n    instance.triggerMount = function () {\r\n        pushEvent(MOUNT_EVENT)();\r\n    };\r\n    instance.triggerUnmount = function () {\r\n        pushEvent(UNMOUNT_EVENT)();\r\n        sinkSubscription.unsubscribe();\r\n    };\r\n    instance.getChildProps = function () {\r\n        var state = instance.state;\r\n        var stateProps = state.props;\r\n        if (state.replace === true) {\r\n            return __assign({}, stateProps, { pushEvent: pushEvent });\r\n        }\r\n        var additionalProps = __assign({}, decoratedProps, { pushEvent: pushEvent });\r\n        if (state.replace === false) {\r\n            return __assign({}, instance.props, additionalProps, stateProps);\r\n        }\r\n        return __assign({}, instance.props, additionalProps);\r\n    };\r\n    instance.havePropsChanged = function (newProps, newState) {\r\n        var state = instance.state;\r\n        if (state.renderEffect) {\r\n            return state.children !== newState.children;\r\n        }\r\n        var haveStatePropsChanged = !shallowEquals(state.props, newState.props);\r\n        if (newState.replace === true) {\r\n            return haveStatePropsChanged;\r\n        }\r\n        var havePropsChanged = !shallowEquals(instance.props, newProps);\r\n        if (newState.replace === false) {\r\n            return havePropsChanged || haveStatePropsChanged;\r\n        }\r\n        return havePropsChanged;\r\n    };\r\n    var _a;\r\n};\n\nvar isComponentClass = function (ComponentClass) {\r\n    return Boolean(ComponentClass &&\r\n        ComponentClass.prototype &&\r\n        ComponentClass.prototype.isReactComponent);\r\n};\r\nvar Empty = function () { return null; };\r\nvar withEffects = function (aperture, config) {\r\n    if (config === void 0) { config = {}; }\r\n    return function (BaseComponent) {\r\n        if (BaseComponent === void 0) { BaseComponent = Empty; }\r\n        return _a = /** @class */ (function (_super) {\r\n                __extends(WithEffects, _super);\r\n                function WithEffects(props, context) {\r\n                    var _this = _super.call(this, props, context) || this;\r\n                    _this.mounted = false;\r\n                    _this.unmounted = false;\r\n                    configureComponent(aperture, _this, react__WEBPACK_IMPORTED_MODULE_2__[\"isValidElement\"], isComponentClass, config.handler, config.errorHandler, config.mergeProps, config.decorateProps !== false);\r\n                    return _this;\r\n                }\r\n                WithEffects.prototype.componentDidMount = function () {\r\n                    this.mounted = true;\r\n                    this.triggerMount();\r\n                };\r\n                WithEffects.prototype.componentWillReceiveProps = function (nextProps) {\r\n                    this.reDecorateProps(nextProps);\r\n                    this.pushProps(nextProps);\r\n                };\r\n                WithEffects.prototype.shouldComponentUpdate = function (nextProps, nextState) {\r\n                    return this.havePropsChanged(nextProps, nextState);\r\n                };\r\n                WithEffects.prototype.componentWillUnmount = function () {\r\n                    this.unmounted = true;\r\n                    this.triggerUnmount();\r\n                };\r\n                WithEffects.prototype.render = function () {\r\n                    if (this.state.children) {\r\n                        return this.state.children;\r\n                    }\r\n                    return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(BaseComponent, this.getChildProps());\r\n                };\r\n                return WithEffects;\r\n            }(react__WEBPACK_IMPORTED_MODULE_2__[\"Component\"])),\r\n            _a.contextType = config.Context,\r\n            _a;\r\n        var _a;\r\n    };\r\n};\n\nvar identity = function (arg) { return arg; };\r\nvar compose = function () {\r\n    var fns = [];\r\n    for (var _i = 0; _i < arguments.length; _i++) {\r\n        fns[_i] = arguments[_i];\r\n    }\r\n    if (fns.length === 0) {\r\n        return identity;\r\n    }\r\n    if (fns.length === 1) {\r\n        return fns[0];\r\n    }\r\n    return function (arg) {\r\n        return fns.reduceRight(function (previousResult, fn) { return fn(previousResult); }, arg);\r\n    };\r\n};\n\nvar configureHook = function (aperture, data, handler, errorHandler) {\r\n    if (handler === void 0) { handler = function () { return function () { return void 0; }; }; }\r\n    var returnedData;\r\n    var lastData = data;\r\n    var setComponentData;\r\n    var finalHandler = function (initialData) {\r\n        var effectHandler = handler(initialData);\r\n        return function (effect) {\r\n            if (effect && effect.type === COMPONENT_EFFECT) {\r\n                if (setComponentData) {\r\n                    setComponentData(effect.payload);\r\n                }\r\n                else {\r\n                    returnedData = effect.payload;\r\n                }\r\n            }\r\n            else {\r\n                effectHandler(effect);\r\n            }\r\n        };\r\n    };\r\n    var listeners = [];\r\n    var addListener = function (listener) {\r\n        listeners = listeners.concat(listener);\r\n    };\r\n    var removeListener = function (listener) {\r\n        listeners = listeners.filter(function (l) { return l !== listener; });\r\n    };\r\n    var pushEvent = function (eventName) { return function (val) {\r\n        listeners.forEach(function (listener) {\r\n            listener.next(createEventData(eventName, val));\r\n        });\r\n    }; };\r\n    var dataObservable = (_a = {\r\n            subscribe: function (listener) {\r\n                addListener(listener);\r\n                listener.next(createPropsData(lastData));\r\n                return { unsubscribe: function () { return removeListener(listener); } };\r\n            }\r\n        },\r\n        _a[symbol_observable__WEBPACK_IMPORTED_MODULE_1__[\"default\"]] = function () {\r\n            return this;\r\n        },\r\n        _a);\r\n    var component = createComponent(function (propName) { return data[propName]; }, dataObservable, pushEvent, false);\r\n    var sinkObservable = aperture(component, data);\r\n    var sinkSubscription = subscribeToSink(sinkObservable, finalHandler(data), errorHandler ? errorHandler(data) : undefined);\r\n    var pushMountEvent = function () {\r\n        pushEvent(MOUNT_EVENT)();\r\n    };\r\n    var pushUnmountEvent = function () {\r\n        pushEvent(UNMOUNT_EVENT)();\r\n    };\r\n    return {\r\n        data: returnedData,\r\n        unsubscribe: function () {\r\n            pushUnmountEvent();\r\n            sinkSubscription.unsubscribe();\r\n        },\r\n        pushMountEvent: pushMountEvent,\r\n        pushData: function (data) {\r\n            lastData = data;\r\n            listeners.forEach(function (listener) {\r\n                listener.next(createPropsData(data));\r\n            });\r\n        },\r\n        registerSetData: function (setData) {\r\n            setComponentData = function (data) { return setData(function (hook) { return (__assign({}, hook, { data: data })); }); };\r\n        }\r\n    };\r\n    var _a;\r\n};\n\n// @ts-ignore\r\nvar useRefract = function (aperture, data, config) {\r\n    if (config === void 0) { config = {}; }\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(configureHook(aperture, data, config.handler, config.errorHandler)), hook = _a[0], setData = _a[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useLayoutEffect\"])(function () {\r\n        hook.registerSetData(setData);\r\n        hook.pushMountEvent();\r\n        return function () { return hook.unsubscribe(); };\r\n    }, []);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\r\n        hook.pushData(data);\r\n    });\r\n    return hook.data;\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/refract-callbag/index.es.js?");

/***/ }),

/***/ "./node_modules/refract-callbag/node_modules/callbag-from-obs/readme.js":
/*!******************************************************************************!*\
  !*** ./node_modules/refract-callbag/node_modules/callbag-from-obs/readme.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * callbag-from-obs\n * --------------\n *\n * Convert an observable (or subscribable) to a callbag listenable source.\n *\n * `npm install callbag-from-obs`\n *\n * Example:\n *\n * Convert an RxJS Observable:\n *\n *     const Rx = require('rxjs');\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const source = fromObs(Rx.Observable.interval(1000).take(4));\n *\n *     observe(x => console.log(x)(source); // 0\n *                                          // 1\n *                                          // 2\n *                                          // 3\n *\n * Convert anything that has the `.subscribe` method:\n *\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const subscribable = {\n *       subscribe: (observer) => {\n *         let i = 0;\n *         setInterval(() => observer.next(i++), 1000);\n *       }\n *     };\n *\n *     const source = fromObs(subscribable);\n *\n *     observe(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 3\n *                                           // ...\n */\n\nconst $$observable = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\").default;\n\nconst fromObs = observable => (start, sink) => {\n  if (start !== 0) return;\n  let dispose;\n  sink(0, t => {\n    if (t === 2 && dispose) {\n      if (dispose.unsubscribe) dispose.unsubscribe();\n      else dispose();\n    }\n  });\n  observable = observable[$$observable] ? observable[$$observable]() : observable;\n  dispose = observable.subscribe({\n    next: x => sink(1, x),\n    error: e => sink(2, e),\n    complete: () => sink(2)\n  });\n};\n\nmodule.exports = fromObs;\n\n\n//# sourceURL=webpack:///./node_modules/refract-callbag/node_modules/callbag-from-obs/readme.js?");

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

/***/ "./packages/vendor/index.js":
/*!**********************************!*\
  !*** ./packages/vendor/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.module.js\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! refract-callbag */ \"./node_modules/refract-callbag/index.es.js\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! callbag-basics */ \"./node_modules/callbag-basics/index.js\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_13__);\n\n\n/**\n * External dependencies.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Prevent the conflicts with WordPress's Underscore lib.\n */\n\nif (!window.lodash) {\n  lodash__WEBPACK_IMPORTED_MODULE_11__[\"noConflict\"]();\n}\n/**\n * Setup the vendor variables used by Carbon Fields.\n */\n\n\nwindow.cf = window.cf || {};\nwindow.cf.vendor = [['react', react__WEBPACK_IMPORTED_MODULE_1___default.a], ['react-dom', react_dom__WEBPACK_IMPORTED_MODULE_2___default.a], ['nanoid', nanoid__WEBPACK_IMPORTED_MODULE_3___default.a], ['immer', immer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]], ['@wordpress/compose', _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__], ['@wordpress/element', _wordpress_element__WEBPACK_IMPORTED_MODULE_6__], ['@wordpress/hooks', _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__], ['@wordpress/data', _wordpress_data__WEBPACK_IMPORTED_MODULE_8__], ['@wordpress/i18n', _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__], ['classnames', classnames__WEBPACK_IMPORTED_MODULE_10__], ['lodash', lodash__WEBPACK_IMPORTED_MODULE_11__], ['refract-callbag', refract_callbag__WEBPACK_IMPORTED_MODULE_12__], ['callbag-basics', callbag_basics__WEBPACK_IMPORTED_MODULE_13__]].reduce(function (vendors, _ref) {\n  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n      key = _ref2[0],\n      implementation = _ref2[1];\n\n  vendors[key] = implementation;\n  return vendors;\n}, {});\n/**\n * Setup the enviroment variables used by Carbon Fields.\n */\n\nwindow.cf.hooks = _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__;\nwindow.cf.element = _wordpress_element__WEBPACK_IMPORTED_MODULE_6__;\n\n//# sourceURL=webpack:///./packages/vendor/index.js?");

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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = lodash;\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ })

/******/ });