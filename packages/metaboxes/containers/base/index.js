/**
 * External dependencies.
 */
import { isObject } from 'lodash';

/**
 * Internal dependencies.
 */
import ContainerPlain from '../../components/container-plain';
import ContainerTabbed from '../../components/container-tabbed';

/**
 * Renders the container.
 *
 * @param  {Object} props
 * @return {Object}
 */
const BaseContainer = ( props ) => {
	const isTabbed = isObject( props.container.settings.tabs );

	return (
		isTabbed
			? <ContainerTabbed { ...props } />
			: <ContainerPlain { ...props } />
	);
};

export default BaseContainer;
