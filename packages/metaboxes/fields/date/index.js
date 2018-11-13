/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.date-field.metabox', 'carbon-fields/metaboxes', ( OriginalDatetimeField ) => withField( ( props ) => ( <OriginalDatetimeField buttonText={ __( 'Select Date' ) } { ...props } /> ) ) );
