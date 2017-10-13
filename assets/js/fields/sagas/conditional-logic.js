/**
 * The external dependencies.
 */
import { takeEvery, put, call, select, all } from 'redux-saga/effects';
import { isEmpty, omit, some, every, includes, isUndefined } from 'lodash';

/**
 * The internal dependencies.
 */
import { TYPE_COMPLEX } from 'fields/constants';
import { setupField, setFieldValue, updateField, setUI } from 'fields/actions';
import { getFieldById, getFieldParentById, makeGetFieldsByParent } from 'fields/selectors';
import { getTypeDefaultValue } from 'lib/helpers';

/**
 * Compare the values.
 *
 * @param  {mixed}   left
 * @param  {mixed}   right
 * @param  {String}  operator
 * @return {Boolean}
 */
function compare(left, right, operator) {
	switch (operator) {
		case '=': return left == right;
		case '!=': return left != right;
		case '>': return left > right;
		case '<': return left < right;
		case '>=': return left >= right;
		case '<=': return left <= right;
		case 'IN': return some(right, value => value == left);
		case 'NOT IN': return every(right, value => value != left);
		case 'INCLUDES': return every([].concat(right), value => left.indexOf(value) !== -1);
		case 'EXCLUDES': return every([].concat(right), value => left.indexOf(value) === -1);
	}
}

/**
 * Process the conditional rules.
 *
 * @param  {Object} field
 * @param  {Object} siblings
 * @param  {Object} [action]
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @param  {mixed}  action.payload.value
 * @return {void}
 */
export function* workerValidate(field, siblings, { payload: { fieldId, data } } = { payload: {} }) {
	if (fieldId && !includes(siblings, fieldId)) {
		return;
	}

	const { relation, rules } = field.conditional_logic;
	const results = [];
	let valid;

	for (const rule of rules) {
		const field = yield select(getFieldById, siblings[rule.field]);

		if (!field) {
			console.warn(`An unknown field is used in condition - ${rule.field}.`);
			continue;
		}

		let fieldValue = field.ui.is_visible ? field.value : getTypeDefaultValue(field.value);
		results.push(yield call(compare, fieldValue, rule.value, rule.compare));
	}

	switch (relation) {
		case 'AND':
			valid = every(results);
		break;

		case 'OR':
			valid = some(results);
		break;
	}

	yield put(setUI(field.id, {
		is_visible: valid,
	}));
}

/**
 * Handle the setup of the conditional logic.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @return {void}
 */
export function* workerConditionalLogic({ payload: { fieldId } }) {
	const field = yield select(getFieldById, fieldId);

	if (isEmpty(field.conditional_logic)) {
		return;
	}

	const selector = yield call(makeGetFieldsByParent, field.parent);
	const siblings = yield call(omit, yield select(selector), field.base_name);

	// Expand siblings by adding literal 'parent.' prefixes to keys for every level above the current one
	let parentPrefix = '';
	let parentField = yield select(getFieldParentById, field.id);
	while (!isUndefined(parentField)) {
		parentPrefix += 'parent.';
		let parentSelector = yield call(makeGetFieldsByParent, parentField.parent);
		let parentSiblings = yield call(omit, yield select(parentSelector), parentField.base_name);
		for (let parentSiblingName in parentSiblings) {
			siblings[parentPrefix + parentSiblingName] = parentSiblings[parentSiblingName];
		}
		parentField = yield select(getFieldParentById, parentField.id);
	}

	yield call(workerValidate, field, siblings);
	yield takeEvery(updateField, workerValidate, field, siblings);
	yield takeEvery(setFieldValue, workerValidate, field, siblings);
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield all([
		takeEvery(setupField, workerConditionalLogic),
	]);
}
