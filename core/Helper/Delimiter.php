<?php

namespace Carbon_Fields\Helper;

/**
 * Delimiter functions
 */
class Delimiter {
	/**
	 * Character to escape delimiters with
	 * We're using an uncommon escape character as to not clash with stripslashes
	 *
	 * @var string
	 */
	protected static $escape_character = '!';

	/**
	 * Quote a delimiter in the passed value
	 *
	 * @param  string $value
	 * @param  string $delimiter
	 * @return string
	 */
	public static function quote( $value, $delimiter ) {
		return str_replace( $delimiter, static::$escape_character . $delimiter, $value );
	}

	/**
	 * Unquote a delimiter in the passed value
	 *
	 * @param  string $value
	 * @param  string $delimiter
	 * @return string
	 */
	public static function unquote( $value, $delimiter ) {
		return str_replace( static::$escape_character . $delimiter, $delimiter, $value );
	}

	/**
	 * Split the passed value by a delimiter
	 *
	 * @param  string $value
	 * @param  string $delimiter
	 * @return array
	 */
	public static function split( $value, $delimiter ) {
		return preg_split( '~(?<!' . preg_quote( static::$escape_character, '~' ) . ')' . preg_quote( $delimiter, '~' ) . '~', $value );
	}
}
