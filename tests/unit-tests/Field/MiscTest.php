<?php

use Mockery as M;
use Carbon_Fields\Pimple\Container as PimpleContainer;
use Carbon_Fields\Container\Repository as ContainerRepository;
use Carbon_Fields\Toolset\Key_Toolset;
use Carbon_Fields\Value_Set\Value_Set;
use Carbon_Fields\Container\Condition\Factory as ConditionFactory;

/**
 * @group field
 * @coversDefaultClass Carbon_Fields\Field\Field
 */
class MiscTest extends WP_UnitTestCase {
	public $text_field;
	public $set_field;
	public $complex_field;
	public $container;

	public function setUp(): void {
		$ioc = new PimpleContainer();

		$ioc['container_repository'] = function( $ioc ) {
			return new ContainerRepository();
		};

		$ioc['key_toolset'] = function() {
			return new Key_Toolset();
		};

		$ioc['container_condition_factory'] = function( $ioc ) {
			return new ConditionFactory( $ioc['container_conditions'] );
		};

		$ioc['container_condition_translator_array'] = function( $ioc ) {
			return new \Carbon_Fields\Container\Fulfillable\Translator\Array_Translator( $ioc['container_condition_factory'] );
		};

		$ioc['container_condition_translator_json'] = function( $ioc ) {
			return new \Carbon_Fields\Container\Fulfillable\Translator\Json_Translator( $ioc['container_condition_factory'] );
		};

		$ioc['container_condition_fulfillable_collection'] = $ioc->factory( function( $ioc ) {
			return M::mock( 'Carbon_Fields\\Container\\Fulfillable\\Fulfillable_Collection' )->shouldIgnoreMissing();
		} );

		$ioc['container_conditions'] = function() {
			return new PimpleContainer();
		};

		\Carbon_Fields\Carbon_Fields::instance()->install( $ioc );

		$this->text_field = Carbon_Fields\Field::make( 'text', 'text_field' );
		$this->set_field = Carbon_Fields\Field::make( 'set', 'set_field' );
		$this->complex_field = Carbon_Fields\Field::make( 'complex', 'complex_field' );
		$this->container = Carbon_Fields\Container::make( 'theme_options', 'Theme Options' );
	}

	public function tearDown(): void {
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