/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';

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

/**
 * Validate the props.
 *
 * @type {Object}
 */
ContainerNonce.propTypes = {
	container: PropTypes.shape({
		nonce: PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.string,
		}),
	}),
};

export default ContainerNonce;
