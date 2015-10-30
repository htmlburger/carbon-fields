<?php 

abstract class Carbon_DataStore_Base implements Carbon_DataStore {
	function __construct() {
		$this->init();
	}

	abstract function init();

	static function factory($type) {
		$type = str_replace(" ", '_', ucwords(str_replace("_", ' ', $type)));

		$class = 'Carbon_DataStore_' . $type;

		if (!class_exists($class)) {
			throw new Carbon_Exception ('Unknown data store type "' . $type . '".');
		}

		$field = new $class();

		return $field;
	}
}
