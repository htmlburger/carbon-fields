/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { compose, withState } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
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
			field,
			name,
			value,
			attachmentsData,
			selectedItem
		} = this.props;

		return (
			<FieldBase field={ field } >
				<MediaLibrary
					onSelect={ this.handleSelect }
					multiple={ true }
					title={ __( 'Choose items for the media gallery' ) }
					buttonLabel={ __( 'Add Items' ) }
				>
					{
						( { openMediaBrowser } ) => {
							return <div>
								<ul className="cf-field-media-gallery__list">
									{ value.map( ( id, index ) => {
										const attachment = attachmentsData.find( ( attachmentData ) => attachmentData.id === id );
										const className = [ 'cf-field-media-gallery__list-item' ];

										if ( attachment ) {
											className.push( `cf-field-media-gallery__list-item--${ attachment.type }` );
										}

										if ( selectedItem === index ) {
											className.push( 'cf-field-media-gallery__list-item--selected' );
										}

										return (
											attachment
												? <li className={ className.join( ' ' ) } key={ index } onClick={ () => this.handleAttachmentSelect( index ) }>
													<figure tabIndex="-1">
														<div className="cf-field-media-gallery__list-item__actions">
															<button type="button" aria-label="Remove File" className="components-button components-icon-button blocks-gallery-item__remove" onClick={ () => this.handleAttachmentRemove( index ) }>
																<svg aria-hidden="true" role="img" className="dashicon dashicons-no-alt" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
																	<path d="M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"></path>
																</svg>
															</button>
														</div>

														{
															attachment.type === 'image'
																? <img src={ attachment.sizes.medium.url } data-id={ attachment.id } />
																: <span className="dashicons dashicons-format-aside"></span>
														}

														{
															attachment.type !== 'image'
																? <figcaption><span>{ attachment.filename }</span></figcaption>
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
									{ __( 'Add Items' ) }
								</button>
							</div>;
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
