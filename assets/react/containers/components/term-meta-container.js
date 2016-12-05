/* @flow */

import { compose, defaultProps } from 'recompose';
import Container from 'containers/components/container';
import withConnectToStore from 'containers/hocs/with-connect-to-store';
import withInitialSideEffects from 'containers/hocs/with-initial-side-effects';

/**
 * Add the fields that are specific for this container.
 */
const withProps = defaultProps({
	meta: {
		level: 1
	},
	ui: {},
});

export default compose(
	withProps,
	withConnectToStore,
	withInitialSideEffects,
)(Container);
