/**
 * The internal dependencies.
 */
import { autoload } from 'lib/helpers';

autoload(require.context('./lib', true, /\.js$/));
autoload(require.context('./containers', true, /\.js$/));
autoload(require.context('./fields', true, /\.js$/));
autoload(require.context('./sidebars', true, /\.js$/));
autoload(require.context('./store', true, /\.js$/));
