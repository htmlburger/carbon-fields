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
