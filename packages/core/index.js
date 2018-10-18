/**
 * Internal dependencies.
 */
import { registerContainerType } from './registry/containers';
import BaseContainer from './containers/base';

import { registerFieldType } from './registry/fields';
import CheckboxField from './components/checkbox';
import ColorField from './components/color';
import FileField from './components/file';
import HtmlField from './components/html';
import RadioField from './components/radio';
import SelectField from './components/select';
import SetField from './components/set';
import TextField from './components/text';

/**
 * Registers containers.
 */
[
	[ 'post_meta', BaseContainer ]
].forEach( ( container ) => registerContainerType( ...container ) );

/**
 * Registers core fields.
 */
[
	[ 'checkbox', CheckboxField ],
	[ 'color', ColorField ],
	[ 'file', FileField ],
	[ 'gravity_form', SelectField ],
	[ 'html', HtmlField ],
	[ 'radio', RadioField ],
	[ 'radio_image', RadioField ],
	[ 'select', SelectField ],
	[ 'set', SetField ],
	[ 'text', TextField ]
].forEach( ( field ) => registerFieldType( ...field ) );

/**
 * Exposes the public interface.
 */
export * from './registry/containers';
export * from './registry/fields';
