/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.media_gallery-field.block', 'carbon-fields/blocks', ( OriginalMediaGalleryField ) => OriginalMediaGalleryField );
