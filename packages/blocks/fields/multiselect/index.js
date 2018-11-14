/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.multiselect-field.block', 'carbon-fields/blocks', ( OriginalMultiselectField ) => OriginalMultiselectField );
