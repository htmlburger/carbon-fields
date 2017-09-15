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
import { TYPE_TERM_META } from 'containers/constants';

export default setStatic('type', TYPE_TERM_META)(
	compose(
		withStore(),
		withSetup({
			term_ancestors: [],
			term_parent_id: 0,
			term_level: 1,
		})
	)(Container)
);
