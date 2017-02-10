<?php

use Carbon_Fields\Helper\Helper;

if ( ! function_exists( 'carbon_get_the_post_meta' ) ) {
	function carbon_get_the_post_meta( $name ) {
		return Helper::get_the_post_meta( $name );
	}
}

if ( ! function_exists( 'carbon_get_post_meta' ) ) {
	function carbon_get_post_meta( $id, $name ) {
		return Helper::get_post_meta( $id, $name );
	}
}

if ( ! function_exists( 'carbon_set_post_meta' ) ) {
	function carbon_set_post_meta( $id, $name, $value ) {
		return Helper::set_post_meta( $id, $name, $value );
	}
}

if ( ! function_exists( 'carbon_get_theme_option' ) ) {
	function carbon_get_theme_option( $name ) {
		return Helper::get_theme_option( $name );
	}
}

if ( ! function_exists( 'carbon_set_theme_option' ) ) {
	function carbon_set_theme_option( $name, $value ) {
		return Helper::set_theme_option( $name, $value );
	}
}

if ( ! function_exists( 'carbon_get_term_meta' ) ) {
	function carbon_get_term_meta( $id, $name ) {
		return Helper::get_term_meta( $id, $name );
	}
}

if ( ! function_exists( 'carbon_set_term_meta' ) ) {
	function carbon_set_term_meta( $id, $name, $value ) {
		return Helper::set_term_meta( $id, $name, $value );
	}
}

if ( ! function_exists( 'carbon_get_user_meta' ) ) {
	function carbon_get_user_meta( $id, $name ) {
		return Helper::get_user_meta( $id, $name );
	}
}

if ( ! function_exists( 'carbon_set_user_meta' ) ) {
	function carbon_set_user_meta( $id, $name, $value ) {
		return Helper::set_user_meta( $id, $name, $value );
	}
}

if ( ! function_exists( 'carbon_get_comment_meta' ) ) {
	function carbon_get_comment_meta( $id, $name ) {
		return Helper::get_comment_meta( $id, $name );
	}
}

if ( ! function_exists( 'carbon_set_comment_meta' ) ) {
	function carbon_set_comment_meta( $id, $name, $value ) {
		return Helper::set_comment_meta( $id, $name, $value );
	}
}
