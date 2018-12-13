/**
 * External dependencies.
 */
import { compose } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import withFilters from '../hocs/with-filters';
import { registerFieldType } from '../registry/fields';
import AssociationField from './association';
import CheckboxField from './checkbox';
import ColorField from './color';
import ComplexField from './complex';
import DateField from './date';
import DateTimeField from './datetime';
import FileField from './file';
import HiddenField from './hidden';
import HtmlField from './html';
import MapField from './map';
import MediaGalleryField from './media-gallery';
import MultiselectField from './multiselect';
import OembedField from './oembed';
import RadioField from './radio';
import RadioImageField from './radio-image';
import RichTextField from './rich-text';
import SelectField from './select';
import SeparatorField from './separator';
import SetField from './set';
import SidebarField from './sidebar';
import TextField from './text';
import TextareaField from './textarea';
import TimeField from './time';

/**
 * Extends the fields with necessary hooks.
 */
addFilter( 'carbon-fields.register-field-type', 'carbon-fields/core', ( type, context, component ) => {
	return compose(
		withFilters( `carbon-fields.field-edit.${ context }` ),
		withFilters( `carbon-fields.${ type }.${ context }` )
	)( component );
} );

/**
 * Registers the fields.
 */
[
	[ 'association', AssociationField ],
	[ 'checkbox', CheckboxField ],
	[ 'color', ColorField ],
	[ 'complex', ComplexField ],
	[ 'date', DateField ],
	[ 'date_time', DateTimeField ],
	[ 'file', FileField ],
	[ 'footer_scripts', TextareaField ],
	[ 'gravity_form', SelectField ],
	[ 'header_scripts', TextareaField ],
	[ 'hidden', HiddenField ],
	[ 'html', HtmlField ],
	[ 'image', FileField ],
	[ 'map', MapField ],
	[ 'multiselect', MultiselectField ],
	[ 'media_gallery', MediaGalleryField ],
	[ 'oembed', OembedField ],
	[ 'radio', RadioField ],
	[ 'radio_image', RadioImageField ],
	[ 'rich_text', RichTextField ],
	[ 'select', SelectField ],
	[ 'separator', SeparatorField ],
	[ 'set', SetField ],
	[ 'sidebar', SidebarField ],
	[ 'text', TextField ],
	[ 'textarea', TextareaField ],
	[ 'time', TimeField ]
].forEach( ( field ) => registerFieldType( ...field ) );
