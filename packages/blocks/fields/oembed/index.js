/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.oembed-field.block', 'carbon-fields/blocks', ( OriginalOembedField ) => OriginalOembedField );
