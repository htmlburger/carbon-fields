<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if user has a specific role
 *
 * Operator "CUSTOM" is passed an array of all user roles
 */
class User_Role_Condition extends Condition {

	/**
	 * Get roles for a user from the environment
	 *
	 * @param  array         $environment
	 * @return array<string>
	 */
	protected function get_user_roles( $environment ) {
		return $environment['roles'];
	}

	/**
	 * Check if the condition is fulfilled
	 *
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$roles = $this->get_user_roles( $environment );

		return $this->compare(
			$roles,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}