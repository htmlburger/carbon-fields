/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * Renders the base wrapper of the container.
 *
 * @param  {Object} props
 * @param  {Object} props.container
 * @param  {mixed}  props.children
 * @return {Object}
 */
const ContainerBase = ( { container, children } ) => {
	const classes = classnames( [
		'carbon-container',
		`carbon-container-${ container.id }`,
		`carbon-container-${ container.type }`,
		...container.classes
	] );

	return (
		<div className={ classes }>
			{ children }
		</div>
	);
};

export default ContainerBase;
