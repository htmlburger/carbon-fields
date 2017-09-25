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

var _react = __webpack_require__("U7vG");

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

var _marked = [toggleVisibility, workerSetupVisibility, workerToggleVisibility, workerCheckVisibility, workerTogglePostBox, foreman].map(_regenerator2.default.mark); /**
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
  }, _marked[0], this);
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
  }, _marked[1], this);
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
  }, _marked[2], this);
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
  }, _marked[3], this);
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
  }, _marked[4], this);
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
  }, _marked[5], this);
}

/***/ }),

/***/ "/bQp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("/bQp");

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

var _react = __webpack_require__("U7vG");

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

/***/ "0RBh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoOptions = undefined;

var _react = __webpack_require__("U7vG");

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

var _react = __webpack_require__("U7vG");

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
 * @param  {Number}        props.number
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
	var number = _ref.number,
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
				number
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
	number: _propTypes2.default.number,
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

var _react = __webpack_require__("U7vG");

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

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
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

var classof   = __webpack_require__("RY/4")
  , ITERATOR  = __webpack_require__("dSzd")('iterator')
  , Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
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

/***/ }),

/***/ "5PlU":
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__("RY/4")
  , ITERATOR  = __webpack_require__("dSzd")('iterator')
  , Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
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

var _react = __webpack_require__("U7vG");

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

/***/ "5nY2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("5nY2");

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
  var group = _ref.group;
  return {
    label: (0, _selectors.getComplexGroupLabel)(state, group)
  };
};

/**
 * The internal dependencies.
 */
exports.default = (0, _reactRedux.connect)(mapStateToProps);

/***/ }),

/***/ "77Pl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("77Pl");

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

var _react = __webpack_require__("U7vG");

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

var global    = __webpack_require__("7KvD")
  , macrotask = __webpack_require__("L42u").set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__("R9M2")(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
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

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

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
/**
 * The external dependencies.
 */
var ColorField = exports.ColorField = function ColorField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    pickerVisible = _ref.pickerVisible,
	    handleChange = _ref.handleChange,
	    showPicker = _ref.showPicker,
	    hidePicker = _ref.hidePicker,
	    clearValue = _ref.clearValue;

	var preview = field.value.length > 0 ? _react2.default.createElement('span', { className: 'carbon-color-preview', style: { backgroundColor: field.value } }) : _react2.default.createElement(
		'span',
		{ className: 'carbon-color-preview carbon-color-preview-empty' },
		_react2.default.createElement('span', { className: 'carbon-color-preview-block carbon-color-preview-empty-tl' }),
		_react2.default.createElement('span', { className: 'carbon-color-preview-block carbon-color-preview-empty-br' })
	);

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'div',
			{ className: 'carbon-color' },
			_react2.default.createElement(
				'span',
				{ className: 'pickcolor button carbon-color-button hide-if-no-js', onClick: showPicker },
				preview,
				_react2.default.createElement(
					'span',
					{ className: 'carbon-color-button-text' },
					carbonFieldsL10n.field.colorSelectColor
				)
			),
			_react2.default.createElement(_picker2.default, {
				visible: pickerVisible,
				value: field.value,
				palette: field.palette,
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
ColorField.propTypes = {
	name: _propTypes2.default.string,
	field: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		value: _propTypes2.default.string
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
			var hex = _ref3.hex;
			return setFieldValue(field.id, hex);
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

var _react = __webpack_require__("U7vG");

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

var _equality = __webpack_require__("Eql7");

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__("r/IV");

var _contain2 = _interopRequireDefault(_contain);

var _scalar = __webpack_require__("1qlA");

var _scalar2 = _interopRequireDefault(_scalar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		var comparer = this.comparers.find(function (comparer) {
			return comparer.supportsOperator(operator);
		});

		if (!comparer) {
			throw new Error('Unsupported container condition comparison operator used: ' + operator);
		}

		return comparer.evaluate(a, operator, b);
	}
}; /**
    * The internal dependencies.
    */

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

var _marked = [workerInit, workerFormSubmit, workerItemExpand, foreman].map(_regenerator2.default.mark); /**
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
	}, _marked[0], this);
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
	}, _marked[1], this);
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
	}, _marked[2], this);
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
	}, _marked[3], this);
}

/***/ }),

/***/ "9bBU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mClu");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function defineProperty(it, key, desc){
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

var _react = __webpack_require__("U7vG");

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

var _marked = [validate, workerValidate, workerValidateAll, foreman].map(_regenerator2.default.mark); /**
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
	}, _marked[0], this, [[10, 21, 25, 33], [26,, 28, 32]]);
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
	}, _marked[1], this);
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
	}, _marked[2], this);
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
	}, _marked[3], this);
}

/***/ }),

/***/ "Ars9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("Ars9");

/***/ }),

/***/ "B3Oe":
/***/ (function(module, exports) {

(function() { module.exports = this["carbon.vendor"]; }());

/***/ }),

/***/ "BO1k":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("fxRn"), __esModule: true };

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

