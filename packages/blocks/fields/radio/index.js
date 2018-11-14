/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.radio-field.block', 'carbon-fields/blocks', ( OriginalRadioField ) => OriginalRadioField );
