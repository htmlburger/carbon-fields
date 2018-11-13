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
		'cf-field',
		`cf-${ kebabCase( field.type ) }`,
		{ 'cf-field--has-width': !! field.width },
		className,
		...field.classes
	];

	return (
		<div className={ cx( classes ) } style={ styles }>
			<div className="cf-field__head">
				{ field.label && (
					<label className="cf-field__label" htmlFor={ field.id }>
						{ field.label }

						{ field.required && (
							<span className="cf-field__asterisk">*</span>
						) }
					</label>
				) }
			</div>

			<div className="cf-field__body">
				{ children }
			</div>

			{ field.help_text && (
				<em className="cf-field__help" dangerouslySetInnerHTML={ { __html: field.help_text } }></em>
			) }
		</div>
	);
};

export default FieldBase;
