/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { TextControl } from '@wordpress/components';

class TextField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {string} value
	 * @return {void}
	 */
	handleChange = ( value ) => {
		const { field, onChange } = this.props;

		onChange( field.base_name, value );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field, value } = this.props;

		return (
			<TextControl
				label={ field.label }
				value={ value }
				onChange={ this.handleChange }
			/>
		);
	}
}

addFilter( 'carbon-fields.text-field.block', 'carbon-fields/blocks', ( OriginalTextField ) => ( props ) => {
	return (
		<OriginalTextField { ...props }>
			{ ( {
				field,
				value,
				handleChange
			} ) => (
				<TextField
					field={ field }
					value={ value }
					onChange={ handleChange }
				/>
			) }
		</OriginalTextField>
	);
} );
