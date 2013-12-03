<?php
$domain = 'crb';
$locale = get_locale();
$locale = apply_filters( 'plugin_locale', $locale, $domain );
$mofile = $locale . '.mo';
$lang_dir = CARBON_PLUGIN_ROOT . DIRECTORY_SEPARATOR . 'lang';

load_textdomain( 'crb', $lang_dir . DIRECTORY_SEPARATOR . $mofile );
?>