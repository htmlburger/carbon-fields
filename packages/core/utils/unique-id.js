/**
 * External dependencies.
 */
import { customAlphabet } from 'nanoid';

/**
 * Alphabet that doesn't contain `-`.
 *
 * @borrows https://github.com/ai/nanoid/blob/master/index.browser.js#L16
 */
const ALPHABET = 'Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz';

/**
 * Generates an unique identifier.
 *
 * @return {string}
 */
export default function uniqueId() {
	return `cf-${ customAlphabet( ALPHABET, 21 ) }`;
}
