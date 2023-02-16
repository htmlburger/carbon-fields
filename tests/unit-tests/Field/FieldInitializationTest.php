<?php

use Carbon_Fields\Field\Field;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * @group field
 * @coversDefaultClass Carbon_Fields\Field\Field
 */
class FieldInitializationTest extends WP_UnitTestCase {
	public $fieldName;
	
	public function setUp(): void {
		$this->fieldName = '_color';
	}

	public function tearDown(): void {
		// This is required just to overwrite code in WP_UnitTestCase
		// that accesses the database
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 * @covers ::get_name
	 * @covers ::set_name
	 */
	public function testMakeTextFields() {
		$field = Field::make( 'text', $this->fieldName );
		$this->assertSame( $this->fieldName, $field->get_name() );
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	public function testExceptionIsThrownWhenFieldTypeIsEmpty() {
		$field = Field::make( '', $this->fieldName );
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	public function testExceptionIsThrownWhenFieldTypeIsInvalid() {
		$field = Field::make( '__no_such_field_type__', $this->fieldName );
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 */
	public function testBrokenFieldIsReturnedWhenDebugIsDisabledAndFieldIsInvalid() {
		$old_val = Incorrect_Syntax_Exception::$throw_errors;

		Incorrect_Syntax_Exception::$throw_errors = false;
		$field = Field::make( '__no_such_field_type__', $this->fieldName );
		$this->assertInstanceOf( 'Carbon_Fields\Field\Broken_Field', $field );

		Incorrect_Syntax_Exception::$throw_errors = $old_val;
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	public function testDashIsNotAllowedInFieldType() {
		$field = Field::make( 'gravity-form', $this->fieldName );
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 */
	public function testFieldTypeCaseIsIgnored() {
		$field = Field::make( 'Text', $this->fieldName );
		$this->assertInstanceOf( 'Carbon_Fields\Field\Text_Field', $field );
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 */
	public function testSpacesInFieldTypeAreSupported() {
		$field = Field::make( 'Gravity Form', $this->fieldName );
		$this->assertTrue( true ); // no exception ... 
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 * @covers ::get_name
	 * @covers ::set_name
	 */
	public function testFieldNameIsPrependedWithUnderscoreAutomatically() {
		$field = Field::make( 'text', 'something' );
		$this->assertSame( '_something', $field->get_name() );
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 * @covers ::get_name
	 * @covers ::set_name
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	public function testFieldNameThrowsExceptionOnUpperCaseValues() {
		$field = Field::make( 'text', 'UPPER_CASE_FIELD_NAME' );
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 * @covers ::set_name
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	public function testFieldNameThrowsExceptionOnNonEnglishWordCharacters() {
		$field = Field::make( 'text', '## Even a weirder | name! :)' );
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 * @covers ::get_name
	 * @covers ::set_name
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	public function testFieldNameThrowsExceptionOnUnicodeValues() {
		$field = Field::make( 'text', 'bulgarian; България' );
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 */
	public function testLabelIsSetupProperlyWhenPassedExplicitly() {
		$field = Field::make( 'text', 'color', "Field Color" );
		$this->assertSame( "Field Color", $field->get_label() );

		// Make sure that non-UTF8 labels are properlly supported
		$field = Field::make( 'text', 'color', "Цвят" );
		$this->assertSame( "Цвят", $field->get_label() );

		// Derive the label in proper case
		$field = Field::make( 'text', 'color_of_something' );
		$this->assertSame( "Color Of Something", $field->get_label() );
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 */
	public function testLabelIsDerivedProperly() {
		$field = Field::make( 'text', 'field_color' );
		$this->assertSame( "Field Color", $field->get_label() );

		$field = Field::make( 'text', '_field_color' );
		$this->assertSame( "Field Color", $field->get_label() );

		$field = Field::make( 'text', 'crb_field_color' );
		$this->assertSame( "Field Color", $field->get_label() );

		$field = Field::make('text', '_crb_field_color' );
		$this->assertSame( "Field Color", $field->get_label() );
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 * @covers ::set_name
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage can only contain lowercase alphanumeric characters
	 */
	public function testFieldNameCantBeEmpty() {
		Field::make( 'text', '' );
	}

	/**
	 * @covers ::make
	 * @covers ::factory
	 * @covers ::__construct
	 * @covers ::set_name
	 *
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage can only contain lowercase alphanumeric characters
	 */
	public function testFieldNameCantContainHiddenlySupportedBrackets() {
		Field::make( 'text', 'test_field_with_[brackets]' );
	}
	
}