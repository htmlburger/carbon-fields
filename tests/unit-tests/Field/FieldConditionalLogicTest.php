<?php

use Carbon_Fields\Field\Field;

/**
 * @coversDefaultClass Carbon_Fields\Field\Field
 */
class FieldConditionalLogicTest extends WP_UnitTestCase {
	private $field;

	public function setUp(): void {
		$this->field = Field::make( 'text', 'color' );
	}

	public function tearDown(): void {
		unset( $this->field );
	}

	/**
	 * @covers ::set_conditional_logic
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage should be an array
	 */	
	public function testErrorIsThrownWhenCondLogicIsNotArray() {
		$this->field->set_conditional_logic( 'this should actually be array' );
	}

	/**
	 * @covers ::set_conditional_logic
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */	
	public function testErrorIsThrownWhenFlatArrayIsProvided() {
		$this->field->set_conditional_logic( array(
			'field' => 'is_product',
			'value' => 'yes',
		) );
	}

	/**
	 * Private helper method for brevity
	 */
	public function verify_cond_logic( $user_defined_cond_logic, $expected_parsed_cond_logic ) {
		$actual_parsed_cond_logic = $this->field
			->set_conditional_logic( $user_defined_cond_logic )
			->get_conditional_logic();

		$this->assertEquals(
			$expected_parsed_cond_logic,
			$actual_parsed_cond_logic
		);
	}

	/**
	 * @covers ::set_conditional_logic
	 * @covers ::get_conditional_logic
	 */
	public function testBasicCondLogic() {
		$user_defined_cond_logic = array(
			array(
				'field' => 'is_product',
				'value' => 'yes',
			)
		);

		$expected_parsed_cond_logic = array(
			'relation' => 'AND',
			'rules' => array(
				array(
					'field' => 'is_product',
					'value' => 'yes',
					'compare' => '=',
				)
			)
		);
		$this->verify_cond_logic(
			$user_defined_cond_logic,
			$expected_parsed_cond_logic
		);
	}

	/**
	 * @covers ::set_conditional_logic
	 * @covers ::get_conditional_logic
	 */
	public function testValueDefaultsToEmptyString() {
		$user_defined_cond_logic = array(
			array(
				'field' => 'is_product',
				'compare' => '!=',
			)
		);

		$expected_parsed_cond_logic = array(
			'relation' => 'AND',
			'rules' => array(
				array(
					'field' => 'is_product',
					'value' => '',
					'compare' => '!=',
				)
			)
		);

		$this->verify_cond_logic(
			$user_defined_cond_logic,
			$expected_parsed_cond_logic
		);
	}

	/**
	 * @covers ::set_conditional_logic
	 * @covers ::get_conditional_logic
	 */
	public function testRelationOperatorIsProvidedInLowercase() {
		$user_defined_cond_logic = array(
			'relation' => 'or',
			array(
				'field' => 'is_product',
				'value' => 'yes',
			)
		);

		$expected_parsed_cond_logic = array(
			'relation' => 'OR',
			'rules' => array(
				array(
					'field' => 'is_product',
					'value' => 'yes',
					'compare' => '=',
				)
			)
		);
		$this->verify_cond_logic(
			$user_defined_cond_logic,
			$expected_parsed_cond_logic
		);

	}

	/**
	 * @covers ::set_conditional_logic
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage Invalid relation
	 */
	public function testBadRelationOperatorThrowsError() {
		$this->field->set_conditional_logic( array(
			'relation' => 'maybe',
			array(
				'field' => 'is_product',
				'value' => 'yes',
			)
		) );
	}

	/**
	 * @covers ::set_conditional_logic
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage compare operator
	 */
	public function testBadCompareOperatorThrowsError() {
		$this->field->set_conditional_logic( array(
			array(
				'field' => 'is_product',
				'value' => 'yes',
				'compare' => '!==' // There is no `!==` operator
			)
		) );
	}

	/**
	 * @covers ::set_conditional_logic
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 * @expectedExceptionMessage An array is expected
	 */
	public function testInCompareOperatorRequiresArrayAsValue() {
		$this->field->set_conditional_logic( array(
			array(
				'field' => 'is_product',
				'value' => 'yes',
				'compare' => 'IN'
			)
		) );
	}
}