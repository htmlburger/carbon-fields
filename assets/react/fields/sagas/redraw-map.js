/**
 * The external dependencies.
 */
import { takeEvery } from 'redux-saga';
import { filter, isEmpty } from 'lodash';

/**
 * The internal dependencies.
 */
import { redrawMap } from 'fields/actions';
import { TYPE_MAP, TYPE_COMPLEX } from 'fields/constants';
import { mapResizeEvent } from 'fields/helpers';

import { TYPE_WIDGET } from 'containers/constants';

/**
 * Trigger resize for each Google map
 * 
 * @param {Object} action
 * @param {Object} action.fields
 * @param {String} action.context
 * @return {void}
 */
function workerDrawer({ payload: { fields, context } }) {
	const maps = filter(fields, (field) => {
		return field.type === TYPE_MAP;
	});

	if (isEmpty(maps)) {
		return;
	}

	setTimeout( () => {
		if (context === TYPE_WIDGET) {
			const mapContainers = document.querySelectorAll(`.carbon-container-${maps[0].parent} .carbon-map-canvas`);
			mapContainers.forEach( (container) => container.dispatchEvent(mapResizeEvent));
		}
		
		if (context === TYPE_COMPLEX) {
			const mapContainers = document.querySelectorAll(`#${maps[0].parent} .carbon-map-canvas`);
			mapContainers.forEach( (container) => container.dispatchEvent(mapResizeEvent));
		}	
	}, 10);
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield takeEvery(redrawMap, workerDrawer);
}