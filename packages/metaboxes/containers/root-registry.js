const rootRegistry = {};

export function registerContainerRoot( containerId, root ) {
	rootRegistry[ containerId ] = {
		...root,
		unmount() {
			root.unmount();

			delete rootRegistry[ containerId ];
		}
	};
}

export function getContainerRoot( containerId ) {
	return rootRegistry[ containerId ] || null;
}
