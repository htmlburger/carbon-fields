/**
 * External dependencies.
 */
import { withDispatch } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.sidebar.metabox', 'carbon-fields/metaboxes', withDispatch( ( dispatch ) => {
	const { receiveSidebar } = dispatch( 'carbon-fields/metaboxes' );

	return {
		onAdded: receiveSidebar
	};
} ) );
