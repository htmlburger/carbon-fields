this["carbon.core"] =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+5vj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PAGE_NOW_PAGE = exports.PAGE_NOW_PAGE = 'page.php';
var PAGE_NOW_WIDGETS = exports.PAGE_NOW_WIDGETS = 'widgets.php';
var PAGE_NOW_CUSTOMIZE = exports.PAGE_NOW_CUSTOMIZE = 'customize.php';
var PAGE_NOW_MENUS = exports.PAGE_NOW_MENUS = 'nav-menus.php';
var KEY_ENTER = exports.KEY_ENTER = 13;

/***/ }),

/***/ "+E39":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("+E39");

/***/ }),

/***/ "+ZMJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("+ZMJ");

/***/ }),

/***/ "+mkE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HiddenField = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _text = __webpack_require__("zLaU");

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a hidden input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
/**
 * The external dependencies.
 */
var HiddenField = exports.HiddenField = function HiddenField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		_field2.default,
		{ field: field, className: 'hidden' },
		_react2.default.createElement('input', (0, _extends3.default)({
			type: 'hidden',
			id: field.id,
			name: name,
			value: field.value,
			disabled: !field.ui.is_visible,
			className: 'hidden-text',
			onChange: handleChange
		}, field.attributes))
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
HiddenField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.string,
		attributes: _propTypes2.default.object
	}),
	handleChange: _propTypes2.default.func
};

/**
 * Enhance the component.
 *
 * @type {React.Component}
 */
var EnhancedHiddenField = (0, _recompose.setStatic)('type', [_constants.TYPE_HIDDEN])((0, _text.enhance)(HiddenField));

exports.default = EnhancedHiddenField;

/***/ }),

/***/ "+sbl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_React$Component) {
	_inherits(Option, _React$Component);

	function Option(props) {
		_classCallCheck(this, Option);

		var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.onFocus = _this.onFocus.bind(_this);
		return _this;
	}

	_createClass(Option, [{
		key: 'blockEvent',
		value: function blockEvent(event) {
			event.preventDefault();
			event.stopPropagation();
			if (event.target.tagName !== 'A' || !('href' in event.target)) {
				return;
			}
			if (event.target.target) {
				window.open(event.target.href, event.target.target);
			} else {
				window.location.href = event.target.href;
			}
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onSelect(this.props.option, event);
		}
	}, {
		key: 'handleMouseEnter',
		value: function handleMouseEnter(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleMouseMove',
		value: function handleMouseMove(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'onFocus',
		value: function onFocus(event) {
			if (!this.props.isFocused) {
				this.props.onFocus(this.props.option, event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    option = _props.option,
			    instancePrefix = _props.instancePrefix,
			    optionIndex = _props.optionIndex;

			var className = (0, _classnames2.default)(this.props.className, option.className);

			return option.disabled ? _react2.default.createElement(
				'div',
				{ className: className,
					onMouseDown: this.blockEvent,
					onClick: this.blockEvent },
				this.props.children
			) : _react2.default.createElement(
				'div',
				{ className: className,
					style: option.style,
					role: 'option',
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseMove: this.handleMouseMove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd,
					id: instancePrefix + '-option-' + optionIndex,
					title: option.title },
				this.props.children
			);
		}
	}]);

	return Option;
}(_react2.default.Component);

;

Option.propTypes = {
	children: _propTypes2.default.node,
	className: _propTypes2.default.string, // className (based on mouse position)
	instancePrefix: _propTypes2.default.string.isRequired, // unique prefix for the ids (used for aria)
	isDisabled: _propTypes2.default.bool, // the option is disabled
	isFocused: _propTypes2.default.bool, // the option is focused
	isSelected: _propTypes2.default.bool, // the option is selected
	onFocus: _propTypes2.default.func, // method to handle mouseEnter on option element
	onSelect: _propTypes2.default.func, // method to handle click on option element
	onUnfocus: _propTypes2.default.func, // method to handle mouseLeave on option element
	option: _propTypes2.default.object.isRequired, // object that is base for that option
	optionIndex: _propTypes2.default.number // index of the option, used to generate unique ids for aria
};

exports.default = Option;

/***/ }),

/***/ "+tPU":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("+tPU");

/***/ }),

/***/ "//Fk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("U5ju"), __esModule: true };

/***/ }),

/***/ "/Nb7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.toggleVisibility = toggleVisibility;
exports.workerSetupVisibility = workerSetupVisibility;
exports.workerToggleVisibility = workerToggleVisibility;
exports.workerCheckVisibility = workerCheckVisibility;
exports.workerTogglePostBox = workerTogglePostBox;
exports.default = foreman;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _effects = __webpack_require__("egdi");

var _events = __webpack_require__("x1uS");

var _constants = __webpack_require__("+5vj");

var _actions = __webpack_require__("vVye");

var _selectors = __webpack_require__("pL4W");

var _conditions = __webpack_require__("f5wq");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(toggleVisibility),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerSetupVisibility),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(workerToggleVisibility),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(workerCheckVisibility),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(workerTogglePostBox),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Show or hide the container.
 *
 * @param  {String} containerId
 * @return {void}
 */
function toggleVisibility(containerId) {
  var container, el, fieldset;
  return _regenerator2.default.wrap(function toggleVisibility$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)(_selectors.getContainerById, containerId);

        case 2:
          container = _context.sent;
          _context.next = 5;
          return (0, _effects.call)([document, document.querySelector], '#' + containerId);

        case 5:
          el = _context.sent;
          _context.next = 8;
          return (0, _effects.call)([document, document.querySelector], '#' + containerId + ' fieldset');

        case 8:
          fieldset = _context.sent;

          if (el) {
            _context.next = 11;
            break;
          }

          throw new Error('Could not find the metabox for container "' + containerId + '".');

        case 11:

          el.style.display = container.ui.is_visible ? 'block' : 'none';
          fieldset.disabled = !container.ui.is_visible;

        case 13:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/**
 * Setup the initial visibility of the container.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.containerId
 * @return {void}
 */
function workerSetupVisibility(_ref) {
  var containerId = _ref.payload.containerId;
  return _regenerator2.default.wrap(function workerSetupVisibility$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.call)(toggleVisibility, containerId);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/**
 * Show/hide the containers.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @return {void}
 */
function workerToggleVisibility(_ref2) {
  var payload = _ref2.payload;
  var id;
  return _regenerator2.default.wrap(function workerToggleVisibility$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = _regenerator2.default.keys(payload);

        case 1:
          if ((_context3.t1 = _context3.t0()).done) {
            _context3.next = 7;
            break;
          }

          id = _context3.t1.value;
          _context3.next = 5;
          return (0, _effects.call)(toggleVisibility, id);

        case 5:
          _context3.next = 1;
          break;

        case 7:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

/**
 * Check whether the container should be visible or hidden.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @return {void}
 */
function workerCheckVisibility(_ref3) {
  var payload = _ref3.payload;
  var containers, id, container;
  return _regenerator2.default.wrap(function workerCheckVisibility$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.select)(_selectors.getContainers);

        case 2:
          containers = _context4.sent;


          for (id in payload) {
            container = containers[id];


            payload[id] = {
              is_visible: (0, _conditions.evaluteConditions)(container.conditions, container.meta)
            };
          }

          _context4.next = 6;
          return (0, _effects.put)((0, _actions.setContainerUI)(payload));

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

/**
 * Notify everyone that the container is expanded or collapsed.
 *
 * @return {void}
 */
function workerTogglePostBox() {
  var channel, _ref4, event, $container;

  return _regenerator2.default.wrap(function workerTogglePostBox$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.call)(_events.createClickChannel, '#normal-sortables', '.carbon-box button.handlediv');

        case 2:
          channel = _context5.sent;

        case 3:
          if (false) {
            _context5.next = 13;
            break;
          }

          _context5.next = 6;
          return (0, _effects.take)(channel);

        case 6:
          _ref4 = _context5.sent;
          event = _ref4.event;
          $container = (0, _jquery2.default)(event.target).closest('.carbon-box');
          _context5.next = 11;
          return (0, _effects.put)((0, _actions.toggleContainerBox)($container[0].id, !$container.hasClass('closed')));

        case 11:
          _context5.next = 3;
          break;

        case 13:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
function foreman(store) {
  var pagenow;
  return _regenerator2.default.wrap(function foreman$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          pagenow = window.carbon_json.pagenow;

          if (!(pagenow === _constants.PAGE_NOW_WIDGETS || pagenow === _constants.PAGE_NOW_CUSTOMIZE || pagenow === _constants.PAGE_NOW_MENUS)) {
            _context6.next = 3;
            break;
          }

          return _context6.abrupt('return');

        case 3:
          _context6.next = 5;
          return (0, _effects.all)([(0, _effects.takeEvery)(_actions.setupContainer, workerSetupVisibility), (0, _effects.takeEvery)(_actions.setContainerUI, workerToggleVisibility), (0, _effects.takeEvery)(_actions.setContainerMeta, workerCheckVisibility), (0, _effects.call)(workerTogglePostBox)]);

        case 5:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

/***/ }),

/***/ "/bQp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("/bQp");

/***/ }),

/***/ "/lfX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("/lfX");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__;

/***/ }),

/***/ "00U9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _observeResize = __webpack_require__("zMaW");

var _observeResize2 = _interopRequireDefault(_observeResize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The external dependencies.
 */
var GoogleMap = function (_React$Component) {
	(0, _inherits3.default)(GoogleMap, _React$Component);

	function GoogleMap() {
		(0, _classCallCheck3.default)(this, GoogleMap);
		return (0, _possibleConstructorReturn3.default)(this, (GoogleMap.__proto__ || (0, _getPrototypeOf2.default)(GoogleMap)).apply(this, arguments));
	}

	(0, _createClass3.default)(GoogleMap, [{
		key: 'componentDidMount',

		/**
   * Lifecycle hook.
   *
   * @return {void}
   */
		value: function componentDidMount() {
			var _this2 = this;

			this.node = _reactDom2.default.findDOMNode(this);

			this.initMap();
			this.setupMapEvents();
			this.redrawMap(this.props);

			this.cancelResizeObserver = (0, _observeResize2.default)(this.node, function () {
				_this2.redrawMap(_this2.props);
			});
		}

		/**
   * Lifecycle hook.
   *
   * @param  {Object} nextProps
   * @return {void}
   */

	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var lat = nextProps.lat,
			    lng = nextProps.lng,
			    zoom = nextProps.zoom;


			if (this.marker) {
				var markerLat = this.marker.getPosition().lat();
				var markerLng = this.marker.getPosition().lng();
				var mapZoom = this.map.getZoom();

				if (lat !== markerLat || lng !== markerLng) {
					var location = new google.maps.LatLng(lat, lng);

					this.marker.setPosition(location);
					this.map.setCenter(location);
				}

				if (zoom !== mapZoom) {
					this.map.setZoom(zoom);
				}
			}

			this.redrawMap(nextProps);
		}

		/**
   * Lifecycle hook.
   *
   * @return {Boolean}
   */

	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {
			// The component is a wrapper around Google Maps instance
			// and we don't need to re-render it, because the map is updated
			// manually.
			return false;
		}

		/**
   * Render the placeholder for the map.
   *
   * @return {React.Element}
   */

	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { className: this.props.className });
		}

		/**
   * Initialize the map into placeholder element.
   *
   * @return {void}
   */

	}, {
		key: 'initMap',
		value: function initMap() {
			var _props = this.props,
			    lat = _props.lat,
			    lng = _props.lng,
			    zoom = _props.zoom;

			var position = new google.maps.LatLng(lat, lng);

			this.map = new google.maps.Map(this.node, {
				zoom: zoom,
				center: position,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false
			});

			this.marker = new google.maps.Marker({
				position: position,
				map: this.map,
				draggable: true
			});
		}

		/**
   * Add the listeners for the map's events.
   *
   * @return {void}
   */

	}, {
		key: 'setupMapEvents',
		value: function setupMapEvents() {
			var _this3 = this;

			// Enable the zoom with scrollwheel when the user interacts with the map.
			var enableScrollZoom = function enableScrollZoom() {
				_this3.map.setOptions({
					scrollwheel: true,
					zoomControlOptions: {
						style: google.maps.ZoomControlStyle.LARGE
					}
				});
			};

			google.maps.event.addListenerOnce(this.map, 'click', enableScrollZoom);
			google.maps.event.addListenerOnce(this.map, 'dragend', enableScrollZoom);

			// Update the zoom when the map is changed.
			var handleZoomChange = function handleZoomChange() {
				_this3.props.onChange({
					zoom: _this3.map.getZoom()
				});
			};

			google.maps.event.addListener(this.map, 'zoom_changed', handleZoomChange);

			// Update the position when the marker is moved.
			var handleDragEnd = function handleDragEnd() {
				_this3.props.onChange({
					lat: _this3.marker.getPosition().lat(),
					lng: _this3.marker.getPosition().lng()
				});
			};

			google.maps.event.addListener(this.marker, 'dragend', handleDragEnd);
		}

		/**
   * Re-center when the map becomes visible.
   *
   * @param  {Object} props
   * @return {void}
   */

	}, {
		key: 'redrawMap',
		value: function redrawMap(props) {
			var _this4 = this;

			var lat = props.lat,
			    lng = props.lng;

			var location = new google.maps.LatLng(lat, lng);

			setTimeout(function () {
				google.maps.event.trigger(_this4.map, 'resize');
				_this4.map.setCenter(location);
			}, 10);
		}
	}]);
	return GoogleMap;
}(_react2.default.Component);

/**
 * Validate the props.
 *
 * @type {Object}
 */


GoogleMap.propTypes = {
	className: _propTypes2.default.string,
	lat: _propTypes2.default.number,
	lng: _propTypes2.default.number,
	zoom: _propTypes2.default.number,
	onChange: _propTypes2.default.func
};

exports.default = GoogleMap;

/***/ }),

/***/ "06OY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("06OY");

/***/ }),

/***/ "0RBh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoOptions = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a notice to inform the user that the field doesn't have
 * any options.
 *
 * @param  {Object}        props
 * @param  {Object}        props.field
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
var NoOptions = exports.NoOptions = function NoOptions(_ref) {
  var field = _ref.field;

  return _react2.default.createElement(
    _field2.default,
    { field: field },
    _react2.default.createElement(
      'em',
      null,
      carbonFieldsL10n.field.noOptions
    )
  );
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
NoOptions.propTypes = {
  field: _propTypes2.default.object
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = (0, _withSetup2.default)({
  componentDidMount: function componentDidMount() {
    var _props = this.props,
        field = _props.field,
        ui = _props.ui,
        setUI = _props.setUI;


    setUI(field.id, ui);
  }
});

exports.default = enhance(NoOptions);

/***/ }),

/***/ "0XFg":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */

!function() {
    'use strict'

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[\+\-]/
    }

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, match, pad, pad_character, pad_length, is_positive, sign
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i]
            }
            else if (Array.isArray(parse_tree[i])) {
                match = parse_tree[i] // convenience purposes only
                if (match[2]) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < match[2].length; k++) {
                        if (!arg.hasOwnProperty(match[2][k])) {
                            throw new Error(sprintf('[sprintf] property "%s" does not exist', match[2][k]))
                        }
                        arg = arg[match[2][k]]
                    }
                }
                else if (match[1]) { // positional argument (explicit)
                    arg = argv[match[1]]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (re.not_type.test(match[8]) && re.not_primitive.test(match[8]) && arg instanceof Function) {
                    arg = arg()
                }

                if (re.numeric_arg.test(match[8]) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(match[8])) {
                    is_positive = arg >= 0
                }

                switch (match[8]) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2)
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10))
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10)
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0)
                        break
                    case 'e':
                        arg = match[7] ? parseFloat(arg).toExponential(match[7]) : parseFloat(arg).toExponential()
                        break
                    case 'f':
                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)
                        break
                    case 'g':
                        arg = match[7] ? String(Number(arg.toPrecision(match[7]))) : parseFloat(arg)
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8)
                        break
                    case 's':
                        arg = String(arg)
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 't':
                        arg = String(!!arg)
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0
                        break
                    case 'v':
                        arg = arg.valueOf()
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16)
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
                        break
                }
                if (re.json.test(match[8])) {
                    output += arg
                }
                else {
                    if (re.number.test(match[8]) && (!is_positive || match[3])) {
                        sign = is_positive ? '+' : '-'
                        arg = arg.toString().replace(re.sign, '')
                    }
                    else {
                        sign = ''
                    }
                    pad_character = match[4] ? match[4] === '0' ? '0' : match[4].charAt(1) : ' '
                    pad_length = match[6] - (sign + arg).length
                    pad = match[6] ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
                    output += match[5] ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null)

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0])
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%')
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1])
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }
                parse_tree.push(match)
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    if (true) {
        exports['sprintf'] = sprintf
        exports['vsprintf'] = vsprintf
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf
        window['vsprintf'] = vsprintf

        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return {
                    'sprintf': sprintf,
                    'vsprintf': vsprintf
                }
            }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
    }
    /* eslint-enable quote-props */
}()


/***/ }),

/***/ "0Ypz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ComplexTab = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__("zpMW");

var _helpers = __webpack_require__("hKI6");

var _withHeaderTemplate = __webpack_require__("6OFK");

var _withHeaderTemplate2 = _interopRequireDefault(_withHeaderTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a tab in complex field.
 *
 * @param  {Object}        props
 * @param  {Number}        props.index
 * @param  {Object}        props.group
 * @param  {String}        props.label
 * @param  {Boolean}       props.active
 * @param  {Function}      props.handleClick
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
var ComplexTab = exports.ComplexTab = function ComplexTab(_ref) {
	var index = _ref.index,
	    group = _ref.group,
	    label = _ref.label,
	    active = _ref.active,
	    handleClick = _ref.handleClick;

	return _react2.default.createElement(
		'li',
		{
			id: group.id,
			className: (0, _classnames2.default)('group-tab-item', { 'active': active }) },
		_react2.default.createElement(
			'a',
			{ href: '#', onClick: handleClick },
			label ? _react2.default.createElement('span', {
				className: 'group-name',
				dangerouslySetInnerHTML: { __html: label } }) : null,
			_react2.default.createElement(
				'span',
				{ className: 'group-number' },
				index + 1
			),
			_react2.default.createElement('span', { className: 'dashicons dashicons-warning carbon-complex-group-error-badge' })
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ComplexTab.propTypes = {
	index: _propTypes2.default.number,
	group: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		label: _propTypes2.default.string,
		fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			id: _propTypes2.default.string,
			name: _propTypes2.default.string
		}))
	}),
	label: _propTypes2.default.string,
	active: _propTypes2.default.bool,
	handleClick: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Add logic for header templates.
 */
_withHeaderTemplate2.default,

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleClick: function handleClick(_ref2) {
		var group = _ref2.group,
		    onClick = _ref2.onClick;
		return (0, _helpers.preventDefault)(function () {
			return onClick(group.id);
		});
	}
}));

exports.default = enhance(ComplexTab);

/***/ }),

/***/ "0iPh":
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ }),

/***/ "0yqe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
	var mapStateToProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
	var mapDispatchToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	// Per-component memoization is built-in feature of the `connect` method, but
	// we need to re-implement it, because of this high level wrapper.
	var makeMapStateToProps = function makeMapStateToProps() {
		var cachedMapStateToProps = void 0;

		return function (state, ownProps) {
			var props = mapStateToProps(state, ownProps);

			if (!(0, _lodash.isFunction)(cachedMapStateToProps)) {
				props = mapStateToProps(state, ownProps);

				if ((0, _lodash.isFunction)(props)) {
					cachedMapStateToProps = props;
					props = cachedMapStateToProps(state, ownProps);
				}
			} else {
				props = cachedMapStateToProps(state, ownProps);
			}

			return (0, _extends3.default)({}, defaultMapStateToProps(state, ownProps), props);
		};
	};

	return (0, _reactRedux.connect)(makeMapStateToProps, (0, _extends3.default)({}, defaultMapDispatchToProps, mapDispatchToProps));
};

var _reactRedux = __webpack_require__("RH2O");

var _lodash = __webpack_require__("M4fF");

var _selectors = __webpack_require__("ZMHW");

var _actions = __webpack_require__("HRbf");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The default state that will be retrieved from the store.
 *
 * @param  {Object} state
 * @param  {Object} ownProps
 * @return {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependecies.
 */
var defaultMapStateToProps = function defaultMapStateToProps(state, ownProps) {
	var field = (0, _selectors.getFieldById)(state, ownProps.id);
	var name = ownProps.name || field.name;

	return {
		name: name,
		field: field
	};
};

/**
 * The default actions that will be provided as props to the component.
 *
 * @type {Object}
 */
var defaultMapDispatchToProps = {
	setupField: _actions.setupField,
	teardownField: _actions.teardownField,
	setupValidation: _actions.setupValidation,
	updateField: _actions.updateField,
	setFieldValue: _actions.setFieldValue,
	setUI: _actions.setUI
};

/**
 * The factory function that will produce the decorator.
 *
 * @param  {Function} [mapStateToProps]
 * @param  {Object}   [mapDispatchToProps]
 * @return {Function}
 */

/***/ }),

/***/ "1kS7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("1kS7");

/***/ }),

/***/ "1qlA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _base = __webpack_require__("W0zY");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The supported operators by this comparer.
 *
 * @type {Array}
 */
var operators = ['>', '>=', '<', '<='];

/**
 * Perform the comparison.
 *
 * @param  {mixed}   a
 * @param  {String}  operator
 * @param  {mixed}   b
 * @return {Boolean}
 */
/**
 * The internal dependencies.
 */
var evaluate = function evaluate(a, operator, b) {
	switch (operator) {
		case '>':
			return a > b;
		case '>=':
			return a >= b;
		case '<':
			return a < b;
		case '<=':
			return a <= b;
		default:
			return false;
	}
};

exports.default = (0, _extends3.default)({}, (0, _base2.default)(operators), {
	evaluate: evaluate
});

/***/ }),

/***/ "23TD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AssociationListItem = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__("zpMW");

var _helpers = __webpack_require__("hKI6");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render an item that can be associated.
 *
 * @param  {Object}        props
 * @param  {String}        props.prefix
 * @param  {Number}        props.index
 * @param  {Object[]}      props.item
 * @param  {Boolean}       props.associated
 * @param  {Boolean}       props.visible
 * @param  {Function}      props.handleClick
 * @return {React.Element}
 *
 * TODO: Clean up the mess in `handleClick` introduced by the incorrect HTML in the template.
 */
var AssociationListItem = exports.AssociationListItem = function AssociationListItem(_ref) {
	var prefix = _ref.prefix,
	    index = _ref.index,
	    item = _ref.item,
	    associated = _ref.associated,
	    visible = _ref.visible,
	    handleClick = _ref.handleClick;

	return _react2.default.createElement(
		'li',
		{ id: item.id, className: (0, _classnames2.default)({ 'inactive': item.disabled }) },
		_react2.default.createElement('span', { className: 'mobile-handle dashicons-before dashicons-menu' }),
		_react2.default.createElement(
			'a',
			{ href: '#', onClick: handleClick },
			item.edit_link && !associated ? _react2.default.createElement('em', { className: 'edit-link dashicons-before dashicons-edit' }) : null,
			_react2.default.createElement(
				'em',
				null,
				item.label
			),
			_react2.default.createElement('span', { className: 'dashicons-before dashicons-plus-alt' }),
			item.title,
			item.is_trashed ? _react2.default.createElement('i', { className: 'trashed dashicons-before dashicons-trash' }) : null
		),
		associated ? _react2.default.createElement('input', {
			type: 'hidden',
			name: prefix + '[' + index + ']',
			value: item.type + ':' + item.subtype + ':' + item.id,
			disabled: !visible,
			readOnly: true }) : null
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 *
 * TODO: Fix the type of the `id` attribute to be consistent.
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
AssociationListItem.propTypes = {
	prefix: _propTypes2.default.string,
	index: _propTypes2.default.number,
	item: _propTypes2.default.shape({
		id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
		label: _propTypes2.default.string,
		title: _propTypes2.default.string,
		type: _propTypes2.default.string,
		subtype: _propTypes2.default.string,
		edit_link: _propTypes2.default.string
	}),
	associated: _propTypes2.default.bool,
	visible: _propTypes2.default.bool,
	handleClick: _propTypes2.default.func
};

var enhance = (0, _recompose.withHandlers)({
	handleClick: function handleClick(_ref2) {
		var item = _ref2.item,
		    associated = _ref2.associated,
		    onClick = _ref2.onClick;
		return (0, _helpers.preventDefault)(function (e) {
			var target = e.target;


			if (target.nodeName === 'SPAN') {
				onClick(item);
			}if (target.classList.contains('edit-link')) {
				e.stopPropagation();
				window.open(item.edit_link.replace('&amp;', '&', 'g'), '_blank');
			} else {
				if (!associated && !item.disabled) {
					onClick(item);
				}
			}
		});
	}
});

exports.default = enhance(AssociationListItem);

/***/ }),

/***/ "2KeS":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("2KeS");

/***/ }),

/***/ "2KxR":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "33bN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.normalizePreloadedState = normalizePreloadedState;

var _lodash = __webpack_require__("M4fF");

var _helpers = __webpack_require__("pP85");

var _constants = __webpack_require__("8Hlw");

/**
 * Transform the shape of the given state to be more Redux friendly.
 *
 * @param  {Object} state
 * @return {Object}
 */


/**
 * The internal dependencies.
 */
function normalizePreloadedState(state) {
	// Create a safe copy of the state.
	var _merge = (0, _lodash.merge)({}, state),
	    containers = _merge.containers,
	    sidebars = _merge.sidebars;

	var fields = [];

	// Remove the placeholder containers(e.g on `Widgets` page).
	containers = containers.filter(function (_ref) {
		var id = _ref.id;
		return !(0, _lodash.endsWith)(id, '__i__');
	});

	// Extract the container's fields to a flat list.
	containers = containers.map(function (container) {
		container.fields = container.fields.map(function (field) {
			return (0, _helpers.flattenField)(field, container, _constants.PARENT_TYPE_CONTAINER, fields);
		});

		return container;
	});

	// Convert the list to a map.
	containers = (0, _lodash.keyBy)(containers, 'id');
	sidebars = (0, _lodash.keyBy)(sidebars, 'id');
	fields = (0, _lodash.keyBy)(fields, 'id');

	return { containers: containers, sidebars: sidebars, fields: fields };
} /**
   * The external dependencies.
   */

/***/ }),

/***/ "3fs2":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("RY/4");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "4WTo":
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__("NWt+");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "4kf1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = exports.type = undefined;
exports.handler = handler;

var _lodash = __webpack_require__("M4fF");

var _constants = __webpack_require__("8Hlw");

/**
 * The type of validator.
 *
 * @type {String}
 */
/**
 * The external dependencies.
 */
var type = exports.type = _constants.VALIDATION_ASSOCIATION;

/**
 * Debounce the validation.
 *
 * @type {Boolean}
 */


/**
 * The internal dependencies.
 */
var debounce = exports.debounce = false;

/**
 * Handle the validation for the association fields.
 *
 * @param  {Object}      field
 * @return {String|null}
 */
function handler(field) {
  var min = field.min,
      value = field.value,
      required = field.required;


  if (required && (0, _lodash.isEmpty)(value)) {
    return carbonFieldsL10n.field.messageRequiredField;
  }

  if (min > 0 && value.length < min) {
    return carbonFieldsL10n.field.minNumItemsNotReached.replace('%s', field.min);
  }

  return null;
}

/***/ }),

/***/ "5B/B":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TYPE_COMMENT_META = exports.TYPE_COMMENT_META = 'comment_meta';
var TYPE_NAV_MENU_ITEM = exports.TYPE_NAV_MENU_ITEM = 'nav_menu_item';
var TYPE_POST_META = exports.TYPE_POST_META = 'post_meta';
var TYPE_TERM_META = exports.TYPE_TERM_META = 'term_meta';
var TYPE_THEME_OPTIONS = exports.TYPE_THEME_OPTIONS = 'theme_options';
var TYPE_USER_META = exports.TYPE_USER_META = 'user_meta';
var TYPE_WIDGET = exports.TYPE_WIDGET = 'widget';
var TYPE_NETWORK = exports.TYPE_NETWORK = 'network';

var ID_PREFIX = exports.ID_PREFIX = 'carbon_fields_container_';

/***/ }),

/***/ "5PlU":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("RY/4");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "5dJn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AssociationList = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _listItem = __webpack_require__("23TD");

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a list of item that can be associated.
 *
 * @param  {Object}        props
 * @param  {String}        props.prefix
 * @param  {Object[]}      props.items
 * @param  {Number[]}      props.associated
 * @param  {Function}      props.onItemClick
 * @return {React.Element}
 */
var AssociationList = exports.AssociationList = function AssociationList(_ref) {
	var prefix = _ref.prefix,
	    items = _ref.items,
	    associated = _ref.associated,
	    visible = _ref.visible,
	    onItemClick = _ref.onItemClick;

	return _react2.default.createElement(
		'ul',
		{ className: 'carbon-association-list' },
		items.map(function (item, index) {
			return _react2.default.createElement(_listItem2.default, {
				key: index,
				prefix: prefix,
				index: index,
				item: item,
				associated: associated,
				visible: visible,
				onClick: onItemClick });
		})
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
AssociationList.propTypes = {
	prefix: _propTypes2.default.string,
	items: _propTypes2.default.arrayOf(_propTypes2.default.object),
	associated: _propTypes2.default.bool,
	visible: _propTypes2.default.bool,
	onItemClick: _propTypes2.default.func
};

/**
 * The default values.
 *
 * @type {Object}
 */
AssociationList.defaultProps = {
	prefix: '',
	selected: [],
	associated: false,
	visible: true
};

exports.default = AssociationList;

/***/ }),

/***/ "5v7t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _base = __webpack_require__("94C5");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, _base2.default, {

	/**
  * Check if the condition is fulfiled.
  *
  * @param  {Object}  definition
  * @param  {Object}  env
  * @return {Boolean}
  */
	isFulfiled: function isFulfiled(definition, env) {
		var type = definition.type,
		    compare = definition.compare,
		    value = definition.value;


		return this.firstSupportedComparerIsCorrect(true, compare, value);
	}
}); /**
     * The internal dependencies.
     */

/***/ }),

/***/ "5zde":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("zQR9");
__webpack_require__("qyJz");
module.exports = __webpack_require__("FeBl").Array.from;


/***/ }),

/***/ "6OFK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("RH2O");

var _selectors = __webpack_require__("ZMHW");

/**
 * Get values from the store.
 *
 * @param  {Object} state
 * @param  {Object} props
 * @param  {Object} props.group
 * @return {Object}
 */
/**
 * The external dependencies.
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var group = _ref.group,
      index = _ref.index;
  return {
    label: (0, _selectors.getComplexGroupLabel)(state, group, index)
  };
};

/**
 * The internal dependencies.
 */
exports.default = (0, _reactRedux.connect)(mapStateToProps);

/***/ }),

/***/ "6RXc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stripDiacritics = __webpack_require__("MQxE");

var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filterOptions(options, filterValue, excludeOptions, props) {
	var _this = this;

	if (props.ignoreAccents) {
		filterValue = (0, _stripDiacritics2.default)(filterValue);
	}

	if (props.ignoreCase) {
		filterValue = filterValue.toLowerCase();
	}

	if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
		return i[props.valueKey];
	});

	return options.filter(function (option) {
		if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
		if (props.filterOption) return props.filterOption.call(_this, option, filterValue);
		if (!filterValue) return true;
		var valueTest = String(option[props.valueKey]);
		var labelTest = String(option[props.labelKey]);
		if (props.ignoreAccents) {
			if (props.matchProp !== 'label') valueTest = (0, _stripDiacritics2.default)(valueTest);
			if (props.matchProp !== 'value') labelTest = (0, _stripDiacritics2.default)(labelTest);
		}
		if (props.ignoreCase) {
			if (props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
			if (props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
		}
		return props.matchPos === 'start' ? props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
	});
}

exports.default = filterOptions;

/***/ }),

/***/ "77Pl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("77Pl");

/***/ }),

/***/ "79qw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.workerStickyPanel = workerStickyPanel;
exports.workerFormSubmit = workerFormSubmit;
exports.default = foreman;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__("M4fF");

var _effects = __webpack_require__("egdi");

var _events = __webpack_require__("x1uS");

var _helpers = __webpack_require__("hKI6");

var _selectors = __webpack_require__("pL4W");

var _actions = __webpack_require__("vVye");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerStickyPanel),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerFormSubmit),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Handle the sticky position of the actions panel.
 *
 * @return {void}
 */
function workerStickyPanel() {
	var channel, $container, $panel, $bar, _ref, value, offset, threshold;

	return _regenerator2.default.wrap(function workerStickyPanel$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _effects.call)(_events.createScrollChannel, window);

				case 2:
					channel = _context.sent;
					$container = (0, _jquery2.default)('.carbon-box:first');
					$panel = (0, _jquery2.default)('#postbox-container-1');
					$bar = (0, _jquery2.default)('#wpadminbar');

				case 6:
					if (false) {
						_context.next = 16;
						break;
					}

					_context.next = 9;
					return (0, _effects.take)(channel);

				case 9:
					_ref = _context.sent;
					value = _ref.value;
					offset = $bar.height() + 10;
					threshold = $container.offset().top - offset;

					// In some situations the threshold is negative number because
					// the container element isn't rendered yet.

					if (threshold > 0) {
						$panel.toggleClass('fixed', value >= threshold).css('top', offset);
					}
					_context.next = 6;
					break;

				case 16:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
function workerFormSubmit(formHtmlId) {
	var channel, _ref2, event;

	return _regenerator2.default.wrap(function workerFormSubmit$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.call)(_events.createSubmitChannel, 'form#' + formHtmlId);

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
					event = _ref2.event;
					_context2.next = 10;
					return (0, _effects.put)((0, _actions.submitForm)(event));

				case 10:
					_context2.next = 12;
					return (0, _effects.put)((0, _actions.validateAllContainers)(event));

				case 12:
					if (!carbonFieldsConfig.compactInput) {
						_context2.next = 15;
						break;
					}

					_context2.next = 15;
					return (0, _helpers.compactInput)(event.target);

				case 15:
					_context2.next = 3;
					break;

				case 17:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
function foreman(store, type, formHtmlId) {
	var containers;
	return _regenerator2.default.wrap(function foreman$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.select)(_selectors.getContainersByType, type);

				case 2:
					containers = _context3.sent;

					if (!(0, _lodash.isEmpty)(containers)) {
						_context3.next = 5;
						break;
					}

					return _context3.abrupt('return');

				case 5:
					_context3.next = 7;
					return (0, _effects.fork)(workerStickyPanel);

				case 7:
					_context3.next = 9;
					return (0, _effects.fork)(workerFormSubmit.bind(null, formHtmlId));

				case 9:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

/***/ }),

/***/ "7Doy":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
var isArray = __webpack_require__("7UMu");
var SPECIES = __webpack_require__("dSzd")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "7KvD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("7KvD");

/***/ }),

/***/ "7Ot0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MediaGalleryListItem = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__("zpMW");

var _helpers = __webpack_require__("hKI6");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a file upload field with a preview thumbnail of the uploaded file.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleOpenBrowser
 * @param  {Function}      props.handleRemoveItem
 * @return {React.Element}
 */
var MediaGalleryListItem = exports.MediaGalleryListItem = function MediaGalleryListItem(_ref) {
	var item = _ref.item,
	    prefix = _ref.prefix,
	    index = _ref.index,
	    meta = _ref.meta,
	    handleRemoveItem = _ref.handleRemoveItem,
	    handleEditItem = _ref.handleEditItem,
	    isSelected = _ref.isSelected;

	return _react2.default.createElement(
		'li',
		{ className: (0, _classnames2.default)('carbon-media-gallery-list-item', { 'carbon-selected': isSelected }), key: index, id: index },
		_react2.default.createElement(
			'div',
			{ className: 'carbon-attachment' },
			_react2.default.createElement('input', {
				type: 'hidden',
				id: item,
				name: prefix + '[' + index + ']',
				value: item,
				readOnly: true }),
			_react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('carbon-description', { 'hidden': !item }) },
				_react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)('carbon-attachment-preview', { 'hidden': !meta.thumb_url }) },
					_react2.default.createElement('img', { src: meta.thumb_url, className: 'thumbnail-image' })
				),
				_react2.default.createElement('input', {
					type: 'text',
					className: 'carbon-attachment-file-name',
					value: meta.file_url,
					readOnly: true })
			),
			_react2.default.createElement('span', { className: 'carbon-file-remove dashicons-before dashicons-no-alt', onClick: handleRemoveItem }),
			_react2.default.createElement('span', { className: 'carbon-edit-attachment-button dashicons-before dashicons-edit', onClick: handleEditItem })
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
MediaGalleryListItem.propTypes = {
	name: _propTypes2.default.string,
	item: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	meta: _propTypes2.default.shape({
		thumb_url: _propTypes2.default.string,
		default_thumb_url: _propTypes2.default.string,
		file_ext: _propTypes2.default.string,
		file_type: _propTypes2.default.string,
		file_name: _propTypes2.default.string,
		file_url: _propTypes2.default.string
	}),
	handleRemoveItem: _propTypes2.default.func,
	handleEditItem: _propTypes2.default.func
};

var enhance = (0, _recompose.withHandlers)({
	handleRemoveItem: function handleRemoveItem(_ref2) {
		var index = _ref2.index,
		    onRemoveClick = _ref2.onRemoveClick;
		return (0, _helpers.preventDefault)(function (e) {
			onRemoveClick(index);
		});
	},

	handleEditItem: function handleEditItem(_ref3) {
		var item = _ref3.item,
		    onEditClick = _ref3.onEditClick;
		return (0, _helpers.preventDefault)(function (e) {
			onEditClick(item);
		});
	}
});

exports.default = enhance(MediaGalleryListItem);

/***/ }),

/***/ "7UMu":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("7UMu");

/***/ }),

/***/ "7nRM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("c/Tr");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),

/***/ "7wqa":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actions.js": "Wtfs",
	"./api.js": "QBaa",
	"./constants.js": "+5vj",
	"./events.js": "x1uS",
	"./helpers.js": "hKI6",
	"./registry.js": "uokr"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "7wqa";

/***/ }),

/***/ "82Mu":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var macrotask = __webpack_require__("L42u").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("R9M2")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "8Hlw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TYPE_ASSOCIATION = exports.TYPE_ASSOCIATION = 'association';
var TYPE_CHECKBOX = exports.TYPE_CHECKBOX = 'checkbox';
var TYPE_COLOR = exports.TYPE_COLOR = 'color';
var TYPE_COMPLEX = exports.TYPE_COMPLEX = 'complex';
var TYPE_DATE = exports.TYPE_DATE = 'date';
var TYPE_DATETIME = exports.TYPE_DATETIME = 'date_time';
var TYPE_FILE = exports.TYPE_FILE = 'file';
var TYPE_FOOTER_SCRIPTS = exports.TYPE_FOOTER_SCRIPTS = 'footer_scripts';
var TYPE_GRAVITY_FORM = exports.TYPE_GRAVITY_FORM = 'gravity_form';
var TYPE_HEADER_SCRIPTS = exports.TYPE_HEADER_SCRIPTS = 'header_scripts';
var TYPE_HIDDEN = exports.TYPE_HIDDEN = 'hidden';
var TYPE_HTML = exports.TYPE_HTML = 'html';
var TYPE_IMAGE = exports.TYPE_IMAGE = 'image';
var TYPE_MEDIA_GALLERY = exports.TYPE_MEDIA_GALLERY = 'media_gallery';
var TYPE_MAP = exports.TYPE_MAP = 'map';
var TYPE_OEMBED = exports.TYPE_OEMBED = 'oembed';
var TYPE_RADIO = exports.TYPE_RADIO = 'radio';
var TYPE_RADIO_IMAGE = exports.TYPE_RADIO_IMAGE = 'radio_image';
var TYPE_RICH_TEXT = exports.TYPE_RICH_TEXT = 'rich_text';
var TYPE_SELECT = exports.TYPE_SELECT = 'select';
var TYPE_SEPARATOR = exports.TYPE_SEPARATOR = 'separator';
var TYPE_SET = exports.TYPE_SET = 'set';
var TYPE_MULTISELECT = exports.TYPE_MULTISELECT = 'multiselect';
var TYPE_SIDEBAR = exports.TYPE_SIDEBAR = 'sidebar';
var TYPE_TEXT = exports.TYPE_TEXT = 'text';
var TYPE_TEXTAREA = exports.TYPE_TEXTAREA = 'textarea';
var TYPE_TIME = exports.TYPE_TIME = 'time';

var VALUE_PROPERTY = exports.VALUE_PROPERTY = 'value';
var TYPE_PROPERTY = exports.TYPE_PROPERTY = '_type';
var DEFAULT_GROUP_NAME = exports.DEFAULT_GROUP_NAME = '_';

var PARENT_TYPE_GROUP = exports.PARENT_TYPE_GROUP = 'group';
var PARENT_TYPE_CONTAINER = exports.PARENT_TYPE_CONTAINER = 'container';

var VALIDATION_BASE = exports.VALIDATION_BASE = 'VALIDATION_BASE';
var VALIDATION_ASSOCIATION = exports.VALIDATION_ASSOCIATION = 'VALIDATION_ASSOCIATION';
var VALIDATION_COMPLEX = exports.VALIDATION_COMPLEX = 'VALIDATION_COMPLEX';

var COMPLEX_LAYOUT_GRID = exports.COMPLEX_LAYOUT_GRID = 'grid';
var COMPLEX_LAYOUT_TABBED_VERTICAL = exports.COMPLEX_LAYOUT_TABBED_VERTICAL = 'tabbed-vertical';
var COMPLEX_LAYOUT_TABBED_HORIZONTAL = exports.COMPLEX_LAYOUT_TABBED_HORIZONTAL = 'tabbed-horizontal';

/***/ }),

/***/ "8ctJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
	var hooks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var ui = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var withLifecycle = (0, _recompose.lifecycle)((0, _extends3.default)({}, defaultHooks, hooks));

	var withDefaultProps = (0, _recompose.defaultProps)({
		ui: (0, _extends3.default)({}, defaultUI, ui)
	});

	return (0, _recompose.compose)(withDefaultProps, withLifecycle);
};

var _recompose = __webpack_require__("zpMW");

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The default lifecycle hooks that will be attached to each field.
 * Since we use composition instead of inheritance the developer should provide a full
 * implementation for the hook that is being overwritten.
 *
 * @type {Object}
 */
/**
 * The external dependencies.
 */
var defaultHooks = {
	componentDidMount: function componentDidMount() {
		var _props = this.props,
		    field = _props.field,
		    ui = _props.ui,
		    setupField = _props.setupField,
		    setupValidation = _props.setupValidation;


		setupField(field.id, field.type, ui);

		if (field.required) {
			setupValidation(field.id, _constants.VALIDATION_BASE);
		}
	},
	componentWillUnmount: function componentWillUnmount() {
		var _props2 = this.props,
		    field = _props2.field,
		    teardownField = _props2.teardownField;


		teardownField(field.id);
	}
};

/**
 * The default values for UI of the field.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
var defaultUI = {
	is_visible: true,
	valid: true,
	error: null
};

/**
 * The factory function that will produce the decorator.
 *
 * @param  {Object} hooks
 * @param  {Object} ui
 * @return {Function}
 */

/***/ }),

/***/ "8orr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ColorField = undefined;

var _slicedToArray2 = __webpack_require__("d7EF");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _hexAndRgba = __webpack_require__("FBbu");

var _hexAndRgba2 = _interopRequireDefault(_hexAndRgba);

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _picker = __webpack_require__("mJoy");

var _picker2 = _interopRequireDefault(_picker);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a color input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Boolean}       props.pickerVisible
 * @param  {Function}      props.handleChange
 * @param  {Function}      props.showPicker
 * @param  {Function}      props.hidePicker
 * @return {React.Element}
 */
var ColorField = exports.ColorField = function ColorField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    pickerVisible = _ref.pickerVisible,
	    handleChange = _ref.handleChange,
	    showPicker = _ref.showPicker,
	    hidePicker = _ref.hidePicker,
	    clearValue = _ref.clearValue;

	var colorHex = field.value ? field.value : '#FFFFFFFF';

	var _color$hexToRgba = _hexAndRgba2.default.hexToRgba(colorHex),
	    _color$hexToRgba2 = (0, _slicedToArray3.default)(_color$hexToRgba, 4),
	    r = _color$hexToRgba2[0],
	    g = _color$hexToRgba2[1],
	    b = _color$hexToRgba2[2],
	    a = _color$hexToRgba2[3];

	var rgbaColor = { r: r, g: g, b: b, a: field.alphaEnabled ? a : 1 };
	var backgroundStyle = field.value.length > 0 ? { backgroundColor: 'rgba(' + rgbaColor.r + ', ' + rgbaColor.g + ', ' + rgbaColor.b + ', ' + rgbaColor.a + ')' } : {};

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'div',
			{ className: 'carbon-color' },
			_react2.default.createElement(
				'span',
				{ className: 'pickcolor button carbon-color-button hide-if-no-js', onClick: showPicker },
				_react2.default.createElement(
					'span',
					{ className: 'carbon-color-preview-holder' },
					_react2.default.createElement('span', { className: 'carbon-color-preview', style: backgroundStyle })
				),
				_react2.default.createElement(
					'span',
					{ className: 'carbon-color-button-text' },
					carbonFieldsL10n.field.colorSelectColor
				)
			),
			_react2.default.createElement(_picker2.default, {
				visible: pickerVisible,
				enableAlpha: field.alphaEnabled,
				palette: field.palette,
				value: rgbaColor,
				onChange: handleChange,
				onClose: hidePicker }),
			_react2.default.createElement(
				'span',
				{ className: 'button carbon-color-button carbon-color-clear-button', onClick: clearValue },
				_react2.default.createElement('span', { className: 'dashicons dashicons-no' })
			),
			_react2.default.createElement('input', {
				type: 'hidden',
				id: field.id,
				name: name,
				value: field.value,
				disabled: !field.ui.is_visible,
				readOnly: true })
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
ColorField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.string,
		alphaEnabled: _propTypes2.default.bool,
		palette: _propTypes2.default.arrayOf(_propTypes2.default.string)
	}),
	pickerVisible: _propTypes2.default.bool,
	handleChange: _propTypes2.default.func,
	showPicker: _propTypes2.default.func,
	hidePicker: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(),

/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)(),

/**
 * Control the visibility of the colorpicker.
 */
(0, _recompose.withState)('pickerVisible', 'setPickerVisibility', false),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref2) {
		var field = _ref2.field,
		    setFieldValue = _ref2.setFieldValue;
		return function (_ref3) {
			var rgb = _ref3.rgb;

			var hexWithAlpha = _hexAndRgba2.default.rgbaToHex(rgb.r, rgb.g, rgb.b, rgb.a).toUpperCase();
			if (!field.alphaEnabled) {
				hexWithAlpha = hexWithAlpha.substr(0, 7);
			}
			setFieldValue(field.id, hexWithAlpha);
		};
	},
	showPicker: function showPicker(_ref4) {
		var setPickerVisibility = _ref4.setPickerVisibility;
		return function () {
			return setPickerVisibility(true);
		};
	},
	hidePicker: function hidePicker(_ref5) {
		var setPickerVisibility = _ref5.setPickerVisibility;
		return function () {
			return setPickerVisibility(false);
		};
	},
	clearValue: function clearValue(_ref6) {
		var field = _ref6.field,
		    setFieldValue = _ref6.setFieldValue;
		return function () {
			return setFieldValue(field.id, '');
		};
	}
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_COLOR])(enhance(ColorField));

/***/ }),

/***/ "8yf1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.MediaGalleryField = undefined;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__("zpMW");

var _lodash = __webpack_require__("M4fF");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _list = __webpack_require__("y0rb");

var _list2 = _interopRequireDefault(_list);

var _editAttachment = __webpack_require__("ET0f");

var _editAttachment2 = _interopRequireDefault(_editAttachment);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _actions = __webpack_require__("HRbf");

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a file upload field with a preview thumbnail of the uploaded file.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.openBrowser
 * @param  {Function}      props.handleRemoveItem
 * @return {React.Element}
 */
var MediaGalleryField = exports.MediaGalleryField = function MediaGalleryField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    openBrowser = _ref.openBrowser,
	    sortableOptions = _ref.sortableOptions,
	    handleSortItems = _ref.handleSortItems,
	    handleRemoveItem = _ref.handleRemoveItem,
	    openEditAttachment = _ref.openEditAttachment,
	    closeEditAttachment = _ref.closeEditAttachment,
	    updateField = _ref.updateField;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'div',
			{ className: 'carbon-media-gallery' },
			_react2.default.createElement(_list2.default, {
				prefix: name,
				items: field.value,
				itemsMeta: field.value_meta,
				handleOpenBrowser: openBrowser,
				handleEditItem: openEditAttachment,
				handleRemoveItem: handleRemoveItem,
				openBrowser: openBrowser,
				field: field,
				sortableOptions: sortableOptions,
				onSort: handleSortItems
			}),
			field.editMode === 'inline' && field.selected ? _react2.default.createElement(_editAttachment2.default, {
				field: field,
				attachment: field.selected,
				attachmentMeta: field.value_meta[field.selected],
				updateField: updateField,
				handleCancelEdit: closeEditAttachment
			}) : ''
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
MediaGalleryField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		value: _propTypes2.default.array,
		value_meta: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
		value_type: _propTypes2.default.string,
		duplicates_allowed: _propTypes2.default.boolean,
		selected: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
		editMode: _propTypes2.default.string,
		edit: _propTypes2.default.shape({
			id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
			title: _propTypes2.default.string,
			caption: _propTypes2.default.string,
			alt: _propTypes2.default.string,
			description: _propTypes2.default.string,
			artist: _propTypes2.default.string,
			album: _propTypes2.default.string
		})
	}),
	openBrowser: _propTypes2.default.func,
	handleRemoveItem: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(undefined, {
	setupMediaBrowser: _actions.setupMediaBrowser,
	openMediaBrowser: _actions.openMediaBrowser
}),

/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)({
	componentDidMount: function componentDidMount() {
		var _props = this.props,
		    field = _props.field,
		    ui = _props.ui,
		    setupField = _props.setupField,
		    setupValidation = _props.setupValidation,
		    setupMediaBrowser = _props.setupMediaBrowser;


		setupField(field.id, field.type, ui);
		setupMediaBrowser(field.id);

		if (field.required) {
			setupValidation(field.id, _constants.VALIDATION_BASE);
		}
	}
}),

/**
 * Component Handlers.
 */
(0, _recompose.withHandlers)({
	resetCurrentlyEditedAttachment: function resetCurrentlyEditedAttachment(_ref2) {
		var field = _ref2.field,
		    updateField = _ref2.updateField;
		return function () {
			updateField(field.id, {
				selected: null,
				edit: {
					id: '',
					title: '',
					alt: '',
					caption: '',
					description: '',
					artist: '',
					album: ''
				}
			});
		};
	}
}),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	openBrowser: function openBrowser(_ref3) {
		var field = _ref3.field,
		    openMediaBrowser = _ref3.openMediaBrowser;
		return function (index) {
			if ((0, _lodash.isNumber)(index)) {
				field.selected = index;
			}

			openMediaBrowser(field.id);
		};
	},

	handleSortItems: function handleSortItems(_ref4) {
		var field = _ref4.field,
		    setFieldValue = _ref4.setFieldValue;
		return function (newItems) {
			newItems = newItems.map(function (item) {
				return parseInt(item, 10);
			});

			var index = -1;
			var newValue = (0, _lodash.sortBy)(field.value, function (item) {
				index++;

				return newItems.indexOf(index);
			});

			setFieldValue(field.id, newValue);
		};
	},

	handleRemoveItem: function handleRemoveItem(_ref5) {
		var field = _ref5.field,
		    setFieldValue = _ref5.setFieldValue,
		    resetCurrentlyEditedAttachment = _ref5.resetCurrentlyEditedAttachment;
		return function (index) {
			field.value.splice(index, 1);

			setFieldValue(field.id, field.value);

			resetCurrentlyEditedAttachment();
		};
	},

	openEditAttachment: function openEditAttachment(_ref6) {
		var field = _ref6.field,
		    updateField = _ref6.updateField,
		    openMediaBrowser = _ref6.openMediaBrowser;
		return function (item) {
			var $container = (0, _jquery2.default)('#' + field.parent);

			// For big containers and non-mobile devices, use the inline edit
			// Otherwise, fallback to Media Browser

			if ($container.outerWidth() > 767) {
				var attachmentMeta = field.value_meta[item];

				updateField(field.id, {
					selected: item,
					editMode: 'inline',
					edit: {
						id: parseInt(item, 10),
						title: attachmentMeta.title,
						alt: attachmentMeta.alt,
						caption: attachmentMeta.caption,
						description: attachmentMeta.description,
						artist: attachmentMeta.artist || '',
						album: attachmentMeta.album || ''
					}
				});
			} else {
				updateField(field.id, {
					selected: item,
					editMode: 'modal'
				});

				openMediaBrowser(field.id);
			}
		};
	},

	closeEditAttachment: function closeEditAttachment(_ref7) {
		var resetCurrentlyEditedAttachment = _ref7.resetCurrentlyEditedAttachment;
		return function () {
			resetCurrentlyEditedAttachment();
		};
	}
}),

/**
 * Pass some props to the component.
 */
(0, _recompose.withProps)(function (_ref8) {
	var field = _ref8.field,
	    collapseComplexGroup = _ref8.collapseComplexGroup;

	var sortableOptions = {
		handle: '.carbon-description',
		items: '.carbon-media-gallery-list-item',
		placeholder: 'carbon-media-gallery-list-item ui-placeholder-highlight',
		forcePlaceholderSize: true
	};

	return {
		sortableOptions: sortableOptions
	};
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_MEDIA_GALLERY])(enhance(MediaGalleryField));

/***/ }),

/***/ "94C5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = __webpack_require__("M4fF");

var _equality = __webpack_require__("Eql7");

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__("r/IV");

var _contain2 = _interopRequireDefault(_contain);

var _scalar = __webpack_require__("1qlA");

var _scalar2 = _interopRequireDefault(_scalar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The external dependencies.
 */
exports.default = {
	/**
  * The supported comparers.
  *
  * @type {Function[]}
  */
	comparers: [_equality2.default, _contain2.default, _scalar2.default],

	/**
  * Check if the condition is fulfiled.
  *
  * @param  {Object}  definition
  * @param  {Object}  env
  * @return {Boolean}
  */
	isFulfiled: function isFulfiled(definition, env) {
		var type = definition.type,
		    compare = definition.compare,
		    value = definition.value;


		return this.firstSupportedComparerIsCorrect(env[type], compare, value);
	},


	/**
  * Check if any comparer is correcty for `a` and `b`.
  *
  * @param  {mixed}   a
  * @param  {String}  operator
  * @param  {mixed}   b
  * @return {Boolean}
  */
	firstSupportedComparerIsCorrect: function firstSupportedComparerIsCorrect(a, operator, b) {
		var comparer = (0, _lodash.find)(this.comparers, function (comparer) {
			return comparer.supportsOperator(operator);
		});

		if (!comparer) {
			throw new Error('Unsupported container condition comparison operator used: ' + operator);
		}

		return comparer.evaluate(a, operator, b);
	}
};

/**
 * The internal dependencies.
 */

/***/ }),

/***/ "9Bbf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("kM2E");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "9C8M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("evD5").f;
var create = __webpack_require__("Yobk");
var redefineAll = __webpack_require__("xH/j");
var ctx = __webpack_require__("+ZMJ");
var anInstance = __webpack_require__("2KxR");
var forOf = __webpack_require__("NWt+");
var $iterDefine = __webpack_require__("vIB/");
var step = __webpack_require__("EGZi");
var setSpecies = __webpack_require__("bRrM");
var DESCRIPTORS = __webpack_require__("+E39");
var fastKey = __webpack_require__("06OY").fastKey;
var validate = __webpack_require__("LIJb");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "9FSX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.workerInit = workerInit;
exports.workerFormSubmit = workerFormSubmit;
exports.workerItemExpand = workerItemExpand;
exports.default = foreman;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _reduxSaga = __webpack_require__("igqX");

var _effects = __webpack_require__("egdi");

var _constants = __webpack_require__("+5vj");

var _events = __webpack_require__("x1uS");

var _actions = __webpack_require__("vVye");

var _selectors = __webpack_require__("pL4W");

var _selectors2 = __webpack_require__("ZMHW");

var _constants2 = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerInit),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerFormSubmit),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(workerItemExpand),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Init the container when the menu item is created.
 *
 * @return {void}
 */
function workerInit() {
	var channel, _ref, data, $containers, i, $container;

	return _regenerator2.default.wrap(function workerInit$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _effects.call)(_events.createAjaxChannel, 'ajaxSuccess', 'add-menu-item');

				case 2:
					channel = _context.sent;

				case 3:
					if (false) {
						_context.next = 22;
						break;
					}

					_context.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref = _context.sent;
					data = _ref.data;
					$containers = (0, _jquery2.default)(data).find('[data-json]');

					// Close the channel since we don't have any
					// registered containers.

					if (!($containers.length < 1)) {
						_context.next = 12;
						break;
					}

					channel.close();
					return _context.abrupt('break', 22);

				case 12:
					i = 0;

				case 13:
					if (!(i < $containers.length)) {
						_context.next = 20;
						break;
					}

					$container = (0, _jquery2.default)($containers[i]);
					_context.next = 17;
					return (0, _effects.put)((0, _actions.receiveContainer)($container.data('json'), false));

				case 17:
					i++;
					_context.next = 13;
					break;

				case 20:
					_context.next = 3;
					break;

				case 22:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
function workerFormSubmit() {
	var channel, _ref2, event;

	return _regenerator2.default.wrap(function workerFormSubmit$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.call)(_events.createSubmitChannel, 'form#update-nav-menu');

				case 2:
					channel = _context2.sent;

				case 3:
					if (false) {
						_context2.next = 14;
						break;
					}

					_context2.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref2 = _context2.sent;
					event = _ref2.event;
					_context2.next = 10;
					return (0, _effects.put)((0, _actions.submitForm)(event));

				case 10:
					_context2.next = 12;
					return (0, _effects.put)((0, _actions.validateAllContainers)(event));

				case 12:
					_context2.next = 3;
					break;

				case 14:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/**
 * Notify everyone that the item is expanded or collapsed.
 *
 * @return {void}
 */
function workerItemExpand() {
	var channel, _ref3, _event, $item, containerId;

	return _regenerator2.default.wrap(function workerItemExpand$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.call)(_events.createClickChannel, '#menu-to-edit', '.item-edit');

				case 2:
					channel = _context3.sent;

				case 3:
					if (false) {
						_context3.next = 18;
						break;
					}

					_context3.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref3 = _context3.sent;
					_event = _ref3.event;
					$item = (0, _jquery2.default)(_event.target).closest('.menu-item');
					containerId = $item.find('.carbon-container').data('id');

					if (containerId) {
						_context3.next = 12;
						break;
					}

					return _context3.abrupt('continue', 3);

				case 12:
					_context3.next = 14;
					return (0, _effects.call)(_reduxSaga.delay, 100);

				case 14:
					_context3.next = 16;
					return (0, _effects.put)((0, _actions.toggleContainerBox)(containerId, $item.hasClass('menu-item-edit-active')));

				case 16:
					_context3.next = 3;
					break;

				case 18:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

/**
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
	var pagenow;
	return _regenerator2.default.wrap(function foreman$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					pagenow = window.carbon_json.pagenow;

					if (!(pagenow !== _constants.PAGE_NOW_MENUS)) {
						_context4.next = 3;
						break;
					}

					return _context4.abrupt('return');

				case 3:
					_context4.next = 5;
					return (0, _effects.all)([(0, _effects.call)(workerInit), (0, _effects.call)(workerItemExpand), (0, _effects.call)(workerFormSubmit)]);

				case 5:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked4, this);
}

/***/ }),

/***/ "9bBU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mClu");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "9w8d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.TextareaField = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a multiline text input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
var TextareaField = exports.TextareaField = function TextareaField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement('textarea', (0, _extends3.default)({
			id: field.id,
			name: name,
			value: field.value,
			rows: field.rows,
			disabled: !field.ui.is_visible,
			onChange: handleChange
		}, field.attributes))
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
/**
 * The external dependencies.
 */
TextareaField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.string,
		rows: _propTypes2.default.number,
		attributes: _propTypes2.default.object
	}),
	handleChange: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)((0, _withStore2.default)(), (0, _withSetup2.default)(),

/**
 * The handlers passed to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref2) {
		var field = _ref2.field,
		    setFieldValue = _ref2.setFieldValue;
		return function (_ref3) {
			var value = _ref3.target.value;
			return setFieldValue(field.id, value);
		};
	}
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_TEXTAREA, _constants.TYPE_HEADER_SCRIPTS, _constants.TYPE_FOOTER_SCRIPTS])(enhance(TextareaField));

/***/ }),

/***/ "ALrJ":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("+ZMJ");
var IObject = __webpack_require__("MU5D");
var toObject = __webpack_require__("sB3e");
var toLength = __webpack_require__("QRG4");
var asc = __webpack_require__("oeOm");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "ATFI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.validate = validate;
exports.workerValidate = workerValidate;
exports.workerValidateAll = workerValidateAll;
exports.default = foreman;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _reduxSaga = __webpack_require__("igqX");

var _effects = __webpack_require__("egdi");

var _lodash = __webpack_require__("M4fF");

var _actions = __webpack_require__("vVye");

var _selectors = __webpack_require__("pL4W");

var _actions2 = __webpack_require__("HRbf");

var _selectors2 = __webpack_require__("ZMHW");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(validate),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerValidate),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(workerValidateAll),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Validate the fields.
 *
 * @param  {String[]} fieldIds
 * @param  {Object}   event
 * @return {void}
 */
function validate(fieldIds, event) {
	var $target, $spinner, $error, validationFailedChannel, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, fieldId, html;

	return _regenerator2.default.wrap(function validate$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					$target = (0, _jquery2.default)(event.currentTarget);
					$spinner = (0, _jquery2.default)('#publishing-action .spinner', $target);
					$error = (0, _jquery2.default)('.carbon-error-required strong');
					_context.next = 5;
					return (0, _effects.actionChannel)(_actions2.markFieldAsInvalid, _reduxSaga.buffers.sliding(1));

				case 5:
					validationFailedChannel = _context.sent;


					$spinner.addClass('is-active');

					// Validate each one of the fields.
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 10;
					_iterator = (0, _getIterator3.default)(fieldIds);

				case 12:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 19;
						break;
					}

					fieldId = _step.value;
					_context.next = 16;
					return (0, _effects.put)((0, _actions2.validateField)(fieldId));

				case 16:
					_iteratorNormalCompletion = true;
					_context.next = 12;
					break;

				case 19:
					_context.next = 25;
					break;

				case 21:
					_context.prev = 21;
					_context.t0 = _context['catch'](10);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 25:
					_context.prev = 25;
					_context.prev = 26;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 28:
					_context.prev = 28;

					if (!_didIteratorError) {
						_context.next = 31;
						break;
					}

					throw _iteratorError;

				case 31:
					return _context.finish(28);

				case 32:
					return _context.finish(25);

				case 33:
					_context.next = 35;
					return (0, _effects.take)(validationFailedChannel);

				case 35:
					validationFailedChannel.close();

					// Cancel the action and prevent execution of WordPress's validation.
					event.preventDefault();
					event.stopImmediatePropagation();
					$spinner.removeClass('is-active');

					// Show the errors.
					if ($error.length) {
						$error.text(carbonFieldsL10n.container.pleaseFillTheRequiredFields);
					} else {
						html = '\n\t\t\t<div class="settings-error error hidden below-h2 carbon-error-required">\n\t\t\t\t<p>\n\t\t\t\t\t<strong>' + carbonFieldsL10n.container.pleaseFillTheRequiredFields + '</strong>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t';


						(0, _jquery2.default)(html).insertAfter('#wpbody-content .wrap > :header:first').slideDown();
					}

					// Expand containers that are hidden but have any errors.
					(0, _jquery2.default)('.postbox > .button-link, .widget-title-action, .menu-item-handle .item-edit').filter(function (index, element) {
						return (0, _jquery2.default)(element).closest('.postbox, .widget, .menu-item').find('.carbon-highlight:not(:visible)').length > 0;
					}).trigger('click');

				case 41:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this, [[10, 21, 25, 33], [26,, 28, 32]]);
}

/**
 * Validate the container.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.containerId
 * @param  {Object} action.payload.event
 * @return {void}
 */
function workerValidate(_ref) {
	var _ref$payload = _ref.payload,
	    containerId = _ref$payload.containerId,
	    event = _ref$payload.event;
	var container, ids;
	return _regenerator2.default.wrap(function workerValidate$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.select)(_selectors.getContainerById, containerId);

				case 2:
					container = _context2.sent;

					if (container.ui.is_visible) {
						_context2.next = 5;
						break;
					}

					return _context2.abrupt('return');

				case 5:
					_context2.next = 7;
					return (0, _effects.select)(_selectors2.getFieldsByRoots, container.fields);

				case 7:
					ids = _context2.sent;
					_context2.next = 10;
					return (0, _effects.call)(validate, ids, event);

				case 10:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/**
 * Validate the containers.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @return {void}
 */
function workerValidateAll(_ref2) {
	var payload = _ref2.payload;
	var containers, ids, i, container, fields;
	return _regenerator2.default.wrap(function workerValidateAll$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.select)(_selectors.getVisibleContainers);

				case 2:
					containers = _context3.sent;
					ids = [];
					i = 0;

				case 5:
					if (!(i < containers.length)) {
						_context3.next = 14;
						break;
					}

					container = containers[i];
					_context3.next = 9;
					return (0, _effects.select)(_selectors2.getFieldsByRoots, container.fields);

				case 9:
					fields = _context3.sent;

					ids = ids.concat(fields);

				case 11:
					i++;
					_context3.next = 5;
					break;

				case 14:
					_context3.next = 16;
					return (0, _effects.call)(validate, ids, payload);

				case 16:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
function foreman(store) {
	return _regenerator2.default.wrap(function foreman$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					_context4.next = 2;
					return (0, _effects.all)([(0, _effects.takeEvery)(_actions.validateContainer, workerValidate), (0, _effects.takeLatest)(_actions.validateAllContainers, workerValidateAll)]);

				case 2:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked4, this);
}

/***/ }),

/***/ "B3Oe":
/***/ (function(module, exports) {

(function() { module.exports = this["carbon.vendor"]; }());

/***/ }),

/***/ "BDhv":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("kM2E");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__("m9gC")('Set') });


/***/ }),

/***/ "BEQ0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("BEQ0");

/***/ }),

/***/ "BO1k":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("fxRn"), __esModule: true };

/***/ }),

/***/ "Bn1I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = __webpack_require__("famw");

var _Select2 = _interopRequireDefault(_Select);

var _defaultFilterOptions = __webpack_require__("6RXc");

var _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions);

var _defaultMenuRenderer = __webpack_require__("DQxf");

var _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreatableSelect = function (_React$Component) {
	_inherits(CreatableSelect, _React$Component);

	function CreatableSelect(props, context) {
		_classCallCheck(this, CreatableSelect);

		var _this = _possibleConstructorReturn(this, (CreatableSelect.__proto__ || Object.getPrototypeOf(CreatableSelect)).call(this, props, context));

		_this.filterOptions = _this.filterOptions.bind(_this);
		_this.menuRenderer = _this.menuRenderer.bind(_this);
		_this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
		_this.onInputChange = _this.onInputChange.bind(_this);
		_this.onOptionSelect = _this.onOptionSelect.bind(_this);
		return _this;
	}

	_createClass(CreatableSelect, [{
		key: 'createNewOption',
		value: function createNewOption() {
			var _props = this.props,
			    isValidNewOption = _props.isValidNewOption,
			    newOptionCreator = _props.newOptionCreator,
			    onNewOptionClick = _props.onNewOptionClick,
			    _props$options = _props.options,
			    options = _props$options === undefined ? [] : _props$options,
			    shouldKeyDownEventCreateNewOption = _props.shouldKeyDownEventCreateNewOption;


			if (isValidNewOption({ label: this.inputValue })) {
				var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
				var _isOptionUnique = this.isOptionUnique({ option: option });

				// Don't add the same option twice.
				if (_isOptionUnique) {
					if (onNewOptionClick) {
						onNewOptionClick(option);
					} else {
						options.unshift(option);

						this.select.selectValue(option);
					}
				}
			}
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions() {
			var _props2 = this.props,
			    filterOptions = _props2.filterOptions,
			    isValidNewOption = _props2.isValidNewOption,
			    options = _props2.options,
			    promptTextCreator = _props2.promptTextCreator;

			// TRICKY Check currently selected options as well.
			// Don't display a create-prompt for a value that's selected.
			// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

			var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];

			var filteredOptions = filterOptions.apply(undefined, arguments) || [];

			if (isValidNewOption({ label: this.inputValue })) {
				var _newOptionCreator = this.props.newOptionCreator;


				var option = _newOptionCreator({
					label: this.inputValue,
					labelKey: this.labelKey,
					valueKey: this.valueKey
				});

				// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
				// For multi-selects, this would remove it from the filtered list.
				var _isOptionUnique2 = this.isOptionUnique({
					option: option,
					options: excludeOptions.concat(filteredOptions)
				});

				if (_isOptionUnique2) {
					var prompt = promptTextCreator(this.inputValue);

					this._createPlaceholderOption = _newOptionCreator({
						label: prompt,
						labelKey: this.labelKey,
						valueKey: this.valueKey
					});

					filteredOptions.unshift(this._createPlaceholderOption);
				}
			}

			return filteredOptions;
		}
	}, {
		key: 'isOptionUnique',
		value: function isOptionUnique(_ref) {
			var option = _ref.option,
			    options = _ref.options;
			var isOptionUnique = this.props.isOptionUnique;


			options = options || this.select.filterOptions();

			return isOptionUnique({
				labelKey: this.labelKey,
				option: option,
				options: options,
				valueKey: this.valueKey
			});
		}
	}, {
		key: 'menuRenderer',
		value: function menuRenderer(params) {
			var menuRenderer = this.props.menuRenderer;


			return menuRenderer(_extends({}, params, {
				onSelect: this.onOptionSelect,
				selectValue: this.onOptionSelect
			}));
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(input) {
			var onInputChange = this.props.onInputChange;


			if (onInputChange) {
				onInputChange(input);
			}

			// This value may be needed in between Select mounts (when this.select is null)
			this.inputValue = input;
		}
	}, {
		key: 'onInputKeyDown',
		value: function onInputKeyDown(event) {
			var _props3 = this.props,
			    shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption,
			    onInputKeyDown = _props3.onInputKeyDown;

			var focusedOption = this.select.getFocusedOption();

			if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({ keyCode: event.keyCode })) {
				this.createNewOption();

				// Prevent decorated Select from doing anything additional with this keyDown event
				event.preventDefault();
			} else if (onInputKeyDown) {
				onInputKeyDown(event);
			}
		}
	}, {
		key: 'onOptionSelect',
		value: function onOptionSelect(option, event) {
			if (option === this._createPlaceholderOption) {
				this.createNewOption();
			} else {
				this.select.selectValue(option);
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props4 = this.props,
			    newOptionCreator = _props4.newOptionCreator,
			    shouldKeyDownEventCreateNewOption = _props4.shouldKeyDownEventCreateNewOption,
			    restProps = _objectWithoutProperties(_props4, ['newOptionCreator', 'shouldKeyDownEventCreateNewOption']);

			var children = this.props.children;

			// We can't use destructuring default values to set the children,
			// because it won't apply work if `children` is null. A falsy check is
			// more reliable in real world use-cases.

			if (!children) {
				children = defaultChildren;
			}

			var props = _extends({}, restProps, {
				allowCreate: true,
				filterOptions: this.filterOptions,
				menuRenderer: this.menuRenderer,
				onInputChange: this.onInputChange,
				onInputKeyDown: this.onInputKeyDown,
				ref: function ref(_ref2) {
					_this2.select = _ref2;

					// These values may be needed in between Select mounts (when this.select is null)
					if (_ref2) {
						_this2.labelKey = _ref2.props.labelKey;
						_this2.valueKey = _ref2.props.valueKey;
					}
				}
			});

			return children(props);
		}
	}]);

	return CreatableSelect;
}(_react2.default.Component);

;

function defaultChildren(props) {
	return _react2.default.createElement(_Select2.default, props);
};

function isOptionUnique(_ref3) {
	var option = _ref3.option,
	    options = _ref3.options,
	    labelKey = _ref3.labelKey,
	    valueKey = _ref3.valueKey;

	return options.filter(function (existingOption) {
		return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
	}).length === 0;
};

function isValidNewOption(_ref4) {
	var label = _ref4.label;

	return !!label;
};

function newOptionCreator(_ref5) {
	var label = _ref5.label,
	    labelKey = _ref5.labelKey,
	    valueKey = _ref5.valueKey;

	var option = {};
	option[valueKey] = label;
	option[labelKey] = label;
	option.className = 'Select-create-option-placeholder';
	return option;
};

function promptTextCreator(label) {
	return 'Create option "' + label + '"';
}

function shouldKeyDownEventCreateNewOption(_ref6) {
	var keyCode = _ref6.keyCode;

	switch (keyCode) {
		case 9: // TAB
		case 13: // ENTER
		case 188:
			// COMMA
			return true;
	}

	return false;
};

// Default prop methods
CreatableSelect.isOptionUnique = isOptionUnique;
CreatableSelect.isValidNewOption = isValidNewOption;
CreatableSelect.newOptionCreator = newOptionCreator;
CreatableSelect.promptTextCreator = promptTextCreator;
CreatableSelect.shouldKeyDownEventCreateNewOption = shouldKeyDownEventCreateNewOption;

CreatableSelect.defaultProps = {
	filterOptions: _defaultFilterOptions2.default,
	isOptionUnique: isOptionUnique,
	isValidNewOption: isValidNewOption,
	menuRenderer: _defaultMenuRenderer2.default,
	newOptionCreator: newOptionCreator,
	promptTextCreator: promptTextCreator,
	shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
};

CreatableSelect.propTypes = {
	// Child function responsible for creating the inner Select component
	// This component can be used to compose HOCs (eg Creatable and Async)
	// (props: Object): PropTypes.element
	children: _propTypes2.default.func,

	// See Select.propTypes.filterOptions
	filterOptions: _propTypes2.default.any,

	// Searches for any matching option within the set of options.
	// This function prevents duplicate options from being created.
	// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
	isOptionUnique: _propTypes2.default.func,

	// Determines if the current input text represents a valid option.
	// ({ label: string }): boolean
	isValidNewOption: _propTypes2.default.func,

	// See Select.propTypes.menuRenderer
	menuRenderer: _propTypes2.default.any,

	// Factory to create new option.
	// ({ label: string, labelKey: string, valueKey: string }): Object
	newOptionCreator: _propTypes2.default.func,

	// input change handler: function (inputValue) {}
	onInputChange: _propTypes2.default.func,

	// input keyDown handler: function (event) {}
	onInputKeyDown: _propTypes2.default.func,

	// new option click handler: function (option) {}
	onNewOptionClick: _propTypes2.default.func,

	// See Select.propTypes.options
	options: _propTypes2.default.array,

	// Creates prompt/placeholder option text.
	// (filterText: string): string
	promptTextCreator: _propTypes2.default.func,

	// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
	shouldKeyDownEventCreateNewOption: _propTypes2.default.func
};

exports.default = CreatableSelect;

/***/ }),

/***/ "Bt+Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectPathImmutable = __webpack_require__("VXi7");

var _objectPathImmutable2 = _interopRequireDefault(_objectPathImmutable);

var _reduxActions = __webpack_require__("sTbe");

var _registry = __webpack_require__("uokr");

var _actions = __webpack_require__("d6Yu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The reducer that handles the `sidebars` branch.
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
exports.default = (0, _registry.decorateSidebarReducer)((0, _reduxActions.handleActions)((0, _defineProperty3.default)({}, _actions.receiveSidebar, function (state, _ref) {
  var payload = _ref.payload;
  return _objectPathImmutable2.default.set(state, payload.id, payload);
}), {}));

/***/ }),

/***/ "C4MV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("9bBU"), __esModule: true };

/***/ }),

/***/ "CPXw":
/***/ (function(module, exports) {

module.exports = isNode

function isNode (val) {
  return (!val || typeof val !== 'object')
    ? false
    : (typeof window === 'object' && typeof window.Node === 'object')
      ? (val instanceof window.Node)
      : (typeof val.nodeType === 'number') &&
        (typeof val.nodeName === 'string')
}


/***/ }),

/***/ "CXw9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("O4g8");
var global = __webpack_require__("7KvD");
var ctx = __webpack_require__("+ZMJ");
var classof = __webpack_require__("RY/4");
var $export = __webpack_require__("kM2E");
var isObject = __webpack_require__("EqjI");
var aFunction = __webpack_require__("lOnJ");
var anInstance = __webpack_require__("2KxR");
var forOf = __webpack_require__("NWt+");
var speciesConstructor = __webpack_require__("t8x9");
var task = __webpack_require__("L42u").set;
var microtask = __webpack_require__("82Mu")();
var newPromiseCapabilityModule = __webpack_require__("qARP");
var perform = __webpack_require__("dNDb");
var promiseResolve = __webpack_require__("fJUb");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("dSzd")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("xH/j")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("e6n0")($Promise, PROMISE);
__webpack_require__("bRrM")(PROMISE);
Wrapper = __webpack_require__("FeBl")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("dY0y")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "CwSZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("p8xL");
var formats = __webpack_require__("XgCd");

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "DDCP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("p8xL");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "DQxf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function menuRenderer(_ref) {
	var focusedOption = _ref.focusedOption,
	    instancePrefix = _ref.instancePrefix,
	    labelKey = _ref.labelKey,
	    onFocus = _ref.onFocus,
	    onSelect = _ref.onSelect,
	    optionClassName = _ref.optionClassName,
	    optionComponent = _ref.optionComponent,
	    optionRenderer = _ref.optionRenderer,
	    options = _ref.options,
	    valueArray = _ref.valueArray,
	    valueKey = _ref.valueKey,
	    onOptionRef = _ref.onOptionRef;

	var Option = optionComponent;

	return options.map(function (option, i) {
		var isSelected = valueArray && valueArray.indexOf(option) > -1;
		var isFocused = option === focusedOption;
		var optionClass = (0, _classnames2.default)(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return _react2.default.createElement(
			Option,
			{
				className: optionClass,
				instancePrefix: instancePrefix,
				isDisabled: option.disabled,
				isFocused: isFocused,
				isSelected: isSelected,
				key: 'option-' + i + '-' + option[valueKey],
				onFocus: onFocus,
				onSelect: onSelect,
				option: option,
				optionIndex: i,
				ref: function ref(_ref2) {
					onOptionRef(_ref2, isFocused);
				}
			},
			optionRenderer(option, i)
		);
	});
}

exports.default = menuRenderer;

/***/ }),

/***/ "Dd8w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "Dg8Q":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("Dg8Q");

/***/ }),

/***/ "DuR2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("DuR2");

/***/ }),

/***/ "E08R":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("E08R");

/***/ }),

/***/ "EFYB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render the nonce field of the container
 *
 * @param  {Object}        props
 * @param  {Object}        props.container
 * @param  {Object}        props.container.nonce
 * @return {React.Element}
 */
/**
 * The external dependencies.
 */
var ContainerNonce = function ContainerNonce(_ref) {
  var nonce = _ref.container.nonce;

  return _react2.default.createElement('input', {
    type: 'hidden',
    id: nonce.name,
    name: nonce.name,
    value: nonce.value });
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ContainerNonce.propTypes = {
  container: _propTypes2.default.shape({
    nonce: _propTypes2.default.shape({
      name: _propTypes2.default.string,
      value: _propTypes2.default.string
    })
  })
};

exports.default = ContainerNonce;

/***/ }),

/***/ "EGZi":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("EGZi");

/***/ }),

/***/ "ET0f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EditAttachment = undefined;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _helpers = __webpack_require__("hKI6");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a file upload field with a preview thumbnail of the uploaded file.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleRemoveItem
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
var EditAttachment = exports.EditAttachment = function EditAttachment(_ref) {
	var field = _ref.field,
	    attachment = _ref.attachment,
	    attachmentMeta = _ref.attachmentMeta,
	    saveAttachment = _ref.saveAttachment,
	    updateEditField = _ref.updateEditField,
	    onCancelClick = _ref.onCancelClick,
	    handleSelect = _ref.handleSelect;

	return _react2.default.createElement(
		'div',
		{ className: 'carbon-edit-attachment' },
		_react2.default.createElement(
			'div',
			{ className: 'carbon-edit-attachment-inner' },
			_react2.default.createElement(
				'div',
				{ className: 'carbon-edit-attachment-head' },
				_react2.default.createElement(
					'div',
					{ className: 'carbon-edit-attachment-thumbnail' },
					_react2.default.createElement('img', { src: attachmentMeta.thumb_url })
				),
				_react2.default.createElement(
					'div',
					{ className: 'carbon-edit-attachment-meta' },
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'strong',
							null,
							attachmentMeta.file_name
						)
					),
					_react2.default.createElement(
						'p',
						null,
						attachmentMeta.date
					),
					function () {
						if (attachmentMeta.file_type === 'image') {
							return _react2.default.createElement(
								'p',
								null,
								attachmentMeta.width,
								' x ',
								attachmentMeta.height,
								' (',
								attachmentMeta.filesize,
								')'
							);
						} else if (attachmentMeta.file_type === 'audio') {
							return _react2.default.createElement(
								'p',
								null,
								'Length: ',
								attachmentMeta.length
							);
						}
					}()
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'carbon-edit-attachment-body' },
				_react2.default.createElement(
					'fieldset',
					{ disabled: field.status === 'loading' },
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							{ htmlFor: 'attachment-url' },
							carbonFieldsL10n.field.editAttachmentUrl
						),
						_react2.default.createElement('input', { type: 'text', id: 'attachment-url', name: 'url', value: attachmentMeta.file_url, readOnly: true, onFocus: handleSelect })
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							{ htmlFor: 'attachment-title' },
							carbonFieldsL10n.field.editAttachmentTitle
						),
						_react2.default.createElement('input', { type: 'text', id: 'attachment-title', name: 'title', onChange: updateEditField, value: field.edit.title })
					),
					function () {
						if (attachmentMeta.file_type === 'audio') {
							return _react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'label',
									{ htmlFor: 'attachment-artist' },
									carbonFieldsL10n.field.editAttachmentArtist
								),
								_react2.default.createElement('input', { type: 'text', id: 'attachment-artist', name: 'artist', onChange: updateEditField, value: field.edit.artist })
							);
						}
					}(),
					function () {
						if (attachmentMeta.file_type === 'audio') {
							return _react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'label',
									{ htmlFor: 'attachment-album' },
									carbonFieldsL10n.field.editAttachmentAlbum
								),
								_react2.default.createElement('input', { type: 'text', id: 'attachment-album', name: 'album', onChange: updateEditField, value: field.edit.album })
							);
						}
					}(),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							{ htmlFor: 'attachment-caption' },
							carbonFieldsL10n.field.editAttachmentCaption
						),
						_react2.default.createElement('textarea', { id: 'attachment-caption', name: 'caption', onChange: updateEditField, value: field.edit.caption })
					),
					function () {
						if (attachmentMeta.file_type === 'image') {
							return _react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'label',
									{ htmlFor: 'attachment-alt-text' },
									carbonFieldsL10n.field.editAttachmentAlt
								),
								_react2.default.createElement('input', { type: 'text', id: 'attachment-alt-text', name: 'alt', onChange: updateEditField, value: field.edit.alt })
							);
						}
					}(),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							{ htmlFor: 'attachment-description' },
							carbonFieldsL10n.field.editAttachmentDescription
						),
						_react2.default.createElement('textarea', { id: 'attachment-description', name: 'description', onChange: updateEditField, value: field.edit.description })
					)
				)
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'carbon-edit-attachment-footer' },
			_react2.default.createElement(
				'button',
				{ type: 'button', className: 'button button-secondary button-medium', onClick: onCancelClick },
				carbonFieldsL10n.field.editAttachmentClose
			),
			_react2.default.createElement(
				'span',
				{ className: 'carbon-edit-attachment-save' },
				field.edit.status === 'loading' ? _react2.default.createElement('span', { className: 'spinner is-active' }) : '',
				_react2.default.createElement('input', { type: 'submit', className: 'button button-primary button-medium', value: carbonFieldsL10n.field.editAttachmentSave, onClick: saveAttachment })
			)
		)
	);
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = (0, _recompose.withHandlers)({
	onCancelClick: function onCancelClick(_ref2) {
		var handleCancelEdit = _ref2.handleCancelEdit;
		return (0, _helpers.preventDefault)(function (e) {
			handleCancelEdit();
		});
	},

	handleSelect: function handleSelect() {
		return function (_ref3) {
			var target = _ref3.target;

			target.select();
		};
	},

	updateEditField: function updateEditField(_ref4) {
		var field = _ref4.field,
		    updateField = _ref4.updateField;
		return function (_ref5) {
			var target = _ref5.target;
			var name = target.name,
			    value = target.value;
			var edit = field.edit;


			edit[name] = value;

			updateField(field.id, {
				edit: edit
			});
		};
	},

	saveAttachment: function saveAttachment(_ref6) {
		var field = _ref6.field,
		    attachment = _ref6.attachment,
		    attachmentMeta = _ref6.attachmentMeta,
		    updateField = _ref6.updateField;
		return (0, _helpers.preventDefault)(function (e) {
			var edit = field.edit;
			var file_type = attachmentMeta.file_type;


			edit.status = 'loading';
			updateField(field.id, { edit: edit });

			var postData = {
				action: 'save-attachment',
				id: attachment,
				nonce: attachmentMeta.edit_nonce,
				changes: {
					title: edit.title,
					caption: edit.caption,
					description: edit.description
				}
			};

			if (file_type === 'image') {
				postData.changes.alt = edit.alt;
			}

			if (file_type === 'audio') {
				postData.changes.artist = edit.artist;
				postData.changes.album = edit.album;
			}

			var request = _jquery2.default.post(window.ajaxurl, postData);

			request.done(function (_ref7) {
				var success = _ref7.success;

				if (!success) {
					alert('An error occured. Please try again later..');
					return;
				}

				var value_meta = field.value_meta;


				value_meta[attachment].title = edit.title;
				value_meta[attachment].caption = edit.caption;
				value_meta[attachment].description = edit.description;

				if (file_type === 'image') {
					value_meta[attachment].alt = edit.alt;
				}

				if (file_type === 'audio') {
					value_meta[attachment].artist = edit.artist;
					value_meta[attachment].album = edit.album;
				}

				updateField(field.id, {
					value_meta: value_meta
				});
			});

			request.fail(function () {
				alert('An error occured. Please try again later..');
			});

			request.always(function () {
				edit.status = '';

				updateField(field.id, { edit: edit });
			});
		});
	}
});

exports.default = enhance(EditAttachment);

/***/ }),

/***/ "EqBC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("kM2E");
var core = __webpack_require__("FeBl");
var global = __webpack_require__("7KvD");
var speciesConstructor = __webpack_require__("t8x9");
var promiseResolve = __webpack_require__("fJUb");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "EqjI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("EqjI");

/***/ }),

/***/ "Eql7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _base = __webpack_require__("W0zY");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The supported operators by this comparer.
 *
 * @type {Array}
 */
var operators = ['=', '!='];

/**
 * Perform the comparison.
 *
 * @param  {mixed}   a
 * @param  {String}  operator
 * @param  {mixed}   b
 * @return {Boolean}
 */
/**
 * The internal dependencies.
 */
var evaluate = function evaluate(a, operator, b) {
  switch (operator) {
    case '=':
      return a == b;
    case '!=':
      return a != b;
    default:
      return false;
  }
};

exports.default = (0, _extends3.default)({}, (0, _base2.default)(operators), {
  evaluate: evaluate
});

/***/ }),

/***/ "FBbu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: it is not '#?' , because I want all HEX code strings to contain the leading hash char.
var validHex = new RegExp(/^#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i);

/**
 * Check an RGBA value set for validity
 * @param {number} r    from 0 to 255
 * @param {number} g    from 0 to 255 
 * @param {number} b    from 0 to 255
 * @param {float}  [a]  from 0.0 to 1.0
 * @returns {boolean}
 */
module.exports.isValidRgba = function isValidRgba(r,g,b,a)
{
    return !!this.rgbaToHex.apply(this, arguments);
}

/**
 * Check a HEX code for validity
 * @param {string} hex  a HEX code string to check
 * @returns {boolean}
 */
module.exports.isValidHex = function isValidHex(hex)
{
    return validHex.test(hex);
}

/**
 * convert a RGBA value set to a HEX code string
 * @param {number} r    from 0 to 255
 * @param {number} g    from 0 to 255 
 * @param {number} b    from 0 to 255
 * @param {float}  [a]  from 0.0 to 1.0
 * @returns {string|false}  HEX code string in lowercase
 */
module.exports.rgbaToHex = function rgbaToHex(r,g,b,a)
{
    if (arguments.length < 3 || arguments.length > 4)       // arguments length check
        return false;

    var args = Array.prototype.slice.call(arguments);       // Arguments to Array conversion
    
    if (args.length == 4)                                   // is with optional alpha value
        args[3] = Math.floor(255 * args[3]);                // opacity float to 255-based value

    var parts = args.map(function(e){ var r = (+e).toString(16); r.length==1 && (r='0'+r); return r; }, []);
    
    return (!~parts.indexOf('NaN'))                         // if a part could not be converted to an int, there is a 'NaN'
        ? '#' + parts.join('')
        : false;
}

/**
 * convert a HEX code string to a RGBA value set
 * @param {string} hex  a HEX code string to check
 * @returns {Array|false}
 */
module.exports.hexToRgba = function hexToRgba(hex)
{
    if (! this.isValidHex(hex))
        return false;

    var code = hex.match(validHex)[1];

    if (code.length == 3 || code.length == 4)               // fix 3 and 4 letter codes
        code = code.match(/./g).reduce( function(i,e) { return i+e+e; }, '');

    var codePairs = code.match(/.{1,2}/g).map( function(e) { return parseInt(e, 16); });

    if (codePairs.length == 4)
        codePairs[3] = codePairs[3] / 255;
    else
        codePairs[3] = 1.0;

    return codePairs;
}

/***/ }),

/***/ "FeBl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("FeBl");

/***/ }),

/***/ "Fu8L":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: '_' + Math.random().toString(36).substr(2, 12)
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyle = this.input && window.getComputedStyle(this.input);
			if (!inputStyle) {
				return;
			}
			var widthNode = this.sizer;
			widthNode.style.fontSize = inputStyle.fontSize;
			widthNode.style.fontFamily = inputStyle.fontFamily;
			widthNode.style.fontWeight = inputStyle.fontWeight;
			widthNode.style.fontStyle = inputStyle.fontStyle;
			widthNode.style.letterSpacing = inputStyle.letterSpacing;
			widthNode.style.textTransform = inputStyle.textTransform;
			if (this.props.placeholder) {
				var placeholderNode = this.placeHolderSizer;
				placeholderNode.style.fontSize = inputStyle.fontSize;
				placeholderNode.style.fontFamily = inputStyle.fontFamily;
				placeholderNode.style.fontWeight = inputStyle.fontWeight;
				placeholderNode.style.fontStyle = inputStyle.fontStyle;
				placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
				placeholderNode.style.textTransform = inputStyle.textTransform;
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
			var inputStyle = _extends({}, this.props.inputStyle);
			inputStyle.width = this.state.inputWidth + 'px';
			inputStyle.boxSizing = 'content-box';

			var inputProps = _objectWithoutProperties(this.props, []);

			inputProps.className = this.props.inputClassName;
			inputProps.style = inputStyle;
			// ensure props meant for `AutosizeInput` don't end up on the `input`
			delete inputProps.inputClassName;
			delete inputProps.inputStyle;
			delete inputProps.minWidth;
			delete inputProps.onAutosize;
			delete inputProps.placeholderIsMinWidth;
			delete inputProps.inputRef;
			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				_react2.default.createElement('style', { dangerouslySetInnerHTML: {
						__html: ['input#' + this.state.id + '::-ms-clear {display: none;}'].join('\n')
					} }),
				_react2.default.createElement('input', _extends({ id: this.state.id }, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

;

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(newValue) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1
};

exports.default = AutosizeInput;

/***/ }),

/***/ "GVVa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__("M4fF");

var _equality = __webpack_require__("Eql7");

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__("r/IV");

var _contain2 = _interopRequireDefault(_contain);

var _scalar = __webpack_require__("1qlA");

var _scalar2 = _interopRequireDefault(_scalar);

var _base = __webpack_require__("94C5");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _extends3.default)({}, _base2.default, {

	/**
  * The supported comparers.
  *
  * @type {Function[]}
  */
	comparers: [_equality2.default, _contain2.default, _scalar2.default],

	/**
  * Check if the condition is fulfiled.
  *
  * @param  {Object}  definition
  * @param  {Object}  env
  * @return {Boolean}
  */
	isFulfiled: function isFulfiled(definition, env) {
		var compare = definition.compare,
		    value = definition.value;


		return this.firstSupportedComparerIsCorrect(env.term_level, compare, value);
	}
}); /**
     * The external dependecies.
     */

/***/ }),

/***/ "GfEj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.workerRaiseFieldUpdatedApiEvent = workerRaiseFieldUpdatedApiEvent;
exports.userValidateField = userValidateField;
exports.default = foreman;

var _effects = __webpack_require__("egdi");

var _lodash = __webpack_require__("M4fF");

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _actions = __webpack_require__("HRbf");

var _selectors = __webpack_require__("ZMHW");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerRaiseFieldUpdatedApiEvent),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(userValidateField),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Handle setup of the event raising logic.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @param  {String} action.payload.value
 * @return {void}
 */
function workerRaiseFieldUpdatedApiEvent(_ref) {
  var _ref$payload = _ref.payload,
      fieldId = _ref$payload.fieldId,
      value = _ref$payload.value;
  var fieldHierarchy;
  return _regenerator2.default.wrap(function workerRaiseFieldUpdatedApiEvent$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)(_selectors.getFieldHierarchyById, fieldId);

        case 2:
          fieldHierarchy = _context.sent;

          (0, _jquery2.default)(document).trigger('carbonFields.fieldUpdated', [fieldHierarchy]);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/**
 * Raise field validation event.
 *
 * @param  {Object} field
 * @param  {String} error
 * @return {String}
 */
function userValidateField(fieldId, error) {
  var fieldHierarchy, eventResult;
  return _regenerator2.default.wrap(function userValidateField$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.select)(_selectors.getFieldHierarchyById, fieldId);

        case 2:
          fieldHierarchy = _context2.sent;
          eventResult = error;

          (0, _jquery2.default)(document).one('carbonFields.validateField', function (e) {
            eventResult = e.result;
          });
          (0, _jquery2.default)(document).trigger('carbonFields.validateField', [fieldHierarchy, error]);

          if (!(0, _lodash.isUndefined)(eventResult)) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt('return', error);

        case 8:
          return _context2.abrupt('return', eventResult);

        case 9:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/**
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
  return _regenerator2.default.wrap(function foreman$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.all)([(0, _effects.takeEvery)(_actions.setFieldValue, workerRaiseFieldUpdatedApiEvent)]);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

/***/ }),

/***/ "GiK3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("GiK3");

/***/ }),

/***/ "Gu7T":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("c/Tr");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "GxBP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("GxBP");

/***/ }),

/***/ "H4aE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ComplexActions = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _helpers = __webpack_require__("hKI6");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render the 'Add Entry' button.
 *
 * @param  {Object}        props
 * @param  {Boolean}       props.showAddButton
 * @param  {String}        props.addButtonText
 * @param  {React.Element} props.children
 * @param  {Function}      props.addGroup
 * @param  {Function}      props.toggleAll
 * @param  {Boolean}       props.showCollapseAllButton
 * @param  {String}        props.collapseAllButtonText
 * @return {React.Element}
 */
/**
 * The external dependencies.
 */
var ComplexActions = exports.ComplexActions = function ComplexActions(_ref) {
	var showAddButton = _ref.showAddButton,
	    addButtonText = _ref.addButtonText,
	    addGroup = _ref.addGroup,
	    toggleAll = _ref.toggleAll,
	    showCollapseAllButton = _ref.showCollapseAllButton,
	    collapseAllButtonText = _ref.collapseAllButtonText,
	    children = _ref.children;

	if (!showAddButton && !showCollapseAllButton) {
		return null;
	}

	return _react2.default.createElement(
		'div',
		{ className: 'carbon-actions' },
		showAddButton && _react2.default.createElement(
			'div',
			{ className: 'carbon-button' },
			_react2.default.createElement(
				'a',
				{ href: '#', className: 'button', onClick: addGroup },
				addButtonText
			),
			children
		),
		showCollapseAllButton && _react2.default.createElement(
			'div',
			{ className: 'carbon-button carbon-button-collapse-all' },
			_react2.default.createElement(
				'a',
				{ href: '#', className: 'button', onClick: toggleAll },
				collapseAllButtonText
			)
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
ComplexActions.propTypes = {
	showAddButton: _propTypes2.default.bool,
	addButtonText: _propTypes2.default.string,
	onAddClick: _propTypes2.default.func,
	onToggleAllClick: _propTypes2.default.func,
	showCollapseAllButton: _propTypes2.default.bool,
	collapseAllButtonText: _propTypes2.default.string,
	children: _propTypes2.default.element
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.withHandlers)({
	addGroup: function addGroup(_ref2) {
		var onAddClick = _ref2.onAddClick;
		return (0, _helpers.preventDefault)(function () {
			return onAddClick();
		});
	},
	toggleAll: function toggleAll(_ref3) {
		var onToggleAllClick = _ref3.onToggleAllClick;
		return (0, _helpers.preventDefault)(function () {
			return onToggleAllClick();
		});
	}
});

exports.default = enhance(ComplexActions);

/***/ }),

/***/ "HRbf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateFields = exports.validateField = exports.markFieldAsInvalid = exports.markFieldAsValid = exports.geocodeAddress = exports.addMultipleFiles = exports.switchComplexTab = exports.stopComplexGroupDrag = exports.startComplexGroupDrag = exports.collapseComplexGroup = exports.expandComplexGroup = exports.disableComplexGroupType = exports.enableComplexGroupType = exports.receiveComplexGroup = exports.removeComplexGroup = exports.cloneComplexGroup = exports.addComplexGroup = exports.removeFields = exports.addFields = exports.destroyMediaBrowser = exports.openMediaBrowser = exports.setupMediaBrowser = exports.setFieldValue = exports.updateField = exports.setUI = exports.setupValidation = exports.teardownField = exports.setupField = undefined;

var _reduxActions = __webpack_require__("sTbe");

/**
 * Perform the initial setup of the field.
 *
 * @param  {String} fieldId
 * @param  {String} type
 * @param  {Object} ui
 * @return {Object}
 */
var setupField = exports.setupField = (0, _reduxActions.createAction)('fields/SETUP_FIELD', function (fieldId, type, ui) {
  return { fieldId: fieldId, type: type, ui: ui };
});

/**
 * Prepare the field for removal.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
/**
 * The external dependencies.
 */
var teardownField = exports.teardownField = (0, _reduxActions.createAction)('fields/TEARDOWN_FIELD', function (fieldId) {
  return { fieldId: fieldId };
});

/**
 * Perform the setup of the validation logic.
 *
 * @param  {String} fieldId
 * @param  {String} validationType
 * @return {Object}
 */
var setupValidation = exports.setupValidation = (0, _reduxActions.createAction)('fields/SETUP_VALIDATION', function (fieldId, validationType) {
  return { fieldId: fieldId, validationType: validationType };
});

/**
 * Update the object that contains information about field's UI.
 *
 * @param  {String} fieldId
 * @param  {Object} ui
 * @return {Object}
 */
var setUI = exports.setUI = (0, _reduxActions.createAction)('fields/SET_UI', function (fieldId, ui) {
  return { fieldId: fieldId, ui: ui };
});

/**
 * Update the field.
 *
 * @param  {String} fieldId
 * @param  {Object} data
 * @return {Object}
 */
var updateField = exports.updateField = (0, _reduxActions.createAction)('fields/UPDATE_FIELD', function (fieldId, data) {
  return { fieldId: fieldId, data: data };
}, function (fieldId, data) {
  var dirty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return { dirty: dirty };
});

/**
 * Set the field value.
 *
 * @param  {String} fieldId
 * @param  {Object} value
 * @return {Object}
 */
var setFieldValue = exports.setFieldValue = (0, _reduxActions.createAction)('fields/SET_FIELD_VALUE', function (fieldId, value) {
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'set';
  return { fieldId: fieldId, value: value, method: method };
}, function (fieldId, value, method) {
  var dirty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return { dirty: dirty };
});

/**
 * Setup the interaction between field and WordPress's media browser.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
var setupMediaBrowser = exports.setupMediaBrowser = (0, _reduxActions.createAction)('fields/SETUP_MEDIA_BROWSER');

/**
 * Open the built-in media browser.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
var openMediaBrowser = exports.openMediaBrowser = (0, _reduxActions.createAction)('fields/OPEN_MEDIA_BROWSER');

/**
 * Destroy the media browser associated with the field.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
var destroyMediaBrowser = exports.destroyMediaBrowser = (0, _reduxActions.createAction)('fields/DESTROY_MEDIA_BROWSER');

/**
 * Add the field(s) to the store.
 *
 * @param  {Object} fields
 * @return {Object}
 */
var addFields = exports.addFields = (0, _reduxActions.createAction)('fields/ADD_FIELDS');

/**
 * Remove the field(s) from the store.
 *
 * @param  {String[]} fields
 * @return {Object}
 */
var removeFields = exports.removeFields = (0, _reduxActions.createAction)('fields/REMOVE_FIELDS');

/**
 * Add a new instance of the specified complex group.
 *
 * @param  {String} fieldId
 * @param  {String} groupName
 * @return {Object}
 */
var addComplexGroup = exports.addComplexGroup = (0, _reduxActions.createAction)('fields/ADD_COMPLEX_GROUP', function (fieldId, groupName) {
  return { fieldId: fieldId, groupName: groupName };
});

/**
 * Create a clone of the specified complex group.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
var cloneComplexGroup = exports.cloneComplexGroup = (0, _reduxActions.createAction)('fields/CLONE_COMPLEX_GROUP', function (fieldId, groupId) {
  return { fieldId: fieldId, groupId: groupId };
});

/**
 * Remove the specified complex group.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
var removeComplexGroup = exports.removeComplexGroup = (0, _reduxActions.createAction)('fields/REMOVE_COMPLEX_GROUP', function (fieldId, groupId) {
  return { fieldId: fieldId, groupId: groupId };
});

/**
 * Add the complex group to the store.
 *
 * @param  {String} fieldId
 * @param  {Object} group
 * @return {Object}
 */
var receiveComplexGroup = exports.receiveComplexGroup = (0, _reduxActions.createAction)('fields/RECEIVE_COMPLEX_GROUP', function (fieldId, group) {
  return { fieldId: fieldId, group: group };
});

/**
 * Enable a complex group type.
 *
 * @param  {String} fieldId
 * @param  {String} groupName
 * @return {Object}
 */
var enableComplexGroupType = exports.enableComplexGroupType = (0, _reduxActions.createAction)('fields/ENABLE_COMPLEX_GROUP_TYPE', function (fieldId, groupName) {
  return { fieldId: fieldId, groupName: groupName };
});

/**
 * Disable a complex group type.
 *
 * @param  {String} fieldId
 * @param  {String} groupName
 * @return {Object}
 */
var disableComplexGroupType = exports.disableComplexGroupType = (0, _reduxActions.createAction)('fields/DISABLE_COMPLEX_GROUP_TYPE', function (fieldId, groupName) {
  return { fieldId: fieldId, groupName: groupName };
});

/**
 * Show the contents of the specified group.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
var expandComplexGroup = exports.expandComplexGroup = (0, _reduxActions.createAction)('fields/EXPAND_COMPLEX_GROUP', function (fieldId, groupId) {
  return { fieldId: fieldId, groupId: groupId, collapsed: false };
});

/**
 * Hide the contents of the specified group.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
var collapseComplexGroup = exports.collapseComplexGroup = (0, _reduxActions.createAction)('fields/COLLAPSE_COMPLEX_GROUP', function (fieldId, groupId) {
  return { fieldId: fieldId, groupId: groupId, collapsed: true };
});

/**
 * Indicate when a complex group is dragged.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
var startComplexGroupDrag = exports.startComplexGroupDrag = (0, _reduxActions.createAction)('fields/START_COMPLEX_GROUP_DRAG', function (fieldId, groupId) {
  return { fieldId: fieldId, groupId: groupId };
});

/**
 * Indicate when a complex group isn't dragged.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
var stopComplexGroupDrag = exports.stopComplexGroupDrag = (0, _reduxActions.createAction)('fields/STOP_COMPLEX_GROUP_DRAG', function (fieldId, groupId) {
  return { fieldId: fieldId, groupId: groupId };
});

/**
 * Change the currently visible tab of the complex field.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
var switchComplexTab = exports.switchComplexTab = (0, _reduxActions.createAction)('fields/SWITCH_COMPLEX_TAB', function (fieldId, groupId) {
  return { fieldId: fieldId, groupId: groupId };
});
/**
 * Add multiple selected attachments for file fields inside complex fields
 *
 * @param  {String} fieldId
 * @param  {Object} attachments
 * @return {Object}
 */
var addMultipleFiles = exports.addMultipleFiles = (0, _reduxActions.createAction)('fields/ADD_MULTIPLE_FILES', function (fieldId, attachments, browser) {
  return { fieldId: fieldId, attachments: attachments, browser: browser };
});

/**
 * Process the address through Google's geocoding service.
 *
 * @param  {String} fieldId
 * @param  {String} address
 * @return {Object}
 */
var geocodeAddress = exports.geocodeAddress = (0, _reduxActions.createAction)('fields/GEOCODE_ADDRESS', function (fieldId, address) {
  return { fieldId: fieldId, address: address };
});

/**
 * Update the validation status of the field.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
var markFieldAsValid = exports.markFieldAsValid = (0, _reduxActions.createAction)('fields/MARK_FIELD_AS_VALID', function (fieldId) {
  return { fieldId: fieldId };
});

/**
 * Update the validation status of the field.
 *
 * @param  {String} fieldId
 * @param  {String} error
 * @return {Object}
 */
var markFieldAsInvalid = exports.markFieldAsInvalid = (0, _reduxActions.createAction)('fields/MARK_FIELD_AS_INVALID', function (fieldId, error) {
  return { fieldId: fieldId, error: error };
});

/**
 * Trigger the validation for a field.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
var validateField = exports.validateField = (0, _reduxActions.createAction)('fields/VALIDATE_FIELD', function (fieldId) {
  return { fieldId: fieldId };
});

/**
 * Trigger the validation for all required fields.
 *
 * @return {Object}
 */
var validateFields = exports.validateFields = (0, _reduxActions.createAction)('fields/VALIDATE_FIELDS');

/***/ }),

/***/ "HW6M":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("HW6M");

/***/ }),

/***/ "HpRW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("kM2E");
var aFunction = __webpack_require__("lOnJ");
var ctx = __webpack_require__("+ZMJ");
var forOf = __webpack_require__("NWt+");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "IWbc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

exports.workerGeocoder = workerGeocoder;
exports.default = foreman;

var _effects = __webpack_require__("egdi");

var _actions = __webpack_require__("HRbf");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerGeocoder),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Get the location of the specified address.
 *
 * @param  {String} 	     address
 * @return {Promise<Object, String>}
 */
function geocode(address) {
	return new _promise2.default(function (resolve, reject) {
		var geocoder = new google.maps.Geocoder();

		geocoder.geocode({ address: address }, function (results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				var _location = results[0].geometry.location;


				resolve({
					lat: _location.lat(),
					lng: _location.lng()
				});
			} else if (status === 'ZERO_RESULTS') {
				reject(carbonFieldsL10n.field.geocodeZeroResults);
			} else {
				reject(carbonFieldsL10n.field.geocodeNotSuccessful + ' ' + status);
			}
		});
	});
}

/**
 * Process the address through geocoding service and update the field.
 *
 * @param {Object} action
 * @param {String} action.fieldId
 * @param {String} action.address
 * @return {void}
 */
function workerGeocoder(_ref) {
	var _ref$payload = _ref.payload,
	    fieldId = _ref$payload.fieldId,
	    address = _ref$payload.address;

	var coords, lat, lng, value, _location2, _value;

	return _regenerator2.default.wrap(function workerGeocoder$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (address) {
						_context.next = 4;
						break;
					}

					_context.next = 3;
					return (0, _effects.put)((0, _actions.setFieldValue)(fieldId, { address: address }, 'assign'));

				case 3:
					return _context.abrupt('return');

				case 4:
					coords = address.match(/^(-?\d{1,3}\.\d+),\s?(-?\d{1,3}\.\d+)$/);

					if (!coords) {
						_context.next = 12;
						break;
					}

					lat = parseFloat(coords[1]);
					lng = parseFloat(coords[2]);
					value = location.lat + ',' + location.lng;
					_context.next = 11;
					return (0, _effects.put)((0, _actions.setFieldValue)(fieldId, {
						lat: lat,
						lng: lng,
						address: address,
						value: value
					}, 'assign'));

				case 11:
					return _context.abrupt('return');

				case 12:
					_context.prev = 12;
					_context.next = 15;
					return (0, _effects.call)(geocode, address);

				case 15:
					_location2 = _context.sent;
					_value = _location2.lat + ',' + _location2.lng;
					_context.next = 19;
					return (0, _effects.put)((0, _actions.setFieldValue)(fieldId, (0, _extends3.default)({}, _location2, {
						address: address,
						value: _value
					}), 'assign'));

				case 19:
					_context.next = 24;
					break;

				case 21:
					_context.prev = 21;
					_context.t0 = _context['catch'](12);

					alert(_context.t0);

				case 24:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this, [[12, 21]]);
}

/**
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
	return _regenerator2.default.wrap(function foreman$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.all)([(0, _effects.takeEvery)(_actions.geocodeAddress, workerGeocoder)]);

				case 2:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/***/ }),

/***/ "Ie6m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("Ie6m");

/***/ }),

/***/ "JG3Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__("rNU7");

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__("M4fF");

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _searchInput = __webpack_require__("adK+");

var _searchInput2 = _interopRequireDefault(_searchInput);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OEmbedPreview = function (_React$Component) {
	(0, _inherits3.default)(OEmbedPreview, _React$Component);

	function OEmbedPreview() {
		(0, _classCallCheck3.default)(this, OEmbedPreview);

		var _this = (0, _possibleConstructorReturn3.default)(this, (OEmbedPreview.__proto__ || (0, _getPrototypeOf2.default)(OEmbedPreview)).apply(this, arguments));

		_this.state = {
			width: 0,
			height: 0
		};

		_this.renderIframe = _this.renderIframe.bind(_this);
		_this.checkMessageForResize = _this.checkMessageForResize.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(OEmbedPreview, [{
		key: 'isFrameAccessible',
		value: function isFrameAccessible() {
			try {
				return !!this.iframe.contentDocument.body;
			} catch (e) {
				return false;
			}
		}

		/**
   * Lifecycle hook.
   *
   * @return {void}
   */

	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('message', this.checkMessageForResize, false);

			this.renderIframe();
		}

		/**
   * Lifecycle Hook.
   * 
   * @return {void}
   */

	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.renderIframe();
		}

		/**
   * Lifecycle Hooks.
   * 
   * @return {void}
   */

	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps() {
			this.renderIframe();
		}
	}, {
		key: 'checkMessageForResize',
		value: function checkMessageForResize() {
			var iframe = this.iframe;

			// Attempt to parse the message data as JSON if passed as string
			var data = event.data || {};
			if ('string' === typeof data) {
				try {
					data = JSON.parse(data);
				} catch (e) {} // eslint-disable-line no-empty
			}

			// Verify that the mounted element is the source of the message
			if (!iframe || iframe.contentWindow !== event.source) {
				return;
			}

			// Update the state only if the message is formatted as we expect, i.e.
			// as an object with a 'resize' action, width, and height
			var _data = data,
			    action = _data.action,
			    width = _data.width,
			    height = _data.height;
			var _state = this.state,
			    oldWidth = _state.width,
			    oldHeight = _state.height;


			if ('resize' === action && (oldWidth !== width || oldHeight !== height)) {
				this.setState({ width: width, height: height });
			}
		}

		/**
   * Render Method.
   */

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'carbon-oembed-preview' },
				_react2.default.createElement('iframe', {
					ref: function ref(node) {
						return _this2.iframe = node;
					},
					scrolling: 'no',
					onLoad: this.renderIframe,
					width: Math.ceil(this.state.width),
					height: Math.ceil(this.state.height)
				})
			);
		}
	}, {
		key: 'renderIframe',
		value: function renderIframe() {
			if (!this.isFrameAccessible()) {
				return;
			}

			var body = this.iframe.contentDocument.body;
			if (null !== body.getAttribute('data-resizable-iframe-connected')) {
				return;
			}

			var heightCalculation = 'video' === this.props.type ? 'clientBoundingRect.width / 16 * 9' : 'clientBoundingRect.height';

			var observeAndResizeJS = '\n\t\t\t( function() {\n\t\t\t\tvar observer;\n\t\t\t\tif ( ! window.MutationObserver || ! document.body || ! window.parent ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tfunction sendResize() {\n\t\t\t\t\tvar clientBoundingRect = document.body.getBoundingClientRect();\n\n\t\t\t\t\twindow.parent.postMessage( {\n\t\t\t\t\t\taction: \'resize\',\n\t\t\t\t\t\twidth: clientBoundingRect.width,\n\t\t\t\t\t\theight: ' + heightCalculation + '\n\t\t\t\t\t}, \'*\' );\n\t\t\t\t}\n\n\t\t\t\tobserver = new MutationObserver( sendResize );\n\t\t\t\tobserver.observe( document.body, {\n\t\t\t\t\tattributes: true,\n\t\t\t\t\tattributeOldValue: false,\n\t\t\t\t\tcharacterData: true,\n\t\t\t\t\tcharacterDataOldValue: false,\n\t\t\t\t\tchildList: true,\n\t\t\t\t\tsubtree: true\n\t\t\t\t} );\n\t\t\t\twindow.addEventListener( \'load\', sendResize, true );\n\t\t\t\t// Hack: Remove viewport unit styles, as these are relative\n\t\t\t\t// the iframe root and interfere with our mechanism for\n\t\t\t\t// determining the unconstrained page bounds.\n\t\t\t\tfunction removeViewportStyles( ruleOrNode ) {\n\t\t\t\t\t[ \'width\', \'height\', \'minHeight\', \'maxHeight\' ].forEach( function( style ) {\n\t\t\t\t\t\tif ( /^\\d+(vmin|vmax|vh|vw)$/.test( ruleOrNode.style[ style ] ) ) {\n\t\t\t\t\t\t\truleOrNode.style[ style ] = \'\';\n\t\t\t\t\t\t}\n\t\t\t\t\t} );\n\t\t\t\t}\n\t\t\t\tArray.prototype.forEach.call( document.querySelectorAll( \'[style]\' ), removeViewportStyles );\n\t\t\t\tArray.prototype.forEach.call( document.styleSheets, function( stylesheet ) {\n\t\t\t\t\tArray.prototype.forEach.call( stylesheet.cssRules || stylesheet.rules, removeViewportStyles );\n\t\t\t\t} );\n\t\t\t\tdocument.body.setAttribute( \'data-resizable-iframe-connected\', \'\' );\n\t\t\t\tsendResize();\n\t\t} )();';

			var style = '\n\t\t\tbody { margin: 0; }\n\n\t\t\tbody > div { max-width: 600px; }\n\n\t\t\tbody.Kickstarter > div,\n\t\t\tbody.video > div { position: relative; height: 0; padding-bottom: 56.25%; }\n\t\t\tbody.Kickstarter > div > iframe,\n\t\t\tbody.video > div > iframe { position: absolute; width: 100%; height: 100%; top: 0; left: 0; }\n\n\t\t\tbody > div > * { margin: 0 !important;/* has to have !important to override inline styles */ max-width: 100%; }\n\n\t\t\tbody.Flickr > div > a { display: block; }\n\t\t\tbody.Flickr > div > a > img { width: 100%; height: auto; }\n\t\t';

			var htmlDoc = _react2.default.createElement(
				'html',
				{ lang: document.documentElement.lang },
				_react2.default.createElement(
					'head',
					null,
					_react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: style } })
				),
				_react2.default.createElement(
					'body',
					{ 'data-resizable-iframe-connected': 'data-resizable-iframe-connected', className: this.props.type + ' ' + this.props.provider },
					_react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.html } }),
					_react2.default.createElement('script', { type: 'text/javascript', dangerouslySetInnerHTML: { __html: observeAndResizeJS } })
				)
			);

			this.iframe.contentWindow.document.open();
			this.iframe.contentWindow.document.write('<!DOCTYPE html>' + (0, _server.renderToStaticMarkup)(htmlDoc));
			this.iframe.contentWindow.document.close();
		}
	}]);
	return OEmbedPreview;
}(_react2.default.Component);

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */


OEmbedPreview.propTypes = {
	html: _propTypes2.default.string,
	type: _propTypes2.default.string,
	provider: _propTypes2.default.string
};

exports.default = OEmbedPreview;

/***/ }),

/***/ "Jl+d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),

/***/ "KSGD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("KSGD");

/***/ }),

/***/ "Kh5d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("sB3e");
var $getPrototypeOf = __webpack_require__("PzxK");

__webpack_require__("uqUo")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "L42u":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("+ZMJ");
var invoke = __webpack_require__("knuC");
var html = __webpack_require__("RPLV");
var cel = __webpack_require__("ON07");
var global = __webpack_require__("7KvD");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("R9M2")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "LIJb":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "LKZe":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("LKZe");

/***/ }),

/***/ "M4fF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("M4fF");

/***/ }),

/***/ "M6Uh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Field = undefined;

var _toConsumableArray2 = __webpack_require__("Gu7T");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base component used to render the fields.
 * Extending of this component is done via composition.
 *
 * @abstract
 * @param  {Object} 					   props
 * @param  {Object} 					   props.field
 * @param  {React.Element|React.Element[]} props.children
 * @return {React.Element}
 */
var Field = exports.Field = function Field(_ref) {
	var field = _ref.field,
	    children = _ref.children,
	    showLabel = _ref.showLabel,
	    showRequiredLabel = _ref.showRequiredLabel;

	var styles = !!field.width ? { flexBasis: field.width + '%' } : null;
	var classes = ['carbon-field', 'carbon-' + field.type, { 'has-width': !!field.width }, { 'carbon-highlight': !field.ui.valid }].concat((0, _toConsumableArray3.default)(field.classes));

	var requiredLabel = field.required && showRequiredLabel ? _react2.default.createElement(
		'span',
		{ className: 'carbon-required' },
		'*'
	) : null;

	var label = showLabel ? _react2.default.createElement(
		'label',
		{ htmlFor: field.id },
		field.label,
		requiredLabel
	) : null;

	return _react2.default.createElement(
		'div',
		{ className: (0, _classnames2.default)(classes), style: styles, hidden: !field.ui.is_visible },
		label,
		_react2.default.createElement(
			'div',
			{ className: 'field-holder' },
			children
		),
		!!field.help_text ? _react2.default.createElement('em', { className: 'carbon-help-text', dangerouslySetInnerHTML: { __html: field.help_text } }) : null,
		!!field.ui.error ? _react2.default.createElement(
			'em',
			{ className: 'carbon-error' },
			field.ui.error
		) : null
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
/**
 * The external dependencies.
 */
Field.propTypes = {
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		type: _propTypes2.default.string,
		label: _propTypes2.default.string,
		required: _propTypes2.default.bool,
		help_text: _propTypes2.default.string,
		width: _propTypes2.default.number
	}),
	children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
	showLabel: _propTypes2.default.bool,
	showRequiredLabel: _propTypes2.default.bool
};

/**
 * Define some default props.
 *
 * @type {Object}
 */
Field.defaultProps = {
	showLabel: true,
	showRequiredLabel: true
};

exports.default = Field;

/***/ }),

/***/ "M6a0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("M6a0");

/***/ }),

/***/ "MQxE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = stripDiacritics;
var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

function stripDiacritics(str) {
	for (var i = 0; i < map.length; i++) {
		str = str.replace(map[i].letters, map[i].base);
	}
	return str;
};

/***/ }),

/***/ "MU5D":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("MU5D");

/***/ }),

/***/ "Mhyx":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("/bQp");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "Mq2Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__("zpMW");

var _lodash = __webpack_require__("M4fF");

var _tabbed = __webpack_require__("p4VO");

var _tabbed2 = _interopRequireDefault(_tabbed);

var _plain = __webpack_require__("tSl/");

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.branch)(function (_ref) {
  var container = _ref.container;
  return (0, _lodash.isObject)(container.settings.tabs);
}, (0, _recompose.renderComponent)(_tabbed2.default))(_plain2.default); /**
                                                                         * The external dependencies.
                                                                         */

/***/ }),

/***/ "Mr0/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.AssociationField = undefined;

var _toConsumableArray2 = __webpack_require__("Gu7T");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _lodash = __webpack_require__("M4fF");

var _sprintfJs = __webpack_require__("0XFg");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _searchInput = __webpack_require__("adK+");

var _searchInput2 = _interopRequireDefault(_searchInput);

var _sortableList = __webpack_require__("sefJ");

var _sortableList2 = _interopRequireDefault(_sortableList);

var _list = __webpack_require__("5dJn");

var _list2 = _interopRequireDefault(_list);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a field that allows to create links between posts, taxonomy terms,
 * users or comments.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {String}        props.term
 * @param  {Object}        props.sortableOptions
 * @param  {Object[]}      props.items
 * @param  {Function}      props.setTerm
 * @param  {Function}      props.handleAddItem
 * @param  {Function}      props.handleSortItems
 * @return {React.Element}
 *
 * TODO: Research more about `react-virtualized`.
 * 		 Probably can improve the performance on very long lists.
 */
/**
 * The external dependencies.
 */
var AssociationField = exports.AssociationField = function AssociationField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    items = _ref.items,
	    term = _ref.term,
	    sortableOptions = _ref.sortableOptions,
	    setTerm = _ref.setTerm,
	    handleAddItem = _ref.handleAddItem,
	    handleRemoveItem = _ref.handleRemoveItem,
	    handleSortItems = _ref.handleSortItems;

	var counterLabels = [carbonFieldsL10n.field.associationSelectedItem, carbonFieldsL10n.field.associationSelectedItems];
	var counterLabelArgs = [field.value.length];
	if (field.max !== -1) {
		counterLabels = [carbonFieldsL10n.field.associationSelectedItemOutOf, carbonFieldsL10n.field.associationSelectedItemsOutOf];
		counterLabelArgs.push(field.max);
	}

	var counterLabel = field.value.length === 1 ? (0, _sprintfJs.vsprintf)(counterLabels[0], counterLabelArgs) : (0, _sprintfJs.vsprintf)(counterLabels[1], counterLabelArgs);

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'div',
			{ className: 'carbon-association-container carbon-association' },
			_react2.default.createElement(
				'div',
				{ className: 'selected-items-container' },
				_react2.default.createElement(
					'strong',
					null,
					_react2.default.createElement(
						'span',
						{ className: 'selected-counter' },
						counterLabel
					)
				)
			),
			_react2.default.createElement(_searchInput2.default, {
				term: term,
				onChange: setTerm }),
			_react2.default.createElement(
				'div',
				{ className: 'carbon-association-body' },
				_react2.default.createElement(
					'div',
					{ className: 'carbon-association-left' },
					_react2.default.createElement(_list2.default, {
						items: items,
						onItemClick: handleAddItem })
				),
				_react2.default.createElement(
					'div',
					{ className: 'carbon-association-right' },
					_react2.default.createElement(
						_sortableList2.default,
						{ options: sortableOptions, onSort: handleSortItems },
						_react2.default.createElement(_list2.default, {
							prefix: name,
							items: field.value,
							associated: true,
							visible: field.ui.is_visible,
							onItemClick: handleRemoveItem })
					)
				)
			)
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
AssociationField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		value: _propTypes2.default.arrayOf(_propTypes2.default.object),
		max: _propTypes2.default.number
	}),
	items: _propTypes2.default.arrayOf(_propTypes2.default.object),
	term: _propTypes2.default.string,
	handleAddItem: _propTypes2.default.func,
	handleRemoveItem: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(),

/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)({
	componentDidMount: function componentDidMount() {
		var _props = this.props,
		    field = _props.field,
		    ui = _props.ui,
		    setupField = _props.setupField,
		    setupValidation = _props.setupValidation;


		setupField(field.id, field.type, ui);
		setupValidation(field.id, _constants.VALIDATION_ASSOCIATION);
	}
}),

/**
 * Track current search term.
 */
(0, _recompose.withState)('term', 'setTerm', ''),

/**
 * Pass some props to the component.
 */
(0, _recompose.withProps)(function (_ref2) {
	var field = _ref2.field,
	    term = _ref2.term;

	var items = field.options;

	if (term) {
		items = items.filter(function (_ref3) {
			var title = _ref3.title;
			return (0, _lodash.includes)(title.toLowerCase(), term.toLowerCase());
		});
	}

	if (!field.duplicates_allowed) {
		items = items.map(function (item) {
			item.disabled = !!(0, _lodash.find)(field.value, function (selectedItem) {
				return (0, _lodash.isMatch)(selectedItem, {
					id: item.id,
					type: item.type,
					subtype: item.subtype
				});
			});

			return item;
		});
	}

	var sortableOptions = {
		axis: 'y',
		items: 'li',
		forceHelperSize: true,
		forcePlaceholderSize: true,
		scroll: true,
		handle: '.mobile-handle'
	};

	return {
		items: items,
		sortableOptions: sortableOptions
	};
}),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleAddItem: function handleAddItem(_ref4) {
		var field = _ref4.field,
		    setFieldValue = _ref4.setFieldValue;
		return function (item) {
			// Don't do anything if the duplicates aren't allowed and
			// the item is already selected.
			if (!field.duplicates_allowed && item.disabled) {
				return;
			}

			// Don't do anything, because the maximum is reached.
			if (field.max > 0 && field.value.length >= field.max) {
				alert(carbonFieldsL10n.field.maxNumItemsReached.replace('%s', field.max));
				return;
			}

			// Create a safe copy and push it to the store.
			setFieldValue(field.id, [].concat((0, _toConsumableArray3.default)(field.value), [(0, _lodash.cloneDeep)(item)]));
		};
	},

	handleSortItems: function handleSortItems(_ref5) {
		var field = _ref5.field,
		    setFieldValue = _ref5.setFieldValue;
		return function (newItems) {
			newItems = newItems.map(function (id) {
				return parseInt(id, 10);
			});
			newItems = (0, _lodash.sortBy)(field.value, function (item) {
				return newItems.indexOf(item.id);
			});

			setFieldValue(field.id, newItems);
		};
	},

	handleRemoveItem: function handleRemoveItem(_ref6) {
		var field = _ref6.field,
		    setFieldValue = _ref6.setFieldValue;
		return function (item) {
			return setFieldValue(field.id, (0, _lodash.without)(field.value, item));
		};
	}
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_ASSOCIATION])(enhance(AssociationField));

/***/ }),

/***/ "N+Om":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__("OMJi");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "NHf6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhance = exports.ComplexEmptyNotice = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__("zpMW");

var _helpers = __webpack_require__("hKI6");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a small notice when the complex field doesn't have entries.
 *
 * @param  {Object} 	   props
 * @param  {String} 	   props.label
 * @param  {Boolean} 	   props.visible
 * @param  {Function} 	   props.handleClick
 * @return {React.Element}
 */
var ComplexEmptyNotice = exports.ComplexEmptyNotice = function ComplexEmptyNotice(_ref) {
  var label = _ref.label,
      visible = _ref.visible,
      handleClick = _ref.handleClick;

  return _react2.default.createElement('div', {
    className: (0, _classnames2.default)('carbon-empty-row', { 'carbon-empty-row-visible': visible }),
    dangerouslySetInnerHTML: { __html: carbonFieldsL10n.field.complexNoRows.replace('%s', label) },
    onClick: handleClick });
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
ComplexEmptyNotice.propTypes = {
  label: _propTypes2.default.string,
  visible: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.withHandlers)({
  handleClick: function handleClick(_ref2) {
    var onClick = _ref2.onClick;
    return (0, _helpers.preventDefault)(function () {
      return onClick();
    });
  }
});

exports.default = enhance(ComplexEmptyNotice);

/***/ }),

/***/ "NIJ6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.FileField = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _actions = __webpack_require__("HRbf");

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a file upload field with a preview thumbnail of the uploaded file.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.openBrowser
 * @param  {Function}      props.clearSelection
 * @return {React.Element}
 */
var FileField = exports.FileField = function FileField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    openBrowser = _ref.openBrowser,
	    clearSelection = _ref.clearSelection;

	var buttonLabel = carbonFieldsL10n.field.fileButtonLabel;

	if (field.type === _constants.TYPE_IMAGE) {
		buttonLabel = carbonFieldsL10n.field.imageButtonLabel;
	}

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'div',
			{ className: 'carbon-attachment' },
			_react2.default.createElement('input', {
				type: 'hidden',
				id: field.id,
				name: name,
				value: field.value,
				disabled: !field.ui.is_visible,
				readOnly: true }),
			_react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('carbon-description', { 'hidden': !field.value }) },
				_react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)('carbon-attachment-preview', { 'hidden': !field.value_meta.thumb_url }) },
					_react2.default.createElement('img', { src: field.value_meta.thumb_url, className: 'thumbnail-image' }),
					_react2.default.createElement('div', { className: 'carbon-file-remove dashicons-before dashicons-no-alt', onClick: clearSelection })
				),
				_react2.default.createElement('input', {
					type: 'text',
					className: 'carbon-attachment-file-name',
					value: field.value_meta.file_url ? field.value_meta.file_url : '',
					readOnly: true })
			),
			_react2.default.createElement(
				'span',
				{ className: 'button', onClick: openBrowser },
				buttonLabel
			)
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
FileField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
		value_meta: _propTypes2.default.shape({
			thumb_url: _propTypes2.default.string,
			file_url: _propTypes2.default.string,
			file_name: _propTypes2.default.string
		}),
		value_type: _propTypes2.default.string,
		preview: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
	}),
	openBrowser: _propTypes2.default.func,
	clearSelection: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(undefined, {
	setupMediaBrowser: _actions.setupMediaBrowser,
	openMediaBrowser: _actions.openMediaBrowser,
	destroyMediaBrowser: _actions.destroyMediaBrowser
}),

/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)({
	componentDidMount: function componentDidMount() {
		var _props = this.props,
		    field = _props.field,
		    ui = _props.ui,
		    setupField = _props.setupField,
		    setupValidation = _props.setupValidation,
		    setupMediaBrowser = _props.setupMediaBrowser;


		setupField(field.id, field.type, ui);
		setupMediaBrowser(field.id);

		if (field.required) {
			setupValidation(field.id, _constants.VALIDATION_BASE);
		}
	},
	componentWillUnmount: function componentWillUnmount() {
		this.props.destroyMediaBrowser(this.props.field.id);
	}
}),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	openBrowser: function openBrowser(_ref2) {
		var field = _ref2.field,
		    openMediaBrowser = _ref2.openMediaBrowser;
		return function () {
			return openMediaBrowser(field.id);
		};
	},
	clearSelection: function clearSelection(_ref3) {
		var field = _ref3.field,
		    setFieldValue = _ref3.setFieldValue;
		return function () {
			setFieldValue(field.id, '');
		};
	}
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_FILE, _constants.TYPE_IMAGE])(enhance(FileField));

/***/ }),

/***/ "NWt+":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("+ZMJ");
var call = __webpack_require__("msXi");
var isArrayIter = __webpack_require__("Mhyx");
var anObject = __webpack_require__("77Pl");
var toLength = __webpack_require__("QRG4");
var getIterFn = __webpack_require__("3fs2");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "NpIQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("NpIQ");

/***/ }),

/***/ "O27J":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("O27J");

/***/ }),

/***/ "O2K7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _base = __webpack_require__("W0zY");

var _base2 = _interopRequireDefault(_base);

var _lodash = __webpack_require__("M4fF");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The supported operators by this comparer.
 *
 * @type {Array}
 */
/**
 * The internal dependencies.
 */
var operators = ['=', '!='];

/**
 * Perform the comparison.
 *
 * @param  {Array}   a
 * @param  {String}  operator
 * @param  {mixed}   b
 * @return {Boolean}
 */
var evaluate = function evaluate(a, operator, b) {
  switch (operator) {
    case '=':
      return (0, _lodash.includes)(a, b);
    case '!=':
      return !(0, _lodash.includes)(a, b);
    default:
      return false;
  }
};

exports.default = (0, _extends3.default)({}, (0, _base2.default)(operators), {
  evaluate: evaluate
});

/***/ }),

/***/ "O4g8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("O4g8");

/***/ }),

/***/ "OMJi":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__("fC4T");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__("ONRY");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2"), __webpack_require__("W2nU")))

/***/ }),

/***/ "ON07":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("ON07");

/***/ }),

/***/ "ONRY":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "OvRC":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("oM7Q"), __esModule: true };

/***/ }),

/***/ "OxI6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

exports.request = request;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Make an AJAX request to modify the sidebars.
 *
 * @param  {String} action
 * @param  {String} name
 * @return {Promise<Object, String>}
 */
function request(action, name) {
	return new _promise2.default(function (resolve, reject) {
		var request = _jquery2.default.post(window.ajaxurl, {
			action: 'carbon_fields_' + action + '_sidebar',
			name: name
		}, null, 'json');

		request.done(function (response) {
			if (!response || !response.success) {
				reject(response.error || 'An error occurred while trying to ' + action + ' the sidebar.');
			} else {
				resolve(response);
			}
		});

		request.fail(function (xhr, status) {
			reject('Request failed: ' + status);
		});
	});
} /**
   * The external dependencies.
   */

/***/ }),

/***/ "Pa5C":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Return all sidebars.
 *
 * @param  {Object} state
 * @return {Object}
 */
var getSidebars = exports.getSidebars = function getSidebars(state) {
  return state.sidebars;
};

/***/ }),

/***/ "Pf15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("kiBT");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("OvRC");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "PzxK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("PzxK");

/***/ }),

/***/ "QBaa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _lodash = __webpack_require__("M4fF");

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _objectPathImmutable = __webpack_require__("VXi7");

var _objectPathImmutable2 = _interopRequireDefault(_objectPathImmutable);

var _constants = __webpack_require__("8Hlw");

var _selectors = __webpack_require__("ZMHW");

var _actions = __webpack_require__("HRbf");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The external dependencies.
 */
var Api = function () {

	/**
  * Constructor
  *
  * @param {Object} store The entire redux store
  */
	function Api(store) {
		(0, _classCallCheck3.default)(this, Api);

		this.store = store;
		this.immutable = _objectPathImmutable2.default;
		(0, _jquery2.default)(document).trigger('carbonFields.apiLoaded', this);
	}

	/**
  * Get a field's value
  *
  * @param  {string} fieldName Field name and hierarchy
  * @return {Object}
  */


	(0, _createClass3.default)(Api, [{
		key: 'getFieldValue',
		value: function getFieldValue(fieldName) {
			var field = (0, _selectors.getFieldByHierarchy)(this.store.getState(), fieldName);
			if ((0, _lodash.isUndefined)(field)) {
				return;
			}

			if (field.type === _constants.TYPE_COMPLEX) {
				var value = [];
				for (var i = 0; i < field.value.length; i++) {
					var group = field.value[i];
					var fieldValue = (0, _defineProperty3.default)({}, _constants.TYPE_PROPERTY, group.name);

					for (var j = group.fields.length - 1; j >= 0; j--) {
						var groupField = group.fields[j];
						fieldValue[groupField.base_name] = this.getFieldValue(fieldName + '[' + i + ']/' + groupField.base_name);
					}

					value.push(fieldValue);
				}
				return value;
			}
			return field.value;
		}

		/**
   * Set a field's value
   *
   * @param {string} fieldName Field name and hierarchy
   */

	}, {
		key: 'setFieldValue',
		value: function setFieldValue(fieldName, value) {
			var field = (0, _selectors.getFieldByHierarchy)(this.store.getState(), fieldName);
			if ((0, _lodash.isUndefined)(field)) {
				return;
			}

			if (field.type === _constants.TYPE_COMPLEX) {
				this.store.dispatch((0, _actions.setFieldValue)(field.id, []));

				for (var i = 0; i < value.length; i++) {
					var fieldValues = value[i];
					var groupName = (0, _lodash.isUndefined)(fieldValues[_constants.TYPE_PROPERTY]) ? _constants.DEFAULT_GROUP_NAME : fieldValues[_constants.TYPE_PROPERTY];
					this.addComplexFieldGroup(fieldName, groupName);

					for (var fieldBaseName in fieldValues) {
						if (fieldBaseName === _constants.TYPE_PROPERTY) {
							continue;
						}
						var fieldValue = fieldValues[fieldBaseName];
						var nextFieldName = fieldName.replace(/\[\d+\]$/, ''); // remove the trailing index if the user accidentally left it there
						nextFieldName = nextFieldName + '[' + i + ']/' + fieldBaseName;
						this.setFieldValue(nextFieldName, fieldValue);
					}
				}
			} else {
				this.store.dispatch((0, _actions.setFieldValue)(field.id, value));
			}
		}

		/**
   * Add a group to a complex field
   *
   * @param {string} fieldName Field name and hierarchy
   * @param {string} groupName Group name to create.
   */

	}, {
		key: 'addComplexFieldGroup',
		value: function addComplexFieldGroup(fieldName) {
			var groupName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.DEFAULT_GROUP_NAME;

			var field = (0, _selectors.getFieldByHierarchy)(this.store.getState(), fieldName);
			if ((0, _lodash.isUndefined)(field)) {
				return;
			}

			var group = (0, _lodash.head)(field.groups.filter(function (group) {
				return group.name === groupName;
			}));
			if ((0, _lodash.isUndefined)(group)) {
				console.warn('The specified group does not exist: ' + groupName);
				return;
			}

			this.store.dispatch((0, _actions.addComplexGroup)(field.id, groupName));
		}

		/**
   * Remove a group from a complex field
   *
   * @param {string} fieldName Field name and hierarchy
   * @param {integer} groupIndex The index of the group to remove
   */

	}, {
		key: 'removeComplexFieldGroup',
		value: function removeComplexFieldGroup(fieldName, groupIndex) {
			var field = (0, _selectors.getFieldByHierarchy)(this.store.getState(), fieldName);
			if ((0, _lodash.isUndefined)(field)) {
				return;
			}

			if ((0, _lodash.isUndefined)(field.value[groupIndex])) {
				console.warn('The specified complex field does not have an entry with index of ' + groupIndex + '.');
				return;
			}

			this.store.dispatch((0, _actions.removeComplexGroup)(field.id, field.value[groupIndex].id));
		}
	}]);
	return Api;
}();

/**
 * The internal dependencies.
 */


exports.default = Api;

/***/ }),

/***/ "QRG4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("QRG4");

/***/ }),

/***/ "Qoa1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.workerAddSidebar = workerAddSidebar;
exports.default = foreman;

var _effects = __webpack_require__("egdi");

var _actions = __webpack_require__("d6Yu");

var _helpers = __webpack_require__("OxI6");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerAddSidebar),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Make an AJAX request to create the requested sidebar.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.sidebarName
 * @return {void}
 */
function workerAddSidebar(_ref) {
  var sidebarName = _ref.payload.sidebarName;
  var response;
  return _regenerator2.default.wrap(function workerAddSidebar$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_helpers.request, 'add', sidebarName);

        case 3:
          response = _context.sent;
          _context.next = 6;
          return (0, _effects.put)((0, _actions.receiveSidebar)({
            id: response.data.id,
            name: response.data.name
          }));

        case 6:
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);

          alert(_context.t0);

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

/**
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
  return _regenerator2.default.wrap(function foreman$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.all)([(0, _effects.takeEvery)(_actions.addSidebar, workerAddSidebar)]);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/***/ }),

/***/ "R4wc":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("kM2E");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("To3L") });


/***/ }),

/***/ "R5uo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__("M4fF");

var _anyEquality = __webpack_require__("O2K7");

var _anyEquality2 = _interopRequireDefault(_anyEquality);

var _anyContain = __webpack_require__("eA7W");

var _anyContain2 = _interopRequireDefault(_anyContain);

var _base = __webpack_require__("94C5");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The external dependecies.
 */
exports.default = (0, _extends3.default)({}, _base2.default, {

	/**
  * The supported comparers.
  *
  * @type {Function[]}
  */
	comparers: [_anyEquality2.default, _anyContain2.default],

	/**
  * Check if the condition is fulfiled.
  *
  * @param  {Object}  definition
  * @param  {Object}  env
  * @return {Boolean}
  */
	isFulfiled: function isFulfiled(definition, env) {
		var compare = definition.compare,
		    value = definition.value;


		return this.firstSupportedComparerIsCorrect(env.post_ancestors, compare, value);
	}
});

/**
 * The internal dependencies.
 */

/***/ }),

/***/ "R67r":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actions.js": "rmae",
	"./helpers.js": "33bN",
	"./index.js": "h+2D"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "R67r";

/***/ }),

/***/ "R9M2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("R9M2");

/***/ }),

/***/ "RH2O":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("RH2O");

/***/ }),

/***/ "RPLV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("RPLV");

/***/ }),

/***/ "RUrd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.RadioField = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _noOptions = __webpack_require__("0RBh");

var _noOptions2 = _interopRequireDefault(_noOptions);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a radio input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @param  {Function}      props.isChecked
 * @return {React.Element}
 */
/**
 * The external dependencies.
 */
var RadioField = exports.RadioField = function RadioField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange,
	    isChecked = _ref.isChecked;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'ul',
			{ className: 'carbon-radio-list' },
			field.options.map(function (option, index) {
				return _react2.default.createElement(
					'li',
					{ key: index },
					_react2.default.createElement(
						'label',
						null,
						_react2.default.createElement('input', (0, _extends3.default)({
							type: 'radio',
							name: name,
							value: option.value,
							checked: isChecked(option),
							disabled: !field.ui.is_visible,
							onChange: handleChange(option)
						}, field.attributes)),
						option.label
					)
				);
			})
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
RadioField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		attributes: _propTypes2.default.object,
		value: _propTypes2.default.string,
		options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			value: _propTypes2.default.string,
			label: _propTypes2.default.string
		}))
	}),
	handleChange: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(),

/**
 * Render "No-Options" component when the field doesn't have options.
 */
(0, _recompose.branch)(
/**
 * Test to see if the "No-Options" should be rendered.
 */
function (_ref2) {
	var options = _ref2.field.options;
	return options && options.length;
},

/**
 * Render the actual field.
 */
(0, _recompose.compose)(
/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)(),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref3) {
		var field = _ref3.field,
		    setFieldValue = _ref3.setFieldValue;
		return function (_ref4) {
			var value = _ref4.value;
			return function () {
				return setFieldValue(field.id, value);
			};
		};
	},
	isChecked: function isChecked(_ref5) {
		var field = _ref5.field;
		return function (option) {
			return option.value === field.value;
		};
	}
})),

/**
 * Render the empty component.
 */
(0, _recompose.renderComponent)(_noOptions2.default)));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_RADIO])(enhance(RadioField));

/***/ }),

/***/ "RY/4":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("R9M2");
var TAG = __webpack_require__("dSzd")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "RyoW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhance = exports.SeparatorField = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a visual separator between adjacent fields.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
var SeparatorField = exports.SeparatorField = function SeparatorField(_ref) {
  var field = _ref.field;

  return _react2.default.createElement(
    _field2.default,
    { field: field, showLabel: false },
    _react2.default.createElement(
      'h3',
      null,
      field.label
    )
  );
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
/**
 * The external dependencies.
 */
SeparatorField.propTypes = {
  field: _propTypes2.default.shape({
    label: _propTypes2.default.string
  })
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(),

/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)());

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_SEPARATOR])(enhance(SeparatorField));

/***/ }),

/***/ "S82l":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("S82l");

/***/ }),

/***/ "SRHB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.DateTimeField = undefined;

var _slicedToArray2 = __webpack_require__("d7EF");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _flatpickr = __webpack_require__("GxBP");

var _flatpickr2 = _interopRequireDefault(_flatpickr);

var _reactFlatpickr = __webpack_require__("Dg8Q");

var _reactFlatpickr2 = _interopRequireDefault(_reactFlatpickr);

var _lodash = __webpack_require__("M4fF");

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render an input with a datepicker.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Object}        props.options
 * @param  {String}        props.buttonText
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
var DateTimeField = exports.DateTimeField = function DateTimeField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    options = _ref.options,
	    buttonText = _ref.buttonText,
	    handleManualInput = _ref.handleManualInput,
	    formatManualInput = _ref.formatManualInput;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			_reactFlatpickr2.default,
			{ options: options, className: 'carbon-field-group-holder' },
			_react2.default.createElement('input', (0, _extends3.default)({
				type: 'text',
				name: name,
				value: field.value,
				disabled: !field.ui.is_visible,
				onChange: handleManualInput,
				onBlur: formatManualInput,
				className: 'regular-text carbon-field-group-input',
				'data-input': true
			}, field.attributes)),
			_react2.default.createElement(
				'button',
				{
					type: 'button',
					className: 'button',
					'data-toggle': true },
				buttonText
			)
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
DateTimeField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.string,
		attributes: _propTypes2.default.object,
		picker_options: _propTypes2.default.object,
		picker: _propTypes2.default.object
	}),
	options: _propTypes2.default.object,
	buttonText: _propTypes2.default.string
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(),

/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)({
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		var field = nextProps.field;


		if (!field.picker) {
			return;
		}

		field.picker.setDate(field.value, false);
	}
}),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleReady: function handleReady(_ref2) {
		var field = _ref2.field,
		    setFieldValue = _ref2.setFieldValue;
		return function (_ref3, selectedDateStr, instance) {
			var _ref4 = (0, _slicedToArray3.default)(_ref3, 1),
			    selectedDate = _ref4[0];

			field.picker = instance;
		};
	},

	handleManualInput: function handleManualInput(_ref5) {
		var field = _ref5.field,
		    setFieldValue = _ref5.setFieldValue;
		return function (e) {
			var value = e.target.value;
			if (value !== field.value) {
				setFieldValue(field.id, value);
			}
		};
	},

	formatManualInput: function formatManualInput(_ref6) {
		var field = _ref6.field,
		    setFieldValue = _ref6.setFieldValue;
		return function (e) {
			var value = e.target.value;
			field.picker.setDate(value, true);
		};
	},

	handleChange: function handleChange(_ref7) {
		var field = _ref7.field,
		    setFieldValue = _ref7.setFieldValue;
		return function (_ref8, selectedDateStr, instance) {
			var _ref9 = (0, _slicedToArray3.default)(_ref8, 1),
			    selectedDate = _ref9[0];

			instance._selectedDateStr = selectedDateStr;

			var value = selectedDateStr ? selectedDateStr : '';

			if (value !== field.value) {
				setFieldValue(field.id, value);
			}
		};
	},

	handleClose: function handleClose() {
		return function (selectedDates, selectedDateStr, instance) {
			var config = instance.config,
			    _selectedDateStr = instance._selectedDateStr;
			var value = instance._input.value;


			if (value) {
				instance.setDate(value, true);
			} else {
				instance.clear();
			}
		};
	}
}),

/**
 * Pass some props to the component.
 */
(0, _recompose.withProps)(function (_ref10) {
	var field = _ref10.field,
	    handleReady = _ref10.handleReady,
	    handleManualInput = _ref10.handleManualInput,
	    formatManualInput = _ref10.formatManualInput,
	    handleChange = _ref10.handleChange,
	    handleClose = _ref10.handleClose;

	var buttonText = field.type === _constants.TYPE_TIME ? carbonFieldsL10n.field.selectTime : carbonFieldsL10n.field.selectDate;

	var locale = 'default';
	if (!(0, _lodash.isUndefined)(_flatpickr2.default.l10ns[carbonFieldsL10n.shortLocale])) {
		locale = carbonFieldsL10n.shortLocale;
	}

	var options = (0, _extends3.default)({
		locale: locale
	}, field.picker_options, {
		wrap: true,
		onReady: handleReady,
		onChange: handleChange,
		onClose: handleClose
	});

	return {
		options: options,
		buttonText: buttonText,
		handleManualInput: handleManualInput,
		formatManualInput: formatManualInput
	};
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_DATE, _constants.TYPE_DATETIME, _constants.TYPE_TIME])(enhance(DateTimeField));

/***/ }),

/***/ "SeFE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhance = exports.ContainerTabsNav = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__("zpMW");

var _helpers = __webpack_require__("hKI6");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render the tabs navigation of the container.
 *
 * @param  {Object}        props
 * @param  {Array}         prop.tabs
 * @param  {Function}      prop.handleClick
 * @return {React.Element}
 */
var ContainerTabsNav = exports.ContainerTabsNav = function ContainerTabsNav(_ref) {
  var tabs = _ref.tabs,
      handleClick = _ref.handleClick;

  return _react2.default.createElement(
    'ul',
    { className: 'carbon-tabs-nav' },
    tabs.map(function (_ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          active = _ref2.active;
      return _react2.default.createElement(
        'li',
        { key: id, className: (0, _classnames2.default)({ active: active }) },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: handleClick(id) },
          name
        )
      );
    })
  );
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
ContainerTabsNav.propTypes = {
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string,
    name: _propTypes2.default.string,
    active: _propTypes2.default.bool
  })),
  handleClick: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * The handlers passed to the component.
 */
(0, _recompose.withHandlers)({
  handleClick: function handleClick(_ref3) {
    var onClick = _ref3.onClick;
    return function (tabId) {
      return (0, _helpers.preventDefault)(function () {
        return onClick(tabId);
      });
    };
  }
}));

/**
 * Enhance the component.
 *
 * @type {React.Component}
 */
var EnhancedContainerTabsNav = enhance(ContainerTabsNav);

/**
 * Validate the props.
 *
 * @type {Object}
 */
EnhancedContainerTabsNav.propTypes = {
  onClick: _propTypes2.default.func
};

exports.default = EnhancedContainerTabsNav;

/***/ }),

/***/ "SldL":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "TJez":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("TJez");

/***/ }),

/***/ "TNQM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ComplexField = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__("M4fF");

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _sortableList = __webpack_require__("sefJ");

var _sortableList2 = _interopRequireDefault(_sortableList);

var _group = __webpack_require__("wkKH");

var _group2 = _interopRequireDefault(_group);

var _actions = __webpack_require__("H4aE");

var _actions2 = _interopRequireDefault(_actions);

var _popover = __webpack_require__("hIJa");

var _popover2 = _interopRequireDefault(_popover);

var _tabs = __webpack_require__("at12");

var _tabs2 = _interopRequireDefault(_tabs);

var _emptyNotice = __webpack_require__("NHf6");

var _emptyNotice2 = _interopRequireDefault(_emptyNotice);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _selectors = __webpack_require__("ZMHW");

var _actions3 = __webpack_require__("HRbf");

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a group(s) of fields.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Boolean}       props.tabbed
 * @param  {Boolean}       props.popoverVisible
 * @param  {Object}        props.sortableTabsOptions
 * @param  {Object}        props.sortableGroupsOptions
 * @param  {Function}      props.isGroupActive
 * @param  {Function}      props.handlePopoverClose
 * @param  {Function}      props.handleTabClick
 * @param  {Function}      props.handleAddGroupClick
 * @param  {Function}      props.handleToggleAllGroupsClick
 * @param  {Function}      props.handleCloneGroupClick
 * @param  {Function}      props.handleRemoveGroupClick
 * @param  {Function}      props.handleSort
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
var ComplexField = exports.ComplexField = function ComplexField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    enabledGroupTypes = _ref.enabledGroupTypes,
	    tabbed = _ref.tabbed,
	    popoverVisible = _ref.popoverVisible,
	    groupToggles = _ref.groupToggles,
	    sortableTabsOptions = _ref.sortableTabsOptions,
	    sortableGroupsOptions = _ref.sortableGroupsOptions,
	    isGroupActive = _ref.isGroupActive,
	    expandGroup = _ref.expandGroup,
	    collapseGroup = _ref.collapseGroup,
	    allGroupsCollapsed = _ref.allGroupsCollapsed,
	    handlePopoverClose = _ref.handlePopoverClose,
	    handleTabClick = _ref.handleTabClick,
	    handleAddGroupClick = _ref.handleAddGroupClick,
	    handleToggleAllGroupsClick = _ref.handleToggleAllGroupsClick,
	    handleCloneGroupClick = _ref.handleCloneGroupClick,
	    handleRemoveGroupClick = _ref.handleRemoveGroupClick,
	    handleGroupExpand = _ref.handleGroupExpand,
	    handleGroupCollapse = _ref.handleGroupCollapse,
	    handleSort = _ref.handleSort;

	var availableGroups = (0, _lodash.filter)(field.group_types, function (groupType) {
		return (0, _lodash.includes)(enabledGroupTypes, groupType.name);
	});

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'div',
			{ className: (0, _classnames2.default)('carbon-subcontainer', 'carbon-grid', { 'multiple-groups': field.multiple_groups }, { 'carbon-complex-tabbed': tabbed }) },
			_react2.default.createElement(_emptyNotice2.default, {
				label: field.labels.plural_name,
				visible: !field.value.length,
				onClick: handleAddGroupClick }),
			_react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('groups-wrapper', 'layout-' + field.layout) },
				_react2.default.createElement(
					_sortableList2.default,
					{ options: sortableTabsOptions, onSort: handleSort },
					_react2.default.createElement(
						_tabs2.default,
						{
							show: tabbed,
							layout: field.layout,
							groups: field.value,
							current: field.ui.current_tab,
							onClick: handleTabClick,
							onSort: handleSort },
						_react2.default.createElement(
							_actions2.default,
							{
								showAddButton: !(0, _lodash.isEmpty)(availableGroups),
								addButtonText: '+',
								onAddClick: handleAddGroupClick,
								onToggleAllClick: handleToggleAllGroupsClick,
								showCollapseAllButton: false,
								collapseAllButtonText: '' },
							_react2.default.createElement(_popover2.default, {
								groups: availableGroups,
								visible: popoverVisible,
								onItemClick: handleAddGroupClick,
								onClose: handlePopoverClose,
								outsideClickIgnoreClass: 'carbon-button' })
						)
					)
				),
				_react2.default.createElement(
					_sortableList2.default,
					{ options: sortableGroupsOptions, onSort: handleSort },
					_react2.default.createElement(
						'div',
						{ className: 'carbon-groups-holder' },
						field.value.map(function (group, index) {
							return _react2.default.createElement(_group2.default, {
								key: index,
								index: index,
								prefix: name,
								layout: field.layout,
								group: group,
								active: isGroupActive(group.id),
								cloneEnabled: field.duplicate_groups_allowed && !(0, _lodash.isEmpty)(availableGroups),
								onClone: handleCloneGroupClick,
								onRemove: handleRemoveGroupClick,
								onExpand: handleGroupExpand,
								onCollapse: handleGroupCollapse });
						})
					)
				)
			),
			_react2.default.createElement(
				_actions2.default,
				{
					showAddButton: !(0, _lodash.isEmpty)(availableGroups),
					addButtonText: carbonFieldsL10n.field.complexAddButton.replace('%s', field.labels.singular_name),
					onAddClick: handleAddGroupClick,
					onToggleAllClick: handleToggleAllGroupsClick,
					showCollapseAllButton: !(0, _lodash.isEmpty)(field.value),
					collapseAllButtonText: allGroupsCollapsed ? carbonFieldsL10n.field.complexExpandAllButton : carbonFieldsL10n.field.complexCollapseAllButton },
				_react2.default.createElement(_popover2.default, {
					groups: availableGroups,
					visible: popoverVisible,
					onItemClick: handleAddGroupClick,
					onClose: handlePopoverClose,
					outsideClickIgnoreClass: 'carbon-button' })
			)
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
/**
 * The external dependencies.
 */
ComplexField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			id: _propTypes2.default.string,
			name: _propTypes2.default.string,
			label: _propTypes2.default.string,
			fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
				id: _propTypes2.default.string,
				name: _propTypes2.default.string,
				type: _propTypes2.default.string
			}))
		})),
		duplicate_groups_allowed: _propTypes2.default.bool,
		enabledGroupTypes: _propTypes2.default.arrayOf(_propTypes2.default.string),
		group_types: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			name: _propTypes2.default.string,
			label: _propTypes2.default.string
		})),
		layout: _propTypes2.default.string,
		labels: _propTypes2.default.shape({
			plural_name: _propTypes2.default.string,
			singular_name: _propTypes2.default.string
		}),
		ui: _propTypes2.default.shape({
			current_tab: _propTypes2.default.string
		}),
		multiple_groups: _propTypes2.default.bool,
		min: _propTypes2.default.number,
		max: _propTypes2.default.number
	}),
	tabbed: _propTypes2.default.bool,
	popoverVisible: _propTypes2.default.bool,
	isGroupActive: _propTypes2.default.func,
	handlePopoverClose: _propTypes2.default.func,
	handleTabClick: _propTypes2.default.func,
	handleAddGroupClick: _propTypes2.default.func,
	handleToggleAllGroupsClick: _propTypes2.default.func,
	handleCloneGroupClick: _propTypes2.default.func,
	handleRemoveGroupClick: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(function (state, props) {
	return {
		tabbed: (0, _selectors.isFieldTabbed)(state, props.id)
	};
}, {
	addComplexGroup: _actions3.addComplexGroup,
	cloneComplexGroup: _actions3.cloneComplexGroup,
	removeComplexGroup: _actions3.removeComplexGroup,
	expandComplexGroup: _actions3.expandComplexGroup,
	collapseComplexGroup: _actions3.collapseComplexGroup,
	switchComplexTab: _actions3.switchComplexTab,
	startComplexGroupDrag: _actions3.startComplexGroupDrag,
	stopComplexGroupDrag: _actions3.stopComplexGroupDrag
}),

/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)({
	componentDidMount: function componentDidMount() {
		var _props = this.props,
		    field = _props.field,
		    tabbed = _props.tabbed,
		    setupField = _props.setupField,
		    setupValidation = _props.setupValidation,
		    setUI = _props.setUI;
		var ui = this.props.ui;

		// Show the first tab of the complex.

		if (tabbed && field.value.length) {
			ui = (0, _extends3.default)({}, ui, {
				current_tab: field.value[0].id
			});
		}

		setupField(field.id, field.type, ui);

		setupValidation(field.id, _constants.VALIDATION_COMPLEX);
	}
}),

/**
 * Pass some props to the component.
 */
(0, _recompose.withProps)(function (_ref2) {
	var field = _ref2.field,
	    collapseComplexGroup = _ref2.collapseComplexGroup,
	    startComplexGroupDrag = _ref2.startComplexGroupDrag,
	    stopComplexGroupDrag = _ref2.stopComplexGroupDrag;

	var sortableTabsOptions = {
		items: '.group-tab-item',
		placeholder: 'group-tab-item ui-placeholder-highlight',
		forcePlaceholderSize: true
	};

	if (field.layout === _constants.COMPLEX_LAYOUT_TABBED_VERTICAL) {
		sortableTabsOptions.axis = 'y';
	}

	var sortableGroupsOptions = {
		items: '> .carbon-group-row',
		handle: '.carbon-drag-handle',
		placeholder: 'carbon-group-row ui-placeholder-highlight'
	};

	if (field.layout === _constants.COMPLEX_LAYOUT_GRID) {
		sortableGroupsOptions.start = function (e, ui) {
			var fieldId = field.id;
			var groupId = ui.item[0].id;


			collapseComplexGroup(fieldId, groupId);
			startComplexGroupDrag(fieldId, groupId);
		};

		sortableGroupsOptions.stop = function (e, ui) {
			stopComplexGroupDrag(field.id, ui.item[0].id);
		};
	}

	var enabledGroupTypes = (0, _lodash.map)(field.group_types, 'name');
	if (!field.duplicate_groups_allowed) {
		enabledGroupTypes = (0, _lodash.filter)(enabledGroupTypes, function (groupType) {
			return (0, _lodash.findIndex)(field.value, { name: groupType }) === -1;
		});
	}

	if (field.max > 0 && field.value.length >= field.max) {
		enabledGroupTypes = [];
	}

	var allGroupsCollapsed = (0, _lodash.every)(field.value, function (group) {
		return group.collapsed;
	});

	return {
		sortableTabsOptions: sortableTabsOptions,
		sortableGroupsOptions: sortableGroupsOptions,
		enabledGroupTypes: enabledGroupTypes,
		allGroupsCollapsed: allGroupsCollapsed
	};
}),

/**
 * Control the visibility of the popover.
 */
(0, _recompose.withState)('popoverVisible', 'setPopoverVisibility', false),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	isGroupActive: function isGroupActive(_ref3) {
		var field = _ref3.field,
		    tabbed = _ref3.tabbed;
		return function (groupId) {
			return tabbed && field.ui.current_tab === groupId;
		};
	},
	handlePopoverClose: function handlePopoverClose(_ref4) {
		var setPopoverVisibility = _ref4.setPopoverVisibility;
		return function () {
			return setPopoverVisibility(false);
		};
	},
	handleTabClick: function handleTabClick(_ref5) {
		var field = _ref5.field,
		    switchComplexTab = _ref5.switchComplexTab;
		return function (groupId) {
			return switchComplexTab(field.id, groupId);
		};
	},
	handleCloneGroupClick: function handleCloneGroupClick(_ref6) {
		var field = _ref6.field,
		    cloneComplexGroup = _ref6.cloneComplexGroup;
		return function (groupId) {
			return cloneComplexGroup(field.id, groupId);
		};
	},
	handleRemoveGroupClick: function handleRemoveGroupClick(_ref7) {
		var field = _ref7.field,
		    removeComplexGroup = _ref7.removeComplexGroup;
		return function (groupId) {
			return removeComplexGroup(field.id, groupId);
		};
	},
	handleGroupExpand: function handleGroupExpand(_ref8) {
		var field = _ref8.field,
		    expandComplexGroup = _ref8.expandComplexGroup;
		return function (groupId) {
			return expandComplexGroup(field.id, groupId);
		};
	},
	handleGroupCollapse: function handleGroupCollapse(_ref9) {
		var field = _ref9.field,
		    collapseComplexGroup = _ref9.collapseComplexGroup;
		return function (groupId) {
			return collapseComplexGroup(field.id, groupId);
		};
	},

	handleAddGroupClick: function handleAddGroupClick(_ref10) {
		var field = _ref10.field,
		    popoverVisible = _ref10.popoverVisible,
		    setPopoverVisibility = _ref10.setPopoverVisibility,
		    addComplexGroup = _ref10.addComplexGroup;
		return function (groupName) {
			if (field.multiple_groups) {
				setPopoverVisibility(!popoverVisible);
			} else {
				groupName = field.group_types[0].name;
			}

			if (groupName) {
				addComplexGroup(field.id, groupName);
			}
		};
	},

	handleToggleAllGroupsClick: function handleToggleAllGroupsClick(_ref11) {
		var field = _ref11.field,
		    allGroupsCollapsed = _ref11.allGroupsCollapsed,
		    expandComplexGroup = _ref11.expandComplexGroup,
		    collapseComplexGroup = _ref11.collapseComplexGroup;
		return function () {
			for (var i = 0; i < field.value.length; i++) {
				var group = field.value[i];
				if (group.collapsed === allGroupsCollapsed) {
					if (allGroupsCollapsed) {
						expandComplexGroup(field.id, group.id);
					} else {
						collapseComplexGroup(field.id, group.id);
					}
				}
			}
		};
	},

	handleSort: function handleSort(_ref12) {
		var field = _ref12.field,
		    setFieldValue = _ref12.setFieldValue,
		    expandComplexGroup = _ref12.expandComplexGroup;
		return function (groups, event, ui) {
			// Cache the id attribute of the group, because the next line
			// will re-order DOM and we will lose the correct group's id.
			var groupId = ui.item[0].id;

			setFieldValue(field.id, (0, _lodash.sortBy)(field.value, function (group) {
				return groups.indexOf(group.id);
			}));
			expandComplexGroup(field.id, groupId);
		};
	}
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_COMPLEX])(enhance(ComplexField));

/***/ }),

/***/ "TRFV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__("M4fF");

var _equality = __webpack_require__("Eql7");

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__("r/IV");

var _contain2 = _interopRequireDefault(_contain);

var _scalar = __webpack_require__("1qlA");

var _scalar2 = _interopRequireDefault(_scalar);

var _base = __webpack_require__("94C5");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _extends3.default)({}, _base2.default, {

	/**
  * The supported comparers.
  *
  * @type {Function[]}
  */
	comparers: [_equality2.default, _contain2.default, _scalar2.default],

	/**
  * Check if the condition is fulfiled.
  *
  * @param  {Object}  definition
  * @param  {Object}  env
  * @return {Boolean}
  */
	isFulfiled: function isFulfiled(definition, env) {
		var compare = definition.compare,
		    value = definition.value;


		return this.firstSupportedComparerIsCorrect(env.post_level, compare, value);
	}
}); /**
     * The external dependecies.
     */

/***/ }),

/***/ "Ta9K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.SearchInput = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _lodash = __webpack_require__("M4fF");

var _constants = __webpack_require__("+5vj");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render the field used to filter the available options
 * inside the oembed field.
 *
 * @param  {Object} 	   props
 * @param  {String} 	   [props.name]
 * @param  {String} 	   props.term
 * @param  {Function} 	   props.handleKeyDown
 * @param  {Function} 	   props.handleChange
 * @return {React.Element}
 */
var SearchInput = exports.SearchInput = function SearchInput(_ref) {
	var name = _ref.name,
	    term = _ref.term,
	    handleKeyDown = _ref.handleKeyDown,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		'div',
		{ className: 'search-field carbon-association-search dashicons-before dashicons-search' },
		_react2.default.createElement('input', {
			type: 'text',
			defaultValue: term,
			name: name,
			className: 'search-field',
			placeholder: carbonFieldsL10n.field.searchPlaceholder,
			onKeyDown: handleKeyDown,
			onChange: handleChange })
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
SearchInput.propTypes = {
	name: _propTypes2.default.string,
	term: _propTypes2.default.string,
	handleSubmit: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Setup the default props.
 */
(0, _recompose.defaultProps)({
	onSubmit: function onSubmit() {}
}),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	debouncedOnChange: function debouncedOnChange(_ref2) {
		var onSubmit = _ref2.onSubmit;
		return (0, _lodash.debounce)(function (v) {
			return onSubmit(v);
		}, 200);
	},
	handleSubmit: function handleSubmit(_ref3) {
		var onSubmit = _ref3.onSubmit;
		return function (e) {
			onSubmit(e.target.value);
		};
	}
}),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref4) {
		var debouncedOnChange = _ref4.debouncedOnChange;
		return function (_ref5) {
			var value = _ref5.target.value;
			return debouncedOnChange(value);
		};
	},
	handleKeyDown: function handleKeyDown(_ref6) {
		var handleSubmit = _ref6.handleSubmit;
		return function (e) {
			if (e.keyCode === _constants.KEY_ENTER) {
				e.preventDefault();

				handleSubmit(e);
			}
		};
	}
}));

exports.default = enhance(SearchInput);

/***/ }),

/***/ "To3L":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("lktj");
var gOPS = __webpack_require__("1kS7");
var pIE = __webpack_require__("NpIQ");
var toObject = __webpack_require__("sB3e");
var IObject = __webpack_require__("MU5D");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("S82l")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "U5ju":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("M6a0");
__webpack_require__("zQR9");
__webpack_require__("+tPU");
__webpack_require__("CXw9");
__webpack_require__("EqBC");
__webpack_require__("jKW+");
module.exports = __webpack_require__("FeBl").Promise;


/***/ }),

/***/ "ULb7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__("M4fF");

var _equality = __webpack_require__("Eql7");

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__("r/IV");

var _contain2 = _interopRequireDefault(_contain);

var _scalar = __webpack_require__("1qlA");

var _scalar2 = _interopRequireDefault(_scalar);

var _base = __webpack_require__("94C5");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _extends3.default)({}, _base2.default, {

	/**
  * The supported comparers.
  *
  * @type {Function[]}
  */
	comparers: [_equality2.default, _contain2.default, _scalar2.default],

	/**
  * Check if the condition is fulfiled.
  *
  * @param  {Object}  definition
  * @param  {Object}  env
  * @return {Boolean}
  */
	isFulfiled: function isFulfiled(definition, env) {
		var compare = definition.compare,
		    value = definition.value;


		return this.firstSupportedComparerIsCorrect(env.post_parent_id, compare, value);
	}
}); /**
     * The external dependecies.
     */

/***/ }),

/***/ "UUD5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = foreman;

var _effects = __webpack_require__("egdi");

var _events = __webpack_require__("x1uS");

var _helpers = __webpack_require__("hKI6");

var _actions = __webpack_require__("vVye");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                 * The external dependencies.
                                                                 */


/**
 * The internal dependencies.
 */


/**
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
	var channel, _ref, event;

	return _regenerator2.default.wrap(function foreman$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _effects.call)(_events.createSubmitChannel, '.comment-php form#post');

				case 2:
					channel = _context.sent;

				case 3:
					if (false) {
						_context.next = 17;
						break;
					}

					_context.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref = _context.sent;
					event = _ref.event;
					_context.next = 10;
					return (0, _effects.put)((0, _actions.submitForm)(event));

				case 10:
					_context.next = 12;
					return (0, _effects.put)((0, _actions.validateAllContainers)(event));

				case 12:
					if (!carbonFieldsConfig.compactInput) {
						_context.next = 15;
						break;
					}

					_context.next = 15;
					return (0, _helpers.compactInput)(event.target);

				case 15:
					_context.next = 3;
					break;

				case 17:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

/***/ }),

/***/ "UUee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__("hKI6");

(0, _helpers.autoload)(__webpack_require__("7wqa")); /**
                                                                  * The internal dependencies.
                                                                  */

(0, _helpers.autoload)(__webpack_require__("VZc3"));
(0, _helpers.autoload)(__webpack_require__("jcf5"));
(0, _helpers.autoload)(__webpack_require__("g1oQ"));
(0, _helpers.autoload)(__webpack_require__("R67r"));

/***/ }),

/***/ "V3tA":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("R4wc");
module.exports = __webpack_require__("FeBl").Object.assign;


/***/ }),

/***/ "VXi7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("VXi7");

/***/ }),

/***/ "VZc3":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actions.js": "vVye",
	"./comparers/any-contain.js": "eA7W",
	"./comparers/any-equality.js": "O2K7",
	"./comparers/base.js": "W0zY",
	"./comparers/contain.js": "r/IV",
	"./comparers/equality.js": "Eql7",
	"./comparers/scalar.js": "1qlA",
	"./components/comment-meta/index.js": "zxBS",
	"./components/container/base.js": "yCLc",
	"./components/container/index.js": "Mq2Y",
	"./components/container/nonce.js": "EFYB",
	"./components/container/plain.js": "tSl/",
	"./components/container/tabbed.js": "p4VO",
	"./components/container/tabs-nav.js": "SeFE",
	"./components/container/tabs.js": "h4Rt",
	"./components/nav-menu-item/index.js": "z4Sh",
	"./components/network/index.js": "dHlV",
	"./components/post-meta/index.js": "xpIl",
	"./components/term-meta/index.js": "ggOi",
	"./components/theme-options/index.js": "tKUU",
	"./components/user-meta/index.js": "pT4M",
	"./components/widget/index.js": "Xym8",
	"./conditions/base.js": "94C5",
	"./conditions/boolean.js": "5v7t",
	"./conditions/index.js": "f5wq",
	"./conditions/post-ancestor-id.js": "R5uo",
	"./conditions/post-format.js": "bpo7",
	"./conditions/post-level.js": "TRFV",
	"./conditions/post-parent-id.js": "ULb7",
	"./conditions/post-template.js": "fl3K",
	"./conditions/post-term.js": "e/TA",
	"./conditions/term-ancestor.js": "fKV9",
	"./conditions/term-level.js": "GVVa",
	"./conditions/term-parent.js": "bNNj",
	"./conditions/user-role.js": "iqss",
	"./constants.js": "5B/B",
	"./decorators/with-setup.js": "Zn/G",
	"./decorators/with-store.js": "mbsf",
	"./factory.js": "arVC",
	"./reducer.js": "bB03",
	"./sagas/base.js": "iBkS",
	"./sagas/comment-meta.js": "UUD5",
	"./sagas/common/option-page.js": "79qw",
	"./sagas/nav-menu.js": "9FSX",
	"./sagas/network.js": "kZct",
	"./sagas/post-meta.js": "vcdB",
	"./sagas/term-meta.js": "dFJM",
	"./sagas/theme-options.js": "lVTZ",
	"./sagas/user-meta.js": "voy6",
	"./sagas/validation.js": "ATFI",
	"./sagas/visibility.js": "/Nb7",
	"./sagas/widget.js": "emRj",
	"./selectors.js": "pL4W"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "VZc3";

/***/ }),

/***/ "W0zY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (operators) {
  return {
    supportsOperator: function supportsOperator(operator) {
      return operators.indexOf(operator) > -1;
    }
  };
};

/***/ }),

/***/ "W2nU":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "WkB4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhance = exports.HtmlField = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render custom HTML markup.
 *
 * @param  {Object}        props
 * @param  {Object}        props.field
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
var HtmlField = exports.HtmlField = function HtmlField(_ref) {
  var field = _ref.field;

  return _react2.default.createElement(
    _field2.default,
    { field: field },
    _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: field.html } })
  );
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
/**
 * The external dependencies.
 */
HtmlField.propTypes = {
  field: _propTypes2.default.shape({
    html: _propTypes2.default.string
  })
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(),

/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)());

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_HTML])(enhance(HtmlField));

/***/ }),

/***/ "Wtfs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ready = undefined;

var _reduxActions = __webpack_require__("sTbe");

/**
 * Everything is loaded and rendered.
 *
 * @return {Object}
 */
var ready = exports.ready = (0, _reduxActions.createAction)('lib/READY'); /**
                                                                           * The external dependencies.
                                                                           */

/***/ }),

/***/ "X8DO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("X8DO");

/***/ }),

/***/ "XXDi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.shouldValidate = shouldValidate;
exports.workerValidate = workerValidate;
exports.workerSetup = workerSetup;
exports.default = foreman;

var _reduxSaga = __webpack_require__("igqX");

var _effects = __webpack_require__("egdi");

var _lodash = __webpack_require__("M4fF");

var _registry = __webpack_require__("uokr");

var _actions = __webpack_require__("HRbf");

var _selectors = __webpack_require__("ZMHW");

var _helpers = __webpack_require__("pP85");

var _api = __webpack_require__("GfEj");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerValidate),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerSetup),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Determine when the action should be handled by the current handler.
 *
 * @param  {Object}  action
 * @param  {String}  fieldId
 * @return {Boolean}
 */
function shouldValidate(action, fieldId) {
	var payload = action.payload;


	if (payload.fieldId !== fieldId) {
		return false;
	}

	return true;
}

/**
 * Run the validator.
 *
 * @param  {Function} validator
 * @param  {String}   fieldId
 * @param  {Boolean}  debounce
 * @param  {Object}   action
 * @return {void}
 */
function workerValidate(validator, fieldId, debounce, action) {
	var field, _field$ui, is_visible, valid, error;

	return _regenerator2.default.wrap(function workerValidate$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (shouldValidate(action, fieldId)) {
						_context.next = 2;
						break;
					}

					return _context.abrupt('return');

				case 2:
					if (!debounce) {
						_context.next = 5;
						break;
					}

					_context.next = 5;
					return (0, _effects.call)(_reduxSaga.delay, 250);

				case 5:
					_context.next = 7;
					return (0, _effects.select)(_selectors.getFieldById, fieldId);

				case 7:
					field = _context.sent;
					_field$ui = field.ui, is_visible = _field$ui.is_visible, valid = _field$ui.valid;

					// We don't care about the hidden inputs.

					if (is_visible) {
						_context.next = 14;
						break;
					}

					if (valid) {
						_context.next = 13;
						break;
					}

					_context.next = 13;
					return (0, _effects.put)((0, _actions.markFieldAsValid)(field.id));

				case 13:
					return _context.abrupt('return');

				case 14:
					_context.next = 16;
					return (0, _effects.call)(validator, field);

				case 16:
					error = _context.sent;
					_context.next = 19;
					return (0, _effects.call)(_api.userValidateField, fieldId, error);

				case 19:
					error = _context.sent;

					if (!(0, _lodash.isNull)(error)) {
						_context.next = 25;
						break;
					}

					_context.next = 23;
					return (0, _effects.put)((0, _actions.markFieldAsValid)(fieldId));

				case 23:
					_context.next = 27;
					break;

				case 25:
					_context.next = 27;
					return (0, _effects.put)((0, _actions.markFieldAsInvalid)(fieldId, error));

				case 27:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

/**
 * Handle setup of the validation logic.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @param  {String} action.payload.validationType
 * @return {void}
 */
function workerSetup(_ref) {
	var _ref$payload = _ref.payload,
	    fieldId = _ref$payload.fieldId,
	    validationType = _ref$payload.validationType;
	var validators, validator;
	return _regenerator2.default.wrap(function workerSetup$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.call)(_registry.getFieldValidators);

				case 2:
					validators = _context2.sent;
					validator = validators[validationType];

					if (validator) {
						_context2.next = 6;
						break;
					}

					throw new Error('Unknown validation type \'' + validationType + '\' for field \'' + fieldId + '\'.');

				case 6:
					_context2.t0 = _effects.call;
					_context2.t1 = _helpers.stopSaga;
					_context2.t2 = fieldId;
					_context2.next = 11;
					return (0, _effects.all)([(0, _effects.takeLatest)(_actions.setFieldValue, workerValidate, validator.handler, fieldId, validator.debounce), (0, _effects.takeEvery)(_actions.validateField, workerValidate, validator.handler, fieldId, false)]);

				case 11:
					_context2.t3 = _context2.sent;
					_context2.next = 14;
					return (0, _context2.t0)(_context2.t1, _context2.t2, _context2.t3);

				case 14:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/**
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
	return _regenerator2.default.wrap(function foreman$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.all)([(0, _effects.takeEvery)(_actions.setupValidation, workerSetup)]);

				case 2:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

/***/ }),

/***/ "Xd32":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+tPU");
__webpack_require__("zQR9");
module.exports = __webpack_require__("5PlU");


/***/ }),

/***/ "XgCd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "Xxa5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jyFz");


/***/ }),

/***/ "Xym8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__("zpMW");

var _container = __webpack_require__("Mq2Y");

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__("mbsf");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("Zn/G");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.compose)((0, _recompose.setStatic)('type', _constants.TYPE_WIDGET), (0, _withStore2.default)(), (0, _withSetup2.default)())(_container2.default); /**
                                                                                                                                                                                    * The external dependencies.
                                                                                                                                                                                    */

/***/ }),

/***/ "Y8nH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = foreman;

var _reduxSaga = __webpack_require__("igqX");

var _effects = __webpack_require__("egdi");

var _actions = __webpack_require__("HRbf");

var _actions2 = __webpack_require__("vVye");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                 * The external dependencies.
                                                                 */


/**
 * The internal dependencies.
 */


/**
 * [triggerWarning description]
 *
 * @param  {Object} event
 */
function triggerWarning(event) {
	var dialogText = 'Changes that you made may not be saved.';

	event.returnValue = dialogText;
	return dialogText;
}

/**
 * Proxy for attaching/detaching the warning
 *
 * @param  {Bool} isAttached
 * @return {void}
 */
function shouldAttachWarning(isAttached) {
	if (isAttached) {
		detachWarning();
	} else {
		attachWarning();
	}
}

/**
 * Attach warning
 *
 * @return {void}
 */
function attachWarning() {
	window.addEventListener('beforeunload', triggerWarning);
}

/**
 * Detach warning
 *
 * @return {void}
 */
function detachWarning() {
	window.removeEventListener('beforeunload', triggerWarning);
}

/**
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
	var updateChannel, isAttached, action;
	return _regenerator2.default.wrap(function foreman$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _effects.actionChannel)(_actions.setFieldValue, _reduxSaga.buffers.none());

				case 2:
					updateChannel = _context.sent;
					isAttached = false;

				case 4:
					if (false) {
						_context.next = 15;
						break;
					}

					_context.next = 7;
					return (0, _effects.take)(updateChannel);

				case 7:
					action = _context.sent;

					if (action.meta.dirty) {
						_context.next = 10;
						break;
					}

					return _context.abrupt('continue', 4);

				case 10:

					shouldAttachWarning(isAttached);
					isAttached = !isAttached;

					return _context.abrupt('break', 15);

				case 15:
					_context.next = 17;
					return (0, _effects.takeLatest)(_actions.markFieldAsInvalid, function () {
						if (isAttached) {
							return;
						}

						shouldAttachWarning(isAttached);
						isAttached = !isAttached;
					});

				case 17:
					_context.next = 19;
					return (0, _effects.takeLatest)(_actions2.submitForm, function () {
						if (!isAttached) {
							return;
						}

						shouldAttachWarning(isAttached);
						isAttached = !isAttached;
					});

				case 19:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

/***/ }),

/***/ "Yobk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("Yobk");

/***/ }),

/***/ "YyeZ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("YyeZ");

/***/ }),

/***/ "Z+Wa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _searchInput = __webpack_require__("adK+");

var _searchInput2 = _interopRequireDefault(_searchInput);

var _googleMap = __webpack_require__("00U9");

var _googleMap2 = _interopRequireDefault(_googleMap);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _actions = __webpack_require__("HRbf");

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a Google-powered map with an address search field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @param  {Function}      props.handleSearchSubmit
 * @return {React.Element}
 */
/**
 * The external dependencies.
 */
var MapField = function MapField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange,
	    handleSearchSubmit = _ref.handleSearchSubmit;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'div',
			{ className: 'carbon-map-search' },
			_react2.default.createElement(
				'p',
				null,
				carbonFieldsL10n.field.mapLocateAddress
			),
			_react2.default.createElement(_searchInput2.default, {
				name: name + '[address]',
				term: field.value.address,
				disabled: !field.ui.is_visible,
				onSubmit: handleSearchSubmit }),
			_react2.default.createElement('input', {
				type: 'hidden',
				name: name + '[lat]',
				value: field.value.lat,
				disabled: !field.ui.is_visible,
				readOnly: true }),
			_react2.default.createElement('input', {
				type: 'hidden',
				name: name + '[lng]',
				value: field.value.lng,
				disabled: !field.ui.is_visible,
				readOnly: true }),
			_react2.default.createElement('input', {
				type: 'hidden',
				name: name + '[zoom]',
				value: field.value.zoom,
				disabled: !field.ui.is_visible,
				readOnly: true })
		),
		_react2.default.createElement(_googleMap2.default, {
			className: 'carbon-map-canvas',
			lat: field.value.lat,
			lng: field.value.lng,
			zoom: field.value.zoom,
			onChange: handleChange })
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
MapField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		value: _propTypes2.default.shape({
			value: _propTypes2.default.string,
			lat: _propTypes2.default.number,
			lng: _propTypes2.default.number,
			zoom: _propTypes2.default.number,
			address: _propTypes2.default.string
		})
	}),
	handleChange: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(undefined, {
	geocodeAddress: _actions.geocodeAddress
}),

/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)(),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref2) {
		var field = _ref2.field,
		    setFieldValue = _ref2.setFieldValue;
		return function (data) {
			if (data.lat && data.lng) {
				data.value = data.lat + ',' + data.lng;
			}
			setFieldValue(field.id, data, 'assign');
		};
	},
	handleSearchSubmit: function handleSearchSubmit(_ref3) {
		var field = _ref3.field,
		    geocodeAddress = _ref3.geocodeAddress;
		return function (address) {
			return geocodeAddress(field.id, address);
		};
	}
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_MAP])(enhance(MapField));

/***/ }),

/***/ "ZMHW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getComplexGroupLabel = exports.hasInvalidFields = exports.makeGetSidebarFieldOptions = exports.getFieldsByRoots = exports.isFieldTabbed = exports.getFieldsByParent = exports.makeGetFieldsByParent = exports.getFieldHierarchyById = exports.getFieldByHierarchy = exports.getFieldPatternRegex = exports.getComplexGroupById = exports.getFieldParentById = exports.getFieldById = exports.getFields = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__("Gu7T");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _reselect = __webpack_require__("bndy");

var _lodash = __webpack_require__("M4fF");

var _selectors = __webpack_require__("Pa5C");

var _selectors2 = __webpack_require__("pL4W");

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return the object that contains all fields.
 *
 * @param  {Object} state
 * @return {Object}
 */
var getFields = exports.getFields = function getFields(state) {
	return state.fields;
};

/**
 * Return a field object from the state.
 *
 * @param  {Object} state
 * @param  {String} id
 * @return {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
var getFieldById = exports.getFieldById = function getFieldById(state, id) {
	return state.fields[id];
};

/**
 * Return a field's parent object from the state.
 * Warning: skips through groups and returns the parent complex field.
 *
 * @param  {Object} state
 * @param  {String} id
 * @return {Object}
 */
var getFieldParentById = exports.getFieldParentById = function getFieldParentById(state, fieldId) {
	var field = getFieldById(state, fieldId);
	var parent = getFieldById(state, field.parent);

	if ((0, _lodash.isUndefined)(parent)) {
		parent = getComplexGroupById(state, field.parent);
		if (!(0, _lodash.isUndefined)(parent)) {
			parent = parent.field;
		}
	}

	return parent;
};

/**
 * Return a complex group object from the state.
 *
 * @param  {Object} state
 * @param  {String} id
 * @return {Object}
 */
var getComplexGroupById = exports.getComplexGroupById = function getComplexGroupById(state, id) {
	for (var fieldId in state.fields) {
		var field = state.fields[fieldId];
		if (field.type === _constants.TYPE_COMPLEX) {
			for (var i = 0; i < field.value.length; i++) {
				var group = field.value[i];
				if (group.id === id) {
					return {
						index: i,
						group: group,
						field: field
					};
				}
			}
		}
	}
	return undefined;
};

/**
 * Return a regex which matches field names patterns
 * This is a direct translation of Container::get_field_pattern_regex from php
 *
 * @return {Object}
 */
var getFieldPatternRegex = exports.getFieldPatternRegex = function getFieldPatternRegex() {
	return (/^([a-z0-9_\-]+)(\[(\d+)\])?(:([a-z0-9_\-]+))?$/
	);
};

/**
 * Get a field based on its name hierarchy
 * This is a direct translation of Container::get_field_by_name from php
 *
 * @return {Object}
 */
var getFieldByHierarchy = exports.getFieldByHierarchy = function getFieldByHierarchy(state, hierarchy) {
	var regex = getFieldPatternRegex();
	var hierarchyLeft = hierarchy.split(/\//g).filter(function (segment) {
		return segment.trim().length > 0;
	});
	var allFields = state.fields;
	var parentId = '';

	while (hierarchyLeft.length > 0) {
		var segment = hierarchyLeft.shift();
		var segmentPieces = segment.match(regex);

		if ((0, _lodash.isNull)(segmentPieces)) {
			console.warn('Invalid field name pattern used: ' + hierarchy);
			return undefined;
		}

		var fieldName = segmentPieces[1];
		var groupIndex = (0, _lodash.isUndefined)(segmentPieces[3]) ? 0 : segmentPieces[3];

		for (var fieldId in allFields) {
			var field = allFields[fieldId];

			if (field.base_name !== fieldName) {
				continue;
			}

			if (!parentId && field.parentType !== _constants.PARENT_TYPE_CONTAINER) {
				continue;
			}

			if (parentId && field.parent !== parentId) {
				continue;
			}

			if ((0, _lodash.isEmpty)(hierarchyLeft)) {
				return field;
			}

			if (field.type !== _constants.TYPE_COMPLEX) {
				console.warn('Attempted to look for a nested field inside the non-complex field "' + field.base_name + '".');
				return undefined;
			}

			if ((0, _lodash.isUndefined)(field.value[groupIndex])) {
				console.warn('Non-existant group index specified when fetching a value inside a complex field: ' + groupIndex);
				return undefined;
			}

			parentId = field.value[groupIndex].id;
			break;
		}
	}

	console.warn('Could not find the requested field: ' + hierarchy);
	return undefined;
};

/**
 * Get a field's hierarchy name based on its id
 *
 * @return {Object}
 */
var getFieldHierarchyById = exports.getFieldHierarchyById = function getFieldHierarchyById(state, fieldId) {
	var field = getFieldById(state, fieldId);
	var fieldName = field.base_name;

	var parent = getFieldParentById(state, fieldId);
	if (!(0, _lodash.isUndefined)(parent)) {
		var parentGroup = getComplexGroupById(state, field.parent);
		var index = parentGroup.index;
		var group = parentGroup.group.name;
		fieldName = getFieldHierarchyById(state, parent.id) + '[' + index + ']:' + group + '/' + fieldName;
	}
	return fieldName;
};

/**
 * Get a map of the fields that are direct children of the specified parent.
 *
 * @param  {String} parentId
 * @return {Function}
 */
var makeGetFieldsByParent = exports.makeGetFieldsByParent = function makeGetFieldsByParent(parentId) {
	return (0, _reselect.createSelector)(getFields, function (fields) {
		return (0, _lodash.mapValues)((0, _lodash.keyBy)((0, _lodash.filter)(fields, ['parent', parentId]), 'base_name'), 'id');
	});
};

/**
 * Get the fields that are direct children of the specified parent.
 *
 * @param  {String} parentId
 * @return {Function}
 */
var getFieldsByParent = exports.getFieldsByParent = function getFieldsByParent(state, parentId) {
	return (0, _lodash.pickBy)(getFields(state), function (_ref) {
		var parent = _ref.parent;
		return parent === parentId;
	});
};

/**
 * Check whether the field should be rendered in tabs.
 *
 * @param  {String}  fieldId
 * @return {Boolean}
 */
var isFieldTabbed = exports.isFieldTabbed = (0, _reselect.createSelector)(getFieldById, function (field) {
	return field.layout && field.layout.indexOf('tabbed') > -1;
});

/**
 * Get all fields that are associated with the specified roots.
 *
 * @param  {Object}   state
 * @param  {String[]} roots
 * @return {String[]}
 */
var getFieldsByRoots = exports.getFieldsByRoots = function getFieldsByRoots(state, roots) {
	var fields = getFields(state);
	var ids = [];

	var walk = function walk(roots, accumulator) {
		roots.forEach(function (field) {
			accumulator.push(field.id);

			if (field.type === _constants.TYPE_COMPLEX) {
				fields[field.id].value.forEach(function (group) {
					return walk(group.fields, accumulator);
				});
			}
		});
	};

	walk(roots, ids);

	return ids;
};

/**
 * Generate the list of options used by the field.
 * Use a factory function to achieve correct memoization
 * of the result.
 *
 * @see https://github.com/reactjs/reselect#accessing-react-props-in-selectors
 * @return {Function}
 */
var makeGetSidebarFieldOptions = exports.makeGetSidebarFieldOptions = function makeGetSidebarFieldOptions() {
	return (0, _reselect.createSelector)([getFieldById, _selectors.getSidebars], function (field, sidebars) {
		var excluded = (0, _lodash.get)(field, 'excluded_sidebars', []);

		sidebars = (0, _lodash.filter)(sidebars, function (_ref2) {
			var id = _ref2.id,
			    name = _ref2.name;
			return excluded.indexOf(id) === -1 && excluded.indexOf(name) === -1;
		});
		sidebars = (0, _lodash.map)(sidebars, function (_ref3) {
			var id = _ref3.id,
			    name = _ref3.name;
			return { label: name, value: id };
		});

		return [].concat((0, _toConsumableArray3.default)(sidebars), (0, _toConsumableArray3.default)(field.options));
	});
};

/**
 * Check for invalid field(s).
 *
 * @param  {Object} fields
 * @return {Boolean}
 */
var hasInvalidFields = exports.hasInvalidFields = (0, _reselect.createSelector)(getFields, function (fields) {
	return (0, _lodash.some)(fields, ['ui.valid', false]);
});

/**
 * Compile Lodash template of the group's label.
 *
 * @param  {Object} state
 * @param  {Object} group
 * @return {String}
 */
var getComplexGroupLabel = exports.getComplexGroupLabel = function getComplexGroupLabel(state, group, index) {
	if ((0, _lodash.isNull)(group.label_template)) {
		return group.label;
	}

	var fields = (0, _lodash.pick)(getFields(state), (0, _lodash.map)(group.fields, 'id'));
	var fieldValues = (0, _lodash.mapValues)((0, _lodash.mapKeys)(fields, function (f, k) {
		return f.base_name.replace(/\-/g, '_');
	}), 'value');

	try {
		var args = (0, _extends3.default)({
			fields: fields,
			$_index: index
		}, fieldValues);
		return (0, _lodash.template)(group.label_template)(args);
	} catch (e) {
		console.error(e);
	}
	return 'N/A';
};

/***/ }),

/***/ "ZaQb":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("EqjI");
var anObject = __webpack_require__("77Pl");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("+ZMJ")(Function.call, __webpack_require__("LKZe").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "Zn/G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
	var meta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var ui = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	meta = (0, _extends3.default)({}, defaultMeta, meta);

	ui = (0, _extends3.default)({}, defaultUI, ui);

	return (0, _recompose.compose)((0, _recompose.withProps)({ meta: meta, ui: ui }), (0, _recompose.lifecycle)(hooks));
};

var _recompose = __webpack_require__("zpMW");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The default lifecycle hooks that will be attached to each container.
 *
 * @type {Object}
 */
var hooks = {
	componentWillMount: function componentWillMount() {
		var _props = this.props,
		    container = _props.container,
		    meta = _props.meta,
		    ui = _props.ui,
		    setupContainer = _props.setupContainer;


		setupContainer(container.id, meta, ui);
	},
	componentWillUnmount: function componentWillUnmount() {
		var _props2 = this.props,
		    container = _props2.container,
		    teardownContainer = _props2.teardownContainer;


		teardownContainer(container.id);
	}
};

/**
 * The default values for the container's meta.
 *
 * @type {Object}
 */
/**
 * The external dependencies.
 */
var defaultMeta = {};

/**
 * The default values for the container's UI.
 *
 * @type {Object}
 */
var defaultUI = {
	is_visible: true,
	current_tab: null,
	tabs_in_url: false
};

/**
 * The factory function that will produce the decorator.
 *
 * @param  {Object}   [meta]
 * @param  {Object}   [ui]
 * @return {Function}
 */

/***/ }),

/***/ "Zrlr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "Zx67":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("fS6E"), __esModule: true };

/***/ }),

/***/ "aCGJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("aCGJ");

/***/ }),

/***/ "adK+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.SearchInput = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _lodash = __webpack_require__("M4fF");

var _constants = __webpack_require__("+5vj");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render the field used to filter the available options
 * inside the association field.
 *
 * @param  {Object} 	   props
 * @param  {String} 	   [props.name]
 * @param  {String} 	   props.term
 * @param  {Boolean} 	   props.disabled
 * @param  {Function} 	   props.handleChange
 * @param  {Function} 	   props.handleSubmit
 * @return {React.Element}
 */
var SearchInput = exports.SearchInput = function SearchInput(_ref) {
	var name = _ref.name,
	    term = _ref.term,
	    disabled = _ref.disabled,
	    handleChange = _ref.handleChange,
	    handleSubmit = _ref.handleSubmit;

	return _react2.default.createElement(
		'div',
		{ className: 'search-field carbon-association-search dashicons-before dashicons-search' },
		_react2.default.createElement('input', {
			type: 'text',
			name: name,
			className: 'search-field',
			placeholder: carbonFieldsL10n.field.searchPlaceholder,
			disabled: disabled,
			defaultValue: term,
			onChange: handleChange,
			onKeyDown: handleSubmit })
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
SearchInput.propTypes = {
	name: _propTypes2.default.string,
	term: _propTypes2.default.string,
	disabled: _propTypes2.default.bool,
	handleChange: _propTypes2.default.func,
	handleSubmit: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Setup the default props.
 */
(0, _recompose.defaultProps)({
	disabled: false,
	onChange: function onChange() {},
	onSubmit: function onSubmit() {}
}),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	debouncedOnChange: function debouncedOnChange(_ref2) {
		var onChange = _ref2.onChange;
		return (0, _lodash.debounce)(function (v) {
			return onChange(v);
		}, 200);
	}
}),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref3) {
		var debouncedOnChange = _ref3.debouncedOnChange;
		return function (_ref4) {
			var value = _ref4.target.value;
			return debouncedOnChange(value);
		};
	},
	handleSubmit: function handleSubmit(_ref5) {
		var onSubmit = _ref5.onSubmit;
		return function (e) {
			if (e.keyCode === _constants.KEY_ENTER) {
				e.preventDefault();

				onSubmit(e.target.value);
			}
		};
	}
}));

exports.default = enhance(SearchInput);

/***/ }),

/***/ "arVC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (store, type) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var id = props.id;

  var Component = (0, _registry.getContainerComponent)(type);
  var node = document.querySelector('.container-' + id);

  if (node) {
    _reactDom2.default.render(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(Component, (0, _extends3.default)({ key: id, type: type }, props))
    ), node);
  }
};

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__("RH2O");

var _registry = __webpack_require__("uokr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "at12":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ComplexTabs = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__("zpMW");

var _tab = __webpack_require__("0Ypz");

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render the navigation of tabs when the layout of complex field is tabbed.
 *
 * @param  {Object}        props
 * @param  {Object[]}      props.groups
 * @param  {Function}      props.isTabActive
 * @param  {Function}      props.handleClick
 * @param  {React.Element} props.children
 * @return {React.Element}
 */
var ComplexTabs = exports.ComplexTabs = function ComplexTabs(_ref) {
	var groups = _ref.groups,
	    isTabActive = _ref.isTabActive,
	    onClick = _ref.onClick,
	    children = _ref.children;

	return _react2.default.createElement(
		'div',
		{ className: 'group-tabs-nav-holder' },
		_react2.default.createElement(
			'ul',
			{ className: 'group-tabs-nav' },
			groups.map(function (group, index) {
				return _react2.default.createElement(_tab2.default, {
					key: index,
					index: index,
					group: group,
					active: isTabActive(group.id),
					onClick: onClick });
			})
		),
		children
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
ComplexTabs.propTypes = {
	groups: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		id: _propTypes2.default.string,
		fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			id: _propTypes2.default.string,
			name: _propTypes2.default.string
		}))
	})),
	show: _propTypes2.default.bool,
	current: _propTypes2.default.string,
	onClick: _propTypes2.default.func,
	children: _propTypes2.default.element
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.branch)(
/**
 * Test to see if the tabs should be rendered.
 */
function (_ref2) {
	var show = _ref2.show;
	return show;
},

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	isTabActive: function isTabActive(_ref3) {
		var current = _ref3.current;
		return function (groupId) {
			return groupId === current;
		};
	}
}),

/**
 * Render the empty component.
 */
_recompose.renderNothing);

exports.default = enhance(ComplexTabs);

/***/ }),

/***/ "bB03":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _handleActions; /**
                     * The external dependencies.
                     */


/**
 * The internal dependencies.
 */


var _objectPathImmutable = __webpack_require__("VXi7");

var _objectPathImmutable2 = _interopRequireDefault(_objectPathImmutable);

var _reduxActions = __webpack_require__("sTbe");

var _lodash = __webpack_require__("M4fF");

var _registry = __webpack_require__("uokr");

var _actions = __webpack_require__("rmae");

var _actions2 = __webpack_require__("vVye");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Update the state for `meta` or `ui` keys.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} key
 * @return {Object}
 */
function setMetaOrUI(state, _ref, key) {
	var payload = _ref.payload;

	state = (0, _objectPathImmutable2.default)(state);

	(0, _lodash.forEach)(payload, function (values, containerId) {
		(0, _lodash.forEach)(values, function (valueData, valueKey) {
			if ((0, _lodash.isObject)(valueData) && !(0, _lodash.isArray)(valueData)) {
				state = state.assign(containerId + '.' + key + '.' + valueKey, valueData);
			} else {
				state = state.set(containerId + '.' + key + '.' + valueKey, valueData);
			}
		});
	});

	return state.value();
}

/**
 * The reducer that handles the `containers` branch.
 */
exports.default = (0, _registry.decorateContainerReducer)((0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, _actions2.setupContainer, function (state, _ref2) {
	var _ref2$payload = _ref2.payload,
	    containerId = _ref2$payload.containerId,
	    meta = _ref2$payload.meta,
	    ui = _ref2$payload.ui;

	return (0, _objectPathImmutable2.default)(state).set(containerId + '.meta', meta).set(containerId + '.ui', ui).value();
}), (0, _defineProperty3.default)(_handleActions, _actions2.addContainer, function (state, _ref3) {
	var payload = _ref3.payload;
	return _objectPathImmutable2.default.set(state, payload.id, payload);
}), (0, _defineProperty3.default)(_handleActions, _actions2.removeContainer, function (state, _ref4) {
	var payload = _ref4.payload;
	return _objectPathImmutable2.default.del(state, payload);
}), (0, _defineProperty3.default)(_handleActions, _actions2.setContainerUI, function (state, action) {
	return setMetaOrUI(state, action, 'ui');
}), (0, _defineProperty3.default)(_handleActions, _actions2.setContainerMeta, function (state, action) {
	return setMetaOrUI(state, action, 'meta');
}), (0, _defineProperty3.default)(_handleActions, _actions2.switchContainerTab, function (state, _ref5) {
	var _ref5$payload = _ref5.payload,
	    containerId = _ref5$payload.containerId,
	    tabId = _ref5$payload.tabId;
	return _objectPathImmutable2.default.set(state, containerId + '.ui.current_tab', tabId);
}), (0, _defineProperty3.default)(_handleActions, _actions.resetStore, function (state, _ref6) {
	var containers = _ref6.payload.containers;
	return containers;
}), _handleActions), {}));

/***/ }),

/***/ "bLrS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.debounce = exports.type = undefined;
exports.handler = handler;

var _lodash = __webpack_require__("M4fF");

var _constants = __webpack_require__("8Hlw");

/**
 * The type of validator.
 *
 * @type {String}
 */
/**
 * The external dependencies.
 */
var type = exports.type = _constants.VALIDATION_COMPLEX;

/**
 * Debounce the validation.
 *
 * @type {Boolean}
 */


/**
 * The internal dependencies.
 */
var debounce = exports.debounce = false;

/**
 * Handle the validation for the complex fields.
 *
 * @param  {Object}      field
 * @return {String|null}
 */
function handler(field) {
	var min = field.min,
	    max = field.max,
	    value = field.value,
	    labels = field.labels,
	    required = field.required;


	if (required && (0, _lodash.isEmpty)(value)) {
		return carbonFieldsL10n.field.messageRequiredField;
	}

	if (min > 0 && value.length < min) {
		var label = min === 1 ? labels.singular_name : labels.plural_name;

		return carbonFieldsL10n.field.complexMinNumRowsNotReached.replace('%1$d', min).replace('%2$s', label.toLowerCase());
	}

	if (max > 0 && value.length > max) {
		var _label = max === 1 ? labels.singular_name : labels.plural_name;

		return carbonFieldsL10n.field.complexMaxNumRowsExceeded.replace('%1$d', max).replace('%2$s', _label.toLowerCase());
	}

	return null;
}

/***/ }),

/***/ "bNNj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__("M4fF");

var _equality = __webpack_require__("Eql7");

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__("r/IV");

var _contain2 = _interopRequireDefault(_contain);

var _scalar = __webpack_require__("1qlA");

var _scalar2 = _interopRequireDefault(_scalar);

var _base = __webpack_require__("94C5");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _extends3.default)({}, _base2.default, {

	/**
  * The supported comparers.
  *
  * @type {Function[]}
  */
	comparers: [_equality2.default, _contain2.default, _scalar2.default],

	/**
  * Check if the condition is fulfiled.
  *
  * @param  {Object}  definition
  * @param  {Object}  env
  * @return {Boolean}
  */
	isFulfiled: function isFulfiled(definition, env) {
		var compare = definition.compare,
		    value = definition.value;


		if ((0, _lodash.isArray)(value)) {
			value = (0, _lodash.map)(value, function (val) {
				return val.term_object.term_id;
			});
		} else {
			value = value.term_object.term_id;
		}

		return this.firstSupportedComparerIsCorrect(env.term_parent_id, compare, value);
	}
}); /**
     * The external dependecies.
     */

/***/ }),

/***/ "bOdI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("C4MV");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "bRrM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var dP = __webpack_require__("evD5");
var DESCRIPTORS = __webpack_require__("+E39");
var SPECIES = __webpack_require__("dSzd")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "bndy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("bndy");

/***/ }),

/***/ "bpo7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__("M4fF");

var _equality = __webpack_require__("Eql7");

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__("r/IV");

var _contain2 = _interopRequireDefault(_contain);

var _base = __webpack_require__("94C5");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The external dependecies.
 */
exports.default = (0, _extends3.default)({}, _base2.default, {

	/**
  * The supported comparers.
  *
  * @type {Function[]}
  */
	comparers: [_equality2.default, _contain2.default],

	/**
  * Check if the condition is fulfiled.
  *
  * @param  {Object}  definition
  * @param  {Object}  env
  * @return {Boolean}
  */
	isFulfiled: function isFulfiled(definition, env) {
		var compare = definition.compare,
		    value = definition.value;


		return this.firstSupportedComparerIsCorrect(env.post_format, compare, value);
	}
});

/**
 * The internal dependencies.
 */

/***/ }),

/***/ "c/Tr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("5zde"), __esModule: true };

/***/ }),

/***/ "cUL2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = exports.type = undefined;
exports.handler = handler;

var _lodash = __webpack_require__("M4fF");

var _constants = __webpack_require__("8Hlw");

/**
 * The type of validator.
 *
 * @type {String}
 */
/**
 * The external dependencies.
 */
var type = exports.type = _constants.VALIDATION_BASE;

/**
 * Debounce the validation.
 *
 * @type {Boolean}
 */


/**
 * The internal dependencies.
 */
var debounce = exports.debounce = true;

/**
 * Handle the validation for most of the fields.
 *
 * @param  {Object}      field
 * @return {String|null}
 */
function handler(field) {
  var hasValue = (0, _lodash.isObject)(field.value) ? !(0, _lodash.isEmpty)(field.value) : !!field.value;
  if (!hasValue) {
    return carbonFieldsL10n.field.messageRequiredField;
  }

  return null;
}

/***/ }),

/***/ "cjEH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _handleActions; /**
                     * The external dependencies.
                     */


/**
 * The internal dependencies.
 */


var _objectPathImmutable = __webpack_require__("VXi7");

var _objectPathImmutable2 = _interopRequireDefault(_objectPathImmutable);

var _reduxActions = __webpack_require__("sTbe");

var _lodash = __webpack_require__("M4fF");

var _constants = __webpack_require__("8Hlw");

var _registry = __webpack_require__("uokr");

var _actions = __webpack_require__("rmae");

var _actions2 = __webpack_require__("HRbf");

var _selectors = __webpack_require__("ZMHW");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The reducer that handles the `fields` branch.
 */
exports.default = (0, _registry.decorateFieldReducer)((0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, (0, _reduxActions.combineActions)(_actions2.setupField, _actions2.setUI), function (state, _ref) {
	var _ref$payload = _ref.payload,
	    fieldId = _ref$payload.fieldId,
	    ui = _ref$payload.ui;
	return _objectPathImmutable2.default.assign(state, fieldId + '.ui', ui);
}), (0, _defineProperty3.default)(_handleActions, _actions2.addFields, function (state, _ref2) {
	var payload = _ref2.payload;
	return (0, _extends3.default)({}, state, payload);
}), (0, _defineProperty3.default)(_handleActions, _actions2.removeFields, function (state, _ref3) {
	var payload = _ref3.payload;
	return (0, _lodash.omit)(state, payload);
}), (0, _defineProperty3.default)(_handleActions, _actions2.updateField, function (state, _ref4) {
	var _ref4$payload = _ref4.payload,
	    fieldId = _ref4$payload.fieldId,
	    data = _ref4$payload.data;
	return _objectPathImmutable2.default.assign(state, fieldId, data);
}), (0, _defineProperty3.default)(_handleActions, _actions2.setFieldValue, function (state, _ref5) {
	var _ref5$payload = _ref5.payload,
	    fieldId = _ref5$payload.fieldId,
	    value = _ref5$payload.value,
	    method = _ref5$payload.method;
	return _objectPathImmutable2.default[method](state, fieldId + '.value', value);
}), (0, _defineProperty3.default)(_handleActions, _actions.resetStore, function (state, _ref6) {
	var fields = _ref6.payload.fields;
	return fields;
}), (0, _defineProperty3.default)(_handleActions, _actions2.markFieldAsValid, function (state, _ref7) {
	var fieldId = _ref7.payload.fieldId;
	return _objectPathImmutable2.default.assign(state, fieldId + '.ui', {
		valid: true,
		error: null
	});
}), (0, _defineProperty3.default)(_handleActions, _actions2.markFieldAsInvalid, function (state, _ref8) {
	var _ref8$payload = _ref8.payload,
	    fieldId = _ref8$payload.fieldId,
	    error = _ref8$payload.error;
	return _objectPathImmutable2.default.assign(state, fieldId + '.ui', {
		valid: false,
		error: error
	});
}), (0, _defineProperty3.default)(_handleActions, _actions2.enableComplexGroupType, function (state, _ref9) {
	var _ref9$payload = _ref9.payload,
	    fieldId = _ref9$payload.fieldId,
	    groupName = _ref9$payload.groupName;

	var index = (0, _lodash.findIndex)(state[fieldId].enabledGroupTypes, groupName);

	return _objectPathImmutable2.default.push(state, fieldId + '.enabledGroupTypes', groupName);
}), (0, _defineProperty3.default)(_handleActions, _actions2.disableComplexGroupType, function (state, _ref10) {
	var _ref10$payload = _ref10.payload,
	    fieldId = _ref10$payload.fieldId,
	    groupName = _ref10$payload.groupName;

	var index = (0, _lodash.findIndex)(state[fieldId].enabledGroupTypes, function (g) {
		return groupName === g;
	});

	return _objectPathImmutable2.default.del(state, fieldId + '.enabledGroupTypes.' + index);
}), (0, _defineProperty3.default)(_handleActions, (0, _reduxActions.combineActions)(_actions2.expandComplexGroup, _actions2.collapseComplexGroup), function (state, _ref11) {
	var _ref11$payload = _ref11.payload,
	    fieldId = _ref11$payload.fieldId,
	    groupId = _ref11$payload.groupId,
	    collapsed = _ref11$payload.collapsed;

	var index = (0, _lodash.findIndex)(state[fieldId].value, { id: groupId });

	return _objectPathImmutable2.default.set(state, fieldId + '.value.' + index + '.collapsed', collapsed);
}), (0, _defineProperty3.default)(_handleActions, _actions2.switchComplexTab, function (state, _ref12) {
	var _ref12$payload = _ref12.payload,
	    fieldId = _ref12$payload.fieldId,
	    groupId = _ref12$payload.groupId;
	return _objectPathImmutable2.default.set(state, fieldId + '.ui.current_tab', groupId);
}), _handleActions), {}));

/***/ }),

/***/ "cxPT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("cxPT");

/***/ }),

/***/ "d6Yu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveSidebar = exports.addSidebar = undefined;

var _reduxActions = __webpack_require__("sTbe");

/**
 * Start a new request to add a sidebar.
 *
 * @param  {String} sidebarName
 * @return {Object}
 */
var addSidebar = exports.addSidebar = (0, _reduxActions.createAction)('sidebars/ADD_SIDEBAR', function (sidebarName) {
  return { sidebarName: sidebarName };
});

/**
 * Add the received sidebar to the store.
 *
 * @param  {Object} sidebar
 * @param  {String} sidebar.id
 * @param  {String} sidebar.name
 * @return {Object}
 */
/**
 * The external dependencies.
 */
var receiveSidebar = exports.receiveSidebar = (0, _reduxActions.createAction)('sidebars/RECEIVE_SIDEBAR');

/***/ }),

/***/ "d7EF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("us/S");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "d7ja":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.SetField = undefined;

var _toConsumableArray2 = __webpack_require__("Gu7T");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _lodash = __webpack_require__("M4fF");

var _helpers = __webpack_require__("hKI6");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _noOptions = __webpack_require__("0RBh");

var _noOptions2 = _interopRequireDefault(_noOptions);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a collection of checkbox inputs.
 *
 * @param  {Object}        props
 * @param  {Object}        props.name
 * @param  {Object}        props.field
 * @param  {Boolean}       props.hasHiddenOptions
 * @param  {Function}      props.isChecked
 * @param  {Function}      props.isHidden
 * @param  {Function}      props.handleChange
 * @param  {Function}      props.showAllOptions
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
var SetField = exports.SetField = function SetField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    hasHiddenOptions = _ref.hasHiddenOptions,
	    isChecked = _ref.isChecked,
	    isHidden = _ref.isHidden,
	    handleChange = _ref.handleChange,
	    showAllOptions = _ref.showAllOptions;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'div',
			{ className: 'carbon-set-list' },
			field.options.map(function (option, index) {
				return _react2.default.createElement(
					'p',
					{ key: index, hidden: isHidden(index) },
					_react2.default.createElement(
						'label',
						null,
						_react2.default.createElement('input', {
							type: 'checkbox',
							name: name + '[' + index + ']',
							value: option.value,
							checked: isChecked(option),
							disabled: !field.ui.is_visible,
							onChange: handleChange }),
						option.label
					)
				);
			}),
			_react2.default.createElement(
				'p',
				{ hidden: hasHiddenOptions },
				_react2.default.createElement(
					'a',
					{ href: '#', className: 'carbon-set-showall', onClick: showAllOptions },
					carbonFieldsL10n.field.setShowAll
				)
			)
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
SetField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.arrayOf(_propTypes2.default.string),
		options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			value: _propTypes2.default.string,
			label: _propTypes2.default.string
		}))
	}),
	hasHiddenOptions: _propTypes2.default.bool,
	isChecked: _propTypes2.default.func,
	isHidden: _propTypes2.default.func,
	handleChange: _propTypes2.default.func,
	showAllOptions: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(),

/**
 * Render "No-Options" component when the field doesn't have options.
 */
(0, _recompose.branch)(
/**
 * Test to see if the "No-Options" should be rendered.
 */
function (_ref2) {
	var options = _ref2.field.options;
	return options && options.length;
},

/**
 * Render the actual field.
 */
(0, _recompose.compose)(
/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)(),

/**
 * Add a local state that will track the
 * "expanded" property.
 */
(0, _recompose.withState)('expanded', 'setExpanded', false),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref3) {
		var field = _ref3.field,
		    setFieldValue = _ref3.setFieldValue;
		return function (_ref4) {
			var target = _ref4.target;
			return setFieldValue(field.id, target.checked ? [].concat((0, _toConsumableArray3.default)(field.value), [target.value]) : (0, _lodash.without)(field.value, target.value));
		};
	},

	isChecked: function isChecked(_ref5) {
		var field = _ref5.field;
		return function (option) {
			return field.value.indexOf(option.value) > -1;
		};
	},
	isHidden: function isHidden(_ref6) {
		var field = _ref6.field,
		    expanded = _ref6.expanded;
		return function (index) {
			return index + 1 > field.limit_options && field.limit_options > 0 && !expanded;
		};
	},
	showAllOptions: function showAllOptions(_ref7) {
		var setExpanded = _ref7.setExpanded;
		return (0, _helpers.preventDefault)(function () {
			return setExpanded(true);
		});
	}
}),

/**
 * Pass an additional set of props to the component.
 */
(0, _recompose.withProps)(function (_ref8) {
	var _ref8$field = _ref8.field,
	    limit_options = _ref8$field.limit_options,
	    options = _ref8$field.options,
	    expanded = _ref8.expanded;
	return {
		hasHiddenOptions: !(limit_options > 0 && options.length > limit_options) || expanded
	};
})),

/**
 * Render the empty component.
 */
(0, _recompose.renderComponent)(_noOptions2.default)));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_SET])(enhance(SetField));

/***/ }),

/***/ "dFJM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.workerSyncTermLevel = workerSyncTermLevel;
exports.workerSyncTermAncestors = workerSyncTermAncestors;
exports.workerReset = workerReset;
exports.workerFormSubmit = workerFormSubmit;
exports.default = foreman;

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _effects = __webpack_require__("egdi");

var _lodash = __webpack_require__("M4fF");

var _actions = __webpack_require__("rmae");

var _helpers = __webpack_require__("33bN");

var _helpers2 = __webpack_require__("hKI6");

var _actions2 = __webpack_require__("Wtfs");

var _events = __webpack_require__("x1uS");

var _factory = __webpack_require__("arVC");

var _factory2 = _interopRequireDefault(_factory);

var _actions3 = __webpack_require__("vVye");

var _selectors = __webpack_require__("pL4W");

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerSyncTermLevel),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerSyncTermAncestors),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(workerReset),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(workerFormSubmit),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Keep in sync the `term_level` property.
 *
 * @param  {Object} containers
 * @return {void}
 */
function workerSyncTermLevel(containers) {
	var _this = this;

	var channel, _loop;

	return _regenerator2.default.wrap(function workerSyncTermLevel$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.call)(_events.createSelectboxChannel, 'select#parent');

				case 2:
					channel = _context2.sent;
					_loop = /*#__PURE__*/_regenerator2.default.mark(function _loop() {
						var _ref, option, level, payload;

						return _regenerator2.default.wrap(function _loop$(_context) {
							while (1) {
								switch (_context.prev = _context.next) {
									case 0:
										_context.next = 2;
										return (0, _effects.take)(channel);

									case 2:
										_ref = _context.sent;
										option = _ref.option;
										level = (0, _helpers2.getSelectOptionLevel)(option) + 1; // +1 since the option is for the parent, not the current term

										payload = (0, _lodash.mapValues)(containers, function () {
											return { term_level: level };
										});
										_context.next = 8;
										return (0, _effects.put)((0, _actions3.setContainerMeta)(payload));

									case 8:
									case 'end':
										return _context.stop();
								}
							}
						}, _loop, _this);
					});

				case 4:
					if (false) {
						_context2.next = 8;
						break;
					}

					return _context2.delegateYield(_loop(), 't0', 6);

				case 6:
					_context2.next = 4;
					break;

				case 8:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked, this);
}

/**
 * Keep in sync the `term_parent_id` and `term_ancestors` properties.
 *
 * @param  {Object} containers
 * @return {void}
 */
function workerSyncTermAncestors(containers) {
	var _this2 = this;

	var channel, _loop2;

	return _regenerator2.default.wrap(function workerSyncTermAncestors$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					_context4.next = 2;
					return (0, _effects.call)(_events.createSelectboxChannel, 'select#parent');

				case 2:
					channel = _context4.sent;
					_loop2 = /*#__PURE__*/_regenerator2.default.mark(function _loop2() {
						var _ref2, option, ancestors, parentId, payload;

						return _regenerator2.default.wrap(function _loop2$(_context3) {
							while (1) {
								switch (_context3.prev = _context3.next) {
									case 0:
										_context3.next = 2;
										return (0, _effects.take)(channel);

									case 2:
										_ref2 = _context3.sent;
										option = _ref2.option;
										ancestors = (0, _helpers2.getSelectOptionAncestors)(option);
										parentId = (0, _lodash.isEmpty)(ancestors) ? 0 : (0, _lodash.last)(ancestors);
										payload = (0, _lodash.mapValues)(containers, function () {
											return {
												term_ancestors: ancestors,
												term_parent_id: parentId
											};
										});
										_context3.next = 9;
										return (0, _effects.put)((0, _actions3.setContainerMeta)(payload));

									case 9:
									case 'end':
										return _context3.stop();
								}
							}
						}, _loop2, _this2);
					});

				case 4:
					if (false) {
						_context4.next = 8;
						break;
					}

					return _context4.delegateYield(_loop2(), 't0', 6);

				case 6:
					_context4.next = 4;
					break;

				case 8:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked2, this);
}

/**
 * Reset the containers when the term is saved.
 *
 * @return {void}
 */
function workerReset(store) {
	var channel, _ref3, settings, data, id, state, containers, _id;

	return _regenerator2.default.wrap(function workerReset$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					_context5.next = 2;
					return (0, _effects.call)(_events.createAjaxChannel, 'ajaxSuccess', 'add-tag');

				case 2:
					channel = _context5.sent;

				case 3:
					if (false) {
						_context5.next = 40;
						break;
					}

					_context5.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref3 = _context5.sent;
					settings = _ref3.settings;
					data = _ref3.data;

					if (!(!(0, _lodash.includes)(settings.data, _constants.ID_PREFIX) || data.querySelector('wp_error'))) {
						_context5.next = 11;
						break;
					}

					return _context5.abrupt('continue', 3);

				case 11:
					_context5.next = 13;
					return (0, _effects.select)(_selectors.getContainers);

				case 13:
					_context5.t0 = _regenerator2.default.keys(_context5.sent);

				case 14:
					if ((_context5.t1 = _context5.t0()).done) {
						_context5.next = 25;
						break;
					}

					id = _context5.t1.value;
					_context5.t2 = _effects.call;
					_context5.t3 = _reactDom2.default.unmountComponentAtNode;
					_context5.next = 20;
					return (0, _effects.call)([document, document.querySelector], '.container-' + id);

				case 20:
					_context5.t4 = _context5.sent;
					_context5.next = 23;
					return (0, _context5.t2)(_context5.t3, _context5.t4);

				case 23:
					_context5.next = 14;
					break;

				case 25:

					// Get the initial state.
					state = (0, _helpers.normalizePreloadedState)(window.carbon_json);

					// Replace the store's state.

					_context5.next = 28;
					return (0, _effects.put)((0, _actions.resetStore)(state));

				case 28:
					_context5.next = 30;
					return (0, _effects.select)(_selectors.getContainers);

				case 30:
					containers = _context5.sent;
					_context5.t5 = _regenerator2.default.keys(containers);

				case 32:
					if ((_context5.t6 = _context5.t5()).done) {
						_context5.next = 38;
						break;
					}

					_id = _context5.t6.value;
					_context5.next = 36;
					return (0, _effects.call)(_factory2.default, store, containers[_id].type, { id: _id });

				case 36:
					_context5.next = 32;
					break;

				case 38:
					_context5.next = 3;
					break;

				case 40:
				case 'end':
					return _context5.stop();
			}
		}
	}, _marked3, this);
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
function workerFormSubmit(channelCreator, selector) {
	var channel, _ref4, event;

	return _regenerator2.default.wrap(function workerFormSubmit$(_context6) {
		while (1) {
			switch (_context6.prev = _context6.next) {
				case 0:
					_context6.next = 2;
					return (0, _effects.call)(channelCreator, selector);

				case 2:
					channel = _context6.sent;

				case 3:
					if (false) {
						_context6.next = 17;
						break;
					}

					_context6.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref4 = _context6.sent;
					event = _ref4.event;
					_context6.next = 10;
					return (0, _effects.put)((0, _actions3.submitForm)(event));

				case 10:
					_context6.next = 12;
					return (0, _effects.put)((0, _actions3.validateAllContainers)(event));

				case 12:
					if (!carbonFieldsConfig.compactInput) {
						_context6.next = 15;
						break;
					}

					_context6.next = 15;
					return (0, _helpers2.compactInput)(event.target);

				case 15:
					_context6.next = 3;
					break;

				case 17:
				case 'end':
					return _context6.stop();
			}
		}
	}, _marked4, this);
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
function foreman(store) {
	var containers;
	return _regenerator2.default.wrap(function foreman$(_context7) {
		while (1) {
			switch (_context7.prev = _context7.next) {
				case 0:
					_context7.next = 2;
					return (0, _effects.select)(_selectors.getContainersByType, _constants.TYPE_TERM_META);

				case 2:
					containers = _context7.sent;

					if (!(0, _lodash.isEmpty)(containers)) {
						_context7.next = 5;
						break;
					}

					return _context7.abrupt('return');

				case 5:
					_context7.next = 7;
					return (0, _effects.take)(_actions2.ready);

				case 7:
					_context7.next = 9;
					return (0, _effects.fork)(workerSyncTermLevel, containers);

				case 9:
					_context7.next = 11;
					return (0, _effects.fork)(workerSyncTermAncestors, containers);

				case 11:
					_context7.next = 13;
					return (0, _effects.fork)(workerFormSubmit, _events.createClickChannel, 'form#addtag #submit');

				case 13:
					_context7.next = 15;
					return (0, _effects.fork)(workerFormSubmit, _events.createSubmitChannel, 'form#edittag');

				case 15:
					_context7.next = 17;
					return (0, _effects.fork)(workerReset, store);

				case 17:
				case 'end':
					return _context7.stop();
			}
		}
	}, _marked5, this);
}

/***/ }),

/***/ "dHlV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _recompose = __webpack_require__("zpMW");

var _container = __webpack_require__("Mq2Y");

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__("mbsf");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("Zn/G");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.compose)((0, _recompose.setStatic)('type', _constants.TYPE_NETWORK), (0, _withStore2.default)(), (0, _withSetup2.default)({}, {
	tabs_in_url: true
}))(_container2.default); /**
                           * The external dependencies.
                           */

/***/ }),

/***/ "dNDb":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "dSzd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("dSzd");

/***/ }),

/***/ "dY0y":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("dSzd")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "e/TA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__("M4fF");

var _anyEquality = __webpack_require__("O2K7");

var _anyEquality2 = _interopRequireDefault(_anyEquality);

var _base = __webpack_require__("94C5");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _extends3.default)({}, _base2.default, {

	/**
  * The supported comparers.
  *
  * @type {Function[]}
  */
	comparers: [_anyEquality2.default],

	/**
  * Check if the condition is fulfiled.
  *
  * @param  {Object}  definition
  * @param  {Object}  env
  * @return {Boolean}
  */
	isFulfiled: function isFulfiled(definition, env) {
		var _this = this;

		var type = definition.type,
		    compare = definition.compare,
		    value = definition.value;

		// In case of `IN` and `NOT IN` comparers.

		if ((0, _lodash.isArray)(value)) {
			var method = void 0;

			if (compare == 'IN') {
				compare = '=';
				method = 'some';
			} else if (compare == 'NOT IN') {
				compare = '!=';
				method = 'every';
			}

			var results = value.map(function (value) {
				return _this.isFulfiled((0, _extends3.default)({}, definition, {
					compare: compare,
					value: value
				}), env);
			});

			return results[method](Boolean);
		}

		var _value = value,
		    taxonomy = _value.taxonomy,
		    taxonomy_object = _value.taxonomy_object,
		    term_object = _value.term_object;


		value = taxonomy_object.hierarchical ? term_object['term_id'] : term_object['name'];

		return this.firstSupportedComparerIsCorrect((0, _lodash.get)(env, type + '.' + taxonomy, []), compare, value);
	}
}); /**
     * The external dependecies.
     */

/***/ }),

/***/ "e6+Q":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("e6+Q");

/***/ }),

/***/ "e6n0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("e6n0");

/***/ }),

/***/ "eA7W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__("M4fF");

var _base = __webpack_require__("W0zY");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The supported operators by this comparer.
 *
 * @type {Array}
 */
/**
 * The exterma; dependencies.
 */
var operators = ['IN', 'NOT IN'];

/**
 * Perform the comparison.
 *
 * @param  {mixed}   a
 * @param  {String}  operator
 * @param  {mixed}   b
 * @return {Boolean}
 */


/**
 * The internal dependencies.
 */
var evaluate = function evaluate(a, operator, b) {
  switch (operator) {
    case 'IN':
      return (0, _lodash.intersection)(a, b).length > 0;
    case 'NOT IN':
      return (0, _lodash.intersection)(a, b).length === 0;
    default:
      return false;
  }
};

exports.default = (0, _extends3.default)({}, (0, _base2.default)(operators), {
  evaluate: evaluate
});

/***/ }),

/***/ "egdi":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("egdi");

/***/ }),

/***/ "emRj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _set = __webpack_require__("lHA8");

var _set2 = _interopRequireDefault(_set);

exports.workerAddedOrUpdatedEvent = workerAddedOrUpdatedEvent;
exports.workerTriggerChangeEvent = workerTriggerChangeEvent;
exports.workerDestroyContainer = workerDestroyContainer;
exports.workerFormSubmit = workerFormSubmit;
exports.workerToggleWidget = workerToggleWidget;
exports.default = foreman;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = __webpack_require__("M4fF");

var _reduxSaga = __webpack_require__("igqX");

var _effects = __webpack_require__("egdi");

var _constants = __webpack_require__("+5vj");

var _events = __webpack_require__("x1uS");

var _helpers = __webpack_require__("hKI6");

var _actions = __webpack_require__("vVye");

var _selectors = __webpack_require__("pL4W");

var _actions2 = __webpack_require__("HRbf");

var _selectors2 = __webpack_require__("ZMHW");

var _constants2 = __webpack_require__("8Hlw");

var _constants3 = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerAddedOrUpdatedEvent),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerTriggerChangeEvent),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(workerDestroyContainer),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(workerFormSubmit),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(workerToggleWidget),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


var carbonWidgetIdPrefix = 'carbon_fields_';

function widgetIdToContainerId(widgetId) {
	return _constants3.ID_PREFIX + widgetId;
}

function getWidgetId(widget) {
	var widgetId = (0, _jquery2.default)(widget).find('[name="widget-id"]').val();
	return widgetId;
}

/**
 * Track the widgets that are being added.
 */
var widgetsToAdd = new _set2.default();

/**
 * Re-init the container when the widget is created/saved.
 *
 * @return {void}
 */
function workerAddedOrUpdatedEvent() {
	var pagenow, channel, _ref, event, widget, container, widgetId, widgetInstance;

	return _regenerator2.default.wrap(function workerAddedOrUpdatedEvent$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					pagenow = window.carbon_json.pagenow;
					_context.next = 3;
					return (0, _effects.call)(_events.createWidgetsChannel);

				case 3:
					channel = _context.sent;

				case 4:
					if (false) {
						_context.next = 29;
						break;
					}

					_context.next = 7;
					return (0, _effects.take)(channel);

				case 7:
					_ref = _context.sent;
					event = _ref.event;
					widget = _ref.widget;
					container = (0, _jquery2.default)(widget).find('[data-json]').data('json');

					// We don't care about other widgets.

					if (container) {
						_context.next = 13;
						break;
					}

					return _context.abrupt('continue', 4);

				case 13:
					_context.next = 15;
					return (0, _effects.call)(getWidgetId, widget);

				case 15:
					widgetId = _context.sent;

					if (!(event.type === 'widget-before-added')) {
						_context.next = 19;
						break;
					}

					_context.next = 19;
					return (0, _effects.call)([widgetsToAdd, 'add'], widgetId);

				case 19:
					_context.next = 21;
					return (0, _effects.put)((0, _actions.receiveContainer)(container, true));

				case 21:
					if (!(pagenow === _constants.PAGE_NOW_CUSTOMIZE && event.type === 'widget-added')) {
						_context.next = 27;
						break;
					}

					(0, _jquery2.default)(widget).find('[name="savewidget"]').off('click').show().end().find('.widget-content:first').off('keydown', 'input').off('change input propertychange', ':input');

					_context.next = 25;
					return (0, _effects.call)(wp.customize.Widgets.getWidgetFormControlForWidget, widgetId);

				case 25:
					widgetInstance = _context.sent;


					// Change the flag for 'live mode' so we can receive proper `widget-updated` events.
					widgetInstance.liveUpdateMode = false;

				case 27:
					_context.next = 4;
					break;

				case 29:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

/**
 * Trigger a generel "change" event on the widget container in order to deal with
 * this requirement as of WP 4.9 (otherwise the save button will not activate)
 *
 * @return {void}
 */
function workerTriggerChangeEvent() {
	var updateChannel, _ref2, fieldId, field, containerDomNode;

	return _regenerator2.default.wrap(function workerTriggerChangeEvent$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.actionChannel)(_actions2.setFieldValue, _reduxSaga.buffers.none());

				case 2:
					updateChannel = _context2.sent;

				case 3:
					if (false) {
						_context2.next = 17;
						break;
					}

					_context2.next = 6;
					return (0, _effects.take)(updateChannel);

				case 6:
					_ref2 = _context2.sent;
					fieldId = _ref2.payload.fieldId;
					_context2.next = 10;
					return (0, _effects.select)(_selectors2.getFieldById, fieldId);

				case 10:
					field = _context2.sent;
					_context2.next = 13;
					return (0, _effects.select)(_selectors.getContainerDomNodeById, field.container_id);

				case 13:
					containerDomNode = _context2.sent;

					(0, _jquery2.default)(containerDomNode).trigger('change');
					_context2.next = 3;
					break;

				case 17:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/**
 * We need to remove the container from DOM when the widget
 * is saved because WordPress will throw away everything.
 *
 * @param  {String} ajaxEvent
 * @param  {String} ajaxAction
 * @return {void}
 */
function workerDestroyContainer(ajaxEvent, ajaxAction) {
	var channel, _ref3, data, widgetId, containerId, container, fieldsIds;

	return _regenerator2.default.wrap(function workerDestroyContainer$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.call)(_events.createAjaxChannel, ajaxEvent, ajaxAction);

				case 2:
					channel = _context3.sent;

				case 3:
					if (false) {
						_context3.next = 31;
						break;
					}

					_context3.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref3 = _context3.sent;
					data = _ref3.settings.data;
					widgetId = data.match(/widget-id=(.+?)\&/)[1];
					containerId = widgetIdToContainerId(widgetId);

					// Don't care about other widgets.

					if ((0, _lodash.startsWith)(widgetId, carbonWidgetIdPrefix)) {
						_context3.next = 12;
						break;
					}

					return _context3.abrupt('continue', 3);

				case 12:
					if (!widgetsToAdd.has(widgetId)) {
						_context3.next = 16;
						break;
					}

					_context3.next = 15;
					return (0, _effects.call)([widgetsToAdd, 'delete'], widgetId);

				case 15:
					return _context3.abrupt('continue', 3);

				case 16:
					_context3.next = 18;
					return (0, _effects.select)(_selectors.getContainerById, containerId);

				case 18:
					container = _context3.sent;

					if (container) {
						_context3.next = 21;
						break;
					}

					return _context3.abrupt('continue', 3);

				case 21:

					// Remove the current instance from DOM.
					_reactDom2.default.unmountComponentAtNode(document.querySelector('.container-' + containerId));

					// Get the fields that belongs to the container.
					_context3.next = 24;
					return (0, _effects.select)(_selectors2.getFieldsByRoots, container.fields);

				case 24:
					fieldsIds = _context3.sent;
					_context3.next = 27;
					return (0, _effects.put)((0, _actions.removeContainer)(containerId));

				case 27:
					_context3.next = 29;
					return (0, _effects.put)((0, _actions2.removeFields)(fieldsIds));

				case 29:
					_context3.next = 3;
					break;

				case 31:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
function workerFormSubmit() {
	var pagenow, channel, _ref4, _event, widgetId, containerId, container, $form, fieldNamePrefix, fieldName, _widget;

	return _regenerator2.default.wrap(function workerFormSubmit$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					pagenow = window.carbon_json.pagenow;
					_context4.next = 3;
					return (0, _effects.call)(_events.createClickChannel, '.widgets-php, .wp-customizer', '[name="savewidget"]');

				case 3:
					channel = _context4.sent;

				case 4:
					if (false) {
						_context4.next = 40;
						break;
					}

					_context4.next = 7;
					return (0, _effects.take)(channel);

				case 7:
					_ref4 = _context4.sent;
					_event = _ref4.event;
					widgetId = getWidgetId((0, _jquery2.default)(_event.target).closest('.widget-inside').get(0));
					containerId = widgetIdToContainerId(widgetId);

					// Don't care about other widgets.

					if ((0, _lodash.startsWith)(widgetId, carbonWidgetIdPrefix)) {
						_context4.next = 13;
						break;
					}

					return _context4.abrupt('continue', 4);

				case 13:
					_context4.next = 15;
					return (0, _effects.put)((0, _actions.submitForm)(_event));

				case 15:
					_context4.next = 17;
					return (0, _effects.put)((0, _actions.validateContainer)(containerId, _event));

				case 17:
					if (!carbonFieldsConfig.compactInput) {
						_context4.next = 26;
						break;
					}

					_context4.next = 20;
					return (0, _effects.select)(_selectors.getContainerById, containerId);

				case 20:
					container = _context4.sent;
					$form = (0, _jquery2.default)(_event.target).closest('form');
					fieldNamePrefix = 'widget-' + widgetId.replace(/(.*?)\-(\d+)$/, '$1[$2]');
					fieldName = fieldNamePrefix + '[' + carbonFieldsConfig.compactInputKey + ']';
					_context4.next = 26;
					return (0, _helpers.compactInput)($form.get(0), container, fieldName);

				case 26:
					if (!(pagenow === _constants.PAGE_NOW_CUSTOMIZE)) {
						_context4.next = 38;
						break;
					}

					_event.preventDefault();

					// This little delay allows us to get correct results in the selector for invalid fields
					// since we don't know when the validation is completed.
					_context4.next = 30;
					return (0, _effects.call)(_reduxSaga.delay, 250);

				case 30:
					_context4.next = 32;
					return (0, _effects.select)(_selectors2.hasInvalidFields);

				case 32:
					if (_context4.sent) {
						_context4.next = 38;
						break;
					}

					_context4.next = 35;
					return (0, _effects.call)(wp.customize.Widgets.getWidgetFormControlForWidget, widgetId);

				case 35:
					_widget = _context4.sent;
					_context4.next = 38;
					return (0, _effects.call)([_widget, _widget.updateWidget], { disable_form: true });

				case 38:
					_context4.next = 4;
					break;

				case 40:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked4, this);
}

/**
 * Notify everyone that the widget is expanded or collapsed.
 *
 * @return {void}
 */
function workerToggleWidget() {
	var channel, _ref5, _event2, $widget, widgetId, containerId;

	return _regenerator2.default.wrap(function workerToggleWidget$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					_context5.next = 2;
					return (0, _effects.call)(_events.createClickChannel, '.widget-top');

				case 2:
					channel = _context5.sent;

				case 3:
					if (false) {
						_context5.next = 19;
						break;
					}

					_context5.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref5 = _context5.sent;
					_event2 = _ref5.event;
					$widget = (0, _jquery2.default)(_event2.target).closest('.widget');
					widgetId = getWidgetId($widget.get(0));
					containerId = widgetIdToContainerId(widgetId);

					// Don't care about other widgets.

					if ((0, _lodash.startsWith)(widgetId, carbonWidgetIdPrefix)) {
						_context5.next = 13;
						break;
					}

					return _context5.abrupt('continue', 3);

				case 13:
					_context5.next = 15;
					return (0, _effects.call)(_reduxSaga.delay, 100);

				case 15:
					_context5.next = 17;
					return (0, _effects.put)((0, _actions.toggleContainerBox)(containerId, $widget.hasClass('open')));

				case 17:
					_context5.next = 3;
					break;

				case 19:
				case 'end':
					return _context5.stop();
			}
		}
	}, _marked5, this);
}

/**
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
	var pagenow, workers;
	return _regenerator2.default.wrap(function foreman$(_context6) {
		while (1) {
			switch (_context6.prev = _context6.next) {
				case 0:
					pagenow = window.carbon_json.pagenow;

					if (!(pagenow !== _constants.PAGE_NOW_WIDGETS && pagenow !== _constants.PAGE_NOW_CUSTOMIZE)) {
						_context6.next = 3;
						break;
					}

					return _context6.abrupt('return');

				case 3:
					workers = [(0, _effects.call)(workerAddedOrUpdatedEvent), (0, _effects.call)(workerToggleWidget), (0, _effects.call)(workerTriggerChangeEvent), (0, _effects.call)(workerFormSubmit)];


					if (pagenow === _constants.PAGE_NOW_WIDGETS) {
						workers.push((0, _effects.call)(workerDestroyContainer, 'ajaxSend', 'save-widget'));
					}

					if (pagenow === _constants.PAGE_NOW_CUSTOMIZE) {
						workers.push((0, _effects.call)(workerDestroyContainer, 'ajaxSend', 'update-widget'));
					}

					_context6.next = 8;
					return (0, _effects.all)(workers);

				case 8:
				case 'end':
					return _context6.stop();
			}
		}
	}, _marked6, this);
}

/***/ }),

/***/ "evD5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("evD5");

/***/ }),

/***/ "exh5":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("kM2E");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("ZaQb").set });


/***/ }),

/***/ "f5wq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.evaluteConditions = evaluteConditions;

var _lodash = __webpack_require__("M4fF");

var _base = __webpack_require__("94C5");

var _base2 = _interopRequireDefault(_base);

var _boolean = __webpack_require__("5v7t");

var _boolean2 = _interopRequireDefault(_boolean);

var _postParentId = __webpack_require__("ULb7");

var _postParentId2 = _interopRequireDefault(_postParentId);

var _postAncestorId = __webpack_require__("R5uo");

var _postAncestorId2 = _interopRequireDefault(_postAncestorId);

var _postFormat = __webpack_require__("bpo7");

var _postFormat2 = _interopRequireDefault(_postFormat);

var _postLevel = __webpack_require__("TRFV");

var _postLevel2 = _interopRequireDefault(_postLevel);

var _postTemplate = __webpack_require__("fl3K");

var _postTemplate2 = _interopRequireDefault(_postTemplate);

var _postTerm = __webpack_require__("e/TA");

var _postTerm2 = _interopRequireDefault(_postTerm);

var _termLevel = __webpack_require__("GVVa");

var _termLevel2 = _interopRequireDefault(_termLevel);

var _termParent = __webpack_require__("bNNj");

var _termParent2 = _interopRequireDefault(_termParent);

var _termAncestor = __webpack_require__("fKV9");

var _termAncestor2 = _interopRequireDefault(_termAncestor);

var _userRole = __webpack_require__("iqss");

var _userRole2 = _interopRequireDefault(_userRole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The supported conditions.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
var conditions = {
	base: _base2.default,
	boolean: _boolean2.default,

	post_parent_id: _postParentId2.default,
	post_ancestor_id: _postAncestorId2.default,
	post_format: _postFormat2.default,
	post_level: _postLevel2.default,
	post_template: _postTemplate2.default,
	post_term: _postTerm2.default,

	term_level: _termLevel2.default,
	term_parent: _termParent2.default,
	term_ancestor: _termAncestor2.default,

	user_role: _userRole2.default
};

/**
 * Walk through the given collection and evaluate the conditions.
 *
 * @param  {Object} collection
 * @param  {Object} env
 * @return {Boolean}
 */
/**
 * The external dependencies.
 */
function evaluteConditions(collection, env) {
	var results = collection.conditions.map(function (definition) {
		if (definition.relation) {
			return evaluteConditions(definition, env);
		} else {
			var condition = (0, _lodash.get)(conditions, definition.type);

			if (condition) {
				return condition.isFulfiled(definition, env);
			} else {
				console.warn('Unsupported container condition: ' + definition.type);
				return true;
			}
		}
	});

	if (collection.relation == 'AND') {
		return results.every(Boolean);
	} else if (collection.relation == 'OR') {
		return results.some(Boolean);
	}

	throw new Error('Unsupported container condition relation used: ' + collection.relation);
}

exports.default = conditions;

/***/ }),

/***/ "fBQ2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("evD5");
var createDesc = __webpack_require__("X8DO");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "fC4T":
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "fJUb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var isObject = __webpack_require__("EqjI");
var newPromiseCapability = __webpack_require__("qARP");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "fKV9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__("M4fF");

var _anyEquality = __webpack_require__("O2K7");

var _anyEquality2 = _interopRequireDefault(_anyEquality);

var _anyContain = __webpack_require__("eA7W");

var _anyContain2 = _interopRequireDefault(_anyContain);

var _base = __webpack_require__("94C5");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The external dependecies.
 */
exports.default = (0, _extends3.default)({}, _base2.default, {

	/**
  * The supported comparers.
  *
  * @type {Function[]}
  */
	comparers: [_anyEquality2.default, _anyContain2.default],

	/**
  * Check if the condition is fulfiled.
  *
  * @param  {Object}  definition
  * @param  {Object}  env
  * @return {Boolean}
  */
	isFulfiled: function isFulfiled(definition, env) {
		var compare = definition.compare,
		    value = definition.value;


		value = (0, _lodash.isArray)(value) ? (0, _lodash.map)(value, function (val) {
			return val.term_object.term_id;
		}) : value.term_object.term_id;

		return this.firstSupportedComparerIsCorrect(env.term_ancestors, compare, value);
	}
});

/**
 * The internal dependencies.
 */

/***/ }),

/***/ "fS6E":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Kh5d");
module.exports = __webpack_require__("FeBl").Object.getPrototypeOf;


/***/ }),

/***/ "famw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactInputAutosize = __webpack_require__("Fu8L");

var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultArrowRenderer = __webpack_require__("gykv");

var _defaultArrowRenderer2 = _interopRequireDefault(_defaultArrowRenderer);

var _defaultFilterOptions = __webpack_require__("6RXc");

var _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions);

var _defaultMenuRenderer = __webpack_require__("DQxf");

var _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer);

var _defaultClearRenderer = __webpack_require__("lRc4");

var _defaultClearRenderer2 = _interopRequireDefault(_defaultClearRenderer);

var _Option = __webpack_require__("+sbl");

var _Option2 = _interopRequireDefault(_Option);

var _Value = __webpack_require__("yLPB");

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Copyright (c) 2017 Jed Watson.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Licensed under the MIT License (MIT), see
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 http://jedwatson.github.io/react-select
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var stringifyValue = function stringifyValue(value) {
	return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
};

var stringOrNode = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]);

var instanceId = 1;

var Select = function (_React$Component) {
	_inherits(Select, _React$Component);

	function Select(props) {
		_classCallCheck(this, Select);

		var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

		['clearValue', 'focusOption', 'handleInputBlur', 'handleInputChange', 'handleInputFocus', 'handleInputValueChange', 'handleKeyDown', 'handleMenuScroll', 'handleMouseDown', 'handleMouseDownOnArrow', 'handleMouseDownOnMenu', 'handleRequired', 'handleTouchOutside', 'handleTouchMove', 'handleTouchStart', 'handleTouchEnd', 'handleTouchEndClearValue', 'handleValueClick', 'getOptionLabel', 'onOptionRef', 'removeValue', 'selectValue'].forEach(function (fn) {
			return _this[fn] = _this[fn].bind(_this);
		});

		_this.state = {
			inputValue: '',
			isFocused: false,
			isOpen: false,
			isPseudoFocused: false,
			required: false
		};
		return _this;
	}

	_createClass(Select, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
			var valueArray = this.getValueArray(this.props.value);

			if (this.props.required) {
				this.setState({
					required: this.handleRequired(valueArray[0], this.props.multi)
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.autofocus) {
				this.focus();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var valueArray = this.getValueArray(nextProps.value, nextProps);

			if (nextProps.required) {
				this.setState({
					required: this.handleRequired(valueArray[0], nextProps.multi)
				});
			} else if (this.props.required) {
				// Used to be required but it's not any more
				this.setState({ required: false });
			}
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps, nextState) {
			if (nextState.isOpen !== this.state.isOpen) {
				this.toggleTouchOutsideEvent(nextState.isOpen);
				var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
				handler && handler();
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			// focus to the selected option
			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
				var focusedOptionNode = _reactDom2.default.findDOMNode(this.focused);
				var menuNode = _reactDom2.default.findDOMNode(this.menu);
				menuNode.scrollTop = focusedOptionNode.offsetTop;
				this.hasScrolledToOption = true;
			} else if (!this.state.isOpen) {
				this.hasScrolledToOption = false;
			}

			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
				this._scrollToFocusedOptionOnUpdate = false;
				var focusedDOM = _reactDom2.default.findDOMNode(this.focused);
				var menuDOM = _reactDom2.default.findDOMNode(this.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();
				if (focusedRect.bottom > menuRect.bottom) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				} else if (focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop;
				}
			}
			if (this.props.scrollMenuIntoView && this.menuContainer) {
				var menuContainerRect = this.menuContainer.getBoundingClientRect();
				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
				}
			}
			if (prevProps.disabled !== this.props.disabled) {
				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
				this.closeMenu();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (!document.removeEventListener && document.detachEvent) {
				document.detachEvent('ontouchstart', this.handleTouchOutside);
			} else {
				document.removeEventListener('touchstart', this.handleTouchOutside);
			}
		}
	}, {
		key: 'toggleTouchOutsideEvent',
		value: function toggleTouchOutsideEvent(enabled) {
			if (enabled) {
				if (!document.addEventListener && document.attachEvent) {
					document.attachEvent('ontouchstart', this.handleTouchOutside);
				} else {
					document.addEventListener('touchstart', this.handleTouchOutside);
				}
			} else {
				if (!document.removeEventListener && document.detachEvent) {
					document.detachEvent('ontouchstart', this.handleTouchOutside);
				} else {
					document.removeEventListener('touchstart', this.handleTouchOutside);
				}
			}
		}
	}, {
		key: 'handleTouchOutside',
		value: function handleTouchOutside(event) {
			// handle touch outside on ios to dismiss menu
			if (this.wrapper && !this.wrapper.contains(event.target)) {
				this.closeMenu();
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			if (!this.input) return;
			this.input.focus();
		}
	}, {
		key: 'blurInput',
		value: function blurInput() {
			if (!this.input) return;
			this.input.blur();
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchEndClearValue',
		value: function handleTouchEndClearValue(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Clear the value
			this.clearValue(event);
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (event.target.tagName === 'INPUT') {
				return;
			}

			// prevent default event handlers
			event.stopPropagation();
			event.preventDefault();

			// for the non-searchable select, toggle the menu
			if (!this.props.searchable) {
				// TODO: This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
				this.focus();
				return this.setState({
					isOpen: !this.state.isOpen
				});
			}

			if (this.state.isFocused) {
				// On iOS, we can get into a state where we think the input is focused but it isn't really,
				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
				// Call focus() again here to be safe.
				this.focus();

				var input = this.input;
				if (typeof input.getInput === 'function') {
					// Get the actual DOM input if the ref is an <AutosizeInput /> component
					input = input.getInput();
				}

				// clears the value so that the cursor will be at the end of input when the component re-renders
				input.value = '';

				// if the input is focused, ensure the menu is open
				this.setState({
					isOpen: true,
					isPseudoFocused: false
				});
			} else {
				// otherwise, focus the input and open the menu
				this._openAfterFocus = this.props.openOnClick;
				this.focus();
			}
		}
	}, {
		key: 'handleMouseDownOnArrow',
		value: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			// If the menu isn't open, let the event bubble to the main handleMouseDown
			if (!this.state.isOpen) {
				return;
			}
			// prevent default event handlers
			event.stopPropagation();
			event.preventDefault();
			// close the menu
			this.closeMenu();
		}
	}, {
		key: 'handleMouseDownOnMenu',
		value: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();

			this._openAfterFocus = true;
			this.focus();
		}
	}, {
		key: 'closeMenu',
		value: function closeMenu() {
			if (this.props.onCloseResetsInput) {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi,
					inputValue: this.handleInputValueChange('')
				});
			} else {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			}
			this.hasScrolledToOption = false;
		}
	}, {
		key: 'handleInputFocus',
		value: function handleInputFocus(event) {
			if (this.props.disabled) return;
			var isOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
			if (this.props.onFocus) {
				this.props.onFocus(event);
			}
			this.setState({
				isFocused: true,
				isOpen: isOpen
			});
			this._openAfterFocus = false;
		}
	}, {
		key: 'handleInputBlur',
		value: function handleInputBlur(event) {
			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
				this.focus();
				return;
			}

			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
			var onBlurredState = {
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false
			};
			if (this.props.onBlurResetsInput) {
				onBlurredState.inputValue = this.handleInputValueChange('');
			}
			this.setState(onBlurredState);
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			var newInputValue = event.target.value;

			if (this.state.inputValue !== event.target.value) {
				newInputValue = this.handleInputValueChange(newInputValue);
			}

			this.setState({
				isOpen: true,
				isPseudoFocused: false,
				inputValue: newInputValue
			});
		}
	}, {
		key: 'handleInputValueChange',
		value: function handleInputValueChange(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				// Note: != used deliberately here to catch undefined and null
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			return newValue;
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(event) {
			if (this.props.disabled) return;

			if (typeof this.props.onInputKeyDown === 'function') {
				this.props.onInputKeyDown(event);
				if (event.defaultPrevented) {
					return;
				}
			}

			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
						return;
					}
					this.selectFocusedOption();
					return;
				case 13:
					// enter
					if (!this.state.isOpen) return;
					event.stopPropagation();
					this.selectFocusedOption();
					break;
				case 27:
					// escape
					if (this.state.isOpen) {
						this.closeMenu();
						event.stopPropagation();
					} else if (this.props.clearable && this.props.escapeClearsValue) {
						this.clearValue(event);
						event.stopPropagation();
					}
					break;
				case 38:
					// up
					this.focusPreviousOption();
					break;
				case 40:
					// down
					this.focusNextOption();
					break;
				case 33:
					// page up
					this.focusPageUpOption();
					break;
				case 34:
					// page down
					this.focusPageDownOption();
					break;
				case 35:
					// end key
					if (event.shiftKey) {
						return;
					}
					this.focusEndOption();
					break;
				case 36:
					// home key
					if (event.shiftKey) {
						return;
					}
					this.focusStartOption();
					break;
				case 46:
					// backspace
					if (!this.state.inputValue && this.props.deleteRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				default:
					return;
			}
			event.preventDefault();
		}
	}, {
		key: 'handleValueClick',
		value: function handleValueClick(option, event) {
			if (!this.props.onValueClick) return;
			this.props.onValueClick(option, event);
		}
	}, {
		key: 'handleMenuScroll',
		value: function handleMenuScroll(event) {
			if (!this.props.onMenuScrollToBottom) return;
			var target = event.target;

			if (target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0) {
				this.props.onMenuScrollToBottom();
			}
		}
	}, {
		key: 'handleRequired',
		value: function handleRequired(value, multi) {
			if (!value) return true;
			return multi ? value.length === 0 : Object.keys(value).length === 0;
		}
	}, {
		key: 'getOptionLabel',
		value: function getOptionLabel(op) {
			return op[this.props.labelKey];
		}

		/**
   * Turns a value into an array from the given options
   * @param	{String|Number|Array}	value		- the value of the select input
   * @param	{Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
   * @returns	{Array}	the value of the select represented in an array
   */

	}, {
		key: 'getValueArray',
		value: function getValueArray(value, nextProps) {
			var _this2 = this;

			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
			var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof(nextProps)) === 'object' ? nextProps : this.props;
			if (props.multi) {
				if (typeof value === 'string') value = value.split(props.delimiter);
				if (!Array.isArray(value)) {
					if (value === null || value === undefined) return [];
					value = [value];
				}
				return value.map(function (value) {
					return _this2.expandValue(value, props);
				}).filter(function (i) {
					return i;
				});
			}
			var expandedValue = this.expandValue(value, props);
			return expandedValue ? [expandedValue] : [];
		}

		/**
   * Retrieve a value from the given options and valueKey
   * @param	{String|Number|Array}	value	- the selected value(s)
   * @param	{Object}		props	- the Select component's props (or nextProps)
   */

	}, {
		key: 'expandValue',
		value: function expandValue(value, props) {
			var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
			if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
			var options = props.options,
			    valueKey = props.valueKey;

			if (!options) return;
			for (var i = 0; i < options.length; i++) {
				if (options[i][valueKey] === value) return options[i];
			}
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			var _this3 = this;

			if (this.props.autoBlur) {
				this.blurInput();
			}
			if (this.props.required) {
				var required = this.handleRequired(value, this.props.multi);
				this.setState({ required: required });
			}
			if (this.props.onChange) {
				if (this.props.simpleValue && value) {
					value = this.props.multi ? value.map(function (i) {
						return i[_this3.props.valueKey];
					}).join(this.props.delimiter) : value[this.props.valueKey];
				}
				this.props.onChange(value);
			}
		}
	}, {
		key: 'selectValue',
		value: function selectValue(value) {
			var _this4 = this;

			// NOTE: we actually add/set the value in a callback to make sure the
			// input value is empty to avoid styling issues in Chrome
			if (this.props.closeOnSelect) {
				this.hasScrolledToOption = false;
			}
			if (this.props.multi) {
				var updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;
				this.setState({
					focusedIndex: null,
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect
				}, function () {
					_this4.addValue(value);
				});
			} else {
				this.setState({
					inputValue: this.handleInputValueChange(''),
					isOpen: !this.props.closeOnSelect,
					isPseudoFocused: this.state.isFocused
				}, function () {
					_this4.setValue(value);
				});
			}
		}
	}, {
		key: 'addValue',
		value: function addValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			var visibleOptions = this._visibleOptions.filter(function (val) {
				return !val.disabled;
			});
			var lastValueIndex = visibleOptions.indexOf(value);
			this.setValue(valueArray.concat(value));
			if (visibleOptions.length - 1 === lastValueIndex) {
				// the last option was selected; focus the second-last one
				this.focusOption(visibleOptions[lastValueIndex - 1]);
			} else if (visibleOptions.length > lastValueIndex) {
				// focus the option below the selected one
				this.focusOption(visibleOptions[lastValueIndex + 1]);
			}
		}
	}, {
		key: 'popValue',
		value: function popValue() {
			var valueArray = this.getValueArray(this.props.value);
			if (!valueArray.length) return;
			if (valueArray[valueArray.length - 1].clearableValue === false) return;
			this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
		}
	}, {
		key: 'removeValue',
		value: function removeValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.filter(function (i) {
				return i !== value;
			}));
			this.focus();
		}
	}, {
		key: 'clearValue',
		value: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setValue(this.getResetValue());
			this.setState({
				isOpen: false,
				inputValue: this.handleInputValueChange('')
			}, this.focus);
		}
	}, {
		key: 'getResetValue',
		value: function getResetValue() {
			if (this.props.resetValue !== undefined) {
				return this.props.resetValue;
			} else if (this.props.multi) {
				return [];
			} else {
				return null;
			}
		}
	}, {
		key: 'focusOption',
		value: function focusOption(option) {
			this.setState({
				focusedOption: option
			});
		}
	}, {
		key: 'focusNextOption',
		value: function focusNextOption() {
			this.focusAdjacentOption('next');
		}
	}, {
		key: 'focusPreviousOption',
		value: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		}
	}, {
		key: 'focusPageUpOption',
		value: function focusPageUpOption() {
			this.focusAdjacentOption('page_up');
		}
	}, {
		key: 'focusPageDownOption',
		value: function focusPageDownOption() {
			this.focusAdjacentOption('page_down');
		}
	}, {
		key: 'focusStartOption',
		value: function focusStartOption() {
			this.focusAdjacentOption('start');
		}
	}, {
		key: 'focusEndOption',
		value: function focusEndOption() {
			this.focusAdjacentOption('end');
		}
	}, {
		key: 'focusAdjacentOption',
		value: function focusAdjacentOption(dir) {
			var options = this._visibleOptions.map(function (option, index) {
				return { option: option, index: index };
			}).filter(function (option) {
				return !option.option.disabled;
			});
			this._scrollToFocusedOptionOnUpdate = true;
			if (!this.state.isOpen) {
				this.setState({
					isOpen: true,
					inputValue: '',
					focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null)
				});
				return;
			}
			if (!options.length) return;
			var focusedIndex = -1;
			for (var i = 0; i < options.length; i++) {
				if (this._focusedOption === options[i].option) {
					focusedIndex = i;
					break;
				}
			}
			if (dir === 'next' && focusedIndex !== -1) {
				focusedIndex = (focusedIndex + 1) % options.length;
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedIndex = focusedIndex - 1;
				} else {
					focusedIndex = options.length - 1;
				}
			} else if (dir === 'start') {
				focusedIndex = 0;
			} else if (dir === 'end') {
				focusedIndex = options.length - 1;
			} else if (dir === 'page_up') {
				var potentialIndex = focusedIndex - this.props.pageSize;
				if (potentialIndex < 0) {
					focusedIndex = 0;
				} else {
					focusedIndex = potentialIndex;
				}
			} else if (dir === 'page_down') {
				var potentialIndex = focusedIndex + this.props.pageSize;
				if (potentialIndex > options.length - 1) {
					focusedIndex = options.length - 1;
				} else {
					focusedIndex = potentialIndex;
				}
			}

			if (focusedIndex === -1) {
				focusedIndex = 0;
			}

			this.setState({
				focusedIndex: options[focusedIndex].index,
				focusedOption: options[focusedIndex].option
			});
		}
	}, {
		key: 'getFocusedOption',
		value: function getFocusedOption() {
			return this._focusedOption;
		}
	}, {
		key: 'getInputValue',
		value: function getInputValue() {
			return this.state.inputValue;
		}
	}, {
		key: 'selectFocusedOption',
		value: function selectFocusedOption() {
			if (this._focusedOption) {
				return this.selectValue(this._focusedOption);
			}
		}
	}, {
		key: 'renderLoading',
		value: function renderLoading() {
			if (!this.props.isLoading) return;
			return _react2.default.createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				_react2.default.createElement('span', { className: 'Select-loading' })
			);
		}
	}, {
		key: 'renderValue',
		value: function renderValue(valueArray, isOpen) {
			var _this5 = this;

			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
			var ValueComponent = this.props.valueComponent;
			if (!valueArray.length) {
				return !this.state.inputValue ? _react2.default.createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return _react2.default.createElement(
						ValueComponent,
						{
							id: _this5._instancePrefix + '-value-' + i,
							instancePrefix: _this5._instancePrefix,
							disabled: _this5.props.disabled || value.clearableValue === false,
							key: 'value-' + i + '-' + value[_this5.props.valueKey],
							onClick: onClick,
							onRemove: _this5.removeValue,
							value: value
						},
						renderLabel(value, i),
						_react2.default.createElement(
							'span',
							{ className: 'Select-aria-only' },
							'\xA0'
						)
					);
				});
			} else if (!this.state.inputValue) {
				if (isOpen) onClick = null;
				return _react2.default.createElement(
					ValueComponent,
					{
						id: this._instancePrefix + '-value-item',
						disabled: this.props.disabled,
						instancePrefix: this._instancePrefix,
						onClick: onClick,
						value: valueArray[0]
					},
					renderLabel(valueArray[0])
				);
			}
		}
	}, {
		key: 'renderInput',
		value: function renderInput(valueArray, focusedOptionIndex) {
			var _classNames,
			    _this6 = this;

			var className = (0, _classnames2.default)('Select-input', this.props.inputProps.className);
			var isOpen = !!this.state.isOpen;

			var ariaOwns = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, this._instancePrefix + '-list', isOpen), _defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

			var inputProps = _extends({}, this.props.inputProps, {
				role: 'combobox',
				'aria-expanded': '' + isOpen,
				'aria-owns': ariaOwns,
				'aria-haspopup': '' + isOpen,
				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
				'aria-describedby': this.props['aria-describedby'],
				'aria-labelledby': this.props['aria-labelledby'],
				'aria-label': this.props['aria-label'],
				className: className,
				tabIndex: this.props.tabIndex,
				onBlur: this.handleInputBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				ref: function ref(_ref) {
					return _this6.input = _ref;
				},
				required: this.state.required,
				value: this.state.inputValue
			});

			if (this.props.inputRenderer) {
				return this.props.inputRenderer(inputProps);
			}

			if (this.props.disabled || !this.props.searchable) {
				var _props$inputProps = this.props.inputProps,
				    inputClassName = _props$inputProps.inputClassName,
				    divProps = _objectWithoutProperties(_props$inputProps, ['inputClassName']);

				var _ariaOwns = (0, _classnames2.default)(_defineProperty({}, this._instancePrefix + '-list', isOpen));

				return _react2.default.createElement('div', _extends({}, divProps, {
					role: 'combobox',
					'aria-expanded': isOpen,
					'aria-owns': _ariaOwns,
					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
					className: className,
					tabIndex: this.props.tabIndex || 0,
					onBlur: this.handleInputBlur,
					onFocus: this.handleInputFocus,
					ref: function ref(_ref2) {
						return _this6.input = _ref2;
					},
					'aria-readonly': '' + !!this.props.disabled,
					style: { border: 0, width: 1, display: 'inline-block' } }));
			}

			if (this.props.autosize) {
				return _react2.default.createElement(_reactInputAutosize2.default, _extends({}, inputProps, { minWidth: '5' }));
			}
			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement('input', inputProps)
			);
		}
	}, {
		key: 'renderClear',
		value: function renderClear() {
			if (!this.props.clearable || this.props.value === undefined || this.props.value === null || this.props.multi && !this.props.value.length || this.props.disabled || this.props.isLoading) return;
			var clear = this.props.clearRenderer();

			return _react2.default.createElement(
				'span',
				{ className: 'Select-clear-zone', title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
					'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText,
					onMouseDown: this.clearValue,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEndClearValue
				},
				clear
			);
		}
	}, {
		key: 'renderArrow',
		value: function renderArrow() {
			var onMouseDown = this.handleMouseDownOnArrow;
			var isOpen = this.state.isOpen;
			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });

			return _react2.default.createElement(
				'span',
				{
					className: 'Select-arrow-zone',
					onMouseDown: onMouseDown
				},
				arrow
			);
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : _defaultFilterOptions2.default;

				return filterOptions(options, filterValue, excludeOptions, {
					filterOption: this.props.filterOption,
					ignoreAccents: this.props.ignoreAccents,
					ignoreCase: this.props.ignoreCase,
					labelKey: this.props.labelKey,
					matchPos: this.props.matchPos,
					matchProp: this.props.matchProp,
					valueKey: this.props.valueKey
				});
			} else {
				return options;
			}
		}
	}, {
		key: 'onOptionRef',
		value: function onOptionRef(ref, isFocused) {
			if (isFocused) {
				this.focused = ref;
			}
		}
	}, {
		key: 'renderMenu',
		value: function renderMenu(options, valueArray, focusedOption) {
			if (options && options.length) {
				return this.props.menuRenderer({
					focusedOption: focusedOption,
					focusOption: this.focusOption,
					instancePrefix: this._instancePrefix,
					labelKey: this.props.labelKey,
					onFocus: this.focusOption,
					onSelect: this.selectValue,
					optionClassName: this.props.optionClassName,
					optionComponent: this.props.optionComponent,
					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
					options: options,
					selectValue: this.selectValue,
					valueArray: valueArray,
					valueKey: this.props.valueKey,
					onOptionRef: this.onOptionRef
				});
			} else if (this.props.noResultsText) {
				return _react2.default.createElement(
					'div',
					{ className: 'Select-noresults' },
					this.props.noResultsText
				);
			} else {
				return null;
			}
		}
	}, {
		key: 'renderHiddenField',
		value: function renderHiddenField(valueArray) {
			var _this7 = this;

			if (!this.props.name) return;
			if (this.props.joinValues) {
				var value = valueArray.map(function (i) {
					return stringifyValue(i[_this7.props.valueKey]);
				}).join(this.props.delimiter);
				return _react2.default.createElement('input', {
					type: 'hidden',
					ref: function ref(_ref3) {
						return _this7.value = _ref3;
					},
					name: this.props.name,
					value: value,
					disabled: this.props.disabled });
			}
			return valueArray.map(function (item, index) {
				return _react2.default.createElement('input', { key: 'hidden.' + index,
					type: 'hidden',
					ref: 'value' + index,
					name: _this7.props.name,
					value: stringifyValue(item[_this7.props.valueKey]),
					disabled: _this7.props.disabled });
			});
		}
	}, {
		key: 'getFocusableOptionIndex',
		value: function getFocusableOptionIndex(selectedOption) {
			var options = this._visibleOptions;
			if (!options.length) return null;

			var valueKey = this.props.valueKey;
			var focusedOption = this.state.focusedOption || selectedOption;
			if (focusedOption && !focusedOption.disabled) {
				var focusedOptionIndex = -1;
				options.some(function (option, index) {
					var isOptionEqual = option[valueKey] === focusedOption[valueKey];
					if (isOptionEqual) {
						focusedOptionIndex = index;
					}
					return isOptionEqual;
				});
				if (focusedOptionIndex !== -1) {
					return focusedOptionIndex;
				}
			}

			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return i;
			}
			return null;
		}
	}, {
		key: 'renderOuter',
		value: function renderOuter(options, valueArray, focusedOption) {
			var _this8 = this;

			var menu = this.renderMenu(options, valueArray, focusedOption);
			if (!menu) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				{ ref: function ref(_ref5) {
						return _this8.menuContainer = _ref5;
					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
				_react2.default.createElement(
					'div',
					{ ref: function ref(_ref4) {
							return _this8.menu = _ref4;
						}, role: 'listbox', tabIndex: -1, className: 'Select-menu', id: this._instancePrefix + '-list',
						style: this.props.menuStyle,
						onScroll: this.handleMenuScroll,
						onMouseDown: this.handleMouseDownOnMenu },
					menu
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this9 = this;

			var valueArray = this.getValueArray(this.props.value);
			var options = this._visibleOptions = this.filterOptions(this.props.multi ? this.getValueArray(this.props.value) : null);
			var isOpen = this.state.isOpen;
			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);

			var focusedOption = null;
			if (focusedOptionIndex !== null) {
				focusedOption = this._focusedOption = options[focusedOptionIndex];
			} else {
				focusedOption = this._focusedOption = null;
			}
			var className = (0, _classnames2.default)('Select', this.props.className, {
				'Select--multi': this.props.multi,
				'Select--single': !this.props.multi,
				'is-clearable': this.props.clearable,
				'is-disabled': this.props.disabled,
				'is-focused': this.state.isFocused,
				'is-loading': this.props.isLoading,
				'is-open': isOpen,
				'is-pseudo-focused': this.state.isPseudoFocused,
				'is-searchable': this.props.searchable,
				'has-value': valueArray.length
			});

			var removeMessage = null;
			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
				removeMessage = _react2.default.createElement(
					'span',
					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
				);
			}

			return _react2.default.createElement(
				'div',
				{ ref: function ref(_ref7) {
						return _this9.wrapper = _ref7;
					},
					className: className,
					style: this.props.wrapperStyle },
				this.renderHiddenField(valueArray),
				_react2.default.createElement(
					'div',
					{ ref: function ref(_ref6) {
							return _this9.control = _ref6;
						},
						className: 'Select-control',
						style: this.props.style,
						onKeyDown: this.handleKeyDown,
						onMouseDown: this.handleMouseDown,
						onTouchEnd: this.handleTouchEnd,
						onTouchStart: this.handleTouchStart,
						onTouchMove: this.handleTouchMove
					},
					_react2.default.createElement(
						'span',
						{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
						this.renderValue(valueArray, isOpen),
						this.renderInput(valueArray, focusedOptionIndex)
					),
					removeMessage,
					this.renderLoading(),
					this.renderClear(),
					this.renderArrow()
				),
				isOpen ? this.renderOuter(options, !this.props.multi ? valueArray : null, focusedOption) : null
			);
		}
	}]);

	return Select;
}(_react2.default.Component);

;

Select.propTypes = {
	'aria-describedby': _propTypes2.default.string, // HTML ID(s) of element(s) that should be used to describe this input (for assistive tech)
	'aria-label': _propTypes2.default.string, // Aria label (for assistive tech)
	'aria-labelledby': _propTypes2.default.string, // HTML ID of an element that should be used as the label (for assistive tech)
	addLabelText: _propTypes2.default.string, // placeholder displayed when you want to add a label on a multi-value input
	arrowRenderer: _propTypes2.default.func, // Create drop-down caret element
	autoBlur: _propTypes2.default.bool, // automatically blur the component when an option is selected
	autofocus: _propTypes2.default.bool, // autofocus the component on mount
	autosize: _propTypes2.default.bool, // whether to enable autosizing or not
	backspaceRemoves: _propTypes2.default.bool, // whether backspace removes an item if there is no text input
	backspaceToRemoveMessage: _propTypes2.default.string, // Message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
	className: _propTypes2.default.string, // className for the outer element
	clearAllText: stringOrNode, // title for the "clear" control when multi: true
	clearRenderer: _propTypes2.default.func, // create clearable x element
	clearValueText: stringOrNode, // title for the "clear" control
	clearable: _propTypes2.default.bool, // should it be possible to reset value
	closeOnSelect: _propTypes2.default.bool, // whether to close the menu when a value is selected
	deleteRemoves: _propTypes2.default.bool, // whether backspace removes an item if there is no text input
	delimiter: _propTypes2.default.string, // delimiter to use to join multiple values for the hidden field value
	disabled: _propTypes2.default.bool, // whether the Select is disabled or not
	escapeClearsValue: _propTypes2.default.bool, // whether escape clears the value when the menu is closed
	filterOption: _propTypes2.default.func, // method to filter a single option (option, filterString)
	filterOptions: _propTypes2.default.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
	ignoreAccents: _propTypes2.default.bool, // whether to strip diacritics when filtering
	ignoreCase: _propTypes2.default.bool, // whether to perform case-insensitive filtering
	inputProps: _propTypes2.default.object, // custom attributes for the Input
	inputRenderer: _propTypes2.default.func, // returns a custom input component
	instanceId: _propTypes2.default.string, // set the components instanceId
	isLoading: _propTypes2.default.bool, // whether the Select is loading externally or not (such as options being loaded)
	joinValues: _propTypes2.default.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
	labelKey: _propTypes2.default.string, // path of the label value in option objects
	matchPos: _propTypes2.default.string, // (any|start) match the start or entire string when filtering
	matchProp: _propTypes2.default.string, // (any|label|value) which option property to filter on
	menuBuffer: _propTypes2.default.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
	menuContainerStyle: _propTypes2.default.object, // optional style to apply to the menu container
	menuRenderer: _propTypes2.default.func, // renders a custom menu with options
	menuStyle: _propTypes2.default.object, // optional style to apply to the menu
	multi: _propTypes2.default.bool, // multi-value input
	name: _propTypes2.default.string, // generates a hidden <input /> tag with this field name for html forms
	noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
	onBlur: _propTypes2.default.func, // onBlur handler: function (event) {}
	onBlurResetsInput: _propTypes2.default.bool, // whether input is cleared on blur
	onChange: _propTypes2.default.func, // onChange handler: function (newValue) {}
	onClose: _propTypes2.default.func, // fires when the menu is closed
	onCloseResetsInput: _propTypes2.default.bool, // whether input is cleared when menu is closed through the arrow
	onFocus: _propTypes2.default.func, // onFocus handler: function (event) {}
	onInputChange: _propTypes2.default.func, // onInputChange handler: function (inputValue) {}
	onInputKeyDown: _propTypes2.default.func, // input keyDown handler: function (event) {}
	onMenuScrollToBottom: _propTypes2.default.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
	onOpen: _propTypes2.default.func, // fires when the menu is opened
	onSelectResetsInput: _propTypes2.default.bool, // whether input is cleared on select (works only for multiselect)
	onValueClick: _propTypes2.default.func, // onClick handler for value labels: function (value, event) {}
	openOnClick: _propTypes2.default.bool, // boolean to control opening the menu when the control is clicked
	openOnFocus: _propTypes2.default.bool, // always open options menu on focus
	optionClassName: _propTypes2.default.string, // additional class(es) to apply to the <Option /> elements
	optionComponent: _propTypes2.default.func, // option component to render in dropdown
	optionRenderer: _propTypes2.default.func, // optionRenderer: function (option) {}
	options: _propTypes2.default.array, // array of options
	pageSize: _propTypes2.default.number, // number of entries to page when using page up/down keys
	placeholder: stringOrNode, // field placeholder, displayed when there's no value
	required: _propTypes2.default.bool, // applies HTML5 required attribute when needed
	resetValue: _propTypes2.default.any, // value to use when you clear the control
	scrollMenuIntoView: _propTypes2.default.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
	searchable: _propTypes2.default.bool, // whether to enable searching feature or not
	simpleValue: _propTypes2.default.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
	style: _propTypes2.default.object, // optional style to apply to the control
	tabIndex: _propTypes2.default.string, // optional tab index of the control
	tabSelectsValue: _propTypes2.default.bool, // whether to treat tabbing out while focused to be value selection
	value: _propTypes2.default.any, // initial field value
	valueComponent: _propTypes2.default.func, // value component to render
	valueKey: _propTypes2.default.string, // path of the label value in option objects
	valueRenderer: _propTypes2.default.func, // valueRenderer: function (option) {}
	wrapperStyle: _propTypes2.default.object // optional style to apply to the component wrapper
};

Select.defaultProps = {
	addLabelText: 'Add "{label}"?',
	arrowRenderer: _defaultArrowRenderer2.default,
	autosize: true,
	backspaceRemoves: true,
	backspaceToRemoveMessage: 'Press backspace to remove {label}',
	clearable: true,
	clearAllText: 'Clear all',
	clearRenderer: _defaultClearRenderer2.default,
	clearValueText: 'Clear value',
	closeOnSelect: true,
	deleteRemoves: true,
	delimiter: ',',
	disabled: false,
	escapeClearsValue: true,
	filterOptions: _defaultFilterOptions2.default,
	ignoreAccents: true,
	ignoreCase: true,
	inputProps: {},
	isLoading: false,
	joinValues: false,
	labelKey: 'label',
	matchPos: 'any',
	matchProp: 'any',
	menuBuffer: 0,
	menuRenderer: _defaultMenuRenderer2.default,
	multi: false,
	noResultsText: 'No results found',
	onBlurResetsInput: true,
	onSelectResetsInput: true,
	onCloseResetsInput: true,
	openOnClick: true,
	optionComponent: _Option2.default,
	pageSize: 5,
	placeholder: 'Select...',
	required: false,
	scrollMenuIntoView: true,
	searchable: true,
	simpleValue: false,
	tabSelectsValue: true,
	valueComponent: _Value2.default,
	valueKey: 'value'
};

exports.default = Select;

/***/ }),

/***/ "fl3K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__("M4fF");

var _equality = __webpack_require__("Eql7");

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__("r/IV");

var _contain2 = _interopRequireDefault(_contain);

var _base = __webpack_require__("94C5");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The external dependecies.
 */
exports.default = (0, _extends3.default)({}, _base2.default, {

	/**
  * The supported comparers.
  *
  * @type {Function[]}
  */
	comparers: [_equality2.default, _contain2.default],

	/**
  * Check if the condition is fulfiled.
  *
  * @param  {Object}  definition
  * @param  {Object}  env
  * @return {Boolean}
  */
	isFulfiled: function isFulfiled(definition, env) {
		var compare = definition.compare,
		    value = definition.value;


		return this.firstSupportedComparerIsCorrect(env.post_template, compare, value);
	}
});

/**
 * The internal dependencies.
 */

/***/ }),

/***/ "fxRn":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+tPU");
__webpack_require__("zQR9");
module.exports = __webpack_require__("g8Ux");


/***/ }),

/***/ "fzf9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _observeResize = __webpack_require__("zMaW");

var _observeResize2 = _interopRequireDefault(_observeResize);

var _lodash = __webpack_require__("M4fF");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The external dependencies.
 */
var RichTextEditor = function (_React$Component) {
	(0, _inherits3.default)(RichTextEditor, _React$Component);

	function RichTextEditor() {
		(0, _classCallCheck3.default)(this, RichTextEditor);
		return (0, _possibleConstructorReturn3.default)(this, (RichTextEditor.__proto__ || (0, _getPrototypeOf2.default)(RichTextEditor)).apply(this, arguments));
	}

	(0, _createClass3.default)(RichTextEditor, [{
		key: 'componentDidMount',

		/**
   * Lifecycle hook.
   *
   * @return {void}
   */
		value: function componentDidMount() {
			this.node = null;
			this.initEditor();
		}

		/**
   * Lifecycle hook.
   *
   * @param  {Object} nextProps
   * @return {void}
   */

	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var content = nextProps.content;

			// Destroy the editor because TinyMCE doesn't like to be
			// moved around DOM.

			if (!this.props.isDragging && nextProps.isDragging) {
				this.destroyEditor();
				return;
			}

			// Re-init the editor manually because the complex group wasn't sorted
			// and the component uses the same React instance.
			if (!this.editor && this.props.isDragging && !nextProps.isDragging) {
				this.initEditor();
			}

			if (this.editor && this.editor.getContent() !== content) {
				this.editor.setContent(content);
			}
		}

		/**
   * Lifecycle hook.
   *
   * @return {void}
   */

	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.destroyEditor();
		}

		/**
   * Render an empty `div` that will act as a placeholder.
   *
   * @return {React.Element}
   */

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    id = _props.id,
			    children = _props.children,
			    richEditing = _props.richEditing,
			    mediaButtons = _props.mediaButtons;

			var classes = ['carbon-wysiwyg', 'wp-editor-wrap', { 'tmce-active': richEditing }, { 'html-active': !richEditing }];

			return _react2.default.createElement(
				'div',
				{ id: 'wp-' + id + '-wrap', className: (0, _classnames2.default)(classes), ref: function ref(node) {
						return _this2.node = node;
					} },
				_react2.default.createElement(
					'div',
					{ id: 'wp-' + id + '-media-buttons', className: 'hide-if-no-js wp-media-buttons' },
					_react2.default.createElement(
						'a',
						{ href: '#', className: 'button insert-media add_media', 'data-editor': id, title: 'Add Media' },
						_react2.default.createElement('span', { className: 'wp-media-buttons-icon' }),
						' Add Media'
					),
					_react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: mediaButtons } })
				),
				richEditing ? _react2.default.createElement(
					'div',
					{ className: 'wp-editor-tabs' },
					_react2.default.createElement(
						'button',
						{ type: 'button', id: id + '-tmce', className: 'wp-switch-editor switch-tmce', 'data-wp-editor-id': id },
						'Visual'
					),
					_react2.default.createElement(
						'button',
						{ type: 'button', id: id + '-html', className: 'wp-switch-editor switch-html', 'data-wp-editor-id': id },
						'Text'
					)
				) : null,
				_react2.default.createElement(
					'div',
					{ id: 'wp-' + id + '-editor-container', className: 'wp-editor-container' },
					children
				)
			);
		}

		/**
   * Initialize the WYSIWYG editor.
   *
   * @return {void}
   */

	}, {
		key: 'initEditor',
		value: function initEditor() {
			var _this3 = this;

			window.requestAnimationFrame(function () {
				var _props2 = _this3.props,
				    id = _props2.id,
				    richEditing = _props2.richEditing,
				    onChange = _props2.onChange;


				if (richEditing) {
					var editorSetup = function editorSetup(editor) {
						_this3.editor = editor;

						editor.on('blur Change', function () {
							if (editor.isDirty()) {
								onChange(editor.getContent());
							}
						});

						_this3.cancelResizeObserver = (0, _observeResize2.default)(_this3.node, (0, _lodash.debounce)(function () {
							_this3.editor.execCommand('mceAutoResize', null, null, { skip_focus: true });
						}, 100));
					};

					var editorOptions = (0, _extends3.default)({}, window.tinyMCEPreInit.mceInit.carbon_settings, {
						selector: '#' + id,
						setup: editorSetup
					});

					window.tinymce.init(editorOptions);
				}

				var quickTagsOptions = (0, _extends3.default)({}, window.tinyMCEPreInit, {
					id: id
				});

				window.quicktags(quickTagsOptions);

				// Force the initialization of the quick tags.
				window.QTags._buttonsInit();
			});
		}

		/**
   * Destroy the instance of the WYSIWYG editor.
   *
   * @return {void}
   */

	}, {
		key: 'destroyEditor',
		value: function destroyEditor() {
			if (this.editor) {
				this.cancelResizeObserver();
				this.editor.remove();

				this.node = null;
				this.editor = null;
			}

			delete window.QTags.instances[this.id];
		}
	}]);
	return RichTextEditor;
}(_react2.default.Component);

/**
 * Validate the props.
 *
 * @type {Object}
 */


RichTextEditor.propTypes = {
	id: _propTypes2.default.string,
	richEditing: _propTypes2.default.bool,
	isDragging: _propTypes2.default.bool,
	onChange: _propTypes2.default.func
};

exports.default = RichTextEditor;

/***/ }),

/***/ "g1oQ":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actions.js": "d6Yu",
	"./helpers.js": "OxI6",
	"./reducer.js": "Bt+Z",
	"./sagas/base.js": "Qoa1",
	"./selectors.js": "Pa5C"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "g1oQ";

/***/ }),

/***/ "g8Ux":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var get = __webpack_require__("3fs2");
module.exports = __webpack_require__("FeBl").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "ggOi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _recompose = __webpack_require__("zpMW");

var _container = __webpack_require__("Mq2Y");

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__("mbsf");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("Zn/G");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.setStatic)('type', _constants.TYPE_TERM_META)((0, _recompose.compose)((0, _withStore2.default)(), (0, _withSetup2.default)({
	term_ancestors: [],
	term_parent_id: 0,
	term_level: 1
}))(_container2.default)); /**
                            * The external dependencies.
                            */

/***/ }),

/***/ "gykv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = arrowRenderer;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrowRenderer(_ref) {
	var onMouseDown = _ref.onMouseDown;

	return _react2.default.createElement('span', {
		className: 'Select-arrow',
		onMouseDown: onMouseDown
	});
};

arrowRenderer.propTypes = {
	onMouseDown: _propTypes2.default.func
};

/***/ }),

/***/ "h+2D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var sagas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var composeEnhancer = (0, _lodash.get)(window, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', _redux.compose);
  var sagaMiddleware = (0, _reduxSaga2.default)();
  var reducer = (0, _redux.combineReducers)({ containers: _reducer2.default, sidebars: _reducer4.default, fields: _reducer6.default });
  var store = (0, _redux.createStore)(reducer, state, composeEnhancer((0, _redux.applyMiddleware)(sagaMiddleware)));

  sagas.forEach(function (saga) {
    return sagaMiddleware.run(saga, store);
  });

  return store;
};

var _reduxSaga = __webpack_require__("igqX");

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _redux = __webpack_require__("2KeS");

var _lodash = __webpack_require__("M4fF");

var _reducer = __webpack_require__("bB03");

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__("Bt+Z");

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__("cjEH");

var _reducer6 = _interopRequireDefault(_reducer5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "h4Rt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _base = __webpack_require__("yCLc");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render the tabs of the container.
 *
 * @param  {Object}        props
 * @param  {Object}        prop.container
 * @param  {Array}         prop.tabs
 * @return {React.Element}
 */
/**
 * The external dependencies.
 */
var ContainerTabs = function ContainerTabs(_ref) {
	var container = _ref.container,
	    tabs = _ref.tabs;

	return _react2.default.createElement(
		'div',
		{ className: 'carbon-tabs-body' },
		tabs.map(function (_ref2) {
			var id = _ref2.id,
			    active = _ref2.active,
			    fields = _ref2.fields;
			return _react2.default.createElement(
				'div',
				{ key: id, className: (0, _classnames2.default)('carbon-fields-collection', 'carbon-tab', { active: active }) },
				_react2.default.createElement(_base2.default, {
					container: container,
					fields: fields })
			);
		})
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
ContainerTabs.propTypes = {
	container: _propTypes2.default.object,
	tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		id: _propTypes2.default.string,
		active: _propTypes2.default.bool,
		fields: _propTypes2.default.array
	}))
};

exports.default = ContainerTabs;

/***/ }),

/***/ "hIJa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ComplexPopover = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactOnclickoutside = __webpack_require__("aCGJ");

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _recompose = __webpack_require__("zpMW");

var _helpers = __webpack_require__("hKI6");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a popover with all groups names when the complex field
 * has more than one group.
 *
 * @param  {Object}        props
 * @param  {Object[]}      props.groups
 * @param  {Boolean}       props.visible
 * @param  {Function}      props.handleItemClick
 * @return {React.Element}
 */
var ComplexPopover = exports.ComplexPopover = function ComplexPopover(_ref) {
	var groups = _ref.groups,
	    visible = _ref.visible,
	    handleItemClick = _ref.handleItemClick;

	return _react2.default.createElement(
		'ul',
		{ hidden: !visible },
		groups.map(function (group, index) {
			return _react2.default.createElement(
				'li',
				{ key: index },
				_react2.default.createElement(
					'a',
					{ href: '#', onClick: handleItemClick(group.name) },
					group.label
				)
			);
		})
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
ComplexPopover.propTypes = {
	groups: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		name: _propTypes2.default.string,
		label: _propTypes2.default.string
	})),
	visible: _propTypes2.default.bool,
	onItemClick: _propTypes2.default.func,
	onClose: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.branch)(
/**
 * Test to see if the popover should be rendered.
 */
function (_ref2) {
	var groups = _ref2.groups;
	return groups.length;
},

/**
 * Render the actual component.
 */
(0, _recompose.compose)(
/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleItemClick: function handleItemClick(_ref3) {
		var onItemClick = _ref3.onItemClick,
		    onClose = _ref3.onClose;
		return function (groupName) {
			return (0, _helpers.preventDefault)(function () {
				onItemClick(groupName);
				onClose();
			});
		};
	},

	handleClickOutside: function handleClickOutside(_ref4) {
		var visible = _ref4.visible,
		    onClose = _ref4.onClose;
		return function () {
			return visible && onClose();
		};
	}
}),

/**
 * Handle clicks outside the components.
 */
_reactOnclickoutside2.default),

/**
 * Render the empty component.
 */
_recompose.renderNothing);

exports.default = enhance(ComplexPopover);

/***/ }),

/***/ "hJx8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("hJx8");

/***/ }),

/***/ "hKI6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = __webpack_require__("mvHQ");

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = __webpack_require__("pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.getTypeDefaultValue = getTypeDefaultValue;
exports.preventDefault = preventDefault;
exports.autoload = autoload;
exports.cancelTasks = cancelTasks;
exports.patchTagBoxAPI = patchTagBoxAPI;
exports.patchWidgetsSaveAPI = patchWidgetsSaveAPI;
exports.getSelectOptionLevel = getSelectOptionLevel;
exports.getSelectOptionAncestors = getSelectOptionAncestors;
exports.compactInput = compactInput;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _qs = __webpack_require__("mw3O");

var _qs2 = _interopRequireDefault(_qs);

var _effects = __webpack_require__("egdi");

var _lodash = __webpack_require__("M4fF");

var _selectors = __webpack_require__("pL4W");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(cancelTasks),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(compactInput); /**
                                                                       * The external dependencies.
                                                                       */


/**
 * The internal dependencies.
 */


/**
 * Return a default value for the type of which the passed entity is.
 * Returns the passed entity if it cannot be handled.
 *
 * @param  {Function} cb
 * @return {Function}
 */
function getTypeDefaultValue(entity) {
	var dictionary = {
		'null': null,
		'undefined': undefined,
		'boolean': false,
		'number': 0,
		'string': '',
		'array': [],
		'object': {},
		'function': function _function() {}
	};

	var type = (0, _lodash.isArray)(entity) ? 'array' : typeof entity === 'undefined' ? 'undefined' : (0, _typeof3.default)(entity);

	var typeDefault = !(0, _lodash.isUndefined)(dictionary[type]) ? dictionary[type] : entity;

	return typeDefault;
}

/**
 * Small helper to reduce code repetetion of `e.preventDefault`.
 *
 * @param  {Function} cb
 * @return {Function}
 */
function preventDefault(cb) {
	/**
  * @inner
  * @param  {Event} e
  * @return {void}
  */
	return function (e) {
		e.preventDefault();
		cb(e);
	};
}

/**
 * Autoload the files in the given path.
 *
 * @param  {Object}   context
 * @param  {Function} [cb]
 * @return {void}
 */
function autoload(context) {
	var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

	context.keys().forEach(function (file) {
		cb(file, context(file));
	});
}

/**
 * Cancel the specified task when a given pattern is matched.
 *
 * @param  {String|Function} pattern
 * @param  {Object[]}        tasks
 * @param  {Function}        matcher
 * @return {void}
 */
function cancelTasks(pattern, tasks, matcher) {
	var action;
	return _regenerator2.default.wrap(function cancelTasks$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (false) {
						_context.next = 10;
						break;
					}

					_context.next = 3;
					return (0, _effects.take)(pattern);

				case 3:
					action = _context.sent;

					if (!matcher(action)) {
						_context.next = 8;
						break;
					}

					_context.next = 7;
					return (0, _effects.all)(tasks.map(function (task) {
						return (0, _effects.cancel)(task);
					}));

				case 7:
					return _context.abrupt('break', 10);

				case 8:
					_context.next = 0;
					break;

				case 10:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

/**
 * Monkey-patch some of the methods of the tags
 * in order to detect changes.
 *
 * @param  {Object} tagBox
 * @param  {String} method
 * @return {void}
 */
function patchTagBoxAPI(tagBox, method) {
	tagBox['_' + method] = tagBox[method];
	tagBox[method] = function () {
		var $textarea = (0, _jquery2.default)(arguments.length <= 0 ? undefined : arguments[0]).closest('.postbox').find('.the-tags');

		var result = tagBox['_' + method].apply(tagBox, arguments);

		$textarea.trigger('change');

		return result;
	};
}

/**
 * Monkey-patch the `save` method of Widgets API
 * so we can intercept the AJAX request.
 *
 * @param  {Object} widgets
 * @return {void}
 */
function patchWidgetsSaveAPI(widgets) {
	widgets._save = widgets.save;
	widgets.save = function () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var widget = args[0],
		    remove = args[1],
		    animate = args[2],
		    order = args[3];

		// Trigger an event so we hook just before the AJAX request.
		// The signature of arguments is `node, 0, 0, 1`.

		if (!remove && !animate && order) {
			(0, _jquery2.default)(document).trigger('widget-before-added', [widget]);
		}

		widgets._save.apply(widgets, args);
	};
}

/**
 * Get select option's level based on its className
 *
 * @param  {Object} option
 * @return {Number}
 */
function getSelectOptionLevel(option) {
	var level = 0;

	if (option.className) {
		var matches = option.className.match(/^level-(\d+)/);

		if (matches) {
			level = parseInt(matches[1], 10) + 1;
		}
	}

	return level;
}

/**
 * Get a select option's ancestor options in according to hierarchy
 *
 * @param  {Object} option
 * @return {Object}
 */
function getSelectOptionAncestors(option) {
	var ancestors = [];

	var $prev = (0, _jquery2.default)(option);
	var level = getSelectOptionLevel($prev.get(0));
	while (level > 0 && $prev.length > 0) {
		if (getSelectOptionLevel($prev.get(0)) !== level) {
			$prev = $prev.prev();
			continue; // skip since this is a sibling/cousin, not an ancestor
		}

		var id = parseInt($prev.val(), 10);
		if (id > 0) {
			ancestors.unshift(id);
		}

		$prev = $prev.prev();
		level--;
	}
	return ancestors;
};

function compactInput(form, container, fieldName) {
	var containers, $containerFieldsets, i, $containerFieldset, $input;
	return _regenerator2.default.wrap(function compactInput$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					if (!(0, _lodash.isUndefined)(container)) {
						_context2.next = 6;
						break;
					}

					_context2.next = 3;
					return (0, _effects.select)(_selectors.getVisibleContainers);

				case 3:
					_context2.t0 = _context2.sent;
					_context2.next = 7;
					break;

				case 6:
					_context2.t0 = [container];

				case 7:
					containers = _context2.t0;

					fieldName = (0, _lodash.isUndefined)(fieldName) ? carbonFieldsConfig.compactInputKey : fieldName;

					$containerFieldsets = (0, _jquery2.default)();

					for (i = 0; i < containers.length; i++) {
						$containerFieldset = (0, _jquery2.default)(form).find('fieldset.container-' + containers[i].id + ':first');

						$containerFieldsets = $containerFieldsets.add($containerFieldset);
					}

					// Append a hidden field containing the compacted input as JSON
					$input = (0, _jquery2.default)(form).find('input[name="' + fieldName + '"]');

					if ($input.length === 0) {
						$input = (0, _jquery2.default)('<input type="hidden" name="' + fieldName + '" value="" />');
					}
					$input.val((0, _stringify2.default)(_qs2.default.parse($containerFieldsets.serialize())));
					(0, _jquery2.default)(form).append($input);

					// Remove all name attributes to not clog up the request with duplicate input vars
					$containerFieldsets.find('input, select, textarea, button').each(function () {
						(0, _jquery2.default)(this).data('carbonFieldsName', (0, _jquery2.default)(this).attr('name'));
						(0, _jquery2.default)(this).removeAttr('name');
					});
					setTimeout(function () {
						$containerFieldsets.find('input, select, textarea, button').each(function () {
							(0, _jquery2.default)(this).attr('name', (0, _jquery2.default)(this).data('carbonFieldsName'));
						});
					}, 1);

				case 17:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/***/ }),

/***/ "i/C/":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("exh5");
module.exports = __webpack_require__("FeBl").Object.setPrototypeOf;


/***/ }),

/***/ "iBkS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.workerReceiveContainer = workerReceiveContainer;
exports.workerSyncHash = workerSyncHash;
exports.default = foreman;

var _urldecode = __webpack_require__("E08R");

var _urldecode2 = _interopRequireDefault(_urldecode);

var _effects = __webpack_require__("egdi");

var _lodash = __webpack_require__("M4fF");

var _constants = __webpack_require__("+5vj");

var _factory = __webpack_require__("arVC");

var _factory2 = _interopRequireDefault(_factory);

var _selectors = __webpack_require__("pL4W");

var _actions = __webpack_require__("vVye");

var _actions2 = __webpack_require__("HRbf");

var _helpers = __webpack_require__("pP85");

var _constants2 = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerReceiveContainer),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerSyncHash),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Prepare the container for inserting in the store.
 *
 * @param  {Object}  store
 * @param  {Object}  action
 * @param  {Object}  action.payload
 * @param  {String}  action.payload.container
 * @param  {Boolean} action.payload.expanded
 * @return {void}
 */
function workerReceiveContainer(store, _ref) {
  var _ref$payload = _ref.payload,
      container = _ref$payload.container,
      expanded = _ref$payload.expanded;

  var fields, _container, id, type;

  return _regenerator2.default.wrap(function workerReceiveContainer$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fields = [];
          _context.next = 3;
          return (0, _effects.call)(_urldecode2.default, container);

        case 3:
          container = _context.sent;
          _context.next = 6;
          return (0, _effects.call)([JSON, JSON.parse], container);

        case 6:
          container = _context.sent;
          _context.next = 9;
          return (0, _effects.call)(_lodash.map, container.fields, function (field) {
            return (0, _helpers.flattenField)(field, container, _constants2.PARENT_TYPE_CONTAINER, fields);
          });

        case 9:
          container.fields = _context.sent;
          _context.next = 12;
          return (0, _effects.call)(_lodash.keyBy, fields, 'id');

        case 12:
          fields = _context.sent;
          _context.next = 15;
          return (0, _effects.put)((0, _actions.addContainer)(container));

        case 15:
          _context.next = 17;
          return (0, _effects.put)((0, _actions2.addFields)(fields));

        case 17:
          _container = container, id = _container.id, type = _container.type;
          _context.next = 20;
          return (0, _effects.call)(_factory2.default, store, type, { id: id });

        case 20:
          _context.next = 22;
          return (0, _effects.put)((0, _actions.toggleContainerBox)(id, expanded));

        case 22:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/**
 * Add the current tab as hash in URL.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.containerId
 * @param  {String} action.payload.tabId
 * @return {void}
 */
function workerSyncHash(_ref2) {
  var _ref2$payload = _ref2.payload,
      containerId = _ref2$payload.containerId,
      tabId = _ref2$payload.tabId;
  var container, shouldChangeHash;
  return _regenerator2.default.wrap(function workerSyncHash$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.select)(_selectors.getContainerById, containerId);

        case 2:
          container = _context2.sent;
          _context2.next = 5;
          return (0, _effects.call)(_lodash.get, container, 'ui.tabs_in_url', false);

        case 5:
          shouldChangeHash = _context2.sent;

          if (!shouldChangeHash) {
            _context2.next = 9;
            break;
          }

          _context2.next = 9;
          return (0, _effects.call)(_lodash.set, window, 'location.hash', '!' + tabId);

        case 9:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
function foreman(store) {
  var pagenow;
  return _regenerator2.default.wrap(function foreman$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          pagenow = window.carbon_json.pagenow;
          _context3.next = 3;
          return (0, _effects.takeEvery)(_actions.switchContainerTab, workerSyncHash);

        case 3:
          if (!(pagenow === _constants.PAGE_NOW_WIDGETS || pagenow === _constants.PAGE_NOW_CUSTOMIZE || pagenow === _constants.PAGE_NOW_MENUS)) {
            _context3.next = 6;
            break;
          }

          _context3.next = 6;
          return (0, _effects.takeEvery)(_actions.receiveContainer, workerReceiveContainer, store);

        case 6:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

/***/ }),

/***/ "igqX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("igqX");

/***/ }),

/***/ "iiPh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var cache = {}

function noop () {}

module.exports = !global.document ? noop : insertStyles

function insertStyles (styles, options) {
  var id = options && options.id || styles

  var element = cache[id] = (cache[id] || createStyle(id))

  if ('textContent' in element) {
    element.textContent = styles
  } else {
    element.styleSheet.cssText = styles
  }
}

function createStyle (id) {
  var element = document.getElementById(id)

  if (element) return element

  element = document.createElement('style')
  element.setAttribute('type', 'text/css')

  document.head.appendChild(element)

  return element
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "imyQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.1.1
 * react-dom-server.browser.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var invariant = __webpack_require__("cxPT");
var _assign = __webpack_require__("BEQ0");
var React = __webpack_require__("GiK3");
var emptyFunction = __webpack_require__("e6+Q");
var emptyObject = __webpack_require__("TJez");
var hyphenateStyleName = __webpack_require__("mL1Z");
var memoizeStringOnly = __webpack_require__("Jl+d");
var warning = __webpack_require__("YyeZ");
var checkPropTypes = __webpack_require__("Ie6m");
var camelizeStyleName = __webpack_require__("/lfX");

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

// These attributes should be all lowercase to allow for
// case insensitive checks
var RESERVED_PROPS = {
  children: true,
  dangerouslySetInnerHTML: true,
  defaultValue: true,
  defaultChecked: true,
  innerHTML: true,
  suppressContentEditableWarning: true,
  suppressHydrationWarning: true,
  style: true
};

function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

var DOMPropertyInjection = {
  /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
  MUST_USE_PROPERTY: 0x1,
  HAS_BOOLEAN_VALUE: 0x4,
  HAS_NUMERIC_VALUE: 0x8,
  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,
  HAS_STRING_BOOLEAN_VALUE: 0x40,

  /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
  injectDOMPropertyConfig: function (domPropertyConfig) {
    var Injection = DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    for (var propName in Properties) {
      !!properties.hasOwnProperty(propName) ? invariant(false, "injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.", propName) : void 0;

      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];

      var propertyInfo = {
        attributeName: lowerCased,
        attributeNamespace: null,
        propertyName: propName,
        mutationMethod: null,

        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE),
        hasStringBooleanValue: checkMask(propConfig, Injection.HAS_STRING_BOOLEAN_VALUE)
      };
      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? invariant(false, "DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s", propName) : void 0;

      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];

        propertyInfo.attributeName = attributeName;
      }

      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
      }

      if (DOMMutationMethods.hasOwnProperty(propName)) {
        propertyInfo.mutationMethod = DOMMutationMethods[propName];
      }

      // Downcase references to whitelist properties to check for membership
      // without case-sensitivity. This allows the whitelist to pick up
      // `allowfullscreen`, which should be written using the property configuration
      // for `allowFullscreen`
      properties[propName] = propertyInfo;
    }
  }
};

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";


var ROOT_ATTRIBUTE_NAME = 'data-reactroot';

/**
 * Map from property "standard name" to an object with info about how to set
 * the property in the DOM. Each object contains:
 *
 * attributeName:
 *   Used when rendering markup or with `*Attribute()`.
 * attributeNamespace
 * propertyName:
 *   Used on DOM node instances. (This includes properties that mutate due to
 *   external factors.)
 * mutationMethod:
 *   If non-null, used instead of the property or `setAttribute()` after
 *   initial render.
 * mustUseProperty:
 *   Whether the property must be accessed and mutated as an object property.
 * hasBooleanValue:
 *   Whether the property should be removed when set to a falsey value.
 * hasNumericValue:
 *   Whether the property must be numeric or parse as a numeric and should be
 *   removed when set to a falsey value.
 * hasPositiveNumericValue:
 *   Whether the property must be positive numeric or parse as a positive
 *   numeric and should be removed when set to a falsey value.
 * hasOverloadedBooleanValue:
 *   Whether the property can be used as a flag as well as with a value.
 *   Removed when strictly equal to false; present without a value when
 *   strictly equal to true; present with a value otherwise.
 */
var properties = {};

/**
 * Checks whether a property name is a writeable attribute.
 * @method
 */
function shouldSetAttribute(name, value) {
  if (isReservedProp(name)) {
    return false;
  }
  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return false;
  }
  if (value === null) {
    return true;
  }
  switch (typeof value) {
    case 'boolean':
      return shouldAttributeAcceptBooleanValue(name);
    case 'undefined':
    case 'number':
    case 'string':
    case 'object':
      return true;
    default:
      // function, symbol
      return false;
  }
}

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function shouldAttributeAcceptBooleanValue(name) {
  if (isReservedProp(name)) {
    return true;
  }
  var propertyInfo = getPropertyInfo(name);
  if (propertyInfo) {
    return propertyInfo.hasBooleanValue || propertyInfo.hasStringBooleanValue || propertyInfo.hasOverloadedBooleanValue;
  }
  var prefix = name.toLowerCase().slice(0, 5);
  return prefix === 'data-' || prefix === 'aria-';
}

/**
 * Checks to see if a property name is within the list of properties
 * reserved for internal React operations. These properties should
 * not be set on an HTML element.
 *
 * @private
 * @param {string} name
 * @return {boolean} If the name is within reserved props
 */
function isReservedProp(name) {
  return RESERVED_PROPS.hasOwnProperty(name);
}

var injection = DOMPropertyInjection;

var MUST_USE_PROPERTY = injection.MUST_USE_PROPERTY;
var HAS_BOOLEAN_VALUE = injection.HAS_BOOLEAN_VALUE;
var HAS_NUMERIC_VALUE = injection.HAS_NUMERIC_VALUE;
var HAS_POSITIVE_NUMERIC_VALUE = injection.HAS_POSITIVE_NUMERIC_VALUE;
var HAS_OVERLOADED_BOOLEAN_VALUE = injection.HAS_OVERLOADED_BOOLEAN_VALUE;
var HAS_STRING_BOOLEAN_VALUE = injection.HAS_STRING_BOOLEAN_VALUE;

var HTMLDOMPropertyConfig = {
  // When adding attributes to this list, be sure to also add them to
  // the `possibleStandardNames` module to ensure casing and incorrect
  // name warnings.
  Properties: {
    allowFullScreen: HAS_BOOLEAN_VALUE,
    // specifies target context for links with `preload` type
    async: HAS_BOOLEAN_VALUE,
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    autoFocus: HAS_BOOLEAN_VALUE,
    autoPlay: HAS_BOOLEAN_VALUE,
    capture: HAS_OVERLOADED_BOOLEAN_VALUE,
    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    cols: HAS_POSITIVE_NUMERIC_VALUE,
    contentEditable: HAS_STRING_BOOLEAN_VALUE,
    controls: HAS_BOOLEAN_VALUE,
    'default': HAS_BOOLEAN_VALUE,
    defer: HAS_BOOLEAN_VALUE,
    disabled: HAS_BOOLEAN_VALUE,
    download: HAS_OVERLOADED_BOOLEAN_VALUE,
    draggable: HAS_STRING_BOOLEAN_VALUE,
    formNoValidate: HAS_BOOLEAN_VALUE,
    hidden: HAS_BOOLEAN_VALUE,
    loop: HAS_BOOLEAN_VALUE,
    // Caution; `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`.
    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    noValidate: HAS_BOOLEAN_VALUE,
    open: HAS_BOOLEAN_VALUE,
    playsInline: HAS_BOOLEAN_VALUE,
    readOnly: HAS_BOOLEAN_VALUE,
    required: HAS_BOOLEAN_VALUE,
    reversed: HAS_BOOLEAN_VALUE,
    rows: HAS_POSITIVE_NUMERIC_VALUE,
    rowSpan: HAS_NUMERIC_VALUE,
    scoped: HAS_BOOLEAN_VALUE,
    seamless: HAS_BOOLEAN_VALUE,
    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    size: HAS_POSITIVE_NUMERIC_VALUE,
    start: HAS_NUMERIC_VALUE,
    // support for projecting regular DOM Elements via V1 named slots ( shadow dom )
    span: HAS_POSITIVE_NUMERIC_VALUE,
    spellCheck: HAS_STRING_BOOLEAN_VALUE,
    // Style must be explicitly set in the attribute list. React components
    // expect a style object
    style: 0,
    // Keep it in the whitelist because it is case-sensitive for SVG.
    tabIndex: 0,
    // itemScope is for for Microdata support.
    // See http://schema.org/docs/gs.html
    itemScope: HAS_BOOLEAN_VALUE,
    // These attributes must stay in the white-list because they have
    // different attribute names (see DOMAttributeNames below)
    acceptCharset: 0,
    className: 0,
    htmlFor: 0,
    httpEquiv: 0,
    // Attributes with mutation methods must be specified in the whitelist
    // Set the string boolean flag to allow the behavior
    value: HAS_STRING_BOOLEAN_VALUE
  },
  DOMAttributeNames: {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
  },
  DOMMutationMethods: {
    value: function (node, value) {
      if (value == null) {
        return node.removeAttribute('value');
      }

      // Number inputs get special treatment due to some edge cases in
      // Chrome. Let everything else assign the value attribute as normal.
      // https://github.com/facebook/react/issues/7253#issuecomment-236074326
      if (node.type !== 'number' || node.hasAttribute('value') === false) {
        node.setAttribute('value', '' + value);
      } else if (node.validity && !node.validity.badInput && node.ownerDocument.activeElement !== node) {
        // Don't assign an attribute if validation reports bad
        // input. Chrome will clear the value. Additionally, don't
        // operate on inputs that have focus, otherwise Chrome might
        // strip off trailing decimal places and cause the user's
        // cursor position to jump to the beginning of the input.
        //
        // In ReactDOMInput, we have an onBlur event that will trigger
        // this function again when focus is lost.
        node.setAttribute('value', '' + value);
      }
    }
  }
};

var HAS_STRING_BOOLEAN_VALUE$1 = injection.HAS_STRING_BOOLEAN_VALUE;


var NS = {
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace'
};

/**
 * This is a list of all SVG attributes that need special casing,
 * namespacing, or boolean value assignment.
 *
 * When adding attributes to this list, be sure to also add them to
 * the `possibleStandardNames` module to ensure casing and incorrect
 * name warnings.
 *
 * SVG Attributes List:
 * https://www.w3.org/TR/SVG/attindex.html
 * SMIL Spec:
 * https://www.w3.org/TR/smil
 */
var ATTRS = ['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'x-height', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xmlns:xlink', 'xml:lang', 'xml:space'];

var SVGDOMPropertyConfig = {
  Properties: {
    autoReverse: HAS_STRING_BOOLEAN_VALUE$1,
    externalResourcesRequired: HAS_STRING_BOOLEAN_VALUE$1,
    preserveAlpha: HAS_STRING_BOOLEAN_VALUE$1
  },
  DOMAttributeNames: {
    autoReverse: 'autoReverse',
    externalResourcesRequired: 'externalResourcesRequired',
    preserveAlpha: 'preserveAlpha'
  },
  DOMAttributeNamespaces: {
    xlinkActuate: NS.xlink,
    xlinkArcrole: NS.xlink,
    xlinkHref: NS.xlink,
    xlinkRole: NS.xlink,
    xlinkShow: NS.xlink,
    xlinkTitle: NS.xlink,
    xlinkType: NS.xlink,
    xmlBase: NS.xml,
    xmlLang: NS.xml,
    xmlSpace: NS.xml
  }
};

var CAMELIZE = /[\-\:]([a-z])/g;
var capitalize = function (token) {
  return token[1].toUpperCase();
};

ATTRS.forEach(function (original) {
  var reactName = original.replace(CAMELIZE, capitalize);

  SVGDOMPropertyConfig.Properties[reactName] = 0;
  SVGDOMPropertyConfig.DOMAttributeNames[reactName] = original;
});

injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
injection.injectDOMPropertyConfig(SVGDOMPropertyConfig);

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.1.1';

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

var ReactInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;


var ReactDebugCurrentFrame = ReactInternals.ReactDebugCurrentFrame;

// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextContentForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }
  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextContentForBrowser(value) + '"';
}

// isAttributeNameSafe() is currently duplicated in DOMPropertyOperations.
// TODO: Find a better place for this.
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
    return true;
  }
  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
    return false;
  }
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  illegalAttributeNameCache[attributeName] = true;
  {
    warning(false, 'Invalid attribute name: `%s`', attributeName);
  }
  return false;
}

// shouldIgnoreValue() is currently duplicated in DOMPropertyOperations.
// TODO: Find a better place for this.
function shouldIgnoreValue(propertyInfo, value) {
  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
}

/**
 * Operations for dealing with DOM properties.
 */

/**
 * Creates markup for the ID property.
 *
 * @param {string} id Unescaped ID.
 * @return {string} Markup string.
 */


function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}

/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */
function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);
  if (propertyInfo) {
    if (shouldIgnoreValue(propertyInfo, value)) {
      return '';
    }
    var attributeName = propertyInfo.attributeName;
    if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
      return attributeName + '=""';
    } else if (typeof value !== 'boolean' || shouldAttributeAcceptBooleanValue(name)) {
      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (shouldSetAttribute(name, value)) {
    if (value == null) {
      return '';
    }
    return name + '=' + quoteAttributeValueForBrowser(value);
  }
  return null;
}

/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */
function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }
  return name + '=' + quoteAttributeValueForBrowser(value);
}

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
};

// Assumes there is no parent namespace.
function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;
    case 'math':
      return MATH_NAMESPACE;
    default:
      return HTML_NAMESPACE;
  }
}

function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }
  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  }
  // By default, pass namespace below.
  return parentNamespace;
}

var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };

  var propTypes = {
    value: function (props, propName, componentName) {
      if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };

  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props, getStack) {
    checkPropTypes(propTypes, props, 'prop', tagName, getStack);
  };
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

var HTML = '__html';

function assertValidProps(tag, props, getStack) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (voidElementTags[tag]) {
    !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, getStack()) : void 0;
  }
  if (props.dangerouslySetInnerHTML != null) {
    !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
  }
  {
    warning(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.%s', getStack());
  }
  !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', getStack()) : void 0;
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }
  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var warnValidStyle = emptyFunction;

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var warnHyphenatedStyleName = function (name, getStack) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), getStack());
  };

  var warnBadVendoredStyleName = function (name, getStack) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), getStack());
  };

  var warnStyleValueWithSemicolon = function (name, value, getStack) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.%s', name, value.replace(badStyleValueWithSemicolonPattern, ''), getStack());
  };

  var warnStyleValueIsNaN = function (name, value, getStack) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, getStack());
  };

  var warnStyleValueIsInfinity = function (name, value, getStack) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, getStack());
  };

  warnValidStyle = function (name, value, getStack) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, getStack);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, getStack);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, getStack);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value, getStack);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value, getStack);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0, // state
  'aria-details': 0,
  'aria-disabled': 0, // state
  'aria-hidden': 0, // state
  'aria-invalid': 0, // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty = Object.prototype.hasOwnProperty;

function getStackAddendum$1() {
  var stack = ReactDebugCurrentFrame.getStackAddendum();
  return stack != null ? stack : '';
}

function validateProperty(tagName, name) {
  if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = 'aria-' + name.slice(4).toLowerCase();
    var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (correctName == null) {
      warning(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s', name, getStackAddendum$1());
      warnedProperties[name] = true;
      return true;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== correctName) {
      warning(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?%s', name, correctName, getStackAddendum$1());
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== standardName) {
      warning(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$1());
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  var invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key);
    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    warning(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum$1());
  } else if (invalidProps.length > 1) {
    warning(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum$1());
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;

function getStackAddendum$2() {
  var stack = ReactDebugCurrentFrame.getStackAddendum();
  return stack != null ? stack : '';
}

function validateProperties$1(type, props) {
  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
    return;
  }

  if (props != null && props.value === null && !didWarnValueNull) {
    didWarnValueNull = true;
    if (type === 'select' && props.multiple) {
      warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.%s', type, getStackAddendum$2());
    } else {
      warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', type, getStackAddendum$2());
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */

/**
 * Ordered list of injected plugins.
 */
var plugins = [];

/**
 * Mapping from event name to dispatch config
 */


/**
 * Mapping from registration name to plugin module
 */
var registrationNameModules = {};

/**
 * Mapping from registration name to event name
 */


/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */
var possibleRegistrationNames = {};
// Trust the developer to only use possibleRegistrationNames in true

/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */


/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  'class': 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  'default': 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  'for': 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',

  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  'in': 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  'typeof': 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

function getStackAddendum$3() {
  var stack = ReactDebugCurrentFrame.getStackAddendum();
  return stack != null ? stack : '';
}

{
  var warnedProperties$1 = {};
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on[A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  var validateProperty$1 = function (tagName, name, value) {
    if (hasOwnProperty$1.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    if (registrationNameModules.hasOwnProperty(name)) {
      return true;
    }

    if (plugins.length === 0 && EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we might be in a server environment.
      // Don't check events in this case.
      return true;
    }

    var lowerCasedName = name.toLowerCase();
    var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

    if (registrationName != null) {
      warning(false, 'Invalid event handler property `%s`. Did you mean `%s`?%s', name, registrationName, getStackAddendum$3());
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName.indexOf('on') === 0 && lowerCasedName.length > 2) {
      warning(false, 'Unknown event handler property `%s`. It will be ignored.%s', name, getStackAddendum$3());
      warnedProperties$1[name] = true;
      return true;
    }

    // Let the ARIA attribute hook validate ARIA attributes
    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      warning(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      warning(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      warning(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      warning(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.%s', typeof value, getStackAddendum$3());
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      warning(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.%s', name, getStackAddendum$3());
      warnedProperties$1[name] = true;
      return true;
    }

    var isReserved = isReservedProp(name);

    // Known attributes should match the casing specified in the property config.
    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];
      if (standardName !== name) {
        warning(false, 'Invalid DOM property `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$3());
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      warning(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.%s', name, lowerCasedName, getStackAddendum$3());
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && !shouldAttributeAcceptBooleanValue(name)) {
      if (value) {
        warning(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.%s', value, name, name, value, name, getStackAddendum$3());
      } else {
        warning(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.%s', value, name, name, value, name, name, name, getStackAddendum$3());
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Now that we've validated casing, do not validate
    // data types for reserved props
    if (isReserved) {
      return true;
    }

    // Warn when a known attribute is a bad type
    if (!shouldSetAttribute(name, value)) {
      warnedProperties$1[name] = true;
      return false;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props) {
  var unknownProps = [];
  for (var key in props) {
    var isValid = validateProperty$1(type, key, props[key]);
    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');
  if (unknownProps.length === 1) {
    warning(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$3());
  } else if (unknownProps.length > 1) {
    warning(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$3());
  }
};

function validateProperties$2(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnUnknownProperties(type, props);
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var REACT_FRAGMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.fragment') || 0xeacb;

// Based on reading the React.Children implementation. TODO: type this somewhere?

var toArray = React.Children.toArray;

var getStackAddendum = emptyFunction.thatReturns('');

{
  var validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props);
  };

  var describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  var currentDebugStack = null;
  var currentDebugElementStack = null;
  var setCurrentDebugStack = function (stack) {
    var frame = stack[stack.length - 1];
    currentDebugElementStack = frame.debugElementStack;
    // We are about to enter a new composite stack, reset the array.
    currentDebugElementStack.length = 0;
    currentDebugStack = stack;
    ReactDebugCurrentFrame.getCurrentStack = getStackAddendum;
  };
  var pushElementToDebugStack = function (element) {
    if (currentDebugElementStack !== null) {
      currentDebugElementStack.push(element);
    }
  };
  var resetCurrentDebugStack = function () {
    currentDebugElementStack = null;
    currentDebugStack = null;
    ReactDebugCurrentFrame.getCurrentStack = null;
  };
  getStackAddendum = function () {
    if (currentDebugStack === null) {
      return '';
    }
    var stack = '';
    var debugStack = currentDebugStack;
    for (var i = debugStack.length - 1; i >= 0; i--) {
      var frame = debugStack[i];
      var _debugElementStack = frame.debugElementStack;
      for (var ii = _debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(_debugElementStack[ii]);
      }
    }
    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
};

function getComponentName(type) {
  return typeof type === 'string' ? type : typeof type === 'function' ? type.displayName || type.name : null;
}

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    !VALID_TAG_REGEX.test(tag) ? invariant(false, 'Invalid tag: %s', tag) : void 0;
    validatedTagCache[tag] = true;
  }
}

var processStyleName = memoizeStringOnly(function (styleName) {
  return hyphenateStyleName(styleName);
});

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];
    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue, getStackAddendum);
      }
    }
    if (styleValue != null) {
      serialized += delimiter + processStyleName(styleName) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);

      delimiter = ';';
    }
  }
  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    var componentName = constructor && getComponentName(constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    warning(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;
  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;
    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextContentForBrowser(content);
    }
  }
  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }
  var element = children;
  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }
  var fragmentChildren = element.props.children;
  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }
  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  var content = '';
  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    if (typeof child === 'string' || typeof child === 'number') {
      content += child;
    } else {
      {
        if (!didWarnInvalidOptionChildren) {
          didWarnInvalidOptionChildren = true;
          warning(false, 'Only strings and numbers are supported as <option> children.');
        }
      }
    }
  });
  return content;
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;
  if (!contextTypes) {
    return emptyObject;
  }
  var maskedContext = {};
  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }
  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component', getStackAddendum);
  }
}

function processContext(type, context) {
  var maskedContext = maskContext(type, context);
  {
    if (type.contextTypes) {
      checkContextTypes(type.contextTypes, maskedContext, 'context');
    }
  }
  return maskedContext;
}

var STYLE = 'style';
var RESERVED_PROPS$1 = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!props.hasOwnProperty(propKey)) {
      continue;
    }
    var propValue = props[propKey];
    if (propValue == null) {
      continue;
    }
    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }
    var markup = null;
    if (isCustomComponent(tagLowercase, props)) {
      if (!RESERVED_PROPS$1.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }
    if (markup) {
      ret += ' ' + markup;
    }
  }

  // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.
  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }
  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', getComponentName(type) || 'Component');
  }
}

function resolve(child, context) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    {
      pushElementToDebugStack(element);
    }
    var Component = element.type;
    if (typeof Component !== 'function') {
      break;
    }
    var publicContext = processContext(Component, context);
    var inst;
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, partialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }
        queue.push(partialState);
      }
    };

    if (shouldConstruct(Component)) {
      inst = new Component(element.props, publicContext, updater);
    } else {
      inst = Component(element.props, publicContext, updater);
      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        continue;
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    if (inst.componentWillMount) {
      inst.componentWillMount();
      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;
          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];
            var partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;
            if (partialState) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, partialState);
              } else {
                _assign(nextState, partialState);
              }
            }
          }
          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }
    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }
    validateRenderResult(child, Component);

    var childContext;
    if (typeof inst.getChildContext === 'function') {
      var childContextTypes = Component.childContextTypes;
      !(typeof childContextTypes === 'object') ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().', getComponentName(Component) || 'Unknown') : void 0;
      childContext = inst.getChildContext();
      for (var contextKey in childContext) {
        !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(Component) || 'Unknown', contextKey) : void 0;
      }
    }
    if (childContext) {
      context = _assign({}, context, childContext);
    }
  }
  return { child: child, context: context };
}

var ReactDOMServerRenderer$1 = function () {
  function ReactDOMServerRenderer(children, makeStaticMarkup) {
    _classCallCheck(this, ReactDOMServerRenderer);

    var flatChildren = flattenTopLevelChildren(children);

    var topFrame = {
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };
    {
      topFrame.debugElementStack = [];
    }
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
  }
  // TODO: type this more strictly:


  ReactDOMServerRenderer.prototype.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var out = '';
    while (out.length < bytes) {
      if (this.stack.length === 0) {
        this.exhausted = true;
        break;
      }
      var frame = this.stack[this.stack.length - 1];
      if (frame.childIndex >= frame.children.length) {
        var footer = frame.footer;
        out += footer;
        if (footer !== '') {
          this.previousWasTextNode = false;
        }
        this.stack.pop();
        if (frame.tag === 'select') {
          this.currentSelectValue = null;
        }
        continue;
      }
      var child = frame.children[frame.childIndex++];
      {
        setCurrentDebugStack(this.stack);
      }
      out += this.render(child, frame.context, frame.domNamespace);
      {
        // TODO: Handle reentrant server render calls. This doesn't.
        resetCurrentDebugStack();
      }
    }
    return out;
  };

  ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;
      if (text === '') {
        return '';
      }
      if (this.makeStaticMarkup) {
        return escapeTextContentForBrowser(text);
      }
      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextContentForBrowser(text);
      }
      this.previousWasTextNode = true;
      return escapeTextContentForBrowser(text);
    } else {
      var nextChild;

      var _resolve = resolve(child, context);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        var nextChildren = toArray(nextChild);
        var frame = {
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };
        {
          frame.debugElementStack = [];
        }
        this.stack.push(frame);
        return '';
      } else if (nextChild.type === REACT_FRAGMENT_TYPE) {
        var _nextChildren = toArray(nextChild.props.children);
        var _frame = {
          domNamespace: parentNamespace,
          children: _nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };
        {
          _frame.debugElementStack = [];
        }
        this.stack.push(_frame);
        return '';
      } else {
        // Safe because we just checked it's an element.
        var nextElement = nextChild;
        return this.renderDOM(nextElement, context, parentNamespace);
      }
    }
  };

  ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();

    var namespace = parentNamespace;
    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        warning(tag === element.type, '<%s /> is using uppercase HTML. Always use lowercase HTML tags ' + 'in React.', element.type);
      }
    }

    validateDangerousTag(tag);

    var props = element.props;
    if (tag === 'input') {
      {
        ReactControlledValuePropTypes.checkPropTypes('input', props, getStackAddendum);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultChecked = true;
        }
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes.checkPropTypes('textarea', props, getStackAddendum);
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;
      if (initialValue == null) {
        var defaultValue = props.defaultValue;
        // TODO (yungsters): Remove support for children content in <textarea>.
        var textareaChildren = props.children;
        if (textareaChildren != null) {
          {
            warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }
          !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
          if (Array.isArray(textareaChildren)) {
            !(textareaChildren.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes.checkPropTypes('select', props, getStackAddendum);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];
          if (props[propName] == null) {
            continue;
          }
          var isArray = Array.isArray(props[propName]);
          if (props.multiple && !isArray) {
            warning(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, '');
          } else if (!props.multiple && isArray) {
            warning(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, '');
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultSelectValue = true;
        }
      }
      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);
      if (selectValue != null) {
        var value;
        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }
        selected = false;
        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props, getStackAddendum);

    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';
    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }
    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);
    if (innerMarkup != null) {
      children = [];
      if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }
      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }
    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      tag: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };
    {
      frame.debugElementStack = [];
    }
    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */
function renderToString(element) {
  var renderer = new ReactDOMServerRenderer$1(element, false);
  var markup = renderer.read(Infinity);
  return markup;
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  var renderer = new ReactDOMServerRenderer$1(element, true);
  var markup = renderer.read(Infinity);
  return markup;
}

function renderToNodeStream() {
  invariant(false, 'ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.');
}

function renderToStaticNodeStream() {
  invariant(false, 'ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.');
}

// Note: when changing this, also consider https://github.com/facebook/react/issues/11526
var ReactDOMServerBrowser = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup,
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream,
  version: ReactVersion
};

var ReactDOMServerBrowser$1 = Object.freeze({
	default: ReactDOMServerBrowser
});

var ReactDOMServer = ( ReactDOMServerBrowser$1 && ReactDOMServerBrowser ) || ReactDOMServerBrowser$1;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest
var server_browser = ReactDOMServer['default'] ? ReactDOMServer['default'] : ReactDOMServer;

module.exports = server_browser;
  })();
}


/***/ }),

/***/ "ioQ5":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__("HpRW")('Set');


/***/ }),

/***/ "iqss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__("M4fF");

var _equality = __webpack_require__("Eql7");

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__("r/IV");

var _contain2 = _interopRequireDefault(_contain);

var _base = __webpack_require__("94C5");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The external dependecies.
 */
exports.default = (0, _extends3.default)({}, _base2.default, {

	/**
  * The supported comparers.
  *
  * @type {Function[]}
  */
	comparers: [_equality2.default, _contain2.default],

	/**
  * Check if the condition is fulfiled.
  *
  * @param  {Object}  definition
  * @param  {Object}  env
  * @return {Boolean}
  */
	isFulfiled: function isFulfiled(definition, env) {
		var compare = definition.compare,
		    value = definition.value;


		return this.firstSupportedComparerIsCorrect(env.user_role, compare, value);
	}
});

/**
 * The internal dependencies.
 */

/***/ }),

/***/ "jKW+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("kM2E");
var newPromiseCapability = __webpack_require__("qARP");
var perform = __webpack_require__("dNDb");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "jSEj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toArray2 = __webpack_require__("7nRM");

var _toArray3 = _interopRequireDefault(_toArray2);

var _toConsumableArray2 = __webpack_require__("Gu7T");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.prepareValueForField = prepareValueForField;
exports.prepareValueForFileField = prepareValueForFileField;
exports.prepareValueForMediaGalleryField = prepareValueForMediaGalleryField;
exports.workerAddMultipleFiles = workerAddMultipleFiles;
exports.redrawAttachmentPreview = redrawAttachmentPreview;
exports.workerRedrawAttachmentPreview = workerRedrawAttachmentPreview;
exports.workerOpenMediaBrowser = workerOpenMediaBrowser;
exports.workerSetupMediaBrowser = workerSetupMediaBrowser;
exports.default = foreman;

var _effects = __webpack_require__("egdi");

var _lodash = __webpack_require__("M4fF");

var _events = __webpack_require__("x1uS");

var _selectors = __webpack_require__("ZMHW");

var _helpers = __webpack_require__("pP85");

var _actions = __webpack_require__("HRbf");

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(prepareValueForField),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(prepareValueForFileField),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(prepareValueForMediaGalleryField),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(workerAddMultipleFiles),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(redrawAttachmentPreview),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(workerRedrawAttachmentPreview),
    _marked7 = /*#__PURE__*/_regenerator2.default.mark(workerOpenMediaBrowser),
    _marked8 = /*#__PURE__*/_regenerator2.default.mark(workerSetupMediaBrowser),
    _marked9 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Prepares a field's value depending on its type.
 *
 * @param  {String} fieldId
 * @param  {Object} attachment
 * @return {void}
 */
function prepareValueForField(fieldId, attachment) {
	var field;
	return _regenerator2.default.wrap(function prepareValueForField$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _effects.select)(_selectors.getFieldById, fieldId);

				case 2:
					field = _context.sent;

					if (!(field.type === _constants.TYPE_FILE || field.type === _constants.TYPE_IMAGE)) {
						_context.next = 9;
						break;
					}

					_context.next = 6;
					return prepareValueForFileField(fieldId, attachment);

				case 6:
					return _context.abrupt('return', _context.sent);

				case 9:
					if (!(field.type === _constants.TYPE_MEDIA_GALLERY)) {
						_context.next = 13;
						break;
					}

					_context.next = 12;
					return prepareValueForMediaGalleryField(fieldId, attachment);

				case 12:
					return _context.abrupt('return', _context.sent);

				case 13:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

/**
 * Set a field's value depending on its value_type property
 *
 * @param  {String} fieldId
 * @param  {Object} attachment
 * @return {void}
 */
function prepareValueForFileField(fieldId, attachment) {
	var field, value;
	return _regenerator2.default.wrap(function prepareValueForFileField$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.select)(_selectors.getFieldById, fieldId);

				case 2:
					field = _context2.sent;
					value = (0, _lodash.isUndefined)(attachment[field.value_type]) ? attachment.id : attachment[field.value_type];
					return _context2.abrupt('return', value);

				case 5:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/**
 * Prepares a Media Gallery field value.
 *
 * @param  {String} fieldId
 * @param  {Object} attachment
 * @return {void}
 */
function prepareValueForMediaGalleryField(fieldId, attachment) {
	var field, value, duplicates_allowed, attachmentId, index;
	return _regenerator2.default.wrap(function prepareValueForMediaGalleryField$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.select)(_selectors.getFieldById, fieldId);

				case 2:
					field = _context3.sent;
					value = field.value, duplicates_allowed = field.duplicates_allowed;
					attachmentId = Number(attachment.id);

					if (!('selected' in field && (0, _lodash.isNumber)(field.selected))) {
						_context3.next = 12;
						break;
					}

					index = value.indexOf(field.selected);


					value.splice(index, 1, attachmentId);

					_context3.next = 10;
					return (0, _effects.put)((0, _actions.updateField)(field.id, {
						selected: ''
					}));

				case 10:
					_context3.next = 13;
					break;

				case 12:
					if (duplicates_allowed || field.value.indexOf(attachmentId) === -1) {
						value = [].concat((0, _toConsumableArray3.default)(value), [attachmentId]);
					}

				case 13:
					return _context3.abrupt('return', value);

				case 14:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

/**
 * Add complex groups for every additional attachment selected in the media browser
 *
 * @param  {Object} action
 * @return {void}
 */
function workerAddMultipleFiles(action) {
	var _action$payload, fieldId, attachments, browser, field, isMediaGalleryField, parent, index, attachment, value, parentField, freshGroup, freshFieldId, freshField, _value;

	return _regenerator2.default.wrap(function workerAddMultipleFiles$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					_action$payload = action.payload, fieldId = _action$payload.fieldId, attachments = _action$payload.attachments, browser = _action$payload.browser;
					_context4.next = 3;
					return (0, _effects.select)(_selectors.getFieldById, fieldId);

				case 3:
					field = _context4.sent;
					isMediaGalleryField = field.type === _constants.TYPE_MEDIA_GALLERY;
					parent = void 0;

					// If multiple attachments are selected and the field is Image or File, the extra
					// ones will be distributed among the closest complex field groups.

					if (!(field.type === _constants.TYPE_IMAGE || field.type === _constants.TYPE_FILE)) {
						_context4.next = 12;
						break;
					}

					_context4.next = 9;
					return (0, _effects.select)(_selectors.getComplexGroupById, field.parent);

				case 9:
					parent = _context4.sent;

					if (!(0, _lodash.isUndefined)(parent)) {
						_context4.next = 12;
						break;
					}

					return _context4.abrupt('return');

				case 12:
					index = 0;

				case 13:
					if (!(index < attachments.length)) {
						_context4.next = 48;
						break;
					}

					attachment = attachments[index];

					if (!isMediaGalleryField) {
						_context4.next = 26;
						break;
					}

					_context4.next = 18;
					return prepareValueForField(field.id, attachment);

				case 18:
					value = _context4.sent;


					if (field.duplicates_allowed === false) {
						browser.state().frame.options.selected = value;
					}

					// optional - this ensures an instant preview update
					_context4.next = 22;
					return redrawAttachmentPreview(field.id, value, attachment, field.default_thumb_url);

				case 22:
					_context4.next = 24;
					return (0, _effects.put)((0, _actions.setFieldValue)(field.id, value));

				case 24:
					_context4.next = 45;
					break;

				case 26:
					_context4.next = 28;
					return (0, _effects.put)((0, _actions.addComplexGroup)(parent.field.id, parent.group.name));

				case 28:
					_context4.next = 30;
					return (0, _effects.take)(_actions.receiveComplexGroup);

				case 30:
					_context4.next = 32;
					return (0, _effects.select)(_selectors.getFieldById, parent.field.id);

				case 32:
					parentField = _context4.sent;
					freshGroup = (0, _lodash.last)(parentField.value);
					freshFieldId = (0, _lodash.first)((0, _lodash.filter)(freshGroup.fields, function (f) {
						return f.base_name === field.base_name;
					})).id;
					_context4.next = 37;
					return (0, _effects.select)(_selectors.getFieldById, freshFieldId);

				case 37:
					freshField = _context4.sent;
					_context4.next = 40;
					return prepareValueForField(freshField.id, attachment);

				case 40:
					_value = _context4.sent;
					_context4.next = 43;
					return redrawAttachmentPreview(freshField.id, _value, attachment, freshField.default_thumb_url);

				case 43:
					_context4.next = 45;
					return (0, _effects.put)((0, _actions.setFieldValue)(freshField.id, _value));

				case 45:
					index++;
					_context4.next = 13;
					break;

				case 48:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked4, this);
}

/**
 * Trigger a preview redraw action based on an attachment
 *
 * @param  {Object} fieldId
 * @param  {Object} attachmentIdentifier
 * @param  {Object} attachment
 * @param  {String} default_thumb_url
 * @return {void}
 */
function redrawAttachmentPreview(fieldId, attachmentIdentifier, attachment, default_thumb_url) {
	var field, attachmentMeta, thumbnail, currentValueMeta;
	return _regenerator2.default.wrap(function redrawAttachmentPreview$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					_context5.next = 2;
					return (0, _effects.select)(_selectors.getFieldById, fieldId);

				case 2:
					field = _context5.sent;
					attachmentMeta = {
						file_name: '',
						file_url: '',
						file_type: '',
						thumb_url: '',
						preview: '',
						edit_nonce: '',
						title: '',
						caption: '',
						description: ''
					};

					if ((0, _lodash.isNull)(attachment)) {
						_context5.next = 27;
						break;
					}

					if (!(0, _lodash.isString)(attachment)) {
						_context5.next = 12;
						break;
					}

					attachmentMeta.file_name = attachment;
					attachmentMeta.file_url = attachment;
					attachmentMeta.thumb_url = attachment;
					attachmentMeta.preview = attachmentIdentifier;
					_context5.next = 27;
					break;

				case 12:
					_context5.next = 14;
					return (0, _effects.call)(_helpers.getAttachmentThumbnail, attachment);

				case 14:
					thumbnail = _context5.sent;


					attachmentMeta.file_name = attachment.filename;
					attachmentMeta.file_url = attachment.url;
					attachmentMeta.file_type = attachment.type;
					attachmentMeta.thumb_url = thumbnail || default_thumb_url;
					attachmentMeta.preview = attachment.id;
					attachmentMeta.edit_nonce = attachment.nonces ? attachment.nonces.update : '';
					attachmentMeta.title = attachment.title;
					attachmentMeta.caption = attachment.caption;
					attachmentMeta.description = attachment.description;
					attachmentMeta.filesize = attachment.filesizeHumanReadable;
					attachmentMeta.date = attachment.dateFormatted;

					if (attachment.type === 'image') {
						attachmentMeta.alt = attachment.alt;
						attachmentMeta.width = attachment.width;
						attachmentMeta.height = attachment.height;
					} else if (attachment.type === 'audio') {
						attachmentMeta.artist = attachment.meta.artist;
						attachmentMeta.album = attachment.meta.album;
						attachmentMeta.length = attachment.fileLength;
					}

				case 27:
					if (!(field.type === _constants.TYPE_IMAGE || field.type === _constants.TYPE_FILE)) {
						_context5.next = 32;
						break;
					}

					_context5.next = 30;
					return (0, _effects.put)((0, _actions.updateField)(fieldId, {
						value_meta: attachmentMeta
					}));

				case 30:
					_context5.next = 37;
					break;

				case 32:
					if (!(field.type === _constants.TYPE_MEDIA_GALLERY)) {
						_context5.next = 37;
						break;
					}

					currentValueMeta = field.value_meta;


					currentValueMeta[attachment.id] = attachmentMeta;

					_context5.next = 37;
					return (0, _effects.put)((0, _actions.updateField)(fieldId, {
						value_meta: currentValueMeta
					}));

				case 37:
				case 'end':
					return _context5.stop();
			}
		}
	}, _marked5, this);
}

/**
 * Redraw an attachment preview.
 *
 * @param  {Object} field
 * @param  {Object} action
 * @return {void}
 */
function workerRedrawAttachmentPreview(field, action) {
	var _action$payload2, fieldId, value, freshField, attachment;

	return _regenerator2.default.wrap(function workerRedrawAttachmentPreview$(_context6) {
		while (1) {
			switch (_context6.prev = _context6.next) {
				case 0:
					_action$payload2 = action.payload, fieldId = _action$payload2.fieldId, value = _action$payload2.value;

					// Don't update the preview if the field doesn't have correct id.

					if (!(fieldId !== field.id)) {
						_context6.next = 3;
						break;
					}

					return _context6.abrupt('return');

				case 3:
					_context6.next = 5;
					return (0, _effects.select)(_selectors.getFieldById, field.id);

				case 5:
					freshField = _context6.sent;

					if (!(freshField.preview === value)) {
						_context6.next = 8;
						break;
					}

					return _context6.abrupt('return');

				case 8:
					attachment = null;

					if (!value) {
						_context6.next = 17;
						break;
					}

					if (!(0, _lodash.isNumber)(value)) {
						_context6.next = 16;
						break;
					}

					_context6.next = 13;
					return window.wp.media.attachment(value).fetch();

				case 13:
					attachment = _context6.sent;
					_context6.next = 17;
					break;

				case 16:
					attachment = value; // TODO fix this hack

				case 17:
					_context6.next = 19;
					return redrawAttachmentPreview(fieldId, value, attachment, field.default_thumb_url);

				case 19:
				case 'end':
					return _context6.stop();
			}
		}
	}, _marked6, this);
}

/**
 * This hack prevents the user from adding multiple files to
 * a file field inside a complex field unintentionally
 *
 * Steps to reproduce:
 * 1. The user opens the media browser
 * 2. The field already has a selected attachment or the user selects one
 * 3. The user clicks the "Uploads" tab and uploads a new file
 * 4. The user is now shown the media gallery view with the new file APPENDED to the selection
 *
 * This function now always clears your OLD selection when you upload files so
 * the final selection includes only the newly uploaded file(s).
 *
 * @param  {Object} browser wp.media browser frame
 * @return {void}
 */
function preventAccidentalMultipleFiles(browser) {
	var selection = browser.state().get('selection');
	var selectedAttachments = [];
	var _removeHooks = void 0;

	var clearSelectedAttachments = function clearSelectedAttachments() {
		for (var i = 0; i < selectedAttachments.length; i++) {
			var attachment = selectedAttachments[i];
			if (selection.findWhere({ id: attachment.id })) {
				selection.remove(attachment);
			}
		}
	};

	var syncSelectedAttachments = function syncSelectedAttachments() {
		// delay sync so wp.Uploader.queue event fires first
		setTimeout(function () {
			selectedAttachments = [];
			selection.each(function (attachment) {
				return selectedAttachments.push(attachment);
			});
		}, 1);
	};

	_removeHooks = function removeHooks() {
		wp.Uploader.queue.off('add', clearSelectedAttachments);
		selection.off('add change remove selection:single', syncSelectedAttachments);
		browser.off('close', _removeHooks);
	};

	syncSelectedAttachments();

	wp.Uploader.queue.on('add', clearSelectedAttachments);
	selection.on('add change remove selection:single', syncSelectedAttachments);
	browser.on('close', _removeHooks);
}

/**
 * Handle the interaction with media browser of WordPress.
 *
 * @param  {Object} channel
 * @param  {Object} field
 * @param  {Object} browser
 * @param  {Object} action
 * @return {void}
 */
function workerOpenMediaBrowser(channel, field, browser, action) {
	var liveField, _ref, _ref$closed, closed, _ref$selection, selection, _selection, attachment, attachments, value;

	return _regenerator2.default.wrap(function workerOpenMediaBrowser$(_context7) {
		while (1) {
			switch (_context7.prev = _context7.next) {
				case 0:
					if (!(action.payload !== field.id)) {
						_context7.next = 2;
						break;
					}

					return _context7.abrupt('return');

				case 2:
					_context7.next = 4;
					return (0, _effects.select)(_selectors.getFieldById, action.payload);

				case 4:
					liveField = _context7.sent;


					browser.once('open', function (value, selected) {
						var type = liveField.type,
						    duplicates_allowed = liveField.duplicates_allowed;

						var selection = browser.state().get('selection');

						// For File field, the media should display
						// the currently selected element
						if (type === _constants.TYPE_IMAGE || type === _constants.TYPE_FILE) {
							var attachment = value ? window.wp.media.attachment(value) : null;
							selection.set(attachment ? [attachment] : []);
							preventAccidentalMultipleFiles(browser);
						}

						if (type === _constants.TYPE_MEDIA_GALLERY) {
							if (selected) {
								var _attachment = window.wp.media.attachment(selected);
								selection.set(_attachment ? [_attachment] : []);
							} else {
								selection.set([]);
							}
						}

						var models = browser.state().get('library').models;
						models.forEach(function (model) {
							model.trigger('change', model);
						});
					}.bind(null, liveField.value, liveField.selected));

					_context7.next = 8;
					return (0, _effects.call)([browser, browser.open]);

				case 8:
					if (false) {
						_context7.next = 34;
						break;
					}

					_context7.next = 11;
					return (0, _effects.take)(channel);

				case 11:
					_ref = _context7.sent;
					_ref$closed = _ref.closed;
					closed = _ref$closed === undefined ? false : _ref$closed;
					_ref$selection = _ref.selection;
					selection = _ref$selection === undefined ? undefined : _ref$selection;

					if (!closed) {
						_context7.next = 19;
						break;
					}

					_context7.next = 19;
					return (0, _effects.put)((0, _actions.updateField)(field.id, {
						selected: ''
					}));

				case 19:
					if (!selection) {
						_context7.next = 32;
						break;
					}

					_selection = (0, _toArray3.default)(selection), attachment = _selection[0], attachments = _selection.slice(1);
					_context7.next = 23;
					return prepareValueForField(field.id, attachment);

				case 23:
					value = _context7.sent;


					if (field.type === _constants.TYPE_MEDIA_GALLERY && field.duplicates_allowed === false) {
						browser.state().frame.options.selected = value;
					}

					// optional - this ensures an instant preview update
					_context7.next = 27;
					return redrawAttachmentPreview(field.id, value, attachment, field.default_thumb_url);

				case 27:
					_context7.next = 29;
					return (0, _effects.put)((0, _actions.setFieldValue)(field.id, value));

				case 29:
					if ((0, _lodash.isEmpty)(attachments)) {
						_context7.next = 32;
						break;
					}

					_context7.next = 32;
					return (0, _effects.put)((0, _actions.addMultipleFiles)(field.id, attachments, browser));

				case 32:
					_context7.next = 8;
					break;

				case 34:
				case 'end':
					return _context7.stop();
			}
		}
	}, _marked7, this);
}

/**
 * Initial setup of the media browser.
 *
 * @param  {Object} action
 * @return {void}
 */
function workerSetupMediaBrowser(action) {
	var field, type, type_filter, value_type, mediaBrowserTitle, mediaBrowserButtonLabel, channel, _ref2, browser, _ref3, fieldId;

	return _regenerator2.default.wrap(function workerSetupMediaBrowser$(_context8) {
		while (1) {
			switch (_context8.prev = _context8.next) {
				case 0:
					_context8.next = 2;
					return (0, _effects.select)(_selectors.getFieldById, action.payload);

				case 2:
					field = _context8.sent;
					type = field.type, type_filter = field.type_filter, value_type = field.value_type;
					mediaBrowserTitle = '';
					mediaBrowserButtonLabel = '';


					if (type === _constants.TYPE_IMAGE) {
						mediaBrowserTitle = carbonFieldsL10n.field.imageBrowserTitle;
						mediaBrowserButtonLabel = carbonFieldsL10n.field.imageBrowserButtonLabel;
					} else if (type === _constants.TYPE_FILE) {
						mediaBrowserTitle = carbonFieldsL10n.field.fileBrowserTitle;
						mediaBrowserButtonLabel = carbonFieldsL10n.field.fileBrowserButtonLabel;
					} else if (type === _constants.TYPE_MEDIA_GALLERY) {
						mediaBrowserTitle = carbonFieldsL10n.field.mediaGalleryBrowserTitle;
						mediaBrowserButtonLabel = carbonFieldsL10n.field.mediaGalleryBrowserButtonLabel;
					}

					_context8.next = 9;
					return (0, _effects.call)(_events.createMediaBrowserChannel, {
						selected: !(0, _lodash.isUndefined)(field.duplicates_allowed) && !field.duplicates_allowed ? field.value : [],
						title: mediaBrowserTitle,
						library: {
							type: type_filter
						},
						button: {
							text: mediaBrowserButtonLabel
						},
						multiple: true
					});

				case 9:
					channel = _context8.sent;
					_context8.next = 12;
					return (0, _effects.take)(channel);

				case 12:
					_ref2 = _context8.sent;
					browser = _ref2.browser;
					_context8.next = 16;
					return (0, _effects.takeEvery)(_actions.openMediaBrowser, workerOpenMediaBrowser, channel, field, browser);

				case 16:
					_context8.next = 18;
					return (0, _effects.takeEvery)(_actions.setFieldValue, workerRedrawAttachmentPreview, field);

				case 18:
					if (false) {
						_context8.next = 31;
						break;
					}

					_context8.next = 21;
					return (0, _effects.take)(_actions.destroyMediaBrowser);

				case 21:
					_ref3 = _context8.sent;
					fieldId = _ref3.payload;

					if (!(field.id === fieldId)) {
						_context8.next = 29;
						break;
					}

					_context8.next = 26;
					return (0, _effects.call)([channel, 'close']);

				case 26:
					_context8.next = 28;
					return (0, _effects.cancel)();

				case 28:
					return _context8.abrupt('break', 31);

				case 29:
					_context8.next = 18;
					break;

				case 31:
				case 'end':
					return _context8.stop();
			}
		}
	}, _marked8, this);
}

/**
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
	return _regenerator2.default.wrap(function foreman$(_context9) {
		while (1) {
			switch (_context9.prev = _context9.next) {
				case 0:
					_context9.next = 2;
					return (0, _effects.all)([(0, _effects.takeEvery)(_actions.setupMediaBrowser, workerSetupMediaBrowser), (0, _effects.takeEvery)(_actions.addMultipleFiles, workerAddMultipleFiles)]);

				case 2:
				case 'end':
					return _context9.stop();
			}
		}
	}, _marked9, this);
}

/***/ }),

/***/ "jcf5":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actions.js": "HRbf",
	"./components/association/index.js": "Mr0/",
	"./components/association/list-item.js": "23TD",
	"./components/association/list.js": "5dJn",
	"./components/checkbox/index.js": "qVh6",
	"./components/color/index.js": "8orr",
	"./components/color/picker.js": "mJoy",
	"./components/complex/actions.js": "H4aE",
	"./components/complex/empty-notice.js": "NHf6",
	"./components/complex/group.js": "wkKH",
	"./components/complex/index.js": "TNQM",
	"./components/complex/popover.js": "hIJa",
	"./components/complex/tab.js": "0Ypz",
	"./components/complex/tabs.js": "at12",
	"./components/datetime/index.js": "SRHB",
	"./components/field/index.js": "M6Uh",
	"./components/file/index.js": "NIJ6",
	"./components/hidden/index.js": "+mkE",
	"./components/html/index.js": "WkB4",
	"./components/map/google-map.js": "00U9",
	"./components/map/index.js": "Z+Wa",
	"./components/media-gallery/edit-attachment.js": "ET0f",
	"./components/media-gallery/index.js": "8yf1",
	"./components/media-gallery/list-item.js": "7Ot0",
	"./components/media-gallery/list.js": "y0rb",
	"./components/multiselect/index.js": "nLBU",
	"./components/no-options/index.js": "0RBh",
	"./components/oembed/index.js": "sjDA",
	"./components/oembed/preview.js": "JG3Y",
	"./components/oembed/search-input.js": "Ta9K",
	"./components/radio-image/index.js": "lWSv",
	"./components/radio/index.js": "RUrd",
	"./components/rich-text/editor.js": "fzf9",
	"./components/rich-text/index.js": "tfak",
	"./components/search-input/index.js": "adK+",
	"./components/select/index.js": "xnDK",
	"./components/separator/index.js": "RyoW",
	"./components/set/index.js": "d7ja",
	"./components/sidebar/index.js": "xreo",
	"./components/sortable-list/index.js": "sefJ",
	"./components/text/index.js": "zLaU",
	"./components/textarea/index.js": "9w8d",
	"./constants.js": "8Hlw",
	"./decorators/with-header-template.js": "6OFK",
	"./decorators/with-setup.js": "8ctJ",
	"./decorators/with-store.js": "0yqe",
	"./factory.js": "wcck",
	"./helpers.js": "pP85",
	"./reducer.js": "cjEH",
	"./sagas/api.js": "GfEj",
	"./sagas/changes-tracker.js": "Y8nH",
	"./sagas/complex.js": "xh4g",
	"./sagas/conditional-logic.js": "mwxg",
	"./sagas/geocoder.js": "IWbc",
	"./sagas/media-browser.js": "jSEj",
	"./sagas/validation.js": "XXDi",
	"./selectors.js": "ZMHW",
	"./validators/association.js": "4kf1",
	"./validators/base.js": "cUL2",
	"./validators/complex.js": "bLrS"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "jcf5";

/***/ }),

/***/ "jyFz":
/***/ (function(module, exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("SldL");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "kM2E":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("kM2E");

/***/ }),

/***/ "kZct":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = foreman;

var _optionPage = __webpack_require__("79qw");

var _optionPage2 = _interopRequireDefault(_optionPage);

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                 * The internal dependencies.
                                                                 */


/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
function foreman(store) {
  return _regenerator2.default.wrap(function foreman$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _optionPage2.default)(store, _constants.TYPE_NETWORK, 'network-form');

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/***/ }),

/***/ "kiBT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("i/C/"), __esModule: true };

/***/ }),

/***/ "knuC":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "lHA8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("pPW7"), __esModule: true };

/***/ }),

/***/ "lOnJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("lOnJ");

/***/ }),

/***/ "lRc4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = clearRenderer;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clearRenderer() {
	return _react2.default.createElement('span', {
		className: 'Select-clear',
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
};

/***/ }),

/***/ "lVTZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = foreman;

var _optionPage = __webpack_require__("79qw");

var _optionPage2 = _interopRequireDefault(_optionPage);

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                 * The internal dependencies.
                                                                 */


/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
function foreman(store) {
  return _regenerator2.default.wrap(function foreman$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _optionPage2.default)(store, _constants.TYPE_THEME_OPTIONS, 'theme-options-form');

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/***/ }),

/***/ "lWSv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RadioImageField = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _radio = __webpack_require__("RUrd");

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a radio input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @param  {Function}      props.isChecked
 * @return {React.Element}
 */
/**
 * The external dependencies.
 */
var RadioImageField = exports.RadioImageField = function RadioImageField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange,
	    isChecked = _ref.isChecked;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'div',
			{ className: 'carbon-radio-image-list' },
			field.options.map(function (option, index) {
				return _react2.default.createElement(
					'div',
					{ key: index, className: 'carbon-radio-image-item' },
					_react2.default.createElement(
						'label',
						null,
						_react2.default.createElement('input', (0, _extends3.default)({
							type: 'radio',
							name: name,
							value: option.value,
							checked: isChecked(option),
							disabled: !field.ui.is_visible,
							onChange: handleChange(option)
						}, field.attributes)),
						_react2.default.createElement(
							'figure',
							{ className: 'carbon-radio-image-holder' },
							_react2.default.createElement('img', { src: option.label })
						)
					)
				);
			})
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
RadioImageField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		attributes: _propTypes2.default.object,
		value: _propTypes2.default.string,
		options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			value: _propTypes2.default.string,
			label: _propTypes2.default.string
		}))
	}),
	handleChange: _propTypes2.default.func
};

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_RADIO_IMAGE])((0, _radio.enhance)(RadioImageField));

/***/ }),

/***/ "lktj":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("lktj");

/***/ }),

/***/ "m9gC":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__("RY/4");
var from = __webpack_require__("4WTo");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "mClu":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("kM2E");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("+E39"), 'Object', { defineProperty: __webpack_require__("evD5").f });


/***/ }),

/***/ "mJoy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.Colorpicker = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactOnclickoutside = __webpack_require__("aCGJ");

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _reactColor = __webpack_require__("orX9");

var _recompose = __webpack_require__("zpMW");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a colorpicker popover.
 *
 * @param  {Object}        props
 * @param  {Boolean}       props.visible
 * @param  {String}        props.value
 * @param  {String[]}      props.palette
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
var Colorpicker = exports.Colorpicker = function Colorpicker(_ref) {
	var visible = _ref.visible,
	    value = _ref.value,
	    palette = _ref.palette,
	    enableAlpha = _ref.enableAlpha,
	    handleChange = _ref.handleChange;

	var popover = {
		position: 'absolute',
		zIndex: 9999
	};

	return _react2.default.createElement(
		'div',
		{ style: popover, hidden: !visible },
		_react2.default.createElement(_reactColor.SketchPicker, {
			color: value,
			onChange: handleChange,
			disableAlpha: !enableAlpha,
			presetColors: palette })
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
/**
 * The external dependencies.
 */
Colorpicker.propTypes = {
	visible: _propTypes2.default.bool,
	value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	palette: _propTypes2.default.arrayOf(_propTypes2.default.string),
	enableAlpha: _propTypes2.default.bool,
	handleChange: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref2) {
		var onChange = _ref2.onChange;
		return function (color) {
			return onChange(color);
		};
	},
	handleClickOutside: function handleClickOutside(_ref3) {
		var visible = _ref3.visible,
		    onClose = _ref3.onClose;
		return function (e) {
			return visible && onClose();
		};
	}
}),

/**
 * Handle clicks outside the components.
 */
_reactOnclickoutside2.default);

exports.default = enhance(Colorpicker);

/***/ }),

/***/ "mL1Z":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("mL1Z");

/***/ }),

/***/ "mXhS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = __webpack_require__("famw");

var _Select2 = _interopRequireDefault(_Select);

var _stripDiacritics = __webpack_require__("MQxE");

var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	autoload: _propTypes2.default.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
	cache: _propTypes2.default.any, // object to use to cache results; set to null/false to disable caching
	children: _propTypes2.default.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
	ignoreAccents: _propTypes2.default.bool, // strip diacritics when filtering; defaults to true
	ignoreCase: _propTypes2.default.bool, // perform case-insensitive filtering; defaults to true
	loadOptions: _propTypes2.default.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
	loadingPlaceholder: _propTypes2.default.oneOfType([// replaces the placeholder while options are loading
	_propTypes2.default.string, _propTypes2.default.node]),
	multi: _propTypes2.default.bool, // multi-value input
	noResultsText: _propTypes2.default.oneOfType([// field noResultsText, displayed when no options come back from the server
	_propTypes2.default.string, _propTypes2.default.node]),
	onChange: _propTypes2.default.func, // onChange handler: function (newValue) {}
	onInputChange: _propTypes2.default.func, // optional for keeping track of what is being typed
	options: _propTypes2.default.array.isRequired, // array of options
	placeholder: _propTypes2.default.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
	_propTypes2.default.string, _propTypes2.default.node]),
	searchPromptText: _propTypes2.default.oneOfType([// label to prompt for search input
	_propTypes2.default.string, _propTypes2.default.node]),
	value: _propTypes2.default.any // initial field value
};

var defaultCache = {};

var defaultProps = {
	autoload: true,
	cache: defaultCache,
	children: defaultChildren,
	ignoreAccents: true,
	ignoreCase: true,
	loadingPlaceholder: 'Loading...',
	options: [],
	searchPromptText: 'Type to search'
};

var Async = function (_Component) {
	_inherits(Async, _Component);

	function Async(props, context) {
		_classCallCheck(this, Async);

		var _this = _possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));

		_this._cache = props.cache === defaultCache ? {} : props.cache;

		_this.state = {
			inputValue: '',
			isLoading: false,
			options: props.options
		};

		_this.onInputChange = _this.onInputChange.bind(_this);
		return _this;
	}

	_createClass(Async, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var autoload = this.props.autoload;


			if (autoload) {
				this.loadOptions('');
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.options !== this.props.options) {
				this.setState({
					options: nextProps.options
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this._callback = null;
		}
	}, {
		key: 'loadOptions',
		value: function loadOptions(inputValue) {
			var _this2 = this;

			var loadOptions = this.props.loadOptions;

			var cache = this._cache;

			if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) {
				this.setState({
					options: cache[inputValue]
				});

				return;
			}

			var callback = function callback(error, data) {
				if (callback === _this2._callback) {
					_this2._callback = null;

					var options = data && data.options || [];

					if (cache) {
						cache[inputValue] = options;
					}

					_this2.setState({
						isLoading: false,
						options: options
					});
				}
			};

			// Ignore all but the most recent request
			this._callback = callback;

			var promise = loadOptions(inputValue, callback);
			if (promise) {
				promise.then(function (data) {
					return callback(null, data);
				}, function (error) {
					return callback(error);
				});
			}

			if (this._callback && !this.state.isLoading) {
				this.setState({
					isLoading: true
				});
			}
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(inputValue) {
			var _props = this.props,
			    ignoreAccents = _props.ignoreAccents,
			    ignoreCase = _props.ignoreCase,
			    onInputChange = _props.onInputChange;

			var transformedInputValue = inputValue;

			if (ignoreAccents) {
				transformedInputValue = (0, _stripDiacritics2.default)(transformedInputValue);
			}

			if (ignoreCase) {
				transformedInputValue = transformedInputValue.toLowerCase();
			}

			if (onInputChange) {
				onInputChange(transformedInputValue);
			}

			this.setState({ inputValue: inputValue });
			this.loadOptions(transformedInputValue);

			// Return the original input value to avoid modifying the user's view of the input while typing.
			return inputValue;
		}
	}, {
		key: 'noResultsText',
		value: function noResultsText() {
			var _props2 = this.props,
			    loadingPlaceholder = _props2.loadingPlaceholder,
			    noResultsText = _props2.noResultsText,
			    searchPromptText = _props2.searchPromptText;
			var _state = this.state,
			    inputValue = _state.inputValue,
			    isLoading = _state.isLoading;


			if (isLoading) {
				return loadingPlaceholder;
			}
			if (inputValue && noResultsText) {
				return noResultsText;
			}
			return searchPromptText;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props3 = this.props,
			    children = _props3.children,
			    loadingPlaceholder = _props3.loadingPlaceholder,
			    multi = _props3.multi,
			    onChange = _props3.onChange,
			    placeholder = _props3.placeholder,
			    value = _props3.value;
			var _state2 = this.state,
			    isLoading = _state2.isLoading,
			    options = _state2.options;


			var props = {
				noResultsText: this.noResultsText(),
				placeholder: isLoading ? loadingPlaceholder : placeholder,
				options: isLoading && loadingPlaceholder ? [] : options,
				ref: function ref(_ref) {
					return _this3.select = _ref;
				}
			};

			return children(_extends({}, this.props, props, {
				isLoading: isLoading,
				onInputChange: this.onInputChange
			}));
		}
	}]);

	return Async;
}(_react.Component);

exports.default = Async;


Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

function defaultChildren(props) {
	return _react2.default.createElement(_Select2.default, props);
}

/***/ }),

/***/ "mbsf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
};

var _reactRedux = __webpack_require__("RH2O");

var _lodash = __webpack_require__("M4fF");

var _selectors = __webpack_require__("pL4W");

var _actions = __webpack_require__("vVye");

/**
 * The default state that will be retrieved from the store.
 *
 * @param  {Object} state
 * @param  {Object} ownProps
 * @return {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependecies.
 */
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    container: (0, _selectors.getContainerById)(state, ownProps.id)
  };
};

/**
 * The default actions that will be provided as props to the component.
 *
 * @type {Object}
 */
var mapDispatchToProps = {
  setupContainer: _actions.setupContainer,
  teardownContainer: _actions.teardownContainer,
  switchContainerTab: _actions.switchContainerTab
};

/**
 * The factory function that will produce the decorator.
 *
 * @return {Function}
 */

/***/ }),

/***/ "msXi":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("77Pl");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "mvHQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("qkKv"), __esModule: true };

/***/ }),

/***/ "mw3O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__("CwSZ");
var parse = __webpack_require__("DDCP");
var formats = __webpack_require__("XgCd");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "mwxg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.workerValidate = workerValidate;
exports.workerConditionalLogic = workerConditionalLogic;
exports.default = foreman;

var _effects = __webpack_require__("egdi");

var _lodash = __webpack_require__("M4fF");

var _constants = __webpack_require__("8Hlw");

var _actions = __webpack_require__("HRbf");

var _selectors = __webpack_require__("ZMHW");

var _helpers = __webpack_require__("hKI6");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerValidate),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerConditionalLogic),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Compare the values.
 *
 * @param  {mixed}   left
 * @param  {mixed}   right
 * @param  {String}  operator
 * @return {Boolean}
 */
function compare(left, right, operator) {
	switch (operator) {
		case '=':
			return left == right;
		case '!=':
			return left != right;
		case '>':
			return left > right;
		case '<':
			return left < right;
		case '>=':
			return left >= right;
		case '<=':
			return left <= right;
		case 'IN':
			return (0, _lodash.some)(right, function (value) {
				return value == left;
			});
		case 'NOT IN':
			return (0, _lodash.every)(right, function (value) {
				return value != left;
			});
		case 'INCLUDES':
			return (0, _lodash.every)([].concat(right), function (value) {
				return left.indexOf(value) !== -1;
			});
		case 'EXCLUDES':
			return (0, _lodash.every)([].concat(right), function (value) {
				return left.indexOf(value) === -1;
			});
	}
}

/**
 * Process the conditional rules.
 *
 * @param  {Object} field
 * @param  {Object} siblings
 * @param  {Object} [action]
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @param  {mixed}  action.payload.value
 * @return {void}
 */
function workerValidate(field, siblings) {
	var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { payload: {} },
	    _ref$payload = _ref.payload,
	    fieldId = _ref$payload.fieldId,
	    data = _ref$payload.data;

	var _field$conditional_lo, relation, rules, results, valid, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, rule, _field, fieldValue;

	return _regenerator2.default.wrap(function workerValidate$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!(fieldId && !(0, _lodash.includes)(siblings, fieldId))) {
						_context.next = 2;
						break;
					}

					return _context.abrupt('return');

				case 2:
					_field$conditional_lo = field.conditional_logic, relation = _field$conditional_lo.relation, rules = _field$conditional_lo.rules;
					results = [];
					valid = void 0;
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 8;
					_iterator = (0, _getIterator3.default)(rules);

				case 10:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 27;
						break;
					}

					rule = _step.value;
					_context.next = 14;
					return (0, _effects.select)(_selectors.getFieldById, siblings[rule.field]);

				case 14:
					_field = _context.sent;

					if (_field) {
						_context.next = 18;
						break;
					}

					console.warn('An unknown field is used in condition - ' + rule.field + '.');
					return _context.abrupt('continue', 24);

				case 18:
					fieldValue = _field.ui.is_visible ? _field.value : (0, _helpers.getTypeDefaultValue)(_field.value);
					_context.t0 = results;
					_context.next = 22;
					return (0, _effects.call)(compare, fieldValue, rule.value, rule.compare);

				case 22:
					_context.t1 = _context.sent;

					_context.t0.push.call(_context.t0, _context.t1);

				case 24:
					_iteratorNormalCompletion = true;
					_context.next = 10;
					break;

				case 27:
					_context.next = 33;
					break;

				case 29:
					_context.prev = 29;
					_context.t2 = _context['catch'](8);
					_didIteratorError = true;
					_iteratorError = _context.t2;

				case 33:
					_context.prev = 33;
					_context.prev = 34;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 36:
					_context.prev = 36;

					if (!_didIteratorError) {
						_context.next = 39;
						break;
					}

					throw _iteratorError;

				case 39:
					return _context.finish(36);

				case 40:
					return _context.finish(33);

				case 41:
					_context.t3 = relation;
					_context.next = _context.t3 === 'AND' ? 44 : _context.t3 === 'OR' ? 46 : 48;
					break;

				case 44:
					valid = (0, _lodash.every)(results);
					return _context.abrupt('break', 48);

				case 46:
					valid = (0, _lodash.some)(results);
					return _context.abrupt('break', 48);

				case 48:
					_context.next = 50;
					return (0, _effects.put)((0, _actions.setUI)(field.id, {
						is_visible: valid
					}));

				case 50:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this, [[8, 29, 33, 41], [34,, 36, 40]]);
}

/**
 * Handle the setup of the conditional logic.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @return {void}
 */
function workerConditionalLogic(_ref2) {
	var fieldId = _ref2.payload.fieldId;
	var field, selector, siblings, parentPrefix, parentField, parentSelector, parentSiblings, parentSiblingName;
	return _regenerator2.default.wrap(function workerConditionalLogic$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.select)(_selectors.getFieldById, fieldId);

				case 2:
					field = _context2.sent;

					if (!(0, _lodash.isEmpty)(field.conditional_logic)) {
						_context2.next = 5;
						break;
					}

					return _context2.abrupt('return');

				case 5:
					_context2.next = 7;
					return (0, _effects.call)(_selectors.makeGetFieldsByParent, field.parent);

				case 7:
					selector = _context2.sent;
					_context2.t0 = _effects.call;
					_context2.t1 = _lodash.omit;
					_context2.next = 12;
					return (0, _effects.select)(selector);

				case 12:
					_context2.t2 = _context2.sent;
					_context2.t3 = field.base_name;
					_context2.next = 16;
					return (0, _context2.t0)(_context2.t1, _context2.t2, _context2.t3);

				case 16:
					siblings = _context2.sent;


					// Expand siblings by adding literal 'parent.' prefixes to keys for every level above the current one
					parentPrefix = '';
					_context2.next = 20;
					return (0, _effects.select)(_selectors.getFieldParentById, field.id);

				case 20:
					parentField = _context2.sent;

				case 21:
					if ((0, _lodash.isUndefined)(parentField)) {
						_context2.next = 41;
						break;
					}

					parentPrefix += 'parent.';
					_context2.next = 25;
					return (0, _effects.call)(_selectors.makeGetFieldsByParent, parentField.parent);

				case 25:
					parentSelector = _context2.sent;
					_context2.t4 = _effects.call;
					_context2.t5 = _lodash.omit;
					_context2.next = 30;
					return (0, _effects.select)(parentSelector);

				case 30:
					_context2.t6 = _context2.sent;
					_context2.t7 = parentField.base_name;
					_context2.next = 34;
					return (0, _context2.t4)(_context2.t5, _context2.t6, _context2.t7);

				case 34:
					parentSiblings = _context2.sent;

					for (parentSiblingName in parentSiblings) {
						siblings[parentPrefix + parentSiblingName] = parentSiblings[parentSiblingName];
					}
					_context2.next = 38;
					return (0, _effects.select)(_selectors.getFieldParentById, parentField.id);

				case 38:
					parentField = _context2.sent;
					_context2.next = 21;
					break;

				case 41:
					_context2.next = 43;
					return (0, _effects.call)(workerValidate, field, siblings);

				case 43:
					_context2.next = 45;
					return (0, _effects.takeEvery)(_actions.updateField, workerValidate, field, siblings);

				case 45:
					_context2.next = 47;
					return (0, _effects.takeEvery)(_actions.setFieldValue, workerValidate, field, siblings);

				case 47:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/**
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
	return _regenerator2.default.wrap(function foreman$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.all)([(0, _effects.takeEvery)(_actions.setupField, workerConditionalLogic)]);

				case 2:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

/***/ }),

/***/ "nLBU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.MultiselectField = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _reactSelect = __webpack_require__("tTw2");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _noOptions = __webpack_require__("0RBh");

var _noOptions2 = _interopRequireDefault(_noOptions);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a collection of checkbox inputs.
 *
 * @param  {Object}        props
 * @param  {Object}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
/**
 * The external dependencies.
 */
var MultiselectField = exports.MultiselectField = function MultiselectField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(_reactSelect2.default, {
			name: name,
			multi: true,
			joinValues: true,
			delimiter: field.valueDelimiter,
			value: field.value,
			options: field.options,
			disabled: !field.ui.is_visible,
			onChange: handleChange
		})
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
MultiselectField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		valueDelimiter: _propTypes2.default.string,
		value: _propTypes2.default.arrayOf(_propTypes2.default.string),
		options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			value: _propTypes2.default.string,
			label: _propTypes2.default.string
		}))
	}),
	handleChange: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(),

/**
 * Render "No-Options" component when the field doesn't have options.
 */
(0, _recompose.branch)(
/**
 * Test to see if the "No-Options" should be rendered.
 */
function (_ref2) {
	var options = _ref2.field.options;
	return options && options.length;
},

/**
 * Render the actual field.
 */
(0, _recompose.compose)(
/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)(),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref3) {
		var field = _ref3.field,
		    setFieldValue = _ref3.setFieldValue;
		return function (value) {
			return setFieldValue(field.id, value.map(function (item) {
				return item.value;
			}));
		};
	}
})),

/**
 * Render the empty component.
 */
(0, _recompose.renderComponent)(_noOptions2.default)));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_MULTISELECT])(enhance(MultiselectField));

/***/ }),

/***/ "oM7Q":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("sF+V");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "oNmr":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__("9Bbf")('Set');


/***/ }),

/***/ "oeOm":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("7Doy");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "orX9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("orX9");

/***/ }),

/***/ "p4VO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ContainerTabbed = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _lodash = __webpack_require__("M4fF");

var _tabsNav = __webpack_require__("SeFE");

var _tabsNav2 = _interopRequireDefault(_tabsNav);

var _tabs = __webpack_require__("h4Rt");

var _tabs2 = _interopRequireDefault(_tabs);

var _nonce = __webpack_require__("EFYB");

var _nonce2 = _interopRequireDefault(_nonce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a tabbed version of the container.
 *
 * @param  {Object}        props
 * @param  {Object}        props.container
 * @param  {Object[]}      props.tabs
 * @param  {Function}      props.handleTabClick
 * @return {React.Element}
 */
var ContainerTabbed = exports.ContainerTabbed = function ContainerTabbed(_ref) {
	var container = _ref.container,
	    tabs = _ref.tabs,
	    handleTabClick = _ref.handleTabClick;

	return _react2.default.createElement(
		'div',
		{ className: 'carbon-tabs carbon-tabs-stacked' },
		_react2.default.createElement(_nonce2.default, { container: container }),
		_react2.default.createElement(_tabsNav2.default, {
			tabs: tabs,
			onClick: handleTabClick }),
		_react2.default.createElement(_tabs2.default, {
			container: container,
			tabs: tabs })
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
ContainerTabbed.propTypes = {
	container: _propTypes2.default.object,
	tabs: _propTypes2.default.array,
	handleTabClick: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * The props passed to the component.
 */
(0, _recompose.withProps)(function (_ref2) {
	var container = _ref2.container;

	var tabs = (0, _lodash.map)(container.settings.tabs, function (tab, name) {
		var id = (0, _lodash.kebabCase)(name);
		var fields = (0, _lodash.filter)(container.fields, function (_ref3) {
			var name = _ref3.name;
			return (0, _lodash.includes)(tab, name);
		});
		var active = (0, _lodash.get)(container, 'ui.current_tab', null) === id;

		return {
			id: id,
			name: name,
			active: active,
			fields: fields
		};
	});

	return {
		tabs: tabs
	};
}),

/**
 * The lifecycle hooks passed to the component.
 */
(0, _recompose.lifecycle)({
	componentDidMount: function componentDidMount() {
		var _props = this.props,
		    container = _props.container,
		    tabs = _props.tabs,
		    ui = _props.ui,
		    switchContainerTab = _props.switchContainerTab;


		if (tabs.length) {
			var tabId = void 0;

			if (ui.tabs_in_url) {
				var hash = window.location.hash.replace(/^#!/, '');
				var tab = (0, _lodash.find)(tabs, ['id', hash]);

				if (tab) {
					tabId = tab.id;
				}
			}

			if (!tabId) {
				tabId = tabs[0].id;
			}

			switchContainerTab(container.id, tabId);
		}
	}
}),

/**
 * The handlers passed to the component.
 */
(0, _recompose.withHandlers)({
	handleTabClick: function handleTabClick(_ref4) {
		var container = _ref4.container,
		    switchContainerTab = _ref4.switchContainerTab;
		return function (tabId) {
			return switchContainerTab(container.id, tabId);
		};
	}
}));

/**
 * Enhance the component.
 *
 * @type {React.Component}
 */
var EnhancedContainerTabbed = enhance(ContainerTabbed);

/**
 * Validate the props.
 *
 * @type {Object}
 */
EnhancedContainerTabbed.propTypes = {
	container: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			name: _propTypes2.default.string
		})),
		settings: _propTypes2.default.shape({
			tabs: _propTypes2.default.objectOf(_propTypes2.default.arrayOf(_propTypes2.default.string))
		})
	}),
	ui: _propTypes2.default.shape({
		tabs_in_url: _propTypes2.default.bool
	}),
	switchContainerTab: _propTypes2.default.func
};

exports.default = EnhancedContainerTabbed;

/***/ }),

/***/ "p8xL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

exports.arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

exports.isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ }),

/***/ "pFYg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("pFYg");

/***/ }),

/***/ "pL4W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContainerDomNodeById = exports.getVisibleContainers = exports.getContainersByType = exports.getContainerById = exports.getContainers = undefined;

var _lodash = __webpack_require__("M4fF");

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all containers.
 *
 * @param  {Object} state
 * @return {Object}
 */
/**
 * The external dependencies.
 */
var getContainers = exports.getContainers = function getContainers(state) {
  return state.containers;
};

/**
 * Get a container by id.
 *
 * @param  {Object} state
 * @param  {String} containerId
 * @return {Object}
 */
var getContainerById = exports.getContainerById = function getContainerById(state, containerId) {
  return state.containers[containerId];
};

/**
 * Get all containers by type.
 *
 * @param  {Object} state
 * @param  {String} containerType
 * @return {Object}
 */
var getContainersByType = exports.getContainersByType = function getContainersByType(state, containerType) {
  return (0, _lodash.pickBy)(getContainers(state), function (_ref) {
    var type = _ref.type;
    return type === containerType;
  });
};

/**
 * Get all visible containers.
 *
 * @param  {Object} state
 * @return {Object}
 */
var getVisibleContainers = exports.getVisibleContainers = function getVisibleContainers(state) {
  return (0, _lodash.filter)(getContainers(state), function (container) {
    return container.ui.is_visible;
  });
};

/**
 * Get a container dom node by id.
 *
 * @param  {Object} state
 * @param  {String} containerId
 * @return {Object}
 */
var getContainerDomNodeById = exports.getContainerDomNodeById = function getContainerDomNodeById(state, containerId) {
  return (0, _jquery2.default)('.carbon-container-' + containerId + ':first').get(0);
};

/***/ }),

/***/ "pP85":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

exports.fetchAttachment = fetchAttachment;
exports.getAttachmentThumbnail = getAttachmentThumbnail;
exports.flattenField = flattenField;
exports.addComplexGroupIdentifiers = addComplexGroupIdentifiers;
exports.flattenComplexGroupFields = flattenComplexGroupFields;
exports.restoreField = restoreField;
exports.stopSaga = stopSaga;

var _effects = __webpack_require__("egdi");

var _lodash = __webpack_require__("M4fF");

var _helpers = __webpack_require__("hKI6");

var _actions = __webpack_require__("HRbf");

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(stopSaga); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Fetches the Attachment Data from the Server.
 *
 * @param  {Number} attachmentId
 * @return {Promise}
 */
function fetchAttachment(attachmentId) {
	return new _promise2.default(function (resolve, reject) {
		var request = $.get(window.ajaxurl, {
			action: 'get-attachment',
			id: attachmentId
		}, null, 'json');

		request.done(function (response) {
			if (!response || !response.success) {
				reject(response.error || 'An error occurred while trying to fetch attachment.');
			} else {
				resolve(response);
			}
		});

		request.fail(function (xhr, status) {
			reject('Request failed: ' + status);
		});
	});
}

/**
 * Get the thumbnail of the attachment.
 *
 * @param  {Object} attachment
 * @return {String}
 */
function getAttachmentThumbnail(attachment) {
	var thumbnailUrl = '';

	if (attachment.sizes) {
		var size = attachment.sizes.thumbnail || attachment.sizes.full;
		if (typeof size !== 'undefined') {
			thumbnailUrl = size.url;
		}
	} else {
		thumbnailUrl = attachment.icon;
	}

	return thumbnailUrl;
}

/**
 * Flattens a field.
 *
 * @param  {Object}   field
 * @param  {Object}   parent
 * @param  {Object[]} accumulator
 * @return {Object}
 */
function flattenField(field, parent, parentType, accumulator) {
	var value = field.value,
	    type = field.type;

	// Since the fields don't have unique identifiers
	// we need to replace the id property with something
	// that we know is unique.

	field.id = (0, _lodash.uniqueId)('carbon-field-');

	// Add a pointer to the container to which belongs the field.
	if (parentType === _constants.PARENT_TYPE_CONTAINER) {
		field.container_id = parent.id;
	} else {
		field.container_id = parent.container_id;
	}

	// The complex field represents a nested structure
	// of fields. We need to flatten them as well.
	if (type === _constants.TYPE_COMPLEX) {
		value.forEach(function (group, index) {
			addComplexGroupIdentifiers(field, group, index);
			flattenComplexGroupFields(group, accumulator);
		});
	}

	// Add the placeholders for ui & meta.
	field.ui = {};
	field.meta = {};
	field.parent = parent.id;
	field.parentType = parentType;

	// Convert the value of the field, because React
	// doesn't likes inputs with null values.
	if ((0, _lodash.isNull)(field.value)) {
		field.value = '';
	}

	// Restore the content of the field.
	// Borrowed from https://github.com/WordPress/WordPress/blob/master/wp-includes/js/autosave.js#L534
	if (field.type === _constants.TYPE_RICH_TEXT) {
		field.value = window.switchEditors.wpautop(field.value);
	}

	// Push the original field to the stack that will
	// be used to populate the state.
	accumulator.push(field);

	return (0, _lodash.pick)(field, 'id', 'type', 'name', 'base_name');
}

/**
 * Add unique identifiers to group and the fields.
 *
 * @param  {Object} complex
 * @param  {Object} group
 * @param  {Number} index
 * @return {void}
 */
function addComplexGroupIdentifiers(complex, group, index) {
	group.id = (0, _lodash.uniqueId)('carbon-complex-group-');
	group.container_id = complex.container_id;
}

/**
 * Flatten the group's fields.
 *
 * @param  {Object}   group
 * @param  {Object[]} accumulator
 * @return {void}
 */
function flattenComplexGroupFields(group, accumulator) {
	group.fields = group.fields.map(function (field) {
		return flattenField(field, group, _constants.PARENT_TYPE_GROUP, accumulator);
	});
}

/**
 * Restore the original shape of the specified field.
 *
 * @param  {Object} field
 * @param  {Object} all
 * @return {Object}
 */
function restoreField(field, all) {
	// Create a safe copy of the field.
	field = (0, _lodash.merge)({}, all[field.id]);

	// Remove these properties since they're added
	// by the process that flattens the fields.
	delete field.ui;
	delete field.meta;

	// The complex field represents a tree struture so we need
	// to restore all fields recursively.
	if (field.type === _constants.TYPE_COMPLEX) {
		field.value = field.value.map(function (group) {
			group.fields = group.fields.map(function (field) {
				return restoreField(field, all);
			});

			return group;
		});
	}

	return field;
}

/**
 * Kill the saga.
 *
 * @param  {String}   fieldId
 * @param  {Object[]} tasks
 * @return {void}
 */
function stopSaga(fieldId, tasks) {
	return _regenerator2.default.wrap(function stopSaga$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _effects.call)(_helpers.cancelTasks, _actions.teardownField, tasks, function (_ref) {
						var payload = _ref.payload;
						return payload.fieldId === fieldId;
					});

				case 2:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

/***/ }),

/***/ "pPW7":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("M6a0");
__webpack_require__("zQR9");
__webpack_require__("+tPU");
__webpack_require__("ttyz");
__webpack_require__("BDhv");
__webpack_require__("oNmr");
__webpack_require__("ioQ5");
module.exports = __webpack_require__("FeBl").Set;


/***/ }),

/***/ "pT4M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _recompose = __webpack_require__("zpMW");

var _container = __webpack_require__("Mq2Y");

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__("mbsf");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("Zn/G");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.compose)((0, _recompose.setStatic)('type', _constants.TYPE_USER_META), (0, _withStore2.default)(), (0, _withSetup2.default)({
	user_role: null
}))(_container2.default); /**
                           * The external dependencies.
                           */

/***/ }),

/***/ "pZ1J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _Select = __webpack_require__("famw");

var _Select2 = _interopRequireDefault(_Select);

var _Async = __webpack_require__("mXhS");

var _Async2 = _interopRequireDefault(_Async);

var _Creatable = __webpack_require__("Bn1I");

var _Creatable2 = _interopRequireDefault(_Creatable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function reduce(obj) {
	var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	return Object.keys(obj).reduce(function (props, key) {
		var value = obj[key];
		if (value !== undefined) props[key] = value;
		return props;
	}, props);
}

var AsyncCreatableSelect = function (_React$Component) {
	_inherits(AsyncCreatableSelect, _React$Component);

	function AsyncCreatableSelect() {
		_classCallCheck(this, AsyncCreatableSelect);

		return _possibleConstructorReturn(this, (AsyncCreatableSelect.__proto__ || Object.getPrototypeOf(AsyncCreatableSelect)).apply(this, arguments));
	}

	_createClass(AsyncCreatableSelect, [{
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				_Async2.default,
				this.props,
				function (asyncProps) {
					return _react2.default.createElement(
						_Creatable2.default,
						_this2.props,
						function (creatableProps) {
							return _react2.default.createElement(_Select2.default, _extends({}, reduce(asyncProps, reduce(creatableProps, {})), {
								onInputChange: function onInputChange(input) {
									creatableProps.onInputChange(input);
									return asyncProps.onInputChange(input);
								},
								ref: function ref(_ref) {
									_this2.select = _ref;
									creatableProps.ref(_ref);
									asyncProps.ref(_ref);
								}
							}));
						}
					);
				}
			);
		}
	}]);

	return AsyncCreatableSelect;
}(_react2.default.Component);

;

exports.default = AsyncCreatableSelect;

/***/ }),

/***/ "qARP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("lOnJ");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "qVh6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.CheckboxField = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a checkbox input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Boolean}       props.checked
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
var CheckboxField = exports.CheckboxField = function CheckboxField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    checked = _ref.checked,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		_field2.default,
		{ field: field, showLabel: false, showRequiredLabel: false },
		_react2.default.createElement(
			'label',
			null,
			_react2.default.createElement('input', (0, _extends3.default)({
				type: 'checkbox',
				name: name,
				value: field.option_value,
				checked: checked,
				disabled: !field.ui.is_visible,
				onChange: handleChange
			}, field.attributes)),
			field.option_label,
			field.required ? _react2.default.createElement(
				'span',
				{ className: 'carbon-required' },
				'*'
			) : null
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
/**
 * The external dependencies.
 */
CheckboxField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.bool,
		option_value: _propTypes2.default.string,
		attributes: _propTypes2.default.object
	}),
	checked: _propTypes2.default.bool,
	handleChange: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(),

/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)(),

/**
 * Pass some props to the component.
 */
(0, _recompose.withProps)(function (_ref2) {
	var field = _ref2.field;
	return {
		checked: field.value
	};
}),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref3) {
		var field = _ref3.field,
		    setFieldValue = _ref3.setFieldValue;
		return function (_ref4) {
			var target = _ref4.target;

			setFieldValue(field.id, target.checked);
		};
	}
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_CHECKBOX])(enhance(CheckboxField));

/***/ }),

/***/ "qkKv":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("FeBl");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "qo66":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7KvD");
var $export = __webpack_require__("kM2E");
var meta = __webpack_require__("06OY");
var fails = __webpack_require__("S82l");
var hide = __webpack_require__("hJx8");
var redefineAll = __webpack_require__("xH/j");
var forOf = __webpack_require__("NWt+");
var anInstance = __webpack_require__("2KxR");
var isObject = __webpack_require__("EqjI");
var setToStringTag = __webpack_require__("e6n0");
var dP = __webpack_require__("evD5").f;
var each = __webpack_require__("ALrJ")(0);
var DESCRIPTORS = __webpack_require__("+E39");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "qyJz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("+ZMJ");
var $export = __webpack_require__("kM2E");
var toObject = __webpack_require__("sB3e");
var call = __webpack_require__("msXi");
var isArrayIter = __webpack_require__("Mhyx");
var toLength = __webpack_require__("QRG4");
var createProperty = __webpack_require__("fBQ2");
var getIterFn = __webpack_require__("3fs2");

$export($export.S + $export.F * !__webpack_require__("dY0y")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "r/IV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _base = __webpack_require__("W0zY");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The supported operators by this comparer.
 *
 * @type {Array}
 */
var operators = ['IN', 'NOT IN'];

/**
 * Perform the comparison.
 *
 * @param  {mixed}   a
 * @param  {String}  operator
 * @param  {mixed}   b
 * @return {Boolean}
 */
/**
 * The internal dependencies.
 */
var evaluate = function evaluate(a, operator, b) {
  switch (operator) {
    case 'IN':
      return b.indexOf(a) > -1;
    case 'NOT IN':
      return b.indexOf(a) === -1;
    default:
      return false;
  }
};

exports.default = (0, _extends3.default)({}, (0, _base2.default)(operators), {
  evaluate: evaluate
});

/***/ }),

/***/ "rNU7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react-dom-server.browser.production.min.js');
} else {
  module.exports = __webpack_require__("imyQ");
}


/***/ }),

/***/ "rmae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetStore = undefined;

var _reduxActions = __webpack_require__("sTbe");

/**
 * Replace the store's state with the provided object.
 *
 * @param  {Object} state
 * @return {Object}
 */
var resetStore = exports.resetStore = (0, _reduxActions.createAction)('RESET_STORE'); /**
                                                                                       * The external dependencies.
                                                                                       */

/***/ }),

/***/ "sB3e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("sB3e");

/***/ }),

/***/ "sF+V":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("kM2E");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("Yobk") });


/***/ }),

/***/ "sTbe":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("sTbe");

/***/ }),

/***/ "sefJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortableList = function (_React$Component) {
	(0, _inherits3.default)(SortableList, _React$Component);

	function SortableList() {
		(0, _classCallCheck3.default)(this, SortableList);
		return (0, _possibleConstructorReturn3.default)(this, (SortableList.__proto__ || (0, _getPrototypeOf2.default)(SortableList)).apply(this, arguments));
	}

	(0, _createClass3.default)(SortableList, [{
		key: 'componentDidMount',

		/**
   * Lifecycle hook.
   *
   * @return {void}
   */
		value: function componentDidMount() {
			this.handleSortableUpdate = this.handleSortableUpdate.bind(this);

			this.$node = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this)).sortable((0, _extends3.default)({}, this.props.options, {
				update: this.handleSortableUpdate
			}));
		}

		/**
   * Lifecycle hook.
   *
   * @return {void}
   */

	}, {
		key: 'componentWillDestroy',
		value: function componentWillDestroy() {
			this.$node.sortable('destroy');
			this.$node = null;
		}

		/**
   * Render the component.
   *
   * @return {React.Element}
   */

	}, {
		key: 'render',
		value: function render() {
			return _react2.default.Children.only(this.props.children);
		}

		/**
   * Handle the `update` event from the sortable widget.
   *
   * @param  {Object} event
   * @param  {Object} ui
   * @return {void}
   */

	}, {
		key: 'handleSortableUpdate',
		value: function handleSortableUpdate(event, ui) {
			// Notify the subscribers.
			this.props.onSort(this.$node.sortable('toArray'), event, ui);

			// DOM items will be re-ordered by React.
			this.$node.sortable('cancel');
		}
	}]);
	return SortableList;
}(_react2.default.Component); /**
                               * The external dependencies.
                               */


exports.default = SortableList;

/***/ }),

/***/ "sjDA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = undefined;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__("M4fF");

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _preview = __webpack_require__("JG3Y");

var _preview2 = _interopRequireDefault(_preview);

var _searchInput = __webpack_require__("Ta9K");

var _searchInput2 = _interopRequireDefault(_searchInput);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a Google-powered map with an address search field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @param  {Function}      props.handleSearchSubmit
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
var OembedField = function OembedField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    embedCode = _ref.embedCode,
	    embedType = _ref.embedType,
	    isLoading = _ref.isLoading,
	    error = _ref.error,
	    provider = _ref.provider,
	    handleSearchSubmit = _ref.handleSearchSubmit;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement('input', {
			type: 'hidden',
			id: field.id,
			name: name,
			value: field.value,
			readOnly: true }),
		_react2.default.createElement(_searchInput2.default, {
			term: field.value,
			onSubmit: handleSearchSubmit }),
		isLoading || error ? _react2.default.createElement(
			'div',
			{ className: 'carbon-oembed-loader' },
			isLoading ? _react2.default.createElement('span', { className: 'spinner is-active' }) : _react2.default.createElement(
				'p',
				null,
				error
			)
		) : null,
		embedCode ? _react2.default.createElement(_preview2.default, {
			html: embedCode,
			type: embedType,
			provider: provider
		}) : null
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
OembedField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		value: _propTypes2.default.string
	})
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(),

/**
 * Control the visibility of the colorpicker.
 */
(0, _recompose.withState)('embedCode', 'setEmbedCode', null), (0, _recompose.withState)('embedType', 'setEmbedType', null), (0, _recompose.withState)('provider', 'setProvider', null), (0, _recompose.withState)('isLoading', 'setIsLoading', false), (0, _recompose.withState)('error', 'setError', null),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleSearchSubmit: function handleSearchSubmit(_ref2) {
		var field = _ref2.field,
		    setEmbedCode = _ref2.setEmbedCode,
		    setEmbedType = _ref2.setEmbedType,
		    setIsLoading = _ref2.setIsLoading,
		    setError = _ref2.setError,
		    setFieldValue = _ref2.setFieldValue,
		    isLoading = _ref2.isLoading,
		    setProvider = _ref2.setProvider;
		return function (value) {
			if (isLoading) {
				return;
			}

			if (field.value !== value) {
				setFieldValue(field.id, value);
			}

			setEmbedCode(null);
			setError(null);

			if ((0, _lodash.isEmpty)(value)) {
				return;
			}

			setIsLoading(true);

			var request = _jquery2.default.get(wpApiSettings.root + 'oembed/1.0/proxy', {
				url: value,
				_wpnonce: wpApiSettings.nonce
			});

			request.done(function (_ref3) {
				var html = _ref3.html,
				    type = _ref3.type,
				    provider_name = _ref3.provider_name;

				setEmbedType(type);
				setProvider(provider_name);
				setEmbedCode(html);
				setIsLoading(false);
			});

			request.fail(function () {
				setError(carbonFieldsL10n.field.oembedNotFound);
				setIsLoading(false);
			});
		};
	}
}),

/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)({
	componentDidMount: function componentDidMount() {
		var _props = this.props,
		    field = _props.field,
		    ui = _props.ui,
		    setupField = _props.setupField,
		    handleSearchSubmit = _props.handleSearchSubmit;


		setupField(field.id, field.type, ui);

		var domNode = _reactDom2.default.findDOMNode(this);

		var i = setInterval(function () {
			if (domNode.getBoundingClientRect().width > 0) {
				clearInterval(i);
				handleSearchSubmit(field.value);
			}
		}, 100);
	}
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_OEMBED])(enhance(OembedField));

/***/ }),

/***/ "t8x9":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("77Pl");
var aFunction = __webpack_require__("lOnJ");
var SPECIES = __webpack_require__("dSzd")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "tKUU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _recompose = __webpack_require__("zpMW");

var _container = __webpack_require__("Mq2Y");

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__("mbsf");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("Zn/G");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.compose)((0, _recompose.setStatic)('type', _constants.TYPE_THEME_OPTIONS), (0, _withStore2.default)(), (0, _withSetup2.default)({}, {
	tabs_in_url: true
}))(_container2.default); /**
                           * The external dependencies.
                           */

/***/ }),

/***/ "tSl/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _base = __webpack_require__("yCLc");

var _base2 = _interopRequireDefault(_base);

var _nonce = __webpack_require__("EFYB");

var _nonce2 = _interopRequireDefault(_nonce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a plain version of the container.
 *
 * @param  {Object}        props
 * @param  {Object}        props.container
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
var ContainerPlain = function ContainerPlain(_ref) {
  var container = _ref.container;

  return _react2.default.createElement(
    _base2.default,
    { container: container, fields: container.fields },
    _react2.default.createElement(_nonce2.default, { container: container })
  );
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ContainerPlain.propTypes = {
  container: _propTypes2.default.shape({
    fields: _propTypes2.default.array
  })
};

exports.default = ContainerPlain;

/***/ }),

/***/ "tTw2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Value = exports.Creatable = exports.AsyncCreatable = exports.Async = undefined;

var _Select = __webpack_require__("famw");

var _Select2 = _interopRequireDefault(_Select);

var _Async = __webpack_require__("mXhS");

var _Async2 = _interopRequireDefault(_Async);

var _AsyncCreatable = __webpack_require__("pZ1J");

var _AsyncCreatable2 = _interopRequireDefault(_AsyncCreatable);

var _Creatable = __webpack_require__("Bn1I");

var _Creatable2 = _interopRequireDefault(_Creatable);

var _Value = __webpack_require__("yLPB");

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Select2.default.Async = _Async2.default;
_Select2.default.AsyncCreatable = _AsyncCreatable2.default;
_Select2.default.Creatable = _Creatable2.default;
_Select2.default.Value = _Value2.default;

exports.default = _Select2.default;
exports.Async = _Async2.default;
exports.AsyncCreatable = _AsyncCreatable2.default;
exports.Creatable = _Creatable2.default;
exports.Value = _Value2.default;

/***/ }),

/***/ "tfak":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.RichTextField = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _lodash = __webpack_require__("M4fF");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _editor = __webpack_require__("fzf9");

var _editor2 = _interopRequireDefault(_editor);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a field that supports the build-in WYSIWYG editor.
 *
 * @param  {Object} props
 * @param  {String} props.name
 * @param  {Object} props.field
 * @return {React.Element}
 */
var RichTextField = exports.RichTextField = function RichTextField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			_editor2.default,
			{
				id: field.id,
				richEditing: field.rich_editing,
				mediaButtons: field.media_buttons,
				content: field.value,
				isDragging: field.ui.dragged,
				onChange: handleChange },
			_react2.default.createElement('textarea', (0, _extends3.default)({
				id: field.id,
				className: 'wp-editor-area',
				name: name,
				value: field.value,
				rows: field.rows,
				onChange: handleChange,
				disabled: !field.ui.is_visible
			}, field.attributes))
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
RichTextField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.string,
		rows: _propTypes2.default.number,
		attributes: _propTypes2.default.object,
		rich_editing: _propTypes2.default.bool,
		media_buttons: _propTypes2.default.string
	}),
	handleChange: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(),

/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)({}, {
	dragged: false
}),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref2) {
		var field = _ref2.field,
		    setFieldValue = _ref2.setFieldValue;
		return function (eventOrValue) {
			var value = void 0;

			if ((0, _lodash.isString)(eventOrValue)) {
				value = eventOrValue;
			} else {
				value = eventOrValue.target.value;
			}

			setFieldValue(field.id, value);
		};
	}
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_RICH_TEXT])(enhance(RichTextField));

/***/ }),

/***/ "ttyz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("9C8M");
var validate = __webpack_require__("LIJb");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("qo66")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "ulpv":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("ulpv");

/***/ }),

/***/ "uokr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldValidators = exports.registerFieldValidator = exports.decorateSidebarReducer = exports.decorateFieldReducer = exports.decorateContainerReducer = exports.registerSidebarReducer = exports.registerFieldReducer = exports.registerContainerReducer = exports.getFieldComponent = exports.getContainerComponent = exports.registerFieldComponent = exports.registerContainerComponent = undefined;

var _toConsumableArray2 = __webpack_require__("Gu7T");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _components, _reducers; /**
                             * The external dependencies.
                             */


exports.registerSaga = registerSaga;
exports.getSagas = getSagas;

var _reduceReducers = __webpack_require__("ulpv");

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

var _lodash = __webpack_require__("M4fF");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The supported domains.
 *
 * @type {String}
 */
var DOMAIN_CONTAINERS = 'containers';
var DOMAIN_FIELDS = 'fields';
var DOMAIN_SIDEBARS = 'sidebars';

/**
 * The map that will be used by the factory functions.
 *
 * @type {Object}
 */
var components = (_components = {}, (0, _defineProperty3.default)(_components, DOMAIN_CONTAINERS, {}), (0, _defineProperty3.default)(_components, DOMAIN_FIELDS, {}), _components);

/**
 * Register a new component that can be rendered by the factory function.
 *
 * @param  {String}          domain
 * @param  {String}          type
 * @param  {React.Component} component
 * @return {void}
 */
function registerComponent(domain, type, component) {
  components[domain][type] = component;
}

var registerContainerComponent = exports.registerContainerComponent = (0, _lodash.partial)(registerComponent, DOMAIN_CONTAINERS);
var registerFieldComponent = exports.registerFieldComponent = (0, _lodash.partial)(registerComponent, DOMAIN_FIELDS);

/**
 * Get a registered component.
 *
 * @param  {String} domain
 * @param  {String} type
 * @return {React.Component}
 */
function getComponent(domain, type) {
  var component = components[domain][type];

  if (!component) {
    throw new Error('Could not find the component for type "' + type + '".');
  }

  return component;
}

var getContainerComponent = exports.getContainerComponent = (0, _lodash.partial)(getComponent, DOMAIN_CONTAINERS);
var getFieldComponent = exports.getFieldComponent = (0, _lodash.partial)(getComponent, DOMAIN_FIELDS);

/**
 * Every reducer will be pushed here, in this way we will achieve
 * great extensibility of the store.
 *
 * @type {Object}
 */
var reducers = (_reducers = {}, (0, _defineProperty3.default)(_reducers, DOMAIN_CONTAINERS, []), (0, _defineProperty3.default)(_reducers, DOMAIN_FIELDS, []), (0, _defineProperty3.default)(_reducers, DOMAIN_SIDEBARS, []), _reducers);

/**
 * Register a new reducer.
 *
 * @param  {String}   domain
 * @param  {Function} fn
 * @return {void}
 *
 * @todo Add some validation
 */
function registerReducer(domain, fn) {
  reducers[domain].push(fn);
}

var registerContainerReducer = exports.registerContainerReducer = (0, _lodash.partial)(registerReducer, DOMAIN_CONTAINERS);
var registerFieldReducer = exports.registerFieldReducer = (0, _lodash.partial)(registerReducer, DOMAIN_FIELDS);
var registerSidebarReducer = exports.registerSidebarReducer = (0, _lodash.partial)(registerReducer, DOMAIN_SIDEBARS);

/**
 * Apply the 3rd party reducers to the core reducers.
 *
 * @param  {String}   domain
 * @param  {Function} fn
 * @return {Function}
 */
function decorateReducer(domain, fn) {
  return function (state, action) {
    return _reduceReducers2.default.apply(undefined, [fn].concat((0, _toConsumableArray3.default)(reducers[domain])))(state, action);
  };
}

var decorateContainerReducer = exports.decorateContainerReducer = (0, _lodash.partial)(decorateReducer, DOMAIN_CONTAINERS);
var decorateFieldReducer = exports.decorateFieldReducer = (0, _lodash.partial)(decorateReducer, DOMAIN_FIELDS);
var decorateSidebarReducer = exports.decorateSidebarReducer = (0, _lodash.partial)(decorateReducer, DOMAIN_SIDEBARS);

/**
 * The registered sagas.
 *
 * @type {Array}
 */
var sagas = [];

/**
 * Register a new saga.
 *
 * @param  {Function} saga
 * @return {void}
 */
function registerSaga(saga) {
  sagas.push(saga);
}

/**
 * Get all registered sagas.
 *
 * @return {Function[]}
 */
function getSagas() {
  return sagas;
}

/**
 * The map that will be used by the validation service.
 *
 * @type {Object}
 */
var validators = (0, _defineProperty3.default)({}, DOMAIN_FIELDS, {});

/**
 * Register a new validator.
 *
 * @param  {String}   domain
 * @param  {String}   type
 * @param  {Function} validator
 * @return {void}
 */
function registerValidator(domain, type, validator) {
  validators[domain][type] = validator;
}

var registerFieldValidator = exports.registerFieldValidator = (0, _lodash.partial)(registerValidator, DOMAIN_FIELDS);

/**
 * Get the validators for the specified domain.
 *
 * @param  {String} domain
 * @return {Object}
 */
function getValidators(domain) {
  return validators[domain] || {};
}

var getFieldValidators = exports.getFieldValidators = (0, _lodash.partial)(getValidators, DOMAIN_FIELDS);

/***/ }),

/***/ "uqUo":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("kM2E");
var core = __webpack_require__("FeBl");
var fails = __webpack_require__("S82l");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "us/S":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Xd32"), __esModule: true };

/***/ }),

/***/ "vIB/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("vIB/");

/***/ }),

/***/ "vVye":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleContainerBox = exports.switchContainerTab = exports.submitForm = exports.validateContainer = exports.validateAllContainers = exports.receiveContainer = exports.removeContainer = exports.addContainer = exports.setContainerUI = exports.setContainerMeta = exports.teardownContainer = exports.setupContainer = undefined;

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reduxActions = __webpack_require__("sTbe");

var _lodash = __webpack_require__("M4fF");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Perform the initial setup of the container.
 *
 * @param  {String} containerId
 * @param  {Object} meta
 * @param  {Object} ui
 * @return {Object}
 */
/**
 * The external dependencies.
 */
var setupContainer = exports.setupContainer = (0, _reduxActions.createAction)('containers/SETUP_CONTAINER', function (containerId, meta, ui) {
  return { containerId: containerId, meta: meta, ui: ui };
});

/**
 * Prepare the container for removal.
 *
 * @param  {String} containerId
 * @return {Object}
 */
var teardownContainer = exports.teardownContainer = (0, _reduxActions.createAction)('containers/TEARDOWN_CONTAINER', function (containerId) {
  return { containerId: containerId };
});

/**
 * Prepare the payload of the actions that update the container's meta or UI.
 *
 * @param  {String|Object} containers
 * @param  {String} 	   [key]
 * @param  {mixed}  	   [value]
 * @return {Object}
 */
function setMetaOrUI(containers, key, value) {
  if ((0, _lodash.isString)(containers)) {
    return (0, _defineProperty3.default)({}, containers, (0, _defineProperty3.default)({}, key, value));
  }

  return containers;
}

var setContainerMeta = exports.setContainerMeta = (0, _reduxActions.createAction)('containers/SET_META', setMetaOrUI);
var setContainerUI = exports.setContainerUI = (0, _reduxActions.createAction)('containers/SET_UI', setMetaOrUI);

/**
 * Add a new container to the store.
 *
 * @param  {Object} container
 * @return {Object}
 */
var addContainer = exports.addContainer = (0, _reduxActions.createAction)('containers/ADD_CONTAINER');

/**
 * Remove the container from the store.
 *
 * @param  {Object} containerId
 * @return {Object}
 */
var removeContainer = exports.removeContainer = (0, _reduxActions.createAction)('containers/REMOVE_CONTAINER');

/**
 * Receive a container as string and convert it to a usable structure.
 *
 * @param  {String}  container
 * @param  {Boolean} expanded
 * @return {Object}
 */
var receiveContainer = exports.receiveContainer = (0, _reduxActions.createAction)('containers/RECEIVE_CONTAINER', function (container) {
  var expanded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return { container: container, expanded: expanded };
});

/**
 * Trigger the validation of all containers.
 *
 * @param  {Object} event
 * @return {Object}
 */
var validateAllContainers = exports.validateAllContainers = (0, _reduxActions.createAction)('containers/VALIDATE_ALL_CONTAINERS');

/**
 * Trigger the validation of the specified container.
 *
 * @param  {String} containerId
 * @param  {Object} event
 * @return {Object}
 */
var validateContainer = exports.validateContainer = (0, _reduxActions.createAction)('containers/VALIDATE_CONTAINER', function (containerId, event) {
  return { containerId: containerId, event: event };
});

/**
 * Notify for form submit in a container
 *
 * @param  {Object} event
 */
var submitForm = exports.submitForm = (0, _reduxActions.createAction)('containers/SUBMIT_FORM', function (event) {
  return { event: event };
});

/**
 * Show the specified tab.
 *
 * @param  {String} containerId
 * @param  {String} tabId
 * @return {Object}
 */
var switchContainerTab = exports.switchContainerTab = (0, _reduxActions.createAction)('containers/SWITCH_TAB', function (containerId, tabId) {
  return { containerId: containerId, tabId: tabId };
});

/**
 * Notify when the container is toggled.
 *
 * @param  {String}  containerId
 * @param  {Boolean} visible
 * @return {Object}
 */
var toggleContainerBox = exports.toggleContainerBox = (0, _reduxActions.createAction)('containers/TOGGLE_BOX', function (containerId, visible) {
  return { containerId: containerId, visible: visible };
});

/***/ }),

/***/ "vcdB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.workerSyncPostTemplate = workerSyncPostTemplate;
exports.workerSyncPostAncestors = workerSyncPostAncestors;
exports.workerSyncPostFormat = workerSyncPostFormat;
exports.workerSyncHierarchicalTerms = workerSyncHierarchicalTerms;
exports.workerSyncNonHierarchicalTerms = workerSyncNonHierarchicalTerms;
exports.workerFormSubmitButton = workerFormSubmitButton;
exports.workerFormSubmit = workerFormSubmit;
exports.default = foreman;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _effects = __webpack_require__("egdi");

var _lodash = __webpack_require__("M4fF");

var _actions = __webpack_require__("Wtfs");

var _helpers = __webpack_require__("hKI6");

var _events = __webpack_require__("x1uS");

var _selectors = __webpack_require__("pL4W");

var _actions2 = __webpack_require__("vVye");

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(syncStore),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerSyncPostTemplate),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(workerSyncPostAncestors),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(workerSyncPostFormat),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(setupSyncTerms),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(workerSyncHierarchicalTerms),
    _marked7 = /*#__PURE__*/_regenerator2.default.mark(workerSyncNonHierarchicalTerms),
    _marked8 = /*#__PURE__*/_regenerator2.default.mark(workerFormSubmitButton),
    _marked9 = /*#__PURE__*/_regenerator2.default.mark(workerFormSubmit),
    _marked10 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                   * The external dependencies.
                                                                   */


/**
 * The internal dependencies.
 */


/**
 * Dispatch the action that will update the store.
 *
 * @param  {Object} containers
 * @param  {Object} meta
 * @return {void}
 */
function syncStore(containers, meta) {
	return _regenerator2.default.wrap(function syncStore$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _effects.put)((0, _actions2.setContainerMeta)((0, _lodash.mapValues)(containers, function () {
						return meta;
					})));

				case 2:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

/**
 * Keep in sync the `post_template` property.
 *
 * @param  {Object} containers
 * @return {void}
 */
function workerSyncPostTemplate(containers) {
	var selector, channel, _ref, value;

	return _regenerator2.default.wrap(function workerSyncPostTemplate$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					selector = 'select#page_template';

					if (!((0, _jquery2.default)(selector).length === 0)) {
						_context2.next = 4;
						break;
					}

					_context2.next = 4;
					return (0, _effects.call)(syncStore, containers, {
						post_template: 'default'
					});

				case 4:
					_context2.next = 6;
					return (0, _effects.call)(_events.createSelectboxChannel, selector);

				case 6:
					channel = _context2.sent;

				case 7:
					if (false) {
						_context2.next = 16;
						break;
					}

					_context2.next = 10;
					return (0, _effects.take)(channel);

				case 10:
					_ref = _context2.sent;
					value = _ref.value;
					_context2.next = 14;
					return (0, _effects.call)(syncStore, containers, {
						post_template: value
					});

				case 14:
					_context2.next = 7;
					break;

				case 16:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/**
 * Keep in sync the `post_parent_id`, `post_ancestors` & `post_level` properties.
 *
 * @param  {Object} containers
 * @return {void}
 */
function workerSyncPostAncestors(containers) {
	var channel, _ref2, option, ancestors, parentId, level;

	return _regenerator2.default.wrap(function workerSyncPostAncestors$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.call)(_events.createSelectboxChannel, 'select#parent_id');

				case 2:
					channel = _context3.sent;

				case 3:
					if (false) {
						_context3.next = 15;
						break;
					}

					_context3.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref2 = _context3.sent;
					option = _ref2.option;
					ancestors = (0, _helpers.getSelectOptionAncestors)(option);
					parentId = (0, _lodash.isEmpty)(ancestors) ? 0 : (0, _lodash.last)(ancestors);
					level = (0, _helpers.getSelectOptionLevel)(option) + 1; // +1 since the option is for the parent, not the current post

					_context3.next = 13;
					return (0, _effects.call)(syncStore, containers, {
						post_ancestors: ancestors,
						post_parent_id: parentId,
						post_level: level
					});

				case 13:
					_context3.next = 3;
					break;

				case 15:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

/**
 * Keep in sync the `post_format` property.
 *
 * @param  {Object} containers
 * @return {void}
 */
function workerSyncPostFormat(containers) {
	var channel, _ref3, values;

	return _regenerator2.default.wrap(function workerSyncPostFormat$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					_context4.next = 2;
					return (0, _effects.call)(_events.createCheckableChannel, '#post-formats-select');

				case 2:
					channel = _context4.sent;

				case 3:
					if (false) {
						_context4.next = 12;
						break;
					}

					_context4.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref3 = _context4.sent;
					values = _ref3.values;
					_context4.next = 10;
					return (0, _effects.call)(syncStore, containers, {
						post_format: (0, _lodash.isNull)(values[0]) ? '' : values[0]
					});

				case 10:
					_context4.next = 3;
					break;

				case 12:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked4, this);
}

/**
 * Setup the workers for different terms.
 *
 * @param  {Object}   containers
 * @param  {String}   selector
 * @param  {Function} worker
 * @return {void}
 */
function setupSyncTerms(containers, selector, worker) {
	var elements, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

	return _regenerator2.default.wrap(function setupSyncTerms$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					elements = document.querySelectorAll('div[id^="' + selector + '"]');
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context5.prev = 4;
					_iterator = (0, _getIterator3.default)(elements);

				case 6:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context5.next = 13;
						break;
					}

					element = _step.value;
					_context5.next = 10;
					return (0, _effects.fork)(worker, containers, element.id.replace(selector, ''));

				case 10:
					_iteratorNormalCompletion = true;
					_context5.next = 6;
					break;

				case 13:
					_context5.next = 19;
					break;

				case 15:
					_context5.prev = 15;
					_context5.t0 = _context5['catch'](4);
					_didIteratorError = true;
					_iteratorError = _context5.t0;

				case 19:
					_context5.prev = 19;
					_context5.prev = 20;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 22:
					_context5.prev = 22;

					if (!_didIteratorError) {
						_context5.next = 25;
						break;
					}

					throw _iteratorError;

				case 25:
					return _context5.finish(22);

				case 26:
					return _context5.finish(19);

				case 27:
				case 'end':
					return _context5.stop();
			}
		}
	}, _marked5, this, [[4, 15, 19, 27], [20,, 22, 26]]);
}

/**
 * Keep in sync the hierarchical terms(e.g categories).
 *
 * @param  {Object} containers
 * @param  {String} taxonomy
 * @return {void}
 */
function workerSyncHierarchicalTerms(containers, taxonomy) {
	var channel, _ref4, _values;

	return _regenerator2.default.wrap(function workerSyncHierarchicalTerms$(_context6) {
		while (1) {
			switch (_context6.prev = _context6.next) {
				case 0:
					_context6.next = 2;
					return (0, _effects.call)(_events.createCheckableChannel, '#' + taxonomy + 'checklist');

				case 2:
					channel = _context6.sent;

				case 3:
					if (false) {
						_context6.next = 12;
						break;
					}

					_context6.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref4 = _context6.sent;
					_values = _ref4.values;
					_context6.next = 10;
					return (0, _effects.call)(syncStore, containers, {
						post_term: (0, _defineProperty3.default)({}, taxonomy, _values.map(function (value) {
							return parseInt(value, 10);
						}))
					});

				case 10:
					_context6.next = 3;
					break;

				case 12:
				case 'end':
					return _context6.stop();
			}
		}
	}, _marked6, this);
}

/**
 * Keep in sync the non-hierarchical terms(e.g tags).
 *
 * @param  {Object} containers
 * @param  {String} taxonomy
 * @return {void}
 */
function workerSyncNonHierarchicalTerms(containers, taxonomy) {
	var channel, _ref5, _value;

	return _regenerator2.default.wrap(function workerSyncNonHierarchicalTerms$(_context7) {
		while (1) {
			switch (_context7.prev = _context7.next) {
				case 0:
					_context7.next = 2;
					return (0, _effects.call)(_events.createTextChangeChannel, '#' + taxonomy + ' .the-tags');

				case 2:
					channel = _context7.sent;

				case 3:
					if (false) {
						_context7.next = 12;
						break;
					}

					_context7.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref5 = _context7.sent;
					_value = _ref5.value;
					_context7.next = 10;
					return (0, _effects.call)(syncStore, containers, {
						post_term: (0, _defineProperty3.default)({}, taxonomy, _value ? _value.split(/,\s*/) : [])
					});

				case 10:
					_context7.next = 3;
					break;

				case 12:
				case 'end':
					return _context7.stop();
			}
		}
	}, _marked7, this);
}

var publishButtonUsed = false;

/**
 * Handle detect specific button used for form submission.
 *
 * @return {void}
 */
function workerFormSubmitButton() {
	var channel, _ref6, event;

	return _regenerator2.default.wrap(function workerFormSubmitButton$(_context8) {
		while (1) {
			switch (_context8.prev = _context8.next) {
				case 0:
					_context8.next = 2;
					return (0, _effects.call)(_events.createClickChannel, '#publish[name="publish"]');

				case 2:
					channel = _context8.sent;

				case 3:
					if (false) {
						_context8.next = 11;
						break;
					}

					_context8.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref6 = _context8.sent;
					event = _ref6.event;

					publishButtonUsed = true;
					_context8.next = 3;
					break;

				case 11:
				case 'end':
					return _context8.stop();
			}
		}
	}, _marked8, this);
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
function workerFormSubmit() {
	var channel, postStatusSelect, _ref7, _event;

	return _regenerator2.default.wrap(function workerFormSubmit$(_context9) {
		while (1) {
			switch (_context9.prev = _context9.next) {
				case 0:
					_context9.next = 2;
					return (0, _effects.call)(_events.createSubmitChannel, ':not(.comment-php) form#post');

				case 2:
					channel = _context9.sent;
					postStatusSelect = document.getElementById('post_status');

				case 4:
					if (false) {
						_context9.next = 21;
						break;
					}

					_context9.next = 7;
					return (0, _effects.take)(channel);

				case 7:
					_ref7 = _context9.sent;
					_event = _ref7.event;
					_context9.next = 11;
					return (0, _effects.put)((0, _actions2.submitForm)(_event));

				case 11:
					if (!(!publishButtonUsed && postStatusSelect.value !== 'publish')) {
						_context9.next = 13;
						break;
					}

					return _context9.abrupt('continue', 4);

				case 13:

					publishButtonUsed = false;

					_context9.next = 16;
					return (0, _effects.put)((0, _actions2.validateAllContainers)(_event));

				case 16:
					if (!carbonFieldsConfig.compactInput) {
						_context9.next = 19;
						break;
					}

					_context9.next = 19;
					return (0, _helpers.compactInput)(_event.target);

				case 19:
					_context9.next = 4;
					break;

				case 21:
				case 'end':
					return _context9.stop();
			}
		}
	}, _marked9, this);
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
function foreman() {
	var containers;
	return _regenerator2.default.wrap(function foreman$(_context10) {
		while (1) {
			switch (_context10.prev = _context10.next) {
				case 0:
					_context10.next = 2;
					return (0, _effects.select)(_selectors.getContainersByType, _constants.TYPE_POST_META);

				case 2:
					containers = _context10.sent;

					if (!(0, _lodash.isEmpty)(containers)) {
						_context10.next = 5;
						break;
					}

					return _context10.abrupt('return');

				case 5:
					_context10.next = 7;
					return (0, _effects.take)(_actions.ready);

				case 7:
					_context10.next = 9;
					return (0, _effects.fork)(workerSyncPostTemplate, containers);

				case 9:
					_context10.next = 11;
					return (0, _effects.fork)(workerSyncPostAncestors, containers);

				case 11:
					_context10.next = 13;
					return (0, _effects.fork)(workerSyncPostFormat, containers);

				case 13:
					_context10.next = 15;
					return (0, _effects.fork)(setupSyncTerms, containers, 'taxonomy-', workerSyncHierarchicalTerms);

				case 15:
					_context10.next = 17;
					return (0, _effects.fork)(setupSyncTerms, containers, 'tagsdiv-', workerSyncNonHierarchicalTerms);

				case 17:
					_context10.next = 19;
					return (0, _effects.fork)(workerFormSubmitButton);

				case 19:
					_context10.next = 21;
					return (0, _effects.fork)(workerFormSubmit);

				case 21:
				case 'end':
					return _context10.stop();
			}
		}
	}, _marked10, this);
}

/***/ }),

/***/ "voy6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.workerSyncUserRole = workerSyncUserRole;
exports.workerFormSubmit = workerFormSubmit;
exports.default = foreman;

var _lodash = __webpack_require__("M4fF");

var _effects = __webpack_require__("egdi");

var _actions = __webpack_require__("Wtfs");

var _helpers = __webpack_require__("hKI6");

var _events = __webpack_require__("x1uS");

var _actions2 = __webpack_require__("vVye");

var _selectors = __webpack_require__("pL4W");

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerSyncUserRole),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerFormSubmit),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Keep in sync the `user_role` property.
 *
 * @param  {Object} containers
 * @return {void}
 */
function workerSyncUserRole(containers) {
	var _this = this;

	var channel, _loop, el, id;

	return _regenerator2.default.wrap(function workerSyncUserRole$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.call)(_events.createSelectboxChannel, 'select#role');

				case 2:
					channel = _context2.sent;
					_context2.prev = 3;
					_loop = /*#__PURE__*/_regenerator2.default.mark(function _loop() {
						var _ref, value;

						return _regenerator2.default.wrap(function _loop$(_context) {
							while (1) {
								switch (_context.prev = _context.next) {
									case 0:
										_context.next = 2;
										return (0, _effects.take)(channel);

									case 2:
										_ref = _context.sent;
										value = _ref.value;
										_context.next = 6;
										return (0, _effects.put)((0, _actions2.setContainerMeta)((0, _lodash.mapValues)(containers, function () {
											return { user_role: value };
										})));

									case 6:
									case 'end':
										return _context.stop();
								}
							}
						}, _loop, _this);
					});

				case 5:
					if (false) {
						_context2.next = 9;
						break;
					}

					return _context2.delegateYield(_loop(), 't0', 7);

				case 7:
					_context2.next = 5;
					break;

				case 9:
					_context2.prev = 9;
					_context2.next = 12;
					return (0, _effects.call)([document, document.querySelector], 'fieldset[data-profile-role]');

				case 12:
					el = _context2.sent;

					if (!el.dataset.profileRole) {
						_context2.next = 17;
						break;
					}

					// TODO: For some reason we can't use map-like methods because
					// everything dies silently.
					for (id in containers) {
						containers[id] = {
							user_role: el.dataset.profileRole
						};
					}

					_context2.next = 17;
					return (0, _effects.put)((0, _actions2.setContainerMeta)(containers));

				case 17:
					return _context2.finish(9);

				case 18:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked, this, [[3,, 9, 18]]);
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
function workerFormSubmit() {
	var channel, _ref2, event;

	return _regenerator2.default.wrap(function workerFormSubmit$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.call)(_events.createSubmitChannel, 'form#your-profile, form#createuser');

				case 2:
					channel = _context3.sent;

				case 3:
					if (false) {
						_context3.next = 17;
						break;
					}

					_context3.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref2 = _context3.sent;
					event = _ref2.event;
					_context3.next = 10;
					return (0, _effects.put)((0, _actions2.submitForm)(event));

				case 10:
					_context3.next = 12;
					return (0, _effects.put)((0, _actions2.validateAllContainers)(event));

				case 12:
					if (!carbonFieldsConfig.compactInput) {
						_context3.next = 15;
						break;
					}

					_context3.next = 15;
					return (0, _helpers.compactInput)(event.target);

				case 15:
					_context3.next = 3;
					break;

				case 17:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked2, this);
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
function foreman(store) {
	var containers;
	return _regenerator2.default.wrap(function foreman$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					_context4.next = 2;
					return (0, _effects.select)(_selectors.getContainersByType, _constants.TYPE_USER_META);

				case 2:
					containers = _context4.sent;

					if (!(0, _lodash.isEmpty)(containers)) {
						_context4.next = 5;
						break;
					}

					return _context4.abrupt('return');

				case 5:
					_context4.next = 7;
					return (0, _effects.take)(_actions.ready);

				case 7:
					_context4.next = 9;
					return (0, _effects.fork)(workerSyncUserRole, containers);

				case 9:
					_context4.next = 11;
					return (0, _effects.fork)(workerFormSubmit);

				case 11:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked3, this);
}

/***/ }),

/***/ "wcck":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var Component = (0, _registry.getFieldComponent)(type);

  return _react2.default.createElement(Component, (0, _extends3.default)({
    key: props.id,
    type: type
  }, props));
};

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _registry = __webpack_require__("uokr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "wkKH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ComplexGroup = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__("zpMW");

var _constants = __webpack_require__("8Hlw");

var _helpers = __webpack_require__("hKI6");

var _factory = __webpack_require__("wcck");

var _factory2 = _interopRequireDefault(_factory);

var _withHeaderTemplate = __webpack_require__("6OFK");

var _withHeaderTemplate2 = _interopRequireDefault(_withHeaderTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render the holder around the complex's fields.
 *
 * @param  {Object}        props
 * @param  {Number}        props.index
 * @param  {String}        props.prefix
 * @param  {String}        props.layout
 * @param  {Object}        props.group
 * @param  {String}        props.label
 * @param  {Boolean}       props.active
 * @param  {Function}      props.handleToggleClick
 * @param  {Function}      props.handleCloneClick
 * @param  {Function}      props.handleRemoveClick
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
var ComplexGroup = exports.ComplexGroup = function ComplexGroup(_ref) {
	var index = _ref.index,
	    prefix = _ref.prefix,
	    layout = _ref.layout,
	    group = _ref.group,
	    label = _ref.label,
	    active = _ref.active,
	    cloneEnabled = _ref.cloneEnabled,
	    handleToggleClick = _ref.handleToggleClick,
	    handleCloneClick = _ref.handleCloneClick,
	    handleRemoveClick = _ref.handleRemoveClick;

	var classes = ['carbon-row', 'carbon-group-row', { 'collapsed': group.collapsed }, { 'active': active }];
	var cloneButton = cloneEnabled ? _react2.default.createElement(
		'a',
		{
			href: '#',
			className: 'carbon-btn-duplicate dashicons-before dashicons-admin-page',
			title: carbonFieldsL10n.field.complexCloneButton,
			onClick: handleCloneClick },
		carbonFieldsL10n.field.complexCloneButton
	) : '';

	return _react2.default.createElement(
		'div',
		{ id: group.id, className: (0, _classnames2.default)(classes) },
		_react2.default.createElement('input', {
			type: 'hidden',
			name: prefix + '[' + index + '][' + _constants.VALUE_PROPERTY + ']',
			defaultValue: group.name }),
		_react2.default.createElement(
			'div',
			{ className: 'carbon-drag-handle' },
			_react2.default.createElement(
				'span',
				{ className: 'group-number' },
				index + 1
			),
			_react2.default.createElement('span', {
				className: 'group-name',
				dangerouslySetInnerHTML: { __html: label } })
		),
		_react2.default.createElement(
			'div',
			{ className: 'carbon-group-actions carbon-group-actions-' + layout },
			cloneButton,
			_react2.default.createElement(
				'a',
				{
					href: '#',
					className: 'carbon-btn-remove dashicons-before dashicons-trash',
					title: carbonFieldsL10n.field.complexRemoveButton,
					onClick: handleRemoveClick },
				carbonFieldsL10n.field.complexRemoveButton
			),
			_react2.default.createElement(
				'a',
				{
					href: '#',
					className: 'carbon-btn-collapse dashicons-before dashicons-arrow-up',
					title: carbonFieldsL10n.field.complexCollapseExpandButton,
					onClick: handleToggleClick },
				carbonFieldsL10n.field.complexCollapseExpandButton
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'fields-container' },
			group.fields.map(function (_ref2) {
				var id = _ref2.id,
				    type = _ref2.type,
				    name = _ref2.name;

				name = prefix + '[' + index + '][' + name + ']';

				return (0, _factory2.default)(type, { id: id, name: name });
			})
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ComplexGroup.propTypes = {
	index: _propTypes2.default.number,
	prefix: _propTypes2.default.string,
	layout: _propTypes2.default.string,
	group: _propTypes2.default.shape({
		name: _propTypes2.default.string,
		collapsed: _propTypes2.default.bool,
		fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			id: _propTypes2.default.string,
			type: _propTypes2.default.string,
			name: _propTypes2.default.string
		}))
	}),
	label: _propTypes2.default.string,
	active: _propTypes2.default.bool,
	cloneEnabled: _propTypes2.default.bool,
	onClone: _propTypes2.default.func,
	onRemove: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Add logic for header templates.
 */
_withHeaderTemplate2.default,

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleToggleClick: function handleToggleClick(_ref3) {
		var group = _ref3.group,
		    onExpand = _ref3.onExpand,
		    onCollapse = _ref3.onCollapse;
		return (0, _helpers.preventDefault)(function () {
			return group.collapsed ? onExpand(group.id) : onCollapse(group.id);
		});
	},
	handleCloneClick: function handleCloneClick(_ref4) {
		var group = _ref4.group,
		    onClone = _ref4.onClone;
		return (0, _helpers.preventDefault)(function () {
			return onClone(group.id);
		});
	},
	handleRemoveClick: function handleRemoveClick(_ref5) {
		var group = _ref5.group,
		    onRemove = _ref5.onRemove;
		return (0, _helpers.preventDefault)(function () {
			return onRemove(group.id);
		});
	}
}));

exports.default = enhance(ComplexGroup);

/***/ }),

/***/ "woOf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("V3tA"), __esModule: true };

/***/ }),

/***/ "wxAW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("C4MV");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "x1uS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createChannel = createChannel;
exports.createSelectboxChannel = createSelectboxChannel;
exports.createCheckableChannel = createCheckableChannel;
exports.createTextChangeChannel = createTextChangeChannel;
exports.createScrollChannel = createScrollChannel;
exports.createSubmitChannel = createSubmitChannel;
exports.createClickChannel = createClickChannel;
exports.createMediaBrowserChannel = createMediaBrowserChannel;
exports.createAjaxChannel = createAjaxChannel;
exports.createWidgetsChannel = createWidgetsChannel;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _reduxSaga = __webpack_require__("igqX");

var _lodash = __webpack_require__("M4fF");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a Saga Channel that will listen for DOM events.
 * The buffer is used to emit the initial value of the inputs when the channel is created.
 *
 * @param  {String}   selector
 * @param  {String}   event
 * @param  {Function} handler
 * @param  {String}   [childSelector]
 * @return {Object}
 */
function createChannel(selector, event, handler) {
	var childSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	return (0, _reduxSaga.eventChannel)(function (emit) {
		event = event + '.' + (0, _lodash.uniqueId)('event-');

		// Find the element in DOM.
		var $element = (0, _jquery2.default)(selector);

		// Cancel the subscription.
		var unsubscribe = function unsubscribe() {
			$element.off(event, childSelector);
		};

		// Close the channel since the element doesn't exist.
		if (!$element.length) {
			emit(_reduxSaga.END);
			return unsubscribe;
		}

		// Setup the subscription.
		$element.onFirst(event, childSelector, function (event) {
			handler(emit, $element, event);
		});

		// Emit the initial value.
		handler(emit, $element);

		return unsubscribe;
	}, _reduxSaga.buffers.fixed(1));
}

/**
 * Create a channel that will listen for `change` events on selectbox.
 *
 * @param  {String} selector
 * @return {Object}
 */
/**
 * The external dependencies.
 */
function createSelectboxChannel(selector) {
	return createChannel(selector, 'change', function (emit, $element) {
		emit({
			value: $element.val(),
			option: $element.find(':selected').first().get(0)
		});
	});
}

/**
 * Create a channel that will listen for `change` events on radio/checkbox inputs.
 *
 * @param  {String} selector
 * @return {Object}
 */
function createCheckableChannel(selector) {
	return createChannel(selector, 'change', function (emit, $element) {
		var elements = $element.find('input:checked').get();
		var values = elements.map(function (element) {
			return element.value;
		});

		emit({
			values: values,
			elements: elements
		});
	}, 'input');
}

/**
 * Create a channel that will listen for `change` events on text fields.
 *
 * @param  {String} selector
 * @return {Object}
 */
function createTextChangeChannel(selector) {
	return createChannel(selector, 'change', function (emit, $element) {
		var value = $element.val();

		emit({
			value: value
		});
	});
}

/**
 * Create a channel that will listen for `scroll` events.
 *
 * @param  {String} selector
 * @return {Object}
 */
function createScrollChannel(selector) {
	return createChannel(selector, 'scroll', function (emit, $element) {
		emit({
			value: $element.scrollTop()
		});
	});
}

/**
 * Create a channel that will listen for `submit` events.
 *
 * @param  {String} selector
 * @param  {String} [childSelector]
 * @return {Object}
 */
function createSubmitChannel(selector) {
	var childSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	return createChannel(selector, 'submit', function (emit, $element, event) {
		if (event) {
			emit({
				event: event
			});
		}
	}, childSelector);
}

/**
 * Create a channel that will listen for `click` events.
 *
 * @param  {String} selector
 * @param  {String} [childSelector]
 * @return {Object}
 */
function createClickChannel(selector) {
	var childSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	return createChannel(selector, 'click', function (emit, $element, event) {
		if (event) {
			emit({
				event: event
			});
		}
	}, childSelector);
}

/**
 * Create a channel for interaction with the media browser of WordPress.
 *
 * @param  {Object} settings
 * @return {Object}
 */
function createMediaBrowserChannel(settings) {
	return (0, _reduxSaga.eventChannel)(function (emit) {
		// Create a new instance of the media browser.
		var browser = window.wp.media(settings);

		var AttachmentLibrary = wp.media.view.Attachment.Library;

		window.wp.media.view.Attachment.Library = AttachmentLibrary.extend({
			render: function render() {
				var selected = this.controller.options.selected;


				selected = (0, _lodash.isArray)(selected) ? selected : [selected];
				selected = selected.map(function (id) {
					return parseInt(id, 10);
				});

				var id = this.model.id;


				if (selected && selected.indexOf(id) !== -1) {
					this.$el.addClass('carbon-selected');
				} else {
					this.$el.removeClass('carbon-selected');
				}

				return AttachmentLibrary.prototype.render.apply(this, arguments);
			}
		});

		// Emit the selection through the channel.
		var onSelect = function onSelect() {
			emit({
				selection: browser.state().get('selection').toJSON()
			});
		};

		// Emit the closing modal through the channel.
		var onClose = function onClose() {
			emit({
				closed: true
			});
		};

		// Cancel the subscription.
		var unsubscribe = function unsubscribe() {
			browser.off('select', onSelect);
			browser.off('close', onClose);
			browser.remove();
		};

		// Setup the subscription.
		browser.on('select', onSelect);
		browser.on('close', onClose);

		// Emit the instance of browser so it can be used by subscribers.
		emit({
			browser: browser
		});

		return unsubscribe;
	}, _reduxSaga.buffers.fixed(1));
}

/**
 * Create a channel that will intercept all occurences
 * of the specified AJAX action.
 *
 * @param  {String} event
 * @param  {String} action
 * @return {Object}
 */
function createAjaxChannel(event, action) {
	return (0, _reduxSaga.eventChannel)(function (emit) {
		// Emit the AJAX event through the channel.
		var handler = function handler(event, xhr, settings, data) {
			if ((0, _lodash.isString)(settings.data) && settings.data.indexOf(action) > -1) {
				emit({
					event: event,
					xhr: xhr,
					settings: settings,
					data: data
				});
			}
		};

		// Cancel the subscription.
		var unsubscribe = function unsubscribe() {
			(0, _jquery2.default)(document).off(event, handler);
		};

		// Setup the subscription.
		(0, _jquery2.default)(document).on(event, handler);

		return unsubscribe;
	}, _reduxSaga.buffers.fixed(1));
}

/**
 * Create a channel that will intercept all `widget-added` & `widget-updated` events
 * from `Widgets` page.
 *
 * @return {Object}
 */
function createWidgetsChannel() {
	return (0, _reduxSaga.eventChannel)(function (emit) {
		// Emit the event through the channel.
		var handler = function handler(event, widget) {
			emit({
				event: event,
				widget: widget
			});
		};

		// Cancel the subscription.
		var unsubscribe = function unsubscribe() {
			(0, _jquery2.default)(document).off('widget-before-added widget-added widget-updated', handler);
		};

		// Setup the subscription.
		(0, _jquery2.default)(document).on('widget-before-added widget-added widget-updated', handler);

		return unsubscribe;
	}, _reduxSaga.buffers.fixed(1));
}

/***/ }),

/***/ "xH/j":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("hJx8");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "xh4g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.workerAddOrCloneComplexGroup = workerAddOrCloneComplexGroup;
exports.workerRemoveComplexGroup = workerRemoveComplexGroup;
exports.workerDuplicateComplexGroups = workerDuplicateComplexGroups;
exports.workerToggleRichTextEditors = workerToggleRichTextEditors;
exports.default = foreman;

var _effects = __webpack_require__("egdi");

var _lodash = __webpack_require__("M4fF");

var _selectors = __webpack_require__("ZMHW");

var _helpers = __webpack_require__("pP85");

var _actions = __webpack_require__("HRbf");

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerAddOrCloneComplexGroup),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerRemoveComplexGroup),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(workerDuplicateComplexGroups),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(markRichTextFieldsAsDragged),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(workerToggleRichTextEditors),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(foreman); /**
                                                                  * The external dependencies.
                                                                  */


/**
 * The internal dependencies.
 */


/**
 * Prepare a clone or a new instance of the specified group.
 *
 * @param  {Object} action
 * @param  {String} action.type
 * @param  {Object} action.payload
 * @param  {String} action.fieldId
 * @param  {String} [action.groupId]
 * @param  {String} [action.groupName]
 * @return {void}
 */
function workerAddOrCloneComplexGroup(_ref) {
	var type = _ref.type,
	    _ref$payload = _ref.payload,
	    fieldId = _ref$payload.fieldId,
	    groupId = _ref$payload.groupId,
	    groupName = _ref$payload.groupName;

	var field, isTabbed, isAddAction, isCloneAction, blueprint, group, fields, _all;

	return _regenerator2.default.wrap(function workerAddOrCloneComplexGroup$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _effects.select)(_selectors.getFieldById, fieldId);

				case 2:
					field = _context.sent;
					_context.next = 5;
					return (0, _effects.select)(_selectors.isFieldTabbed, fieldId);

				case 5:
					isTabbed = _context.sent;
					isAddAction = type === _actions.addComplexGroup.toString();
					isCloneAction = type === _actions.cloneComplexGroup.toString();
					blueprint = void 0, group = void 0, fields = void 0;

					// Get the group that will be used as starting point.

					if (!isAddAction) {
						_context.next = 15;
						break;
					}

					_context.next = 12;
					return (0, _effects.call)(_lodash.find, field.groups, { name: groupName });

				case 12:
					blueprint = _context.sent;
					_context.next = 19;
					break;

				case 15:
					if (!isCloneAction) {
						_context.next = 19;
						break;
					}

					_context.next = 18;
					return (0, _effects.call)(_lodash.find, field.value, { id: groupId });

				case 18:
					blueprint = _context.sent;

				case 19:
					_context.next = 21;
					return (0, _effects.call)(_lodash.merge, {}, blueprint);

				case 21:
					group = _context.sent;

					if (!isCloneAction) {
						_context.next = 27;
						break;
					}

					_context.next = 25;
					return (0, _effects.select)(_selectors.getFields);

				case 25:
					_all = _context.sent;

					group.fields = group.fields.map(function (field) {
						return (0, _helpers.restoreField)(field, _all);
					});

				case 27:

					fields = [];

					(0, _helpers.addComplexGroupIdentifiers)(field, group, field.value.length);
					(0, _helpers.flattenComplexGroupFields)(group, fields);

					fields = (0, _lodash.keyBy)(fields, 'id');

					_context.next = 33;
					return (0, _effects.put)((0, _actions.addFields)(fields));

				case 33:
					_context.next = 35;
					return (0, _effects.put)((0, _actions.setFieldValue)(fieldId, group, 'push'));

				case 35:
					_context.next = 37;
					return (0, _effects.put)((0, _actions.receiveComplexGroup)(fieldId, group));

				case 37:
					if (!isTabbed) {
						_context.next = 42;
						break;
					}

					_context.next = 40;
					return (0, _effects.put)((0, _actions.switchComplexTab)(fieldId, group.id));

				case 40:
					_context.next = 44;
					break;

				case 42:
					_context.next = 44;
					return (0, _effects.put)((0, _actions.expandComplexGroup)(fieldId, group.id));

				case 44:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

/**
 * Get a flat array that contains the ids of the fields in specified tree.
 *
 * @param  {Object[]} roots
 * @param  {Object}   all
 * @param  {String[]} accumulator
 * @return {String[]}
 */
function collectFieldIds(roots, all, accumulator) {
	roots.forEach(function (field) {
		accumulator.push(field.id);

		if (field.type === _constants.TYPE_COMPLEX) {
			all[field.id].value.forEach(function (group) {
				collectFieldIds(group.fields, all, accumulator);
			});
		}
	});

	return accumulator;
}

/**
 * Prepare the specified complex group for removal.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @param  {String} action.payload.groupId
 * @return {void}
 */
function workerRemoveComplexGroup(_ref2) {
	var _ref2$payload = _ref2.payload,
	    fieldId = _ref2$payload.fieldId,
	    groupId = _ref2$payload.groupId,
	    method = _ref2$payload.method;
	var all, field, group, groupFields, isTabbed, groupIndex, nextGroupId;
	return _regenerator2.default.wrap(function workerRemoveComplexGroup$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.select)(_selectors.getFields);

				case 2:
					all = _context2.sent;
					_context2.next = 5;
					return (0, _effects.select)(_selectors.getFieldById, fieldId);

				case 5:
					field = _context2.sent;
					_context2.next = 8;
					return (0, _effects.call)(_lodash.find, field.value, { id: groupId });

				case 8:
					group = _context2.sent;
					_context2.next = 11;
					return (0, _effects.call)(collectFieldIds, group.fields, all, []);

				case 11:
					groupFields = _context2.sent;
					_context2.next = 14;
					return (0, _effects.select)(_selectors.isFieldTabbed, fieldId);

				case 14:
					isTabbed = _context2.sent;

					if (!isTabbed) {
						_context2.next = 23;
						break;
					}

					_context2.next = 18;
					return (0, _effects.call)(_lodash.findIndex, field.value, { id: groupId });

				case 18:
					groupIndex = _context2.sent;
					nextGroupId = null;


					if (field.value.length > 1) {
						if (groupIndex > 0) {
							nextGroupId = field.value[groupIndex - 1].id;
						} else {
							nextGroupId = field.value[1].id;
						}
					}

					_context2.next = 23;
					return (0, _effects.put)((0, _actions.switchComplexTab)(fieldId, nextGroupId));

				case 23:
					_context2.next = 25;
					return (0, _effects.put)((0, _actions.setFieldValue)(fieldId, field.value.filter(function (_ref3) {
						var id = _ref3.id;
						return id !== groupId;
					})));

				case 25:
					_context2.next = 27;
					return (0, _effects.put)((0, _actions.removeFields)(groupFields));

				case 27:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/**
 * Update available list of groups if needed
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @param  {String} action.payload.groupId
 * @return {void}
 */
function workerDuplicateComplexGroups(_ref4) {
	var type = _ref4.type,
	    _ref4$payload = _ref4.payload,
	    fieldId = _ref4$payload.fieldId,
	    groupId = _ref4$payload.groupId,
	    groupName = _ref4$payload.groupName,
	    method = _ref4$payload.method;
	var field, groupCloned, groupRemoved;
	return _regenerator2.default.wrap(function workerDuplicateComplexGroups$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.select)(_selectors.getFieldById, fieldId);

				case 2:
					field = _context3.sent;

					if (!field.duplicate_groups_allowed) {
						_context3.next = 5;
						break;
					}

					return _context3.abrupt('return');

				case 5:
					_context3.t0 = type;
					_context3.next = _context3.t0 === _actions.addComplexGroup.toString() ? 8 : _context3.t0 === _actions.cloneComplexGroup.toString() ? 11 : _context3.t0 === _actions.removeComplexGroup.toString() ? 17 : 23;
					break;

				case 8:
					_context3.next = 10;
					return (0, _effects.put)((0, _actions.disableComplexGroupType)(fieldId, groupName));

				case 10:
					return _context3.abrupt('break', 23);

				case 11:
					_context3.next = 13;
					return (0, _effects.call)(_lodash.find, field.value, { id: groupId });

				case 13:
					groupCloned = _context3.sent;
					_context3.next = 16;
					return (0, _effects.put)((0, _actions.disableComplexGroupType)(fieldId, groupCloned.name));

				case 16:
					return _context3.abrupt('break', 23);

				case 17:
					_context3.next = 19;
					return (0, _effects.call)(_lodash.find, field.value, { id: groupId });

				case 19:
					groupRemoved = _context3.sent;
					_context3.next = 22;
					return (0, _effects.put)((0, _actions.enableComplexGroupType)(fieldId, groupRemoved.name));

				case 22:
					return _context3.abrupt('break', 23);

				case 23:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

/**
 * Change the `dragged` flag of rich text fields.
 *
 * @param  {NodeList} elements
 * @param  {Boolean}  dragged
 * @return {void}
 */
function markRichTextFieldsAsDragged(elements, dragged) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

	return _regenerator2.default.wrap(function markRichTextFieldsAsDragged$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context4.prev = 3;
					_iterator = (0, _getIterator3.default)(elements);

				case 5:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context4.next = 12;
						break;
					}

					element = _step.value;
					_context4.next = 9;
					return (0, _effects.put)((0, _actions.setUI)(element.id, { dragged: dragged }));

				case 9:
					_iteratorNormalCompletion = true;
					_context4.next = 5;
					break;

				case 12:
					_context4.next = 18;
					break;

				case 14:
					_context4.prev = 14;
					_context4.t0 = _context4['catch'](3);
					_didIteratorError = true;
					_iteratorError = _context4.t0;

				case 18:
					_context4.prev = 18;
					_context4.prev = 19;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 21:
					_context4.prev = 21;

					if (!_didIteratorError) {
						_context4.next = 24;
						break;
					}

					throw _iteratorError;

				case 24:
					return _context4.finish(21);

				case 25:
					return _context4.finish(18);

				case 26:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked4, this, [[3, 14, 18, 26], [19,, 21, 25]]);
}

/**
 * Destroy and re-init the editors inside the complex group.
 *
 * @param  {Object}    action
 * @param  {Object}    action.payload
 * @param  {String}    action.payload.groupId
 * @return {void}
 */
function workerToggleRichTextEditors(_ref5) {
	var groupId = _ref5.payload.groupId;
	var elements;
	return _regenerator2.default.wrap(function workerToggleRichTextEditors$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					_context5.next = 2;
					return (0, _effects.call)([document, 'querySelectorAll'], '#' + groupId + ' .carbon-rich_text textarea');

				case 2:
					elements = _context5.sent;
					_context5.next = 5;
					return (0, _effects.call)(markRichTextFieldsAsDragged, elements, true);

				case 5:
					_context5.next = 7;
					return (0, _effects.take)(_actions.stopComplexGroupDrag);

				case 7:
					_context5.next = 9;
					return (0, _effects.call)(markRichTextFieldsAsDragged, elements, false);

				case 9:
				case 'end':
					return _context5.stop();
			}
		}
	}, _marked5, this);
}

/**
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
	return _regenerator2.default.wrap(function foreman$(_context6) {
		while (1) {
			switch (_context6.prev = _context6.next) {
				case 0:
					_context6.next = 2;
					return (0, _effects.all)([(0, _effects.takeEvery)(_actions.addComplexGroup, workerDuplicateComplexGroups), (0, _effects.takeEvery)(_actions.cloneComplexGroup, workerDuplicateComplexGroups), (0, _effects.takeEvery)(_actions.removeComplexGroup, workerDuplicateComplexGroups), (0, _effects.takeEvery)(_actions.addComplexGroup, workerAddOrCloneComplexGroup), (0, _effects.takeEvery)(_actions.cloneComplexGroup, workerAddOrCloneComplexGroup), (0, _effects.takeEvery)(_actions.removeComplexGroup, workerRemoveComplexGroup), (0, _effects.takeLatest)(_actions.startComplexGroupDrag, workerToggleRichTextEditors)]);

				case 2:
				case 'end':
					return _context6.stop();
			}
		}
	}, _marked6, this);
}

/***/ }),

/***/ "xnDK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.SelectField = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _noOptions = __webpack_require__("0RBh");

var _noOptions2 = _interopRequireDefault(_noOptions);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a select input field.
 *
 * @param  {Object}   props
 * @param  {Object}   props.name
 * @param  {Object}   props.field
 * @param  {Function} props.handleChange
 * @return {React.Element}
 */
/**
 * The external dependencies.
 */
var SelectField = exports.SelectField = function SelectField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'select',
			(0, _extends3.default)({
				id: field.id,
				name: name,
				value: field.value,
				disabled: !field.ui.is_visible,
				onChange: handleChange
			}, field.attributes),
			field.options.map(function (_ref2, index) {
				var value = _ref2.value,
				    label = _ref2.label;

				return _react2.default.createElement(
					'option',
					{ key: index, value: value },
					label
				);
			})
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
SelectField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.string,
		options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			value: _propTypes2.default.string,
			label: _propTypes2.default.string
		}))
	}),
	handleChange: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(),

/**
 * Render "No-Options" component when the field doesn't have options.
 */
(0, _recompose.branch)(
/**
 * Test to see if the "No-Options" should be rendered.
 */
function (_ref3) {
	var options = _ref3.field.options;
	return options && options.length;
},

/**
 * Render the actual field.
 */
(0, _recompose.compose)(
/**
 * Attach the setup hooks.
 */
(0, _withSetup2.default)({
	componentDidMount: function componentDidMount() {
		var _props = this.props,
		    field = _props.field,
		    ui = _props.ui,
		    setupField = _props.setupField,
		    setupValidation = _props.setupValidation,
		    setFieldValue = _props.setFieldValue;


		setupField(field.id, field.type, ui);

		// Supress validation errors when the fallback option has a falsy value.
		// An example is when the field is used to render 'Gravity Form' selectbox.
		if (field.required) {
			setupValidation(field.id, _constants.VALIDATION_BASE);
		}
	}
}),

/**
 * Pass some handlers to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref4) {
		var field = _ref4.field,
		    setFieldValue = _ref4.setFieldValue;
		return function (_ref5) {
			var value = _ref5.target.value;
			return setFieldValue(field.id, value);
		};
	}
})),

/**
 * Render the empty component.
 */
(0, _recompose.renderComponent)(_noOptions2.default)));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_SELECT, _constants.TYPE_GRAVITY_FORM])(enhance(SelectField));

/***/ }),

/***/ "xpIl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _recompose = __webpack_require__("zpMW");

var _container = __webpack_require__("Mq2Y");

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__("mbsf");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("Zn/G");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.compose)((0, _recompose.setStatic)('type', _constants.TYPE_POST_META), (0, _withStore2.default)(), (0, _withSetup2.default)({
	post_template: 'default',
	post_ancestors: [],
	post_parent_id: 0,
	post_level: 1,
	post_format: '',
	post_term: {}
}))(_container2.default); /**
                           * The external dependencies.
                           */

/***/ }),

/***/ "xreo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.SidebarField = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _lodash = __webpack_require__("M4fF");

var _actions = __webpack_require__("d6Yu");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _selectors = __webpack_require__("ZMHW");

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a dropdown field that lists existing sidebars and
 * provides the ability to add new sidebars to the site.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Object[]}      props.options
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
var SidebarField = exports.SidebarField = function SidebarField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    options = _ref.options,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'select',
			{
				id: field.id,
				name: name,
				value: field.value,
				disabled: !field.ui.is_visible,
				onChange: handleChange },
			options.map(function (_ref2, index) {
				var label = _ref2.label,
				    value = _ref2.value;
				return _react2.default.createElement(
					'option',
					{ key: index, value: value },
					label
				);
			})
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
SidebarField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.string,
		ui: _propTypes2.default.shape({
			is_visible: _propTypes2.default.bool
		})
	}),
	options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
		value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
	})),
	handleChange: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Connect to the Redux store.
 */
(0, _withStore2.default)(function () {
	var getSidebarFieldOptions = (0, _selectors.makeGetSidebarFieldOptions)();

	return function (state, props) {
		return {
			options: getSidebarFieldOptions(state, props.id)
		};
	};
}, {
	addSidebar: _actions.addSidebar
}),

/**
 * Attach setup hooks.
 */
(0, _withSetup2.default)({
	componentDidMount: function componentDidMount() {
		var _props = this.props,
		    field = _props.field,
		    ui = _props.ui,
		    options = _props.options,
		    setupField = _props.setupField,
		    setupValidation = _props.setupValidation,
		    setFieldValue = _props.setFieldValue;


		setupField(field.id, field.type, ui);

		if (field.required) {
			setupValidation(field.id, _constants.VALIDATION_BASE);
		}

		// If the field doesn't have a value,
		// use the first option as fallback.
		if (!field.value) {
			setFieldValue(field.id, options[0].value, 'set', false);
		}
	}
}),

/**
 * The handlers passed to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref3) {
		var field = _ref3.field,
		    options = _ref3.options,
		    setFieldValue = _ref3.setFieldValue,
		    addSidebar = _ref3.addSidebar;
		return function (_ref4) {
			var value = _ref4.target.value;

			if (value === '__add_new') {
				value = (0, _lodash.trim)(window.prompt(carbonFieldsL10n.field.enterNameOfNewSidebar));

				if (!value) {
					return;
				}

				if (!(0, _lodash.find)(options, { name: value })) {
					addSidebar(value);
				}
			}

			value = (0, _lodash.kebabCase)(value);

			setFieldValue(field.id, value);
		};
	}
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_SIDEBAR])(enhance(SidebarField));

/***/ }),

/***/ "y0rb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.MediaGalleryList = undefined;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _observeResize = __webpack_require__("zMaW");

var _observeResize2 = _interopRequireDefault(_observeResize);

var _recompose = __webpack_require__("zpMW");

var _lodash = __webpack_require__("M4fF");

var _sortableList = __webpack_require__("sefJ");

var _sortableList2 = _interopRequireDefault(_sortableList);

var _listItem = __webpack_require__("7Ot0");

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a file upload field with a preview thumbnail of the uploaded file.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.openBrowser
 * @param  {Function}      props.handleRemoveItem
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
var MediaGalleryList = exports.MediaGalleryList = function MediaGalleryList(_ref) {
	var field = _ref.field,
	    prefix = _ref.prefix,
	    items = _ref.items,
	    itemsMeta = _ref.itemsMeta,
	    handleRemoveItem = _ref.handleRemoveItem,
	    handleEditItem = _ref.handleEditItem,
	    openBrowser = _ref.openBrowser,
	    sortableOptions = _ref.sortableOptions,
	    onSort = _ref.onSort;

	return _react2.default.createElement(
		'div',
		{ className: 'carbon-media-gallery-list' },
		items.length > 0 ? _react2.default.createElement(
			_sortableList2.default,
			{ options: sortableOptions, onSort: onSort },
			_react2.default.createElement(
				'ul',
				{ className: 'carbon-media-gallery-list-items' },
				items.map(function (item, index) {
					return _react2.default.createElement(_listItem2.default, {
						prefix: prefix,
						key: index,
						index: index,
						item: item,
						meta: itemsMeta[item],
						name: name,
						onRemoveClick: handleRemoveItem,
						onEditClick: handleEditItem,
						isSelected: field.selected == item
					});
				})
			)
		) : _react2.default.createElement(
			'div',
			{ className: 'carbon-media-gallery-no-files' },
			_react2.default.createElement(
				'p',
				null,
				carbonFieldsL10n.field.mediaGalleryNoFiles
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'carbon-media-gallery-actions' },
			_react2.default.createElement(
				'button',
				{ type: 'button', className: 'button button-secondary', onClick: openBrowser },
				carbonFieldsL10n.field.mediaGalleryButtonLabel
			)
		)
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
/**
 * The external dependencies.
 */
MediaGalleryList.propTypes = {
	name: _propTypes2.default.string,
	items: _propTypes2.default.array,
	handleRemoveItem: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)(
/**
 * Track current search term.
 */
(0, _recompose.withState)('node', 'setNode', null), (0, _recompose.withHandlers)({
	handleComponentResize: function handleComponentResize() {
		return function (node) {
			var nodeWidth = node.offsetWidth;

			if (nodeWidth === 0) {
				return;
			} else if (nodeWidth < 200) {
				node.dataset.itemsPerRow = 1;
			} else if (nodeWidth < 300) {
				node.dataset.itemsPerRow = 2;
			} else if (nodeWidth < 500) {
				node.dataset.itemsPerRow = 3;
			} else if (nodeWidth < 600) {
				node.dataset.itemsPerRow = 4;
			} else if (nodeWidth < 700) {
				node.dataset.itemsPerRow = 5;
			} else if (nodeWidth < 800) {
				node.dataset.itemsPerRow = 6;
			} else if (nodeWidth < 900) {
				node.dataset.itemsPerRow = 7;
			} else if (nodeWidth < 1000) {
				node.dataset.itemsPerRow = 8;
			} else if (nodeWidth < 1200) {
				node.dataset.itemsPerRow = 9;
			} else if (nodeWidth < 1900) {
				node.dataset.itemsPerRow = 10;
			}
		};
	}
}),

/**
 * Attach the setup hooks.
 */
(0, _recompose.lifecycle)({
	componentDidMount: function componentDidMount() {
		var _props = this.props,
		    setNode = _props.setNode,
		    handleComponentResize = _props.handleComponentResize;


		var node = _reactDom2.default.findDOMNode(this);

		setNode(node);

		(0, _observeResize2.default)(node, function () {
			handleComponentResize(node);
		});
	},
	componentDidUpdate: function componentDidUpdate() {
		var _props2 = this.props,
		    node = _props2.node,
		    handleComponentResize = _props2.handleComponentResize;


		handleComponentResize(node);
	}
}));

exports.default = enhance(MediaGalleryList);

/***/ }),

/***/ "yCLc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__("Gu7T");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _factory = __webpack_require__("wcck");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base component used to render the containers.
 *
 * @param  {Object}        props
 * @param  {Object}        props.container
 * @param  {Object[]}      props.fields
 * @param  {React.Element} props.children
 * @return {React.Element}
 */
/**
 * The external dependencies.
 */
var ContainerBase = function ContainerBase(_ref) {
	var container = _ref.container,
	    fields = _ref.fields,
	    children = _ref.children;

	var classes = ['carbon-container', 'carbon-container-' + container.id, 'carbon-container-' + container.type].concat((0, _toConsumableArray3.default)(container.classes));

	return _react2.default.createElement(
		'div',
		{ className: (0, _classnames2.default)(classes) },
		children,
		fields.map(function (_ref2) {
			var id = _ref2.id,
			    type = _ref2.type;
			return (0, _factory2.default)(type, { id: id });
		})
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
ContainerBase.propTypes = {
	container: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		type: _propTypes2.default.string,
		classes: _propTypes2.default.arrayOf(_propTypes2.default.string)
	}),

	fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		id: _propTypes2.default.string,
		type: _propTypes2.default.string
	})),

	children: _propTypes2.default.element
};

exports.default = ContainerBase;

/***/ }),

/***/ "yLPB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Value = function (_React$Component) {
	_inherits(Value, _React$Component);

	function Value(props) {
		_classCallCheck(this, Value);

		var _this = _possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.onRemove = _this.onRemove.bind(_this);
		_this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		return _this;
	}

	_createClass(Value, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			if (event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			if (this.props.onClick) {
				event.stopPropagation();
				this.props.onClick(this.props.value, event);
				return;
			}
			if (this.props.value.href) {
				event.stopPropagation();
			}
		}
	}, {
		key: 'onRemove',
		value: function onRemove(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onRemove(this.props.value);
		}
	}, {
		key: 'handleTouchEndRemove',
		value: function handleTouchEndRemove(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.onRemove(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'renderRemoveIcon',
		value: function renderRemoveIcon() {
			if (this.props.disabled || !this.props.onRemove) return;
			return _react2.default.createElement(
				'span',
				{ className: 'Select-value-icon',
					'aria-hidden': 'true',
					onMouseDown: this.onRemove,
					onTouchEnd: this.handleTouchEndRemove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove },
				'\xD7'
			);
		}
	}, {
		key: 'renderLabel',
		value: function renderLabel() {
			var className = 'Select-value-label';
			return this.props.onClick || this.props.value.href ? _react2.default.createElement(
				'a',
				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				this.props.children
			) : _react2.default.createElement(
				'span',
				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
				this.props.children
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('Select-value', this.props.value.className),
					style: this.props.value.style,
					title: this.props.value.title
				},
				this.renderRemoveIcon(),
				this.renderLabel()
			);
		}
	}]);

	return Value;
}(_react2.default.Component);

;

Value.propTypes = {
	children: _propTypes2.default.node,
	disabled: _propTypes2.default.bool, // disabled prop passed to ReactSelect
	id: _propTypes2.default.string, // Unique id for the value - used for aria
	onClick: _propTypes2.default.func, // method to handle click on value label
	onRemove: _propTypes2.default.func, // method to handle removal of the value
	value: _propTypes2.default.object.isRequired // the option object for this value
};

exports.default = Value;

/***/ }),

/***/ "z4Sh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__("zpMW");

var _container = __webpack_require__("Mq2Y");

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__("mbsf");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("Zn/G");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.compose)((0, _recompose.setStatic)('type', _constants.TYPE_NAV_MENU_ITEM), (0, _withStore2.default)(), (0, _withSetup2.default)())(_container2.default); /**
                                                                                                                                                                                           * The external dependencies.
                                                                                                                                                                                           */

/***/ }),

/***/ "zLaU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.TextField = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _field = __webpack_require__("M6Uh");

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__("0yqe");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a text input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */


/**
 * The internal dependencies.
 */
var TextField = exports.TextField = function TextField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement('input', (0, _extends3.default)({
			type: 'text',
			id: field.id,
			name: name,
			value: field.value,
			disabled: !field.ui.is_visible,
			className: 'regular-text',
			onChange: handleChange
		}, field.attributes))
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
/**
 * The external dependencies.
 */
TextField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.string,
		attributes: _propTypes2.default.object
	}),
	handleChange: _propTypes2.default.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.compose)((0, _withStore2.default)(), (0, _withSetup2.default)(),

/**
 * The handlers passed to the component.
 */
(0, _recompose.withHandlers)({
	handleChange: function handleChange(_ref2) {
		var field = _ref2.field,
		    setFieldValue = _ref2.setFieldValue;
		return function (_ref3) {
			var value = _ref3.target.value;
			return setFieldValue(field.id, value);
		};
	}
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_TEXT])(enhance(TextField));

/***/ }),

/***/ "zMaW":
/***/ (function(module, exports, __webpack_require__) {

var insert = __webpack_require__("iiPh")
var assert = __webpack_require__("N+Om")
var isDom = __webpack_require__("CPXw")

insert('.__observe-resize__ { position: absolute; left: 0; top: -100%; width: 100%; height: 100%; margin: 1px 0 0; border: none; opacity: 0; visibility: hidden; pointer-events: none; }')

module.exports = observeResize

// Trigger a callback when an element is resized
function observeResize (el, cb) {
  assert.ok(isDom(el), 'observe-resize: el should be a valid DOM element')
  assert.equal(typeof cb, 'function', 'observe-resize: cb should be type function')

  // Make this function a noop in non-browser environments
  if (typeof window !== 'object') return

  var called = false
  var frame = document.createElement('iframe')
  frame.setAttribute('class', '__observe-resize__')
  el.appendChild(frame)

  assert.ok(frame.contentWindow, 'observe-resize: no contentWindow detected - cannot start observing')
  frame.contentWindow.onresize = handleResize

  return function stopObserving () {
    if (frame.parentNode) frame.parentNode.removeChild(frame)
  }

  function handleResize () {
    if (called) return
    called = true
    window.requestAnimationFrame(function () {
      called = false
      cb(el)
    })
  }
}


/***/ }),

/***/ "zQR9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("zQR9");

/***/ }),

/***/ "zpMW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("zpMW");

/***/ }),

/***/ "zwoO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "zxBS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__("zpMW");

var _container = __webpack_require__("Mq2Y");

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__("mbsf");

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__("Zn/G");

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.compose)((0, _recompose.setStatic)('type', _constants.TYPE_COMMENT_META), (0, _withStore2.default)(), (0, _withSetup2.default)())(_container2.default); /**
                                                                                                                                                                                          * The external dependencies.
                                                                                                                                                                                          */

/***/ })

/******/ });
//# sourceMappingURL=carbon.core.js.map