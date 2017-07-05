<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if user has a specific capability
 *
 * Operator "CUSTOM" is passed the user id
 */
class Current_User_Capability_Condition extends User_Capability_Condition {

	/**
	 * Get user id from environment
	 *
	 * @param  array   $environment
	 * @return integer
	 */
	protected function get_user_id( $environment ) {
		return get_current_user_id();
	}
}