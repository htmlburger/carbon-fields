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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 138);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(332)

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(1)

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(338)

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(81)

/***/ }),
/* 4 */
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
var TYPE_MAP = exports.TYPE_MAP = 'map';
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
var VALIDATION_COMPLEX = exports.VALIDATION_COMPLEX = 'VALIDATION_COMPLEX';

var COMPLEX_LAYOUT_GRID = exports.COMPLEX_LAYOUT_GRID = 'grid';
var COMPLEX_LAYOUT_TABBED_VERTICAL = exports.COMPLEX_LAYOUT_TABBED_VERTICAL = 'tabbed-vertical';
var COMPLEX_LAYOUT_TABBED_HORIZONTAL = exports.COMPLEX_LAYOUT_TABBED_HORIZONTAL = 'tabbed-horizontal';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(195)

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Field = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * The external dependencies.
                                                                                                                                                                                                     */


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
	    hide_required_label = _ref.hide_required_label;

	var styles = !!field.width ? { flexBasis: field.width + '%' } : null;
	var classes = ['carbon-field', 'carbon-' + field.type, { 'has-width': !!field.width }, { 'carbon-highlight': !field.ui.valid }].concat(_toConsumableArray(field.classes));

	return _react2.default.createElement(
		'div',
		{ className: (0, _classnames2.default)(classes), style: styles, hidden: !field.ui.is_visible },
		_react2.default.createElement(
			'label',
			{ htmlFor: field.id },
			field.label,
			field.required && !hide_required_label ? _react2.default.createElement(
				'span',
				{ className: 'carbon-required' },
				'*'
			) : null
		),
		_react2.default.createElement(
			'div',
			{ className: 'field-holder' },
			children
		),
		!!field.help_text ? _react2.default.createElement(
			'em',
			{ className: 'help-text' },
			field.help_text
		) : null,
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
	hide_required_label: _propTypes2.default.bool
};

exports.default = Field;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redrawMap = exports.validateFields = exports.validateField = exports.markFieldAsInvalid = exports.markFieldAsValid = exports.geocodeAddress = exports.addMultipleFiles = exports.switchComplexTab = exports.collapseComplexGroup = exports.expandComplexGroup = exports.disableComplexGroupType = exports.enableComplexGroupType = exports.receiveComplexGroup = exports.removeComplexGroup = exports.cloneComplexGroup = exports.addComplexGroup = exports.removeFields = exports.addFields = exports.openMediaBrowser = exports.setupMediaBrowser = exports.setFieldValue = exports.updateField = exports.setUI = exports.setupValidation = exports.teardownField = exports.setupField = undefined;

var _reduxActions = __webpack_require__(25);

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
var addMultipleFiles = exports.addMultipleFiles = (0, _reduxActions.createAction)('fields/ADD_MULTIPLE_FILES', function (fieldId, attachments) {
  return { fieldId: fieldId, attachments: attachments };
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

/**
 * Trigger Google Map redraw
 *
 * @param {Object} fields
 * @return {Object}
 */
var redrawMap = exports.redrawMap = (0, _reduxActions.createAction)('fields/REDRAW_MAP', function (fieldId) {
  return { fieldId: fieldId };
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


exports.default = function () {
	var hooks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var ui = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var withLifecycle = (0, _recompose.lifecycle)(_extends({}, defaultHooks, hooks));

	var withDefaultProps = (0, _recompose.defaultProps)({
		ui: _extends({}, defaultUI, ui)
	});

	return (0, _recompose.compose)(withDefaultProps, withLifecycle);
};

var _recompose = __webpack_require__(2);

var _constants = __webpack_require__(4);

/**
 * The default lifecycle hooks that will be attached to each field.
 * Since we use composition instead of inheritance the developer should provide a full
 * implementation for the hook that is being overwritten.
 *
 * @type {Object}
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
/* 9 */
/***/ (function(module, exports) {

(function() { module.exports = this["carbon.vendor"]; }());

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependecies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


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

			return _extends({}, defaultMapStateToProps(state, ownProps), props);
		};
	};

	return (0, _reactRedux.connect)(makeMapStateToProps, _extends({}, defaultMapDispatchToProps, mapDispatchToProps));
};

var _reactRedux = __webpack_require__(37);

var _lodash = __webpack_require__(0);

var _selectors = __webpack_require__(11);

var _actions = __webpack_require__(7);

/**
 * The default state that will be retrieved from the store.
 *
 * @param  {Object} state
 * @param  {Object} ownProps
 * @return {Object}
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getComplexGroupLabel = exports.hasInvalidFields = exports.makeGetSidebarFieldOptions = exports.getFieldsByRoots = exports.isFieldTabbed = exports.getFieldsByParent = exports.makeGetFieldsByParent = exports.getFieldHierarchyById = exports.getFieldByHierarchy = exports.getFieldPatternRegex = exports.getComplexGroupById = exports.getFieldParentById = exports.getFieldById = exports.getFields = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reselect = __webpack_require__(136);

var _lodash = __webpack_require__(0);

var _selectors = __webpack_require__(77);

var _constants = __webpack_require__(4);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * The external dependencies.
                                                                                                                                                                                                     */


/**
 * The internal dependencies.
 */


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
	return (/^([a-z0-9_]+)(\[(\d+)\])?(:([a-z0-9_]+))?$/
	);
};

/**
 * Get a field based on it's name hierarchy
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
 * Get a field's hierarchy name based on it's id
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

		return [].concat(_toConsumableArray(sidebars), _toConsumableArray(field.options));
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
	var fields = (0, _lodash.pick)(getFields(state), (0, _lodash.map)(group.fields, 'id'));

	if ((0, _lodash.isNull)(group.label_template)) {
		return group.label;
	}

	return (0, _lodash.template)(group.label_template)(_extends({
		fields: fields
	}, (0, _lodash.mapValues)((0, _lodash.mapKeys)(fields, 'base_name'), 'value')));
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleContainerBox = exports.switchContainerTab = exports.submitForm = exports.validateContainer = exports.validateAllContainers = exports.receiveContainer = exports.removeContainer = exports.addContainer = exports.setContainerUI = exports.setContainerMeta = exports.teardownContainer = exports.setupContainer = undefined;

var _reduxActions = __webpack_require__(25);

var _lodash = __webpack_require__(0);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                   */


/**
 * Perform the initial setup of the container.
 *
 * @param  {String} containerId
 * @param  {Object} meta
 * @param  {Object} ui
 * @return {Object}
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
    return _defineProperty({}, containers, _defineProperty({}, key, value));
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContainersByType = exports.getContainerById = exports.getContainers = undefined;

var _lodash = __webpack_require__(0);

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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(330)

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.preventDefault = preventDefault;
exports.autoload = autoload;
exports.cancelTasks = cancelTasks;
exports.patchTagBoxAPI = patchTagBoxAPI;

var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

var _effects = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [cancelTasks].map(regeneratorRuntime.mark); /**
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
	return regeneratorRuntime.wrap(function cancelTasks$(_context) {
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

/***/ }),
/* 17 */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _equality = __webpack_require__(21);

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__(20);

var _contain2 = _interopRequireDefault(_contain);

var _scalar = __webpack_require__(31);

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
/* 19 */
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

var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

var _reduxSaga = __webpack_require__(38);

var _lodash = __webpack_require__(0);

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

		// Emit the selection through the channel.
		var handler = function handler() {
			emit({
				selection: browser.state().get('selection').toJSON()
			});
		};

		// Cancel the subscription.
		var unsubscribe = function unsubscribe() {
			browser.off('select', handler);
		};

		// Setup the subscription.
		browser.on('select', handler);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The internal dependencies.
                                                                                                                                                                                                                                                                   */


var _base = __webpack_require__(30);

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

