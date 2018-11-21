/**
 * External dependencies.
 */
import { isObject } from 'lodash';

/**
 * Internal dependencies.
 */
import './style.scss';
import ContainerPlain from '../container-plain';
import ContainerTabbed from '../container-tabbed';

/**
 * Renders the container.
 *
 * @param  {Object} props
 * @return {Object}
 */
const ContainerBase = ( props ) => {
	const isTabbed = isObject( props.container.settings.tabs );

	return (
		isTabbed
			? <ContainerTabbed { ...props } />
			: <ContainerPlain { ...props } />
	);
};

export default ContainerBase;
