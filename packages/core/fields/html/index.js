/**
 * External dependencies.
 */
import { RawHTML } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import './style.scss';

/**
 * Renders the field.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {Object}
 */
function HtmlField( { field } ) {
	return (
		<RawHTML className="cf-html__content">
			{ field.html }
		</RawHTML>
	);
}

export default HtmlField;
