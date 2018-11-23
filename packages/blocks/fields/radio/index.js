/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.radio-field.block', 'carbon-fields/blocks', ( OriginalRadioField ) => withValidation( OriginalRadioField ) );
