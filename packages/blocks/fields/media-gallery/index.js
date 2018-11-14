/**
 * External dependencies.
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { Component } from '@wordpress/element';
import { MediaPlaceholder } from '@wordpress/editor';
import { BaseControl } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import './style.scss';

class MediaGalleryField extends Component {
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

	handleMediaItemRemove = ( index ) => {
		const {
			name,
			value,
			onChange
		} = this.props;

		value.splice( index, 1 );

		onChange( name, value );
	}

	/**
	 * Handles the media selection.
	 *
	 * @param  {Array} items
	 * @return {void}
	 */
	onSelectImages = ( items ) => {
		const {
			name,
			value,
			onChange,
			fetchMediaItemData
		} = this.props;

		items.map( ( item ) => {
			fetchMediaItemData( item.id );
		} );

		onChange( name, [ ...value, ...items.map( ( item ) => item.id ) ] );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			value,
			mediaData,
			selectedItem
		} = this.props;

		return (
			<BaseControl
				className="cf-field-media-gallery"
			>
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
												<svg aria-hidden="true" role="img" focusable="false" className="dashicon dashicons-no-alt" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
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
								</li> : ''
						);
					} ) }
				</ul>

				<MediaPlaceholder
					icon="format-gallery"
					// className={ className }
					labels={ {
						title: __( 'Media Gallery' ),
						instructions: __( 'Drag images, upload new ones or select files from your library.' )
					} }
					onSelect={ this.onSelectImages }
					// accept="image/*"
					// allowedTypes={ ALLOWED_MEDIA_TYPES }
					multiple
					// notices={ noticeUI }
					// onError={ noticeOperations.createErrorNotice }
				/>
			</BaseControl>
		);
	}
}

addFilter( 'carbon-fields.media_gallery-field.block', 'carbon-fields/blocks', ( OriginalMediaGalleryField ) => ( props ) => {
	return (
		<OriginalMediaGalleryField { ...props }>
			{ ( {
				field,
				name,
				value,
				mediaData,
				handleChange,
				setState,
				selectedItem,
				fetchMediaItemData
			} ) => (
				<MediaGalleryField
					field={ field }
					name={ name }
					value={ value }
					mediaData={ mediaData }
					onChange={ handleChange }
					setState={ setState }
					selectedItem={ selectedItem }
					fetchMediaItemData={ fetchMediaItemData }
				/>
			) }
		</OriginalMediaGalleryField>
	);
} );