var LIBRARY            = __webpack_require__("O4g8")
  , global             = __webpack_require__("7KvD")
  , ctx                = __webpack_require__("+ZMJ")
  , classof            = __webpack_require__("RY/4")
  , $export            = __webpack_require__("kM2E")
  , isObject           = __webpack_require__("EqjI")
  , aFunction          = __webpack_require__("lOnJ")
  , anInstance         = __webpack_require__("2KxR")
  , forOf              = __webpack_require__("NWt+")
  , speciesConstructor = __webpack_require__("t8x9")
  , task               = __webpack_require__("L42u").set
  , microtask          = __webpack_require__("82Mu")()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__("dSzd")('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
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
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__("e6n0")($Promise, PROMISE);
__webpack_require__("bRrM")(PROMISE);
Wrapper = __webpack_require__("FeBl")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("dY0y")(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

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

var _react = __webpack_require__("U7vG");

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

/***/ "ET0f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EditAttachment = undefined;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__("U7vG");

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

/***/ "F19T":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactServerBatchingStrategy = {
  isBatchingUpdates: false,
  batchedUpdates: function (callback) {
    // Don't do anything here. During the server rendering we don't want to
    // schedule any updates. We will simply ignore them.
  }
};

module.exports = ReactServerBatchingStrategy;

/***/ }),

/***/ "FeBl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("FeBl");

/***/ }),

/***/ "G1ow":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("G1ow");

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

var _marked = [workerRaiseFieldUpdatedApiEvent, userValidateField, foreman].map(_regenerator2.default.mark); /**
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
  }, _marked[0], this);
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
  }, _marked[1], this);
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
  }, _marked[2], this);
}

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

/***/ "GzQT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */


var _prodInvariant = __webpack_require__("gIDI");

var React = __webpack_require__("G1ow");
var ReactDOMContainerInfo = __webpack_require__("H24R");
var ReactDefaultBatchingStrategy = __webpack_require__("vdcO");
var ReactInstrumentation = __webpack_require__("Veu9");
var ReactMarkupChecksum = __webpack_require__("SzO/");
var ReactReconciler = __webpack_require__("xWyi");
var ReactServerBatchingStrategy = __webpack_require__("F19T");
var ReactServerRenderingTransaction = __webpack_require__("P4HO");
var ReactUpdates = __webpack_require__("vg0m");

var emptyObject = __webpack_require__("TJez");
var instantiateReactComponent = __webpack_require__("5nY2");
var invariant = __webpack_require__("cxPT");

var pendingTransactions = 0;

/**
 * @param {ReactElement} element
 * @return {string} the HTML markup
 */
function renderToStringImpl(element, makeStaticMarkup) {
  var transaction;
  try {
    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

    transaction = ReactServerRenderingTransaction.getPooled(makeStaticMarkup);

    pendingTransactions++;

    return transaction.perform(function () {
      var componentInstance = instantiateReactComponent(element, true);
      var markup = ReactReconciler.mountComponent(componentInstance, transaction, null, ReactDOMContainerInfo(), emptyObject, 0 /* parentDebugID */
      );
      if (true) {
        ReactInstrumentation.debugTool.onUnmountComponent(componentInstance._debugID);
      }
      if (!makeStaticMarkup) {
        markup = ReactMarkupChecksum.addChecksumToMarkup(markup);
      }
      return markup;
    }, null);
  } finally {
    pendingTransactions--;
    ReactServerRenderingTransaction.release(transaction);
    // Revert to the DOM batching strategy since these two renderers
    // currently share these stateful modules.
    if (!pendingTransactions) {
      ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
    }
  }
}

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostring
 */
function renderToString(element) {
  !React.isValidElement(element) ?  true ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : _prodInvariant('46') : void 0;
  return renderToStringImpl(element, false);
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  !React.isValidElement(element) ?  true ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : _prodInvariant('47') : void 0;
  return renderToStringImpl(element, true);
}

module.exports = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup
};

/***/ }),

/***/ "H24R":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("H24R");

/***/ }),

/***/ "H4aE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhance = exports.ComplexActions = undefined;

var _react = __webpack_require__("U7vG");

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
 * @param  {String}        props.buttonText
 * @param  {React.Element} props.children
 * @param  {Function}      props.handleClick
 * @return {React.Element}
 */
/**
 * The external dependencies.
 */
