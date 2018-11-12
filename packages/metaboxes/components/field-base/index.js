/**
 * External dependencies.
 */
import cx from 'classnames';
import { kebabCase } from 'lodash';

/**
 * Internal dependencies.
 */
import './style.scss';

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
	const styles = !! field.width ? { flexBasis: `${ field.width }%` } : null;

	const classes = [
		'cf-metaboxes-field',
		`cf-metaboxes-${ kebabCase( field.type ) }`,
		{ 'cf-metaboxes-field--has-width': !! field.width },
		className,
		...field.classes
	];

	return <div className={ cx( classes ) } style={ styles } >
		<div className="cf-metaboxes-field__head">
			{ field.label && (
				<label className="cf-metaboxes-field__label" htmlFor={ field.id }>
					{ field.label }

					{ field.required && (
						<span className="cf-metaboxes-field__asterisk">*</span>
					) }
				</label>
			) }
		</div>

		<div className="cf-metaboxes-field__body">
			{ children }
		</div>

		{ field.help_text && (
			<em className="cf-metaboxes-field__help" dangerouslySetInnerHTML={ { __html: field.help_text } }></em>
		) }
	</div>;
};

export default FieldBase;
