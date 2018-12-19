/**
 * Removes the prefix used to compact the input of Carbon Fields.
 *
 * @param  {string} str
 * @return {string}
 */
export default function stripCompactInputPrefix( str ) {
	const { compactInput, compactInputKey } = window.cf.config;

	if ( ! compactInput || str.indexOf( compactInputKey ) !== 0 ) {
		return str;
	}

	return str.replace( new RegExp( `^${ compactInputKey }\\[(.+?)\\]` ), '$1' );
}
