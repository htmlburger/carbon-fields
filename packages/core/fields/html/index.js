/**
 * External dependencies.
 */
import { RawHTML } from '@wordpress/element';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';

/**
 * Renders the field.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {Object}
 */
function HtmlField( { field } ) {
	return (
		<FieldBase field={ field }>
			<RawHTML className="cf-html__content">
				{ field.html }
			</RawHTML>
		</FieldBase>
	);
}

export default HtmlField;
