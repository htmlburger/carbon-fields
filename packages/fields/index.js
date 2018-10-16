/**
 * Internal dependencies.
 */
import { registerFieldType } from 'lib/registry';
import CheckboxField from 'components/checkbox';
import ColorField from 'components/color';
import HtmlField from 'components/html';
import TextField from 'components/text';

/**
 * Registers core fields.
 */
[
	[ 'checkbox', CheckboxField ],
	[ 'color', ColorField ],
	[ 'html', HtmlField ],
	[ 'text', TextField ]
].forEach( ( field ) => registerFieldType( ...field ) );

export * from 'lib/registry';
