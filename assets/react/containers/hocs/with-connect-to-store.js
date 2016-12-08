/* @flow */

import { connect } from 'react-redux';
import { getContainerFieldsById } from 'containers/selectors';
import { setupContainer, checkVisibility } from 'containers/actions';

const mapStateToProps: Function = (state: Object, ownProps: Object) => {
	return {
		fields: getContainerFieldsById(state, ownProps.id),
	};
};

const mapDispatchToProps: Object = {
	setupContainer,
	checkVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps);
