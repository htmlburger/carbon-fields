/**
 * External dependencies.
 */
import produce from 'immer';
import { applyFilters } from '@wordpress/hooks';
import { assign } from 'lodash';
import {
	pipe,
	merge,
	scan
} from 'callbag-basics';

/**
 * Internal dependencies.
 */
import './post-parent';
import './post-format';

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
		const postFormat$ = applyFilters( `carbon-fields.conditional-display-post-format.${ context }` );

		return pipe(
			merge(
				postParent$,
				postFormat$
			),
			scan( ( previous, current ) => produce( previous, ( draft ) => {
				assign( draft, current );
			} ) )
		);
	};
}
