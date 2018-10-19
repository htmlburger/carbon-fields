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
const ContainerTabbed = ( props ) => {
	const { nonce } = props.container;

	return (
		<div className="carbon-tabs carbon-tabs-stacked">
			<ContainerNonce name={ nonce.name } value={ nonce.value } />

			<ContainerBase { ...props } />
		</div>
	);
};

export default ContainerTabbed;
