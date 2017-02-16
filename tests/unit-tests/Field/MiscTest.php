<?php

use Mockery as M;
use Carbon_Fields\Pimple\Container as PimpleContainer;
use Carbon_Fields\App;
use Carbon_Fields\Container\Repository as ContainerRepository;
use Carbon_Fields\Toolset\Key_Toolset;
use Carbon_Fields\Service\Legacy_Storage_Service;
use Carbon_Fields\Value_Set\Value_Set;

/**
 * @group field
 * @coversDefaultClass Carbon_Fields\Field\Field
 */
class MiscTest extends WP_UnitTestCase {

	public function setUp() {
		$ioc = new PimpleContainer();
		$ioc['container_repository'] = function( $ioc ) {
			return new ContainerRepository();
		};
		$ioc['key_toolset'] = function() {
			return new Key_Toolset();
		};
		$ioc['legacy_storage_service'] = function( $ioc ) {
			return new Legacy_Storage_Service( $ioc['container_repository'], $ioc['key_toolset'] );
		};
		App::instance()->install( $ioc );

		$this->text_field = Carbon_Fields\Field::make( 'text', 'text_field' );
		$this->set_field = Carbon_Fields\Field::make( 'set', 'set_field' );
		$this->complex_field = Carbon_Fields\Field::make( 'complex', 'complex_field' );
		$this->container = Carbon_Fields\Container::make( 'theme_options', 'Theme Options' );
	}

	public function tearDown() {
		M::close();
		unset( $this->text_field );
		unset( $this->set_field );
		unset( $this->complex_field );
		unset( $this->container );
	}

	/**
	 * @covers ::is_simple_root_field
	 */
	public function testIsSimpleRootFieldForUnassignedFields() {
		$this->assertSame( true, $this->text_field->is_simple_root_field() );
		$this->assertSame( false, $this->set_field->is_simple_root_field() );
		$this->assertSame( false, $this->complex_field->is_simple_root_field() );
	}

	/**
	 * @covers ::is_simple_root_field
	 */
	public function testIsSimpleRootFieldForRootFields() {
		$this->container->add_fields( array(
			$this->text_field,
			$this->set_field,
			$this->complex_field,
		) );
		$this->assertSame( true, $this->text_field->is_simple_root_field() );
		$this->assertSame( false, $this->set_field->is_simple_root_field() );
		$this->assertSame( false, $this->complex_field->is_simple_root_field() );
	}

	/**
	 * @covers ::is_simple_root_field
	 */
	public function testIsSimpleRootFieldForNestedFields() {
		$parent_field = Carbon_Fields\Field::make( 'complex', 'parent_field' );
		$parent_field->add_fields( array(
			$this->text_field,
			$this->set_field,
			$this->complex_field,
		) );
		$this->container->add_fields( array(
			$parent_field,
		) );
		$this->assertSame( false, $this->text_field->is_simple_root_field() );
		$this->assertSame( false, $this->set_field->is_simple_root_field() );
		$this->assertSame( false, $this->complex_field->is_simple_root_field() );
	}

	/**
	 * @covers ::get_value_set
	 */
	public function testGetValueSetReturnsDefaultValueSet() {
		$default_value_set = new Value_Set();
		$this->assertSame( $default_value_set->get_type(), $this->text_field->get_value_set()->get_type() );
	}

	/**
	 * @covers ::get_value_set
	 * @covers ::set_value_set
	 */
	public function testSetValueSetOverridesValueSet() {
		$expected = new Value_Set( Value_Set::TYPE_MULTIPLE_VALUES );
		$this->text_field->set_value_set( $expected );
		$this->assertSame( $expected, $this->text_field->get_value_set() );
	}

	/**
	 * @covers ::get_name_prefix
	 * @covers ::set_name_prefix
	 */
	public function testSetNamePrefixChangesFieldNameWithEmptyPrefix() {
		$prefix = '';
		$expected = $prefix . 'text_field';
		$this->text_field->set_name_prefix( $prefix );
		$this->assertSame( $expected, $this->text_field->get_name() );
	}

	/**
	 * @covers ::get_name_prefix
	 * @covers ::set_name_prefix
	 */
	public function testSetNamePrefixChangesFieldName() {
		$prefix = '_zzz_';
		$expected = $prefix . 'text_field';
		$this->text_field->set_name_prefix( $prefix );
		$this->assertSame( $expected, $this->text_field->get_name() );
	}

	/**
	 * @covers ::get_name_prefix
	 * @covers ::set_name_prefix
	 */
	public function testSetNamePrefixChangesFieldNameAfterSeveralChanges() {
		$prefixes = array( 'test1_', 2, 'test3_' );
		foreach ( $prefixes as $prefix ) {
			$this->text_field->set_name_prefix( $prefix );
		}
		$expected = $prefixes[ count( $prefixes ) - 1 ] . 'text_field';
		$this->assertSame( $expected, $this->text_field->get_name() );
	}
}