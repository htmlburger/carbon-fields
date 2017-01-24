<?php

use \Carbon_Fields\Container\Repository;

class PostMetaContainerConditionsTest extends WP_UnitTestCase {
	
	public function setUp() {
		parent::setup();

		$this->containerType = 'post_meta';
		$this->containerTitle = 'Page Settings';
		$this->page = get_post( $this->factory->post->create( array( 'post_type' => 'page' ) ) );
		$this->repository = new Repository();
	}

	public function tearDown() {
		parent::tearDown();

		unset( $this->page );
		$this->repository = null;
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_page_children
	 */
	public function testShowOnPageChildrenResultPostType() {
		$container = $this->repository->factory( $this->containerType, $this->containerTitle );
		$container->show_on_page_children( $this->page->post_name );
		$this->assertSame( array( 'page' ), $container->settings['post_type'] );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_page
	 */
	public function testShowOnPageByIdResultPostType() {
		$container = $this->repository->factory( $this->containerType, $this->containerTitle );
		$container->show_on_page( $this->page->ID );
		$this->assertSame( array( 'page' ), $container->settings['post_type'] );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_page
	 */
	public function testShowOnPageByIdResultPageId() {
		$container = $this->repository->factory( $this->containerType, $this->containerTitle );
		$container->show_on_page( $this->page->ID );
		$this->assertSame( $this->page->ID, $container->settings['show_on']['page_id'] );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_page
	 */
	public function testShowOnPageByPathResultPostType() {
		$container = $this->repository->factory( $this->containerType, $this->containerTitle );
		$container->show_on_page( $this->page->post_name );
		$this->assertSame( array( 'page' ), $container->settings['post_type'] );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_page
	 */
	public function testShowOnPageByPathResultPageId() {
		$container = $this->repository->factory( $this->containerType, $this->containerTitle );
		$container->show_on_page( $this->page->post_name );
		$this->assertSame( $this->page->ID, $container->settings['show_on']['page_id'] );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_template
	 */
	public function testShowOnTemplateStringResultPostType() {
		$container = $this->repository->factory( $this->containerType, $this->containerTitle );
		$container->show_on_template( 'default' );
		$container->show_on_post_type( 'page' );
		$this->assertSame( array( 'page' ), $container->settings['post_type'] );
	}

	/**
	 * @covers Carbon_Fields\Container\Post_Meta_Container::show_on_template
	 */
	public function testShowOnTemplateArrayResultPostType() {
		$container = $this->repository->factory( $this->containerType, $this->containerTitle );
		$container->show_on_template( array( 'default' ) );
		$container->show_on_post_type( 'page' );
		$this->assertSame( array( 'page' ), $container->settings['post_type'] );
	}

}