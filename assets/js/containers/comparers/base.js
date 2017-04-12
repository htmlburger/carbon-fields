/**
 * The base comparer factory.
 *
 * @param  {String[]} operators
 * @return {Object}
 */
export default function(operators) {
	return {
		supportsOperator(operator) {
			return operators.indexOf(operator) > -1;
		},
	};
}
