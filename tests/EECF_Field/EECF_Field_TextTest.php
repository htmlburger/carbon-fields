<?php 

class EECF_Field_TextTest extends PHPUnit_Framework_TestCase {
    public function testCreate() {
        $field = EECF_Field::factory('text', 'label');

        $this->assertInstanceOf('EECF_Field_Text', $field);
    }

    /**
	 * @depends testCreate
     */
    public function testNameAndLabel() {
    	// correct
        $field = EECF_Field::factory('text', 'fancy_name');

        $this->assertEquals($field->get_name(), '_fancy_name');
        $this->assertEquals($field->get_label(), 'Fancy Name');

        // underscore
        $field = EECF_Field::factory('text', '_fancy_name');

        $this->assertEquals($field->get_name(), '_fancy_name');
        $this->assertEquals($field->get_label(), 'Fancy Name');

        // label instead of name
        $field = EECF_Field::factory('text', 'Fancy   Name');

        $this->assertEquals($field->get_name(), '_fancy_name');
        $this->assertEquals($field->get_label(), 'Fancy Name');
    }

    /**
	 * @depends testCreate
     */
    public function testQuotes() {
    	// correct
        $field = EECF_Field::factory('text', 'fancy_name');

        // set_value must not alter the data
        $field->set_value('Lorem \\\' ipsum');

        $this->assertEquals($field->get_value(), 'Lorem \\\' ipsum');

        // set_value must strip slashes
        $field->set_value_from_input(array($field->get_name() => 'Lorem \\\' ipsum'));

        $this->assertEquals($field->get_value(), 'Lorem \' ipsum');
    }
}


