<?php 

namespace Carbon_Fields\Field;

class Separator_Field extends Field {
	function template() {
		?>
		<h3>{{{ label }}}</h3>
		<?php
	}

	function load() {
		// skip;
	}

	function save() {
		// skip;
	}

	function delete() {
		// skip;
	}

	function is_required() {
		return false;
	}
}
