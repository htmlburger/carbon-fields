<?php

use Carbon_Fields\Helper\Get_Meta_Helper;
use Carbon_Fields\Helper\Update_Meta_Helper;

/**
 * carbon_get_ family
 */
if ( ! function_exists( 'carbon_get_post_meta' ) ) {
	function carbon_get_post_meta( $id, $name, $type = null ) {
		return Get_Meta_Helper::get_post_meta( $id, $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_the_post_meta' ) ) {
	function carbon_get_the_post_meta( $name, $type = null ) {
		return Get_Meta_Helper::get_the_post_meta( $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_theme_option' ) ) {
	function carbon_get_theme_option( $name, $type = null ) {
		return Get_Meta_Helper::get_theme_option( $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_term_meta' ) ) {
	function carbon_get_term_meta( $id, $name, $type = null ) {
		return Get_Meta_Helper::get_term_meta( $id, $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_user_meta' ) ) {
	function carbon_get_user_meta( $id, $name, $type = null ) {
		return Get_Meta_Helper::get_user_meta( $id, $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_comment_meta' ) ) {
	function carbon_get_comment_meta( $id, $name, $type = null ) {
		return Get_Meta_Helper::get_comment_meta( $id, $name, $type );
	}
}

/**
 * carbon_update_ family
 */
if ( ! function_exists( 'carbon_update_post_meta' ) ) {
	function carbon_update_post_meta( $id, $name, $value, $type = null ) {
		return Update_Meta_Helper::update_post_meta( $id, $name, $value, $type );
	}
}

if ( ! function_exists( 'carbon_update_the_post_meta' ) ) {
	function carbon_update_the_post_meta( $name, $value, $type = null ) {
		return Update_Meta_Helper::update_the_post_meta( $name, $value, $type );
	}
}

if ( ! function_exists( 'carbon_update_theme_option' ) ) {
	function carbon_update_theme_option( $name, $value, $type = null ) {
		return Update_Meta_Helper::update_theme_option( $name, $value, $type );
	}
}

if ( ! function_exists( 'carbon_update_term_meta' ) ) {
	function carbon_update_term_meta( $id, $name, $value, $type = null ) {
		return Update_Meta_Helper::update_term_meta( $id, $name, $value, $type );
	}
}

if ( ! function_exists( 'carbon_update_user_meta' ) ) {
	function carbon_update_user_meta( $id, $name, $value, $type = null ) {
		return Update_Meta_Helper::update_user_meta( $id, $name, $value, $type );
	}
}

if ( ! function_exists( 'carbon_update_comment_meta' ) ) {
	function carbon_update_comment_meta( $id, $name, $value, $type = null ) {
		return Update_Meta_Helper::update_comment_meta( $id, $name, $value, $type );
	}
}
