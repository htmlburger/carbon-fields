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
		this.initEditor(this.props);
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		this.destroyEditor();
	}

	/**
	 * Render an empty `div` that will act as a placeholder.
	 *
	 * @return {React.Element}
	 */
	render() {
		const { id, children } = this.props;

		return <div id={`wp-${id}-wrap`} className="carbon-wysiwyg wp-editor-wrap tmce-active" data-toolbar="full">
			<div id={`wp-${id}-media-buttons`} className="hide-if-no-js wp-media-buttons">
				<a href="#" className="button insert-media add_media" data-editor={id} title="Add Media">
					<span className="wp-media-buttons-icon"></span> Add Media
				</a>
			</div>

			<div className="wp-editor-tabs">
				<button type="button" id={`${id}-tmce`} className="wp-switch-editor switch-tmce" data-wp-editor-id={id}>
					Visual
				</button>

				<button type="button" id={`${id}-html`} className="wp-switch-editor switch-html" data-wp-editor-id={id}>
					Text
				</button>
			</div>

			<div id={`wp-${id}-editor-container`} className="wp-editor-container">
				{children}
			</div>
		</div>;
	}

	/**
	 * Initialize the WYSIWYG editor.
	 *
	 * @param  {Object} props
	 * @return {void}
	 */
	initEditor(props) {
		const editorSetup = (editor) => {
			this.editor = editor;

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

		// Force the initialization of the quick tags.
		window.QTags._buttonsInit();
	}

	/**
	 * Destroy the instance of TinyMCE editor.
	 *
	 * @return {void}
	 */
	destroyEditor() {
		// Remove the editor.
		this.editor.remove();

		// Remove the quick tags.
		delete window.QTags.instances[this.props.id];

		this.editor = null;
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
