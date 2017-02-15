/**
 * The internal dependencies.
 */
import { registerContainerComponent, registerFieldComponent } from 'lib/registry';

/**
 * Register the containers.
 */
import CommentMetaContainer from 'containers/components/comment-meta-container';
import PostMetaContainer from 'containers/components/post-meta-container';
import TermMetaContainer from 'containers/components/term-meta-container';
import ThemeOptionsContainer from 'containers/components/theme-options-container';
import UserMetaContainer from 'containers/components/user-meta-container';
import WidgetContainer from 'containers/components/widget';
import * as ContainerConstants from 'containers/constants';

registerContainerComponent(ContainerConstants.TYPE_COMMENT_META, CommentMetaContainer);
registerContainerComponent(ContainerConstants.TYPE_POST_META, PostMetaContainer);
registerContainerComponent(ContainerConstants.TYPE_TERM_META, TermMetaContainer);
registerContainerComponent(ContainerConstants.TYPE_THEME_OPTIONS, ThemeOptionsContainer);
registerContainerComponent(ContainerConstants.TYPE_USER_META, UserMetaContainer);
registerContainerComponent(ContainerConstants.TYPE_WIDGET, WidgetContainer);

/**
 * Register the fields.
 */
import AssociationField from 'fields/components/association';
import CheckboxField from 'fields/components/checkbox';
import ColorField from 'fields/components/color';
import ComplexField from 'fields/components/complex';
import DateTimeField from 'fields/components/datetime';
import FileField from 'fields/components/file';
import HtmlField from 'fields/components/html';
import MapField from 'fields/components/map';
import RadioField from 'fields/components/radio';
import RichTextField from 'fields/components/rich-text';
import SelectField from 'fields/components/select';
import SeparatorField from 'fields/components/separator';
import SidebarField from 'fields/components/sidebar';
import SetField from 'fields/components/set';
import TextField from 'fields/components/text';
import TextareaField from 'fields/components/textarea';

registerFieldComponent('Association', AssociationField);
registerFieldComponent('Checkbox', CheckboxField);
registerFieldComponent('Color', ColorField);
registerFieldComponent('Complex', ComplexField);
registerFieldComponent('Date', DateTimeField);
registerFieldComponent('DateTime', DateTimeField);
registerFieldComponent('File', FileField);
registerFieldComponent('Image', FileField);
registerFieldComponent('FooterScripts', TextareaField);
registerFieldComponent('HeaderScripts', TextareaField);
registerFieldComponent('Html', HtmlField);
registerFieldComponent('Map', MapField);
registerFieldComponent('Radio', RadioField);
registerFieldComponent('RadioImage', RadioField);
registerFieldComponent('RichText', RichTextField);
registerFieldComponent('Select', SelectField);
registerFieldComponent('GravityForm', SelectField);
registerFieldComponent('Separator', SeparatorField);
registerFieldComponent('Set', SetField);
registerFieldComponent('Sidebar', SidebarField);
registerFieldComponent('Text', TextField);
registerFieldComponent('Textarea', TextareaField);
registerFieldComponent('Time', DateTimeField);
