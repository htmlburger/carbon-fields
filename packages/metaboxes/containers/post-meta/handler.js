/**
 * Internal dependencies.
 */
import { POST_PARENT_ID } from './constants';

/**
 * The handler causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */
export default function handler( props ) {
	return function( effect ) {
		switch ( effect.type ) {
			case POST_PARENT_ID:
				return props.updateContainerMeta( props.id, 'post_parent_id', effect.payload );
		}
	};
}
