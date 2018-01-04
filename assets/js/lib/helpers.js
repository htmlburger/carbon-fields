/**
 * The external dependencies.
 */
import $ from 'jquery';
import qs from 'qs';
import { take, cancel, all, select } from 'redux-saga/effects';
import { isArray, isUndefined } from 'lodash';

/**
 * The internal dependencies.
 */
import { getVisibleContainers } from 'containers/selectors';

/**
 * Return a default value for the type of which the passed entity is.
 * Returns the passed entity if it cannot be handled.
 *
 * @param  {Function} cb
 * @return {Function}
 */
export function getTypeDefaultValue(entity) {
	const dictionary = {
		'null': null,
		'undefined': undefined,
		'boolean': false,
		'number': 0,
		'string': '',
		'array': [],
		'object': {},
		'function': function() {},
	};

	let type = isArray(entity) ? 'array' : typeof entity;

	let typeDefault = ! isUndefined( dictionary[ type ] ) ? dictionary[ type ] : entity;

	return typeDefault;
}

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
			yield all(tasks.map(task => cancel(task)));

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
 * Monkey-patch the `save` method of Widgets API
 * so we can intercept the AJAX request.
 *
 * @param  {Object} widgets
 * @return {void}
 */
export function patchWidgetsSaveAPI(widgets) {
	widgets._save = widgets.save;
	widgets.save = function(...args) {
		const [
			widget,
			remove,
			animate,
			order
		] = args;

		// Trigger an event so we hook just before the AJAX request.
		// The signature of arguments is `node, 0, 0, 1`.
		if (!remove && !animate && order) {
			$(document).trigger('widget-before-added', [widget]);
		}

		widgets._save(...args)
	}
}

/**
 * Get select option's level based on its className
 *
 * @param  {Object} option
 * @return {Number}
 */
export function getSelectOptionLevel(option) {
	let level = 0;

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
			$prev = $prev.prev();
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

export function* compactInput(form, container, fieldName) {
	const containers = isUndefined( container ) ? yield select(getVisibleContainers) : [container];
	fieldName = isUndefined( fieldName ) ? carbonFieldsConfig.compactInputKey : fieldName;

	let $containerFieldsets = $();
	for (let i = 0; i < containers.length; i++) {
		let $containerFieldset = $(form).find(`fieldset.container-${containers[i].id}:first`);
		$containerFieldsets = $containerFieldsets.add($containerFieldset);
	}

	// Append a hidden field containing the compacted input as JSON
	let $input = $(form).find(`input[name="${fieldName}"]`);
	if ($input.length === 0) {
		$input = $(`<input type="hidden" name="${fieldName}" value="" />`);
	}
	$input.val(JSON.stringify(qs.parse($containerFieldsets.serialize())));
	$(form).append($input);

	// Remove all name attributes to not clog up the request with duplicate input vars
	$containerFieldsets.find('input, select, textarea, button').each(function() {
		$(this).data('carbonFieldsName', $(this).attr('name'));
		$(this).removeAttr('name');
	});
	setTimeout(() => {
		$containerFieldsets.find('input, select, textarea, button').each(function() {
			$(this).attr('name', $(this).data('carbonFieldsName'));
		});
	}, 1);
}
