/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { xor } from 'lodash';
import Select from 'react-select';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import NoOptions from '../../components/no-options';

class MultiselectField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param {Object}        option
	 * @param {string|number} option.value
	 * @return {void}
	 */
	handleChange = ( { value: optionValue } ) => {
		const {
			id,
			value,
			onChange
		} = this.props;

		onChange( id, xor( value, [ optionValue ] ) );
	}

	/**
	 * Filter the field options which are contained as values
	 *
	 * @param {Array} values
	 * @return {Array}
	 */
	filterValues = ( values ) => {
		const { field } = this.props;

		return field.options.filter( ( option ) => values.indexOf( option.value ) > -1 );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			id,
			field,
			name,
			value
		} = this.props;

		return (
			<FieldBase id={ id } field={ field } >
				{
					field.options.length > 0
						? (
							<Select
								multi
								joinValues
								id={ id }
								name={ name }
								value={ this.filterValues( value ) }
								options={ field.options }
								onChange={ this.handleChange }
							/>
						)
						: <NoOptions />
				}
			</FieldBase>
		);
	}
}

export default MultiselectField;
