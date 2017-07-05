/**
 * The external dependencies.
 */
import { defaultsDeep } from 'lodash';


/**
 * Prepare a dummy field for testing purposes.
 *
 * @param  {Object} props
 * @return {Object}
 */
export const stubField = (props = {}) => defaultsDeep(props, {
	id: 'fieldId',
	type: 'fieldType',
	name: 'fieldName',
	value: 'fieldValue',
	classes: [],
	meta: {},
	ui: {},
});
