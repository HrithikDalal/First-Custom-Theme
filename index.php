<?php
/**
 * Main template file.
 *
 * @package GameofThrones
 */

get_header();


?>
<div class="container">
	<div id="primary">
		<main id="main" class="site-main mt-5 pl-3" role="main">
			<?php
			if ( have_posts() ) :
				?>
				<?php
				if ( is_home() && ! is_front_page() ) {
					?>
				<header class="mb-5">
					<h1 class="page-title screen-reader-text">
						<?php single_post_title(); ?>
					</h1>
				</header>
				<?php
				}
				?>

				<div class="row">
					<?php
					$index         = 0;
					$no_of_columns = 3;

					while ( have_posts() ) : the_post();

						if ( 0 === $index % $no_of_columns ) {
							?>
							<div class="col-lg-6 col-md-6 col-sm-12">
							<?php
						}

						get_template_part( 'template-parts/content' );

						$index ++;

						if ( 0 !== $index && 0 === $index % $no_of_columns ) {
							?>
							</div>
							<?php
						}

					endwhile;
					?>
				</div>
			<?php

			else :

				get_template_part( 'template-parts/content-none' );

			endif;

			got_pagination();
			?>
		</div>
	</main>
</div>

<?php
get_footer();