var ComplexActions = exports.ComplexActions = function ComplexActions(_ref) {
  var buttonText = _ref.buttonText,
      children = _ref.children,
      handleClick = _ref.handleClick;

  return _react2.default.createElement(
    'div',
    { className: 'carbon-actions' },
    _react2.default.createElement(
      'div',
      { className: 'carbon-button' },
      _react2.default.createElement(
        'a',
        { href: '#', className: 'button', onClick: handleClick },
        buttonText
      ),
      children
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
  buttonText: _propTypes2.default.string,
  onButtonClick: _propTypes2.default.func,
  children: _propTypes2.default.element
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
var enhance = exports.enhance = (0, _recompose.withHandlers)({
  handleClick: function handleClick(_ref2) {
    var onButtonClick = _ref2.onButtonClick;
    return (0, _helpers.preventDefault)(function () {
      return onButtonClick();
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

var _marked = [workerGeocoder, foreman].map(_regenerator2.default.mark); /**
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
	}, _marked[0], this, [[12, 21]]);
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
	}, _marked[1], this);
}

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

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__("pqdH");

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

/***/ "KSGD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("KSGD");

/***/ }),

/***/ "Kh5d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__("sB3e")
  , $getPrototypeOf = __webpack_require__("PzxK");

__webpack_require__("uqUo")('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),

/***/ "L42u":
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__("+ZMJ")
  , invoke             = __webpack_require__("knuC")
  , html               = __webpack_require__("RPLV")
  , cel                = __webpack_require__("ON07")
  , global             = __webpack_require__("7KvD")
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__("R9M2")(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
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

var _react = __webpack_require__("U7vG");

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

/***/ "MU5D":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("MU5D");

/***/ }),

/***/ "Mhyx":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__("/bQp")
  , ITERATOR   = __webpack_require__("dSzd")('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ "Mq2Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("U7vG");

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

var _react = __webpack_require__("U7vG");

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
			return title.toLowerCase().includes(term.toLowerCase());
		});
	}

	if (!field.duplicates_allowed) {
		items = items.map(function (item) {
			item.disabled = !!field.value.find(function (selectedItem) {
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

var _react = __webpack_require__("U7vG");

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

var _react = __webpack_require__("U7vG");

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

	if (field.type === 'image') {
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

var ctx         = __webpack_require__("+ZMJ")
  , call        = __webpack_require__("msXi")
  , isArrayIter = __webpack_require__("Mhyx")
  , anObject    = __webpack_require__("77Pl")
  , toLength    = __webpack_require__("QRG4")
  , getIterFn   = __webpack_require__("3fs2")
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
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
 * @param  {Array}   a
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
      return a.includes(b);
    case '!=':
      return !a.includes(b);
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

/***/ "P4HO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("P4HO");

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
				for (var i = field.value.length - 1; i >= 0; i--) {
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

var _marked = [workerAddSidebar, foreman].map(_regenerator2.default.mark); /**
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
  }, _marked[0], this, [[0, 8]]);
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
  }, _marked[1], this);
}

/***/ }),

/***/ "R4wc":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("kM2E");

$export($export.S + $export.F, 'Object', {assign: __webpack_require__("To3L")});

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

var _react = __webpack_require__("U7vG");

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
						option.name
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
		options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
			value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
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
var cof = __webpack_require__("R9M2")
  , TAG = __webpack_require__("dSzd")('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
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

var _react = __webpack_require__("U7vG");

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

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

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
/**
 * The external dependencies.
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

	var options = (0, _extends3.default)({}, field.picker_options, {
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

var _react = __webpack_require__("U7vG");

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
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
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

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
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
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "SzO/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("SzO/");

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

var _react = __webpack_require__("U7vG");

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
	    handlePopoverClose = _ref.handlePopoverClose,
	    handleTabClick = _ref.handleTabClick,
	    handleAddGroupClick = _ref.handleAddGroupClick,
	    handleCloneGroupClick = _ref.handleCloneGroupClick,
	    handleRemoveGroupClick = _ref.handleRemoveGroupClick,
	    handleGroupExpand = _ref.handleGroupExpand,
	    handleGroupCollapse = _ref.handleGroupCollapse,
	    handleSort = _ref.handleSort;

	var availableGroups = (0, _lodash.filter)(field.group_types, function (groupType) {
		return (0, _lodash.includes)(enabledGroupTypes, groupType.name);
	});
	var complexTabActions = (0, _lodash.isEmpty)(availableGroups) ? null : _react2.default.createElement(
		_actions2.default,
		{
			buttonText: '+',
			onButtonClick: handleAddGroupClick },
		_react2.default.createElement(_popover2.default, {
			groups: availableGroups,
			visible: popoverVisible,
			onItemClick: handleAddGroupClick,
			onClose: handlePopoverClose,
			outsideClickIgnoreClass: 'carbon-button' })
	);
	var complexButtonActions = (0, _lodash.isEmpty)(availableGroups) ? null : _react2.default.createElement(
		_actions2.default,
		{
			buttonText: carbonFieldsL10n.field.complexAddButton.replace('%s', field.labels.singular_name),
			onButtonClick: handleAddGroupClick },
		_react2.default.createElement(_popover2.default, {
			groups: availableGroups,
			visible: popoverVisible,
			onItemClick: handleAddGroupClick,
			onClose: handlePopoverClose,
			outsideClickIgnoreClass: 'carbon-button' })
	);

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
						complexTabActions
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
								cloneEnabled: field.duplicate_groups_allowed,
								onClone: handleCloneGroupClick,
								onRemove: handleRemoveGroupClick,
								onExpand: handleGroupExpand,
								onCollapse: handleGroupCollapse });
						})
					)
				)
			),
			complexButtonActions
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

	return {
		sortableTabsOptions: sortableTabsOptions,
		sortableGroupsOptions: sortableGroupsOptions,
		enabledGroupTypes: enabledGroupTypes
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

	handleSort: function handleSort(_ref11) {
		var field = _ref11.field,
		    setFieldValue = _ref11.setFieldValue,
		    expandComplexGroup = _ref11.expandComplexGroup;
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

var _react = __webpack_require__("U7vG");

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
var getKeys  = __webpack_require__("lktj")
  , gOPS     = __webpack_require__("1kS7")
  , pIE      = __webpack_require__("NpIQ")
  , toObject = __webpack_require__("sB3e")
  , IObject  = __webpack_require__("MU5D")
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("S82l")(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),

/***/ "U5ju":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("M6a0");
__webpack_require__("zQR9");
__webpack_require__("+tPU");
__webpack_require__("CXw9");
module.exports = __webpack_require__("FeBl").Promise;

/***/ }),

/***/ "U7vG":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("U7vG");

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

var _actions = __webpack_require__("vVye");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [foreman].map(_regenerator2.default.mark); /**
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
            _context.next = 14;
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
          _context.next = 3;
          break;

        case 14:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
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
	"./sagas/nav-menu.js": "9FSX",
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

/***/ "Veu9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("Veu9");

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
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("W2nU");

/***/ }),

/***/ "WkB4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhance = exports.HtmlField = undefined;

var _react = __webpack_require__("U7vG");

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

var _marked = [workerValidate, workerSetup, foreman].map(_regenerator2.default.mark); /**
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
	}, _marked[0], this);
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
	}, _marked[1], this);
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
	}, _marked[2], this);
}

/***/ }),

/***/ "Xd32":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+tPU");
__webpack_require__("zQR9");
module.exports = __webpack_require__("5PlU");

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

var _marked = [foreman].map(_regenerator2.default.mark); /**
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
	}, _marked[0], this);
}

/***/ }),

/***/ "Yobk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("Yobk");

/***/ }),

