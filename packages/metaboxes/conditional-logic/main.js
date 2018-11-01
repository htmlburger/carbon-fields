/**
 * External dependencies.
 */
import { withEffects } from 'refract-callbag';

/**
 * Internal dependencies.
 */
import aperture from './aperture';
import handler from './handler';

/**
 * Performs the evaluation of conditions.
 *
 * @return {null}
 */
function ConditionalLogic() {
	return null;
}

export default withEffects( handler )( aperture )( ConditionalLogic );
