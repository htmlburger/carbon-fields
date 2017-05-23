=== Carbon Fields ===
Contributors: htmlburger, m1r0, atanasangelovdev, kamenarov, stoyanov.gs, pkostadinov, panchev, tyxla, xsisqox, catahac, avakul, dilirity, sstoqnov, kaloyanivanov, brutalenemy666, magadanski_uchen, germozy
Tags: custom, field, custom field, advanced, repeater, post, type, text, textarea, file, image, rich text, wysiwyg, select, dropdown, checkbox, radio, association, relationship, map, taxonomy, term, user, comment, option, options, widget, simple fields, magic fields, more fields, post meta, term meta, user meta, comment meta, theme options, custom widget, nested fields
Requires at least: 4.0
Tested up to: 4.7
Stable tag: 1.6.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

WordPress developer-friendly custom fields for post types, taxonomy terms, users, comments, widgets, options and more.

== Description ==

Developer-oriented library for WordPress custom fields for all types of WordPress content.

Carbon fields is a plugin that can be used as a library for easy creation of custom fields in the WordPress administration panel.

Custom fields can be created for post types, taxonomy terms, users, comments, options, navigation menus and even widgets.

Supports PHP5.3 or higher.

= Usage, Documentation & Resources =

* WordPress Plugin: https://wordpress.org/plugins/carbon-fields/
* Website: http://carbonfields.net/
* Documentation (website): http://carbonfields.net/docs/
* Documentation (GitHub): https://github.com/htmlburger/carbon-fields-docs
* FAQ: http://carbonfields.net/faq/
* Support: http://carbonfields.net/support/
* GitHub Repository: https://github.com/htmlburger/carbon-fields

== Installation ==

1. Install Carbon Fields either via the WordPress.org plugin directory, or by uploading the files to your server.
1. Activate the plugin.
1. That's it. You're ready to go! Please, refer to the Usage & Documentation section for examples and how-to information.

== Frequently Asked Questions ==

= Q. What is the minimum supported PHP version? =
A. The plugin supports PHP 5.3 and higher.

= Q. I don't know much about PHP. Where is the administration interface for creating containers and fields? =
A. There is no admin interface. Containers and fields are created programatically, please refer to the Usage & Documentation section for more information.

= Q. Can I create custom widgets with custom fields? =
A. Yes, you can! Creating custom widgets with your preferred fields is now greatly simplified.

= Q. Can I create theme options pages and subpages? =
A. Yes, sir! You can create as many theme options pages and subpages with your preferred custom fields.

= Q. Can I create repeatable sets of fields? =
A. Absolutely. We call them Complex Fields - fields that contain other fields. You can even create complex fields with multiple sets of fields. Then, when creating a repeatable entry, you can select which set of fields to use.

= Q. Can I nest complex (repeatable) fields? If yes, how many levels deep? =
A. Yes, you can nest the fields, at an unlimited depth. The only limit is your imagination. :)

= Q. Is Carbon Fields completely free? =
A. Yes.

= Q. Can I use Carbon Fields for commercial purposes? =
A. Sure, go ahead! It is completely open source.

== Screenshots ==

1. Simple Post Meta container with a Rich Text field.

2. Post Meta container with 2 side-by-side fields - text field and select field.

3. Complex (repeater) field with several fields within it.

4. Nested complex field - repeatable field groups within repeatable field groups.

5. Custom widget with a set ot preferred custom fields.

6. Example that contains most of the available fields, nested fields included.

== Changelog ==

