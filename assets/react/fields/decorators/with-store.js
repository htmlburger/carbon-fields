import { connect } from 'react-redux';
import { getFieldById } from 'fields/selectors';
import { setupField, updateField, setUI } from 'fields/actions';

/**
 * The default state that will be retrieved from the store.
 *
 * @type {Function}
 */
const defaultMapStateToProps = (state, ownProps) => ({
	field: getFieldById(state, ownProps.id),
});

/**
 * The default actions that will be provided as props to the component.
 *
 * @type {Object}
 */
const defaultMapDispatchToProps = {
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
export default function(mapStateToProps = () => {}, mapDispatchToProps = {}) {
	return connect((state, ownProps) => {
		return {
			...defaultMapStateToProps(state, ownProps),
			...mapStateToProps(state, ownProps),
		};
	}, {
		...defaultMapDispatchToProps,
		...mapDispatchToProps,
	});
}
