import { partial } from 'lodash';
import { put } from 'redux-saga/effects';

import { createSelectboxChannel } from 'lib/events';

import { TYPE_TERM_META } from 'containers/constants';
import { setMeta, setUI } from 'containers/actions';
import {
	workerSyncLevel,
	workerCheckVisibility
} from 'containers/sagas/term-meta';

import {
	stubContainerVisibilityAction,
	stubContainerState
} from "tests/helpers";

const containerId = 'TermMetaContainer';

describe('containers/sagas/term-meta', () => {
	///////////////////////////////////
	// Test `workerSyncLevel` method //
	///////////////////////////////////
	describe('syncLevel', () => {
		it('should yield "SET_META" action', () => {
			document.body.innerHTML = `
				<select id="parent">
					<option value="-1" selected>None</option>
					<option class="level-0" value="17">Case Studies</option>
					<option class="level-0" value="16">Datasheets</option>
					<option class="level-0" value="15">eBooks &amp; White Papers</option>
				</select>
			`;

			const generator = workerSyncLevel(containerId);

			generator.next();
			generator.next(createSelectboxChannel('#parent'));

			const expected = put(setMeta({
				containerId: containerId,
				meta: {
					'level': 1
				}
			}));

			const actual = generator.next({
				value: '-1',
				option: document.querySelector('option[value="-1"]')
			}).value;

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
		const stubContainer = partial(stubContainerState, TYPE_TERM_META, containerId);

		it('should handle "show_on_level"', () => {
			const expected = stubVisibilityAction(true);
			const actual = generator.next(stubContainer({
				settings: {
					show_on_level: 2
				},

				meta: {
					level: 2
				}
			})).value;

			expect(actual).toEqual(expected);
		});
	});
});
