/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

addFilter( 'carbon-fields.time-field.block', 'carbon-fields/blocks', ( OriginalDatetimeField ) => ( props ) => ( <OriginalDatetimeField buttonText={ __( 'Select Time' ) } { ...props } /> ) );
