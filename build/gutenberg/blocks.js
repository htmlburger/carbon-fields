/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/blocks/components/block-edit/index.js":
/*!********************************************************!*\
  !*** ./packages/blocks/components/block-edit/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ \"@wordpress/editor\");\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/components/block-edit/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../field */ \"./packages/blocks/components/field/index.js\");\n/* harmony import */ var _server_side_render__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../server-side-render */ \"./packages/blocks/components/server-side-render/index.js\");\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n/**\n * External dependencies.\n */\n\n\n\n\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\nclass BlockEdit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Component {\n  constructor(...args) {\n    super(...args);\n    /**\n     * Local state.\n     *\n     * @type {Object}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"state\", {\n      mode: this.props.container.settings.mode,\n      currentTab: this.props.supportsTabs ? Object.keys(this.props.container.settings.tabs)[0] : null\n    });\n    /**\n     * Handles the change of the field's value.\n     *\n     * @param  {string} fieldId\n     * @param  {mixed}  value\n     * @return {void}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleFieldChange\", (fieldId, value) => {\n      const {\n        attributes,\n        setAttributes\n      } = this.props;\n      const fieldName = fieldId.replace(/^.+__(.+)?$/, '$1');\n      setAttributes({\n        data: _objectSpread(_objectSpread({}, attributes.data), {}, {\n          [fieldName]: value\n        })\n      });\n    });\n    /**\n     * Handles changing of the mode.\n     *\n     * @return {void}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleModeChange\", () => {\n      this.setState({\n        mode: this.isInEditMode ? 'preview' : 'edit'\n      });\n    });\n    /**\n     * Handles changing on the tabs.\n     *\n     * @param  {string} tab\n     * @return {void}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleTabChange\", tab => {\n      this.setState({\n        currentTab: tab\n      });\n    });\n    /**\n     * Renders a field.\n     *\n     * @param  {Object} field\n     * @param  {number} index\n     * @return {Object}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"renderField\", (field, index) => {\n      const {\n        clientId,\n        container,\n        attributes\n      } = this.props;\n      const FieldEdit = (0,_carbon_fields_core__WEBPACK_IMPORTED_MODULE_8__.getFieldType)(field.type, 'block');\n      if (!FieldEdit) {\n        return null;\n      }\n      const id = `cf-${clientId}__${field.base_name}`;\n      const value = (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(attributes.data, field.base_name, field.default_value);\n      return wp.element.createElement(_field__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        key: index,\n        id: id,\n        field: field\n      }, wp.element.createElement(FieldEdit, {\n        id: id,\n        containerId: container.id,\n        blockId: clientId,\n        value: value,\n        field: field,\n        name: field.base_name,\n        onChange: this.handleFieldChange\n      }));\n    });\n  }\n  /**\n   * Returns whether the block is in edit mode.\n   *\n   * @return {boolean}\n   */\n  get isInEditMode() {\n    return this.state.mode === 'edit';\n  }\n\n  /**\n   * Returns whether the block is in edit mode.\n   *\n   * @return {boolean}\n   */\n  get isInPreviewMode() {\n    return this.state.mode === 'preview';\n  }\n  /**\n   * Renders the fields in tabs.\n   *\n   * @param  {string[]} fieldNames\n   * @return {Object[]}\n   */\n  renderTabbedFields(fieldNames) {\n    const {\n      fields\n    } = this.props;\n    return (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)(fieldNames, (fieldName, index) => {\n      const field = (0,lodash__WEBPACK_IMPORTED_MODULE_7__.find)(fields, ['name', fieldName]);\n      return this.renderField(field, index);\n    });\n  }\n\n  /**\n   * Renders the fields that aren't in tabs.\n   *\n   * @return {Object}\n   */\n  renderNonTabbedFields() {\n    return wp.element.createElement(\"div\", {\n      className: \"cf-block__fields\"\n    }, this.props.fields.map(this.renderField));\n  }\n\n  /**\n   * Render the component.\n   *\n   * @return {Object}\n   */\n  render() {\n    const {\n      currentTab\n    } = this.state;\n    const {\n      clientId,\n      container,\n      supportsTabs,\n      supportsPreview,\n      supportsInnerBlocks\n    } = this.props;\n    const innerBlocks = supportsInnerBlocks && this.isInEditMode && wp.element.createElement(\"div\", {\n      className: \"cf-block__inner-blocks\"\n    }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {\n      template: container.settings.inner_blocks.template,\n      templateLock: container.settings.inner_blocks.template_lock,\n      allowedBlocks: container.settings.inner_blocks.allowed_blocks\n    }));\n    return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, container.settings.inner_blocks.position === 'above' && innerBlocks, supportsPreview && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {\n      label: \"Options\",\n      controls: [{\n        icon: this.isInEditMode ? 'visibility' : 'hidden',\n        title: this.isInEditMode ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show preview', 'carbon-fields-ui') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Hide preview', 'carbon-fields-ui'),\n        onClick: this.handleModeChange\n      }]\n    })), this.isInEditMode && supportsTabs && wp.element.createElement(\"div\", {\n      className: \"cf-block__tabs\"\n    }, wp.element.createElement(\"ul\", {\n      className: \"cf-block__tabs-list\"\n    }, (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)(container.settings.tabs, (fieldNames, tabName) => {\n      const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('cf-block__tabs-item', {\n        'cf-block__tabs-item--current': tabName === currentTab\n      });\n      return wp.element.createElement(\"li\", {\n        key: tabName,\n        className: classes,\n        onClick: () => this.handleTabChange(tabName)\n      }, tabName);\n    }))), this.isInEditMode && (supportsTabs ? (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)(container.settings.tabs, (fieldNames, tabName) => {\n      return wp.element.createElement(\"div\", {\n        className: \"cf-block__fields\",\n        key: tabName,\n        hidden: tabName !== currentTab\n      }, this.renderTabbedFields(fieldNames));\n    }) : this.renderNonTabbedFields()), this.isInPreviewMode && wp.element.createElement(\"div\", {\n      className: \"cf-block__preview\"\n    }, wp.element.createElement(_server_side_render__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      clientId: clientId\n    })), container.settings.inner_blocks.position === 'below' && innerBlocks, this.isInPreviewMode && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, supportsTabs ? (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)(container.settings.tabs, (fieldNames, tabName) => {\n      return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {\n        key: tabName,\n        title: tabName\n      }, wp.element.createElement(\"div\", {\n        className: \"cf-block__fields\"\n      }, this.renderTabbedFields(fieldNames)));\n    }) : wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {\n      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Fields', 'carbon-fields-ui')\n    }, this.renderNonTabbedFields())));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, {\n  clientId,\n  name\n}) => {\n  const {\n    hasBlockSupport\n  } = select('core/blocks');\n  const {\n    getBlockRootClientId\n  } = select('core/block-editor');\n  const {\n    getContainerDefinitionByBlockName,\n    getFieldDefinitionsByBlockName\n  } = select('carbon-fields/blocks');\n  const rootClientId = getBlockRootClientId(clientId);\n  return {\n    container: getContainerDefinitionByBlockName(name),\n    fields: getFieldDefinitionsByBlockName(name),\n    supportsTabs: hasBlockSupport(name, 'tabs'),\n    supportsPreview: hasBlockSupport(name, 'preview') && !rootClientId,\n    supportsInnerBlocks: hasBlockSupport(name, 'innerBlocks')\n  };\n})(BlockEdit));\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/components/block-edit/index.js?");

/***/ }),

/***/ "./packages/blocks/components/block-save/index.js":
/*!********************************************************!*\
  !*** ./packages/blocks/components/block-save/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ \"@wordpress/editor\");\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * External dependencies.\n */\n\n\nclass BlockSave extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {\n  /**\n   * Render the component.\n   *\n   * @return {null}\n   */\n  render() {\n    return null;\n  }\n}\n\n/**\n * Adds the content of inner blocks to the saved content.\n *\n * @param  {mixed} element\n * @param  {Object} blockType\n * @return {mixed}\n */\nfunction addInnerBlocksContent(element, blockType) {\n  if (!/^carbon\\-fields\\/.+$/.test(blockType.name)) {\n    return element;\n  }\n  if (!blockType.supports.innerBlocks) {\n    return element;\n  }\n  return wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);\n}\nwp.hooks.addFilter('blocks.getSaveElement', 'carbon-fields/blocks', addInnerBlocksContent);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockSave);\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/components/block-save/index.js?");

/***/ }),

/***/ "./packages/blocks/components/field/index.js":
/*!***************************************************!*\
  !*** ./packages/blocks/components/field/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/components/field/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__.withFilters)('carbon-fields.field-wrapper.block')(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__.Field));\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/components/field/index.js?");

/***/ }),

/***/ "./packages/blocks/components/not-supported-field/index.js":
/*!*****************************************************************!*\
  !*** ./packages/blocks/components/not-supported-field/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * The external dependencies.\n */\n\n\n/**\n * Render a notice to inform the user that the field doesn't have\n * any options.\n *\n * @return {React.Element}\n */\nconst NotSupportedField = ({\n  type\n}) => wp.element.createElement(\"em\", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Field of type '%s' is not supported in Gutenberg.`, 'carbon-fields-ui'), [type]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotSupportedField);\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/components/not-supported-field/index.js?");

