/**
 * Internal dependencies.
 */
import { registerFieldType } from 'lib/registry';
import HtmlField from 'components/html';
import TextField from 'components/text';

/**
 * Registers core fields.
 */
[
	[ 'html', HtmlField ],
	[ 'text', TextField ]
].forEach( ( field ) => registerFieldType( ...field ) );

export * from 'lib/registry';
