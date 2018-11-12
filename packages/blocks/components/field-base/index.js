/**
 * External dependencies.
 */
import cx from 'classnames';
import { kebabCase } from 'lodash';

/**
 * Renders the base wrapper of the field.
 *
 * @param  {Object} props
 * @param  {string} props.className
 * @param  {Object} props.field
 * @param  {mixed}  props.children
 * @return {Object}
 */
export const FieldBase = ( {
	className,
	field,
	children
} ) => {
	const classes = [
		'cf-blocks-field',
		`cf-blocks-${ kebabCase( field.type ) }`,
		className,
		...field.classes
	];

	return <div className={ cx( classes ) }>
		{ children }
	</div>;
};

export default FieldBase;
