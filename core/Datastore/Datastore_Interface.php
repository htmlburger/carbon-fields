<?php 

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Base_Field;

interface Datastore_Interface {
	function load(Base_Field $field);
	function save(Base_Field $field);
	function delete(Base_Field $field);
	function load_values($field);
	function delete_values(Base_Field $field);
}
