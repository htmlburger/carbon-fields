/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import observeResize from 'observe-resize';
import { debounce } from 'lodash';

class RichTextEditor extends React.Component {
	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.node = null;
		this.initEditor();
	}

	/**
	 * Lifecycle hook.
	 *
	 * @param  {Object} nextProps
	 * @return {void}
	 */
	componentWillReceiveProps(nextProps) {
		const { content } = nextProps;

		// Destroy the editor because TinyMCE doesn't like to be
		// moved around DOM.
		if (!this.props.isDragging && nextProps.isDragging) {
			this.destroyEditor();
			return;
		}

		// Re-init the editor manually because the complex group wasn't sorted
		// and the component uses the same React instance.
		if (!this.editor && this.props.isDragging && !nextProps.isDragging) {
			this.initEditor();
		}

		if (this.editor && this.editor.getContent() !== content) {
			this.editor.setContent(content);
		}
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
		const { id, children, richEditing, mediaButtons } = this.props;
		const classes = [
			'carbon-wysiwyg',
			'wp-editor-wrap',
			{ 'tmce-active': richEditing },
			{ 'html-active': !richEditing },
		];

		return <div id={`wp-${id}-wrap`} className={cx(classes)} ref={node => this.node = node}>
			<div id={`wp-${id}-media-buttons`} className="hide-if-no-js wp-media-buttons">
				<a href="#" className="button insert-media add_media" data-editor={id} title="Add Media">
					<span className="wp-media-buttons-icon"></span> Add Media
				</a>
				<span dangerouslySetInnerHTML={{__html: mediaButtons}}></span>
			</div>

			{
				richEditing
				?	<div className="wp-editor-tabs">
						<button type="button" id={`${id}-tmce`} className="wp-switch-editor switch-tmce" data-wp-editor-id={id}>
							Visual
						</button>

						<button type="button" id={`${id}-html`} className="wp-switch-editor switch-html" data-wp-editor-id={id}>
							Text
						</button>
					</div>
				:	null
			}

			<div id={`wp-${id}-editor-container`} className="wp-editor-container">
				{children}
			</div>
		</div>;
	}

	/**
	 * Initialize the WYSIWYG editor.
	 *
	 * @return {void}
	 */
	initEditor() {
		window.requestAnimationFrame(() => {
			const { id, richEditing, onChange } = this.props;

			if (richEditing) {
				const editorSetup = (editor) => {
					this.editor = editor;

					editor.on('blur', () => {
						if (editor.isDirty()) {
							onChange(editor.getContent());
						}
					});

					this.cancelResizeObserver = observeResize(this.node, debounce(() => {
						this.editor.execCommand('mceAutoResize', null, null, {skip_focus: true});
					}, 100));
				};

				const editorOptions = {
					...window.tinyMCEPreInit.mceInit.carbon_settings,
					selector: `#${id}`,
					setup: editorSetup,
				};

				window.tinymce.init(editorOptions);
			}

			const quickTagsOptions = {
				...window.tinyMCEPreInit,
				id,
			};

			window.quicktags(quickTagsOptions);

			// Force the initialization of the quick tags.
			window.QTags._buttonsInit();
		});
	}

	/**
	 * Destroy the instance of the WYSIWYG editor.
	 *
	 * @return {void}
	 */
	destroyEditor() {
		if (this.editor) {
			this.cancelResizeObserver();
			this.editor.remove();

			this.node = null;
			this.editor = null;
		}

		delete window.QTags.instances[this.id];
	}
}

/**
 * Validate the props.
 *
 * @type {Object}
 */
RichTextEditor.propTypes = {
	id: PropTypes.string,
	richEditing: PropTypes.bool,
	isDragging: PropTypes.bool,
	onChange: PropTypes.func,
};

export default RichTextEditor;
