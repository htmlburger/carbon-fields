<?php

namespace Carbon_Fields\Field;

use Symfony\Component\Yaml\Yaml;

/**
 * Association field class.
 * Allows selecting and manually sorting entries from various types:
 *  - Posts
 *  - Terms
 *  - Users
 *  - Comments
 */
class Icon_Field extends Predefined_Options_Field {
	private static $fontawesome_options_cache = array();

	private static $dashicons_options_cache = array();

	public $none_label = '';

	public $button_label = '';

	/**
	 * Admin initialization actions
	 */
	public function admin_init() {
		$this->none_label = __( 'None', 'carbon-fields' );
		$this->button_label = __( 'Select Icon', 'carbon-fields' );
	}

	/**
	 * Hook administration scripts and styles.
	 */
	public static function admin_enqueue_scripts() {
		wp_enqueue_style( 'fontawesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array(), '4.7.0' );
	}

	public function get_default_options() {
		$options = array(
			''=>array(
				'name' => $this->none_label,
				'id' => '',
				'categories' => array(),
				'class'=>'fa',
				'contents'=>'&nbsp;',
			),
		);
		return $options;
	}

	public static function get_fontawesome_options() {
		if ( empty( static::$fontawesome_options_cache ) ) {
			$data = Yaml::parse( file_get_contents( \Carbon_Fields\DIR . DIRECTORY_SEPARATOR . 'assets' . DIRECTORY_SEPARATOR . 'fontawesome' . DIRECTORY_SEPARATOR . 'fontawesome.yml' ) );
			foreach ( $data['icons'] as $icon ) {
				static::$fontawesome_options_cache[ $icon['id'] ] = array(
					'name'=>$icon['name'],
					'id'=>$icon['id'],
					'categories'=>$icon['categories'],
					'class'=>'fa fa-' . $icon['id'],
					'contents'=>'',
				);
			}
		}
		return static::$fontawesome_options_cache;
	}

	public function add_fontawesome_options() {
		return $this->add_options( static::get_fontawesome_options() );
	}

	public static function get_dashicons_options() {
		if ( empty( static::$dashicons_options_cache ) ) {
			$data = include( \Carbon_Fields\DIR . DIRECTORY_SEPARATOR . 'assets' . DIRECTORY_SEPARATOR . 'dashicons' . DIRECTORY_SEPARATOR . 'dashicons.php' );
			foreach ( $data as $icon ) {
				static::$dashicons_options_cache[ $icon ] = array(
					'name'=>$icon,
					'id'=>$icon,
					'categories'=>array(),
					'class'=>'dashicons-before ' . $icon,
					'contents'=>'',
				);
			}
		}
		return static::$dashicons_options_cache;
	}

	public function add_dashicons_options() {
		return $this->add_options( static::get_dashicons_options() );
	}

	/**
	 * Check if there are callbacks and populate the options
	 */
	protected function load_options() {
		if ( empty( $this->options ) ) {
			return false;
		}

		if ( is_callable( $this->options ) ) {
			$options = call_user_func( $this->options );
			if ( ! is_array( $options ) ) {
				$options = array();
			}
		} else {
			$options = $this->options;
		}

		$this->options = $options;
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );
		$this->load_options();

		$options = $this->options;
		if ( empty( $options ) ) {
			$options = static::get_fontawesome_options();
		}
		$options = $this->get_default_options() + $options;
		$options = apply_filters( 'carbon_icon_options', $options, $this->get_name() );

		$field_data = array_merge( $field_data, array(
			'options' => $options,
			'button_label' => $this->button_label,
		) );

		return $field_data;
	}

	/**
	 * The main Underscore template of this field.
	 */
	public function template() {
		?>
		<div class="carbon-icon-container">
			<input type="hidden" name="{{{ name }}}" value="{{{ value }}}" class="carbon-icon-value" />
			<a href="#" class="carbon-icon-preview">
				<i class="{{{ (value && typeof options[value] !== 'undefined') ? options[value].class : 'hidden' }}}"></i>
				<span class="button">{{{ button_label }}}</span>
			</a>

			<div class="carbon-icon-popup hidden">
				<div class="carbon-icon-search dashicons-before dashicons-search">
					<input type="text" value="" placeholder="<?php esc_attr_e( 'Search...', 'carbon-fields' ); ?>" />
				</div>
				<div class="carbon-icon-scroll">
					<ul class="carbon-icon-list">
						<# if (options) { #>
							<# _.each(options, function(item) { #>
								<li class="carbon-icon-icon-container carbon-icon-icon-container-{{{ item.id }}}">
									<a href="#" class="carbon-icon-icon-trigger {{{ value == item.id ? 'active' : '' }}}" data-value="{{{ item.id }}}">
										<i class="{{{ item.class }}}">{{{ item.contents }}}</i>
										<span>{{{ item.name }}}</span>
									</a>
								</li>
							<# }); #>
						<# } #>
					</ul>
				</div>
			</div>
		</div>
		<?php
	}
}
