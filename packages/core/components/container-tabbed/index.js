/**
 * Internal dependencies.
 */
import ContainerBase from '../container-base';
import ContainerNonce from '../container-nonce';

/**
 * Renders tabbed variant of the container.
 *
 * @param  {Object} props
 * @param  {Object} props.container
 * @return {Object}
 */
const ContainerTabbed = ( { container } ) => {
	const { nonce } = container;

	return (
		<div className="carbon-tabs carbon-tabs-stacked">
			<ContainerNonce name={ nonce.name } value={ nonce.value } />

			<ContainerBase container={ container } />
		</div>
	);
};

export default ContainerTabbed;
