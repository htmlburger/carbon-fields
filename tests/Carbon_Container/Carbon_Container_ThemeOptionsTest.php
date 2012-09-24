<?php 

class Carbon_Container_ThemeOptionsTest extends WP_UnitTestCase {
    public $plugin_slug = 'carbon-fields';

    function setUp() {
        parent::setUp();
    }

    static function setUpBeforeClass() {
        parent::setUpBeforeClass();

        include_once(ABSPATH . '/wp-admin/includes/plugin.php');
    }

    public function testValidSaveRequest() {
        $container = new Carbon_Container_ThemeOptions('Test Container');

        // Valid request method
        $_SERVER['REQUEST_METHOD'] = 'POST';
        // Valid Nonce
        $_REQUEST[$container->get_nonce_name()] = $_POST[$container->get_nonce_name()] = wp_create_nonce($container->get_nonce_name());

        // check
        $this->assertTrue( $container->is_valid_save() );

        // cleanup
        $container->detach();

        // Autosave
        // TODO: this case cannot be tested becuase it requires the definition of a constant - DOING_AUTOSAVE
    }

    public function testInvalidSaveRequest() {
        $container = new Carbon_Container_ThemeOptions('Test Container');
        $this->assertFalse( $container->is_valid_save() );


        // Invalid request method
        $_SERVER['REQUEST_METHOD'] = 'GET';
        // Valid Nonce
        $_REQUEST[$container->get_nonce_name()] = $_POST[$container->get_nonce_name()] = 'foo';
        
        // check
        $this->assertFalse( $container->is_valid_save() );


        // Valid request method
        $_SERVER['REQUEST_METHOD'] = 'POST';
        // Invalid Nonce
        $_REQUEST[$container->get_nonce_name()] = $_POST[$container->get_nonce_name()] = 'foo';
        
        // check
        $this->assertFalse( $container->is_valid_save() );

        // cleanup
        $container->detach();
    }

    public function testRegisterEqualFieldNames() {
        // prepare container
        $container1 = new Carbon_Container_ThemeOptions('Test Container 1');
        $container1->setup(array(
            'file' => 'bar.php'
        ));
        $container1->add_fields(array(
            Carbon_Field::factory('text', 'test_field'),
        ));

        $container2 = new Carbon_Container_ThemeOptions('Test Container 2');
        $container2->setup(array(
            'file' => 'foo.php'
        ));
        $container2->add_fields(array(
            Carbon_Field::factory('text', 'test_field'),
        ));

        // cleanup
        $container1->detach();
        $container2->detach();
    }

    public function testRegisterEqualPages() {
        // prepare container
        $container1 = new Carbon_Container_ThemeOptions('Test Container 1');
        $container1->setup(array(
            'parent' => '',
            'file' => 'bar.php'
        ));

        $container2 = new Carbon_Container_ThemeOptions('Test Container 2');

        try {
            $container2->setup(array(
                'parent' => '',
                'file' => 'bar.php'
            ));
        } catch (Carbon_Exception $e) {
            // cleanup
            $container1->detach();
            $container2->detach();
            
            return;
        }

        $this->fail('Page name duplication is expected to raise exception');

        // cleanup
        $container1->detach();
        $container2->detach();
    }

    public function testRegisterEqualSubPages() {
        // prepare container
        $container1 = new Carbon_Container_ThemeOptions('Test Container 1');
        $container1->setup(array(
            'file' => 'bar.php'
        ));

        $container2 = new Carbon_Container_ThemeOptions('Test Container 2');

        try {
            $container2->setup(array(
                'file' => 'bar.php'
            ));
        } catch (Carbon_Exception $e) {
            // cleanup
            $container1->detach();
            $container2->detach();
            
            return;
        }

        $this->fail('Sub page name duplication is expected to raise exception');

        // cleanup
        $container1->detach();
        $container2->detach();
    }

