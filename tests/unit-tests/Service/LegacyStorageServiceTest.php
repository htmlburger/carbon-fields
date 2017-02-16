<?php

use Mockery as M;
use Carbon_Fields\App;
use Carbon_Fields\Pimple\Container as PimpleContainer;
use Carbon_Fields\Container\Repository as ContainerRepository;
use Carbon_Fields\Field\Field;
use Carbon_Fields\Service\Legacy_Storage_Service;
use Carbon_Fields\Toolset\Key_Toolset;

/**
 * @coversDefaultClass Carbon_Fields\Service\Legacy_Storage_Service
 */
class LegacyStorageServiceTest extends WP_UnitTestCase {

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

		$this->datastore = M::mock( 'Carbon_Fields\\Datastore\\Key_Value_Datastore' )->makePartial();
		$this->container = M::mock( 'Carbon_Fields\\Container\\Container', array( 'container_id', 'container_title', 'container_type' ) )->makePartial();
		$this->container->set_datastore( $this->datastore );
		$this->container->add_fields( array(
			Field::make( 'text', 'crb_text' ),
		) );
		$ioc['container_repository']->register_container( $this->container );

		$this->subject = M::mock( 'Carbon_Fields\\Service\\Legacy_Storage_Service', array( $ioc['container_repository'], $ioc['key_toolset'] ) )->shouldDeferMissing()->shouldAllowMockingProtectedMethods();
	}

	public function tearDown() {
		M::close();
		unset( $this->subject );
	}

	public function testGetStorageArrayForDatastore() {
		$this->subject->shouldReceive( 'get_legacy_storage_array_from_cache' )->andReturn( array(
			'_crb_text' => '1',
		) );
		$expected = array(
			'_crb_text' => '1',
			'_crb_text||0|0|value' => '1',
		);
		$received = $this->subject->get_storage_array_for_datastore( $this->datastore );
		$this->assertSame( $expected, $received );
	}
}