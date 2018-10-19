/**
 * Internal dependencies.
 */
import './store';
import { registerContainerType } from './registry/containers';
import BaseContainer from './containers/base';

import { registerFieldType } from './registry/fields';
import CheckboxField from './fields/checkbox';
import ColorField from './fields/color';
import FileField from './fields/file';
import HiddenField from './fields/hidden';
import HtmlField from './fields/html';
import RadioField from './fields/radio';
import SelectField from './fields/select';
import SetField from './fields/set';
import TextField from './fields/text';
import TextareaField from './fields/textarea';

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
	[ 'hidden', HiddenField ],
	[ 'html', HtmlField ],
	[ 'radio', RadioField ],
	[ 'radio_image', RadioField ],
	[ 'select', SelectField ],
	[ 'set', SetField ],
	[ 'text', TextField ],
	[ 'textarea', TextareaField ]
].forEach( ( field ) => registerFieldType( ...field ) );

/**
 * Exposes the public interface.
 */
export * from './registry/containers';
export * from './registry/fields';
