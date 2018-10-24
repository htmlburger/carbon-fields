/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { SelectControl } from '@wordpress/components';

export class SelectField extends Component {
	/**
	 * Handles the change of the select.
	 *
	 * @param  {string} value
	 * @return {void}
	 */
	handleChange = ( value ) => {
		const { field, onChange } = this.props;

		onChange( field.base_name, value );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field, value } = this.props;

		return (
			<SelectControl
				label={ field.label }
				selected={ value }
				options={ field.options }
				onChange={ this.handleChange }
			/>
		);
	}
}

addFilter( 'carbon-fields.select-field.block', 'carbon-fields/blocks', ( OriginalSelectField ) => ( props ) => {
	return (
		<OriginalSelectField { ...props }>
			{ ( {
				field,
				value,
				handleChange
			} ) => (
				<SelectField
					field={ field }
					value={ value }
					onChange={ handleChange }
				/>
			) }
		</OriginalSelectField>
	);
} );
