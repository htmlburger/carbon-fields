/**
 * External dependencies.
 */
import create from 'callbag-create';

/**
 * Callbag source factory from `addHandler` and `removeHandler` pair.
 *
 * @see https://github.com/Andarist/callbag-from-event-pattern
 * @param  {Function} addHandler
 * @param  {Function} removeHandler
 * @param  {Function} argsTransformer
 * @return {Function}
 */
export default function fromEventPattern( addHandler, removeHandler, argsTransformer = ( ...args ) => args ) {
	return create( ( sink ) => {
		const handler = ( ...args ) => sink( 1, argsTransformer( ...args ) );

		addHandler( handler );

		return () => removeHandler( handler );
	} );
}