/***/ }),

/***/ "./packages/blocks/components/server-side-render/index.js":
/*!****************************************************************!*\
  !*** ./packages/blocks/components/server-side-render/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ \"@wordpress/api-fetch\");\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);\n\n/**\n * External dependencies.\n */\n\n\n\n\n\n\n\n\n/**\n * This component is slightly modified version of the `ServerSideRender` component\n * that comes by default with Gutenberg.\n *\n * @see https://github.com/WordPress/gutenberg/tree/master/packages/components/src/server-side-render\n */\nclass ServerSideRender extends _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Component {\n  constructor(...args) {\n    super(...args);\n    /**\n     * Local state.\n     *\n     * @type {Object}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"state\", {\n      response: null\n    });\n  }\n  /**\n   * Lifecycle hook.\n   *\n   * @return {void}\n   */\n  componentDidMount() {\n    this.isStillMounted = true;\n\n    // Do the initial rendering.\n    this.fetch(this.props);\n\n    // Only debounce once the initial fetch occurs to ensure that the first\n    // renders show data as soon as possible.\n    this.fetch = (0,lodash__WEBPACK_IMPORTED_MODULE_7__.debounce)(this.fetch, 500);\n  }\n\n  /**\n   * Lifecycle hook.\n   *\n   * @return {void}\n   */\n  componentWillUnmount() {\n    this.isStillMounted = false;\n  }\n\n  /**\n   * Lifecycle hook.\n   *\n   * @param  {Object} prevProps\n   * @return {void}\n   */\n  componentDidUpdate(prevProps) {\n    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_7__.isEqual)(prevProps, this.props)) {\n      this.fetch(this.props);\n    }\n  }\n\n  /**\n   * Fetch the preview of the block.\n   *\n   * @param  {Object} props\n   * @return {void}\n   */\n  fetch(props) {\n    if (!this.isStillMounted) {\n      return;\n    }\n    if (null !== this.state.response) {\n      this.setState({\n        response: null\n      });\n    }\n    const {\n      block\n    } = props;\n\n    // Store the latest fetch request so that when we process it, we can\n    // check if it is the current request, to avoid race conditions on slow networks.\n    const fetchRequest = this.currentFetchRequest = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({\n      method: 'post',\n      path: '/carbon-fields/v1/block-renderer',\n      data: {\n        name: block.name,\n        content: (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.serialize)([block])\n      }\n    }).then(response => {\n      if (this.isStillMounted && fetchRequest === this.currentFetchRequest && response && response.rendered) {\n        this.setState({\n          response: response.rendered\n        });\n      }\n    }).catch(error => {\n      if (this.isStillMounted && fetchRequest === this.currentFetchRequest) {\n        this.setState({\n          response: {\n            error: true,\n            errorMsg: error.message\n          }\n        });\n      }\n    });\n  }\n\n  /**\n   * Render the component.\n   *\n   * @return {Object}\n   */\n  render() {\n    const {\n      response\n    } = this.state;\n    const {\n      className\n    } = this.props;\n    if (!response) {\n      return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {\n        className: className\n      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null));\n    } else if (response.error) {\n      return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {\n        className: className\n      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Error loading block: %s', 'carbon-fields-ui'), response.errorMsg));\n    } else if (!response.length) {\n      return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {\n        className: className\n      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('No results found.', 'carbon-fields-ui'));\n    }\n    return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, {\n      key: \"html\",\n      className: className\n    }, response);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)((select, {\n  clientId\n}) => {\n  const {\n    getBlock\n  } = select('core/block-editor');\n  return {\n    block: getBlock(clientId)\n  };\n})(ServerSideRender));\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/components/server-side-render/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/association/index.js":
/*!*****************************************************!*\
  !*** ./packages/blocks/fields/association/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/association/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n/**\n * External dependencies.\n */\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('carbon-fields.association.block', 'carbon-fields/blocks', (0,_carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__.withProps)(props => {\n  return {\n    hierarchyResolver() {\n      // Get the block that contains the field.\n      const block = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/block-editor').getBlock(props.blockId);\n\n      // Get the path.\n      const path = props.id.split('__');\n\n      // Remove the chunk that contains the block identifier.\n      path.shift();\n\n      // Get the hierarchy.\n      let hierarchy = path.shift();\n      let accessor = `data.${hierarchy}`;\n\n      // Visit every branch in the tree so we can get the full hierarchy.\n      while (path.length > 0) {\n        const chunk = path.shift();\n        const isGroup = chunk.indexOf('cf-') === 0;\n        if (isGroup) {\n          const groups = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(block.attributes, `${accessor}`);\n          const group = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(groups, ['_id', chunk]);\n          const groupIndex = groups.indexOf(group);\n          accessor = `${accessor}.${groupIndex}`;\n          hierarchy = `${hierarchy}[${groupIndex}]:${group._type}/`;\n        } else {\n          accessor = `${accessor}.${chunk}`;\n          hierarchy = `${hierarchy}${chunk}`;\n        }\n      }\n      return hierarchy;\n    }\n  };\n}));\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/association/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/block-preview/index.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/fields/block-preview/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/block-preview/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/block-preview/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/complex/index.js":
/*!*************************************************!*\
  !*** ./packages/blocks/fields/complex/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/complex/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/field */ \"./packages/blocks/components/field/index.js\");\n\n/**\n * External dependencies.\n */\n\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\nclass ComplexField extends _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Component {\n  constructor(...args) {\n    super(...args);\n    /**\n     * Local state.\n     *\n     * @type {Object}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"state\", {\n      collapsedGroups: this.props.value.reduce((accumulator, {\n        _id,\n        _type\n      }) => {\n        const group = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.find)(this.props.field.groups, ['name', _type]);\n        if (!group.collapsed) {\n          return accumulator;\n        }\n        return accumulator.concat(_id);\n      }, [])\n    });\n    /**\n     * Handles adding of group.\n     *\n     * @param  {Object}   group\n     * @param  {Function} callback\n     * @return {void}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleAddGroup\", (group, callback) => {\n      const {\n        id,\n        value,\n        onChange\n      } = this.props;\n      const data = {};\n      data._id = (0,_carbon_fields_core__WEBPACK_IMPORTED_MODULE_5__.uniqueId)();\n      data._type = group.name;\n      group.fields.reduce((accumulator, field) => {\n        accumulator[field.base_name] = field.default_value;\n        return accumulator;\n      }, data);\n      onChange(id, value.concat(data));\n      callback(data);\n    });\n    /**\n     * Handles cloning of group.\n     *\n     * @param  {Object}   group\n     * @param  {Function} callback\n     * @return {void}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleCloneGroup\", (group, callback) => {\n      const {\n        id,\n        value,\n        onChange\n      } = this.props;\n      const index = value.indexOf(group);\n      const clonedGroup = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(group);\n      clonedGroup._id = (0,_carbon_fields_core__WEBPACK_IMPORTED_MODULE_5__.uniqueId)();\n      onChange(id, immer__WEBPACK_IMPORTED_MODULE_1___default()(value, draft => {\n        draft.splice(index + 1, 0, clonedGroup);\n      }));\n      callback(clonedGroup);\n    });\n    /**\n     * Handles removing of group.\n     *\n     * @param  {Object} group\n     * @return {void}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleRemoveGroup\", group => {\n      const {\n        id,\n        value,\n        onChange\n      } = this.props;\n      const groupIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.findIndex)(value, ['_id', group._id]);\n      onChange(id, immer__WEBPACK_IMPORTED_MODULE_1___default()(value, draft => {\n        draft.splice(groupIndex, 1);\n      }));\n      this.setState(({\n        collapsedGroups\n      }) => ({\n        collapsedGroups: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.without)(collapsedGroups, group._id)\n      }));\n    });\n    /**\n     * Handles expanding/collapsing of group.\n     *\n     * @param  {string} groupId\n     * @return {void}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleToggleGroup\", groupId => {\n      this.setState(({\n        collapsedGroups\n      }) => {\n        if (collapsedGroups.indexOf(groupId) > -1) {\n          collapsedGroups = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.without)(collapsedGroups, groupId);\n        } else {\n          collapsedGroups = [...collapsedGroups, groupId];\n        }\n        return {\n          collapsedGroups\n        };\n      });\n    });\n    /**\n     * Handles expanding/collapsing of all groups.\n     *\n     * @return {void}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleToggleAllGroups\", () => {\n      const {\n        value\n      } = this.props;\n      this.setState(({\n        collapsedGroups\n      }) => {\n        if (collapsedGroups.length !== value.length) {\n          collapsedGroups = value.map(group => group._id);\n        } else {\n          collapsedGroups = [];\n        }\n        return {\n          collapsedGroups\n        };\n      });\n    });\n    /**\n     * Handles setuping of group.\n     *\n     * @param  {Object} group\n     * @param  {Object} props\n     * @return {Object}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleGroupSetup\", (group, props) => {\n      const fields = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_4__.find)(this.props.field.groups, ['name', group._type]), 'fields', []);\n      const values = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.omit)(group, ['_id', '_type']);\n      return (0,lodash__WEBPACK_IMPORTED_MODULE_4__.assign)({}, props, {\n        id: group._id,\n        fields: fields,\n        collapsed: this.state.collapsedGroups.indexOf(group._id) > -1,\n        context: 'block',\n        values\n      });\n    });\n    /**\n     * Handles setuping of group's field.\n     *\n     * @param  {Object} field\n     * @param  {Object} props\n     * @param  {Object} groupProps\n     * @return {Array}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleGroupFieldSetup\", (field, props, groupProps) => {\n      const {\n        blockId\n      } = this.props;\n      const id = `${this.props.id}__${groupProps.id}__${field.base_name}`;\n      const value = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.get)(groupProps, `values.${field.base_name}`);\n      return [_components_field__WEBPACK_IMPORTED_MODULE_7__[\"default\"], (0,lodash__WEBPACK_IMPORTED_MODULE_4__.assign)({}, props, {\n        key: id,\n        id: id,\n        name: field.base_name,\n        containerId: this.props.containerId,\n        blockId,\n        field,\n        value,\n        onChange: this.handleGroupFieldChange\n      })];\n    });\n    /**\n     * Handles the change of group field.\n     *\n     * @param  {string} fieldId\n     * @param  {mixed}  fieldValue\n     * @return {void}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"handleGroupFieldChange\", (fieldId, fieldValue) => {\n      const {\n        id,\n        value,\n        onChange\n      } = this.props;\n      onChange(id, immer__WEBPACK_IMPORTED_MODULE_1___default()(value, draft => {\n        const path = fieldId.split('__');\n        const fieldName = path.pop();\n        const group = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.find)(draft, ['_id', path.pop()]);\n        (0,lodash__WEBPACK_IMPORTED_MODULE_4__.set)(group, fieldName, fieldValue);\n      }));\n    });\n  }\n  /**\n   * Returns a list of group values.\n   *\n   * @return {Array}\n   */\n  getGroupValues() {\n    return this.props.value.map(group => {\n      const values = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.mapKeys)((0,lodash__WEBPACK_IMPORTED_MODULE_4__.omit)(group, ['_id', '_type']), (value, key) => key.replace(/\\-/g, '_'));\n      return [group._type, values];\n    });\n  }\n  /**\n   * Renders the component.\n   *\n   * @return {Object}\n   */\n  render() {\n    const {\n      handleGroupSetup,\n      handleGroupFieldSetup,\n      handleAddGroup,\n      handleCloneGroup,\n      handleRemoveGroup,\n      handleToggleGroup,\n      handleToggleAllGroups\n    } = this;\n    const {\n      value,\n      children\n    } = this.props;\n    const groupValues = this.getGroupValues();\n    const allGroupsAreCollapsed = this.state.collapsedGroups.length === value.length;\n    return children({\n      groupValues,\n      allGroupsAreCollapsed,\n      handleGroupSetup,\n      handleGroupFieldSetup,\n      handleAddGroup,\n      handleCloneGroup,\n      handleRemoveGroup,\n      handleToggleGroup,\n      handleToggleAllGroups\n    });\n  }\n}\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('carbon-fields.complex.block', 'carbon-fields/blocks', OriginalComplexField => props => {\n  const {\n    id,\n    name,\n    value,\n    error,\n    field\n  } = props;\n  return wp.element.createElement(ComplexField, props, ({\n    groupValues,\n    allGroupsAreCollapsed,\n    handleGroupSetup,\n    handleGroupFieldSetup,\n    handleAddGroup,\n    handleCloneGroup,\n    handleRemoveGroup,\n    handleToggleGroup,\n    handleToggleAllGroups\n  }) => wp.element.createElement(OriginalComplexField, {\n    groupIdKey: \"_id\",\n    groupFilterKey: \"_type\",\n    id: id,\n    name: name,\n    value: value,\n    error: error,\n    field: field,\n    groupValues: groupValues,\n    allGroupsAreCollapsed: allGroupsAreCollapsed,\n    onGroupSetup: handleGroupSetup,\n    onGroupFieldSetup: handleGroupFieldSetup,\n    onAddGroup: handleAddGroup,\n    onCloneGroup: handleCloneGroup,\n    onRemoveGroup: handleRemoveGroup,\n    onToggleGroup: handleToggleGroup,\n    onToggleAllGroups: handleToggleAllGroups,\n    onChange: props.onChange\n  }));\n});\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/complex/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/datetime/index.js":
/*!**************************************************!*\
  !*** ./packages/blocks/fields/datetime/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/date */ \"@wordpress/date\");\n/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/datetime/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n/**\n * External dependencies.\n */\n\n\n\n\n\n/**\n * Internal dependencies.\n */\n\nclass DateTimeField extends _wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Component {\n  constructor(...args) {\n    super(...args);\n    /**\n     * Handles the change.\n     *\n     * @param  {Date[]} selectedDates\n     * @param  {string} selectedDateStr\n     * @return {void}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"handleChange\", (selectedDates, selectedDateStr) => {\n      const {\n        id,\n        onChange,\n        value,\n        field\n      } = this.props;\n      const formattedDate = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.format)(field.storage_format, selectedDateStr);\n      if (formattedDate !== value) {\n        onChange(id, formattedDate);\n      }\n    });\n  }\n  /**\n   * Renders the component.\n   *\n   * @return {Object}\n   */\n  render() {\n    const {\n      handleChange\n    } = this;\n    const {\n      children\n    } = this.props;\n    return children({\n      handleChange\n    });\n  }\n}\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('carbon-fields.date_time.block', 'carbon-fields/blocks', OriginalDateTimeField => props => {\n  return wp.element.createElement(DateTimeField, props, ({\n    handleChange\n  }) => wp.element.createElement(OriginalDateTimeField, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select Date', 'carbon-fields-ui')\n  }, props, {\n    onChange: handleChange\n  })));\n});\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('carbon-fields.date.block', 'carbon-fields/blocks', OriginalDateField => props => {\n  return wp.element.createElement(DateTimeField, props, ({\n    handleChange\n  }) => wp.element.createElement(OriginalDateField, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    onChange: handleChange\n  })));\n});\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('carbon-fields.time.block', 'carbon-fields/blocks', OriginalTimeField => props => {\n  return wp.element.createElement(DateTimeField, props, ({\n    handleChange\n  }) => wp.element.createElement(OriginalTimeField, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    onChange: handleChange\n  })));\n});\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/datetime/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/file/index.js":
/*!**********************************************!*\
  !*** ./packages/blocks/fields/file/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/file/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n/**\n * External dependencies.\n */\n\n\n\n/**\n * Internal dependencies.\n */\n\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('carbon-fields.file.block', 'carbon-fields/blocks', OriginalFileField => props => {\n  return wp.element.createElement(OriginalFileField, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    buttonLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select File', 'carbon-fields-ui'),\n    mediaLibraryButtonLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use File', 'carbon-fields-ui'),\n    mediaLibraryTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select File', 'carbon-fields-ui')\n  }, props));\n});\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/file/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/footer-scripts/index.js":
/*!********************************************************!*\
  !*** ./packages/blocks/fields/footer-scripts/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/not-supported-field */ \"./packages/blocks/components/not-supported-field/index.js\");\n/**\n * External dependencies.\n */\n\n\n/**\n * The internal dependencies.\n */\n\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('carbon-fields.footer_scripts.block', 'carbon-fields/blocks', () => props => wp.element.createElement(_components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  type: props.field.type\n}));\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/footer-scripts/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/header-scripts/index.js":
/*!********************************************************!*\
  !*** ./packages/blocks/fields/header-scripts/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/not-supported-field */ \"./packages/blocks/components/not-supported-field/index.js\");\n/**\n * External dependencies.\n */\n\n\n/**\n * The internal dependencies.\n */\n\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('carbon-fields.header_scripts.block', 'carbon-fields/blocks', () => props => wp.element.createElement(_components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  type: props.field.type\n}));\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/header-scripts/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/hidden/index.js":
/*!************************************************!*\
  !*** ./packages/blocks/fields/hidden/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/not-supported-field */ \"./packages/blocks/components/not-supported-field/index.js\");\n/**\n * External dependencies.\n */\n\n\n/**\n * The internal dependencies.\n */\n\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('carbon-fields.hidden.block', 'carbon-fields/blocks', () => props => wp.element.createElement(_components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  type: props.field.type\n}));\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/hidden/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/image/index.js":
/*!***********************************************!*\
  !*** ./packages/blocks/fields/image/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n\n/**\n * External dependencies.\n */\n\n\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('carbon-fields.image.block', 'carbon-fields/blocks', OriginalImageField => props => {\n  return wp.element.createElement(OriginalImageField, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    buttonLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Image', 'carbon-fields-ui'),\n    mediaLibraryButtonLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use Image', 'carbon-fields-ui'),\n    mediaLibraryTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Image', 'carbon-fields-ui')\n  }, props));\n});\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/image/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/index.js":
/*!*****************************************!*\
  !*** ./packages/blocks/fields/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hocs_with_conditional_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hocs/with-conditional-logic */ \"./packages/blocks/hocs/with-conditional-logic/index.js\");\n/* harmony import */ var _metaboxes_utils_is_gutenberg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../metaboxes/utils/is-gutenberg */ \"./packages/metaboxes/utils/is-gutenberg.js\");\n/* harmony import */ var _association__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./association */ \"./packages/blocks/fields/association/index.js\");\n/* harmony import */ var _complex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./complex */ \"./packages/blocks/fields/complex/index.js\");\n/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datetime */ \"./packages/blocks/fields/datetime/index.js\");\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file */ \"./packages/blocks/fields/file/index.js\");\n/* harmony import */ var _footer_scripts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer-scripts */ \"./packages/blocks/fields/footer-scripts/index.js\");\n/* harmony import */ var _header_scripts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header-scripts */ \"./packages/blocks/fields/header-scripts/index.js\");\n/* harmony import */ var _hidden__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hidden */ \"./packages/blocks/fields/hidden/index.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image */ \"./packages/blocks/fields/image/index.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map */ \"./packages/blocks/fields/map/index.js\");\n/* harmony import */ var _multiselect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./multiselect */ \"./packages/blocks/fields/multiselect/index.js\");\n/* harmony import */ var _media_gallery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./media-gallery */ \"./packages/blocks/fields/media-gallery/index.js\");\n/* harmony import */ var _oembed__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./oembed */ \"./packages/blocks/fields/oembed/index.js\");\n/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./radio */ \"./packages/blocks/fields/radio/index.js\");\n/* harmony import */ var _radio_image__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./radio-image */ \"./packages/blocks/fields/radio-image/index.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./select */ \"./packages/blocks/fields/select/index.js\");\n/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./set */ \"./packages/blocks/fields/set/index.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sidebar */ \"./packages/blocks/fields/sidebar/index.js\");\n/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./separator */ \"./packages/blocks/fields/separator/index.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./text */ \"./packages/blocks/fields/text/index.js\");\n/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./textarea */ \"./packages/blocks/fields/textarea/index.js\");\n/* harmony import */ var _block_preview__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./block-preview */ \"./packages/blocks/fields/block-preview/index.js\");\n/**\n * External dependencies.\n */\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n/**\n * Connects every field to the store.\n */\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('carbon-fields.field-edit.block', 'carbon-fields/blocks', (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.compose)(_hocs_with_conditional_logic__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withDispatch)(dispatch => {\n  // Widgets support - WordPress 5.8\n  if ((0,_metaboxes_utils_is_gutenberg__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()) {\n    const {\n      lockPostSaving,\n      unlockPostSaving\n    } = dispatch('core/editor');\n    return {\n      lockSaving: lockPostSaving,\n      unlockSaving: unlockPostSaving\n    };\n  }\n  return {};\n}), _carbon_fields_core__WEBPACK_IMPORTED_MODULE_3__.withValidation));\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/map/index.js":
/*!*********************************************!*\
  !*** ./packages/blocks/fields/map/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/map/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/map/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/media-gallery/index.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/fields/media-gallery/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/media-gallery/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n/**\n * External dependencies.\n */\n\n\n\n/**\n * Internal dependencies.\n */\n\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('carbon-fields.media_gallery.block', 'carbon-fields/blocks', OriginalMediaGalleryField => props => {\n  return wp.element.createElement(OriginalMediaGalleryField, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    buttonLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Attachments', 'carbon-fields-ui'),\n    mediaLibraryButtonLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use Attachments', 'carbon-fields-ui'),\n    mediaLibraryTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Attachments', 'carbon-fields-ui')\n  }, props));\n});\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/media-gallery/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/multiselect/index.js":
/*!*****************************************************!*\
  !*** ./packages/blocks/fields/multiselect/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/multiselect/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/multiselect/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/oembed/index.js":
/*!************************************************!*\
  !*** ./packages/blocks/fields/oembed/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/oembed/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/oembed/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/radio-image/index.js":
/*!*****************************************************!*\
  !*** ./packages/blocks/fields/radio-image/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/radio-image/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/radio-image/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/radio/index.js":
/*!***********************************************!*\
  !*** ./packages/blocks/fields/radio/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/radio/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/radio/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/select/index.js":
/*!************************************************!*\
  !*** ./packages/blocks/fields/select/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/select/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/select/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/separator/index.js":
/*!***************************************************!*\
  !*** ./packages/blocks/fields/separator/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/separator/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/separator/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/set/index.js":
/*!*********************************************!*\
  !*** ./packages/blocks/fields/set/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/set/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/set/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/sidebar/index.js":
/*!*************************************************!*\
  !*** ./packages/blocks/fields/sidebar/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/not-supported-field */ \"./packages/blocks/components/not-supported-field/index.js\");\n/**\n * External dependencies.\n */\n\n\n/**\n * The internal dependencies.\n */\n\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('carbon-fields.sidebar.block', 'carbon-fields/blocks', () => props => wp.element.createElement(_components_not_supported_field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  type: props.field.type\n}));\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/sidebar/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/text/index.js":
/*!**********************************************!*\
  !*** ./packages/blocks/fields/text/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/text/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/text/index.js?");

/***/ }),

/***/ "./packages/blocks/fields/textarea/index.js":
/*!**************************************************!*\
  !*** ./packages/blocks/fields/textarea/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./packages/blocks/fields/textarea/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies.\n */\n\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/textarea/index.js?");

/***/ }),

/***/ "./packages/blocks/hocs/with-conditional-logic/index.js":
/*!**************************************************************!*\
  !*** ./packages/blocks/hocs/with-conditional-logic/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-distinct-until-changed */ \"./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! callbag-basics */ \"./node_modules/callbag-basics/index.js\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_4__);\n/**\n * External dependencies.\n */\n\n\n\n\n\n/**\n * Carbon Fields dependencies.\n */\n\n\n/**\n * Adds the `parent.` parent prefix to field's name.\n *\n * @param  {Object[]} fields\n * @param  {number}   depth\n * @return {Array[]}\n */\nfunction mapParentPrefix(fields, depth = 0) {\n  return (0,lodash__WEBPACK_IMPORTED_MODULE_3__.mapKeys)(fields, (value, key) => `${(0,lodash__WEBPACK_IMPORTED_MODULE_3__.repeat)('parent.', depth)}${key}`);\n}\n\n/**\n * Returns whether the given string is a group identifier.\n *\n * @param  {string} id\n * @return {boolean}\n */\nfunction isComplexGroupIdentifier(id) {\n  return (0,lodash__WEBPACK_IMPORTED_MODULE_3__.startsWith)(id, 'cf-');\n}\n\n/**\n * The function used to track dependencies required\n * by conditional logic.\n *\n * @param  {Object} props\n * @return {Object}\n */\nfunction input(props) {\n  return (0,callbag_basics__WEBPACK_IMPORTED_MODULE_2__.pipe)((0,_carbon_fields_core__WEBPACK_IMPORTED_MODULE_4__.fromSelector)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/block-editor').getBlock, props.blockId), (0,callbag_distinct_until_changed__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), (0,callbag_basics__WEBPACK_IMPORTED_MODULE_2__.map)(blockData => blockData?.attributes?.data));\n}\n\n/**\n * The function that provides the data that needs to be\n * evaluated by conditional logic.\n *\n * @param  {Object} props\n * @param  {Object} fields\n * @return {Object}\n */\nfunction output(props, fields) {\n  const isTopLevelField = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.has)(fields, props.field.base_name);\n  let siblingFields = {};\n  if (isTopLevelField) {\n    siblingFields = mapParentPrefix((0,lodash__WEBPACK_IMPORTED_MODULE_3__.omit)(fields, [props.field.base_name]));\n  } else {\n    // Get the hierarchy.\n    const path = props.id.split('__');\n\n    // Remove the chunk with identifier of block since\n    // we already have it.\n    path.shift();\n\n    // Remove the chunk with name of root field.\n    const rootFieldName = path.shift();\n\n    // Remove the chunk with name of field since\n    // we already have it.\n    path.pop();\n\n    // Keep reference to the depth\n    // so we can add the `parent.` prefix.\n    let depth = path.reduce((accumulator, chunk) => {\n      return isComplexGroupIdentifier(chunk) ? accumulator : accumulator + 1;\n    }, 0);\n\n    // Collect fields that are siblings of root field.\n    siblingFields = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.omit)(fields, [rootFieldName]);\n    siblingFields = mapParentPrefix(siblingFields, depth + 1);\n\n    // Keep reference to the full path of the field.\n    let pathPrefix = rootFieldName;\n    while (path.length > 0) {\n      const chunk = path.shift();\n      const isGroup = isComplexGroupIdentifier(chunk);\n      const isNestedComplex = !isGroup;\n      if (isGroup) {\n        const groupIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.findIndex)((0,lodash__WEBPACK_IMPORTED_MODULE_3__.get)(fields, pathPrefix), ['_id', chunk]);\n        pathPrefix = `${pathPrefix}.${groupIndex}`;\n        let groupFields = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.get)(fields, pathPrefix);\n        groupFields = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.omit)(groupFields, ['_id', '_type', props.field.base_name]);\n        groupFields = mapParentPrefix(groupFields, depth);\n        (0,lodash__WEBPACK_IMPORTED_MODULE_3__.assign)(siblingFields, groupFields);\n      }\n      if (isNestedComplex) {\n        pathPrefix = `${pathPrefix}.${chunk}`;\n        depth--;\n      }\n    }\n  }\n  return siblingFields;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_carbon_fields_core__WEBPACK_IMPORTED_MODULE_4__.withConditionalLogic)(input, output));\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/hocs/with-conditional-logic/index.js?");

/***/ }),

/***/ "./packages/blocks/index.js":
/*!**********************************!*\
  !*** ./packages/blocks/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields */ \"./packages/blocks/fields/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ \"./packages/blocks/store/index.js\");\n/* harmony import */ var _components_block_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/block-edit */ \"./packages/blocks/components/block-edit/index.js\");\n/* harmony import */ var _components_block_save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/block-save */ \"./packages/blocks/components/block-save/index.js\");\n/* harmony import */ var _utils_transform_fields_to_attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/transform-fields-to-attributes */ \"./packages/blocks/utils/transform-fields-to-attributes.js\");\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */\n\n/**\n * External dependencies.\n */\n\n\n\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n\n\n/**\n * Sets the locale data for the package type\n */\n(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.setLocaleData)(window.cf.config.locale, 'carbon-fields-ui');\n\n/**\n * Register the blocks.\n */\nconst containerDefinitions = {};\nconst fieldDefinitions = {};\n(0,lodash__WEBPACK_IMPORTED_MODULE_4__.get)(window.cf, 'preloaded.blocks', []).forEach(container => {\n  const name = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.kebabCase)(container.id).replace('carbon-fields-container-', '');\n  const fields = (0,_utils_transform_fields_to_attributes__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(container.fields);\n  const getBlockSetting = (key, def = undefined) => (0,lodash__WEBPACK_IMPORTED_MODULE_4__.get)(container, `settings.${key}`, def) || def;\n  containerDefinitions[name] = container;\n  fieldDefinitions[name] = container.fields.map(field => _objectSpread({}, field));\n  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(`carbon-fields/${name}`, {\n    title: container.title,\n    icon: getBlockSetting('icon'),\n    parent: getBlockSetting('parent'),\n    category: getBlockSetting('category.slug'),\n    keywords: getBlockSetting('keywords', []),\n    description: getBlockSetting('description', ''),\n    attributes: {\n      data: {\n        type: 'object',\n        default: fields\n      }\n    },\n    supports: {\n      tabs: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.isPlainObject)(getBlockSetting('tabs')),\n      preview: getBlockSetting('preview'),\n      innerBlocks: getBlockSetting('inner_blocks.enabled'),\n      alignWide: false,\n      anchor: false,\n      html: false\n    },\n    edit: _components_block_edit__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    save: _components_block_save__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    example: true\n  });\n});\n\n/**\n * Load the definitions in store.\n */\n(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('carbon-fields/blocks').setupContainerDefinitions(containerDefinitions);\n(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('carbon-fields/blocks').setupFieldDefinitions(fieldDefinitions);\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/index.js?");

/***/ }),

/***/ "./packages/blocks/store/actions.js":
/*!******************************************!*\
  !*** ./packages/blocks/store/actions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupContainerDefinitions: () => (/* binding */ setupContainerDefinitions),\n/* harmony export */   setupFieldDefinitions: () => (/* binding */ setupFieldDefinitions)\n/* harmony export */ });\n/**\n * Returns an action object used to setup the definitions state when first opening an editor.\n *\n * @param  {Object} definitions\n * @return {Object}\n */\nfunction setupContainerDefinitions(definitions) {\n  return {\n    type: 'SETUP_CONTAINER_DEFINITIONS',\n    payload: {\n      definitions\n    }\n  };\n}\n\n/**\n * Returns an action object used to setup the definitions state when first opening an editor.\n *\n * @param  {Object} definitions\n * @return {Object}\n */\nfunction setupFieldDefinitions(definitions) {\n  return {\n    type: 'SETUP_FIELD_DEFINITIONS',\n    payload: {\n      definitions\n    }\n  };\n}\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/store/actions.js?");

/***/ }),

