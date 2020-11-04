/**
 * External dependencies.
 */
import cx from 'classnames';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { kebabCase } from 'lodash';

/**
 * Internal dependencies.
 */
import './style.scss';
import Disabled from '../../components/disabled';
import withFilters from '../../hocs/with-filters';

/**
 * Renders the base wrapper of the field.
 *
 * @param  {Object}  props
 * @param  {string}  props.id
 * @param  {Object}  props.field
 * @param  {?string} props.error
 * @param  {boolean} props.hidden
 * @param  {string}  props.className
 * @param  {mixed}   props.children
 * @return {Object}
 */
function Field( {
	id,
	field,
	error,
	hidden,
	className,
	children
} ) {
	const styles = !! field.width ? { flexBasis: `${ field.width }%` } : null;

	const classes = [
		'cf-field',
		`cf-${ kebabCase( field.type ) }`,
		{
			'cf-field--has-width': !! field.width,
			'cf-field--invalid': !! error
		},
		className,
		...field.classes
	];

	if ( field.hidden ) {
		return ( null );
	}

	return (
		<div
			className={ cx( classes ) }
			style={ styles }
			hidden={ hidden }
		>
			<div className="cf-field__head">
				{ field.label && (
					<label className="cf-field__label" htmlFor={ id }>
						{ field.label }

						{ field.required && (
							<span className="cf-field__asterisk">*</span>
						) }
					</label>
				) }
			</div>

			{ ! hidden && (
				<div className="cf-field__body">
					{ children }
				</div>
			) }

			{ hidden && (
				<Disabled className="cf-field__body">
					{ children }
				</Disabled>
			) }

			{ field.help_text && (
				<em className="cf-field__help" dangerouslySetInnerHTML={ { __html: field.help_text } }></em>
			) }

			{ error && (
				<span className="cf-field__error">
					{ error }
				</span>
			) }
		</div>
	);
}

export default compose(
	withSelect( ( select, props ) => {
		const { getValidationError, isFieldVisible } = select( 'carbon-fields/core' );

		return {
			error: getValidationError( props.id ),
			hidden: ! isFieldVisible( props.id )
		};
	} ),
	withFilters( 'carbon-fields.field-wrapper' )
)( Field );
