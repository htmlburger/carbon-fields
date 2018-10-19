/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import Base from '../base';

/**
 * Renders the field.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {string}   props.value
 * @param  {Function} props.onChange
 * @return {Object}
 */
const TextField = ( {
	field,
	value,
	onChange
} ) => {
	return (
		<Base field={ field } >
			<input
				type="text"
				id={ field.id }
				name={ name }
				value={ value }
				className="regular-text"
				onChange={ onChange }
				{ ...field.attributes }
			/>
		</Base>
	);
};

addFilter( 'carbon-fields.text-field.metabox', 'carbon-fields/metaboxes', ( OriginalTextField ) => ( originalProps ) => {
	return (
		<OriginalTextField { ...originalProps }>
			{ ( { handleChange } ) => (
				<TextField
					field={ originalProps.field }
					value={ originalProps.value }
					onChange={ handleChange }
				/>
			) }
		</OriginalTextField>
	);
} );
