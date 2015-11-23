<?php 

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

abstract class Datastore implements Datastore_Interface {
	function __construct() {
		$this->init();
	}

	abstract function init();

	static function factory($type) {
		$type = str_replace(" ", '_', ucwords(str_replace("_", ' ', $type)));

		$class = __NAMESPACE__ . '\\' . $type . '_Datastore';

		if (!class_exists($class)) {
			throw new Incorrect_Syntax_Exception ('Unknown data store type "' . $type . '".');
		}

		$field = new $class();

		return $field;
	}
}
