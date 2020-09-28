<?php
/**
 * Enqueue theme Assets.
 *
 * @package Game Of Thrones
 */

namespace GOT_THEME\Inc;

use GOT_THEME\Inc\Traits\Singleton;

class Assets{
	use Singleton;

	protected function __construct() {

		// Load class.
		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */

		add_action( 'wp_enqueue_scripts', [ $this, 'register_styles' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'register_scripts' ] );

	}

	public function register_styles(){
		// Register Styles.
		wp_register_style( 'bootstrap-css', GOT_DIR_URI . '/assets/src/library/css/bootstrap.min.css', [], '4.5.2', 'all' );
		wp_register_style( 'main-css', get_stylesheet_uri(), [], filemtime( GOT_DIR_PATH . '/style.css' ), 'all' );

		// Enqueue Styles.
		wp_enqueue_style( 'main-css' );
		wp_enqueue_style( 'bootstrap-css' );


	}


	public function register_scripts(){
		// Register Scripts.
		wp_register_script( 'main-js', GOT_DIR_URI . '/assets/main.js', [], filemtime( GOT_DIR_PATH . '/assets/main.js' ), true );
		wp_register_script( 'bootstrap-js', GOT_DIR_URI . '/assets/src/library/js/bootstrap.min.js', [ 'jquery' ], '4.5.2', true );

		// Enqueue Scripts.
		wp_enqueue_script( 'main-js' );
		wp_enqueue_script( 'bootstrap-js' );
	}
}
