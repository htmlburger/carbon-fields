<?php

use Carbon_Fields\Helper\Meta_Helper;

if ( ! function_exists( 'carbon_get_post_meta' ) ) {
	function carbon_get_post_meta( $id, $name, $type = null ) {
		return Meta_Helper::get_post_meta( $id, $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_the_post_meta' ) ) {
	function carbon_get_the_post_meta( $name, $type = null ) {
		return Meta_Helper::get_the_post_meta( $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_theme_option' ) ) {
	function carbon_get_theme_option( $name, $type = null ) {
		return Meta_Helper::get_theme_option( $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_term_meta' ) ) {
	function carbon_get_term_meta( $id, $name, $type = null ) {
		return Meta_Helper::get_term_meta( $id, $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_user_meta' ) ) {
	function carbon_get_user_meta( $id, $name, $type = null ) {
		return Meta_Helper::get_user_meta( $id, $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_comment_meta' ) ) {
	function carbon_get_comment_meta( $id, $name, $type = null ) {
		return Meta_Helper::get_comment_meta( $id, $name, $type );
	}
}
