<?php
use Carbon_Fields\Field\Field;

/**
 * @group field
 */
class FieldConditionalLogicTest extends WP_UnitTestCase {
	private $field;

	function setup() {
		$this->field = Field::make('text', 'color');
	}

	function tearDown() {
		unset($this->field);
	}

	/**
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage should be an array
	 */	
	function testErrorIsThrownWhenCondLogicIsNotArray() {
		$this->field->set_conditional_logic("this should actually be array");
	}

	function testBasicCondLogic() {
		$raw_conditional_logic = [
			[
				'field' => 'is_product',
				'value' => 'yes',
			]
		];

		$expected_cond_logic = [
			'relation' => 'AND',
			'rules' => [
				[
					'field' => 'is_product',
					'value' => 'yes',
					'compare' => '=',
				]
			]
		];

		$actual_cond_logic = $this->field
			->set_conditional_logic($raw_conditional_logic)
			->get_conditional_logic();

		$this->assertEquals(
			$expected_cond_logic,
			$actual_cond_logic
		);
	}


}