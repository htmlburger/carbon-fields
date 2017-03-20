/**
 * The external dependecies.
 */
import { connect } from 'react-redux';
import { isFunction } from 'lodash';

/**
 * The internal dependencies.
 */
import { getContainerById } from 'containers/selectors';
import { setupContainer, teardownContainer, switchContainerTab } from 'containers/actions';

/**
 * The default state that will be retrieved from the store.
 *
 * @param  {Object} state
 * @param  {Object} ownProps
 * @return {Object}
 */
const mapStateToProps = (state, ownProps) => ({
	container: getContainerById(state, ownProps.id),
});

/**
 * The default actions that will be provided as props to the component.
 *
 * @type {Object}
 */
const mapDispatchToProps = {
	setupContainer,
	teardownContainer,
	switchContainerTab,
};

/**
 * The factory function that will produce the decorator.
 *
 * @return {Function}
 */
export default function() {
	return connect(mapStateToProps, mapDispatchToProps);
}
