/**
 * The internal dependencies.
 */
import { registerContainerComponent } from 'lib/registry';

/**
 * Register the containers.
 */
import CommentMetaContainer from 'containers/components/comment-meta-container';
import NavMenuContainer from 'containers/components/nav-menu';
import PostMetaContainer from 'containers/components/post-meta-container';
import TermMetaContainer from 'containers/components/term-meta-container';
import ThemeOptionsContainer from 'containers/components/theme-options-container';
import UserMetaContainer from 'containers/components/user-meta-container';
import WidgetContainer from 'containers/components/widget';
import * as ContainerConstants from 'containers/constants';

registerContainerComponent(ContainerConstants.TYPE_COMMENT_META, CommentMetaContainer);
registerContainerComponent(ContainerConstants.TYPE_NAV_MENU, NavMenuContainer);
registerContainerComponent(ContainerConstants.TYPE_POST_META, PostMetaContainer);
registerContainerComponent(ContainerConstants.TYPE_TERM_META, TermMetaContainer);
registerContainerComponent(ContainerConstants.TYPE_THEME_OPTIONS, ThemeOptionsContainer);
registerContainerComponent(ContainerConstants.TYPE_USER_META, UserMetaContainer);
registerContainerComponent(ContainerConstants.TYPE_WIDGET, WidgetContainer);
