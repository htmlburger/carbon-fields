/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { compose, withState } from '@wordpress/compose';
import { withEffects, toProps } from 'refract-callbag';
import {
	map,
	pipe,
	merge,
	combine
} from 'callbag-basics';
import of from 'callbag-of';

/**
 * Internal dependencies.
 */
import FieldBase from '../../components/field-base';

class MediaGalleryField extends Component {
	/**
	 * Lifecycle hook
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.props.initMediaBrowser( this.handleSelect );

		const {
			value
		} = this.props;

		value.forEach( ( mediaId ) => {
			this.fetchMediaItemData( mediaId );
		} );
	}

	/**
	 * Lifecycle hook
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		this.props.destroyMediaBrowser();
	}

	fetchMediaItemData = async ( id ) => {
		const {
			setState
		} = this.props;

		await window.wp.apiFetch( {
			path: `/wp/v2/media/${ id }`
		} ).then( ( response ) => {
			setState( {
				mediaData: {
					...this.props.mediaData,
					...{ [ id ]: response }
				}
			} );
		} );
	}

	/**
	 * Handles the media selection.
	 *
	 * @param  {Array} items
	 * @return {void}
	 */
	handleSelect = ( items ) => {
		const {
			id,
			value,
			onChange
		} = this.props;

		items.map( ( item ) => {
			this.fetchMediaItemData( item.id );
		} );

		onChange( id, [ ...value, ...items.map( ( item ) => item.id ) ] );
	}

	/**
	 * Handles the removal of an item.
	 *
	 * @param  {number} index
	 * @return {void}
	 */
	handleMediaItemRemove = ( index ) => {
		const {
			id,
			value,
			onChange
		} = this.props;

		value.splice( index, 1 );

		onChange( id, value );
	}

	/**
	 * Handles the media item selection.
	 *
	 * @param  {number} itemId
	 * @return {void}
	 */
	handleMediaItemSelect = ( itemId ) => {
		const {
			setState,
			selectedItem
		} = this.props;

		if ( selectedItem === itemId ) {
			setState( {
				selectedItem: null
			} );
		} else {
			setState( {
				selectedItem: itemId
			} );
		}
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			name,
			value,
			mediaData,
			selectedItem,
			openMediaBrowser
		} = this.props;

		return (
			<FieldBase field={ field } >
				<ul className="cf-field-media-gallery__list">
					{ value.map( ( id, index ) => {
						const mediaItem = mediaData[ id ] || null;
						const className = [ 'cf-field-media-gallery__list-item' ];

						if ( mediaItem ) {
							className.push( `cf-field-media-gallery__list-item--${ mediaItem.media_type }` );
						}

						if ( selectedItem === index ) {
							className.push( 'cf-field-media-gallery__list-item--selected' );
						}

						return (
							mediaItem
								? <li className={ className.join( ' ' ) } key={ index } onClick={ () => this.handleMediaItemSelect( index ) }>
									<figure tabIndex="-1">
										<div className="cf-field-media-gallery__list-item__actions">
											<button type="button" aria-label="Remove File" className="components-button components-icon-button blocks-gallery-item__remove" onClick={ () => this.handleMediaItemRemove( index ) }>
												<svg aria-hidden="true" role="img" className="dashicon dashicons-no-alt" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
													<path d="M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"></path>
												</svg>
											</button>
										</div>

										{
											mediaItem.media_type === 'image'
												? <img src={ mediaItem.source_url } data-id={ mediaItem.id } />
												: <span className="dashicons dashicons-format-aside"></span>
										}

										{
											mediaItem.media_type !== 'image'
												? <figcaption><span>{ mediaItem.title.rendered }</span></figcaption>
												: ''
										}
									</figure>

									<input
										type="hidden"
										name={ `${ name }[${ index }]` }
										value={ id }
										readOnly
									/>
								</li> : ''
						);
					} ) }
				</ul>

				<button type="button" className="button cf-metaboxes-file__browse" onClick={ openMediaBrowser }>
					Add Items
				</button>
			</FieldBase>
		);
	}
}

/**
 * The function that controls the stream of side-effects.
 *
 * @return {Function}
 */
function aperture() {
	return function( component ) {
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
	};
}

/**
 * The function that causes the side effects.
 *
 * @return {Function}
 */
function handler() {
	let mediaBrowser = null;

	return function( effect ) {
		switch ( effect.type ) {
			case 'INIT_MEDIA_BROWSER':
				const onSelect = effect.payload;

				if ( ! onSelect ) {
					return;
				}

				mediaBrowser = wp.media( {
					title: __( 'Choose items for the media gallery' ),
					button: {
						text: __( 'Add items' )
					},
					multiple: true
				} );

				mediaBrowser.on( 'select', () => {
					const items = mediaBrowser.state()
						.get( 'selection' )
						.toJSON();

					onSelect( items );
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

const applyWithState = withState( {
	mediaData: {},
	selectedItem: null
} );

const applyWitEffects = withEffects( handler )( aperture );

export default compose(
	applyWithState,
	applyWitEffects
)( MediaGalleryField );
