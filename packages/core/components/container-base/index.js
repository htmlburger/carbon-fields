/**
 * External dependencies.
 */
import classnames from 'classnames';
import { getFieldType } from '@carbon-fields/core';
import { get } from 'lodash';

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

			{ container.fields.map( ( field ) => {
				const Field = getFieldType( field.type, 'classic' );

				if ( ! Field ) {
					return null;
				}

				const value = get( field, 'value', null );

				return (
					<Field
						key={ field.id }
						field={ field }
						value={ value }
						onChange={ ( ) => alert('TODO') } // eslint-disable-line
					/>
				);
			} ) }
		</div>
	);
};

export default ContainerBase;
