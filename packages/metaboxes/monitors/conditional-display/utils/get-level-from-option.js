/**
 * Extracts the level from an option.
 *
 * @param  {Object} option
 * @return {number}
 */
export default function getLevelFromOption( option ) {
	let level = 0;

	if ( option.className ) {
		const matches = option.className.match( /^level-(\d+)/ );

		if ( matches ) {
			level = parseInt( matches[ 1 ], 10 ) + 1;
		}
	}

	return level;
}
