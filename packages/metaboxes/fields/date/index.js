/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';

addFilter( 'carbon-fields.date-field.metabox', 'carbon-fields/metaboxes', ( OriginalDatetimeField ) => withField( ( props ) => {
	return (
		<FieldBase field={ props.field } >
			<OriginalDatetimeField
				fieldKey={ props.field.id }
				buttonText={ __( 'Select Date' ) }
				{ ...props }
			/>
		</FieldBase>
	);
} ) );
