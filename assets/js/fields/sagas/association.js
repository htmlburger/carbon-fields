/**
 * The external dependencies.
 */
import $ from 'jquery';
import { all, call, put, select, takeEvery } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import {
	setUI,
	requestAssociationOptions,
	setAssociationOptions,
	appendAssociationOptions,
} from 'fields/actions';
import {
	getFieldHierarchyById
} from 'fields/selectors';


const FETCH_ASSOCIATION_OPTIONS_AJAX_ACTION = 'carbon_fields_fetch_association_options';


/**
 * Get the options for the source list in association fields.
 *
 * @param  {Options} args
 * @return {Promise<Object, String>}
 */
const fetchAssociationOptions = (args) => {
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
 * Handle the request to fetch association options.
 *
 * @param {Object} options.payload
 */
export function* workerRequestAssociationOptions({ payload }) {
	const { field, options, append = false } = payload;

	const fieldHierarchyName = yield select(getFieldHierarchyById, field.id);

	const args = {
		action: FETCH_ASSOCIATION_OPTIONS_AJAX_ACTION,
		...options,
		field_name: fieldHierarchyName,
		container_id: field.container_id,
	};

	const { data } = yield call(fetchAssociationOptions, args);

	yield put(setUI(field.id, {
		isLoading: false,
	}));

	if (append) {
		yield put(appendAssociationOptions(field.id, data));
	} else {
		yield put(setAssociationOptions(field.id, data));
	}
}


/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield all([
		takeEvery(requestAssociationOptions, workerRequestAssociationOptions),
	]);
}
