<?php

class ContainerTest extends WP_UnitTestCase {
	
	public function setUp() {
		$this->containerId = 'PageSettings';
		$this->containerTitle = 'Page Settings';
		$this->containerType = 'post_meta';
		$this->containerClass = '\Carbon_Fields\Container\Post_Meta_Container';
	}

	public function tearDown() {
		
	}

	/**
	 * @covers \Carbon_Fields\Container\Container::__construct
	 *
	 * @expectedException \Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Empty container title is not supported
	 */
	public function testExceptionIsThrownWhenContainerTitleIsEmpty() {
		$container = new $this->containerClass( $this->containerId, '', $this->containerType );
	}

	/**
	 * @covers Carbon_Fields\Container\Container::__construct
	 */
	public function testNonAsciiContainerTitlesAreHandledProperly() {
		// This text includes a capital cyrillic letter ... it actually assures that
		// container titles in non-english are converted to lowercase
		$container = new $this->containerClass( $this->containerId, 'bulgarian: България', $this->containerType );
		$this->assertEquals( 'bulgarian: България', $container->title );
	}

}