<?php
/**
 * @group field
 */
class FieldGetSetId extends WP_UnitTestCase {

	public function setUp() {
		$this->field = $this->getMockForAbstractClass('Carbon_Fields\Field\Field', array(), '', false);
	}

	public function tearDown() {
		unset( $this->field );
	}

	/**
	 * @covers Carbon_Fields\Field\Field::get_id
	 * @covers Carbon_Fields\Field\Field::set_id
	 */
	public function testGetSetId() {
		$expected = mt_rand();
		$this->field->set_id( $expected );
		$this->assertSame( $expected, $this->field->get_id() );
	}

}