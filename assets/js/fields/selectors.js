/**
 * The external dependencies.
 */
import { createSelector } from 'reselect';
import {
	get,
	map,
	filter,
	keyBy,
	mapKeys,
	mapValues,
	some,
	pick,
	pickBy,
	template,
	isNull,
	isString,
	isUndefined,
	isEmpty
} from 'lodash';

/**
 * The internal dependencies.
 */
import { getSidebars } from 'sidebars/selectors';
import { TYPE_COMPLEX } from 'fields/constants';

/**
 * Return the object that contains all fields.
 *
 * @param  {Object} state
 * @return {Object}
 */
export const getFields = state => state.fields;

/**
 * Return a field object from the state.
 *
 * @param  {Object} state
 * @param  {String} id
 * @return {Object}
 */
export const getFieldById = (state, id) => state.fields[id];

/**
 * Return a regex which matches field names patterns
 * This is a direct translation of Container::get_field_pattern_regex from php
 *
 * @return {Object}
 */
export const getFieldPatternRegex = () => {
	return /^([a-z0-9_]+)(\[(\d+)\])?(:([a-z0-9_]+))?$/;
};

/**
 * Get a field based on it's name hierarchy
 * This is a direct translation of Container::get_field_by_name from php
 *
 * @return {Object}
 */
export const getFieldByName = (state, name) => {
	const regex = getFieldPatternRegex();
	let hierarchyLeft = name.split(/\//g).filter(segment => segment.trim().length > 0);
	let allFields = state.fields;
	let parentId = '';

	while (hierarchyLeft.length > 0) {
		let segment = hierarchyLeft.shift();
		let segmentPieces = segment.match(regex);

		if ( segmentPieces === null ) {
			console.warn(`Invalid field name pattern used: ${name}`);
			return null;
		}

		let fieldName = segmentPieces[1];
		let groupIndex = isUndefined(segmentPieces[3]) ? 0 : segmentPieces[3];

		for (let fieldId in allFields) {
			let field = allFields[fieldId];
			
			if (field.base_name !== fieldName) {
				continue;
			}

			if ( parentId && field.parent !== parentId ) {
				continue;
			}

			if (isEmpty(hierarchyLeft)) {
				return field;
			}

			if (field.type !== TYPE_COMPLEX) {
				console.warn(`Attempted to look for a nested field inside the non-complex field "${field.base_name}".`);
				return null;
			}

			if (isUndefined(field.value[groupIndex])) {
				console.warn(`Non-existant group index specified when fetching a value inside a complex field: ${groupIndex}`);
				return null;
			}

			parentId = field.value[groupIndex].id;
			break;
		}
	}

	console.warn(`Could not find the requested field: ${name}`);
	return null;
};

/**
 * Get a map of the fields that are direct children of the specified parent.
 *
 * @param  {String} parentId
 * @return {Function}
 */
export const makeGetFieldsByParent = parentId => createSelector(getFields, fields => mapValues(keyBy(filter(fields, ['parent', parentId]), 'base_name'), 'id'));

/**
 * Get the fields that are direct children of the specified parent.
 *
 * @param  {String} parentId
 * @return {Function}
 */
export const getFieldsByParent = (state, parentId) => pickBy(getFields(state), ({ parent }) => parent === parentId);

/**
 * Check whether the field should be rendered in tabs.
 *
 * @param  {String}  fieldId
 * @return {Boolean}
 */
export const isFieldTabbed = createSelector(getFieldById, field => field.layout && field.layout.indexOf('tabbed') > -1);

/**
 * Get all fields that are associated with the specified roots.
 *
 * @param  {Object}   state
 * @param  {String[]} roots
 * @return {String[]}
 */
export const getFieldsByRoots = (state, roots) => {
	const fields = getFields(state);
	const ids = [];

	const walk = (roots, accumulator) => {
		roots.forEach(field => {
			accumulator.push(field.id);

			if (field.type === TYPE_COMPLEX) {
				fields[field.id].value.forEach(group => walk(group.fields, accumulator));
			}
		});
	};

	walk(roots, ids);

	return ids;
};

/**
 * Generate the list of options used by the field.
 * Use a factory function to achieve correct memoization
 * of the result.
 *
 * @see https://github.com/reactjs/reselect#accessing-react-props-in-selectors
 * @return {Function}
 */
export const makeGetSidebarFieldOptions = () => createSelector([
	getFieldById,
	getSidebars,
], (field, sidebars) => {
	const excluded = get(field, 'excluded_sidebars', []);

	sidebars = filter(sidebars, ({ id, name }) => excluded.indexOf(id) === -1 && excluded.indexOf(name) === -1);
	sidebars = map(sidebars, ({ id, name }) => ({ name: name, value: id }));

	return [
		...sidebars,
		...field.options,
	];
});

/**
 * Check for invalid field(s).
 *
 * @param  {Object} fields
 * @return {Boolean}
 */
export const hasInvalidFields = createSelector(getFields, fields => some(fields, ['ui.valid', false]));

/**
 * Compile Lodash template of the group's label.
 *
 * @param  {Object} state
 * @param  {Object} group
 * @return {String}
 */
export const getComplexGroupLabel = (state, group) => {
	const fields = pick(getFields(state), map(group.fields, 'id'));

	if (isNull(group.label_template)) {
		return group.label;
	}

	return template(group.label_template)({
		fields,
		...mapValues(mapKeys(fields, 'base_name'), 'value'),
	});
};
