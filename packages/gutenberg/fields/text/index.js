/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Renders the field.
 *
 * @return {Object}
 */
const TextField = () => (
	<input type="text" />
);

addFilter( 'carbon-fields.text-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalTextField ) => () => (
	<OriginalTextField>
		{ () => <TextField /> }
	</OriginalTextField>
) );
