/**
 * External dependencies.
 */
import { withSelect } from '@wordpress/data';

/**
 * Renders the input used to notify the backend about the changes.
 *
 * @param  {Object}  props
 * @param  {boolean} props.isDirty
 * @return {mixed}
 */
function RevisionsFlag( props ) {
	return (
		<input
			type="hidden"
			name={ window.cf.config.revisionsInputKey }
			disabled={ ! props.isDirty }
			value="1"
		/>
	);
}

export default withSelect( ( select ) => ( {
	isDirty: select( 'carbon-fields/metaboxes' ).isDirty()
} ) )( RevisionsFlag );
