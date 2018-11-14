/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import NoOptions from '../../components/no-options';

class RadioField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const { id, onChange } = this.props;

		onChange( id, e.target.value );
	}

	/**
	 * Renders the radio options
	 *
	 * @return {Object}
	 */
	renderOptions() {
		const {
			id,
			field,
			value,
			name
		} = this.props;

		return field.options.map( ( { value: optionValue, label } ) => (
			<label key={ `${ id }-${ optionValue }` }>
				<input
					type="radio"
					id={ `${ id }-${ optionValue }` }
					name={ `${ id }-${ name }` }
					checked={ value === optionValue }
					value={ optionValue }
					onChange={ this.handleChange }
					{ ...field.attributes }
				/>

				{ label }
			</label>
		) );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field } = this.props;

		return (
			<FieldBase field={ field } >
				{ field.options.length > 0
					? this.renderOptions()
					: <NoOptions />
				}
			</FieldBase>
		);
	}
}

export default RadioField;
