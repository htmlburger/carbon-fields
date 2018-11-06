/**
 * Internal dependencies.
 */
import getLevelFromOption from './get-level-from-option';

/**
 * Extracts the ancestors of the post/term from an option.
 *
 * @param  {Object} option
 * @return {number[]}
 */
export default function getAncestorsFromOption( option ) {
	const ancestors = [];

	let previousOption = option;
	let level = getLevelFromOption( option );

	while ( level > 0 && previousOption ) {
		if ( getLevelFromOption( previousOption ) !== level ) {
			previousOption = previousOption.previousSibling;

			// Skip this iteration because the option isn't an ancestor.
			continue;
		}

		const id = parseInt( previousOption.value, 10 );

		if ( id > 0 ) {
			ancestors.unshift( id );
		}

		previousOption = previousOption.previousSibling;

		level--;
	}

	return ancestors;
}
