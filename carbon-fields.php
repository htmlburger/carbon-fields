<?php
/*
Plugin Name: Carbon Fields
Description: Provides additional custom fields for posts, categories, users, widgets and more
Version: 0.4.2
Requires at least: 3.9
Tested up to: 4.3.1
*/

namespace Carbon_Fields;

use Carbon_Fields\Helper\Helper;

define('DIR', dirname(__FILE__));
define('URL', str_replace('\\', '/', str_replace(untrailingslashit(ABSPATH), site_url(), DIR)));

include_once( DIR . '/vendor/autoload.php' );

# Initialize helper 
$carbon_helper = new Helper();