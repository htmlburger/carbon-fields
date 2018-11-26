/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { get } from 'lodash';

/**
 * The internal dependencies.
 */
import './style.scss';
import FieldBase from '../../components/field-base';
import NoOptions from '../../components/no-options';
import validator from '../../validators/required';

export class SelectField extends Component {
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
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			id,
			name,
			value,
			error,
			field
		} = this.props;

		const baseValue = field.default_value
			? field.default_value
			: get( field.options, '[0].value', '' );

		return (
			<FieldBase
				id={ id }
				field={ field }
				error={ error }
			>
				{
					field.options.length > 0
						? (
							<select
								id={ id }
								name={ name }
								value={ value ? value : baseValue }
								className="cf-select__input"
								onChange={ this.handleChange }
							>
								{ field.options.map( ( option ) => (
									<option key={ option.value } value={ option.value }>
										{ option.label }
									</option>
								) ) }
							</select>
						)
						: <NoOptions />
				}
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.select.validate', 'carbon-fields/core', ( field, value ) => validator( value ) );
addFilter( 'carbon-fields.gravity_form.validate', 'carbon-fields/core', ( field, value ) => validator( value ) );

export default SelectField;
