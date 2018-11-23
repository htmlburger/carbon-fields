/**
 * External dependencies.
 */
import { Component, Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { getFieldType } from '@carbon-fields/core';
import { get } from 'lodash';

class BlockEdit extends Component {
	/**
	 * Handles the change of the field's value.
	 *
	 * @param  {string} fieldId
	 * @param  {mixed}  value
	 * @return {void}
	 */
	handleFieldChange = ( fieldId, value ) => {
		const fieldName = fieldId.split( '|' ).pop();

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
					const Field = getFieldType( field.type, 'block' );

					if ( ! Field ) {
						return null;
					}

					const value = get( attributes, field.base_name );

					return (
						<Field
							key={ index }
							id={ `cf-${ clientId }|${ field.base_name }` }
							value={ value }
							field={ field }
							onChange={ this.handleFieldChange }
						/>
					);
				} ) }
			</Fragment>
		);
	}
}

const applyWithSelect = withSelect( ( select, ownProps ) => {
	const { getFieldDefinitionsByBlockName } = select( 'carbon-fields/blocks' );

	return {
		fields: getFieldDefinitionsByBlockName( ownProps.name )
	};
} );

export default compose(
	applyWithSelect
)( BlockEdit );
