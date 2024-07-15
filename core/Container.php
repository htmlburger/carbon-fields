<?php

namespace Carbon_Fields;

/**
 * Container proxy factory class.
 * Used for shorter namespace access when creating a container.
 *
 * @method static \Carbon_Fields\Container\Comment_Meta_Container make_comment_meta( string $id, string $name = null )
 * @method static \Carbon_Fields\Container\Nav_Menu_Item_Container make_nav_menu_item( string $id, string $name = null )
 * @method static \Carbon_Fields\Container\Network_Container make_network( string $id, string $name = null )
 * @method static \Carbon_Fields\Container\Post_Meta_Container make_post_meta( string $id, string $name = null )
 * @method static \Carbon_Fields\Container\Term_Meta_Container make_term_meta( string $id, string $name = null )
 * @method static \Carbon_Fields\Container\Theme_Options_Container make_theme_options( string $id, string $name = null )
 * @method static \Carbon_Fields\Container\User_Meta_Container make_user_meta( string $id, string $name = null )
 */
class Container {

	/**
	 * A proxy for the abstract container factory method.
	 *
	 * @see    \Carbon_Fields\Container\Container::factory()
	 * @return \Carbon_Fields\Container\Container
	 */
	public static function factory() {
		return call_user_func_array( array( '\Carbon_Fields\Container\Container', 'factory' ), func_get_args() );
	}

	/**
	 * An alias of factory().
	 *
	 * @see    \Carbon_Fields\Container\Container::factory()
	 * @return \Carbon_Fields\Container\Container
	 */
	public static function make() {
		return call_user_func_array( array( static::class, 'factory' ), func_get_args() );
	}

	/**
	 * @param string $method
	 * @param array $arguments
	 *
	 * @return mixed
	 */
	public static function __callStatic( $method, $arguments ) {
		if ( strpos( $method, 'make_' ) === 0 ) {
			$raw_type = substr_replace( $method, '', 0, 5 );
			array_unshift( $arguments, $raw_type );
			return call_user_func_array( array( static::class, 'factory' ), $arguments );
		} else {
			trigger_error( sprintf( 'Call to undefined function: %s::%s().', static::class, $method ), E_USER_ERROR );
		}
	}
}
