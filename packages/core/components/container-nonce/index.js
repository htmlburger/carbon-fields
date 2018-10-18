/**
 * Renders the nonce's input.
 *
 * @param  {Object} props
 * @param  {string} props.name
 * @param  {string} props.value
 * @return {Object}
 */
const ContainerNonce = ( { name, value } ) => (
	<input
		type="hidden"
		name={ name }
		value={ value }
	/>
);

export default ContainerNonce;
