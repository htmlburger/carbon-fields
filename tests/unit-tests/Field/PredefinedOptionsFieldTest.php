<?php

use Mockery as M;
use Carbon_Fields\Field\Predefined_Options_Field;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * @group field
 * @coversDefaultClass Carbon_Fields\Field\Predefined_Options_Field
 */
class PredefinedOptionsFieldTest extends WP_UnitTestCase {
	public $subject;

	public function setUp(): void {
		$this->subject = M::mock( 'Carbon_Fields\Field\Predefined_Options_Field' )->makePartial();
	}

	public function tearDown(): void {
		M::close();
		unset( $this->subject );
	}

	/**
	 * @covers ::set_options
	 * @covers ::get_options
	 */
	public function testSetAndGetOptions() {
		$expected = array(1, 2, 3);
		$this->subject->set_options( $expected );
		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * @covers ::set_options
	 * @covers ::get_options
	 */
	public function testSetOptionsResetsPreviousOnes() {
		$this->subject->set_options( array(1, 2, 3) );

		$expected = array(4, 5, 6);
		$this->subject->set_options( $expected );

		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * @covers ::set_options
	 * @covers ::get_options
	 */
	public function testSetEmptyArrayWillDeleteExistingOptions() {
		$this->subject->set_options( array(1, 2, 3) );

		$expected = array();
		$this->subject->set_options( $expected );

		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * @covers ::set_options
	 * @covers ::get_options
	 */
	public function testSetOptionsCallable() {
		$expected = array(1, 2, 3);
		$callback = function() use ( $expected ) {
			return $expected;
		};

		$this->subject->set_options( $callback );

		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * @covers ::set_options
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays and callbacks are allowed in the <code>set_options()</code> method.
	 */
	public function testSetOptionsString() {
		$this->subject->set_options( 'foo' );
	}

	/**
	 * @covers ::set_options
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays and callbacks are allowed in the <code>set_options()</code> method.
	 */
	public function testSetOptionsInteger() {
		$this->subject->set_options( 123 );
	}

	/**
	 * @covers ::set_options
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays and callbacks are allowed in the <code>set_options()</code> method.
	 */
	public function testSetOptionsBool() {
		$this->subject->set_options( false );
	}

	/**
	 * @covers ::set_options
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays and callbacks are allowed in the <code>set_options()</code> method.
	 */
	public function testSetOptionsObject() {
		$this->subject->set_options( M::mock( 'stdClass' ) );
	}

	/**
	 * @covers ::add_options
	 * @covers ::get_options
	 */
	public function testAddOptionsArray() {
		$expected = array('foo', 'bar');

		$this->subject->add_options( $expected );

		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * @covers ::add_options
	 * @covers ::get_options
	 */
	public function testAddOptionsArrayPreservesOtherOptions() {
		$options_1 = array( 'foo', 'bar' );
		$options_2 = array( 'foobar', 'barfoo' );
		$expected = array( 'foo', 'bar', 'foobar', 'barfoo' );

		$this->subject->add_options( $options_1 );
		$this->subject->add_options( $options_2 );

		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * @covers ::add_options
	 * @covers ::get_options
	 */
	public function testAddOptionsArrayWithAssociativeArray() {
		$options_1 = array( 'foo' => 'bar', 'bar' => 'foo' );
		$options_2 = array( 'foobar' => 'barfoo', 'bar' => 'barbar' );
		$expected = array( 'foo' => 'bar', 'bar' => 'foo', 'foobar' => 'barfoo', 'bar' => 'barbar' );

		$this->subject->add_options( $options_1 );
		$this->subject->add_options( $options_2 );

		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * @covers ::add_options
	 * @covers ::get_options
	 */
	public function testAddOptionsArraysWithNumericAssociativeArrays() {
		$options_1 = array( 3 => 'Option 1' );
		$options_2 = array( 9 => 'Option 2' );
		$expected = array( 3 => 'Option 1', 9 => 'Option 2' );

		$this->subject->add_options( $options_1 );
		$this->subject->add_options( $options_2 );

		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * @covers ::add_options
	 * @covers ::get_options
	 */
	public function testAddOptionsArraysWithMixedAssociativeArrays() {
		$options_1 = array( 0 => 'Option 1' );
		$options_2 = array( 'foo' => 'Option 2' );
		$options_3 = array( 1 => 'Option 3' );
		$expected = array( 0 => 'Option 1', 'foo' => 'Option 2', 1 => 'Option 3' );

		$this->subject->add_options( $options_1 );
		$this->subject->add_options( $options_2 );
		$this->subject->add_options( $options_3 );

		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * Possibly a duplicate of other tests but kept for its readability
	 *
	 * @covers ::add_options
	 * @covers ::get_options
	 */
	public function testAddOptionsArraysReindex() {
		$options_1 = array( 0 => 'Option 1' );
		$options_2 = array( 0 => 'Option 2' );
		$expected = array( 0 => 'Option 1', 1 => 'Option 2' );

		$this->subject->add_options( $options_1 );
		$this->subject->add_options( $options_2 );

		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * @covers ::add_options
	 * @covers ::get_options
	 */
	public function testAddOptionsArraysAppend() {
		$options_1 = array( 0 => 'Option 1', 1 => 'Option 2' );
		$options_2 = array( 9 => 'Option 3' );
		$expected = array( 0 => 'Option 1', 1 => 'Option 2', 9 => 'Option 3' );

		$this->subject->add_options( $options_1 );
		$this->subject->add_options( $options_2 );

		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * @covers ::add_options
	 * @covers ::get_options
	 */
	public function testAddOptionsArraysOverwrite() {
		$options_1 = array( 0 => 'Option 1' );
		$options_2 = array( 9 => 'Option 2' );
		$options_3 = array( 0 => 'Option 3' );
		$expected = array( 0 => 'Option 3', 9 => 'Option 2' );

		$this->subject->add_options( $options_1 );
		$this->subject->add_options( $options_2 );
		$this->subject->add_options( $options_3 );

		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * @covers ::set_options
	 * @covers ::add_options
	 * @covers ::get_options
	 */
	public function testAddOptionsArrayAfterCallable() {
		$base = array( 1, 2, 3 );
		$added = array( 4, 5, 6 );
		$expected = array( 1, 2, 3, 4, 5, 6 );

		$this->subject->set_options( function() use ( $base ) {
			return $base;
		} );
		$this->subject->add_options( $added );
		$this->assertSame( $expected, $this->subject->get_options() );
	}

	/**
	 * @covers ::add_options
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays and callbacks are allowed in the <code>add_options()</code> method.
	 */
	public function testAddOptionsString() {
		$this->subject->add_options( 'foo' );
	}

	/**
	 * @covers ::add_options
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays and callbacks are allowed in the <code>add_options()</code> method.
	 */
	public function testAddOptionsInteger() {
		$this->subject->add_options( 123 );
	}

	/**
	 * @covers ::add_options
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays and callbacks are allowed in the <code>add_options()</code> method.
	 */
	public function testAddOptionsBool() {
		$this->subject->add_options( false );
	}

	/**
	 * @covers ::add_options
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays and callbacks are allowed in the <code>add_options()</code> method.
	 */
	public function testAddOptionsObject() {
		$this->subject->add_options( M::mock( 'stdClass' ) );
	}

}