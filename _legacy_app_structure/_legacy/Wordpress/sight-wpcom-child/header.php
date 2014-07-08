<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package Sight
 * @since Sight 1.0
 */
?><!DOCTYPE html>
<!--[if IE 8]>
<html id="ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 8) ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->

<script type="text/javascript" src="//use.typekit.net/zfx0usa.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<?php do_action( 'before' ); ?>
	<header id="masthead" class="site-header" role="banner">
		<a class="header-link" href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"></a>
		<hgroup>
			<h1 class="site-title"><a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</hgroup>

		<div class="header-nav-search-container">
			<div class="header-search">
				 <?php get_search_form(); ?>
			</div><!-- .header-search -->
			<nav role="navigation" class="secondary-navigation">
				<h1 class="assistive-text"><?php _e( 'Menu', 'sight' ); ?></h1>
				<div class="assistive-text skip-link"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'sight' ); ?>"><?php _e( 'Skip to content', 'sight' ); ?></a></div>
				<?php wp_nav_menu( array( 'theme_location' => 'secondary', 'depth' => '1', 'fallback_cb' => false ) ); ?>
			</nav><!-- .site-navigation .secondary-navigation -->
		</div><!-- .header-nav-search-container -->
	</header><!-- #masthead .site-header -->

	<nav role="navigation" class="site-navigation main-navigation">
		<h1 class="assistive-text"><?php _e( 'Menu', 'sight' ); ?></h1>
		<div class="assistive-text skip-link"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'sight' ); ?>"><?php _e( 'Skip to content', 'sight' ); ?></a></div>

		<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
	</nav><!-- .site-navigation .main-navigation -->

	<?php // Load the slider only on the home page
		if ( is_home() ) :
			get_template_part( 'slider' ); // Loads the slider.php template.
		endif;
	?>

	<div id="main">