<?php
/**
 * Sight functions and definitions
 *
 * @package Sight
 * @since Sight 1.0
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 *
 * @since Sight 1.0
 */
if ( ! isset( $content_width ) )
	$content_width = 610; /* pixels */

if ( ! function_exists( 'sight_setup' ) ):
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 *
 * @since Sight 1.0
 */
function sight_setup() {

	/**
	 * Custom template tags for this theme.
	 */
	require( get_template_directory() . '/inc/template-tags.php' );

	/**
	 * Custom functions that act independently of the theme templates
	 */
	require( get_template_directory() . '/inc/tweaks.php' );

	/**
	 * Make theme available for translation
	 * Translations can be filed in the /languages/ directory
	 * If you're building a theme based on Sight, use a find and replace
	 * to change 'sight' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'sight', get_template_directory() . '/languages' );

	/**
	 * Add default posts and comments RSS feed links to head
	 */
	add_theme_support( 'automatic-feed-links' );

	/**
	 * Enable support for Post Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );

	// We'll be using post thumbnails on the front page, search results and archive pages, and in the slider.
	add_image_size( 'sight-thumbnail', 290, 290, true );
	add_image_size( 'sight-featured-thumbnail', 640, 400, true );

	/**
	 * This theme uses wp_nav_menu() in two locations.
	 */
	register_nav_menus( array(
		'primary'   => __( 'Primary Menu', 'sight' ),
		'secondary' => __( 'Secondary Menu', 'sight' ),
	) );

	/**
	 * Add support for the Aside Post Formats
	 */
	add_theme_support( 'post-formats', array( 'aside', ) );
}
endif; // sight_setup
add_action( 'after_setup_theme', 'sight_setup' );

/**
 * Setup the WordPress core custom background feature.
 *
 * Hooks into the after_setup_theme action.
 *
 * @since sight 1.0.1
 */
function sight_register_custom_background() {
	add_theme_support( 'custom-background', apply_filters( 'sight_custom_background_args', array(
		'default-color' => '27292a',
	) ) );
}
add_action( 'after_setup_theme', 'sight_register_custom_background' );

/**
 * Register widgetized area and update sidebar with default widgets
 *
 * @since Sight 1.0
 */
function sight_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'sight' ),
		'id'            => 'sidebar-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => "</aside>",
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
}
add_action( 'widgets_init', 'sight_widgets_init' );

/**
 * Enqueue scripts and styles
 */
function sight_scripts() {
	global $post;

	wp_enqueue_style( 'style', get_stylesheet_uri() );

	wp_enqueue_script( 'small-menu', get_template_directory_uri() . '/js/small-menu.js', array( 'jquery' ), '20120206', true );

	$protocol = is_ssl() ? 'https' : 'http';
	wp_enqueue_style( 'googlefonts', "$protocol://fonts.googleapis.com/css?family=Old+Standard+TT:400,700" );

	if ( is_home() ) {
		wp_enqueue_script( 'jquery-cycle', get_template_directory_uri() . '/js/jquery.cycle.min.js', array( 'jquery' ), '20120827', true );
		wp_enqueue_script( 'slider', get_template_directory_uri() . '/js/slider.js', array( 'jquery' ), '20120827', true );
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	if ( is_singular() && wp_attachment_is_image( $post->ID ) ) {
		wp_enqueue_script( 'keyboard-image-navigation', get_template_directory_uri() . '/js/keyboard-image-navigation.js', array( 'jquery' ), '20120202' );
	}
}
add_action( 'wp_enqueue_scripts', 'sight_scripts' );

/**
 * Enqueue fonts on admin custom header page
 */
function sight_header_fonts( $hook_suffix ) {
	if ( 'appearance_page_custom-header' != $hook_suffix )
		return;

	$protocol = is_ssl() ? 'https' : 'http';
	wp_enqueue_style( 'googlefonts', "$protocol://fonts.googleapis.com/css?family=Old+Standard+TT:400,700" );

}
add_action( 'admin_enqueue_scripts', 'sight_header_fonts' );

/**
 * Filter the home page posts, and remove any featured post ID's from it. Hooked
 * onto the 'pre_get_posts' action, this changes the parameters of the query
 * before it gets any posts.
 *
 * @global array $featured_post_id
 * @param WP_Query $query
 * @return WP_Query Possibly modified WP_query
 */
function sight_home_posts( $query = false ) {

	// Bail if not home, not a query, not main query, or no featured posts
	if ( ! is_home() || ! is_a( $query, 'WP_Query' ) || ! $query->is_main_query() || ! sight_featuring_posts() )
		return $query;

	// Exclude featured posts from the main query
	$query->query_vars['post__not_in'] = sight_featuring_posts();

	return $query;
}
add_action( 'pre_get_posts', 'sight_home_posts' );

/**
 * Test to see if any posts meet our conditions for featuring posts.
 * Current conditions are:
 *
 * - sticky posts
 * - with featured thumbnails
 *
 * We store the results of the loop in a transient, to prevent running this
 * extra query on every page load. The results are an array of post ID's that
 * match the result above. This gives us a quick way to loop through featured
 * posts again later without needing to query additional times later.
 */
function sight_featuring_posts( $force_update = false ) {
	if ( $force_update || ( false === ( $featured_post_ids = get_transient( 'featured_post_ids' ) ) ) ) {

		// Proceed only if sticky posts exist.
		$sticky = get_option( 'sticky_posts' );

		// Proceed only if sticky posts exist.
		if ( is_array( $sticky ) && ! empty( $sticky ) ) {

			$featured_args = array(
				'post__in'            => $sticky,
				'post_status'         => 'publish',
				'no_found_rows'       => true,
				'ignore_sticky_posts' => true,
				'posts_per_page'      => 30,
			);

			// The Featured Posts query.
			$featured = new WP_Query( $featured_args );

			// Proceed only if published posts with thumbnails exist
			if ( $featured->have_posts() ) {
				while ( $featured->have_posts() ) {
					$featured->the_post();
					if ( has_post_thumbnail( $featured->post->ID ) ) {
						$featured_post_ids[] = $featured->post->ID;
					}
				}

				set_transient( 'featured_post_ids', $featured_post_ids );
			}

			wp_reset_postdata();

		}
	}

	return $featured_post_ids;
}

/**
 * Flush out the transients used in sight_featuring_posts()
 *
 * @since Sight 1.0
 */
function sight_featured_post_checker_flusher() {
	// Vvwooshh!
	delete_transient( 'featured_post_ids' );
}
add_action( 'update_option_sticky_posts', 'sight_featured_post_checker_flusher' );
add_action( 'save_post', 'sight_featured_post_checker_flusher' );

/**
 * Implement the Custom Header feature
 */
require( get_template_directory() . '/inc/custom-header.php' );

/**
 * Infinite Scroll Support
 *
 * Theme Name: Sight
 */

/**
 * Add theme support for Infinite Scroll. The check for this is in ../../infinity.php in settings_api_init().
 */
function sight_infinite_scroll_init() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'content'
	) );
}
add_action( 'init', 'sight_infinite_scroll_init' );

/**
 * All IS-specific style overrides for individual themes will be in a CSS file named, appropriately, using the theme slug.
 */
function sight_infinite_scroll_enqueue_styles() {
	wp_enqueue_style( 'infinity-sight', plugins_url( 'sight.css', __FILE__ ), array(), '20120829' );
}
add_action( 'wp_enqueue_scripts', 'sight_infinite_scroll_enqueue_styles', 25 );

// updater for WordPress.com themes
if ( is_admin() )
	include dirname( __FILE__ ) . '/inc/updater.php';
