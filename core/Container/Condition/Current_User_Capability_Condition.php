<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if user has a specific capability
 * 
 * Operator "CUSTOM" is passed the user id
 */
class Current_User_Capability_Condition extends Condition {

	/**
	 * Check if a user has any of the supplied capabilities
	 * 
	 * @param  array<string> $capabilities
	 * @return boolean
	 */
	protected function current_user_can_any( $capabilities ) {
		foreach ( $capabilities as $cap ) {
			if ( current_user_can( $cap ) ) {
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
		switch ( $this->get_comparison_operator() ) {
			case '=':
				return current_user_can( $this->get_value() );
				break;
			case '!=':
				return ! current_user_can( $this->get_value() );
				break;
			case 'IN':
				return $this->current_user_can_any( $this->get_value() );
				break;
			case 'NOT IN':
				return ! $this->current_user_can_any( $this->get_value() );
				break;
		}

		return $this->first_supported_comparer_is_correct(
			get_current_user_id(),
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}