<?php

use Mockery as M;
use Carbon_Fields\Helper\Color;

/**
 * @group helper
 * @coversDefaultClass Carbon_Fields\Helper\Color
 */
class ColorTest extends WP_UnitTestCase {
	public $rgba_solid;
	public $rgba_transparent;

	public function setUp(): void {
		$this->rgba_solid = array(
			'red' => 17,
			'green' => 34,
			'blue' => 51,
			'alpha' => 1,
		);

		$this->rgba_transparent = array(
			'red' => 17,
			'green' => 34,
			'blue' => 51,
			'alpha' => 0,
		);
	}

	public function tearDown(): void {
		M::close();
	}

	/**
	 * @covers ::hex_to_rgba
	 */
	public function testHexToRgba_ParsesHex() {
		$expected = $this->rgba_solid;
		$hex = '#112233FF';

		$this->assertEquals( $expected, Color::hex_to_rgba( $hex ) );
	}

	/**
	 * @covers ::hex_to_rgba
	 */
	public function testHexToRgba_WithoutAlpha_DefaultsToMaxAlpha() {
		$expected = $this->rgba_solid;
		$without_alpha = '#112233';

		$this->assertEquals( $expected, Color::hex_to_rgba( $without_alpha ) );
	}

	/**
	 * @covers ::hex_to_rgba
	 */
	public function testHexToRgba_WithAlpha_ReadsAlphaValue() {
		$expected = $this->rgba_transparent;
		$transparent = '#11223300';

		$this->assertEquals( $expected, Color::hex_to_rgba( $transparent ) );
	}

	/**
	 * @covers ::hex_to_rgba
	 */
	public function testHexToRgba_IgnoresLeadingNumberSign() {
		$expected = $this->rgba_solid;
		$with_number_sign = '#112233FF';
		$without_number_sign = '112233FF';

		$this->assertEquals( $expected, Color::hex_to_rgba( $with_number_sign ) );
		$this->assertEquals( $expected, Color::hex_to_rgba( $without_number_sign ) );
	}
}
