/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { setupDefaultUIMeta, checkVisibility } from 'containers/actions';

class Container extends React.Component {
	/**
	 * Do the initial setup of the container.
	 *
	 * @return {void}
	 */
	componentWillMount() {
		this.props.setupDefaultUIMeta(this.props.id);
		this.props.checkVisibility(this.props.id);
	}

	render() {
		return <div>container here</div>;
	}
}

export default connect(null, { setupDefaultUIMeta, checkVisibility })(Container);
