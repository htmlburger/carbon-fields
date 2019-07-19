/**
 * External dependencies.
 */
import produce from 'immer';
import { withEffects } from 'refract-callbag';
import { map, pipe } from 'callbag-basics';
import { Component, createRef } from '@wordpress/element';
import { withState, compose } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import './style.scss';
import MediaLibrary from '../../components/media-library';
import Sortable from '../../components/sortable';
import fetchAttachmentsData from '../../utils/fetch-attachments-data';

class MediaGalleryField extends Component {
	/**
	 * Keeps reference to the list that contains selected attachments.
	 *
	 * @type {Object}
	 */
	attachmentsList = createRef();

	/**
	 * Handles the file selection.
	 *
	 * @param  {Object} attachments
	 * @return {void}
	 */
	handleSelect = ( attachments ) => {
		const {
			id,
			onChange,
			setState,
			value
		} = this.props;

		onChange( id, [ ...value, ...attachments.map( ( attachment ) => attachment.id ) ] );

		setState( {
			attachmentsData: [ ...this.props.attachmentsData, ...attachments ]
		} );
	}

	/**
	 * Handles the removal of an item.
	 *
	 * @param  {number} index
	 * @return {void}
	 */
	handleAttachmentRemove = ( index ) => {
		const {
			id,
			value,
			onChange
		} = this.props;

		onChange( id, produce( value, ( draft ) => {
			draft.splice( index, 1 );
		} ) );
	}

	/**
	 * Handles the media item selection.
	 *
	 * @param  {number} itemId
	 * @return {void}
	 */
	handleAttachmentSelect = ( itemId ) => {
		const { setState } = this.props;

		setState( ( { selectedItem } ) => ( {
			selectedItem: selectedItem !== itemId ? itemId : null
		} ) );
	}

	/**
	 * Handles sorting of attachments.
	 *
	 * @param  {Object[]} attachments
	 * @return {void}
	 */
	handleSort = ( attachments ) => {
		const { id, onChange } = this.props;

		onChange( id, attachments );
	}
	
	/**
	 * Returns an URL to the attachment's thumbnail.
	 *
	 * @return {string}
	 */
	getAttachmentThumb( attachment ) {
		if ( attachment.sizes ) {
			const size = attachment.sizes.thumbnail || attachment.sizes.full;

			if ( size ) {
				return size.url;
			}
		}

		return attachment.url;
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			name,
			value,
			field,
			buttonLabel,
			mediaLibraryButtonLabel,
			mediaLibraryTitle,
			attachmentsData,
			selectedItem
		} = this.props;

		return (
			<Sortable
				items={ value }
				forwardedRef={ this.attachmentsList }
				options={ {
					handle: '.cf-media-gallery__item-name',
					forcePlaceholderSize: true
				} }
				onUpdate={ this.handleSort }
			>
				<MediaLibrary
					onSelect={ this.handleSelect }
					multiple={ true }
					title={ mediaLibraryTitle }
					buttonLabel={ mediaLibraryButtonLabel }
					typeFilter={ field.type_filter }
				>
					{
						( { openMediaBrowser } ) => {
							return (
								<div className="cf-media-gallery__inner">
									<ul className="cf-media-gallery__list" ref={ this.attachmentsList }>
										{ value.map( ( id, index ) => { // eslint-disable-line no-shadow
											const attachment = attachmentsData.find( ( attachmentData ) => attachmentData.id === id );
											const className = [ 'cf-media-gallery__item' ];

											if ( attachment ) {
												className.push( `cf-media-gallery__item--${ attachment.type }` );
											}

											if ( selectedItem === index ) {
												className.push( 'cf-media-gallery__item--selected' );
											}

											if ( ! attachment ) {
												return null;
											}

											return (
												<li className={ className.join( ' ' ) } key={ index } onClick={ () => this.handleAttachmentSelect( index ) }>
													<div className="cf-media-gallery__item-inner">
														<div className="cf-media-gallery__item-preview">
															{
																attachment.type === 'image'
																	? (
																		<img
																			className="cf-media-gallery__item-thumb"
																			src={ this.getAttachmentThumb( attachment ) }
																		/>
																	)
																	: (
																		<img
																			className="cf-media-gallery__item-icon"
																			src={ attachment.icon }
																		/>
																	)
															}
														</div>

														<span className="cf-media-gallery__item-name">
															{ attachment.filename }
														</span>

														<button
															type="button"
															className="cf-media-gallery__item-remove dashicons-before dashicons-no-alt"
															onClick={ () => this.handleAttachmentRemove( index ) }
														></button>
													</div>

													<input
														type="hidden"
														name={ `${ name }[${ index }]` }
														value={ id }
														readOnly
													/>
												</li>
											);
										} ) }
									</ul>

									<div className="cf-media-gallery__actions">
										<button type="button" className="button cf-media-gallery__browse" onClick={ openMediaBrowser }>
											{ buttonLabel }
										</button>
									</div>
								</div>
							);
						}
					}
				</MediaLibrary>
			</Sortable>
		);
	}
}

function aperture( component ) {
	const mount$ = component.mount;

	return pipe( mount$, map( () => ( {
		type: 'COMPONENT_MOUNTED'
	} ) ) );
}

function handler( props ) {
	return function( effect ) {
		switch ( effect.type ) {
			case 'COMPONENT_MOUNTED':
				const { value, setState } = props;

				fetchAttachmentsData( value ).then( ( attachmentsData ) => {
					setState( {
						attachmentsData: [ ...props.attachmentsData, ...attachmentsData ]
					} );
				} );

				break;
		}
	};
}

const applyWithState = withState( {
	attachmentsData: [],
	selectedItem: null
} );

const applyWithEffects = withEffects( aperture, { handler } );

export default compose(
	applyWithState,
	applyWithEffects
)( MediaGalleryField );
