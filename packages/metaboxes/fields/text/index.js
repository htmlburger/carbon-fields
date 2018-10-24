/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import Base from '../base';
import withStore from '../../components/with-store';

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
	const handleChange = ( e ) => {
		onChange( field.id, e.target.value );
	};

	return (
		<Base field={ field } >
			<input
				type="text"
				id={ field.id }
				name={ field.base_name }
				value={ value }
				className="regular-text"
				onChange={ handleChange }
				{ ...field.attributes }
			/>
		</Base>
	);
};

addFilter( 'carbon-fields.text-field.metabox', 'carbon-fields/metaboxes', ( OriginalTextField ) => withStore( ( props ) => {
	return (
		<OriginalTextField { ...props }>
			{ ( { handleChange } ) => (
				<TextField
					field={ props.field }
					value={ props.value }
					onChange={ handleChange }
				/>
			) }
		</OriginalTextField>
	);
} ) );
