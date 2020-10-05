<?php
/**
 * Author template file.
 *
 * @package GameofThrones
 */

get_header();


?>
<div class="container">
	<div id="primary">
		<main id="main" class="site-main mt-3 p-5" role="main">
			<!-- This sets the $curauth variable -->
			<?php
			$curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));
			?>

			<h2>About: <?php echo $curauth->nickname; ?></h2>
			<dl>
				<dt>Website</dt>
				<dd><a href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->user_url; ?></a></dd>
				<dt>Profile</dt>
				<dd><?php echo $curauth->user_description; ?></dd>
			</dl>

			<h2>Posts by <?php echo $curauth->nickname; ?>:</h2>

			<ol>
			<!-- The Loop -->

			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<div class="author-post">
				<li>
					<div class="author-post-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link: <?php the_title(); ?>">
					<?php the_title(); ?></a>,<?php the_time('d M Y'); ?> in <?php the_category('&');?></div>
					<div class="author-post-thumbnail">
						<?php the_post_thumbnail('thumbnail') ?>
					</div>
					<?php the_excerpt(); ?>
				</li>
			</div>


			<?php endwhile; else: ?>
				<p><?php _e('No posts by this author.'); ?></p>

			<?php endif; ?>

			<!-- End Loop -->

			</ul>
		</main>
	</div
</div>

<?php
get_footer();
