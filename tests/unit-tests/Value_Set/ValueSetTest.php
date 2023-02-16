<?php

use Mockery as M;
use Carbon_Fields\Value_Set\Value_Set;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * @coversDefaultClass Carbon_Fields\Value_Set\Value_Set
 */
class ValueSetTest extends WP_UnitTestCase {

	public function setUp(): void {
		
	}

	public function tearDown(): void {
		M::close();
	}

	/**
	 * @covers ::__construct
	 * @covers ::get_type
	 */
	public function testGetTypeReturnsCorrectType() {
		$expected = Value_Set::TYPE_MULTIPLE_VALUES;
		$subject = new Value_Set( $expected );
		$this->assertSame( $expected, $subject->get_type() );
	}

	/**
	 * @covers ::__construct
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	public function testInvalidTypeRaisesException() {
		$subject = new Value_Set( 'invalid type' );
	}

	/**
	 * @covers ::keepalive
	 */
	public function testKeepaliveIsFalseForSingleValueTypes() {
		$subject = new Value_Set( Value_Set::TYPE_SINGLE_VALUE );
		$this->assertSame( false, $subject->keepalive() );
	}

	/**
	 * @covers ::keepalive
	 */
	public function testKeepaliveIsTrueForMultiValueTypes() {
		$subject = new Value_Set( Value_Set::TYPE_MULTIPLE_VALUES );
		$this->assertSame( true, $subject->keepalive() );

		$subject = new Value_Set( Value_Set::TYPE_MULTIPLE_PROPERTIES );
		$this->assertSame( true, $subject->keepalive() );

		$subject = new Value_Set( Value_Set::TYPE_VALUE_SET );
		$this->assertSame( true, $subject->keepalive() );
	}

	/**
	 * @covers ::is_empty
	 */
	public function testIsEmptyReturnsTrueForFreshInstances() {
		$subject = new Value_Set();
		$this->assertSame( true, $subject->is_empty() );
	}

	/**
	 * @covers ::is_empty
	 * @covers ::set
	 */
	public function testIsEmptyReturnsTrueForNull() {
		$subject = new Value_Set();
		$subject->set( null );
		$this->assertSame( true, $subject->is_empty() );
	}

	/**
	 * @covers ::is_empty
	 * @covers ::set
	 */
	public function testIsEmptyReturnsTrueForEmptyArray() {
		$subject = new Value_Set();
		$subject->set( array() );
		$this->assertSame( true, $subject->is_empty() );
	}

	/**
	 * @covers ::is_empty
	 * @covers ::set
	 */
	public function testIsEmptyReturnsFalseForEmptyString() {
		$subject = new Value_Set();
		$subject->set( '' );
		$this->assertSame( false, $subject->is_empty() );
	}

