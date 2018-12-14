/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withEffects, toProps } from 'refract-callbag';
import {
	map,
	pipe,
	merge
} from 'callbag-basics';
import of from 'callbag-of';

class MediaLibrary extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { openMediaBrowser } = this.props;

		return this.props.children( {
			openMediaBrowser
		} );
	}
}

/**
 * The function that controls the stream of side-effects.
 *
 * @param  {Object} component
 * @return {Object}
 */
function aperture( component ) {
	const mount$ = component.mount;
	const unmount$ = component.unmount;
	const [ openMediaBrowserEvent$, openMediaBrowser ] = component.useEvent( 'openMediaBrowserEvent' );

	return merge(
		pipe(
			mount$,
			map( () => ( {
				type: 'COMPONENT_MOUNTED'
			} ) )
		),

		pipe(
			unmount$,
			map( () => ( {
				type: 'COMPONENT_UNMOUNTED'
			} ) )
		),

		pipe(
			of( {
				openMediaBrowser: openMediaBrowser
			} ),
			map( toProps )
		),

		pipe(
			openMediaBrowserEvent$,
			map( ( payload ) => ( {
				type: 'OPEN_MEDIA_BROWSER',
				payload
			} ) )
		)
	);
}

/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */
function handler( props ) {
	let mediaBrowser = null;

	return function( effect ) {
		switch ( effect.type ) {
			case 'COMPONENT_MOUNTED':
				const { onSelect, typeFilter } = props;

				if ( ! onSelect ) {
					return;
				}

				mediaBrowser = wp.media( {
					title: props.title,
					library: {
						type: typeFilter
					},
					button: {
						text: props.buttonLabel
					},
					multiple: props.multiple
				} );

				mediaBrowser.on( 'select', () => {
					const file = mediaBrowser.state()
						.get( 'selection' )
						.toJSON();

					onSelect( file );
				} );

				break;
			case 'OPEN_MEDIA_BROWSER':
				if ( mediaBrowser ) {
					mediaBrowser.open();
				}

				break;
			case 'COMPONENT_UNMOUNTED':
				mediaBrowser = null;

				break;
		}
	};
}

const applyWithEffects = withEffects( aperture, { handler } );

export default compose(
	applyWithEffects
)( MediaLibrary );
