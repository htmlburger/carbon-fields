<?php 

class Carbon_Field_Textarea extends Carbon_Field {
	protected $height = 170;
	protected $rows = 0;

	// deprecated in favor of set_rows()
	function set_height($height = 170) {
		$min_height = 28;
		$this->height = max(intval($height), $min_height);
		return $this;
	}

	function set_rows($rows = 0) {
		$this->rows = absint($rows);
		return $this;
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, array(
			'rows' => $this->rows,
			'height' => $this->height,
		));

		return $field_data;
	}

	function template() {
		?>
		<textarea id="{{{ id }}}" name="{{{ name }}}" {{{ rows ? 'rows="' + rows + '"' : 'style="height: ' + height + 'px;"' }}}>{{ value }}</textarea>
		<?php
	}
}
