/**
 * External dependencies.
 */
import { Component, Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { getFieldType } from '@carbon-fields/core';
import { get } from 'lodash';

class BlockEdit extends Component {
	/**
	 * Handles the change of the field's value.
	 *
	 * @param  {string} fieldName
	 * @param  {mixed}  value
	 * @return {void}
	 */
	handleFieldChange = ( fieldName, value ) => {
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
		const { fields, attributes } = this.props;

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
							id={ field.base_name }
							field={ field }
							name={ field.base_name }
							value={ value }
							onChange={ this.handleFieldChange }
						/>
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
