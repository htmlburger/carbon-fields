/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import Select from 'react-select';

/**
 * The internal dependencies.
 */
import './style.scss';
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

		return values.map( ( value ) => field.options.find( ( option ) => option.value === value ) );
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
						id={ id }
						name={ name }
						value={ this.filterValues( value ) }
						options={ field.options }
						delimiter={ field.valueDelimiter }
						onChange={ this.handleChange }
						className="cf-multiselect__select"
						classNamePrefix="cf-multiselect"
						isMulti
					/>
				)
				: <NoOptions />
		);
	}
}

export default MultiselectField;
