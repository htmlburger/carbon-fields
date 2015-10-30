<?php 

interface Carbon_DataStore {
	function load(Carbon_Field $field);
	function save(Carbon_Field $field);
	function delete(Carbon_Field $field);
	function load_values($field);
	function delete_values(Carbon_Field $field);
}
