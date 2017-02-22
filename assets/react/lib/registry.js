/**
 * The external dependencies.
 */
import reduceReducers from 'reduce-reducers';
import { partial } from 'lodash';

/**
 * The supported domains.
 *
 * @type {String}
 */
const DOMAIN_CONTAINERS = 'containers';
const DOMAIN_FIELDS = 'fields';
const DOMAIN_SIDEBARS = 'sidebars';

/**
 * The map that will be used by the factory functions.
 *
 * @type {Object}
 */
const components = {
	[DOMAIN_CONTAINERS]: {},
	[DOMAIN_FIELDS]: {},
};

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

export const registerContainerComponent = partial(registerComponent, DOMAIN_CONTAINERS);
export const registerFieldComponent = partial(registerComponent, DOMAIN_FIELDS);

/**
 * Get a registered component.
 *
 * @param  {String} domain
 * @param  {String} type
 * @return {React.Component}
 */
function getComponent(domain, type) {
	const component = components[domain][type];

	if (!component) {
		throw new Error(`Could not find the component for type "${type}".`);
	}

	return component;
}

export const getContainerComponent = partial(getComponent, DOMAIN_CONTAINERS);
export const getFieldComponent = partial(getComponent, DOMAIN_FIELDS);

/**
 * Every reducer will be pushed here, in this way we will achieve
 * great extensibility of the store.
 *
 * @type {Object}
 */
const reducers = {
	[DOMAIN_CONTAINERS]: [],
	[DOMAIN_FIELDS]: [],
	[DOMAIN_SIDEBARS]: [],
};

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

export const registerContainerReducer = partial(registerReducer, DOMAIN_CONTAINERS);
export const registerFieldReducer = partial(registerReducer, DOMAIN_FIELDS);
export const registerSidebarReducer = partial(registerReducer, DOMAIN_SIDEBARS);

/**
 * Apply the 3rd party reducers to the core reducers.
 *
 * @param  {String}   domain
 * @param  {Function} fn
 * @return {Function}
 */
function decorateReducer(domain, fn) {
	return (state, action) => reduceReducers(fn, ...reducers[domain])(state, action);
}

export const decorateContainerReducer = partial(decorateReducer, DOMAIN_CONTAINERS);
export const decorateFieldReducer = partial(decorateReducer, DOMAIN_FIELDS);
export const decorateSidebarReducer = partial(decorateReducer, DOMAIN_SIDEBARS);

/**
 * The registered sagas.
 *
 * @type {Array}
 */
const sagas = [];

/**
 * Register a new saga.
 *
 * @param  {Function} saga
 * @return {void}
 */
export function registerSaga(saga) {
	sagas.push(saga);
}

/**
 * Get all registered sagas.
 *
 * @return {Function[]}
 */
export function getSagas() {
	return sagas;
}

/**
 * The map that will be used by the validation service.
 *
 * @type {Object}
 */
const validators = {
	[DOMAIN_FIELDS]: {},
};

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

export const registerFieldValidator = partial(registerValidator, DOMAIN_FIELDS);

/**
 * Get the validators for the specified domain.
 *
 * @param  {String} domain
 * @return {Object}
 */
function getValidators(domain) {
	return validators[domain] || {};
}

export const getFieldValidators = partial(getValidators, DOMAIN_FIELDS);
