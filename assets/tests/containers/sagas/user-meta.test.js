import { partial } from 'lodash';
import { put } from 'redux-saga/effects';

import { createSelectboxChannel } from 'lib/events';

import { TYPE_USER_META } from 'containers/constants';
import { setMeta, setUI } from 'containers/actions';
import {
	workerSyncRole,
	workerCheckVisibility
} from 'containers/sagas/user-meta';

import {
	stubContainerVisibilityAction,
	stubContainerState
} from "tests/helpers";

const containerId = 'UserMetaContainer';

describe('containers/sagas/user-meta', () => {
	//////////////////////////////////
	// Test `workerSyncRole` method //
	//////////////////////////////////
	describe('syncRole', () => {
		it('should yield "SET_META" action with value from the selectbox', () => {
			document.body.innerHTML = `
				<select id="role">
					<option value="subscriber">Subscriber</option>
					<option value="contributor" selected>Contributor</option>
					<option value="author">Author</option>
					<option value="editor">Editor</option>
					<option value="administrator">Administrator</option>
				</select>
			`;

			const generator = workerSyncRole(containerId);

			generator.next();
			generator.next(createSelectboxChannel('#role'));

			const expected = put(setMeta({
				containerId: containerId,
				meta: {
					role: 'contributor'
				}
			}));

			const actual = generator.next({
				value: 'contributor'
			}).value;

			expect(actual).toEqual(expected);
		});

		it('should yield "SET_META" action with value from the data attribute', () => {
			document.body.innerHTML = `
				<fieldset id="${containerId}" class="container-holder carbon-user-container container-Address carbon-fields-collection" data-profile-role="administrator"></fieldset>
			`;

			const element = document.querySelector(`#${containerId}`);
			const generator = workerSyncRole(containerId);

			// At the moment jsdom doesn't support `dataset` property.
			// See https://github.com/tmpvar/jsdom/issues/961 for more details.
			element.dataset = {
				profileRole: 'administrator'
			};

			generator.next();
			generator.next(createSelectboxChannel('#role'));
			generator.throw(''); // Manually exit from while loop.

			const expected = put(setMeta({
				containerId: containerId,
				meta: {
					role: 'administrator'
				}
			}));

			const actual = generator.next(element).value;

			expect(actual).toEqual(expected);
		});
	});

	/////////////////////////////////////////
	// Test `workerCheckVisibility` method //
	/////////////////////////////////////////
	describe('checkVisibility', () => {
		let generator;

		beforeEach(() => {
			generator = workerCheckVisibility({
				payload: { containerId }
			});

			generator.next();
			generator.next(true); // Pass the type check.
		});

		afterEach(() => {
			generator = null;
		});

		const stubVisibilityAction = partial(stubContainerVisibilityAction, containerId);
		const stubContainer = partial(stubContainerState, TYPE_USER_META, containerId);

		it('should be visible when the role is empty', () => {
			const expected = stubVisibilityAction(true);
			const actual = generator.next(stubContainer({
				settings: {
					show_on: {
						role: []
					}
				},

				meta: {
					role: 'subscriber'
				}
			})).value;

			expect(actual).toEqual(expected);
		});

		it('should be hidden when the role doesn\'t match', () => {
			const expected = stubVisibilityAction(false);
			const actual = generator.next(stubContainer({
				settings: {
					show_on: {
						role: ['author']
					}
				},

				meta: {
					role: 'subscriber'
				}
			})).value;

			expect(actual).toEqual(expected);
		});

		it('should be hidden when the role does match', () => {
			const expected = stubVisibilityAction(true);
			const actual = generator.next(stubContainer({
				settings: {
					show_on: {
						role: ['author']
					}
				},

				meta: {
					role: 'author'
				}
			})).value;

			expect(actual).toEqual(expected);
		});
	});
});
