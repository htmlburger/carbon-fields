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
