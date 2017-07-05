<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Factory {

	/**
	 * Container to resolve conditions from
	 */
	protected $ioc;

	/**
	 * Constructor
	 */
	public function __construct( $ioc ) {
		$this->ioc = $ioc;
	}

	/**
	 * Get the type for the specified class
	 *
	 * @param  string $class
	 * @return string
	 */
	public function get_type( $class ) {
		return Helper::class_to_type( $class, '_Condition' );
	}

	/**
	 * Get an instance of the specified type
	 *
	 * @param  string $type
	 * @return mixed
	 */
	public function make( $type ) {
		$normalized_type = Helper::normalize_type( $type );

		if ( isset( $this->ioc[ $normalized_type ] ) ) {
			return $this->ioc[ $normalized_type ];
		}

		Incorrect_Syntax_Exception::raise( 'Unknown condition type "' . $type . '".' );
		return null;
	}
}