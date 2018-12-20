/**
 * External dependencies.
 */
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import './style.scss';

class CheckboxField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const { id, onChange } = this.props;

		onChange( id, e.target.checked );
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
			<Fragment>
				<input
					type="checkbox"
					id={ id }
					name={ name }
					checked={ value }
					value={ value ? field.option_value : '' }
					className="cf-checkbox__input"
					onChange={ this.handleChange }
					{ ...field.attributes }
				/>

				<label className="cf-checkbox__label" htmlFor={ id }>
					{ field.option_label }
				</label>
			</Fragment>
		);
	}
}

export default CheckboxField;
