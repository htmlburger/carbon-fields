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

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'rich_editing' => user_can_richedit(),
		) );

		return $field_data;
	}
}
