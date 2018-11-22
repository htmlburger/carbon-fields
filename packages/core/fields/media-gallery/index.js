/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { compose, withState } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import './style.scss';
import FieldBase from '../../components/field-base';
import MediaLibrary from '../../components/media-library';
import fetchAttachmentsData from '../../utils/fetch-attachments-data';

class MediaGalleryField extends Component {
	/**
	 * Lifecycle Hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		const { value } = this.props;

		if ( value ) {
			fetchAttachmentsData( value ).then( ( attachmentsData ) => {
				this.handleAttachmentsDataChange( attachmentsData );
			} );
		}
	}

	/**
	 * Handles the attachments meta set.
	 *
	 * @param  {Object} attachmentsData
	 * @return {void}
	 */
	handleAttachmentsDataChange = ( attachmentsData ) => {
		this.props.setState( { attachmentsData } );
	}

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
			value
		} = this.props;

		onChange( id, [ ...value, ...attachments.map( ( attachment ) => attachment.id ) ] );

		this.handleAttachmentsDataChange( attachments );
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

		value.splice( index, 1 );

		onChange( id, value );
	}

	/**
	 * Handles the media item selection.
	 *
	 * @param  {number} itemId
	 * @return {void}
	 */
	handleAttachmentSelect = ( itemId ) => {
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
			id,
			field,
			name,
			value,
			attachmentsData,
			selectedItem,
			buttonLabel,
			mediaLibraryButtonLabel,
			mediaLibraryTitle
		} = this.props;

		return (
			<FieldBase id={ id } field={ field } >
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
									<ul className="cf-media-gallery__list">
										{ value.map( ( id, index ) => { // eslint-disable-line no-shadow
											const attachment = attachmentsData.find( ( attachmentData ) => attachmentData.id === id );
											const className = [ 'cf-media-gallery__item' ];

											if ( attachment ) {
												className.push( `cf-media-gallery__item--${ attachment.type }` );
											}

											if ( selectedItem === index ) {
												className.push( 'cf-media-gallery__item--selected' );
											}

											return (
												attachment
													? <li className={ className.join( ' ' ) } key={ index } onClick={ () => this.handleAttachmentSelect( index ) }>
														<div className="cf-media-gallery__item-inner">
															<div className="cf-media-gallery__item-preview">
																{
																	attachment.type === 'image'
																		? (
																			<img
																				className="cf-media-gallery__item-thumb"
																				src={ attachment.sizes.thumbnail.url }
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
													</li> : ''
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
			</FieldBase>
		);
	}
}

const applyWithState = withState( {
	attachmentsData: [],
	selectedItem: null
} );

export default compose(
	applyWithState
)( MediaGalleryField );
