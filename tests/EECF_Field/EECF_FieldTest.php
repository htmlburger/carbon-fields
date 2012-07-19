<?php 

class EECF_FieldTest extends PHPUnit_Framework_TestCase {
    public function testFactory() {
        $field = EECF_Field::factory('text', 'label');

        $this->assertInstanceOf('EECF_Field_Text', $field);

        try {
            EECF_Field::factory('made_up_name', 'label');
        } catch (EECF_Exception $e) {
            return;
        }

        $this->fail('Invalid field names are expected to raise exception');
    }

    /**
	   * @depends testFactory
     * @dataProvider nameProvider
     */
    public function testLabelFromName($name, $expected_name, $expected_label) {
        $field = EECF_Field::factory('text', $name);

        $this->assertEquals($field->get_name(), $expected_name);
        $this->assertEquals($field->get_label(), $expected_label);
    }

    /**
	 * @depends testFactory
     */
    public function testEscapedQuotes() {
    	// correct
        $field = EECF_Field::factory('text', 'fancy_name');

        // set_value must not alter the data
        $field->set_value('Lorem \\\' ipsum');

        $this->assertEquals($field->get_value(), 'Lorem \\\' ipsum');

        // set_value must strip slashes
        $field->set_value_from_input(array($field->get_name() => 'Lorem \\\' ipsum'));

        $this->assertEquals($field->get_value(), 'Lorem \' ipsum');
    }

    public function nameProvider() {
        return array(
          array('fancy_name', '_fancy_name', 'Fancy Name'),
          array('fancy name', '_fancy_name', 'Fancy Name'),
          array('_fancy_name', '_fancy_name', 'Fancy Name'),
          array('_fancy name', '_fancy_name', 'Fancy Name'),
          array('Fancy   Name', '_fancy_name', 'Fancy Name'),
          array('fancy name 0', '_fancy_name_0', 'Fancy Name 0'),
          array('Fancy   Name  0', '_fancy_name_0', 'Fancy Name 0'),
        );
    }
}


