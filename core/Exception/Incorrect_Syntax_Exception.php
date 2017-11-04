<?php

namespace Carbon_Fields\Exception;

class Incorrect_Syntax_Exception extends \Exception {

	public static $errors = array();
	public static $throw_errors = WP_DEBUG;

	/**
	 * Throw an exception when WP_DEBUG is enabled, and show a friendly admin notice otherwise
	 */
	public static function raise( $message, $code = null ) {
		if ( empty( static::$errors ) ) {
			add_action( 'admin_notices', array( __NAMESPACE__ . '\\Incorrect_Syntax_Exception', 'print_errors' ) );
			add_action( 'network_admin_notices', array( __NAMESPACE__ . '\\Incorrect_Syntax_Exception', 'print_errors' ) );
		}

		$exception = new self( $message, $code );

		if ( static::$throw_errors ) {
			throw $exception;
		} else {
			static::$errors[] = $exception;
		}
	}

	public static function print_errors() {
		$hideErrorsCookieName = 'crbErrHide';

		// Disable cookies
		if ( isset( $_COOKIE[ $hideErrorsCookieName ] ) ) {
			return;
		}

		$errors = static::$errors;
		$plural = count( $errors ) === 1 ? '' : 's';

		include \Carbon_Fields\DIR . '/templates/Exception/incorrect-syntax.php';
	}
}
