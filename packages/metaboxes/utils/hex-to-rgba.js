/**
 * The external dependencies.
 */
import { flow } from 'lodash';

const hexToRgba = ( hex ) => flow( [
	removeHash,
	splitHex,
	parseToDec
] )( hex );

const removeHash = ( hex ) => hex.replace( '#', '' );

const splitHex = ( hex ) => {
	const match = new RegExp( `\\w{${ hex.length <= 4 ? 1 : 2 }}`, 'g' );

	const parts = hex.match( match );

	if ( parts.length === 3 ) {
		parts.push( 'ff' );
	}

	return parts;
};

const parseToDec = ( hexParts ) => hexParts.map( ( part, index ) => {
	const decimal = parseInt( part, 16 );

	return index !== hexParts.length - 1
		? decimal
		: ( decimal / 255 ).toFixed( 2 );
} );

export default hexToRgba;
