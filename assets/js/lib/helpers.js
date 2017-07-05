/**
 * The external dependencies.
 */
import $ from 'jquery';
import { take, cancel } from 'redux-saga/effects';

/**
 * Small helper to reduce code repetetion of `e.preventDefault`.
 *
 * @param  {Function} cb
 * @return {Function}
 */
export function preventDefault(cb) {
	/**
	 * @inner
	 * @param  {Event} e
	 * @return {void}
	 */
	return function(e) {
		e.preventDefault();
		cb(e);
	}
}

/**
 * Autoload the files in the given path.
 *
 * @param  {Object}   context
 * @param  {Function} [cb]
 * @return {void}
 */
export function autoload(context, cb = () => {}) {
	context.keys().forEach(file => {
		cb(file, context(file));
	});
}

/**
 * Cancel the specified task when a given pattern is matched.
 *
 * @param  {String|Function} pattern
 * @param  {Object[]}        tasks
 * @param  {Function}        matcher
 * @return {void}
 */
export function* cancelTasks(pattern, tasks, matcher) {
	while (true) {
		const action = yield take(pattern);

		if (matcher(action)) {
			yield tasks.map(task => cancel(task));

			break;
		}
	}
}

/**
 * Monkey-patch some of the methods of the tags
 * in order to detect changes.
 *
 * @param  {Object} tagBox
 * @param  {String} method
 * @return {void}
 */
export function patchTagBoxAPI(tagBox, method) {
	tagBox[`_${method}`] = tagBox[method];
	tagBox[method] = function(...args) {
		const $textarea = $(args[0])
			.closest('.postbox')
			.find('.the-tags');

		const result = tagBox[`_${method}`](...args);

		$textarea.trigger('change');

		return result;
	}
}
