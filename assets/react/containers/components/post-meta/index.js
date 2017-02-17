/**
 * The external dependencies.
 */
import { compose, setStatic } from 'recompose';

/**
 * The internal dependencies.
 */
import Container from 'containers/components/container';
import withStore from 'containers/decorators/with-store';
import withSetup from 'containers/decorators/with-setup';
import { TYPE_POST_META } from 'containers/constants';

export default setStatic('type', TYPE_POST_META)(
	compose(
		withStore(),
		withSetup({
			page_template: 'default',
			level: 1,
			parent_id: null,
			post_format: null,
			terms: [],
		})
	)(Container)
);
