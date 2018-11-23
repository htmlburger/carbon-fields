/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
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
	 * @param {Object} selected
	 * @return {void}
	 */
	handleChange = ( selected ) => {
		const {
			id,
			onChange
		} = this.props;

		onChange( id, selected.map( ( item ) => item.value ) );
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
								isMulti
								joinValues
								id={ id }
								name={ name }
								value={ this.filterValues( value ) }
								options={ field.options }
								onChange={ this.handleChange }
								className="cf-react-select-container"
								classNamePrefix="cf-react-select"
							/>
						)
						: <NoOptions />
				}
			</FieldBase>
		);
	}
}

export default MultiselectField;
