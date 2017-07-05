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

		switch ( $this->get_comparison_operator() ) {
			case '=':
				return in_array( $this->get_value(), $roles );
				break;
			case '!=':
				return ! in_array( $this->get_value(), $roles );
				break;
			case 'IN':
				return count( array_intersect( $roles, $this->get_value() ) ) > 0;
				break;
			case 'NOT IN':
				return count( array_intersect( $roles, $this->get_value() ) ) === 0;
				break;
		}

		return $this->compare(
			$roles,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}