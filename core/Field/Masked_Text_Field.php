<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Masked Text field class.
 */
class Masked_Text_Field extends Text_Field {
	/**
	 * The mask
	 * @see https://github.com/insin/inputmask-core
	 * @var string 
	 */
	protected $mask = [];

	/**
	 * Whether to force the user to comply with the provided mask
	 * @var boolean
	 */ 
	protected $validate_mask_format = false;

	public function set_mask($mask) {
		if (is_string($mask)) {
			$array_mask = [];
			foreach (str_split($mask) as $char) {
				switch ($char) {
					case '1': $piece = '/\d/';      break;
					case 'a': $piece = '/[a-z]/';   break;
					case '*': $piece = '/[\da-z]/'; break;
					default:  $piece = $char;       break;
				}
				$array_mask[] = $piece;
			}
			$this->mask = $array_mask;
		} else {
			$this->mask = $mask;
		}

		return $this;
	}

	public function set_required_mask($mask) {
		$this->validate_mask_format = true;
		return $this->set_mask($mask);
	}

	function to_json($load) {
		return array_merge( parent::to_json( $load ), array(
			'mask' => $this->mask,
			'validateMaskFormat' => $this->validate_mask_format,
		) );
	}
}
