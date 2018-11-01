/**
 * Internal dependencies.
 */
import ContainerShell from '../container-shell';
import ContainerNonce from '../container-nonce';

/**
 * Renders plain variant of the container.
 *
 * @param  {Object} props
 * @return {Object}
 */
const ContainerPlain = ( props ) => {
	const { nonce } = props.container;

	return (
		<ContainerShell { ...props }>
			<ContainerNonce name={ nonce.name } value={ nonce.value } />
		</ContainerShell>
	);
};

export default ContainerPlain;
