/* @flow */

import { connect } from 'react-redux';
import { getFieldById } from 'fields/selectors';

const mapStateToProps: Function = (state: Object, ownProps: Object) => {
	return {
		field: getFieldById(state, ownProps.id),
	};
};

export default connect(mapStateToProps);
