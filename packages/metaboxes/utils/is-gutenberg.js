/**
 * External dependencies.
 */
import { isUndefined } from 'lodash';

/**
 * Returns true if Gutenberg is presented.
 *
 * @return {boolean}
 */
export default function isGutenberg() {
	return ! isUndefined( window._wpLoadBlockEditor );
}
