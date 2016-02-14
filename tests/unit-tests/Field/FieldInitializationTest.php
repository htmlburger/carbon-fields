<?php
use Carbon_Fields\Field\Field;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class FieldInitializationTest extends WP_UnitTestCase {
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
		$this->assertEquals($this->fieldName, $field->get_name());
	}

	public function testFieldTypeCaseIsIgnored() {
		$field = Field::make('Text', $this->fieldName);
	}

	public function testSpacesInFieldTypeAreSupported() {
		$field = Field::make('Choose Sidebar', $this->fieldName);
		$this->assertTrue(true); // no exception ... 
	}

	public function testFieldNameIsPrependedWithUnderscoreAutomatically() {
		$field = Field::make('text', 'something');
		$this->assertEquals('_something', $field->get_name());
	}

	public function testFieldNameAutomaticallyConvertsNonAlphanumericCharactersToUnderscores() {
		$field = Field::make('text', 'This is a strange name');
		$this->assertEquals('_this_is_a_strange_name', $field->get_name());
	}
	public function testFieldNameRemovesSpaces() {
		// XXX: Is this really expected? 
		$field = Field::make('text', '## Even a weirder name! :)');
		$this->assertEquals('_##_even_a_weirder_name!_:)', $field->get_name());
	}

	public function testNonAsciiFieldNamesAreHandledProperly() {
		// This text includes a capital cyrillic letter ... it actually assures that
		// field names in non-english are converted to lowercase
		$field = Field::make('text', 'bulgarian: България');
		$this->assertEquals('_bulgarian:_българия', $field->get_name());
	}

	/**
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Forbidden character
	 */
	public function testSlashesInFieldNamesAreNotAllowed() {
		$field = Field::make('text', 'something-anything');
	}

	public function testLabelIsSetupProperlyWhenPassedExplicitly() {
		$field = Field::make('text', 'color', "Field Color");
		$this->assertEquals("Field Color", $field->get_label());

		// Make sure that non-UTF8 labels are properlly supported
		$field = Field::make('text', 'color', "Цвят");
		$this->assertEquals("Цвят", $field->get_label());

		// Derive the label in proper case
		$field = Field::make('text', 'цвят_на_нещо');
		$this->assertEquals("Цвят На Нещо", $field->get_label());
	}

	public function testLabelIsDerivedProperly() {
		$field = Field::make('text', 'field_color');
		$this->assertEquals("Field Color", $field->get_label());

		$field = Field::make('text', '_field_color');
		$this->assertEquals("Field Color", $field->get_label());

		$field = Field::make('text', '_crb_field_color');
		$this->assertEquals("Field Color", $field->get_label());
	}

	/*
	public function test () {
		$field = Field::make('text', '');
	}
	*/
	
}