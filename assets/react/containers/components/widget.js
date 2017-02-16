import { compose, defaultProps, setStatic } from 'recompose';
import Container from 'containers/components/container';
import withConnectToStore from 'containers/decorators/with-connect-to-store';
import withInitialSideEffects from 'containers/decorators/with-initial-side-effects';
import { TYPE_WIDGET } from 'containers/constants';

/**
 * Add the fields that are specific for this container.
 */
const withProps = defaultProps({
	meta: {},
	ui: {}
});

export default setStatic('type', TYPE_WIDGET)(
	compose(
		withProps,
		withConnectToStore,
		withInitialSideEffects,
	)(Container)
);

