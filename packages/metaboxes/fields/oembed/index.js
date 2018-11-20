/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';
import withField from '../../components/with-field';

addFilter( 'carbon-fields.oembed-field.metabox', 'carbon-fields/metaboxes', ( OriginalOembedField ) => withField( OriginalOembedField ) );
