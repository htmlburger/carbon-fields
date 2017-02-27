/**
 * The external dependencies.
 */
import { createSelector } from 'reselect';
import {
	get,
	map,
	filter,
	keyBy,
	mapValues,
	some
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
 * Get a map of the fields that are direct children of the specified parent.
 *
 * @param  {String} parentId
 * @return {Function}
 */
export const makeGetFieldsByParent = parentId => createSelector(getFields, fields => mapValues(keyBy(filter(fields, ['parent', parentId]), 'name'), 'id'));

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
	sidebars = map(sidebars, ({ name }) => ({ name: name, value: name }));

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
