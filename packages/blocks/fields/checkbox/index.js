/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { CheckboxControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

class CheckboxField extends Component {
	/**
	 * Handles the change of the checkbox.
	 *
	 * @param  {string} value
	 * @return {void}
	 */
	handleChange = ( value ) => {
		const { name, onChange } = this.props;

		onChange( name, value );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field, value } = this.props;

		return (
			<CheckboxControl
				label={ field.option_label }
				checked={ value }
				onChange={ this.handleChange }
			/>
		);
	}
}

addFilter( 'carbon-fields.checkbox-field.block', 'carbon-fields/blocks', ( OriginalCheckboxField ) => ( props ) => {
	return (
		<OriginalCheckboxField { ...props }>
			{ ( {
				field,
				name,
				value,
				handleChange
			} ) => (
				<CheckboxField
					field={ field }
					name={ name }
					value={ value }
					onChange={ handleChange }
				/>
			) }
		</OriginalCheckboxField>
	);
} );
