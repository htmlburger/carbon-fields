/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * The internal dependencies.
 */
import './style.scss';
import FieldBase from '../../components/field-base';
import NoOptions from '../../components/no-options';

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
			field,
			name,
			value
		} = this.props;

		return (
			<FieldBase id={ id } field={ field } >
				{
					field.options.length > 0
						? (
							<select
								id={ id }
								name={ name }
								value={ value }
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

export default SelectField;
