<?php

use Mockery as M;
use Carbon_Fields\Field\Map_Field;
use Carbon_Fields\Value_Set\Value_Set;

/**
 * @group field
 * @coversDefaultClass Carbon_Fields\Field\Map_Field
 */
class MapFieldTest extends WP_UnitTestCase {
	public $subject;
	
	public function setUp(): void {
		$this->subject = M::mock( 'Carbon_Fields\Field\Map_Field' )->makePartial();
	}

	public function tearDown(): void {
		M::close();
		unset( $this->subject );
	}

	/**
	 * @covers ::set_position
	 */
	public function testSetPositionUpdatesDefaultValue() {
		$clean = array(
			Value_Set::VALUE_PROPERTY => '',
			'lat' => 0,
			'lng' => 0,
			'zoom' => 0,
			'address' => '',
		);
		$expected = array(
			Value_Set::VALUE_PROPERTY => '40.346544,-101.645507',
			'lat' => 40.346544,
			'lng' => -101.645507,
			'zoom' => 10,
			'address' => '',
		);

		$this->subject->set_position( $clean['lat'], $clean['lng'], $clean['zoom'] );
		$this->assertSame( $clean, $this->subject->get_default_value() );

		$this->subject->set_position( $expected['lat'], $expected['lng'], $expected['zoom'] );
		$this->assertSame( $expected, $this->subject->get_default_value() );
	}
}
