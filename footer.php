<?php
/**
 * Footer Template.
 *
 * @package Game Of Thrones
 */

?>
</div>
<footer class="site-footer">
	<h2>Archives</h2>
	<span> By Year - <?php wp_get_archives('type=yearly'); ?> </span>
	<span> By Month - <?php wp_get_archives('type=monthly'); ?> </span>
	<span> By Date - <?php wp_get_archives('type=daily'); ?> </span>

	<?php if ( is_active_sidebar( 'sidebar-2' ) ) { ?>
		<aside>
			<?php dynamic_sidebar( 'sidebar-2' ); ?>
		</aside>
	<?php } ?>

</footer>

</div>
<?php wp_footer(); ?>
</body>
</html>
