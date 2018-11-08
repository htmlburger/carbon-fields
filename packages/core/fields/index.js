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
import MultiselectField from './multiselect';
import OembedField from './oembed';
import RadioField from './radio';
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
	[ 'gravity_form', SelectField ],
	[ 'hidden', HiddenField ],
	[ 'html', HtmlField ],
	[ 'multiselect', MultiselectField ],
	[ 'oembed', OembedField ],
	[ 'radio', RadioField ],
	[ 'radio_image', RadioField ],
	[ 'select', SelectField ],
	[ 'separator', SeparatorField ],
	[ 'set', SetField ],
	[ 'sidebar', SidebarField ],
	[ 'text', TextField ],
	[ 'textarea', TextareaField ],
	[ 'time', DatetimeField ]
].forEach( ( field ) => registerFieldType( ...field ) );
