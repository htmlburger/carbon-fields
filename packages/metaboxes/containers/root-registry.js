const rootRegistry = {};

export function registerContainerRoot( containerId, root ) {
	rootRegistry[ containerId ] = {
		createdAt: Math.floor( Date.now() / 1000 ),
		...root,
		unmount() {
			// Fix issues with race condition by delaying
			// the onLoad unmounting of containers
			// they would be unmounted later

			if ( parseFloat( window.cf.config.wp_version ) >= 6.2 ) {
				const currentTime = Math.floor( Date.now() / 1000 );

				// Assuming that the execution time of uninstallation is less than the component rendering time
				// the component uninstallation action will be invalid.
				if ( currentTime - rootRegistry[ containerId ].createdAt >= 3 ) {
					root.unmount();
					delete rootRegistry[ containerId ];
				} else {
					// Set the timer before proceeding
					setTimeout( () => {
						root.unmount();
						delete rootRegistry[ containerId ];
					}, 3000 );
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