= 1.6 =
Special thanks to all contributors for this release including @pedro-mendonca, @elvishp2006, @timiwahalahti, @campusboy87, @m1r0, @pkostadinov-2create, @georgeHtmlBurger, @yuliyan and others.

 * Added a new field: Radio Image
 * Added new conditional logic comparison operators: `INCLUDES` and `EXCLUDES` which work for array-based fields (e.g. Set_Field) and string-based fields (e.g. Text_Field)
 * Added `Complex_Field::set_collapsed()` method which allows you to control if groups should display collapsed on page load
 * Added partial support for duplicate container names, the only exception being that 2 theme options containers with the same name will still not be allowed
 * Fixed several Sidebar/Widget related issues
 * Fixed Relationship/Assosiation field issues with deleted items
 * Fixed User Meta container title being visible when the container itself is not.
 * Fixed error messages sometimes not being shown for containers
 * Updated `->set_options()` and `->add_options()` to both be able to receive callbacks and arrays.
 * Fixed various Nav_Menu_Container issues
 * Fixed "Click Here" adding 2 entries to empty complex fields
 * Added `User_Meta_Container::show_for()` method to allow users other than administrators to interact with user meta containers
 * The Media popup will now properly mark any previously selected attachment
 * A number of i18n updates, stability improvements and fixes.

= 1.5 =
 * Improved GUI! Big thanks to @holmar and @georgknabl for the great contribution! ([preview](https://cloud.githubusercontent.com/assets/7590968/18725040/fdc911f8-803e-11e6-9749-a218b0584e27.png))
 * Added Brazilian Portuguese (pt_BR) translation (thanks to @elvishp2006).
 * Many bugfixes and improvements.

= 1.4 =
 * Introduced the Complex Field vertical tabbed layout.
 * Allow fields with the same name to be used in different Carbon Containers.
 * Added German (de_DE) translation (thanks to @AlexBa).
 * Added Swedish (sv_SE) translation (thanks to @fhqvst).
 * Added Russian (ru_RU) translation (thanks to @andrewostrin).
 * Added Spanish (es_ES) translation (thanks to @fitodac).
 * Performance improvements.
 * Some i18n improvements.
 * Few bugs squashed.

= 1.3 =
 * Introduced the Complex Field tabbed layout ([example](https://cloud.githubusercontent.com/assets/1612178/17105196/ea28f2f4-528e-11e6-9841-b93c0f12b283.jpg)).
 * Added Portuguese (pt_PT) translation (thanks @pedro-mendonca).
 * Allow saving empty complex field groups.
 * Added a filter for the Google Maps API key.
 * Minor improvements and fixes.

= 1.2 =
* Ensured compabitility with the WordPress Coding Standards.
* Introduced new `Time` field type.
* Introduced new `Date_Time` field type.
* Enhanced the Composer configuration.
* Fixed an issue with handling numeric indexes in `Predefined_Options_Field` field types.
* Fixed several issues with `set_width()` in nested or sibling `Complex` fields.
* Fixed issue with attaching `user_meta` container under certain conditions.
* Enhanced `post_meta` container to use `page` post type when calling the `show_on_page_children()`, `show_on_page()` and `show_on_template()` methods.
* Added French translation.
* Introduced interface for managing header template for `Complex` field groups.
* Introduced a filter for the save button on the `theme_options` container.
* Renamed the textdomain to be compatible with the one, used in GlotPress.
* Added new tests.
* Performed various other code and UI fixes and improvements.

= 1.1 =
* Removed `Attachment` field type, with backwards compatibility.
* The `File` and `Image` field types now save the attachment ID by default.
* Introduced `File_Field::set_value_type()` to easily change the saved value type.
* Added a Vagrantfile.
* Added some `Field` and `Container` tests.
* Renamed `Date_Field::set_options()` to `Date_Field::set_datepicker_options()`.
* Introduced an abstract `Predefined_Options_Field` base for `Select`, `Radio` and `Set` field types.
* Added proxy Container, Field and Widget for shorter `use` statements.
* Introduced an abstract `Scripts_Field` base for `Header Scripts` and `Footer Scripts` field types.
* Introduced an abstract `Meta_Datastore` base for all meta datastore classes.
* Performed various other code fixes and improvements.

= 1.0 =
* Initial version.

== Upgrade Notice ==

= 1.1 =
The `File` and `Image` field types now save the attachment ID by default.
The `Attachment` field type has been removed and now falls back to `File`.
The `Date_Field::set_options()` method is now `Date_Field::set_datepicker_options()`.