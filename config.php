<?php

namespace Carbon_Fields;

# Define version constant
if ( ! defined( __NAMESPACE__ . '\VERSION' ) ) {
	define( __NAMESPACE__ . '\VERSION', '1.5.0' );
}

# Define root directory
if ( ! defined( __NAMESPACE__ . '\DIR' ) ) {
	define( __NAMESPACE__ . '\DIR', __DIR__ );
}

# Define root URL
if ( ! defined( __NAMESPACE__ . '\URL' ) ) {
	define( __NAMESPACE__ . '\URL', Carbon_Fields::directory_to_url( \Carbon_Fields\DIR ) );
}

# Define root URL
if ( ! defined( __NAMESPACE__ . '\VALUE_PROPERTY' ) ) {
	define( __NAMESPACE__ . '\VALUE_PROPERTY', \Carbon_Fields\Value_Set\Value_Set::VALUE_PROPERTY );
}
