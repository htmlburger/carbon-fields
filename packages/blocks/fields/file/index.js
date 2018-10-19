/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { BaseControl, Button, Placeholder } from '@wordpress/components';
import { MediaUpload } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';

/**
 * Renders the field.
 *
 * @return {Object}
 */
const FileField = ( {
	buttonLabel,
	field,
	value,
	handleSelect
} ) => {
	/**
	 * Provide the file component
	 *
	 * @return {Null|Object}
	 */
	const renderFileComponent = () => {
		if ( ! value ) {
			return null;
		}

		if ( /image/.test( value.mime ) ) {
			return (
				<img src={ value.url } />
			);
		}

		return (
			<Placeholder
				icon="media-document"
				label={ value.filename }
			/>
		);
	};

	return (
		<BaseControl label={ field.label }>
			<MediaUpload
				onSelect={ handleSelect }
				value={ value }
				render={ ( { open } ) => (
					<Fragment>
						<Button isDefault onClick={ open }>
							{ buttonLabel }
						</Button>

						{ renderFileComponent() }
					</Fragment>
				) }
			/>
		</BaseControl>
	);
};

addFilter( 'carbon-fields.file-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalFileField ) => ( { field, value, onChange } ) => {
	return (
		<OriginalFileField
			field={ field }
			onChange={ onChange }
			value={ value }
		>
			{ ( { ...props } ) => (
				<FileField
					field={ field }
					value={ value }
					buttonLabel={ __( 'Select File' ) }
					{ ...props }
				/>
			) }
		</OriginalFileField>
	);
} );
