import { partial } from 'lodash';
import { put, select, call } from 'redux-saga/effects';

import { createSelectboxChannel, createCheckableChannel } from 'lib/events';
import { TYPE_NOW_PAGE } from 'lib/constants';

import { TYPE_POST_META } from 'containers/constants';
import { setMeta, setUI } from 'containers/actions';
import {
	workerSyncPageTemplate,
	workerSyncParentId,
	workerSyncPostFormat,
	workerSyncTerms,
	workerCheckVisibility
} from 'containers/sagas/post-meta';

import {
	stubContainerVisibilityAction,
	stubContainerState
} from "tests/helpers";

const containerId = 'PostMetaContainer';

describe('containers/sagas/post-meta', () => {
	//////////////////////////////////////////
	// Test `workerSyncPageTemplate` method //
	//////////////////////////////////////////
	describe('syncPageTemplate', () => {
		it('should yield "SET_META" action', () => {
			document.body.innerHTML = `
				<select id="page_template">
					<option value="default" selected>Default Template</option>
					<option value="templates/contact-us.php">Contact Us</option>
					<option value="templates/customers.php">Customers</option>
					<option value="templates/home.php">Home</option>
				</select>
			`;

			const generator = workerSyncPageTemplate(containerId);

			generator.next();
			generator.next(createSelectboxChannel('#page_template'));

			const expected = put(setMeta({
				containerId: containerId,
				meta: {
					'page_template': 'default'
				}
			}));

			const actual = generator.next({
				value: 'default'
			}).value;

			expect(actual).toEqual(expected);
		});
	});

	//////////////////////////////////////
	// Test `workerSyncParentId` method //
	//////////////////////////////////////
	describe('syncParentId', () => {
		it('should yield "SET_META" action', () => {
			document.body.innerHTML = `
				<select id="parent_id">
					<option value="">(no parent)</option>
					<option class="level-0" value="5">Blog</option>
					<option class="level-0" value="22">Boxever Privacy Policy</option>
					<option class="level-0" value="14" selected="selected">Careers</option>
					<option class="level-0" value="10">Contact Us</option>
					<option class="level-0" value="4">Home</option>
				</select>
			`;

			const generator = workerSyncParentId(containerId);

			generator.next();
			generator.next(createSelectboxChannel('#parent_id'));

			const expected = put(setMeta({
				containerId: containerId,
				meta: {
					'parent_id': 5,
					'level': 2
				}
			}));

			const actual = generator.next({
				value: '5',
				option: document.querySelector('option[value="5"]')
			}).value;

			expect(actual).toEqual(expected);
		});
	});

	////////////////////////////////////////
	// Test `workerSyncPostFormat` method //
	////////////////////////////////////////
	describe('syncPostFormat', () => {
		it('should yield "SET_META" action', () => {
			document.body.innerHTML = `
				<div id="post-formats-select">
					<fieldset>
						<legend class="screen-reader-text">Post Formats</legend>

						<input type="radio" name="post_format" class="post-format" id="post-format-0" value="0" checked="checked">
						<label for="post-format-0" class="post-format-icon post-format-standard">Standard</label>

						<br>

						<input type="radio" name="post_format" class="post-format" id="post-format-aside" value="aside">
						<label for="post-format-aside" class="post-format-icon post-format-aside">Aside</label>

						<br>

						<input type="radio" name="post_format" class="post-format" id="post-format-gallery" value="gallery">
						<label for="post-format-gallery" class="post-format-icon post-format-gallery">Gallery</label>
					</fieldset>
				</div>
			`;

			const generator = workerSyncPostFormat(containerId);

			generator.next();
			generator.next(createSelectboxChannel('#post-formats-select'));

			const expected = put(setMeta({
				containerId: containerId,
				meta: {
					'post_format': '0',
				}
			}));

			const actual = generator.next({
				values: ['0']
			}).value;

			expect(actual).toEqual(expected);
		});
	});

	///////////////////////////////////
	// Test `workerSyncTerms` method //
	///////////////////////////////////
	describe('syncTerms', () => {
		it('should yield "SET_META" action', () => {
			document.body.innerHTML = `
				<ul id="crb_resource_categorychecklist">
					<li id="crb_resource_category-18">
						<label class="selectit">
							<input value="18" type="checkbox" name="tax_input[crb_resource_category][]" id="in-crb_resource_category-18" checked="checked"> Best Practices
						</label>
					</li>

					<li id="crb_resource_category-12">
						<label class="selectit">
							<input value="12" type="checkbox" name="tax_input[crb_resource_category][]" id="in-crb_resource_category-12" checked="checked"> Loyalty
						</label>
					</li>

					<li id="crb_resource_category-11">
						<label class="selectit">
							<input value="11" type="checkbox" name="tax_input[crb_resource_category][]" id="in-crb_resource_category-11"> Personalization
						</label>
					</li>

					<li id="crb_resource_category-9">
						<label class="selectit">
							<input value="9" type="checkbox" name="tax_input[crb_resource_category][]" id="in-crb_resource_category-9" checked="checked"> Revenue
						</label>
					</li>
				</ul>
			`;

			const generator = workerSyncTerms(containerId);

			generator.next();
			generator.next({
				settings: {
					show_on: {
						tax_slug: 'crb_resource_category'
					}
				}
			});

			generator.next(createSelectboxChannel('#crb_resource_categorychecklist'));

			const expected = put(setMeta({
				containerId: containerId,
				meta: {
					terms: [18, 12, 9],
				}
			}));

			const actual = generator.next({
				values: ['18', '12', '9']
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
		const stubContainer = partial(stubContainerState, TYPE_POST_META, containerId);

		it('should handle "show_on_template"', () => {
			window.typenow = TYPE_NOW_PAGE;

			const expected = stubVisibilityAction(true);
			const actual = generator.next(stubContainer({
				settings: {
					show_on: {
						template_names: ['template/in-the-news.php']
					}
				},

				meta: {
					page_template: 'template/in-the-news.php'
				}
			})).value;

			expect(actual).toEqual(expected);
		});

		it('should handle "hide_on_template"', () => {
			window.typenow = TYPE_NOW_PAGE;

			const expected = stubVisibilityAction(true);
			const actual = generator.next(stubContainer({
				settings: {
					show_on: {
						not_in_template_names: ['template/in-the-news.php']
					}
				},

				meta: {
					page_template: 'template/some-template.php'
				}
			})).value;

			expect(actual).toEqual(expected);
		});

		it('should handle "show_on_page_children"', () => {
			const expected = stubVisibilityAction(true);
			const actual = generator.next(stubContainer({
				settings: {
					show_on: {
						parent_page_id: 12
					}
				},

				meta: {
					parent_id: 12
				}
			})).value;

			expect(actual).toEqual(expected);
		});

		it('should handle "show_on_level"', () => {
			const expected = stubVisibilityAction(true);
			const actual = generator.next(stubContainer({
				settings: {
					show_on: {
						level_limit: 2
					}
				},

				meta: {
					level: 2
				}
			})).value;

			expect(actual).toEqual(expected);
		});

		it('should handle "show_on_post_format"', () => {
			const expected = stubVisibilityAction(true);
			const actual = generator.next(stubContainer({
				settings: {
					show_on: {
						post_formats: ['aside', 'gallery']
					}
				},

				meta: {
					post_format: 'aside'
				}
			})).value;

			expect(actual).toEqual(expected);
		});

		it('should handle "show_on_taxonomy_term"', () => {
			const expected = stubVisibilityAction(true);
			const actual = generator.next(stubContainer({
				settings: {
					show_on: {
						tax_term_id: '13'
					}
				},

				meta: {
					terms: ['1', '13']
				}
			})).value;

			expect(actual).toEqual(expected);
		});
	});
});
