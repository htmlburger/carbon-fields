/* @flow */

import { connect } from 'react-redux';
import { setupContainer, checkVisibility } from 'containers/actions';

const mapStateToProps = null;

const mapDispatchToProps = {
	setupContainer,
	checkVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps);
