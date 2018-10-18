/**
 * Internal dependencies.
 */
import ContainerBase from '../container-base';
import ContainerNonce from '../container-nonce';

/**
 * Renders plain variant of the container.
 *
 * @param  {Object} props
 * @param  {Object} props.container
 * @return {Object}
 */
const ContainerPlain = ( { container } ) => {
	const { nonce } = container;

	return (
		<ContainerBase container={ container }>
			<ContainerNonce name={ nonce.name } value={ nonce.value } />
		</ContainerBase>
	);
};

export default ContainerPlain;
