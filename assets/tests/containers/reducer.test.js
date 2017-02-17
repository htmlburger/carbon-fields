import reducer from 'containers/reducer';
import { SET_META, SET_UI } from 'containers/actions';

describe('containers/reducer', () => {
	it('should return the initial state', () => {
		const expected = {};
		const actual = reducer(undefined, {});

		expect(actual).toEqual(expected);
	});

	it('should handle "SET_META"', () => {
		const expected = {
			ContainerId: {
				meta: {
					someProp: true,
					anotherProp: 2
				}
			}
		};

		const actual = reducer({}, {
			type: SET_META,
			payload: {
				containerId: 'ContainerId',
				meta: {
					someProp: true,
					anotherProp: 2
				}
			}
		});

		expect(actual).toEqual(expected);
	});

	it('should handle "SET_UI"', () => {
		const expected = {
			ContainerId: {
				ui: {
					someProp: true,
					anotherProp: 2
				}
			}
		};

		const actual = reducer({}, {
			type: SET_UI,
			payload: {
				containerId: 'ContainerId',
				ui: {
					someProp: true,
					anotherProp: 2
				}
			}
		});

		expect(actual).toEqual(expected);
	});
});
