<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if user has a specific capability
 *
 * Operator "CUSTOM" is passed the user id
 */
class User_Capability_Condition extends Condition {

	/**
	 * Get user id from environment
	 *
	 * @param  array   $environment
	 * @return integer
	 */
	protected function get_user_id( $environment ) {
		return $environment['user_id'];
	}

	/**
	 * Check if a user has any of the supplied capabilities
	 *
	 * @param  integer       $user_id
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
		$user_id = $this->get_user_id( $environment );
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

		return $this->compare(
			$user_id,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}