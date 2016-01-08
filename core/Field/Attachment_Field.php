<?php 

namespace Carbon_Fields\Field;

/**
 * Attachment field class.
 * Allows selecting and saving a media attachment file,
 * where the attachment ID is saved in the database.
 */
class Attachment_Field extends File_Field {
	public $value_type = 'id';

	/**
	 * Underscore template of the file description section.
	 */
	public function template_description() {
		?>
		<div class="carbon-description {{{ value ? '' : 'hidden' }}}">
			<div class="carbon-attachment-preview {{{ thumb_url ? '' : 'hidden' }}}">
				<div class="carbon-preview">
					<div class="thumbnail">
						<div class="centered">
							<img src="{{ thumb_url }}" class="thumbnail-image" />
						</div>
					</div>
					<div class="carbon-file-remove"></div>
				</div>
			</div>

			<# if (value_type === 'id') { #>
				<div class="attachment-url">{{ url }}</div>
			<# } #>
		</div>
		<?php
	}
}