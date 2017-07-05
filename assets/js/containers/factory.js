/**
 * The external dependencies.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/**
 * The internal dependencies.
 */
import { getContainerComponent } from 'lib/registry';

/**
 * Render a new container.
 *
 * @param  {Object} store
 * @param  {String} type
 * @param  {Object} props
 * @return {void}
 */
export default function(store, type, props = {}) {
	const { id } = props;
	const Component = getContainerComponent(type);
	const node = document.querySelector(`.container-${id}`);

	if (node) {
		ReactDOM.render(
			<Provider store={store}>
				<Component key={id} type={type} {...props} />
			</Provider>,
			node
		);
	}
}
