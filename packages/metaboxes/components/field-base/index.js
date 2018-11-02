/**
 * External dependencies.
 */
import cx from 'classnames';

/**
 * Internal dependencies.
 */
import './style.scss';

/**
 * Renders the base wrapper of the field.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @param  {mixed}  props.children
 * @return {Object}
 */
export const FieldBase = ( { field, children } ) => {
	const styles = !! field.width ? { flexBasis: `${ field.width }%` } : null;

	const classes = [
		'carbon-field',
		`carbon-${ field.type }`,
		{ 'has-width': !! field.width },
		...field.classes
	];

	return <div className={ cx( classes ) } style={ styles } >
		{ field.label && (
			<label htmlFor={ field.id }>
				{ field.label }

				{ field.required && (
					<span className="carbon-required">*</span>
				) }
			</label>
		) }

		<div className="field-holder">
			{ children }
		</div>

		{ field.help_text && (
			<em className="carbon-help-text" dangerouslySetInnerHTML={ { __html: field.help_text } }></em>
		) }
	</div>;
};

export default FieldBase;