    /**
     * @group slow
     */
    public function testSaveSimpleFieldCheckDatabase() {
        global $wpdb;
        // prepare container
        $container = new Carbon_Container_ThemeOptions('Test Container');
        $container->setup(array(
            'file' => 'bar.php'
        ));
        $container->add_fields(array(
            Carbon_Field::factory('text', 'test_field'),
        ));

        // Prepare POST
        $_POST['_test_field'] = 'Lorem Ipsum';

        // execute
        $container->save(123);

        // check
        $db_value = $wpdb->get_results('
            SELECT option_value FROM ' . $wpdb->options . '
            WHERE option_name="_test_field"
        ', ARRAY_A);

        $this->assertCount(1, $db_value);
        $this->assertArrayHasKey('option_value', $db_value[0]);
        $this->assertEquals($db_value[0]['option_value'], 'Lorem Ipsum');

        // cleanup
        $container->detach();
    }

    /**
     * @group slow
     */
    public function testSaveSimpleFieldCheckLoad() {
        global $wpdb;
        // prepare container
        $container = new Carbon_Container_ThemeOptions('Test Container');
        $container->setup(array(
            'file' => 'bar.php'
        ));
        $container->add_fields(array(
            Carbon_Field::factory('text', 'test_field'),
        ));

        // Prepare POST
        $_POST['_test_field'] = 'Lorem Ipsum';

        // execute
        $container->save(123);
        $container->load();

        // check
        $fields = $container->get_fields();

        $this->assertEquals($fields[0]->get_name(), '_test_field');
        $this->assertEquals($fields[0]->get_value(), 'Lorem Ipsum');

        // cleanup
        $container->detach();
    }

    /**
     * @group slow
     */
    public function testSaveCompoundAndCheckDatabase() {
        global $wpdb;

        // prepare container
        $container = new Carbon_Container_ThemeOptions('Test Container');
        $container->setup();
        $container->add_fields(array(
            Carbon_Field::factory('compound', 'compound')->add_fields(array(
                Carbon_Field::factory('text', 'field1'),
                Carbon_Field::factory('text', 'field2'),
            )),
        ));

        // Prepare POST
        $_POST = array(
            '_compound' => array(
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
            SELECT option_name, option_value FROM ' . $wpdb->options . '
            WHERE option_name LIKE "_compound%"
            ORDER BY option_name
        ', ARRAY_A);

        $this->assertCount(2, $db_values);
        $this->assertEquals($db_values[0]['option_name'], '_compound_field1_0');
        $this->assertEquals($db_values[0]['option_value'], 'Lorem ipsum');
        $this->assertEquals($db_values[1]['option_name'], '_compound_field2_0');
        $this->assertEquals($db_values[1]['option_value'], 'Dolor sit amet');

        // cleanup
        $container->detach();
    }

    /**
     * @group slow
     */
    public function testSaveCompoundAndCheckLoad() {
        global $wpdb;
        // prepare container
        $container = new Carbon_Container_ThemeOptions('Test Container');
        $container->setup();
        $container->add_fields(array(
            Carbon_Field::factory('compound', 'compound')->add_fields(array(
                Carbon_Field::factory('text', 'field1'),
                Carbon_Field::factory('text', 'field2'),
            )),
        ));

        // Prepare POST
        $_POST = array(
            '_compound' => array(
                '0' => array(
                    '_field1' => 'Lorem ipsum',
                    '_field2' => 'Dolor sit amet',
                ),
            ),
        );

        // execute
        $container->save(123);
        $container->load();

        // check field
        $fields = $container->get_fields();
        $compound_values = $fields[0]->get_values();

        $this->assertGreaterThanOrEqual(1, count($compound_values));
        $compound_values = $compound_values[0];

        $expected_values = array(
            array('_field1', 'Lorem ipsum'),
            array('_field2', 'Dolor sit amet'),
        );

        $this->assertCount(2, $compound_values);

        foreach ($expected_values as $index => $expected) {
            $this->assertEquals($compound_values[$index]->get_name(), $expected[0]);
            $this->assertEquals($compound_values[$index]->get_value(), $expected[1]);
        }

        // cleanup
        $container->detach();
    }

    /**
     * @group slow
     */
    public function testSaveGroupAndCheckDatabase() {
        global $wpdb;
        
        // prepare container
        $container = new Carbon_Container_ThemeOptions('Test Container');
        $container->setup();
        $container->add_fields(array(
            Carbon_Field::factory('complex', 'group')->add_fields(array(
                    Carbon_Field::factory('text', 'field1'),
                    Carbon_Field::factory('text', 'field2'),
                ), 'group1')->add_fields(array(
                    Carbon_Field::factory('text', 'field3'),
                    Carbon_Field::factory('text', 'field4'),
                ), 'group2'),
        ));

        // Prepare POST
        $_POST = array(
            '_group' => array(
                '0' => array(
                    'group' => '_group1',
                    '_field1' => 'lorem',
                    '_field2' => 'ipsum',
                    '_field3' => 'dolor',
                    '_field4' => 'sit',
                ),
                '1' => array(
                    'group' => '_group2',
                    '_field1' => 'lorem',
                    '_field2' => 'ipsum',
                    '_field3' => 'dolor',
                    '_field4' => 'sit',
                ),
            ),
        );

        // execute
        $container->save(123);

        // check field
        $db_values = $wpdb->get_results('
            SELECT option_name, option_value FROM ' . $wpdb->options . '
            WHERE option_name LIKE "_group%"
            ORDER BY option_name
        ', ARRAY_A);

        $expected_values = array(
            array('_group_group1_field1_0', 'lorem'),
            array('_group_group1_field2_0', 'ipsum'),
            array('_group_group2_field3_1', 'dolor'),
            array('_group_group2_field4_1', 'sit'),
        );

        $this->assertCount(4, $db_values);

        foreach ($expected_values as $index => $expected) {
            $this->assertEquals($db_values[$index]['option_name'], $expected[0]);
            $this->assertEquals($db_values[$index]['option_value'], $expected[1]);
        }

        // cleanup
        $container->detach();
    }

    /**
     * @group slow
     */
    public function testSaveGroupAndCheckLoad() {
        global $wpdb;
        
        // prepare container
        $container = new Carbon_Container_ThemeOptions('Test Container');
        $container->setup();
        $container->add_fields(array(
            Carbon_Field::factory('complex', 'group')->add_fields(array(
                    Carbon_Field::factory('text', 'field1'),
                    Carbon_Field::factory('text', 'field2'),
                ), 'group1')->add_fields(array(
                    Carbon_Field::factory('text', 'field3'),
                    Carbon_Field::factory('text', 'field4'),
                ), 'group2'),
        ));

        // Prepare POST
        $_POST = array(
            '_group' => array(
                '0' => array(
                    'group' => '_group1',
                    '_field1' => 'lorem',
                    '_field2' => 'ipsum',
                    '_field3' => 'dolor',
                    '_field4' => 'sit',
                ),
                '1' => array(
                    'group' => '_group2',
                    '_field1' => 'lorem',
                    '_field2' => 'ipsum',
                    '_field3' => 'dolor',
                    '_field4' => 'sit',
                ),
            ),
        );

        // execute
        $container->save(123);
        $container->load();

        // check field
        $fields = $container->get_fields();
        $group_fields = $fields[0]->get_values();

        $expected_values = array(
            '_group1' => array(
                array('_field1', 'lorem'),
                array('_field2', 'ipsum'),
            ),
            '_group2' => array(
                array('_field3', 'dolor'),
                array('_field4', 'sit'),
            ),
        );

        $index = 0;

        $this->assertCount(2, $group_fields);
        foreach ($expected_values as $exp_group => $exp_group_values) {
            $group_values = $group_fields[$index];
            $this->assertEquals($group_values['type'], $exp_group);
            unset($group_values['type']);

            foreach ($exp_group_values as $subindex => $expected) {
                $this->assertEquals($group_values[$subindex]->get_name(), $expected[0]);
                $this->assertEquals($group_values[$subindex]->get_value(), $expected[1]);
            }
            $index++;
        }

        // cleanup
        $container->detach();
    }
}


