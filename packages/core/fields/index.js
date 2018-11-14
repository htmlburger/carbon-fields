/**
 * Internal dependencies.
 */
import { registerFieldType } from '../registry/fields';
import AssociationField from './association';
import CheckboxField from './checkbox';
import ColorField from './color';
import ComplexField from './complex';
import DatetimeField from './datetime';
import FileField from './file';
import HiddenField from './hidden';
import HtmlField from './html';
import MapField from './map';
import MediaGalleryField from './media-gallery';
import MultiselectField from './multiselect';
import OembedField from './oembed';
import RadioField from './radio';
import RichTextField from './rich-text';
import SelectField from './select';
import SeparatorField from './separator';
import SetField from './set';
import SidebarField from './sidebar';
import TextField from './text';
import TextareaField from './textarea';

/**
 * Registers the fields.
 */
[
	[ 'association', AssociationField ],
	[ 'checkbox', CheckboxField ],
	[ 'color', ColorField ],
	[ 'complex', ComplexField ],
	[ 'date', DatetimeField ],
	[ 'date_time', DatetimeField ],
	[ 'file', FileField ],
	[ 'footer_scripts', TextareaField ],
	[ 'gravity_form', SelectField ],
	[ 'header_scripts', TextareaField ],
	[ 'hidden', HiddenField ],
	[ 'html', HtmlField ],
	[ 'map', MapField ],
	[ 'multiselect', MultiselectField ],
	[ 'media_gallery', MediaGalleryField ],
	[ 'oembed', OembedField ],
	[ 'radio', RadioField ],
	[ 'radio_image', RadioField ],
	[ 'rich_text', RichTextField ],
	[ 'select', SelectField ],
	[ 'separator', SeparatorField ],
	[ 'set', SetField ],
	[ 'sidebar', SidebarField ],
	[ 'text', TextField ],
	[ 'textarea', TextareaField ],
	[ 'time', DatetimeField ]
].forEach( ( field ) => registerFieldType( ...field ) );