/***/ "Z+Wa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = undefined;

var _react = __webpack_require__("U7vG");

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
			return { name: name, value: id };
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
var getComplexGroupLabel = exports.getComplexGroupLabel = function getComplexGroupLabel(state, group) {
	if ((0, _lodash.isNull)(group.label_template)) {
		return group.label;
	}

	var fields = (0, _lodash.pick)(getFields(state), (0, _lodash.map)(group.fields, 'id'));
	var fieldValues = (0, _lodash.mapValues)((0, _lodash.mapKeys)(fields, function (v, k) {
		return v.base_name.replace(/\-/g, '_');
	}), 'value');

	try {
		return (0, _lodash.template)(group.label_template)((0, _extends3.default)({
			fields: fields
		}, fieldValues));
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
var isObject = __webpack_require__("EqjI")
  , anObject = __webpack_require__("77Pl");
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__("+ZMJ")(Function.call, __webpack_require__("LKZe").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
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

var _react = __webpack_require__("U7vG");

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

/***/ "ag9w":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("ag9w");

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

var _react = __webpack_require__("U7vG");

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

var _react = __webpack_require__("U7vG");

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
					number: index + 1,
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

var global      = __webpack_require__("7KvD")
  , core        = __webpack_require__("FeBl")
  , dP          = __webpack_require__("evD5")
  , DESCRIPTORS = __webpack_require__("+E39")
  , SPECIES     = __webpack_require__("dSzd")('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
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

var _react = __webpack_require__("U7vG");

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
						option.name
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
			name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
			value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
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
			return field.value.indexOf(String(option.value)) > -1;
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

var _marked = [workerSyncTermLevel, workerSyncTermAncestors, workerReset, workerFormSubmit, foreman].map(_regenerator2.default.mark); /**
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
					_loop = _regenerator2.default.mark(function _loop() {
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
	}, _marked[0], this);
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
					_loop2 = _regenerator2.default.mark(function _loop2() {
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
	}, _marked[1], this);
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

					if (!(!settings.data.includes('carbon_panel') || data.querySelector('wp_error'))) {
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
	}, _marked[2], this);
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
						_context6.next = 14;
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
					_context6.next = 3;
					break;

				case 14:
				case 'end':
					return _context6.stop();
			}
		}
	}, _marked[3], this);
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
	}, _marked[4], this);
}

/***/ }),

/***/ "dSzd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("dSzd");

/***/ }),

