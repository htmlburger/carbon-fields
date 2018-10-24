/**
 * External dependencies.
 */
import { Component, Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';

/**
 * The internal dependencies.
 */
import renderFields from '../../utils/render-fields';

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
				{ renderFields( fields, attributes, this.handleFieldChange ) }
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
