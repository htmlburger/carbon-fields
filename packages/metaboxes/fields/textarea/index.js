/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withStore from '../../components/with-store';

class TextareaField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const { field, onChange } = this.props;

		onChange( field.id, e.target.value );
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
				<textarea
					className="regular-text"
					id={ field.id }
					name={ field.base_name }
					value={ field.value }
					onChange={ this.handleChange }
					{ ...field.attributes }
				/>
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.textarea-field.metabox', 'carbon-fields/metaboxes', ( OriginalTextareaField ) => withStore( ( props ) => {
	return (
		<OriginalTextareaField { ...props }>
			{ ( { field, handleChange } ) => (
				<TextareaField
					field={ field }
					onChange={ handleChange }
				/>
			) }
		</OriginalTextareaField>
	);
} ) );
