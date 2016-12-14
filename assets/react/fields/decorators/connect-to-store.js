/* @flow */

import { connect } from 'react-redux';
import { getFieldById } from 'fields/selectors';
import { setupField, updateField, setUI } from 'fields/actions';

/**
 * The default state that will be retrieved from the store.
 *
 * @type {Function}
 */
const defaultMapStateToProps: Function = (state: Object, ownProps: Object) => ({
	field: getFieldById(state, ownProps.id),
});

/**
 * The default actions that will be provided as props to the component.
 *
 * @type {Object}
 */
const defaultMapDispatchToProps: Object = {
	setupField,
	updateField,
	setUI,
};

/**
 * The factory function that will produce the decorator.
 *
 * @param  {Function} [mapStateToProps]
 * @param  {Object}   [mapDispatchToProps]
 * @return {Function}
 */
export default function(mapStateToProps: Function = () => {}, mapDispatchToProps: ?Object = {}): Function {
	return connect((state: Object, ownProps: Object) => {
		return {
			...defaultMapStateToProps(state, ownProps),
			...mapStateToProps(state, ownProps),
		};
	}, {
		...defaultMapDispatchToProps,
		...mapDispatchToProps,
	});
}
