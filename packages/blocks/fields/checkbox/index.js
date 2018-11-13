/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.checkbox-field.block', 'carbon-fields/blocks', ( OriginalCheckboxField ) => OriginalCheckboxField );
