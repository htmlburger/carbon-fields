<?php  

// include dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/wp-load.php';
$path = 'E:\Server/wordpress-tests/bootstrap.php';

if( file_exists( $path ) ) {
    require_once $path;
} else {
    exit( "Couldn't find path to wordpress-tests/bootstrap.php\n" );
}

require_once dirname(dirname(__FILE__)) . '/carbon-fields.php';

