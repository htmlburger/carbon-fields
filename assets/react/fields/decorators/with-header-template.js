/**
 * The external dependencies.
 */
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { isString } from 'lodash';

/**
 * The internal dependencies.
 */
import {
	getComplexGroupLabelFactory,
	getFieldsByGroupFactory
} from 'fields/selectors';

/**
 * Get values from the store.
 *
 * @param  {Object} state
 * @param  {Object} props
 * @param  {Object} props.group
 * @return {Object}
 */
const mapStateToProps = (state, { group }) => {
	const getFieldsByGroup = getFieldsByGroupFactory(group);
	const getComplexGroupLabel = getComplexGroupLabelFactory(group);

	return state => {
		const data = {
			label: getComplexGroupLabel(state),
		};

		// Prevent unnecessary re-renders when the group
		// doesn't have a template.
		if (isString(group.label_template)) {
			data.fields = getFieldsByGroup(state);
		}

		return data;
	};
};

export default connect(mapStateToProps);
