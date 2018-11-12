/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { BaseControl, ToggleControl } from '@wordpress/components';

class SetField extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			name,
			value,
			isChecked,
			onChange
		} = this.props;

		return (
			<BaseControl label={ field.label } >
				{ field.options.map( ( option, index ) => (
					<ToggleControl
						key={ index }
						label={ option.label }
						checked={ isChecked( value, option ) }
						onChange={ () => onChange( name, value, option.value ) }
					/>
				) ) }
			</BaseControl>
		);
	}
}

addFilter( 'carbon-fields.set-field.block', 'carbon-fields/blocks', ( OriginalSetField ) => ( props ) => {
	return (
		<OriginalSetField { ...props }>
			{ ( {
				field,
				name,
				value,
				isChecked,
				handleChange
			} ) => (
				<SetField
					field={ field }
					name={ name }
					value={ value }
					isChecked={ isChecked }
					onChange={ handleChange }
				/>
			) }
		</OriginalSetField>
	);
} );
