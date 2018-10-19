/**
 * External dependencies.
 */
import { Component, Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { getFieldType } from '@carbon-fields/core';
import { get } from 'lodash';

class BlockEdit extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			fields,
			attributes,
			setAttributes
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
							field={ field }
							value={ value }
							onChange={ setAttributes }
						/>
					);
				} ) }
			</Fragment>
		);
	}
}

export default withSelect( ( select, ownProps ) => {
	const { getFieldDefinitionsByBlockName } = select( 'carbon-fields' );

	return {
		fields: getFieldDefinitionsByBlockName( ownProps.name )
	};
} )( BlockEdit );
