<?php

use Mockery as M;
use Carbon_Fields\Value_Set\Value_Set as Value_Set;

/**
 * @group field
 * @coversDefaultClass Carbon_Fields\Value_Set\Value_Set
 */
class FieldLoadSaveTest extends WP_UnitTestCase {

	public function setUp() {
		$this->subject = M::mock( '\Carbon_Fields\Field\Field' )->makePartial();
		$this->subject->set_base_name( 'carbon_field' );
		$this->subject->set_name( 'carbon_field' );
		$this->subject->set_label( 'Carbon Field' );

		$this->datastore = M::mock( '\Carbon_Fields\Datastore\Datastore_Interface' );
	}

	public function tearDown() {
		M::close();
		unset( $this->subject );
		unset( $this->datastore );
	}

	/**
	 * @covers ::set_datastore
	 * @covers ::get_datastore
	 */
	public function testGetDatastoreReturnsPreviouslySetDatastore() {
		$this->subject->set_datastore( $this->datastore );
		$this->assertSame( $this->datastore, $this->subject->get_datastore() );
	}

	/**
	 * @covers ::set_default_value
	 * @covers ::get_default_value
	 */
	public function testGetDefaultValueReturnsPreviouslySetDefaultValue() {
		$expected = 'test default value';
		$this->subject->set_default_value( $expected );
		$this->assertSame( $expected, $this->subject->get_default_value() );
	}

	/**
	 * @covers ::set_value
	 * @covers ::get_value
	 */
	public function testGetValueReturnsPreviouslySetValue() {
		$expected = 'test value';
		$this->subject->set_value( $expected );
		$this->assertSame( $expected, $this->subject->get_value() );
	}

	/**
	 * @covers ::load
	 * @covers ::get_value
	 */
	public function testLoadAppliesDefaultValueWhenDatastoreReturnsNoValue() {
		$expected = 'test default value';
		$this->datastore->shouldReceive( 'load' )->andReturn( array() )->once();

		$this->subject->set_datastore( $this->datastore );
		$this->subject->set_default_value( $expected );
		$this->assertSame( null, $this->subject->get_value() );
		$this->subject->load();
		$this->assertSame( $expected, $this->subject->get_value() );
	}

	/**
	 * @covers ::load
	 * @covers ::get_value
	 */
	public function testLoadAppliesTheSameValueWhenDatastoreReturnsValue() {
		$expected = 'test value from datastore';
		$this->datastore->shouldReceive( 'load' )->andReturn( array(
			$this->subject->get_base_name() => array(
				'value_set' => array(
					array(
						'value' => $expected,
					),
				),
			),
		) )->once();

		$this->subject->set_datastore( $this->datastore );
		$this->subject->load();
		$this->assertSame( $expected, $this->subject->get_value() );
	}

	/**
	 * @covers ::save
	 */
	public function testSavePassesFieldToDatastore() {
		$this->datastore->shouldReceive( 'save' )->once();
		$this->subject->set_datastore( $this->datastore );
		$this->subject->save();
		$this->assertTrue( true ); // rely on Mockery expectations to fail the test
	}

	/**
	 * @covers ::save
	 */
	public function testSaveDoesNotCallDeleteForSingleValueValueField() {
		$this->datastore->shouldIgnoreMissing();
		$this->subject->shouldNotReceive( 'delete' );
		$this->subject->set_datastore( $this->datastore );
		$this->subject->set_value_set( new Value_Set( Value_Set::TYPE_SINGLE_VALUE ) );
		$this->subject->save();
		$this->assertTrue( true ); // rely on Mockery expectations to fail the test
	}

	/**
	 * @covers ::save
	 */
	public function testSaveDoesNotCallDeleteForMultiplePropertyValueField() {
		$this->datastore->shouldIgnoreMissing();
		$this->subject->shouldNotReceive( 'delete' );
		$this->subject->set_datastore( $this->datastore );
		$this->subject->set_value_set( new Value_Set( Value_Set::TYPE_MULTIPLE_PROPERTIES ) );
		$this->subject->save();
		$this->assertTrue( true ); // rely on Mockery expectations to fail the test
	}

	/**
	 * @covers ::save
	 */
	public function testSaveCallsDeleteForMultipleValuesValueField() {
		$this->datastore->shouldIgnoreMissing();
		$this->subject->shouldReceive( 'delete' )->once();
		$this->subject->set_datastore( $this->datastore );
		$this->subject->set_value_set( new Value_Set( Value_Set::TYPE_MULTIPLE_VALUES ) );
		$this->subject->save();
		$this->assertTrue( true ); // rely on Mockery expectations to fail the test
	}

	/**
	 * @covers ::save
	 */
	public function testSaveCallsDeleteForValueSetValueField() {
		$this->datastore->shouldIgnoreMissing();
		$this->subject->shouldReceive( 'delete' )->once();
		$this->subject->set_datastore( $this->datastore );
		$this->subject->set_value_set( new Value_Set( Value_Set::TYPE_VALUE_SET ) );
		$this->subject->save();
		$this->assertTrue( true ); // rely on Mockery expectations to fail the test
	}

	/**
	 * @covers ::delete
	 */
	public function testDeletePassesFieldToDatastore() {
		$this->datastore->shouldReceive( 'delete' )->once();
		$this->subject->set_datastore( $this->datastore );
		$this->subject->delete();
		$this->assertTrue( true ); // rely on Mockery expectations to fail the test
	}

	/**
	 * @covers ::set_value_from_input
	 */
	public function testSetValueFromInputTakesValue() {
		$expected = 'test value from input';
		$input = array( '_carbon_field' => $expected );
		$this->subject->set_value_from_input( $input );
		$this->assertSame( $expected, $this->subject->get_value() );
	}

	/**
	 * @covers ::set_value_from_input
	 */
	public function testSetValueFromInputSetsEmptyValueWhenMissingFromInput() {
		$expected = 'test value from input';
		$input = array(  );
		$this->subject->set_value_from_input( $input );
		$this->assertSame( '', $this->subject->get_value() );
	}

	/**
	 * @covers ::get_formatted_value
	 */
	public function testGetFormattedValueReturnsValue() {
		$expected = 'test value from input';
		$this->subject->set_value( $expected );
		$this->assertSame( $expected, $this->subject->get_formatted_value() );
	}

	/**
	 * @covers ::get_formatted_value
	 */
	public function testGetFormattedValueReturnsDefaultValue() {
		$expected = 'test value from input';
		$this->subject->set_default_value( $expected );
		$this->assertSame( $expected, $this->subject->get_formatted_value() );
	}
}