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
import './post-template';
import './post-term';
import './term-parent';
import './user-role';

/**
 * The function that controls the stream of side effects.
 *
 * @param  {Object} props
 * @param  {string} props.context
 * @return {Object}
 */
// eslint-disable-next-line no-unused-vars
export default function aperture( component, { context } ) {
	const postParent$ = applyFilters( `carbon-fields.conditional-display-post-parent.${ context }` );
	const postFormat$ = applyFilters( `carbon-fields.conditional-display-post-format.${ context }` );
	const postTemplate$ = applyFilters( `carbon-fields.conditional-display-post-template.${ context }` );
	const postTerm$ = applyFilters( `carbon-fields.conditional-display-post-term.${ context }` );
	const termParent$ = applyFilters( `carbon-fields.conditional-display-term-parent.${ context }` );
	const userRole$ = applyFilters( `carbon-fields.conditional-display-user-role.${ context }` );

	return pipe(
		merge(
			postParent$,
			postFormat$,
			postTemplate$,
			postTerm$,
			termParent$,
			userRole$
		),
		scan( ( previous, current ) => produce( previous, ( draft ) => {
			assign( draft, current );
		} ) )
	);
}
