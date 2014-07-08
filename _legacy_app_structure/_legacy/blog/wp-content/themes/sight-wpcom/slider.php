<?php
/*
 * Template for the Slider
 *
 * @package Sight
 * @since Sight 1.0
*/

// Proceed only if sticky posts exist.

$featured_posts = sight_featuring_posts();

if ( ! empty( $featured_posts ) ) :

	$featured_args = array(
		'post__in'            => $featured_posts,
		'post_status'         => 'publish',
		'no_found_rows'       => true,
		'ignore_sticky_posts' => true,
		'posts_per_page'      => 30,
	);

	// The Featured Posts query.
	$featured = new WP_Query( $featured_args );

	// Proceed only if published posts exist
	if ( $featured->have_posts() ) : ?>

		<section class="featured-wrapper">
			<div class="featured-nav-wrapper">
				<div id="featured-content" class="clear-fix">
				<?php while ( $featured->have_posts() ) : $featured->the_post(); ?>
					<article class="<?php echo ( 0 == $order ) ? 'featured-post first' : 'featured-post'; ?>">
					<?php if ( '' != get_the_post_thumbnail() ) : ?>
						<div class="featured-thumbnail">
							<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', 'sight' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark">
								<?php the_post_thumbnail( 'sight-featured-thumbnail' ); ?>
							</a>
						</div><!-- .featured-thumbnail -->
					<?php endif; ?>
						<div class="featured-post-content">
							<header class="entry-header">
								<div class="entry-categories">
									<?php if ( 'post' == get_post_type() ) : // Hide category and tag text for pages on Search ?>
										<?php
											/* translators: used between list items, there is a space after the comma */
											$categories_list = get_the_category_list( __( ' / ', 'sight' ) );
											if ( $categories_list && sight_categorized_blog() ) :
										?>
										<span class="cat-links">
											<?php printf( __( '%1$s', 'sight' ), $categories_list ); ?>
										</span>
										<?php endif; // End if categories ?>
									<?php endif; // End if 'post' == get_post_type() ?>
								</div><!-- .entry-categories -->

								<h1 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', 'sight' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>

								<?php if ( 'post' == get_post_type() ) : ?>
								<div class="entry-meta">
									<?php sight_posted_on(); ?>
									<?php if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) : ?>
									<span class="sep"> &#8226; </span>
									<span class="comments-link"><?php comments_popup_link( __( 'Leave a comment', 'sight' ), __( '1 Comment', 'sight' ), __( '% Comments', 'sight' ) ); ?></span>
									<?php endif; ?>
								</div><!-- .entry-meta -->
								<?php endif; ?>
							</header><!-- .entry-header -->

							<div class="entry-summary">
								<?php the_excerpt(); ?>
							</div><!-- .entry-summary -->
						</div><!-- .featured-post-content-->
					</article><!-- .featured-post -->
				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>
				</div><!-- .featured-content -->
				<span id="slider-prev" class="slider-nav">&larr;</span>
				<span id="slider-next" class="slider-nav">&rarr;</span>
			</div><!--.featured-nav-wrapper -->
		</section><!-- .featured-wrapper -->
	<?php endif; // $featured->have_posts()
endif; // ! empty( $sticky ) ?>