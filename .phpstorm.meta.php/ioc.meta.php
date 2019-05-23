<?php

/**
 * @see https://confluence.jetbrains.com/display/PhpStorm/PhpStorm+Advanced+Metadata#PhpStormAdvancedMetadata-Factorymethods
 */

namespace PHPSTORM_META {

	// Carbon_Fields::resolve()
	override(
		\Carbon_Fields\Carbon_Fields::resolve( 0 ),
		map(
			[
				'container_condition_fulfillable_collection' => \Carbon_Fields\Container\Fulfillable\Fulfillable_Collection::class,
				'container_condition_translator_json' => \Carbon_Fields\Container\Fulfillable\Translator\Json_Translator::class,
				'container_repository' => \Carbon_Fields\Container\Repository::class,
				'containers' => \Carbon_Fields\Pimple\Container::class,
				'fields' => \Carbon_Fields\Pimple\Container::class,
				'key_toolset' => \Carbon_Fields\Toolset\Key_Toolset::class,
				'loader' => \Carbon_Fields\Loader\Loader::class,
				'rest_api_decorator' => \Carbon_Fields\REST_API\Decorator::class,
				'rest_api_router' => \Carbon_Fields\REST_API\Router::class,
				'sidebar_manager' => \Carbon_Fields\Libraries\Sidebar_Manager\Sidebar_Manager::class,
				'wp_toolset' => \Carbon_Fields\Toolset\WP_Toolset::class,
				/* Events */
				'event_emitter' => \Carbon_Fields\Event\Emitter::class,
				'event_persistent_listener' => \Carbon_Fields\Event\PersistentListener::class,
				'event_single_event_listener' => \Carbon_Fields\Event\SingleEventListener::class,
			]
		)
	);

	// Carbon_Fields::service()
	override(
		\Carbon_Fields\Carbon_Fields::service( 0 ),
		map(
			[
				/* Services */
				'legacy_storage' => \Carbon_Fields\Service\Legacy_Storage_Service_v_1_5::class,
				'meta_query' => \Carbon_Fields\Service\Meta_Query_Service::class,
				'rest_api' => \Carbon_Fields\Service\REST_API_Service::class,
				'revisions' => \Carbon_Fields\Service\Revisions_Service::class,
			]
		)
	);


	// Pimple
	override(
		new \Carbon_Fields\Pimple\Container,
		map(
			[
				'container_conditions' => \Carbon_Fields\Pimple\Container::class,
			]
		)
	);

}
