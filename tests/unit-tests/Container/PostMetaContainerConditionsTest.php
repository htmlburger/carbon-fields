<?php

use \Carbon_Fields\Pimple\Container as PimpleContainer;
use \Carbon_Fields\App;
use \Carbon_Fields\Container\Container;
use \Carbon_Fields\Container\Repository as ContainerRepository;
use \Carbon_Fields\Key_Toolset\Key_Toolset;
use \Carbon_Fields\Service\Legacy_Storage_Service;

class PostMetaContainerConditionsTest extends WP_UnitTestCase {
	
	public function setUp() {
		parent::setup();

		$ioc = new PimpleContainer();

		$ioc['container_repository'] = function( $ioc ) {
			return new ContainerRepository();
		};

		$ioc['key_toolset'] = function( $ioc ) {
			return new Key_Toolset();
		};

		$ioc['legacy_storage_service'] = function( $ioc ) {
			return new Legacy_Storage_Service( $ioc['container_repository'], $ioc['key_toolset'] );
		};

		App::instance()->install( $ioc );

		$this->containerType = 'post_meta';
		$this->containerTitle = 'Page Settings';
		$this->page = get_post( $this->factory->post->create( array( 'post_type' => 'page' ) ) );
	}

	public function tearDown() {
		parent::tearDown();

		unset( $this->page );
		App::instance()->install( new PimpleContainer() );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_page_children
	 */
	public function testShowOnPageChildrenResultPostType() {
		$container = Container::factory( $this->containerType, $this->containerTitle );
		$container->show_on_page_children( $this->page->post_name );
		$this->assertSame( array( 'page' ), $container->settings['post_type'] );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_page
	 */
	public function testShowOnPageByIdResultPostType() {
		$container = Container::factory( $this->containerType, $this->containerTitle );
		$container->show_on_page( $this->page->ID );
		$this->assertSame( array( 'page' ), $container->settings['post_type'] );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_page
	 */
	public function testShowOnPageByIdResultPageId() {
		$container = Container::factory( $this->containerType, $this->containerTitle );
		$container->show_on_page( $this->page->ID );
		$this->assertSame( $this->page->ID, $container->settings['show_on']['page_id'] );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_page
	 */
	public function testShowOnPageByPathResultPostType() {
		$container = Container::factory( $this->containerType, $this->containerTitle );
		$container->show_on_page( $this->page->post_name );
		$this->assertSame( array( 'page' ), $container->settings['post_type'] );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_page
	 */
	public function testShowOnPageByPathResultPageId() {
		$container = Container::factory( $this->containerType, $this->containerTitle );
		$container->show_on_page( $this->page->post_name );
		$this->assertSame( $this->page->ID, $container->settings['show_on']['page_id'] );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_template
	 */
	public function testShowOnTemplateStringResultPostType() {
		$container = Container::factory( $this->containerType, $this->containerTitle );
		$container->show_on_template( 'default' );
		$container->show_on_post_type( 'page' );
		$this->assertSame( array( 'page' ), $container->settings['post_type'] );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_template
	 */
	public function testShowOnTemplateArrayResultPostType() {
		$container = Container::factory( $this->containerType, $this->containerTitle );
		$container->show_on_template( array( 'default' ) );
		$container->show_on_post_type( 'page' );
		$this->assertSame( array( 'page' ), $container->settings['post_type'] );
	}

}