<?php

namespace Carbon_Fields\Helper;

/**
 * Color functions
 */
class Color {
	/**
	 * Converts a hexadecimal color into it's RGBA components
	 * Accepts hex with and without alpha: #112233, #112233FF
	 * Accepts hex with and without a leading # sign
	 *
	 * @param  string $hex
	 * @return array
	 */
	public static function hex_to_rgba( $hex ) {
		$hex = str_replace( '#', '', $hex );
		$hex = strlen( $hex ) > 6 ? $hex : $hex . 'FF';

		$int = hexdec( $hex );
		$r = ($int >> 24) & 255;
		$g = ($int >> 16) & 255;
		$b = ($int >> 8) & 255;
		$a = floatval($int & 255) / 255;

		return array(
			'red' => $r,
			'green' => $g,
			'blue' => $b,
			'alpha' => $a,
		);
	}
}
