<?php
/**
 * Bootstraps the Theme.
 *
 * @package Game Of Thrones
 */

namespace GOT_THEME\Inc;

use GOT_THEME\Inc\Traits\Singleton;

class GOT_THEME {
	use Singleton;

	protected function __construct() {

		// Load class.

		Assets::get_instance();

		Menus::get_instance();

		Meta_Boxes::get_instance();

		Sidebars::get_instance();

		$this->setup_hooks();

		Block_Patterns::get_instance();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'after_setup_theme', [ $this, 'setup_theme' ] );
	}

	/**
	 * Setup theme.
	 *
	 * @return void
	 */
	public function setup_theme() {

		add_theme_support( 'title-tag' );

		/**
		 * Custom logo.
		 *
		 * @see Adding custom logo
		 * @link https://developer.wordpress.org/themes/functionality/custom-logo/#adding-custom-logo-support-to-your-theme
		 */

		add_theme_support('custom-logo',[
			'header-text' => [
				'site-title',
				'site-description',
			],
			'height'      => 100,
			'width'       => 400,
			'flex-height' => true,
			'flex-width'  => true,
			]
		);

		/**
		 * Adds Custom background panel to customizer.
		 *
		 * @see Enable Custom Backgrounds
		 * @link https://developer.wordpress.org/themes/functionality/custom-backgrounds/#enable-custom-backgrounds
		 */
		add_theme_support(
			'custom-background',
			[
				'default-color' => 'ffffff',
				'default-image' => '',
				'default-repeat' => 'no-repeat',
			]
		);


		add_theme_support( 'post-thumbnails' );

		add_theme_support( 'post-formats', array( 'aside', 'gallery' ) );


		/**
		 * Register image sizes.
		 */
		add_image_size( 'featured-thumbnail', 350, 233, true );

		add_theme_support( 'customize-selective-refresh-widgets' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		add_theme_support(
			'html5',
			[
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'script',
				'style',
			]
		);

		add_editor_style();
		// Gutenberg theme support.

		add_theme_support( 'wp-block-styles' );

		add_editor_style( 'assets/build/css/editor.css' );

		add_theme_support( 'align-wide' );

		// Remove the core block patterns
		//remove_theme_support( 'core-block-patterns' );

		global $content_width;
		if ( ! isset( $content_width ) ) {
			$content_width = 1240;
		}
	}

}
