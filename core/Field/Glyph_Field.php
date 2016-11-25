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
class Glyph_Field extends Field {
	static $options = array();

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
		wp_enqueue_style( 'fontawesome', \Carbon_Fields\URL . '/assets/fontawesome/font-awesome.min.css', array(), '4.7.0' );
	}

	/**
	 * Generate the item options for the glyph field.
	 *
	 * @return array $options The selectable options of the glyph field.
	 */
	public function get_options() {
		if ( empty( $options ) ) {
			$data = Yaml::parse( file_get_contents( \Carbon_Fields\DIR . DIRECTORY_SEPARATOR . 'assets' . DIRECTORY_SEPARATOR . 'fontawesome' . DIRECTORY_SEPARATOR . 'fontawesome.yml' ) );
			static::$options = array(
				''=>array(
					'name' => $this->none_label,
					'id' => '',
					'categories' => array(),
					'class'=>'fa',
					'contents'=>'&nbsp;',
				),
			);
			foreach ( $data['icons'] as $icon ) {
				static::$options[ $icon['id'] ] = array(
					'name'=>$icon['name'],
					'id'=>$icon['id'],
					'categories'=>$icon['categories'],
					'class'=>'fa fa-' . $icon['id'],
					'contents'=>'',
				);
			}
		}

		/**
		 * Filter the final list of options, available to a certain glyph field.
		 *
		 * @param array $options Unfiltered options items.
		 * @param string $name Name of the glyph field.
		 */
		$options = apply_filters( 'carbon_glyph_options', static::$options, $this->get_name() );

		return $options;
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

		$field_data = array_merge( $field_data, array(
			'options' => $this->get_options(),
			'button_label' => $this->button_label,
		) );

		return $field_data;
	}

	/**
	 * The main Underscore template of this field.
	 */
	public function template() {
		?>
		<div class="carbon-glyph-container">
			<input type="hidden" name="{{{ name }}}" value="{{{ value }}}" class="carbon-glyph-value" />
			<a href="#" class="carbon-glyph-preview">
				<i class="{{{ (value && typeof options[value] !== 'undefined') ? options[value].class : 'hidden' }}}"></i>
				<span class="button">{{{ button_label }}}</span>
			</a>

			<div class="carbon-glyph-popup hidden">
				<div class="carbon-glyph-search dashicons-before dashicons-search">
					<input type="text" value="" placeholder="<?php esc_attr_e( 'Search...', 'carbon-fields' ); ?>" />
				</div>
				<div class="carbon-glyph-scroll">
					<ul class="carbon-glyph-list">
						<# if (options) { #>
							<# _.each(options, function(item) { #>
								<li class="carbon-glyph-icon-container carbon-glyph-icon-container-{{{ item.id }}}">
									<a href="#" class="carbon-glyph-icon-trigger {{{ value == item.id ? 'active' : '' }}}" data-value="{{{ item.id }}}">
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
