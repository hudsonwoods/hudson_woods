<?php
/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features
 *
 * @package Sight
 * @since Sight 1.0
 */

/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 *
 * @since Sight 1.0
 */
function sight_page_menu_args( $args ) {
	$args['show_home'] = true;
	return $args;
}
add_filter( 'wp_page_menu_args', 'sight_page_menu_args' );

/**
 * Adds custom classes to the array of body classes.
 *
 * @since Sight 1.0
 */
function sight_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	return $classes;
}
add_filter( 'body_class', 'sight_body_classes' );

/**
 * Filter in a link to a content ID attribute for the next/previous image links on image attachment pages
 *
 * @since Sight 1.0
 */
function sight_enhanced_image_navigation( $url, $id ) {
	if ( ! is_attachment() && ! wp_attachment_is_image( $id ) )
		return $url;

	$image = get_post( $id );
	if ( ! empty( $image->post_parent ) && $image->post_parent != $id )
		$url .= '#main';

	return $url;
}
add_filter( 'attachment_link', 'sight_enhanced_image_navigation', 10, 2 );

/**
 * Returns a "Continue Reading" link for excerpts
 */
function sight_reading_link() {
	return ' <span class="more-link"><a href="'. esc_url( get_permalink() ) . '">' . __( 'Continue reading &raquo;', 'sight' ) . '</a></span>';
}

/**
 * Replaces "[...]" (appended to automatically generated excerpts) with an ellipsis.
 *
 * To override this in a child theme, remove the filter and add your own
 * function tied to the excerpt_more filter hook.
 */
function sight_auto_excerpt_more( $more ) {
	return ' &hellip;';
}
add_filter( 'excerpt_more', 'sight_auto_excerpt_more' );

/**
 * Adds a pretty "Continue Reading" link to custom post excerpts.
 *
 * To override this link in a child theme, remove the filter and add your own
 * function tied to the get_the_excerpt filter hook.
 */
function sight_custom_excerpt_more( $output ) {
	if ( in_the_loop() && ! is_attachment() )
		$output .= sight_reading_link();

	return $output;
}
add_filter( 'get_the_excerpt', 'sight_custom_excerpt_more' );

/**
 * Filters wp_title to print a neat <title> tag based on what is being viewed.
 *
 * @since Sight 1.0
 */
function sight_wp_title( $title, $sep ) {
	global $page, $paged;

	if ( is_feed() )
		return $title;

	// Add the blog name
	$title .= get_bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		$title .= " $sep $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		$title .= " $sep " . sprintf( __( 'Page %s', 'sight' ), max( $paged, $page ) );

	return $title;
}
add_filter( 'wp_title', 'sight_wp_title', 10, 2 );
