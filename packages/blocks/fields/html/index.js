/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { RawHTML } from '@wordpress/element';

/**
 * Renders the field.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {Object}
 */
const HtmlField = ( { field } ) => (
	<RawHTML>
		{ field.default_value }
	</RawHTML>
);

addFilter( 'carbon-fields.html-field.block', 'carbon-fields/blocks', ( OriginalHtmlField ) => ( props ) => {
	return (
		<OriginalHtmlField { ...props }>
			{ ( { field } ) => (
				<HtmlField field={ field } />
			) }
		</OriginalHtmlField>
	);
} );
