/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withEffects, toProps } from 'refract-callbag';
import {
	map,
	pipe,
	merge,
	combine
} from 'callbag-basics';
import of from 'callbag-of';

class MediaLibrary extends Component {
	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		const { onSelect, typeFilter } = this.props;

		this.props.initMediaBrowser( {
			onSelect,
			typeFilter
		} );
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		this.props.destroyMediaBrowser();
	}

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
	const actions = [
		{ event: 'initMediaBrowserEvent', prop: 'initMediaBrowser', type: 'INIT_MEDIA_BROWSER' },
		{ event: 'openMediaBrowserEvent', prop: 'openMediaBrowser', type: 'OPEN_MEDIA_BROWSER' },
		{ event: 'destroyMediaBrowserEvent', prop: 'destroyMediaBrowser', type: 'DESTROY_MEDIA_BROWSER' }
	].map( ( actionData ) => {
		const [ actionChannel$, action ] = component.useEvent( actionData.event );

		return {
			...actionData,
			action,
			channel$: actionChannel$
		};
	} );

	const combined$ = pipe(
		combine( ...actions.map( ( { action, prop } ) => of( {
			action,
			prop
		} ) ) ),
		map( ( combinedActions ) => toProps( combinedActions.reduce(
			( acc, curr ) => ( {
				...acc,
				[ curr.prop ]: curr.action
			} ), {}
		) ) )
	);

	return merge(
		combined$,
		...actions.map( ( { channel$, type } ) => pipe(
			channel$,
			map( ( payload ) => ( {
				type,
				payload
			} ) )
		) )
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
			case 'INIT_MEDIA_BROWSER':
				const { onSelect, typeFilter } = effect.payload;

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
			case 'DESTROY_MEDIA_BROWSER':
				mediaBrowser = null;

				break;
		}
	};
}

const applyWithEffects = withEffects( aperture, { handler } );

export default compose(
	applyWithEffects
)( MediaLibrary );
