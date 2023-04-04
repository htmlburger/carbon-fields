const rootRegistry = {};

export function registerContainerRoot( containerId, root ) {
	rootRegistry[ containerId ] = {
		createdAt: Math.floor(Date.now() / 1000),
		...root,
		unmount() {
			// Fix issues with race condition by delaying
			// the onLoad unmounting of containers
			// they would be unmounted later
			
			if ( parseFloat( window.cf.config.wp_version ) >= 6.2 ) {
				const currentTime = Math.floor(Date.now() / 1000);
				if ( currentTime - rootRegistry[ containerId ].createdAt >= 3 ) {
					root.unmount();
					delete rootRegistry[ containerId ];
				}
			} else {
				root.unmount();
				delete rootRegistry[ containerId ];
			}			
		}
	};
}

export function getContainerRoot( containerId ) {
	return rootRegistry[ containerId ] || null;
}