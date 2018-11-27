/**
 * External dependencies.
 */
import classnames from 'classnames';
import { getFieldType } from '@carbon-fields/core';
import { kebabCase } from 'lodash';

/**
 * Internal dependencies.
 */
import './style.scss';
import Field from '../field';

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
				const FieldEdit = getFieldType( field.type, 'metabox' );

				if ( ! FieldEdit ) {
					return null;
				}

				return (
					<Field key={ field.id } id={ field.id }>
						<FieldEdit id={ field.id } />
					</Field>
				);
			} ) }
		</div>
	);
};

export default ContainerShell;
