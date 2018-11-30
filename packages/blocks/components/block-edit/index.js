/**
 * External dependencies.
 */
import { Component, Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { get } from 'lodash';

/**
 * Carbon Fields dependencies.
 */
import { getFieldType } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import Field from '../field';

class BlockEdit extends Component {
	/**
	 * Handles the change of the field's value.
	 *
	 * @param  {string} fieldId
	 * @param  {mixed}  value
	 * @return {void}
	 */
	handleFieldChange = ( fieldId, value ) => {
		const fieldName = fieldId.replace( /^.+__(.+)?$/, '$1' );

		this.props.setAttributes( {
			[ fieldName ]: value
		} );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			clientId,
			fields,
			attributes
		} = this.props;

		return (
			<Fragment>
				{ fields.map( ( field, index ) => {
					const FieldEdit = getFieldType( field.type, 'block' );

					if ( ! FieldEdit ) {
						return null;
					}

					const id = `cf-${ clientId }__${ field.base_name }`;
					const value = get( attributes, field.base_name );

					return (
						<Field
							key={ index }
							id={ id }
							field={ field }
						>
							<FieldEdit
								id={ id }
								blockId={ clientId }
								value={ value }
								field={ field }
								onChange={ this.handleFieldChange }
							/>
						</Field>
					);
				} ) }
			</Fragment>
		);
	}
}

export default withSelect( ( select, ownProps ) => {
	const { getFieldDefinitionsByBlockName } = select( 'carbon-fields/blocks' );

	return {
		fields: getFieldDefinitionsByBlockName( ownProps.name )
	};
} )( BlockEdit );
