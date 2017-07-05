/**
 * The external dependencies.
 */
import { createAction } from 'redux-actions';

/**
 * Start a new request to add a sidebar.
 *
 * @param  {String} sidebarName
 * @return {Object}
 */
export const addSidebar = createAction('sidebars/ADD_SIDEBAR', sidebarName => ({ sidebarName }));

/**
 * Add the received sidebar to the store.
 *
 * @param  {Object} sidebar
 * @param  {String} sidebar.id
 * @param  {String} sidebar.name
 * @return {Object}
 */
export const receiveSidebar = createAction('sidebars/RECEIVE_SIDEBAR');