/***/ "./packages/blocks/store/index.js":
/*!****************************************!*\
  !*** ./packages/blocks/store/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./packages/blocks/store/reducer.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./packages/blocks/store/actions.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ \"./packages/blocks/store/selectors.js\");\n/**\n * External dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n/**\n * Register the store.\n */\n(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('carbon-fields/blocks', {\n  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,\n  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/store/index.js?");

/***/ }),

/***/ "./packages/blocks/store/reducer.js":
/*!******************************************!*\
  !*** ./packages/blocks/store/reducer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   containerDefinitionsByBlockName: () => (/* binding */ containerDefinitionsByBlockName),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   fieldDefinitionsByBlockName: () => (/* binding */ fieldDefinitionsByBlockName)\n/* harmony export */ });\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies.\n */\n\n\n/**\n * The reducer that keeps track of container definitions keyed by block's name.\n *\n * @param  {Object} state\n * @param  {Object} action\n * @return {Object}\n */\nfunction containerDefinitionsByBlockName(state = {}, action) {\n  switch (action.type) {\n    case 'SETUP_CONTAINER_DEFINITIONS':\n      return action.payload.definitions;\n    default:\n      return state;\n  }\n}\n\n/**\n * The reducer that keeps track of field definitions keyed by block's name.\n *\n * @param  {Object} state\n * @param  {Object} action\n * @return {Object}\n */\nfunction fieldDefinitionsByBlockName(state = {}, action) {\n  switch (action.type) {\n    case 'SETUP_FIELD_DEFINITIONS':\n      return action.payload.definitions;\n    default:\n      return state;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  containerDefinitionsByBlockName,\n  fieldDefinitionsByBlockName\n}));\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/store/reducer.js?");

