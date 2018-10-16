/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { RawHTML } from '@wordpress/element';

/**
 * Renders the field.
 *
 * @return {Object}
 */
const HtmlField = ( { field } ) => (
	<RawHTML>
		{ field.default_value }
	</RawHTML>
);

addFilter( 'carbon-fields.html-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalHtmlField ) => ( originalProps ) => {
	return (
		<OriginalHtmlField>
			{ () => <HtmlField { ...originalProps } /> }
		</OriginalHtmlField>
	);
} );
