<?php 

namespace Carbon_Fields\Field;

/**
 * WYSIWYG rich text area field class.
 */
class Rich_Text_Field extends Textarea_Field {
	protected $lazyload = true;
	public static $initialized = false;

	/**
	 * Admin initialization actions.
	 */
	public function admin_init() {
		if ( ! self::$initialized ) {
			self::$initialized = true;

			add_action( 'admin_footer', array( $this, 'editor_init' ) );
		}
	}

	/**
	 * The main Underscore template of this field.
	 */
	public function template() {
		?>
		<div id="wp-{{{ id }}}-wrap" class="carbon-wysiwyg wp-editor-wrap tmce-active" data-toolbar="full">
			<div id="wp-{{{ id }}}-editor-tools" class="wp-editor-tools">
				<div id="wp-{{{ id }}}-media-buttons" class="hide-if-no-js wp-media-buttons">
					<a href="#" class="button insert-media add_media" data-editor="{{{ id }}}" title="<?php _e( 'Add Media', 'carbon_fields' ); ?>">
						<span class="wp-media-buttons-icon"></span> <?php _e( 'Add Media', 'carbon_fields' ); ?>
					</a>
					<?php
						remove_action( 'media_buttons', 'media_buttons' );
						do_action( 'media_buttons' );
						add_action( 'media_buttons', 'media_buttons' );
					?>
				</div>
			</div>
			<div class="wp-editor-tabs">
				<button type="button" id="{{{ id }}}-tmce" class="wp-switch-editor switch-tmce" data-wp-editor-id="{{{ id }}}">
					<?php _e( 'Visual', 'carbon_fields' ); ?>
				</button>
				<button type="button" id="{{{ id }}}-html" class="wp-switch-editor switch-html" data-wp-editor-id="{{{ id }}}">
					<?php _e( 'Text', 'carbon_fields' ); ?>
				</button>
			</div>
			<div id="wp-{{{ id }}}-editor-container" class="wp-editor-container">
				<textarea id="{{{ id }}}" class="wp-editor-area" name="{{{ name }}}">{{ value }}</textarea>
			</div>
		</div>
		<?php
	}

	/**
	 * Display the editor.
	 * 
	 * Instead of enqueueing all required scripts and stylesheets and setting up TinyMCE,
	 * wp_editor() automatically enqueues and sets up everything.
	 */
	public function editor_init() {
		?>
		<div style="display:none;">
			<?php
				$settings = array(
					'tinymce' => array(
						'resize' => true,
						'wp_autoresize_on' => true,
					)
				);

				add_filter( 'user_can_richedit', '__return_true' );
				wp_editor( '', 'carbon_settings', $settings );
				remove_filter( 'user_can_richedit', '__return_true' );
			?>
		</div>
		<?php
	}
}
