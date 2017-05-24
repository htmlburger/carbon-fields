/**
 * The external dependencies.
 */
import { call } from 'redux-saga/effects';
import { pick, merge, uniqueId, isNull } from 'lodash';

/**
 * The internal dependencies.
 */
import { cancelTasks } from 'lib/helpers';

import { teardownField } from 'fields/actions';
import { TYPE_COMPLEX, PARENT_TYPE_GROUP } from 'fields/constants';

/**
 * Get the thumbnail of the attachment.
 *
 * @param  {Object} attachment
 * @return {String}
 */
export function getAttachmentThumbnail(attachment) {
	if (attachment.type === 'image' && attachment.sizes) {
		return (attachment.sizes.thumbnail || attachment.sizes.full).url;
	}

	return '';
}

/**
 * Flattens a field.
 *
 * @param  {Object}   field
 * @param  {String}   parent
 * @param  {Object[]} accumulator
 * @return {Object}
 */
export function flattenField(field, parent, parentType, accumulator) {
	const { value, type } = field;

	// Since the fields don't have unique identifiers
	// we need to replace the id property with something
	// that we know is unique.
	field.id = uniqueId('carbon-field-');

	// The complex field represents a nested structure
	// of fields. We need to flatten them as well.
	if (type === TYPE_COMPLEX) {
		value.forEach((group, index) => {
			addComplexGroupIdentifiers(field, group, index);
			flattenComplexGroupFields(group, accumulator);
		});
	}

	// Add the placeholders for ui & meta.
	field.ui = {};
	field.meta = {};
	field.parent = parent;
	field.parentType = parentType;

	// Convert the value of the field, because React
	// doesn't likes inputs with null values.
	if (isNull(field.value)) {
		field.value = '';
	}

	// Push the original field to the stack that will
	// be used to populate the state.
	accumulator.push(field);

	return pick(field, 'id', 'type', 'name', 'base_name');
}

/**
 * Add unique identifiers to group and the fields.
 *
 * @param  {Object} complex
 * @param  {Object} group
 * @param  {Number} index
 * @return {void}
 */
export function addComplexGroupIdentifiers(complex, group, index) {
	group.id = uniqueId('carbon-complex-group-');
}

/**
 * Flatten the group's fields.
 *
 * @param  {Object}   group
 * @param  {Object[]} accumulator
 * @return {void}
 */
export function flattenComplexGroupFields(group, accumulator) {
	group.fields = group.fields.map(field => flattenField(field, group.id, PARENT_TYPE_GROUP, accumulator));
}

/**
 * Restore the original shape of the specified field.
 *
 * @param  {Object} field
 * @param  {Object} all
 * @return {Object}
 */
export function restoreField(field, all) {
	// Create a safe copy of the field.
	field = merge({}, all[field.id]);

	// Remove these properties since they're added
	// by the process that flattens the fields.
	delete field.ui;
	delete field.meta;

	// The complex field represents a tree struture so we need
	// to restore all fields recursively.
	if (field.type === TYPE_COMPLEX) {
		field.value = field.value.map((group) => {
			group.fields = group.fields.map(field => restoreField(field, all));

			return group;
		});
	}

	return field;
}

/**
 * Kill the saga.
 *
 * @param  {String}   fieldId
 * @param  {Object[]} tasks
 * @return {void}
 */
export function* stopSaga(fieldId, tasks) {
	yield call(cancelTasks, teardownField, tasks, ({ payload }) => payload.fieldId === fieldId);
}
