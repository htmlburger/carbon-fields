<?php 

class EECF_Container_CustomFieldsTest extends WP_UnitTestCase {
    public $plugin_slug = 'ecf';

    function setUp() {
        parent::setUp();
    }

    public function testValidSaveRequest() {
        $container = new EECF_Container_CustomFields('Test Container');
        $this->assertFalse( $container->is_valid_save() );

        // Invalid Nonce
        $_REQUEST[$container->get_nonce_name()] = $_POST[$container->get_nonce_name()] = 'foo';
        $this->assertFalse( $container->is_valid_save() );

        // Valid Nonce
        $_REQUEST[$container->get_nonce_name()] = $_POST[$container->get_nonce_name()] = wp_create_nonce($container->get_nonce_name());
        $this->assertTrue( $container->is_valid_save() );
        $this->assertTrue( $container->is_valid_save() );

        $container->detach();

        // Autosave
        // TODO: this case cannot be tested becuase it requires the definition of a constant - DOING_AUTOSAVE
    }

    public function testSaveSimpleField() {
        global $wpdb;
        // prepare container
        $container = new EECF_Container_CustomFields('Test Container');
        $container->setup();
        $container->add_fields(array(
            EECF_Field::factory('text', 'test_field'),
        ));

        // Prepare POST
        $_POST['_test_field'] = 'Lorem Ipsum';

        // execute
        $container->save(123);

        // check
        $fields = $container->get_fields();

        $db_value = $wpdb->get_results('
            SELECT meta_value FROM ' . $wpdb->postmeta . '
            WHERE post_id="123" AND meta_key="_test_field"
        ', ARRAY_A);

        $this->assertEquals($fields[0]->get_value(), 'Lorem Ipsum' );
        $this->assertCount(1, $db_value);
        $this->assertArrayHasKey('meta_value', $db_value[0]);
        $this->assertEquals($db_value[0]['meta_value'], 'Lorem Ipsum');
    }

    public function testRegisterEqualFieldNamesForDifferentPostTypes() {
        // prepare container
        $container1 = new EECF_Container_CustomFields('Test Container 1');
        $container1->setup(array(
            'post_type' => 'bar'
        ));
        $container1->add_fields(array(
            EECF_Field::factory('text', 'test_field'),
        ));

        $container2 = new EECF_Container_CustomFields('Test Container 2');
        $container2->setup(array(
            'post_type' => 'foo'
        ));
        $container2->add_fields(array(
            EECF_Field::factory('text', 'test_field'),
        ));
    }

    public function testRegisterEqualFieldNamesForSamePostTypes() {
        // prepare container
        $container1 = new EECF_Container_CustomFields('Test Container 1');
        $container1->setup(array(
            'post_type' => 'bar'
        ));
        $container1->add_fields(array(
            EECF_Field::factory('text', 'test_field'),
        ));

        $container2 = new EECF_Container_CustomFields('Test Container 2');
        $container2->setup(array(
            'post_type' => 'bar'
        ));
        $container2->add_fields(array(
            EECF_Field::factory('text', 'test_field'),
        ));
    }

    public function testSaveRepeaterAndCheckDatabase() {
        global $wpdb;
        // prepare container
        $container = new EECF_Container_CustomFields('Test Container');
        $container->setup();
        $container->add_fields(array(
            EECF_Field::factory('repeater', 'repeater')->add_fields(array(
                EECF_Field::factory('text', 'field1'),
                EECF_Field::factory('text', 'field2'),
            )),
        ));

        // Prepare POST
        $_POST = array(
            '_repeater' => array(
                '0' => array(
                    '_field1' => 'Lorem ipsum',
                    '_field2' => 'Dolor sit amet',
                ),
            ),
        );

        // execute
        $container->save(123);

        // check field
        $db_values = $wpdb->get_results('
            SELECT meta_key, meta_value FROM ' . $wpdb->postmeta . '
            WHERE post_id="123" AND meta_key LIKE "_repeater%"
            ORDER BY meta_key
        ', ARRAY_A);

        $this->assertCount(2, $db_values);
        $this->assertEquals($db_values[0]['meta_key'], '_repeater_field1_0');
        $this->assertEquals($db_values[0]['meta_value'], 'Lorem ipsum');
        $this->assertEquals($db_values[1]['meta_key'], '_repeater_field2_0');
        $this->assertEquals($db_values[1]['meta_value'], 'Dolor sit amet');

        // cleanup
        $container->detach();
    }

    public function testSaveRepeaterAndCheckLoad() {
        global $wpdb;
        // prepare container
        $container = new EECF_Container_CustomFields('Test Container');
        $container->setup();
        $container->add_fields(array(
            EECF_Field::factory('repeater', 'repeater')->add_fields(array(
                EECF_Field::factory('text', 'field1'),
                EECF_Field::factory('text', 'field2'),
            )),
        ));

        // Prepare POST
        $_POST = array(
            '_repeater' => array(
                '0' => array(
                    '_field1' => 'Lorem ipsum',
                    '_field2' => 'Dolor sit amet',
                ),
            ),
        );

        // execute
        $container->save(123);

        // check field
        $fields = $container->get_fields();
        $repeater_field = $fields[0];
        $repeater_field->load();
        $repeater_values = $repeater_field->get_values();

        $this->assertGreaterThanOrEqual(1, count($repeater_values));
        $repeater_values = $repeater_values[0];

        $this->assertEquals($repeater_values[0]->get_value(), 'Lorem ipsum' );
        $this->assertEquals($repeater_values[1]->get_value(), 'Dolor sit amet' );
        $this->assertEquals($repeater_values[0]->get_name(), '_field1' );
        $this->assertEquals($repeater_values[1]->get_name(), '_field2' );

        // cleanup
        $container->detach();
    }
}


