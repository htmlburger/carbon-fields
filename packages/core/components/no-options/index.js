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
const NoOptions = () => (
	<em>
		{ __( 'No options.', 'carbon-fields-ui' ) }
	</em>
);

export default NoOptions;
