/* Remove when https://github.com/babel/babel-eslint/issues/530 is fixed */
/* eslint template-curly-spacing: 'off' */
/* eslint indent: 'off' */

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

class SetField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const { field, onChange } = this.props;

		onChange( field.id, field.value, e.target.value );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field, isChecked } = this.props;

		return (
			<FieldBase field={ field } >
				{ field.options.map( ( option ) => (
					<label key={ `${ field.id }-${ option.value }` }>
						<input
							type="checkbox"
							id={ `${ field.id }-${ option.value }` }
							name={ `${ field.base_name }-${ option.value }` }
							checked={ isChecked( field.value, option ) }
							value={ option.value }
							onChange={ this.handleChange }
							{ ...field.attributes }
						/>

						{ option.label }
					</label>
				) ) }
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.set-field.metabox', 'carbon-fields/metaboxes', ( OriginalSetField ) => withStore( ( props ) => {
	return (
		<OriginalSetField { ...props }>
			{ ( {
				field,
				handleChange,
				isChecked
			} ) => (
				<SetField
					field={ field }
					isChecked={ isChecked }
					onChange={ handleChange }
				/>
			) }
		</OriginalSetField>
	);
} ) );
