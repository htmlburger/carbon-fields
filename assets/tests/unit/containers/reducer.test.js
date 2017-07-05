/**
 * The internal dependencies.
 */
import reducer from 'containers/reducer';
import * as actions from 'containers/actions';

describe('Containers >> Reducer', () => {
	test('should return initial state', () => {
		const expected = {};
		const actual = reducer(undefined, { type: 'INITIAL_STATE' });

		expect(actual).toEqual(expected);
	});

	test('should handle SETUP_CONTAINER action', () => {
		const state = {
			'containerId': {}
		};

		const expected = {
			'containerId': {
				meta: {},
				ui: {},
			},
		};

		const actual = reducer(state, actions.setupContainer('containerId', {}, {}));

		expect(actual).toMatchObject(expected);
	});

	test('should handle ADD_CONTAINER action', () => {
		const state = {};

		const expected = {
			'containerId': {
				id: 'containerId',
			},
		};

		const actual = reducer(state, actions.addContainer({ id: 'containerId' }));

		expect(actual).toMatchObject(expected);
	});

	test('should handle REMOVE_CONTAINER action', () => {
		const state = {
			'containerId': {},
		};

		const expected = {};

		const actual = reducer(state, actions.removeContainer('containerId'));

		expect(actual).toMatchObject(expected);
	});

	test('should handle SET_CONTAINER_META action', () => {
		const state = {
			'containerId': {
				meta: {
					post_format: 'aside',
				},
			},
		};

		const expected = {
			'containerId': {
				meta: {
					post_format: 'gallery',
				},
			},
		};

		const actual = reducer(state, actions.setContainerMeta('containerId', 'post_format', 'gallery'));

		expect(actual).toMatchObject(expected);
	});

	test('should handle complex SET_CONTAINER_META action', () => {
		const state = {
			'containerId': {
				meta: {
					post_template: 'default',
					post_term: {
						categories: [1],
					},
				},
			},
		};

		const expected = {
			'containerId': {
				meta: {
					post_template: 'page.php',
					post_term: {
						categories: [1],
						tags: ['lorem'],
					},
				},
			},
		};

		const actual = reducer(state, actions.setContainerMeta({
			'containerId': {
				post_template: 'page.php',
				post_term: {
					tags: ['lorem'],
				},
			},
		}));

		expect(actual).toMatchObject(expected);
	});

	test('should handle SET_CONTAINER_UI action', () => {
		const state = {
			'containerId': {
				ui: {
					visible: true,
				},
			},
		};

		const expected = {
			'containerId': {
				ui: {
					visible: false,
				},
			},
		};

		const actual = reducer(state, actions.setContainerUI('containerId', 'visible', false));

		expect(actual).toMatchObject(expected)
	});

	test('should handle complex SET_CONTAINER_UI action', () => {
		const state = {
			'containerId': {
				ui: {
					visible: true,
					valid: true,
				},
			},
		};

		const expected = {
			'containerId': {
				ui: {
					visible: false,
					valid: false,
				},
			},
		};

		const actual = reducer(state, actions.setContainerUI({
			'containerId': {
				visible: false,
				valid: false,
			},
		}));

		expect(actual).toMatchObject(expected);
	});

	test('should handle SWITCH_CONTAINER_TAB action', () => {
		const state = {
			'containerId': {
				ui: {
					current_tab: 'tab1',
				},
			},
		};

		const expected = {
			'containerId': {
				ui: {
					current_tab: 'tab2',
				},
			},
		};

		const actual = reducer(state, actions.switchContainerTab('containerId', 'tab2'));

		expect(actual).toMatchObject(expected);
	});
});
