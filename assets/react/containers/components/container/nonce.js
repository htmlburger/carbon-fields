/**
 * The external dependencies.
 */
import React from 'react';

/**
 * Render the nonce field of the container
 *
 * @param  {Object}        props
 * @param  {Object}        props.container
 * @param  {Object}        props.container.nonce
 * @return {React.Element}
 */
const ContainerNonce = ({ container: { nonce } }) => {
	return <input
		type="hidden"
		id={nonce.name}
		name={nonce.name}
		value={nonce.value} />
};

export default ContainerNonce;