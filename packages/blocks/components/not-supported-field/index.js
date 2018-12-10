/**
 * The external dependencies.
 */
import { __, sprintf } from '@wordpress/i18n';

/**
 * Render a notice to inform the user that the field doesn't have
 * any options.
 *
 * @return {React.Element}
 */
const NotSupportedField = ( { type } ) => (
	<em>
		{ sprintf( __( `Field of type '%s' is not supported in Gutenberg.`, 'carbon-fields-ui' ), [ type ] ) }
	</em>
);

export default NotSupportedField;
