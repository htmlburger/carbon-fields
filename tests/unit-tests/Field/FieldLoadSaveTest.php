<?php

use Mockery as M;
use Carbon_Fields\Value_Set\Value_Set;

/**
 * @group field
 * @coversDefaultClass Carbon_Fields\Field\Field
 */
class FieldLoadSaveTest extends WP_UnitTestCase {
	public $subject;
	public $datastore;

	public function setUp(): void {
		$this->subject = M::mock( 'Carbon_Fields\Field\Field' )->makePartial();
		$this->subject->set_base_name( 'carbon_field' );
		$this->subject->set_name( 'carbon_field' );
		$this->subject->set_label( 'Carbon Field' );

		$this->datastore = M::mock( 'Carbon_Fields\Datastore\Datastore_Interface' );
	}

	public function tearDown(): void {
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
	public function testLoadAppliesDefaultValueWhenDatastoreReturnsNull() {
		$expected = 'test default value';
		$this->datastore->shouldReceive( 'load' )->andReturn( null )->once();

		$this->subject->set_datastore( $this->datastore );
		$this->subject->set_default_value( $expected );
		$this->assertSame( $expected, $this->subject->get_value() );
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
			array(
				Value_Set::VALUE_PROPERTY => $expected,
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
		$this->subject->shouldReceive( 'delete' )->once();
		$this->subject->set_datastore( $this->datastore );
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