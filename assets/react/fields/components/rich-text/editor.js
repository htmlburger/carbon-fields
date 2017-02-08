/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class RichTextEditor extends React.Component {
	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.node = ReactDOM.findDOMNode(this);

		this.renderEditor(this.props);
		this.initEditor(this.props);
	}

	/**
	 * Render an empty `div` that will act as a placeholder.
	 *
	 * @return {React.Element}
	 */
	render() {
		return <div />;
	}

	/**
	 * Open the portal and render the markup for the editor.
	 *
	 * @param  {Object} props
	 * @return {void}
	 */
	renderEditor(props) {
		ReactDOM.render(
			<div id={`wp-${props.id}-wrap`} className="carbon-wysiwyg wp-editor-wrap tmce-active" data-toolbar="full">
				<div id={`wp-${props.id}-media-buttons`} className="hide-if-no-js wp-media-buttons">
					<a href="#" className="button insert-media add_media" data-editor={props.id} title="Add Media">
						<span className="wp-media-buttons-icon"></span> Add Media
					</a>
				</div>

				<div className="wp-editor-tabs">
					<button type="button" id={`${props.id}-tmce`} className="wp-switch-editor switch-tmce" data-wp-editor-id={props.id}>
						Visual
					</button>

					<button type="button" id={`${props.id}-html`} className="wp-switch-editor switch-html" data-wp-editor-id={props.id}>
						Text
					</button>
				</div>

				<div id={`wp-${props.id}-editor-container`} className="wp-editor-container">
					{props.children}
				</div>
			</div>
		, this.node);
	}

	/**
	 * Initialize the WYSIWYG editor.
	 *
	 * @param  {Object} props
	 * @return {void}
	 */
	initEditor(props) {
		const editorSetup = (editor) => {
			editor.on('blur', () => {
				props.onChange(editor.getContent());
			});
		};

		const editorOptions = {
			...window.tinyMCEPreInit.mceInit.carbon_settings,
			selector: `#${props.id}`,
			setup: editorSetup,
		};

		window.tinymce.init(editorOptions);

		const quickTagsOptions = {
			...window.tinyMCEPreInit,
			id: props.id,
		};

		window.quicktags(quickTagsOptions);
	}
}

/**
 * Validate the props.
 *
 * @type {Object}
 */
RichTextEditor.propTypes = {
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default RichTextEditor;
