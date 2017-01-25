/**
 * The internal dependencies.
 */
import { registerFieldComponent } from 'lib/registry';

/**
 * Register the fields.
 */
import AssociationField from 'fields/components/association';
import CheckboxField from 'fields/components/checkbox';
import ColorField from 'fields/components/color';
import ComplexField from 'fields/components/complex';
import FileField from 'fields/components/file';
import HtmlField from 'fields/components/html';
import RadioField from 'fields/components/radio';
import SelectField from 'fields/components/select';
import SeparatorField from 'fields/components/separator';
import SetField from 'fields/components/set';
import TextField from 'fields/components/text';
import TextareaField from 'fields/components/textarea';

registerFieldComponent('Association', AssociationField);
registerFieldComponent('Checkbox', CheckboxField);
registerFieldComponent('Color', ColorField);
registerFieldComponent('Complex', ComplexField);
registerFieldComponent('File', FileField);
registerFieldComponent('Image', FileField);
registerFieldComponent('FooterScripts', TextareaField);
registerFieldComponent('HeaderScripts', TextareaField);
registerFieldComponent('Html', HtmlField);
registerFieldComponent('Radio', RadioField);
registerFieldComponent('RadioImage', RadioField);
registerFieldComponent('Select', SelectField);
registerFieldComponent('GravityForm', SelectField);
registerFieldComponent('Separator', SeparatorField);
registerFieldComponent('Set', SetField);
registerFieldComponent('Text', TextField);
registerFieldComponent('Textarea', TextareaField);
