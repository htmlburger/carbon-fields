<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if user has a specific capability
 * 
 * Operator "CUSTOM" is passed the user id
 */
class User_Capability_Condition extends Condition {

	/**
	 * Check if a user has any of the supplied capabilities
	 * 
	 * @param  array<string> $capabilities
	 * @return boolean
	 */
	protected function user_can_any( $user_id, $capabilities ) {
		foreach ( $capabilities as $cap ) {
			if ( user_can( $user_id, $cap ) ) {
				return true;
			}
		}
		return false;
	}
	
	/**
	 * Check if the condition is fulfilled
	 * 
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$user_id = $environment['user_id'];
		switch ( $this->get_comparison_operator() ) {
			case '=':
				return user_can( $user_id, $this->get_value() );
				break;
			case '!=':
				return ! user_can( $user_id, $this->get_value() );
				break;
			case 'IN':
				return $this->user_can_any( $user_id, $this->get_value() );
				break;
			case 'NOT IN':
				return ! $this->user_can_any( $user_id, $this->get_value() );
				break;
		}

		return $this->first_supported_comparer_is_correct(
			$user_id,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}