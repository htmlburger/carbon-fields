<?php
use Carbon_Fields\Field\Predefined_Options_Field;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * @group field
 */
class PredefinedOptionsFieldTest extends WP_UnitTestCase {

	public function setUp() {
		$this->field = $this->getMockForAbstractClass('Carbon_Fields\Field\Predefined_Options_Field', array(), '', false);
	}

	public function tearDown() {
		unset( $this->field );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::set_options
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::get_options
	 */
	public function testSetAndGetOptions() {
		$expected = array(1, 2, 3);
		$this->field->set_options( $expected );
		$this->assertSame( $expected, $this->field->get_options() );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::set_options
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::get_options
	 */
	public function testSetOptionsResetsPreviousOnes() {
		$this->field->set_options( array(1, 2, 3) );

		$expected = array(4, 5, 6);
		$this->field->set_options( $expected );

		$this->assertSame( $expected, $this->field->get_options() );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::set_options
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::get_options
	 */
	public function testSetEmptyArrayWillDeleteExistingOptions() {
		$this->field->set_options( array(1, 2, 3) );

		$expected = array();
		$this->field->set_options( $expected );

		$this->assertSame( $expected, $this->field->get_options() );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::set_options
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::get_options
	 */
	public function testSetOptionsCallable() {
		$expected = function() {
			return array(1, 2, 3);
		};
		
		$this->field->set_options( $expected );

		$this->assertSame( $expected, $this->field->get_options() );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::set_options
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays and callbacks are allowed in the <code>set_options()</code> method.
	 */
	public function testSetOptionsString() {
		$this->field->set_options( 'foo' );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::set_options
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays and callbacks are allowed in the <code>set_options()</code> method.
	 */
	public function testSetOptionsInteger() {
		$this->field->set_options( 123 );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::set_options
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays and callbacks are allowed in the <code>set_options()</code> method.
	 */
	public function testSetOptionsBool() {
		$this->field->set_options( false );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::set_options
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays and callbacks are allowed in the <code>set_options()</code> method.
	 */
	public function testSetOptionsObject() {
		$this->field->set_options( $this->getMock('StdClass') );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::add_options
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::get_options
	 */
	public function testAddOptionsArray() {
		$expected = array('foo', 'bar');
		
		$this->field->add_options( $expected );

		$this->assertSame( $expected, $this->field->get_options() );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::add_options
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::get_options
	 */
	public function testAddOptionsArrayPreservesOtherOptions() {
		$options_1 = array('foo', 'bar');
		$options_2 = array('foobar', 'barfoo');
		
		$this->field->add_options( $options_1 );
		$this->field->add_options( $options_2 );

		$expected = array_merge( $options_1, $options_2 );
		$this->assertSame( $expected, $this->field->get_options() );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::add_options
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::get_options
	 */
	public function testAddOptionsArrayWithAssociativeArray() {
		$options_1 = array('foo' => 'bar', 'bar' => 'foo');
		$options_2 = array('foobar' => 'barfoo', 'bar' => 'barbar');
		
		$this->field->add_options( $options_1 );
		$this->field->add_options( $options_2 );

		$expected = array_merge( $options_1, $options_2 );
		$this->assertSame( $expected, $this->field->get_options() );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::set_options
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::add_options
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::get_options
	 */
	public function testAddOptionsArrayAfterCallable() {
		$this->field->set_options( function() {
			return array(1, 2, 3);
		} );

		$expected = array( 4, 5, 6 );
		$this->field->add_options( $expected );

		$this->assertSame( $expected, $this->field->get_options() );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::add_options
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays are allowed in the <code>add_options()</code> method.
	 */
	public function testAddOptionsCallable() {
		$this->field->add_options( function() {
			return array( 1, 2, 3 );
		} );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::add_options
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays are allowed in the <code>add_options()</code> method.
	 */
	public function testAddOptionsString() {
		$this->field->add_options( 'foo' );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::add_options
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays are allowed in the <code>add_options()</code> method.
	 */
	public function testAddOptionsInteger() {
		$this->field->add_options( 123 );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::add_options
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays are allowed in the <code>add_options()</code> method.
	 */
	public function testAddOptionsBool() {
		$this->field->add_options( false );
	}

	/**
	 * @covers Carbon_Fields\Field\Predefined_Options_Field::add_options
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Only arrays are allowed in the <code>add_options()</code> method.
	 */
	public function testAddOptionsObject() {
		$this->field->add_options( $this->getMock('StdClass') );
	}

}