<?php

use \Carbon_Fields\Pimple\Container as PimpleContainer;
use \Carbon_Fields\App;
use \Carbon_Fields\Container\Container;
use \Carbon_Fields\Container\Repository as ContainerRepository;
use \Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class ContainerTest extends WP_UnitTestCase {
	
	public function setUp() {
		$ioc = new PimpleContainer();

		$ioc['container_repository'] = function( $c ) {
			return new ContainerRepository();
		};

		App::instance()->install( $ioc );

		$this->containerId = 'PageSettings';
		$this->containerTitle = 'Page Settings';
		$this->containerType = 'post_meta';
		$this->containerTypeUpperCase = 'Post_Meta';
		$this->containerTypeSpaced = 'Post Meta';
		$this->containerTypeBackwardsCompatible = 'custom_fields';
		$this->containerTypeInvalid = '__no_such_container_type__';
		$this->containerTypeClass = '\Carbon_Fields\Container\Post_Meta_Container';
		$this->containerTypeBrokenClass = '\Carbon_Fields\Container\Broken_Container';
	}

	public function tearDown() {
		App::instance()->install( new PimpleContainer() );
	}

	/**
	 * @covers \Carbon_Fields\Container\Container::make
	 * @covers \Carbon_Fields\Container\Container::factory
	 */
	public function testMakePostMetaContainer() {
		$container = Container::factory( $this->containerType, $this->containerTitle );
		$this->assertEquals( $this->containerTitle, $container->title );
	}

	/**
	 * @covers \Carbon_Fields\Container\Container::make
	 * @covers \Carbon_Fields\Container\Container::factory
	 *
	 * @expectedException \Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Unknown container "".
	 */
	public function testExceptionIsThrownWhenContainerTypeIsEmpty() {
		$container = Container::factory( '', $this->containerTitle );
	}

	/**
	 * @covers \Carbon_Fields\Container\Container::make
	 * @covers \Carbon_Fields\Container\Container::factory
	 *
	 * @expectedException \Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Unknown container "__No_Such_Container_Type__".
	 */
	public function testExceptionIsThrownWhenContainerTypeIsInvalid() {
		$container = Container::factory( $this->containerTypeInvalid, $this->containerTitle );
	}

	/**
	 * @covers \Carbon_Fields\Container\Container::make
	 * @covers \Carbon_Fields\Container\Container::factory
	 */
	public function testBrokenContainerIsReturnedWhenDebugIsDisabledAndContainerIsInvalid() {
		$old_val = Incorrect_Syntax_Exception::$throw_errors;

		Incorrect_Syntax_Exception::$throw_errors = false;
		$container = Container::factory( $this->containerTypeInvalid, $this->containerTitle );
		$this->assertInstanceOf( $this->containerTypeBrokenClass, $container );

		Incorrect_Syntax_Exception::$throw_errors = $old_val;
	}

	/**
	 * @covers \Carbon_Fields\Container\Container::make
	 * @covers \Carbon_Fields\Container\Container::factory
	 */
	public function testContainerTypeCaseIsIgnored() {
		$container = Container::factory( $this->containerTypeUpperCase, $this->containerTitle );
		$this->assertInstanceOf( $this->containerTypeClass, $container );
	}

	/**
	 * @covers \Carbon_Fields\Container\Container::make
	 * @covers \Carbon_Fields\Container\Container::factory
	 */
	public function testSpacesInContainerTypeAreSupported() {
		$container = Container::factory( $this->containerTypeSpaced, $this->containerTitle );
		$this->assertTrue(true); // no exception should be thrown
	}
	
	/**
	 * @covers \Carbon_Fields\Container\Container::make
	 * @covers \Carbon_Fields\Container\Container::factory
	 */
	public function testSameContainerNamesDoNotGenerateIdenticalIds() {
		$container1 = Container::factory( $this->containerType, $this->containerTitle );
		$container2 = Container::factory( $this->containerType, $this->containerTitle );
		$this->assertNotEquals( $container1->id, $container2->id );
	}

	/**
	 * @covers \Carbon_Fields\Container\Container::make
	 * @covers \Carbon_Fields\Container\Container::factory
	 */
	public function testSameContainerNameAddsNumericalSuffix() {
		$container1 = Container::factory( $this->containerType, $this->containerTitle );
		$container2 = Container::factory( $this->containerType, $this->containerTitle );
		$this->assertEquals( $container2->id, $container1->id . '1' );
	}

	/**
	 * @covers \Carbon_Fields\Container\Container::make
	 * @covers \Carbon_Fields\Container\Container::factory
	 */
	public function testContainerTypeCustomFieldsBackwardsCompatibility() {
		$container = Container::factory( $this->containerTypeBackwardsCompatible, $this->containerTitle );
		$this->assertInstanceOf( $this->containerTypeClass, $container );
	}

	/**
	 * @covers \Carbon_Fields\Container\Container::__construct
	 *
	 * @expectedException \Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Empty container title is not supported
	 */
	public function testExceptionIsThrownWhenContainerTitleIsEmpty() {
		$container = new $this->containerTypeClass( $this->containerId, '', $this->containerType );
	}

	/**
	 * @covers Carbon_Fields\Container\Container::__construct
	 */
	public function testNonAsciiContainerTitlesAreHandledProperly() {
		// This text includes a capital cyrillic letter ... it actually assures that
		// container titles in non-english are converted to lowercase
		$container = new $this->containerTypeClass( $this->containerId, 'bulgarian: България', $this->containerType );
		$this->assertEquals( 'bulgarian: България', $container->title );
	}

}