/***/ }),

/***/ "./packages/blocks/store/selectors.js":
/*!********************************************!*\
  !*** ./packages/blocks/store/selectors.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getContainerDefinitionByBlockName: () => (/* binding */ getContainerDefinitionByBlockName),\n/* harmony export */   getFieldDefinitionsByBlockName: () => (/* binding */ getFieldDefinitionsByBlockName)\n/* harmony export */ });\n/**\n * Get the container by a given block name.\n *\n * @param  {Object} state\n * @param  {string} blockName\n * @return {Object}\n */\nfunction getContainerDefinitionByBlockName(state, blockName) {\n  return state.containerDefinitionsByBlockName[blockName.replace('carbon-fields/', '')] || {};\n}\n\n/**\n * Get the fields by a given block name.\n *\n * @param  {Object} state\n * @param  {string} blockName\n * @return {Object[]}\n */\nfunction getFieldDefinitionsByBlockName(state, blockName) {\n  return state.fieldDefinitionsByBlockName[blockName.replace('carbon-fields/', '')] || [];\n}\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/store/selectors.js?");

/***/ }),

/***/ "./packages/blocks/utils/transform-fields-to-attributes.js":
/*!*****************************************************************!*\
  !*** ./packages/blocks/utils/transform-fields-to-attributes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ transformFieldsToAttributes)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n/**\n * Transforms the fields to an attributes set.\n *\n * @param  {Object[]} fields\n * @return {Object}\n */\nfunction transformFieldsToAttributes(fields) {\n  return fields.reduce((attributes, field) => {\n    return _objectSpread(_objectSpread({}, attributes), {}, {\n      [field.base_name]: field.default_value\n    });\n  }, {});\n}\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/utils/transform-fields-to-attributes.js?");

