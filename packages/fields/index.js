/**
 * Internal dependencies.
 */
import { registerFieldType } from 'lib/registry';
import TextField from 'components/text';

/**
 * Registers core fields.
 */
[
	[ 'text', TextField ]
].forEach( ( field ) => registerFieldType( ...field ) );

export * from 'lib/registry';
