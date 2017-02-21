<?php

namespace Carbon_Fields\Field;

/**
 * WYSIWYG rich text area field class.
 */
class Rich_Text_Field extends Textarea_Field {
	protected $lazyload = true;

	/**
	 * Admin initialization actions.
	 */
	public function admin_init() {
		add_action( 'admin_footer', array( get_class( $this ), 'editor_init' ) );
	}

	/**
	 * Display the editor.
	 *
	 * Instead of enqueueing all required scripts and stylesheets and setting up TinyMCE,
	 * wp_editor() automatically enqueues and sets up everything.
	 */
	public static function editor_init() {
		?>
		<div style="display:none;">
			<?php
				$settings = array(
					'tinymce' => array(
						'resize' => true,
						'wp_autoresize_on' => true,
					),
				);

				add_filter( 'user_can_richedit', '__return_true' );
				wp_editor( '', 'carbon_settings', $settings );
				remove_filter( 'user_can_richedit', '__return_true' );
			?>
		</div>
		<?php
	}
}
