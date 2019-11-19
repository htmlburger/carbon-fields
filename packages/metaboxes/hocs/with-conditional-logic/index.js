/**
 * External dependencies.
 */
import of from 'callbag-of';
import takeUntil from 'callbag-take-until';
import distinctUntilChanged from 'callbag-distinct-until-changed';
import { pipe, merge } from 'callbag-basics';
import { select } from '@wordpress/data';
import {
	get,
	map,
	find,
	some,
	pick,
	keyBy,
	repeat,
	isEqual,
	fromPairs,
	difference,
	startsWith
} from 'lodash';

/**
 * Carbon Fields dependencies.
 */
import { fromSelector, withConditionalLogic } from '@carbon-fields/core';

/**
 * Returns all root fields from the given holder
 * while excluding some of them.
 *
 * @param  {Object}   fieldsHolder
 * @param  {Object}   allFields
 * @param  {string[]} excludedIds
 * @return {Object[]}
 */
function getFieldsFromFieldsHolder( fieldsHolder, allFields, excludedIds = [] ) {
	return pick( allFields, difference( map( fieldsHolder.fields, 'id' ), excludedIds ) );
}

/**
 * Adds the `parent.` parent prefix to field's name.
 *
 * @param  {Object[]} fields
 * @param  {number}   depth
 * @return {Array[]}
 */
function mapParentPrefix( fields, depth = 0 ) {
	return map( fields, ( field ) => ( [
		field.id,
		`${ repeat( 'parent.', depth ) }${ field.base_name }`
	] ) );
}

/**
 * The function used to track dependencies required
 * by conditional logic.
 *
 * @param  {Object} props
 * @param  {Object} component
 * @return {Object}
 */
function input( props, component ) {
	const { getFieldsByContainerId } = select( 'carbon-fields/metaboxes' );

	return pipe(
		merge(
			of( getFieldsByContainerId( props.containerId ) ),

			fromSelector( getFieldsByContainerId, props.containerId )
		),

		takeUntil( component.unmount ),

		distinctUntilChanged( isEqual )
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
	fields = keyBy( fields, 'id' );

	const container = select( 'carbon-fields/metaboxes' ).getContainerById( props.containerId );
	const isTopLevelField = some( container.fields, [ 'id', props.id ] );
	let siblingFields = [];

	if ( isTopLevelField ) {
		siblingFields = getFieldsFromFieldsHolder( container, fields, [ props.id ] );
		siblingFields = mapParentPrefix( siblingFields );
	} else {
		const fieldName = props.name.replace( new RegExp( `^${ window.cf.config.compactInputKey }\\[(.+?)\\]` ), '$1' );

		// Get the root field.
		const rootField = find( fields, ( field ) => {
			return field.container_id === props.containerId
				&& startsWith( fieldName, field.name );
		} );

		// Get the hierarchy.
		let path = fieldName.split( /\[|\]/g );

		// Remove the chunk with name of root field
		// because we already have it.
		path.shift();

		// Remove any chunks that don't have a value.
		path = path.filter( ( chunk ) => chunk !== '' );

		// Remove the chunk with name of field
		// because we don't needed it.
		path.pop();

		// Keep reference to the depth
		// so we can add the `parent.` prefix.
		let depth = path.reduce( ( accumulator, chunk ) => {
			return isNaN( chunk )
				? accumulator + 1
				: accumulator;
		}, 0 );

		// Collect fields that are siblings of root field.
		siblingFields = getFieldsFromFieldsHolder( container, fields, [ rootField.id ] );
		siblingFields = mapParentPrefix( siblingFields, depth + 1 );

		// Keep reference to the full path of the field.
		let pathPrefix = `${ rootField.id }.value`;

		while ( path.length > 0 ) {
			const chunk = path.shift();
			const isGroup = ! isNaN( chunk );
			const isNestedComplex = ! isGroup;

			if ( isGroup ) {
				pathPrefix = `${ pathPrefix }[${ chunk }]`;

				const group = get( fields, pathPrefix );
				const groupFields = getFieldsFromFieldsHolder( group, fields, [ props.id ] );

				siblingFields = siblingFields.concat( mapParentPrefix( groupFields, depth ) );

				pathPrefix = `${ pathPrefix }.fields`;
			}

			if ( isNestedComplex ) {
				const groupField = find( get( fields, pathPrefix ), [ 'name', chunk ] );

				pathPrefix = `${ groupField.id }.value`;

				depth--;
			}
		}
	}

	siblingFields = siblingFields.map( ( [ id, name ] ) => ( [
		name,
		get( fields, `${ id }.value` )
	] ) );

	return fromPairs( siblingFields );
}

export default withConditionalLogic( input, output );
