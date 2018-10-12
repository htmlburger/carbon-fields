/**
 * External dependencies.
 */
import { Component, Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { getFieldType } from '@carbon-fields/fields';

class BlockEdit extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<Fragment>
				{ this.props.fields.map( ( field, index ) => {
					const Field = getFieldType( field.type, 'gutenberg' );

					if ( ! Field ) {
						return null;
					}

					return (
						<Field key={ index } />
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
