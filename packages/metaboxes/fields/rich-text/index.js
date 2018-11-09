/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { isString } from 'lodash';
import cx from 'classnames';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';

class RichTextField extends Component {
	/**
	 * Define the project base properties
	 *
	 * @return {void}
	 */
	constructor() {
		super();

		this.node = null;
		this.editor = null;
		this.cancelResizeObserver = null;
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		setTimeout( this.initEditor, 100 );
	}

	/**
	 * Lifecycle hook.
	 *
	 * @param  {Object} nextProps
	 * @return {void}
	 */
	componentDidUpdate( nextProps ) {
		const { value } = nextProps;

		// TODO Investigate dragging and handle dragging action

		if ( this.editor && this.editor.getContent() !== value ) {
			this.editor.setContent( value );
		}
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	// componentWillUnmount() {
	// 	this.destroyEditor();
	// }

	/**
	 * Handles the change of the input.
	 *
	 * @param  {Object|string} eventOrValue
	 * @return {void}
	 */
	handleChange = ( eventOrValue ) => {
		const { field, onChange } = this.props;

		onChange(
			field.id,
			isString( eventOrValue )
				? eventOrValue
				: eventOrValue.target.value
		);
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field, name } = this.props;

		const classes = [
			'carbon-wysiwyg',
			'wp-editor-wrap',
			{ 'tmce-active': field.rich_editing },
			{ 'html-active': ! field.rich_editing }
		];

		return (
			<FieldBase field={ field } >
				<div
					id={ `wp-${ field.id }-wrap` }
					className={ cx( classes ) }
					ref={ ( node ) => this.editorNode = node }
				>
					{ field.media_buttons && (
						<div id={ `wp-${ field.id }-media-buttons` } className="hide-if-no-js wp-media-buttons">
							<span dangerouslySetInnerHTML={ { __html: field.media_buttons } }></span>
						</div>
					) }

					{ field.rich_editing && (
						<div className="wp-editor-tabs">
							<button type="button" id={ `${ field.id }-tmce` } className="wp-switch-editor switch-tmce" data-wp-editor-id={ field.id }>
								{ __( 'Visual' ) }
							</button>

							<button type="button" id={ `${ field.id }-html` } className="wp-switch-editor switch-html" data-wp-editor-id={ field.id }>
								{ __( 'Text' ) }
							</button>
						</div>
					) }

					<div id={ `wp-${ field.id }-editor-container` } className="wp-editor-container">
						<textarea
							className="regular-text"
							id={ field.id }
							name={ name }
							onChange={ this.handleChange }
							{ ...field.attributes }
						/>
					</div>
				</div>
			</FieldBase>
		);
	}

	/**
	 * Initialize the WYSIWYG editor.
	 *
	 * @return {void}
	 */
	initEditor = () => {
		const { field } = this.props;

		if ( field.rich_editing ) {
			const editorSetup = ( editor ) => {
				this.editor = editor;

				editor.on( 'blur change', () => {
					if ( editor.isDirty() ) {
						this.handleChange( editor.getContent() );
					}
				} );

				// this.cancelResizeObserver = observeResize(
				// 	this.node,
				// 	debounce(() => {
				// 		this.editor.execCommand( 'wpAutoResize', null, null, { skip_focus: true } );
				// 	}, 100)
				// );
			};

			const editorOptions = {
				...window.tinyMCEPreInit.mceInit.carbon_settings,
				selector: `#${ field.id }`,
				setup: editorSetup
			};

			window.tinymce.init( editorOptions );
		}

		const quickTagsOptions = {
			...window.tinyMCEPreInit,
			id: field.id
		};

		window.quicktags( quickTagsOptions );

		// Force the initialization of the quick tags.
		window.QTags._buttonsInit();
	}

	/**
	 * Destroy the instance of the WYSIWYG editor.
	 *
	 * @return {void}
	 */
	destroyEditor() {
		if ( this.editor ) {
			this.cancelResizeObserver();
			this.editor.remove();

			this.node = null;
			this.editor = null;
		}

		delete window.QTags.instances[ this.props.field.id ];
	}
}

addFilter( 'carbon-fields.rich_text-field.metabox', 'carbon-fields/metaboxes', ( OriginalRichTextField ) => withField( ( props ) => {
	return (
		<OriginalRichTextField { ...props }>
			{ ( {
				field,
				name,
				value,
				handleChange
			} ) => (
				<RichTextField
					field={ field }
					name={ name }
					value={ value }
					onChange={ handleChange }
				/>
			) }
		</OriginalRichTextField>
	);
} ) );
