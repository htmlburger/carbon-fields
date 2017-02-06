<?php

use \Mockery as M;

/**
 * @group field
 */
class FieldLoadSaveTest extends WP_UnitTestCase {

	public function setUp() {
		$this->field = M::mock( '\Carbon_Fields\Field\Field' )->makePartial();
		$this->field->set_base_name( 'carbon_field' );
		$this->field->set_name( 'carbon_field' );
		$this->field->set_label( 'Carbon Field' );

		$this->datastore = M::mock( '\Carbon_Fields\Datastore\Datastore_Interface' );
	}

	public function tearDown() {
		M::close();
		unset( $this->field );
	}

	/**
	 * @covers \Carbon_Fields\Field\Field::set_datastore
	 * @covers \Carbon_Fields\Field\Field::get_datastore
	 */
	public function testGetDatastoreReturnsPreviouslySetDatastore() {
		$this->field->set_datastore( $this->datastore );
		$this->assertSame( $this->datastore, $this->field->get_datastore() );
	}

	/**
	 * @covers \Carbon_Fields\Field\Field::set_default_value
	 * @covers \Carbon_Fields\Field\Field::get_default_value
	 */
	public function testGetDefaultValueReturnsPreviouslySetDefaultValue() {
		$expected = 'test default value';
		$this->field->set_default_value( $expected );
		$this->assertSame( $expected, $this->field->get_default_value() );
	}

	/**
	 * @covers \Carbon_Fields\Field\Field::set_value
	 * @covers \Carbon_Fields\Field\Field::get_value
	 */
	public function testGetValueReturnsPreviouslySetValue() {
		$expected = 'test value';
		$this->field->set_value( $expected );
		$this->assertSame( $expected, $this->field->get_value() );
	}

	/**
	 * @covers \Carbon_Fields\Field\Field::load
	 * @covers \Carbon_Fields\Field\Field::get_value
	 */
	public function testLoadReturnsDefaultValue() {
		$expected = 'test default value';
		$this->datastore->shouldReceive( 'load' )->once();

		$this->field->set_datastore( $this->datastore );
		$this->field->set_default_value( $expected );
		$this->assertNotSame( $expected, $this->field->get_value() );
		$this->field->load();
		$this->assertSame( $expected, $this->field->get_value() );
	}

	/**
	 * @covers \Carbon_Fields\Field\Field::load
	 * @covers \Carbon_Fields\Field\Field::get_value
	 */
	public function testLoadReturnsValueFromDatastore() {
		$expected = 'test value from datastore';
		$this->datastore->shouldReceive( 'load' )->andReturn( array(
			$this->field->get_base_name() => array(
				'value_set'=>array(
					array(
						'value'=>$expected,
					),
				),
			),
		) )->once();

		$this->field->set_datastore( $this->datastore );
		$this->field->load();
		$this->assertSame( $expected, $this->field->get_value() );
	}
}