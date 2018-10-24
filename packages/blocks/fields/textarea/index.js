/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { RichText } from '@wordpress/editor';
import { BaseControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

class TextareaField extends Component {
	/**
	 * Handles the change of the textare.
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
			<BaseControl label={ field.label }>
				<RichText
					value={ value }
					formattingControls={ [] }
					multiline
					onChange={ this.handleChange }
				/>
			</BaseControl>
		);
	}
}

addFilter( 'carbon-fields.textarea-field.block', 'carbon-fields/blocks', ( OriginalTextareaField ) => ( props ) => {
	return (
		<OriginalTextareaField { ...props }>
			{ ( {
				field,
				value,
				handleChange
			} ) => (
				<TextareaField
					field={ field }
					value={ value }
					onChange={ handleChange }
				/>
			) }
		</OriginalTextareaField>
	);
} );
