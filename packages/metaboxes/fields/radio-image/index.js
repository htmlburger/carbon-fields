/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.radio_image.metabox', 'carbon-fields/metaboxes', ( OriginalRadioField ) => ( props ) => {
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
} );
