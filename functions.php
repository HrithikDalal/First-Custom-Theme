<?php
/**
 * Theme Functions.
 *
 * @package Game Of Thrones
 */

// echo '<pre>';
// print_r(get_template_directory_uri() . '/assets/src/library/css/bootstrap.min.css');
// wp_die();


if ( ! defined( 'GOT_DIR_PATH' ) ) {
	define( 'GOT_DIR_PATH', untrailingslashit( get_template_directory() ) );
}

if ( ! defined( 'GOT_DIR_URI' ) ) {
	define( 'GOT_DIR_URI', untrailingslashit( get_template_directory_uri() ) );
}

if ( ! defined( 'GOT_BUILD_URI' ) ) {
	define( 'GOT_BUILD_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build' );
}

if ( ! defined( 'GOT_BUILD_JS_URI' ) ) {
	define( 'GOT_BUILD_JS_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build/js' );
}

if ( ! defined( 'GOT_BUILD_JS_DIR_PATH' ) ) {
	define( 'GOT_BUILD_JS_DIR_PATH', untrailingslashit( get_template_directory() ) . '/assets/build/js' );
}

if ( ! defined( 'GOT_BUILD_IMG_URI' ) ) {
	define( 'GOT_BUILD_IMG_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build/src/img' );
}

if ( ! defined( 'GOT_BUILD_CSS_URI' ) ) {
	define( 'GOT_BUILD_CSS_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build/css' );
}

if ( ! defined( 'GOT_BUILD_CSS_DIR_PATH' ) ) {
	define( 'GOT_BUILD_CSS_DIR_PATH', untrailingslashit( get_template_directory() ) . '/assets/build/css' );
}

if ( ! defined( 'GOT_BUILD_LIB_URI' ) ) {
	define( 'GOT_BUILD_LIB_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build/library' );
}

require_once GOT_DIR_PATH . '/inc/helpers/autoloader.php';

function got_get_theme_instance(){
	\GOT_THEME\Inc\GOT_THEME::get_instance();
}

got_get_theme_instance();

?>
