/**
 * External dependencies.
 */
import distinctUntilChanged from 'callbag-distinct-until-changed';
import { select } from '@wordpress/data';
import { pipe, map } from 'callbag-basics';
import {
	get,
	has,
	omit,
	assign,
	repeat,
	mapKeys,
	findIndex,
	startsWith
} from 'lodash';

/**
 * Carbon Fields dependencies.
 */
import { fromSelector, withConditionalLogic } from '@carbon-fields/core';

/**
 * Adds the `parent.` parent prefix to field's name.
 *
 * @param  {Object[]} fields
 * @param  {number}   depth
 * @return {Array[]}
 */
function mapParentPrefix( fields, depth = 0 ) {
	return mapKeys( fields, ( value, key ) => `${ repeat( 'parent.', depth ) }${ key }` );
}

/**
 * Returns whether the given string is a group identifier.
 *
 * @param  {string} id
 * @return {boolean}
 */
function isComplexGroupIdentifier( id ) {
	return startsWith( id, 'cf-' );
}

/**
 * The function used to track dependencies required
 * by conditional logic.
 *
 * @param  {Object} props
 * @return {Object}
 */
function input( props ) {
	return pipe(
		fromSelector( select( 'core/block-editor' ).getBlock, props.blockId ),
		distinctUntilChanged(),
		map( ( blockData ) => blockData?.attributes?.data )
	);
}

/**
 * The function that provides the data that needs to be
 * evaluated by conditional logic.
 *
 * @param  {Object} props
 * @param  {Object} fields
 * @return {Object}
 */
function output( props, fields ) {
	const isTopLevelField = has( fields, props.field.base_name );
	let siblingFields = {};

	if ( isTopLevelField ) {
		siblingFields = mapParentPrefix( omit( fields, [ props.field.base_name ] ) );
	} else {
		// Get the hierarchy.
		const path = props.id.split( '__' );

		// Remove the chunk with identifier of block since
		// we already have it.
		path.shift();

		// Remove the chunk with name of root field.
		const rootFieldName = path.shift();

		// Remove the chunk with name of field since
		// we already have it.
		path.pop();

		// Keep reference to the depth
		// so we can add the `parent.` prefix.
		let depth = path.reduce( ( accumulator, chunk ) => {
			return isComplexGroupIdentifier( chunk )
				? accumulator
				: accumulator + 1;
		}, 0 );

		// Collect fields that are siblings of root field.
		siblingFields = omit( fields, [ rootFieldName ] );
		siblingFields = mapParentPrefix( siblingFields, depth + 1 );

		// Keep reference to the full path of the field.
		let pathPrefix = rootFieldName;

		while ( path.length > 0 ) {
			const chunk = path.shift();
			const isGroup = isComplexGroupIdentifier( chunk );
			const isNestedComplex = ! isGroup;

			if ( isGroup ) {
				const groupIndex = findIndex( get( fields, pathPrefix ), [ '_id', chunk ] );

				pathPrefix = `${ pathPrefix }.${ groupIndex }`;

				let groupFields = get( fields, pathPrefix );
				groupFields = omit( groupFields, [ '_id', '_type', props.field.base_name ] );
				groupFields = mapParentPrefix( groupFields, depth );

				assign( siblingFields, groupFields );
			}

			if ( isNestedComplex ) {
				pathPrefix = `${ pathPrefix }.${ chunk }`;

				depth--;
			}
		}
	}

	return siblingFields;
}

export default withConditionalLogic( input, output );
