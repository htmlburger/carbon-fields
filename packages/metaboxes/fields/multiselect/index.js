/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import Select from 'react-select';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';
import NoOptions from '../no-options';

export class MultiselectField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param {Object}        option
	 * @param {string|number} option.value
	 * @return {void}
	 */
	handleChange = ( { value } ) => {
		const { field, onChange } = this.props;

		onChange( field.id, field.value, value );
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
			value,
			filterValues
		} = this.props;

		return (
			<Select
				multi
				joinValues
				id={ field.id }
				name={ name }
				value={ filterValues( value ) }
				options={ field.options }
				onChange={ this.handleChange }
			/>
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

addFilter( 'carbon-fields.multiselect-field.metabox', 'carbon-fields/metaboxes', ( OriginalMultiselectField ) => withField( ( props ) => {
	return (
		<OriginalMultiselectField { ...props }>
			{ ( {
				field,
				name,
				value,
				handleChange,
				filterValues
			} ) => (
				<MultiselectField
					field={ field }
					name={ name }
					value={ value }
					filterValues={ filterValues }
					onChange={ handleChange }
				/>
			) }
		</OriginalMultiselectField>
	);
} ) );