exports.default = _extends({}, (0, _base2.default)(operators), {
  evaluate: evaluate
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The internal dependencies.
                                                                                                                                                                                                                                                                   */


var _base = __webpack_require__(30);

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
var evaluate = function evaluate(a, operator, b) {
  switch (operator) {
    case '=':
      return a === b;
    case '!=':
      return a !== b;
    default:
      return false;
  }
};

exports.default = _extends({}, (0, _base2.default)(operators), {
  evaluate: evaluate
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(2);

var _lodash = __webpack_require__(0);

var _tabbed = __webpack_require__(48);

var _tabbed2 = _interopRequireDefault(_tabbed);

var _plain = __webpack_require__(47);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


exports.default = function () {
	var meta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var ui = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	meta = _extends({}, defaultMeta, meta);

	ui = _extends({}, defaultUI, ui);

	return (0, _recompose.compose)((0, _recompose.withProps)({ meta: meta, ui: ui }), (0, _recompose.lifecycle)(hooks));
};

var _recompose = __webpack_require__(2);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
};

var _reactRedux = __webpack_require__(37);

var _lodash = __webpack_require__(0);

var _selectors = __webpack_require__(14);

var _actions = __webpack_require__(12);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(339)

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldValidators = exports.registerFieldValidator = exports.decorateSidebarReducer = exports.decorateFieldReducer = exports.decorateContainerReducer = exports.registerSidebarReducer = exports.registerFieldReducer = exports.registerContainerReducer = exports.getFieldComponent = exports.getContainerComponent = exports.registerFieldComponent = exports.registerContainerComponent = undefined;

var _components, _reducers;

exports.registerSaga = registerSaga;
exports.getSagas = getSagas;

var _reduceReducers = __webpack_require__(137);

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

var _lodash = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                   */


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
var components = (_components = {}, _defineProperty(_components, DOMAIN_CONTAINERS, {}), _defineProperty(_components, DOMAIN_FIELDS, {}), _components);

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
var reducers = (_reducers = {}, _defineProperty(_reducers, DOMAIN_CONTAINERS, []), _defineProperty(_reducers, DOMAIN_FIELDS, []), _defineProperty(_reducers, DOMAIN_SIDEBARS, []), _reducers);

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
    return _reduceReducers2.default.apply(undefined, [fn].concat(_toConsumableArray(reducers[domain])))(state, action);
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
var validators = _defineProperty({}, DOMAIN_FIELDS, {});

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getAttachmentThumbnail = getAttachmentThumbnail;
exports.flattenField = flattenField;
exports.addComplexGroupIdentifiers = addComplexGroupIdentifiers;
exports.flattenComplexGroupFields = flattenComplexGroupFields;
exports.restoreField = restoreField;
exports.stopSaga = stopSaga;

var _effects = __webpack_require__(5);

var _lodash = __webpack_require__(0);

var _helpers = __webpack_require__(16);

var _actions = __webpack_require__(7);

var _constants = __webpack_require__(4);

var _marked = [stopSaga].map(regeneratorRuntime.mark); /**
                                                        * The external dependencies.
                                                        */


/**
 * The internal dependencies.
 */


/**
 * Get the thumbnail of the attachment.
 *
 * @param  {Object} attachment
 * @return {String}
 */
function getAttachmentThumbnail(attachment) {
	if (attachment.type === 'image' && attachment.sizes) {
		return (attachment.sizes.thumbnail || attachment.sizes.full).url;
	}

	return '';
}

/**
 * Flattens a field.
 *
 * @param  {Object}   field
 * @param  {String}   parent
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
	field.parent = parent;
	field.parentType = parentType;

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
		return flattenField(field, group.id, _constants.PARENT_TYPE_GROUP, accumulator);
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
	return regeneratorRuntime.wrap(function stopSaga$(_context) {
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(194)

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The internal dependencies.
                                                                                                                                                                                                                                                                   */


var _base = __webpack_require__(30);

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

exports.default = _extends({}, (0, _base2.default)(operators), {
	evaluate: evaluate
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoOptions = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _withSetup = __webpack_require__(8);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ready = undefined;

var _reduxActions = __webpack_require__(25);

/**
 * Everything is loaded and rendered.
 *
 * @return {Object}
 */
var ready = exports.ready = (0, _reduxActions.createAction)('lib/READY'); /**
                                                                           * The external dependencies.
                                                                           */

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveSidebar = exports.addSidebar = undefined;

var _reduxActions = __webpack_require__(25);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetStore = undefined;

var _reduxActions = __webpack_require__(25);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(333)

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(337)

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(340)

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _factory = __webpack_require__(45);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * The external dependencies.
                                                                                                                                                                                                     */


/**
 * The internal dependencies.
 */


/**
 * The base component used to render the containers.
 *
 * @param  {Object}        props
 * @param  {Object}        props.container
 * @param  {Object[]}      props.fields
 * @param  {React.Element} props.children
 * @return {React.Element}
 */
var ContainerBase = function ContainerBase(_ref) {
	var container = _ref.container,
	    fields = _ref.fields,
	    children = _ref.children;

	var classes = ['carbon-container', 'carbon-container-' + container.id, 'carbon-container-' + container.type].concat(_toConsumableArray(container.classes));

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


/**
 * Render a new container.
 *
 * @param  {Object} store
 * @param  {String} type
 * @param  {Object} props
 * @return {void}
 */


exports.default = function (store, type) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var id = props.id;

  var Component = (0, _registry.getContainerComponent)(type);
  var node = document.querySelector('.container-' + id);

  if (node) {
    _reactDom2.default.render(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(Component, _extends({ key: id, type: type }, props))
    ), node);
  }
};

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(37);

var _registry = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.SearchInput = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _lodash = __webpack_require__(0);

var _constants = __webpack_require__(28);

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
			placeholder: 'Search...',
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The external dependencies.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SortableList = function (_React$Component) {
	_inherits(SortableList, _React$Component);

	function SortableList() {
		_classCallCheck(this, SortableList);

		return _possibleConstructorReturn(this, (SortableList.__proto__ || Object.getPrototypeOf(SortableList)).apply(this, arguments));
	}

	_createClass(SortableList, [{
		key: 'componentDidMount',

		/**
   * Lifecycle hook.
   *
   * @return {void}
   */
		value: function componentDidMount() {
			this.handleSortableUpdate = this.handleSortableUpdate.bind(this);

			this.$node = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this)).sortable(_extends({}, this.props.options, {
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
}(_react2.default.Component);

exports.default = SortableList;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(37);

var _selectors = __webpack_require__(11);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


/**
 * Render a new field.
 *
 * @param  {String}        type
 * @param  {Object}        props
 * @return {React.Element}
 */


exports.default = function (type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var Component = (0, _registry.getFieldComponent)(type);

  return _react2.default.createElement(Component, _extends({
    key: props.id,
    type: type
  }, props));
};

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _registry = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The internal dependencies.
                                                                                                                                                                                                                                                                   */


var _base = __webpack_require__(30);

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

exports.default = _extends({}, (0, _base2.default)(operators), {
  evaluate: evaluate
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _base = __webpack_require__(39);

var _base2 = _interopRequireDefault(_base);

var _nonce = __webpack_require__(40);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ContainerTabbed = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _lodash = __webpack_require__(0);

var _tabsNav = __webpack_require__(49);

var _tabsNav2 = _interopRequireDefault(_tabsNav);

var _tabs = __webpack_require__(50);

var _tabs2 = _interopRequireDefault(_tabs);

var _nonce = __webpack_require__(40);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhance = exports.ContainerTabsNav = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__(2);

var _helpers = __webpack_require__(16);

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _base = __webpack_require__(39);

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The internal dependencies.
                                                                                                                                                                                                                                                                   */


var _base = __webpack_require__(18);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _base2.default, {

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
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.evaluteConditions = evaluteConditions;

var _lodash = __webpack_require__(0);

var _base = __webpack_require__(18);

var _base2 = _interopRequireDefault(_base);

var _boolean = __webpack_require__(51);

var _boolean2 = _interopRequireDefault(_boolean);

var _postParentId = __webpack_require__(55);

var _postParentId2 = _interopRequireDefault(_postParentId);

var _postFormat = __webpack_require__(53);

var _postFormat2 = _interopRequireDefault(_postFormat);

var _postLevel = __webpack_require__(54);

var _postLevel2 = _interopRequireDefault(_postLevel);

var _postTemplate = __webpack_require__(56);

var _postTemplate2 = _interopRequireDefault(_postTemplate);

var _postTerm = __webpack_require__(57);

var _postTerm2 = _interopRequireDefault(_postTerm);

var _termLevel = __webpack_require__(58);

var _termLevel2 = _interopRequireDefault(_termLevel);

var _userRole = __webpack_require__(59);

var _userRole2 = _interopRequireDefault(_userRole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The supported conditions.
 *
 * @type {Object}
 */
/**
 * The external dependencies.
 */
var conditions = {
	base: _base2.default,
	boolean: _boolean2.default,

	post_parent_id: _postParentId2.default,
	post_format: _postFormat2.default,
	post_level: _postLevel2.default,
	post_template: _postTemplate2.default,
	post_term: _postTerm2.default,

	term_level: _termLevel2.default,

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
 * The internal dependencies.
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependecies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _lodash = __webpack_require__(0);

var _equality = __webpack_require__(21);

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__(20);

var _contain2 = _interopRequireDefault(_contain);

var _base = __webpack_require__(18);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _base2.default, {

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

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependecies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _lodash = __webpack_require__(0);

var _equality = __webpack_require__(21);

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__(20);

var _contain2 = _interopRequireDefault(_contain);

var _scalar = __webpack_require__(31);

var _scalar2 = _interopRequireDefault(_scalar);

var _base = __webpack_require__(18);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _base2.default, {

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
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependecies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _lodash = __webpack_require__(0);

var _equality = __webpack_require__(21);

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__(20);

var _contain2 = _interopRequireDefault(_contain);

var _scalar = __webpack_require__(31);

var _scalar2 = _interopRequireDefault(_scalar);

var _base = __webpack_require__(18);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _base2.default, {

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
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependecies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _lodash = __webpack_require__(0);

var _equality = __webpack_require__(21);

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__(20);

var _contain2 = _interopRequireDefault(_contain);

var _base = __webpack_require__(18);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _base2.default, {

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

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependecies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _lodash = __webpack_require__(0);

var _equalityArray = __webpack_require__(46);

var _equalityArray2 = _interopRequireDefault(_equalityArray);

var _base = __webpack_require__(18);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _base2.default, {

	/**
  * The supported comparers.
  *
  * @type {Function[]}
  */
	comparers: [_equalityArray2.default],

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
				return _this.isFulfiled(_extends({}, definition, {
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
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependecies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _lodash = __webpack_require__(0);

var _equality = __webpack_require__(21);

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__(20);

var _contain2 = _interopRequireDefault(_contain);

var _scalar = __webpack_require__(31);

var _scalar2 = _interopRequireDefault(_scalar);

var _base = __webpack_require__(18);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _base2.default, {

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
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependecies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _lodash = __webpack_require__(0);

var _equality = __webpack_require__(21);

var _equality2 = _interopRequireDefault(_equality);

var _contain = __webpack_require__(20);

var _contain2 = _interopRequireDefault(_contain);

var _base = __webpack_require__(18);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _base2.default, {

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

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _handleActions;

var _objectPathImmutable = __webpack_require__(36);

var _objectPathImmutable2 = _interopRequireDefault(_objectPathImmutable);

var _reduxActions = __webpack_require__(25);

var _lodash = __webpack_require__(0);

var _registry = __webpack_require__(26);

var _actions = __webpack_require__(35);

var _actions2 = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


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
			if ((0, _lodash.isObject)(valueData)) {
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
exports.default = (0, _registry.decorateContainerReducer)((0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _actions2.setupContainer, function (state, _ref2) {
	var _ref2$payload = _ref2.payload,
	    containerId = _ref2$payload.containerId,
	    meta = _ref2$payload.meta,
	    ui = _ref2$payload.ui;

	return (0, _objectPathImmutable2.default)(state).set(containerId + '.meta', meta).set(containerId + '.ui', ui).value();
}), _defineProperty(_handleActions, _actions2.addContainer, function (state, _ref3) {
	var payload = _ref3.payload;
	return _objectPathImmutable2.default.set(state, payload.id, payload);
}), _defineProperty(_handleActions, _actions2.removeContainer, function (state, _ref4) {
	var payload = _ref4.payload;
	return _objectPathImmutable2.default.del(state, payload);
}), _defineProperty(_handleActions, _actions2.setContainerUI, function (state, action) {
	return setMetaOrUI(state, action, 'ui');
}), _defineProperty(_handleActions, _actions2.setContainerMeta, function (state, action) {
	return setMetaOrUI(state, action, 'meta');
}), _defineProperty(_handleActions, _actions2.switchContainerTab, function (state, _ref5) {
	var _ref5$payload = _ref5.payload,
	    containerId = _ref5$payload.containerId,
	    tabId = _ref5$payload.tabId;
	return _objectPathImmutable2.default.set(state, containerId + '.ui.current_tab', tabId);
}), _defineProperty(_handleActions, _actions.resetStore, function (state, _ref6) {
	var containers = _ref6.payload.containers;
	return containers;
}), _handleActions), {}));

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AssociationListItem = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__(2);

var _helpers = __webpack_require__(16);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AssociationList = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _listItem = __webpack_require__(61);

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.Colorpicker = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactOnclickoutside = __webpack_require__(79);

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _reactColor = __webpack_require__(134);

var _recompose = __webpack_require__(2);

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhance = exports.ComplexActions = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _helpers = __webpack_require__(16);

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhance = exports.ComplexEmptyNotice = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__(2);

var _helpers = __webpack_require__(16);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ComplexGroup = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__(2);

var _constants = __webpack_require__(4);

var _helpers = __webpack_require__(16);

var _factory = __webpack_require__(45);

var _factory2 = _interopRequireDefault(_factory);

var _withHeaderTemplate = __webpack_require__(44);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ComplexPopover = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactOnclickoutside = __webpack_require__(79);

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _recompose = __webpack_require__(2);

var _helpers = __webpack_require__(16);

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ComplexTab = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__(2);

var _helpers = __webpack_require__(16);

var _withHeaderTemplate = __webpack_require__(44);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ComplexTabs = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__(2);

var _tab = __webpack_require__(68);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The external dependencies.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var GoogleMap = function (_React$Component) {
	_inherits(GoogleMap, _React$Component);

	function GoogleMap() {
		_classCallCheck(this, GoogleMap);

		return _possibleConstructorReturn(this, (GoogleMap.__proto__ || Object.getPrototypeOf(GoogleMap)).apply(this, arguments));
	}

	_createClass(GoogleMap, [{
		key: 'componentDidMount',

		/**
   * Lifecycle hook.
   *
   * @return {void}
   */
		value: function componentDidMount() {
			this.node = _reactDom2.default.findDOMNode(this);

			this.initMap();
			this.setupMapEvents();
			this.redrawMap(this.props);
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
			    zoom = nextProps.zoom,
			    redraw = nextProps.redraw;


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
			var _this2 = this;

			// Enable the zoom with scrollwheel when the user interacts with the map.
			var enableScrollZoom = function enableScrollZoom() {
				_this2.map.setOptions({
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
				_this2.props.onChange({
					zoom: _this2.map.getZoom()
				});
			};

			google.maps.event.addListener(this.map, 'zoom_changed', handleZoomChange);

			// Update the position when the marker is moved.
			var handleDragEnd = function handleDragEnd() {
				_this2.props.onChange({
					lat: _this2.marker.getPosition().lat(),
					lng: _this2.marker.getPosition().lng()
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
			var _this3 = this;

			var redraw = props.redraw,
			    lat = props.lat,
			    lng = props.lng;


			if (redraw) {
				var location = new google.maps.LatLng(lat, lng);

				setTimeout(function () {
					google.maps.event.trigger(_this3.map, 'resize');
					_this3.map.setCenter(location);
				}, 10);
			}
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
	onChange: _propTypes2.default.func,
	redraw: _propTypes2.default.bool
};

exports.default = GoogleMap;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.RadioField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _noOptions = __webpack_require__(32);

var _noOptions2 = _interopRequireDefault(_noOptions);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(4);

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
						_react2.default.createElement('input', _extends({
							type: 'radio',
							name: name,
							value: option.value,
							checked: isChecked(option),
							disabled: !field.ui.is_visible,
							onChange: handleChange
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
			var value = _ref4.target.value;
			return setFieldValue(field.id, value);
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The external dependencies.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RichTextEditor = function (_React$Component) {
	_inherits(RichTextEditor, _React$Component);

	function RichTextEditor() {
		_classCallCheck(this, RichTextEditor);

		return _possibleConstructorReturn(this, (RichTextEditor.__proto__ || Object.getPrototypeOf(RichTextEditor)).apply(this, arguments));
	}

	_createClass(RichTextEditor, [{
		key: 'componentDidMount',

		/**
   * Lifecycle hook.
   *
   * @return {void}
   */
		value: function componentDidMount() {
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
			var _props = this.props,
			    id = _props.id,
			    children = _props.children,
			    richEditing = _props.richEditing,
			    mediaButtons = _props.mediaButtons;

			var classes = ['carbon-wysiwyg', 'wp-editor-wrap', { 'tmce-active': richEditing }, { 'html-active': !richEditing }];

			return _react2.default.createElement(
				'div',
				{ id: 'wp-' + id + '-wrap', className: (0, _classnames2.default)(classes) },
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
			var _this2 = this;

			var _props2 = this.props,
			    id = _props2.id,
			    richEditing = _props2.richEditing,
			    onChange = _props2.onChange;


			if (richEditing) {
				var editorSetup = function editorSetup(editor) {
					_this2.editor = editor;

					editor.on('blur', function () {
						onChange(editor.getContent());
					});
				};

				var editorOptions = _extends({}, window.tinyMCEPreInit.mceInit.carbon_settings, {
					selector: '#' + id,
					setup: editorSetup
				});

				window.tinymce.init(editorOptions);
			}

			var quickTagsOptions = _extends({}, window.tinyMCEPreInit, {
				id: id
			});

			window.quicktags(quickTagsOptions);

			// Force the initialization of the quick tags.
			window.QTags._buttonsInit();
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
				this.editor.remove();
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
	onChange: _propTypes2.default.func
};

exports.default = RichTextEditor;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.TextField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(4);

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
var TextField = exports.TextField = function TextField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement('input', _extends({
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _objectPathImmutable = __webpack_require__(36);

var _objectPathImmutable2 = _interopRequireDefault(_objectPathImmutable);

var _reduxActions = __webpack_require__(25);

var _lodash = __webpack_require__(0);

var _constants = __webpack_require__(4);

var _registry = __webpack_require__(26);

var _actions = __webpack_require__(35);

var _actions2 = __webpack_require__(7);

var _selectors = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The reducer that handles the `fields` branch.
 */
exports.default = (0, _registry.decorateFieldReducer)((0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, (0, _reduxActions.combineActions)(_actions2.setupField, _actions2.setUI), function (state, _ref) {
	var _ref$payload = _ref.payload,
	    fieldId = _ref$payload.fieldId,
	    ui = _ref$payload.ui;
	return _objectPathImmutable2.default.assign(state, fieldId + '.ui', ui);
}), _defineProperty(_handleActions, _actions2.addFields, function (state, _ref2) {
	var payload = _ref2.payload;
	return _extends({}, state, payload);
}), _defineProperty(_handleActions, _actions2.removeFields, function (state, _ref3) {
	var payload = _ref3.payload;
	return (0, _lodash.omit)(state, payload);
}), _defineProperty(_handleActions, _actions2.updateField, function (state, _ref4) {
	var _ref4$payload = _ref4.payload,
	    fieldId = _ref4$payload.fieldId,
	    data = _ref4$payload.data;
	return _objectPathImmutable2.default.assign(state, fieldId, data);
}), _defineProperty(_handleActions, _actions2.setFieldValue, function (state, _ref5) {
	var _ref5$payload = _ref5.payload,
	    fieldId = _ref5$payload.fieldId,
	    value = _ref5$payload.value,
	    method = _ref5$payload.method;
	return _objectPathImmutable2.default[method](state, fieldId + '.value', value);
}), _defineProperty(_handleActions, _actions.resetStore, function (state, _ref6) {
	var fields = _ref6.payload.fields;
	return fields;
}), _defineProperty(_handleActions, _actions2.markFieldAsValid, function (state, _ref7) {
	var fieldId = _ref7.payload.fieldId;
	return _objectPathImmutable2.default.assign(state, fieldId + '.ui', {
		valid: true,
		error: null
	});
}), _defineProperty(_handleActions, _actions2.markFieldAsInvalid, function (state, _ref8) {
	var _ref8$payload = _ref8.payload,
	    fieldId = _ref8$payload.fieldId,
	    error = _ref8$payload.error;
	return _objectPathImmutable2.default.assign(state, fieldId + '.ui', {
		valid: false,
		error: error
	});
}), _defineProperty(_handleActions, _actions2.enableComplexGroupType, function (state, _ref9) {
	var _ref9$payload = _ref9.payload,
	    fieldId = _ref9$payload.fieldId,
	    groupName = _ref9$payload.groupName;

	var index = (0, _lodash.findIndex)(state[fieldId].enabledGroupTypes, groupName);

	return _objectPathImmutable2.default.push(state, fieldId + '.enabledGroupTypes', groupName);
}), _defineProperty(_handleActions, _actions2.disableComplexGroupType, function (state, _ref10) {
	var _ref10$payload = _ref10.payload,
	    fieldId = _ref10$payload.fieldId,
	    groupName = _ref10$payload.groupName;

	var index = (0, _lodash.findIndex)(state[fieldId].enabledGroupTypes, function (g) {
		return groupName === g;
	});

	return _objectPathImmutable2.default.del(state, fieldId + '.enabledGroupTypes.' + index);
}), _defineProperty(_handleActions, (0, _reduxActions.combineActions)(_actions2.expandComplexGroup, _actions2.collapseComplexGroup), function (state, _ref11) {
	var _ref11$payload = _ref11.payload,
	    fieldId = _ref11$payload.fieldId,
	    groupId = _ref11$payload.groupId,
	    collapsed = _ref11$payload.collapsed;

	var index = (0, _lodash.findIndex)(state[fieldId].value, { id: groupId });

	return _objectPathImmutable2.default.set(state, fieldId + '.value.' + index + '.collapsed', collapsed);
}), _defineProperty(_handleActions, _actions2.switchComplexTab, function (state, _ref12) {
	var _ref12$payload = _ref12.payload,
	    fieldId = _ref12$payload.fieldId,
	    groupId = _ref12$payload.groupId;
	return _objectPathImmutable2.default.set(state, fieldId + '.ui.current_tab', groupId);
}), _defineProperty(_handleActions, _actions2.redrawMap, function (state, _ref13) {
	var fieldId = _ref13.payload.fieldId;
	return _objectPathImmutable2.default.set(state, fieldId + '.ui.redraw_map', true);
}), _handleActions), {}));

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.request = request;

var _jquery = __webpack_require__(17);

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
	return new Promise(function (resolve, reject) {
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectPathImmutable = __webpack_require__(36);

var _objectPathImmutable2 = _interopRequireDefault(_objectPathImmutable);

var _reduxActions = __webpack_require__(25);

var _registry = __webpack_require__(26);

var _actions = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


/**
 * The reducer that handles the `sidebars` branch.
 */
exports.default = (0, _registry.decorateSidebarReducer)((0, _reduxActions.handleActions)(_defineProperty({}, _actions.receiveSidebar, function (state, _ref) {
  var payload = _ref.payload;
  return _objectPathImmutable2.default.set(state, payload.id, payload);
}), {}));

/***/ }),
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.normalizePreloadedState = normalizePreloadedState;

var _lodash = __webpack_require__(0);

var _helpers = __webpack_require__(27);

var _constants = __webpack_require__(4);

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
			return (0, _helpers.flattenField)(field, container.id, _constants.PARENT_TYPE_CONTAINER, fields);
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(336)

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(16);

(0, _helpers.autoload)(__webpack_require__(83)); /**
                                                                  * The internal dependencies.
                                                                  */

(0, _helpers.autoload)(__webpack_require__(81));
(0, _helpers.autoload)(__webpack_require__(82));
(0, _helpers.autoload)(__webpack_require__(84));
(0, _helpers.autoload)(__webpack_require__(85));

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actions.js": 12,
	"./comparers/base.js": 30,
	"./comparers/contain.js": 20,
	"./comparers/equality-array.js": 46,
	"./comparers/equality.js": 21,
	"./comparers/scalar.js": 31,
	"./components/comment-meta/index.js": 86,
	"./components/container/base.js": 39,
	"./components/container/index.js": 22,
	"./components/container/nonce.js": 40,
	"./components/container/plain.js": 47,
	"./components/container/tabbed.js": 48,
	"./components/container/tabs-nav.js": 49,
	"./components/container/tabs.js": 50,
	"./components/nav-menu-item/index.js": 87,
	"./components/post-meta/index.js": 88,
	"./components/term-meta/index.js": 89,
	"./components/theme-options/index.js": 90,
	"./components/user-meta/index.js": 91,
	"./components/widget/index.js": 92,
	"./conditions/base.js": 18,
	"./conditions/boolean.js": 51,
	"./conditions/index.js": 52,
	"./conditions/post-format.js": 53,
	"./conditions/post-level.js": 54,
	"./conditions/post-parent-id.js": 55,
	"./conditions/post-template.js": 56,
	"./conditions/post-term.js": 57,
	"./conditions/term-level.js": 58,
	"./conditions/user-role.js": 59,
	"./constants.js": 13,
	"./decorators/with-setup.js": 23,
	"./decorators/with-store.js": 24,
	"./factory.js": 41,
	"./reducer.js": 60,
	"./sagas/base.js": 93,
	"./sagas/comment-meta.js": 94,
	"./sagas/nav-menu.js": 95,
	"./sagas/post-meta.js": 96,
	"./sagas/term-meta.js": 97,
	"./sagas/theme-options.js": 98,
	"./sagas/user-meta.js": 99,
	"./sagas/validation.js": 100,
	"./sagas/visibility.js": 101,
	"./sagas/widget.js": 102,
	"./selectors.js": 14
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
webpackContext.id = 81;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actions.js": 7,
	"./components/association/index.js": 103,
	"./components/association/list-item.js": 61,
	"./components/association/list.js": 62,
	"./components/checkbox/index.js": 104,
	"./components/color/index.js": 105,
	"./components/color/picker.js": 63,
	"./components/complex/actions.js": 64,
	"./components/complex/empty-notice.js": 65,
	"./components/complex/group.js": 66,
	"./components/complex/index.js": 106,
	"./components/complex/popover.js": 67,
	"./components/complex/tab.js": 68,
	"./components/complex/tabs.js": 69,
	"./components/datetime/index.js": 107,
	"./components/field/index.js": 6,
	"./components/file/index.js": 108,
	"./components/hidden/index.js": 109,
	"./components/html/index.js": 110,
	"./components/map/google-map.js": 70,
	"./components/map/index.js": 111,
	"./components/no-options/index.js": 32,
	"./components/radio-image/index.js": 112,
	"./components/radio/index.js": 71,
	"./components/rich-text/editor.js": 72,
	"./components/rich-text/index.js": 113,
	"./components/search-input/index.js": 42,
	"./components/select/index.js": 114,
	"./components/separator/index.js": 115,
	"./components/set/index.js": 116,
	"./components/sidebar/index.js": 117,
	"./components/sortable-list/index.js": 43,
	"./components/text/index.js": 73,
	"./components/textarea/index.js": 118,
	"./constants.js": 4,
	"./decorators/with-header-template.js": 44,
	"./decorators/with-setup.js": 8,
	"./decorators/with-store.js": 10,
	"./factory.js": 45,
	"./helpers.js": 27,
	"./reducer.js": 74,
	"./sagas/api.js": 119,
	"./sagas/changes-tracker.js": 120,
	"./sagas/complex.js": 121,
	"./sagas/conditional-logic.js": 122,
	"./sagas/geocoder.js": 123,
	"./sagas/media-browser.js": 124,
	"./sagas/redraw-google-maps.js": 125,
	"./sagas/validation.js": 126,
	"./selectors.js": 11,
	"./validators/base.js": 127,
	"./validators/complex.js": 128
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
webpackContext.id = 82;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actions.js": 33,
	"./api.js": 129,
	"./constants.js": 28,
	"./events.js": 19,
	"./helpers.js": 16,
	"./registry.js": 26
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
webpackContext.id = 83;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actions.js": 34,
	"./helpers.js": 75,
	"./reducer.js": 76,
	"./sagas/base.js": 130,
	"./selectors.js": 77
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
webpackContext.id = 84;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actions.js": 35,
	"./helpers.js": 78,
	"./index.js": 131
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
webpackContext.id = 85;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(2);

var _container = __webpack_require__(22);

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__(24);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(23);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.compose)((0, _recompose.setStatic)('type', _constants.TYPE_COMMENT_META), (0, _withStore2.default)(), (0, _withSetup2.default)())(_container2.default); /**
                                                                                                                                                                                          * The external dependencies.
                                                                                                                                                                                          */

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(2);

var _container = __webpack_require__(22);

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__(24);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(23);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.compose)((0, _recompose.setStatic)('type', _constants.TYPE_NAV_MENU_ITEM), (0, _withStore2.default)(), (0, _withSetup2.default)())(_container2.default); /**
                                                                                                                                                                                           * The external dependencies.
                                                                                                                                                                                           */

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _recompose = __webpack_require__(2);

var _container = __webpack_require__(22);

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__(24);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(23);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.compose)((0, _recompose.setStatic)('type', _constants.TYPE_POST_META), (0, _withStore2.default)(), (0, _withSetup2.default)({
	post_template: 'default',
	post_level: 1,
	post_parent_id: 0,
	post_format: '',
	post_term: {}
}))(_container2.default); /**
                           * The external dependencies.
                           */

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _recompose = __webpack_require__(2);

var _container = __webpack_require__(22);

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__(24);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(23);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.setStatic)('type', _constants.TYPE_TERM_META)((0, _recompose.compose)((0, _withStore2.default)(), (0, _withSetup2.default)({
	term_level: 1
}))(_container2.default)); /**
                            * The external dependencies.
                            */

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _recompose = __webpack_require__(2);

var _container = __webpack_require__(22);

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__(24);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(23);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(13);

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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _recompose = __webpack_require__(2);

var _container = __webpack_require__(22);

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__(24);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(23);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(13);

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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(2);

var _container = __webpack_require__(22);

var _container2 = _interopRequireDefault(_container);

var _withStore = __webpack_require__(24);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(23);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
exports.default = (0, _recompose.compose)((0, _recompose.setStatic)('type', _constants.TYPE_WIDGET), (0, _withStore2.default)(), (0, _withSetup2.default)())(_container2.default); /**
                                                                                                                                                                                    * The external dependencies.
                                                                                                                                                                                    */

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.workerReceiveContainer = workerReceiveContainer;
exports.workerSyncHash = workerSyncHash;
exports.default = foreman;

var _urldecode = __webpack_require__(133);

var _urldecode2 = _interopRequireDefault(_urldecode);

var _effects = __webpack_require__(5);

var _lodash = __webpack_require__(0);

var _constants = __webpack_require__(28);

var _factory = __webpack_require__(41);

var _factory2 = _interopRequireDefault(_factory);

var _selectors = __webpack_require__(14);

var _actions = __webpack_require__(12);

var _actions2 = __webpack_require__(7);

var _helpers = __webpack_require__(27);

var _constants2 = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [workerReceiveContainer, workerSyncHash, foreman].map(regeneratorRuntime.mark); /**
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

  return regeneratorRuntime.wrap(function workerReceiveContainer$(_context) {
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
            return (0, _helpers.flattenField)(field, container.id, _constants2.PARENT_TYPE_CONTAINER, fields);
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
  return regeneratorRuntime.wrap(function workerSyncHash$(_context2) {
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
  return regeneratorRuntime.wrap(function foreman$(_context3) {
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = foreman;

var _effects = __webpack_require__(5);

var _events = __webpack_require__(19);

var _actions = __webpack_require__(12);

var _marked = [foreman].map(regeneratorRuntime.mark); /**
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

  return regeneratorRuntime.wrap(function foreman$(_context) {
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.workerInit = workerInit;
exports.workerFormSubmit = workerFormSubmit;
exports.workerItemExpand = workerItemExpand;
exports.default = foreman;

var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

var _effects = __webpack_require__(5);

var _constants = __webpack_require__(28);

var _events = __webpack_require__(19);

var _actions = __webpack_require__(12);

var _selectors = __webpack_require__(14);

var _selectors2 = __webpack_require__(11);

var _constants2 = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [workerInit, workerFormSubmit, workerItemExpand, foreman].map(regeneratorRuntime.mark); /**
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
	var channel, _ref, data, container;

	return regeneratorRuntime.wrap(function workerInit$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _effects.call)(_events.createAjaxChannel, 'ajaxSuccess', 'add-menu-item');

				case 2:
					channel = _context.sent;

				case 3:
					if (false) {
						_context.next = 16;
						break;
					}

					_context.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref = _context.sent;
					data = _ref.data;
					container = (0, _jquery2.default)(data).find('[data-json]').data('json');

					// Close the channel since we don't have any
					// registered containers.

					if (container) {
						_context.next = 12;
						break;
					}

					channel.close();
					return _context.abrupt('break', 16);

				case 12:
					_context.next = 14;
					return (0, _effects.put)((0, _actions.receiveContainer)(container, false));

				case 14:
					_context.next = 3;
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

	return regeneratorRuntime.wrap(function workerFormSubmit$(_context2) {
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

	return regeneratorRuntime.wrap(function workerItemExpand$(_context3) {
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
					return (0, _effects.call)(_effects.delay, 100);

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
	return regeneratorRuntime.wrap(function foreman$(_context4) {
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.workerSyncPostTemplate = workerSyncPostTemplate;
exports.workerSyncPostParentId = workerSyncPostParentId;
exports.workerSyncPostFormat = workerSyncPostFormat;
exports.workerSyncHierarchicalTerms = workerSyncHierarchicalTerms;
exports.workerSyncNonHierarchicalTerms = workerSyncNonHierarchicalTerms;
exports.workerFormSubmit = workerFormSubmit;
exports.default = foreman;

var _effects = __webpack_require__(5);

var _lodash = __webpack_require__(0);

var _actions = __webpack_require__(33);

var _events = __webpack_require__(19);

var _selectors = __webpack_require__(14);

var _actions2 = __webpack_require__(12);

var _constants = __webpack_require__(13);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = [syncStore, workerSyncPostTemplate, workerSyncPostParentId, workerSyncPostFormat, setupSyncTerms, workerSyncHierarchicalTerms, workerSyncNonHierarchicalTerms, workerFormSubmit, foreman].map(regeneratorRuntime.mark); /**
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
	return regeneratorRuntime.wrap(function syncStore$(_context) {
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
	var channel, _ref, value;

	return regeneratorRuntime.wrap(function workerSyncPostTemplate$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.call)(_events.createSelectboxChannel, 'select#page_template');

				case 2:
					channel = _context2.sent;

				case 3:
					if (false) {
						_context2.next = 12;
						break;
					}

					_context2.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref = _context2.sent;
					value = _ref.value;
					_context2.next = 10;
					return (0, _effects.call)(syncStore, containers, {
						post_template: value
					});

				case 10:
					_context2.next = 3;
					break;

				case 12:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked[1], this);
}

/**
 * Keep in sync the `post_parent_id` & `post_level` properties.
 *
 * @param  {Object} containers
 * @return {void}
 */
function workerSyncPostParentId(containers) {
	var channel, _ref2, _value, option, parentId, level, matches;

	return regeneratorRuntime.wrap(function workerSyncPostParentId$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.call)(_events.createSelectboxChannel, 'select#parent_id');

				case 2:
					channel = _context3.sent;

				case 3:
					if (false) {
						_context3.next = 16;
						break;
					}

					_context3.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref2 = _context3.sent;
					_value = _ref2.value;
					option = _ref2.option;
					parentId = (0, _lodash.defaultTo)(parseInt(_value, 10), 0);
					level = 1;


					if (option.className) {
						matches = option.className.match(/^level-(\d+)/);


						if (matches) {
							level = parseInt(matches[1], 10) + 2;
						}
					}

					_context3.next = 14;
					return (0, _effects.call)(syncStore, containers, {
						post_parent_id: parentId,
						post_level: level
					});

				case 14:
					_context3.next = 3;
					break;

				case 16:
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

	return regeneratorRuntime.wrap(function workerSyncPostFormat$(_context4) {
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

	return regeneratorRuntime.wrap(function setupSyncTerms$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					elements = document.querySelectorAll('div[id^="' + selector + '"]');
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context5.prev = 4;
					_iterator = elements[Symbol.iterator]();

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

	return regeneratorRuntime.wrap(function workerSyncHierarchicalTerms$(_context6) {
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
						post_term: _defineProperty({}, taxonomy, _values.map(function (value) {
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
	var channel, _ref5, _value2;

	return regeneratorRuntime.wrap(function workerSyncNonHierarchicalTerms$(_context7) {
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
					_value2 = _ref5.value;
					_context7.next = 10;
					return (0, _effects.call)(syncStore, containers, {
						post_term: _defineProperty({}, taxonomy, _value2 ? _value2.split(/,\s*/) : [])
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

	return regeneratorRuntime.wrap(function workerFormSubmit$(_context8) {
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
	return regeneratorRuntime.wrap(function foreman$(_context9) {
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
					return (0, _effects.fork)(workerSyncPostParentId, containers);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.workerSyncTermLevel = workerSyncTermLevel;
exports.workerReset = workerReset;
exports.workerFormSubmit = workerFormSubmit;
exports.default = foreman;

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _effects = __webpack_require__(5);

var _lodash = __webpack_require__(0);

var _actions = __webpack_require__(35);

var _helpers = __webpack_require__(78);

var _actions2 = __webpack_require__(33);

var _events = __webpack_require__(19);

var _factory = __webpack_require__(41);

var _factory2 = _interopRequireDefault(_factory);

var _actions3 = __webpack_require__(12);

var _selectors = __webpack_require__(14);

var _constants = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [workerSyncTermLevel, workerReset, workerFormSubmit, foreman].map(regeneratorRuntime.mark); /**
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

	return regeneratorRuntime.wrap(function workerSyncTermLevel$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.call)(_events.createSelectboxChannel, 'select#parent');

				case 2:
					channel = _context2.sent;
					_loop = regeneratorRuntime.mark(function _loop() {
						var _ref, option, level, matches, payload;

						return regeneratorRuntime.wrap(function _loop$(_context) {
							while (1) {
								switch (_context.prev = _context.next) {
									case 0:
										_context.next = 2;
										return (0, _effects.take)(channel);

									case 2:
										_ref = _context.sent;
										option = _ref.option;
										level = 1;


										if (option.className) {
											matches = option.className.match(/^level-(\d+)/);


											if (matches) {
												level = parseInt(matches[1], 10) + 2;
											}
										}

										payload = (0, _lodash.mapValues)(containers, function () {
											return { term_level: level };
										});
										_context.next = 9;
										return (0, _effects.put)((0, _actions3.setContainerMeta)(payload));

									case 9:
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
 * Reset the containers when the term is saved.
 *
 * @return {void}
 */
function workerReset(store) {
	var channel, _ref2, settings, data, id, state, containers, _id;

	return regeneratorRuntime.wrap(function workerReset$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.call)(_events.createAjaxChannel, 'ajaxSuccess', 'add-tag');

				case 2:
					channel = _context3.sent;

				case 3:
					if (false) {
						_context3.next = 40;
						break;
					}

					_context3.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref2 = _context3.sent;
					settings = _ref2.settings;
					data = _ref2.data;

					if (!(!settings.data.includes('carbon_panel') || data.querySelector('wp_error'))) {
						_context3.next = 11;
						break;
					}

					return _context3.abrupt('continue', 3);

				case 11:
					_context3.next = 13;
					return (0, _effects.select)(_selectors.getContainers);

				case 13:
					_context3.t0 = regeneratorRuntime.keys(_context3.sent);

				case 14:
					if ((_context3.t1 = _context3.t0()).done) {
						_context3.next = 25;
						break;
					}

					id = _context3.t1.value;
					_context3.t2 = _effects.call;
					_context3.t3 = _reactDom2.default.unmountComponentAtNode;
					_context3.next = 20;
					return (0, _effects.call)([document, document.querySelector], '.container-' + id);

				case 20:
					_context3.t4 = _context3.sent;
					_context3.next = 23;
					return (0, _context3.t2)(_context3.t3, _context3.t4);

				case 23:
					_context3.next = 14;
					break;

				case 25:

					// Get the initial state.
					state = (0, _helpers.normalizePreloadedState)(window.carbon_json);

					// Replace the store's state.

					_context3.next = 28;
					return (0, _effects.put)((0, _actions.resetStore)(state));

				case 28:
					_context3.next = 30;
					return (0, _effects.select)(_selectors.getContainers);

				case 30:
					containers = _context3.sent;
					_context3.t5 = regeneratorRuntime.keys(containers);

				case 32:
					if ((_context3.t6 = _context3.t5()).done) {
						_context3.next = 38;
						break;
					}

					_id = _context3.t6.value;
					_context3.next = 36;
					return (0, _effects.call)(_factory2.default, store, containers[_id].type, { id: _id });

				case 36:
					_context3.next = 32;
					break;

				case 38:
					_context3.next = 3;
					break;

				case 40:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked[1], this);
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
function workerFormSubmit(channelCreator, selector) {
	var channel, _ref3, event;

	return regeneratorRuntime.wrap(function workerFormSubmit$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					_context4.next = 2;
					return (0, _effects.call)(channelCreator, selector);

				case 2:
					channel = _context4.sent;

				case 3:
					if (false) {
						_context4.next = 14;
						break;
					}

					_context4.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref3 = _context4.sent;
					event = _ref3.event;
					_context4.next = 10;
					return (0, _effects.put)((0, _actions3.submitForm)(event));

				case 10:
					_context4.next = 12;
					return (0, _effects.put)((0, _actions3.validateAllContainers)(event));

				case 12:
					_context4.next = 3;
					break;

				case 14:
				case 'end':
					return _context4.stop();
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
	var containers;
	return regeneratorRuntime.wrap(function foreman$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					_context5.next = 2;
					return (0, _effects.select)(_selectors.getContainersByType, _constants.TYPE_TERM_META);

				case 2:
					containers = _context5.sent;

					if (!(0, _lodash.isEmpty)(containers)) {
						_context5.next = 5;
						break;
					}

					return _context5.abrupt('return');

				case 5:
					_context5.next = 7;
					return (0, _effects.take)(_actions2.ready);

				case 7:
					_context5.next = 9;
					return (0, _effects.fork)(workerSyncTermLevel, containers);

				case 9:
					_context5.next = 11;
					return (0, _effects.fork)(workerFormSubmit, _events.createClickChannel, 'form#addtag #submit');

				case 11:
					_context5.next = 13;
					return (0, _effects.fork)(workerFormSubmit, _events.createSubmitChannel, 'form#edittag');

				case 13:
					_context5.next = 15;
					return (0, _effects.fork)(workerReset, store);

				case 15:
				case 'end':
					return _context5.stop();
			}
		}
	}, _marked[3], this);
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.workerStickyPanel = workerStickyPanel;
exports.workerFormSubmit = workerFormSubmit;
exports.default = foreman;

var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(0);

var _effects = __webpack_require__(5);

var _events = __webpack_require__(19);

var _selectors = __webpack_require__(14);

var _actions = __webpack_require__(12);

var _constants = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [workerStickyPanel, workerFormSubmit, foreman].map(regeneratorRuntime.mark); /**
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

	return regeneratorRuntime.wrap(function workerStickyPanel$(_context) {
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

	return regeneratorRuntime.wrap(function workerFormSubmit$(_context2) {
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
	return regeneratorRuntime.wrap(function foreman$(_context3) {
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.workerSyncUserRole = workerSyncUserRole;
exports.workerFormSubmit = workerFormSubmit;
exports.default = foreman;

var _lodash = __webpack_require__(0);

var _effects = __webpack_require__(5);

var _actions = __webpack_require__(33);

var _events = __webpack_require__(19);

var _actions2 = __webpack_require__(12);

var _selectors = __webpack_require__(14);

var _constants = __webpack_require__(13);

var _marked = [workerSyncUserRole, workerFormSubmit, foreman].map(regeneratorRuntime.mark); /**
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

	return regeneratorRuntime.wrap(function workerSyncUserRole$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.call)(_events.createSelectboxChannel, 'select#role');

				case 2:
					channel = _context2.sent;
					_context2.prev = 3;
					_loop = regeneratorRuntime.mark(function _loop() {
						var _ref, value;

						return regeneratorRuntime.wrap(function _loop$(_context) {
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

	return regeneratorRuntime.wrap(function workerFormSubmit$(_context3) {
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
	return regeneratorRuntime.wrap(function foreman$(_context4) {
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.validate = validate;
exports.workerValidate = workerValidate;
exports.workerValidateAll = workerValidateAll;
exports.default = foreman;

var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

var _effects = __webpack_require__(5);

var _lodash = __webpack_require__(0);

var _actions = __webpack_require__(12);

var _selectors = __webpack_require__(14);

var _actions2 = __webpack_require__(7);

var _selectors2 = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [validate, workerValidate, workerValidateAll, foreman].map(regeneratorRuntime.mark); /**
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
	var $target, $spinner, $error, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, fieldId, html;

	return regeneratorRuntime.wrap(function validate$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					$target = (0, _jquery2.default)(event.currentTarget);
					$spinner = (0, _jquery2.default)('#publishing-action .spinner', $target);
					$error = (0, _jquery2.default)('.carbon-error-required strong');


					$spinner.addClass('is-active');

					// Validate each one of the fields.
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 7;
					_iterator = fieldIds[Symbol.iterator]();

				case 9:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 16;
						break;
					}

					fieldId = _step.value;
					_context.next = 13;
					return (0, _effects.put)((0, _actions2.validateField)(fieldId));

				case 13:
					_iteratorNormalCompletion = true;
					_context.next = 9;
					break;

				case 16:
					_context.next = 22;
					break;

				case 18:
					_context.prev = 18;
					_context.t0 = _context['catch'](7);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 22:
					_context.prev = 22;
					_context.prev = 23;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 25:
					_context.prev = 25;

					if (!_didIteratorError) {
						_context.next = 28;
						break;
					}

					throw _iteratorError;

				case 28:
					return _context.finish(25);

				case 29:
					return _context.finish(22);

				case 30:
					_context.next = 32;
					return (0, _effects.select)(_selectors2.hasInvalidFields);

				case 32:
					if (_context.sent) {
						_context.next = 35;
						break;
					}

					_context.next = 35;
					return (0, _effects.take)(_actions2.markFieldAsInvalid);

				case 35:

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

				case 40:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[7, 18, 22, 30], [23,, 25, 29]]);
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
	return regeneratorRuntime.wrap(function workerValidate$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.select)(_selectors.getContainerById, containerId);

				case 2:
					container = _context2.sent;
					_context2.next = 5;
					return (0, _effects.select)(_selectors2.getFieldsByRoots, container.fields);

				case 5:
					ids = _context2.sent;
					_context2.next = 8;
					return (0, _effects.call)(validate, ids, event);

				case 8:
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
	var fields, ids;
	return regeneratorRuntime.wrap(function workerValidateAll$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.select)(_selectors2.getFields);

				case 2:
					fields = _context3.sent;
					_context3.next = 5;
					return (0, _effects.call)(_lodash.keys, fields);

				case 5:
					ids = _context3.sent;
					_context3.next = 8;
					return (0, _effects.call)(validate, ids, payload);

				case 8:
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
	return regeneratorRuntime.wrap(function foreman$(_context4) {
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleVisibility = toggleVisibility;
exports.workerSetupVisibility = workerSetupVisibility;
exports.workerToggleVisibility = workerToggleVisibility;
exports.workerCheckVisibility = workerCheckVisibility;
exports.workerTogglePostBox = workerTogglePostBox;
exports.default = foreman;

var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

var _effects = __webpack_require__(5);

var _events = __webpack_require__(19);

var _constants = __webpack_require__(28);

var _actions = __webpack_require__(12);

var _selectors = __webpack_require__(14);

var _conditions = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [toggleVisibility, workerSetupVisibility, workerToggleVisibility, workerCheckVisibility, workerTogglePostBox, foreman].map(regeneratorRuntime.mark); /**
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
  return regeneratorRuntime.wrap(function toggleVisibility$(_context) {
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
  return regeneratorRuntime.wrap(function workerSetupVisibility$(_context2) {
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
  return regeneratorRuntime.wrap(function workerToggleVisibility$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = regeneratorRuntime.keys(payload);

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
  return regeneratorRuntime.wrap(function workerCheckVisibility$(_context4) {
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

  return regeneratorRuntime.wrap(function workerTogglePostBox$(_context5) {
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
  return regeneratorRuntime.wrap(function foreman$(_context6) {
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.workerAddedOrUpdatedEvent = workerAddedOrUpdatedEvent;
exports.workerDestroyContainer = workerDestroyContainer;
exports.workerFormSubmit = workerFormSubmit;
exports.workerToggleWidget = workerToggleWidget;
exports.default = foreman;

var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = __webpack_require__(0);

var _reduxSaga = __webpack_require__(38);

var _effects = __webpack_require__(5);

var _constants = __webpack_require__(28);

var _events = __webpack_require__(19);

var _actions = __webpack_require__(12);

var _selectors = __webpack_require__(14);

var _actions2 = __webpack_require__(7);

var _selectors2 = __webpack_require__(11);

var _constants2 = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [workerAddedOrUpdatedEvent, workerDestroyContainer, workerFormSubmit, workerToggleWidget, foreman].map(regeneratorRuntime.mark); /**
                                                                                                                                                * The external dependencies.
                                                                                                                                                */


/**
 * The internal dependencies.
 */


/**
 * Re-init the container when the widget is created/saved.
 *
 * @return {void}
 */
function workerAddedOrUpdatedEvent() {
	var pagenow, channel, _ref, event, widget, container, containerId, widgetInstance;

	return regeneratorRuntime.wrap(function workerAddedOrUpdatedEvent$(_context) {
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
						_context.next = 24;
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

					return _context.abrupt('return');

				case 13:
					_context.next = 15;
					return (0, _effects.put)((0, _actions.receiveContainer)(container, true));

				case 15:
					if (!(pagenow === _constants.PAGE_NOW_CUSTOMIZE && event.type === 'widget-added')) {
						_context.next = 22;
						break;
					}

					(0, _jquery2.default)(widget).find('[name="savewidget"]').off('click').show().end().find('.widget-content:first').off('keydown', 'input').off('change input propertychange', ':input');

					containerId = (0, _jquery2.default)(widget).find('[name="widget-id"]').val();
					_context.next = 20;
					return (0, _effects.call)(wp.customize.Widgets.getWidgetFormControlForWidget, containerId);

				case 20:
					widgetInstance = _context.sent;


					// Change the flag for 'live mode' so we can receive proper `widget-updated` events.
					widgetInstance.liveUpdateMode = false;

				case 22:
					_context.next = 4;
					break;

				case 24:
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
	var channel, _ref2, data, containerId, container, fieldsIds;

	return regeneratorRuntime.wrap(function workerDestroyContainer$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.call)(_events.createAjaxChannel, ajaxEvent, ajaxAction);

				case 2:
					channel = _context2.sent;

				case 3:
					if (false) {
						_context2.next = 26;
						break;
					}

					_context2.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref2 = _context2.sent;
					data = _ref2.settings.data;
					containerId = data.match(/widget-id=(.+?)\&/)[1];

					// Don't care about other widgets.

					if ((0, _lodash.startsWith)(containerId, 'carbon')) {
						_context2.next = 11;
						break;
					}

					return _context2.abrupt('continue', 3);

				case 11:

					// Remove the current instance from DOM.
					_reactDom2.default.unmountComponentAtNode(document.querySelector('[class*="' + containerId + '"]'));

					// Get the container from the store.
					_context2.next = 14;
					return (0, _effects.select)(_selectors.getContainerById, containerId);

				case 14:
					container = _context2.sent;

					if (container) {
						_context2.next = 17;
						break;
					}

					return _context2.abrupt('continue', 3);

				case 17:
					_context2.next = 19;
					return (0, _effects.select)(_selectors2.getFieldsByRoots, container.fields);

				case 19:
					fieldsIds = _context2.sent;
					_context2.next = 22;
					return (0, _effects.put)((0, _actions.removeContainer)(containerId));

				case 22:
					_context2.next = 24;
					return (0, _effects.put)((0, _actions2.removeFields)(fieldsIds));

				case 24:
					_context2.next = 3;
					break;

				case 26:
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
	var pagenow, channel, _ref3, _event, containerId, _widget;

	return regeneratorRuntime.wrap(function workerFormSubmit$(_context3) {
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
						_context3.next = 28;
						break;
					}

					_context3.next = 7;
					return (0, _effects.take)(channel);

				case 7:
					_ref3 = _context3.sent;
					_event = _ref3.event;
					containerId = (0, _jquery2.default)(_event.target).closest('.widget-inside').find('input[name="widget-id"]').val();
					_context3.next = 12;
					return (0, _effects.put)((0, _actions.submitForm)(_event));

				case 12:
					_context3.next = 14;
					return (0, _effects.put)((0, _actions.validateContainer)(containerId, _event));

				case 14:
					if (!(pagenow === _constants.PAGE_NOW_CUSTOMIZE)) {
						_context3.next = 26;
						break;
					}

					_event.preventDefault();

					// This little delay allows us to get correct results in the selector for invalid fields
					// since we don't know when the validation is completed.
					_context3.next = 18;
					return (0, _effects.call)(_reduxSaga.delay, 250);

				case 18:
					_context3.next = 20;
					return (0, _effects.select)(_selectors2.hasInvalidFields);

				case 20:
					if (_context3.sent) {
						_context3.next = 26;
						break;
					}

					_context3.next = 23;
					return (0, _effects.call)(wp.customize.Widgets.getWidgetFormControlForWidget, containerId);

				case 23:
					_widget = _context3.sent;
					_context3.next = 26;
					return (0, _effects.call)([_widget, _widget.updateWidget], { disable_form: true });

				case 26:
					_context3.next = 4;
					break;

				case 28:
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
	var channel, _ref4, _event2, $widget, containerId;

	return regeneratorRuntime.wrap(function workerToggleWidget$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					_context4.next = 2;
					return (0, _effects.call)(_events.createClickChannel, '.widget-top');

				case 2:
					channel = _context4.sent;

				case 3:
					if (false) {
						_context4.next = 18;
						break;
					}

					_context4.next = 6;
					return (0, _effects.take)(channel);

				case 6:
					_ref4 = _context4.sent;
					_event2 = _ref4.event;
					$widget = (0, _jquery2.default)(_event2.target).closest('.widget');
					containerId = $widget.find('input[name="widget-id"]').val();

					// Don't care about other widgets.

					if ((0, _lodash.startsWith)(containerId, 'carbon')) {
						_context4.next = 12;
						break;
					}

					return _context4.abrupt('continue', 3);

				case 12:
					_context4.next = 14;
					return (0, _effects.call)(_reduxSaga.delay, 100);

				case 14:
					_context4.next = 16;
					return (0, _effects.put)((0, _actions.toggleContainerBox)(containerId, $widget.hasClass('open')));

				case 16:
					_context4.next = 3;
					break;

				case 18:
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
	return regeneratorRuntime.wrap(function foreman$(_context5) {
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.AssociationField = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _lodash = __webpack_require__(0);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _searchInput = __webpack_require__(42);

var _searchInput2 = _interopRequireDefault(_searchInput);

var _sortableList = __webpack_require__(43);

var _sortableList2 = _interopRequireDefault(_sortableList);

var _list = __webpack_require__(62);

var _list2 = _interopRequireDefault(_list);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * The external dependencies.
                                                                                                                                                                                                     */


/**
 * The internal dependencies.
 */


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

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'div',
			{ className: 'carbon-association-container carbon-Association' },
			_react2.default.createElement(
				'div',
				{ className: 'selected-items-container' },
				_react2.default.createElement(
					'strong',
					null,
					_react2.default.createElement(
						'span',
						{ className: 'selected-counter' },
						field.value.length
					),
					_react2.default.createElement(
						'span',
						{ className: 'selected-label' },
						field.value.length !== 1 ? ' ' + carbonFieldsL10n.field.associationSelectedItems : ' ' + carbonFieldsL10n.field.associationSelectedItem
					),
					field.max !== -1 ? _react2.default.createElement(
						'span',
						{ className: 'remaining' },
						' ',
						carbonFieldsL10n.field.associationOutOf,
						' ',
						field.max
					) : null
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
(0, _withSetup2.default)(),

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
			setFieldValue(field.id, [].concat(_toConsumableArray(field.value), [(0, _lodash.cloneDeep)(item)]));
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.CheckboxField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(4);

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
var CheckboxField = exports.CheckboxField = function CheckboxField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    checked = _ref.checked,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		_field2.default,
		{ field: field, hide_required_label: true },
		_react2.default.createElement(
			'label',
			null,
			_react2.default.createElement('input', _extends({
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ColorField = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _picker = __webpack_require__(63);

var _picker2 = _interopRequireDefault(_picker);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(4);

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
	    hidePicker = _ref.hidePicker;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			'div',
			{ className: 'carbon-color' },
			_react2.default.createElement(
				'span',
				{ className: 'pickcolor button carbon-color-button hide-if-no-js', onClick: showPicker },
				_react2.default.createElement('span', { className: 'carbon-color-preview', style: { backgroundColor: field.value } }),
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
	}
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_COLOR])(enhance(ColorField));

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.ComplexField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(0);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _sortableList = __webpack_require__(43);

var _sortableList2 = _interopRequireDefault(_sortableList);

var _group = __webpack_require__(66);

var _group2 = _interopRequireDefault(_group);

var _actions = __webpack_require__(64);

var _actions2 = _interopRequireDefault(_actions);

var _popover = __webpack_require__(67);

var _popover2 = _interopRequireDefault(_popover);

var _tabs = __webpack_require__(69);

var _tabs2 = _interopRequireDefault(_tabs);

var _emptyNotice = __webpack_require__(65);

var _emptyNotice2 = _interopRequireDefault(_emptyNotice);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _selectors = __webpack_require__(11);

var _actions3 = __webpack_require__(7);

var _constants = __webpack_require__(4);

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
			{ className: (0, _classnames2.default)('carbon-subcontainer', 'carbon-grid', { 'multiple-groups': field.multiple_groups }, { 'carbon-Complex-tabbed': tabbed }) },
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
		multiple_groups: _propTypes2.default.bool
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
	switchComplexTab: _actions3.switchComplexTab
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
			ui = _extends({}, ui, {
				current_tab: field.value[0].id
			});
		}

		setupField(field.id, field.type, ui);

		if (field.required) {
			setupValidation(field.id, _constants.VALIDATION_COMPLEX);
		}
	}
}),

/**
 * Pass some props to the component.
 */
(0, _recompose.withProps)(function (_ref2) {
	var field = _ref2.field,
	    collapseComplexGroup = _ref2.collapseComplexGroup;

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
			return collapseComplexGroup(field.id, ui.item[0].id);
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.DateTimeField = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFlatpickr = __webpack_require__(135);

var _reactFlatpickr2 = _interopRequireDefault(_reactFlatpickr);

var _lodash = __webpack_require__(0);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(4);

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
var DateTimeField = exports.DateTimeField = function DateTimeField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    options = _ref.options,
	    buttonText = _ref.buttonText;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement(
			_reactFlatpickr2.default,
			{ options: options, className: 'carbon-field-group-holder' },
			_react2.default.createElement('input', {
				type: 'hidden',
				name: name,
				value: field.value,
				disabled: !field.ui.is_visible }),
			_react2.default.createElement('input', _extends({
				type: 'text',
				className: 'regular-text carbon-field-group-input',
				defaultValue: field.value,
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
		storage_format: _propTypes2.default.string,
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

		var selectedDate = (0, _lodash.head)(field.picker.selectedDates);
		var selectedDateStr = (0, _lodash.isUndefined)(selectedDate) ? '' : field.picker.formatDate(selectedDate, field.storage_format);
		if (field.value === selectedDateStr) {
			return;
		}

		field.picker.setDate(field.value, false, field.storage_format);
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
			var _ref4 = _slicedToArray(_ref3, 1),
			    selectedDate = _ref4[0];

			field.picker = instance;
		};
	},

	handleChange: function handleChange(_ref5) {
		var field = _ref5.field,
		    setFieldValue = _ref5.setFieldValue;
		return function (_ref6, selectedDateStr, instance) {
			var _ref7 = _slicedToArray(_ref6, 1),
			    selectedDate = _ref7[0];

			instance._selectedDateStr = selectedDateStr;

			var value = selectedDateStr ? instance.formatDate(selectedDate, field.storage_format) : '';

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
				if (_selectedDateStr && value !== _selectedDateStr) {
					instance.setDate(value, true);
				}
			} else {
				instance.clear();
			}
		};
	}
}),

/**
 * Pass some props to the component.
 */
(0, _recompose.withProps)(function (_ref8) {
	var field = _ref8.field,
	    handleReady = _ref8.handleReady,
	    handleChange = _ref8.handleChange,
	    handleClose = _ref8.handleClose;

	var buttonText = field.type === _constants.TYPE_TIME ? carbonFieldsL10n.field.selectTime : carbonFieldsL10n.field.selectDate;

	var options = _extends({}, field.picker_options, {
		wrap: true,
		onReady: handleReady,
		onChange: handleChange,
		onClose: handleClose
	});

	return {
		options: options,
		buttonText: buttonText
	};
}));

exports.default = (0, _recompose.setStatic)('type', [_constants.TYPE_DATE, _constants.TYPE_DATETIME, _constants.TYPE_TIME])(enhance(DateTimeField));

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.FileField = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _actions = __webpack_require__(7);

var _constants = __webpack_require__(4);

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
					{ className: (0, _classnames2.default)('carbon-attachment-preview', { 'hidden': !field.thumb_url }) },
					_react2.default.createElement('img', { src: field.thumb_url, className: 'thumbnail-image' }),
					_react2.default.createElement('div', { className: 'carbon-file-remove dashicons-before dashicons-no-alt', onClick: clearSelection })
				),
				_react2.default.createElement('input', {
					type: 'text',
					className: 'carbon-attachment-file-name',
					value: field.file_url,
					readOnly: true })
			),
			_react2.default.createElement(
				'span',
				{ className: 'button c2_open_media', onClick: openBrowser },
				field.button_label
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
		value_type: _propTypes2.default.string,
		preview: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
		thumb_url: _propTypes2.default.string,
		file_url: _propTypes2.default.string,
		file_name: _propTypes2.default.string,
		button_label: _propTypes2.default.string
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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HiddenField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _text = __webpack_require__(73);

var _constants = __webpack_require__(4);

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
var HiddenField = exports.HiddenField = function HiddenField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		_field2.default,
		{ field: field, className: 'hidden' },
		_react2.default.createElement('input', _extends({
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhance = exports.HtmlField = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(4);

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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _searchInput = __webpack_require__(42);

var _searchInput2 = _interopRequireDefault(_searchInput);

var _googleMap = __webpack_require__(70);

var _googleMap2 = _interopRequireDefault(_googleMap);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _actions = __webpack_require__(7);

var _constants = __webpack_require__(4);

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
			redraw: field.ui.redraw_map ? field.ui.redraw_map : false,
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RadioImageField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _radio = __webpack_require__(71);

var _constants = __webpack_require__(4);

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
						_react2.default.createElement('input', _extends({
							type: 'radio',
							name: name,
							value: option.value,
							checked: isChecked(option),
							disabled: !field.ui.is_visible,
							onChange: handleChange
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.RichTextField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _lodash = __webpack_require__(0);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _editor = __webpack_require__(72);

var _editor2 = _interopRequireDefault(_editor);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(4);

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
			{ id: field.id, richEditing: field.rich_editing, mediaButtons: field.media_buttons, content: field.value, onChange: handleChange },
			_react2.default.createElement('textarea', _extends({
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
(0, _withSetup2.default)(),

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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.SelectField = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _noOptions = __webpack_require__(32);

var _noOptions2 = _interopRequireDefault(_noOptions);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(4);

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
			{
				id: field.id,
				name: name,
				onChange: handleChange,
				disabled: !field.ui.is_visible,
				value: field.value },
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

		// If the field doesn't have a value,
		// use the first option as fallback.
		// in addition, make sure the first
		// option value is not already the same (i.e. empty)
		var firstOption = field.options[0].value;
		if (!field.value && field.value !== firstOption) {
			setFieldValue(field.id, firstOption, 'set', false);
		}

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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhance = exports.SeparatorField = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(4);

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
    { field: field },
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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.SetField = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _lodash = __webpack_require__(0);

var _helpers = __webpack_require__(16);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _noOptions = __webpack_require__(32);

var _noOptions2 = _interopRequireDefault(_noOptions);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * The external dependencies.
                                                                                                                                                                                                     */


/**
 * The internal dependencies.
 */


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
			return setFieldValue(field.id, target.checked ? [].concat(_toConsumableArray(field.value), [target.value]) : (0, _lodash.without)(field.value, target.value));
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.SidebarField = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _lodash = __webpack_require__(0);

var _actions = __webpack_require__(34);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _selectors = __webpack_require__(11);

var _constants = __webpack_require__(4);

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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enhance = exports.TextareaField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__(10);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(8);

var _withSetup2 = _interopRequireDefault(_withSetup);

var _constants = __webpack_require__(4);

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
var TextareaField = exports.TextareaField = function TextareaField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement(
		_field2.default,
		{ field: field },
		_react2.default.createElement('textarea', _extends({
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
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.workerRaiseFieldUpdatedApiEvent = workerRaiseFieldUpdatedApiEvent;
exports.default = foreman;

var _effects = __webpack_require__(5);

var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

var _actions = __webpack_require__(7);

var _selectors = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [workerRaiseFieldUpdatedApiEvent, foreman].map(regeneratorRuntime.mark); /**
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
  return regeneratorRuntime.wrap(function workerRaiseFieldUpdatedApiEvent$(_context) {
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
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
  return regeneratorRuntime.wrap(function foreman$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.all)([(0, _effects.takeEvery)(_actions.setFieldValue, workerRaiseFieldUpdatedApiEvent)]);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = foreman;

var _reduxSaga = __webpack_require__(38);

var _effects = __webpack_require__(5);

var _actions = __webpack_require__(7);

var _actions2 = __webpack_require__(12);

var _marked = [foreman].map(regeneratorRuntime.mark); /**
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
	return regeneratorRuntime.wrap(function foreman$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _effects.actionChannel)(_actions.updateField, _reduxSaga.buffers.none());

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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.workerAddOrCloneComplexGroup = workerAddOrCloneComplexGroup;
exports.workerRemoveComplexGroup = workerRemoveComplexGroup;
exports.workerDuplicateComplexGroups = workerDuplicateComplexGroups;
exports.default = foreman;

var _effects = __webpack_require__(5);

var _lodash = __webpack_require__(0);

var _selectors = __webpack_require__(11);

var _helpers = __webpack_require__(27);

var _actions = __webpack_require__(7);

var _constants = __webpack_require__(4);

var _marked = [workerAddOrCloneComplexGroup, workerRemoveComplexGroup, workerDuplicateComplexGroups, foreman].map(regeneratorRuntime.mark); /**
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

	return regeneratorRuntime.wrap(function workerAddOrCloneComplexGroup$(_context) {
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
						_context.next = 40;
						break;
					}

					_context.next = 40;
					return (0, _effects.put)((0, _actions.switchComplexTab)(fieldId, group.id));

				case 40:
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
	return regeneratorRuntime.wrap(function workerRemoveComplexGroup$(_context2) {
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
	return regeneratorRuntime.wrap(function workerDuplicateComplexGroups$(_context3) {
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
 * Start to work.
 *
 * @return {void}
 */
function foreman() {
	return regeneratorRuntime.wrap(function foreman$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					_context4.next = 2;
					return (0, _effects.all)([(0, _effects.takeEvery)(_actions.addComplexGroup, workerDuplicateComplexGroups), (0, _effects.takeEvery)(_actions.cloneComplexGroup, workerDuplicateComplexGroups), (0, _effects.takeEvery)(_actions.removeComplexGroup, workerDuplicateComplexGroups), (0, _effects.takeEvery)(_actions.addComplexGroup, workerAddOrCloneComplexGroup), (0, _effects.takeEvery)(_actions.cloneComplexGroup, workerAddOrCloneComplexGroup), (0, _effects.takeEvery)(_actions.removeComplexGroup, workerRemoveComplexGroup)]);

				case 2:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked[3], this);
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.workerValidate = workerValidate;
exports.workerConditionalLogic = workerConditionalLogic;
exports.default = foreman;

var _effects = __webpack_require__(5);

var _lodash = __webpack_require__(0);

var _constants = __webpack_require__(4);

var _actions = __webpack_require__(7);

var _selectors = __webpack_require__(11);

var _marked = [workerValidate, workerConditionalLogic, foreman].map(regeneratorRuntime.mark); /**
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

	return regeneratorRuntime.wrap(function workerValidate$(_context) {
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
					_iterator = rules[Symbol.iterator]();

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
	return regeneratorRuntime.wrap(function workerConditionalLogic$(_context2) {
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
	return regeneratorRuntime.wrap(function foreman$(_context3) {
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * The external dependencies.
                                                                                                                                                                                                                                                                   */


/**
 * The internal dependencies.
 */


exports.workerGeocoder = workerGeocoder;
exports.default = foreman;

var _effects = __webpack_require__(5);

var _actions = __webpack_require__(7);

var _marked = [workerGeocoder, foreman].map(regeneratorRuntime.mark);

/**
 * Get the location of the specified address.
 *
 * @param  {String} 	     address
 * @return {Promise<Object, String>}
 */
function geocode(address) {
	return new Promise(function (resolve, reject) {
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

	return regeneratorRuntime.wrap(function workerGeocoder$(_context) {
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
					return (0, _effects.put)((0, _actions.setFieldValue)(fieldId, _extends({}, _location2, {
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
	return regeneratorRuntime.wrap(function foreman$(_context2) {
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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.workerAddMultipleFiles = workerAddMultipleFiles;
exports.redrawAttachmentPreview = redrawAttachmentPreview;
exports.workerRedrawAttachmentPreview = workerRedrawAttachmentPreview;
exports.workerOpenMediaBrowser = workerOpenMediaBrowser;
exports.workerSetupMediaBrowser = workerSetupMediaBrowser;
exports.default = foreman;

var _effects = __webpack_require__(5);

var _lodash = __webpack_require__(0);

var _events = __webpack_require__(19);

var _selectors = __webpack_require__(11);

var _helpers = __webpack_require__(27);

var _actions = __webpack_require__(7);

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _marked = [workerAddMultipleFiles, redrawAttachmentPreview, workerRedrawAttachmentPreview, workerOpenMediaBrowser, workerSetupMediaBrowser, foreman].map(regeneratorRuntime.mark); /**
                                                                                                                                                                                        * The external dependencies.
                                                                                                                                                                                        */


/**
 * The internal dependencies.
 */


/**
 * Add complex groups for every additional attachment selected in the media browser
 *
 * @param  {Object} action
 * @return {void}
 */
function workerAddMultipleFiles(action) {
	var _action$payload, fieldId, attachments, field, parent, i, attachment, parentField, freshGroup, freshFieldId, freshField;

	return regeneratorRuntime.wrap(function workerAddMultipleFiles$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_action$payload = action.payload, fieldId = _action$payload.fieldId, attachments = _action$payload.attachments;
					_context.next = 3;
					return (0, _effects.select)(_selectors.getFieldById, fieldId);

				case 3:
					field = _context.sent;
					_context.next = 6;
					return (0, _effects.select)(_selectors.getComplexGroupById, field.parent);

				case 6:
					parent = _context.sent;

					if (!(0, _lodash.isUndefined)(parent)) {
						_context.next = 9;
						break;
					}

					return _context.abrupt('return');

				case 9:
					i = 0;

				case 10:
					if (!(i < attachments.length)) {
						_context.next = 31;
						break;
					}

					attachment = attachments[i];
					// add a new group to hold the attachment

					_context.next = 14;
					return (0, _effects.put)((0, _actions.addComplexGroup)(parent.field.id, parent.group.name));

				case 14:
					_context.next = 16;
					return (0, _effects.take)(_actions.receiveComplexGroup);

				case 16:
					_context.next = 18;
					return (0, _effects.select)(_selectors.getFieldById, parent.field.id);

				case 18:
					parentField = _context.sent;
					freshGroup = (0, _lodash.last)(parentField.value);
					freshFieldId = (0, _lodash.first)((0, _lodash.filter)(freshGroup.fields, function (f) {
						return f.base_name === field.base_name;
					})).id;
					_context.next = 23;
					return (0, _effects.select)(_selectors.getFieldById, freshFieldId);

				case 23:
					freshField = _context.sent;
					_context.next = 26;
					return redrawAttachmentPreview(freshField.id, attachment, freshField.default_thumb_url);

				case 26:
					_context.next = 28;
					return (0, _effects.put)((0, _actions.setFieldValue)(freshField.id, attachment.id));

				case 28:
					i++;
					_context.next = 10;
					break;

				case 31:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

/**
 * Trigger a preview redraw action based on an attachment
 *
 * @param  {Object} fieldId
 * @param  {Object} attachment
 * @param  {String} default_thumb_url
 * @return {void}
 */
function redrawAttachmentPreview(fieldId, attachment, default_thumb_url) {
	var thumbnail;
	return regeneratorRuntime.wrap(function redrawAttachmentPreview$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					if ((0, _lodash.isNull)(attachment)) {
						_context2.next = 8;
						break;
					}

					_context2.next = 3;
					return (0, _effects.call)(_helpers.getAttachmentThumbnail, attachment);

				case 3:
					thumbnail = _context2.sent;
					_context2.next = 6;
					return (0, _effects.put)((0, _actions.updateField)(fieldId, {
						file_name: attachment.filename,
						file_url: attachment.url,
						thumb_url: thumbnail || default_thumb_url,
						preview: attachment.id
					}));

				case 6:
					_context2.next = 10;
					break;

				case 8:
					_context2.next = 10;
					return (0, _effects.put)((0, _actions.updateField)(fieldId, {
						file_name: '',
						file_url: '',
						thumb_url: '',
						preview: ''
					}));

				case 10:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked[1], this);
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

	return regeneratorRuntime.wrap(function workerRedrawAttachmentPreview$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_action$payload2 = action.payload, fieldId = _action$payload2.fieldId, value = _action$payload2.value;

					// Don't update the preview if the field doesn't have correct id.

					if (!(fieldId !== field.id)) {
						_context3.next = 3;
						break;
					}

					return _context3.abrupt('return');

				case 3:
					_context3.next = 5;
					return (0, _effects.select)(_selectors.getFieldById, field.id);

				case 5:
					freshField = _context3.sent;

					if (!(freshField.preview === value)) {
						_context3.next = 8;
						break;
					}

					return _context3.abrupt('return');

				case 8:
					attachment = null;

					if (!value) {
						_context3.next = 13;
						break;
					}

					_context3.next = 12;
					return window.wp.media.attachment(value).fetch();

				case 12:
					attachment = _context3.sent;

				case 13:
					_context3.next = 15;
					return redrawAttachmentPreview(fieldId, attachment, field.default_thumb_url);

				case 15:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked[2], this);
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
	var liveField, _ref, selection, _selection, attachment, attachments;

	return regeneratorRuntime.wrap(function workerOpenMediaBrowser$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					if (!(action.payload !== field.id)) {
						_context4.next = 2;
						break;
					}

					return _context4.abrupt('return');

				case 2:
					_context4.next = 4;
					return (0, _effects.select)(_selectors.getFieldById, action.payload);

				case 4:
					liveField = _context4.sent;

					browser.once('open', function (value) {
						var attachment = value ? window.wp.media.attachment(value) : null;
						browser.state().get('selection').set(attachment ? [attachment] : []);
					}.bind(null, liveField.value));

					_context4.next = 8;
					return (0, _effects.call)([browser, browser.open]);

				case 8:
					if (false) {
						_context4.next = 23;
						break;
					}

					_context4.next = 11;
					return (0, _effects.take)(channel);

				case 11:
					_ref = _context4.sent;
					selection = _ref.selection;
					_selection = _toArray(selection), attachment = _selection[0], attachments = _selection.slice(1);
					_context4.next = 16;
					return redrawAttachmentPreview(field.id, attachment, field.default_thumb_url);

				case 16:
					_context4.next = 18;
					return (0, _effects.put)((0, _actions.setFieldValue)(field.id, attachment.id));

				case 18:
					if ((0, _lodash.isEmpty)(attachments)) {
						_context4.next = 21;
						break;
					}

					_context4.next = 21;
					return (0, _effects.put)((0, _actions.addMultipleFiles)(field.id, attachments));

				case 21:
					_context4.next = 8;
					break;

				case 23:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked[3], this);
}

/**
 * Initial setup of the media browser.
 *
 * @param  {Object} action
 * @return {void}
 */
function workerSetupMediaBrowser(action) {
	var field, window_button_label, window_label, type_filter, value_type, channel, _ref2, browser;

	return regeneratorRuntime.wrap(function workerSetupMediaBrowser$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					_context5.next = 2;
					return (0, _effects.select)(_selectors.getFieldById, action.payload);

				case 2:
					field = _context5.sent;
					window_button_label = field.window_button_label, window_label = field.window_label, type_filter = field.type_filter, value_type = field.value_type;
					_context5.next = 6;
					return (0, _effects.call)(_events.createMediaBrowserChannel, {
						title: window_label,
						library: {
							type: type_filter
						},
						button: {
							text: window_button_label
						},
						multiple: true
					});

				case 6:
					channel = _context5.sent;
					_context5.next = 9;
					return (0, _effects.take)(channel);

				case 9:
					_ref2 = _context5.sent;
					browser = _ref2.browser;
					_context5.next = 13;
					return (0, _effects.takeEvery)(_actions.openMediaBrowser, workerOpenMediaBrowser, channel, field, browser);

				case 13:
					_context5.next = 15;
					return (0, _effects.takeEvery)(_actions.setFieldValue, workerRedrawAttachmentPreview, field);

				case 15:
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
	return regeneratorRuntime.wrap(function foreman$(_context6) {
		while (1) {
			switch (_context6.prev = _context6.next) {
				case 0:
					_context6.next = 2;
					return (0, _effects.all)([(0, _effects.takeEvery)(_actions.setupMediaBrowser, workerSetupMediaBrowser), (0, _effects.takeEvery)(_actions.addMultipleFiles, workerAddMultipleFiles)]);

				case 2:
				case 'end':
					return _context6.stop();
			}
		}
	}, _marked[5], this);
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.workerReceiveComplexGroup = workerReceiveComplexGroup;
exports.workerExpandComplexGroup = workerExpandComplexGroup;
exports.workerSwitchComplexTab = workerSwitchComplexTab;
exports.workerToggleContainerBox = workerToggleContainerBox;
exports.workerSwitchContainerTab = workerSwitchContainerTab;
exports.workerRedraw = workerRedraw;
exports.default = foreman;

var _effects = __webpack_require__(5);

var _lodash = __webpack_require__(0);

var _selectors = __webpack_require__(14);

var _actions = __webpack_require__(12);

var _selectors2 = __webpack_require__(11);

var _actions2 = __webpack_require__(7);

var _constants = __webpack_require__(4);

var _marked = [workerReceiveComplexGroup, workerExpandComplexGroup, workerSwitchComplexTab, workerToggleContainerBox, workerSwitchContainerTab, workerRedraw, foreman].map(regeneratorRuntime.mark); /**
                                                                                                                                                                                                      * The external dependencies.
                                                                                                                                                                                                      */


/**
 * The internal dependencies.
 */


/**
 * Redraw maps when a complex group is added/cloned.
 *
 * @param  {Object}  action
 * @param  {Object}  action.payload
 * @param  {String}  action.payload.groupId
 * @param  {Boolean} action.payload.collapsed
 * @return {void}
 */
function workerReceiveComplexGroup(_ref) {
  var group = _ref.payload.group;
  return regeneratorRuntime.wrap(function workerReceiveComplexGroup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = _effects.call;
          _context.t1 = workerRedraw;
          _context.next = 4;
          return (0, _effects.select)(_selectors2.getFieldsByParent, group.id);

        case 4:
          _context.t2 = _context.sent;
          _context.next = 7;
          return (0, _context.t0)(_context.t1, _context.t2);

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

/**
 * Redraw maps when the complex group is expanded.
 *
 * @param  {Object}  action
 * @param  {Object}  action.payload
 * @param  {String}  action.payload.groupId
 * @param  {Boolean} action.payload.collapsed
 * @return {void}
 */
function workerExpandComplexGroup(_ref2) {
  var _ref2$payload = _ref2.payload,
      groupId = _ref2$payload.groupId,
      collapsed = _ref2$payload.collapsed;
  return regeneratorRuntime.wrap(function workerExpandComplexGroup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (collapsed) {
            _context2.next = 8;
            break;
          }

          _context2.t0 = _effects.call;
          _context2.t1 = workerRedraw;
          _context2.next = 5;
          return (0, _effects.select)(_selectors2.getFieldsByParent, groupId);

        case 5:
          _context2.t2 = _context2.sent;
          _context2.next = 8;
          return (0, _context2.t0)(_context2.t1, _context2.t2);

        case 8:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

/**
 * Redraw maps when the tab of complex field is changed.
 *
 * @param  {Object}  action
 * @param  {Object}  action.payload
 * @param  {String}  action.payload.groupId
 * @return {void}
 */
function workerSwitchComplexTab(_ref3) {
  var groupId = _ref3.payload.groupId;
  return regeneratorRuntime.wrap(function workerSwitchComplexTab$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = _effects.call;
          _context3.t1 = workerRedraw;
          _context3.next = 4;
          return (0, _effects.select)(_selectors2.getFieldsByParent, groupId);

        case 4:
          _context3.t2 = _context3.sent;
          _context3.next = 7;
          return (0, _context3.t0)(_context3.t1, _context3.t2);

        case 7:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

/**
 * Redraw maps when the container is expanded.
 *
 * @param  {Object}  action
 * @param  {Object}  action.payload
 * @param  {String}  action.payload.containerId
 * @param  {Boolean} action.payload.visible
 * @return {void}
 */
function workerToggleContainerBox(_ref4) {
  var _ref4$payload = _ref4.payload,
      containerId = _ref4$payload.containerId,
      visible = _ref4$payload.visible;
  return regeneratorRuntime.wrap(function workerToggleContainerBox$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (!visible) {
            _context4.next = 8;
            break;
          }

          _context4.t0 = _effects.call;
          _context4.t1 = workerRedraw;
          _context4.next = 5;
          return (0, _effects.select)(_selectors2.getFieldsByParent, containerId);

        case 5:
          _context4.t2 = _context4.sent;
          _context4.next = 8;
          return (0, _context4.t0)(_context4.t1, _context4.t2);

        case 8:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

/**
 * Redraw maps when the container's tab is changed.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.containerId
 * @param  {String} action.payload.tabId
 * @return {void}
 */
function workerSwitchContainerTab(_ref5) {
  var _ref5$payload = _ref5.payload,
      containerId = _ref5$payload.containerId,
      tabId = _ref5$payload.tabId;
  var container, fieldNames, fields;
  return regeneratorRuntime.wrap(function workerSwitchContainerTab$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.select)(_selectors.getContainerById, containerId);

        case 2:
          container = _context5.sent;
          _context5.next = 5;
          return (0, _effects.call)(_lodash.find, container.settings.tabs, function (fields, key) {
            return (0, _lodash.kebabCase)(key) === tabId;
          });

        case 5:
          fieldNames = _context5.sent;
          _context5.next = 8;
          return (0, _effects.select)(_selectors2.getFieldsByParent, containerId);

        case 8:
          fields = _context5.sent;
          _context5.next = 11;
          return (0, _effects.call)(_lodash.filter, fields, function (_ref6) {
            var name = _ref6.name;
            return fieldNames.indexOf(name) > -1;
          });

        case 11:
          fields = _context5.sent;
          _context5.next = 14;
          return (0, _effects.call)(workerRedraw, fields);

        case 14:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

/**
 * Redraw the maps.
 *
 * @param  {Object} fields
 * @return {void}
 */
function workerRedraw(fields) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, field;

  return regeneratorRuntime.wrap(function workerRedraw$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          fields = (0, _lodash.filter)(fields, ['type', _constants.TYPE_MAP]);
          fields = (0, _lodash.filter)(fields, function (_ref7) {
            var redraw_map = _ref7.ui.redraw_map;
            return !redraw_map;
          });

          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context6.prev = 5;
          _iterator = fields[Symbol.iterator]();

        case 7:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context6.next = 14;
            break;
          }

          field = _step.value;
          _context6.next = 11;
          return (0, _effects.put)((0, _actions2.redrawMap)(field.id));

        case 11:
          _iteratorNormalCompletion = true;
          _context6.next = 7;
          break;

        case 14:
          _context6.next = 20;
          break;

        case 16:
          _context6.prev = 16;
          _context6.t0 = _context6['catch'](5);
          _didIteratorError = true;
          _iteratorError = _context6.t0;

        case 20:
          _context6.prev = 20;
          _context6.prev = 21;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 23:
          _context6.prev = 23;

          if (!_didIteratorError) {
            _context6.next = 26;
            break;
          }

          throw _iteratorError;

        case 26:
          return _context6.finish(23);

        case 27:
          return _context6.finish(20);

        case 28:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this, [[5, 16, 20, 28], [21,, 23, 27]]);
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
function foreman(store) {
  return regeneratorRuntime.wrap(function foreman$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.takeEvery)(_actions2.receiveComplexGroup, workerReceiveComplexGroup);

        case 2:
          _context7.next = 4;
          return (0, _effects.takeEvery)(_actions2.expandComplexGroup, workerExpandComplexGroup);

        case 4:
          _context7.next = 6;
          return (0, _effects.takeEvery)(_actions2.switchComplexTab, workerSwitchComplexTab);

        case 6:
          _context7.next = 8;
          return (0, _effects.takeEvery)(_actions.toggleContainerBox, workerToggleContainerBox);

        case 8:
          _context7.next = 10;
          return (0, _effects.takeEvery)(_actions.switchContainerTab, workerSwitchContainerTab);

        case 10:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[6], this);
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.shouldValidate = shouldValidate;
exports.workerValidate = workerValidate;
exports.workerSetup = workerSetup;
exports.default = foreman;

var _effects = __webpack_require__(5);

var _lodash = __webpack_require__(0);

var _registry = __webpack_require__(26);

var _actions = __webpack_require__(7);

var _selectors = __webpack_require__(11);

var _helpers = __webpack_require__(27);

var _marked = [workerValidate, workerSetup, foreman].map(regeneratorRuntime.mark); /**
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

	if (!(0, _lodash.isUndefined)(payload.data) && (0, _lodash.isUndefined)(payload.data.value)) {
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

	return regeneratorRuntime.wrap(function workerValidate$(_context) {
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
					return (0, _effects.call)(_effects.delay, 250);

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

					if (!(0, _lodash.isNull)(error)) {
						_context.next = 22;
						break;
					}

					_context.next = 20;
					return (0, _effects.put)((0, _actions.markFieldAsValid)(fieldId));

				case 20:
					_context.next = 24;
					break;

				case 22:
					_context.next = 24;
					return (0, _effects.put)((0, _actions.markFieldAsInvalid)(fieldId, error));

				case 24:
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
	return regeneratorRuntime.wrap(function workerSetup$(_context2) {
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
					return [(0, _effects.takeLatest)(_actions.updateField, workerValidate, validator.handler, fieldId, validator.debounce), (0, _effects.takeEvery)(_actions.validateField, workerValidate, validator.handler, fieldId, false)];

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
	return regeneratorRuntime.wrap(function foreman$(_context3) {
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = exports.type = undefined;
exports.handler = handler;

var _lodash = __webpack_require__(0);

var _constants = __webpack_require__(4);

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
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = exports.type = undefined;
exports.handler = handler;

var _lodash = __webpack_require__(0);

var _constants = __webpack_require__(4);

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
      value = field.value,
      labels = field.labels;


  if ((0, _lodash.isEmpty)(value)) {
    return carbonFieldsL10n.field.messageRequiredField;
  }

  if (min > 0 && value.length < min) {
    var label = min === 1 ? labels.singular_name : labels.plural_name;

    return carbonFieldsL10n.field.complexMinNumRowsNotReached.replace('%1$d', min).replace('%2$s', label.toLowerCase());
  }

  return null;
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The external dependencies.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


/**
 * The internal dependencies.
 */


var _lodash = __webpack_require__(0);

var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

var _objectPathImmutable = __webpack_require__(36);

var _objectPathImmutable2 = _interopRequireDefault(_objectPathImmutable);

var _constants = __webpack_require__(4);

var _selectors = __webpack_require__(11);

var _actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {

	/**
  * Constructor
  * 
  * @param {Object} store The entire redux store
  */
	function Api(store) {
		_classCallCheck(this, Api);

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


	_createClass(Api, [{
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
					var fieldValue = _defineProperty({}, _constants.TYPE_PROPERTY, group.name);

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

exports.default = Api;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.workerAddSidebar = workerAddSidebar;
exports.default = foreman;

var _effects = __webpack_require__(5);

var _actions = __webpack_require__(34);

var _helpers = __webpack_require__(75);

var _marked = [workerAddSidebar, foreman].map(regeneratorRuntime.mark); /**
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
  return regeneratorRuntime.wrap(function workerAddSidebar$(_context) {
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
  return regeneratorRuntime.wrap(function foreman$(_context2) {
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
/* 131 */
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

var _reduxSaga = __webpack_require__(38);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _redux = __webpack_require__(132);

var _lodash = __webpack_require__(0);

var _reducer = __webpack_require__(60);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(76);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(74);

var _reducer6 = _interopRequireDefault(_reducer5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(196)

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(331)

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(334)

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(335)

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(341)

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(842)

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__;

/***/ })
/******/ ]);
//# sourceMappingURL=carbon.core.js.map