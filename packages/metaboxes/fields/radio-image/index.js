/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.radio_image-field.metabox', 'carbon-fields/metaboxes', ( OriginalRadioField ) => withField( ( props ) => {
	return (
		<OriginalRadioField
			{ ...props }
			field={ {
				...props.field,
				options: props.field.options.map( ( option ) => ( {
					...option,
					label: ( <img src={ option.label } /> )
				} ) )
			} }
		/>
	);
} ) );