	/**
	 * @covers ::is_empty
	 * @covers ::set
	 */
	public function testIsEmptyReturnsFalseForPopulatedArray() {
		$subject = new Value_Set();
		$subject->set( array(
			Value_Set::VALUE_PROPERTY => 'test',
		) );
		$this->assertSame( false, $subject->is_empty() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetReturnsNullForFreshInstances() {
		$subject = new Value_Set();
		$expected = null;
		$this->assertSame( $expected, $subject->get() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetReturnsNullWhenValueIsSetToNull() {
		$subject = new Value_Set();
		$expected = null;
		$subject->set( $expected );
		$this->assertSame( $expected, $subject->get() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetReturnsStringForSingleValueType() {
		$subject = new Value_Set();
		$value = 'expected value';
		$expected = $value;
		$subject->set( array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
			),
		) );
		$this->assertSame( $expected, $subject->get() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetReturnsFlatArrayForMultipleValuesType() {
		$subject = new Value_Set( Value_Set::TYPE_MULTIPLE_VALUES );
		$value = 'expected value';
		$expected = array(
			$value,
		);
		$subject->set( array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
			),
		) );
		$this->assertSame( $expected, $subject->get() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetReturnsAssociativeArrayForMultiplePropertiesType() {
		$subject = new Value_Set( Value_Set::TYPE_MULTIPLE_PROPERTIES );
		$value = 'expected value';
		$expected = array(
			Value_Set::VALUE_PROPERTY => $value,
		);
		$subject->set( array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
			),
		) );
		$this->assertSame( $expected, $subject->get() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetReturnsArrayOfAssociativeArraysForValueSetType() {
		$subject = new Value_Set( Value_Set::TYPE_VALUE_SET );
		$value = 'expected value';
		$expected = array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
			),
		);
		$subject->set( array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
			),
		) );
		$this->assertSame( $expected, $subject->get() );
	}

	/**
	 * @covers ::set
	 * @covers ::get_set
	 */
	public function testGetReturnsRawValueSetForSingleValueType() {
		$subject = new Value_Set();
		$value = 'expected value';
		$expected = array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
			),
		);
		$subject->set( array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
			),
		) );
		$this->assertSame( $expected, $subject->get_set() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetReturnsValueSetWithMissingPropertiesAddedIn() {
		$subject = new Value_Set( Value_Set::TYPE_VALUE_SET, array( 'foo' => '', 'bar' => '' ) );
		$value = '';
		$expected = array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
				'foo' => '',
				'bar' => '',
			),
		);
		$subject->set( array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
			),
		) );
		$this->assertSame( $expected, $subject->get_set() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetReturnsValueSetWithMissingPropertiesAddedInWithDefaultValues() {
		$subject = new Value_Set( Value_Set::TYPE_VALUE_SET, array( 'foo' => 'bar', 'bar' => 'foo' ) );
		$value = '';
		$expected = array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
				'foo' => 'bar',
				'bar' => 'foo',
			),
		);
		$subject->set( array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
			),
		) );
		$this->assertSame( $expected, $subject->get_set() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetReturnsValueSetWithOnlyMissingPropertiesAddedInWithDefaultValues() {
		$subject = new Value_Set( Value_Set::TYPE_VALUE_SET, array( 'foo' => 'bar', 'bar' => 'foo' ) );
		$value = '';
		$expected = array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
				'foo' => '',
				'bar' => 'foo',
			),
			array(
				Value_Set::VALUE_PROPERTY => $value,
				'foo' => 'bar',
				'bar' => '',
			),
		);
		$subject->set( array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
				'foo' => '',
			),
			array(
				Value_Set::VALUE_PROPERTY => $value,
				'bar' => '',
			),
		) );
		$this->assertSame( $expected, $subject->get_set() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetSetReturnsFullSetWhenSetIsPassedAString() {
		$subject = new Value_Set( Value_Set::TYPE_VALUE_SET, array( 'foo' => '', 'bar' => '' ) );
		$value = 'expected value';
		$expected = array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
				'foo' => '',
				'bar' => '',
			),
		);
		$subject->set( $value );
		$this->assertSame( $expected, $subject->get_set() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetSetReturnsFullSetWhenSetIsPassedAFlatArray() {
		$subject = new Value_Set( Value_Set::TYPE_VALUE_SET, array( 'foo' => '', 'bar' => '' ) );
		$value1 = 'value1';
		$value2 = 'value2';
		$expected = array(
			array(
				Value_Set::VALUE_PROPERTY => $value1,
				'foo' => '',
				'bar' => '',
			),
			array(
				Value_Set::VALUE_PROPERTY => $value2,
				'foo' => '',
				'bar' => '',
			),
		);
		$subject->set( array(
			$value1,
			$value2,
		) );
		$this->assertSame( $expected, $subject->get_set() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetSetReturnsFullSetWhenSetIsPassedAnAssociativeArray() {
		$subject = new Value_Set( Value_Set::TYPE_VALUE_SET, array( 'foo' => '', 'bar' => '' ) );
		$value = 'expected value';
		$expected = array(
			array(
				Value_Set::VALUE_PROPERTY => $value,
				'foo' => 'bar',
				'bar' => 'foo',
			),
		);
		$subject->set( array(
			Value_Set::VALUE_PROPERTY => $value,
			'foo' => 'bar',
			'bar' => 'foo',
		) );
		$this->assertSame( $expected, $subject->get_set() );
	}

	/**
	 * @covers ::set
	 * @covers ::get
	 */
	public function testGetSetReturnsFullSetWhenSetIsPassedARawValueSet() {
		$subject = new Value_Set( Value_Set::TYPE_VALUE_SET, array( 'foo' => '', 'bar' => '' ) );
		$value1 = 'value1';
		$value2 = 'value2';
		$expected = array(
			array(
				Value_Set::VALUE_PROPERTY => $value1,
				'foo' => 'bar',
				'bar' => 'foo',
			),
			array(
				Value_Set::VALUE_PROPERTY => $value2,
				'foo' => 'bar',
				'bar' => 'foo',
			),
		);
		$subject->set( $expected );
		$this->assertSame( $expected, $subject->get_set() );
	}
}