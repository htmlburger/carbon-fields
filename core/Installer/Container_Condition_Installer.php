<?php

namespace Carbon_Fields\Installer;

use Carbon_Fields\Pimple\Container as PimpleContainer;
use Carbon_Fields\Container\Condition\Factory as ConditionFactory;
use Carbon_Fields\Container\Fulfillable\Fulfillable_Collection;

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
		static::install_container_conditions( $ioc );
	}

	/**
	 * Install all codition types and the condition factory
	 *
	 * @param  PimpleContainer $ioc
	 */
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
			return new \Carbon_Fields\Container\Condition\Post_Type_Condition( $ioc['container_condition_comparers_generic_wo_scalar'] );
		} );
		$ioc['container_condition_type_post_format'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_Format_Condition( $ioc['container_condition_comparers_generic_wo_scalar'] );
		} );
		$ioc['container_condition_type_post_level'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_Level_Condition( $ioc['container_condition_comparers_generic'] );
		} );
		$ioc['container_condition_type_post_template'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_Template_Condition( $ioc['container_condition_comparers_generic_wo_scalar'] );
		} );
		$ioc['container_condition_type_post_term'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_Term_Condition( array(
				// Only support the custom comparer as this condition has it's own comparison methods
				$ioc['container_condition_comparer_type_custom'],
			) );
		} );

		$ioc['container_condition_type_term'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Term_Condition( $ioc['container_condition_comparers_generic_wo_scalar'] );
		} );
		$ioc['container_condition_type_term_taxonomy'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Term_Taxonomy_Condition( $ioc['container_condition_comparers_generic_wo_scalar'] );
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
			return new ConditionFactory();
		};
	}

	/**
	 * Install all condition comparers
	 *
	 * @param  PimpleContainer $ioc
	 */
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
		$ioc['container_condition_comparer_type_custom'] = function() {
			return new \Carbon_Fields\Container\Condition\Comparer\Custom_Comparer();
		};

		$ioc['container_condition_comparers_generic'] = function( $ioc ) {
			return array(
				$ioc['container_condition_comparer_type_equality'],
				$ioc['container_condition_comparer_type_contain'],
				$ioc['container_condition_comparer_type_scalar'],
				$ioc['container_condition_comparer_type_custom'],
			);
		};

		$ioc['container_condition_comparers_generic_wo_scalar'] = function( $ioc ) {
			return array(
				$ioc['container_condition_comparer_type_equality'],
				$ioc['container_condition_comparer_type_contain'],
				$ioc['container_condition_comparer_type_custom'],
			);
		};
	}

	/**
	 * Install all codition translators
	 *
	 * @param  PimpleContainer $ioc
	 */
	protected static function install_translators( $ioc ) {
		$ioc['container_condition_translator_array'] = function( $ioc ) {
			return new \Carbon_Fields\Container\Fulfillable\Translator\Array_Translator( $ioc['container_condition_factory'] );
		};
	}

	/**
	 * Install all container coditions
	 *
	 * @param  PimpleContainer $ioc
	 */
	protected static function install_container_conditions( $ioc ) {
		// add current_user_* static condition types to all containers
		add_filter( 'carbon_fields_container_static_condition_types', function( $condition_types, $container_type, $container ) {
			return array_merge(
				$condition_types,
				array( 'current_user_id', 'current_user_role', 'current_user_capability' )
			);
		}, 10, 3 );

		// add container-specific conditions
		add_filter( 'carbon_fields_post_meta_container_static_condition_types', array( get_class(), 'filter_post_meta_container_static_condition_types' ), 10, 3 );
		add_filter( 'carbon_fields_post_meta_container_dynamic_condition_types', array( get_class(), 'filter_post_meta_container_dynamic_condition_types' ), 10, 3 );

		add_filter( 'carbon_fields_term_meta_container_static_condition_types', array( get_class(), 'filter_term_meta_container_static_condition_types' ), 10, 3 );
		add_filter( 'carbon_fields_term_meta_container_dynamic_condition_types', array( get_class(), 'filter_term_meta_container_dynamic_condition_types' ), 10, 3 );

		add_filter( 'carbon_fields_user_meta_container_static_condition_types', array( get_class(), 'filter_user_meta_container_static_condition_types' ), 10, 3 );
		add_filter( 'carbon_fields_user_meta_container_dynamic_condition_types', array( get_class(), 'filter_user_meta_container_dynamic_condition_types' ), 10, 3 );
	}

	/**
	 * Filter the Post_Meta_Container static condition types
	 *
	 * @param  array<string>                     $condition_types
	 * @param  Carbon_Fields\Container\Container $container
	 * @return array<string>
	 */
	public static function filter_post_meta_container_static_condition_types( $condition_types, $container_type, $container ) {
		return array_merge(
			$condition_types,
			array( 'post_id', 'post_type' )
		);
	}

	/**
	 * Filter the Post_Meta_Container dynamic condition types
	 *
	 * @param  array<string>                     $condition_types
	 * @param  Carbon_Fields\Container\Container $container
	 * @return array<string>
	 */
	public static function filter_post_meta_container_dynamic_condition_types( $condition_types, $container_type, $container ) {
		return array_merge(
			$condition_types,
			array( 'post_parent_id', 'post_format', 'post_level', 'post_template', 'post_term' )
		);
	}

	/**
	 * Filter the Term_Meta_Container static condition types
	 *
	 * @param  array<string>                     $condition_types
	 * @param  Carbon_Fields\Container\Container $container
	 * @return array<string>
	 */
	public static function filter_term_meta_container_static_condition_types( $condition_types, $container_type, $container ) {
		return array_merge(
			$condition_types,
			array( 'term', 'term_taxonomy' )
		);
	}

	/**
	 * Filter the Term_Meta_Container dynamic condition types
	 *
	 * @param  array<string>                     $condition_types
	 * @param  Carbon_Fields\Container\Container $container
	 * @return array<string>
	 */
	public static function filter_term_meta_container_dynamic_condition_types( $condition_types, $container_type, $container ) {
		return array_merge(
			$condition_types,
			array( 'term_level' )
		);
	}

	/**
	 * Filter the User_Meta_Container static condition types
	 *
	 * @param  array<string>                     $condition_types
	 * @param  Carbon_Fields\Container\Container $container
	 * @return array<string>
	 */
	public static function filter_user_meta_container_static_condition_types( $condition_types, $container_type, $container ) {
		return array_merge(
			$condition_types,
			array( 'user_id', 'user_capability' )
		);
	}

	/**
	 * Filter the User_Meta_Container dynamic condition types
	 *
	 * @param  array<string>                     $condition_types
	 * @param  Carbon_Fields\Container\Container $container
	 * @return array<string>
	 */
	public static function filter_user_meta_container_dynamic_condition_types( $condition_types, $container_type, $container ) {
		return array_merge(
			$condition_types,
			array( 'user_role' )
		);
	}
}
