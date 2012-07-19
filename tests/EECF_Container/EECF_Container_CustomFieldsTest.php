<?php 

class EECF_Container_CustomFieldsTest extends PHPUnit_Framework_TestCase {
    public $container;

    function setUp() {
        $_POST = $_REQUEST = array();
        $this->container = new EECF_Container_CustomFields('Test Container');
    }

    public function testValidSaveRequest() {
        $this->assertFalse( $this->container->is_valid_save() );

        // Invalid Nonce
        $_REQUEST[$this->container->get_nonce_name()] = $_POST[$this->container->get_nonce_name()] = 'foo';
        $this->assertFalse( $this->container->is_valid_save() );

        // Valid Nonce
        $_REQUEST[$this->container->get_nonce_name()] = $_POST[$this->container->get_nonce_name()] = wp_create_nonce($this->container->get_nonce_name());
        $this->assertTrue( $this->container->is_valid_save() );
        $this->assertTrue( $this->container->is_valid_save() );

        // Autosave
        // TODO: this case cannot be tested becuase it requires the definition of a constant - DOING_AUTOSAVE
    }

    public function testFoo() {
        $this->assertTrue(true);
    }

    function tearDown() {
        $_POST = $_REQUEST = array();
        
        $this->container->detach();
    }
}


