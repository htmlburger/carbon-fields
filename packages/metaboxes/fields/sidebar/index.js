/**
 * External dependencies.
 */
import { withDispatch } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

const applyWithDispatch = withDispatch( ( dispatch ) => {
	const { receiveSidebar } = dispatch( 'carbon-fields/metaboxes' );

	return {
		onAdded: receiveSidebar
	};
} );

addFilter( 'carbon-fields.sidebar-field.metabox', 'carbon-fields/metaboxes', ( OriginalSidebarField ) => compose(
	withField,
	applyWithDispatch
)( OriginalSidebarField ) );
