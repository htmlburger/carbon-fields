<?php

use Mockery as M;
use Carbon_Fields\Container\Repository;
use Carbon_Fields\Container\Container;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * @coversDefaultClass Carbon_Fields\Container\Repository
 */
class RepositoryTest extends WP_UnitTestCase {
	
	public function setUp() {
		$this->containerId = 'PageSettings';
		$this->containerTitle = 'Page Settings';
		$this->containerType = 'post_meta';
		$this->containerClass = 'Carbon_Fields\Container\Post_Meta_Container';
		$this->containerDuplicateTitleId = 'PageSettings1';
		$this->repository = new Repository();
	}

	public function tearDown() {
		M::close();
		$this->repository = null;
	}

	public function getContainerMock( $callable = null ) {
		if ( is_callable( $callable ) ) {
			$mock = M::mock( $this->containerClass, $callable );
		} else {
			$mock = M::mock( $this->containerClass );
		}
		$mock->shouldIgnoreMissing();
		$mock->id = $this->containerId;
		$mock->title = $this->containerTitle;
		$mock->type = $this->containerType;
		return $mock;
	}

	/**
	 * @covers ::register_container
	 * @covers ::initialize_containers
	 */
	public function testInitializeContainersCallsInitOnce() {
		$container = $this->getContainerMock( function( $mock ) {
			$mock->shouldReceive( 'init' )->once();
		} );

		$this->repository->register_container( $container );
		$this->repository->initialize_containers();
		$this->assertTrue( true ); // rely on Mockery expectations to fail the test
	}

	/**
	 * @covers ::register_container
	 * @covers ::initialize_containers
	 */
	public function testInitializeContainersReturnsContainers() {
		$container = $this->getContainerMock();
		$expected = array( $container );

		$this->repository->register_container( $container );
		$received = $this->repository->initialize_containers();

		$this->assertEquals( $expected, $received );
	}

	/**
	 * @covers ::register_container
	 * @covers ::initialize_containers
	 */
	public function testInitializeContainersReturnsOnlyNewContainers() {
		$container1 = $this->getContainerMock();
		$container2 = $this->getContainerMock();

		$expected1 = array( $container1 );
		$expected2 = array( $container2 );

		$this->repository->register_container( $container1 );
		$received1 = $this->repository->initialize_containers();

		$this->assertEquals( $expected1, $received1 );

		$this->repository->register_container( $container2 );
		$received2 = $this->repository->initialize_containers();

		$this->assertEquals( $expected2, $received2 );
	}

	/**
	 * @covers ::get_active_containers
	 */
	public function testGetActiveContainers() {
		$container1 = $this->getContainerMock( function( $mock ) {
			$mock->shouldReceive( 'active' )->andReturn( true );
		} );
		$container2 = $this->getContainerMock( function( $mock ) {
			$mock->shouldReceive( 'active' )->andReturn( false );
		} );
		$expected = array( $container1 );

		$this->repository->register_container( $container1 );
		$this->repository->register_container( $container2 );

		$received = $this->repository->get_active_containers();
		
		$this->assertEquals( $expected, $received );
	}

	/**
	 * @covers ::get_unique_panel_id
	 */
	public function testGetUniquePanelId_InvalidCharacters_Stripped() {
		$expected = $this->containerId;
		$received = $this->repository->get_unique_panel_id( $this->containerTitle );
		$this->assertEquals( $expected, $received );
	}
	
	/**
	 * @covers ::get_unique_panel_id
	 * @covers ::register_container
	 */
	public function testGetUniquePanelId_IdenticalTitles_ReturnsDifferentIds() {
		$container = $this->getContainerMock();
		$this->repository->register_container( $container );
		$received = $this->repository->get_unique_panel_id( $container->title );

		$this->assertNotEquals( $container->id, $received );
	}

	/**
	 * @covers ::get_unique_panel_id
	 * @covers ::register_container
	 */
	public function testGetUniquePanelId_IdenticalTitles_AddsNumericalSuffix() {
		$container = $this->getContainerMock();
		$this->repository->register_container( $container );
		$received = $this->repository->get_unique_panel_id( $container->title );

		$this->assertEquals( $container->id . '1', $received );
	}
}