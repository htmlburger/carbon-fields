/**
 * External dependencies.
 */
import { isUndefined } from 'lodash';

/**
 * Returns true if Gutenberg is presented.
 *
 * For some reason the Gutenberg package uses `_wpLoadGutenbergEditor`
 * while WordPress@5 uses `_wpLoadBlockEditor`.
 *
 * @return {boolean}
 */
export default function isGutenberg() {
	return ! isUndefined( window._wpLoadGutenbergEditor ) || ! isUndefined( window._wpLoadBlockEditor );
}
