/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { BaseControl, ToggleControl } from '@wordpress/components';
import { xor } from 'lodash';

/**
 * Renders the field.
 *
 * @return {Object}
 */
const SetField = ( {
	field,
	value,
	onChange,
	isChecked
} ) => {
	// eslint-disable-next-line no-shadow
	const handleChange = ( key ) => onChange( {
		[ field.base_name ]: xor( value, [ key ] )
	} );

	return (
		<BaseControl label={ field.label } >
			{ field.options.map( ( option, index ) => (
				<ToggleControl
					key={ `${ field.id }-${ option.label }-${ index }` }
					label={ option.label }
					checked={ isChecked( option.value, value ) }
					onChange={ () => handleChange( option.value ) }
				/>
			) ) }
		</BaseControl>
	);
};

addFilter( 'carbon-fields.set-field.block', 'carbon-fields/blocks', ( OriginalSetField ) => ( originalProps ) => {
	return (
		<OriginalSetField>
			{ ( { ...props } ) => <SetField { ...originalProps } { ...props } /> }
		</OriginalSetField>
	);
} );
