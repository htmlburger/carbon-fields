<?php
/* Basic Container declarations */
$custom_fields_panel = new ECF_Container_CustomFields('Custom Fields Panel');
$custom_fields_panel->setup(array(
	'post_type'=>'post',
	'category'=>'news',
));

$theme_options_page = new ECF_Container_ThemeOptions('Custom T O');
$custom_fields_panel->setup(array(
	'parent'=>'Theme Options',
	'page_name'=>'Color Options',
));

$tax_meta_fields = new ECF_Container_TaxonomyMeta('Tax Meta Fields');
$tax_meta_fields->setup(array(
	'taxonomy'=>'categories',
));

/* Standard fields */
$custom_fields_panel->add_fields(array(
	ECF_Field::factory('image', 'img'),
	ECF_Field::factory('file', 'pdf')->set_datastore(new EECF_DataStore({})),
));

/* Compound */
$custom_fields_panel->add_fields(array(
	ECF_Field::factory('image', 'img'),
	ECF_Field::factory('compound', 'slideshow')->add_fields(array(
		ECF_Field::factory('text', 'title'),
		ECF_Field::factory('img', 'img'),
	)),
));


/* Front end functions(theme functions) */

// 1. Simple ECF retirevment. In the loop:
?>
<h1><?php the_title() ?></h1>
<h2><?php echo get_post_meta('subtitle') ?></h2>
<?php

$slides = ecf_get_compound_fields('slideshow');
foreach ($slides as $slide) {
	echo "<li>$slide[title] <img src='$slide[img]'/></li>";
}

?>