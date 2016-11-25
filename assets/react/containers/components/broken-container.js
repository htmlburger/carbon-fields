/* @flow */

import React from 'react';
import { connect } from 'react-redux';

import Container from 'containers/components/container';
import { setupDefaultUIMeta, checkVisibility } from 'containers/actions';

class BrokenContainer extends Container {
	/**
	 * Get the defaults values for the UI's meta.
	 *
	 * @return {Object}
	 */
	getDefaultUIMeta(): Object {
		return {
			is_broken: true, // Only for test...
		};
	}
}

export default connect(null, { setupDefaultUIMeta, checkVisibility })(BrokenContainer);
