<?php
use Carbon_Fields\Container\Container;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class ContainerInitializationTest extends WP_UnitTestCase {
	public function setup() {
		$this->containerTitle = 'Page Settings';
		$this->containerId = 'PageSettings';
	}

	public function tearDown() {
		Container::$registered_panel_ids = array();
	}

	/**
	 * @covers Carbon_Fields\Container\Container::make
	 * @covers Carbon_Fields\Container\Container::factory
	 * @covers Carbon_Fields\Container\Container::__construct
	 */
	public function testMakePostMetaContainer() {
		$container = Container::make('post_meta', $this->containerTitle);
		$this->assertEquals($this->containerTitle, $container->title);
	}

	/**
	 * @covers Carbon_Fields\Container\Container::make
	 * @covers Carbon_Fields\Container\Container::factory
	 * @covers Carbon_Fields\Container\Container::__construct
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Unknown container "".
	 */
	public function testExceptionIsThrownWhenContainerTypeIsEmpty() {
		$container = Container::make('', $this->containerTitle);
	}

	/**
	 * @covers Carbon_Fields\Container\Container::make
	 * @covers Carbon_Fields\Container\Container::factory
	 * @covers Carbon_Fields\Container\Container::__construct
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Unknown container "__No_Such_Container_Type__".
	 */
	public function testExceptionIsThrownWhenContainerTypeIsInvalid() {
		$container = Container::make('__no_such_container_type__', $this->containerTitle);
	}

	/**
	 * @covers Carbon_Fields\Container\Container::make
	 * @covers Carbon_Fields\Container\Container::factory
	 * @covers Carbon_Fields\Container\Container::__construct
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Empty container title is not supported
	 */
	public function testExceptionIsThrownWhenContainerTitleIsEmpty() {
		$container = Container::make('post_meta', '');
	}

	/**
	 * @covers Carbon_Fields\Container\Container::make
	 * @covers Carbon_Fields\Container\Container::factory
	 * @covers Carbon_Fields\Container\Container::__construct
	 */
	public function testBrokenContainerIsReturnedWhenDebugIsDisabledAndContainerIsInvalid() {
		$old_val = Incorrect_Syntax_Exception::$throw_errors;

		Incorrect_Syntax_Exception::$throw_errors = false;
		$container = Container::make('__no_such_container_type__', $this->containerTitle);
		$this->assertInstanceOf('Carbon_Fields\Container\Broken_Container', $container);

		Incorrect_Syntax_Exception::$throw_errors = $old_val;
	}

	/**
	 * @covers Carbon_Fields\Container\Container::make
	 * @covers Carbon_Fields\Container\Container::factory
	 * @covers Carbon_Fields\Container\Container::__construct
	 */
	public function testContainerTypeCaseIsIgnored() {
		$container = Container::make('Post_Meta', $this->containerTitle);
		$this->assertInstanceOf('Carbon_Fields\Container\Post_Meta_Container', $container);
	}

	/**
	 * @covers Carbon_Fields\Container\Container::make
	 * @covers Carbon_Fields\Container\Container::factory
	 * @covers Carbon_Fields\Container\Container::__construct
	 */
	public function testSpacesInContainerTypeAreSupported() {
		$container = Container::make('Post Meta', $this->containerTitle);
		$this->assertTrue(true); // no exception ... 
	}

	/**
	 * @covers Carbon_Fields\Container\Container::make
	 * @covers Carbon_Fields\Container\Container::factory
	 * @covers Carbon_Fields\Container\Container::__construct
	 */
	public function testNonAsciiContainerTitlesAreHandledProperly() {
		// This text includes a capital cyrillic letter ... it actually assures that
		// container titles in non-english are converted to lowercase
		$container = Container::make('post_meta', 'bulgarian: България');
		$this->assertEquals('bulgarian: България', $container->title);
	}
	
	/**
	 * @covers Carbon_Fields\Container\Container::make
	 * @covers Carbon_Fields\Container\Container::factory
	 * @covers Carbon_Fields\Container\Container::__construct
	 */
	public function testSameContainerNamesDoNotGenerateIdenticalIds() {
		$container1 = Container::make('Post_Meta', $this->containerTitle);
		$container2 = Container::make('Post_Meta', $this->containerTitle);
		$this->assertNotEquals($container1->id, $container2->id);
	}

	/**
	 * @covers Carbon_Fields\Container\Container::make
	 * @covers Carbon_Fields\Container\Container::factory
	 * @covers Carbon_Fields\Container\Container::__construct
	 */
	public function testSameContainerNameAddsNumericalSuffix() {
		$container1 = Container::make('Post_Meta', $this->containerTitle);
		$container2 = Container::make('Post_Meta', $this->containerTitle);
		$this->assertEquals($container2->id, $this->containerId . '1');
	}

	/**
	 * @covers Carbon_Fields\Container\Container::make
	 * @covers Carbon_Fields\Container\Container::factory
	 * @covers Carbon_Fields\Container\Container::__construct
	 */
	public function testContainerTypeCustomFieldsBackwardsCompatibility() {
		$container = Container::make('custom_fields', $this->containerTitle);
		$this->assertInstanceOf('Carbon_Fields\Container\Post_Meta_Container', $container);
	}

}