/***/ "dY0y":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__("dSzd")('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
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

			if (compare === 'IN') {
				compare = '=';
				method = 'some';
			} else if (compare === 'NOT IN') {
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

exports.workerAddedOrUpdatedEvent = workerAddedOrUpdatedEvent;
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

var _actions = __webpack_require__("vVye");

var _selectors = __webpack_require__("pL4W");

var _actions2 = __webpack_require__("HRbf");

var _selectors2 = __webpack_require__("ZMHW");

var _constants2 = __webpack_require__("8Hlw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [workerAddedOrUpdatedEvent, workerDestroyContainer, workerFormSubmit, workerToggleWidget, foreman].map(_regenerator2.default.mark); /**
                                                                                                                                                   * The external dependencies.
                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var carbonWidgetIdPrefix = 'carbon_fields_';
var carbonWidgetContainerIdPrefix = 'carbon_fields_container_';

function widgetIdToContainerId(widgetId) {
	return carbonWidgetContainerIdPrefix + widgetId;
}

function getWidgetId(widget) {
	var widgetId = (0, _jquery2.default)(widget).find('[name="widget-id"]').val();
	return widgetId;
}

/**
 * Re-init the container when the widget is created/saved.
 *
 * @return {void}
 */
function workerAddedOrUpdatedEvent() {
	var pagenow, channel, _ref, event, widget, container, widgetId, containerId, widgetInstance;

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
						_context.next = 25;
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
					return (0, _effects.put)((0, _actions.receiveContainer)(container, true));

				case 15:
					if (!(pagenow === _constants.PAGE_NOW_CUSTOMIZE && event.type === 'widget-added')) {
						_context.next = 23;
						break;
					}

					(0, _jquery2.default)(widget).find('[name="savewidget"]').off('click').show().end().find('.widget-content:first').off('keydown', 'input').off('change input propertychange', ':input');

					widgetId = getWidgetId(widget);
					containerId = widgetIdToContainerId(widgetId);
					_context.next = 21;
					return (0, _effects.call)(wp.customize.Widgets.getWidgetFormControlForWidget, containerId);

				case 21:
					widgetInstance = _context.sent;


					// Change the flag for 'live mode' so we can receive proper `widget-updated` events.
					widgetInstance.liveUpdateMode = false;

				case 23:
					_context.next = 4;
					break;

				case 25:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
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
	var channel, _ref2, data, widgetId, containerId, container, fieldsIds;

	return _regenerator2.default.wrap(function workerDestroyContainer$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.call)(_events.createAjaxChannel, ajaxEvent, ajaxAction);

				case 2:
					channel = _context2.sent;

				case 3:
					if (false) {
						_context2.next = 27;
						break;
					}

					_context2.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref2 = _context2.sent;
					data = _ref2.settings.data;
					widgetId = data.match(/widget-id=(.+?)\&/)[1];
					containerId = widgetIdToContainerId(widgetId);

					// Don't care about other widgets.

					if ((0, _lodash.startsWith)(widgetId, carbonWidgetIdPrefix)) {
						_context2.next = 12;
						break;
					}

					return _context2.abrupt('continue', 3);

				case 12:

					// Remove the current instance from DOM.
					_reactDom2.default.unmountComponentAtNode(document.querySelector('.container-' + containerId));

					// Get the container from the store.
					_context2.next = 15;
					return (0, _effects.select)(_selectors.getContainerById, containerId);

				case 15:
					container = _context2.sent;

					if (container) {
						_context2.next = 18;
						break;
					}

					return _context2.abrupt('continue', 3);

				case 18:
					_context2.next = 20;
					return (0, _effects.select)(_selectors2.getFieldsByRoots, container.fields);

				case 20:
					fieldsIds = _context2.sent;
					_context2.next = 23;
					return (0, _effects.put)((0, _actions.removeContainer)(containerId));

				case 23:
					_context2.next = 25;
					return (0, _effects.put)((0, _actions2.removeFields)(fieldsIds));

				case 25:
					_context2.next = 3;
					break;

				case 27:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked[1], this);
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
function workerFormSubmit() {
	var pagenow, channel, _ref3, _event, widgetId, containerId, _widget;

	return _regenerator2.default.wrap(function workerFormSubmit$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					pagenow = window.carbon_json.pagenow;
					_context3.next = 3;
					return (0, _effects.call)(_events.createClickChannel, '.widgets-php, .wp-customizer', '[name="savewidget"]');

				case 3:
					channel = _context3.sent;

				case 4:
					if (false) {
						_context3.next = 31;
						break;
					}

					_context3.next = 7;
					return (0, _effects.take)(channel);

				case 7:
					_ref3 = _context3.sent;
					_event = _ref3.event;
					widgetId = getWidgetId((0, _jquery2.default)(_event.target).closest('.widget-inside').get(0));
					containerId = widgetIdToContainerId(widgetId);

					// Don't care about other widgets.

					if ((0, _lodash.startsWith)(widgetId, carbonWidgetIdPrefix)) {
						_context3.next = 13;
						break;
					}

					return _context3.abrupt('continue', 4);

				case 13:
					_context3.next = 15;
					return (0, _effects.put)((0, _actions.submitForm)(_event));

				case 15:
					_context3.next = 17;
					return (0, _effects.put)((0, _actions.validateContainer)(containerId, _event));

				case 17:
					if (!(pagenow === _constants.PAGE_NOW_CUSTOMIZE)) {
						_context3.next = 29;
						break;
					}

					_event.preventDefault();

					// This little delay allows us to get correct results in the selector for invalid fields
					// since we don't know when the validation is completed.
					_context3.next = 21;
					return (0, _effects.call)(_reduxSaga.delay, 250);

				case 21:
					_context3.next = 23;
					return (0, _effects.select)(_selectors2.hasInvalidFields);

				case 23:
					if (_context3.sent) {
						_context3.next = 29;
						break;
					}

					_context3.next = 26;
					return (0, _effects.call)(wp.customize.Widgets.getWidgetFormControlForWidget, containerId);

				case 26:
					_widget = _context3.sent;
					_context3.next = 29;
					return (0, _effects.call)([_widget, _widget.updateWidget], { disable_form: true });

				case 29:
					_context3.next = 4;
					break;

				case 31:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked[2], this);
}

/**
 * Notify everyone that the widget is expanded or collapsed.
 *
 * @return {void}
 */
function workerToggleWidget() {
	var channel, _ref4, _event2, $widget, widgetId, containerId;

	return _regenerator2.default.wrap(function workerToggleWidget$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					_context4.next = 2;
					return (0, _effects.call)(_events.createClickChannel, '.widget-top');

				case 2:
					channel = _context4.sent;

				case 3:
					if (false) {
						_context4.next = 19;
						break;
					}

					_context4.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref4 = _context4.sent;
					_event2 = _ref4.event;
					$widget = (0, _jquery2.default)(_event2.target).closest('.widget');
					widgetId = getWidgetId($widget.get(0));
					containerId = widgetIdToContainerId(widgetId);

					// Don't care about other widgets.

					if ((0, _lodash.startsWith)(widgetId, carbonWidgetIdPrefix)) {
						_context4.next = 13;
						break;
					}

					return _context4.abrupt('continue', 3);

				case 13:
					_context4.next = 15;
					return (0, _effects.call)(_reduxSaga.delay, 100);

				case 15:
					_context4.next = 17;
					return (0, _effects.put)((0, _actions.toggleContainerBox)(containerId, $widget.hasClass('open')));

				case 17:
					_context4.next = 3;
					break;

				case 19:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked[3], this);
}

/**
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
	var pagenow, workers;
	return _regenerator2.default.wrap(function foreman$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					pagenow = window.carbon_json.pagenow;

					if (!(pagenow !== _constants.PAGE_NOW_WIDGETS && pagenow !== _constants.PAGE_NOW_CUSTOMIZE)) {
						_context5.next = 3;
						break;
					}

					return _context5.abrupt('return');

				case 3:
					workers = [(0, _effects.call)(workerAddedOrUpdatedEvent), (0, _effects.call)(workerToggleWidget), (0, _effects.call)(workerFormSubmit)];


					if (pagenow === _constants.PAGE_NOW_WIDGETS) {
						workers.push((0, _effects.call)(workerDestroyContainer, 'ajaxSend', 'save-widget'));
					}

					if (pagenow === _constants.PAGE_NOW_CUSTOMIZE) {
						workers.push((0, _effects.call)(workerDestroyContainer, 'ajaxSend', 'update-widget'));
					}

					_context5.next = 8;
					return (0, _effects.all)(workers);

				case 8:
				case 'end':
					return _context5.stop();
			}
		}
	}, _marked[4], this);
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
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__("ZaQb").set});

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

	if (collection.relation === 'AND') {
		return results.every(Boolean);
	} else if (collection.relation === 'OR') {
		return results.some(Boolean);
	}

	throw new Error('Unsupported container condition relation used: ' + collection.relation);
}

exports.default = conditions;

/***/ }),

/***/ "fBQ2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("evD5")
  , createDesc      = __webpack_require__("X8DO");

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
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

var _react = __webpack_require__("U7vG");

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

						editor.on('blur', function () {
							onChange(editor.getContent());
						});

						_this3.cancelResizeObserver = (0, _observeResize2.default)(_this3.node, (0, _lodash.debounce)(function () {
							_this3.editor.execCommand('mceAutoResize');
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

var anObject = __webpack_require__("77Pl")
  , get      = __webpack_require__("3fs2");
module.exports = __webpack_require__("FeBl").getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),

/***/ "gIDI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("gIDI");

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

var _react = __webpack_require__("U7vG");

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

var _react = __webpack_require__("U7vG");

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

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.preventDefault = preventDefault;
exports.autoload = autoload;
exports.cancelTasks = cancelTasks;
exports.patchTagBoxAPI = patchTagBoxAPI;
exports.getSelectOptionLevel = getSelectOptionLevel;
exports.getSelectOptionAncestors = getSelectOptionAncestors;

var _jquery = __webpack_require__("0iPh");

var _jquery2 = _interopRequireDefault(_jquery);

var _effects = __webpack_require__("egdi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [cancelTasks].map(_regenerator2.default.mark); /**
                                                              * The external dependencies.
                                                              */


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
					return tasks.map(function (task) {
						return (0, _effects.cancel)(task);
					});

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
	}, _marked[0], this);
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
 * Get select option's level based on its className
 *
 * @param  {Object} option
 * @return {Number}
 */
function getSelectOptionLevel(option) {
	var level = 1;

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

var _marked = [workerReceiveContainer, workerSyncHash, foreman].map(_regenerator2.default.mark); /**
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
  }, _marked[0], this);
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
  }, _marked[1], this);
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
  }, _marked[2], this);
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

var _marked = [prepareValueForField, prepareValueForFileField, prepareValueForMediaGalleryField, workerAddMultipleFiles, redrawAttachmentPreview, workerRedrawAttachmentPreview, workerOpenMediaBrowser, workerSetupMediaBrowser, foreman].map(_regenerator2.default.mark); /**
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
	}, _marked[0], this);
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
	}, _marked[1], this);
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
	}, _marked[2], this);
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
	}, _marked[3], this);
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
	}, _marked[4], this);
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
	}, _marked[5], this);
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

						// For File field, the media should display
						// the currently selected element

						if (type === _constants.TYPE_IMAGE || type === _constants.TYPE_FILE) {
							var attachment = value ? window.wp.media.attachment(value) : null;
							browser.state().get('selection').set(attachment ? [attachment] : []);
						}

						if (type === _constants.TYPE_MEDIA_GALLERY) {
							if (selected) {
								var _attachment = window.wp.media.attachment(selected);
								browser.state().get('selection').set(_attachment ? [_attachment] : []);
							} else {
								browser.state().get('selection').set([]);
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
	}, _marked[6], this);
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


					if (type === 'image') {
						mediaBrowserTitle = carbonFieldsL10n.field.imageBrowserTitle;
						mediaBrowserButtonLabel = carbonFieldsL10n.field.imageBrowserButtonLabel;
					} else if (type === 'file') {
						mediaBrowserTitle = carbonFieldsL10n.field.fileBrowserTitle;
						mediaBrowserButtonLabel = carbonFieldsL10n.field.fileBrowserButtonLabel;
					} else if (type === 'media_gallery') {
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
	}, _marked[7], this);
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
	}, _marked[8], this);
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

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "kM2E":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("kM2E");

/***/ }),

/***/ "kiBT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("i/C/"), __esModule: true };

/***/ }),

