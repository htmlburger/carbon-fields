/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { select } from '@wordpress/data';
import { get, find } from 'lodash';

/**
 * Carbon Fields dependencies.
 */
import { withProps } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.association.block', 'carbon-fields/blocks', withProps( ( props ) => {
	return {
		hierarchyResolver() {
			// Get the block that contains the field.
			const block = select( 'core/editor' ).getBlock( props.blockId );

			// Get the path.
			const path = props.id.split( '__' );

			// Remove the chunk that contains the block identifier.
			path.shift();

			// Get the hierarchy.
			let hierarchy = path.shift();
			let accessor = `data.${ hierarchy }`;

			// Visit every branch in the tree so we can get the full hierarchy.
			while ( path.length > 0 ) {
				const chunk = path.shift();
				const isGroup = chunk.indexOf( 'cf-' ) === 0;

				if ( isGroup ) {
					const groups = get( block.attributes, `${ accessor }` );
					const group = find( groups, [ '_id', chunk ] );
					const groupIndex = groups.indexOf( group );

					accessor = `${ accessor }.${ groupIndex }`;
					hierarchy = `${ hierarchy }[${ groupIndex }]:${ group._type }/`;
				} else {
					accessor = `${ accessor }.${ chunk }`;
					hierarchy = `${ hierarchy }${ chunk }`;
				}
			}

			return hierarchy;
		}
	};
} ) );
