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

/**
 * Get select option's level based on its className
 *
 * @param  {Object} option
 * @return {Number}
 */
export function getSelectOptionLevel(option) {
	let level = 1;

	if (option.className) {
		const matches = option.className.match(/^level-(\d+)/);

		if (matches) {
			level = parseInt(matches[1], 10) + 1;
		}
	}

	return level;
}

/**
 * Get a select option's ancestor options in according to hierarchy
 *
 * @param  {Object} option
 * @return {Object}
 */
export function getSelectOptionAncestors( option ) {
	const ancestors = [];

	let $prev = $(option);
	let level = getSelectOptionLevel($prev.get(0));
	while (level > 0 && $prev.length > 0) {
		if (getSelectOptionLevel($prev.get(0)) !== level) {
			continue; // skip since this is a sibling/cousin, not an ancestor
		}

		let id = parseInt($prev.val(), 10);
		if (id > 0) {
			ancestors.unshift(id);
		}

		$prev = $prev.prev();
		level--;
	}
	return ancestors;
};