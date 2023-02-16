<?php

use Mockery as M;
use Carbon_Fields\Field\Color_Field;
use Carbon_Fields\Value_Set\Value_Set;

/**
 * @group field
 * @coversDefaultClass Carbon_Fields\Field\Color_Field
 */
class ColorFieldTest extends WP_UnitTestCase {
	public $subject;
	
	public function setUp(): void {
		$this->subject = M::mock( 'Carbon_Fields\Field\Color_Field' )->makePartial();
	}

	public function tearDown(): void {
		M::close();
		unset( $this->subject );
	}

	/**
	 * @covers ::get_palette
	 * @covers ::set_palette
	 */
	public function testSetPaletteUpdatesPalette() {
		$expected1 = array( '#FF0000' );
		$expected2 = array( '#00FF00' );

		$this->subject->set_palette( $expected1 );
		$this->assertSame( $expected1, $this->subject->get_palette() );

		$this->subject->set_palette( $expected2 );
		$this->assertSame( $expected2, $this->subject->get_palette() );
	}

	/**
	 * @covers ::get_alpha_enabled
	 * @covers ::set_alpha_enabled
	 */
	public function testSetAlphaEnabledUpdatesAlphaEnabled() {
		$expected1 = false;
		$expected2 = true;

		$this->assertSame( $expected1, $this->subject->get_alpha_enabled() );
		$this->subject->set_alpha_enabled( $expected2 );
		$this->assertSame( $expected2, $this->subject->get_alpha_enabled() );
	}
}
