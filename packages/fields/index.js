/**
 * Internal dependencies.
 */
import { registerFieldType } from 'lib/registry';
import CheckboxField from 'components/checkbox';
import ColorField from 'components/color';
import HtmlField from 'components/html';
import RadioField from 'components/radio';
import TextField from 'components/text';

/**
 * Registers core fields.
 */
[
	[ 'checkbox', CheckboxField ],
	[ 'color', ColorField ],
	[ 'html', HtmlField ],
	[ 'radio', RadioField ],
	[ 'text', TextField ]
].forEach( ( field ) => registerFieldType( ...field ) );

export * from 'lib/registry';
