<?php
use Carbon_Fields\Field\Field;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;
/**
 * @group field
 */
class FieldFactoryTest extends WP_UnitTestCase {
	function setup() {
		$this->fieldName = '_color';
	}

	function tearDown() {
		// This is required just to overwrite code in WP_UnitTestCase
		// that accesses the database
	}

	public function testMakeTextFields() {
		$field = Field::make('text', $this->fieldName);
		$this->assertEquals($this->fieldName, $field->get_name());
	}

	/**
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	function testExceptionIsThrownWhenFieldTypeIsInvalid() {
		$field = Field::make('__no_such_field_type__', $this->fieldName);
	}

	public function testBrokenFieldIsReturnedWhenDebugIsDisabledAndFieldIsInvalid() {
		$old_val = Incorrect_Syntax_Exception::$throw_errors;

		Incorrect_Syntax_Exception::$throw_errors = false;
		$field = Field::make('__no_such_field_type__', $this->fieldName);
		$this->assertInstanceOf('Carbon_Fields\Field\Broken_Field', $field);

		Incorrect_Syntax_Exception::$throw_errors = $old_val;
	}

	/**
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	public function testDashIsNotAllowedInFieldType() {
		$field = Field::make('choose-sidebar', $this->fieldName);
	}

	public function testFieldTypeCaseIsIgnored() {
		$field = Field::make('Text', $this->fieldName);
	}

	public function testSpacesInFieldTypeAreSupported() {
		$field = Field::make('Choose Sidebar', $this->fieldName);
	}


}