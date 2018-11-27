/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import Select from 'react-select';

/**
 * The internal dependencies.
 */
import NoOptions from '../../components/no-options';
import validator from '../../validators/required';

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
			name,
			value,
			field
		} = this.props;

		return (
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
		);
	}
}

addFilter( 'carbon-fields.multiselect.validate', 'carbon-fields/core', ( field, value ) => validator( value ) );

export default MultiselectField;
