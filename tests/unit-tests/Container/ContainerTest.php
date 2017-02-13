<?php

use \Mockery as M;
use \Carbon_Fields\Pimple\Container as PimpleContainer;
use \Carbon_Fields\App;
use \Carbon_Fields\Container\Container;
use \Carbon_Fields\Container\Repository as ContainerRepository;
use \Carbon_Fields\Toolset\Key_Toolset;
use \Carbon_Fields\Service\Legacy_Storage_Service;
use \Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class ContainerTest extends WP_UnitTestCase {
	
	public function setUp() {
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
		App::service( 'legacy_storage' )->disable();

		$this->containerId = 'PageSettings';
		$this->containerTitle = 'Page Settings';
		$this->containerType = 'post_meta';
		$this->containerTypeUpperCase = 'Post_Meta';
		$this->containerTypeSpaced = 'Post Meta';
		$this->containerTypeBackwardsCompatible = 'custom_fields';
		$this->containerTypeInvalid = '__no_such_container_type__';
		$this->containerTypeClass = '\Carbon_Fields\Container\Post_Meta_Container';
		$this->containerTypeDatastoreClass = '\Carbon_Fields\Datastore\Post_Meta_Datastore';
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
		$this->assertEquals( $container1->id . '1', $container2->id );
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

	/**
	 * @covers Carbon_Fields\Container\Container::set_datastore
	 * @covers Carbon_Fields\Container\Container::get_datastore
	 * @covers Carbon_Fields\Container\Container::has_default_datastore
	 */
	public function testSetDatastore_Default_ReturnDefault() {
		$datastore = M::mock( $this->containerTypeDatastoreClass )->shouldIgnoreMissing();
		$container = new $this->containerTypeClass( $this->containerId, $this->containerTitle, $this->containerType );

		$this->assertEquals( true, $container->has_default_datastore() );
		$this->assertInstanceOf( $this->containerTypeDatastoreClass, $container->get_datastore() );

		$container->set_datastore( $datastore, true );
		$this->assertEquals( true, $container->has_default_datastore() );
		$this->assertEquals( $datastore, $container->get_datastore() );
	}

	/**
	 * @covers Carbon_Fields\Container\Container::set_datastore
	 * @covers Carbon_Fields\Container\Container::get_datastore
	 * @covers Carbon_Fields\Container\Container::has_default_datastore
	 */
	public function testSetDatastore_DefaultDefault2_ReturnDefault2() {
		$datastore1 = M::mock( $this->containerTypeDatastoreClass )->shouldIgnoreMissing();
		$datastore2 = M::mock( $this->containerTypeDatastoreClass )->shouldIgnoreMissing();
		$container = new $this->containerTypeClass( $this->containerId, $this->containerTitle, $this->containerType );

		$container->set_datastore( $datastore1, true );
		$container->set_datastore( $datastore2, true );
		$this->assertEquals( $datastore2, $container->get_datastore() );
	}

	/**
	 * @covers Carbon_Fields\Container\Container::set_datastore
	 * @covers Carbon_Fields\Container\Container::get_datastore
	 * @covers Carbon_Fields\Container\Container::has_default_datastore
	 */
	public function testSetDatastore_Override_ReturnOverride() {
		$datastore = M::mock( $this->containerTypeDatastoreClass )->shouldIgnoreMissing();
		$container = new $this->containerTypeClass( $this->containerId, $this->containerTitle, $this->containerType );

		$container->set_datastore( $datastore, false );
		$this->assertEquals( false, $container->has_default_datastore() );
		$this->assertEquals( $datastore, $container->get_datastore() );
	}

	/**
	 * @covers Carbon_Fields\Container\Container::set_datastore
	 * @covers Carbon_Fields\Container\Container::get_datastore
	 * @covers Carbon_Fields\Container\Container::has_default_datastore
	 */
	public function testSetDatastore_OverrideOverride2_ReturnOverride2() {
		$datastore1 = M::mock( $this->containerTypeDatastoreClass )->shouldIgnoreMissing();
		$datastore2 = M::mock( $this->containerTypeDatastoreClass )->shouldIgnoreMissing();
		$container = new $this->containerTypeClass( $this->containerId, $this->containerTitle, $this->containerType );

		$container->set_datastore( $datastore1, false );
		$container->set_datastore( $datastore2, false );
		$this->assertEquals( false, $container->has_default_datastore() );
		$this->assertEquals( $datastore2, $container->get_datastore() );
	}

	/**
	 * @covers Carbon_Fields\Container\Container::set_datastore
	 * @covers Carbon_Fields\Container\Container::get_datastore
	 * @covers Carbon_Fields\Container\Container::has_default_datastore
	 */
	public function testSetDatastore_DefaultOverride_ReturnOverride() {
		$default_datastore = M::mock( $this->containerTypeDatastoreClass )->shouldIgnoreMissing();
		$override_datastore = M::mock( $this->containerTypeDatastoreClass )->shouldIgnoreMissing();
		$container = new $this->containerTypeClass( $this->containerId, $this->containerTitle, $this->containerType );

		$container->set_datastore( $default_datastore, true );
		$this->assertEquals( true, $container->has_default_datastore() );
		$this->assertEquals( $default_datastore, $container->get_datastore() );

		$container->set_datastore( $override_datastore, false );
		$this->assertEquals( false, $container->has_default_datastore() );
		$this->assertEquals( $override_datastore, $container->get_datastore() );
	}

	/**
	 * @covers Carbon_Fields\Container\Container::set_datastore
	 * @covers Carbon_Fields\Container\Container::get_datastore
	 * @covers Carbon_Fields\Container\Container::has_default_datastore
	 */
	public function testSetDatastore_DefaultOverrideDefault2_ReturnOverride() {
		$default_datastore = M::mock( $this->containerTypeDatastoreClass )->shouldIgnoreMissing();
		$override_datastore = M::mock( $this->containerTypeDatastoreClass )->shouldIgnoreMissing();
		$container = new $this->containerTypeClass( $this->containerId, $this->containerTitle, $this->containerType );

		$container->set_datastore( $default_datastore, true );
		$container->set_datastore( $override_datastore, false );
		$container->set_datastore( $default_datastore, true );
		$this->assertEquals( false, $container->has_default_datastore() );
		$this->assertEquals( $override_datastore, $container->get_datastore() );		
	}
}