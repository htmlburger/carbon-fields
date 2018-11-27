/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import './style.scss';
import validator from '../../validators/required';

class TextareaField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {Object} e
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
			field
		} = this.props;

		return (
			<textarea
				id={ id }
				name={ name }
				value={ value }
				rows={ field.rows }
				className="cf-textarea__input"
				onChange={ this.handleChange }
				{ ...field.attributes }
			/>
		);
	}
}

addFilter( 'carbon-fields.textarea.validate', 'carbon-fields/core', ( field, value ) => validator( value ) );

export default TextareaField;
