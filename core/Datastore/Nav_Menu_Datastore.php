<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

class Nav_Menu_Datastore extends Post_Meta_Datastore {
	protected $field_prefix_garbage = '';

	public function set_field_prefix_garbage( $garbage ) {
		$this->field_prefix_garbage = $garbage;
	}
}
