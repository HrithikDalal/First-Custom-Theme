<?php
/**
 * Footer Template.
 *
 * @package Game Of Thrones
 */

?>
</div>
<footer class="site-footer">
	<h3>Footer</h3>
	<h2>Archives</h2>
	<ul>
		<li>By Month - <select><option><?php wp_get_archives('type=monthly'); ?></option></select> </li>
		<li>By Year - <select><option><?php wp_get_archives('type=yearly'); ?></option></select> </li>
		<li>By Date - <select><option><?php wp_get_archives('type=daily'); ?></option></select> </li>
	</ul>
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
