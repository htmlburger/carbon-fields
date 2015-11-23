<?php 

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

interface Datastore_Interface {
	function load(Field $field);
	function save(Field $field);
	function delete(Field $field);
	function load_values($field);
	function delete_values(Field $field);
}
