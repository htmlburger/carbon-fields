<?php

namespace Carbon_Fields\Installer;

use Carbon_Fields\Pimple\Container as PimpleContainer;
use Carbon_Fields\Container\Condition\Factory as ConditionFactory;
use Carbon_Fields\Container\Condition\Fulfillable\Fulfillable_Collection;

class Container_Condition_Installer implements Installer {

	/**
	 * Install dependencies in IoC container
	 * 
	 * @param  PimpleContainer $ioc
	 */
	public static function install( PimpleContainer $ioc ) {
		$ioc['container_condition_fulfillable_collection'] = $ioc->factory( function( $ioc ) {
			return new Fulfillable_Collection( $ioc['container_condition_factory'], $ioc['container_condition_translator_array'] );
		} );

		static::install_conditions( $ioc );
		static::install_comparers( $ioc );
		static::install_translators( $ioc );
	}

	protected static function install_conditions( $ioc ) {
		$ioc['container_condition_type_boolean'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Boolean_Condition( array(
				$ioc['container_condition_comparer_type_equality'],
			) );
		} );
		$ioc['container_condition_type_post_id'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_ID_Condition( $ioc['container_condition_comparers_generic'] );
		} );
		$ioc['container_condition_type_post_parent_id'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_Parent_ID_Condition( $ioc['container_condition_comparers_generic'] );
		} );
		$ioc['container_condition_type_post_type'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_Type_Condition( $ioc['container_condition_comparers_wo_scalar'] );
		} );
		$ioc['container_condition_type_post_format'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_Format_Condition( $ioc['container_condition_comparers_wo_scalar'] );
		} );
		$ioc['container_condition_type_post_level'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_Level_Condition( $ioc['container_condition_comparers_generic'] );
		} );
		$ioc['container_condition_type_post_template'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_Template_Condition( $ioc['container_condition_comparers_wo_scalar'] );
		} );
		$ioc['container_condition_type_post_term'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_Term_Condition( array( 
				// Only support the custom comparer as this condition has it's own comparison methods
				$ioc['container_condition_comparer_type_custom'],
			) );
		} );

		$ioc['container_condition_type_term'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Term_Condition(  $ioc['container_condition_comparers_wo_scalar']  );
		} );
		$ioc['container_condition_type_term_taxonomy'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Term_Taxonomy_Condition(  $ioc['container_condition_comparers_wo_scalar']  );
		} );
		$ioc['container_condition_type_term_level'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Term_Level_Condition( $ioc['container_condition_comparers_generic'] );
		} );

		$ioc['container_condition_type_user_id'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\User_ID_Condition( $ioc['container_condition_comparers_generic'] );
		} );
		$ioc['container_condition_type_user_role'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\User_Role_Condition( array(
				// Only support the custom comparer as this condition has it's own comparison methods
				$ioc['container_condition_comparer_type_custom'],
			) );
		} );
		$ioc['container_condition_type_user_capabiltiy'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\User_Capability_Condition( array(
				// Only support the custom comparer as this condition has it's own comparison methods
				$ioc['container_condition_comparer_type_custom'],
			) );
		} );

		$ioc['container_condition_type_current_user_id'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Current_User_ID_Condition( $ioc['container_condition_comparers_generic'] );
		} );
		$ioc['container_condition_type_current_user_role'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Current_User_Role_Condition( array(
				// Only support the custom comparer as this condition has it's own comparison methods
				$ioc['container_condition_comparer_type_custom'],
			) );
		} );
		$ioc['container_condition_type_current_user_capability'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Current_User_Capability_Condition( array(
				// Only support the custom comparer as this condition has it's own comparison methods
				$ioc['container_condition_comparer_type_custom'],
			) );
		} );

		$ioc['container_condition_factory'] = function() {
			$factory = new ConditionFactory();
			$factory->register( 'boolean', 'Carbon_Fields\\Container\\Condition\\Boolean_Condition' );

			$factory->register( 'post_id', 'Carbon_Fields\\Container\\Condition\\Post_ID_Condition' );
			$factory->register( 'post_parent_id', 'Carbon_Fields\\Container\\Condition\\Post_Parent_ID_Condition' );
			$factory->register( 'post_type', 'Carbon_Fields\\Container\\Condition\\Post_Type_Condition' );
			$factory->register( 'post_format', 'Carbon_Fields\\Container\\Condition\\Post_Format_Condition' );
			$factory->register( 'post_level', 'Carbon_Fields\\Container\\Condition\\Post_Level_Condition' );
			$factory->register( 'post_template', 'Carbon_Fields\\Container\\Condition\\Post_Template_Condition' );
			$factory->register( 'post_term', 'Carbon_Fields\\Container\\Condition\\Post_Term_Condition' );

			$factory->register( 'term', 'Carbon_Fields\\Container\\Condition\\Term_Condition' );
			$factory->register( 'term_taxonomy', 'Carbon_Fields\\Container\\Condition\\Term_Taxonomy_Condition' );
			$factory->register( 'term_level', 'Carbon_Fields\\Container\\Condition\\Term_Level_Condition' );

			$factory->register( 'user_id', 'Carbon_Fields\\Container\\Condition\\User_ID_Condition' );
			$factory->register( 'user_role', 'Carbon_Fields\\Container\\Condition\\User_Role_Condition' );
			$factory->register( 'user_capability', 'Carbon_Fields\\Container\\Condition\\User_Capability_Condition' );

			$factory->register( 'current_user_id', 'Carbon_Fields\\Container\\Condition\\Current_User_ID_Condition' );
			$factory->register( 'current_user_role', 'Carbon_Fields\\Container\\Condition\\Current_User_Role_Condition' );
			$factory->register( 'current_user_capability', 'Carbon_Fields\\Container\\Condition\\Current_User_Capability_Condition' );
			return $factory;
		};
	}

	protected static function install_comparers( $ioc ) {
		$ioc['container_condition_comparer_type_equality'] = function() {
			return new \Carbon_Fields\Container\Condition\Comparer\Equality_Comparer();
		};
		$ioc['container_condition_comparer_type_contain'] = function() {
			return new \Carbon_Fields\Container\Condition\Comparer\Contain_Comparer();
		};
		$ioc['container_condition_comparer_type_scalar'] = function() {
			return new \Carbon_Fields\Container\Condition\Comparer\Scalar_Comparer();
		};
		$ioc['container_condition_comparer_type_regex'] = function() {
			return new \Carbon_Fields\Container\Condition\Comparer\Regex_Comparer();
		};
		$ioc['container_condition_comparer_type_custom'] = function() {
			return new \Carbon_Fields\Container\Condition\Comparer\Custom_Comparer();
		};

		$ioc['container_condition_comparers_generic'] = function( $ioc ) {
			return array(
				$ioc['container_condition_comparer_type_equality'],
				$ioc['container_condition_comparer_type_contain'],
				$ioc['container_condition_comparer_type_scalar'],
				$ioc['container_condition_comparer_type_regex'],
				$ioc['container_condition_comparer_type_custom'],
			);
		};

		$ioc['container_condition_comparers_wo_scalar'] = function( $ioc ) {
			return array(
				$ioc['container_condition_comparer_type_equality'],
				$ioc['container_condition_comparer_type_contain'],
				$ioc['container_condition_comparer_type_regex'],
				$ioc['container_condition_comparer_type_custom'],
			);
		};
	}

	protected static function install_translators( $ioc ) {
		$ioc['container_condition_translator_array'] = function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Translator\Array_Translator( $ioc['container_condition_factory'] );
		};
	}
}