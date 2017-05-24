/**
 * The external dependencies.
 */
import { takeEvery, put, call, all } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { geocodeAddress, setFieldValue } from 'fields/actions';

/**
 * Get the location of the specified address.
 *
 * @param  {String} 	     address
 * @return {Promise<Object, String>}
 */
function geocode(address) {
	return new Promise((resolve, reject) => {
		const geocoder = new google.maps.Geocoder();

		geocoder.geocode({ address }, (results, status) => {
			if (status === google.maps.GeocoderStatus.OK) {
				const { location } = results[0].geometry;

				resolve({
					lat: location.lat(),
					lng: location.lng(),
				});
			} else if (status === 'ZERO_RESULTS') {
				reject(carbonFieldsL10n.field.geocodeZeroResults);
			} else {
				reject(`${carbonFieldsL10n.field.geocodeNotSuccessful} ${status}`);
			}
		});
	});
}

/**
 * Process the address through geocoding service and update the field.
 *
 * @param {Object} action
 * @param {String} action.fieldId
 * @param {String} action.address
 * @return {void}
 */
export function* workerGeocoder({ payload: { fieldId, address } }) {
	if (!address) {
		yield put(setFieldValue(fieldId, { address }, 'assign'));
		return;
	}

	const coords = address.match(/^(-?\d{1,3}\.\d+),\s?(-?\d{1,3}\.\d+)$/)

	if (coords) {
		const lat = parseFloat(coords[1]);
		const lng = parseFloat(coords[2]);
		const value = `${location.lat},${location.lng}`;

		yield put(setFieldValue(fieldId, {
			lat,
			lng,
			address,
			value,
		}, 'assign'));

		return;
	}

	try {
		const location = yield call(geocode, address);
		const value = `${location.lat},${location.lng}`;

		yield put(setFieldValue(fieldId, {
			...location,
			address,
			value,
		}, 'assign'));
	} catch (e) {
		alert(e);
	}
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield all([
		takeEvery(geocodeAddress, workerGeocoder),
	]);
}
