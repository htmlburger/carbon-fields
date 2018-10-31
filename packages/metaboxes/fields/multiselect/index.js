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
import withStore from '../../components/with-store';
import NoOptions from '../no-options';

export class MultiselectField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param {Object}        option
	 * @param {string|number} option.value
	 * @return {void}
	 */
	handleChange = ( option ) => {
		const { field, onChange } = this.props;

		onChange( field.id, field.value, option );
	}

	/**
	 * Renders the radio options
	 *
	 * @return {Object}
	 */
	renderOptions() {
		const { field } = this.props;

		return (
			<Select
				multi
				joinValues
				id={ field.id }
				name={ name }
				value={ field.value }
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

addFilter( 'carbon-fields.multiselect-field.metabox', 'carbon-fields/metaboxes', ( OriginalMultiselectField ) => withStore( ( props ) => {
	return (
		<OriginalMultiselectField { ...props }>
			{ ( { field, handleChange } ) => (
				<MultiselectField
					field={ field }
					onChange={ handleChange }
				/>
			) }
		</OriginalMultiselectField>
	);
} ) );
