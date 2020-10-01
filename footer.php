<?php
/**
 * Footer Template.
 *
 * @package Game Of Thrones
 */

?>
</div>
<footer class="site-footer">

	<!-- Archives -->
	<h2>Archives</h2>
	<!-- Yearly Archives -->
	<select name="archive-dropdown" onChange='document.location.href=this.options[this.selectedIndex].value;'>
	<option value=""><?php echo attribute_escape(__('Select Year')); ?></option>
	<?php wp_get_archives('type=yearly&format=option&show_post_count=1'); ?> </select>

	<!-- Monthly Archives -->
	<select name="archive-dropdown" onChange='document.location.href=this.options[this.selectedIndex].value;'>
	<option value=""><?php echo attribute_escape(__('Select Month')); ?></option>
	<?php wp_get_archives('type=monthly&format=option&show_post_count=1'); ?> </select>

	<!-- Daily Archives -->
	<select name="archive-dropdown" onChange='document.location.href=this.options[this.selectedIndex].value;'>
	<option value=""><?php echo attribute_escape(__('Select Date')); ?></option>
	<?php wp_get_archives('type=daily&format=option&show_post_count=1'); ?> </select>


	<!-- Sidebar -->
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
