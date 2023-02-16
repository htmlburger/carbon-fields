<?php
/**
 * @group field
 * @coversDefaultClass Carbon_Fields\Field\Field
 */
class FieldGetSetId extends WP_UnitTestCase {
	public $field;

	public function setUp(): void {
		$this->field = $this->getMockForAbstractClass( 'Carbon_Fields\Field\Field', array(), '', false );
	}

	public function tearDown(): void {
		unset( $this->field );
	}

	/**
	 * @covers ::get_id
	 * @covers ::set_id
	 */
	public function testGetSetId() {
		$expected = mt_rand();
		$this->field->set_id( $expected );
		$this->assertSame( $expected, $this->field->get_id() );
	}
}