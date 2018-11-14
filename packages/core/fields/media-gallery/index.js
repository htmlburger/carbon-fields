/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { compose, withState } from '@wordpress/compose';

class MediaGalleryField extends Component {
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
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		const {
			value
		} = this.props;

		value.forEach( ( mediaId ) => {
			this.fetchMediaItemData( mediaId );
		} );
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
			children,
			onChange,
			mediaData,
			setState,
			selectedItem
		} = this.props;

		return children( {
			field,
			name,
			value,
			handleChange: onChange,
			mediaData,
			setState,
			selectedItem,
			fetchMediaItemData: this.fetchMediaItemData
		} );
	}
}

const applyWithState = withState( {
	mediaData: {},
	selectedItem: null
} );

export default compose(
	applyWithState
)( MediaGalleryField );
