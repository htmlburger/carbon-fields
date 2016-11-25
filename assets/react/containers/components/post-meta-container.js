/* @flow */

import { compose, defaultProps } from 'recompose';
import Container from 'containers/components/container';
import withConnectToStore from 'containers/hocs/withConnectToStore';
import withInitialSideEffects from 'containers/hocs/withInitialSideEffects';

/**
 * Add the UI fields that are specific for this container.
 */
const withDefaultUI = defaultProps({
	ui: {
		'page_template': 'default',
		'level': 1,
		'parent_id': null,
		'post_format': null,
		'terms': []
	}
});

export default compose(
	withDefaultUI,
	withConnectToStore,
	withInitialSideEffects,
)(Container);
