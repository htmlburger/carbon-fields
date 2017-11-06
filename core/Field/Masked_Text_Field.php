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

	protected $mask_placeholder = '_';

	/**
	 * Whether to force the user to comply with the provided mask
	 * @var boolean
	 */ 
	protected $validate_mask_format = false;

	public function set_mask($mask) {
		$mask_special_chars = [
		];
		if (is_string($mask)) {
			$mask_tokens = [
				'1' => '/\d/',
				'a' => '/[a-zA-Z]/',
				'*' => '/[\da-zA-Z]/',
			];

			$escape_next = false;

			foreach (str_split($mask) as $char) {
				if ($char === '\\' && !$escape_next) {
					$escape_next = true;
					continue;
				}

				if ($escape_next) {
					// previous character was backslash -- pass in whatever is the current char "as-is"
					$piece = $char;
				} elseif (isset($mask_tokens[$char])) {

					$piece = $mask_tokens[$char];
				} else {
					$piece = $char;
				}

				$array_mask[] = $piece;

				$escape_next = false;
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

	public function set_mask_placeholder($mask_placeholder) {
		if (strlen($mask_placeholder) !== 1) {
			throw new \Incorrect_Syntax_Exception('Masked Input placeholder should be a single character. ');
		}
		$this->mask_placeholder = $mask_placeholder;
		return $this;
	}

	function to_json($load) {
		return array_merge( parent::to_json( $load ), array(
			'mask' => $this->mask,
			'validateMaskFormat' => $this->validate_mask_format,
			'maskPlaceholder' => $this->mask_placeholder,
		) );
	}
}
