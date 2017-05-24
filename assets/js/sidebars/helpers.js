/**
 * The external dependencies.
 */
import $ from 'jquery';

/**
 * Make an AJAX request to modify the sidebars.
 *
 * @param  {String} action
 * @param  {String} name
 * @return {Promise<Object, String>}
 */
export function request(action, name) {
	return new Promise((resolve, reject) => {
		const request = $.post(window.ajaxurl, {
			action: `carbon_fields_${action}_sidebar`,
			name: name
		}, null, 'json');

		request.done((response) => {
			if (!response || !response.success) {
				reject(response.error || `An error occurred while trying to ${action} the sidebar.`);
			} else {
				resolve(response);
			}
		});

		request.fail((xhr, status) => {
			reject(`Request failed: ${status}`);
		});
	});
}