/**
 * The external dependencies.
 */
import { flow } from 'lodash';

/**
 * Converts the given hex color to RGBA
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
 * Converts the given RGBA to hex color
 *
 * @param  {Object} rgba
 * @return {string}
 */
export const rgbaToHex = ( rgba ) => {
	if ( ! rgba ) {
		return null;
	}

	const { r, g, b } = rgba;
	let { a } = rgba;

	a = Math.floor( a * 255 );

	return '#' + [ r, g, b, a ].map( ( part ) => part.toString( 16 ).toUpperCase() ).join( '' );
};

/**
 * Removes the '#' symbol if existing in the given hex
 *
 * @param  {string} hex
 * @return {string}
 */
const removeHash = ( hex ) => hex.replace( '#', '' );

/**
 * Splits the hex string in to-be-decimal groups
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
 * Converts the given hex parts to decimal values
 * @param  {Array} hexParts
 * @return {Array}
 */
const parseToDec = ( hexParts ) => hexParts.map( ( part, index ) => {
	const decimal = parseInt( part, 16 );

	return index !== hexParts.length - 1
		? decimal
		: ( decimal / 255 ).toFixed( 2 );
} );