/***/ }),

/***/ "./packages/metaboxes/utils/is-gutenberg.js":
/*!**************************************************!*\
  !*** ./packages/metaboxes/utils/is-gutenberg.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isGutenberg)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies.\n */\n\n\n/**\n * Returns true if Gutenberg is presented.\n *\n * @return {boolean}\n */\nfunction isGutenberg() {\n  return !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window._wpLoadBlockEditor);\n}\n\n//# sourceURL=webpack://carbon-fields/./packages/metaboxes/utils/is-gutenberg.js?");

/***/ }),

/***/ "./node_modules/callbag-basics/index.js":
/*!**********************************************!*\
  !*** ./node_modules/callbag-basics/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\n  forEach: __webpack_require__(/*! callbag-for-each */ \"./node_modules/callbag-for-each/readme.js\"),\n  fromObs: __webpack_require__(/*! callbag-from-obs */ \"./node_modules/callbag-from-obs/readme.js\"),\n  fromIter: __webpack_require__(/*! callbag-from-iter */ \"./node_modules/callbag-from-iter/index.js\"),\n  fromEvent: __webpack_require__(/*! callbag-from-event */ \"./node_modules/callbag-from-event/index.js\"),\n  fromPromise: __webpack_require__(/*! callbag-from-promise */ \"./node_modules/callbag-from-promise/index.js\"),\n  interval: __webpack_require__(/*! callbag-interval */ \"./node_modules/callbag-interval/index.js\"),\n  map: __webpack_require__(/*! callbag-map */ \"./node_modules/callbag-map/readme.js\"),\n  scan: __webpack_require__(/*! callbag-scan */ \"./node_modules/callbag-scan/readme.js\"),\n  flatten: __webpack_require__(/*! callbag-flatten */ \"./node_modules/callbag-flatten/index.js\"),\n  take: __webpack_require__(/*! callbag-take */ \"./node_modules/callbag-take/index.js\"),\n  skip: __webpack_require__(/*! callbag-skip */ \"./node_modules/callbag-skip/index.js\"),\n  filter: __webpack_require__(/*! callbag-filter */ \"./node_modules/callbag-filter/readme.js\"),\n  merge: __webpack_require__(/*! callbag-merge */ \"./node_modules/callbag-merge/readme.js\"),\n  concat: __webpack_require__(/*! callbag-concat */ \"./node_modules/callbag-concat/readme.js\"),\n  combine: __webpack_require__(/*! callbag-combine */ \"./node_modules/callbag-combine/readme.js\"),\n  share: __webpack_require__(/*! callbag-share */ \"./node_modules/callbag-share/index.js\"),\n  pipe: __webpack_require__(/*! callbag-pipe */ \"./node_modules/callbag-pipe/readme.js\")\n};\n\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-basics/index.js?");

