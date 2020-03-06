<?php

namespace Carbon_Fields\Field;

/**
 * WYSIWYG rich text area field class.
 */
class Rich_Text_Field extends Textarea_Field {
	/**
	 * Total number of Rich_Text_Field objects
	 *
	 * @var integer
	 */
	private static $instance_count = 1;

	/**
	 * Current instance index
	 *
	 * @var integer
	 */
	protected $editor_index;

	/**
	 * WP Editor settings
	 *
	 * @link https://developer.wordpress.org/reference/classes/_wp_editors/parse_settings/
	 * @var array
	 */
	protected $settings = array(
		'tinymce' => array(
			'resize' => true,
			'wp_autoresize_on' => true,
		),
	);

	/**
	* Set the editor settings
	*
	* @param  array $settings
	* @return self  $this
	*/
	public function set_settings( $settings ) {
		$this->settings = array_merge( $this->settings, $settings );

		return $this;
	}

	/**
	 * {@inheritDoc}
	 */
	public function activate() {
		parent::activate();

		add_action( 'admin_footer', array( $this, 'editor_init' ) );
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
			add_filter( 'user_can_richedit', '__return_true' );
			wp_editor( '', 'carbon_settings_' . self::$instance_count, $this->settings );
			remove_filter( 'user_can_richedit', '__return_true' );

			$this->editor_index = self::$instance_count;
			self::$instance_count++;
			?>
		</div>
		<?php
	}

	/**
	 * Display Upload Image Button
	 *
	 */
	public function upload_image_button_html() {
		$upload_image_button = '<a href="#" class="button insert-media add_media" data-editor="<%- id %>" title="Add Media">
			<span class="wp-media-buttons-icon"></span> Add Media
		</a>';
		echo apply_filters( 'crb_upload_image_button_html', $upload_image_button, $this->base_name );
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		ob_start();
		remove_action( 'media_buttons', 'media_buttons' );

		$this->upload_image_button_html();

		do_action( 'media_buttons' );

		add_action( 'media_buttons', 'media_buttons' );

		$media_buttons = apply_filters( 'crb_media_buttons_html', ob_get_clean(), $this->base_name );

		$field_data = array_merge( $field_data, array(
			'rich_editing' => user_can_richedit(),
			'media_buttons' => $media_buttons,
			'editor_index' => $this->editor_index,
		) );

		return $field_data;
	}
}