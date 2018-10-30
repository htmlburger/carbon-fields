/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withStore from '../../components/with-store';

/**
 * Renders the component.
 *
 * @param {Object} props
 * @param {Object} props.field
 * @return {Object}
 */
const HtmlField = ( { field } ) => (
	<FieldBase field={ field } >
		<div dangerouslySetInnerHTML={ { __html: field.html } }></div>
	</FieldBase>
);

addFilter( 'carbon-fields.html-field.metabox', 'carbon-fields/metaboxes', ( OriginalHtmlField ) => withStore( ( props ) => {
	return (
		<OriginalHtmlField { ...props }>
			{ ( { field } ) => (
				<HtmlField field={ field } />
			) }
		</OriginalHtmlField>
	);
} ) );