/***/ }),

/***/ "./node_modules/callbag-combine/readme.js":
/*!************************************************!*\
  !*** ./node_modules/callbag-combine/readme.js ***!
  \************************************************/
/***/ ((module) => {

eval("/**\n * callbag-combine\n * ---------------\n *\n * Callbag factory that combines the latest data points from multiple (2 or\n * more) callbag sources. It delivers those latest values as an array. Works\n * with both pullable and listenable sources.\n *\n * `npm install callbag-combine`\n *\n * Example:\n *\n *     const interval = require('callbag-interval');\n *     const observe = require('callbag-observe');\n *     const combine = require('callbag-combine');\n *\n *     const source = combine(interval(100), interval(350));\n *\n *     observe(x => console.log(x))(source); // [2,0]\n *                                           // [3,0]\n *                                           // [4,0]\n *                                           // [5,0]\n *                                           // [6,0]\n *                                           // [6,1]\n *                                           // [7,1]\n *                                           // [8,1]\n *                                           // ...\n */\n\nconst EMPTY = {};\n\nconst combine = (...sources) => (start, sink) => {\n  if (start !== 0) return;\n  const n = sources.length;\n  if (n === 0) {\n    sink(0, () => {});\n    sink(1, []);\n    sink(2);\n    return;\n  }\n  let Ns = n; // start counter\n  let Nd = n; // data counter\n  let Ne = n; // end counter\n  const vals = new Array(n);\n  const sourceTalkbacks = new Array(n);\n  const talkback = (t, d) => {\n    if (t === 0) return;\n    for (let i = 0; i < n; i++) sourceTalkbacks[i](t, d);\n  };\n  sources.forEach((source, i) => {\n    vals[i] = EMPTY;\n    source(0, (t, d) => {\n      if (t === 0) {\n        sourceTalkbacks[i] = d;\n        if (--Ns === 0) sink(0, talkback);\n      } else if (t === 1) {\n        const _Nd = !Nd ? 0 : vals[i] === EMPTY ? --Nd : Nd;\n        vals[i] = d;\n        if (_Nd === 0) {\n          const arr = new Array(n);\n          for (let j = 0; j < n; ++j) arr[j] = vals[j];\n          sink(1, arr);\n        }\n      } else if (t === 2) {\n        if (--Ne === 0) sink(2);\n      } else {\n        sink(t, d);\n      }\n    });\n  });\n};\n\nmodule.exports = combine;\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-combine/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-concat/readme.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-concat/readme.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * callbag-concat\n * --------------\n *\n * Callbag factory that concatenates the data from multiple (2 or more)\n * callbag sources. It starts each source at a time: waits for the previous\n * source to end before starting the next source. Works with both pullable\n * and listenable sources.\n *\n * `npm install callbag-concat`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const concat = require('callbag-concat');\n *\n *     const source = concat(fromIter([10,20,30]), fromIter(['a','b']));\n *\n *     iterate(x => console.log(x))(source); // 10\n *                                           // 20\n *                                           // 30\n *                                           // a\n *                                           // b\n */\n\nconst UNIQUE = {};\n\nconst concat = (...sources) => (start, sink) => {\n  if (start !== 0) return;\n  const n = sources.length;\n  if (n === 0) {\n    sink(0, () => {});\n    sink(2);\n    return;\n  }\n  let i = 0;\n  let sourceTalkback;\n  let lastPull = UNIQUE;\n  const talkback = (t, d) => {\n    if (t === 1) lastPull = d;\n    sourceTalkback(t, d);\n  };\n  (function next() {\n    if (i === n) {\n      sink(2);\n      return;\n    }\n    sources[i](0, (t, d) => {\n      if (t === 0) {\n        sourceTalkback = d;\n        if (i === 0) sink(0, talkback);\n        else if (lastPull !== UNIQUE) sourceTalkback(1, lastPull);\n      } else if (t === 2 && d) {\n        sink(2, d);\n      } else if (t === 2) {\n        i++;\n        next();\n      } else {\n        sink(t, d);\n      }\n    });\n  })();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (concat);\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-concat/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar is = function is(previous, current) {\n  return previous === current;\n};\n\nfunction distinctUntilChanged(compare) {\n  if (compare === void 0) {\n    compare = is;\n  }\n\n  return function (source) {\n    return function (start, sink) {\n      if (start !== 0) return;\n      var inited = false;\n      var prev;\n      var talkback;\n      source(0, function (type, data) {\n        if (type === 0) {\n          talkback = data;\n        }\n\n        if (type !== 1) {\n          sink(type, data);\n          return;\n        }\n\n        if (inited && compare(prev, data)) {\n          talkback(1);\n          return;\n        }\n\n        inited = true;\n        prev = data;\n        sink(1, data);\n      });\n    };\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (distinctUntilChanged);\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.es.js?");

/***/ }),

/***/ "./node_modules/callbag-filter/readme.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-filter/readme.js ***!
  \***********************************************/
/***/ ((module) => {

eval("/**\n * callbag-filter\n * --------------\n *\n * Callbag operator that conditionally lets data pass through. Works on either\n * pullable or listenable sources.\n *\n * `npm install callbag-filter`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const filter = require('callbag-filter');\n *\n *     const source = filter(x => x % 2)(fromIter([1,2,3,4,5]));\n *\n *     iterate(x => console.log(x))(source); // 1\n *                                           // 3\n *                                           // 5\n */\n\nconst filter = condition => source => (start, sink) => {\n  if (start !== 0) return;\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) {\n      talkback = d;\n      sink(t, d);\n    } else if (t === 1) {\n      if (condition(d)) sink(t, d);\n      else talkback(1);\n    }\n    else sink(t, d);\n  });\n};\n\nmodule.exports = filter;\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-filter/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-flatten/index.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-flatten/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst flatten = source => (start, sink) => {\n  if (start !== 0) return;\n  let outerTalkback;\n  let innerTalkback;\n  function talkback(t, d) {\n    if (t === 1) (innerTalkback || outerTalkback)(1, d);\n    if (t === 2) {\n      innerTalkback && innerTalkback(2);\n      outerTalkback && outerTalkback(2);\n    }\n  }\n  source(0, (T, D) => {\n    if (T === 0) {\n      outerTalkback = D;\n      sink(0, talkback);\n    } else if (T === 1) {\n      const innerSource = D;\n      innerTalkback && innerTalkback(2);\n      innerSource(0, (t, d) => {\n        if (t === 0) {\n          innerTalkback = d;\n          innerTalkback(1);\n        } else if (t === 1) sink(1, d);\n        else if (t === 2 && d) {\n          outerTalkback && outerTalkback(2);\n          sink(2, d);\n        } else if (t === 2) {\n          if (!outerTalkback) sink(2);\n          else {\n            innerTalkback = void 0;\n            outerTalkback(1);\n          }\n        }\n      });\n    } else if (T === 2 && D) {\n      innerTalkback && innerTalkback(2);\n      sink(2, D);\n    } else if (T === 2) {\n      if (!innerTalkback) sink(2);\n      else outerTalkback = void 0;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatten);\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-flatten/index.js?");

/***/ }),

/***/ "./node_modules/callbag-for-each/readme.js":
/*!*************************************************!*\
  !*** ./node_modules/callbag-for-each/readme.js ***!
  \*************************************************/
