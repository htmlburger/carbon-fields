/* @flow */

import React from 'react';

/**
 * The base UI class that will be used by all containers.
 *
 * @abstract
 */
class Container extends React.Component {
	/**
	 * Do the initial setup of the container.
	 *
	 * @return {void}
	 */
	componentWillMount() {
		this.props.setupDefaultUIMeta(this.props.id, this.getDefaultUIMeta());
		this.props.checkVisibility(this.props.id);
	}

	render() {
		return <div>container here</div>;
	}

	/**
	 * Get the defaults values for the UI's meta.
	 *
	 * @return {Object}
	 */
	getDefaultUIMeta(): Object {
		return {};
	}
}

export default Container;
