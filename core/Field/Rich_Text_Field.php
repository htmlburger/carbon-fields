<?php

namespace Carbon_Fields\Field;

/**
 * WYSIWYG rich text area field class.
 */
class Rich_Text_Field extends Textarea_Field {
	/**
	 * All Rich Text Fields settings references.
	 * Used to prevent duplicated wp_editor initialization with the same settings.
	 *
	 * @var array
	 */
	protected static $settings_references = [];

	/**
	 * WP Editor settings
	 *
	 * @link https://developer.wordpress.org/reference/classes/_wp_editors/parse_settings/
	 * @var array
	 */
	protected $settings = array(
		'media_buttons' => true,
		'tinymce' => array(
			'resize' => true,
			'wp_autoresize_on' => true,
		),
	);

	/**
	 * MD5 Hash of the instance settings
	 *
	 * @var string
	 */
	protected $settings_hash = null;

	/**
	 * WP Editor settings reference
	 *
	 * @var string
	 */
	protected $settings_reference;

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
	 * Calc the settings hash
	 *
	 * @return string
	 */
	protected function calc_settings_hash() {
		return md5( json_encode( $this->settings ) );
	}

	/**
	 * Get the editor settings reference
	 *
	 * @return string
	 */
	protected function get_settings_reference() {
		if ( is_null( $this->settings_hash ) ) {
			$this->settings_hash = $this->calc_settings_hash();
		}

		return 'carbon_fields_settings_' . $this->settings_hash;
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
		if( in_array( $this->get_settings_reference(), self::$settings_references ) ) {
			return;
		}

		self::$settings_references[] = $this->get_settings_reference();
		?>
		<div style="display:none;">
			<?php
			add_filter( 'user_can_richedit', '__return_true' );
			wp_editor( '', $this->get_settings_reference(), $this->settings );
			remove_filter( 'user_can_richedit', '__return_true' );
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

		$media_buttons = '';
		if ( $this->settings['media_buttons'] ) {
			ob_start();
			remove_action( 'media_buttons', 'media_buttons' );

			$this->upload_image_button_html();

			do_action( 'media_buttons' );

			add_action( 'media_buttons', 'media_buttons' );

			$media_buttons = apply_filters( 'crb_media_buttons_html', ob_get_clean(), $this->base_name );
		}

		$field_data = array_merge( $field_data, array(
			'rich_editing' => user_can_richedit() && ! empty( $this->settings['tinymce'] ),
			'media_buttons' => $media_buttons,
			'settings_reference' => $this->get_settings_reference(),
		) );

		return $field_data;
	}
}