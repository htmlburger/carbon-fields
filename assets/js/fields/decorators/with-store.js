/**
 * The external dependecies.
 */
import { connect } from 'react-redux';
import { isFunction } from 'lodash';

/**
 * The internal dependencies.
 */
import { getFieldById } from 'fields/selectors';
import {
	setupField,
	teardownField,
	setupValidation,
	updateField,
	setFieldValue,
	setUI,
} from 'fields/actions';

/**
 * The default state that will be retrieved from the store.
 *
 * @param  {Object} state
 * @param  {Object} ownProps
 * @return {Object}
 */
const defaultMapStateToProps = (state, ownProps) => {
	const field = getFieldById(state, ownProps.id);
	const name = ownProps.name || field.name;

	return {
		name,
		field,
	};
};

/**
 * The default actions that will be provided as props to the component.
 *
 * @type {Object}
 */
const defaultMapDispatchToProps = {
	setupField,
	teardownField,
	setupValidation,
	updateField,
	setFieldValue,
	setUI,
};

/**
 * The factory function that will produce the decorator.
 *
 * @param  {Function} [mapStateToProps]
 * @param  {Object}   [mapDispatchToProps]
 * @return {Function}
 */
export default function(mapStateToProps = () => {}, mapDispatchToProps = {}) {
	// Per-component memoization is built-in feature of the `connect` method, but
	// we need to re-implement it, because of this high level wrapper.
	const makeMapStateToProps = () => {
		let cachedMapStateToProps;

		return (state, ownProps) => {
			let props = mapStateToProps(state, ownProps);

			if (!isFunction(cachedMapStateToProps)) {
				props = mapStateToProps(state, ownProps);

				if (isFunction(props)) {
					cachedMapStateToProps = props;
					props = cachedMapStateToProps(state, ownProps);
				}
			} else {
				props = cachedMapStateToProps(state, ownProps);
			}

			return {
				...defaultMapStateToProps(state, ownProps),
				...props,
			};
		};
	};

	return connect(makeMapStateToProps, {
		...defaultMapDispatchToProps,
		...mapDispatchToProps,
	});
}
