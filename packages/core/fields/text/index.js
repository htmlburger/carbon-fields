/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';
import validator from '../../validators/required';

class TextField extends Component {
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
	 * Render the component.
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
			<input
				type="text"
				id={ id }
				name={ name }
				value={ value }
				className="cf-text__input"
				onChange={ this.handleChange }
				{ ...field.attributes }
			/>
		);
	}
}

addFilter( 'carbon-fields.text.validate', 'carbon-fields/core', ( field, value ) => validator( value ), 0 );

export default TextField;
