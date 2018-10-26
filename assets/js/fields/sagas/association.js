/**
 * The external dependencies.
 */
import $ from 'jquery';
import { all, call, put, select, takeEvery } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import {
	requestAssociationItems,
	setAssociationItems
} from 'fields/actions';
import {
	getFieldHierarchyById
} from 'fields/selectors';


/**
 * Get the items for the source list in association fields.
 * 
 * @param  {Options} args
 * @return {Promise<Object, String>}
 */
const fetchAssociationItems = (args) => {
	return new Promise((resolve, reject) => {
		$.get(window.ajaxurl, args, null, 'json')
		 .done((response) => {
		 	resolve(response)
		 })
		 .fail(() => {
		 	reject('An error occured');
		 });
	});
};

/**
 * @TODO -- docs
 * @param {[type]} options.payload [description]
 * @yield {[type]} [description]
 */
export function* workerRequestAssociationItems({ payload }) {
	const { field, options, method = 'set' } = payload;

	const fieldHierarchyName = yield select(getFieldHierarchyById, field.id);

	const args = {
		action: 'carbon_fields_fetch_association_options',
		...options,
		field_name: fieldHierarchyName,
		container_id: field.container_id,
	};

	const { data } = yield call(fetchAssociationItems, args);

	yield put(setAssociationItems(field.id, data, method));
}


/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield all([
		takeEvery(requestAssociationItems, workerRequestAssociationItems),
	]);
}
