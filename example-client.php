<?php
/* Basic Container declarations */
$custom_fields_panel = new Carbon_Container_CustomFields('Custom Fields Panel');
$custom_fields_panel->setup(array(
	'post_type'=>'post',
	'category'=>'news',
));

$theme_options_page = new Carbon_Container_ThemeOptions('Custom T O');
$custom_fields_panel->setup(array(
	'parent'=>'Theme Options',
	'page_name'=>'Color Options',
));

$tax_meta_fields = new Carbon_Container_TaxonomyMeta('Tax Meta Fields');
$tax_meta_fields->setup(array(
	'taxonomy'=>'categories',
));

/* Standard fields */
$custom_fields_panel->add_fields(array(
	Carbon_Field::factory('image', 'img'),
	Carbon_Field::factory('file', 'pdf')->set_datastore(new Carbon_DataStore({})),
));

/* Compound */
$custom_fields_panel->add_fields(array(
	Carbon_Field::factory('image', 'img'),
	Carbon_Field::factory('compound', 'slideshow')->add_fields(array(
		Carbon_Field::factory('text', 'title'),
		Carbon_Field::factory('img', 'img'),
	)),
));


/* Front end functions(theme functions) */

// 1. Simple Carbon retirevment. In the loop:
?>
<h1><?php the_title() ?></h1>
<h2><?php echo get_post_meta('subtitle') ?></h2>
<?php

// TODO:
carbon_get_post_meta($id, 'test_check', 'complex');
carbon_get_tax_meta($id, 'test_check');
carbon_get_theme_option('test_check');
carbon_get_user_meta($id, 'test_check');

$slides = carbon_get_complex_fields('slideshow');
foreach ($slides as $slide) {
	echo "<li>$slide[title] <img src='$slide[img]'/></li>";
}

?>