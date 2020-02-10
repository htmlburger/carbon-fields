/**
 * The external dependencies.
 */
import { flow } from 'lodash';

/**
 * Converts the given Hex color to RGBA.
 *
 * @param  {string} hex
 * @return {Array}
 */
export const hexToRgba = ( hex ) => flow( [
	removeHash,
	splitHex,
	parseToDec
] )( hex );

/**
 * Converts the given RGBA to Hex color.
 *
 * @param  {Object} rgba
 * @return {string}
 */
export const rgbaToHex = ( rgba ) => {
	if ( ! rgba ) {
		return '';
	}

	const r = rgba.r.toString( 16 );
	const g = rgba.g.toString( 16 );
	const b = rgba.b.toString( 16 );
	const a = Math.floor( rgba.a * 255 ).toString( 16 );

	return [ r, g, b, a ].reduce( ( memo, part ) => {
		if ( part.length === 1 ) {
			part = `0${ part }`;
		}

		return `${ memo }${ part }`;
	}, '#' );
};

/**
 * Removes the '#' symbol if existing in the given Hex.
 *
 * @param  {string} hex
 * @return {string}
 */
const removeHash = ( hex ) => hex.replace( '#', '' );

/**
 * Splits the Hex string in to-be-decimal groups.
 *
 * @param  {string} hex
 * @return {Array}
 */
const splitHex = ( hex ) => {
	const match = new RegExp( `\\w{${ hex.length <= 4 ? 1 : 2 }}`, 'g' );

	const parts = hex.match( match );

	if ( parts.length === 3 ) {
		parts.push( 'ff' );
	}

	return parts;
};

/**
 * Converts the given Hex parts to decimal values.
 *
 * @param  {Array} hexParts
 * @return {Array}
 */
const parseToDec = ( hexParts ) => hexParts.map( ( part, index ) => {
	const decimal = parseInt( part, 16 );

	return index !== hexParts.length - 1
		? decimal
		: ( decimal / 255 ).toFixed( 2 );
} );