/***/ ((module) => {

eval("/**\n * callbag-for-each\n * ----------------\n *\n * Callbag sink that consume both pullable and listenable sources. When called\n * on a pullable source, it will iterate through its data. When called on a\n * listenable source, it will observe its data.\n *\n * `npm install callbag-for-each`\n *\n * Examples\n * --------\n *\n * Consume a pullable source:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const forEach = require('callbag-for-each');\n *\n *     const source = fromIter([10,20,30,40])\n *\n *     forEach(x => console.log(x))(source); // 10\n *                                           // 20\n *                                           // 30\n *                                           // 40\n *\n * Consume a listenable source:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *\n *     const source = interval(1000);\n *\n *     forEach(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 3\n *                                           // ...\n */\n\nconst forEach = operation => source => {\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) talkback = d;\n    if (t === 1) operation(d);\n    if (t === 1 || t === 0) talkback(1);\n  });\n};\n\nmodule.exports = forEach;\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-for-each/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-from-event/index.js":
/*!**************************************************!*\
  !*** ./node_modules/callbag-from-event/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fromEvent = (node, name, options) => (start, sink) => {\n  if (start !== 0) return;\n  let disposed = false;\n  const handler = ev => {\n    sink(1, ev)\n  };\n\n  sink(0, t => {\n    if (t !== 2) {\n      return;\n    }\n    disposed = true;\n    if (node.removeEventListener) node.removeEventListener(name, handler, options);\n    else if (node.removeListener) node.removeListener(name, handler);\n    else throw new Error('cannot remove listener from node. No method found.');\n  });\n\n  if (disposed) {\n    return;\n  }\n\n  if (node.addEventListener) node.addEventListener(name, handler, options);\n  else if (node.addListener) node.addListener(name, handler);\n  else throw new Error('cannot add listener to node. No method found.');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fromEvent);\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-from-event/index.js?");

/***/ }),

/***/ "./node_modules/callbag-from-iter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/callbag-from-iter/index.js ***!
  \*************************************************/
/***/ ((module) => {

eval("const fromIter = iter => (start, sink) => {\n  if (start !== 0) return;\n  const iterator =\n    typeof Symbol !== 'undefined' && iter[Symbol.iterator]\n      ? iter[Symbol.iterator]()\n      : iter;\n  let inloop = false;\n  let got1 = false;\n  let completed = false;\n  let res;\n  function loop() {\n    inloop = true;\n    while (got1 && !completed) {\n      got1 = false;\n      res = iterator.next();\n      if (res.done) {\n        sink(2);\n        break;\n      }\n      else sink(1, res.value);\n    }\n    inloop = false;\n  }\n  sink(0, t => {\n    if (completed) return\n\n    if (t === 1) {\n      got1 = true;\n      if (!inloop && !(res && res.done)) loop();\n    } else if (t === 2) {\n      completed = true;\n    }\n  });\n};\n\nmodule.exports = fromIter;\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-from-iter/index.js?");

/***/ }),

/***/ "./node_modules/callbag-from-obs/readme.js":
/*!*************************************************!*\
  !*** ./node_modules/callbag-from-obs/readme.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * callbag-from-obs\n * --------------\n *\n * Convert an observable (or subscribable) to a callbag listenable source.\n *\n * `npm install callbag-from-obs`\n *\n * Example:\n *\n * Convert an RxJS Observable:\n *\n *     const Rx = require('rxjs');\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const source = fromObs(Rx.Observable.interval(1000).take(4));\n *\n *     observe(x => console.log(x)(source); // 0\n *                                          // 1\n *                                          // 2\n *                                          // 3\n *\n * Convert anything that has the `.subscribe` method:\n *\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const subscribable = {\n *       subscribe: (observer) => {\n *         let i = 0;\n *         setInterval(() => observer.next(i++), 1000);\n *       }\n *     };\n *\n *     const source = fromObs(subscribable);\n *\n *     observe(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 3\n *                                           // ...\n */\n\nconst $$observable = (__webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\")[\"default\"]);\n\nconst fromObs = observable => (start, sink) => {\n  if (start !== 0) return;\n  let dispose;\n  sink(0, t => {\n    if (t === 2 && dispose) {\n      if (dispose.unsubscribe) dispose.unsubscribe();\n      else dispose();\n    }\n  });\n  observable = observable[$$observable] ? observable[$$observable]() : observable;\n  dispose = observable.subscribe({\n    next: x => sink(1, x),\n    error: e => sink(2, e),\n    complete: () => sink(2)\n  });\n};\n\nmodule.exports = fromObs;\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-from-obs/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-from-promise/index.js":
/*!****************************************************!*\
  !*** ./node_modules/callbag-from-promise/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fromPromise = promise => (start, sink) => {\n  if (start !== 0) return;\n  let ended = false;\n  const onfulfilled = val => {\n    if (ended) return;\n    sink(1, val);\n    if (ended) return;\n    sink(2);\n  };\n  const onrejected = (err = new Error()) => {\n    if (ended) return;\n    sink(2, err);\n  };\n  promise.then(onfulfilled, onrejected);\n  sink(0, t => {\n    if (t === 2) ended = true;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fromPromise);\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-from-promise/index.js?");

/***/ }),

/***/ "./node_modules/callbag-interval/index.js":
/*!************************************************!*\
  !*** ./node_modules/callbag-interval/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst interval = period => (start, sink) => {\n  if (start !== 0) return;\n  let i = 0;\n  const id = setInterval(() => {\n    sink(1, i++);\n  }, period);\n  sink(0, t => {\n    if (t === 2) clearInterval(id);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interval);\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-interval/index.js?");

/***/ }),

/***/ "./node_modules/callbag-map/readme.js":
/*!********************************************!*\
  !*** ./node_modules/callbag-map/readme.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * callbag-map\n * -----------\n *\n * Callbag operator that applies a transformation on data passing through it.\n * Works on either pullable or listenable sources.\n *\n * `npm install callbag-map`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const map = require('callbag-map');\n *\n *     const source = map(x => x * 0.1)(fromIter([10,20,30,40]));\n *\n *     iterate(x => console.log(x))(source); // 1\n *                                           // 2\n *                                           // 3\n *                                           // 4\n */\n\nconst map = f => source => (start, sink) => {\n  if (start !== 0) return;\n  source(0, (t, d) => {\n    sink(t, t === 1 ? f(d) : d)\n  });\n};\n\nmodule.exports = map;\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-map/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-merge/readme.js":
/*!**********************************************!*\
  !*** ./node_modules/callbag-merge/readme.js ***!
  \**********************************************/
/***/ ((module) => {

eval("/**\n * callbag-merge\n * -------------\n *\n * Callbag factory that merges data from multiple callbag sources. Works well\n * with listenable sources, and while it may work for some pullable sources,\n * it is only designed for listenable sources.\n *\n * `npm install callbag-merge`\n *\n * Example:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const merge = require('callbag-merge');\n *\n *     const source = merge(interval(100), interval(350));\n *\n *     forEach(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 0\n *                                           // 3\n *                                           // 4\n *                                           // 5\n *                                           // ...\n */\n\nfunction merge(...sources) {\n  return (start, sink) => {\n    if (start !== 0) return;\n    const n = sources.length;\n    const sourceTalkbacks = new Array(n);\n    let startCount = 0;\n    let endCount = 0;\n    const talkback = t => {\n      if (t === 0) return;\n      for (let i = 0; i < n; i++) sourceTalkbacks[i] && sourceTalkbacks[i](t);\n    };\n    for (let i = 0; i < n; i++) {\n      sources[i](0, (t, d) => {\n        if (t === 0) {\n          sourceTalkbacks[i] = d;\n          if (++startCount === 1) sink(0, talkback);\n        } else if (t === 2) {\n          sourceTalkbacks[i] = void 0;\n          if (++endCount === n) sink(2);\n        } else sink(t, d);\n      });\n    }\n  };\n}\n\nmodule.exports = merge;\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-merge/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-pipe/readme.js":
/*!*********************************************!*\
  !*** ./node_modules/callbag-pipe/readme.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * callbag-pipe\n * ------------\n *\n * Utility function for plugging callbags together in chain. This utility\n * actually doesn't rely on Callbag specifics, and is really similar to\n * Ramda's `pipe` or lodash's `flow`.\n * \n * Implementation of `callbag-pipe` using `R.pipe` could look like this:\n *\n * const pipe = (source, ...cbs) => R.pipe(...cbs)(source)\n * \n * This exists to play nicely with the ecosystem,\n * and to facilitate the import of the function.\n *\n * `npm install callbag-pipe`\n *\n * Example:\n *\n * Create a source with `pipe`, then pass it to a `forEach`:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     const source = pipe(\n *       combine(interval(100), interval(350)),\n *       map(([x, y]) => `X${x},Y${y}`),\n *       take(10)\n *     );\n *\n *     forEach(x => console.log(x))(source); // X2,Y0\n *                                           // X3,Y0\n *                                           // X4,Y0\n *                                           // X5,Y0\n *                                           // X6,Y0\n *                                           // X6,Y1\n *                                           // X7,Y1\n *                                           // X8,Y1\n *                                           // X9,Y1\n *                                           // X9,Y2\n *\n *\n * Or use `pipe` to go all the way from source to sink:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       map(([x, y]) => `X${x},Y${y}`),\n *       take(10),\n *       forEach(x => console.log(x))\n *     );\n *     // X2,Y0\n *     // X3,Y0\n *     // X4,Y0\n *     // X5,Y0\n *     // X6,Y0\n *     // X6,Y1\n *     // X7,Y1\n *     // X8,Y1\n *     // X9,Y1\n *     // X9,Y2\n *\n *\n * Nesting\n * -------\n *\n * To use pipe inside another pipe, you need to give the inner pipe an\n * argument, e.g. `s => pipe(s, ...`:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       s => pipe(s,\n *         map(([x, y]) => `X${x},Y${y}`),\n *         take(10)\n *       ),\n *       forEach(x => console.log(x))\n *     );\n *\n *\n * This means you can use pipe to create a new operator:\n *\n *     const mapThenTake = (f, amount) =>\n *       s => pipe(s, map(f), take(amount));\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       mapThenTake(([x, y]) => `X${x},Y${y}`, 10),\n *       forEach(x => console.log(x))\n *     );\n *\n */\n\nfunction pipe(...cbs) {\n  let res = cbs[0];\n  for (let i = 1, n = cbs.length; i < n; i++) res = cbs[i](res);\n  return res;\n}\n\nmodule.exports = pipe;\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-pipe/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-scan/readme.js":
/*!*********************************************!*\
  !*** ./node_modules/callbag-scan/readme.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * callbag-scan\n * ------------\n *\n * Callbag operator that combines consecutive values from the same source.\n * It's essentially like array `.reduce`, but delivers a new accumulated value\n * for each value from the callbag source. Works on either pullable or\n * listenable sources.\n *\n * `npm install callbag-scan`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const scan = require('callbag-scan');\n *\n *     const iterSource = fromIter([1,2,3,4,5]);\n *     const scanned = scan((prev, x) => prev + x, 0)(iterSource);\n *\n *     scanned(0, iterate(x => console.log(x))); // 1\n *                                               // 3\n *                                               // 6\n *                                               // 10\n *                                               // 15\n */\n\nfunction scan(reducer, seed) {\n  let hasAcc = arguments.length === 2;\n  return source => (start, sink) => {\n    if (start !== 0) return;\n    let acc = seed;\n    source(0, (t, d) => {\n      if (t === 1) {\n        acc = hasAcc ? reducer(acc, d) : ((hasAcc = true), d);\n        sink(1, acc);\n      } else sink(t, d);\n    });\n  };\n}\n\nmodule.exports = scan;\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-scan/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-share/index.js":
/*!*********************************************!*\
  !*** ./node_modules/callbag-share/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst share = source => {\n  let sinks = [];\n  let sourceTalkback;\n\n  return function shared(start, sink) {\n    if (start !== 0) return;\n    sinks.push(sink);\n\n    const talkback = (t, d) => {\n      if (t === 2) {\n        const i = sinks.indexOf(sink);\n        if (i > -1) sinks.splice(i, 1);\n        if (!sinks.length) sourceTalkback(2);\n      } else {\n        sourceTalkback(t, d);\n      }\n    };\n\n    if (sinks.length === 1) {\n      source(0, (t, d) => {\n        if (t === 0) {\n          sourceTalkback = d;\n          sink(0, talkback);\n        } else for (let s of sinks.slice(0)) s(t, d);\n        if (t === 2) sinks = [];\n      });\n      return\n    }\n\n    sink(0, talkback);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (share);\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-share/index.js?");

/***/ }),

/***/ "./node_modules/callbag-skip/index.js":
/*!********************************************!*\
  !*** ./node_modules/callbag-skip/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("const skip = max => source => (start, sink) => {\n  if (start !== 0) return;\n  let skipped = 0;\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) {\n      talkback = d;\n      sink(t, d);\n    } else if (t === 1) {\n      if (skipped < max) {\n        skipped++;\n        talkback(1);\n      } else sink(t, d);\n    } else {\n      sink(t, d);\n    }\n  });\n};\n\nmodule.exports = skip;\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-skip/index.js?");

/***/ }),

