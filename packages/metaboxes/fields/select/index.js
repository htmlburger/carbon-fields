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
import NoOptions from '../no-options';

export class SelectField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const { field, onChange } = this.props;

		onChange( field.id, e.target.value );
	}

	/**
	 * Renders the radio options
	 *
	 * @return {Object}
	 */
	renderOptions() {
		const { field } = this.props;

		return (
			<select
				name={ field.base_name }
				id={ field.id }
				value={ field.value }
				onChange={ this.handleChange }
			>
				{ field.options.map( ( { value, label } ) => (
					<option key={ value } value={ value }>{ label }</option>
				) ) }
			</select>
		);
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
				{ field.options.length > 0
					? this.renderOptions()
					: <NoOptions />
				}
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.select-field.metabox', 'carbon-fields/metaboxes', ( OriginalSelectField ) => withField( ( props ) => {
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
