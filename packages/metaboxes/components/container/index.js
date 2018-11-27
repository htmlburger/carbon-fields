/**
 * External dependencies.
 */
import cx from 'classnames';
import { kebabCase } from 'lodash';

/**
 * Carbon Fields dependencies.
 */
import { getFieldType } from '@carbon-fields/core';

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
function Container( { container, children } ) {
	const classes = cx( [
		'cf-container',
		`cf-container-${ container.id }`,
		`cf-container-${ kebabCase( container.type ) }`,
		...container.classes
	] );

	return (
		<div className={ classes }>
			<input
				type="hidden"
				name={ container.nonce.name }
				value={ container.nonce.value }
			/>

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
}

export default Container;
