/**
 * External dependencies.
 */
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
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
function ConditionalDisplay() {
	return null;
}

const applyWithSelect = withSelect( ( select ) => {
	const containers = select( 'carbon-fields/metaboxes' ).getContainers();

	return {
		containers
	};
} );

const applyWitEffects = withEffects( aperture, { handler } );

export default compose(
	applyWithSelect,
	applyWitEffects
)( ConditionalDisplay );
