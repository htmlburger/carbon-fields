/**
 * The external dependencies.
 */
// import $ from 'jquery';
// import { all, call, put, take, takeEvery, fork } from 'redux-saga/effects';

// /**
//  * The internal dependencies.
//  */
// import { createScrollChannel } from 'lib/events';
// import { fetchAssociationEntries } from 'fields/helpers';
// import { requestAssociationEntries } from 'fields/actions';

// import { receiveContainer } from 'containers/actions';

// export function* workerRequestAssociationEntries({ payload, type }) {
// 	const { options } = payload;

// 	const channel = yield call(fetchAssociationEntries, options);
// 		console.log( channel );

// 	while (true) {
// 		const result = yield take(channel);
// 		console.log( result );
// 		// const $containers = $(data).find('[data-json]');

// 		// // Close the channel since we don't have any
// 		// // registered containers.
// 		// if ($containers.length < 1) {
// 		// 	channel.close();
// 		// 	break;
// 		// }

// 		// for (let i = 0; i < $containers.length; i++) {
// 		// 	let $container = $($containers[i]);
// 		// 	yield put(receiveContainer($container.data('json'), false));
// 		// }
// 	}
// }

// export function* workerScrollAssociationList(element) {
// 	console.log(element);

// 	const channel = yield call(createScrollChannel, element);
// 	// const $container = $('.carbon-box:first');
// 	// const $panel = $('#postbox-container-1');
// 	// const $bar = $('#wpadminbar');

// 	while (true) {
// 		const { value } = yield take(channel);
// 		console.log( value );
// 		// const offset = $bar.height() + 10;
// 		// const threshold = $container.offset().top - offset;

// 		// // In some situations the threshold is negative number because
// 		// // the container element isn't rendered yet.
// 		// if (threshold > 0) {
// 		// 	$panel
// 		// 		.toggleClass('fixed', value >= threshold)
// 		// 		.css('top', offset);
// 		// }
// 	}
// }

// /**
//  * Start to work.
//  *
//  * @return {void}
//  */
export default function* foreman() {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);

// 	yield all([
// 		// takeEvery(requestAssociationEntries, workerRequestAssociationEntries),
// 	]);

// 	yield fork(workerScrollAssociationList);
}
