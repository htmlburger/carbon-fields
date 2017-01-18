/**
 * The internal dependencies.
 */
import { registerFieldComponent } from 'lib/registry';

/**
 * Register the fields.
 */
import CheckboxField from 'fields/components/checkbox-field';
import ColorField from 'fields/components/color-field';
import ComplexField from 'fields/components/complex';
import FileField from 'fields/components/file-field';
import HtmlField from 'fields/components/html-field';
import RadioField from 'fields/components/radio-field';
import RadioImageField from 'fields/components/radio-image-field';
import SelectField from 'fields/components/select-field';
import SeparatorField from 'fields/components/separator-field';
import SetField from 'fields/components/set-field';
import TextField from 'fields/components/text-field';
import TextareaField from 'fields/components/textarea-field';

registerFieldComponent('Checkbox', CheckboxField);
registerFieldComponent('Color', ColorField);
registerFieldComponent('Complex', ComplexField);
registerFieldComponent('File', FileField);
registerFieldComponent('Image', FileField);
registerFieldComponent('FooterScripts', TextareaField);
registerFieldComponent('HeaderScripts', TextareaField);
registerFieldComponent('Html', HtmlField);
registerFieldComponent('Radio', RadioField);
registerFieldComponent('RadioImage', RadioImageField);
registerFieldComponent('Select', SelectField);
registerFieldComponent('Separator', SeparatorField);
registerFieldComponent('Set', SetField);
registerFieldComponent('Text', TextField);
registerFieldComponent('Textarea', TextareaField);
