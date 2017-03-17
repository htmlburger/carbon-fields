/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';

/**
 * The internal dependencies.
 */
import ContainerBase from 'containers/components/container/base';
import ContainerNonce from 'containers/components/container/nonce';

/**
 * Render a plain version of the container.
 *
 * @param  {Object}        props
 * @param  {Object}        props.container
 * @return {React.Element}
 */
const ContainerPlain = ({ container }) => {
	return <ContainerBase
		container={container}
		fields={container.fields}>
			<ContainerNonce container={container} />
		</ContainerBase>;
};

export default ContainerPlain;