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
				{ renderFields( fields, attributes, setAttributes ) }
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
