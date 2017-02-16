import { compose, defaultProps, setStatic } from 'recompose';
import Container from 'containers/components/container';
import withConnectToStore from 'containers/decorators/with-connect-to-store';
import withInitialSideEffects from 'containers/decorators/with-initial-side-effects';
import { TYPE_POST_META } from 'containers/constants';

/**
 * Add the fields that are specific for this container.
 */
const withProps = defaultProps({
	meta: {
		page_template: 'default',
		level: 1,
		parent_id: null,
		post_format: null,
		terms: []
	},
	ui: {},
});

export default setStatic('type', TYPE_POST_META)(
	compose(
		withProps,
		withConnectToStore,
		withInitialSideEffects,
	)(Container)
);
