<?php

namespace Carbon_Fields;

# Define version constant
if ( ! defined( __NAMESPACE__ . '\VERSION' ) ) {
	define( __NAMESPACE__ . '\VERSION', '2.1.1' );
}

# Define root directory
if ( ! defined( __NAMESPACE__ . '\DIR' ) ) {
	define( __NAMESPACE__ . '\DIR', __DIR__ );
}

# Define root URL
if ( ! defined( __NAMESPACE__ . '\URL' ) ) {
	define( __NAMESPACE__ . '\URL', Carbon_Fields::directory_to_url( \Carbon_Fields\DIR ) );
}

# Define whether to compact input fields into a single one to avoid hitting max_input_vars
if ( ! defined( __NAMESPACE__ . '\COMPACT_INPUT' ) ) {
	define( __NAMESPACE__ . '\COMPACT_INPUT', false );
}

# Define whether to compact input fields into a single one to avoid hitting max_input_vars
if ( ! defined( __NAMESPACE__ . '\COMPACT_INPUT_KEY' ) ) {
	define( __NAMESPACE__ . '\COMPACT_INPUT_KEY', 'carbon_fields_compact_input' );
}
