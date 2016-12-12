/* @flow */

import { connect } from 'react-redux';
import { getFieldById } from 'fields/selectors';
import { setValue } from 'fields/actions';

const mapStateToProps: Function = (state: Object, ownProps: Object) => {
	return {
		field: getFieldById(state, ownProps.uuid),
	};
};

const mapDispatchToProps: Object = {
	setValue,
};

export default connect(mapStateToProps, mapDispatchToProps);
