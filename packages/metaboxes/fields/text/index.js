/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';

class TextField extends Component {
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
				<input
					type="text"
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

addFilter( 'carbon-fields.text-field.metabox', 'carbon-fields/metaboxes', ( OriginalTextField ) => withField( ( props ) => {
	return (
		<OriginalTextField { ...props }>
			{ ( { field, handleChange } ) => (
				<TextField
					field={ field }
					onChange={ handleChange }
				/>
			) }
		</OriginalTextField>
	);
} ) );
