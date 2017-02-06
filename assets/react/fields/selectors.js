/**
 * The external dependencies.
 */
import { createSelector } from 'reselect';
import { get, map, filter, keyBy, mapValues } from 'lodash';

/**
 * The internal dependencies.
 */
import { getSidebars } from 'sidebars/selectors';

/**
 * Return the object that contains all fields.
 *
 * @param  {Object} state
 * @return {Object}
 */
export const getAll = state => state.fields;

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
export const makeGetFieldsByParent = parentId => createSelector(getAll, fields => mapValues(keyBy(filter(fields, ['parent', parentId]), 'name'), 'id'));

/**
 * Check whether the field should be rendered in tabs.
 *
 * @param  {String}  fieldId
 * @return {Boolean}
 */
export const isFieldTabbed = createSelector(getFieldById, field => field.layout && field.layout.indexOf('tabbed') > -1);

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
