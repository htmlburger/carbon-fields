<?php

use Mockery as M;
use Carbon_Fields\Pimple\Container as PimpleContainer;
use Carbon_Fields\Container\Fulfillable\Fulfillable_Collection;
use Carbon_Fields\Container\Condition\Factory as ConditionFactory;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * @coversDefaultClass Carbon_Fields\Container\Fulfillable\Fulfillable_Collection
 */
class FulfillableCollectionTest extends WP_UnitTestCase {

	public function setUp() {
		$ioc = new PimpleContainer();
		\Carbon_Fields\Installer\Container_Condition_Installer::install( $ioc );
		\Carbon_Fields\Carbon_Fields::instance()->install( $ioc );

		$this->subject = $ioc['container_condition_fulfillable_collection'];
		$this->condition_factory = $ioc['container_condition_factory'];
	}

	public function tearDown() {
		M::close();
		$this->condition_factory = null;
		$this->subject = null;
	}

	/**
	 * @covers ::when
	 * @covers ::and_when
	 * @covers ::or_when
	 * @covers ::is_fulfilled
	 */
	public function testWhenWithBasicArgumentsIsFulfilled() {
		$this->subject->when( 'post_type', '=', 'post' );
		$environment = array( 'post_type' => 'post' );
		$this->assertTrue( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::when
	 * @covers ::is_fulfilled
	 */
	public function testWhenWithBasicArgumentsIsNotFulfilled() {
		$this->subject->when( 'post_type', '=', 'post' );
		$environment = array( 'post_type' => 'page' );
		$this->assertFalse( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::when
	 * @covers ::is_fulfilled
	 */
	public function testWhenWithSkippedComparerIsFulfilled() {
		$this->subject->when( 'post_type', 'post' );
		$environment = array( 'post_type' => 'post' );
		$this->assertTrue( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::when
	 * @covers ::is_fulfilled
	 */
	public function testWhenWithSkippedComparerIsNotFulfilled() {
		$this->subject->when( 'post_type', 'post' );
		$environment = array( 'post_type' => 'page' );
		$this->assertFalse( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::when
	 * @covers ::is_fulfilled
	 */
	public function testWhenWithArrayArgumentsIsFulfilled() {
		$this->subject->when( array(
			array(
				'type' => 'post_type',
				'value' => 'post',
			),
		) );
		$environment = array( 'post_type' => 'post' );
		$this->assertTrue( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::when
	 * @covers ::is_fulfilled
	 */
	public function testWhenWithArrayArgumentsIsNotFulfilled() {
		$this->subject->when( array(
			array(
				'type' => 'post_type',
				'value' => 'post',
			),
		) );
		$environment = array( 'post_type' => 'page' );
		$this->assertFalse( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::when
	 * @covers ::is_fulfilled
	 */
	public function testWhenWithCallableIsFulfilled() {
		$this->subject->when( function( $c ) {
			$c->when( 'post_type', 'post' );
		} );
		$environment = array( 'post_type' => 'post' );
		$this->assertTrue( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::when
	 * @covers ::is_fulfilled
	 */
	public function testWhenWithCallableIsNotFulfilled() {
		$this->subject->when( function( $c ) {
			$c->when( 'post_type', 'post' );
		} );
		$environment = array( 'post_type' => 'page' );
		$this->assertFalse( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::when
	 * @covers ::is_fulfilled
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	public function testWhenWithUnsupportedConditionTypeThrowsException() {
		$this->subject->when( 'unsupported_condition_type', 'post' );
	}

	/**
	 * @covers ::add_fulfillable
	 * @covers ::get_fulfillables
	 */
	public function testAddFulfillableAddsFulfillable() {
		$fulfillable = M::mock( 'Carbon_Fields\\Container\\Fulfillable\\Fulfillable' );
		$fulfillable_comparison = 'AND';
		
		$this->assertSame( 0, count( $this->subject->get_fulfillables() ) );
		$this->subject->add_fulfillable( $fulfillable, $fulfillable_comparison );
		$this->assertSame( 1, count( $this->subject->get_fulfillables() ) );

		$fulfillables = $this->subject->get_fulfillables();
		$this->assertSame( $fulfillable, $fulfillables[0]['fulfillable'] );
		$this->assertSame( $fulfillable_comparison, $fulfillables[0]['fulfillable_comparison'] );
	}

	/**
	 * @covers ::add_fulfillable
	 * @covers ::get_fulfillables
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	public function testAddFulfillableThrowsExceptionOnInvalidComparison() {
		$fulfillable = M::mock( 'Carbon_Fields\\Container\\Fulfillable\\Fulfillable' );
		$fulfillable_comparison = 'UNSUPPORTED_COMPARISON_TYPE';
		$this->subject->add_fulfillable( $fulfillable, $fulfillable_comparison );
	}

	/**
	 * @covers ::filter
	 */
	public function testFilterRemovesUnlistedConditionTypes() {
		$this->subject->when( 'post_id', 1 );
		$this->subject->when( 'post_type', 'post' );

		$filtered = $this->subject->filter( array( 'post_type' ) );
		$this->assertTrue( count( $filtered->get_fulfillables() ) === 1, 'Filtered collection should contain 1 fulfillable only' );
		$this->assertTrue( count( $this->subject->get_fulfillables() ) === 2, 'Subject collection should remain unmodified' );
	}

	/**
	 * @covers ::filter
	 */
	public function testFilterRemovesUnlistedConditionTypesRecursively() {
		$this->subject->when( 'post_type', 'post' );
		$this->subject->when( function( $c ) {
			$c->when( 'post_id', 1 );
			$c->when( function( $c ) {
				$c->when( 'post_id', 1 );
			} );
		} );

		$filtered = $this->subject->filter( array( 'post_type' ) );
		$this->assertTrue( count( $filtered->get_fulfillables() ) === 1, 'Filtered collection should contain 1 fulfillable only' );
		$this->assertTrue( count( $this->subject->get_fulfillables() ) === 2, 'Subject collection should remain unmodified' );
	}

	/**
	 * @covers ::evaluate
	 */
	public function testEvaluateReplacesFulfilledConditionsWithBooleanTrue() {
		$this->subject->when( 'post_id', 1 );
		$this->subject->when( 'post_template', 'default' );

		$evaluated = $this->subject->evaluate( array( 'post_id' ), array( 'post_id' => 1 ) );
		$ef = $evaluated->get_fulfillables();

		$expected = array(
			array(
				'type' => 'boolean',
				'value' => true,
			),
			array(
				'type' => 'post_template',
				'value' => 'default',
			),
		);
		$received = array();
		foreach ( $ef as $tuple ) {
			$received[] = array(
				'type' => $this->condition_factory->get_type( get_class( $tuple['fulfillable'] ) ),
				'value' => $tuple['fulfillable']->get_value(),
			);
		}
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::evaluate
	 */
	public function testEvaluateReplacesFailingConditionsWithBooleanFalse() {
		$this->subject->when( 'post_id', 1 );
		$this->subject->when( 'post_template', 'default' );

		$evaluated = $this->subject->evaluate( array( 'post_id' ), array( 'post_id' => 2 ) );
		$ef = $evaluated->get_fulfillables();

		$expected = array(
			array(
				'type' => 'boolean',
				'value' => false,
			),
			array(
				'type' => 'post_template',
				'value' => 'default',
			),
		);
		$received = array();
		foreach ( $ef as $tuple ) {
			$received[] = array(
				'type' => $this->condition_factory->get_type( get_class( $tuple['fulfillable'] ) ),
				'value' => $tuple['fulfillable']->get_value(),
			);
		}
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::evaluate
	 */
	public function testEvaluateReplacesComparisonOperatorForBoolean() {
		$this->subject->when( 'post_id', '>', 1 );
		$this->subject->when( 'post_template', 'default' );

		$evaluated = $this->subject->evaluate( array( 'post_id' ), array( 'post_id' => 1 ) );
		$ef = $evaluated->get_fulfillables();

		$expected = array(
			array(
				'type' => 'boolean',
				'comparison_operator' => '=',
				'value' => false,
			),
			array(
				'type' => 'post_template',
				'comparison_operator' => '=',
				'value' => 'default',
			),
		);
		$received = array();
		foreach ( $ef as $tuple ) {
			$received[] = array(
				'type' => $this->condition_factory->get_type( get_class( $tuple['fulfillable'] ) ),
				'comparison_operator' => $tuple['fulfillable']->get_comparison_operator(),
				'value' => $tuple['fulfillable']->get_value(),
			);
		}
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::is_fulfilled
	 */
	public function testIsFulfilledWhenEmpty() {
		$environment = array(  );
		$this->assertTrue( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::is_fulfilled
	 */
	public function testIsFulfilledWithSingleConditionWhenAllConditionsAreFulfilled() {
		$this->subject->when( 'post_type', 'post' );
		$environment = array( 'post_type' => 'post' );
		$this->assertTrue( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::is_fulfilled
	 */
	public function testIsFulfilledWithMultipleConditionsWhenAllConditionsAreFulfilled() {
		$this->subject->when( 'post_type', 'post' );
		$this->subject->when( 'post_id', 1 );
		$environment = array( 'post_type' => 'post', 'post_id' => 1 );
		$this->assertTrue( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::is_fulfilled
	 */
	public function testIsFulfilledWithNestedConditionsWhenAllConditionsAreFulfilled() {
		$this->subject->when( 'post_type', 'post' );
		$this->subject->when( function( $c ) {
			$c->when( 'post_id', 1 );
		} );
		$environment = array( 'post_type' => 'post', 'post_id' => 1 );
		$this->assertTrue( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::is_fulfilled
	 */
	public function testIsFulfilledWhenOneConditionIsFulfilled() {
		$this->subject->when( 'post_id', 1 );
		$this->subject->or_when( 'post_type', 'post' );
		$environment = array( 'post_id' => 1, 'post_type' => 'page' );
		$this->assertTrue( $this->subject->is_fulfilled( $environment ) );
	}

	/**
	 * @covers ::is_fulfilled
	 */
	public function testIsNotFulfilledWhenNoConditionsAreFulfilled() {
		$this->subject->when( 'post_id', 1 );
		$this->subject->or_when( 'post_type', 'post' );
		$environment = array( 'post_id' => 0, 'post_type' => 'page' );
		$this->assertFalse( $this->subject->is_fulfilled( $environment ) );
	}
}