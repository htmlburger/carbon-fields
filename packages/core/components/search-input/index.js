/**
 * External dependencies.
 */
import cx from 'classnames';
import { Component } from '@wordpress/element';
import { omit } from 'lodash';

/**
 * The keycode used to represent the "Enter" key.
 *
 * @type {number}
 */
const KEY_ENTER = 13;

class SearchInput extends Component {
	/**
	 * Default properties.
	 *
	 * TODO: Use `@wordpress/i18n` for translations.
	 *
	 * @type {Object}
	 */
	static defaultProps = {
		placeholder: carbonFieldsL10n.field.searchPlaceholder
	};

	/**
	 * Handles change event of input.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		this.props.onChange( e.target.value );
	}

	/**
	 * Handles keydown event of input.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleKeyDown = ( e ) => {
		if ( e.keyCode === KEY_ENTER ) {
			e.preventDefault();

			this.props.onChange( e.target.value );
		}
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			value,
			className,
			...props
		} = this.props;

		return (
			<input
				type="text"
				autoComplete="off"
				className={ cx( 'cf-search-input', className ) }
				defaultValue={ value }
				onChange={ this.handleChange }
				onKeyDown={ this.handleKeyDown }
				{ ...omit( props, [
					'onChange'
				] ) }
			/>
		);
	}
}

export default SearchInput;
