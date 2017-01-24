<?php

use \Carbon_Fields\Container\Repository;
use \Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class RepositoryTest extends WP_UnitTestCase {
	public function setUp() {
		$this->containerId = 'PageSettings';
		$this->containerTitle = 'Page Settings';
		$this->containerType = 'post_meta';
		$this->containerTypeUpperCase = 'Post_Meta';
		$this->containerTypeSpaced = 'Post Meta';
		$this->containerTypeBackwardsCompatible = 'custom_fields';
		$this->containerTypeInvalid = '__no_such_container_type__';
		$this->containerTypeClass = '\Carbon_Fields\Container\Post_Meta_Container';
		$this->containerTypeBrokenClass = '\Carbon_Fields\Container\Broken_Container';

		$this->repository = new Repository();
	}

	public function tearDown() {
		$this->repository = null;
	}

	/**
	 * @covers \Carbon_Fields\Container\Repository::factory
	 * @covers \Carbon_Fields\Container\Container::make
	 * @covers \Carbon_Fields\Container\Container::factory
	 */
	public function testMakePostMetaContainer() {
		$container = $this->repository->factory( $this->containerType, $this->containerTitle );
		$this->assertEquals( $this->containerTitle, $container->title );
	}

	/**
	 * @covers \Carbon_Fields\Container\Repository::factory
	 *
	 * @expectedException \Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Unknown container "".
	 */
	public function testExceptionIsThrownWhenContainerTypeIsEmpty() {
		$container = $this->repository->factory( '', $this->containerTitle );
	}

	/**
	 * @covers \Carbon_Fields\Container\Repository::factory
	 *
	 * @expectedException \Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Unknown container "__No_Such_Container_Type__".
	 */
	public function testExceptionIsThrownWhenContainerTypeIsInvalid() {
		$container = $this->repository->factory( $this->containerTypeInvalid, $this->containerTitle );
	}

	/**
	 * @covers \Carbon_Fields\Container\Repository::factory
	 */
	public function testBrokenContainerIsReturnedWhenDebugIsDisabledAndContainerIsInvalid() {
		$old_val = Incorrect_Syntax_Exception::$throw_errors;

		Incorrect_Syntax_Exception::$throw_errors = false;
		$container = $this->repository->factory( $this->containerTypeInvalid, $this->containerTitle );
		$this->assertInstanceOf( $this->containerTypeBrokenClass, $container );

		Incorrect_Syntax_Exception::$throw_errors = $old_val;
	}

	/**
	 * @covers \Carbon_Fields\Container\Repository::factory
	 */
	public function testContainerTypeCaseIsIgnored() {
		$container = $this->repository->factory( $this->containerTypeUpperCase, $this->containerTitle );
		$this->assertInstanceOf( $this->containerTypeClass, $container );
	}

	/**
	 * @covers \Carbon_Fields\Container\Repository::factory
	 */
	public function testSpacesInContainerTypeAreSupported() {
		$container = $this->repository->factory( $this->containerTypeSpaced, $this->containerTitle );
		$this->assertTrue(true); // no exception should be thrown
	}
	
	/**
	 * @covers \Carbon_Fields\Container\Repository::factory
	 */
	public function testSameContainerNamesDoNotGenerateIdenticalIds() {
		$container1 = $this->repository->factory( $this->containerType, $this->containerTitle );
		$container2 = $this->repository->factory( $this->containerType, $this->containerTitle );
		$this->assertNotEquals( $container1->id, $container2->id );
	}

	/**
	 * @covers \Carbon_Fields\Container\Repository::factory
	 */
	public function testSameContainerNameAddsNumericalSuffix() {
		$container1 = $this->repository->factory( $this->containerType, $this->containerTitle );
		$container2 = $this->repository->factory( $this->containerType, $this->containerTitle );
		$this->assertEquals( $container2->id, $container1->id . '1' );
	}

	/**
	 * @covers \Carbon_Fields\Container\Repository::factory
	 */
	public function testContainerTypeCustomFieldsBackwardsCompatibility() {
		$container = $this->repository->factory( $this->containerTypeBackwardsCompatible, $this->containerTitle );
		$this->assertInstanceOf( $this->containerTypeClass, $container );
	}

}