/***/ "knuC":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
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
  } return              fn.apply(that, args);
};

/***/ }),

/***/ "lOnJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("lOnJ");

/***/ }),

/***/ "lVTZ":
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

var _selectors = __webpack_require__("pL4W");

var _actions = __webpack_require__("vVye");

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [workerStickyPanel, workerFormSubmit, foreman].map(_regenerator2.default.mark); /**
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
	}, _marked[0], this);
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
					return (0, _effects.call)(_events.createSubmitChannel, 'form#theme-options-form');

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
	}, _marked[1], this);
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
function foreman(store) {
	var containers;
	return _regenerator2.default.wrap(function foreman$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.select)(_selectors.getContainersByType, _constants.TYPE_THEME_OPTIONS);

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
					return (0, _effects.fork)(workerFormSubmit);

				case 9:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked[2], this);
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

var _react = __webpack_require__("U7vG");

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
							_react2.default.createElement('img', { src: option.name })
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
		options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
			value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
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

/***/ "mClu":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("kM2E");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("+E39"), 'Object', {defineProperty: __webpack_require__("evD5").f});

/***/ }),

/***/ "mJoy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.Colorpicker = undefined;

var _react = __webpack_require__("U7vG");

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
			disableAlpha: true,
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
	value: _propTypes2.default.string,
	palette: _propTypes2.default.arrayOf(_propTypes2.default.string),
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
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [workerValidate, workerConditionalLogic, foreman].map(_regenerator2.default.mark); /**
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

	var _field$conditional_lo, relation, rules, results, valid, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, rule, _field;

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
						_context.next = 26;
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
					return _context.abrupt('continue', 23);

				case 18:
					_context.t0 = results;
					_context.next = 21;
					return (0, _effects.call)(compare, _field.value, rule.value, rule.compare);

				case 21:
					_context.t1 = _context.sent;

					_context.t0.push.call(_context.t0, _context.t1);

				case 23:
					_iteratorNormalCompletion = true;
					_context.next = 10;
					break;

				case 26:
					_context.next = 32;
					break;

				case 28:
					_context.prev = 28;
					_context.t2 = _context['catch'](8);
					_didIteratorError = true;
					_iteratorError = _context.t2;

				case 32:
					_context.prev = 32;
					_context.prev = 33;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 35:
					_context.prev = 35;

					if (!_didIteratorError) {
						_context.next = 38;
						break;
					}

					throw _iteratorError;

				case 38:
					return _context.finish(35);

				case 39:
					return _context.finish(32);

				case 40:
					_context.t3 = relation;
					_context.next = _context.t3 === 'AND' ? 43 : _context.t3 === 'OR' ? 45 : 47;
					break;

				case 43:
					valid = (0, _lodash.every)(results);
					return _context.abrupt('break', 47);

				case 45:
					valid = (0, _lodash.some)(results);
					return _context.abrupt('break', 47);

				case 47:
					_context.next = 49;
					return (0, _effects.put)((0, _actions.setUI)(field.id, {
						is_visible: valid
					}));

				case 49:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[8, 28, 32, 40], [33,, 35, 39]]);
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
	}, _marked[1], this);
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
	}, _marked[2], this);
}

/***/ }),

