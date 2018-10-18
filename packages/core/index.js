/**
 * Internal dependencies.
 */
import { registerFieldType } from './lib/registry';
import CheckboxField from './components/checkbox';
import ColorField from './components/color';
import FileField from './components/file';
import HtmlField from './components/html';
import RadioField from './components/radio';
import RadioImageField from './components/radio-image';
import SelectField from './components/select';
import SetField from './components/set';
import TextField from './components/text';

/**
 * Registers core fields.
 */
[
	[ 'checkbox', CheckboxField ],
	[ 'color', ColorField ],
	[ 'file', FileField ],
	[ 'html', HtmlField ],
	[ 'radio', RadioField ],
	[ 'radio_image', RadioImageField ],
	[ 'select', SelectField ],
	[ 'set', SetField ],
	[ 'text', TextField ]
].forEach( ( field ) => registerFieldType( ...field ) );

export * from './lib/registry';