/***/ "./node_modules/callbag-take/index.js":
/*!********************************************!*\
  !*** ./node_modules/callbag-take/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("const take = max => source => (start, sink) => {\n  if (start !== 0) return;\n  let taken = 0;\n  let sourceTalkback;\n  let end;\n  function talkback(t, d) {\n    if (t === 2) {\n      end = true;\n      sourceTalkback(t, d);\n    } else if (taken < max) sourceTalkback(t, d);\n  }\n  source(0, (t, d) => {\n    if (t === 0) {\n      sourceTalkback = d;\n      sink(0, talkback);\n    } else if (t === 1) {\n      if (taken < max) {\n        taken++;\n        sink(t, d);\n        if (taken === max && !end) {\n          end = true\n          sourceTalkback(2);\n          sink(2);\n        }\n      }\n    } else {\n      sink(t, d);\n    }\n  });\n};\n\nmodule.exports = take;\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/callbag-take/index.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tCopyright (c) 2018 Jed Watson.\n\tLicensed under the MIT License (MIT), see\n\thttp://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\tvar nativeCodeString = '[native code]';\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/classnames/index.js?");

/***/ }),

/***/ "./packages/blocks/components/block-edit/style.scss":
/*!**********************************************************!*\
  !*** ./packages/blocks/components/block-edit/style.scss ***!
  \**********************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/components/block-edit/style.scss?");

/***/ }),

/***/ "./packages/blocks/components/field/style.scss":
/*!*****************************************************!*\
  !*** ./packages/blocks/components/field/style.scss ***!
  \*****************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/components/field/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/association/style.scss":
/*!*******************************************************!*\
  !*** ./packages/blocks/fields/association/style.scss ***!
  \*******************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/association/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/block-preview/style.scss":
/*!*********************************************************!*\
  !*** ./packages/blocks/fields/block-preview/style.scss ***!
  \*********************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/block-preview/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/complex/style.scss":
/*!***************************************************!*\
  !*** ./packages/blocks/fields/complex/style.scss ***!
  \***************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/complex/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/datetime/style.scss":
/*!****************************************************!*\
  !*** ./packages/blocks/fields/datetime/style.scss ***!
  \****************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/datetime/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/file/style.scss":
/*!************************************************!*\
  !*** ./packages/blocks/fields/file/style.scss ***!
  \************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/file/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/map/style.scss":
/*!***********************************************!*\
  !*** ./packages/blocks/fields/map/style.scss ***!
  \***********************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/map/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/media-gallery/style.scss":
/*!*********************************************************!*\
  !*** ./packages/blocks/fields/media-gallery/style.scss ***!
  \*********************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/media-gallery/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/multiselect/style.scss":
/*!*******************************************************!*\
  !*** ./packages/blocks/fields/multiselect/style.scss ***!
  \*******************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/multiselect/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/oembed/style.scss":
/*!**************************************************!*\
  !*** ./packages/blocks/fields/oembed/style.scss ***!
  \**************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/oembed/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/radio-image/style.scss":
/*!*******************************************************!*\
  !*** ./packages/blocks/fields/radio-image/style.scss ***!
  \*******************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/radio-image/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/radio/style.scss":
/*!*************************************************!*\
  !*** ./packages/blocks/fields/radio/style.scss ***!
  \*************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/radio/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/select/style.scss":
/*!**************************************************!*\
  !*** ./packages/blocks/fields/select/style.scss ***!
  \**************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/select/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/separator/style.scss":
/*!*****************************************************!*\
  !*** ./packages/blocks/fields/separator/style.scss ***!
  \*****************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/separator/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/set/style.scss":
/*!***********************************************!*\
  !*** ./packages/blocks/fields/set/style.scss ***!
  \***********************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/set/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/text/style.scss":
/*!************************************************!*\
  !*** ./packages/blocks/fields/text/style.scss ***!
  \************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/text/style.scss?");

/***/ }),

/***/ "./packages/blocks/fields/textarea/style.scss":
/*!****************************************************!*\
  !*** ./packages/blocks/fields/textarea/style.scss ***!
  \****************************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-fields/./packages/blocks/fields/textarea/style.scss?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* global window */\n\n\nvar root;\n\nif (typeof self !== 'undefined') {\n  root = self;\n} else if (typeof window !== 'undefined') {\n  root = window;\n} else if (typeof __webpack_require__.g !== 'undefined') {\n  root = __webpack_require__.g;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = (0,_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (result);\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/symbol-observable/es/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ symbolObservablePonyfill)\n/* harmony export */ });\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar Symbol = root.Symbol;\n\n\tif (typeof Symbol === 'function') {\n\t\tif (Symbol.observable) {\n\t\t\tresult = Symbol.observable;\n\t\t} else {\n\t\t\tresult = Symbol('observable');\n\t\t\tSymbol.observable = result;\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};\n\n\n//# sourceURL=webpack://carbon-fields/./node_modules/symbol-observable/es/ponyfill.js?");

/***/ }),

/***/ "@carbon-fields/core":
/*!**************************!*\
  !*** external "cf.core" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = cf.core;

/***/ }),

/***/ "immer":
/*!****************************************!*\
  !*** external ["cf","vendor","immer"] ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = cf.vendor.immer;

/***/ }),

/***/ "lodash":
/*!***************************!*\
  !*** external ["lodash"] ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = lodash;

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = wp.apiFetch;

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = wp.blocks;

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = wp.components;

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = wp.compose;

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = wp.data;

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = wp.date;

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = wp.editor;

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = wp.element;

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = wp.hooks;

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = wp.i18n;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _defineProperty)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperty(obj, key, value) {\n  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\n\n//# sourceURL=webpack://carbon-fields/./node_modules/@babel/runtime/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _extends)\n/* harmony export */ });\nfunction _extends() {\n  _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n    return target;\n  };\n  return _extends.apply(this, arguments);\n}\n\n//# sourceURL=webpack://carbon-fields/./node_modules/@babel/runtime/helpers/esm/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction _toPrimitive(input, hint) {\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\n//# sourceURL=webpack://carbon-fields/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction _toPropertyKey(arg) {\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\n}\n\n//# sourceURL=webpack://carbon-fields/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://carbon-fields/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./packages/blocks/index.js");
/******/ 	
/******/ })()
;