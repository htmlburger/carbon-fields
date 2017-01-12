<?php

use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Updater\Updater;

if ( ! function_exists( 'carbon_get_post_meta' ) ) {
	function carbon_get_post_meta( $id, $name, $type = null ) {
		return Helper::get_post_meta( $id, $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_the_post_meta' ) ) {
	function carbon_get_the_post_meta( $name, $type = null ) {
		return Helper::get_the_post_meta( $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_theme_option' ) ) {
	function carbon_get_theme_option( $name, $type = null ) {
		return Helper::get_theme_option( $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_term_meta' ) ) {
	function carbon_get_term_meta( $id, $name, $type = null ) {
		return Helper::get_term_meta( $id, $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_user_meta' ) ) {
	function carbon_get_user_meta( $id, $name, $type = null ) {
		return Helper::get_user_meta( $id, $name, $type );
	}
}

if ( ! function_exists( 'carbon_get_comment_meta' ) ) {
	function carbon_get_comment_meta( $id, $name, $type = null ) {
		return Helper::get_comment_meta( $id, $name, $type );
	}
}

function carbon_update_post_meta( $id, $name, $value, $type = null ) {
	try {
		Updater::update_field( 'post_meta', $id, $name, $value, $type );	
	} catch( Exception $e ) {
		wp_die( $e->getMessage() );
	}
}

function carbon_update_term_meta( $id, $name, $value, $type = null ) {
	try {
		Updater::update_field( 'term_meta', $id, $name, $value, $type );
	} catch( Exception $e ) {
		wp_die( $e->getMessage() );
	}
}

function carbon_update_user_meta( $id, $name, $value, $type = null ) {
	try {
		Updater::update_field( 'user_meta', $id, $name, $value, $type );
	} catch( Exception $e ) {
		wp_die( $e->getMessage() );
	}
}

function carbon_update_comment_meta( $id, $name, $value, $type = null ) {
	try {
		Updater::update_field( 'comment_meta', $id, $name, $value, $type );
	} catch( Exception $e ) {
		wp_die( $e->getMessage() );
	}
}

function carbon_update_theme_option( $name, $value, $type = null ) {
	try {
		Updater::update_field( 'theme_option', null, $name, $value, $type );
	} catch( Exception $e ) {
		wp_die( $e->getMessage() );
	}
}