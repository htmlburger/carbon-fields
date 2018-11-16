/**
 * External dependencies.
 */
import classnames from 'classnames';
import { getFieldType } from '@carbon-fields/core';
import { kebabCase } from 'lodash';

/**
 * Renders the base wrapper of the container.
 *
 * @param  {Object} props
 * @param  {Object} props.container
 * @param  {mixed}  props.children
 * @return {Object}
 */
const ContainerShell = ( { container, children } ) => {
	const classes = classnames( [
		'cf-container',
		`cf-container-${ container.id }`,
		`cf-container-${ kebabCase( container.type ) }`,
		...container.classes
	] );

	return (
		<div className={ classes }>
			{ children }

			{ container.fields.map( ( field ) => {
				const Field = getFieldType( field.type, 'metabox' );

				if ( ! Field ) {
					return null;
				}

				return (
					<Field key={ field.id } id={ field.id } />
				);
			} ) }
		</div>
	);
};

export default ContainerShell;
