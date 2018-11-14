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

						return (
							mediaItem
								? <li className={ `cf-field-media-gallery__list-item ${ selectedItem === index ? 'cf-field-media-gallery__list-item--selected' : '' }` } key={ index } onClick={ () => this.handleMediaItemSelect( index ) }>
									<figure tabIndex="-1">
										<img src={ mediaItem.source_url } data-id={ mediaItem.id } />
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
