/**
 * The external dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Render a notice to inform the user that the field doesn't have
 * any options.
 *
 * @return {React.Element}
 */
const NotSupportedField = ( { type } ) => (
	<em>
		{ __( `Field of type '${ type }' is not supported in Gutenberg.` ) }
	</em>
);

export default NotSupportedField;
