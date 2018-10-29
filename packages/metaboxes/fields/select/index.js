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

export class SelectField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param {Object} e The change event of the select field
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
				<select
					name={ field.base_name }
					id={ field.id }
					value={ field.value }
				>
					{ field.options.map( ( { value, label } ) => (
						<option key={ value } value={ value }>{ label }</option>
					) ) }
				</select>
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.select-field.metabox', 'carbon-fields/metaboxes', ( OriginalSelectField ) => withStore( ( props ) => {
	return (
		<OriginalSelectField { ...props }>
			{ ( { field, handleChange } ) => (
				<SelectField
					field={ field }
					onChange={ handleChange }
				/>
			) }
		</OriginalSelectField>
	);
} ) );
