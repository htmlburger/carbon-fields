import { partial } from 'lodash';
import reduceReducers from 'reduce-reducers';

/**
 * The supported domains.
 *
 * @type {String}
 */
const DOMAIN_CONTAINERS = 'containers';
const DOMAIN_FIELDS = 'fields';

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
 * @return {React.Component}
 *
 * @todo Add some validation
 */
function registerComponent(domain, type, component) {
	components[domain][type] = component;

	return component;
}

export const registerContainerComponent = partial(registerComponent, DOMAIN_CONTAINERS);
export const registerFieldComponent = partial(registerComponent, DOMAIN_FIELDS);

/**
 * Get a registered component.
 *
 * @param  {String} domain
 * @param  {String} type
 * @return {React.Component|null}
 */
function getComponent(domain, type) {
	return components[domain][type] || null;
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
}

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
