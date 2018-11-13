/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.time-field.metabox', 'carbon-fields/metaboxes', ( OriginalDatetimeField ) => withField( ( props ) => ( <OriginalDatetimeField buttonText={ __( 'Select Time' ) } { ...props } /> ) ) );
