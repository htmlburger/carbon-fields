/**
 * Internal dependencies.
 */
import ContainerBase from '../container-base';
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
		<ContainerBase { ...props }>
			<ContainerNonce name={ nonce.name } value={ nonce.value } />
		</ContainerBase>
	);
};

export default ContainerPlain;
