/**
 * External dependencies.
 */
import { applyFilters } from '@wordpress/hooks';
import {
	pipe,
	map,
	combine
} from 'callbag-basics';

/**
 * Internal dependencies.
 */
import './post-parent';

/**
 * The function that controls the stream of side effects.
 *
 * @param  {Object} props
 * @param  {string} props.context
 * @return {Function}
 */
export default function aperture( { context } ) {
	return function() {
		const postParent$ = applyFilters( `carbon-fields.conditional-display-post-parent.${ context }` );

		return pipe(
			combine(
				postParent$
			),
			map( ( [ postParent ] ) => ( {
				...postParent
			} ) )
		);
	};
}