/***/ "oM7Q":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("sF+V");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
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

var _react = __webpack_require__("U7vG");

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
			return tab.includes(name);
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
exports.getVisibleContainers = exports.getContainersByType = exports.getContainerById = exports.getContainers = undefined;

var _lodash = __webpack_require__("M4fF");

/**
 * Get all containers.
 *
 * @param  {Object} state
 * @return {Object}
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
/**
 * The external dependencies.
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

var _marked = [stopSaga].map(_regenerator2.default.mark); /**
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

	// Add a pointer to the container to which belongs the field.
	if (parentType === _constants.PARENT_TYPE_CONTAINER) {
		field.container_id = parent.id;
	} else {
		field.container_id = parent.container_id;
	}

	// Convert the value of the field, because React
	// doesn't likes inputs with null values.
	if ((0, _lodash.isNull)(field.value)) {
		field.value = '';
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
	}, _marked[0], this);
}

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

/***/ "pqdH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("xzsA");


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

var _react = __webpack_require__("U7vG");

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

/***/ "qyJz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__("+ZMJ")
  , $export        = __webpack_require__("kM2E")
  , toObject       = __webpack_require__("sB3e")
  , call           = __webpack_require__("msXi")
  , isArrayIter    = __webpack_require__("Mhyx")
  , toLength       = __webpack_require__("QRG4")
  , createProperty = __webpack_require__("fBQ2")
  , getIterFn      = __webpack_require__("3fs2");

$export($export.S + $export.F * !__webpack_require__("dY0y")(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
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

var $export = __webpack_require__("kM2E")
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__("Yobk")});

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

var _react = __webpack_require__("U7vG");

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

var _react = __webpack_require__("U7vG");

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
var anObject  = __webpack_require__("77Pl")
  , aFunction = __webpack_require__("lOnJ")
  , SPECIES   = __webpack_require__("dSzd")('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
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

var _react = __webpack_require__("U7vG");

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

/***/ "tfak":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.RichTextField = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("U7vG");

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
var $export = __webpack_require__("kM2E")
  , core    = __webpack_require__("FeBl")
  , fails   = __webpack_require__("S82l");
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),

/***/ "us/S":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Xd32"), __esModule: true };

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

var _marked = [syncStore, workerSyncPostTemplate, workerSyncPostAncestors, workerSyncPostFormat, setupSyncTerms, workerSyncHierarchicalTerms, workerSyncNonHierarchicalTerms, workerFormSubmit, foreman].map(_regenerator2.default.mark); /**
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
	}, _marked[0], this);
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
	}, _marked[1], this);
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
	}, _marked[2], this);
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
	}, _marked[3], this);
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
	}, _marked[4], this, [[4, 15, 19, 27], [20,, 22, 26]]);
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
	}, _marked[5], this);
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
	}, _marked[6], this);
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
function workerFormSubmit() {
	var channel, _ref6, event;

	return _regenerator2.default.wrap(function workerFormSubmit$(_context8) {
		while (1) {
			switch (_context8.prev = _context8.next) {
				case 0:
					_context8.next = 2;
					return (0, _effects.call)(_events.createSubmitChannel, ':not(.comment-php) form#post');

				case 2:
					channel = _context8.sent;

				case 3:
					if (false) {
						_context8.next = 14;
						break;
					}

					_context8.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref6 = _context8.sent;
					event = _ref6.event;
					_context8.next = 10;
					return (0, _effects.put)((0, _actions2.submitForm)(event));

				case 10:
					_context8.next = 12;
					return (0, _effects.put)((0, _actions2.validateAllContainers)(event));

				case 12:
					_context8.next = 3;
					break;

				case 14:
				case 'end':
					return _context8.stop();
			}
		}
	}, _marked[7], this);
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
function foreman() {
	var containers;
	return _regenerator2.default.wrap(function foreman$(_context9) {
		while (1) {
			switch (_context9.prev = _context9.next) {
				case 0:
					_context9.next = 2;
					return (0, _effects.select)(_selectors.getContainersByType, _constants.TYPE_POST_META);

				case 2:
					containers = _context9.sent;

					if (!(0, _lodash.isEmpty)(containers)) {
						_context9.next = 5;
						break;
					}

					return _context9.abrupt('return');

				case 5:
					_context9.next = 7;
					return (0, _effects.take)(_actions.ready);

				case 7:
					_context9.next = 9;
					return (0, _effects.fork)(workerSyncPostTemplate, containers);

				case 9:
					_context9.next = 11;
					return (0, _effects.fork)(workerSyncPostAncestors, containers);

				case 11:
					_context9.next = 13;
					return (0, _effects.fork)(workerSyncPostFormat, containers);

				case 13:
					_context9.next = 15;
					return (0, _effects.fork)(setupSyncTerms, containers, 'taxonomy-', workerSyncHierarchicalTerms);

				case 15:
					_context9.next = 17;
					return (0, _effects.fork)(setupSyncTerms, containers, 'tagsdiv-', workerSyncNonHierarchicalTerms);

				case 17:
					_context9.next = 19;
					return (0, _effects.fork)(workerFormSubmit);

				case 19:
				case 'end':
					return _context9.stop();
			}
		}
	}, _marked[8], this);
}

/***/ }),

