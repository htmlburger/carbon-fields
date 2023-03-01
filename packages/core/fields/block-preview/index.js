/**
 * External dependencies.
 */
import { RawHTML } from '@wordpress/element';

/**
 * Renders the field.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {Object}
 */
function BlockPreviewField( { field } ) {
	return (
		<RawHTML className="cf-html__content cf-html__content--block-preview">
			{ field.html }
		</RawHTML>
	);
}

export default BlockPreviewField;
