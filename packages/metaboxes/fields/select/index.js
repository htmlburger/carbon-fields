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
		const {
			field,
			name,
			value
		} = this.props;

		return (
			<select
				id={ field.id }
				name={ name }
				value={ value }
				onChange={ this.handleChange }
			>
				{ field.options.map( ( option ) => (
					<option key={ option.value } value={ option.value }>
						{ option.label }
					</option>
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
			{ ( {
				field,
				name,
				value,
				handleChange
			} ) => (
				<SelectField
					field={ field }
					name={ name }
					value={ value }
					onChange={ handleChange }
				/>
			) }
		</OriginalSelectField>
	);
} ) );
