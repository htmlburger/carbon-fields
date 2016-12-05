this["carbon.app"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TYPE_NOW_PAGE = exports.TYPE_NOW_PAGE = 'page';

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizePreloadedState = normalizePreloadedState;

	var _lodash = __webpack_require__(3);

	/**
	 * Change the shape of preloaded state so it can be used easier through Redux.
	 *
	 * @param  {Object} state
	 * @return {Object}
	 */
	function normalizePreloadedState(state) {
	  var _merge = (0, _lodash.merge)({}, state),
	      containers = _merge.containers,
	      sidebars = _merge.sidebars;

	  containers = (0, _lodash.keyBy)(containers, 'id');

	  return { containers: containers, sidebars: sidebars };
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(256);

/***/ },
/* 4 */
/***/ function(module, exports) {

	(function() { module.exports = this["carbon.vendor"]; }());

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _reactRedux = __webpack_require__(6);

	var _actions = __webpack_require__(7);

	var mapStateToProps = null;

	var mapDispatchToProps = {
		setupContainer: _actions.setupContainer,
		checkVisibility: _actions.checkVisibility
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(347);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.checkVisibility = exports.CHECK_VISIBILITY = exports.setUI = exports.SET_UI = exports.setMeta = exports.SET_META = exports.setupContainer = exports.SETUP_CONTAINER = undefined;

	var _reduxActions = __webpack_require__(8);

	/**
	 * Perform the initial setup of the container.
	 *
	 * @param  {string} containerId
	 * @param  {Object} [ui]
	 * @return {Object}
	 */
	var SETUP_CONTAINER = exports.SETUP_CONTAINER = 'containers/SETUP_CONTAINER';

	var setupContainer = exports.setupContainer = (0, _reduxActions.createAction)(SETUP_CONTAINER, function (containerId) {
	  var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var ui = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  return { containerId: containerId, meta: meta, ui: ui };
	});

	/**
	 * Update the object that holds additional fields for the container.
	 *
	 * @param  {Object} payload
	 * @param  {string} payload.containerId
	 * @param  {Object} payload.meta
	 * @return {Object}
	 */
	var SET_META = exports.SET_META = 'containers/SET_META';
	var setMeta = exports.setMeta = (0, _reduxActions.createAction)(SET_META);

	/**
	 * Update the object that contains information about container's UI.
	 *
	 * @param  {Object} payload
	 * @param  {string} payload.containerId
	 * @param  {Object} payload.ui
	 * @return {Object}
	 */
	var SET_UI = exports.SET_UI = 'containers/SET_UI';
	var setUI = exports.setUI = (0, _reduxActions.createAction)(SET_UI);

	/**
	 * Initialize a visibility check for the container.
	 *
	 * @param  {string} containerId
	 * @return {Object}
	 */
	var CHECK_VISIBILITY = exports.CHECK_VISIBILITY = 'containers/CHECK_VISIBILITY';
	var checkVisibility = exports.checkVisibility = (0, _reduxActions.createAction)(CHECK_VISIBILITY);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(364);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _recompose = __webpack_require__(10);

	exports.default = (0, _recompose.lifecycle)({
		componentWillMount: function componentWillMount() {
			this.props.setupContainer(this.props.id, this.props.meta, this.props.ui);
			this.props.checkVisibility(this.props.id);
		}
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.setObservableConfig = exports.createEventHandler = exports.mapPropsStream = exports.componentFromStream = exports.hoistStatics = exports.nest = exports.componentFromProp = exports.createSink = exports.createEagerFactory = exports.createEagerElement = exports.isClassComponent = exports.shallowEqual = exports.wrapDisplayName = exports.getDisplayName = exports.compose = exports.setDisplayName = exports.setPropTypes = exports.setStatic = exports.toClass = exports.lifecycle = exports.getContext = exports.withContext = exports.onlyUpdateForPropTypes = exports.onlyUpdateForKeys = exports.pure = exports.shouldUpdate = exports.renderNothing = exports.renderComponent = exports.branch = exports.withReducer = exports.withState = exports.flattenProp = exports.renameProps = exports.renameProp = exports.defaultProps = exports.withHandlers = exports.withPropsOnChange = exports.withProps = exports.mapProps = undefined;

	var _mapProps2 = __webpack_require__(11);

	var _mapProps3 = _interopRequireDefault(_mapProps2);

	var _withProps2 = __webpack_require__(21);

	var _withProps3 = _interopRequireDefault(_withProps2);

	var _withPropsOnChange2 = __webpack_require__(22);

	var _withPropsOnChange3 = _interopRequireDefault(_withPropsOnChange2);

	var _withHandlers2 = __webpack_require__(26);

	var _withHandlers3 = _interopRequireDefault(_withHandlers2);

	var _defaultProps2 = __webpack_require__(27);

	var _defaultProps3 = _interopRequireDefault(_defaultProps2);

	var _renameProp2 = __webpack_require__(28);

	var _renameProp3 = _interopRequireDefault(_renameProp2);

	var _renameProps2 = __webpack_require__(30);

	var _renameProps3 = _interopRequireDefault(_renameProps2);

	var _flattenProp2 = __webpack_require__(31);

	var _flattenProp3 = _interopRequireDefault(_flattenProp2);

	var _withState2 = __webpack_require__(32);

	var _withState3 = _interopRequireDefault(_withState2);

	var _withReducer2 = __webpack_require__(33);

	var _withReducer3 = _interopRequireDefault(_withReducer2);

	var _branch2 = __webpack_require__(34);

	var _branch3 = _interopRequireDefault(_branch2);

	var _renderComponent2 = __webpack_require__(35);

	var _renderComponent3 = _interopRequireDefault(_renderComponent2);

	var _renderNothing2 = __webpack_require__(36);

	var _renderNothing3 = _interopRequireDefault(_renderNothing2);

	var _shouldUpdate2 = __webpack_require__(37);

	var _shouldUpdate3 = _interopRequireDefault(_shouldUpdate2);

	var _pure2 = __webpack_require__(38);

	var _pure3 = _interopRequireDefault(_pure2);

	var _onlyUpdateForKeys2 = __webpack_require__(39);

	var _onlyUpdateForKeys3 = _interopRequireDefault(_onlyUpdateForKeys2);

	var _onlyUpdateForPropTypes2 = __webpack_require__(40);

	var _onlyUpdateForPropTypes3 = _interopRequireDefault(_onlyUpdateForPropTypes2);

	var _withContext2 = __webpack_require__(41);

	var _withContext3 = _interopRequireDefault(_withContext2);

	var _getContext2 = __webpack_require__(42);

	var _getContext3 = _interopRequireDefault(_getContext2);

	var _lifecycle2 = __webpack_require__(43);

	var _lifecycle3 = _interopRequireDefault(_lifecycle2);

	var _toClass2 = __webpack_require__(44);

	var _toClass3 = _interopRequireDefault(_toClass2);

	var _setStatic2 = __webpack_require__(45);

	var _setStatic3 = _interopRequireDefault(_setStatic2);

	var _setPropTypes2 = __webpack_require__(46);

	var _setPropTypes3 = _interopRequireDefault(_setPropTypes2);

	var _setDisplayName2 = __webpack_require__(47);

	var _setDisplayName3 = _interopRequireDefault(_setDisplayName2);

	var _compose2 = __webpack_require__(48);

	var _compose3 = _interopRequireDefault(_compose2);

	var _getDisplayName2 = __webpack_require__(15);

	var _getDisplayName3 = _interopRequireDefault(_getDisplayName2);

	var _wrapDisplayName2 = __webpack_require__(14);

	var _wrapDisplayName3 = _interopRequireDefault(_wrapDisplayName2);

	var _shallowEqual2 = __webpack_require__(24);

	var _shallowEqual3 = _interopRequireDefault(_shallowEqual2);

	var _isClassComponent2 = __webpack_require__(20);

	var _isClassComponent3 = _interopRequireDefault(_isClassComponent2);

	var _createEagerElement2 = __webpack_require__(49);

	var _createEagerElement3 = _interopRequireDefault(_createEagerElement2);

	var _createEagerFactory2 = __webpack_require__(16);

	var _createEagerFactory3 = _interopRequireDefault(_createEagerFactory2);

	var _createSink2 = __webpack_require__(50);

	var _createSink3 = _interopRequireDefault(_createSink2);

	var _componentFromProp2 = __webpack_require__(51);

	var _componentFromProp3 = _interopRequireDefault(_componentFromProp2);

	var _nest2 = __webpack_require__(52);

	var _nest3 = _interopRequireDefault(_nest2);

	var _hoistStatics2 = __webpack_require__(53);

	var _hoistStatics3 = _interopRequireDefault(_hoistStatics2);

	var _componentFromStream2 = __webpack_require__(55);

	var _componentFromStream3 = _interopRequireDefault(_componentFromStream2);

	var _mapPropsStream2 = __webpack_require__(60);

	var _mapPropsStream3 = _interopRequireDefault(_mapPropsStream2);

	var _createEventHandler2 = __webpack_require__(61);

	var _createEventHandler3 = _interopRequireDefault(_createEventHandler2);

	var _setObservableConfig2 = __webpack_require__(59);

	var _setObservableConfig3 = _interopRequireDefault(_setObservableConfig2);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.mapProps = _mapProps3.default; // Higher-order component helpers

	exports.withProps = _withProps3.default;
	exports.withPropsOnChange = _withPropsOnChange3.default;
	exports.withHandlers = _withHandlers3.default;
	exports.defaultProps = _defaultProps3.default;
	exports.renameProp = _renameProp3.default;
	exports.renameProps = _renameProps3.default;
	exports.flattenProp = _flattenProp3.default;
	exports.withState = _withState3.default;
	exports.withReducer = _withReducer3.default;
	exports.branch = _branch3.default;
	exports.renderComponent = _renderComponent3.default;
	exports.renderNothing = _renderNothing3.default;
	exports.shouldUpdate = _shouldUpdate3.default;
	exports.pure = _pure3.default;
	exports.onlyUpdateForKeys = _onlyUpdateForKeys3.default;
	exports.onlyUpdateForPropTypes = _onlyUpdateForPropTypes3.default;
	exports.withContext = _withContext3.default;
	exports.getContext = _getContext3.default;
	exports.lifecycle = _lifecycle3.default;
	exports.toClass = _toClass3.default;

	// Static property helpers

	exports.setStatic = _setStatic3.default;
	exports.setPropTypes = _setPropTypes3.default;
	exports.setDisplayName = _setDisplayName3.default;

	// Composition function

	exports.compose = _compose3.default;

	// Other utils

	exports.getDisplayName = _getDisplayName3.default;
	exports.wrapDisplayName = _wrapDisplayName3.default;
	exports.shallowEqual = _shallowEqual3.default;
	exports.isClassComponent = _isClassComponent3.default;
	exports.createEagerElement = _createEagerElement3.default;
	exports.createEagerFactory = _createEagerFactory3.default;
	exports.createSink = _createSink3.default;
	exports.componentFromProp = _componentFromProp3.default;
	exports.nest = _nest3.default;
	exports.hoistStatics = _hoistStatics3.default;

	// Observable helpers

	exports.componentFromStream = _componentFromStream3.default;
	exports.mapPropsStream = _mapPropsStream3.default;
	exports.createEventHandler = _createEventHandler3.default;
	exports.setObservableConfig = _setObservableConfig3.default;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var mapProps = function mapProps(propsMapper) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    return function (props) {
	      return factory(propsMapper(props));
	    };
	  };
	};

	exports.default = (0, _createHelper2.default)(mapProps, 'mapProps');

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	var createHelper = function createHelper(func, helperName) {
	  var setDisplayName = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	  var noArgs = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
	    var _ret = function () {
	      /* eslint-disable global-require */
	      var wrapDisplayName = __webpack_require__(14).default;
	      /* eslint-enable global-require */

	      if (noArgs) {
	        return {
	          v: function v(BaseComponent) {
	            var Component = func(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          }
	        };
	      }

	      return {
	        v: function v() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }

	          if (args.length > func.length) {
	            /* eslint-disable */
	            console.error(
	            /* eslint-enable */
	            'Too many arguments passed to ' + helperName + '(). It should called ' + ('like so: ' + helperName + '(...args)(BaseComponent).'));
	          }

	          return function (BaseComponent) {
	            var Component = func.apply(undefined, args)(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          };
	        }
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }

	  return func;
	};

	exports.default = createHelper;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(1);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _getDisplayName = __webpack_require__(15);

	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
	  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
	};

	exports.default = wrapDisplayName;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var getDisplayName = function getDisplayName(Component) {
	  if (typeof Component === 'string') {
	    return Component;
	  }

	  if (!Component) {
	    return undefined;
	  }

	  return Component.displayName || Component.name || 'Component';
	};

	exports.default = getDisplayName;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createEagerElementUtil = __webpack_require__(17);

	var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

	var _isReferentiallyTransparentFunctionComponent = __webpack_require__(19);

	var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var createFactory = function createFactory(type) {
	  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
	  return function (p, c) {
	    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
	  };
	};

	exports.default = createFactory;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
	  if (!hasKey && isReferentiallyTransparent) {
	    if (children) {
	      return type(_extends({}, props, { children: children }));
	    }
	    return type(props);
	  }

	  var Component = type;

	  if (children) {
	    return _react2.default.createElement(Component, props, children);
	  }

	  return _react2.default.createElement(Component, props);
	};

	exports.default = createEagerElementUtil;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(53);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isClassComponent = __webpack_require__(20);

	var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
	  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && !Component.propTypes);
	};

	exports.default = isReferentiallyTransparentFunctionComponent;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	var isClassComponent = function isClassComponent(Component) {
	  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
	};

	exports.default = isClassComponent;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _mapProps = __webpack_require__(11);

	var _mapProps2 = _interopRequireDefault(_mapProps);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var withProps = function withProps(input) {
	  return (0, _mapProps2.default)(function (props) {
	    return _extends({}, props, typeof input === 'function' ? input(props) : input);
	  });
	};

	exports.default = (0, _createHelper2.default)(withProps, 'withProps');

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(18);

	var _pick = __webpack_require__(23);

	var _pick2 = _interopRequireDefault(_pick);

	var _shallowEqual = __webpack_require__(24);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var withPropsOnChange = function withPropsOnChange(shouldMapOrKeys, propsMapper) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    var shouldMap = typeof shouldMapOrKeys === 'function' ? shouldMapOrKeys : function (props, nextProps) {
	      return !(0, _shallowEqual2.default)((0, _pick2.default)(props, shouldMapOrKeys), (0, _pick2.default)(nextProps, shouldMapOrKeys));
	    };

	    return function (_Component) {
	      _inherits(_class2, _Component);

	      function _class2() {
	        var _temp, _this, _ret;

	        _classCallCheck(this, _class2);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.computedProps = propsMapper(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	      }

	      _class2.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (shouldMap(this.props, nextProps)) {
	          this.computedProps = propsMapper(nextProps);
	        }
	      };

	      _class2.prototype.render = function render() {
	        return factory(_extends({}, this.props, this.computedProps));
	      };

	      return _class2;
	    }(_react.Component);
	  };
	};

	exports.default = (0, _createHelper2.default)(withPropsOnChange, 'withPropsOnChange');

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var pick = function pick(obj, keys) {
	  var result = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (obj.hasOwnProperty(key)) {
	      result[key] = obj[key];
	    }
	  }
	  return result;
	};

	exports.default = pick;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _shallowEqual = __webpack_require__(25);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _shallowEqual2.default;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(58);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(18);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var mapValues = function mapValues(obj, func) {
	  var result = [];
	  var i = 0;
	  /* eslint-disable no-restricted-syntax */
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      i += 1;
	      result[key] = func(obj[key], key, i);
	    }
	  }
	  /* eslint-enable no-restricted-syntax */
	  return result;
	};

	var withHandlers = function withHandlers(handlers) {
	  return function (BaseComponent) {
	    var _class, _temp2, _initialiseProps;

	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    return _temp2 = _class = function (_Component) {
	      _inherits(_class, _Component);

	      function _class() {
	        var _temp, _this, _ret;

	        _classCallCheck(this, _class);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	      }

	      _class.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
	        this.cachedHandlers = {};
	      };

	      _class.prototype.render = function render() {
	        return factory(_extends({}, this.props, this.handlers));
	      };

	      return _class;
	    }(_react.Component), _initialiseProps = function _initialiseProps() {
	      var _this2 = this;

	      this.cachedHandlers = {};
	      this.handlers = mapValues(handlers, function (createHandler, handlerName) {
	        return function () {
	          var cachedHandler = _this2.cachedHandlers[handlerName];
	          if (cachedHandler) {
	            return cachedHandler.apply(undefined, arguments);
	          }

	          var handler = createHandler(_this2.props);
	          _this2.cachedHandlers[handlerName] = handler;

	          if (process.env.NODE_ENV !== 'production' && typeof handler !== 'function') {
	            console.error('withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
	          }

	          return handler.apply(undefined, arguments);
	        };
	      });
	    }, _temp2;
	  };
	};

	exports.default = (0, _createHelper2.default)(withHandlers, 'withHandlers');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var defaultProps = function defaultProps(props) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    var DefaultProps = function DefaultProps(ownerProps) {
	      return factory(ownerProps);
	    };
	    DefaultProps.defaultProps = props;
	    return DefaultProps;
	  };
	};

	exports.default = (0, _createHelper2.default)(defaultProps, 'defaultProps');

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _omit = __webpack_require__(29);

	var _omit2 = _interopRequireDefault(_omit);

	var _mapProps = __webpack_require__(11);

	var _mapProps2 = _interopRequireDefault(_mapProps);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var renameProp = function renameProp(oldName, newName) {
	  return (0, _mapProps2.default)(function (props) {
	    var _extends2;

	    return _extends({}, (0, _omit2.default)(props, [oldName]), (_extends2 = {}, _extends2[newName] = props[oldName], _extends2));
	  });
	};

	exports.default = (0, _createHelper2.default)(renameProp, 'renameProp');

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	var omit = function omit(obj, keys) {
	  var rest = _objectWithoutProperties(obj, []);

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (rest.hasOwnProperty(key)) {
	      delete rest[key];
	    }
	  }
	  return rest;
	};

	exports.default = omit;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _omit = __webpack_require__(29);

	var _omit2 = _interopRequireDefault(_omit);

	var _pick = __webpack_require__(23);

	var _pick2 = _interopRequireDefault(_pick);

	var _mapProps = __webpack_require__(11);

	var _mapProps2 = _interopRequireDefault(_mapProps);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var keys = Object.keys;

	var mapKeys = function mapKeys(obj, func) {
	  return keys(obj).reduce(function (result, key) {
	    var val = obj[key];
	    /* eslint-disable no-param-reassign */
	    result[func(val, key)] = val;
	    /* eslint-enable no-param-reassign */
	    return result;
	  }, {});
	};

	var renameProps = function renameProps(nameMap) {
	  return (0, _mapProps2.default)(function (props) {
	    return _extends({}, (0, _omit2.default)(props, keys(nameMap)), mapKeys((0, _pick2.default)(props, keys(nameMap)), function (_, oldName) {
	      return nameMap[oldName];
	    }));
	  });
	};

	exports.default = (0, _createHelper2.default)(renameProps, 'renameProps');

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var flattenProp = function flattenProp(propName) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    return function (props) {
	      return factory(_extends({}, props, props[propName]));
	    };
	  };
	};

	exports.default = (0, _createHelper2.default)(flattenProp, 'flattenProp');

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(18);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var withState = function withState(stateName, stateUpdaterName, initialState) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    return function (_Component) {
	      _inherits(_class2, _Component);

	      function _class2() {
	        var _temp, _this, _ret;

	        _classCallCheck(this, _class2);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	          stateValue: typeof initialState === 'function' ? initialState(_this.props) : initialState
	        }, _this.updateStateValue = function (updateFn, callback) {
	          return _this.setState(function (_ref) {
	            var stateValue = _ref.stateValue;
	            return {
	              stateValue: typeof updateFn === 'function' ? updateFn(stateValue) : updateFn
	            };
	          }, callback);
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }

	      _class2.prototype.render = function render() {
	        var _extends2;

	        return factory(_extends({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[stateUpdaterName] = this.updateStateValue, _extends2)));
	      };

	      return _class2;
	    }(_react.Component);
	  };
	};

	exports.default = (0, _createHelper2.default)(withState, 'withState');

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(18);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var withReducer = function withReducer(stateName, dispatchName, reducer, initialState) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    return function (_Component) {
	      _inherits(_class2, _Component);

	      function _class2() {
	        var _temp, _this, _ret;

	        _classCallCheck(this, _class2);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	          stateValue: typeof initialState === 'function' ? initialState(_this.props) : initialState
	        }, _this.dispatch = function (action) {
	          return _this.setState(function (_ref) {
	            var stateValue = _ref.stateValue;
	            return {
	              stateValue: reducer(stateValue, action)
	            };
	          });
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }

	      _class2.prototype.render = function render() {
	        var _extends2;

	        return factory(_extends({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[dispatchName] = this.dispatch, _extends2)));
	      };

	      return _class2;
	    }(_react.Component);
	  };
	};

	exports.default = (0, _createHelper2.default)(withReducer, 'withReducer');

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var branch = function branch(test, left, right) {
	  return function (BaseComponent) {
	    return function (_React$Component) {
	      _inherits(_class2, _React$Component);

	      function _class2(props, context) {
	        _classCallCheck(this, _class2);

	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	        _this.LeftComponent = null;
	        _this.RightComponent = null;

	        _this.computeChildComponent(_this.props);
	        return _this;
	      }

	      _class2.prototype.computeChildComponent = function computeChildComponent(props) {
	        if (test(props)) {
	          this.leftFactory = this.leftFactory || (0, _createEagerFactory2.default)(left(BaseComponent));
	          this.factory = this.leftFactory;
	        } else {
	          this.rightFactory = this.rightFactory || (0, _createEagerFactory2.default)(right(BaseComponent));
	          this.factory = this.rightFactory;
	        }
	      };

	      _class2.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.computeChildComponent(nextProps);
	      };

	      _class2.prototype.render = function render() {
	        return this.factory(this.props);
	      };

	      return _class2;
	    }(_react2.default.Component);
	  };
	};

	exports.default = (0, _createHelper2.default)(branch, 'branch');

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	// import React from 'react'


	var renderComponent = function renderComponent(Component) {
	  return function (_) {
	    var factory = (0, _createEagerFactory2.default)(Component);
	    var RenderComponent = function RenderComponent(props) {
	      return factory(props);
	    };
	    // const RenderComponent = props => <Component {...props} />
	    if (process.env.NODE_ENV !== 'production') {
	      /* eslint-disable global-require */
	      var wrapDisplayName = __webpack_require__(14).default;
	      /* eslint-enable global-require */
	      RenderComponent.displayName = wrapDisplayName(Component, 'renderComponent');
	    }
	    return RenderComponent;
	  };
	};

	exports.default = (0, _createHelper2.default)(renderComponent, 'renderComponent', false);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var renderNothing = function renderNothing(_) {
	  var Nothing = function Nothing() {
	    return null;
	  };
	  Nothing.displayName = 'Nothing';
	  return Nothing;
	};

	exports.default = (0, _createHelper2.default)(renderNothing, 'renderNothing', false, true);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _react = __webpack_require__(18);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var shouldUpdate = function shouldUpdate(test) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    return function (_Component) {
	      _inherits(_class, _Component);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }

	      _class.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return test(this.props, nextProps);
	      };

	      _class.prototype.render = function render() {
	        return factory(this.props);
	      };

	      return _class;
	    }(_react.Component);
	  };
	};

	exports.default = (0, _createHelper2.default)(shouldUpdate, 'shouldUpdate');

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _shouldUpdate = __webpack_require__(37);

	var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

	var _shallowEqual = __webpack_require__(24);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var pure = (0, _shouldUpdate2.default)(function (props, nextProps) {
	  return !(0, _shallowEqual2.default)(props, nextProps);
	});

	exports.default = (0, _createHelper2.default)(pure, 'pure', true, true);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _shouldUpdate = __webpack_require__(37);

	var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

	var _shallowEqual = __webpack_require__(24);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _pick = __webpack_require__(23);

	var _pick2 = _interopRequireDefault(_pick);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var onlyUpdateForKeys = function onlyUpdateForKeys(propKeys) {
	  return (0, _shouldUpdate2.default)(function (props, nextProps) {
	    return !(0, _shallowEqual2.default)((0, _pick2.default)(nextProps, propKeys), (0, _pick2.default)(props, propKeys));
	  });
	};

	exports.default = (0, _createHelper2.default)(onlyUpdateForKeys, 'onlyUpdateForKeys');

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _onlyUpdateForKeys = __webpack_require__(39);

	var _onlyUpdateForKeys2 = _interopRequireDefault(_onlyUpdateForKeys);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var onlyUpdateForPropTypes = function onlyUpdateForPropTypes(BaseComponent) {
	  var propTypes = BaseComponent.propTypes;

	  if (process.env.NODE_ENV !== 'production') {
	    /* eslint-disable global-require */
	    var getDisplayName = __webpack_require__(15).default;
	    /* eslint-enable global-require */
	    if (!propTypes) {
	      /* eslint-disable */
	      console.error('A component without any `propTypes` was passed to ' + '`onlyUpdateForPropTypes()`. Check the implementation of the ' + ('component with display name "' + getDisplayName(BaseComponent) + '".'));
	      /* eslint-enable */
	    }
	  }

	  var propKeys = Object.keys(propTypes || {});
	  var OnlyUpdateForPropTypes = (0, _onlyUpdateForKeys2.default)(propKeys)(BaseComponent);

	  return OnlyUpdateForPropTypes;
	};

	exports.default = (0, _createHelper2.default)(onlyUpdateForPropTypes, 'onlyUpdateForPropTypes', true, true);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _react = __webpack_require__(18);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var withContext = function withContext(childContextTypes, getChildContext) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);

	    var WithContext = function (_Component) {
	      _inherits(WithContext, _Component);

	      function WithContext() {
	        var _temp, _this, _ret;

	        _classCallCheck(this, WithContext);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getChildContext = function () {
	          return getChildContext(_this.props);
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }

	      WithContext.prototype.render = function render() {
	        return factory(this.props);
	      };

	      return WithContext;
	    }(_react.Component);

	    WithContext.childContextTypes = childContextTypes;

	    return WithContext;
	  };
	};

	exports.default = (0, _createHelper2.default)(withContext, 'withContext');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var getContext = function getContext(contextTypes) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    var GetContext = function GetContext(ownerProps, context) {
	      return factory(_extends({}, ownerProps, context));
	    };

	    GetContext.contextTypes = contextTypes;

	    return GetContext;
	  };
	};

	exports.default = (0, _createHelper2.default)(getContext, 'getContext');

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(18);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var lifecycle = function lifecycle(spec) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);

	    if (process.env.NODE_ENV !== 'production' && spec.hasOwnProperty('render')) {
	      console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
	    }

	    /* eslint-disable react/prefer-es6-class */
	    return (0, _react.createClass)(_extends({}, spec, {
	      render: function render() {
	        return factory(_extends({}, this.props, this.state));
	      }
	    }));
	    /* eslint-enable react/prefer-es6-class */
	  };
	};

	exports.default = (0, _createHelper2.default)(lifecycle, 'lifecycle');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	var _getDisplayName = __webpack_require__(15);

	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

	var _isClassComponent = __webpack_require__(20);

	var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var toClass = function toClass(baseComponent) {
	  if ((0, _isClassComponent2.default)(baseComponent)) {
	    return baseComponent;
	  }

	  var ToClass = function (_Component) {
	    _inherits(ToClass, _Component);

	    function ToClass() {
	      _classCallCheck(this, ToClass);

	      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }

	    ToClass.prototype.render = function render() {
	      if (typeof baseComponent === 'string') {
	        return _react2.default.createElement('baseComponent', this.props);
	      }
	      return baseComponent(this.props, this.context);
	    };

	    return ToClass;
	  }(_react.Component);

	  ToClass.displayName = (0, _getDisplayName2.default)(baseComponent);
	  ToClass.propTypes = baseComponent.propTypes;
	  ToClass.contextTypes = baseComponent.contextTypes;
	  ToClass.defaultProps = baseComponent.defaultProps;

	  return ToClass;
	};

	exports.default = toClass;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var setStatic = function setStatic(key, value) {
	  return function (BaseComponent) {
	    /* eslint-disable no-param-reassign */
	    BaseComponent[key] = value;
	    /* eslint-enable no-param-reassign */
	    return BaseComponent;
	  };
	};

	exports.default = (0, _createHelper2.default)(setStatic, 'setStatic', false);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _setStatic = __webpack_require__(45);

	var _setStatic2 = _interopRequireDefault(_setStatic);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var setPropTypes = function setPropTypes(propTypes) {
	  return (0, _setStatic2.default)('propTypes', propTypes);
	};

	exports.default = (0, _createHelper2.default)(setPropTypes, 'setPropTypes', false);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _setStatic = __webpack_require__(45);

	var _setStatic2 = _interopRequireDefault(_setStatic);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var setDisplayName = function setDisplayName(displayName) {
	  return (0, _setStatic2.default)('displayName', displayName);
	};

	exports.default = (0, _createHelper2.default)(setDisplayName, 'setDisplayName', false);

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = compose;
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  return function () {
	    var result = last.apply(undefined, arguments);
	    for (var i = funcs.length - 2; i >= 0; i--) {
	      var f = funcs[i];
	      result = f(result);
	    }
	    return result;
	  };
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createEagerElementUtil = __webpack_require__(17);

	var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

	var _isReferentiallyTransparentFunctionComponent = __webpack_require__(19);

	var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var createEagerElement = function createEagerElement(type, props, children) {
	  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
	  /* eslint-disable */
	  var hasKey = props && props.hasOwnProperty('key');
	  /* eslint-enable */
	  return (0, _createEagerElementUtil2.default)(hasKey, isReferentiallyTransparent, type, props, children);
	};

	exports.default = createEagerElement;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _react = __webpack_require__(18);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var createSink = function createSink(callback) {
	  return function (_Component) {
	    _inherits(Sink, _Component);

	    function Sink() {
	      _classCallCheck(this, Sink);

	      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }

	    Sink.prototype.componentWillMount = function componentWillMount() {
	      callback(this.props);
	    };

	    Sink.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      callback(nextProps);
	    };

	    Sink.prototype.render = function render() {
	      return null;
	    };

	    return Sink;
	  }(_react.Component);
	};

	exports.default = createSink;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _omit = __webpack_require__(29);

	var _omit2 = _interopRequireDefault(_omit);

	var _createEagerElement = __webpack_require__(49);

	var _createEagerElement2 = _interopRequireDefault(_createEagerElement);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var componentFromProp = function componentFromProp(propName) {
	  var Component = function Component(props) {
	    return (0, _createEagerElement2.default)(props[propName], (0, _omit2.default)(props, [propName]));
	  };
	  Component.displayName = 'componentFromProp(' + propName + ')';
	  return Component;
	};

	exports.default = componentFromProp;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	var nest = function nest() {
	  for (var _len = arguments.length, Components = Array(_len), _key = 0; _key < _len; _key++) {
	    Components[_key] = arguments[_key];
	  }

	  var factories = Components.map(_createEagerFactory2.default);
	  var Nest = function Nest(_ref) {
	    var props = _objectWithoutProperties(_ref, []);

	    var children = _ref.children;
	    return factories.reduceRight(function (child, factory) {
	      return factory(props, child);
	    }, children);
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    /* eslint-disable global-require */
	    var getDisplayName = __webpack_require__(15).default;
	    /* eslint-enable global-require */
	    var displayNames = Components.map(getDisplayName);
	    Nest.displayName = 'nest(' + displayNames.join(', ') + ')';
	  }

	  return Nest;
	};

	exports.default = nest;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _hoistNonReactStatics = __webpack_require__(54);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var hoistStatics = function hoistStatics(higherOrderComponent) {
	  return function (BaseComponent) {
	    var NewComponent = higherOrderComponent(BaseComponent);
	    (0, _hoistNonReactStatics2.default)(NewComponent, BaseComponent);
	    return NewComponent;
	  };
	};

	exports.default = hoistStatics;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(161);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.componentFromStreamWithConfig = undefined;

	var _react = __webpack_require__(18);

	var _changeEmitter = __webpack_require__(56);

	var _symbolObservable = __webpack_require__(57);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	var _setObservableConfig = __webpack_require__(59);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var componentFromStreamWithConfig = exports.componentFromStreamWithConfig = function componentFromStreamWithConfig(config) {
	  return function (propsToVdom) {
	    return function (_Component) {
	      _inherits(ComponentFromStream, _Component);

	      function ComponentFromStream() {
	        var _config$fromESObserva;

	        var _temp, _this, _ret;

	        _classCallCheck(this, ComponentFromStream);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { vdom: null }, _this.propsEmitter = (0, _changeEmitter.createChangeEmitter)(), _this.props$ = config.fromESObservable((_config$fromESObserva = {
	          subscribe: function subscribe(observer) {
	            var unsubscribe = _this.propsEmitter.listen(function (props) {
	              return observer.next(props);
	            });
	            return { unsubscribe: unsubscribe };
	          }
	        }, _config$fromESObserva[_symbolObservable2.default] = function () {
	          return this;
	        }, _config$fromESObserva)), _this.vdom$ = config.toESObservable(propsToVdom(_this.props$)), _temp), _possibleConstructorReturn(_this, _ret);
	      }

	      // Stream of props


	      // Stream of vdom


	      ComponentFromStream.prototype.componentWillMount = function componentWillMount() {
	        var _this2 = this;

	        // Subscribe to child prop changes so we know when to re-render
	        this.subscription = this.vdom$.subscribe({
	          next: function next(vdom) {
	            _this2.setState({ vdom: vdom });
	          }
	        });
	        this.propsEmitter.emit(this.props);
	      };

	      ComponentFromStream.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        // Receive new props from the owner
	        this.propsEmitter.emit(nextProps);
	      };

	      ComponentFromStream.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        return nextState.vdom !== this.state.vdom;
	      };

	      ComponentFromStream.prototype.componentWillUnmount = function componentWillUnmount() {
	        // Clean-up subscription before un-mounting
	        this.subscription.unsubscribe();
	      };

	      ComponentFromStream.prototype.render = function render() {
	        return this.state.vdom;
	      };

	      return ComponentFromStream;
	    }(_react.Component);
	  };
	};

	var componentFromStream = componentFromStreamWithConfig(_setObservableConfig.config);

	exports.default = componentFromStream;

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createChangeEmitter = exports.createChangeEmitter = function createChangeEmitter() {
	  var currentListeners = [];
	  var nextListeners = currentListeners;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  function listen(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function () {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  function emit() {
	    currentListeners = nextListeners;
	    var listeners = currentListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i].apply(listeners, arguments);
	    }
	  }

	  return {
	    listen: listen,
	    emit: emit
	  };
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	module.exports = __webpack_require__(58)(global || window || undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var _config = {
	  fromESObservable: null,
	  toESObservable: null
	};

	var configureObservable = function configureObservable(c) {
	  _config = c;
	};

	var config = exports.config = {
	  fromESObservable: function fromESObservable(observable) {
	    return typeof _config.fromESObservable === 'function' ? _config.fromESObservable(observable) : observable;
	  },
	  toESObservable: function toESObservable(stream) {
	    return typeof _config.toESObservable === 'function' ? _config.toESObservable(stream) : stream;
	  }
	};

	exports.default = configureObservable;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.mapPropsStreamWithConfig = undefined;

	var _symbolObservable = __webpack_require__(57);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	var _createEagerFactory = __webpack_require__(16);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	var _createHelper = __webpack_require__(12);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _componentFromStream = __webpack_require__(55);

	var _setObservableConfig = __webpack_require__(59);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var identity = function identity(t) {
	  return t;
	};
	var componentFromStream = (0, _componentFromStream.componentFromStreamWithConfig)({
	  fromESObservable: identity,
	  toESObservable: identity
	});

	var mapPropsStreamWithConfig = exports.mapPropsStreamWithConfig = function mapPropsStreamWithConfig(config) {
	  return function (transform) {
	    return function (BaseComponent) {
	      var factory = (0, _createEagerFactory2.default)(BaseComponent);
	      var fromESObservable = config.fromESObservable;
	      var toESObservable = config.toESObservable;

	      return componentFromStream(function (props$) {
	        var _ref;

	        return _ref = {
	          subscribe: function subscribe(observer) {
	            var subscription = toESObservable(transform(fromESObservable(props$))).subscribe({
	              next: function next(childProps) {
	                return observer.next(factory(childProps));
	              }
	            });
	            return {
	              unsubscribe: function unsubscribe() {
	                return subscription.unsubscribe();
	              }
	            };
	          }
	        }, _ref[_symbolObservable2.default] = function () {
	          return this;
	        }, _ref;
	      });
	    };
	  };
	};

	var mapPropsStream = mapPropsStreamWithConfig(_setObservableConfig.config);

	exports.default = (0, _createHelper2.default)(mapPropsStream, 'mapPropsStream');

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createEventHandlerWithConfig = undefined;

	var _symbolObservable = __webpack_require__(57);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	var _changeEmitter = __webpack_require__(56);

	var _setObservableConfig = __webpack_require__(59);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var createEventHandlerWithConfig = exports.createEventHandlerWithConfig = function createEventHandlerWithConfig(config) {
	  return function () {
	    var _config$fromESObserva;

	    var emitter = (0, _changeEmitter.createChangeEmitter)();
	    var stream = config.fromESObservable((_config$fromESObserva = {
	      subscribe: function subscribe(observer) {
	        var unsubscribe = emitter.listen(function (value) {
	          return observer.next(value);
	        });
	        return { unsubscribe: unsubscribe };
	      }
	    }, _config$fromESObserva[_symbolObservable2.default] = function () {
	      return this;
	    }, _config$fromESObserva));
	    return {
	      handler: emitter.emit,
	      stream: stream
	    };
	  };
	};

	var createEventHandler = createEventHandlerWithConfig(_setObservableConfig.config);

	exports.default = createEventHandler;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The base UI component used for rendering.
	 * All containers should use composition to extend this component.
	 *
	 * @abstract
	 */
	var Container = function Container(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'container here'
	  );
	};

	exports.default = Container;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _recompose = __webpack_require__(10);

	var _container = __webpack_require__(62);

	var _container2 = _interopRequireDefault(_container);

	var _withConnectToStore = __webpack_require__(5);

	var _withConnectToStore2 = _interopRequireDefault(_withConnectToStore);

	var _withInitialSideEffects = __webpack_require__(9);

	var _withInitialSideEffects2 = _interopRequireDefault(_withInitialSideEffects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Add the fields that are specific for this container.
	 */
	var withProps = (0, _recompose.defaultProps)({
		meta: {},
		ui: {}
	});

	exports.default = (0, _recompose.compose)(withProps, _withConnectToStore2.default, _withInitialSideEffects2.default)(_container2.default);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _recompose = __webpack_require__(10);

	var _container = __webpack_require__(62);

	var _container2 = _interopRequireDefault(_container);

	var _withConnectToStore = __webpack_require__(5);

	var _withConnectToStore2 = _interopRequireDefault(_withConnectToStore);

	var _withInitialSideEffects = __webpack_require__(9);

	var _withInitialSideEffects2 = _interopRequireDefault(_withInitialSideEffects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Add the fields that are specific for this container.
	 */
	var withProps = (0, _recompose.defaultProps)({
		meta: {
			page_template: 'default',
			level: 1,
			parent_id: null,
			post_format: null,
			terms: []
		},
		ui: {}
	});

	exports.default = (0, _recompose.compose)(withProps, _withConnectToStore2.default, _withInitialSideEffects2.default)(_container2.default);

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _recompose = __webpack_require__(10);

	var _container = __webpack_require__(62);

	var _container2 = _interopRequireDefault(_container);

	var _withConnectToStore = __webpack_require__(5);

	var _withConnectToStore2 = _interopRequireDefault(_withConnectToStore);

	var _withInitialSideEffects = __webpack_require__(9);

	var _withInitialSideEffects2 = _interopRequireDefault(_withInitialSideEffects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Add the fields that are specific for this container.
	 */
	var withProps = (0, _recompose.defaultProps)({
		meta: {},
		ui: {}
	});

	exports.default = (0, _recompose.compose)(withProps, _withConnectToStore2.default, _withInitialSideEffects2.default)(_container2.default);

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function () {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var action = arguments[1];

		return state;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _containers;

	exports.makeContainer = makeContainer;

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	var _brokenContainer = __webpack_require__(63);

	var _brokenContainer2 = _interopRequireDefault(_brokenContainer);

	var _postMetaContainer = __webpack_require__(64);

	var _postMetaContainer2 = _interopRequireDefault(_postMetaContainer);

	var _commentMetaContainer = __webpack_require__(65);

	var _commentMetaContainer2 = _interopRequireDefault(_commentMetaContainer);

	var _termMetaContainer = __webpack_require__(68);

	var _termMetaContainer2 = _interopRequireDefault(_termMetaContainer);

	var _userMetaContainer = __webpack_require__(80);

	var _userMetaContainer2 = _interopRequireDefault(_userMetaContainer);

	var _constants = __webpack_require__(69);

	var ContainerConst = _interopRequireWildcard(_constants);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * A dictionary of the supported containers.
	 *
	 * @type {Object}
	 */
	var containers = (_containers = {}, _defineProperty(_containers, ContainerConst.TYPE_POST_META, _postMetaContainer2.default), _defineProperty(_containers, ContainerConst.TYPE_COMMENT_META, _commentMetaContainer2.default), _defineProperty(_containers, ContainerConst.TYPE_TERM_META, _termMetaContainer2.default), _defineProperty(_containers, ContainerConst.TYPE_USER_META, _userMetaContainer2.default), _containers);

	/**
	 * Determine which container should be rendered for the specified type.
	 *
	 * @param  {String} type
	 * @param  {Object} props
	 * @return {React.Element}
	 */
	function makeContainer(type) {
	  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var Component = containers[type] || _brokenContainer2.default;

	  return _react2.default.createElement(Component, props);
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _recompose = __webpack_require__(10);

	var _container = __webpack_require__(62);

	var _container2 = _interopRequireDefault(_container);

	var _withConnectToStore = __webpack_require__(5);

	var _withConnectToStore2 = _interopRequireDefault(_withConnectToStore);

	var _withInitialSideEffects = __webpack_require__(9);

	var _withInitialSideEffects2 = _interopRequireDefault(_withInitialSideEffects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Add the fields that are specific for this container.
	 */
	var withProps = (0, _recompose.defaultProps)({
		meta: {
			level: 1
		},
		ui: {}
	});

	exports.default = (0, _recompose.compose)(withProps, _withConnectToStore2.default, _withInitialSideEffects2.default)(_container2.default);

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TYPE_POST_META = exports.TYPE_POST_META = 'Post_Meta';
	var TYPE_COMMENT_META = exports.TYPE_COMMENT_META = 'Comment_Meta';
	var TYPE_TERM_META = exports.TYPE_TERM_META = 'Term_Meta';
	var TYPE_USER_META = exports.TYPE_USER_META = 'User_Meta';

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.createSelectboxChannel = createSelectboxChannel;
	exports.createCheckableChannel = createCheckableChannel;

	var _jquery = __webpack_require__(71);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _reduxSaga = __webpack_require__(72);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Create a Saga Channel that will listen for DOM changes on specified selectbox.
	 * The buffer is used to emit the initial value of the selectbox when the channel is created.
	 *
	 * @param  {string} selector
	 * @return {Object}
	 */
	function createSelectboxChannel(selector) {
		return (0, _reduxSaga.eventChannel)(function (emit) {
			var $select = (0, _jquery2.default)(selector);

			// Emit the value of selectbox through the channel.
			var changeHandler = function changeHandler(event) {
				emit({
					value: $select.val(),
					element: $select.get(0),
					option: $select.find(':selected').first().get(0)
				});
			};

			// Cancel the subscription.
			var unsubscribe = function unsubscribe() {
				$select.off('change', changeHandler);
			};

			// Close the channel since the element doesn't exists.
			if (!$select.length) {
				emit(_reduxSaga.END);
				return unsubscribe;
			}

			// Setup the subscription.
			$select.on('change', changeHandler);

			// Emit the initial value.
			changeHandler();

			return unsubscribe;
		}, _reduxSaga.buffers.fixed(1));
	}

	/**
	 * Create a Saga Channel that will listen for DOM changes on specified radios/checkboxes.
	 * The buffer is used to emit the initial value of the inputs when the channel is created.
	 *
	 * @param  {string} selector
	 * @return {Object}
	 */
	function createCheckableChannel(selector) {
		return (0, _reduxSaga.eventChannel)(function (emit) {
			var $container = (0, _jquery2.default)(selector);

			// Emit the value of inputs through the channel.
			var changeHandler = function changeHandler(event) {
				var elements = $container.find('input:checked').get();
				var values = elements.map(function (element) {
					return element.value;
				});

				emit({
					values: values,
					elements: elements
				});
			};

			// Cancel the subscription.
			var unsubscribe = function unsubscribe() {
				$container.off('change', 'input', changeHandler);
			};

			// Close the channel since the container doesn't exists.
			if (!$container.length) {
				emit(_reduxSaga.END);
				return unsubscribe;
			}

			// Setup the subscription.
			$container.on('change', 'input', changeHandler);

			// Emit the initial value.
			changeHandler();

			return unsubscribe;
		}, _reduxSaga.buffers.fixed(1));
	}

/***/ },
/* 71 */
/***/ function(module, exports) {

	(function() { module.exports = this["jQuery"]; }());

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(367);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.SET_META:
	      return setMeta(state, action);
	    case _actions.SET_UI:
	      return setUI(state, action);
	    default:
	      return state;
	  }
	};

	var _objectPathImmutable = __webpack_require__(74);

	var _objectPathImmutable2 = _interopRequireDefault(_objectPathImmutable);

	var _actions = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Update the meta fields for the specified container.
	 *
	 * @param  {Object} state
	 * @param  {Object} action
	 * @return {Object}
	 */
	function setMeta(state, action) {
	  var _action$payload = action.payload,
	      containerId = _action$payload.containerId,
	      meta = _action$payload.meta;


	  return _objectPathImmutable2.default.assign(state, containerId + '.meta', meta);
	}

	/**
	 * Update the UI fields for the specified container.
	 *
	 * @param  {Object} state
	 * @param  {Object} action
	 * @return {Object}
	 */


	/**
	 * The reducer that handles manipulation to container's state.
	 *
	 * @param  {Object} state
	 * @param  {Object} action
	 * @return {Object}
	 */


	function setUI(state, action) {
	  var _action$payload2 = action.payload,
	      containerId = _action$payload2.containerId,
	      ui = _action$payload2.ui;


	  return _objectPathImmutable2.default.assign(state, containerId + '.ui', ui);
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(267);

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getContainers = exports.getContainers = function getContainers(state) {
	  return state.containers;
	};
	var getContainerById = exports.getContainerById = function getContainerById(state, containerId) {
	  return state.containers[containerId];
	};
	var canProcessAction = exports.canProcessAction = function canProcessAction(state, containerId, containerType) {
	  return getContainerById(state, containerId).type === containerType;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.workerSetupContainer = workerSetupContainer;
	exports.workerToggleMetaBoxVisibility = workerToggleMetaBoxVisibility;
	exports.default = foreman;

	var _reduxSaga = __webpack_require__(72);

	var _effects = __webpack_require__(77);

	var _selectors = __webpack_require__(75);

	var _actions = __webpack_require__(7);

	var _marked = [workerSetupContainer, workerToggleMetaBoxVisibility, foreman].map(regeneratorRuntime.mark);

	/**
	 * Setup the initial state of the container.
	 *
	 * @param  {Object} action
	 * @return {void}
	 */
	function workerSetupContainer(action) {
		var defaults, _action$payload, containerId, meta, ui;

		return regeneratorRuntime.wrap(function workerSetupContainer$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						defaults = {
							has_error: false,
							is_dirty: false,
							is_visible: true,
							classes: []
						};
						_action$payload = action.payload, containerId = _action$payload.containerId, meta = _action$payload.meta, ui = _action$payload.ui;


						ui = _extends({}, defaults, ui);

						_context.next = 5;
						return (0, _effects.put)((0, _actions.setMeta)({ containerId: containerId, meta: meta }));

					case 5:
						_context.next = 7;
						return (0, _effects.put)((0, _actions.setUI)({ containerId: containerId, ui: ui }));

					case 7:
					case 'end':
						return _context.stop();
				}
			}
		}, _marked[0], this);
	}

	/**
	 * Show or hide the container's metabox.
	 *
	 * @param  {Object} action
	 * @return {void}
	 */
	function workerToggleMetaBoxVisibility(action) {
		var containerId, container, el;
		return regeneratorRuntime.wrap(function workerToggleMetaBoxVisibility$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						containerId = action.payload.containerId;
						_context2.next = 3;
						return (0, _effects.select)(_selectors.getContainerById, containerId);

					case 3:
						container = _context2.sent;
						_context2.next = 6;
						return (0, _effects.call)([document, document.querySelector], '#' + containerId);

					case 6:
						el = _context2.sent;

						if (el) {
							_context2.next = 9;
							break;
						}

						throw new Error('Cannot find the metabox for container "' + containerId + '"');

					case 9:

						el.style.display = container.ui.is_visible ? 'block' : 'none';

					case 10:
					case 'end':
						return _context2.stop();
				}
			}
		}, _marked[1], this);
	}

	/**
	 * Start to work.
	 *
	 * @return {void}
	 */
	function foreman() {
		return regeneratorRuntime.wrap(function foreman$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.next = 2;
						return [(0, _reduxSaga.takeEvery)(_actions.SETUP_CONTAINER, workerSetupContainer), (0, _reduxSaga.takeEvery)(_actions.SET_UI, workerToggleMetaBoxVisibility)];

					case 2:
					case 'end':
						return _context3.stop();
				}
			}
		}, _marked[2], this);
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(78);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(366);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.workerSyncPageTemplate = workerSyncPageTemplate;
	exports.workerSyncParentId = workerSyncParentId;
	exports.workerSyncPostFormat = workerSyncPostFormat;
	exports.workerSyncTerms = workerSyncTerms;
	exports.workerSetupContainer = workerSetupContainer;
	exports.workerCheckVisibility = workerCheckVisibility;
	exports.default = foreman;

	var _reduxSaga = __webpack_require__(72);

	var _effects = __webpack_require__(77);

	var _lodash = __webpack_require__(3);

	var _events = __webpack_require__(70);

	var _constants = __webpack_require__(1);

	var _selectors = __webpack_require__(75);

	var _actions = __webpack_require__(7);

	var _constants2 = __webpack_require__(69);

	var _marked = [workerSyncPageTemplate, workerSyncParentId, workerSyncPostFormat, workerSyncTerms, workerSetupContainer, workerCheckVisibility, foreman].map(regeneratorRuntime.mark);

	/**
	 * Keep in sync the `page_template` property.
	 *
	 * @param  {string} containerId
	 * @return {void}
	 */
	function workerSyncPageTemplate(containerId) {
		var channel, _ref, value;

		return regeneratorRuntime.wrap(function workerSyncPageTemplate$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return (0, _effects.call)(_events.createSelectboxChannel, 'select#page_template');

					case 2:
						channel = _context.sent;

					case 3:
						if (false) {
							_context.next = 12;
							break;
						}

						_context.next = 6;
						return (0, _effects.take)(channel);

					case 6:
						_ref = _context.sent;
						value = _ref.value;
						_context.next = 10;
						return (0, _effects.put)((0, _actions.setMeta)({
							containerId: containerId,
							meta: {
								page_template: value
							}
						}));

					case 10:
						_context.next = 3;
						break;

					case 12:
					case 'end':
						return _context.stop();
				}
			}
		}, _marked[0], this);
	}

	/**
	 * Keep in sync the `parent_id` property.
	 *
	 * @param  {string} containerId
	 * @return {void}
	 */
	function workerSyncParentId(containerId) {
		var channel, _ref2, _value, option, level, matches;

		return regeneratorRuntime.wrap(function workerSyncParentId$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return (0, _effects.call)(_events.createSelectboxChannel, 'select#parent_id');

					case 2:
						channel = _context2.sent;

					case 3:
						if (false) {
							_context2.next = 17;
							break;
						}

						_context2.next = 6;
						return (0, _effects.take)(channel);

					case 6:
						_ref2 = _context2.sent;
						_value = _ref2.value;
						option = _ref2.option;


						_value = parseInt(_value, 10);
						_value = isNaN(_value) ? null : _value;

						level = 1;


						if (option.className) {
							matches = option.className.match(/^level-(\d+)/);


							if (matches) {
								level = parseInt(matches[1], 10) + 2;
							}
						}

						_context2.next = 15;
						return (0, _effects.put)((0, _actions.setMeta)({
							containerId: containerId,
							meta: {
								parent_id: _value,
								level: level
							}
						}));

					case 15:
						_context2.next = 3;
						break;

					case 17:
					case 'end':
						return _context2.stop();
				}
			}
		}, _marked[1], this);
	}

	/**
	 * Keep in sync the `post_format` property.
	 *
	 * @param  {string} containerId
	 * @return {void}
	 */
	function workerSyncPostFormat(containerId) {
		var channel, _ref3, values;

		return regeneratorRuntime.wrap(function workerSyncPostFormat$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.next = 2;
						return (0, _effects.call)(_events.createCheckableChannel, '#post-formats-select');

					case 2:
						channel = _context3.sent;

					case 3:
						if (false) {
							_context3.next = 12;
							break;
						}

						_context3.next = 6;
						return (0, _effects.take)(channel);

					case 6:
						_ref3 = _context3.sent;
						values = _ref3.values;
						_context3.next = 10;
						return (0, _effects.put)((0, _actions.setMeta)({
							containerId: containerId,
							meta: {
								post_format: values[0]
							}
						}));

					case 10:
						_context3.next = 3;
						break;

					case 12:
					case 'end':
						return _context3.stop();
				}
			}
		}, _marked[2], this);
	}

	/**
	 * Keep in sync the `terms` property.
	 *
	 * @param  {string} containerId
	 * @return {void}
	 */
	function workerSyncTerms(containerId) {
		var container, channel, _ref4, _values;

		return regeneratorRuntime.wrap(function workerSyncTerms$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.next = 2;
						return (0, _effects.select)(_selectors.getContainerById, containerId);

					case 2:
						container = _context4.sent;
						_context4.next = 5;
						return (0, _effects.call)(_events.createCheckableChannel, '#' + container.settings.show_on.tax_slug + 'checklist');

					case 5:
						channel = _context4.sent;

					case 6:
						if (false) {
							_context4.next = 16;
							break;
						}

						_context4.next = 9;
						return (0, _effects.take)(channel);

					case 9:
						_ref4 = _context4.sent;
						_values = _ref4.values;


						_values = _values.map(function (value) {
							return parseInt(value, 10);
						});

						_context4.next = 14;
						return (0, _effects.put)((0, _actions.setMeta)({
							containerId: containerId,
							meta: {
								terms: _values
							}
						}));

					case 14:
						_context4.next = 6;
						break;

					case 16:
					case 'end':
						return _context4.stop();
				}
			}
		}, _marked[3], this);
	}

	/**
	 * Check whether the container should be visible.
	 *
	 * @param  {boolean} isVisible
	 * @param  {Object}  settings
	 * @param  {Object}  meta
	 * @return {boolean}
	 */
	function checkTemplateNames(isVisible, settings, meta) {
		var page_template = meta.page_template;
		var _window = window,
		    typenow = _window.typenow;


		if (typenow === _constants.TYPE_NOW_PAGE && settings.template_names.indexOf(page_template) === -1) {
			isVisible = false;
		}

		return isVisible;
	}

	/**
	 * Check whether the container should be visible.
	 *
	 * @param  {boolean} isVisible
	 * @param  {Object}  settings
	 * @param  {Object}  meta
	 * @return {boolean}
	 */
	function checkNotInTemplateNames(isVisible, settings, meta) {
		var page_template = meta.page_template;
		var _window2 = window,
		    typenow = _window2.typenow;


		if (typenow === _constants.TYPE_NOW_PAGE && settings.not_in_template_names.indexOf(page_template) !== -1) {
			isVisible = false;
		}

		return isVisible;
	}

	/**
	 * Check whether the container should be visible.
	 *
	 * @param  {boolean} isVisible
	 * @param  {Object}  settings
	 * @param  {Object}  meta
	 * @return {boolean}
	 */
	function checkParentPageId(isVisible, settings, meta) {
		var parent_id = meta.parent_id;


		if (parent_id != settings.parent_page_id) {
			isVisible = false;
		}

		return isVisible;
	}

	/**
	 * Check whether the container should be visible.
	 *
	 * @param  {boolean} isVisible
	 * @param  {Object}  settings
	 * @param  {Object}  meta
	 * @return {boolean}
	 */
	function checkLevelLimit(isVisible, settings, meta) {
		var level = meta.level;


		if (level != settings.level_limit) {
			isVisible = false;
		}

		return isVisible;
	}

	/**
	 * Check whether the container should be visible.
	 *
	 * @param  {boolean} isVisible
	 * @param  {Object}  settings
	 * @param  {Object}  meta
	 * @return {boolean}
	 */
	function checkPostFormats(isVisible, settings, meta) {
		var post_format = meta.post_format;


		if (settings.post_formats.indexOf(post_format) === -1) {
			isVisible = false;
		}

		return isVisible;
	}

	/**
	 * Check whether the container should be visible.
	 *
	 * @param  {boolean} isVisible
	 * @param  {Object}  settings
	 * @param  {Object}  meta
	 * @return {boolean}
	 */
	function checkTaxSlug(isVisible, settings, meta) {
		var tax_term_id = meta.tax_term_id;


		if (meta.terms.indexOf(tax_term_id) === -1) {
			isVisible = false;
		}

		return isVisible;
	}

	/**
	 * Setup the initial state of the container.
	 *
	 * @param  {Object} action
	 * @return {void}
	 */
	function workerSetupContainer(action) {
		var containerId;
		return regeneratorRuntime.wrap(function workerSetupContainer$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						containerId = action.payload.containerId;

						// Don't do anything if the type isn't correct.

						_context5.next = 3;
						return (0, _effects.select)(_selectors.canProcessAction, containerId, _constants2.TYPE_POST_META);

					case 3:
						if (_context5.sent) {
							_context5.next = 5;
							break;
						}

						return _context5.abrupt('return');

					case 5:
						_context5.next = 7;
						return (0, _effects.fork)(workerSyncPageTemplate, containerId);

					case 7:
						_context5.next = 9;
						return (0, _effects.fork)(workerSyncParentId, containerId);

					case 9:
						_context5.next = 11;
						return (0, _effects.fork)(workerSyncPostFormat, containerId);

					case 11:
						_context5.next = 13;
						return (0, _effects.fork)(workerSyncTerms, containerId);

					case 13:
					case 'end':
						return _context5.stop();
				}
			}
		}, _marked[4], this);
	}

	/**
	 * Keep in sync the `is_visible` property.
	 *
	 * @param  {Object} action
	 * @return {void}
	 */
	function workerCheckVisibility(action) {
		var containerId, container, checkers, isVisible;
		return regeneratorRuntime.wrap(function workerCheckVisibility$(_context6) {
			while (1) {
				switch (_context6.prev = _context6.next) {
					case 0:
						containerId = action.payload.containerId;

						// Don't do anything if the type isn't correct.

						_context6.next = 3;
						return (0, _effects.select)(_selectors.canProcessAction, containerId, _constants2.TYPE_POST_META);

					case 3:
						if (_context6.sent) {
							_context6.next = 5;
							break;
						}

						return _context6.abrupt('return');

					case 5:
						_context6.next = 7;
						return (0, _effects.select)(_selectors.getContainerById, containerId);

					case 7:
						container = _context6.sent;
						checkers = {
							checkTemplateNames: checkTemplateNames,
							checkNotInTemplateNames: checkNotInTemplateNames,
							checkParentPageId: checkParentPageId,
							checkLevelLimit: checkLevelLimit,
							checkPostFormats: checkPostFormats,
							checkTaxSlug: checkTaxSlug
						};
						isVisible = (0, _lodash.reduce)(container.settings.show_on, function (isVisible, value, key) {
							var checker = (0, _lodash.camelCase)('check_' + key);

							if (checkers[checker]) {
								if (!value || (0, _lodash.isArray)(value) && (0, _lodash.isEmpty)(value)) {
									return isVisible;
								}

								isVisible = checkers[checker](isVisible, container.settings.show_on, container.meta);
							}

							return isVisible;
						}, true);
						_context6.next = 12;
						return (0, _effects.put)((0, _actions.setUI)({
							containerId: containerId,
							ui: {
								is_visible: isVisible
							}
						}));

					case 12:
					case 'end':
						return _context6.stop();
				}
			}
		}, _marked[5], this);
	}

	/**
	 * Start to work.
	 *
	 * @return {void}
	 */
	function foreman() {
		return regeneratorRuntime.wrap(function foreman$(_context7) {
			while (1) {
				switch (_context7.prev = _context7.next) {
					case 0:
						_context7.next = 2;
						return [(0, _reduxSaga.takeEvery)(_actions.SETUP_CONTAINER, workerSetupContainer), (0, _reduxSaga.takeEvery)(_actions.SET_META, workerCheckVisibility)];

					case 2:
					case 'end':
						return _context7.stop();
				}
			}
		}, _marked[6], this);
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _recompose = __webpack_require__(10);

	var _container = __webpack_require__(62);

	var _container2 = _interopRequireDefault(_container);

	var _withConnectToStore = __webpack_require__(5);

	var _withConnectToStore2 = _interopRequireDefault(_withConnectToStore);

	var _withInitialSideEffects = __webpack_require__(9);

	var _withInitialSideEffects2 = _interopRequireDefault(_withInitialSideEffects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Add the fields that are specific for this container.
	 */
	var withProps = (0, _recompose.defaultProps)({
		meta: {
			role: null
		},
		ui: {}
	});

	exports.default = (0, _recompose.compose)(withProps, _withConnectToStore2.default, _withInitialSideEffects2.default)(_container2.default);

/***/ }
/******/ ]);