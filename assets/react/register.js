/**
 * Since we use Webpack's DLL feature for almost everything, the code inside
 * these files won't be executed until they're required. In other words we force
 * the registration of the components/reducers/sagas/etc.
 */

import 'fields/components/file-field';
import 'fields/components/text-field';
import 'fields/components/textarea-field';
import 'fields/components/separator-field';
import 'fields/components/header-scripts-field';
import 'fields/components/footer-scripts-field';
import 'fields/components/color-field';
import 'fields/components/checkbox-field';
import 'fields/components/radio-field';
import 'fields/components/select-field';
import 'fields/components/set-field';
import 'fields/components/html-field';
