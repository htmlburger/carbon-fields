/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.radio_image-field.block', 'carbon-fields/blocks', ( OriginalRadioField ) => withValidation( ( props ) => {
	return (
		<OriginalRadioField
			{ ...props }
			field={ {
				...props.field,
				options: props.field.options.map( ( option ) => ( {
					...option,
					label: ( <img className="cf-radio-image__image" src={ option.label } /> )
				} ) )
			} }
		/>
	);
} ) );
