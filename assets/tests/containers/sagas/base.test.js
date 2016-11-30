import { put, select, call } from 'redux-saga/effects';
import { getContainerById } from 'containers/selectors';
import { setupContainer, setMeta, setUI } from 'containers/actions';
import { workerSetupContainer, workerToggleMetaBoxVisibility } from 'containers/sagas/base';

describe('containers/sagas/base', () => {
	describe('setupContainer', () => {
		it('should yield "SET_META" action', () => {
			const containerId = 'ContainerId';
			const meta = {};
			const ui = {};

			const expected = put(setMeta({ containerId, meta }));

			const generator = workerSetupContainer(setupContainer(containerId, meta, ui));
			const actual = generator.next().value;

			expect(actual).toEqual(expected);
		});

		it('should yield "SET_UI" action with default options', () => {
			const containerId = 'ContainerId';
			const meta = {};
			const ui = {};
			const expected = put(setUI({
				containerId,
				ui: {
					'has_error': false,
					'is_dirty': false,
					'is_visible': true,
					'classes': [],
				}
			}));

			const generator = workerSetupContainer(setupContainer(containerId, meta, ui));

			generator.next();

			const actual = generator.next().value;

			expect(actual).toEqual(expected);
		});

		it('should yield "SET_UI" action with custom options', () => {
			const containerId = 'ContainerId';
			const meta = {};
			const ui = {
				'is_visible': true
			};
			const expected = put(setUI({
				containerId,
				ui: {
					'has_error': false,
					'is_dirty': false,
					'is_visible': true,
					'classes': [],
				}
			}));

			const generator = workerSetupContainer(setupContainer(containerId, meta, ui));

			generator.next();

			const actual = generator.next().value;

			expect(actual).toEqual(expected);
		});
	});

	describe('toggleMetaboxVisibility', () => {
		it('should get the container from the state', () => {
			const containerId = 'ContainerId';
			const ui = {};
			const expected = select(getContainerById, containerId);

			const generator = workerToggleMetaBoxVisibility(setUI({ containerId, ui }));
			const actual = generator.next().value;

			expect(actual).toEqual(expected);
		});

		it('should find the parent in DOM', () => {
			const containerId = 'ContainerId';
			const ui = {};
			const expected = call([document, document.querySelector], `#${containerId}`)

			const generator = workerToggleMetaBoxVisibility(setUI({ containerId, ui }));

			generator.next();

			const actual = generator.next().value;

			expect(actual).toEqual(expected);
		});

		it('should throw an error if cannot find the parent', () => {
			const containerId = 'ContainerId';
			const ui = {};
			const element = document.querySelector(`#${containerId}`);

			const generator = workerToggleMetaBoxVisibility(setUI({ containerId, ui }));

			generator.next();
			generator.next();

			expect(() => {
				generator.next();
			}).toThrowError(/Cannot find the metabox/);
		});

		it('should update the style attribute of the parent', () => {
			document.body.innerHTML = `
				<div id="ContainerId" style="display: none;"></div>;
			`;

			const containerId = 'ContainerId';
			const ui = { is_visible: true };
			const element = document.querySelector(`#${containerId}`);

			const generator = workerToggleMetaBoxVisibility(setUI({ containerId, ui }));

			expect(element.style.display).toBe('none');

			generator.next();
			generator.next({ ui: { is_visible: true } });
			generator.next(element);

			expect(element.style.display).toBe('block');
		});
	});
});
