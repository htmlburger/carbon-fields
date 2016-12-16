import { connect } from 'react-redux';
import { getContainerFieldsById } from 'containers/selectors';
import { setupContainer, checkVisibility } from 'containers/actions';

const mapStateToProps = (state, ownProps) => {
	return {
		fields: getContainerFieldsById(state, ownProps.id),
	};
};

const mapDispatchToProps = {
	setupContainer,
	checkVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps);
