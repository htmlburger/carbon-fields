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
import {
	TYPE_COMPLEX,
	DEFAULT_GROUP_NAME,
	FIELD_HIERARCHY_INDEX_SEPARATOR,
	FIELD_HIERARCHY_GROUP_SEPARATOR,
	FIELD_HIERARCHY_RELATION_SEPARATOR
} from 'fields/constants';

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
 * Return a field's parent object from the state.
 * Warning: skips through groups and returns the parent complex field.
 *
 * @param  {Object} state
 * @param  {String} id
 * @return {Object}
 */
export const getFieldParentById = (state, id) => {
	let field = getFieldById(state, id);
	let parent = getFieldById(state, field.parent);

	if (isUndefined(parent)) {
		// if .type is undefined then we are dealing with a group field
		parent = getComplexByGroupById(state, field.parent);
	}

	return parent;
};

/**
 * Return a complex group object from the state.
 *
 * @param  {Object} state
 * @param  {String} id
 * @return {Object}
 */
export const getComplexByGroupById = (state, id) => {
	for (var fieldId in state.fields) {
		var field = state.fields[fieldId];
		if (field.type === TYPE_COMPLEX) {
			for (var i = 0; i < field.value.length; i++) {
				var group = field.value[i];
				if (group.id === id) {
					return field;
				}
			}
		}
	}
	return undefined;
};

/**
 * Return a regex which matches field names patterns
 *
 * @return {Object}
 */
export const getFieldPatternRegex = () => {
	return /^([a-z0-9_]+)(\[(\d+)\])?(:([a-z0-9_]+))?$/;
};

/**
 * Get a field based on it's name hierarchy
 *
 * @return {Object}
 */
export const getFieldByName = (state, name) => {
	const regex = getFieldPatternRegex();

	const hierarchy = name.split(/\//g).filter(segment => segment.trim().length > 0);
	const fieldId = map(hierarchy, segment => {
		const segmentPieces = segment.match(regex);
		const field = segmentPieces[1]
		const index = segmentPieces[3];
		const group = isUndefined(segmentPieces[5]) ? DEFAULT_GROUP_NAME : segmentPieces[5];
		let convertedSegment = field;
		if (!isUndefined(index)) {
			convertedSegment += `${FIELD_HIERARCHY_INDEX_SEPARATOR}${index}${FIELD_HIERARCHY_GROUP_SEPARATOR}${group}`;
		}
		return convertedSegment;
	}).join(FIELD_HIERARCHY_RELATION_SEPARATOR);
	
	const field = getFieldById(state, fieldId);
	if (isUndefined(field)) {
		console.warn(`Could not find the requested field "${name}". Did you forget to specify a complex entry's index or group name?`);
	}
	return field;
};

/**
 * Get a field based on it's name hierarchy
 *
 * @return {Object}
 */
export const getFieldNameById = (fieldId) => {
	const fieldName = map(fieldId.split(FIELD_HIERARCHY_RELATION_SEPARATOR), function(segment) {
		const fieldGroupPair = segment.split(FIELD_HIERARCHY_GROUP_SEPARATOR);
		const fieldIndexPair = fieldGroupPair[0].split(FIELD_HIERARCHY_INDEX_SEPARATOR);
		const field = fieldIndexPair[0];
		const index = fieldIndexPair[1];
		const group = fieldGroupPair[1];
		return field + (isUndefined(index) ? '' : `[${index}]`) + (isUndefined(group) ? '' : `:${group}`);
	}).join('/');
	return fieldName;
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
