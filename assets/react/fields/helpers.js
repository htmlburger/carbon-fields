/**
 * The external dependencies.
 */
import { pick, uniqueId } from 'lodash';

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
 * @param  {Object[]} accumulator
 * @return {Object}
 */
export function flattenField(field, accumulator) {
	const { value, type } = field;

	// Since the fields don't have unique identifiers
	// we need to replace the id property with something
	// that we know is unique.
	field.id = uniqueId('carbon-field-');

	// The complex field represents a nested structure
	// of fields. We need to flatten them as well.
	if (type === 'Complex') {
		value.forEach((group, index) => {
			addComplexGroupIdentifiers(field, group, index);
			flattenComplexGroupFields(group, accumulator);
		});
	}

	// Add the placeholders for ui & meta.
	field.ui = {};
	field.meta = {};

	// Push the original field to the stack that will
	// be used to populate the state.
	accumulator.push(field);

	return pick(field, 'id', 'type');
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
	group.id = `${complex.id}-${index}`;

	group.fields.forEach((field) => {
		field.name = `${complex.name}[${index}][${field.name}]`;
	});
}

/**
 * Flatten the group's fields.
 *
 * @param  {Object}   group
 * @param  {Object[]} accumulator
 * @return {void}
 */
export function flattenComplexGroupFields(group, accumulator) {
	group.fields = group.fields.map(field => flattenField(field, accumulator));
}
