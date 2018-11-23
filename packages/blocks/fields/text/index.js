/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.text-field.block', 'carbon-fields/blocks', ( OriginalTextField ) => withValidation( OriginalTextField ) );
