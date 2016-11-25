/* @flow */

import { connect } from 'react-redux';
import { setupDefaultUIMeta, checkVisibility } from 'containers/actions';

const mapStateToProps = null;

const mapDispatchToProps = {
	setupDefaultUIMeta,
	checkVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps);
