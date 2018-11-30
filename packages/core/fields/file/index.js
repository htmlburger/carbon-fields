/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import './style.scss';
import MediaLibrary from '../../components/media-library';
import fetchAttachmentsData from '../../utils/fetch-attachments-data';

class FileField extends Component {
	/**
	 * Define the component state
	 *
	 * @return {void}
	 */
	constructor() {
		super();

		this.state = {
			fileData: {}
		};
	}

	/**
	 * Lifecycle Hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		const {
			value
		} = this.props;

		if ( value ) {
			fetchAttachmentsData( [ value ] ).then( ( fileData ) => {
				this.handleFileMetaChange( fileData[ 0 ] );
			} );
		}
	}

	/**
	 * Handles the file meta set.
	 *
	 * @param  {Object} fileData
	 * @return {void}
	 */
	handleFileMetaChange = ( fileData ) => {
		this.setState( { fileData } );
	}

	/**
	 * Handles the clear action of the file field
	 *
	 * @return {void}
	 */
	handleClear = () => {
		const { id, onChange } = this.props;

		onChange( id, '' );

		this.handleFileMetaChange( {} );
	}

	/**
	 * Handles the file selection.
	 *
	 * @param  {Object} files
	 * @return {void}
	 */
	handleSelect = ( files ) => {
		const { id, onChange } = this.props;

		onChange( id, files[ 0 ].id );

		this.handleFileMetaChange( files[ 0 ] );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			value,
			name,
			field,
			buttonLabel,
			mediaLibraryButtonLabel,
			mediaLibraryTitle
		} = this.props;
		const { fileData } = this.state;

		return (
			<MediaLibrary
				onSelect={ this.handleSelect }
				multiple={ false }
				title={ mediaLibraryTitle }
				buttonLabel={ mediaLibraryButtonLabel }
				typeFilter={ field.type_filter }
			>
				{
					( { openMediaBrowser } ) => {
						return <div className="cf-file__inner">
							<input
								type="hidden"
								name={ name }
								value={ value }
								readOnly
							/>

							{ value && (
								<div className="cf-file__content">
									<div className="cf-file__preview">
										<img src={ fileData.sizes ? fileData.sizes.thumbnail.url : fileData.icon } className="cf-file__image" />

										<button type="button" className="cf-file__remove dashicons-before dashicons-no-alt" onClick={ this.handleClear }></button>
									</div>

									<span className="cf-file__name" title={ fileData.filename }>
										{ fileData.filename }
									</span>
								</div>
							) }

							<button type="button" className="button cf-file__browse" onClick={ openMediaBrowser }>
								{ buttonLabel }
							</button>
						</div>;
					}
				}
			</MediaLibrary>
		);
	}
}

export default FileField;
