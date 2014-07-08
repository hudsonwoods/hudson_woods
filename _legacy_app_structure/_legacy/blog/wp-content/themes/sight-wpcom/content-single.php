<?php
/**
 * @package Sight
 * @since Sight 1.0
 */
?>
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

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<h1 class="entry-title"><?php the_title(); ?></h1>
		<?php if ( 'post' == get_post_type() ) : ?>
		<div class="entry-meta">
			<?php sight_posted_on(); ?>
			<?php if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) : ?>
			<span class="comments-link"><?php comments_popup_link( __( 'Leave a comment', 'sight' ), __( '1 Comment', 'sight' ), __( '% Comments', 'sight' ) ); ?></span>
			<?php endif; ?>
		</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
		<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'sight' ), 'after' => '</div>' ) ); ?>
	</div><!-- .entry-content -->

	<footer class="entry-meta">
		<?php
			/* translators: used between list items, there is a space after the comma */
			$tag_list = get_the_tag_list( '', ', ' );

				if ( '' != $tag_list ) {
					$meta_text = __( '<span class="tag-label">Tags:</span> %1$s. Bookmark the <a href="%2$s" title="Permalink to %3$s" rel="bookmark">permalink</a>.', 'sight' );
				} else {
					$meta_text = __( 'Bookmark the <a href="%2$s" title="Permalink to %2$s" rel="bookmark">permalink</a>.', 'sight' );
				}

			printf(
				$meta_text,
				$tag_list,
				get_permalink(),
				the_title_attribute( 'echo=0' )
			);
		?>

		<?php edit_post_link( __( 'Edit', 'sight' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-meta -->
</article><!-- #post-<?php the_ID(); ?> -->