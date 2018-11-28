/**
 * Extracts the id of the post/term parent from an option.
 *
 * @param  {Object} option
 * @return {number}
 */
export default function getParentIdFromOption( option ) {
	const value = parseInt( option.value, 10 );

	return ( ! isNaN( value ) && value >= 0 ) ? value : 0;
}