/***/ "vdcO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("vdcO");

/***/ }),

/***/ "vg0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("vg0m");

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

var _events = __webpack_require__("x1uS");

var _actions2 = __webpack_require__("vVye");

var _selectors = __webpack_require__("pL4W");

var _constants = __webpack_require__("5B/B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [workerSyncUserRole, workerFormSubmit, foreman].map(_regenerator2.default.mark); /**
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
					_loop = _regenerator2.default.mark(function _loop() {
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
	}, _marked[0], this, [[3,, 9, 18]]);
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
						_context3.next = 14;
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
					_context3.next = 3;
					break;

				case 14:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked[1], this);
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
	}, _marked[2], this);
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

var _react = __webpack_require__("U7vG");

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

var _react = __webpack_require__("U7vG");

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
			(0, _jquery2.default)(document).off('widget-added widget-updated', handler);
		};

		// Setup the subscription.
		(0, _jquery2.default)(document).on('widget-added widget-updated', handler);

		return unsubscribe;
	}, _reduxSaga.buffers.fixed(1));
}

/***/ }),

/***/ "xH/j":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("hJx8");
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),

/***/ "xWyi":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("B3Oe"))("xWyi");

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

var _marked = [workerAddOrCloneComplexGroup, workerRemoveComplexGroup, workerDuplicateComplexGroups, markRichTextFieldsAsDragged, workerToggleRichTextEditors, foreman].map(_regenerator2.default.mark); /**
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
	}, _marked[0], this);
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
	}, _marked[1], this);
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
	}, _marked[2], this);
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
	}, _marked[3], this, [[3, 14, 18, 26], [19,, 21, 25]]);
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
	}, _marked[4], this);
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
	}, _marked[5], this);
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

var _react = __webpack_require__("U7vG");

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
				var name = _ref2.name,
				    value = _ref2.value;

				return _react2.default.createElement(
					'option',
					{ key: index, value: value },
					name
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
		value: _propTypes2.default.any,
		options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
			value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
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

var _react = __webpack_require__("U7vG");

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
				var name = _ref2.name,
				    value = _ref2.value;
				return _react2.default.createElement(
					'option',
					{ key: index, value: value },
					name
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

			if (value === 'new') {
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

/***/ "xzsA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactDefaultInjection = __webpack_require__("ag9w");
var ReactServerRendering = __webpack_require__("GzQT");
var ReactVersion = __webpack_require__("Ars9");

ReactDefaultInjection.inject();

var ReactDOMServer = {
  renderToString: ReactServerRendering.renderToString,
  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
  version: ReactVersion
};

module.exports = ReactDOMServer;

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

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__("zpMW");

var _lodash = __webpack_require__("M4fF");

var _withSetup = __webpack_require__("8ctJ");

var _withSetup2 = _interopRequireDefault(_withSetup);

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
		_react2.default.createElement(
			_sortableList2.default,
			{ options: sortableOptions, onSort: onSort },
			items.length > 0 ? _react2.default.createElement(
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
			) : _react2.default.createElement(
				'div',
				{ className: 'carbon-media-gallery-no-files' },
				_react2.default.createElement(
					'p',
					null,
					carbonFieldsL10n.field.mediaGalleryNoFiles
				)
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
 * The internal dependencies.
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
	handleComponentResize: function handleComponentResize(_ref2) {
		var field = _ref2.field,
		    node = _ref2.node;
		return function () {
			var nodeWidth = node.offsetWidth;

			if (nodeWidth < 200) {
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
(0, _withSetup2.default)({
	componentDidMount: function componentDidMount() {
		var _props = this.props,
		    setNode = _props.setNode,
		    handleComponentResize = _props.handleComponentResize;


		setNode(_reactDom2.default.findDOMNode(this));
		(0, _jquery2.default)(window).on('resize', handleComponentResize);
	},
	componentDidUpdate: function componentDidUpdate(_ref3) {
		var handleComponentResize = _ref3.handleComponentResize;

		handleComponentResize();
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

var _react = __webpack_require__("U7vG");

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

var _react = __webpack_require__("U7vG");

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