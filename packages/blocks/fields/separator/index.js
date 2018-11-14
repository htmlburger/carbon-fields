/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.separator-field.block', 'carbon-fields/blocks', ( OriginalSeparatorField ) => OriginalSeparatorField );
