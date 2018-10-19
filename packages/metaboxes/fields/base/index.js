/**
 * The external dependencies.
 */
import cx from 'classnames';

/**
 * The base component used to render the fields.
 * Extending of this component is done via composition.
 *
 * @abstract
 * @param  { Object }  props
 * @param  { Object }  props.field
 * @param  { Element } props.children
 * @return { React.Element }
 */
export const Base = ( { field, children } ) => {
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

export default Base;
