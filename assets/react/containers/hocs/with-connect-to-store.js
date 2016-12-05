/* @flow */

import { connect } from 'react-redux';
import { setupContainer, checkVisibility } from 'containers/actions';

const mapStateToProps: any = null;

const mapDispatchToProps: Object = {
	setupContainer,
	checkVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps);
