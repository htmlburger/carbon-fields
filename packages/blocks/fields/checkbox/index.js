/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.checkbox-field.block', 'carbon-fields/blocks', ( OriginalCheckboxField ) => OriginalCheckboxField );
