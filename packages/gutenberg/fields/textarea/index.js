/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { BaseControl } from '@wordpress/components';
import { RichText } from '@wordpress/editor';

/**
 * Renders the field.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {string}   props.value
 * @param  {Function} props.onChange
 * @return {Object}
 */
const TextareaField = ( {
	field,
	value,
	onChange
} ) => {
	return (
		<BaseControl label={ field.label } >
			<RichText
				value={ value }
				multiline={ true }
				formattingControls={ [] }
				onChange={ ( value ) => onChange( field.base_name, value ) } // eslint-disable-line no-shadow
			/>
		</BaseControl>
	);
};

addFilter( 'carbon-fields.textarea-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalTextareaField ) => ( originalProps ) => {
	return (
		<OriginalTextareaField { ...originalProps }>
			{ ( { handleChange } ) => (
				<TextareaField
					tan
					field={ originalProps.field }
					value={ originalProps.value }
					onChange={ handleChange }
				/>
			) }
		</OriginalTextareaField>
	);
} );
