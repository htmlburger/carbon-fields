<?php
namespace Carbon_Fields\Field;

/**
 * Allows selecting and saving multiple media attachment files,
 * where the image IDs are saved into the database.
 */
class Image_Gallery_Field extends Image_Field {

	/**
	 * Filter the shown attachment type of the media frame in the front end
	 *
	 * @var string
	 */
	public $field_type = 'image';

	/**
	 * Retrieve the current image IDs of the field
	 *
	 * @return array
	 */
	public function get_images() {
		$images = array();

		if(empty($this->value)) {
			return $images;
		}

		$images = explode(',', $this->value);

		return $images;
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json($load) {
		$field_data = parent::to_json($load);

		$images = array();
		$image_values = $this->get_images();

		if(!empty($image_values)) {
			foreach ($image_values as $image_value) {
				$image_url = is_numeric($image_value) ? wp_get_attachment_url($image_value) : $image_value;
				$file_type = wp_check_filetype($image_url);
				$file_type = preg_replace( '~\/.+$~', '', $file_type['type']); // image, video, etc..

				if ($file_type == 'image') {
					if ($this->value_type == 'id') {
						$image_src = wp_get_attachment_image_src($image_value, 'thumbnail');
						$image_url  = $image_src[0];
					}

					$images[] = array(
						'value'  => $image_value,
						'url' => $image_url,
					);
				}
			}
		}

		$field_data = wp_parse_args(array(
			'images' => $images,
		    'button_label' => $this->button_label,
		    'window_button_label' => $this->window_button_label,
		    'window_label' => $this->window_label,
			'type_filter' => $this->field_type,
			'value_type' => $this->value_type,
			'value' => $this->value,
		), $field_data);

		return $field_data;
	}

	/**
	 * Underscore template of the image gallery section.
	 */
	public function template() {
		?>
		<div class="input-with-button">
			<input id="{{ id }}" type="hidden" name="{{ name }}" value="{{ value }}" class="carbon-image-gallery-field"/>

			<span id="c2_open_media{{ id.replace('-', '_') }}" class="button c2_open_media icon-button">
				{{{ button_label }}}
			</span>
		</div>

		{{{ description }}}
		<?php
	}

	/**
	 * Underscore template of the file description section.
	 */
	public function template_description() {
		?>
		<div class="carbon-description {{{ value ? '' : 'hidden' }}}">
			<ul class="carbon-image-gallery">
				<# _.each(images, function(image) { #>
					<li class="carbon-image">
						<div class="carbon-attachment-preview">
							<div class="carbon-preview">
								<div class="thumbnail">
									<div class="centered">
										<img src="{{ image.url }}" class="thumbnail-image" />
									</div>
								</div>
								<div class="carbon-image-remove"></div>
							</div>
						</div>
					</li>
				<# }); #>
			</ul>
		</div>
		<?php
	}
}
