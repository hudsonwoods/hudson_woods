<?php
/**
 * Sample implementation of the Custom Header feature
 * http://codex.wordpress.org/Custom_Headers
 *
 * You can add an optional custom header image to header.php like so ...

	<?php $header_image = get_header_image();
	if ( ! empty( $header_image ) ) { ?>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
			<img src="<?php header_image(); ?>" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>" alt="" />
		</a>
	<?php } // if ( ! empty( $header_image ) ) ?>

 *
 * @package Sight
 * @since Sight 1.0
 */

/**
 * Setup the WordPress core custom header feature.
 *
 * @uses sight_header_style()
 * @uses sight_admin_header_style()
 * @uses sight_admin_header_image()
 *
 * @package Sight
 */
function sight_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'sight_custom_header_args', array(
		'default-image'          => '',
		'default-text-color'     => '000',
		'width'                  => 580,
		'height'                 => 150,
		'flex-width'			 => false,
		'flex-height'            => true,
		'wp-head-callback'       => 'sight_header_style',
		'admin-head-callback'    => 'sight_admin_header_style',
	) ) );
}
add_action( 'after_setup_theme', 'sight_custom_header_setup' );

if ( ! function_exists( 'sight_header_style' ) ) :
/**
 * Styles the header image and text displayed on the blog
 *
 * @see sight_custom_header_setup().
 *
 * @since Sight 1.0
 */
function sight_header_style() {

	// If no custom options for text are set, let's bail
	// get_header_textcolor() options: HEADER_TEXTCOLOR is default, hide text (returns 'blank') or any hex value
	if ( HEADER_TEXTCOLOR == get_header_textcolor() && '' == get_header_image() )
		return;

	$header = get_custom_header();
	// If we get this far, we have custom styles. Let's do this.
	?>
	<style type="text/css">
	<?php
		// Do we have a custom header image?
		if ( '' != get_header_image() ) :
	?>
		.site-header hgroup {
			background: url(<?php header_image(); ?>) no-repeat;
			margin: 0;
			min-height: <?php echo $header->height; ?>px;
			height: auto !important;
		}
		.header-link {
			display: table-cell;
		}

		@media only screen and (max-width: 890px) {
			.site-header hgroup {
				background-size: contain;
				min-height: auto;
				height: auto;
			}
		}
	<?php
		endif;

		// Has the text been hidden?
		if ( 'blank' == get_header_textcolor() ) :
	?>
		.site-title,
		.site-description {
			text-indent: -9999px;
			clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
			clip: rect(1px, 1px, 1px, 1px);
		}
	<?php
		// If the user has set a custom color for the text use that
		else :
	?>
		.site-title a,
		.site-description {
			color: #<?php echo get_header_textcolor(); ?> !important;
		}
	<?php endif; ?>
	</style>
	<?php
}
endif; // sight_header_style

if ( ! function_exists( 'sight_admin_header_style' ) ) :
/**
 * Styles the header image displayed on the Appearance > Header admin panel.
 *
 * @see sight_custom_header_setup().
 *
 * @since Sight 1.0
 */
function sight_admin_header_style() {
	$header = get_custom_header();
?>
	<style type="text/css">
	.appearance_page_custom-header #headimg {
		border: none;
	}
	#headimg h1 {
		float: left;
		font-family: 'Old Standard TT',Georgia,'Times New Roman',serif;
		font-size: 115px;
		font-weight: 700;
		letter-spacing: -1px;
		line-height: 1;
		margin: 0 0 0 25px;
		padding-bottom: 0.1em;
		text-transform: lowercase;
		max-width: 290px;
	}
	#headimg h1 a {
		text-decoration: none;
	}
	#desc {
		color: #656363;
		float: left;
		font-size: 11px;
		line-height: 1.3;
		margin: 0 3.174603174%;
		padding: 4em 0 1em;
		max-width: 40%;
	}
	#headimg {
		background-repeat: no-repeat;
		height: auto !important;
		min-height: <?php echo $header->height; ?>px;
	}
	</style>
<?php
}
endif; // sight_admin_header_style