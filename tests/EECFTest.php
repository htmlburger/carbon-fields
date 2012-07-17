<?php  

include dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/wp-load.php';

class EECFTest extends PHPUnit_Framework_TestCase {
	public function testInit() {
		 $this->assertTrue(class_exists('EECF_Field'));
		 $this->assertTrue(class_exists('EECF_Field_Repeater'));
		 $this->assertTrue(class_exists('EECF_Field_Groups'));
		 $this->assertTrue(class_exists('EECF_Container'));
		 $this->assertTrue(class_exists('EECF_DataStore'));
	}
}


