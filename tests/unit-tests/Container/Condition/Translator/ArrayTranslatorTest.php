<?php

use Mockery as M;
use Carbon_Fields\App;
use Carbon_Fields\Pimple\Container as PimpleContainer;
use Carbon_Fields\Container\Condition\Fulfillable\Fulfillable_Collection;
use Carbon_Fields\Container\Condition\Factory as ConditionFactory;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * WARNING: the array translator produces logically identical results but not 100% identical representations when dealing with nested collections
 * 
 * @coversDefaultClass Carbon_Fields\Container\Condition\Translator\Array_Translator
 */
class ArrayTranslatorTest extends WP_UnitTestCase {

	public function setUp() {
		$ioc = new PimpleContainer();
		$ioc['container_condition_fulfillable_collection'] = $ioc->factory( function( $ioc ) {
			return new Fulfillable_Collection( $ioc['container_condition_factory'], $ioc['container_condition_translator_array'] );
		} );

		$ioc['container_condition_type_post_id'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_ID_Condition( array(
				$ioc['container_condition_comparer_type_equality'],
				$ioc['container_condition_comparer_type_contain'],
				$ioc['container_condition_comparer_type_scalar'],
				$ioc['container_condition_comparer_type_regex'],
				$ioc['container_condition_comparer_type_custom'],
			) );
		} );
		$ioc['container_condition_type_post_type'] = $ioc->factory( function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Post_Type_Condition( array( 
				$ioc['container_condition_comparer_type_equality'],
				$ioc['container_condition_comparer_type_contain'],
				$ioc['container_condition_comparer_type_regex'],
				$ioc['container_condition_comparer_type_custom'],
			) );
		} );

		$ioc['container_condition_factory'] = function() {
			$factory = new ConditionFactory();
			$factory->register( 'post_id', 'Carbon_Fields\\Container\\Condition\\Post_ID_Condition' );
			$factory->register( 'post_type', 'Carbon_Fields\\Container\\Condition\\Post_Type_Condition' );
			return $factory;
		};

		$ioc['container_condition_comparer_type_equality'] = $ioc->factory( function() {
			return new \Carbon_Fields\Container\Condition\Comparer\Equality_Comparer();
		} );
		$ioc['container_condition_comparer_type_contain'] = $ioc->factory( function() {
			return new \Carbon_Fields\Container\Condition\Comparer\Contain_Comparer();
		} );
		$ioc['container_condition_comparer_type_scalar'] = $ioc->factory( function() {
			return new \Carbon_Fields\Container\Condition\Comparer\Scalar_Comparer();
		} );
		$ioc['container_condition_comparer_type_regex'] = $ioc->factory( function() {
			return new \Carbon_Fields\Container\Condition\Comparer\Regex_Comparer();
		} );
		$ioc['container_condition_comparer_type_custom'] = $ioc->factory( function() {
			return new \Carbon_Fields\Container\Condition\Comparer\Custom_Comparer();
		} );

		$ioc['container_condition_translator_array'] = function( $ioc ) {
			return new \Carbon_Fields\Container\Condition\Translator\Array_Translator( $ioc['container_condition_factory'] );
		};
		App::instance()->install( $ioc );

		$this->subject = $ioc['container_condition_translator_array'];
	}

	public function tearDown() {
		M::close();
		$this->subject = null;
	}

	/**
	 * @covers ::fulfillable_to_foreign
	 */
	public function testFulfillableToForeignWithCondition() {
		$factory = App::resolve( 'container_condition_factory' );
		$condition = $factory->make( 'post_type' );
		$condition->set_comparison_operator( '!=' );
		$condition->set_value( 'post' );

		$expected = array(
			'type' => 'post_type',
			'compare' => '!=',
			'value' => 'post',
		);
		$received = $this->subject->fulfillable_to_foreign( $condition );
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::foreign_to_fulfillable
	 */
	public function testForeignToFulfillableWithCondition() {
		$factory = App::resolve( 'container_condition_factory' );
		$condition = $factory->make( 'post_type' );
		$condition->set_comparison_operator( '!=' );
		$condition->set_value( 'post' );

		$expected = $condition;
		$received = $this->subject->foreign_to_fulfillable( array(
			'type' => 'post_type',
			'compare' => '!=',
			'value' => 'post',
		) );
		$this->assertEquals( $expected, $received );
	}

	/**
	 * @covers ::fulfillable_to_foreign
	 */
	public function testFulfillableToForeignWithCollection() {
		$fulfillable = App::resolve( 'container_condition_fulfillable_collection' );
		$fulfillable->when( 'post_type', '!=', 'post' );
		$fulfillable->when( 'post_id', '!=', 1 );

		$expected = array(
			'relation' => 'AND',
			array(
				'type' => 'post_type',
				'compare' => '!=',
				'value' => 'post',
			),
			array(
				'type' => 'post_id',
				'compare' => '!=',
				'value' => 1,
			),
		);
		$received = $this->subject->fulfillable_to_foreign( $fulfillable );
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::foreign_to_fulfillable
	 */
	public function testForeignToFulfillableWithCollection() {
		$fulfillable = App::resolve( 'container_condition_fulfillable_collection' );
		$fulfillable->when( 'post_type', '!=', 'post' );
		$fulfillable->when( 'post_id', '!=', 1 );

		$expected = $fulfillable;
		$received = $this->subject->foreign_to_fulfillable( array(
			'relation' => 'AND',
			array(
				'type' => 'post_type',
				'compare' => '!=',
				'value' => 'post',
			),
			array(
				'type' => 'post_id',
				'compare' => '!=',
				'value' => 1,
			),
		) );
		$this->assertEquals( $expected, $received );
	}

	/**
	 * @covers ::fulfillable_to_foreign
	 */
	public function testFulfillableToForeignWithNestedCollection() {
		$fulfillable = App::resolve( 'container_condition_fulfillable_collection' );
		$fulfillable->when( 'post_type', '!=', 'post' );
		$fulfillable->when( function( $c ) {
			$c->when( 'post_id', '!=', 1 );
			$c->or_when( 'post_id', '!=', 2 );
		} );

		$expected = array(
			'relation' => 'AND',
			array(
				'type' => 'post_type',
				'compare' => '!=',
				'value' => 'post',
			),
			array(
				'relation' => 'OR',
				array(
					'relation' => 'AND',
					array(
						'type' => 'post_id',
						'compare' => '!=',
						'value' => 1,
					),
				),
				array(
					'relation' => 'OR',
					array(
						'type' => 'post_id',
						'compare' => '!=',
						'value' => 2,
					),
				),
			),
		);
		$received = $this->subject->fulfillable_to_foreign( $fulfillable );
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::foreign_to_fulfillable
	 */
	public function testForeignToFulfillableWithNestedCollection() {
		$fulfillable = App::resolve( 'container_condition_fulfillable_collection' );
		$fulfillable->when( 'post_type', '!=', 'post' );
		$fulfillable->when( function( $c ) {
			$c->or_when( 'post_id', '!=', 1 );
			$c->or_when( 'post_id', '!=', 2 );
		} );

		$expected = $fulfillable;
		$received = $this->subject->foreign_to_fulfillable( array(
			'relation' => 'AND',
			array(
				'type' => 'post_type',
				'compare' => '!=',
				'value' => 'post',
			),
			array(
				'relation' => 'OR',
				array(
					'type' => 'post_id',
					'compare' => '!=',
					'value' => 1,
				),
				array(
					'type' => 'post_id',
					'compare' => '!=',
					'value' => 2,
				),
			),
		) );
		$this->assertEquals( $expected, $received );
	}
}