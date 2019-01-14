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
import stripCompactInputPrefix from '../../utils/strip-compact-input-prefix';

/**
 * Returns a field with the given name.
 *
 * @param  {Object[]} fields
 * @param  {string}   name
 * @return {?Object}
 */
function findFieldByName( fields, name ) {
	return find( fields, ( field ) => {
		return field.name === name;
	} );
}

addFilter( 'carbon-fields.association.metabox', 'carbon-fields/metaboxes', withProps( ( props ) => {
	return {
		hierarchyResolver() {
			// Get all fields.
			const fields = select( 'carbon-fields/metaboxes' ).getFieldsByContainerId( props.containerId );

			// Get a clean version of field's name.
			const fieldName = stripCompactInputPrefix( props.name );

			// Get the path.
			let path = fieldName.split( /\[|\]/g );

			// Remove chunks that are empty.
			path = path.filter( ( chunk ) => chunk !== '' );

			// Get the root field.
			const rootFieldName = path.shift();
			const rootField = findFieldByName( fields, rootFieldName );

			// Get the hierarchy.
			let accessor = fields.indexOf( rootField );
			let hierarchy = rootField.base_name;

			// Visit every branch in the tree so we can get the full hierarchy.
			while ( path.length > 0 ) {
				const chunk = path.shift();
				const isGroup = ! isNaN( chunk );
				const isSameField = chunk === props.field.base_name;
				const isNestedComplex = ! isGroup && ! isSameField;

				if ( isGroup ) {
					accessor = `${ accessor }.value.${ chunk }.name`;
					hierarchy = `${ hierarchy }[${ chunk }]:${ get( fields, accessor ) }/`;
				}

				if ( isNestedComplex ) {
					const field = findFieldByName( fields, chunk );

					accessor = fields.indexOf( field );
					hierarchy = `${ hierarchy }${ field.base_name }`;
				}

				if ( isSameField ) {
					hierarchy = `${ hierarchy }${ chunk }`;
				}
			}

			return hierarchy;
		}
	};
} ) );
